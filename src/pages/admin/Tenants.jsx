import {
  Typography,
  Card,
  Box,
  Button,
  ToggleButtonGroup,
  ToggleButton,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Checkbox,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useState } from "react";
import SearchBox from "../../components/common/Searchbox";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import "../../assets/styles/mui.css";
import CustomTable from "../../components/common/Table";
import GenerateListPage from "../../layouts/admin/GenerateListPage";
// const Tenants = () => {
//   const [alignment, setAlignment] = useState("tenants");
//   const handleChange = (event, newAlignment) => {
//     setAlignment(newAlignment);
//   };
//   const handleEdit = (row) => {};
//   const tenantColumns = [
//     { label: "Name", key: "name" },
//     { label: "Phone", key: "phone" },
//     {
//       label: "Login Access",
//       key: "loginAccess",
//       render: (val) => (val ? "Yes" : "No"),
//     },
//     {
//       label: "Actions",
//       key: "actions",
//       render: (_, row) => (
//         <IconButton onClick={() => handleEdit(row)} color="primary">
//           <EditIcon />
//         </IconButton>
//       ),
//     },
//   ];

//   const tenants = [
//     {
//       id: "fdkjsdlfskdjfsldfkj",
//       name: "Devendra",
//       phone: 12344444,
//       loginAccess: false,
//       stayDetails: [
//         {
//           propertyId: "LSKFJFWEORIWJRWFLSKVJEFOI",
//           startDate: new Date(),
//           endDate: new Date(),
//         },
//         {
//           propertyId: "LSKFJFWEORIWJRWFfSKVJEFOI",
//           startDate: new Date(),
//           endDate: new Date(),
//         },
//         {
//           propertyId: "LSKFJFWEORIWJeWFLSKVJEFOI",
//           startDate: new Date(),
//           endDate: new Date(),
//         },
//       ],
//     },
//     {
//       id: "fdkjsdlfskdjfsldfkjdfda",
//       name: "Devendra",
//       phone: 12344444,
//       loginAccess: false,
//       stayDetails: [
//         {
//           propertyId: "LSKFJFWEORIWJRWFLSKVJEFOI",
//           startDate: new Date(),
//           endDate: new Date(),
//         },
//         {
//           propertyId: "LSKFJFWEORIWJRWFfSKVJEFOI",
//           startDate: new Date(),
//           endDate: new Date(),
//         },
//         {
//           propertyId: "LSKFJFWEORIWJeWFLSKVJEFOI",
//           startDate: new Date(),
//           endDate: new Date(),
//         },
//       ],
//     },
//     {
//       id: "fdkjsdlfskdjfsldfkdfsdj",
//       name: "Devendra",
//       phone: 12344444,
//       loginAccess: false,
//       stayDetails: [
//         {
//           propertyId: "LSKFJFWEORIWJRWFLSKVJEFOI",
//           startDate: new Date(),
//           endDate: new Date(),
//         },
//         {
//           propertyId: "LSKFJFWEORIWJRWFfSKVJEFOI",
//           startDate: new Date(),
//           endDate: new Date(),
//         },
//         {
//           propertyId: "LSKFJFWEORIWJeWFLSKVJEFOI",
//           startDate: new Date(),
//           endDate: new Date(),
//         },
//       ],
//     },
//   ];
//   return (
//     <>
//       <Typography variant="h5" sx={{ fontSize: 10, mb: 2 }} gutterBottom>
//         Tenants
//       </Typography>
//       <ToggleButtonGroup
//         color="primary"
//         value={alignment}
//         exclusive
//         onChange={handleChange}
//         aria-label="Platform"
//         sx={{ mb: 2 }}
//       >
//         <ToggleButton value="tenants">Tenants</ToggleButton>
//         <ToggleButton value="pending">Pending Tenants</ToggleButton>
//       </ToggleButtonGroup>
//       <Card className="card" sx={{ boxShadow: 0 }}>
//         {/* Tenant Header */}
//         <Box
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "space-between",
//             px: 1,
//             mb: 2.5,
//           }}
//         >
//           <Box sx={{ display: "flex", gap: 2 }}>
//             <Typography
//               variant="h6"
//               sx={{ fontWeight: 400, color: "black", mt: 1 }}
//               gutterBottom
//             >
//               Tenants
//             </Typography>
//             <Typography
//               variant=""
//               sx={{
//                 fontWeight: 500,
//                 fontSize: 10,
//                 alignSelf: "center",
//                 color: "#0B666A",
//                 mt: 1,
//                 px: 1,
//                 py: 0.4,
//                 borderRadius: 50,
//                 backgroundColor: "#eef2f6",
//               }}
//               gutterBottom
//             >
//               100 tenants
//             </Typography>
//           </Box>
//           <Button variant="contained" sx={{ fontWeight: 300 }}>
//             New Tenant
//           </Button>
//         </Box>

