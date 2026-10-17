import IssuerLogo from "../../../../../shared/components/issuer-logo/IssuerLogo";
import "./Recognition.css";
import Reveal from "../../../../../shared/components/reveal/Reveal";
export default function Recognition() {
  return (
    <>
      <Reveal as="article" className="achievement">
        <IssuerLogo issuer="standard-chartered" />
        <div className="achievement-copy">
          <p className="eyebrow">Standard Chartered</p>
          <h3>Runner-up, IdeaThon</h3>
          <p className="award-source">
            Standard Chartered Finance &amp; Technology Connect
          </p>
          <p>
            Developed a blockchain-based pooled collateral concept using smart
            contracts, allowing 100+ users to collectively secure loans and
            distribute interest proportionally.
          </p>
          <a
            className="certification-link"
            href="/certificates/ideathon-runner-up-nripdev-singh.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            View certificate <span aria-hidden="true">↗</span>
          </a>
        </div>
        <span className="award-year" aria-hidden="true">
          ’23
        </span>
      </Reveal>
    </>
  );
}
