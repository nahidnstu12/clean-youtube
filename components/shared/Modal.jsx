import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function Modal({open, handleClose}) {
 

  return (
    <div>
      
      <Dialog open={open} onClose={handleClose}>
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
        />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Add Playlist</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
