import Role from "./components/role/Role";
import CareerRole from "./components/career-role/CareerRole";
import { companies } from "./experience.data";
import { useExperienceTabs } from "./useExperienceTabs";
import "./Experience.css";
import Reveal from "../../../../shared/components/reveal/Reveal";
export default function Experience() {
  const { selected, setSelected, horizontal, tabs, onKeyDown } =
    useExperienceTabs();
  return (
    <section
      className="section container experience-section"
      id="experience"
      aria-labelledby="experience-title"
    >
      <h2 className="section-title" id="experience-title">
        <span>02.</span> Professional experience <i aria-hidden="true" />
      </h2>
      <Reveal className="experience-grid">
        <div
          className="experience-tabs"
          role="tablist"
          aria-label="Companies"
          aria-orientation={horizontal ? "horizontal" : "vertical"}
        >
          {companies.map((company, index) => (
            <button
              key={company.id}
              ref={(element) => {
                tabs.current[index] = element;
              }}
              type="button"
              role="tab"
              id={`tab-${company.id}`}
              aria-controls={`panel-${company.id}`}
              aria-selected={selected === index}
              tabIndex={selected === index ? 0 : -1}
              onClick={() => setSelected(index)}
              onKeyDown={(event) => onKeyDown(event, index)}
            >
              {company.name}
            </button>
          ))}
        </div>
        <div className="experience-panels" id="current-role">
          {companies.map((company, index) => (
            <div
              key={company.id}
              id={`panel-${company.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${company.id}`}
              tabIndex={0}
              hidden={selected !== index}
            >
              {company.id === "morgan-stanley" ? (
                <Role />
              ) : (
                <CareerRole
                  company={company.id as "bounteous" | "aditya-birla"}
                />
              )}
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
