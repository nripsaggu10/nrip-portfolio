export default function Contact({ copyEmail }: { copyEmail: () => void }) {
  return (
    <section
      className="section container contact-section"
      id="contact"
      aria-labelledby="contact-title"
    >
      <p className="eyebrow">04. WHAT’S NEXT?</p>
      <h2 id="contact-title">Let’s build something.</h2>
      <p>
        Have a project in mind, a question about my work, or just want to say
        hello? I’d love to hear from you.
      </p>
      <a className="button contact-cta" href="mailto:nripdevsaggu316@gmail.com">
        Say hello <span aria-hidden="true">↗</span>
      </a>
      <div className="contact-email">
        <a href="mailto:nripdevsaggu316@gmail.com">nripdevsaggu316@gmail.com</a>
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
        <a
          href="https://github.com/nripsaggu10"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub ↗
        </a>
        <a
          href="https://www.linkedin.com/in/nripdev-singh/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn ↗
        </a>
        <a href="/resume.html" target="_blank" rel="noopener">
          Résumé ↗
        </a>
      </div>
    </section>
  );
}
