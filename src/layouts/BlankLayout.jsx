import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";

const BlankLayout = () => {
  return (
    <Container sx={{ maxWidth: "1540px !important" }}>
      <Outlet />
    </Container>
  );
};

export default BlankLayout;
