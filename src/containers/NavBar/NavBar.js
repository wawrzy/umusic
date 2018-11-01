// @flow

import React, { Component } from 'react';
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

import MenuList from './MenuList';
import { socket } from '../../middlewares/socket';

import './NavBar.css';

type Props = {
  title: string,
  notificationNumber: number,
  userId: string,
  history: Function,
  logoutCallback: Function,
};

type State = {
  openProfile: boolean,
  openDrawer: boolean,
};

class NavBar extends Component<Props, State> {
  state = {
    openProfile: false,
    openDrawer: false,
  };

  componentDidMount() {
    socket.on('redirectroom', ({ roomId }) => {
      const { history } = this.props;

      history.push(`/room/${roomId}`);
    });
  }

  handleOpenDropdown = () => {
    this.setState({
      openProfile: true,
    });
  };

  handleCloseDropdown = () => {
    this.setState({
      openProfile: false,
    });
  };

  handleOpenDrawer = () => {
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
    });
  };

  renderMenu = () => {
    const { openProfile } = this.state;
    const { logoutCallback } = this.props;

    return (
      <Menu
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
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
        <div
          tabIndex={0}
          role="button"
          onClick={this.handleCloseDrawer}
          onKeyDown={this.handleCloseDrawer}
        >
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

export default withRouter(NavBar);
