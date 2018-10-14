// @flow

import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { login } from '../../actions/login/action';
import LoginPage from './LoginPage';

const mapStateToProps = state => ({ loginData: state.loginData });


class MainAuthPage extends Component {

  render() {
    return (
      <div>
        <LoginPage />
      </div>
    );
  }
}


export default connect(null, mapDispatchToProps)(MainAuthPage);
