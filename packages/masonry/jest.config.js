const base = require("../../jest.config.base.js");
const pack = require("./package.json");

module.exports = {
  ...base,
  name: pack.name,
  displayName: pack.name,
  rootDir: "../.."
};
