module.exports = {
  presets: [
    ["@babel/preset-env", { modules: false, loose: true }],
    "@babel/preset-react",
    "@babel/preset-typescript"
  ],
  plugins: [
    ["styled-components", { ssr: true, displayName: true, preprocess: false }]
  ],
  env: {
    build: {
      ignore: ["**/*.test.tsx", "**/*.test.ts", "__snapshots__", "__tests__"]
    }
  },
  ignore: ["node_modules"]
};
