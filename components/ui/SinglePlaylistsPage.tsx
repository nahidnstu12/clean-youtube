import { Grid } from "@mui/material";
import { Typography, Box, TextField } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import usePlaylist from "../../services/hooks/usePlaylists";
import ReactPlayer from "react-player";
import { styled } from "@mui/system";

const classes = {
  react_player: "react-player",
  note_textfield: "note_textfield",
};
export default function SinglePlaylistsPage() {
  const router = useRouter();
  const { playlists } = usePlaylist();

  const items = playlists[router.query.playlistId as string];

  const [selectPlaylistItem, setSelectPlaylistItem] = useState<any>(null);

  const StyledWrapper = styled(Box)(({ theme }) => ({
    position: "relative",
    height: "380px",
  }));

  const StyledNoteBox = styled(Box)(({ theme }) => ({
    padding: "10px",
    position: "relative",
    height: "90vh",
    [`& .${classes.note_textfield}`]: {
      position: "absolute",
      // bottom: "0px",
      bottom: "30px",
      left: 0,
      padding: "8px",
    },
  }));

  useEffect(() => setSelectPlaylistItem(items?.playlistItems[0]), [items]);

  console.log("items: ", items, selectPlaylistItem);

  return (
    <Grid container>
      <Grid item md={3} sx={{ borderRight: "1px solid red" }}>
        <Box sx={{ height: "90vh", overflowY: "scroll" }}>
          {items?.playlistItems?.map((playlist: any) => (
            <Typography key={playlist.id} sx={{ fontSize: "11px" }}>
              {playlist?.title}
            </Typography>
          ))}
        </Box>
      </Grid>
      <Grid item md={7} sx={{ borderRight: "1px solid red" }}>
        React Player
        <StyledWrapper>
          <ReactPlayer
            className={classes.react_player}
            width="100%"
            height="100%"
            url={"https://www.youtube.com/watch?v=K8pzpxfES4U"}
            config={{
              youtube: {
                playerVars: { showinfo: 1 },
              },
            }}
          />
        </StyledWrapper>
        <Box sx={{ pt: "20px" }}>
          <Typography>Description</Typography>
          <Typography sx={{ fontSize: "11px" }}>
            {selectPlaylistItem?.description}
          </Typography>
        </Box>
      </Grid>
      <Grid item md={2}>
        Notes
        <StyledNoteBox>
          <TextField
            className={classes.note_textfield}
            id="outlined-textarea"
            label="Multiline Placeholder"
            placeholder="type notes"
            multiline
            rows={4}
          />
        </StyledNoteBox>
      </Grid>
    </Grid>
  );
}
