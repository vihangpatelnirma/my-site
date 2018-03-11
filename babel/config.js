const paths = require("../config/paths")

const clonedPaths = Object.assign({}, paths)

module.exports = {
	presets: ["es2015", "react", "babel-preset-react"],
	plugins: [
		"transform-object-rest-spread",
		"syntax-dynamic-import",
		"transform-react-jsx",
		"transform-decorators-legacy",
		"transform-class-properties",
		"universal-import",
		[
			"module-resolver",
			{
				alias: clonedPaths,
			},
		],
	],
}
