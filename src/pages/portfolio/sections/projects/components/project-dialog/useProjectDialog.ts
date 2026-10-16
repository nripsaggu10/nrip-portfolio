import { useEffect, useRef, type MouseEvent, type SyntheticEvent } from "react";
export function useProjectDialog(
  onClose: () => void,
  returnFocusTo: HTMLButtonElement | null,
) {
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const element = dialog.current!;
    element.showModal();
    document.body.classList.add("modal-open");
    return () => {
      document.body.classList.remove("modal-open");
      if (element.open) element.close();
      returnFocusTo?.focus();
    };
  }, [returnFocusTo]);

  function close() {
    dialog.current?.close();
    onClose();
  }

  function onCancel(event: SyntheticEvent<HTMLDialogElement>) {
    event.preventDefault();
    close();
  }
  function onBackdropClick(event: MouseEvent<HTMLDialogElement>) {
    if (event.target !== event.currentTarget) return;
    const rect = event.currentTarget.getBoundingClientRect();
    if (
      event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom
    )
      close();
  }
  return { dialog, close, onCancel, onBackdropClick };
}
