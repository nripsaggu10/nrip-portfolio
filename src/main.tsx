import "./shared/styles/tokens.css";
import "./shared/styles/reset.css";
import "./shared/styles/typography.css";
import "./shared/styles/utilities.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App";
import StartupScreen from "./app/startup-screen/StartupScreen";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StartupScreen>
      <App />
    </StartupScreen>
  </StrictMode>,
);
