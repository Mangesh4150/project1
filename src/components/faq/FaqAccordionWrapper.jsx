import { useTranslation } from "react-i18next";
import FaqAccordion from "./FaqAccordion";
import Grid from "@mui/material/Grid2";

const FaqAccordionWrapper = () => {
  const { t } = useTranslation();
  const faqData = [
    {
      id: 1,
      title: t("faq.faqData.q1.title"),
      description: t("faq.faqData.q1.description"),
    },
    {
      id: 2,
      title: t("faq.faqData.q2.title"),
      description: t("faq.faqData.q2.description"),
    },
    {
      id: 3,
      title: t("faq.faqData.q3.title"),
      description: t("faq.faqData.q3.description"),
    },
    {
      id: 4,
      title: t("faq.faqData.q4.title"),
      description: t("faq.faqData.q4.description"),
    },
    {
      id: 5,
      title: t("faq.faqData.q5.title"),
      description: t("faq.faqData.q5.description"),
    },
    {
      id: 6,
      title: t("faq.faqData.q6.title"),
      description: t("faq.faqData.q6.description"),
    },
    {
      id: 7,
      title: t("faq.faqData.q7.title"),
      description: t("faq.faqData.q7.description"),
    },
    {
      id: 8,
      title: t("faq.faqData.q8.title"),
      description: t("faq.faqData.q8.description"),
    },
    {
      id: 9,
      title: t("faq.faqData.q9.title"),
      description: t("faq.faqData.q9.description"),
    },
    {
      id: 10,
      title: t("faq.faqData.q10.title"),
      description: t("faq.faqData.q10.description"),
    },
  ];
  return (
    <Grid
      container
      spacing={3}
      rowGap={{ xs: 2, md: 3 }}
      columns={{ xs: 1, md: 2 }}
    >
      {faqData.map((faq, index) => {
        return (
          <Grid key={index} size={1}>
            <FaqAccordion key={index} {...faq} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default FaqAccordionWrapper;
