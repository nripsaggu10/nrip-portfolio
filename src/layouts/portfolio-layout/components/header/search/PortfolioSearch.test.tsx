import { act, render, screen } from "@testing-library/react";
import { expect, it, vi } from "vitest";
import PortfolioSearch from "./PortfolioSearch";

it("closes on mouse movement over the backdrop without requiring a click", () => {
  const close = vi.fn();
  render(<PortfolioSearch onClose={close} trigger={null} />);
  const dialog = screen.getByRole("dialog");
  vi.spyOn(dialog, "getBoundingClientRect").mockReturnValue({
    left: 0,
    right: 1000,
    top: 52,
    bottom: 420,
  } as DOMRect);
  function move(y: number, pointerType: string) {
    const event = new MouseEvent("pointermove", {
      bubbles: true,
      clientX: 300,
      clientY: y,
    });
    Object.defineProperty(event, "pointerType", { value: pointerType });
    act(() => {
      dialog.dispatchEvent(event);
    });
  }
  // Crossing the header from the search icon must not dismiss the panel.
  move(24, "mouse");
  expect(close).not.toHaveBeenCalled();
  move(40, "mouse");
  expect(close).not.toHaveBeenCalled();
  move(200, "mouse");
  move(350, "mouse");
  expect(close).not.toHaveBeenCalled();
  move(600, "touch");
  expect(close).not.toHaveBeenCalled();
  // Native modal backdrops can retarget events to the dialog itself.
  move(600, "mouse");
  expect(close).toHaveBeenCalledOnce();
});
