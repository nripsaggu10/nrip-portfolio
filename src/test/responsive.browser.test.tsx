import { expect, it, afterEach } from "vitest";
import { page } from "vitest/browser";
import { waitFor } from "@testing-library/react";
import { renderPortfolio } from "./renderPortfolio";
import "../shared/styles/tokens.css";
import "../shared/styles/reset.css";
import "../shared/styles/typography.css";
import "../shared/styles/utilities.css";

afterEach(async () => {
  await page.viewport(414, 896);
});

it.each([320, 390, 600, 640, 768, 1024, 1280, 1920])(
  "keeps the portfolio and portrait within a %ipx viewport",
  async (width) => {
    await page.viewport(width, 900);
    renderPortfolio();
    await waitFor(() => expect(window.innerWidth).toBe(width));
    const portrait =
      document.querySelector<HTMLImageElement>(".identity-photo")!;
    expect(portrait.getBoundingClientRect().width).toBeGreaterThan(0);
    expect(portrait.getBoundingClientRect().right).toBeLessThanOrEqual(width);
    expect(getComputedStyle(portrait).filter).toBe("none");
    expect(
      parseFloat(getComputedStyle(document.body).fontSize),
    ).toBeGreaterThanOrEqual(16);
    expect(document.documentElement.scrollWidth).toBeLessThanOrEqual(width);
    const heroContent = document
      .querySelector(".hero-content")!
      .getBoundingClientRect();
    const hero = document.querySelector(".hero")!.getBoundingClientRect();
    expect(heroContent.top).toBeGreaterThanOrEqual(hero.top);
    expect(heroContent.bottom).toBeLessThanOrEqual(hero.bottom);
    const nav = document.querySelector("nav")!;
    if (getComputedStyle(nav).display !== "none") {
      expect(nav.getBoundingClientRect().right).toBeLessThanOrEqual(width);
    }
  },
);

it("scales body text and headings as the viewport grows", async () => {
  renderPortfolio();
  const sizes: { body: number; heading: number }[] = [];
  for (const width of [390, 1280, 1920]) {
    await page.viewport(width, 900);
    sizes.push({
      body: parseFloat(
        getComputedStyle(document.querySelector(".about-copy p")!).fontSize,
      ),
      heading: parseFloat(
        getComputedStyle(document.querySelector(".hero h1")!).fontSize,
      ),
    });
  }
  expect(sizes[1].body).toBeGreaterThan(sizes[0].body);
  expect(sizes[2].body).toBeGreaterThanOrEqual(sizes[1].body);
  expect(sizes[2].heading).toBeGreaterThan(sizes[1].heading);
  expect(sizes[1].heading).toBeGreaterThan(sizes[0].heading);
});

it("respects enlarged browser text without horizontal scrolling", async () => {
  await page.viewport(390, 900);
  const previousSize = document.documentElement.style.fontSize;
  try {
    document.documentElement.style.fontSize = "200%";
    renderPortfolio();
    expect(
      parseFloat(getComputedStyle(document.body).fontSize),
    ).toBeGreaterThanOrEqual(32);
    const overflowDetails = [...document.querySelectorAll("body *")]
      .filter(
        (element) =>
          (element.getBoundingClientRect().right > window.innerWidth + 1 ||
            element.scrollWidth > element.clientWidth + 1) &&
          !element.closest(".project-art"),
      )
      .map(
        (element) =>
          `${element.tagName}.${element.className}: right=${element.getBoundingClientRect().right} scroll=${element.scrollWidth} client=${element.clientWidth}`,
      );
    expect(
      document.documentElement.scrollWidth,
      overflowDetails.join("\n"),
    ).toBeLessThanOrEqual(window.innerWidth);
  } finally {
    document.documentElement.style.fontSize = previousSize;
  }
});
