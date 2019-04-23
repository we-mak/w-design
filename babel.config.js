module.exports = {
  presets: [["@babel/preset-env", { modules: false, loose: true }], "@babel/preset-react"],
  env: {
    test: {
      presets: [["react-app"]]
    }
  },
  plugins: [["babel-plugin-styled-components", "transform-runtime"]]
};
