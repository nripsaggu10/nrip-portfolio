import { useRef, useState } from "react";
import PortfolioSearch from "./search/PortfolioSearch";
import { profile } from "../../../../shared/data/profile.data";
import { navigationLinks } from "./navigation.data";
import "./Header.css";
import { useHeader } from "./useHeader";

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const searchTrigger = useRef<HTMLButtonElement>(null);
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
        href="/"
        aria-label="Nripdev Singh, home"
        onClick={(event) => {
          event.preventDefault();
          window.history.replaceState(null, "", "/");
          window.scrollTo({ top: 0, behavior: "instant" });
          window.location.reload();
        }}
      >
        <img
          className="brand-wordmark"
          src="/nrip-wordmark.svg"
          alt=""
          width="96"
          height="56"
        />
      </a>
      <button
        className="header-search-toggle"
        ref={searchTrigger}
        type="button"
        aria-label="Search portfolio"
        aria-haspopup="dialog"
        onClick={() => {
          closeMenu();
          setSearchOpen(true);
        }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <circle cx="10.5" cy="10.5" r="6.5" />
          <path d="m16 16 5 5" />
        </svg>
      </button>
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
      {searchOpen && (
        <PortfolioSearch
          trigger={searchTrigger.current}
          onClose={() => setSearchOpen(false)}
        />
      )}
    </header>
  );
}
