import { screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { renderPortfolio } from "../../../../test/renderPortfolio";
describe("Header.test", () => {
  it("closes navigation on Escape, a destination link, and an outside click", async () => {
    const user = userEvent.setup();
    renderPortfolio();
    const menu = screen.getByRole("button", { name: "Menu" });
    const nav = screen.getByRole("navigation", { hidden: true });
    await user.click(menu);
    expect(menu).toHaveAttribute("aria-expanded", "true");
    expect(nav).toHaveClass("open");
    await user.keyboard("{Escape}");
    expect(menu).toHaveAttribute("aria-expanded", "false");
    expect(menu).toHaveFocus();
    await user.click(menu);
    await user.click(within(nav).getByRole("link", { name: /About/ }));
    expect(nav).not.toHaveClass("open");
    await user.click(menu);
    await user.click(screen.getByRole("heading", { name: "Nripdev Singh." }));
    expect(nav).not.toHaveClass("open");
  });
});
