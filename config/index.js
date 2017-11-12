import dev from './dev'
import prod from './prod'

const envMap = {
    'PRODUCTION' : prod,
    'DEVELOPMENT' : dev
}

module.exports = envMap[process.env.NODE_ENV] || envMap['DEVELOPMENT']
