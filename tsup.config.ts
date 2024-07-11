import {defineConfig} from "tsup";

export default defineConfig({
    name: "console-log-message",
    format: ["cjs", "esm"],
    entry: ['src/index.ts'] ,
    dts: true,
    shims: true,
    skipNodeModulesBundle: true,
    clean: true
});