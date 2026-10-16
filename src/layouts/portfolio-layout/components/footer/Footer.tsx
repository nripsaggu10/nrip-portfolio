import "./Footer.css";
export default function Footer() {
  return (
    <>
      <footer className="site-footer">
        <a href="#home">
          Nripdev Singh <span aria-hidden="true">↑</span>
        </a>
        <p>Built with care. Always learning.</p>
        <a
          className="inspiration"
          href="https://v4.brittanychiang.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Inspired by Brittany Chiang ↗
        </a>
      </footer>
    </>
  );
}
