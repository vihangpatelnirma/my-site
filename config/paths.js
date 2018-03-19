const path = require("path")

const currentPath = path.join(__dirname, "../")

module.exports = {
	server: `${currentPath}server/src`,
	client: `${currentPath}client/src`,
	data: `${currentPath}data`,
	config: `${currentPath}config`,
}
