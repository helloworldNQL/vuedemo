// 原生模块，处理路径
const path = require('path');
//const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
// 导出模块
module.exports = {
    // watch: true,
    // 模式
    mode: 'development',
    // mode: 'production',
    // 入口
    entry: {
        bundle:'./src/index.js',
        test: './src/test.js',
    },
    // 出口
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    // 加载器
    module: {
        rules: [{
            // 匹配后缀为css的文件
            test: /\.css$/,
            // 用两个加载器style-loader和css-loader
            use: ['style-loader', 'css-loader']
        },
        {
            // 匹配后缀为css的文件
            test: /\.html|htm$/,
            // 用两个加载器style-loader和css-loader
            use: ['html-loader']
        }
        ]
    }
};