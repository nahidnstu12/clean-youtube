import { useEffect, useState } from "react";
import { getPlaylist } from "../api";
interface IState{
  playlists: {},
  recent: [],
  favorites: []
}
const usePlaylist = () => {
  const [state, setState] = useState<IState>({
    playlists: {},
    recent: [],
    favorites: [],
  });
  const [errors, setErrors] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  //   useEffect(() => {}, []);

  const getPlaylistVideos = async (playlistId:string, force = false) => {
    // @ts-ignore
    if (state.playlists[playlistId]  && !force) return;

    setLoading(true);
    let result: any
    try {
      result = await getPlaylist(playlistId);
      setErrors("");
    } catch (error:any) {
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

  const addRecentPlaylists = (playlistId:string) => {
    setState((prev:any) => ({
      ...prev,
      recent: [playlistId, ...prev],
    }));
  };

  const addFavoritePlaylists = (playlistId:string) => {
    setState((prev:any) => ({
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
