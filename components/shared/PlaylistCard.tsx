import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import Link from "next/link";
interface IProps {
  title: string;
  playlistArr: any;
  handleClick?: (e: any, id: string) => void;
  icon?: any;
}
const PlaylistCard = ({ title, playlistArr, handleClick, icon }: IProps) => {
  return (
    <ImageList gap={12}>
      <ImageListItem key="Subheader" cols={3}>
        {/* @ts-ignore */}
        <ListSubheader component="div" className="text-lg">
          {title}
        </ListSubheader>
      </ImageListItem>
      {playlistArr?.map((item: any) => (
        <ImageListItem key={item?.playlistId}>
          <Link href={`/playlists/${item?.playlistId}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item?.playlistThumbnails?.url}
              srcSet={item?.playlistThumbnails?.medium?.url}
              alt={item?.playlistTitle}
              loading="lazy"
              // style={{width: "33.3%"}}
            />
          </Link>

          <ImageListItemBar
            title={item?.playlistTitle}
            subtitle={item?.channelTitle}
            actionIcon={
              <>
                <IconButton
                  aria-label={`info about ${item?.playlistTitle}`}
                  sx={{
                    color: "rgba(255, 255, 255, 0.54)",
                    background: "#0754a0ba",
                    p: 1,
                  }}
                  onClick={(e) => handleClick && handleClick(e, item?.playlistId)}
                >
                  {icon || <MoreVertIcon />}
                </IconButton>
              </>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default PlaylistCard;
