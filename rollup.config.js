import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import alias from "rollup-plugin-alias";
import url from "rollup-plugin-url";
import svgr from "@svgr/rollup";
import babel from "rollup-plugin-babel";
import path from "path";
import pkg from "./package.json";

export default {
  input: "src/index.tsx",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true
    },
    {
      file: pkg.module,
      format: "es",
      sourcemap: true
    }
  ],
  plugins: [
    peerDepsExternal(),
    url(),
    svgr(),
    resolve(),
    typescript({
      rollupCommonJSResolveHack: true,
      clean: true,
      declaration: true
    }),
    alias({
      "styled-components": path.resolve(__dirname, "node_modules", "styled-components")
    }),
    babel({
      // plugins: ["babel-plugin-styled-components", "external-helpers"],
      exclude: "node_modules/**"
    }),
    commonjs()
  ],
  globals: { "styled-components": "styled" }
};
