import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import Resume from "./ResumePage";
describe("ResumePage.test", () => {
  it("renders the résumé independently and invokes printing", async () => {
    const user = userEvent.setup();
    const print = vi.spyOn(window, "print").mockImplementation(() => {});
    render(<Resume />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Nripdev Singh",
    );
    expect(
      screen.getByRole("link", { name: "+91 99882 52405" }),
    ).toHaveAttribute("href", "tel:+919988252405");
    await user.click(screen.getByRole("button", { name: "Print / Save PDF" }));
    expect(print).toHaveBeenCalledOnce();
  });
});
