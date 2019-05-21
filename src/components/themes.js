import { createMuiTheme } from '@material-ui/core/styles';

export const themeLight = createMuiTheme({
  typography: {
    fontFamily: 'Nunito Sans',
    button: {
      textTransform: 'none'
    }
  },
  palette: {
    primary: {
      main: 'hsl(0, 0%, 100%)'
    },
    secondary: {
      main: 'hsl(0, 0%, 98%)'
    },
    text: {
      primary: 'hsl(200, 15%, 8%)'
    },
    background: {
      paper: 'hsl(0, 0%, 100%)',
      default: 'hsl(0, 0%, 98%)'
    }
  }
});

export const themeDark = createMuiTheme({
  typography: {
    fontFamily: 'Nunito Sans',
    button: {
      textTransform: 'none'
    }
  },
  palette: {
    primary: {
      main: 'hsl(209, 23%, 22%)'
    },
    secondary: {
      main: 'hsl(207, 26%, 17%)'
    },
    text: {
      primary: 'hsl(0, 0%, 100%)'
    },
    background: {
      paper: 'hsl(209, 23%, 22%)',
      default: 'hsl(207, 26%, 17%)'
    }
  }
});
