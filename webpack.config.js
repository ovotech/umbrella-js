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
            },
            {
                test: /\.eot(\?wcvkck)?$/,
                loader: "file"
            },
            {
                test: /\.ttf(\?wcvkck)?$/,
                loader: "url?limit=10000&mimetype=application/octet-stream"
            },
            {
                test: /\.svg(\?wcvkck)?$/,
                loader: "url?limit=10000&mimetype=image/svg+xml"
            },
            {
                test: /\.(woff|woff2)(\?wcvkck)?$/,
                loader: "url?prefix=font/&limit=5000"
            }
        ]
    }
};