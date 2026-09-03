const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const package = require("../package.json");
const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
 mode: "production",
 output: {
  filename: "[name].[contenthash].js",
 },
 plugins: [
  new ModuleFederationPlugin({
   name: "auth",
   filename: "remoteEntry.js",
   exposes: {
    "./AuthIndex": "./src/bootstrap",
   },
   shared: package.dependencies,
  }),
 ],
};

module.exports = merge(commonConfig, prodConfig);
