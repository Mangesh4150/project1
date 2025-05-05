import Button from "@mui/material/Button";
import { Icon } from "@iconify/react";
import { hexToRgb, useTheme } from "@mui/material";
import { hexToRgba } from "../../utils/utils";
const CustomButton = ({
  text,
  icon,
  variant = "contained",
  color = "primary",
  fullWidth = false,
  endIcon = null,
  sx = {},
  ...props
}) => {
  const theme = useTheme();
  return (
    <Button
      variant={variant}
      color={color}
      fullWidth={fullWidth}
      endIcon={endIcon && <Icon icon={endIcon} width={20} />}
      startIcon={!endIcon && icon && <Icon icon={icon} width={20} />}
      sx={{
        borderRadius: 3,
        py: 1.5,
        background: theme.palette[color].main,
        textTransform: "none",
        fontSize: "14px !important",
        fontWeight: 600,
        boxShadow: "none",
        transition: "all 0.3s ease",

        "& .MuiButton-startIcon, .MuiButton-endIcon": {
          marginInline: 1,
        },
        ...sx,
        "&:hover": {
          boxShadow: "none !important",
          color: theme.palette[color].main,
          background: `${hexToRgba(theme.palette[color].main, 0.1)} !important`,
          outline: `1px solid ${hexToRgba(
            theme.palette[color].main,
            1
          )} !important`,
          ...(sx.hover && sx.hover),
        },
      }}
      {...props}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
