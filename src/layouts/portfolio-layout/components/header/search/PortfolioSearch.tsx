import { usePortfolioSearch } from "./usePortfolioSearch";
import "./PortfolioSearch.css";

export default function PortfolioSearch({
  onClose,
  trigger,
}: {
  onClose: () => void;
  trigger: HTMLButtonElement | null;
}) {
  const { dialog, input, query, setQuery, results, closing, close } =
    usePortfolioSearch(onClose, trigger);
  return (
    <dialog
      ref={dialog}
      className={`portfolio-search${closing ? " closing" : ""}`}
      onKeyDownCapture={(event) => {
        if (event.key === "Tab")
          event.currentTarget.classList.add("keyboard-navigation");
      }}
      aria-label="Search portfolio"
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
      <div className="search-topline">
        <label htmlFor="portfolio-search-input">Search portfolio</label>
        {query.length > 0 && (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              input.current?.focus();
            }}
            aria-label="Clear search"
          >
            ×
          </button>
        )}
      </div>
      <div className="search-input-row">
        <svg
          className="search-input-icon"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <circle cx="10.5" cy="10.5" r="6.5" />
          <path d="m16 16 5 5" />
        </svg>
        <input
          ref={input}
          id="portfolio-search-input"
          type="search"
          placeholder="Search portfolio"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              event.preventDefault();
              event.stopPropagation();
              close();
            }
          }}
          autoComplete="off"
        />
      </div>
      <p className="search-status" role="status">
        {query.trim()
          ? `${results.length} matching result${results.length === 1 ? "" : "s"}`
          : "Quick Links"}
      </p>
      <ul className="search-results">
        {results.map((result) => (
          <li key={`${result.id}-${result.title}`}>
            <a href={`#${result.id}`} onClick={close}>
              <span className="search-result-copy">
                <strong>{result.title}</strong>
                {query.trim() && (
                  <small>
                    {result.category} · {result.description}
                  </small>
                )}
              </span>
              <span aria-hidden="true">→</span>
            </a>
          </li>
        ))}
      </ul>
      {results.length === 0 && (
        <p className="search-empty">
          No matches. Try Angular, Java, QueryWear, or certifications.
        </p>
      )}
    </dialog>
  );
}
