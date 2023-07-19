import { Components, createTheme } from '@mui/material/styles';

const btn = (): Components['MuiButton'] => ({
  styleOverrides: {
    root: {
      borderRadius: '16px',
    },
  },
});
const textField = (): Components['MuiTextField'] => ({
  styleOverrides: {
    root: {
      border: 'none',
      '.muirtl-1d3z3hw-MuiOutlinedInput-notchedOutline ': {
        border: 'none',
        borderBottom: '1px solid gray',
        borderRadius: '0px',
      },
    },
  },
});

export const theme = createTheme({
  palette: {
    primary: {
      main: '#B5C2CA',
    },
    secondary: {
      main: '#081225',
    },
  },
  components: {
    MuiButton: btn(),
    // MuiTextField: textField(),
  },
  direction: 'rtl',
  typography: {
    fontFamily: 'IRAN-SANS',
  },
});
