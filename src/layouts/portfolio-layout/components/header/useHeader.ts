import { useEffect, useRef, useState } from "react";
import { useNavigation } from "./useNavigation";
export function useHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const header = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  const { scrolled, activeSection } = useNavigation();

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 601px)");
    const close = () => setMenuOpen(false);
    desktop.addEventListener("change", close);
    return () => desktop.removeEventListener("change", close);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggle.current?.focus();
      }
    };
    const onClick = (event: MouseEvent) => {
      if (
        event.target instanceof Node &&
        !header.current?.contains(event.target)
      )
        setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((open) => !open);
  return {
    menuOpen,
    header,
    toggle,
    scrolled,
    activeSection,
    closeMenu,
    toggleMenu,
  };
}
