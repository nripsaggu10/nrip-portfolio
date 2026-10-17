import { StrictMode } from "react";
import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import App from "../App";
import StartupScreen from "./StartupScreen";
import { INTRO_COMPLETE_MS, INTRO_REVEAL_MS } from "./useStartupScreen";

function motionPreference(reduced = false) {
  vi.stubGlobal(
    "matchMedia",
    vi.fn((media: string) => ({
      matches: reduced && media.includes("prefers-reduced-motion"),
      media,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    })),
  );
}

describe("startup screen", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    motionPreference();
  });

  afterEach(() => {
    cleanup();
    vi.useRealTimers();
    vi.unstubAllGlobals();
  });

  it("draws the N intro, reveals the page, and restores scrolling in StrictMode", () => {
    const previousOverflow = document.body.style.overflow;
    const view = render(
      <StrictMode>
        <StartupScreen>
          <h1>Portfolio</h1>
        </StartupScreen>
      </StrictMode>,
    );
    expect(screen.getByRole("img", { name: "N logo" })).toBeInTheDocument();
    expect(
      screen.queryByRole("heading", { name: "Portfolio" }),
    ).not.toBeInTheDocument();
    expect(document.body.style.overflow).toBe("hidden");
    act(() => vi.advanceTimersByTime(INTRO_REVEAL_MS));
    expect(view.container.querySelector(".startup-page")).toHaveAttribute(
      "inert",
    );
    act(() => vi.advanceTimersByTime(INTRO_COMPLETE_MS - INTRO_REVEAL_MS));
    expect(
      screen.getByRole("heading", { name: "Portfolio" }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("img", { name: "N logo" }),
    ).not.toBeInTheDocument();
    expect(document.body.style.overflow).toBe(previousOverflow);
  });

  it("shows only the logo and supports Escape without leaving timers behind", () => {
    render(
      <StartupScreen>
        <h1>Portfolio</h1>
      </StartupScreen>,
    );
    const intro = screen.getByRole("region", {
      name: "Portfolio introduction",
    });
    expect(intro.textContent).toBe("");
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
    fireEvent.keyDown(document, { key: "Escape" });
    expect(
      screen.getByRole("heading", { name: "Portfolio" }),
    ).toBeInTheDocument();
    expect(vi.getTimerCount()).toBe(0);
  });

  it("bypasses the intro for reduced motion", () => {
    motionPreference(true);
    render(
      <StartupScreen>
        <h1>Portfolio</h1>
      </StartupScreen>,
    );
    expect(
      screen.getByRole("heading", { name: "Portfolio" }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: "Skip intro" }),
    ).not.toBeInTheDocument();
    expect(vi.getTimerCount()).toBe(0);
  });

  it("preserves a direct projects URL when the portfolio mounts after the intro", () => {
    window.history.replaceState(null, "", "/#projects");
    render(
      <StartupScreen>
        <App />
      </StartupScreen>,
    );
    act(() => vi.advanceTimersByTime(INTRO_COMPLETE_MS));
    act(() => vi.advanceTimersByTime(32));
    expect(window.location.hash).toBe("#projects");
    expect(HTMLElement.prototype.scrollIntoView).toHaveBeenCalledWith({
      behavior: "instant",
      block: "start",
    });
    expect(
      vi.mocked(HTMLElement.prototype.scrollIntoView).mock.contexts.at(-1),
    ).toBe(document.getElementById("projects"));
  });
});
