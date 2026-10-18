import { profile } from "../../../../shared/data/profile.data";
import { footerGroups } from "./footer.data";
import { useFooter } from "./useFooter";
import "./Footer.css";

export default function Footer() {
  const { mobile, expanded, toggleGroup } = useFooter();
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-directory">
          {footerGroups.map((group) => {
            const open = !mobile || expanded.includes(group.id);
            return (
              <section
                className="footer-group"
                key={group.id}
                aria-labelledby={`footer-heading-${group.id}`}
              >
                <h2 id={`footer-heading-${group.id}`}>
                  {mobile ? (
                    <button
                      type="button"
                      aria-expanded={open}
                      aria-controls={`footer-links-${group.id}`}
                      onClick={() => toggleGroup(group.id)}
                    >
                      {group.title}
                      <span className="footer-chevron" aria-hidden="true" />
                    </button>
                  ) : (
                    group.title
                  )}
                </h2>
                <ul id={`footer-links-${group.id}`} hidden={!open}>
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={"external" in link ? "_blank" : undefined}
                        rel={
                          "external" in link ? "noopener noreferrer" : undefined
                        }
                      >
                        {link.label}
                        {"external" in link && (
                          <>
                            <span aria-hidden="true"> ↗</span>
                            <span className="sr-only">
                              {" "}
                              (opens in a new tab)
                            </span>
                          </>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
        <p className="footer-contact">
          Contact Nripdev at <a href={profile.emailHref}>{profile.email}</a>.
        </p>
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <a href="#home">
            Back to top <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
