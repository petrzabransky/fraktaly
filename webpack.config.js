const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
	watch: false,
	mode: "production",
	entry: ["./src/ts/index.ts", "./src/scss/style.scss"],
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "js/main.[contenthash].js",
		assetModuleFilename: "img/[name].[contenthash][ext]",
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},

	module: {
		rules: [
			{
				test: /\.html$/,
				use: { loader: "html-loader" }
			},

			{
				test: /\.scss$/,
				use: [
					{ loader: MiniCssExtractPlugin.loader },
					"css-loader",
					"sass-loader"
				]
			},

			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},

	plugins: [
		new HtmlWebpackPlugin(
			{
				template: "./src/index.html",
				filename: "index.html"
			}
		),

		new MiniCssExtractPlugin(
			{
				filename: "css/style.[contenthash].css",
			}
		),

		new CopyPlugin({
			patterns: [
				{
					from: "src/*.ico",
					to: path.resolve(__dirname, "dist", "[name].[ext]"),
				},

				{
					from: "src/scss/font/*.*",
					to: path.resolve(__dirname, "dist/css/font", "[name].[ext]"),
				}
			],
		}),
	],
};