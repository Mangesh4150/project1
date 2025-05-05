import {
  Box,
  Container,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import BlogCardsWrapper from "./BlogCardsWrapper";
import { useEffect, useState } from "react";
import CommunityLoder from "./CommunityLoder";
const CommunitySection = () => {
  const [loading, setLoading] = useState(false);

  const { t } = useTranslation();
  const theme = useTheme();

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <CommunityLoder />;

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
            <Typography
              variant="subtitle1"
              sx={{ color: theme.palette.secondary.main, fontWeight: 800 }}
            >
              {t("community.heading")}
            </Typography>
            <Typography
              variant="h2"
              sx={{
                color: theme.palette.text.primary,
                fontWeight: 800,
                fontSize: { xs: "22px", sm: "22px", md: "32px" },
              }}
            >
              {t("community.description")}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <Typography
              variant="subtitle1"
              color="secondary"
              sx={{ fontWeight: 600, cursor: "pointer" }}
            >
              {t("community.viewAllBlogs")}
            </Typography>
            <IconButton>
              <Icon
                icon={"mdi:arrow-right"}
                width={20}
                color={theme.palette.secondary.main}
              />
            </IconButton>
          </Box>
        </Box>
        <BlogCardsWrapper />
      </Container>
    </Box>
  );
};

export default CommunitySection;
