module.exports = {
  presets: [
    ["@babel/preset-env", { modules: false, loose: true }],
    "@babel/preset-react",
    "@babel/preset-typescript"
  ],
  plugins: [
    [
      "babel-plugin-styled-components",
      { ssr: true, displayName: true, preprocess: false }
    ]
  ],
  env: {
    development: {
      plugins: [
        [
          "babel-plugin-styled-components",
          { ssr: true, displayName: true, preprocess: false }
        ]
      ]
    },
    production: {
      ignore: ["**/*.test.tsx", "**/*.test.ts", "__snapshots__", "__tests__"],
      plugins: [
        [
          "babel-plugin-styled-components",
          { ssr: true, displayName: true, preprocess: false }
        ]
      ]
    }
  },
  ignore: ["node_modules"]
};
