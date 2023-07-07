import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleLayoutDescription,
  toggleLayoutNotes,
  toggleLayoutSidebar,
} from "../../redux/features/Layout";
import { LAYOUT } from "../../services/utils/enums";

export default function LayoutShape() {
  const dispatch = useDispatch();
  const { data: layout } = useSelector((state: any) => state.layout);
  const isSidebarCollapse = layout[LAYOUT.SIDEBAR];
  const isDescriptionCollapse = layout[LAYOUT.DESCRIPTION];
  const isNotesCollapse = layout[LAYOUT.NOTES];

  return (
    <Stack direction={"row"} spacing={1} sx={{ p: 2, background: "#eee" }}>
      <Paper
        elevation={1}
        sx={{
          width: "40px",
          height: "100px",
          border: isSidebarCollapse && "1px dashed #999",
          cursor: "pointer",
        }}
        onClick={() => dispatch(toggleLayoutSidebar(!isSidebarCollapse))}
      />
      <Paper
        elevation={1}
        sx={{
          width: "100px",
          height: "100px",
          cursor: "pointer",
          border: isDescriptionCollapse && "1px dashed #999",
        }}
        onClick={() =>
          dispatch(toggleLayoutDescription(!isDescriptionCollapse))
        }
      />
      <Paper
        elevation={1}
        sx={{
          width: "40px",
          height: "100px",
          border: isNotesCollapse && "1px dashed #999",
          cursor: "pointer",
        }}
        onClick={() => dispatch(toggleLayoutNotes(!isNotesCollapse))}
      />
    </Stack>
  );
}
