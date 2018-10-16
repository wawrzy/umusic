// @flow

import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { login } from '../../actions/auth/login';

import InputForm from '../../components/Input/InputForm';

type Props = {
  loginAction: Function
};

const mapDispatchToProps = dispatch => ({
  loginAction: item => dispatch(login(item)),
});

class LoginPage extends Component<Props> {
  onSubmit = (e) => {
    const { loginAction } = this.props;
    e.preventDefault();
    loginAction({ email: e.target.email.value, password: e.target.password.value });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <InputForm id="email" name="Email" type="default" />
          <InputForm id="password" name="Password" type="password" />
        </div>
        <Button variant="contained" color="primary" type="submit"> ok </Button>
      </form>
    );
  }
}

export default connect(null, mapDispatchToProps)(LoginPage);
