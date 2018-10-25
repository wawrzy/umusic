// @flow

import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import { register } from '../../actions/auth/register';
import InputForm from '../../components/Input/InputForm';
import Wrapper from '../../components/AuthContainer/AuthContainer';
import SnackbarContainer from '../../components/SnackbarContainer/SnackbarContainer';

import './Auth.css';

type Props = {
  registerAction: Function,
  history: Function,
};

type State = {
  open: boolean,
  messageSnackbar: string,
  variantColor: string,
};

const mapDispatchToProps = dispatch => ({
  registerAction: item => dispatch(register(item)),
});

class RegisterPage extends Component<Props, State> {
  constructor() {
    super();
    this.state = {
      open: false,
      messageSnackbar: '',
      variantColor: '',
    };
  }

  onSubmit = (e) => {
    const { registerAction, history } = this.props;
    e.preventDefault();
    registerAction({
      email: e.target.email.value,
      password: e.target.password.value,
      alias: e.target.alias.value,
    })
      .then(res => (res.error
        ? this.setState({
          open: true,
          variantColor: 'error',
          messageSnackbar: 'Error on register',
        })
        : (this.setState({
          open: true,
          variantColor: 'success',
          messageSnackbar: 'Register success',
        }), setTimeout(() => history.push('/login'), 500))));
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  snackbarRender = (open, variantColor, messageSnackbar, handleClose) => (
    <SnackbarContainer
      open={open}
      handleClose={handleClose}
      variant={variantColor}
      message={messageSnackbar}
    />
  );

  render() {
    const { open, variantColor, messageSnackbar } = this.state;
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
              <Link to="/login">
                <Button variant="contained" color="secondary" type="submit"> Login </Button>
              </Link>
              <Button variant="contained" color="primary" type="submit"> Register </Button>
            </div>
          </form>
        </Wrapper>
        {this.snackbarRender(open, variantColor, messageSnackbar, this.handleClose)}
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(withRouter(RegisterPage));
