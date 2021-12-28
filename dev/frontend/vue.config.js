module.exports = {
  devServer: {
    // proxy: "http://localhost:8082/"
  },
  configureWebpack: {
    devServer: {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    }
  }
}
