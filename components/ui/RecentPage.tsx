import PlaylistRemoveIcon from "@mui/icons-material/PlaylistRemove";
import { MouseEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteRecentPlaylist } from "redux/features/recents";
import PlaylistCard from "../shared/PlaylistCard";

const RecentPage = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state: any) => state?.recent || []);
  const { data } = useSelector((state: any) => state?.playlists || []);

  const [playlistId, setPlaylistId] = useState("");

  const handleClick = (
    event: MouseEvent<HTMLElement>,
    currentPlaylistId: string
  ) => {
    setPlaylistId(currentPlaylistId);
  };

  let playlistArr = items?.map((playlist: any) => {
    return data[playlist];
  });

  const handleDelete = (e:any, playlistId: string) => {
    if(confirm("Are you sure"))
    dispatch(deleteRecentPlaylist(playlistId))
  }

  console.log("playlistArr recent", playlistArr);

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
