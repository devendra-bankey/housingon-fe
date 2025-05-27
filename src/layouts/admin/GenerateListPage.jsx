import {
  Typography,
  Card,
  Box,
  Button,
  ToggleButtonGroup,
  ToggleButton,
  IconButton,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import FilterListIcon from "@mui/icons-material/FilterList";
import EditIcon from "@mui/icons-material/Edit";
import SearchBox from "../../components/common/Searchbox";
import CustomTable from "../../components/common/Table";
import "../../assets/styles/mui.css";
import { useState } from "react";

const GenerateListPage = ({ type, title, data, columns }) => {
  const [alignment, setAlignment] = useState(type);
  const handleChange = (event, newAlignment) => setAlignment(newAlignment);
  const handleEdit = (row) => {};

  const dynamicColumns = [...columns];

  return (
    <>
      <Typography variant="h5" sx={{ fontSize: 10, mb: 2 }} gutterBottom>
        {title}
      </Typography>

      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
        sx={{ mb: 2 }}
      >
        <ToggleButton value={type}>{title}</ToggleButton>
        <ToggleButton
          value={`pending-${type}`}
        >{`Pending ${title}`}</ToggleButton>
      </ToggleButtonGroup>

      <Card className="card" sx={{ boxShadow: 0 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 1,
            mb: 2.5,
          }}
        >
          <Box sx={{ display: "flex", gap: 2 }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 400, color: "black", mt: 1 }}
              gutterBottom
            >
              {title}
            </Typography>
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: 10,
                alignSelf: "center",
                color: "#0B666A",
                mt: 1,
                px: 1,
                py: 0.4,
                borderRadius: 50,
                backgroundColor: "#eef2f6",
              }}
              gutterBottom
            >
              {data.length} {title.toLowerCase()}
            </Typography>
          </Box>

          <Button variant="contained" sx={{ fontWeight: 300 }}>
            New{" "}
            {title.includes("ies")
              ? title.replace("ies", "y")
              : title.slice(0, -1)}
          </Button>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              sx={{
                textTransform: "capitalize",
                backgroundColor: "#E2E8F0",
                fontSize: 12,
                px: 1.2,
                py: 1,
                borderRadius: 2,
              }}
              endIcon={<ClearIcon />}
            >
              All Time
            </Button>
            <Button
              sx={{
                textTransform: "capitalize",
                backgroundColor: "#E2E8F0",
                fontSize: 12,
                px: 1.2,
                py: 1,
                borderRadius: 2,
              }}
              endIcon={<ClearIcon />}
            >
              All Time
            </Button>
            <Button
              sx={{
                textTransform: "capitalize",
                color: "black",
                fontSize: 12,
                px: 1.2,
                py: 1,
                borderRadius: 2,
              }}
              variant="outlined"
              startIcon={<FilterListIcon />}
            >
              More Filters
            </Button>
          </Box>

          <SearchBox
            placeholder="Search"
            onChange={(e) => console.log(e.target.value)}
          />
        </Box>

        <Box sx={{ mt: 2 }}>
          <CustomTable columns={dynamicColumns} data={data} />
        </Box>
      </Card>
    </>
  );
};

export default GenerateListPage;
