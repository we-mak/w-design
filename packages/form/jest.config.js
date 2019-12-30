const base = require("../../jest.config.base.js");
const pack = require("./package.json");

module.exports = {
  ...base,
  name: pack.name,
  displayName: pack.name,
  rootDir: "../..",
  testMatch: [
    `<rootDir>/packages/form/**/*.test.+(ts|tsx)`,
    `<rootDir>/packages/form/**/__tests__/*.+(ts|tsx)`
  ]
};
