import axios from "axios";
import { useEffect } from "react";
import Navbar from "../components/layout/Appbar";
import Sidebar from "../components/layout/Sidebar";

export default function Home() {
  let key = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
  let pageToken = "";
  let playlistId = "PL_XxuZqN0xVD0op-QDEgyXFA4fRPChvkl";

  useEffect(() => {
    async function getPlaylist() {
      const URL = `https://www.googleapis.com/youtube/v3/playlistItems?key=${key}&part=id,contentDetails,snippet&maxResults=50&playlistId=${playlistId}&pageToken=${pageToken}`;

      //
      const { data } = await axios.get(URL);
      console.log(data);
    }
    getPlaylist();

    // const { data } = await axios.get(URL);
  }, [key, pageToken, playlistId]);
  return (
    <>
      <Navbar />
      <Sidebar />
    </>
  );
}
