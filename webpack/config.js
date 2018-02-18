const webpack = require("webpack") //to access built-in plugins
const path = require("path")

const clientPath = path.resolve(__dirname, "..", "client", "src")

console.log("****** path : ", clientPath)

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
						options: {
							presets: ["es2015", "react"],
							plugins: ["transform-object-rest-spread"],
						},
					},
				],
			},
		],
	},
}
