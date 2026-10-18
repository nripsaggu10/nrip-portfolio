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
              <img
                className="startup-logo"
                src="/nrip-wordmark.svg"
                alt="nrip. logo"
                width="222"
                height="130"
              />
            </div>
          </div>
        </section>
      )}
    </>
  );
}
