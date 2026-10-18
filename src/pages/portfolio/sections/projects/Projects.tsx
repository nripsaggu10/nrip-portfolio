import { useProjects } from "./useProjects";
import ProjectCard from "./components/project-card/ProjectCard";
import { projects } from "./projects.data";
import ProjectDialog from "./components/project-dialog/ProjectDialog";

export default function Projects() {
  const { selectedProject, trigger, openProject, closeProject } = useProjects();

  return (
    <>
      <section
        className="section container projects-section"
        id="projects"
        aria-labelledby="projects-title"
      >
        <h2 className="section-title" id="projects-title">
          Independent projects <i aria-hidden="true" />
        </h2>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            onDetails={openProject(project)}
          />
        ))}
      </section>
      {selectedProject && (
        <ProjectDialog
          project={selectedProject}
          returnFocusTo={trigger.current}
          onClose={closeProject}
        />
      )}
    </>
  );
}
