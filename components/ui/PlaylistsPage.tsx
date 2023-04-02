import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { MenuItem } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import Link from "next/link";
import {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavoritePlaylist } from "redux/features/favorites";
import StyledMenu from "../shared/StyledMenu";

export default function PlaylistPage() {
  const dispatch = useDispatch();
  const { data } = useSelector((state: any) => state.playlists);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [playlistId,setPlaylistId] = useState("")
  const open = Boolean(anchorEl);

  // convert to arr
  let playlistArr = Object.values(data);

  const handleClick = (event: React.MouseEvent<HTMLElement>, currentPlaylistId:string) => {
    setAnchorEl(event.currentTarget);
    setPlaylistId(currentPlaylistId)
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleFav = () => {
    dispatch(addFavoritePlaylist(playlistId))
    handleClose()
  }

  
  return (
    <ImageList gap={12}>
      <ImageListItem key="Subheader" cols={3}>
        {/* @ts-ignore */}
        <ListSubheader component="div" className="text-lg">
          Playlists
        </ListSubheader>
      </ImageListItem>
      {playlistArr?.map((item: any) => (
        // <Link href={`/playlists/${item?.playlistId}`} key={item?.playlistId}>
        <ImageListItem>
          <Link href={`/playlists/${item?.playlistId}`} >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item?.playlistThumbnails?.url}
              srcSet={item?.playlistThumbnails?.medium?.url}
              alt={item?.playlistTitle}
              loading="lazy"
            // className="w-1/3"
            />
          </Link>

          <ImageListItemBar
            title={item?.playlistTitle}
            subtitle={item?.channelTitle}
            actionIcon={
              <>
                <IconButton
                  aria-label={`info about ${item?.playlistTitle}`}
                  sx={{
                    color: "rgba(255, 255, 255, 0.54)",
                    background: "#0754a0ba",
                    p: 1,
                  }}
                  onClick={(e)=> handleClick(e, item?.playlistId)}
                >
                  <MoreVertIcon />
                </IconButton>
              </>
            }
          />
        </ImageListItem>
        // </Link>
      ))}


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
    </ImageList>
  );
}
