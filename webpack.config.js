const path = require('path');
const webpack = require('webpack');

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
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    // add hot module replacement
    plugins: [ new webpack.HotModuleReplacementPlugin() ]
};