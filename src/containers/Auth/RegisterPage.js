// @flow

import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';

import { register } from '../../actions/auth/register';
import InputForm from '../../components/Input/InputForm';
import AuthContainer from '../../components/AuthContainer/AuthContainer';
import SnackbarContainer from '../../components/SnackbarContainer/SnackbarContainer';

import './Auth.css';

type Props = {
  registerAction: Function,
  history: Function,
  error: string,
  status: string,
  t: Function,
};

const mapStateToProps = state => ({
  error: state.register.error,
  status: state.register.status,
});

const mapDispatchToProps = dispatch => ({
  registerAction: item => dispatch(register(item)),
});

class RegisterPage extends Component<Props> {
  onSubmit = e => {
    const { registerAction, history } = this.props;
    e.preventDefault();
    registerAction({
      email: e.target.email.value,
      password: e.target.password.value,
      alias: e.target.alias.value,
    }).then(res => (!res.error ? setTimeout(() => history.push('/login'), 500) : null));
  };

  renderError = () => {
    const { error } = this.props;

    return <SnackbarContainer variant="error" message={error} />;
  };

  renderStatus = () => {
    const { status } = this.props;

    return <SnackbarContainer variant="success" message={status} />;
  };

  render() {
    const { t } = this.props;

    return (
      <div className="AuthPage">
        <AuthContainer>
          <form onSubmit={this.onSubmit}>
            <div className="DisplayFlexColumn">
              <InputForm id="email" name={t('email')} type="email" required />
              <InputForm id="alias" name={t('alias')} type="default" required />
              <InputForm
                id="password"
                minlength="4"
                name={t('password')}
                type="password"
                required
              />
            </div>
            <div className="ButtonAlign">
              <Link className="LinkDesign" to="/login">
                <Button variant="contained" color="secondary" type="submit">
                  {t('login')}
                </Button>
              </Link>
              <Button variant="contained" color="primary" type="submit">
                {t('register')}
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
)(withRouter(withNamespaces('auth')(RegisterPage)));
