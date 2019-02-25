const readlineSync = require('readline-sync');

function getAddress() {
    const address = readlineSync.question("Enter a host name (ex: 'localhost):\n");
    return address;
}
function getPort() {
    const port = readlineSync.question("Enter a port number (ex: '3000'):\n");
    return port;
}

module.exports = {
    getAddress: getAddress,
    getPort: getPort
}
