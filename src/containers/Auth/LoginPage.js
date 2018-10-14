// @flow

import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { login } from '../../actions/login/action';

import InputForm from '../../components/Input/InputForm';

type Props = {
  loginData: {
    token: string,
    email: string,
    alias: string,
  },
  loginAction: {
    item: Function,
  }
};

const mapStateToProps = state => ({ loginData: state.login.loginData });

const mapDispatchToProps = dispatch => ({
  loginAction: item => dispatch(login(item)),
});

class LoginPage extends Component<Props, any> {
  onSubmit = (e) => {
    e.preventDefault();
    loginAction({ email: e.target.email.value, password: e.target.password.value });
    console.log(loginData);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <InputForm id="email" name="Email" type="default" />
        <InputForm id="password" name="Password" type="password" />
        <Button variant="contained" color="primary" type="submit"> ok </Button>
      </form>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
