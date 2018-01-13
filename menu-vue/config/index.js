// 配置webpack的config
const express = require('express');
const configDev = require('./config.dev.config.js');
const configProd = require('./config.prod.conf.js');
module.exports = {
    build: {
        env: require('./config.prod.conf.js'),
        index: path.resolve(__dirname, '../dist/index.html'),
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        productionSourceMap: true,
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],
        bundleAnalyzerReport: process.env.npm_config_report
    },
    dev: {
        env: require('./config.dev.config.js'),
        port: process.env.PORT || 8080,
        autoOpenBrowser: true,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {},
        cssSourceMap: false
    }
};