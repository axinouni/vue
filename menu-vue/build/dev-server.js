// 服务的入口文件
// 引入文件包
const express = require('express');
const webpack = require('webpack');
const path = require('path');
const fetch = require('node-fetch');
// 引入webpack配置文件
const webpackConfig = require('./webpack.dev.js');
const complier = webpack(webpackConfig);
const app = express();
const devMiddleware = require('webpack-dev-middleware')(complier, {
    publicPath: '/',
    quiet: true
});
const hotMiddleware = require('webpack-hot-middleware')(complier, {
    log: false,
    heartbeat: 2000
});
app.use(express.static(path.join(__dirname, '../', '/static')));
app.use(devMiddleware);
app.use(hotMiddleware);
app.get('/getSite', (req, res, next) => {
    fetch('http://api.map.baidu.com/location/ip?ak=LlDxGjNTIoCBhjjGIKEovdzPsSVl6eFX&coor=bd09ll').then((data) => {
        data.json().then((json) => {
            res.json(json);
        });
    });
});
app.listen(3000, function(){
    console.log(3000);
});
