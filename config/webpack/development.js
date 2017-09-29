var path                    = require('path')
var Webpack                 = require('webpack')
var HtmlWebpackPlugin       = require('html-webpack-plugin')

var DefinePlugin            = new Webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('development') } })
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({ template: 'index.html' })

module.exports = {
    entry: "./src/App.js",
    output: {
        path: path.resolve(__dirname, './../../public/'),
        filename: "bundle.js"
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
    plugins: [HTMLWebpackPluginConfig]
}
