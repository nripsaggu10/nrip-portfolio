import "./Hero.css";
export default function Hero() {
  return (
    <>
      <section
        className="hero container"
        id="home"
        aria-labelledby="hero-title"
      >
        <div className="hero-content">
          <p className="eyebrow hero-intro">Hi, my name is</p>
          <h1 id="hero-title">Nripdev Singh.</h1>
          <h2>I build with purpose.</h2>
          <p className="hero-description">
            I’m a software engineer working at the intersection of{" "}
            <strong>secure systems</strong> and thoughtful digital experiences.
            Currently, I’m contributing to security design at{" "}
            <a href="#experience">Morgan Stanley</a> through Accolite.
          </p>
          <a className="button hero-cta" href="#projects">
            Explore my work <span aria-hidden="true">↘</span>
          </a>
        </div>
        <div className="hero-bottom">
          <p>
            <span className="location-dot" aria-hidden="true"></span>Bengaluru,
            India <span className="divider">/</span> Software Engineer
          </p>
          <a href="#about">
            Scroll to discover <span aria-hidden="true">↓</span>
          </a>
        </div>
        <div className="hero-index" aria-hidden="true">
          PORTFOLIO — 2026
        </div>
      </section>
    </>
  );
}
