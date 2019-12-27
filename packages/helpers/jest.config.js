const base = require("../../jest.config.base.js");
const pack = require("./package.json");

module.exports = {
  ...base,
  name: pack.name,
  displayName: pack.name,
  rootDir: "../..",
  testMatch: [`<rootDir>/packages/helpers/__tests__/*.+(ts|tsx|js)`],
  coveragePathIgnorePatterns: [
    ...base.coveragePathIgnorePatterns,
    "styled-helpers.ts" // ignore styled because it used styled functions
  ]
};
