import { useRouter } from "next/router";
import SinglePlaylistsPage from "../../components/ui/SinglePlaylistsPage";

export default function SinglePlaylist() {
  const router = useRouter();
  const playlistID = router.query.playlistId;
  return <SinglePlaylistsPage playlistId={playlistID} />;
}
