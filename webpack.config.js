/**
 * Created by johnhank on 2017/7/11.
 */
let path = require('path');
let webpack = require('webpack');

module.exports =  {
    watch: false,
    entry: './scripts/index.js',
    output: {
        filename: "bundle.js",
        path:path.resolve(__dirname, './')
    },
    resolve: {
        //查找module的话从这里开始查找
        // root: 'D:/workspace/webpackdemo/scripts', //绝对路径
        //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        extensions: ['.js', '.json', '.scss'],
        modules: [
            "node_modules",
            path.resolve(__dirname, "scripts"),
        ],
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
    ]
}