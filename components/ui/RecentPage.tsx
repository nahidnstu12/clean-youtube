import PlaylistRemoveIcon from "@mui/icons-material/PlaylistRemove";
import IconButton from "@mui/material/IconButton";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import Link from "next/link";
import { useState, MouseEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

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

  console.log("playlistArr recent", playlistArr);

  return (
    <ImageList gap={12}>
      <ImageListItem key="Subheader" cols={3}>
        {/* @ts-ignore */}
        <ListSubheader component="div" className="text-lg">
          Recent
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

export default RecentPage;
