const webpack = require("webpack") //to access built-in plugins
const path = require("path")
const WriteFilePlugin = require("write-file-webpack-plugin")

const serverPath = path.resolve(__dirname, "..", "server")

const config = require("../babel/config")

const presets = config.presets
const plugins = config.plugins

console.log("****** path : ", serverPath)

module.exports = {
	entry: serverPath,
	name: "server",
	target: "node",
	node: {
		console: true,
		fs: "empty",
		net: "empty",
		tls: "empty",
		__dirname: false,
		__filename: false,
	},
	output: {
		path: path.join(__dirname, "..", "build"),
		filename: "server.js",
		chunkFilename: "server.js",
		publicPath: "/",
		libraryTarget: "commonjs2",
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
		new webpack.HotModuleReplacementPlugin(), // Create a `SERVER` constant that's false in the browser-- we'll use this to
		// determine whether we're running on a Node server and set this to true
		// in the server.js config
		new webpack.DefinePlugin({
			__SERVER__: true,
			__CLIENT__: false,
		}),
		new webpack.optimize.LimitChunkCountPlugin({
			maxChunks: 1,
		}),
		new WriteFilePlugin(),
	],
}
