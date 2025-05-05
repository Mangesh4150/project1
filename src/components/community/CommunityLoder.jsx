import { Box, Card, CardContent, Container, Skeleton } from "@mui/material";
import Grid from "@mui/material/Grid2";

const CommunityLoder = () => {
  return (
    <Box sx={{ py: 8, px: 0, bgcolor: "background.default" }}>
      <Container sx={{ maxWidth: "1540px !important" }}>
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
          rowGap={{ xs: 2, sm: 3 }}
          columns={{ xs: 1, sm: 2, md: 3 }}
        >
          {Array.from({ length: 3 }).map((card, index) => {
            return (
              <Grid key={index} size={1}>
                <Card
                  sx={{
                    maxWidth: 400,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 2,
                    border: "1px solid #f0f0f0",
                    boxShadow: "none",
                    marginInline: { xs: "auto", sm: 0 },
                  }}
                >
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                      gap: 1,
                    }}
                  >
                    <Skeleton variant="rounded" width={"100%"} height={200} />
                    <Box sx={{ display: "flex", gap: 3, mt: 1 }}>
                      <Skeleton variant="rounded" width={100} height={20} />
                      <Skeleton variant="rounded" width={20} height={20} />
                    </Box>
                    <Skeleton variant="rounded" width={"100%"} height={40} />

                    <Skeleton variant="rounded" width={"100%"} height={70} />
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default CommunityLoder;
