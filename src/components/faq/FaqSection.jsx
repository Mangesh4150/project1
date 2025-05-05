import { Box, Container, Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import FaqAccordionWrapper from "./FaqAccordionWrapper";
import { useEffect, useState } from "react";
import FaqLoader from "./FaqLoader";

const FaqSection = () => {
  const [loading, setLoading] = useState(false);

  const { t } = useTranslation();
  const theme = useTheme();

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <FaqLoader />;
  return (
    <Container sx={{ py: 8, maxWidth: "1540px !important" }}>
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
          {t("faq.heading")}
        </Typography>
        <Typography
          variant="h2"
          sx={{
            color: theme.palette.text.primary,
            fontWeight: 800,
            fontSize: { xs: "22px", sm: "22px", md: "32px" },
          }}
        >
          {t("faq.description")}
        </Typography>
      </Box>
      <FaqAccordionWrapper />
    </Container>
  );
};

export default FaqSection;
