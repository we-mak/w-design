let presets = [
  "@babel/preset-react",
  "@babel/preset-typescript",
  [
    "@babel/preset-env",
    {
      modules: process.env.BABEL_ENV === "es" ? false : "commonjs",
      loose: true
    }
  ]
];

const productionPlugins = [
  ["babel-plugin-styled-components", { ssr: true, displayName: true, preprocess: false }]
];
module.exports = {
  presets,
  plugins: [
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    ["@babel/plugin-proposal-object-rest-spread", { loose: true }],
    "@babel/plugin-transform-runtime",
    ["babel-plugin-styled-components", { ssr: true, displayName: true, preprocess: false }]
  ],
  env: {
    dev: {
      plugins: ["babel-plugin-styled-components"]
    },
    cjs: {
      ignore: [
        "**/*.d.ts",
        "**/*.test.tsx",
        "**/*.test.ts",
        "**/*.test.js",
        "__snapshots__",
        "__tests__"
      ],
      plugins: productionPlugins
    },
    es: {
      ignore: [
        "**/*.d.ts",
        "**/*.test.tsx",
        "**/*.test.ts",
        "**/*.test.js",
        "__snapshots__",
        "__tests__"
      ],
      plugins: productionPlugins
    }
  },
  ignore: ["../../node_modules", "node_modules"]
};
