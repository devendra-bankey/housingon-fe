import {
  Card,
  Container,
  Typography,
  Button,
  Box,
  TextField,
} from "@mui/material";
export const Tenants = () => {
  return (
    <>
      <div>
        <Container maxWidth="sm">
          <Card sx={{ mt: 8, p: 4 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-chrome-icon lucide-chrome"
              >
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="4" />
                <line x1="21.17" x2="12" y1="8" y2="8" />
                <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
                <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
              </svg>
            </Box>
            <Typography
              variant="body1"
              gutterBottom
              align="left"
              color="black"
              sx={{ mb: 2, fontWeight: 300 }}
            >
              Tenants
            </Typography>
            <Typography variant="body2" gutterBottom align="left" paragraph>
              Login to your company account
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "2" }}>
              <TextField
                sx={{ mb: 3 }}
                id="outlined-basic"
                label="email"
                variant="outlined"
                required
              ></TextField>
              <TextField
                sx={{ mb: 3 }}
                id="outlined-basic"
                label="password"
                variant="outlined"
                required
              ></TextField>
              <Button variant="contained" color="primary">
                Login
              </Button>
            </Box>
          </Card>
        </Container>
      </div>
    </>
  );
};
