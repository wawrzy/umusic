// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setupSession, fetchProfile } from '../../actions/auth/login';

import NavBar from '../NavBar/NavBar';

type Props = {
  history: Function,
  userId: string,
  logout: Function,
  getProfile: Function,
  authorization: string,
};

const mapStateToProps = state => ({
  userId: state.login.userId,
  authorization: state.login.authorization,
});

const mapDispatchToProps = dispatch => ({
  logout: item => dispatch(setupSession(item)),
  getProfile: authorization => dispatch(fetchProfile(authorization)),
});

class AppNavBar extends Component<Props> {
  componentDidMount() {
    const { getProfile, authorization } = this.props;

    getProfile(authorization);
  }

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
