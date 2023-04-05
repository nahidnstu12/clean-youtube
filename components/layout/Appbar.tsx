import PlaylistAddCircleIcon from "@mui/icons-material/PlaylistAddCircle";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Popover } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";
import Link from "next/link";
import { MouseEvent, useState } from "react";
import Modal from "../shared/Modal";
import ViewArrayIcon from "@mui/icons-material/ViewArray";
import LayoutShape from "components/shared/LayoutShape";

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);
  const [openLayout, setOpenLayout] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClickLayout = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setOpenLayout(true);
  };

  const handleClose2 = () => {
    setAnchorEl(null);
    setOpenLayout(false);
  };

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
          <Stack spacing={2} direction="row">
            <Button
              aria-describedby={"layout"}
              variant="outlined"
              onClick={handleClickLayout}
              startIcon={<ViewArrayIcon />}
            >
              Layout
            </Button>

            <Button
              variant="outlined"
              onClick={handleClickOpen}
              startIcon={<PlaylistAddCircleIcon />}
            >
              Add Playlist
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
      <Modal open={open} handleClose={handleClose} />
      <Popover
        id={"layout"}
        open={openLayout}
        anchorEl={anchorEl}
        onClose={handleClose2}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <LayoutShape />
      </Popover>
    </Box>
  );
}
