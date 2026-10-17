import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import Contact from "./Contact";
it("offers a direct email link to Nripdev", () => {
  render(<Contact />);
  expect(
    screen.getByRole("heading", { name: "Get In Touch" }),
  ).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Say Hello" })).toHaveAttribute(
    "href",
    "mailto:nripdevsaggu316@gmail.com",
  );
});
