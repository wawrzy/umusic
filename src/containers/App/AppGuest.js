// @flow

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from '../Auth/LoginPage';
import RegisterPage from '../Auth/RegisterPage';

const AppGuest = () => (
  <Router>
    <Switch>
      <Route exact path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
    </Switch>
  </Router>
);

export default AppGuest;
