import typescript from "rollup-plugin-typescript3";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import url from "rollup-plugin-url";
import svgr from "@svgr/rollup";

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
    url(),
    svgr(),
    resolve(),
    typescript({
      rollupCommonJSResolveHack: true,
      clean: true
    }),
    commonjs({
      include: "node_modules/**",
      namedExports: {
        "node_modules/react-is/index.js": [
          "isElement",
          "isValidElementType",
          "ForwardRef"
        ],
        "node_modules/react/index.js": [
          "cloneElement",
          "createContext",
          "Component",
          "createElement",
          "useEffect"
        ]
      }
    })
  ]
};
