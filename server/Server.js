const express = require('express');
const storage = require('node-persist');
const path = require('path');
const fileSys = require('fs');
const dgram = require('dgram');
const customStorage = require('./storageInit/Storage');

const port = process.env.PORT || 3000;
const socket = dgram.createSocket('udp4');

customStorage.createStorageDirectories();
customStorage.storageInit();

const storageRoot = customStorage.storageDir;
const powerStripDir = customStorage.powerStripDir;
const lightsDir = customStorage.lightDir;


/////////////////////////////////////////


const server = express();

socket.bind(port);

server.listen(port), async err => {
    if (err) {
        console.log("Error: " + err);
    }
}

server.on("message", function (msg, rinfo) {
    console.log(rinfo.address + ':' + rinfo.port + ' - ' + msg);
    server.send(msg, 0, msg.length, rinfo.port, rinfo.address);
});

// socket.on('message', function (msg, rinfo) {
//     console.log('I got this message: ' + msg.toString());
//     console.log('message address: ' + rinfo.address);
//     console.log('message port: ' + rinfo.port);

// });

socket.on('listening', () => {
    const address = socket.address();
    console.log(`server listening ${address.address}:${address.port}`);
});
