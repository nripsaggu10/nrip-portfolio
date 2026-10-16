import "./Toolbox.css";
import Reveal from "../../../../../../shared/components/reveal/Reveal";
export default function Toolbox() {
  return (
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
  );
}
