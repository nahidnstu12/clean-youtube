import "../styles/main.css";
import type { AppProps } from "next/app";
import Navbar from "../components/layout/Appbar";
import usePlaylist from "../services/hooks/usePlaylists";
import store from "../redux/index";
import { Provider } from "react-redux";

export default function MyApp({ Component, pageProps }: AppProps) {
  const { getPlaylistVideos } = usePlaylist();
  return (
    <Provider store={store}>
      <Navbar getPlaylistVideos={getPlaylistVideos} />
      <Component {...pageProps} />
    </Provider>
  );
}
