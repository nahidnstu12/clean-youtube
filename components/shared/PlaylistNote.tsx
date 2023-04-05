import { Box, TextField } from "@mui/material";
import { styled } from "@mui/system";
import { classes } from "../ui/SinglePlaylistsPage";
import Subheader from "./Subheader";
import React from "react";
import Button from "@mui/material/Button";

const StyledNoteBox = styled(Box)(() => ({
  padding: "10px",
  position: "relative",
  height: "85vh",
  [`& .${classes.note_textfield}`]: {
    position: "absolute",
    // bottom: "0px",
    bottom: "10px",
    left: 0,
    padding: "8px",
  },
}));

export function PlaylistNote() {
  return (
    <>
      {/* title */}
      <Subheader title="Notes" />
      <StyledNoteBox>
        <Box className={classes.note_textfield}>
          <TextField
            id="outlined-textarea"
            label="Multiline Placeholder"
            placeholder="type notes"
            multiline
            rows={4}
          />
          <Button variant={"outlined"} color={"primary"} sx={{ my: 1 }}>
            Save
          </Button>
        </Box>
      </StyledNoteBox>
    </>
  );
}
