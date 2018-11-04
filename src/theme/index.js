import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#7289DA',
      main: '#7289DA',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#99AAB5',
      main: '#99AAB5',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

export default theme;
