import { StrictMode } from "react";
import { render } from "@testing-library/react";
import App from "../app/App";
export function renderPortfolio() {
  return render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
