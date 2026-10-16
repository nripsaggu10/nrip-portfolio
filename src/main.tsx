import "./shared/styles/tokens.css";
import "./shared/styles/reset.css";
import "./shared/styles/typography.css";
import "./shared/styles/utilities.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
