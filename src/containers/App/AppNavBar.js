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
  guest?: boolean,
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
  static defaultProps = {
    guest: false,
  };

  componentDidMount() {
    const { getProfile, authorization, history, guest, logout } = this.props;

    getProfile(authorization).then(err => {
      console.log(err.error);
      console.log(guest);
      if (err.error && !guest) {
        localStorage.removeItem('jwtToken');
        logout('');
        history.push('/login');
      }
    });
  }

  logoutCallback = () => {
    const { history, logout } = this.props;
    localStorage.removeItem('jwtToken');
    logout('');
    history.push('/login');
  };

  render() {
    const { userId, guest } = this.props;

    return (
      <NavBar
        title="Umusic"
        notificationNumber={0}
        logoutCallback={this.logoutCallback}
        userId={userId}
        guest={guest}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppNavBar);
