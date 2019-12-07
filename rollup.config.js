import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";
import commonjs from "rollup-plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import url from "@rollup/plugin-url";
import svgr from "@svgr/rollup";
import babel from "rollup-plugin-babel";
import postcss from "rollup-plugin-postcss";
import path from "path";
import pkg from "./package.json";

const PACKAGE_ROOT_PATH = process.cwd();
const PKG_JSON = require(path.join(PACKAGE_ROOT_PATH, "package.json"));
// const PKG_INPUT = require(path.join(PACKAGE_ROOT_PATH, "pkInput.json"));

const globals = {
  react: "React",
  "react-dom": "ReactDOM",
  "styled-components": "styled"
};

const extensions = [".js", ".jsx", ".ts", ".tsx"];

export default {
  input: "src/index.ts",
  external: [
    ...Object.keys(pkg.peerDependencies || {}),
    ...Object.keys(PKG_JSON.dependencies || {})
  ],
  output: [
    {
      name: PKG_JSON.name,
      file: PKG_JSON.main,
      format: "cjs",
      globals
    },
    {
      name: PKG_JSON.name,
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
    resolve({
      extensions
    }),
    typescript({
      tsconfig: "tsconfig.json",
      rollupCommonJSResolveHack: true,
      clean: true
    }),
    babel({
      runtimeHelpers: true,
      exclude: ["../../node_modules/**"],
      configFile: "../../babel.config.js"
    }),
    commonjs({
      include: "../../node_modules/**"
    })
  ]
};
