import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import usePlaylist from "../../services/hooks/usePlaylists";

export default function SinglePlaylistsPage() {
  const router = useRouter();
  const { playlists, getPlaylistVideos } = usePlaylist();
  const [playlistItem, setPlaylistItem] = useState();
  const items = playlists[router.query.playlistId];
  // console.log(
  //   router.query.playlistId,
  //   // getPlaylistVideos(router.query.playlistId),
  //   playlists
  // );
  // useEffect(() => {
  //   // async function getPlaylsits() {
  //   //   if (router.query.playlistId) {
  //   //     const playlists = await getPlaylistVideos(
  //   //       router.query.playlistId as string
  //   //     );
  //   //     console.log("playlists", playlists);
  //   //   }
  //   // }
  //   // getPlaylsits();
  //
  //   if (router.query.playlistId) {
  //     getPlaylistVideos(router.query.playlistId as string).then((res) =>
  //       console.log("playlists", res, playlists[router.query.playlistId])
  //     );
  //   }
  //   // console.log("playlists", playlists);
  // }, [router.query.playlistId]);
  return (
    <Grid container>
      <Grid item md={3}>
        {items?.playlistItems?.map((playlist: any) => (
          <Typography key={playlist.id} sx={{ fontSize: "11px" }}>
            {playlist?.title}
          </Typography>
        ))}
      </Grid>
      <Grid item md={7}>
        React Player
      </Grid>
      <Grid item md={2}>
        Notes
      </Grid>
    </Grid>
  );
}
