import { Fragment } from "react";
import {
  engineeringContributions,
  morganStanleySkills,
  expertise,
} from "../../shared/data/experience.data";
import ResumeHeader from "./components/resume-header/ResumeHeader";
import ResumeSection from "./components/resume-section/ResumeSection";
import { useResumePrint } from "./useResumePrint";
import "./ResumePage.css";
export default function ResumePage() {
  const { printResume } = useResumePrint();
  return (
    <>
      <div className="toolbar" aria-label="Résumé actions">
        <p>Use your browser’s print dialog to print or save as PDF.</p>
        <button type="button" onClick={printResume}>
          Print / Save PDF
        </button>
      </div>
      <main>
        <ResumeHeader />

        <ResumeSection id="experience-title" title="Experience">
          <article className="entry">
            <div className="entry-header">
              <h3>Morgan Stanley · Technical Consultant</h3>
              <span className="dates">Dec 2024 – Present</span>
            </div>
            <p className="subline">
              Through Bounteous India · Cyber Data Risk &amp; Resilience ·
              Security Development · Bengaluru
            </p>
            <p className="subline">
              Bounteous India career progression. Senior Software Engineer,
              August 2025 to Present. Software Engineer, December 2024 to August
              2025.
            </p>
            <p className="stack">{morganStanleySkills.join(" · ")}</p>
            <ul>
              {engineeringContributions.map(({ title, description }) => (
                <li key={title}>
                  <strong>{title}.</strong> {description}
                </li>
              ))}
            </ul>
          </article>
          <article className="entry">
            <div className="entry-header">
              <h3>Aditya Birla Group · Electronics and Automation Intern</h3>
              <span className="dates">Jan to Jun 2024</span>
            </div>
            <p className="subline">
              College semester internship · Haryana, India
            </p>
            <p>
              Worked with PLC, SCADA, and DCS architectures and assisted with
              sensor calibration, instrumentation, and industrial automation
              upgrades.
            </p>
          </article>
        </ResumeSection>

        <ResumeSection id="projects-title" title="Projects">
          <article className="entry">
            <div className="entry-header">
              <h3>
                <a href="https://github.com/nripsaggu10/querywear">
                  QueryWear · Natural Language to SQL System
                </a>
              </h3>
              <span className="dates">Sep 2024 – Jan 2025</span>
            </div>
            <p className="stack">
              Google PaLM · LangChain · Streamlit · Hugging Face · ChromaDB ·
              MySQL
            </p>
            <ul>
              <li>
                Built a natural language interface for database queries; boosted
                query accuracy by 89% through Hugging Face and ChromaDB
                similarity search.
              </li>
              <li>
                Improved SQL translation accuracy by 55% using few-shot learning
                and increased database efficiency by 20%.
              </li>
            </ul>
          </article>
          <article className="entry">
            <div className="entry-header">
              <h3>
                <a href="https://github.com/nripsaggu10/Healthfirst">
                  HealthFirst · Healthcare Platform
                </a>
              </h3>
              <span className="dates">Mar – Oct 2023</span>
            </div>
            <p className="stack">Python · C++ · React.js · MySQL</p>
            <ul>
              <li>
                Developed backend and machine learning components for a team
                capstone; patient retrieval APIs improved system efficiency by
                40%.
              </li>
              <li>
                Built a disease prediction chatbot using Random Forest and
                Decision Trees, improving diagnostic accuracy by 18%.
              </li>
              <li>
                Applied indexing and caching to improve data retrieval speed by
                40%.
              </li>
            </ul>
          </article>
        </ResumeSection>

        <ResumeSection id="skills-title" title="Technical Skills">
          <dl className="skills">
            {expertise.map(({ title, technologies }) => (
              <Fragment key={title}>
                <dt>{title}</dt>
                <dd>{technologies}</dd>
              </Fragment>
            ))}
          </dl>
        </ResumeSection>

        <ResumeSection id="education-title" title="Education">
          <article className="entry">
            <div className="entry-header">
              <h3>Thapar Institute of Engineering and Technology</h3>
              <span className="dates">Sep 2020 – Jun 2024</span>
            </div>
            <p className="subline">
              Bachelor’s in Electronics and Computer Engineering · Patiala ·
              CGPA: 7.25/10
            </p>
          </article>
        </ResumeSection>

        <ResumeSection id="certifications-title" title="Certifications">
          <article className="entry">
            <h3>Claude Certified Architect - Foundations</h3>
            <p>
              Anthropic · Issued August 2026 · Expires August 2027 · Score
              860/1000
            </p>
          </article>
          <article className="entry">
            <h3>Model Context Protocol: Advanced Topics</h3>
            <p>Anthropic · Issued August 2026 · Credential ID koq86y5rq2pp</p>
          </article>
        </ResumeSection>
        <ResumeSection
          id="achievement-title"
          title="Recognition and Professional Development"
        >
          <article className="entry">
            <h3>ISC2 Candidate</h3>
            <p>
              Candidate status supporting ongoing professional development in
              cybersecurity.
            </p>
          </article>
          <article className="entry">
            <div className="entry-header">
              <h3>IdeaThon Runner-Up</h3>
              <span className="dates">Mar 2023</span>
            </div>
            <p className="subline">
              Standard Chartered Finance &amp; Technology Connect
            </p>
            <p>
              Developed a blockchain pooled collateral smart-contract system for
              100+ users to collectively secure loans and proportionally
              distribute interest. Used Proof of Work consensus for secure
              transactions and decentralized interest distribution.
            </p>
          </article>
        </ResumeSection>
      </main>
    </>
  );
}
