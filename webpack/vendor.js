const webpack = require("webpack"),
	path = require("path"),
	CompressionPlugin = require("compression-webpack-plugin")

const VENDORS = [
	"react",
	"react-dom",
	"react-redux",
	"redux",
	"react-universal-component",
	"redux-first-router",
	"history",
]
module.exports = {
	entry: {
		vendor: VENDORS,
	},
	output: {
		filename: "[name].bundle.js",
		path: path.join(__dirname, "..", "public"),
		library: "[name]_lib",
	},
	plugins: [
		new webpack.DefinePlugin({
			"process.env.NODE_ENV": JSON.stringify("production"),
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
	],
}
