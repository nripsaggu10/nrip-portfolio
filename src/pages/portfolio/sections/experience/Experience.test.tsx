import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, it } from "vitest";
import Experience from "./Experience";

it("switches company panels and preserves the promotion timeline", async () => {
  const user = userEvent.setup();
  render(<Experience />);
  expect(screen.getByRole("tab", { name: "Morgan Stanley" })).toHaveAttribute(
    "aria-selected",
    "true",
  );
  expect(
    screen.getByRole("tabpanel", { name: "Morgan Stanley" }),
  ).toHaveTextContent("Cyber Data Risk & Resilience · Bengaluru, India");
  await user.click(screen.getByRole("tab", { name: "Bounteous India" }));
  expect(
    screen.getByRole("img", { name: "Bounteous India logo" }),
  ).toBeInTheDocument();
  expect(
    screen.queryByRole("img", { name: "Aditya Birla Group logo" }),
  ).not.toBeInTheDocument();
  const panel = screen.getByRole("tabpanel", { name: "Bounteous India" });
  expect(within(panel).getByText("August 2025 to Present")).toBeInTheDocument();
  expect(
    within(panel).getByText("December 2024 to August 2025"),
  ).toBeInTheDocument();
  expect(
    screen.queryByRole("tabpanel", { name: "Morgan Stanley" }),
  ).not.toBeInTheDocument();
  await user.click(screen.getByRole("tab", { name: "Aditya Birla Group" }));
  expect(
    screen.getByRole("img", { name: "Aditya Birla Group logo" }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("tabpanel", { name: "Aditya Birla Group" }),
  ).toHaveTextContent("January 2024 to June 2024");
});

it("supports arrow keys, Home, End, and a single tab stop in the company list", async () => {
  const user = userEvent.setup();
  render(<Experience />);
  const tabs = screen.getAllByRole("tab");
  await user.click(tabs[0]);
  const horizontal =
    screen.getByRole("tablist").getAttribute("aria-orientation") ===
    "horizontal";
  await user.keyboard(horizontal ? "{ArrowRight}" : "{ArrowDown}");
  expect(tabs[1]).toHaveFocus();
  expect(tabs[1]).toHaveAttribute("aria-selected", "true");
  expect(tabs[0]).toHaveAttribute("tabindex", "-1");
  await user.keyboard("{End}");
  expect(tabs[2]).toHaveFocus();
  await user.keyboard(horizontal ? "{ArrowRight}" : "{ArrowDown}");
  expect(tabs[0]).toHaveFocus();
  await user.keyboard("{End}{Home}");
  expect(tabs[0]).toHaveFocus();
});
