const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
	entry: './src/index.js', //웹팩이 파일을 읽는 시작점
    devServer : {
        static: './docs'
    },
	output: {
		path: path.resolve(__dirname, 'docs'), // './dist'의 절대 경로를 리턴합니다.
		filename: '[name].bundle.js',
	},
	module: {
		rules :[{
			test: /\.js$/,
			loader: 'babel-loader',
			exclude: /node_modules/
        },
        {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
            exclude: /node_modules/
        }
        ]
	},
    plugins: [
        new HtmlWebpackPlugin({
            template : path.resolve(__dirname, "src", 'index.html')
        }),
        new MiniCssExtractPlugin()
    ],
    optimization: {
        minimizer: [
            new CssMinimizerPlugin()
        ],
        runtimeChunk: 'single'
    },
    mode : 'development'
}
