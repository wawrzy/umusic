// @flow

import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';

import { login } from '../../actions/auth/login';
import InputForm from '../../components/Input/InputForm';
import AuthContainer from '../../components/AuthContainer/AuthContainer';
import SnackbarContainer from '../../components/SnackbarContainer/SnackbarContainer';

import './Auth.css';

type Props = {
  loginAction: Function,
  error: string,
  t: Function,
};

const mapStateToProps = state => ({
  error: state.login.error,
});

const mapDispatchToProps = dispatch => ({
  loginAction: item => dispatch(login(item)),
});

class LoginPage extends Component<Props> {
  onSubmit = e => {
    const { loginAction } = this.props;
    e.preventDefault();
    loginAction({
      email: e.target.email.value,
      password: e.target.password.value,
    });
  };

  renderError = () => {
    const { error } = this.props;

    return <SnackbarContainer variant="error" message={error} />;
  };

  render() {
    const { t } = this.props;

    return (
      <div className="AuthPage">
        <AuthContainer>
          <form onSubmit={this.onSubmit}>
            <div className="DisplayFlexColumn">
              <InputForm id="email" name="Email" type="default" />
              <InputForm id="password" name="Password" type="password" />
            </div>
            <div className="ButtonAlign">
              <Link className="LinkDesign" to="/register">
                <Button variant="contained" color="secondary" type="submit">
                  {t('register')}
                </Button>
              </Link>
              <Button variant="contained" color="primary" type="submit">
                {t('login')}
              </Button>
            </div>
          </form>
        </AuthContainer>
        {this.renderError()}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withNamespaces('auth')(LoginPage));
