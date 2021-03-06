module.exports = {
  clearMocks: true,
  coverageDirectory: "coverage",
  coverageReporters: ["text", "clover"],
  // coverageThreshold: {
  //   global: {
  //     branches: 80,
  //     functions: 80,
  //     lines: 80,
  //     statements: 80
  //   }
  // },
  collectCoverage: true,
  coveragePathIgnorePatterns: [
    ".*\\.d\\.ts|tsx",
    ".js", // ignore built js files
    "<rootDir>/node_modules/"
  ],
  globals: {
    "ts-jest": {
      extends: "./babel.config.js"
    }
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  roots: ["<rootDir>/packages"],
  testMatch: ["**/__tests__/*.+(ts|tsx)", "**/*.test.+(ts|tsx)"],
  transform: {
    ".*.tsx?$": "ts-jest",
    ".+\\.(css|styl|less|sass|scss)$": "jest-transform-css"
  },
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"]
};
