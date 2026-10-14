import Reveal from "./Reveal";
export default function Experience() {
  return (
    <>
      <section
        className="section container experience-section"
        id="experience"
        aria-labelledby="experience-title"
      >
        <h2 className="section-title" id="experience-title">
          <span>02.</span> Where I’ve contributed <i aria-hidden="true"></i>
        </h2>
        <Reveal className="experience-grid">
          <div className="experience-sidebar">
            <p className="eyebrow">EXPERIENCE</p>
            <a className="experience-label" href="#current-role">
              Morgan Stanley <span aria-hidden="true">↗</span>
            </a>
            <p>December 2024 — Present</p>
            <p>Bengaluru, India</p>
          </div>
          <article className="experience-detail" id="current-role">
            <h3>
              Technical Consultant <span>@ Morgan Stanley</span>
            </h3>
            <p className="role-context">Cyber Data Risk &amp; Resilience</p>
            <p className="employment-note">
              Senior Software Engineer at Accolite, working on the Morgan
              Stanley account.
            </p>
            <ul className="arrow-list">
              <li>
                Contribute to the Security Design Development team, delivering
                features and resolving bugs across two-week sprint cycles to
                improve security compliance.
              </li>
              <li>
                Built a security design Timeline feature with fast data loading
                and estimated times displayed consistently in EST.
              </li>
              <li>
                Developed a Spring-based email feature for secure communication
                between internal services.
              </li>
              <li>
                Helped migrate legacy AngularJS interfaces to Angular,
                preserving backend compatibility and achieving a{" "}
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
        </Reveal>
        <div className="education-row">
          <div>
            <p className="eyebrow">THE FOUNDATION</p>
            <h3>Thapar Institute of Engineering and Technology</h3>
            <p>Bachelor’s in Electronics and Computer Engineering</p>
          </div>
          <div className="education-meta">
            <p>2020 — 2024</p>
            <p>Patiala · CGPA 7.25 / 10</p>
          </div>
        </div>
      </section>
    </>
  );
}
