module.exports = {
  plugins: {
    'autoprefixer': {
      browsers: ['Android >= 4.0', 'iOS >= 7']
    },
    'postcss-px2rem-exclude': {
      remUnit: 37.5,
      exclude: /(\/|\\)(node_modules)(\/|\\)/,
      propList: ['*']
    }
  }
}
