import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { Box, Container, useTheme } from "@mui/material";
import logo from "../../assets/images/logo.png";
import LanguageSwitcher from "../LanguageSwitcher";

const navLinks = [
  { key: "home", path: "/" },
  { key: "aboutus", path: "/aboutus" },
  { key: "lawfrim", path: "/lawfrim" },
  { key: "services", path: "/services" },
  { key: "community", path: "/community" },
  { key: "contactus", path: "/contactus" },
];

const Header = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/logout");
  };
  return (
    <Box sx={{ paddingBlock: "18px" }}>
      <Container sx={{ maxWidth: "1540px !important" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Logo */}
          <Box>
            <img src={logo} alt="Logo" width="130px" />
          </Box>

          {/* Navigation Links */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 4,
              "& a": {
                fontFamily: theme.typography.fontFamily,
                fontSize: "16px",
                textDecoration: "none",
                color: theme.palette.primary.main,
                transition: "all 0.3s ease",
                "&:hover": {
                  textShadow: "0px 0px 1px currentColor",
                },
              },
            }}
          >
            {navLinks.map(({ key, path }) => (
              <Link key={key} to={path}>
                {t(`header.${key}`)}
              </Link>
            ))}
          </Box>

          {/* Right Actions: User Icon, Language Switcher, Mobile Menu */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {/* User Icon */}
            <Box
              sx={{
                width: "51px",
                borderRadius: "15px",
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid #E6E8EC",
                bgcolor: "background.paper",
                padding: "12px",
                cursor: "pointer",
              }}
              onClick={handleLogout}
            >
              <Icon icon="fluent-mdl2:follow-user" width="25" height="25" />
            </Box>

            {/* Language Switcher */}
            <LanguageSwitcher />

            {/* Mobile Menu Toggle */}
            <Box sx={{ display: { xs: "block", md: "none" } }}>
              <Box
                sx={{
                  position: "relative",
                  zIndex: 2,
                  width: 40,
                  height: 40,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Menu"
              >
                <Icon icon={"fe:bar"} fontSize={22} />
              </Box>

              {/* Mobile Navigation Menu */}
              {isOpen && (
                <>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 3,
                      alignItems: "center",
                      position: "fixed",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: theme.palette.background.paper,
                      paddingBlock: "100px",
                      paddingTop: "20px",
                      zIndex: 2,
                      "& a": {
                        color: theme.palette.primary.main,
                        fontWeight: 500,
                        fontSize: "16px",
                        textDecoration: "none",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          textShadow: "0px 0px 1px currentColor",
                        },
                      },
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        zIndex: 2,
                        width: 40,
                        height: 40,
                        cursor: "pointer",
                        left: "40%",
                        mb: 10,
                      }}
                      onClick={() => setIsOpen(!isOpen)}
                      aria-label="Toggle Menu"
                    >
                      <Icon
                        icon={isOpen ? "maki:cross" : "fe:bar"}
                        fontSize={22}
                      />
                    </Box>
                    {navLinks.map(({ key, path }) => (
                      <Link
                        key={key}
                        to={path}
                        onClick={() => setIsOpen(false)}
                        sx={{ color: theme.palette.primary.main }}
                      >
                        {t(`header.${key}`)}
                      </Link>
                    ))}
                  </Box>
                </>
              )}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
