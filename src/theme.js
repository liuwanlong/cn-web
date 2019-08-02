import { createMuiTheme } from '@material-ui/core/styles';
import { red, purple, indigo } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#af52bf",
      main: "#9c27b0",
      dark: "#6d1b7b",
    },
    secondary: {
      light: "#dd33fa",
      main: "#d500f9",
      dark: "#9500ae",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;
