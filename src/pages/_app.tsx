// Styles
import "swiper/css/bundle";
import "../styles/globals.css";

// Types
import type { AppProps } from "next/app";

// Redux
import { store } from "../features/store";
import { Provider } from "react-redux";

// Layout
import Layout from "../layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
