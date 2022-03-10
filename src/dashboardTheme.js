import {createTheme} from '@mui/material/styles';

const dashboardTheme = createTheme({
  // palette: {
  //   primary: {
  //     main: '#bada55'
  //   },
  //   secondary: {
  //     main: '#a11111'
  //   }
  // },
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: '1rem'

        },
      },
    },
  },

  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  spacing: [8, 14, 16, 20, 30]
});

export default dashboardTheme