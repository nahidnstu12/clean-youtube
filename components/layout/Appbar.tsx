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
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import { useSelector } from "react-redux";
import Modal from "../shared/Modal";
import ViewArrayIcon from "@mui/icons-material/ViewArray";
import LayoutShape from "components/shared/LayoutShape";

export default function Navbar() {
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);
  const [openLayout, setOpenLayout] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const { data } = useSelector((state: any) => state.playlists);
  let playlistArr = Object.values(data);
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
    <Box>
      <AppBar position="static" sx={{ background: "#eee" }}>
        <Toolbar
          sx={{ mx: "3rem", display: "flex", justifyContent: "space-between" }}
        >
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
                sx={{
                  flex: "1",
                  color: "rgb(55 65 81)",
                  textTransform: "uppercase",
                  fontWeight: "600",
                }}
              >
                Clean Youtube
              </Typography>
            </IconButton>
          </Link>
          <Stack spacing={2} direction="row">
            {router.query.playlistId && (
              <Button
                aria-describedby={"layout"}
                variant="outlined"
                onClick={handleClickLayout}
                startIcon={<ViewArrayIcon />}
              >
                Layout
              </Button>
            )}

            <Button
              variant="outlined"
              onClick={handleClickOpen}
              disabled={playlistArr.length >= 6}
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
