import { Box, Container, Skeleton } from "@mui/material";
import React from "react";

const FooterLoader = () => {
  return (
    <>
      <Box>
        <Container sx={{ maxWidth: "1540px !important" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              width: "100%",
              gap: { xs: "25px", sm: "50px", md: "70px", lg: "70px" },
              padding: "30px 0",
              borderTop: "1px solid #E6E8EC",
              borderBottom: "1px solid #E6E8EC",
              flexWrap: { xs: "wrap", sm: "wrap", md: "nowrap" },
            }}
          >
            <Box sx={{ display: "flex", gap: "15px", alignItems: "center" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "45px",
                  height: "45px",
                  bgcolor: "#f7f6f1",
                  borderRadius: "50%",
                }}
              >
                <Skeleton variant="circular" width={45} height={45} />
              </Box>
              <Box>
                <Skeleton variant="text" width={100} height={20} />
                <Skeleton variant="text" width={100} height={20} />
              </Box>
            </Box>
            <Box sx={{ display: "flex", gap: "15px", alignItems: "center" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "45px",
                  height: "45px",
                  bgcolor: "#f7f6f1",
                  borderRadius: "50%",
                }}
              >
                <Skeleton variant="circular" width={45} height={45} />
              </Box>
              <Box>
                <Skeleton variant="text" width={100} height={20} />
                <Skeleton variant="text" width={100} height={20} />
              </Box>
            </Box>
            <Box sx={{ display: "flex", gap: "15px", alignItems: "center" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "45px",
                  height: "45px",
                  bgcolor: "#f7f6f1",
                  borderRadius: "50%",
                }}
              >
                <Skeleton variant="circular" width={45} height={45} />
              </Box>
              <Box>
                <Skeleton variant="text" width={100} height={20} />
                <Skeleton variant="text" width={100} height={20} />
              </Box>
            </Box>
            <Box sx={{ display: "flex", gap: "15px", alignItems: "center" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "45px",
                  height: "45px",
                  bgcolor: "#f7f6f1",
                  borderRadius: "50%",
                }}
              >
                <Skeleton variant="circular" width={45} height={45} />
              </Box>
              <Box>
                <Skeleton variant="text" width={100} height={20} />
                <Skeleton variant="text" width={100} height={20} />
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: { xs: "40px", sm: "50px", md: "40px", lg: "40px" },
              paddingBottom: "60px",
              paddingTop: "60px",
              flexDirection: { xs: "column", sm: "column", md: "row" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                flexDirection: { xs: "column" },
                gap: "25px",
                width: { xs: "100%", sm: "50%", md: "30%", lg: "30%" },
              }}
            >
              <Skeleton variant="rounded" width={100} height={100} />
              <Skeleton variant="text" width={200} height={20} />
              <Box
                sx={{
                  display: "flex",
                  // justifyContent: "space-between",
                  gap: "20px",
                  alignItems: "center",
                }}
              >
                <Skeleton variant="circular" width={24} height={24} />
                <Skeleton variant="circular" width={24} height={24} />
                <Skeleton variant="circular" width={24} height={24} />
                <Skeleton variant="circular" width={24} height={24} />
              </Box>
            </Box>
            <Box
              sx={{
                width: { xs: "100%", sm: "70%", md: "45%", lg: "45%" },
                display: "flex",
                justifyContent: "space-between",
                order: { xs: -1, sm: -1, md: 0, lg: 0 },
                flexDirection: { xs: "column", sm: "row", md: "row" },
                gap: { xs: "40px", sm: "0", md: "0px", lg: "0px" },
              }}
            >
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "25px" }}
              >
                <Skeleton variant="text" width={100} height={20} />
                <Skeleton variant="text" width={50} height={20} />
                <Skeleton variant="text" width={50} height={20} />
                <Skeleton variant="text" width={50} height={20} />
                <Skeleton variant="text" width={50} height={20} />
              </Box>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "25px" }}
              >
                <Skeleton variant="text" width={100} height={20} />
                <Skeleton variant="text" width={50} height={20} />
                <Skeleton variant="text" width={50} height={20} />
                <Skeleton variant="text" width={50} height={20} />
                <Skeleton variant="text" width={50} height={20} />
              </Box>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "25px" }}
              >
                <Skeleton variant="text" width={100} height={20} />
                <Skeleton variant="text" width={50} height={20} />
                <Skeleton variant="text" width={50} height={20} />
                <Skeleton variant="text" width={50} height={20} />
                <Skeleton variant="text" width={50} height={20} />
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: { xs: "20px 0 5px", sm: "10px 30px", md: "10px  30px" },
              borderRadius: 5,
              backgroundColor: "#F9F9FB",
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Box></Box>
            <Skeleton variant="text" width={100} height={20} />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "15px",
              }}
            >
              <Skeleton variant="rounded" width={50} height={30} />
              <Skeleton variant="rounded" width={50} height={30} />
              <Skeleton variant="rounded" width={50} height={30} />
              <Skeleton variant="rounded" width={50} height={30} />
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default FooterLoader;
