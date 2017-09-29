var devConfig   = require('./config/webpack/development.js')
var prodConfig  = require('./config/webpack/production.js')

var config;

switch (process.env.npm_lifecycle_event) {
    case 'start':
        config = devConfig
    break;
    case 'build':
        config = prodConfig
    break;
    default:
        config = devConfig
}

module.exports = config
