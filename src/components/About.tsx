import Reveal from "./Reveal";
export default function About() {
  return (
    <>
      <section
        className="section container about-section"
        id="about"
        aria-labelledby="about-title"
      >
        <h2 className="section-title" id="about-title">
          <span>01.</span> A little about me <i aria-hidden="true"></i>
        </h2>
        <Reveal className="about-grid">
          <div className="about-copy">
            <p>
              I’m Nripdev, a software engineer based in Bengaluru. My work spans
              enterprise applications, backend development, and applied machine
              learning—with a focus on making complex systems easier to use.
            </p>
            <p>
              At{" "}
              <strong>
                Morgan Stanley’s Cyber Data Risk &amp; Resilience division
              </strong>
              , I work as a Technical Consultant through Accolite. From security
              design timelines to modernizing Angular applications, I enjoy
              connecting reliable engineering with a better user experience.
            </p>
            <p>
              I graduated from{" "}
              <strong>Thapar Institute of Engineering and Technology</strong>{" "}
              with a bachelor’s degree in Electronics and Computer Engineering.
              Outside my day-to-day work, I’ve explored natural language
              interfaces, healthcare technology, and blockchain.
            </p>
            <p className="skills-intro">A few technologies I work with:</p>
            <ul className="tech-list">
              <li>Java &amp; Spring</li>
              <li>Angular &amp; TypeScript</li>
              <li>Python</li>
              <li>React.js</li>
              <li>SQL &amp; PostgreSQL</li>
              <li>LangChain &amp; NLP</li>
            </ul>
          </div>
          <div className="identity-wrap">
            <div
              className="identity-card"
              role="img"
              aria-label="Nripdev Singh, software engineer"
            >
              <div className="identity-top">
                <span>NRIPDEV SINGH</span>
                <svg
                  viewBox="0 0 28 28"
                  width="25"
                  height="25"
                  aria-hidden="true"
                >
                  <path
                    d="M4 14h20M14 4v20M7 7l14 14M7 21 21 7"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                </svg>
              </div>
              <div className="identity-monogram" aria-hidden="true">
                ns<span>.</span>
              </div>
              <div className="identity-bottom">
                <span>ENGINEERING WITH INTENT</span>
                <span>
                  12.97° N<br />
                  77.59° E
                </span>
              </div>
            </div>
            <p className="identity-caption">
              <span aria-hidden="true">↳</span> Code. Learn. Refine. Repeat.
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
