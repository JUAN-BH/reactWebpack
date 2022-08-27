const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  devserver: {
    devServer: {
      static: {
        directory: path.join(__dirname, "dist"),
        watch: true,
      },
      watchFiles: path.join(__dirname, "./**"),
      compress: true,
      historyApiFallback: true,
      port: 3008,
      open: true,
    },
  },
};
