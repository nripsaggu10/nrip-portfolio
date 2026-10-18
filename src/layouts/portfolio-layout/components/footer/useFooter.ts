import { useEffect, useState } from "react";

export function useFooter() {
  const [mobile, setMobile] = useState(
    () => window.matchMedia("(max-width: 600px)").matches,
  );
  const [expanded, setExpanded] = useState<string[]>([]);
  useEffect(() => {
    const query = window.matchMedia("(max-width: 600px)");
    const update = () => {
      setMobile(query.matches);
      setExpanded([]);
    };
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  const toggleGroup = (id: string) =>
    setExpanded((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
  return { mobile, expanded, toggleGroup };
}
