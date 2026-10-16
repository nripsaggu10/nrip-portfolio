import { profile } from "../../../../shared/data/profile.data";
import { useEffect, useRef, useState } from "react";

export function useEmailCopy() {
  const [message, setMessage] = useState("");
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  async function copyEmail() {
    let nextMessage: string;
    try {
      await navigator.clipboard.writeText(profile.email);
      nextMessage = "Email address copied";
    } catch {
      nextMessage = "Select the email address to copy it.";
    }
    clearTimeout(timer.current);
    setMessage(nextMessage);
    timer.current = setTimeout(() => setMessage(""), 3500);
  }

  return { message, copyEmail };
}
