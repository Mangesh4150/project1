import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import theme from "./theme/theme.js";
import { ThemeProvider } from "@mui/material/styles";
import App from "./App.jsx";
import "./i18n";
import "./index.css";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
        <ToastContainer
          position="top-right"
          autoClose={2000}
          style={{ fontSize: "14px", fontWeight: 600 }}
        />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
