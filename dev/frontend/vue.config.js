const path = require("path")

module.exports = {
  devServer: {
    // proxy: "http://localhost:8082/"
  },
  chainWebpack: config => {
    config.resolve.alias.set("@", path.join(__dirname, "./src"))
  },
  configureWebpack: {
    devServer: {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname),
        "@ai": path.resolve(__dirname, "src/assets/images"),
        "@m": path.resolve(__dirname, "src/modules"),
        "@s": path.resolve(__dirname, "src/styles"),
        "@v": path.resolve(__dirname, "src/views")
      }
    }
  }
}
