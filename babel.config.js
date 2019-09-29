module.exports = {
  presets: [["@babel/preset-env", { modules: false, loose: true }], "@babel/preset-react"],
  plugins: [["babel-plugin-styled-components", "transform-runtime"]]
};
