import { Box, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { classes } from "../ui/SinglePlaylistsPage";

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
export function PlaylistNote() {
  return (
    <>
      <Typography>Notes</Typography>
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
    </>
  );
}
