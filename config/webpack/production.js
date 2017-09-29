var path                    = require('path')
var Webpack                 = require('webpack')
var HtmlWebpackPlugin       = require('html-webpack-plugin')
var CleanWebpackPlugin      = require('clean-webpack-plugin')

var DefinePlugin            = new Webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') } })
var CleanPlugin             = new CleanWebpackPlugin(['public'])
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({ template: 'index.html' })
var UglifyPlugin            = new Webpack.optimize.UglifyJsPlugin({ compress: { warnings: false }})
var CommonChunksPlugin      = new Webpack.optimize.CommonsChunkPlugin({ names: ['vendor', 'manifest'] })

module.exports = {
    entry: {
        vendor: ['react', 'react-dom'],
        app: './src/App.js',
    },
    output: {
        path: path.resolve(__dirname, './../../public/'),
        filename: '[name].[chunkhash].js',
        chunkFilename: '[chunkhash].bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    plugins: [CleanPlugin, DefinePlugin, HTMLWebpackPluginConfig, UglifyPlugin, CommonChunksPlugin]
}
