import ServiceSection from "../components/services/ServiceSection";
import LawfirmSection from "../components/lawfirm/LawfirmSection";
import JoinNowSection from "../components/joinAsAlawyer/JoinNowSection";
import CommunitySection from "../components/community/CommunitySection";
import FaqSection from "../components/faq/FaqSection";
import BannerSection from "../components/hero/BannerSection";
import NewsLetter from "../components/newsletter/NewsLetter";
import WhyChooseUs from "../components/whychooseus/WhyChooseUs";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { Icon } from "@iconify/react";

const Home = () => {
  const theme = useTheme();
  const isBelowLg = useMediaQuery(theme.breakpoints.down("lg"));
  const commonbtn = {
    width: isBelowLg ? 30 : "50px",
    height: isBelowLg ? 30 : "50px",
    borderRadius: "50%",
    mb: "15px",
    cursor: "pointer",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          bottom: 0,
          margin: "auto 0",
          zIndex: "999",
          height: "fit-content",
          padding: "15px",
        }}
      >
        <Box
          sx={{
            ...commonbtn,
            background: "#7bd467",
          }}
        >
          <Icon
            icon="tabler:brand-whatsapp"
            fontSize={isBelowLg ? "20" : "28"}
          />
        </Box>
        <Box
          sx={{
            ...commonbtn,
            mb: "0",
            background: "#1665dc",
          }}
        >
          <Icon
            icon="ic:sharp-support-agent"
            fontSize={isBelowLg ? "20" : "28"}
          />
        </Box>
      </Box>
      <BannerSection />
      <ServiceSection />
      <LawfirmSection />
      <JoinNowSection />
      <CommunitySection />
      <FaqSection />
      <WhyChooseUs />
      <NewsLetter />
    </>
  );
};

export default Home;
