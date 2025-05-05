import {
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Card,
  CardContent,
  useTheme,
  Typography,
  Container,
  Divider,
  useMediaQuery,
} from "@mui/material";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { hexToRgba } from "../../utils/utils";
import CustomButton from "../shared/CustomButton";
import { useTranslation } from "react-i18next";
import CustomDatePicker from "../shared/CustomDatePicker";
import { toast } from "react-toastify";

// Consultation time slots
export const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
];

// Languages available
export const languages = ["Arabic", "English", "French", "Spanish"];

// Experience ranges
export const experienceRanges = [
  "1-5 years",
  "5-10 years",
  "10-15 years",
  "15+ years",
];

const FiltersCard = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const isBelowLg = useMediaQuery(theme.breakpoints.down("lg"));
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    language: "",
    experience: "",
  });

  const allDataFilled = Object.entries(formData).every(
    ([key, value]) => value !== ""
  );
  const handleChange = (event, field) => {
    setFormData((prev) => ({
      ...prev,
      [field]: field === "date" ? event : event.target.value,
    }));
  };
  const consultationOptions = {
    date: {
      label: t("consultationOptions.date.label"),
      placeholder: t("consultationOptions.date.placeholder"),
      icon: "cuida:calendar-outline",
    },
    time: {
      label: t("consultationOptions.time.label"),
      placeholder: t("consultationOptions.time.placeholder"),
      icon: "mdi:clock-outline",
    },
    language: {
      label: t("consultationOptions.language.label"),
      placeholder: t("consultationOptions.language.placeholder"),
      icon: "clarity:language-line",
    },
    experience: {
      label: t("consultationOptions.experience.label"),
      placeholder: t("consultationOptions.experience.placeholder"),
      icon: "uit:bag",
    },
  };

  return (
    <Container
      sx={{
        maxWidth: "1540px !important",
        ...(isBelowLg
          ? {}
          : {
              position: "absolute",
              top: "55%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }),
      }}
    >
      <Card
        sx={{ borderRadius: 4, boxShadow: "none", overflow: "visible", py: 4 }}
      >
        <CardContent sx={{ p: 0 }}>
          <Box
            sx={{
              bgcolor: "white",
              borderRadius: 4,
              p: 4,
              px: 2,
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "repeat(2, 1fr)",
                lg: "repeat(4, 1fr)",
              },
              gap: 1,
              rowGap: 4,
            }}
          >
            {Object.entries(consultationOptions).map(([key, option], index) => (
              <Box
                key={key}
                sx={{ display: "flex", gap: 0, alignItems: "center" }}
              >
                <Box
                  sx={{
                    p: 1.5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    bgcolor: hexToRgba(theme.palette.secondary.main, 0.1),
                    borderRadius: "50%",
                  }}
                >
                  <Icon
                    icon={option.icon}
                    width={16}
                    height={16}
                    style={{ color: theme.palette.secondary.main }}
                  />
                </Box>
                {key === "date" ? (
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      paddingLeft: "14px !important",
                    }}
                  >
                    <Typography fontWeight={600} sx={{ fontSize: "17px" }}>
                      {option.label}
                    </Typography>
                    <CustomDatePicker
                      value={formData.date}
                      onChange={(date) => handleChange(date, "date")}
                      label={t("consultationOptions.date.label")}
                      placeholder={t("consultationOptions.date.placeholder")}
                      customIcon={
                        <Icon
                          icon="gridicons:dropdown"
                          width="30"
                          height="30"
                        />
                      }
                      theme={theme}
                    />
                  </Box>
                ) : (
                  <FormControl
                    key={key}
                    fullWidth
                    sx={{
                      "& .MuiInputLabel-root": {
                        fontSize: "22px !important",
                        fontWeight: 600,
                        color: theme.palette.primary.main,
                      },
                      "& .MuiSelect-select": {
                        padding: "10px 14px 0 !important",
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "transparent !important",

                        "&:hover": {
                          borderColor: "transparent !important",
                        },
                        "&:focus": {
                          borderColor: "transparent !important",
                        },
                      },
                    }}
                  >
                    <InputLabel>{option.label}</InputLabel>

                    <Select
                      value={formData}
                      label={option.label}
                      onChange={(e) => handleChange(e, key)}
                      renderValue={(selected) => {
                        if (selected[key].length === 0) {
                          return (
                            <Typography
                              variant="subtitle2"
                              color={theme.palette.text.secondary}
                              sx={{
                                fontWeight: 600,
                                mt: 1,
                                paddingRight: "23px",
                              }}
                            >
                              {option.placeholder}
                            </Typography>
                          );
                        }

                        return (
                          <Typography
                            variant="subtitle2"
                            color={theme.palette.text.secondary}
                            sx={{
                              fontWeight: 600,
                              mt: 1,
                              paddingRight: "23px",
                            }}
                          >
                            {selected[key]}
                          </Typography>
                        );
                      }}
                    >
                      {
                        // </MenuItem>
                        key === "time"
                          ? timeSlots.map((time) => (
                              <MenuItem key={time} value={time}>
                                {time}
                              </MenuItem>
                            ))
                          : key === "language"
                          ? languages.map((lang) => (
                              <MenuItem key={lang} value={lang}>
                                {lang}
                              </MenuItem>
                            ))
                          : experienceRanges.map((range) => (
                              <MenuItem key={range} value={range}>
                                {range}
                              </MenuItem>
                            ))
                      }
                    </Select>
                  </FormControl>
                )}
                {!isBelowLg &&
                  index !== Object.keys(consultationOptions).length - 1 && (
                    <Divider
                      orientation="vertical"
                      flexItem
                      sx={{
                        mx: 2,
                        borderColor: hexToRgba(
                          theme.palette.text.secondary,
                          0.1
                        ),
                      }}
                    />
                  )}
              </Box>
            ))}
          </Box>

          <Box
            sx={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <CustomButton
              text={t("common.bookAConsultation")}
              icon="mdi:calendar-clock"
              variant="contained"
              color="primary"
              disabled={!allDataFilled}
              sx={{
                mt: 2,
                px: 6,
                color: theme.palette.colors.white,
              }}
              onClick={() =>
                toast.success(
                  t("banner.consult.consultationBookedSuccessfully")
                )
              }
            />
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default FiltersCard;
