import "../../../../../../shared/styles/institution-images.css";
import thaparShield from "./assets/thapar-shield.svg";
import { coursework } from "./education.data";
import "./Education.css";
export default function Education() {
  return (
    <>
      <div className="education-row">
        <div className="education-identity">
          <img
            className="education-logo institution-image"
            src={thaparShield}
            alt="Thapar Institute shield emblem"
            width="96"
            height="112"
            decoding="async"
          />
          <div className="education-details">
            <p className="eyebrow">THE FOUNDATION</p>
            <h3>Thapar Institute of Engineering and Technology</h3>
            <p>Bachelor’s in Electronics and Computer Engineering</p>
            <p>CGPA: 7.25 / 10</p>
          </div>
        </div>
        <div className="education-meta">
          <p>2020 — 2024</p>
          <p>Patiala, Punjab</p>
        </div>
      </div>
      <div className="education-coursework">
        <h4>Relevant coursework</h4>
        <ul className="coursework-list tag-list">
          {coursework.map((course) => (
            <li key={course}>{course}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
