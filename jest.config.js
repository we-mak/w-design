module.exports = {
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  transform: {
    ".*.tsx?$": "ts-jest",
    ".+\\.(css|styl|less|sass|scss)$": "jest-transform-css"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}", "!src/index.tsx"],
  coveragePathIgnorePatterns: [".*\\.d\\.ts", "<rootDir>/node_modules/", "src/common/"],
  verbose: true
};
