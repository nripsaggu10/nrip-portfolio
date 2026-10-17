import IssuerLogo from "../../../../shared/components/issuer-logo/IssuerLogo";
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
        Certifications <i aria-hidden="true" />
      </h2>
      <Reveal as="article" className="certification-card">
        <IssuerLogo issuer="anthropic" />
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
        <IssuerLogo issuer="anthropic" />
        <div className="certification-copy">
          <p className="eyebrow">Anthropic</p>
          <h3>Model Context Protocol: Advanced Topics</h3>
          <p className="certification-dates">Issued August 2026</p>
          <p>Advanced study of Model Context Protocol for AI applications.</p>
          <p className="certification-identifier">Credential ID koq86y5rq2pp</p>
          <a
            className="certification-link"
            href="/certificates/mcp-advanced-topics-nripdev-singh.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            View certificate <span aria-hidden="true">↗</span>
          </a>
        </div>
      </Reveal>
      <Reveal as="article" className="certification-card">
        <IssuerLogo issuer="isc2" />
        <div className="certification-copy">
          <p className="eyebrow">ISC2</p>
          <h3>ISC2 Candidate</h3>
          <p className="certification-dates">
            Issued February 2026 · Expires February 2027
          </p>
          <p>
            Candidate status reflecting ongoing professional development in
            cybersecurity.
          </p>
          <a
            className="certification-link"
            href="https://www.credly.com/badges/2555eb24-99f6-4f0b-8736-570eb18fb1cd"
            target="_blank"
            rel="noopener noreferrer"
          >
            View credential <span aria-hidden="true">↗</span>
          </a>
        </div>
      </Reveal>
    </section>
  );
}
