import React from "react";
import "./Footer.scss";
import {
  Box,
  Button,
  CardMedia,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import GpayIcon from "../../assets/images/icons/google-pay.png";
import AppleIcon from "../../assets/images/icons/apple-pay.png";
import VisaIcon from "../../assets/images/icons/visa.png";
import MasterIcon from "../../assets/images/icons/master.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const FooterBottom = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: { xs: "20px 0 5px", sm: "10px 30px", md: "10px  30px" },
          borderRadius: 5,
          backgroundColor: "#F9F9FB",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Box></Box>
        <Typography variant="body2" color="text.secondary">
          {t("footerreserved.footerreservedpara")}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "15px",
          }}
        >
          <Link>
            <img src={GpayIcon} alt="Gpay" width={50} />
          </Link>
          <Link>
            <img src={AppleIcon} alt="Apple Pay" width={50} />
          </Link>
          <Link>
            <img src={VisaIcon} alt="Visa" width={50} />
          </Link>
          <Link>
            <img src={MasterIcon} alt="Master" width={50} />
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default FooterBottom;
