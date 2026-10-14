export default function QueryWearArtwork() {
  return (
    <>
      <div
        className="project-art query-art"
        role="img"
        aria-label="Illustrative interface concept for QueryWear"
      >
        <div className="art-caption">
          <span>QUERYWEAR</span>
          <span>INTERFACE CONCEPT</span>
        </div>
        <div className="query-window">
          <div className="window-bar">
            <span className="window-dots" aria-hidden="true">
              ● ● ●
            </span>
            <span>querywear / workspace</span>
            <span aria-hidden="true">↗</span>
          </div>
          <div className="query-body">
            <p className="mini-label">YOUR DATA. YOUR WORDS.</p>
            <h4>
              Ask a question.
              <br />
              Find your answer.
            </h4>
            <div className="query-input">
              <span>Which products are low in stock?</span>
              <span aria-hidden="true">↑</span>
            </div>
            <div className="sql-label">
              <span className="status-dot" aria-hidden="true"></span>GENERATED
              SQL <span>MySQL</span>
            </div>
            <pre>
              <code>
                <span>SELECT</span>
                {" product_name, stock\n"}
                <span>FROM</span>
                {" inventory\n"}
                <span>WHERE</span> stock &lt; <b>10</b>;
              </code>
            </pre>
            <div className="data-row">
              <span>Classic tee</span>
              <span>7 remaining</span>
              <span className="data-pill">Low stock</span>
            </div>
            <div className="data-row">
              <span>Everyday hoodie</span>
              <span>4 remaining</span>
              <span className="data-pill">Low stock</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
