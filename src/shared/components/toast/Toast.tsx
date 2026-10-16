import "./Toast.css";
export default function Toast({ message }: { message: string }) {
  return (
    <div
      className={`toast${message ? " visible" : ""}`}
      id="toast"
      role="status"
      aria-live="polite"
    >
      {message}
    </div>
  );
}
