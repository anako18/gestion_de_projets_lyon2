const StyleLintPlugin = require("stylelint-webpack-plugin");

module.exports = {
  devServer: {
    // proxy: "http://localhost:8082/"
  },
  configureWebpack: {
    devServer: {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    },
    plugins: [
      new StyleLintPlugin({
        files: ["src/**/*.{vue,scss}"]
      })
    ]
  }
};
