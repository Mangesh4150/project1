import { Box, Container, Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import LawyersCarouselWrapper from "./LawyersCarouselWrapper";
import LawFirmLoader from "./LawFirmLoader";
import { useEffect, useState } from "react";

const LawfirmSection = () => {
  const [loading, setLoading] = useState(false);

  const { t } = useTranslation();
  const theme = useTheme();

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <LawFirmLoader />;

  return (
    <Box
      sx={{
        py: 8,
        px: 0,
        bgcolor: "background.default",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <Container sx={{ maxWidth: "1540px !important" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            mb: 6,
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{ color: theme.palette.secondary.main, fontWeight: 800 }}
          >
            {t("lawfirm.heading")}
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "22px", sm: "22px", md: "32px" },
            }}
          >
            {t("lawfirm.description")}
          </Typography>
        </Box>
      </Container>

      <LawyersCarouselWrapper />
    </Box>
  );
};

export default LawfirmSection;
