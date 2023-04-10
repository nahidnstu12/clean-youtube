import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleLayoutDescription,
  toggleLayoutNotes,
} from "../../redux/features/Layout";
import { LAYOUT } from "../../services/utils/enums";
import { classes } from "../ui/SinglePlaylistsPage";
import Subheader from "./Subheader";

const StyledWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  height: "380px",
  padding: "6px",
}));
interface IYoutubePlayer {
  selectPlaylistItem: any;
}
export function YoutubePlayer({ selectPlaylistItem }: IYoutubePlayer) {
  const { data: layout } = useSelector((state: any) => state.layout);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(toggleLayoutDescription(false));
  };
  return (
    <>
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
      {layout[LAYOUT.DESCRIPTION] && (
        <Box sx={{ pt: "20px", height: "25vh", overflowY: "scroll" }}>
          <Subheader title="Description" handleClick={handleClick} />
          <Typography sx={{ fontSize: "11px", color: "#444" }}>
            {selectPlaylistItem?.description}
          </Typography>
        </Box>
      )}
    </>
  );
}
