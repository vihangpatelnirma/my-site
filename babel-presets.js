const paths = require('./config/paths')

const clonedPaths = Object.assign({}, paths)

module.exports = { 
    "presets" : ["es2015", "react"],
    "plugins" : [
        "transform-object-rest-spread",
        [
            "module-resolver",
            {
                "alias": clonedPaths
            }
        ]
    ] 
}