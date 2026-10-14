import { useEffect, useRef, useState } from "react";
import { useNavigation } from "../hooks/useNavigation";

const links = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Work" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
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

  return (
    <header
      ref={header}
      className={`site-header${scrolled ? " scrolled" : ""}`}
    >
      <a
        className="brand"
        href="#home"
        aria-label="Nripdev Singh, home"
        onClick={() => setMenuOpen(false)}
      >
        <svg width="48" height="52" viewBox="0 0 48 52" aria-hidden="true">
          <path
            d="M24 2 45 14v24L24 50 3 38V14Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <text
            x="24"
            y="32"
            textAnchor="middle"
            fill="currentColor"
            fontSize="16"
            fontFamily="monospace"
          >
            ns
          </text>
        </svg>
      </a>
      <button
        ref={toggle}
        className="menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className="menu-label">Menu</span>
        <span className="menu-icon" aria-hidden="true" />
      </button>
      <nav
        id="navigation"
        aria-label="Main navigation"
        className={menuOpen ? "open" : undefined}
      >
        {links.map((link, index) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={activeSection === link.id ? "active" : undefined}
            aria-current={activeSection === link.id ? "location" : undefined}
            onClick={() => setMenuOpen(false)}
          >
            <span>0{index + 1}.</span> {link.label}
          </a>
        ))}
        <a
          className="button button-small"
          href="/resume.html"
          target="_blank"
          rel="noopener"
          onClick={() => setMenuOpen(false)}
        >
          Résumé <span aria-hidden="true">↗</span>
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </nav>
    </header>
  );
}
