var path = require('path');

module.exports = {
    entry: [
        './src/app.js',
    ],
    devtool: 'source-map',
    output: {
        path: __dirname+'/dist',
        filename: 'bundle.js',
        publicPath: '/assets/'
    },
    module: {
        loaders: [{
            test: /.jsx?$/,
            exclude: /node_modules/,
            loader: [
                'babel-loader?'+JSON.stringify({
                    presets: ['es2015', 'react']
                })
            ],
        }],
    }
};
