const withPlugins = require("next-compose-plugins");
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/
});
const withCSS = require("@zeit/next-css");

module.exports = withPlugins(
  [
    [
      withMDX,
      {
        pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"]
      }
    ],
    [
      withCSS,
      {
        cssLoaderOptions: {
          url: false
        }
      }
    ]
  ],
  {
    assetPrefix: process.env.NODE_ENV === "production" ? "/w-design" : ""
  }
);
