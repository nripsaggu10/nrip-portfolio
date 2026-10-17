import { profile } from "../../../../shared/data/profile.data";
import { navigationLinks } from "./navigation.data";
import "./Header.css";
import { useHeader } from "./useHeader";

export default function Header() {
  const {
    menuOpen,
    header,
    toggle,
    scrolled,
    activeSection,
    closeMenu,
    toggleMenu,
  } = useHeader();

  return (
    <header
      ref={header}
      className={`site-header${scrolled ? " scrolled" : ""}`}
    >
      <a
        className="brand"
        href="#home"
        aria-label="Nripdev Singh, home"
        onClick={closeMenu}
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
            N
          </text>
        </svg>
      </a>
      <button
        ref={toggle}
        className="menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="navigation"
        onClick={toggleMenu}
      >
        <span className="menu-label">Menu</span>
        <span className="menu-icon" aria-hidden="true" />
      </button>
      <nav
        id="navigation"
        aria-label="Main navigation"
        className={menuOpen ? "open" : undefined}
      >
        {navigationLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={activeSection === link.id ? "active" : undefined}
            aria-current={activeSection === link.id ? "location" : undefined}
            onClick={closeMenu}
          >
            {link.label}
          </a>
        ))}
        <a
          className="button button-small mobile-resume"
          href={profile.resumeHref}
          target="_blank"
          rel="noopener"
          onClick={closeMenu}
        >
          RESUME <span aria-hidden="true">↗</span>
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </nav>
      <a
        className="button button-small header-resume"
        href={profile.resumeHref}
        target="_blank"
        rel="noopener"
        onClick={closeMenu}
      >
        RESUME <span aria-hidden="true">↗</span>
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    </header>
  );
}
