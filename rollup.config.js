import external from "rollup-plugin-peer-deps-external";
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
  external: [
    "stream",
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {})
  ],
  output: [
    {
      file: pkg.main,
      format: "cjs",
      exports: "named",
      sourcemap: true
    },
    {
      file: pkg.module,
      format: "es",
      exports: "named",
      sourcemap: true
    }
  ],
  plugins: [
    external({
      includeDependencies: false
    }),
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
      plugins: ["babel-plugin-styled-components"],
      exclude: "node_modules/**"
    }),
    commonjs()
    //   {
    //   include: "node_modules/**",
    //   namedExports: {
    //     "node_modules/react-is/index.js": ["isElement", "isValidElementType", "ForwardRef"],
    //     // "node_modules/styled-components/node_modules/react-is/index.js": [
    //     //   "isElement",
    //     //   "isValidElementType",
    //     //   "ForwardRef"
    //     // ],
    //     "node_modules/react/index.js": [
    //       "cloneElement",
    //       "createContext",
    //       "Component",
    //       "createElement",
    //       "useEffect"
    //     ]
    //   }
    // }
  ]
};
