import React from "react";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Icon } from "@iconify/react";
import { Container, useMediaQuery, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import { hexToRgba } from "../../utils/utils";

const ServicesListing = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isBelowLg = useMediaQuery(theme.breakpoints.down("lg"));
  const serviceData = [
    {
      id: 1,
      title: t("banner.services.service1.title"),
      description: t("banner.services.service1.description"),
    },
    {
      id: 2,
      title: t("banner.services.service2.title"),
      description: t("banner.services.service2.description"),
    },
    {
      id: 3,
      title: t("banner.services.service3.title"),
      description: t("banner.services.service3.description"),
    },
    {
      id: 4,
      title: t("banner.services.service4.title"),
      description: t("banner.services.service4.description"),
    },
  ];
  return (
    <Box sx={{ py: 8, pt: isBelowLg ? 8 : 25, bgcolor: "background.default" }}>
      <Container sx={{ maxWidth: "1540px !important" }}>
        <Grid
          container
          spacing={3}
          rowGap={{ xs: 2, md: 3 }}
          columns={{ xs: 1, sm: 2, lg: 4 }}
        >
          {serviceData.map((card, index) => {
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
                      backgroundColor: hexToRgba("#04BF68", 0.1),
                      borderRadius: "50%",
                    }}
                  >
                    <Icon
                      icon="mdi:tick-decagram"
                      width="20"
                      height="20"
                      style={{ color: "#04BF68" }}
                    />
                  </Box>
                  <Typography variant="h6" color="primary">
                    {card.title}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary2">
                    {card.description}
                  </Typography>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default ServicesListing;
