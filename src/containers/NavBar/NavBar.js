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
import { withRouter } from 'react-router-dom';

import './NavBar.css';

type Props = {
  title: string,
  notificationNumber: number,
  userId: number,
  history: Function,
};

type State = {
  open: boolean,
};

class NavBar extends Component<Props, State> {
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }

  handleOpen = () => {
    this.setState({
      open: true,
    });
  };
  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  renderMenu = () => {
    const { open } = this.state;
    const { logoutCallback, userId, history } = this.props;
    return (
      <Menu
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={open}
        onClose={this.handleClose}
      >
        <MenuItem onClick={() => history.push(`/profile/${userId}`)}>Profile</MenuItem>
        <MenuItem onClick={logoutCallback}>Disconnection</MenuItem>
      </Menu>
    );
  };

  render() {
    const { title, notificationNumber } = this.props;
    return (
      <div>
        <AppBar position="static">
          <Toolbar className="Toolbar">
            <Link className="LinkDesign" to="/" >
              <div>{title}</div>
            </Link>
            <div>
              <IconButton color="inherit">
                <Badge badgeContent={notificationNumber} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton onClick={this.handleOpen} color="inherit">
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
