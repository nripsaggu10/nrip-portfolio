import portrait from "./assets/nripdev-singh.jpg";
import "./About.css";
import Reveal from "../../../../shared/components/reveal/Reveal";
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
            <div className="identity-card">
              <img
                className="identity-photo"
                src={portrait}
                alt="Nripdev Singh, software engineer"
                width="386"
                height="480"
                loading="lazy"
                decoding="async"
              />
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
