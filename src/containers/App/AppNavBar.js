// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setupSession } from '../../actions/auth/login';

import NavBar from '../NavBar/NavBar';

type Props = {
  history: Function,
  userId: string,
  logout: Function,
};

const mapStateToProps = state => ({
  userId: state.login.loginData,
});

const mapDispatchToProps = dispatch => ({
  logout: item => dispatch(setupSession(item)),
});

class AppNavBar extends Component<Props> {
  logoutCallback = () => {
    const { history, logout } = this.props;
    localStorage.removeItem('jwtToken');
    logout('');
    history.push('/login');
  };

  render() {
    const { userId } = this.props;
    return (
      <NavBar
        title="Umusic"
        notificationNumber={0}
        logoutCallback={this.logoutCallback}
        userId={userId}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppNavBar);
