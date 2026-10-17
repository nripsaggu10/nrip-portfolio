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
          A little about me <i aria-hidden="true"></i>
        </h2>
        <Reveal className="about-grid">
          <div className="about-copy">
            <p>
              Hello! I’m Nripdev. My interest in building software started in
              2018, with the idea that I could take something in my head and
              make it work on a screen. What drew me in was how personal that
              process felt. The components I built, the interfaces I designed,
              and the way they responded to someone using them reflected my own
              ideas. Building applications became a way to express myself.
            </p>
            <p>
              Today, I work as a <strong>Technical Consultant</strong> at{" "}
              <span className="about-highlight">Morgan Stanley</span>, serving
              as a <strong>Senior Software Engineer</strong> at{" "}
              <span className="about-highlight">Bounteous India</span>. Working
              in the <span className="about-highlight">Cybersecurity</span>{" "}
              domain within a{" "}
              <span className="about-highlight">
                Global Financial Institution
              </span>{" "}
              has shaped how I approach software. How it behaves matters as much
              as what it does. The systems are more complex, and the decisions
              carry more weight, but I still enjoy taking an idea, working
              through the details, and seeing it become something people can
              use.
            </p>
            <p className="skills-intro">
              A few technologies I work with regularly
            </p>
            <ul className="tech-list">
              <li>Angular &amp; TypeScript</li>
              <li>Java &amp; Spring Framework</li>
              <li>Python</li>
              <li>MySQL</li>
              <li>Linux</li>
            </ul>
          </div>
          <div className="identity-wrap">
            <div className="identity-card">
              <div className="identity-photo-frame">
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
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
