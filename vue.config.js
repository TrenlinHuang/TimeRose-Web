let conf = require("./public/config")
module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = `${conf.title} - ${conf.subtitle}`;
        return args
      })
  }
}
