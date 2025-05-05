import {
  Box,
  Container,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import NewsLetterCards from "./NewsLetterCards";
import { useEffect, useState } from "react";
import NewsLetterLoader from "./NewsLetterLoader";
import { hexToRgba } from "../../utils/utils";
import { toast } from "react-toastify";

const NewsLetter = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const [email, setEmail] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <NewsLetterLoader />;

  return (
    <>
      <Box
        sx={{
          paddingBottom: "40px",
          backgroundColor: "#F9F9FB",
          position: "relative",
          paddingTop: { xs: "40px", sm: "0", md: "0" },
        }}
      >
        <Container sx={{ maxWidth: "1540px !important" }}>
          <NewsLetterCards />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: { xs: "20px", sm: "40px", md: "70px" },
              flexWrap: { xs: "wrap", sm: "nowrap" },
              paddingTop: { xs: "40px", sm: "355px", md: "355px" },
            }}
          >
            <Box
              sx={{ width: { xs: "100%", sm: "50%", md: "40%", lg: "40%" } }}
            >
              <Typography variant="h4" mb={1}>
                {t("newsletter.title")}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ color: theme.palette.text.secondary }}
              >
                {t("newsletter.description")}
              </Typography>
            </Box>
            <Box
              sx={{
                width: { xs: "100%", sm: "50%", md: "60%", lg: "60%" },
              }}
            >
              <TextField
                id="outlined-start-adornment"
                value={email}
                sx={{
                  m: 1,
                  width: "100%",

                  "& .MuiOutlinedInput-root": {
                    borderRadius: "50px",
                    backgroundColor: "#fff",
                    fontSize: "14px",
                    height: "55px",
                    padding: "12px 10px 12px 10px",
                    "&:focus-visible": {
                      outline: `1px solid ${hexToRgba(
                        theme.palette.primary.main,
                        0.1
                      )} !important`,
                    },
                  },
                  // "& .MuiOutlinedInput-input": {},
                }}
                placeholder={t("newsletter.enterYourEmail")}
                onChange={(e) => setEmail(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Icon
                        icon="mage:email"
                        width="22"
                        height="22"
                        color="#9a9da4"
                      />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        sx={{
                          color: "#fff",
                          backgroundColor: theme.palette.primary.main,
                          borderRadius: "50px",
                          fontSize: "12px",
                          fontWeight: 800,
                          padding: "14px 40px",
                          transition: "background-color 0.3s ease",
                          marginLeft: "0px",
                          "&:hover": {
                            backgroundColor: "#1A3A6D",
                            color: theme.palette.primary.main,
                            background: `${hexToRgba(
                              theme.palette.primary.main,
                              0.1
                            )} !important`,
                            outline: `1px solid ${hexToRgba(
                              theme.palette.primary.main,
                              1
                            )} !important`,
                          },
                        }}
                        onClick={() => {
                          if (email) {
                            toast.success(
                              t("newsletter.emailSubmittedSuccessfully")
                            );
                          }
                        }}
                      >
                        {t("common.submit")}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default NewsLetter;
