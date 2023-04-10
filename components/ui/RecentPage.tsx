import PlaylistRemoveIcon from "@mui/icons-material/PlaylistRemove";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { deleteRecentPlaylist } from "redux/features/recents";
import PlaylistCard from "../shared/PlaylistCard";

const RecentPage = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state: any) => state?.recent || []);
  const { data } = useSelector((state: any) => state?.playlists || []);


  let playlistArr = items?.map((playlist: any) => {
    return data[playlist];
  });

  const handleDelete = (e: any, playlistId: string) => {
    if (confirm("Are you sure")) {
      dispatch(deleteRecentPlaylist(playlistId));
      toast.warn("Delete From Recent Playlist!");
    }
  };


  return (
    <PlaylistCard
      title={"Recent"}
      playlistArr={playlistArr}
      handleClick={handleDelete}
      icon={<PlaylistRemoveIcon />}
    />
  );
};

export default RecentPage;
