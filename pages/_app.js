import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  //REM
  //font-size = 16px(desktop)
  html{
    @media (max-width: 1080px){
      font-size: 93.75%; //15px
    }
     @media (max-width: 720px){
      font-size: 87.5%; //14px
    }
  }
  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }
  h1,h2,h3,h4,h5,h6, strong{
    font-weight: 900;
  }
  button{
    cursor: pointer;
  }

`
const theme = {
  colors: {
    darkblue: '#084154',
    blue: '#3EC6E0',
    silver: '#EBEBEB',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
