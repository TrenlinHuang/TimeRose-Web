let conf = require("./public/config")
module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = `TimeRose - Indexing the dataverse`;
        return args
      })
  }
}
