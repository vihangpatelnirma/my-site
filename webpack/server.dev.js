const webpack = require("webpack") //to access built-in plugins
const path = require("path")

const serverPath = path.resolve(__dirname, "..", "server")

console.log("****** path : ", serverPath)

module.exports = {
	entry: serverPath,
	name: "server",
	node: {
		console: true,
		fs: "empty",
		net: "empty",
		tls: "empty",
		__dirname: false,
		__filename: false,
	},
	output: {
		path: path.join(__dirname, "..", "server-build"),
		filename: "js/[name].[chunkhash].js",
		chunkFilename: "js/[name].[chunkhash].js",
		publicPath: "/",
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
							presets: ["es2015", "react"],
							plugins: ["transform-object-rest-spread"],
						},
					},
				],
			},
		],
	},
	plugins: [new webpack.HotModuleReplacementPlugin()],
}
