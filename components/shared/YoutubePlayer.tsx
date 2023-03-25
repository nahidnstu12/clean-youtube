import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import ReactPlayer from "react-player";
import { classes } from "../ui/SinglePlaylistsPage";

const StyledWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  height: "380px",
}));
interface IYoutubePlayer {
  selectPlaylistItem: any;
}
export function YoutubePlayer({ selectPlaylistItem }: IYoutubePlayer) {
  console.log("selectPlaylistItem", selectPlaylistItem);
  return (
    <>
      <Typography>React Player</Typography>
      <StyledWrapper>
        <ReactPlayer
          className={classes.react_player}
          width="100%"
          height="100%"
          url={`https://www.youtube.com/watch?v=${selectPlaylistItem?.contentDetails?.videoId}`}
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
    </>
  );
}
