import axios from "axios";
import { useEffect } from "react";
import Navbar from "../components/layout/Appbar";
import Sidebar from "../components/layout/Sidebar";
import { getPlaylist, getPlaylistItem } from "../services/api";
import usePlaylist from "../services/hooks/usePlaylists";

export default function Home() {
  let key = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
  let pageToken = "";
  let playlistId = "PLpP9FLMkNf57Vzie8-t-87UQA0qWP_xPo";
  const {getPlaylistVideos, playlists} = usePlaylist()

  // getPlaylistVideos('')
  // console.log(playlists);
  
  
  return (
    <>
      <Navbar getPlaylistVideos={getPlaylistVideos}/>
      <Sidebar getPlaylistVideos={getPlaylistVideos} playlists={playlists}/>
    </>
  );
}
