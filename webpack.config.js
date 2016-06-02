module.exports = {
    entry: './src/main.jsx',
    output: {
        path: 'dest',
        filename: './app.bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.js(x?)$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }
}
