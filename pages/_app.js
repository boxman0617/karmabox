import { createGlobalStyle, ThemeProvider } from "styled-components";
import { AuthProvider } from "lib/auth";

console.log(process.env.PRIVATE_KEY);

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

const App = ({ Component, pageProps }) => (
  <>
    <GlobalStyle />
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </AuthProvider>
  </>
);

export default App;
