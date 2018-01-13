const webpackBaseConfig = require('./webpack.base.js');
const merge = require('webpack-merge');
const Hwp = require('html-webpack-plugin');
const webpack = require('webpack');
Object.keys(webpackBaseConfig.entry).forEach((name) => {
    webpackBaseConfig.entry[name] = ['./build/dev-client.js'].concat(webpackBaseConfig.entry[name])
});
module.exports = merge(webpackBaseConfig, {
    plugins: [
        new Hwp({
            filename: 'index.html',
            title: 'hello webpack',
            template: 'index.html',
            inject: 'body'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': '"production"'
            }
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
})