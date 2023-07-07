import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";

function HowToUsePage() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box sx={{ maxWidth: "900px", margin: "auto" }}>
      <Typography
        variant={"h1"}
        sx={{ fontSize: "36px", fontWeight: "700", mb: 5 }}
      >
        {`How we can use this application`}
      </Typography>

      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography variant={expanded === "panel1" ? "h6" : "body1"}>
            Motivation of this project
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant={"body1"}>
            {`Clean YouTube is a platform designed for users who want to learn from YouTube without any distractions. This app allows users to watch playlists without being interrupted by suggested videos or other distractions. Clean YouTube has four main sections: Home, Playlists, Favorite, and Recent. In this documentation, we'll describe each section in detail.`}
          </Typography>
          <Typography variant={"body1"} sx={{ my: 1 }}>
            {`our focus is minimalist desktop design prioritizes simplicity and functionality, offering a clean and sleek aesthetic for easy navigation and content accessibility.`}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography
            variant={expanded === "panel2" ? "h6" : "body1"}
          >{`Home Page | Playlists Page | Favorite Page | Recent Page`}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant={"body1"}>
            {`
            The Home page displays the latest playlists added to Clean YouTube. Users can click on a playlist to go to the playlist page. Each playlist shows the playlist's name, thumbnail, and the number of videos in it.`}
          </Typography>
          <Typography variant={"body1"} sx={{ my: 1 }}>
            {`The Playlists page shows up to six playlists. Users can also add their own playlists by providing a playlist ID or URL. Each playlist on this page shows the playlist's name, thumbnail, and the number of videos in it. Users can click on a playlist to go to the playlist player.`}
          </Typography>
          <Typography variant={"body1"}>
            {`The Favorite page allows users to save playlists they like. Users can add or remove playlists from their Favorites list by clicking on the heart icon next to the playlist.
            The Recent page shows the playlists the user recently watched. Users can click on a playlist to go to the playlist player.
            `}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography
            variant={expanded === "panel3" ? "h6" : "body1"}
          >{`Playlist Player`}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant={"body1"}>
            {`
            The Playlist Player is a single player that allows users to watch a playlist without any distractions. The player has three sections: the video player, the playlist navigation, and the notes section. The video player plays the current video in the playlist. The playlist navigation shows the list of videos in the playlist and allows the user to navigate to any video in the playlist. The notes section allows the user to take notes while watching the playlist.`}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography
            variant={expanded === "panel4" ? "h6" : "body1"}
          >{`Dynamic Layout Control`}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant={"body1"}>
            {`
            In single player, user can remove sidebar, description, and notes sections.This allows the user to more concentration when watching tutorials.`}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography
            variant={expanded === "panel5" ? "h6" : "body1"}
          >{`How Can We Use This`}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant={"body1"}>
            {`
           To get started, you simply need to click the "Add Playlist" button. This action will open up a modal where you can either insert a valid playlist link or just the playlist ID. Once you provide the necessary information, the playlist data will be stored on your home page for easy access.`}{" "}
          </Typography>

          <Typography variant={"body1"} sx={{ my: 1 }}>
            {`Now, on your home page, you'll be able to see the playlist along with its thumbnail. Whenever you click on the playlist thumbnail, it will take you to a dedicated playlist player page. This page is designed with a React player that allows you to enjoy all the videos within the playlist. `}
          </Typography>
          <Typography variant={"body1"}>
            {`What's more, you'll find a convenient section on the playlist player page that displays all the playlist links, ensuring easy navigation between videos. And to make things even better, there's a dedicated note-taking section for each video. This way, you can jot down any important points or personal thoughts while watching.
            `}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default HowToUsePage;
