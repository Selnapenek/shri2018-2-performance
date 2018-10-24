// bacsic vars
const path = require('path');
const webpack = require('webpack');

// aditional plugins
// const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const BrotliPlugin = require('brotli-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


// module settings
module.exports = {
    context: path.resolve(__dirname, 'src'),

    entry: {
        bundle: [
            //'./js/libs.js',
            './js/scripts.js',

            // './css/common.css',
            // './css/pt_sans.css',
            // './css/bootstrap.css',
        ],
        // libs: [ из-за этого дерьма почему-то верстка типо слетает ...
        //     './js/libs.js',
        // ]
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

        new CopyWebpackPlugin([{
                from: './assets/img',
                to: 'assets'
            },
            {
                from: './assets/svg',
                to: 'assets'
            },
            {
                from: './assets/fonts',
                to: 'fonts'
            }

        ]),

        new ImageminPlugin({
            test: /\.(jpe?g|png|webp|svg)$/i,
        }),

        new MiniCssExtractPlugin({
            filename: 'styles.css',
        }),

        new BrotliPlugin({
            asset: '[path].br[query]',
            test: /\.(js|css|html|svg|png|jpe?g)$/,
            threshold: 10240,
            minRatio: 0.8
        })
    ],

    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                extractComments: true
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
                        cacheDirectory: true,
                        presets: ['@babel/preset-env']
                    }
                }
            },

            // css
            // {
            //     test: /\.css$/,
            //     use: [
            //         MiniCssExtractPlugin.loader,
            //         {
            //             loader: 'css-loader',
            //             options: {
            //                 url: false
            //             }
            //         },
            //     ]
            // },

            // Img TODO: таксс.... не работает и свг тоже =(
            // {
            //     test: /\.(png|jpeg)$/,
            //     loaders: [{
            //             loader: 'file-loader',
            //             options: {
            //                 name: '[path][name].[ext]'
            //             },
            //         },
            //         'img-loader'
            //     ],
            // },

            // // svg
            // {
            //     test: /\.svg/,
            //     loader: 'svg-url-loader',
            //     options: {}
            // },

            // // fonts
            // {
            //     test: /\.(woff | woff2 | eot | ttf | of )/,
            //     use: [{
            //         loader: 'file-loader',
            //         options: {
            //             name: '[path][name].[ext]'
            //         },
            //     }]
            // },
        ],
    },

}