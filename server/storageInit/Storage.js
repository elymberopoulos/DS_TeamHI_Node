const express = require('express');
const storage = require('node-persist');
const path = require('path');
const fileSys = require('fs');
const dgram = require('dgram');


//INITIAL STORAGE FOR NODE DATA PERSIST
const storageDir = __dirname + '/dataPersist';
const lightDir = __dirname + '/dataPersist/lights';
const powerStripDir = __dirname + '/dataPersist/powerStrips';

async function createStorageDirectories() {
    if(!fileSys.existsSync(storageDir)) {
        await fileSys.mkdir(storageDir, {}, err => {
            if (err) {
                console.log(err);
                throw err;
            }
            console.log('Node Data-Persist Folder Created.');
            console.log("Storage location: " + storageDir);
        });

    }

    if (!fileSys.existsSync(lightDir)) {
        await fileSys.mkdir(lightDir, {}, err => {
            if (err) {
                console.log(err);
                throw err;
            }
            console.log('lights directory created.');

        });
    }

    if (!fileSys.existsSync(powerStripDir)) {
        await fileSys.mkdir(powerStripDir, {}, err => {
            if (err) {
                console.log(err);
                throw err;
            }
            console.log('powerStrip directory created.');

        });
    }
}
function storageInit() {
    storage.init({
        dir: storageDir,
        stringify: JSON.stringify,
        parse: JSON.parse,
        encoding: 'utf8',
        logging: false,
        ttl: false,
        //expiredInterval: 2 * 60 * 1000,
        forgiveParseErrors: false
    })
}

module.exports={
    createStorageDirectories: createStorageDirectories,
    storageInit: storageInit,
    storageDir: storageDir,
    lightDir: lightDir,
    powerStripDir: powerStripDir
}