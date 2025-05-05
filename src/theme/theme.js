import { createTheme } from "@mui/material/styles";
import { breakpoints } from "./breakpoints";
import { typography } from "./typography";
import { palette } from "./palette";

const theme = createTheme({
  palette,
  breakpoints,
  typography,
});

export default theme;
