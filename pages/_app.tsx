import "../styles/main.css";
import type { AppProps } from "next/app";
import Navbar from "../components/layout/Appbar";
import usePlaylist from "../services/hooks/usePlaylists";

export default function MyApp({ Component, pageProps }: AppProps) {
  const { getPlaylistVideos } = usePlaylist();
  return (
    <>
      <Navbar getPlaylistVideos={getPlaylistVideos} />
      <Component {...pageProps} />
    </>
  );
}
