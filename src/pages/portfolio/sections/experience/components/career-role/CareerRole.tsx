import CompanyLogo from "../company-logo/CompanyLogo";
import "./CareerRole.css";
export default function CareerRole({
  company,
  onViewClient,
}: {
  company: "bounteous" | "aditya-birla";
  onViewClient: () => void;
}) {
  if (company === "bounteous")
    return (
      <article className="career-role">
        <div className="role-heading">
          <div className="role-heading-copy">
            <h3>
              Senior Software Engineer <span>@ Bounteous India</span>
            </h3>
            <p className="role-context">
              Financial Services APAC · Bengaluru, India
            </p>
            <p className="career-dates">August 2025 to Present</p>
          </div>
          <CompanyLogo company="bounteous" />
        </div>
        <p className="employment-note">
          Employed by Bounteous India and assigned to Morgan Stanley from the
          start of my employment in December 2024. My engineering work has
          remained within the same client assignment, developing applications in
          Morgan Stanley’s Cyber Data Risk &amp; Resilience division.
        </p>
        <p className="career-summary">
          Promoted to Senior Software Engineer in August 2025 while continuing
          the Morgan Stanley assignment.
        </p>
        <button
          className="client-experience-link"
          type="button"
          onClick={onViewClient}
        >
          View Morgan Stanley experience <span aria-hidden="true">↗</span>
        </button>
        <div className="previous-role">
          <h4>Software Engineer</h4>
          <p className="career-dates">December 2024 to August 2025</p>
          <p className="career-summary">
            Joined Bounteous India as a Software Engineer and began working with
            Morgan Stanley from my first day.
          </p>
        </div>
      </article>
    );
  return (
    <article className="career-role">
      <div className="role-heading">
        <div className="role-heading-copy">
          <h3>
            Electronics and Automation Intern <span>@ Aditya Birla Group</span>
          </h3>
          <p className="role-context">UltraTech · Haryana, India</p>
          <p className="career-dates">January 2024 to June 2024</p>
        </div>
        <CompanyLogo company="aditya-birla" />
      </div>
      <p className="employment-note">
        Completed a six-month internship in industrial automation and control
        systems at UltraTech. Worked with the systems used to monitor
        manufacturing processes, gaining practical experience in
        instrumentation, process control, and operational reliability.
      </p>
      <ul className="arrow-list">
        <li>
          Gained hands-on experience with PLC, SCADA, and DCS architectures used
          for real-time process monitoring and control.
        </li>
        <li>
          Assisted with sensor calibration and instrumentation activities
          supporting accurate process measurements.
        </li>
        <li>
          Supported automation upgrades aimed at improving the reliability of
          plant operations.
        </li>
        <li>
          Worked with industrial networking and real-time operational data to
          understand process behaviour and identify opportunities for
          improvement.
        </li>
      </ul>
      <ul className="tag-list" aria-label="Technologies used">
        <li>PLC</li>
        <li>SCADA</li>
        <li>DCS</li>
        <li>Instrumentation</li>
        <li>Industrial Networking</li>
      </ul>
    </article>
  );
}
