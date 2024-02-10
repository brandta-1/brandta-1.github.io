import createTheme from '@mui/material/styles/createTheme';
import SFBold from './fonts/SanFrancisco/SF-Pro-Display-Bold.woff2';
import SFReg from './fonts/SanFrancisco/SF-Pro-Display-Regular.woff2';
import SFLight from './fonts/SanFrancisco/SF-Pro-Display-Light.woff2';

const createFontFace = (name: string, weight: number | string, fontPath: string) => {
  return `@font-face {
    font-family: ${name};
    font-display: swap;
    font-weight: ${weight};
    src: url(${fontPath}) format('woff2');
  }`.trim();
};

const fontTest = [
  createFontFace('SanFran', 400, SFReg),
  createFontFace('SanFran', 300, SFLight),
  createFontFace('SanFran', 'bold', SFBold)
];

const theme = createTheme({
  typography: {
    fontFamily: 'SanFran, serif'
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: fontTest.join(`\n`)
    }
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
