import {
  Box,
  Container,
  Divider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { Icon } from "@iconify/react";
import CustomButton from "../shared/CustomButton";
import { hexToRgba } from "../../utils/utils";
import { useTranslation } from "react-i18next";

const BannerContent = () => {
  const theme = useTheme();
  const isBelowLg = useMediaQuery(theme.breakpoints.down("lg"));
  const { t } = useTranslation();
  return (
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
              flexDirection: { xs: "column", sm: "row" },
              gap: 2,
            }}
          >
            <Box
              sx={{
                bgcolor: hexToRgba(theme.palette.colors.white, 0.1),
                borderRadius: 4,
                p: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Icon
                icon={"mdi:telephone-in-talk"}
                color={hexToRgba(theme.palette.colors.white, 0.8)}
                style={{ fontSize: 28 }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                color: theme.palette.common.white,
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              <Typography variant="h3" fontSize={{ xs: 22, sm: 28, md: 32 }}>
                {t("banner.consult.urgent")}
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  color: theme.palette.text.light,
                  flexGrow: 1,
                  fontSize: { xs: 12, sm: 14 },
                }}
              >
                {t("banner.consult.urgentDesc")}
              </Typography>
            </Box>
          </Box>
          <CustomButton
            variant="contained"
            color="error"
            icon={"fluent:slide-text-call-48-regular"}
            text={t("banner.consult.consultNow")}
            sx={{
              py: 1,
              px: 4,
              height: "48px",
              hover: {
                color: theme.palette.error.main,
                background: theme.palette.common.white,
                outline: "none",
              },
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
            mt: "80px",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              color: theme.palette.common.white,
              fontSize: { xs: 30, sm: 30, md: 50 },
            }}
          >
            {t("banner.consult.chooseFilter")}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.text.light,
              fontWeight: 400,
              maxWidth: 500,
              mx: "auto",
              fontSize: { xs: 14, sm: 16 },
            }}
          >
            {t("banner.consult.chooseFilterDesc")}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default BannerContent;
