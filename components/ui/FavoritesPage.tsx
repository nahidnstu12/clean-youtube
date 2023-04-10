import PlaylistRemoveIcon from "@mui/icons-material/PlaylistRemove";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { deleteFavoritePlaylist } from "../../redux/features/favorites";
import PlaylistCard from "../shared/PlaylistCard";

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state: any) => state?.favorites || []);
  const { data } = useSelector((state: any) => state?.playlists || []);

  let playlistArr = items?.map((playlist: any) => {
    return data[playlist];
  });

  const handleDelete = (e: any, playlistId: string) => {
    if (confirm("Are you sure")) {
      dispatch(deleteFavoritePlaylist(playlistId));
      toast.warn("Delete From Favorite Playlist!");
    }
  };

  return (
    <PlaylistCard
      title={"Favorite"}
      playlistArr={playlistArr}
      icon={<PlaylistRemoveIcon />}
      handleClick={handleDelete}
    />
  );
};

export default FavoritesPage;
