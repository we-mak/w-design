const base = require("../../jest.config.base.js");
const pack = require("./package.json");

module.exports = {
  ...base,
  name: pack.name,
  displayName: pack.name,
  rootDir: "../..",
  testMatch: [
    `<rootDir>/packages/masonry/**/*.test.+(ts|tsx|js)`,
    `<rootDir>/packages/masonry/**/__tests__/*.+(ts|tsx|js)`
  ]
};
