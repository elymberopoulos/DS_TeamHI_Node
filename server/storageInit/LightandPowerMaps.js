const readWrite = require('./ReadWrite');

var lightMap = new Map();
var powerStripMap = new Map();

/*
These maps hold the various devices that have been added to the server and the entry sets
will periodically be written to the data persistence .txt files
*/


/////////////////////////////////
/*
These functions copy the current key value pairs to the .txt files.
Use these if a value is ever changed or new entry added.
*/
function copyMapToLightStorage() {
    for (const entry of lightMap.entries()) {
        readWrite.WriteToLights(entry[0] + '=' + entry[1]);
    }
}
function copyMapToPowerStripStorage() {
    for (const entry of powerStripMap.entries()) {
        readWrite.WriteToPowerStrips(entry[0] + '=' + entry[1]);
    }
}


module.exports = {
    lightMap,
    powerStripMap,
    copyMapToLightStorage,
    copyMapToPowerStripStorage
}