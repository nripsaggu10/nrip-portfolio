import { StrictMode } from "react";
import {
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import App from "../App";
import Resume from "../components/Resume";

function renderPortfolio() {
  return render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}

describe("portfolio interactions", () => {
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

  it("closes navigation on Escape, a destination link, and an outside click", async () => {
    const user = userEvent.setup();
    renderPortfolio();
    const menu = screen.getByRole("button", { name: "Menu" });
    const nav = screen.getByRole("navigation");
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
    expect(screen.getByRole("link", { name: "Say hello" })).toHaveAttribute(
      "href",
      "mailto:nripdevsaggu316@gmail.com",
    );
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

describe("résumé", () => {
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
