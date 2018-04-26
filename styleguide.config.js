module.exports = {
  components: "src/components/**/*.{ts,tsx}",
  propsParser: require("react-docgen-typescript").parse,
  ignore: [
    "src/setupTests.ts",
    "**/*/index.tsx",
    "**/*\\Wrap.tsx",
    "**/*/Root.tsx",
    "**/*.spec.ts",
    "**/*.spec.tsx",
    "**/*.test.ts",
    "**/*.test.tsx",
    "**/*.d.ts"
  ]
};
