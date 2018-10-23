// bacsic vars
const path = require('path');
const webpack = require('webpack'); 

// aditional plugins


// module settings
module.exports = {
    context: path.resolve(__dirname, 'src'),

    entry: {
        scripts: './js/scripts.js'
    },

    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '../'
    },
}