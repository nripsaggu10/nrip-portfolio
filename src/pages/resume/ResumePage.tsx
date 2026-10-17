import { Fragment } from "react";
import {
  engineeringContributions,
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
              <h3>Bounteous India · Senior Software Engineer</h3>
              <span className="dates">Dec 2024 – Present</span>
            </div>
            <p className="subline">
              Technical Consultant at Morgan Stanley · Cyber Data Risk &amp;
              Resilience · Network Security · Bengaluru
            </p>
            <p className="stack">
              Java · Angular 21 · TypeScript · RxJS · REST APIs · SQL
            </p>
            <ul>
              {engineeringContributions.map(({ title, description }) => (
                <li key={title}>
                  <strong>{title}.</strong> {description}
                </li>
              ))}
            </ul>
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

        <ResumeSection
          id="achievement-title"
          title="Recognition and Professional Development"
        >
          <article className="entry">
            <h3>Elevate APAC · 2026</h3>
            <p>
              Recognized through the professional appreciation initiative for
              contributions during my assignment.
            </p>
            <h3>ISC2 Member</h3>
            <p>
              Professional membership with an interest in cybersecurity and
              secure software engineering.
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
