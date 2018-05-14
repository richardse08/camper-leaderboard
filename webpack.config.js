const path = require('path');
const webpack = require('webpack');
const bundlePath = path.resolve(__dirname, 'dist/');

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                // use babel-loader for transforming .jsx files and es6
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: { presets: ['env'] }
            },
            {
                // use css-loader for .css files (needs style-loader to work)
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    // import these modules without needing to add extensions
    resolve: { extensions: ['*', '.js', '.jsx'] },
    // tell webpack where to put bundled code and to serve files form bundle.js
    output: {
        publicPath: bundlePath,
        filename: 'bundle.js'
    },
    // create dev server at LH3000
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        port: 3000,
        publicPath: 'http://localhost:3000/dist'
    },
    // add hot modeule replacement
    plugins: [ new webpack.HotModuleReplacementPlugin() ]
};