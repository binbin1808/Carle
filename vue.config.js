module.exports = {
  lintOnSave: false, // 取消了eslint代码校验
  // chainWebpack: config => {
  //   // 这里是对环境的配置，不同环境对应不同的BASE_URL，以便axios的请求地址不同
  //   config.plugin('define').tap(args => {
  //     args[0]['process.env'].BASE_URL = JSON.stringify(process.env.BASE_URL)
  //     return args
  //   })
  // },
  devServer: {
    overlay: { // 让浏览器同时显示错误和警告
      warnings: true,
      errors: true
    },
    proxy: { // 配置代理
      '/api': {
        target: 'http://192.168.0.112:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }
      }
    }
  }
  // publicPath: ''
}
