import Role from "./components/role/Role";
import "./Experience.css";
import Reveal from "../../../../shared/components/reveal/Reveal";
export default function Experience() {
  return (
    <>
      <section
        className="section container experience-section"
        id="experience"
        aria-labelledby="experience-title"
      >
        <h2 className="section-title" id="experience-title">
          <span>02.</span> Professional experience <i aria-hidden="true"></i>
        </h2>
        <Reveal className="experience-grid">
          <div className="experience-sidebar">
            <p className="eyebrow">EXPERIENCE</p>
            <a className="experience-label" href="#current-role">
              Morgan Stanley <span aria-hidden="true">↗</span>
            </a>
            <p>December 2024 — Present</p>
            <p>Bengaluru, India</p>
          </div>
          <Role />
        </Reveal>
      </section>
    </>
  );
}
