const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const path = require("path");

module.exports = {
  entry: {
    bundle: path.resolve(__dirname, "src/index.tsx"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name][contenthash].js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  resolve: { extensions: [".tsx", ".ts", ".jsx", ".js"] },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "public/index.html",
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/assets"),
          to: path.resolve(__dirname, "dist/assets"),
          noErrorOnMissing: true,
        },
      ],
    }),
  ],
};
