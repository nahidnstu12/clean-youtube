import { Box, Typography } from "@mui/material";

const ArchivePage = () => {
  return (
    <Box>
      <Typography sx={{ fontSize: "20px", fontWeight: "700" }}>
        Upcoming Features
      </Typography>
      <Typography variant={"caption"}>
        Here we can store videos. Videos will persists, if we delete that
        playlists.{" "}
      </Typography>
    </Box>
  );
};

export default ArchivePage;
