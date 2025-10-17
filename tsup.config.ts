import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/**!(*.test | *.spec.ts"],
  format: ["cjs", "esm"],
  splitting: true,
  bundle: false,
  sourcemap: true,
  treeshake: true,
  dts: true,
  clean: true,
  globalName: "Codelper",
});
