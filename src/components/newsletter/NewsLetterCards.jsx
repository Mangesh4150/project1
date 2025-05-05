import { Box, Card, CardContent, Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import Mobile2 from "../../assets/images/m-2.png";
import Mobile1 from "../../assets/images/m-1.png";
import { useEffect, useState } from "react";
import CardsLoader from "./CardsLoader";

const NewsLetterCards = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <CardsLoader />;

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          position: { xs: "static", sm: "absolute" },
          top: "-240px",
          left: "0",
          right: "0",
          maxWidth: "1516px",
          margin: "0 auto",
          padding: {
            xs: "0",
            sm: "0 24px 40px 24px",
            md: "0 24px 40px 24px",
          },
          flexWrap: { xs: "wrap", sm: "nowrap" },
        }}
      >
        <Card
          sx={{
            maxWidth: { md: "100%", lg: "33%" },
            height: "100%",
            display: "flex",
            flexDirection: "column",
            borderRadius: 4,
            border: "1px solid #f0f0f0",
            boxShadow: "none",
            marginInline: { xs: "auto", sm: 0 },
          }}
        >
          <CardContent
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              gap: 1,
              padding: {
                xs: "20px 20px 0 !important",
                sm: "20px 20px 0 !important",
                md: "40px 40px 0 !important",
              },
            }}
          >
            <Typography
              variant="h5"
              color={theme.palette.primary.main}
              sx={{
                fontWeight: 800,
                lineHeight: 1.3,
                marginBottom: "10px",
              }}
            >
              {t("whychoosecard.title")}
            </Typography>

            <Typography
              variant="subtitle2"
              color="text.secondary"
              sx={{
                mb: 1,
                lineHeight: 1.4,
                marginBottom: { xs: "30px", sm: "60px", md: "60px" },
              }}
            >
              {t("whychoosecard.description")}
            </Typography>
            <img
              src={Mobile1}
              alt="blog"
              style={{
                width: "100%",
              }}
            />
          </CardContent>
        </Card>
        <Card
          sx={{
            maxWidth: { md: "100%", lg: "33%" },
            height: "100%",
            display: "flex",
            flexDirection: "column",
            borderRadius: 4,
            border: "1px solid #f0f0f0",
            boxShadow: "none",
            marginInline: { xs: "auto", sm: 0 },
          }}
        >
          <CardContent
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              gap: 1,
              padding: {
                xs: " 20px 20px 0 !important",
                sm: "0 20px 20px !important",
                md: "0 40px 40px !important",
              },
            }}
          >
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <img
                src={Mobile2}
                alt="blog"
                style={{
                  width: "100%",
                }}
              />
            </Box>
            <Typography
              variant="h5"
              color={theme.palette.primary.main}
              sx={{
                fontWeight: 800,
                lineHeight: 1.3,
                marginBottom: "10px",
                marginTop: { xs: "0", sm: "60px", md: "60px" },
              }}
            >
              {t("whychoosecard.title")}
            </Typography>

            <Typography
              variant="subtitle2"
              color="text.secondary"
              sx={{
                mb: 1,
                lineHeight: 1.4,
                marginBottom: { xs: "30px", sm: "0", md: "0" },
              }}
            >
              {t("whychoosecard.description")}
            </Typography>
            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              <img
                src={Mobile1}
                alt="blog"
                style={{
                  width: "100%",
                }}
              />
            </Box>
          </CardContent>
        </Card>
        <Card
          sx={{
            maxWidth: { md: "100%", lg: "33%" },
            height: "100%",
            display: "flex",
            flexDirection: "column",
            borderRadius: 4,
            border: "1px solid #f0f0f0",
            boxShadow: "none",
            marginInline: { xs: "auto", sm: 0 },
          }}
        >
          <CardContent
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              gap: 1,
              padding: {
                xs: "20px 20px 0 !important",
                sm: "20px 20px 0 !important",
                md: "40px 40px 0 !important",
              },
            }}
          >
            <Typography
              variant="h5"
              color={theme.palette.primary.main}
              sx={{
                fontWeight: 800,
                lineHeight: 1.3,
                marginBottom: "10px",
              }}
            >
              {t("whychoosecard.title")}
            </Typography>

            <Typography
              variant="subtitle2"
              color="text.secondary"
              sx={{
                mb: 1,
                lineHeight: 1.4,
                marginBottom: { xs: "30px", sm: "60px", md: "60px" },
              }}
            >
              {t("whychoosecard.description")}
            </Typography>
            <img
              src={Mobile1}
              alt="blog"
              style={{
                width: "100%",
              }}
            />
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default NewsLetterCards;
