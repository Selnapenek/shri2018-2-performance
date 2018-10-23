// bacsic vars
const path = require('path');
const webpack = require('webpack');

// aditional plugins
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");


// module settings
module.exports = {
    context: path.resolve(__dirname, 'src'),

    entry: {
        bundle: [
            './js/scripts.js',
            './scss/styles.scss'
        ]
    },

    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '../'
    },

    plugins: [
        new ExtractTextPlugin({
            filename: './css/styles.bundle.css',
        }),

        new MiniCssExtractPlugin({
            filename: './css/styles.bundle.css',
            allChunks: true,
        }),
    ],

    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },

    module: {
        rules: [
            // babel
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            },

            // scss
            {
                test: /\.scss$/,
                include: path.resolve(__dirname, 'src/scss'),
                use: ExtractTextPlugin.extract({
                    use: [{
                            loader: "css-loader",
                            options: {
                                minimize: true,
                                url: false
                            }
                        },
                        {
                            loader: "sass-loader",
                        }
                    ]
                })
            },

            // css
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            }
        ],
    },

}