// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';

import { getRoom } from '../../actions/room/getRoom';
import Search from '../../components/Search/Search';
import MenuList from './MenuList';

import './NavBar.css';

type Props = {
  title: string,
  notificationNumber: number,
  userId: string,
  history: Function,
  logoutCallback: Function,
  authorization: string,
  getRoomAction: Function,
};

type State = {
  openProfile: boolean,
  openDrawer: boolean,
  anchorEl: any,
};

const mapStateToProps = state => ({
  authorization: state.login.authorization,
});

const mapDispatchToProps = dispatch => ({
  getRoomAction: item => dispatch(getRoom(item)),
});

class NavBar extends Component<Props, State> {
   state = {
    openProfile: false,
    openDrawer: false,
    anchorEl: null,
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

  renderMenu = () => {
    const { openProfile, anchorEl } = this.state;
    const { logoutCallback } = this.props;
    return (
      <Menu
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        anchorEl={anchorEl}
        open={openProfile}
        onClose={this.handleCloseDropdown}
      >
        <MenuItem onClick={this.handleProfile}>Profile</MenuItem>
        <MenuItem onClick={logoutCallback}>Disconnection</MenuItem>
      </Menu>
    );
  };

  renderDrawer = () => {
    const { openDrawer } = this.state;
    return (
      <Drawer open={openDrawer} onClose={this.handleCloseDrawer}>
        <div tabIndex={0} role="button">
          <MenuList />
        </div>
      </Drawer>
    );
  };

  render() {
    const { title, notificationNumber } = this.props;

    return (
      <div>
        <AppBar position="static">
          <Toolbar className="Toolbar">
            <div className="alignItem">
              <IconButton color="inherit" onClick={this.handleOpenDrawer}>
                <MenuIcon />
              </IconButton>
              {this.renderDrawer()}
              <Link className="LinkDesign" to="/">
                <Typography variant="title" color="inherit">
                  {title}
                </Typography>
              </Link>
            </div>
            <div className="SearchSize">
              <Search />
            </div>
            <div>
              <IconButton color="inherit">
                <Badge badgeContent={notificationNumber} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton onClick={this.handleOpenDropdown} color="inherit">
                <AccountCircle />
              </IconButton>
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
)(withRouter(NavBar));
