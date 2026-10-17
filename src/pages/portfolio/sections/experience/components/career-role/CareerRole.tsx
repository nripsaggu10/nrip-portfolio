import CompanyLogo from "../company-logo/CompanyLogo";
import "./CareerRole.css";
export default function CareerRole({
  company,
}: {
  company: "bounteous" | "aditya-birla";
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
          Employed by Bounteous India and assigned to Morgan Stanley as a
          Technical Consultant.
        </p>
        <ul className="arrow-list">
          <li>
            Contribute to enterprise application development, modernization, and
            automation for the Morgan Stanley assignment.
          </li>
          <li>Promoted to Senior Software Engineer in August 2025.</li>
        </ul>
        <div className="previous-role">
          <h4>Software Engineer</h4>
          <p className="career-dates">December 2024 to August 2025</p>
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
          <p className="role-context">
            UltraTech · Haryana, India
          </p>
          <p className="career-dates">January 2024 to June 2024</p>
        </div>
        <CompanyLogo company="aditya-birla" />
      </div>
      <ul className="arrow-list">
        <li>
          Completed a six-month internship in industrial automation and control
          systems.
        </li>
        <li>
          Worked with PLC, SCADA, and DCS architectures for real-time process
          monitoring.
        </li>
        <li>
          Assisted with sensor calibration, instrumentation, and automation
          upgrades to improve operational reliability.
        </li>
        <li>
          Worked with industrial networking and operational data for process
          optimization.
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
