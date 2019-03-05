const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        host: 'localhost',
        port: 8888
    },
    devtool: 'inline-source-map',
    entry: {
        index: './src/script/index.js',
        arithmetic: './src/script/arithmetic.js'
    },
    output: {
        filename: './script/[name].bundle.js',
        library: 'arithmetic',
        libraryTarget: "umd",
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            favicon: false,
            template: './src/index.html'
        }),
        new CleanWebpackPlugin({
            path: './dist'
        })
    ]
};