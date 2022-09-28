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
import PlaylistPage from "../ui/PlaylistsPage";

export default function Sidebar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
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
        <Tab icon={<HomeIcon />} label="Home" className={`${value === 0 && "bg-blue-200"}`} />
        <Tab icon={<PlaylistAddIcon />} label="Playlists" className={`${value === 1 && "bg-blue-200"}`}/>
        <Tab icon={<FavoriteIcon />} label="Favorites" className={`${value === 2 && "bg-blue-200"}`}/>
        <Tab icon={<ReceiptIcon />} label="Recents" className={`${value === 3 && "bg-blue-200"}`}/>
        {/* <Stack className={"absolute bottom-4 w-full"}> */}
          <Tab icon={<ArchiveIcon />} label="Archived" className={`absolute bottom-4 w-full ${value === 4 && "bg-blue-200"}`}/>
        {/* </Stack> */}
      </Tabs>
      <TabPanel value={value} index={0}>
        Home
      </TabPanel>
      <TabPanel value={value} index={1}>
        <PlaylistPage />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Favorites
      </TabPanel>
      <TabPanel value={value} index={3}>
        Recent
      </TabPanel>
      <TabPanel value={value} index={4}>
        Archive
      </TabPanel>
    </Box>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
