import { Skeleton, useTheme } from "@mui/material";
import { Box, Container } from "@mui/material";
import Grid from "@mui/material/Grid2";

import { hexToRgba } from "../../utils/utils";

const JoinNowLoader = () => {
  const theme = useTheme();
  return (
    <Box sx={{ py: 8, px: 0, bgcolor: theme.palette.primary.main }}>
      <Container>
        <Grid
          container
          spacing={5}
          rowGap={{ xs: 5, lg: 3 }}
          columns={{ xs: 1, lg: 12 }}
          justifyContent={"space-between"}
        >
          <Grid size={5}>
            <Skeleton
              variant="rounded"
              sx={{
                background: hexToRgba(theme.palette.background.default, 0.1),
              }}
              width={"100%"}
              height={"100%"}
            />
          </Grid>
          <Grid size={7}>
            <Skeleton
              width={100}
              height={30}
              sx={{
                background: hexToRgba(theme.palette.background.default, 0.1),
              }}
            />
            <Skeleton
              width={550}
              height={70}
              sx={{
                background: hexToRgba(theme.palette.background.default, 0.1),
              }}
            />
            <>
              <Skeleton
                animation="wave"
                height={10}
                style={{ marginBottom: 6 }}
                sx={{
                  background: hexToRgba(theme.palette.background.default, 0.1),
                }}
              />
              <Skeleton
                animation="wave"
                height={10}
                style={{ marginBottom: 6 }}
                width="80%"
                sx={{
                  background: hexToRgba(theme.palette.background.default, 0.1),
                }}
              />
              <Skeleton
                animation="wave"
                height={10}
                width="80%"
                style={{ marginBottom: 6 }}
                sx={{
                  background: hexToRgba(theme.palette.background.default, 0.1),
                }}
              />
            </>
            <Grid
              container
              spacing={3}
              rowGap={{ xs: 2, md: 3 }}
              columns={{ xs: 1, sm: 2, lg: 2 }}
              sx={{ my: 4, mb: 5, maxWidth: 800 }}
            >
              {Array.from({ length: 4 }).map((_, index) => {
                return (
                  <Grid key={index} size={1}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        background: hexToRgba(
                          theme.palette.background.default,
                          0.1
                        ),
                        py: 2,
                        px: 2,
                        borderRadius: 4,
                      }}
                    >
                      <Skeleton
                        animation="wave"
                        variant="circular"
                        width={30}
                        height={30}
                      />
                      <Skeleton
                        animation="wave"
                        variant="rounded"
                        width={100}
                        height={30}
                      />
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
            <Skeleton
              variant="rounded"
              width={250}
              height={60}
              sx={{
                background: hexToRgba(theme.palette.background.default, 0.1),
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default JoinNowLoader;
