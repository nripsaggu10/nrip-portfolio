import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach, beforeEach, vi } from "vitest";

beforeEach(() => {
  // Leave native dialog, media-query, and observer APIs intact in browser tests.
  window.history.replaceState(null, "", "/");
  // Observe section restoration without moving the test runner's viewport.
  vi.spyOn(HTMLElement.prototype, "scrollIntoView").mockImplementation(
    () => {},
  );
});

afterEach(() => {
  cleanup();
});
