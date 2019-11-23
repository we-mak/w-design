import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import url from "rollup-plugin-url";
import svgr from "@svgr/rollup";
import babel from "rollup-plugin-babel";
import postcss from "rollup-plugin-postcss";
import path from "path";
import pkg from "./package.json";

const PACKAGE_ROOT_PATH = process.cwd();
const PKG_JSON = require(path.join(PACKAGE_ROOT_PATH, "package.json"));

const globals = {
  react: "React",
  "styled-components": "styled"
};

export default {
  input: "src/index.ts",
  external: [
    // only react, styled-components are peer dependencies,
    // temporary set it as global peerDependencies
    ...Object.keys(pkg.peerDependencies || {}),
    ...Object.keys(PKG_JSON.dependencies || {})
  ],
  output: [
    {
      file: PKG_JSON.main,
      format: "cjs",
      globals
    },
    {
      file: PKG_JSON.module,
      format: "es",
      globals
    }
  ],
  plugins: [
    peerDepsExternal(),
    url(),
    svgr(),
    postcss({
      extensions: [".css"]
    }),
    resolve(),
    typescript({
      rollupCommonJSResolveHack: true,
      clean: true,
      declaration: true
    }),
    babel({
      exclude: ["node_modules/**"],
      presets: [
        ["@babel/preset-env", { modules: false, loose: true }],
        "@babel/preset-react"
      ],
      plugins: ["babel-plugin-styled-components"]
    }),
    commonjs()
  ]
};
