import { useEffect, useRef, useState, type ReactNode } from "react";

export default function Reveal({
  as: Tag = "div",
  className,
  children,
}: {
  as?: "div" | "article";
  className: string;
  children: ReactNode;
}) {
  const element = useRef<HTMLDivElement & HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const reveal = () => setVisible(true);
    const onMotionChange = () => {
      if (motion.matches) reveal();
    };
    motion.addEventListener("change", onMotionChange);
    let observer: IntersectionObserver | undefined;
    if (motion.matches || !("IntersectionObserver" in window)) {
      reveal();
    } else {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            reveal();
            observer?.disconnect();
          }
        },
        { threshold: 0.08 },
      );
      if (element.current) observer.observe(element.current);
    }
    return () => {
      observer?.disconnect();
      motion.removeEventListener("change", onMotionChange);
    };
  }, []);

  return (
    <Tag
      ref={element}
      className={`${className} reveal-ready${visible ? " in-view" : ""}`}
    >
      {children}
    </Tag>
  );
}
