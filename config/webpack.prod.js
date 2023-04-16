const path = require('path')
const webpackMerge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base.js')
const terserPlugin = require("terser-webpack-plugin")
const cssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

let webpackProdConfig = {
    mode: 'production',
    entry: './src/main.js',
    output: {
        filename: 'simple-memory.js',
        chunkFilename: 'script/[name].[contenthash:8].js',
        path: path.resolve(__dirname, '../dist'),
        clean: true
    },
    devtool: false,
    optimization: {
        minimize: true,
        minimizer: [
            new cssMinimizerPlugin({
                minimizerOptions: {
                    preset: ["default", {
                        discardComments: {removeAll: true},
                    },
                    ],
                },
                parallel: true,
            }),
            new terserPlugin({
                parallel: true,
                extractComments: false,
            }),
            new CompressionPlugin({
                algorithm: 'gzip',
                test: /\.js$|\.html$|\.css$/,
                minRatio: 1,
                threshold: 10240,
                deleteOriginalAssets: false,
            })
        ],
    },
};

module.exports = webpackMerge.merge(webpackBaseConfig, webpackProdConfig)