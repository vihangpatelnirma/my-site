const webpack = require("webpack"),
	path = require("path")

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
		path: path.join(__dirname, "..", "build"),
		library: "[name]_lib",
	},
	plugins: [
		new webpack.DefinePlugin({
			"process.env.NODE_ENV": JSON.stringify("development"),
		}),
	],
}
