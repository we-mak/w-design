module.exports = {
  setupFiles: ["<rootDir>/src/setupTests.ts"],
  transform: {
    ".*.tsx?$": "ts-jest"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  collectCoverageFrom: ["<rootDir>/src/**/*.{js,jsx,ts,tsx}"],
  coveragePathIgnorePatterns: [
    ".*\\.d\\.ts",
    "<rootDir>/node_modules/",
    "src/common/"
  ]
};
