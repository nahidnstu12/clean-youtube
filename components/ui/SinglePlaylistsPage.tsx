import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRecentPlaylist } from "../../redux/features/recents";
import { PlaylistNote } from "../shared/PlaylistNote";
import { PlaylistSidebar } from "../shared/PlaylistSidebar";
import { YoutubePlayer } from "../shared/YoutubePlayer";

export const classes = {
  react_player: "react-player",
  note_textfield: "note_textfield",
};

interface ISinglePlaylistsPage {
  playlistId: any;
}

export default function SinglePlaylistsPage({
  playlistId,
}: ISinglePlaylistsPage) {
  const dispatch = useDispatch();

  const { data } = useSelector((state: any) => state.playlists);

  // @ts-ignore
  const items = data[playlistId];

  const [selectPlaylistItem, setSelectPlaylistItem] = useState<any>(null);
  const [selectedVideoId, setSelectedVideoId] = useState<string>("");

  useEffect(() => {
    dispatch(addRecentPlaylist(playlistId));
  }, [dispatch, playlistId]);

  useEffect(() => {
    if (!selectedVideoId) {
      const firstVideoId = items?.playlistItems[0]?.contentDetails?.videoId;
      setSelectedVideoId(firstVideoId);
    }
  }, []);

  useEffect(() => {
    const selecetedVideoItems = items?.playlistItems?.find((playlist: any) =>
      selectedVideoId ? playlist.contentDetails.videoId === selectedVideoId : {}
    );
    setSelectPlaylistItem(selecetedVideoItems);
  }, [items, selectedVideoId]);

  return (
    <Grid container>
      <Grid item md={3}>
        <PlaylistSidebar
          items={items}
          selectedVideoId={selectedVideoId}
          setSelectedVideoId={setSelectedVideoId}
        />
      </Grid>
      <Grid item md>
        <YoutubePlayer selectPlaylistItem={selectPlaylistItem} />
      </Grid>
      <Grid item md={2}>
        <PlaylistNote />
      </Grid>
    </Grid>
  );
}
