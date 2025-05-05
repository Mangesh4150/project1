import { Box, Card, Skeleton, useTheme } from "@mui/material";
import { hexToRgba } from "../../utils/utils";

const CardsLoader = () => {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          position: { xs: "static", sm: "absolute" },
          top: "-240px",
          left: "0",
          right: "0",
          padding: {
            xs: "0",
            sm: "0 24px 40px 24px",
            md: "0 24px 40px 24px",
          },
          flexWrap: { xs: "wrap", sm: "nowrap" },
        }}
      >
        <Card
          sx={{
            maxWidth: 400,
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            borderRadius: 4,
            border: hexToRgba(theme.palette.background.default, 0.5),
            boxShadow: "none",
            marginInline: { xs: "auto", sm: 0 },
            background: hexToRgba(theme.palette.background.default, 0.5),
          }}
        >
          <Skeleton
            variant="rounded"
            sx={{
              background: hexToRgba(theme.palette.background.default, 0.5),
            }}
            width={"100%"}
            height={"480px"}
          />
        </Card>
        <Card
          sx={{
            maxWidth: 400,
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            borderRadius: 4,
            border: hexToRgba(theme.palette.background.default, 0.5),
            boxShadow: "none",
            marginInline: { xs: "auto", sm: 0 },
            background: hexToRgba(theme.palette.background.default, 0.5),
          }}
        >
          <Skeleton
            variant="rounded"
            sx={{
              background: hexToRgba(theme.palette.background.default, 0.5),
            }}
            width={"100%"}
            height={"480px"}
          />
        </Card>
        <Card
          sx={{
            maxWidth: 400,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            borderRadius: 4,
            border: hexToRgba(theme.palette.background.default, 0.5),
            boxShadow: "none",
            marginInline: { xs: "auto", sm: 0 },
            background: hexToRgba(theme.palette.background.default, 0.5),
          }}
        >
          <Skeleton
            variant="rounded"
            sx={{
              background: hexToRgba(theme.palette.background.default, 0.5),
            }}
            width={"100%"}
            height={"480px"}
          />
        </Card>
      </Box>
    </>
  );
};

export default CardsLoader;
