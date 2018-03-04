const webpack = require("webpack") //to access built-in plugins
const path = require("path")

const serverPath = path.resolve(__dirname, "..", "server")
const StatsPlugin = require("stats-webpack-plugin")

module.exports = {
	entry: serverPath,
	output: {
		path: path.join(__dirname, "..", "build-server"),
		filename: "[name].js",
		chunkFilename: "[name].js",
		publicPath: "/",
	},
	// Set-up some common mocks/polyfills for features available in node, so
	// the browser doesn't balk when it sees this stuff
	node: {
		console: true,
		fs: "empty",
		net: "empty",
		tls: "empty",
		__dirname: false,
		__filename: false,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: ["/node_modules/"],
				include: serverPath,
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
			__SERVER__: true,
			__CLIENT__: false,
		}),
	],
}
