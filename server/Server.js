const express = require('express');
const storage = require('node-persist');
const customStorage = require('./storageInit/Storage');
const port = process.env.PORT || 3000;
const net = require('net');
const readWrite = require('./storageInit/ReadWrite');
const maps = require('./storageInit/LightandPowerMaps');

customStorage.createStorageDirectories();
// customStorage.storageInit();

const storageRoot = customStorage.storageDir;
const powerStripDir = customStorage.powerStripDir;
const lightsDir = customStorage.lightDir;

var lightMap = maps.lightMap;
var powerStripMap = maps.powerStripMap;

/*
IN ADD DEVICE UNDER THE UICOMMANDS PACKAGE A SERVER SIDE COMMAND IS PREPENDED TO THE STRING
TO BE SENT OVER TCP. THE SERVER SPLITS ON '=' AND USES A SWITCH TO CHOOSE AN ACTION. INDEX 0 IS
THE COMMAND AND INDEX 1 IS THE VALUE.
*/
const server = net.createServer(conn => {
    console.log('new client request');

    conn.on('data', data => {
        let dataString = data.toString();
        console.log(dataString);
        let split = dataString.split('=');

        if (data !== null) {
            try {
                switch (split[0]) {
                    case 'add light':
                        lightMap.set(split[1], split[2]);
                        console.log(lightMap.entries());
                        break;

                    case 'add power strip':
                        powerStripMap.set(split[1], split[2]);
                        console.log(powerStripMap.entries());
                        break;

                    default:
                        break;
                }
            } catch (error) {

            }
        }

        conn.write("DATA RETURN " + data + '\r\n');
    });

    conn.on('end', () => {
        console.log('client left');
    });
});

server.listen(port);
