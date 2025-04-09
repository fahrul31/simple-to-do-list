const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlMinimizerPlugin = require('html-minimizer-webpack-plugin');
const { stat } = require('fs');

module.exports = {
    mode: process.env.NODE_ENV || 'development',
    entry: path.resolve(__dirname, 'src/utils/', 'app.js'),
    devServer: {
        static: {
            directory: path.join(__dirname, 'build')
        },
        port: 5500
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: `app${process.env.NODE_ENV === 'production' ? '-[contenthash]' : ''}.js`,
        clean: true
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: `app${process.env.NODE_ENV === 'production' ? '-[contenthash]' : ''}.css`
        }),
        new HtmlWebpackPlugin({
            template: "./src/utils/index.html"
        }
        ),
        new HtmlMinimizerPlugin({
            test: /\.html$/i,
            minimizerOptions: {
                html: {
                    collapseWhitespace: true,
                    removeComments: true,
                },
            },
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader"
                ],
            }
        ]
    }
}