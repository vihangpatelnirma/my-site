const paths = require('./config/paths')

const clonedPaths = Object.assign({}, paths)

console.log(clonedPaths)
module.exports = { 
    "presets" : ["es2015"],
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