const HTMLWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");

module.exports = {
  entry: "./src/client/index.js",
  mode: "development",
  devtool: "source-map",
  stats: "verbose",
  module: {
    rules: [
      {
        test: "/.js$/",
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.(jpg|png|svg|jpg|gif|webp)$/,
        loader: "file-loader",
      },
    ],
  },
  devServer: {
    compress: true,
    historyApiFallback: true,
    hot: true,
    inline: true,
    host: "localhost", // Defaults to `localhost`
    port: 8081, // Defaults to 8080
    proxy: {
      "^/api/*": {
        target: "http://localhost:8081/api/",
        secure: false,
      },
    },
  },
  plugins: [
    new HTMLWebPackPlugin({
      template: "./src/client/view/index.html",
      filename: "index.html",
    }),
    new CleanWebpackPlugin({
      dry: true,
      verbose: true,
      cleanStaleWebpackAssets: true,
      protectWebpackAssets: false,
    }),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
};
