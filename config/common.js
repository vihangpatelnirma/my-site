const path = require("path")

module.exports = {
	PORT: 3030,
	PUBLIC_PATH: path.resolve(__dirname, "..", "build"),
	STATS_FILE: "stats.json",
}
