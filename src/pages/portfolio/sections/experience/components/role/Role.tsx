import "./Role.css";
export default function Role() {
  return (
    <article className="experience-detail" id="current-role">
      <h3>
        Technical Consultant <span>@ Morgan Stanley</span>
      </h3>
      <p className="role-context">Cyber Data Risk &amp; Resilience</p>
      <p className="employment-note">
        Senior Software Engineer at Accolite, working on the Morgan Stanley
        account.
      </p>
      <ul className="arrow-list">
        <li>
          Contribute to the Security Design Development team, delivering
          features and resolving bugs across two-week sprint cycles to improve
          security compliance.
        </li>
        <li>
          Built a security design Timeline feature with fast data loading and
          estimated times displayed consistently in EST.
        </li>
        <li>
          Developed a Spring-based email feature for secure communication
          between internal services.
        </li>
        <li>
          Helped migrate legacy AngularJS interfaces to Angular, preserving
          backend compatibility and achieving a{" "}
          <strong>35% performance improvement.</strong>
        </li>
      </ul>
      <ul className="tag-list" aria-label="Technologies used">
        <li>Java</li>
        <li>Spring</li>
        <li>Angular</li>
        <li>Python</li>
        <li>SQL</li>
        <li>XML</li>
        <li>Git</li>
      </ul>
    </article>
  );
}
