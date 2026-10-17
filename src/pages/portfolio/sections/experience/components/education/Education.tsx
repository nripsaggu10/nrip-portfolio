import { coursework } from "./education.data";
import "./Education.css";
export default function Education() {
  return (
    <>
      <div className="education-row">
        <div>
          <p className="eyebrow">THE FOUNDATION</p>
          <h3>Thapar Institute of Engineering and Technology</h3>
          <p>Bachelor’s in Electronics and Computer Engineering</p>
          <p>CGPA: 7.25 / 10</p>
        </div>
        <div className="education-meta">
          <p>2020 — 2024</p>
          <p>Patiala, Punjab</p>
        </div>
      </div>
      <div className="education-coursework">
        <h4>Relevant coursework</h4>
        <ul className="coursework-list">
          {coursework.map((course) => (
            <li key={course}>{course}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
