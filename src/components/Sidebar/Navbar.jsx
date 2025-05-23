import { Box, Typography } from "@mui/material";

import Notifications from "@mui/icons-material/Notifications";
export const Navbar = () => {
  const sidebarStyle = {
    width: "100vw",
    height: 50,
    bgcolor: "#fff",
    p: 2,
    display: "flex",
    flexDirection: "column",
    justContent: "space-around",
    alignItems: "end",
    position: "fixed",
    top: 0,
    right: 0,
  };

  return (
    <Box sx={sidebarStyle}>
      <Notifications style={{ color: "black" }} />
    </Box>
  );
};
