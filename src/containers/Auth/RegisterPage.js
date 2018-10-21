// @flow

import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { register } from '../../actions/auth/register';
import InputForm from '../../components/Input/InputForm';
import Wrapper from '../../components/Wrapper/Wrapper';

import './Auth.css';

type Props = {
  registerAction: Function,
  history: Function,
};

const mapDispatchToProps = dispatch => ({
  registerAction: item => dispatch(register(item)),
});

class RegisterPage extends Component<Props> {
  onSubmit = (e) => {
    const { registerAction, history } = this.props;
    e.preventDefault();
    registerAction({
      email: e.target.email.value,
      password: e.target.password.value,
      alias: e.target.alias.value,
    })
      .then(res => (res.error ? console.log('ok') : history.push('/login')));
  };

  render() {
    return (
      <div className="AuthPage">
        <Wrapper>
          <form onSubmit={this.onSubmit}>
            <div className="DisplayFlexColumn">
              <InputForm id="email" name="Email" type="default" />
              <InputForm id="alias" name="Pseudo" type="default" />
              <InputForm id="password" name="Password" type="password" />
            </div>
            <div className="ButtonAlign">
              <Button variant="contained" color="primary" type="submit"> Register </Button>
            </div>
          </form>
        </Wrapper>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(withRouter(RegisterPage));
