import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Navbar from "../components/layout/Appbar";
import { persistor, store } from "../redux";
import "../styles/main.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Head>
          <title>Clean Youtube</title>
          <meta property="og:title" content="Clean Youtube" key="title" />
          <link rel="icon" href={"/logo.png"} />
        </Head>
        <Navbar />
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}
