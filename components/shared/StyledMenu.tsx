import { Menu } from "@mui/material";
import { ReactNode } from "react";

interface IMenu {
  handleClose: () => void;
  anchorEl: null | HTMLElement;
  open: boolean;
  children: ReactNode;
}

function StyledMenu({ handleClose, anchorEl, open, children }: IMenu) {
  return (
    <Menu
      id="demo-positioned-menu"
      aria-labelledby="demo-positioned-button"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
    >
      {children}
    </Menu>
  );
}

export default StyledMenu;
