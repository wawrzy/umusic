// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';

import { getRoom } from '../../actions/room/getRoom';
import { getUsers } from '../../actions/users/users';
import Search from '../../components/Search/Search';
import MenuList from './MenuList';
import { socket } from '../../middlewares/socket';
import Flags from '../../components/Flags/Flags';

import './NavBar.css';

type Props = {
  title: string,
  userId: string,
  history: Function,
  logoutCallback: Function,
  authorization: string,
  getRoomAction: Function,
  i18n: Function,
  t: Function,
  suggests: string[],
  searchUsers: Function,
  guest: boolean,
};

type State = {
  openProfile: boolean,
  openDrawer: boolean,
  anchorEl: any,
};

const mapStateToProps = state => ({
  authorization: state.login.authorization,
  suggests: state.getUsers.suggests,
});

const mapDispatchToProps = dispatch => ({
  getRoomAction: item => dispatch(getRoom(item)),
  searchUsers: (authorization, value) => dispatch(getUsers(authorization, value)),
});

class NavBar extends Component<Props, State> {
  state = {
    openProfile: false,
    openDrawer: false,
    anchorEl: null,
  };

  componentDidMount() {
    socket.on('redirectroom', ({ roomId }) => {
      const { history } = this.props;

      if (!roomId) history.push('/');
      else history.push(`/room/${roomId}`);
    });
  }

  handleSearch = (event: any) => {
    const { searchUsers, authorization } = this.props;
    const { value } = event.target;

    searchUsers(authorization, value);
  };

  handleSuggestClick = (label: string) => {
    const { history } = this.props;

    history.push(`/profile/${label}`);
  };

  handleOpenDropdown = e => {
    this.setState({
      openProfile: true,
      anchorEl: e.currentTarget,
    });
  };

  handleCloseDropdown = () => {
    this.setState({
      openProfile: false,
      anchorEl: null,
    });
  };

  handleOpenDrawer = () => {
    const { authorization, getRoomAction } = this.props;
    getRoomAction(authorization);
    this.setState({
      openDrawer: true,
    });
  };

  handleCloseDrawer = () => {
    this.setState({
      openDrawer: false,
    });
  };

  handleProfile = () => {
    const { history, userId } = this.props;
    history.push(`/profile/${userId}`);
    this.setState({
      openProfile: false,
      anchorEl: null,
    });
  };

  handleLanguage = value => {
    const { i18n } = this.props;

    i18n.changeLanguage(value === 'GB' ? 'en' : value.toLowerCase());
  };

  renderMenu = () => {
    const { openProfile, anchorEl } = this.state;
    const { logoutCallback, t } = this.props;

    return (
      <Menu
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        anchorEl={anchorEl}
        open={openProfile}
        onClose={this.handleCloseDropdown}
      >
        <MenuItem onClick={this.handleProfile}>{t('profile')}</MenuItem>
        <MenuItem onClick={logoutCallback}>{t('logout')}</MenuItem>
      </Menu>
    );
  };

  renderDrawer = () => {
    const { openDrawer } = this.state;
    const { guest } = this.props;

    if (guest) return null;

    return (
      <React.Fragment>
        <IconButton color="inherit" onClick={this.handleOpenDrawer}>
          <MenuIcon />
        </IconButton>
        <Drawer open={openDrawer} onClose={this.handleCloseDrawer}>
          <div tabIndex={0} role="button">
            <MenuList />
          </div>
        </Drawer>
      </React.Fragment>
    );
  };

  renderSearch = () => {
    const { guest, suggests } = this.props;

    if (guest) return null;

    return (
      <div className="SearchSize">
        <Search
          onChange={this.handleSearch}
          onSuggestClick={this.handleSuggestClick}
          suggestions={suggests}
        />
      </div>
    );
  };

  renderProfile = () => {
    const { guest } = this.props;

    if (guest) return null;

    return (
      <IconButton onClick={this.handleOpenDropdown} color="inherit">
        <AccountCircle />
      </IconButton>
    );
  };

  render() {
    const { title, i18n } = this.props;
    const browserLanguage = i18n.language === 'fr' ? 'FR' : 'GB';

    return (
      <div>
        <AppBar position="static" color="primary">
          <Toolbar className="Toolbar">
            <div className="alignItem">
              {this.renderDrawer()}
              <Link className="LinkDesign" to="/">
                <Typography variant="title" color="inherit">
                  {title}
                </Typography>
              </Link>
            </div>
            {this.renderSearch()}
            <div className="Options">
              <Flags
                customLabels={{ GB: 'en', FR: 'fr' }}
                countries={['GB', 'FR']}
                defaultCountry={browserLanguage}
                onSelect={this.handleLanguage}
              />
              {this.renderProfile()}
            </div>
          </Toolbar>
        </AppBar>
        {this.renderMenu()}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(withNamespaces('navbar')(NavBar)));
