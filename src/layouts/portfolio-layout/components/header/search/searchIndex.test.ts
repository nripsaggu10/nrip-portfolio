import { describe, expect, it } from "vitest";
import { searchPortfolio } from "./searchIndex";

describe("portfolio search", () => {
  it("handles transpositions and ranks named companies first", () => {
    expect(searchPortfolio("moragn stnaley")[0].title).toBe("Morgan Stanley");
    expect(searchPortfolio("Morgan Stanley")[0].title).toBe("Morgan Stanley");
    expect(searchPortfolio("  BOUNT  ")[0].id).toBe("panel-bounteous");
    expect(searchPortfolio("ultratech")[0].id).toBe("panel-aditya-birla");
  });
  it("indexes project details and coursework beyond card summaries", () => {
    expect(searchPortfolio("hugging face")[0].title).toBe("QueryWear");
    expect(searchPortfolio("quantum computing")[0].id).toBe("education");
    expect(searchPortfolio("koq86y5rq2pp")[0].category).toBe("Certification");
  });
  it("preserves short technical terms and distinguishes Java from JavaScript", () => {
    const entries = [
      { id: "java", title: "Java", category: "Skill", description: "Java" },
      {
        id: "js",
        title: "JavaScript",
        category: "Skill",
        description: "JavaScript",
      },
      { id: "cpp", title: "C++", category: "Skill", description: "C++" },
      { id: "sql", title: "SQL", category: "Skill", description: "SQL" },
    ];
    expect(searchPortfolio("java", entries).map((entry) => entry.id)).toEqual([
      "java",
    ]);
    expect(searchPortfolio("C++", entries)[0].id).toBe("cpp");
    expect(searchPortfolio("sq", entries)).toEqual([]);
    expect(searchPortfolio("zzznomatch")).toEqual([]);
    expect(searchPortfolio("   ")).toEqual([]);
  });
});
