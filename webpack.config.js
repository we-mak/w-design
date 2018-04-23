var path = require("path");

module.exports = {
  cache: true,
  entry: "./src/main.tsx",
  output: {
    path: path.resolve(__dirname, "./lib/"),
    filename: "[name].js",
    publicPath: "/lib/"
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        loader: "babel-loader!ts-loader"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          "file-loader?hash=sha512&digest=hex&name=img/[hash].[ext]",
          "image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false"
        ]
      }
    ]
  },
  plugins: [],
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  }
};
