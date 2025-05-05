import { Container, Typography } from "@mui/material";

const Login = () => {
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
      <Typography variant="h4">Login Page</Typography>
    </Container>
  );
};

export default Login;
