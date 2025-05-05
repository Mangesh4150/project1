import { Container, Typography } from "@mui/material";

const Logout = () => {
  return (
    <Container
      sx={{
        maxWidth: "1540px !important",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h4">Logout</Typography>
    </Container>
  );
};

export default Logout;
