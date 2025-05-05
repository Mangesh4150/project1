import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Box, Typography } from "@mui/material";
import { useState } from "react";

const CustomDatePicker = ({
  value,
  onChange,
  label,
  placeholder,
  icon,
  customIcon = null,
  theme,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Box
      sx={{
        display: "flex",
        gap: 0,
        alignItems: "center",
        width: "100%",
        "& .react-datepicker-wrapper": {
          width: "100%",
          border: "transparent",
        },
        "& .react-datepicker": {
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          border: "none",
        },
        "& .react-datepicker-popper": {
          zIndex: 2,
        },
        "& .react-datepicker__triangle": {
          display: "none",
        },
        "& .react-datepicker__month-container": {
          fontSize: "14px !important",
          "& .react-datepicker__day, .react-datepicker__day-name": {
            width: "1.6rem",
            lineHeight: "1.3rem",
            textAlign: "center",
          },
          "& .react-datepicker__day--selected": {
            background: theme.palette.primary.main,

            "&:hover": {
              background: theme.palette.primary.light,
            },
          },
          "& .react-datepicker__day--keyboard-selected": {
            background: "none",
          },
        },
        "& .react-datepicker__input-container": {
          top: "-5px",
        },
        "& .react-datepicker__header ": {
          background: "none",
          "& .react-datepicker__current-month": {
            fontSize: "18px !important",
          },
        },
      }}
    >
      {/* Date Picker */}
      <DatePicker
        selected={value}
        onChange={onChange}
        dateFormat="yyyy-MM-dd"
        onCalendarOpen={() => setIsOpen(true)}
        onCalendarClose={() => setIsOpen(false)}
        customInput={
          <Typography
            variant="subtitle2"
            color={theme.palette.text.secondary}
            sx={{
              fontWeight: 600,
              cursor: "pointer",
              bgcolor: "#fff",
              borderRadius: "4px",
              width: "100%",
              height: "100%",
              position: "relative",
              svg: {
                position: "absolute",
                right: 0,
                top: "-12px",
                transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
              },
            }}
          >
            {customIcon && customIcon}
            {value ? value.toLocaleDateString() : placeholder}
          </Typography>
        }
      />
    </Box>
  );
};

export default CustomDatePicker;
