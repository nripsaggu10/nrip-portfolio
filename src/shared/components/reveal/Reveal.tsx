import "./Reveal.css";
import type { ReactNode } from "react";
import { useReveal } from "./useReveal";

export default function Reveal({
  as: Tag = "div",
  className,
  children,
}: {
  as?: "div" | "article";
  className: string;
  children: ReactNode;
}) {
  const { element, visible } = useReveal();

  return (
    <Tag
      ref={element}
      className={`${className} reveal-ready${visible ? " in-view" : ""}`}
    >
      {children}
    </Tag>
  );
}
