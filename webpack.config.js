const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');


module.exports = {
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
        filename: '[name].js'
    },

    module: {
        rules: [
            {
                // use babel-loader for transforming .jsx files and es6
                test: /\.(js|jsx)$/,
                // CHECK THIS
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: { 
                    // CHECK THIS
                    presets: ['react', 'env'] 
                }
            },

            {
                // use css-loader for .css files (needs style-loader to work)
                test: /\.sass$/,
                use: [
                    // MiniCssExtractPlugin.loader,
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ],
            }
        ]
    },

    plugins: [
        // from module-rules-ExtractTextPlugin, tell that where to send these files
        // in this case they will go into SRC/CSS which is where the compiled CSS will live before sent to DIST
        
        new MiniCssExtractPlugin({
            filename: 'css/project.css'
        }),

        // add hot module replacement
        new webpack.HotModuleReplacementPlugin() 
    ],


    // import these modules without needing to add extensions
    // CHECK THIS
    resolve: { extensions: ['*', '.js', '.jsx'] }

    
};








