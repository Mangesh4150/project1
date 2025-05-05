import "./Footer.scss";
import { Box, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

const FooterTop = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        width: "100%",
        gap: { xs: "25px", sm: "50px", md: "70px", lg: "70px" },
        padding: "30px 0",
        borderTop: "1px solid #E6E8EC",
        borderBottom: "1px solid #E6E8EC",
        flexWrap: { xs: "wrap", sm: "wrap", md: "nowrap" },
      }}
    >
      <Box sx={{ display: "flex", gap: "15px", alignItems: "center" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "45px",
            height: "45px",
            bgcolor: "#f7f6f1",
            borderRadius: "50%",
          }}
        >
          <Icon icon="mage:email" width="22" height="22" color="#BFAE76" />
        </Box>
        <Box>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            fontWeight={600}
          >
            {t("footercontactlinks.getintouch")}
          </Typography>
          <Typography variant="body1" fontWeight={600} color="text.primary">
            xxxxxxxxxx
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", gap: "15px", alignItems: "center" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "45px",
            height: "45px",
            bgcolor: "#f7f6f1",
            borderRadius: "50%",
          }}
        >
          <Icon
            icon="ph:phone-call-light"
            width="22"
            height="22"
            color="#BFAE76"
          />
        </Box>
        <Box>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            fontWeight={600}
          >
            {t("footercontactlinks.letstalk")}
          </Typography>
          <Typography variant="body1" fontWeight={600} color="text.primary">
            xxxxxxxxxx
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", gap: "15px", alignItems: "center" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "45px",
            height: "45px",
            bgcolor: "#f7f6f1",
            borderRadius: "50%",
          }}
        >
          <Icon
            icon="system-uicons:calendar-month"
            width="22"
            height="22"
            color="#BFAE76"
          />
        </Box>
        <Box>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            fontWeight={600}
          >
            {t("footercontactlinks.crnumber")}
          </Typography>
          <Typography variant="body1" fontWeight={600} color="text.primary">
            xxxxxxxxxx
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", gap: "15px", alignItems: "center" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "45px",
            height: "45px",
            bgcolor: "#f7f6f1",
            borderRadius: "50%",
          }}
        >
          <Icon
            icon="proicons:location"
            width="22"
            height="22"
            color="#BFAE76"
          />
        </Box>
        <Box>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            fontWeight={600}
          >
            {t("footercontactlinks.location")}
          </Typography>
          <Typography variant="body1" fontWeight={600} color="text.primary">
            xxxxxxxxxx
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default FooterTop;
