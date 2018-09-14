import React from 'react';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
import store from './store';
import theme from './theme';

const App = () => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <div>App</div>
    </MuiThemeProvider>
  </Provider>
);

export default App;
