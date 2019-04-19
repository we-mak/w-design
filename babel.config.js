module.exports = {
  presets: [["@babel/preset-env", { modules: false }], "@babel/preset-react"],
  env: {
    test: {
      presets: [["react-app"]]
    }
  },
  plugins: ["babel-plugin-styled-components"]
};
