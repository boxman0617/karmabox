import { createGlobalStyle, css, ThemeProvider } from "styled-components";
import { AuthProvider } from "lib/auth";
import { theme } from "lib/theme";
import { Layout } from "components/layout";

const GlobalStyle = createGlobalStyle(
  ({ theme }) => css`
    body {
      margin: 0;
      padding: 0;
      box-sizing: border-box;

      background-color: ${theme.colors.bodyBackground};
    }
  `
);

const App = ({ Component, pageProps }) => (
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
);

export default App;
