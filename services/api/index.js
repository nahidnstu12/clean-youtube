import axios from "axios";

const apikey_yt = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

export const getPlaylistItem = async (
  playlistId,
  pageToken = "",
  result = []
) => {
  const URL = `https://www.googleapis.com/youtube/v3/playlistItems?key=${apikey_yt}&part=id,contentDetails,snippet&maxResults=50&playlistId=${playlistId}&pageToken=${pageToken}`;

  const { data } = await axios.get(URL);
  result = [...result, ...data.items];
//   console.log({ result });
  if (data.nextPageToken) {
    result = getPlaylistItem(playlistId, data?.nextPageToken, result);
  }

  return result;
};

export const getPlaylist = async (playlistId) => {
    
  const URL = `https://www.googleapis.com/youtube/v3/playlists?key=${apikey_yt}&part=snippet&id=${playlistId}`;
  const { data } = await axios.get(URL);

  let playlistItems = await getPlaylistItem(playlistId);
  const {
    title: playlistTitle,
    description: playlistDescription,
    thumbnails,
    channelTitle,
  } = data?.items[0]?.snippet;

  playlistItems = playlistItems?.map((item) => {
    const {
      title,
      description,
      thumbnails: { medium },
    } = item.snippet;

    return {
      title,
      description,
      thumbnails: medium,
      contentDetails: item.contentDetails,
    };
  });

  return {
    playlistId,
    playlistTitle,
    playlistDescription,
    playlistThumbnails: thumbnails.default,
    channelTitle,
    playlistItems
  };
};
