import { Box, CircularProgress } from "@mui/material";
import logo from "../../assets/images/logo.png";
const PageLoaderSpinner = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "white",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          alignItems: "center",
        }}
      >
        <img src={logo} alt="" width={"100px"} />
        <CircularProgress color="primary" />
      </Box>
    </Box>
  );
};

export default PageLoaderSpinner;
