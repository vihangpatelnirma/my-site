const path = require('path')

const currentPath = path.join(__dirname, '../')
console.log(currentPath)


module.exports = {
    'server' : `${currentPath}server`,
    'client' : `${currentPath}client`
}