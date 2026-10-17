import type { ReactNode } from "react";
import { useStartupScreen } from "./useStartupScreen";
import "./StartupScreen.css";

export default function StartupScreen({ children }: { children: ReactNode }) {
  const { phase } = useStartupScreen();

  return (
    <>
      {phase !== "intro" && (
        <div
          className={`startup-page${phase === "revealing" ? " startup-page--revealing" : ""}`}
          inert={phase !== "ready"}
        >
          {children}
        </div>
      )}
      {phase !== "ready" && (
        <section
          className={`startup-screen${phase === "revealing" ? " startup-screen--leaving" : ""}`}
          aria-label="Portfolio introduction"
        >
          <div className="startup-signature">
            <div className="startup-logo-wrap">
              <svg
                className="startup-logo"
                viewBox="0 0 144 164"
                role="img"
                aria-label="N logo"
              >
                <path
                  className="startup-hexagon"
                  d="M72 7 136 44v76l-64 37-64-37V44Z"
                  pathLength="1"
                />
                <path
                  className="startup-letter"
                  d="M51 109V55l42 54V55"
                  pathLength="1"
                />
              </svg>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
