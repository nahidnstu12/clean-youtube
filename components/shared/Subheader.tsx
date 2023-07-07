import React from "react";
import { Typography, Stack } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

interface IProps {
  title: string;
  handleClick: any;
  icon?: any;
}

export default function Subheader({ title, icon, handleClick }: IProps) {
  return (
    <>
      <Stack
        direction="row"
        sx={{ justifyContent: "space-between", p: "6px 2px" }}
      >
        <Typography variant="body1" color={"#999"}>
          {title}
        </Typography>
        {icon || (
          <HighlightOffIcon
            sx={{ color: "#777", cursor: "pointer" }}
            onClick={handleClick}
          />
        )}
      </Stack>
    </>
  );
}
