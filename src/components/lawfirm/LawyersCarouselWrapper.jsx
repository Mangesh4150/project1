import { Container, useMediaQuery, useTheme } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import LawyerCard from "./LawyerCard";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { useTranslation } from "react-i18next";

const LawyersCarouselWrapper = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isBelowLg = useMediaQuery(theme.breakpoints.down("lg"));

  const lawyersData = [
    {
      id: 1,
      firmName: t("lawfirm.lawyersData.dawiLawFirm.firmName"),
      description: t("lawfirm.lawyersData.dawiLawFirm.description"),
      logoUrl: "/placeholder.svg?height=80&width=80",
      yearsExperience: t("lawfirm.lawyersData.dawiLawFirm.yearsExperience"),
      spokenLanguages: t("lawfirm.lawyersData.dawiLawFirm.spokenLanguages"),
    },
    {
      id: 2,
      firmName: t("lawfirm.lawyersData.salehForLaw.firmName"),
      description: t("lawfirm.lawyersData.salehForLaw.description"),
      logoUrl: "/placeholder.svg?height=80&width=80",
      yearsExperience: t("lawfirm.lawyersData.salehForLaw.yearsExperience"),
      spokenLanguages: t("lawfirm.lawyersData.salehForLaw.spokenLanguages"),
    },
    {
      id: 3,
      firmName: t("lawfirm.lawyersData.alAnsariLawFirm.firmName"),
      description: t("lawfirm.lawyersData.alAnsariLawFirm.description"),
      logoUrl: "/placeholder.svg?height=80&width=80",
      yearsExperience: t("lawfirm.lawyersData.alAnsariLawFirm.yearsExperience"),
      spokenLanguages: t("lawfirm.lawyersData.alAnsariLawFirm.spokenLanguages"),
    },
    {
      id: 4,
      firmName: t("lawfirm.lawyersData.dunneLawPllc.firmName"),
      description: t("lawfirm.lawyersData.dunneLawPllc.description"),
      logoUrl: "/placeholder.svg?height=80&width=80",
      yearsExperience: t("lawfirm.lawyersData.dunneLawPllc.yearsExperience"),
      spokenLanguages: t("lawfirm.lawyersData.dunneLawPllc.spokenLanguages"),
    },
    {
      id: 5,
      firmName: t("lawfirm.lawyersData.dunneLawPllc.firmName"),
      description: t("lawfirm.lawyersData.dunneLawPllc.description"),
      logoUrl: "/placeholder.svg?height=80&width=80",
      yearsExperience: t("lawfirm.lawyersData.dunneLawPllc.yearsExperience"),
      spokenLanguages: t("lawfirm.lawyersData.dunneLawPllc.spokenLanguages"),
    },
    {
      id: 6,
      firmName: t("lawfirm.lawyersData.dunneLawPllc.firmName"),
      description: t("lawfirm.lawyersData.dunneLawPllc.description"),
      logoUrl: "/placeholder.svg?height=80&width=80",
      yearsExperience: t("lawfirm.lawyersData.dunneLawPllc.yearsExperience"),
      spokenLanguages: t("lawfirm.lawyersData.dunneLawPllc.spokenLanguages"),
    },
    {
      id: 7,
      firmName: t("lawfirm.lawyersData.dunneLawPllc.firmName"),
      description: t("lawfirm.lawyersData.dunneLawPllc.description"),
      logoUrl: "/placeholder.svg?height=80&width=80",
      yearsExperience: t("lawfirm.lawyersData.dunneLawPllc.yearsExperience"),
      spokenLanguages: t("lawfirm.lawyersData.dunneLawPllc.spokenLanguages"),
    },
    {
      id: 8,
      firmName: t("lawfirm.lawyersData.dunneLawPllc.firmName"),
      description: t("lawfirm.lawyersData.dunneLawPllc.description"),
      logoUrl: "/placeholder.svg?height=80&width=80",
      yearsExperience: t("lawfirm.lawyersData.dunneLawPllc.yearsExperience"),
      spokenLanguages: t("lawfirm.lawyersData.dunneLawPllc.spokenLanguages"),
    },
  ];

  return (
    <Container
      sx={{
        padding: "0 !important",
        minWidth: "100%",
        "&.swiper-pagination": {
          position: "relative !important",
          marginTop: "10px",
        },
      }}
    >
      <Swiper
        dir={"ltr"}
        centeredSlides={true}
        spaceBetween={isBelowLg ? 10 : 30}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          600: {
            slidesPerView: 2,
          },
          960: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
        freeMode={isBelowLg ? false : true}
        loop={isBelowLg ? false : true}
        roundLengths={isBelowLg ? false : true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
      >
        {lawyersData.map((lawyer, index) => (
          <SwiperSlide
            key={lawyer.id}
            style={{
              ...(isBelowLg
                ? {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }
                : {}),
            }}
          >
            <LawyerCard {...lawyer} isBelowLg={isBelowLg} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default LawyersCarouselWrapper;
