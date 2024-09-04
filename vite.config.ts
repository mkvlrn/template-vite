import * as react from "@vitejs/plugin-react";
import { defineConfig, mergeConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig as defineTestConfig } from "vitest/config";
import { compilerOptions } from "./tsconfig.json";

const { outDir } = compilerOptions;

const baseConfig = defineConfig({
  plugins: [react.default(), tsconfigPaths()],
  server: { port: 3000 },
  build: {
    outDir,
  },
});

const testConfig = defineTestConfig({
  test: {
    coverage: {
      reportsDirectory: "coverage",
      reporter: ["lcov", "html", "text"],
      all: true,
      include: ["src"],
    },
    env: { NODE_ENV: "test" },
    environment: "jsdom",
    passWithNoTests: true,
    setupFiles: ["./vitest.setup.ts"],
  },
});

export default mergeConfig(baseConfig, testConfig);
