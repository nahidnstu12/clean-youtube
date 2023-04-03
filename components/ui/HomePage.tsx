import PlaylistRemoveIcon from "@mui/icons-material/PlaylistRemove";
import IconButton from "@mui/material/IconButton";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import PlaylistCard from "components/shared/PlaylistCard";
import Link from "next/link";
import { useState, MouseEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import FavoritesPage from "./FavoritesPage";

const HomePage = () => {
  const dispatch = useDispatch();
  const { items: recentItems } = useSelector((state: any) => state?.recent || []);
  const { items: favItems } = useSelector((state: any) => state?.favorites || []);
  const { data } = useSelector((state: any) => state?.playlists || []);

  const [playlistId, setPlaylistId] = useState("");


  let favPlaylistArr = favItems?.map((playlist: any) => {
    return data[playlist];
  }).slice(0, 3);

  let recentPlaylistArr = recentItems?.map((playlist: any) => {
    return data[playlist];
  }).slice(0, 3);

  let newPlaylistsArr = Object.values(data).slice(0, 3);

  console.log("playlistArr recent", favPlaylistArr);

  return <>
  <PlaylistCard title="Favorite" playlistArr={favPlaylistArr} icon={<PlaylistRemoveIcon />} />
  <PlaylistCard title="Recent" playlistArr={recentPlaylistArr} icon={<PlaylistRemoveIcon />} />
  <PlaylistCard title="New Playlists" playlistArr={newPlaylistsArr} icon={<PlaylistRemoveIcon />} />
  </>;
};

export default HomePage;
