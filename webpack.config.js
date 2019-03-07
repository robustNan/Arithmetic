const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        host: 'localhost',
        port: 8888
    },
    entry: {
        arithmetic: './src/script/arithmetic.js',
        index: './src/script/index.js'
    },
    mode: 'development',
    module: {
        rules: [{
            test: /\.styl$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'stylus-loader']
        }]
    },
    output: {
        filename: './script/[name].js',
        library: 'arithmetic',
        libraryTarget: 'umd',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            favicon: false,
            inject: true,
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: './style/[name].css'
        }),
        new CleanWebpackPlugin(['dist'])
    ]
};
