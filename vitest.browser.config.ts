import react from "@vitejs/plugin-react";
import { preview } from "@vitest/browser-preview";
import { defineConfig } from "vitest/config";

process.env.BROWSER ??=
  process.platform === "darwin" ? "Google Chrome" : "chrome";

export default defineConfig({
  plugins: [react()],
  server: {
    watch: { usePolling: true, interval: 300 },
  },
  test: {
    include: ["src/test/**/*.test.tsx"],
    setupFiles: ["./src/test/setup.browser.ts"],
    restoreMocks: true,
    watch: true,
    browser: {
      enabled: true,
      headless: false,
      ui: true,
      provider: preview(),
      instances: [{ browser: "chromium" }],
    },
  },
});
