const path = require("path")

module.exports = {
  devServer: {
    // https://toquetoc.gcch.fr pour la prod
    proxy: "https://toquetoc.gcch.fr/"
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
      },
      extensions: [".js", ".vue"]
    }
  }
}
