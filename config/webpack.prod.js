const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.base.js');

module.exports = merge(common, {
    plugins: [
        // new UglifyJSPlugin()
    ]
});