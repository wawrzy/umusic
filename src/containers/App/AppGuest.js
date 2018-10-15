// @flow

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginPage from '../Auth/LoginPage';

class MainAuthPage extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={LoginPage} />
      </Router>
    );
  }
}

export default MainAuthPage;
