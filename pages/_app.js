import { createGlobalStyle, css, ThemeProvider } from "styled-components";
import { AuthProvider } from "lib/auth";
import { theme } from "lib/theme";
import { Layout } from "components/layout";
import Head from "next/head";

const GlobalStyle = createGlobalStyle(
  ({ theme }) => css`
    @import url("https://fonts.googleapis.com/css2?family=Odibee+Sans&display=swap");

    body {
      margin: 0;
      padding: 0;
      box-sizing: border-box;

      background-color: ${theme.colors.bodyBackground};
    }
  `
);

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>KarmaBox</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
