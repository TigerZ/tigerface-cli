const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

const config = {
    entry: {
        main: ['babel-polyfill', 'react-hot-loader/patch', './example/src/main.js']
    },
    resolve: {
        extensions: [".js", ".jsx", ".json"],
        modules: [path.resolve(__dirname, "src"), "node_modules"]
    },
    output: {
        path: path.resolve(__dirname, "./example/assets"),
        filename: "[name].js"
    },
    devServer: {
        contentBase: path.resolve(__dirname, "./example/assets"),
        hot: true,
        compress: true,
        port: 9000
    },
    module: {
        rules: [
            // // 以下是没有 .babelrc 文档的完整配置写法
            // {
            //     test: /\.(js|jsx)$/,
            //     exclude: /node_modules/,
            //     use: {
            //         loader: 'babel-loader',
            //         options: {
            //             presets: [
            //                 ['babel-preset-env', {modules: false}], 'babel-preset-react'],
            //             plugins: [
            //                 'react-hot-loader/babel'
            //             ]
            //         }
            //     }
            // },
            // // 结合 .babelrc 文件，此处就只需要简单指定使用 babel-loader
            {test: /\.(js|jsx)$/, exclude: /node_modules/, use: 'babel-loader'}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.template.html'
        }),
        new CleanWebpackPlugin(['./example/assets']),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
};

module.exports = config;