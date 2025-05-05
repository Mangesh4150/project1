import { hexToRgba } from "../../utils/utils";
import { useTheme } from "@emotion/react";
import {
  Box,
  Card,
  Container,
  Divider,
  Skeleton,
  useMediaQuery,
} from "@mui/material";
import Grid from "@mui/material/Grid2";

const BannerSectionLoader = () => {
  const theme = useTheme();
  const isBelowLg = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          py: 8,
          pb: isBelowLg ? 8 : 25,
          px: 0,
          bgcolor: theme.palette.primary.main,
        }}
      >
        <Container sx={{ maxWidth: "1540px !important" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              columnGap: "80px",
              rowGap: 3,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Box
                sx={{
                  borderRadius: 4,
                  p: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Skeleton
                  variant="circular"
                  width={40}
                  height={40}
                  sx={{
                    background: hexToRgba(
                      theme.palette.background.default,
                      0.1
                    ),
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  color: theme.palette.common.white,
                  gap: 2,
                }}
              >
                <Skeleton
                  variant="rounded"
                  width={250}
                  height={25}
                  sx={{
                    background: hexToRgba(
                      theme.palette.background.default,
                      0.1
                    ),
                  }}
                />
                <Skeleton
                  variant="rounded"
                  width={300}
                  height={25}
                  sx={{
                    background: hexToRgba(
                      theme.palette.background.default,
                      0.1
                    ),
                  }}
                />
              </Box>
            </Box>
            <Skeleton
              variant="rounded"
              width={150}
              height={50}
              sx={{
                background: hexToRgba(theme.palette.background.default, 0.1),
              }}
            />
          </Box>
          <Divider
            sx={{
              my: 4,
              borderColor: hexToRgba(theme.palette.colors.white, 0.1),
            }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              textAlign: "center",
              alignItems: "center",
              mt: "80px",
            }}
          >
            <Skeleton
              variant="text"
              width={550}
              height={80}
              sx={{
                background: hexToRgba(theme.palette.background.default, 0.1),
              }}
            />
            <Skeleton
              variant="text"
              width={350}
              height={40}
              sx={{
                background: hexToRgba(theme.palette.background.default, 0.1),
              }}
            />
          </Box>
        </Container>
      </Box>
      <Container
        sx={{
          maxWidth: "1540px !important",
          ...(isBelowLg
            ? {}
            : {
                position: "absolute",
                top: "55%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }),
        }}
      >
        <Card
          sx={{
            borderRadius: 4,
            boxShadow: "none",
            background: hexToRgba("#ffffff", 0.8),
            height: 250,
          }}
        ></Card>
      </Container>
      <Box
        sx={{ py: 8, pt: isBelowLg ? 8 : 25, bgcolor: "background.default" }}
      >
        <Container sx={{ maxWidth: "1540px !important" }}>
          <Grid
            container
            spacing={3}
            rowGap={{ xs: 2, md: 3 }}
            columns={{ xs: 1, sm: 2, lg: 4 }}
          >
            {Array.from({ length: 4 }).map((card, index) => {
              return (
                <Grid key={index} size={1}>
                  <Box
                    sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      gap: 2,
                    }}
                  >
                    <Box
                      sx={{
                        p: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: hexToRgba("#25d366", 0.1),
                        borderRadius: "50%",
                      }}
                    >
                      <Skeleton
                        animation="wave"
                        variant="circular"
                        width={30}
                        height={30}
                      />
                    </Box>
                    <Skeleton
                      animation="wave"
                      variant="rounded"
                      width={100}
                      height={30}
                      sx={{
                        background: hexToRgba(
                          theme.palette.background.default,
                          0.1
                        ),
                      }}
                    />
                    <Skeleton variant="rounded" width={150} height={10} />
                    <Skeleton variant="rounded" width={150} height={10} />
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default BannerSectionLoader;
