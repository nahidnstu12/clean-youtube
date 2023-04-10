import PlaylistCard from "components/shared/PlaylistCard";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const HomePage = () => {
  const dispatch = useDispatch();
  const { items: recentItems } = useSelector(
    (state: any) => state?.recent || []
  );
  const { items: favItems } = useSelector(
    (state: any) => state?.favorites || []
  );
  const { data } = useSelector((state: any) => state?.playlists || []);

  const [playlistId, setPlaylistId] = useState("");

  let favPlaylistArr = favItems
    ?.map((playlist: any) => {
      return data[playlist];
    })
    .slice(0, 3);

  let recentPlaylistArr = recentItems
    ?.map((playlist: any) => {
      return data[playlist];
    })
    .slice(0, 3);

  let newPlaylistsArr = Object.values(data).slice(0, 3);

  return (
    <>
      <PlaylistCard title="Favorite" playlistArr={favPlaylistArr} />
      <PlaylistCard title="Recent" playlistArr={recentPlaylistArr} />
      <PlaylistCard title="New Playlists" playlistArr={newPlaylistsArr} />
    </>
  );
};

export default HomePage;
