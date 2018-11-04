// @flow

import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import LoginPage from '../Auth/LoginPage';
import RegisterPage from '../Auth/RegisterPage';
import NotFound from '../../components/NotFound/NotFound';
import AppNavBar from './AppNavBar';

const AppGuest = () => (
  <Router>
    <div>
      <Route path="/" component={() => <AppNavBar guest />} />
      <Switch>
        <Redirect exact from="/" to="/login" />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default AppGuest;
