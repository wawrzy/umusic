import React from 'react';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from '../../store';
import theme from '../../theme';
import { Home } from '../../components';

const App = () => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <Router>
        <Route exact path="/" component={Home} />
      </Router>
    </MuiThemeProvider>
  </Provider>
);

export default App;
