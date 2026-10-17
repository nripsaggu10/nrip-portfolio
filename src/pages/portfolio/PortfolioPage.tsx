import Certifications from "./sections/certifications/Certifications";
import Education from "./sections/experience/components/education/Education";
import Recognition from "./sections/projects/recognition/Recognition";
import Hero from "./sections/hero/Hero";
import About from "./sections/about/About";
import Experience from "./sections/experience/Experience";
import Projects from "./sections/projects/Projects";
import Contact from "./sections/contact/Contact";
import Toolbox from "./sections/projects/components/toolbox/Toolbox";
export default function PortfolioPage() {
  return (
    <main id="main">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Toolbox />
      <section
        className="section container education-section"
        id="education"
        aria-labelledby="education-title"
      >
        <h2 className="section-title" id="education-title">
          <span>05.</span> Education <i aria-hidden="true" />
        </h2>
        <Education />
      </section>
      <Certifications />
      <section
        className="section container recognition-section"
        id="recognition"
        aria-labelledby="recognition-title"
      >
        <h2 className="section-title" id="recognition-title">
          <span>07.</span> Recognition <i aria-hidden="true" />
        </h2>
        <Recognition />
      </section>
      <Contact />
    </main>
  );
}
