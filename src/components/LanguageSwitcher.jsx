import { Box, Typography, useTheme } from "@mui/material";
import useLanguage from "../hooks/useLanguage";
import { Icon } from "@iconify/react";

export const LANGUAGES = {
  EN: "en",
  AR: "ar",
};

const LanguageSwitcher = () => {
  const { currentLanguage, toggleLanguage } = useLanguage();
  const theme = useTheme();

  return (
    <Box
      sx={{
        borderRadius: "15px",
        justifyContent: "space-between",
        alignItems: "center",
        display: "flex",
        gap: 1,
        border: "1px solid #E6E8EC",
        bgcolor: "background.paper",
        padding: "12px",
        cursor: "pointer",
        fontFamily: theme.typography.fontFamily,
      }}
      onClick={toggleLanguage}
    >
      {currentLanguage === LANGUAGES.EN ? (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 64 64"
          >
            <path
              fill="#8e313c"
              d="M32 2c-5.3 0-10.2 1.4-14.5 3.7v52.5C21.8 60.6 26.7 62 32 62c16.6 0 30-13.4 30-30S48.6 2 32 2"
            />
            <path
              fill="#9450e0"
              d="M32 2c-5.3 0-10.2 1.4-14.5 3.7v52.5C21.8 60.6 26.7 62 32 62c16.6 0 30-13.4 30-30S48.6 2 32 2"
              opacity="0.33"
            />
            <path
              fill="#f9f9f9"
              d="M2 32c0 11.3 6.3 21.1 15.5 26.3L28 56l-10-3l10-3l-10-3l10-3l-10-3l10-3l-10-3l10-3l-10-3l10-3l-10-3l10-3l-10-3l10-3l-10-3l10-3l-10.5-2.3C8.3 10.9 2 20.7 2 32"
            />
          </svg>{" "}
          <Typography variant="body1" sx={{ fontWeight: 500 }}>
            AR
          </Typography>
        </>
      ) : (
        <>
          <Icon icon="twemoji:flag-united-kingdom" />{" "}
          <Typography variant="body1" sx={{ fontWeight: 500 }}>
            EN
          </Typography>
        </>
      )}
    </Box>
  );
};

export default LanguageSwitcher;
