const webpack = require("webpack") //to access built-in plugins
const path = require("path")

const clientPath = path.resolve(__dirname, "..", "client", "src")

console.log("****** path : ", clientPath)

module.exports = {
	entry: [
		"webpack-hot-middleware/client?name=client&path=/__webpack_hmr&timeout=20000&reload=false&quiet=false&noInfo=false",
		clientPath,
	],
	name: "client",
	output: {
		path: path.join(__dirname, "..", "build"),
		filename: "js/[name].[chunkhash].js",
		chunkFilename: "js/[name].[chunkhash].js",
		publicPath: "/",
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
							presets: ["es2015", "react"],
							plugins: ["transform-object-rest-spread"],
						},
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
	plugins: [new webpack.HotModuleReplacementPlugin()],
}
