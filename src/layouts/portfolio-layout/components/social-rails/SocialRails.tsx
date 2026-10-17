import { profile } from "../../../../shared/data/profile.data";
import "./SocialRails.css";
export default function SocialRails() {
  return (
    <>
      <aside className="social-rail" aria-label="Social profiles">
        <ul className="social-links">
          <li>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub (opens in a new tab)"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.8c.1-1-.3-1.7-.7-2.2 2.5-.3 5.2-1.2 5.2-5.7a4.4 4.4 0 0 0-1.2-3.1c.1-.3.5-1.5-.1-3.1 0 0-1-.3-3.3 1.2a11.2 11.2 0 0 0-6 0C6.6 3.8 5.6 4.1 5.6 4.1c-.6 1.6-.2 2.8-.1 3.1a4.4 4.4 0 0 0-1.2 3.1c0 4.5 2.7 5.4 5.2 5.7-.4.4-.7 1-.7 2.1V22" />
              </svg>
            </a>
          </li>
          <li>
            <a
              href={profile.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram (opens in a new tab)"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle
                  cx="18"
                  cy="6"
                  r="1"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href={profile.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter) (opens in a new tab)"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M4 3h4.5L20 21h-4.5L4 3Z" />
                <path d="m20 3-7 8M4 21l7-8" />
              </svg>
            </a>
          </li>
          <li>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn (opens in a new tab)"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M7 10v7m0-10v.3M11 17v-7m0 3c0-4 6-4 6 0v4" />
              </svg>
            </a>
          </li>
          <li>
            <a href={profile.emailHref} aria-label="Send Nripdev an email">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 6 9 7 9-7" />
              </svg>
            </a>
          </li>
        </ul>
      </aside>
      <aside className="email-rail">
        <a href={profile.emailHref}>{profile.email}</a>
      </aside>
    </>
  );
}
