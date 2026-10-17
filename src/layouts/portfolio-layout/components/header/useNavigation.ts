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
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        }
      },
      { rootMargin: "-15% 0px -55% 0px", threshold: 0 },
    );
    [
      "home",
      "experience",
      "expertise",
      "projects",
      "about",
      "education",
      "certifications",
      "recognition",
      "contact",
    ].forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  return { scrolled, activeSection };
}
