import { createTheme } from '@material-ui/core/styles'

export const theme = createTheme({
  palette: {
    primary: {
      light: '#FFFF',
      main: '#2D224C',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#D4145A',
      dark: '#ba000d',
      contrastText: '#000',
    },
    // initial: {
    //   main: '#D9D9D9',
    // },
    // neutral: {
    //   main: '#D9D9D9',
    // }
  },
  typography: {
    fontFamily: 'Poppins',
   }
});