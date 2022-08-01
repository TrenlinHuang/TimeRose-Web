const title = 'CID Indexing & Content Routing'
module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? './'
        : './',
    outputDir: './dist',
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
