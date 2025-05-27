import {
  Typography,
  Card,
  Box,
  Button,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import FilterListIcon from "@mui/icons-material/FilterList";
import SearchBox from "../../components/common/Searchbox";
import CustomTable from "../../components/common/Table";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import "../../assets/styles/mui.css";
import { useState } from "react";

const Jobs = () => {
  const [alignment, setAlignment] = useState("all");
  const handleChange = (event, newAlignment) => setAlignment(newAlignment);
  const handleEdit = (row) => {};

  const demoJobs = [
    {
      _id: "1",
      jobId: "JOB-0001",
      issue: "Leaking Pipe",
      subIssue: "Bathroom Tap Leak",
      completionDate: "2025-06-10T00:00:00.000Z",
      certExpiryDate: "2026-06-10T00:00:00.000Z",
      description: "Tap in tenant bathroom is leaking constantly.",
      assignedContractorId: "contractor123",
      status: "1", // New Open Job
      priority: "high",
      tenant: {
        name: "Raj Mehta",
        phone: "9876543210",
        email: "raj@example.com",
      },
      contractor: {
        name: "Suresh Plumbing Co.",
        phone: "9988776655",
        email: "suresh@plumbing.com",
      },
      landlord: {
        name: "Amit Bansal",
        phone: "9090909090",
        email: "amit@landlord.com",
      },
      address: "101, Green Avenue, Delhi",
      attachments: [],
      preJobAttachments: [],
      postJobAttachments: [],
    },
    {
      _id: "2",
      jobId: "JOB-0002",
      issue: "Electrical Fault",
      subIssue: "Short Circuit in Kitchen",
      completionDate: "2025-06-15T00:00:00.000Z",
      certExpiryDate: null,
      description: "Tenant reports sparks from a socket.",
      assignedContractorId: "contractor456",
      status: "2", // On Hold
      priority: "medium",
      tenant: {
        name: "Neha Sharma",
        phone: "9998887776",
        email: "neha@example.com",
      },
      contractor: {
        name: "Bright Electricians",
        phone: "9876541230",
        email: "contact@brightelec.com",
      },
      landlord: {
        name: "Mr. Tyagi",
        phone: "8123456789",
        email: "tyagi@landlord.com",
      },
      address: "22, Sector 12, Noida",
      attachments: [],
      preJobAttachments: [],
      postJobAttachments: [],
    },
    {
      _id: "3",
      jobId: "JOB-0003",
      issue: "Painting",
      subIssue: "Full House Repaint",
      completionDate: "2025-07-01T00:00:00.000Z",
      certExpiryDate: null,
      description: "Tenant moving out, repaint required.",
      assignedContractorId: "contractor789",
      status: "3", // Completed
      priority: "low",
      tenant: {
        name: "Aditya Roy",
        phone: "8877665544",
        email: "aditya@example.com",
      },
      contractor: {
        name: "ColorWorks",
        phone: "9123456780",
        email: "support@colorworks.com",
      },
      landlord: {
        name: "Sunita Malhotra",
        phone: "7766554433",
        email: "sunita@landlord.com",
      },
      address: "Flat 7B, Park View Residency, Gurgaon",
      attachments: [],
      preJobAttachments: [],
      postJobAttachments: [],
    },
    {
      _id: "4",
      jobId: "JOB-0004",
      issue: "Pest Control",
      subIssue: "Termite Treatment",
      completionDate: "2025-06-25T00:00:00.000Z",
      certExpiryDate: "2026-06-25T00:00:00.000Z",
      description: "Termite issue in wooden cupboard.",
      assignedContractorId: "contractor123",
      status: "1",
      priority: "high",
      tenant: {
        name: "Priya Verma",
        phone: "8855443322",
        email: "priya@example.com",
      },
      contractor: {
        name: "NoMorePests",
        phone: "9911002200",
        email: "hello@nomorepests.com",
      },
      landlord: {
        name: "Manoj Khanna",
        phone: "9988776655",
        email: "manoj@landlord.com",
      },
      address: "Villa 23, Spring Meadows, Bangalore",
      attachments: [],
      preJobAttachments: [],
      postJobAttachments: [],
    },
    {
      _id: "5",
      jobId: "JOB-0005",
      issue: "Appliance Issue",
      subIssue: "AC Not Cooling",
      completionDate: "2025-06-20T00:00:00.000Z",
      certExpiryDate: null,
      description: "AC not cooling during summer heat.",
      assignedContractorId: "contractor999",
      status: "4", // Rejected
      priority: "medium",
      tenant: {
        name: "Kabir Singh",
        phone: "9090908080",
        email: "kabir@example.com",
      },
      contractor: {
        name: "CoolFix Solutions",
        phone: "8234567890",
        email: "help@coolfix.com",
      },
      landlord: {
        name: "Rakesh Tiwari",
        phone: "8080808080",
        email: "rakesh@landlord.com",
      },
      address: "3rd Floor, DLF Cyber City, Hyderabad",
      attachments: [],
      preJobAttachments: [],
      postJobAttachments: [],
    },
  ];
  const jobColumns = [
    { label: "Job ID", key: "jobId" },
    { label: "Issue", key: "issue" },
    { label: "Sub-Issue", key: "subIssue" },
    {
      label: "Priority",
      key: "priority",
      render: (val) => val.charAt(0).toUpperCase() + val.slice(1),
    },
    {
      label: "Status",
      key: "status",
      render: (val) => {
        const map = {
          1: "New",
          2: "On Hold",
          3: "Completed",
          4: "Rejected",
          5: "Closed",
        };
        return map[val] || "Unknown";
      },
    },
    {
      label: "Tenant",
      key: "tenant",
      render: (val) => val?.name || "—",
    },
    {
      label: "Contractor",
      key: "contractor",
      render: (val) => val?.name || "—",
    },
    {
      label: "Landlord",
      key: "landlord",
      render: (val) => val?.name || "—",
    },
    {
      label: "Completion Date",
      key: "completionDate",
      render: (val) => new Date(val).toLocaleDateString(),
    },
    {
      label: "Address",
      key: "address",
    },
    {
      label: "Actions",
      key: "actions",
      render: (_, row) => (
        <IconButton onClick={() => handleEdit(row)} color="primary">
          <EditIcon />
        </IconButton>
      ),
    },
  ];

  return (
    <>
      {/* <Typography variant="h5" sx={{ fontSize: 10, mb: 2 }} gutterBottom>
        Jobs
      </Typography> */}

      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
        sx={{ mb: 2 }}
      >
        <ToggleButton sx={{ zIndex: -1 }} value="all">
          All
        </ToggleButton>
        <ToggleButton sx={{ zIndex: -1 }} value="archived">
          Archived
        </ToggleButton>
        <ToggleButton sx={{ zIndex: -1 }} value="closed">
          Closed
        </ToggleButton>
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
              Jobs
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
              {demoJobs.length}
            </Typography>
          </Box>

          <Button variant="contained" sx={{ fontWeight: 300 }}>
            New Job
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
          <CustomTable columns={jobColumns} data={demoJobs} />
        </Box>
      </Card>
    </>
  );
};

export default Jobs;
