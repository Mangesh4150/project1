import { Box, Container, Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import Appstore from "../../assets/images/icons/appstore.svg";
import Googleplay from "../../assets/images/icons/googleplay.svg";
import { useEffect, useState } from "react";
import Whychooseloader from "./Whychooseloader";

const WhyChooseUs = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <Whychooseloader />;

  return (
    <>
      <Box
        sx={{
          paddingBlock: "70px",
          backgroundColor: "#172B4D",
          paddingBottom: "280px",
          padding: {
            xs: "40px 0 40px",
            sm: "70px 0 280px",
            md: "70px 0 280px",
          },
        }}
      >
        <Container sx={{ maxWidth: "1540px !important" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: 3,
              flexWrap: { xs: "wrap", sm: "nowrap" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                width: { xs: "100%", sm: "40%" },
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  color: theme.palette.colors.white,
                  fontWeight: 800,
                  fontSize: { xs: "22px", sm: "22px", md: "32px" },
                }}
              >
                {t("whychooseus.title")} "?
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  color: theme.palette.text.light,
                  fontSize: { xs: "12px", sm: "14px" },
                }}
              >
                {t("whychooseus.description")}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "15px" }}>
              <img
                src={Googleplay}
                alt="Google Play"
                style={{
                  width: "137px",
                  cursor: "pointer",
                }}
              />
              <img
                src={Appstore}
                alt="Google Play"
                style={{
                  width: "137px",
                  cursor: "pointer",
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default WhyChooseUs;
