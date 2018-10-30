

const port =8089
const merge = require('webpack-merge');
const common = require('./webpack.base.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');


var config= merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: '../dist', 
        hot: true,
        port:port
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(['dist']),        
        new HtmlWebpackPlugin({                 
            title: 'Output Management',
            template: "./src/index.html" 
        }),
        new FriendlyErrorsWebpackPlugin({ 
            compilationSuccessInfo: {  
                messages: [`You application is running here http://localhost:${port}`],
                notes: ['Some additionnal notes to be displayed unpon successful compilation']
            },
            onErrors: function (severity, errors) {
                
            },
            
            clearConsole: true,
        }),
    ]
});

module.exports =config;




