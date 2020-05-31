const path = require('path');
const WasmPackPlugin = require('@wasm-tool/wasm-pack-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, args) => {
    const isProductionMode = (args.mode === 'production');

    return {
        entry: './index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: isProductionMode ? '[name].[contenthash].js' : '[name].[hash].js',
        },
        node: {
            fs: 'empty'
        },
        plugins: [
            new WasmPackPlugin({
                crateDirectory: path.resolve(__dirname, '.')
            }),
            new HtmlWebpackPlugin({
                template: 'index.html'
            }),
            new webpack.ProvidePlugin({
                TextEncoder: ['text-encoding', 'TextEncoder'],
                TextDecoder: ['text-encoding', 'TextDecoder']
            })
        ]
    };
}