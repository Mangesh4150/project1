import { Box, Typography, Paper, useTheme } from "@mui/material";
import CustomButton from "../shared/CustomButton";
import { Icon } from "@iconify/react";
import { hexToRgba } from "../../utils/utils";
import { useTranslation } from "react-i18next";
const ServiceCard = ({
  title,
  description,
  icon,
  buttonText,
  buttonIcon,
  onClick,
  iconColor = "#fff",
  iconBgColor = "#172B4D",
  sx = {},
}) => {
  const { t } = useTranslation();
  const theme = useTheme();
  return (
    <Paper
      elevation={0}
      sx={{
        p: 2,
        px: 3,
        display: "flex",
        flexDirection: "column",
        borderRadius: 4,
        justifyContent: "space-between",
        border: `1px solid ${theme.palette.background.default}`,
        bgcolor: "background.paper",
        ...sx,
      }}
    >
      <Box
        sx={{
          mb: 2,
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: {
            xs: "column",
            sm: "row",
          },
          alignItems: {
            xs: "center",
            sm: "flex-start",
          },
          gap: 2,
        }}
      >
        <Box
          sx={{
            bgcolor: hexToRgba(iconBgColor, 0.3),
            borderRadius: 4,
            width: 130,
            height: 60,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon icon={icon} style={{ color: iconColor, fontSize: 28 }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: {
              xs: "center",
              sm: "start",
            },
          }}
        >
          <Typography variant="h6" sx={{ mb: 0, fontWeight: 600 }}>
            {title}
          </Typography>
          <Typography
            variant="subtitle2"
            color="text.secondary2"
            sx={{ mb: 1, flexGrow: 1 }}
          >
            {description}
          </Typography>
        </Box>
      </Box>
      <CustomButton
        text={buttonText || t("common.soon")}
        icon={buttonIcon}
        fullWidth
        onClick={onClick}
        disabled={!buttonText}
        sx={{
          "&:hover": {
            backgroundColor: "#1C3B6C",
          },
          "&:focus": {
            boxShadow: "0 0 10px rgba(23, 43, 77, 0.6)",
          },
        }}
      />
    </Paper>
  );
};

export default ServiceCard;
