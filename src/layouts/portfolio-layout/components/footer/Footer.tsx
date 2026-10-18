import { profile } from "../../../../shared/data/profile.data";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <a href="#home">
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  );
}
