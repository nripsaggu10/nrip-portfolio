import { profile } from "../../../../shared/data/profile.data";

export const footerGroups = [
  {
    id: "explore",
    title: "Explore",
    links: [
      { label: "About me", href: "#about" },
      { label: "Experience", href: "#experience" },
      { label: "Education", href: "#education" },
      { label: "Technical expertise", href: "#expertise" },
    ],
  },
  {
    id: "projects",
    title: "Projects",
    links: [
      { label: "QueryWear", href: "#querywear" },
      { label: "HealthFirst", href: "#healthfirst" },
    ],
  },
  {
    id: "credentials",
    title: "Credentials",
    links: [
      { label: "Certifications", href: "#certifications" },
      { label: "Recognition", href: "#recognition" },
      { label: "RESUME", href: profile.resumeHref, external: true },
    ],
  },
  {
    id: "connect",
    title: "Connect",
    links: [
      { label: "LinkedIn", href: profile.linkedin, external: true },
      { label: "GitHub", href: profile.github, external: true },
      { label: "Instagram", href: profile.instagram, external: true },
      { label: "X", href: profile.twitter, external: true },
    ],
  },
];
