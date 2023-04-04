import PlaylistAddCircleIcon from "@mui/icons-material/PlaylistAddCircle";
import YouTubeIcon from "@mui/icons-material/YouTube";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { useState } from "react";
import Modal from "../shared/Modal";

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box className="">
      <AppBar position="static" sx={{ background: "#eee" }}>
        <Toolbar className="mx-12 flex justify-between">
          <Link href={"/?page=home"}>
            <IconButton
              size="large"
              edge="start"
              aria-label="menu"
              sx={{ color: "#f00" }}
              disableRipple
              disableFocusRipple
            >
              <YouTubeIcon fontSize="large" />
              <Typography
                variant="h6"
                component="div"
                className="flex-1 text-gray-700 uppercase font-semibold"
              >
                Clean Youtube
              </Typography>
            </IconButton>
          </Link>

          <Button
            variant="outlined"
            onClick={handleClickOpen}
            startIcon={<PlaylistAddCircleIcon />}
          >
            Add Playlist
          </Button>
        </Toolbar>
      </AppBar>
      <Modal open={open} handleClose={handleClose} />
    </Box>
  );
}
