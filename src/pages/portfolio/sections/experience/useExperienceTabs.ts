import { useEffect, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { companies } from "./experience.data";
export function useExperienceTabs() {
  const [selected, setSelected] = useState(0);
  const [horizontal, setHorizontal] = useState(false);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  useEffect(() => {
    const media = window.matchMedia("(max-width: 600px)");
    const update = () => setHorizontal(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "Home") next = 0;
    else if (event.key === "End") next = companies.length - 1;
    else if (event.key === (horizontal ? "ArrowRight" : "ArrowDown"))
      next = (index + 1) % companies.length;
    else if (event.key === (horizontal ? "ArrowLeft" : "ArrowUp"))
      next = (index - 1 + companies.length) % companies.length;
    else return;
    event.preventDefault();
    setSelected(next);
    tabs.current[next]?.focus();
  }
  return { selected, setSelected, horizontal, tabs, onKeyDown };
}
