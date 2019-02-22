const express = require('express');
const storage = require('node-persist');
const path = require('path');
const fileSys = require('fs');
const dgram = require('dgram');

const port = process.env.PORT || 3000;
const socket = dgram.createSocket('udp4');

//INITIAL STORAGE FOR NODE DATA PERSIST
var storageDir = __dirname + '/storage';
console.log("Storage location: " + storageDir);

if (!fileSys.existsSync(storageDir)) {
    fileSys.mkdir(storageDir, {}, err => {
        if (err) {
            console.log(err);
            throw err;
        }
        console.log('Folder created...');

    });
    storage.init({
        dir: storageDir,
        stringify: JSON.stringify,
        parse: JSON.parse,
        encoding: 'utf8',
        logging: false,
        ttl: false,
        expiredInterval: 2 * 60 * 1000,
        forgiveParseErrors: false
    })
}
/////////////////////////////////////////


const server = express();
socket.bind(port);

server.listen(port), async err => {
    if (err) {
        console.log("Error: " + err);
    }
}

socket.on('message', function (msg, rinfo) {
    console.log('I got this message: ' + msg.toString());
    console.log('message address: ' + rinfo.address);
    console.log('message port: ' + rinfo.port);

});

socket.on('listening', () => {
    const address = socket.address();
    console.log(`server listening ${address.address}:${address.port}`);
});
// storage.setItem('test', 'testValue')