import { defineConfig } from "vite";
import nodeResolve from "@rollup/plugin-node-resolve"; // Capitalized `nodeResolve`

export default defineConfig({
  test: {
    globals: true,
    files: "tests/**/*.test.ts",
  },
  build: {
    lib: {
      entry: "src/index.ts",
      name: "quick-route",
      fileName: "quick-route",
      formats: ["esm", "cjs"],
    },
    rollupOptions: {
      external: ["node:fs", "node:crypto", "path", "os", "crypto"],
      plugins: [nodeResolve()], // This line should work now
    },
  },
});
