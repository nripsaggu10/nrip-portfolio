import { useCallback, useEffect, useState } from "react";

export const INTRO_REVEAL_MS = 3000;
export const INTRO_COMPLETE_MS = 3800;
type IntroPhase = "intro" | "revealing" | "ready";

export function useStartupScreen() {
  const [phase, setPhase] = useState<IntroPhase>(() =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "ready"
      : "intro",
  );
  const skipIntro = useCallback(() => setPhase("ready"), []);
  const active = phase !== "ready";

  useEffect(() => {
    if (!active) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onMotionChange = () => {
      if (motion.matches) skipIntro();
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") skipIntro();
    };
    const revealTimer = window.setTimeout(
      () => setPhase("revealing"),
      INTRO_REVEAL_MS,
    );
    const completeTimer = window.setTimeout(skipIntro, INTRO_COMPLETE_MS);
    motion.addEventListener("change", onMotionChange);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      window.clearTimeout(revealTimer);
      window.clearTimeout(completeTimer);
      motion.removeEventListener("change", onMotionChange);
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [active, skipIntro]);

  return { phase, skipIntro };
}
