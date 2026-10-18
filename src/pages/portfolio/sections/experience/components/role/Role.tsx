import CompanyLogo from "../company-logo/CompanyLogo";
import {
  engineeringContributions,
  morganStanleySkills,
} from "../../../../../../shared/data/experience.data";
import "./Role.css";
export default function Role() {
  return (
    <article className="experience-detail">
      <div className="role-heading">
        <div className="role-heading-copy">
          <h3>
            Technical Consultant <span>@ Morgan Stanley</span>
          </h3>
          <p className="role-context">
            Cyber Data Risk &amp; Resilience · Bengaluru, India
          </p>
          <p className="career-dates">December 2024 to Present</p>
        </div>
        <CompanyLogo company="morgan-stanley" />
      </div>
      <p className="employment-note">
        Contributing to enterprise security architecture and governance
        applications through full-stack development, modernization, and
        automation.
      </p>
      <ul className="arrow-list">
        {engineeringContributions.map(({ title, description }) => (
          <li key={title}>
            <strong>{title}.</strong> {description}
          </li>
        ))}
      </ul>
      <ul className="tag-list" aria-label="Technologies used">
        {morganStanleySkills.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
    </article>
  );
}
