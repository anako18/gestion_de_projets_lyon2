module.exports = {
  devServer: {
    proxy: 'http://localhost:8081/'
  },
  configureWebpack: {
    devServer: {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    }
  }
}