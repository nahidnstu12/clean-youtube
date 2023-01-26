import { useEffect, useState } from "react";
import { getPlaylist } from "../api";

const usePlaylist = () => {
  const [state, setState] = useState({
    playlists: {},
    recent: [],
    favorites: [],
  });
  const [errors, setErrors] = useState("");
  const [loading, setLoading] = useState(false);
  //   useEffect(() => {}, []);

  const getPlaylistVideos = async (playlistId, force = false) => {
    if (state.playlists[playlistId] && !force) return;

    setLoading(true);
    let result 
    try {
      result = await getPlaylist(playlistId);
      setErrors("");
    } catch (error) {
      console.log("Error", error?.response?.data?.error?.message);
      setErrors(error?.response?.data?.error?.message);
    } finally {
      setLoading(false);
    }

    setState((prev) => ({
      ...prev,
      playlists: {
        ...prev.playlists,
        [playlistId]: result,
      },
    }));
  };

  const addRecentPlaylists = (playlistId) => {
    setState((prev) => ({
      ...prev,
      recent: [playlistId, ...prev],
    }));
  };

  const addFavoritePlaylists = (playlistId) => {
    setState((prev) => ({
      ...prev,
      favorites: [playlistId, ...prev],
    }));
  };

  const getPlaylistByIds = (ids = []) => {
    return ids.map((id) => state.playlists[id]);
  };

  return {
    playlists: state.playlists,
    favorites: getPlaylistByIds(state.favorites),
    recent: getPlaylistByIds(state.recent),
    addFavoritePlaylists,
    addRecentPlaylists,
    getPlaylistVideos,
  };
};

export default usePlaylist;
