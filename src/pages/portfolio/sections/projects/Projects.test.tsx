import { fireEvent, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { renderPortfolio } from "../../../../test/renderPortfolio";
describe("Projects.test", () => {
  it("shows each project’s details and restores focus after close or native cancel", async () => {
    const user = userEvent.setup();
    renderPortfolio();
    const buttons = screen.getAllByRole("button", { name: "Project details" });
    await user.click(buttons[0]);
    let dialog = screen.getByRole("dialog", { name: "QueryWear" });
    expect(
      within(dialog).getByText(/few-shot learning.*55%/),
    ).toBeInTheDocument();
    expect(within(dialog).getByRole("link")).toHaveAttribute(
      "href",
      "https://github.com/nripsaggu10/querywear",
    );
    expect(document.body).toHaveClass("modal-open");
    await user.click(
      within(dialog).getByRole("button", { name: "Close project details" }),
    );
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(document.body).not.toHaveClass("modal-open");
    expect(buttons[0]).toHaveFocus();
    await user.click(buttons[1]);
    dialog = screen.getByRole("dialog", { name: "HealthFirst" });
    expect(
      within(dialog).getByText(/diagnostic accuracy by 18%/),
    ).toBeInTheDocument();
    expect(within(dialog).getByRole("link")).toHaveAttribute(
      "href",
      "https://github.com/nripsaggu10/Healthfirst",
    );
    fireEvent(dialog, new Event("cancel", { cancelable: true }));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(buttons[1]).toHaveFocus();
  });
  it("closes on a backdrop click and clears scroll locking when unmounted", async () => {
    const user = userEvent.setup();
    const view = renderPortfolio();
    await user.click(
      screen.getAllByRole("button", { name: "Project details" })[0],
    );
    const dialog = screen.getByRole("dialog");
    vi.spyOn(dialog, "getBoundingClientRect").mockReturnValue({
      left: 10,
      top: 10,
      right: 300,
      bottom: 400,
    } as DOMRect);
    fireEvent.click(dialog, { clientX: 2, clientY: 2 });
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    await user.click(
      screen.getAllByRole("button", { name: "Project details" })[0],
    );
    view.unmount();
    expect(document.body).not.toHaveClass("modal-open");
  });
});
