import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
import Navbar from "../components/layout/Appbar";
import { persistor, store } from "../redux";
import "../styles/main.css";
import "react-toastify/dist/ReactToastify.css";

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
        <ToastContainer />
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}
