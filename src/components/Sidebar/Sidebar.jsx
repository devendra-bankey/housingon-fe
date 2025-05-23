import { Box, Slider, Typography } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BuildCircleOutlinedIcon from "@mui/icons-material/BuildCircleOutlined";
import { Link, useLocation } from "react-router-dom";

export const Sidebar = () => {
  const location = useLocation();

  const sidebarStyle = {
    width: 250,
    height: "100vh",
    bgcolor: "#000",
    p: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    position: "fixed",
    top: 0,
    left: 0,
    // boxShadow: 1,
    zIndex: 2,
  };

  const menuItemStyle = (isActive) => ({
    display: "flex",
    alignItems: "center",
    gap: 2,
    mb: 2,
    px: 1.5,
    py: 1,
    borderRadius: 1,
    bgcolor: isActive ? "#0B666A" : "transparent",
    "&:hover": {
      bgcolor: "#333",
      transition: "background-color 0.2s ease",
    },
    color: "white",
    textDecoration: "none",
    width: "100%",
  });

  const menuItems = [
    { label: "Overview", icon: <DashboardIcon />, path: "/dashboard" },
    { label: "Jobs", icon: <BuildCircleOutlinedIcon />, path: "/jobs" },
    {
      label: "Properties",
      icon: <BuildCircleOutlinedIcon />,
      path: "/properties",
    },
    { label: "Tenants", icon: <BuildCircleOutlinedIcon />, path: "/tenants" },
    {
      label: "Landlords",
      icon: <BuildCircleOutlinedIcon />,
      path: "/landlords",
    },
  ];

  return (
    <Box sx={sidebarStyle}>
      <Typography variant="h6" mb={5} color="white">
        Admin Panel
      </Typography>

      {menuItems.map(({ label, icon, path }) => {
        const isActive = location.pathname === path;

        return (
          <Link to={path} key={path} style={{ width: "100%" }}>
            <Box sx={menuItemStyle(isActive)}>
              {icon}
              <Typography variant="body1" color="white">
                {label}
              </Typography>
            </Box>
          </Link>
        );
      })}
    </Box>
  );
};
