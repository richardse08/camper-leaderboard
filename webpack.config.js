// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
const webpack = require('webpack');


const config = {

    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "css/project.css",
            // chunkFilename: "[id].css"
        })
    ],

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: { 
                    presets: ['react', 'env'],
                }
            },
            
            {
                test: /\.(css|sass)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },

    mode: 'development',

    entry: {
        bundle: [
            // CHECK THIS
            'babel-polyfill',
            './src/index.js',
            './src/sass/project.sass'
        ]
    },

    output: {
        // output the bundle file INTO dist folderbabel-
        path: path.resolve(__dirname, 'dist'),
        // CHECK THIS
        filename: '[name].js',
    },

    // module: {
    //     rules: [
    //         {
    //             // use babel-loader for transforming .jsx files and es6
    //             test: /\.(js|jsx)$/,
    //             // CHECK THIS
    //             exclude: /(node_modules|bower_components)/,
    //             loader: 'babel-loader',
    //             options: { 
    //                 // CHECK THIS
    //                 presets: ['react', 'env'],
    //             }
    //         },

    //         {
    //             // use css-loader for .css files (needs style-loader to work)
    //             test: /\.sass$/,
    //             // use: ['style-loader', 'css-loader', 'sass-loader']
                
    //             use: ExtractTextPlugin.extract({
    //                 fallback:'style-loader',
    //                 use: ['css-loader','sass-loader'],
    //             })
    //         }
    //     ]
    // },

    // plugins: [
    //     new ExtractTextPlugin('css/project.css', {
    //         allChunks: true
    //     })
    // ],

    resolve: { extensions: ['*', '.js', '.jsx'] },

};

module.exports = config;






