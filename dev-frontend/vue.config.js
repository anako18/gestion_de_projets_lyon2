module.exports = {
  devServer: {
    proxy: 'http://localhost:3128/'
  },
  configureWebpack: {
    devServer: {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    }
  }
}