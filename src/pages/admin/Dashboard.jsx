import { Box, Card, Typography, Grid, Button, Divider } from "@mui/material";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
} from "recharts";
import { useState } from "react";
import SearchBox from "../../components/common/Searchbox";
import { ChartBarIcon, WrenchIcon, UsersIcon, HomeIcon } from "lucide-react";

const summaryData = [
  { label: "Total Tenants", count: 120, icon: <UsersIcon /> },
  { label: "Total Properties", count: 45, icon: <HomeIcon /> },
  { label: "Total Contractors", count: 22, icon: <WrenchIcon /> },
  { label: "Open Jobs", count: 12, icon: <ChartBarIcon /> },
];

const jobStatusData = [
  { name: "New", value: 5 },
  { name: "Hold", value: 2 },
  { name: "Completed", value: 8 },
  { name: "Rejected", value: 1 },
  { name: "Closed", value: 3 },
];

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#00C49F"];

const recentActivity = [
  "Tenant Devendra added",
  "New job created for Property #12",
  "New job created for Property #12",
  "Contractor Ramesh assigned to JOB-0005",
];

const Dashboard = () => {
  return (
    <Box>
      <Typography variant="h5" sx={{ fontSize: 10, mb: 2 }}>
        Dashboard
      </Typography>

      {/* Summary Cards */}
      <Grid container spacing={2}>
        {summaryData.map((item, idx) => (
          <Grid item size={{ xs: 6, sm: 3 }} key={idx}>
            <Card sx={{ p: 2, display: "flex", alignItems: "center", gap: 2 }}>
              {item.icon}
              <Box>
                <Typography variant="body2" color="text.secondary">
                  {item.label}
                </Typography>
                <Typography variant="h6">{item.count}</Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Charts and Stats */}
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item size={{ xs: 6, sm: 3 }}>
          <Card sx={{ p: 2 }}>
            <Typography variant="subtitle1" sx={{ mb: 1 }}>
              Job Status Overview
            </Typography>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={jobStatusData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label
                >
                  {jobStatusData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </Grid>

        <Grid item size={{ xs: 6, sm: 3 }}>
          <Card sx={{ p: 2 }}>
            <Typography variant="subtitle1" sx={{ mb: 1 }}>
              Contractor Job Count
            </Typography>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart
                data={[
                  { name: "Suresh", jobs: 5 },
                  { name: "Anil", jobs: 4 },
                  { name: "Gyani", jobs: 4 },
                  { name: "Mayur", jobs: 1 },
                ]}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="jobs" fill="#8884d8" barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </Grid>
      </Grid>

      {/* Recent Activity and Quick Actions */}
      <Grid container spacing={2} sx={{ mt: 2, alignItems: "flex-end" }}>
        <Grid item size={{ xs: 12, sm: 6 }}>
          <Card sx={{ p: 2 }}>
            <Typography variant="subtitle1" sx={{ mb: 1 }}>
              Quick Actions
            </Typography>
            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
              <Button variant="contained">Add Tenant</Button>
              <Button variant="contained">Add Property</Button>
              <Button variant="contained">Create Job</Button>
              <Button variant="outlined">Generate Report</Button>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 2 }}>
            <Typography variant="subtitle1" sx={{ mb: 1 }}>
              Recent Activity
            </Typography>
            {recentActivity.map((text, idx) => (
              <Typography variant="body2" key={idx}>
                - {text}
              </Typography>
            ))}
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
