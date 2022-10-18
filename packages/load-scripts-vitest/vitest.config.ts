import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    environmentOptions: {
      jsdom: {
        resources: "usable",
        runScripts: "dangerously",
      },
    },
  },
});
