import "../styles/main.css";
import type { AppProps } from "next/app";
import Navbar from "../components/layout/Appbar";
import usePlaylist from "../services/hooks/usePlaylists";
import { store, persistor } from "../redux";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export default function MyApp({ Component, pageProps }: AppProps) {
  const { getPlaylistVideos } = usePlaylist();
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Navbar />
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}
