import path from "path"

const root = path.resolve(__dirname, "..")

module.exports = {
	clientBuild: path.join(root, "build"),

	statsFile: "stats.json",
}
