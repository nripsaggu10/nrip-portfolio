import { useRef, useState, type MouseEvent } from "react";
import type { Project } from "./project.types";
export function useProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const openProject =
    (project: Project) => (event: MouseEvent<HTMLButtonElement>) => {
      trigger.current = event.currentTarget;
      setSelectedProject(project);
    };
  const closeProject = () => setSelectedProject(null);
  return { selectedProject, trigger, openProject, closeProject };
}
