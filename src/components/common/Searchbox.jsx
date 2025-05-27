import { InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBox = ({ placeholder = "Search", onChange }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        display: "flex",
        alignItems: "center",
        width: 250,
        height: 40,
        px: 2,
        borderRadius: "999px",
        backgroundColor: "#F7F9FB", // soft light background
        border: "1px solid #E2E8F0", // light border color
      }}
    >
      <SearchIcon sx={{ color: "#94A3B8", fontSize: 20, mr: 1 }} />
      <InputBase
        placeholder={placeholder}
        onChange={onChange}
        sx={{
          flex: 1,
          fontSize: 14,
          color: "#334155",
          "::placeholder": {
            color: "#94A3B8", // muted grey
          },
        }}
      />
    </Paper>
  );
};

export default SearchBox;
