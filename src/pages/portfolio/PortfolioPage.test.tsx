import { screen, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { renderPortfolio } from "../../test/renderPortfolio";
describe("PortfolioPage.test", () => {
  it("restores a direct section URL after React mounts", async () => {
    window.history.replaceState(null, "", "/#projects");
    renderPortfolio();
    await waitFor(() =>
      expect(HTMLElement.prototype.scrollIntoView).toHaveBeenCalledWith({
        behavior: "instant",
        block: "start",
      }),
    );
    expect(
      vi.mocked(HTMLElement.prototype.scrollIntoView).mock.contexts[0],
    ).toBe(document.getElementById("projects"));
  });
  it("preserves section targets and résumé links", () => {
    const { container } = renderPortfolio();
    for (const link of container.querySelectorAll<HTMLAnchorElement>(
      'a[href^="#"]',
    )) {
      expect(container.querySelector(link.hash)).not.toBeNull();
    }
    for (const link of screen.getAllByRole("link", { name: /Résumé/ })) {
      expect(link).toHaveAttribute("href", "/resume.html");
    }
    expect(
      screen.getByRole("img", {
        name: "Illustrative interface concept for QueryWear",
      }),
    ).toBeInTheDocument();
  });
});
