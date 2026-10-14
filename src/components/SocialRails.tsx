export default function SocialRails() {
  return (
    <>
      <aside className="social-rail" aria-label="Social profiles">
        <a
          href="https://github.com/nripsaggu10"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub (opens in a new tab)"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            aria-hidden="true"
          >
            <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.8c.1-1-.3-1.7-.7-2.2 2.5-.3 5.2-1.2 5.2-5.7a4.4 4.4 0 0 0-1.2-3.1c.1-.3.5-1.5-.1-3.1 0 0-1-.3-3.3 1.2a11.2 11.2 0 0 0-6 0C6.6 3.8 5.6 4.1 5.6 4.1c-.6 1.6-.2 2.8-.1 3.1a4.4 4.4 0 0 0-1.2 3.1c0 4.5 2.7 5.4 5.2 5.7-.4.4-.7 1-.7 2.1V22" />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/nripdev-singh/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn (opens in a new tab)"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            aria-hidden="true"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M7 10v7m0-10v.3M11 17v-7m0 3c0-4 6-4 6 0v4" />
          </svg>
        </a>
        <a
          href="mailto:nripdevsaggu316@gmail.com"
          aria-label="Send Nripdev an email"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            aria-hidden="true"
          >
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 6 9 7 9-7" />
          </svg>
        </a>
      </aside>
      <aside className="email-rail">
        <a href="mailto:nripdevsaggu316@gmail.com">nripdevsaggu316@gmail.com</a>
      </aside>
    </>
  );
}
