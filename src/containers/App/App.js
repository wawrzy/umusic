// @flow

import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
import store from '../../store';
import theme from '../../theme';
import AppGuest from './AppGuest';
import AppHome from './AppHome';
import { setupSession } from '../../actions/auth/login';
import { getRoom } from '../../actions/room/getRoom';
import { getUsers } from '../../actions/users/users';

type Props = {
  authorization: string,
  startSession: Function,
  getRoomAction: Function,
  getUsersAction: Function,
};

const mapStateToProps = state => ({
  authorization: state.login.authorization,
});

const mapDispatchToProps = dispatch => ({
  startSession: item => dispatch(setupSession(item)),
  getRoomAction: item => dispatch(getRoom(item)),
  getUsersAction: item => dispatch(getUsers(item)),
});

class App extends Component<Props> {
  componentDidMount() {
    const { startSession, getRoomAction, getUsersAction } = this.props;
    const token = localStorage.getItem('jwtToken');
    if (!token || token === '') {
      return;
    }
    startSession(token);
    getRoomAction(token);
    getUsersAction(token);
  }

  render() {
    const { authorization } = this.props;

    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          {authorization !== '' ? <AppHome /> : <AppGuest />}
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
