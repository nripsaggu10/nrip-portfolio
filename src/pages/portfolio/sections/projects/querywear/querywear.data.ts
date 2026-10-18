import type { Project } from "../project.types";
export const querywear: Project = {
  id: "querywear",
  title: "QueryWear",
  subtitle: "Natural language to SQL.",
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
};
