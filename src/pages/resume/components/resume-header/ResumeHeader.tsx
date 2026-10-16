import "./ResumeHeader.css";
import { profile } from "../../../../shared/data/profile.data";
export default function ResumeHeader() {
  return (
    <header>
      <h1>Nripdev Singh</h1>
      <p className="headline">
        Senior Software Engineer · Technical Consultant
      </p>
      <address aria-label="Contact details">
        <a href={profile.emailHref}>nripdevsaggu316@gmail.com</a>
        <a href={profile.phoneHref}>{profile.phone}</a>
        <a href={profile.linkedin}>linkedin.com/in/nripdev-singh</a>
        <a href={profile.github}>github.com/nripsaggu10</a>
      </address>
    </header>
  );
}
