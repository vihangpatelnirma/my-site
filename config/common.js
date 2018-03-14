const path = require("path")

module.exports = {
	PORT: process.env.PORT || 3030,
	PUBLIC_PATH: path.resolve(__dirname, ".."),
	STATS_FILE: "stats.json",
}
