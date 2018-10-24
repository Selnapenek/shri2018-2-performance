// bacsic vars
const path = require('path');
const webpack = require('webpack');

// aditional plugins
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default
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
            // './scss/styles.scss'
        ]
    },
    // TODO: наверное не правильно, но в данном случае думаю лучше вместо dist использовать просто корень (типо как и было в исходном варианте)
    output: {
        filename: 'scripts.js',
        path: path.resolve(__dirname),
        publicPath: '../'
    },

    plugins: [
        // new CleanWebpackPlugin(['css','js']),

        new CopyWebpackPlugin([
            {
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

        // new ImageminPlugin({
        //     test: /\.(jpe?g|png|gif|svg)$/i,
        //     pngquant: {
        //         quality: '70-80'
        //     }
        // }),

        new ExtractTextPlugin({
            filename: './styles.css',
        }),

        // new MiniCssExtractPlugin({
        //     filename: './styles.css',
        //     allChunks: true,
        // }),
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
                        // {
                        //     loader: "postcss-loader",
                        //     options: {
                        //         ident: 'postcss',
                        //         plugins: [
                        //             require('postcss-preset-env'),
                        //         ]
                        //     }
                        // },
                        "sass-loader",
                    ],
                    fallback: 'style-loader',
                })
            },

            // css
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },

            // Img TODO: таксс.... не работает и свг тоже =(
            {
                test: /\.(png|jpeg)$/,
                loaders: [{
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]'
                        },
                    },
                    'img-loader'
                ],
            },

            // svg
            {
                test: /\.svg/,
                loader: 'svg-url-loader',
                options: {}
            },

            // fonts
            {
                test: /\.(woff | woff2 | eot | ttf | of )/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]'
                    },
                }]
            },
        ],
    },

}