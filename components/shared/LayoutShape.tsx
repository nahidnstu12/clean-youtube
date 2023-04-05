import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";

export default function LayoutShape() {
  return (
    <Stack direction={"row"} spacing={1} sx={{ p: 2, background: "#eee" }}>
      <Paper
        elevation={1}
        sx={{ width: "40px", height: "100px", border: "1px dashed #999" }}
      />
      <Paper elevation={1} sx={{ width: "100px", height: "100px" }} />
      <Paper elevation={1} sx={{ width: "40px", height: "100px" }} />
    </Stack>
  );
}
