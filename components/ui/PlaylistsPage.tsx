import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import usePlaylists from "../../services/hooks/usePlaylists"

interface IProps{
  playlists: any;
}
export default function PlaylistPage({playlists}:IProps) {
  // const {playlists} = usePlaylists()
  console.log("playlists", playlists)
  let playlistArr = Object.values(playlists)
  return (
    <ImageList gap={12}>
      <ImageListItem key="Subheader" cols={3}>
        {/* @ts-ignore */}
        <ListSubheader component="div" classname="text-lg">
          Playlists
        </ListSubheader>
      </ImageListItem>
      {playlistArr?.map((item:any) => (
        <ImageListItem key={item.img}>
           {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            // src={item?.playlistThumbnails?.url}
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
                  sx={{ color: "rgba(255, 255, 255, 0.54)", "&:hover": { background: "#0754a0ba" } }}
                  aria-label={`info about ${item?.playlistTitle}`}
                 
                >
                  <PlayCircleOutlineIcon />
                </IconButton>
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)", "&:hover": { background: "#cf1a1ad4" } }}
                  aria-label={`info about ${item?.playlistTitle}`}
                 
                >
                  <FavoriteBorderIcon  />
                </IconButton>
                <IconButton
                
                  sx={{ color: "rgba(255, 255, 255, 0.54)" ,"&:hover": { background: "#85851b9e" }}}
                  aria-label={`info about ${item?.playlistTitle}`}
                >
                  <DeleteForeverIcon />
                </IconButton>
              </>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}


