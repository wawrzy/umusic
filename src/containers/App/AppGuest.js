// @flow

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginPage from '../Auth/LoginPage';

const AppGuest = () => (
  <Router>
    <Route exact path="/" component={LoginPage} />
  </Router>
);

export default AppGuest;
