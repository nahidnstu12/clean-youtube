import PlaylistRemoveIcon from "@mui/icons-material/PlaylistRemove";
import IconButton from "@mui/material/IconButton";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavoritePlaylist } from "../../redux/features/favorites";

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

  // let playlistArr = Object.values(data);
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

  return (
    <ImageList gap={12}>
      <ImageListItem key="Subheader" cols={3}>
        {/* @ts-ignore */}
        <ListSubheader component="div" className="text-lg">
          Favorite
        </ListSubheader>
      </ImageListItem>
      {playlistArr?.map((item: any) => (
        // <Link href={`/playlists/${item?.playlistId}`} key={item?.playlistId}>
        <ImageListItem key={item?.playlistId}>
          <Link href={`/playlists/${item?.playlistId}`}>
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
                  onClick={(e) => handleClick(e, item?.playlistId)}
                >
                  <PlaylistRemoveIcon />
                </IconButton>
              </>
            }
          />
        </ImageListItem>
        // </Link>
      ))}
    </ImageList>
  );
};

export default FavoritesPage;