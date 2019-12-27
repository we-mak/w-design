const base = require("../../jest.config.base.js");
const pack = require("./package.json");

module.exports = {
  ...base,
  name: pack.name,
  displayName: pack.name,
  rootDir: "../..",
  testMatch: [
    `<rootDir>/packages/core/**/*.test.+(ts|tsx|js)`,
    `<rootDir>/packages/core/**/__tests__/*.+(ts|tsx|js)`
  ]
};
