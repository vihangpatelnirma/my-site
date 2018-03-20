const webpack = require("webpack") //to access built-in plugins
const path = require("path")
const WriteFilePlugin = require("write-file-webpack-plugin")
const StatsPlugin = require("stats-webpack-plugin")

const config = require("../babel/config")

const presets = config.presets
const plugins = config.plugins

const clientPath = path.resolve(__dirname, "..", "client", "src")

module.exports = {
	entry: [
		"webpack-hot-middleware/client?name=client&path=/__webpack_hmr&timeout=20000&reload=false&quiet=false&noInfo=false",
		clientPath,
	],
	name: "client",
	output: {
		path: path.join(__dirname, "..", "public", "build"),
		filename: "js/[name].[hash].js",
		chunkFilename: "js/[name].[chunkhash].js",
		publicPath: "/chunks/build/",
	},
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
				include: clientPath,
				loaders: [
					{
						loader: "babel-loader",
						options: {
							presets,
							plugins,
						},
					},
				],
			},
			{
				test: /\.jsx?$/,
				loader: "babel-loader",
				exclude: /node_modules/,
				query: {
					presets,
					plugins,
				},
			},
		],
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: "vendor",
			minChunks: function(module) {
				// this assumes your vendor imports exist in the node_modules directory
				return module.context && module.context.includes("node_modules")
			},
		}),
		// flush chunks needs this both on dev and prod environments.
		new StatsPlugin("stats.json"),
		new webpack.HotModuleReplacementPlugin(), // Create a `SERVER` constant that's false in the browser-- we'll use this to
		// determine whether we're running on a Node server and set this to true
		// in the server.js config
		new webpack.DefinePlugin({
			__SERVER__: false,
			__CLIENT__: true,
			__STYLEGUIDE__: false,
			__DEV__: true,
		}),
		new WriteFilePlugin(),
	],
}
