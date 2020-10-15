import { ThemeProvider } from "styled-components";
import theme from "../themes/theme";
import GlobalStyles from "../components/GlobalStyles/GlobalStyles";
import Header from "../components/Header/index";
import Footer from "../components/Footer/index";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
