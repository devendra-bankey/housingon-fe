import { Box, Button, Slider, Typography } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BuildCircleOutlinedIcon from "@mui/icons-material/BuildCircleOutlined";
import RealEstateAgentIcon from "@mui/icons-material/RealEstateAgent";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import EngineeringIcon from "@mui/icons-material/Engineering";
import GroupsIcon from "@mui/icons-material/Groups";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUserThunk } from "../../store/authSlice";
export const Sidebar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const sidebarStyle = {
    width: 250,
    height: "100vh",
    bgcolor: "#000",
    p: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "space-between",
    position: "fixed",
    top: 0,
    left: 0,
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
    { label: "Overview", icon: <DashboardIcon />, path: "/admin" },
    { label: "Jobs", icon: <BuildCircleOutlinedIcon />, path: "/admin/jobs" },
    {
      label: "Properties",
      icon: <RealEstateAgentIcon />,
      path: "/admin/properties",
    },
    { label: "Tenants", icon: <PeopleAltIcon />, path: "/admin/tenants" },
    {
      label: "Landlords",
      icon: <GroupsIcon />,
      path: "/admin/landlords",
    },
    {
      label: "Contractors",
      icon: <EngineeringIcon />,
      path: "/admin/contractors",
    },
  ];

  const handleLogout = async () => {
    const result = await dispatch(logoutUserThunk());
    if (logoutUserThunk.fulfilled.match(result)) {
      // Optional: clear Redux state here
      navigate("/");
    } else {
      alert(result.payload?.message || "Failed to log out");
    }
  };

  return (
    <Box sx={sidebarStyle}>
      <Box sx={{ width: "100%" }}>
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
      <Box sx={{ width: "100%" }}>
        <Button variant="contained" onClick={handleLogout}>
          Logout
        </Button>
      </Box>
    </Box>
  );
};
