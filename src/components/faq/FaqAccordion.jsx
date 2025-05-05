import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  useTheme,
} from "@mui/material";
import { Icon } from "@iconify/react";

const FaqAccordion = ({ title, description }) => {
  const theme = useTheme();
  return (
    <Accordion
      sx={{
        boxShadow: "none",
        border: `1px solid ${theme.palette.background.default}`,
        borderRadius: "20px !important",
        "& .MuiButtonBase-root": {
          minHeight: "70px",
        },
        "& .MuiAccordionSummary-content": { m: "12px 0 !important" },
        "& .Mui-expanded": {
          "&.MuiButtonBase-root": {
            minHeight: "70px",
          },
          "& .MuiAccordionSummary-content": { m: "12px 0 !important" },
        },
      }}
    >
      <AccordionSummary
        expandIcon={
          <Icon
            fontSize={22}
            icon="lets-icons:arrow-down"
            color={theme.palette.secondary.main}
          />
        }
      >
        <Typography variant="body1" sx={{ fontWeight: 600 }}>
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography
          variant="subtitle1"
          color="text.secondary2"
          sx={{ lineHeight: 1.4 }}
        >
          {description}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default FaqAccordion;
