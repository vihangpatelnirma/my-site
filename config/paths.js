const path = require("path")

const currentPath = path.join(__dirname, "../")
console.log(currentPath)

module.exports = {
	server: `${currentPath}server/src`,
	client: `${currentPath}client/src`,
	data: `${currentPath}data`,
	config: `${currentPath}config`,
}
