import portrait from "../about/assets/nripdev-singh.jpg";
import "./Hero.css";
export default function Hero() {
  return (
    <section className="hero container" id="home" aria-labelledby="hero-title">
      <div className="hero-content">
        <p className="eyebrow hero-intro">Hi, my name is</p>
        <h1 id="hero-title">Nripdev Singh.</h1>
        <h2>Building systems that stand up to scrutiny.</h2>
        <p className="hero-description">
          I’m a <strong>Technical Consultant</strong> at{" "}
          <a href="#experience">Morgan Stanley</a>, serving as a{" "}
          <strong>Senior Software Engineer</strong> at{" "}
          <a href="#current-role">Bounteous India</a>. My focus is on the
          decisions behind enterprise software. I consider how it evolves, how
          it behaves under pressure, and how securely it operates.
        </p>
      </div>
      <figure className="hero-portrait">
        <img
          className="identity-photo"
          src={portrait}
          alt="Nripdev Singh, software engineer"
          width="386"
          height="480"
          fetchPriority="high"
          decoding="async"
        />
      </figure>
    </section>
  );
}
