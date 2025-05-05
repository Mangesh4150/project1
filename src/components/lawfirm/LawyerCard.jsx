import {
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
  useTheme,
  Divider,
} from "@mui/material";
import { Icon } from "@iconify/react";
import CustomButton from "../shared/CustomButton";
import { useTranslation } from "react-i18next";

const LawyerCard = ({
  firmName,
  description,
  logoUrl,
  yearsExperience,
  spokenLanguages,
  isBelowLg = false,
}) => {
  const theme = useTheme();
  const { t } = useTranslation();
  return (
    <Card
      sx={{
        maxWidth: isBelowLg ? 320 : 470,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 2,
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      }}
    >
      <CardContent
        sx={{ flexGrow: 1, display: "flex", flexDirection: "column", gap: 2 }}
      >
        <Box sx={{ px: 1, display: "flex", flexDirection: "column", gap: 2 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mb: 0,
              backgroundColor: "#FFF",
            }}
          >
            <Avatar
              src={logoUrl}
              alt={firmName}
              sx={{
                width: 80,
                height: 80,
                bgcolor: "primary.main",
                border: "12px solid #FFF",
                boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              }}
            />
          </Box>

          <Typography
            variant="h6"
            align="center"
            color={theme.palette.primary.main}
          >
            {firmName}
          </Typography>

          <Typography
            variant="subtitle1"
            color="text.secondary2"
            align="center"
            sx={{ maxWidth: 270, mx: "auto" }}
          >
            {description}
          </Typography>
          <Divider sx={{ my: 1 }} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: 2,
              mb: 0,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Icon icon="mdi:translate" style={{ color: "#B58B00" }} />
              <Box>
                <Typography variant="subtitle2" color="text.secondary">
                  {t("lawfirm.spokenLanguage")}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: 800, color: theme.palette.primary.main }}
                >
                  {spokenLanguages}
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Icon icon="mdi:clock-outline" style={{ color: "#B58B00" }} />
              <Box>
                <Typography variant="subtitle2" color="text.secondary">
                  {t("lawfirm.yearsOfExperience")}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: 800, color: theme.palette.primary.main }}
                >
                  {yearsExperience}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <CustomButton
          text={t("common.viewProfile")}
          variant="contained"
          sx={{
            "&:hover": {
              backgroundColor: "#1C3B6C",
            },
            "&:focus": {
              boxShadow: "0 0 10px rgba(23, 43, 77, 0.6)",
            },
          }}
        />
      </CardContent>
    </Card>
  );
};

export default LawyerCard;
