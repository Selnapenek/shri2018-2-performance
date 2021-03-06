// bacsic vars
const path = require('path');
const webpack = require('webpack');

// aditional plugins
// const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
// const ExtractTextPlugins = require("extract-text-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
// const BrotliPlugin = require('brotli-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');


// module settings
module.exports = {
    context: path.resolve(__dirname, 'src'),

    entry: {
        bundle: [
            './js/scripts.js',
        ],
    },
    // TODO: наверное не правильно, но в данном случае думаю лучше вместо dist использовать просто корень (типо как и было в исходном варианте)
    output: {
        filename: 'scripts.[name].js',
        path: path.resolve(__dirname),
        publicPath: '../'
    },

    plugins: [
        // new CleanWebpackPlugin(['css','js']),

        // new BundleAnalyzerPlugin(),

        // new CopyWebpackPlugin([{
        //         from: './assets/img',
        //         to: 'assets'
        //     },
        //     {
        //         from: './assets/svg',
        //         to: 'assets'
        //     },
        //     {
        //         from: './assets/fonts',
        //         to: 'fonts'
        //     }

        // ]),

        // Оптимизировал по максимуму
        // new ImageminPlugin({
        //     test: /\.(jpe?g|png|webp|svg)$/i,
        // }),


        // new HtmlWebpackPlugin({
        //     inject: false,
        //     // minify:{
        //     //     collapseWhitespace: true,
        //     //     removeComments: true,
        //     //     removeRedundantAttributes: true,
        //     //     removeScriptTypeAttributes: true,
        //     //     removeStyleLinkTypeAttributes: true,
        //     //     useShortDoctype: true,
        //     //     minifyCSS: true
        //     // },
        //     template: './index.html',
        //     filename: 'index.html'
        // }),

    ],

    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                extractComments: true
            }),
        ],
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
                        cacheDirectory: true,
                        presets: ['@babel/preset-env']
                    }
                }
            },
        ],
    },
    

}