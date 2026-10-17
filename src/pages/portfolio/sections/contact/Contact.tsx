import { profile } from "../../../../shared/data/profile.data";
import "./Contact.css";
export default function Contact() {
  return (
    <section
      className="section container contact-section"
      id="contact"
      aria-labelledby="contact-title"
    >
      <p className="eyebrow">What’s Next?</p>
      <h2 id="contact-title">Get In Touch</h2>
      <p>
        Although I’m not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I’ll
        try my best to get back to you!
      </p>
      <a className="button contact-cta" href={profile.emailHref}>
        Say Hello
      </a>
    </section>
  );
}
