const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin"); 

module.exports = [
  new ForkTsCheckerWebpackPlugin(),
  new CopyPlugin({
    patterns: [
      { from: "src/main/manifest.json", to: "main_window" },
      { from: "src/main/src", to: "main_window/src" },
    ],
  }),
];
