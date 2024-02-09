import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Inter Variable'
  },
  palette: {
    text: {
      primary: '#0f62fe',
      secondary: '#001141'
    },
    primary: {
      main: '#0f62fe'
    },
    secondary: {
      main: '#001141'
    }
  }
});

export default theme;
