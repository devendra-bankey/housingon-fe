import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0B666A",
    },
    error: {
      main: "#DC2626", // Destructive
      light: "#FFC8C8", // Destructive Muted
    },
    background: {
      default: "#E2E8F0", // Ghost
    },
    success: {
      main: "#22BA62",
    },
    warning: {
      main: "#FFCB3D",
    },
    info: {
      main: "#4E4FEB",
      light: "#A3A4FF", // Info Muted
    },
    text: {
      primary: "#64748B", // Subtitle
    },
  },
});

export default theme;
