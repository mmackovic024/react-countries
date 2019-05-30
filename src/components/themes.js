import { createMuiTheme } from '@material-ui/core/styles';

const typography = {
  fontFamily: 'Nunito Sans',
  button: {
    textTransform: 'none'
  },
  h4: {
    fontWeight: 800,
    fontSize: '1.85rem'
  },
  h5: {
    fontWeight: 800,
    fontSize: '1.25rem'
  },
  h6: {
    fontWeight: 600,
    fontSize: '1rem'
  },
  subtitle1: {
    fontWeight: 600,
    fontSize: '1.15rem'
  },
  subtitle2: {
    fontWeight: 600,
    fontSize: '1rem'
  },
  body1: {
    fontWeight: 300,
    fontSize: '1.15rem'
  },
  body2: {
    fontWeight: 300,
    fontSize: '1rem'
  }
};

export const light = createMuiTheme({
  typography,
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

export const dark = createMuiTheme({
  typography,
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
  },
  overrides: {
    MuiSelect: {
      icon: { color: 'hsl(0, 0%, 100%)' }
    }
  }
});
