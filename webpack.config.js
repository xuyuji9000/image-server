var path = require('path');
var webpack = require("webpack");

module.exports = {
    entry: [
        './src/app.js',
    ],
    devtool: 'source-map',
    output: {
        path: __dirname+'/dist',
        filename: 'bundle.js',
        publicPath: '/dist/',
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                loaders: [
                    'babel-loader?'+JSON.stringify({
                        presets: ['es2015', 'react', 'stage-2', "stage-1"],
                        plugins: ["transform-decorators-legacy", "transform-class-properties"]
                    })
                ],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.css$/,
                loader: 'style!css?modules',
                include: /flexboxgrid/
            }
        ],
    },
    node: {
        fs: "empty"
    }
};
