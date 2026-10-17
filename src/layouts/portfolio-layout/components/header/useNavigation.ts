import { navigationLinks } from "./navigation.data";
import { useEffect, useState } from "react";

/** Observe browser state without attaching behavior to individual DOM nodes. */
export function useNavigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // The browser may resolve a fragment before React has mounted its target.
  // Restore direct section URLs once the complete page exists in the DOM.
  useEffect(() => {
    if (!window.location.hash) return;
    const frame = requestAnimationFrame(() => {
      try {
        const id = decodeURIComponent(window.location.hash.slice(1));
        document
          .getElementById(id)
          ?.scrollIntoView({ behavior: "instant", block: "start" });
      } catch {
        // An invalid URL fragment should not prevent the portfolio from loading.
      }
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 25);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = ["home", ...navigationLinks.map(({ id }) => id)]
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);
    let frame = 0;
    const update = () => {
      frame = 0;
      const readingLine = Math.max(110, window.innerHeight * 0.28);
      let current = "home";
      for (const section of sections) {
        const bounds = section.getBoundingClientRect();
        if (bounds.height > 0 && bounds.top <= readingLine)
          current = section.id;
      }
      const root = document.documentElement;
      if (
        root.scrollHeight > window.innerHeight &&
        window.scrollY + window.innerHeight >= root.scrollHeight - 2
      )
        current = "contact";
      setActiveSection(current);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    window.addEventListener("load", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("load", schedule);
    };
  }, []);

  return { scrolled, activeSection };
}
