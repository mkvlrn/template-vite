import react from '@vitejs/plugin-react-swc';
import { defineConfig, mergeConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig as defineTestConfig } from 'vitest/config';

const baseConfig = defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: { port: 3000 },
});

const testConfig = defineTestConfig({
  test: {
    coverage: {
      reportsDirectory: `coverage`,
      reporter: [`lcov`, `html`, `text`],
      all: true,
      include: [`src`],
      exclude: [
        `**/*.{test,spec}.?(c|m)[jt]s?(x)`,
        `**/*.d.ts`,
        `src/main.ts?(x)`,
      ],
    },
    env: { NODE_ENV: `test` },
    environment: `jsdom`,
    passWithNoTests: true,
    setupFiles: [`./vitest.setup.ts`],
  },
});

export default mergeConfig(baseConfig, testConfig);
