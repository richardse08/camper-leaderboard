const config = {
    entry: {
        // create a file named bundle and combine 3 things into ONE file
        bundle: [
            // combine es6 convertor
            'babel-polyfill',
            // combine app.js
            './App.js',
            // combine project.sass
            './sass/project.sass'
        ]
    },

    output: {
        // output the bundle file INTO dist folder
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },

    module: {
        rules: [ 
            {
                // any file that matches .js run through babel-loader 
                // with React Option set
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['react', 'env']
                }
            },

            {
                // any file that matches .sass (ie project.sass)
                // run it through the ExtractTextPlugin
                // this plugin with use the css-loader and sass-loader
                test: /\.sass$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }

        ]
    },

    plugins: [
        // from module-rules-ExtractTextPlugin, tell that where to send these files
        // in this case they will go into SRC folder into an empty subfolder 
        // called CSS which is where the compiled CSS will live before it is sent to DIST
        new ExtractTextPlugin('css/project.css', {
            allChunks: true
        }) 
    ]

};

module.exports = config;