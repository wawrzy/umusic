// @flow

import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { login } from '../../actions/auth/login';

import InputForm from '../../components/Input/InputForm';
import Wrapper from '../../components/Wrapper/Wrapper';

import './Auth.css';

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
      <div className="AuthPage">
        <Wrapper>
          <form onSubmit={this.onSubmit}>
            <div className="DisplayFlexColumn">
              <InputForm id="email" name="Email" type="default" />
              <InputForm id="password" name="Password" type="password" />
            </div>
            <div className="ButtonAlign">
              <Button variant="contained" color="primary" type="submit"> Login </Button>
            </div>
          </form>
        </Wrapper>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(LoginPage);
