// 配置dev环境
const merge = require('webpack-merge');
const configProdEnv = require('./config.prod.conf.js');
module.exports = merge(configProdEnv, {
    NODE_ENV: '"development"'
});