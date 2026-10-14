export default function Resume() {
  return (
    <>
      <div className="toolbar" aria-label="Résumé actions">
        <p>Use your browser’s print dialog to print or save as PDF.</p>
        <button type="button" onClick={() => window.print()}>
          Print / Save PDF
        </button>
      </div>
      <main>
        <header>
          <h1>Nripdev Singh</h1>
          <p className="headline">
            Senior Software Engineer · Technical Consultant
          </p>
          <address aria-label="Contact details">
            <a href="mailto:nripdevsaggu316@gmail.com">
              nripdevsaggu316@gmail.com
            </a>
            <a href="tel:+919988252405">+91 99882 52405</a>
            <a href="https://www.linkedin.com/in/nripdev-singh/">
              linkedin.com/in/nripdev-singh
            </a>
            <a href="https://github.com/nripsaggu10">github.com/nripsaggu10</a>
          </address>
        </header>

        <section aria-labelledby="experience-title">
          <h2 id="experience-title">Experience</h2>
          <article className="entry">
            <div className="entry-header">
              <h3>Accolite · Senior Software Engineer</h3>
              <span className="dates">Dec 2024 – Present</span>
            </div>
            <p className="subline">
              Technical Consultant, Morgan Stanley account · Cyber Data Risk
              &amp; Resilience Division · Bengaluru
            </p>
            <p className="stack">
              Java · Spring · Angular · Python · SQL · XML · Git
            </p>
            <ul>
              <li>
                Resolve bugs and release features in two-week sprints focused on
                security compliance.
              </li>
              <li>
                Built a Timeline feature for security design changes, with fast
                data loading and estimated times adjusted to EST.
              </li>
              <li>
                Developed a Spring email feature for secure communication
                between internal services.
              </li>
              <li>
                Migrated AngularJS to Angular while maintaining backend
                compatibility, improving performance by 35%.
              </li>
            </ul>
          </article>
        </section>

        <section aria-labelledby="projects-title">
          <h2 id="projects-title">Projects</h2>
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
        </section>

        <section aria-labelledby="skills-title">
          <h2 id="skills-title">Technical Skills</h2>
          <dl className="skills">
            <dt>Languages</dt>
            <dd>Java, Python, C++, TypeScript, SQL</dd>
            <dt>Frameworks &amp; AI</dt>
            <dd>
              Spring, Angular, React.js, LangChain, Hugging Face, TensorFlow,
              NLP, Random Forest, Decision Trees
            </dd>
            <dt>Data &amp; Tools</dt>
            <dd>
              MySQL, PostgreSQL, Excel, Git, Postman, APIs, Linux, Cybersecurity
            </dd>
          </dl>
        </section>

        <section aria-labelledby="education-title">
          <h2 id="education-title">Education</h2>
          <article className="entry">
            <div className="entry-header">
              <h3>Thapar Institute of Engineering and Technology</h3>
              <span className="dates">Sep 2020 – Jun 2024</span>
            </div>
            <p className="subline">
              Bachelor’s in Electronics and Computer Engineering · Patiala ·
              CGPA: 7.25/10
            </p>
            <p className="coursework">
              <strong>Coursework:</strong> Data Structures &amp; Algorithms,
              Object-Oriented Programming, Operating Systems, Data Science,
              Database Management Systems, Deep Learning, Blockchain,
              Cryptography, Corporate Finance.
            </p>
          </article>
        </section>

        <section aria-labelledby="achievement-title">
          <h2 id="achievement-title">Achievement</h2>
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
        </section>
      </main>
    </>
  );
}
