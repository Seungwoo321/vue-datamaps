
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    configureWebpack: {
        output: {
            libraryExport: 'default'
        },
        plugins: [
            new CopyWebpackPlugin([
                {
                    from: path.join(__dirname, 'public'),
                    to: path.join(__dirname, 'dist/public'),
                    toType: 'dir'
                }
            ])
        ]
    },
    indexPath: '/demo/',
    pages: {
        index: {
            entry: 'demo/main.js',
            template: 'demo/index.html',
            filename: 'index.html',
            title: 'Index Page'
        }
    }
}
