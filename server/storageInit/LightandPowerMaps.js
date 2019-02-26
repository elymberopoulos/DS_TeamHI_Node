const readWrite = require('./ReadWrite');

var lightMap = new Map();
var powerStripMap = new Map();

/*
These maps hold the various devices that have been added to the server and the entry sets
will periodically be written to the data persistence .txt files
*/


function StorageLoader(){
    
}




module.exports = {
    lightMap: lightMap,
    powerStripMap: powerStripMap
}