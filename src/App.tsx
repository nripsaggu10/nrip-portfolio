import Header from "./components/Header";
import SocialRails from "./components/SocialRails";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEmailCopy } from "./hooks/useEmailCopy";

export default function App() {
  const { message, copyEmail } = useEmailCopy();
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <SocialRails />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact copyEmail={copyEmail} />
      </main>
      <Footer />
      <div
        className={`toast${message ? " visible" : ""}`}
        id="toast"
        role="status"
        aria-live="polite"
      >
        {message}
      </div>
    </>
  );
}
