import { engineeringContributions } from "../../../../../../shared/data/experience.data";
import "./Role.css";
export default function Role() {
  return (
    <article className="experience-detail" id="current-role">
      <h3>
        Technical Consultant <span>@ Morgan Stanley</span>
      </h3>
      <p className="role-context">
        Cyber Data Risk &amp; Resilience · Network Security
      </p>
      <p className="employment-note">
        Senior Software Engineer at Bounteous India, assigned to Morgan Stanley.
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
        {[
          "Java",
          "Angular 21",
          "TypeScript",
          "RxJS",
          "REST APIs",
          "Authorization",
        ].map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
    </article>
  );
}
