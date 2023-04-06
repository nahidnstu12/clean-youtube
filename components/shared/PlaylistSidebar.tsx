import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import { Stack } from "@mui/system";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { urlParamsUpdate } from "../../services/utils/utils";
import Subheader from "./Subheader";

interface IPlaylistSidebar {
  items: any;
  selectedVideoId: string;
  setSelectedVideoId: (videoId: string) => void;
}
export function PlaylistSidebar({
  items,
  selectedVideoId,
  setSelectedVideoId,
}: IPlaylistSidebar) {
  const router = useRouter();

  useEffect(() => {
    const videoId = items?.playlistItems[0]?.contentDetails?.videoId;
    urlParamsUpdate(router, {
      playlistId: router.query.playlistId,
      videoId,
    });
  }, []);

  const handleListItemClick = (event: any, videoId: string) => {
    setSelectedVideoId(videoId);
    urlParamsUpdate(router, {
      playlistId: router.query.playlistId,
      videoId,
    });
  };

  return (
    <Box sx={{ height: "88vh", overflowY: "scroll" }}>
      <List
        component="nav"
        disablePadding
        aria-label="single playlist sidebar"
        subheader={
          <ListSubheader component="div" id="title">
            <Subheader title="Playlist Sidebar" />
          </ListSubheader>
        }
      >
        {items?.playlistItems?.map((playlist: any, index: number) => (
          <ListItemButton
            key={playlist?.contentDetails?.videoId}
            selected={selectedVideoId === playlist?.contentDetails?.videoId}
            onClick={(event) =>
              handleListItemClick(event, playlist?.contentDetails?.videoId)
            }
            dense
            disableGutters
          >
            <Stack
              sx={{
                fontSize: "13px",
                background: "#3b82f680",
                color: "#fff",
                borderRadius: "50%",
                p: "2px 6px",
                mx: "8px",
              }}
            >
              {index + 1}
            </Stack>
            <ListItemText
              primary={playlist?.title}
              //  secondary={"8.45"}
              primaryTypographyProps={{
                variant: "caption",
              }}
            />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
}
