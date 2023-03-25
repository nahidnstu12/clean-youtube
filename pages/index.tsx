import Navbar from "../components/layout/Appbar";
import Sidebar from "../components/layout/Sidebar";
import usePlaylist from "../services/hooks/usePlaylists";

export default function Home() {
  const { getPlaylistVideos, playlists } = usePlaylist();

  return (
    <>
      {/*<Navbar getPlaylistVideos={getPlaylistVideos} />*/}
      <Sidebar playlists={playlists} />
    </>
  );
}
