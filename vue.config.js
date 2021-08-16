module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/vue3-cli-notes/production/'
        : '/',
    outputDir: process.env.NODE_ENV === 'production'
        ? 'production'
        : 'dev',
    productionSourceMap: false,
    assetsDir: 'assets',
    filenameHashing: true
}