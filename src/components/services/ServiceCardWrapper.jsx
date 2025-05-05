import ServiceCard from "./ServiceCard";
import Grid from "@mui/material/Grid2";
import { useTranslation } from "react-i18next";
const ServiceCardWrapper = () => {
  const { t } = useTranslation();
  const servicesData = [
    {
      id: 1,
      title: t("services.servicesData.scheduledConsultations.title"),
      description: t(
        "services.servicesData.scheduledConsultations.description"
      ),
      icon: "mdi:calendar-month",
      iconBgColor: "#E6F7EE",
      iconColor: "#36B37E",
      buttonText: t("services.servicesData.scheduledConsultations.buttonText"),
      buttonIconName: "mdi:calendar-edit",
      isComingSoon: false,
    },
    {
      id: 2,
      title: t("services.servicesData.urgentConsultation.title"),
      description: t("services.servicesData.urgentConsultation.description"),
      icon: "mdi:phone",
      iconBgColor: "#FFEBE6",
      iconColor: "#FF5630",
      buttonText: t("services.servicesData.urgentConsultation.buttonText"),
      buttonIconName: "mdi:phone-in-talk",
      isComingSoon: false,
    },
    {
      id: 3,
      title: t("services.servicesData.corporatePortal.title"),
      description: t("services.servicesData.corporatePortal.description"),
      icon: "mdi:domain",
      iconBgColor: "#DEEBFF",
      iconColor: "#2684FF",
      isComingSoon: true,
    },
    {
      id: 4,
      title: t("services.servicesData.writtenConsultation.title"),
      description: t("services.servicesData.writtenConsultation.description"),
      icon: "mdi:file-document-outline",
      iconBgColor: "#FFF7E0",
      iconColor: "#FFAB00",
      isComingSoon: true,
    },
    {
      id: 5,
      title: t("services.servicesData.contractsAgreements.title"),
      description: t("services.servicesData.contractsAgreements.description"),
      icon: "mdi:gavel",
      iconBgColor: "#EAE6FF",
      iconColor: "#6554C0",
      isComingSoon: true,
    },
    {
      id: 6,
      title: t("services.servicesData.hireALawyer.title"),
      description: t("services.servicesData.hireALawyer.description"),
      icon: "mdi:account",
      iconBgColor: "#FFE2CC",
      iconColor: "#FF8B00",
      isComingSoon: true,
    },
  ];
  return (
    <Grid
      container
      spacing={3}
      rowGap={{ xs: 2, md: 3 }}
      columns={{ xs: 1, sm: 2, lg: 3 }}
    >
      {servicesData.map((card, index) => {
        return (
          <Grid key={index} size={1}>
            <ServiceCard
              key={index}
              title={card.title}
              description={card.description}
              icon={card.icon}
              iconBgColor={card.iconBgColor}
              iconColor={card.iconColor}
              buttonText={card.buttonText}
              buttonIcon={card.buttonIconName}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ServiceCardWrapper;
