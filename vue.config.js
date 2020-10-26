// const JsonMinimizerPlugin = require('json-minimizer-webpack-plugin')
module.exports = {
    // chainWebpack: config => {
    //     config.module
    //         .rule('file')
    //         .test(/\.json/i)
    //         .type('javascript/auto')
    //         .use('file-loader')
    //         .options({
    //             name: '[name].[ext]'
    //         })
    //         .loader('file-loader')
    //         .end()
    // },
    // productionSourceMap: false,
    configureWebpack: {
        output: {
            libraryExport: 'default'
        }
        // optimization: {
        //     minimize: true,
        //     minimizer: [
        //         new JsonMinimizerPlugin()
        //     ]
        // }
    }
}
