import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import PlaylistAddCircleIcon from '@mui/icons-material/PlaylistAddCircle';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Navbar() {
  return (
    <Box className="">
      <AppBar position="static" className="bg-gray-300 ">
        <Toolbar className="mx-12 ">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            className="mr-4 text-red-500 text-base"
          >
            <YouTubeIcon fontSize="large" />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            className="flex-1 text-gray-700 uppercase font-semibold"
          >
            Clean Youtube
          </Typography>
          <Button variant="outlined" startIcon={<PlaylistAddCircleIcon />}>
            Add Playlist
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
