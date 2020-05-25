import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#008C45',
    },
    secondary: {
      main: '#CD212A',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#F4F5F0',
    },
  },
});

export default theme;
