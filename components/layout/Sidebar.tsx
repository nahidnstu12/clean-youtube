import ArchiveIcon from "@mui/icons-material/Archive";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import ReceiptIcon from "@mui/icons-material/Receipt";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { Box } from "@mui/system";
import FavoritesPage from "components/ui/FavoritesPage";
import { useRouter } from "next/router";
import * as React from "react";
import { useEffect, useMemo } from "react";
import { SIDEBAR_ENUMS } from "../../services/utils/enums";
import HomePage from "../ui/HomePage";
import PlaylistPage from "../ui/PlaylistsPage";
import RecentPage from "../ui/RecentPage";

export default function Sidebar() {
  const router = useRouter();
  const [value, setValue] = React.useState<number>(SIDEBAR_ENUMS.HOME);

  const pageNames = useMemo(
    () => ["home", "playlists", "favorites", "recent", "archived"],
    []
  );

  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);

    router.push(`?page=${pageNames[newValue]}`).then();
  };

  // page persisted
  useEffect(() => {
    const pageParams: string = router.query.page as string;
    if (pageParams) {
      setValue(pageNames.indexOf(pageParams));
    }
  }, [router, pageNames]);

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
        sx={{
          borderRight: 1,
          borderColor: "divider",
          width: "200px",
          // overflowY: "scroll",
          // position: "fixed",
        }}
      >
        <Tab
          icon={<HomeIcon />}
          label="Home"
          sx={{ background: `${value === SIDEBAR_ENUMS.HOME && "#3b82f680"}` }}
        />
        <Tab
          icon={<PlaylistAddIcon />}
          label="Playlists"
          sx={{
            background: `${value === SIDEBAR_ENUMS.PLAYLISTS && "#3b82f680"}`,
          }}
        />
        <Tab
          icon={<FavoriteIcon />}
          label="Favorites"
          sx={{
            background: `${value === SIDEBAR_ENUMS.FAVORITES && "#3b82f680"}`,
          }}
        />
        <Tab
          icon={<ReceiptIcon />}
          label="Recent"
          sx={{
            background: `${value === SIDEBAR_ENUMS.RECENT && "#3b82f680"}`,
          }}
        />
        {/* <Stack className={"absolute bottom-4 w-full"}> */}
        <Tab
          icon={<ArchiveIcon />}
          label="Archived"
          sx={{
            position: "absolute",
            bottom: "10px",
            width: "100%",
            background: `${value === SIDEBAR_ENUMS.ARCHIVED && "#3b82f680"}`,
          }}
          className={`${value === SIDEBAR_ENUMS.ARCHIVED && "bg-blue-200"}`}
        />
        {/* </Stack> */}
      </Tabs>
      <TabPanel value={value} index={SIDEBAR_ENUMS.HOME}>
        <HomePage />
      </TabPanel>
      <TabPanel value={value} index={SIDEBAR_ENUMS.PLAYLISTS}>
        <PlaylistPage />
      </TabPanel>
      <TabPanel value={value} index={SIDEBAR_ENUMS.FAVORITES}>
        <FavoritesPage />
      </TabPanel>
      <TabPanel value={value} index={SIDEBAR_ENUMS.RECENT}>
        <RecentPage />
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
