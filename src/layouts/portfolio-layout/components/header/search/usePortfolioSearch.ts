import { searchPortfolio, quickLinks } from "./searchIndex";
import { useEffect, useRef, useState } from "react";

export function usePortfolioSearch(
  onClose: () => void,
  trigger: HTMLButtonElement | null,
) {
  const dialog = useRef<HTMLDialogElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const [closing, setClosing] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const element = dialog.current!;
    element.showModal();
    input.current?.focus();
    document.body.classList.add("modal-open");
    let pointerEnteredPanel = false;
    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      const bounds = element.getBoundingClientRect();
      const inside =
        event.clientX >= bounds.left &&
        event.clientX <= bounds.right &&
        event.clientY >= bounds.top &&
        event.clientY <= bounds.bottom;
      if (inside) {
        pointerEnteredPanel = true;
        return;
      }
      if (pointerEnteredPanel) close();
    };
    document.addEventListener("pointermove", onPointerMove, true);
    return () => {
      document.removeEventListener("pointermove", onPointerMove, true);
      if (closeTimer.current) clearTimeout(closeTimer.current);
      if (element.open) element.close();
      document.body.classList.remove("modal-open");
      trigger?.focus();
    };
  }, [trigger]);

  const visibleResults = query.trim() ? searchPortfolio(query) : quickLinks;
  function close() {
    if (closeTimer.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      onClose();
      return;
    }
    setClosing(true);
    closeTimer.current = setTimeout(onClose, 220);
  }
  return {
    dialog,
    input,
    query,
    setQuery,
    results: visibleResults,
    closing,
    close,
  };
}
