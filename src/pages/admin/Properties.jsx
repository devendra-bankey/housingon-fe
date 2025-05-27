import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import "../../assets/styles/mui.css";
import GenerateListPage from "../../layouts/admin/GenerateListPage";

const Properties = () => {
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
        title={"Properties"}
        type={"properties"}
      />
    </>
  );
};

export default Properties;
