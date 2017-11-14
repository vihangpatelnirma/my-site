const paths = require('./config/paths')

const clonedPaths = Object.assign({}, paths)

module.exports = { 
    "presets" : ["es2015", "react"],
    "plugins" : [
        "transform-object-rest-spread",
        "transform-decorators-legacy",
        [
            "module-resolver",
            {
                "alias": clonedPaths
            }
        ]
    ] 
}