import { expertise } from "../../../../../../shared/data/experience.data";
import "./Toolbox.css";
import Reveal from "../../../../../../shared/components/reveal/Reveal";
export default function Toolbox() {
  return (
    <section
      className="section container"
      id="expertise"
      aria-labelledby="expertise-title"
    >
      <h2 className="section-title" id="expertise-title">
        <span>05.</span> Technical expertise <i aria-hidden="true" />
      </h2>
      <Reveal className="toolbox-columns">
        {expertise.map(({ title, technologies, description }) => (
          <div key={title}>
            <h3>{title}</h3>
            <p>{technologies}</p>
            <p>{description}</p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
