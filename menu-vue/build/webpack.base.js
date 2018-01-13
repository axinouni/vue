const path = require('path');
function resolve (dir) {
  return path.join(__dirname, '..', dir)
};
module.exports = {
    entry: {
        app: './src/main.js'
    },
    output: {
        filename: '[name]-[hash:7].js',
        path: path.join(__dirname, '/build'),
        publicPath: '/'
    },
    devtool: 'cheap-module-eval-source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: [{
                    loader: 'style'
                },
                {
                    loader: 'css',
                    options: {
                        modules: true
                    }
                }]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.jpg$/,
                loader: 'url-loader',
                options: {
                    limit: '1024'
                }
            },
            {
                test: /\.ttf$/,
                loader: 'url-loader',
                options: {
                    limit: '1024'
                }
            }
        ]
    },
    resolveLoader: {
        moduleExtensions: ['-loader']
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': resolve('src'),
        }
    },
    externals: {
        "BMap": "BMap"
    }
};
