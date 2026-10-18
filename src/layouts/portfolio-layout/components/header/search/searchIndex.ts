import {
  engineeringContributions,
  expertise,
  morganStanleySkills,
} from "../../../../../shared/data/experience.data";
import { projects } from "../../../../../pages/portfolio/sections/projects/projects.data";
import { coursework } from "../../../../../pages/portfolio/sections/experience/components/education/education.data";

export interface SearchEntry {
  id: string;
  title: string;
  category: string;
  description: string;
  keywords?: string;
}
export const searchIndex: SearchEntry[] = [
  {
    id: "about",
    title: "A little about me",
    category: "Profile",
    description:
      "Nripdev Singh. Building software since 2018, with an interest in interfaces, components, and responsive applications.",
  },
  {
    id: "panel-morgan-stanley",
    title: "Morgan Stanley",
    category: "Experience",
    description:
      "Technical Consultant in Cyber Data Risk & Resilience, Bengaluru. Enterprise application modernization, backend automation, and security.",
    keywords: [
      ...morganStanleySkills,
      ...engineeringContributions.map((item) => item.description),
    ].join(" "),
  },
  {
    id: "panel-bounteous",
    title: "Bounteous India",
    category: "Experience",
    description:
      "Senior Software Engineer, Financial Services APAC. Promoted in August 2025 while continuing the Morgan Stanley client assignment.",
    keywords:
      "Software Engineer December 2024 employer Accolite promotion SSE SDE Bengaluru",
  },
  {
    id: "panel-aditya-birla",
    title: "Aditya Birla Group · UltraTech",
    category: "Experience",
    description:
      "Electronics and Automation Intern. Industrial automation, instrumentation, sensor calibration, PLC, SCADA, DCS, and industrial networking in Haryana.",
  },
  {
    id: "education",
    title: "Thapar Institute of Engineering and Technology",
    category: "Education",
    description:
      "Bachelor’s in Electronics and Computer Engineering, 2020–2024. Patiala, Punjab.",
    keywords: coursework.join(" "),
  },
  ...projects.map((project) => ({
    id: project.id,
    title: project.title,
    category: "Project",
    description: project.description,
    keywords: [...project.tech, ...project.details, project.subtitle].join(" "),
  })),
  ...expertise.map((item) => ({
    id: "expertise",
    title: item.title,
    category: "Technical expertise",
    description: item.technologies,
    keywords: item.description,
  })),
  {
    id: "certifications",
    title: "Claude Certified Architect - Foundations",
    category: "Certification",
    description:
      "Anthropic. Score 860/1000. Agent orchestration, context management, MCP, Claude Code, and production AI workflows.",
  },
  {
    id: "certifications",
    title: "Model Context Protocol: Advanced Topics",
    category: "Certification",
    description:
      "Anthropic. Advanced study of MCP for AI applications. Credential koq86y5rq2pp.",
  },
  {
    id: "certifications",
    title: "ISC2 Candidate",
    category: "Credential",
    description:
      "Cybersecurity professional development. February 2026 to February 2027.",
  },
  {
    id: "recognition",
    title: "Runner-up, IdeaThon",
    category: "Recognition",
    description:
      "Standard Chartered Finance & Technology Connect. Blockchain-based pooled collateral proposal using smart contracts.",
  },
  {
    id: "contact",
    title: "Get In Touch",
    category: "Contact",
    description: "Contact Nripdev Singh by email at nripdevsaggu316@gmail.com.",
  },
];

const tokens = (text: string) =>
  text
    .toLowerCase()
    .normalize("NFKC")
    .match(/[\p{L}\p{N}+#]+/gu) || [];

// Damerau-Levenshtein distance also recognises adjacent transpositions.
function distance(a: string, b: string) {
  const matrix = Array.from({ length: a.length + 1 }, (_, i) =>
    Array.from({ length: b.length + 1 }, (_, j) =>
      i === 0 ? j : j === 0 ? i : 0,
    ),
  );
  for (let i = 1; i <= a.length; i++)
    for (let j = 1; j <= b.length; j++) {
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1),
      );
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1])
        matrix[i][j] = Math.min(matrix[i][j], matrix[i - 2][j - 2] + 1);
    }
  return matrix[a.length][b.length];
}
function match(word: string, candidate: string) {
  if (word === candidate) return 100;
  if (
    word.length >= 3 &&
    candidate.startsWith(word) &&
    !(word === "java" && candidate === "javascript")
  )
    return 70;
  if (word.length < 4 || candidate.length < 4) return 0;
  const limit = word.length >= 7 ? 2 : 1;
  if (Math.abs(word.length - candidate.length) > limit) return 0;
  const edits = distance(word, candidate);
  return edits <= limit ? 50 - edits * 10 : 0;
}
export function searchPortfolio(query: string, entries = searchIndex) {
  const words = tokens(query).slice(0, 12);
  if (!words.length) return [];
  return entries
    .map((entry) => {
      const fields = [
        { words: tokens(entry.title), weight: 3 },
        { words: tokens(entry.category), weight: 1.5 },
        {
          words: tokens(`${entry.description} ${entry.keywords || ""}`),
          weight: 1,
        },
      ];
      const scores = words.map((word) =>
        Math.max(
          0,
          ...fields.flatMap((field) =>
            field.words.map(
              (candidate) => match(word, candidate) * field.weight,
            ),
          ),
        ),
      );
      return {
        entry,
        score: scores.every((score) => score > 0)
          ? scores.reduce((a, b) => a + b, 0)
          : 0,
      };
    })
    .filter((result) => result.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 8)
    .map((result) => result.entry);
}

export const quickLinks = [
  searchIndex[0],
  searchIndex[1],
  ...searchIndex.filter((entry) => entry.category === "Project"),
  searchIndex.find(
    (entry) => entry.title === "Claude Certified Architect - Foundations",
  )!,
];
