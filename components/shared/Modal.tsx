import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';

interface IProps{
  open:boolean;
   handleClose: () => void;
    getPlaylistVideos:any;
}
export default function Modal({open, handleClose, getPlaylistVideos}:IProps) {
 const [playlistId, setPlaylistId] = useState("")
 const closeModal = () => {
  handleClose()
  setPlaylistId("")
 }
 const handleSubmit = () => {
  getPlaylistVideos(playlistId)
  handleClose()
  setPlaylistId("")
 }
console.log(playlistId);
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
          // helperText="Incorrect entry."
          fullWidth
          value={playlistId}
          onChange={(evt)=>setPlaylistId(evt.currentTarget.value)}
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
