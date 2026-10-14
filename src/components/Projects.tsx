import { useRef, useState } from "react";
import { projects, type Project } from "../data/projects";
import QueryWearArtwork from "./QueryWearArtwork";
import HealthFirstArtwork from "./HealthFirstArtwork";
import Recognition from "./Recognition";
import Reveal from "./Reveal";
import ProjectDialog from "./ProjectDialog";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);

  return (
    <>
      <section
        className="section container projects-section"
        id="projects"
        aria-labelledby="projects-title"
      >
        <h2 className="section-title" id="projects-title">
          <span>03.</span> Some things I’ve built <i aria-hidden="true" />
        </h2>
        {projects.map((project, index) => (
          <Reveal
            key={project.id}
            as="article"
            className={`featured-project${index % 2 ? " reverse" : ""}`}
          >
            {project.id === "querywear" ? (
              <QueryWearArtwork />
            ) : (
              <HealthFirstArtwork />
            )}
            <div className="project-copy">
              <p className="eyebrow">FEATURED PROJECT / 0{index + 1}</p>
              <h3>{project.title}</h3>
              <p className="project-subtitle">{project.subtitle}</p>
              <div className="project-description">
                <p>{project.description}</p>
                <p className="project-result">
                  <strong>{project.metric}</strong> {project.metricLabel}
                </p>
              </div>
              <ul className="project-tech">
                {project.cardTech.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <div className="project-links">
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  View source <span aria-hidden="true">↗</span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
                <button
                  type="button"
                  onClick={(event) => {
                    trigger.current = event.currentTarget;
                    setSelectedProject(project);
                  }}
                  aria-haspopup="dialog"
                >
                  Project details <span aria-hidden="true">+</span>
                </button>
              </div>
            </div>
          </Reveal>
        ))}
        <Recognition />
      </section>
      {selectedProject && (
        <ProjectDialog
          project={selectedProject}
          returnFocusTo={trigger.current}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
