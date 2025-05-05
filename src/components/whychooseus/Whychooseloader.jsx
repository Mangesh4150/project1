import { Box, Container, Skeleton, useTheme } from "@mui/material";
import { hexToRgba } from "../../utils/utils";

const Whychooseloader = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          paddingBlock: "70px",
          backgroundColor: "#172B4D",
          paddingBottom: "280px",
          padding: {
            xs: "40px 0 40px",
            sm: "70px 0 280px",
            md: "70px 0 280px",
          },
        }}
      >
        <Container sx={{ maxWidth: "1540px !important" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: 3,
              flexWrap: { xs: "wrap", sm: "nowrap" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                width: { xs: "100%", sm: "40%" },
              }}
            >
              <Skeleton
                variant="rounded"
                sx={{
                  background: hexToRgba(theme.palette.background.default, 0.1),
                  maxWidth: {
                    xs: "100%",
                    sm: "400px",
                    md: "400px",
                    lg: "400px",
                  },
                  width: "100%",
                }}
                height={"38px"}
              />
              <Skeleton
                variant="rounded"
                sx={{
                  background: hexToRgba(theme.palette.background.default, 0.1),
                  maxWidth: {
                    xs: "100%",
                    sm: "400px",
                    md: "400px",
                    lg: "400px",
                  },
                  width: "100%",
                }}
                height={"63px"}
              />
            </Box>
            <Box sx={{ display: "flex", gap: "15px" }}>
              <Skeleton
                variant="rounded"
                sx={{
                  background: hexToRgba(theme.palette.background.default, 0.1),
                }}
                width={"137px"}
                height={"50px"}
              />
              <Skeleton
                variant="rounded"
                sx={{
                  background: hexToRgba(theme.palette.background.default, 0.1),
                }}
                width={"137px"}
                height={"50px"}
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Whychooseloader;
