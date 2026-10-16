import "./PortfolioLayout.css";
import type { ReactNode } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import SocialRails from "./components/social-rails/SocialRails";
export default function PortfolioLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <SocialRails />
      {children}
      <Footer />
    </>
  );
}
