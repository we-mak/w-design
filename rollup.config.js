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

const globals = {
  react: "React",
  "styled-components": "styled"
};

export default {
  input: "src/index.tsx",
  external: [...Object.keys(pkg.peerDependencies || {}), ...Object.keys(pkg.dependencies || {})],
  output: [
    {
      file: pkg.main,
      format: "cjs",
      globals
    },
    {
      file: pkg.module,
      format: "es",
      globals
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
      exclude: "node_modules/**"
    }),
    commonjs()
  ]
};
