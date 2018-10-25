// @flow

import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import Home from '../Home/Home';
import NotFound from '../../components/NotFound';

const AppHome = () => (
  <Router>
    <Switch>
      <Redirect from="/login" to="/" />
      <Redirect from="/register" to="/" />
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default AppHome;
