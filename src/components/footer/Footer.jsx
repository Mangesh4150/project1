import React, { useEffect, useState } from "react";
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
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import FooterTop from "./FooterTop";
import FooterBottom from "./FooterBottom";
import FooterLoader from "./FooterLoader";

const Footer = () => {
  const [loading, setLoading] = useState(false);

  const { t } = useTranslation();
  const theme = useTheme();

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <FooterLoader />;

  return (
    <>
      <Box>
        <Container sx={{ maxWidth: "1540px !important" }}>
          <FooterTop />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: { xs: "40px", sm: "50px", md: "40px", lg: "40px" },
              paddingBottom: "60px",
              paddingTop: "60px",
              flexDirection: { xs: "column", sm: "column", md: "row" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                flexDirection: { xs: "column" },
                gap: "25px",
                width: { xs: "100%", sm: "50%", md: "30%", lg: "30%" },
              }}
            >
              <img src={logo} alt="" />
              <Typography
                variant="subtitle1"
                sx={{ maxWidth: 350 }}
                color="text.secondary2"
              >
                {t("footerpara.footerstayup")}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  // justifyContent: "space-between",
                  gap: "20px",
                  alignItems: "center",
                }}
              >
                <Icon
                  icon="hugeicons:new-twitter"
                  width="24"
                  height="24"
                  cursor="pointer"
                />
                <Icon
                  icon="jam:linkedin"
                  width="24"
                  height="24"
                  color="#0a66c2"
                  cursor="pointer"
                />
                <Icon
                  icon="skill-icons:instagram"
                  width="24"
                  height="24"
                  cursor="pointer"
                />
                <Icon
                  icon="logos:youtube-icon"
                  width="24"
                  height="24"
                  cursor="pointer"
                />
              </Box>
            </Box>
            <Box
              sx={{
                width: { xs: "100%", sm: "70%", md: "45%", lg: "45%" },
                display: "flex",
                justifyContent: "space-between",
                order: { xs: -1, sm: -1, md: 0, lg: 0 },
                flexDirection: { xs: "column", sm: "row", md: "row" },
                gap: { xs: "40px", sm: "0", md: "0px", lg: "0px" },
              }}
            >
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "25px" }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: theme.palette.text.primary,
                    fontWeight: 800,
                  }}
                >
                  {t("footeraboutlinks.about")}
                </Typography>
                <Link className="footer-links">
                  {t("footeraboutlinks.aboutus")}
                </Link>
                <Link className="footer-links">
                  {t("footeraboutlinks.blog")}
                </Link>
                <Link className="footer-links">
                  {t("footeraboutlinks.lawyers")}
                </Link>
                <Link className="footer-links">
                  {t("footeraboutlinks.services")}
                </Link>
                <Link className="footer-links">
                  {t("footeraboutlinks.community")}
                </Link>
              </Box>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "25px" }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: theme.palette.text.primary,
                    fontWeight: 800,
                  }}
                >
                  {t("footersupportlinks.support")}
                </Typography>
                <Link className="footer-links">
                  {t("footersupportlinks.contactus")}
                </Link>
                <Link className="footer-links">
                  {t("footersupportlinks.onlinechat")}
                </Link>
                <Link className="footer-links">
                  {t("footersupportlinks.whatsapp")}
                </Link>
              </Box>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "25px" }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: theme.palette.text.primary,
                    fontWeight: 800,
                  }}
                >
                  {t("footerlegallinks.legal")}
                </Typography>
                <Link className="footer-links">
                  {t("footerlegallinks.privacypolicy")}
                </Link>
                <Link className="footer-links">
                  {t("footerlegallinks.termsandconditions")}
                </Link>
                <Link className="footer-links">
                  {t("footerlegallinks.cookiepolicy")}
                </Link>
              </Box>
            </Box>
          </Box>
          <FooterBottom />
        </Container>
      </Box>
    </>
  );
};

export default Footer;
