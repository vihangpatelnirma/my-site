const webpack = require("webpack")
const clientDevConfig = require("./client.dev")
const path = require("path")
const CompressionPlugin = require("compression-webpack-plugin")
const WriteFilePlugin = require("write-file-webpack-plugin")
const StatsPlugin = require("stats-webpack-plugin")

const clientPath = path.resolve(__dirname, "..", "client", "src")

const prodConfig = {
	...clientDevConfig,
	entry: clientPath,
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

		// determine whether we're running on a Node server and set this to true
		// in the server.js config
		new webpack.DefinePlugin({
			__SERVER__: false,
			__CLIENT__: true,
			__DEV__: true,
		}),

		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
				drop_console: true,
			},
			comments: false,
		}),
		new CompressionPlugin({
			asset: "[file].gz",
			algorithm: "gzip",
			test: /\.js$|\.html$|\.css$/,
			threshold: 1024,
			minRatio: 0.9,
		}),
		new WriteFilePlugin(),
	],
}

console.log("prod config : ", prodConfig)

module.exports = prodConfig
