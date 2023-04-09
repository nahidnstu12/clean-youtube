import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { MenuItem } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  addFavoritePlaylist,
  deleteFavoritePlaylist,
} from "redux/features/favorites";
import { deletePlaylist } from "redux/features/playlists";
import { deleteRecentPlaylist } from "redux/features/recents";
import PlaylistCard from "../shared/PlaylistCard";
import StyledMenu from "../shared/StyledMenu";

export default function PlaylistPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { data } = useSelector((state: any) => state.playlists);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [playlistId, setPlaylistId] = useState("");
  const open = Boolean(anchorEl);

  // convert to arr
  let playlistArr = Object.values(data);

  const handleClick = (
    event: React.MouseEvent<HTMLElement>,
    currentPlaylistId: string
  ) => {
    setAnchorEl(event.currentTarget);
    setPlaylistId(currentPlaylistId);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleFav = () => {
    dispatch(addFavoritePlaylist(playlistId));
    handleClose();
    toast.success("Successfully Added To Favorite!");
  };

  const handlePlaylistDelete = () => {
    if (confirm("Are you sure")) {
      dispatch(deletePlaylist(playlistId));
      dispatch(deleteFavoritePlaylist(playlistId));
      dispatch(deleteRecentPlaylist(playlistId));
      handleClose();
      toast.warn("Delete From Playlist!");
    }
  };

  const handleSinglePlaylistPage = () => {
    router.push(`/playlists/${playlistId}`);
    handleClose();
  };

  return (
    <>
      <PlaylistCard
        title={"Playlists"}
        playlistArr={playlistArr}
        handleClick={handleClick}
        icon={<MoreVertIcon />}
      />

      <StyledMenu handleClose={handleClose} anchorEl={anchorEl} open={open}>
        <MenuItem onClick={handleSinglePlaylistPage}>
          <PlayCircleOutlineIcon sx={{ mr: 1 }} /> Play Tutorial
        </MenuItem>
        <MenuItem onClick={handleFav}>
          <FavoriteBorderIcon sx={{ mr: 1 }} /> Favorite Tutorial
        </MenuItem>
        <MenuItem onClick={handlePlaylistDelete}>
          <DeleteForeverIcon sx={{ mr: 1 }} />
          Delete Tutorial
        </MenuItem>
      </StyledMenu>
    </>
  );
}
