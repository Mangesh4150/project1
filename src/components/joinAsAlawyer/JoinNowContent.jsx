import { Box, Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import { hexToRgba } from "../../utils/utils";
import Grid from "@mui/material/Grid2";
import { Icon } from "@iconify/react";
import CustomButton from "../shared/CustomButton";

const JoinNowContent = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const features = [
    {
      id: 1,
      text: t("joinNow.expandCustomer"),
    },
    {
      id: 2,
      text: t("joinNow.flexibleConsultation"),
    },
    {
      id: 3,
      text: t("joinNow.controlYourSchedule"),
    },
    {
      id: 4,
      text: t("joinNow.secureFastPayments"),
    },
  ];
  return (
    <>
      <Typography
        variant="subtitle1"
        sx={{ color: theme.palette.secondary.main, fontWeight: 800 }}
      >
        {t("joinNow.heading")}
      </Typography>
      <Typography
        variant="h2"
        sx={{
          color: theme.palette.colors.white,
          fontSize: { xs: "22px", sm: "22px", md: "32px" },
          mb: 2,
        }}
      >
        {t("joinNow.title")}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: hexToRgba(theme.palette.colors.white, 0.7),
          maxWidth: 500,
        }}
      >
        {t("joinNow.description")}
      </Typography>
      <Grid
        container
        spacing={3}
        rowGap={{ xs: 2, md: 3 }}
        columns={{ xs: 1, sm: 2, lg: 2 }}
        sx={{ mt: 4, maxWidth: 800 }}
      >
        {features.map((feature) => {
          return (
            <Grid key={feature.id} size={1}>
              <>
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
                  <Icon
                    icon={"fluent-color:checkmark-circle-16"}
                    width={25}
                    height={25}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      color: theme.palette.colors.white,
                      textTransform: "uppercase",
                      fontSize: { xs: 12, sm: 14 },
                      fontWeight: 600,
                    }}
                  >
                    {feature.text}
                  </Typography>
                </Box>
              </>
            </Grid>
          );
        })}
      </Grid>
      <CustomButton
        text={t("joinNow.joinNow")}
        variant="contained"
        color="secondary"
        sx={{
          mt: 4,
          color: theme.palette.colors.white,
          py: 2,
          px: 8,

          hover: {
            color: theme.palette.secondary.main,
            background: theme.palette.common.white,
            outline: "none",
          },
        }}
        icon={"mdi:plus-circle-outline"}
      />
    </>
  );
};

export default JoinNowContent;
