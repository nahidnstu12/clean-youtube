import { Box, TextField } from "@mui/material";
import { styled } from "@mui/system";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { addNotePlaylist } from "../../redux/features/notes";
import { classes } from "../ui/SinglePlaylistsPage";
import Subheader from "./Subheader";
import React, { useState } from "react";
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
  const [noteText, setNoteText] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();
  const handleSubmit = () => {
    const noteObj = {
      playlistId: router.query.playlistId,
      videoId: router.query.videoId,
      note: noteText,
    };
    dispatch(addNotePlaylist(noteObj));
    console.log("submit data--", noteObj);
  };
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
            value={noteText}
            onChange={(e: any) => setNoteText(e.target.value)}
            multiline
            maxRows={4}
          />
          <Button
            variant={"outlined"}
            color={"primary"}
            type={"submit"}
            sx={{ my: 1 }}
            onClick={handleSubmit}
          >
            Save
          </Button>
        </Box>
      </StyledNoteBox>
    </>
  );
}
