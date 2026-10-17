import Reveal from "../../../../shared/components/reveal/Reveal";
import "./Certifications.css";
export default function Certifications() {
  return (
    <section
      className="section container"
      id="certifications"
      aria-labelledby="certifications-title"
    >
      <h2 className="section-title" id="certifications-title">
        <span>06.</span> Certifications <i aria-hidden="true" />
      </h2>
      <Reveal as="article" className="certification-card">
        <CredentialIcon />
        <div className="certification-copy">
          <p className="eyebrow">Anthropic</p>
          <h3>Claude Certified Architect - Foundations</h3>
          <p className="certification-score">Score 860 / 1000</p>
          <p className="certification-dates">
            Issued August 2026 · Expires August 2027
          </p>
          <p>
            Foundational knowledge in designing AI systems with Claude, covering
            agent orchestration, context management, Model Context Protocol
            (MCP), Claude Code, and production-ready AI workflows.
          </p>
          <a
            className="certification-link"
            href="https://www.credly.com/badges/81e3d216-14b4-407a-a829-9f8c88e77f6a"
            target="_blank"
            rel="noopener noreferrer"
          >
            View credential <span aria-hidden="true">↗</span>
          </a>
        </div>
      </Reveal>
      <Reveal as="article" className="certification-card">
        <CredentialIcon />
        <div className="certification-copy">
          <p className="eyebrow">Anthropic</p>
          <h3>Model Context Protocol: Advanced Topics</h3>
          <p className="certification-dates">Issued August 2026</p>
          <p>Advanced study of Model Context Protocol for AI applications.</p>
          <p className="certification-identifier">Credential ID koq86y5rq2pp</p>
        </div>
      </Reveal>
      <Reveal as="article" className="certification-card">
        <CredentialIcon />
        <div className="certification-copy">
          <p className="eyebrow">ISC2</p>
          <h3>ISC2 Candidate</h3>
          <p className="certification-dates">Candidate status</p>
          <p>
            Candidate status reflecting ongoing professional development in
            cybersecurity.
          </p>
        </div>
      </Reveal>
    </section>
  );
}

function CredentialIcon() {
  return (
    <div className="certification-icon" aria-hidden="true">
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="6" y="7" width="36" height="27" rx="2" />
        <path d="M13 15h22M13 21h13" />
        <circle cx="32" cy="30" r="7" />
        <path d="m27 35-2 9 7-4 7 4-2-9" />
      </svg>
    </div>
  );
}
