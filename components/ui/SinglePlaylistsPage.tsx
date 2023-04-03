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

  useEffect(() => setSelectPlaylistItem(items?.playlistItems[0]), [items]);

  useEffect(() => {
    dispatch(addRecentPlaylist(playlistId));
  }, [dispatch]);

  console.log("items: ", items, selectPlaylistItem);

  return (
    <Grid container>
      <Grid item md={3} sx={{ borderRight: "1px solid red" }}>
        <PlaylistSidebar items={items} />
      </Grid>
      <Grid item md={7} sx={{ borderRight: "1px solid red" }}>
        <YoutubePlayer selectPlaylistItem={selectPlaylistItem} />
      </Grid>
      <Grid item md={2}>
        <PlaylistNote />
      </Grid>
    </Grid>
  );
}
