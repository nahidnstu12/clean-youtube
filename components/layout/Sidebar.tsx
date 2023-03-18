import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box, Stack } from "@mui/system";
import { Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import ReceiptIcon from "@mui/icons-material/Receipt";
import ArchiveIcon from "@mui/icons-material/Archive";
import { SIDEBAR_ENUMS } from "../../services/utils/enums";
import PlaylistPage from "../ui/PlaylistsPage";
interface IProps {
  playlists: any;
  getPlaylistVideos: any;
}
export default function Sidebar({ playlists, getPlaylistVideos }: IProps) {
  const [value, setValue] = React.useState<number>(SIDEBAR_ENUMS.PLAYLISTS);

  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: "85vh",
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="icon label tabs example"
        orientation="vertical"
        sx={{ borderRight: 1, borderColor: "divider", width: "200px" }}
      >
        <Tab
          icon={<HomeIcon />}
          label="Home"
          className={`${value === SIDEBAR_ENUMS.HOME && "bg-blue-200"}`}
        />
        <Tab
          icon={<PlaylistAddIcon />}
          label="Playlists"
          className={`${value === SIDEBAR_ENUMS.PLAYLISTS && "bg-blue-200"}`}
        />
        <Tab
          icon={<FavoriteIcon />}
          label="Favorites"
          className={`${value === SIDEBAR_ENUMS.FAVORITES && "bg-blue-200"}`}
        />
        <Tab
          icon={<ReceiptIcon />}
          label="Recent"
          className={`${value === SIDEBAR_ENUMS.RECENT && "bg-blue-200"}`}
        />
        {/* <Stack className={"absolute bottom-4 w-full"}> */}
        <Tab
          icon={<ArchiveIcon />}
          label="Archived"
          className={`absolute bottom-4 w-full ${
            value === SIDEBAR_ENUMS.ARCHIVED && "bg-blue-200"
          }`}
        />
        {/* </Stack> */}
      </Tabs>
      <TabPanel value={value} index={SIDEBAR_ENUMS.HOME}>
        Home
      </TabPanel>
      <TabPanel value={value} index={SIDEBAR_ENUMS.PLAYLISTS}>
        <PlaylistPage playlists={playlists} />
      </TabPanel>
      <TabPanel value={value} index={SIDEBAR_ENUMS.FAVORITES}>
        Favorites
      </TabPanel>
      <TabPanel value={value} index={SIDEBAR_ENUMS.RECENT}>
        Recent
      </TabPanel>
      <TabPanel value={value} index={SIDEBAR_ENUMS.ARCHIVED}>
        Archive
      </TabPanel>
    </Box>
  );
}

function TabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      sx={{ p: 3 }}
    >
      {value === index && children}
    </Box>
  );
}