//         {/* Filters */}
//         <Box sx={{ display: "flex", justifyContent: "space-between" }}>
//           <Box sx={{ display: "flex", gap: 2 }}>
//             <Button
//               sx={{
//                 textTransform: "capitalize",
//                 backgroundColor: "#E2E8F0",
//                 fontSize: 12,
//                 px: 1.2,
//                 py: 1,
//                 borderRadius: 2,
//               }}
//               endIcon={<ClearIcon />}
//             >
//               All Time
//             </Button>
//             <Button
//               sx={{
//                 textTransform: "capitalize",
//                 backgroundColor: "#E2E8F0",
//                 fontSize: 12,
//                 px: 1.2,
//                 py: 1,
//                 borderRadius: 2,
//               }}
//               endIcon={<ClearIcon />}
//             >
//               All Time
//             </Button>

//             <Button
//               sx={{
//                 textTransform: "capitalize",
//                 color: "black",
//                 fontSize: 12,
//                 px: 1.2,
//                 py: 1,
//                 borderRadius: 2,
//               }}
//               variant="outlined"
//               startIcon={<FilterListIcon />}
//             >
//               More Filters
//             </Button>
//           </Box>
//           <SearchBox
//             placeholder="Search"
//             onChange={(e) => console.log(e.target.value)}
//           />
//         </Box>

//         {/* Tenants Table */}
//         <Box sx={{ mt: 2 }}>
//           <CustomTable columns={tenantColumns} data={tenants} />
//         </Box>
//       </Card>
//     </>
//   );
// };
const Tenants = () => {
  const [alignment, setAlignment] = useState("tenants");
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const handleEdit = (row) => {};
  const tenantColumns = [
    { label: "Name", key: "name" },
    { label: "Phone", key: "phone" },
    {
      label: "Login Access",
      key: "loginAccess",
      render: (val) => (val ? "Yes" : "No"),
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

  const tenants = [
    {
      id: "fdkjsdlfskdjfsldfkj",
      name: "Devendra",
      phone: 12344444,
      loginAccess: false,
      stayDetails: [
        {
          propertyId: "LSKFJFWEORIWJRWFLSKVJEFOI",
          startDate: new Date(),
          endDate: new Date(),
        },
        {
          propertyId: "LSKFJFWEORIWJRWFfSKVJEFOI",
          startDate: new Date(),
          endDate: new Date(),
        },
        {
          propertyId: "LSKFJFWEORIWJeWFLSKVJEFOI",
          startDate: new Date(),
          endDate: new Date(),
        },
      ],
    },
    {
      id: "fdkjsdlfskdjfsldfkjdfda",
      name: "Devendra",
      phone: 12344444,
      loginAccess: false,
      stayDetails: [
        {
          propertyId: "LSKFJFWEORIWJRWFLSKVJEFOI",
          startDate: new Date(),
          endDate: new Date(),
        },
        {
          propertyId: "LSKFJFWEORIWJRWFfSKVJEFOI",
          startDate: new Date(),
          endDate: new Date(),
        },
        {
          propertyId: "LSKFJFWEORIWJeWFLSKVJEFOI",
          startDate: new Date(),
          endDate: new Date(),
        },
      ],
    },
    {
      id: "fdkjsdlfskdjfsldfkdfsdj",
      name: "Devendra",
      phone: 12344444,
      loginAccess: false,
      stayDetails: [
        {
          propertyId: "LSKFJFWEORIWJRWFLSKVJEFOI",
          startDate: new Date(),
          endDate: new Date(),
        },
        {
          propertyId: "LSKFJFWEORIWJRWFfSKVJEFOI",
          startDate: new Date(),
          endDate: new Date(),
        },
        {
          propertyId: "LSKFJFWEORIWJeWFLSKVJEFOI",
          startDate: new Date(),
          endDate: new Date(),
        },
      ],
    },
  ];
  return (
    <>
      <GenerateListPage
        data={tenants}
        columns={tenantColumns}
        title={"Tenants"}
        type={"tenants"}
      />
    </>
  );
};

export default Tenants;
