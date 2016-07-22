module.exports = {
    entry: "./src/js/app.js",
    output: {
        path: __dirname,
        filename: "target/bundle.js"
    },
    resolve: {
        extension: ['', '.js', '.css']
    },
    module: {
        loaders: [
            {
                test: /\.css$/, loader: "style!css"
            },
            {
                test: /\.js$/,
                loader: 'babel?presets=es2015',
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                loader: 'raw'
            }
        ]
    }
};