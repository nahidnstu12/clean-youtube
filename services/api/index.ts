import axios from "axios";
interface ItemProp {
  (playlistId: string, pageToken?: string, result?: []): any;
}
interface PlaylistProps {}
const apikey_yt = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

export const getPlaylistItem: ItemProp = async (
  playlistId,
  pageToken = "",
  result = []
) => {
  const URL = `https://www.googleapis.com/youtube/v3/playlistItems?key=${apikey_yt}&part=id,contentDetails,snippet&maxResults=50&playlistId=${playlistId}&pageToken=${pageToken}`;

  const { data } = await axios.get(URL);
  result = [...result, ...data.items] as [];
  if (data.nextPageToken) {
    result = getPlaylistItem(playlistId, data?.nextPageToken, result);
  }

  return result;
};

export const getPlaylist = async (playlistId: string) => {
  const URL = `https://www.googleapis.com/youtube/v3/playlists?key=${apikey_yt}&part=snippet&id=${playlistId}`;

  const { data } = await axios.get(URL);

  if (data.items.length) {
    let playlistItems = await getPlaylistItem(playlistId);
    const {
      title: playlistTitle,
      description: playlistDescription,
      thumbnails,
      channelTitle,
    } = data?.items[0]?.snippet;

    playlistItems = playlistItems?.map((item: any) => {
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
      playlistThumbnails: thumbnails,
      channelTitle,
      playlistItems,
    };
  }
};
