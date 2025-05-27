import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Navbar } from "../components/Sidebar/Navbar";

const drawerWidth = 240;

export const MainLayout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Navbar />
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          px: 4,
          py: 2,
          mt: "64px", // height of navbar
          ml: `${drawerWidth}px`, // sidebar width
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};
