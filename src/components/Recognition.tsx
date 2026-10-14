import Reveal from "./Reveal";
export default function Recognition() {
  return (
    <>
      <Reveal as="article" className="achievement">
        <div className="award-icon" aria-hidden="true">
          <svg
            viewBox="0 0 48 48"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M15 8h18v13c0 6-4 10-9 10s-9-4-9-10V8ZM15 12H7v5c0 6 4 8 9 8m17-13h8v5c0 6-4 8-9 8M24 31v9m-8 1h16" />
          </svg>
        </div>
        <div className="achievement-copy">
          <p className="eyebrow">A LITTLE RECOGNITION / MARCH 2023</p>
          <h3>Runner-up, IdeaThon</h3>
          <p className="award-source">
            Standard Chartered Finance &amp; Technology Connect
          </p>
          <p>
            Developed a blockchain-based pooled collateral concept using smart
            contracts, allowing 100+ users to collectively secure loans and
            distribute interest proportionally.
          </p>
        </div>
        <span className="award-year" aria-hidden="true">
          ’23
        </span>
      </Reveal>

      <Reveal className="toolbox">
        <div>
          <p className="eyebrow">MY TOOLBOX</p>
          <h3>
            From interface
            <br />
            to infrastructure.
          </h3>
        </div>
        <div className="toolbox-columns">
          <div>
            <h4>Languages</h4>
            <p>
              Java · Python · C++
              <br />
              TypeScript · SQL
            </p>
          </div>
          <div>
            <h4>Frameworks &amp; AI</h4>
            <p>
              Spring · Angular · React.js
              <br />
              LangChain · Hugging Face · TensorFlow
            </p>
          </div>
          <div>
            <h4>Data &amp; tools</h4>
            <p>
              MySQL · PostgreSQL
              <br />
              Git · Postman · Linux · Excel
            </p>
          </div>
        </div>
      </Reveal>
    </>
  );
}
