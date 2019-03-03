const storage = require('node-persist');

function storageInit() {
    storage.init({
        stringify: JSON.stringify,
        parse: JSON.parse,
        encoding: 'utf8',
        logging: false,
        ttl: false,
        //expiredInterval: 2 * 60 * 1000,
        forgiveParseErrors: false
    })
}
module.exports = {
    storage,
    storageInit
}