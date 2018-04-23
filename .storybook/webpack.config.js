// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

const path = require("path");

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.resolve.extensions.push(".ts", ".tsx");

  defaultConfig.module.rules[0].test = /\.(ts|tsx)$/;
  defaultConfig.module.rules[0].query.presets = ["@babel/preset-env"];

  defaultConfig.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve("ts-loader"),
    include: [path.resolve(__dirname, "../src")],
    options: {
      transpileOnly: true
    }
  });

  // [ts-loader, babel-loader, ...]

  return defaultConfig;
};
