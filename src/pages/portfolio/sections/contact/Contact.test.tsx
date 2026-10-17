import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { renderPortfolio } from "../../../../test/renderPortfolio";
describe("Contact.test", () => {
  it("copies the contact address and announces success", async () => {
    const user = userEvent.setup();
    const writeText = vi
      .spyOn(navigator.clipboard, "writeText")
      .mockResolvedValue();
    renderPortfolio();
    await user.click(
      screen.getByRole("button", { name: "Copy email address" }),
    );
    expect(writeText).toHaveBeenCalledWith("nripdevsaggu316@gmail.com");
    expect(screen.getByRole("status")).toHaveTextContent(
      "Email address copied",
    );
  });
  it("provides a useful fallback if clipboard access is denied", async () => {
    const user = userEvent.setup();
    vi.spyOn(navigator.clipboard, "writeText").mockRejectedValue(
      new Error("Denied"),
    );
    renderPortfolio();
    await user.click(
      screen.getByRole("button", { name: "Copy email address" }),
    );
    expect(screen.getByRole("status")).toHaveTextContent(
      "Select the email address to copy it.",
    );
    expect(screen.getByRole("link", { name: "Email me" })).toHaveAttribute(
      "href",
      "mailto:nripdevsaggu316@gmail.com",
    );
  });
});
