export interface Project {
  id: "querywear" | "healthfirst";
  title: string;
  subtitle: string;
  description: string;
  metric: string;
  metricLabel: string;
  cardTech: string[];
  period: string;
  intro: string;
  details: string[];
  tech: string[];
  url: string;
}

export const projects: Project[] = [
  {
    id: "querywear",
    title: "QueryWear",
    subtitle: "Your questions, translated into SQL.",
    description:
      "A natural language interface that makes a database accessible through everyday questions. Built with Google PaLM and LangChain, with few-shot learning and semantic search to improve SQL translation.",
    metric: "89%",
    metricLabel: "improvement in query accuracy",
    cardTech: ["LangChain", "Google PaLM", "ChromaDB", "Streamlit", "MySQL"],
    period: "SEPTEMBER 2024 — JANUARY 2025",
    intro:
      "A natural language to SQL system designed to let people query a database using everyday language.",
    details: [
      "Built a natural language interface with Google PaLM and LangChain to translate questions into database queries.",
      "Improved query accuracy by 89% using Hugging Face models and ChromaDB for similarity search.",
      "Used few-shot learning to improve SQL translation accuracy by 55% and database efficiency by 20%.",
    ],
    tech: [
      "Google PaLM",
      "LangChain",
      "Streamlit",
      "Hugging Face",
      "ChromaDB",
      "MySQL",
    ],
    url: "https://github.com/nripsaggu10/querywear",
  },
  {
    id: "healthfirst",
    title: "HealthFirst",
    subtitle: "Connecting data with better care.",
    description:
      "A team capstone bringing together patient data APIs and machine learning. I focused on backend development, database integration, and a disease prediction chatbot using Random Forest and Decision Trees.",
    metric: "40%",
    metricLabel: "faster data retrieval",
    cardTech: ["Python", "React.js", "MySQL", "Random Forest"],
    period: "MARCH 2023 — OCTOBER 2023",
    intro:
      "A healthcare platform developed as a team capstone project, with my work focused on backend engineering and machine learning integration.",
    details: [
      "Expanded APIs to streamline patient data retrieval and improve system efficiency by 40%.",
      "Optimized a disease prediction chatbot using Random Forest and Decision Trees, improving diagnostic accuracy by 18%.",
      "Integrated the backend and database with indexing and caching to improve data retrieval speed by 40%.",
    ],
    tech: [
      "Python",
      "C++",
      "React.js",
      "MySQL",
      "Random Forest",
      "Decision Trees",
    ],
    url: "https://github.com/nripsaggu10/Healthfirst",
  },
];
