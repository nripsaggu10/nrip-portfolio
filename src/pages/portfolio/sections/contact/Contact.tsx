import { profile } from "../../../../shared/data/profile.data";
import { useEmailCopy } from "./useEmailCopy";
import Toast from "../../../../shared/components/toast/Toast";
import "./Contact.css";
export default function Contact() {
  const { message, copyEmail } = useEmailCopy();
  return (
    <>
      <section
        className="section container contact-section"
        id="contact"
        aria-labelledby="contact-title"
      >
        <p className="eyebrow">08. CONTACT</p>
        <h2 id="contact-title">Let’s connect.</h2>
        <p>
          For software engineering opportunities, technical discussions, or
          collaboration, you can reach me by email or LinkedIn.
        </p>
        <a className="button contact-cta" href={profile.emailHref}>
          Email me <span aria-hidden="true">↗</span>
        </a>
        <div className="contact-email">
          <a href={profile.emailHref}>{profile.email}</a>
          <button
            onClick={copyEmail}
            id="copy-email"
            type="button"
            aria-label="Copy email address"
            title="Copy email address"
          >
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <rect x="8" y="8" width="12" height="12" rx="2" />
              <path d="M16 8V4H4v12h4" />
            </svg>
          </button>
        </div>
        <div className="contact-socials">
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            GitHub ↗
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn ↗
          </a>
          <a href={profile.resumeHref} target="_blank" rel="noopener">
            Résumé ↗
          </a>
        </div>
      </section>
      <Toast message={message} />
    </>
  );
}
