import { ThemeProvider } from 'styled-components';
import { createGlobalStyle } from "styled-components";

const theme = {
  colors: {
    mint: '#0FC1AF',
    mintHover: '#0DA99A',
    smoke: '#C3D0D9', 
    slate: '#4B5D6B',
    white: '#FFFFFF'
  }
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Noto Sans JP', sans-serif;
    background: ${props => props.theme.colors.smoke};
  }
`


function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
