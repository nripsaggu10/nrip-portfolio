import Hero from "./sections/hero/Hero";
import About from "./sections/about/About";
import Experience from "./sections/experience/Experience";
import Projects from "./sections/projects/Projects";
import Contact from "./sections/contact/Contact";
export default function PortfolioPage() {
  return (
    <main id="main">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
