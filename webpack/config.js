const webpack = require("webpack") //to access built-in plugins
const path = require("path")

const clientPath = path.resolve(__dirname, "..", "client", "src")
const StatsPlugin = require("stats-webpack-plugin")

module.exports = {
	entry: clientPath,
	output: {
		path: path.join(__dirname, "..", "build"),
		filename: "js/[name].[chunkhash].js",
		chunkFilename: "js/[name].[chunkhash].js",
		publicPath: "/",
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: ["/node_modules/"],
				include: clientPath,
				loaders: [
					{
						loader: "babel-loader",
					},
				],
			},
			{
				test: /\.jsx?$/,
				loader: "babel-loader",
				exclude: /node_modules/,
				query: {
					presets: ["es2015"],
				},
			},
		],
	},
	plugins: [
		// flush chunks needs this both on dev and prod environments.
		new StatsPlugin("stats.json"),
		new webpack.DefinePlugin({
			__SERVER__: false,
			__CLIENT__: true,
		}),
	],
}
