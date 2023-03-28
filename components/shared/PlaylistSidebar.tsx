import { Box, Typography } from "@mui/material";
interface IPlaylistSidebar {
  items: any;
}
export function PlaylistSidebar({ items }: IPlaylistSidebar) {
  return (
    <Box sx={{ height: "90vh", overflowY: "scroll" }}>
      {items?.playlistItems?.map((playlist: any) => (
        <Typography
          key={playlist?.contentDetails?.videoId}
          sx={{ fontSize: "11px" }}
        >
          {playlist?.title}
        </Typography>
      ))}
    </Box>
  );
}
