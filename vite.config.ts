import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    coverage: {
      reportsDirectory: 'coverage',
      reporter: ['lcov', 'html', 'text'],
      all: true,
      include: ['src'],
      exclude: ['**/*.{test,spec}.?(c|m)[jt]s?(x)', '**/*.d.ts', 'src/main.ts?(x)'],
    },
    env: { NODE_ENV: 'test' },
    environment: 'jsdom',
    passWithNoTests: true,
    setupFiles: ['./vitest.setup.ts'],
  },
});
