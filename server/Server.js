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

// const server = express();

// socket.on('message', function (msg, rinfo) {
//     console.log('I got this message: ' + msg.toString());
//     console.log('message address: ' + rinfo.address);
//     console.log('message port: ' + rinfo.port);

// });

// socket.on('listening', () => {
//     const address = socket.address();
//     console.log(`socket server listening ${address.address}:${address.port}`);
// });

// socket.bind(3000);

const net = require('net');

const server = net.createServer(conn => {
    console.log('new client');

    conn.on('data', data => {
        conn.write("DATA RETURN " + data + '\r\n');
    });

    conn.on('end', () => {
        console.log('client left');
    });
});

server.listen(9090);
