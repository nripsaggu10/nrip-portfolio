import "./ProjectDialog.css";
import { useProjectDialog } from "./useProjectDialog";
import type { Project } from "../../project.types";

export default function ProjectDialog({
  project,
  onClose,
  returnFocusTo,
}: {
  project: Project;
  onClose: () => void;
  returnFocusTo: HTMLButtonElement | null;
}) {
  const { dialog, close, onCancel, onBackdropClick } = useProjectDialog(
    onClose,
    returnFocusTo,
  );

  return (
    <dialog
      ref={dialog}
      id="project-dialog"
      aria-labelledby="dialog-title"
      aria-describedby="dialog-intro"
      onCancel={onCancel}
      onClick={onBackdropClick}
    >
      <div className="dialog-toolbar">
        <span>Project details</span>
        <button
          className="dialog-close"
          type="button"
          aria-label="Close project details"
          onClick={close}
          autoFocus
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            aria-hidden="true"
          >
            <path d="m6 6 12 12M18 6 6 18" />
          </svg>
        </button>
      </div>
      <div className="dialog-content">
        <header className="dialog-overview">
          <div>
            <p className="dialog-period" id="dialog-period">
              {project.period}
            </p>
            <h2 id="dialog-title">{project.title}</h2>
            <p id="dialog-intro">{project.intro}</p>
          </div>
          <div className="dialog-metric">
            <strong>{project.metric}</strong>
            <span>{project.metricLabel}</span>
          </div>
        </header>
        <div className="dialog-body-grid">
          <section
            className="dialog-contributions"
            aria-labelledby="dialog-contribution-title"
          >
            <h3 id="dialog-contribution-title">My contribution</h3>

            <ul className="dialog-detail-list" id="dialog-details">
              {project.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </section>
          <section
            className="dialog-technologies"
            aria-labelledby="dialog-tech-title"
          >
            <h3 id="dialog-tech-title">Built with</h3>
            <ul className="tag-list" id="dialog-tech">
              {project.tech.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </section>
        </div>
        <div className="dialog-footer">
          <a
            className="dialog-source-link"
            id="dialog-source"
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub <span aria-hidden="true">↗</span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </div>
    </dialog>
  );
}
