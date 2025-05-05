import { Box, Container, Skeleton } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid2";
const ServiceLoader = () => {
  return (
    <Container sx={{ py: 8, maxWidth: "1540px !important" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 3,
          alignItems: "center",
          mb: 6,
        }}
      >
        <Box>
          <Skeleton width={100} height={20} />
          <Skeleton width={550} height={50} />
        </Box>
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <Skeleton width={100} height={30} />
          <Skeleton variant="circular" width={20} height={20} />
        </Box>
      </Box>
      <Grid
        container
        spacing={3}
        rowGap={{ xs: 2, md: 3 }}
        columns={{ xs: 1, sm: 2, lg: 3 }}
      >
        {Array.from({ length: 6 }).map((card, index) => {
          return (
            <Grid key={index} size={1}>
              <Skeleton variant="rounded" height={180} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default ServiceLoader;
