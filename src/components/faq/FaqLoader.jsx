import { Box, Container, Skeleton } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid2";
const FaqLoader = () => {
  return (
    <Container sx={{ py: 8, maxWidth: "1540px !important" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          mb: 6,
          gap: 2,
        }}
      >
        <Skeleton variant="rounded" width={100} height={25} />
        <Skeleton variant="rounded" width={400} height={55} />
      </Box>
      <Grid
        container
        spacing={3}
        rowGap={{ xs: 2, md: 3 }}
        columns={{ xs: 1, md: 2 }}
      >
        {Array.from({ length: 10 }).map((faq, index) => {
          return (
            <Grid key={index} size={1}>
              <Skeleton variant="rounded" width={"100%"} height={50} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default FaqLoader;
