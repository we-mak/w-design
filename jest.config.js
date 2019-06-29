module.exports = {
  transform: {
    ".*.tsx?$": "ts-jest"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}", "!src/index.tsx"],
  coveragePathIgnorePatterns: [".*\\.d\\.ts", "<rootDir>/node_modules/", "src/common/"]
};
