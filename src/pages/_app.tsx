import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import theme from "../global/styles";
import GlobalStyles from "../global/styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
