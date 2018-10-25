// @flow

import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import LoginPage from '../Auth/LoginPage';
import RegisterPage from '../Auth/RegisterPage';
import NotFound from '../../components/NotFound';

const AppGuest = () => (
  <Router>
    <Switch>
      <Redirect exact from="/" to="/login" />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default AppGuest;
