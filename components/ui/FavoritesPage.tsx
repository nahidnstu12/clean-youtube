import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavoritePlaylist } from "../../redux/features/favorites";
import PlaylistCard from "../shared/PlaylistCard";

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state?.favorites || []);
  const { data } = useSelector((state) => state?.playlists || []);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [playlistId, setPlaylistId] = useState("");
  const open = Boolean(anchorEl);

  const handleClick = (
    event: React.MouseEvent<HTMLElement>,
    currentPlaylistId: string
  ) => {
    setAnchorEl(event.currentTarget);
    setPlaylistId(currentPlaylistId);
  };

  let playlistArr = items?.map((playlist: any) => {
    return data[playlist];
  });

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleFav = () => {
    dispatch(addFavoritePlaylist(playlistId));
    handleClose();
  };

  console.log("playlistArr fab", playlistArr);

  return <PlaylistCard title={"Favorite"} playlistArr={playlistArr} />;
};

export default FavoritesPage;
