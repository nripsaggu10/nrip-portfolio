import { useEffect, useRef } from "react";
import type { Project } from "../data/projects";

export default function ProjectDialog({
  project,
  onClose,
  returnFocusTo,
}: {
  project: Project;
  onClose: () => void;
  returnFocusTo: HTMLButtonElement | null;
}) {
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const element = dialog.current!;
    element.showModal();
    document.body.classList.add("modal-open");
    return () => {
      document.body.classList.remove("modal-open");
      if (element.open) element.close();
      returnFocusTo?.focus();
    };
  }, [returnFocusTo]);

  function close() {
    dialog.current?.close();
    onClose();
  }

  return (
    <dialog
      ref={dialog}
      id="project-dialog"
      aria-labelledby="dialog-title"
      onCancel={(event) => {
        event.preventDefault();
        close();
      }}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return;
        const rect = event.currentTarget.getBoundingClientRect();
        if (
          event.clientX < rect.left ||
          event.clientX > rect.right ||
          event.clientY < rect.top ||
          event.clientY > rect.bottom
        )
          close();
      }}
    >
      <button
        className="dialog-close"
        type="button"
        aria-label="Close project details"
        onClick={close}
        autoFocus
      >
        ✕
      </button>
      <div className="dialog-content">
        <p className="eyebrow" id="dialog-period">
          {project.period}
        </p>
        <h2 id="dialog-title">{project.title}</h2>
        <p id="dialog-intro">{project.intro}</p>
        <h3>My contribution</h3>
        <ul className="arrow-list" id="dialog-details">
          {project.details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
        <ul className="tag-list" id="dialog-tech">
          {project.tech.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <a
          className="button"
          id="dialog-source"
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Explore the repository ↗
        </a>
      </div>
    </dialog>
  );
}
