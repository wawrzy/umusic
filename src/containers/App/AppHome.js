// @flow

import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from '../Home/Home';
import NotFound from '../../components/NotFound';
import AppNavBar from './AppNavBar';
import ProfilePage from '../ProfilePage/ProfilePage';

const AppHome = () => (
  <Router>
    <div>
      <Route path="/" component={AppNavBar} />
      <Switch>
        <Redirect from="/login" to="/" />
        <Redirect from="/register" to="/" />
        <Route exact path="/" component={Home} />
        <Route exact path="/profile/:id" component={ProfilePage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default AppHome;
