module.exports = {
  clearMocks: true,
  coverageDirectory: "coverage",
  coverageReporters: ["text", "clover"],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },
  globals: {
    "ts-jest": {
      extends: "./babel.config.js"
    }
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  notify: true,
  notifyMode: "always",
  roots: ["<rootDir>packages"],
  testMatch: ["**/__tests__/*.+(ts|tsx|js)", "**/*.test.+(ts|tsx|js)"],
  transform: {
    ".*.tsx?$": "ts-jest",
    ".+\\.(css|styl|less|sass|scss)$": "jest-transform-css"
  },
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  coveragePathIgnorePatterns: [
    ".*\\.d\\.ts|tsx",
    "<rootDir>/node_modules/",
    "<rootDir>/pacakages/*/node_modules/"
  ]
};
