var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-hot-middleware/client',
        'webpack/hot/only-dev-server',
        './app/entry.js'
    ],
    output: {
        path: path.join(__dirname, 'server/public/js/'),
        filename: 'bundle.js',
        publicPath: '/js/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    resolve: {
        root: path.join(__dirname, 'node_modules'),
        extensions: ['', '.js', '.jsx', '.scss']
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'react-hot!babel-loader'
        }, {
            test: /\.jsx$/,
            exclude: /node_modules/,
            loader: 'react-hot!babel-loader'
        }, {
            test: /\.scss$/,
            loader: 'style-loader!css-loader!sass-loader'
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }]
    },
    sassLoader: {
        includePaths: [path.resolve(__dirname, './scss')]
    }
};