module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/vue-cli-notes/public/'
        : '/',
    outputDir: process.env.NODE_ENV === 'production'
        ? 'public'
        : 'dev',
    productionSourceMap: false,
    assetsDir: 'assets',
    filenameHashing: true
}