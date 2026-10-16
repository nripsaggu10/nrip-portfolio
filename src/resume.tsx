import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Resume from "./pages/resume/ResumePage";
import "./pages/resume/ResumePage.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Resume />
  </StrictMode>,
);
