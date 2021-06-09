import { createGlobalStyle, css, ThemeProvider } from "styled-components";
import { AuthProvider } from "lib/auth";
import { theme } from "lib/theme";
import { Layout } from "components/layout";
import Head from "next/head";

const GlobalStyle = createGlobalStyle(
  ({ theme }) => css`
    html,
    body,
    #__next {
      height: 100%;
    }

    body {
      margin: 0;
      padding: 0;

      background-color: ${theme.colors.bodyBackground};
    }
    * {
      box-sizing: border-box;
    }
  `
);

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>KarmaBox</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Odibee+Sans&display=swap"
        rel="stylesheet"
      />
    </Head>
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </>
      </ThemeProvider>
    </AuthProvider>
  </>
);

export default App;
