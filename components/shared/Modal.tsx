import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchPlaylist } from "../../redux/features/playlists";

interface IProps {
  open: boolean;
  handleClose: () => void;
}
export default function Modal({ open, handleClose }: IProps) {
  const [playlistId, setPlaylistId] = useState<string>("");
  const dispatch = useDispatch();
  const closeModal = () => {
    handleClose();
    setPlaylistId("");
  };
  const handleSubmit = async () => {
    // getPlaylistVideos(playlistId);
    await dispatch(fetchPlaylist(playlistId));
    handleClose();
    setPlaylistId("");
  };
  return (
    <div>
      <Dialog open={open} onClose={closeModal}>
        <DialogTitle>Add Playlist</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Provide youtube playlists id or playlist url for saving playlist
          </DialogContentText>
          <TextField
            error={false}
            id="outlined-error-helper-text"
            label=""
            fullWidth
            value={playlistId}
            onChange={(evt) => setPlaylistId(evt.currentTarget.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeModal}>Cancel</Button>
          <Button onClick={handleSubmit}>Add Playlist</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
