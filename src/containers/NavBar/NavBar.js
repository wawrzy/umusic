// @flow

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import { withRouter } from 'react-router-dom';

import MenuList from './MenuList';

import './NavBar.css';

type Props = {
  title: string,
  notificationNumber: number,
  userId: number,
  history: Function,
};

type State = {
  openProfile: boolean,
  openDrawer: boolean,
};

class NavBar extends Component<Props, State> {
  constructor() {
    super();
    this.state = {
      openProfile: false,
      openDrawer: false,
    };
  }

  handleOpen = (open, value) => {
    this.setState({
      ...this.state,
      [open]: value,
    });
  };

  handleProfile = () => {
    const { history, userId } = this.props;
    history.push(`/profile/${userId}`);
    this.setState({
      ...this.state,
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
        onClose={() => this.handleOpen('openProfile', false)}
      >
        <MenuItem onClick={this.handleProfile}>Profile</MenuItem>
        <MenuItem onClick={logoutCallback}>Disconnection</MenuItem>
      </Menu>
    );
  };

  render() {
    const { title, notificationNumber } = this.props;
    const { openDrawer } = this.state;
    return (
      <div>
        <AppBar position="static">
          <Toolbar className="Toolbar">
            <div className="alignItem">
              <IconButton color="inherit" onClick={() => this.handleOpen('openDrawer', true)}>
                <MenuIcon />
              </IconButton>
              <Drawer open={openDrawer} onClose={() => this.handleOpen('openDrawer', false)}>
                <div
                  tabIndex={0}
                  role="button"
                  onClick={() => this.handleOpen('openDrawer', false)}
                  onKeyDown={() => this.handleOpen('openDrawer', false)}
                >
                  <MenuList />
                </div>
              </Drawer>
              <Link className="LinkDesign" to="/">
                <div>{title}</div>
              </Link>
            </div>
            <div>
              <IconButton color="inherit">
                <Badge badgeContent={notificationNumber} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton onClick={() => this.handleOpen('openProfile', true)} color="inherit">
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
