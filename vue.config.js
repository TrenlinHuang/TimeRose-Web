const title = 'CID Indexing & Content Routing'
module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = title;
        return args
      })
  }
}
