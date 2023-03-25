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
import * as React from "react";
import StyledMenu from "../shared/StyledMenu";

interface IProps {
  playlists: any;
}
export default function PlaylistPage({ playlists }: IProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // console.log("playlists", playlists);
  let playlistArr = Object.values(playlists);
  return (
    <ImageList gap={12}>
      <ImageListItem key="Subheader" cols={3}>
        {/* @ts-ignore */}
        <ListSubheader component="div" className="text-lg">
          Playlists
        </ListSubheader>
      </ImageListItem>
      {playlistArr?.map((item: any) => (
        <Link href={`/playlists/${item?.playlistId}`} key={item?.playlistId}>
          <ImageListItem>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item?.playlistThumbnails?.url}
              srcSet={item?.playlistThumbnails?.medium?.url}
              alt={item?.playlistTitle}
              loading="lazy"
              className="w-1/3"
            />
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
                    onClick={handleClick}
                  >
                    <MoreVertIcon />
                    {/*<InfoIcon />*/}
                  </IconButton>
                </>
              }
            />
          </ImageListItem>
        </Link>
      ))}
      <StyledMenu handleClose={handleClose} anchorEl={anchorEl} open={open}>
        <MenuItem onClick={handleClose}>
          <PlayCircleOutlineIcon sx={{ mr: 1 }} /> Play Tutorial
        </MenuItem>
        <MenuItem onClick={handleClose}>
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
