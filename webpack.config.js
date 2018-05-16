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
                exclude: /node_modules/,
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

    // mode: 'development',

    entry: {
        bundle: [
            // CHECK THIS
            'babel-polyfill',
            './src/index.js',
            './src/sass/project.sass'
        ]
    },

    output: {
        // output the bundle file INTO dist folder
        path: path.resolve(__dirname, 'dist'),
        // CHECK THIS
        filename: 'js/[name].js',
    },

    resolve: { extensions: ['*', '.js', '.jsx'] },

    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 3000
    }

};

module.exports = config;






