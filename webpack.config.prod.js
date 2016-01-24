var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    entry: [
        './app/entry.js'
    ],
    output: {
        path: path.join(__dirname, 'server/public/js/'),
        filename: 'bundle.js',
        publicPath: '/js/'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        })
    ],
    resolve: {
        root: path.join(__dirname, 'node_modules'),
        extensions: ['', '.js', '.jsx', '.scss']
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.jsx$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
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
