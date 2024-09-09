import * as react from "@vitejs/plugin-react";
import { defineConfig, mergeConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig as defineTestConfig } from "vitest/config";
import { compilerOptions } from "./tsconfig.json";

const { outDir } = compilerOptions;
const { PORT = "3000" } = process.env;

const baseConfig = defineConfig({
  plugins: [react.default(), tsconfigPaths()],
  server: { port: Number(PORT) },
  build: {
    outDir,
    emptyOutDir: true,
  },
});

const testConfig = defineTestConfig({
  test: {
    coverage: {
      all: true,
      clean: true,
      cleanOnRerun: true,
      reportsDirectory: "coverage",
      reporter: ["lcov", "html", "text"],
      include: ["src"],
    },
    env: { NODE_ENV: "test" },
    environment: "jsdom",
    passWithNoTests: true,
    setupFiles: ["./vitest.setup.ts"],
  },
});

export default mergeConfig(baseConfig, testConfig);
