import { hexToRgba } from "../utils/utils";
import { colors } from "./colors";

export const palette = {
  primary: {
    dark: colors.primaryDark,
    main: colors.primary,
    light: hexToRgba(colors.primary, 0.8),
  },
  secondary: {
    main: colors.secondary,
    light: hexToRgba(colors.secondary, 0.4),
  },
  success: {
    main: colors.success,
    light: hexToRgba(colors.success, 0.4),
  },
  error: {
    main: colors.error,
    light: hexToRgba(colors.error, 0.4),
  },
  warning: {
    main: colors.warning,
    light: hexToRgba(colors.warning, 0.4),
  },
  info: {
    main: colors.info,
    light: hexToRgba(colors.info, 0.4),
  },
  gray: {
    main: colors.gray,
    light: hexToRgba(colors.gray, 0.4),
  },
  colors,
  background: colors.background,
  text: colors.text,
};
