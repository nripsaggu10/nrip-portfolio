import "./ProjectCard.css";
import type { MouseEventHandler } from "react";
import type { Project } from "../../project.types";
import QueryWearArtwork from "../../querywear/QueryWearArtwork";
import HealthFirstArtwork from "../../healthfirst/HealthFirstArtwork";
import Reveal from "../../../../../../shared/components/reveal/Reveal";
export default function ProjectCard({
  project,
  index,
  onDetails,
}: {
  project: Project;
  index: number;
  onDetails: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <Reveal
      as="article"
      className={`featured-project${index % 2 ? " reverse" : ""}`}
    >
      <header className="project-introduction">
        <h3>{project.title}</h3>
        <p className="project-subtitle">{project.subtitle}</p>
      </header>
      {project.id === "querywear" ? (
        <QueryWearArtwork />
      ) : (
        <HealthFirstArtwork />
      )}
      <div className="project-copy">
        <div className="project-description">
          <p>{project.description}</p>
          <p className="project-result">
            <strong>{project.metric}</strong>
            <span>{project.metricLabel}</span>
          </p>
        </div>
        <ul className="project-tech tag-list">
          {project.cardTech.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <div className="project-links">
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            View source <span aria-hidden="true">↗</span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <button type="button" onClick={onDetails} aria-haspopup="dialog">
            Project details <span aria-hidden="true">+</span>
          </button>
        </div>
      </div>
    </Reveal>
  );
}
