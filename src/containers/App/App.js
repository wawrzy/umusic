// @flow

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
import store from '../../store';
import theme from '../../theme';
import AppGuest from './AppGuest';
import AppHome from './AppHome';
import { login, setupSession } from '../../actions/login/action';

type Props = {
  loginData: boolean,
}

const mapStateToProps = state => ({
  loginData: state.login.loginData
});

const mapDispatchToProps = dispatch => ({
  setupSession: item => dispatch(setupSession(item)),
})

class App extends Component<Props> {
  componentDidMount() {
    const token = localStorage.getItem('jwtToken');
    if (!token || token === '') {
      return;
    }
    this.props.setupSession(token);
  }

  render() {
    const { loginData } = this.props;
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          {loginData ? <AppHome /> : <AppGuest /> }
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
