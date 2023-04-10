import { Box, List, ListItem, ListItemText, TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/system";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { toggleLayoutNotes } from "../../redux/features/Layout";
import {
  addNotePlaylist,
  deleteNoteFromPlaylist,
} from "../../redux/features/notes";
import { classes } from "../ui/SinglePlaylistsPage";
import Subheader from "./Subheader";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const StyledNoteBox = styled(Box)(() => ({
  padding: "10px 0",
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
interface IButton {
  btnText: string;
  clickHandler: any;
}
export function PlaylistNote() {
  const dispatch = useDispatch();
  const router = useRouter();

  const { data } = useSelector((state: any) => state.note);

  const [noteText, setNoteText] = useState("");
  const [confirmDelete, setConfirmDelete] = useState(0);

  const videoId = router.query.videoId as string;
  const playlistId = router.query.playlistId as string;

  const videoNoteObj =
    (playlistId && videoId && data[playlistId] && data[playlistId][videoId]) ||
    [];

  const ButtonText = ({ btnText, clickHandler }: IButton) => {
    return (
      <Button
        variant={"text"}
        color={"primary"}
        disableElevation
        disableRipple
        disableFocusRipple
        size={"small"}
        sx={{
          fontSize: "9px",
          p: 0,
          minWidth: "40px",
          fontWeight: 600,
        }}
        onClick={clickHandler}
      >
        {btnText}
      </Button>
    );
  };

  const handleSubmit = () => {
    const noteObj = {
      playlistId: router?.query?.playlistId,
      videoId: router?.query?.videoId,
      note: noteText,
    };
    if (noteText !== "") {
      dispatch(addNotePlaylist(noteObj));
      setNoteText("");
    } else {
      alert("Please write something");
    }
  };

  const handleDeleteNote = (noteIndex: number) => {
    if (noteIndex >= 0) {
      const noteObj = {
        playlistId: router?.query?.playlistId,
        videoId: router?.query?.videoId,
        noteIndex,
      };

      dispatch(deleteNoteFromPlaylist(noteObj));
    }
  };
  const handleCLick = () => {
    dispatch(toggleLayoutNotes(false));
  };

  return (
    <>
      {/* title */}
      <Subheader title="Notes" handleClick={handleCLick} />
      <StyledNoteBox>
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
            position: "relative",
            overflow: "auto",
            maxHeight: 300,
            "& li": { padding: 0 },
          }}
          subheader={<li />}
        >
          {videoNoteObj.map((note: string, index: number) => (
            // <li key={`section-${index}`}>
            <ListItem
              dense
              alignItems={"flex-start"}
              sx={{ background: "#eee", my: "6px" }}
              key={`section-${index}`}
              disableGutters
              disablePadding
              secondaryAction={
                confirmDelete !== index + 1 && (
                  <IconButton aria-label="delete">
                    <DeleteOutlineIcon
                      onClick={() => setConfirmDelete(index + 1)}
                    />
                  </IconButton>
                )
              }
            >
              <ListItemText
                primary={note}
                secondary={
                  confirmDelete == index + 1 && (
                    <Box>
                      Are you sure to{" "}
                      <ButtonText
                        btnText={"Delete"}
                        clickHandler={() => handleDeleteNote(index)}
                      />
                      or{" "}
                      <ButtonText
                        btnText={"Cancel"}
                        clickHandler={() => setConfirmDelete(0)}
                      />
                    </Box>
                  )
                }
                primaryTypographyProps={{
                  variant: "caption",
                }}
                secondaryTypographyProps={{
                  variant: "caption",
                }}
              />
            </ListItem>
            // </li>
          ))}
        </List>
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
