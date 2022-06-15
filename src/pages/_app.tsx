import React from 'react';
import { AppProps } from 'next/app';
import GlobalStyle from '../styles/global'
import { ThemeProvider } from 'styled-components';
import ligth from '../styles/themes';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <title> Igor S. Fernandes</title>
      <ThemeProvider theme={ligth}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
