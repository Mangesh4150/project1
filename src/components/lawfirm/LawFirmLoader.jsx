import { Box, Container, Skeleton } from "@mui/material";
import React from "react";

const LawFirmLoader = () => {
  return (
    <Box sx={{ py: 8, px: 0, bgcolor: "background.default" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          mb: 6,
        }}
      >
        <Skeleton width={100} height={25} />
        <Skeleton width={650} height={55} />
      </Box>
      <Container
        sx={{
          minWidth: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {Array.from({ length: 4 }).map((card, index) => {
          return (
            <Skeleton
              key={index}
              variant="rounded"
              width={360}
              height={373}
              sx={{ mb: 2 }}
            />
          );
        })}
      </Container>
    </Box>
  );
};

export default LawFirmLoader;
