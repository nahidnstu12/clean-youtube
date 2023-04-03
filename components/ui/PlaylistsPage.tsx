import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MoreVert from "@mui/icons-material/MoreVert";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { MenuItem } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavoritePlaylist } from "redux/features/favorites";
import PlaylistCard from "../shared/PlaylistCard";
import StyledMenu from "../shared/StyledMenu";

export default function PlaylistPage() {
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
  };

  return (
    <>
      <PlaylistCard
        title={"Playlists"}
        playlistArr={playlistArr}
        handleClick={handleClick}
      />

      <StyledMenu handleClose={handleClose} anchorEl={anchorEl} open={open}>
        <MenuItem onClick={handleClose}>
          <PlayCircleOutlineIcon sx={{ mr: 1 }} /> Play Tutorial
        </MenuItem>
        <MenuItem onClick={handleFav}>
          <FavoriteBorderIcon sx={{ mr: 1 }} /> Favorite Tutorial
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <DeleteForeverIcon sx={{ mr: 1 }} />
          Delete Tutorial
        </MenuItem>
      </StyledMenu>
    </>
  );
}
