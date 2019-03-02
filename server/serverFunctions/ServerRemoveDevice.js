// const mapsReadWrite = require('../storageInit/LightandPowerMaps');
// var lightMap = mapsReadWrite.lightMap;
// var powerStripMap = mapsReadWrite.powerStripMap;

// /*
// THIS METHOD IS NO LONGER IN USE BY THE MAIN PROGRAM.
// IT HAS BEEN KEPT FOR CODE REFERENCE AND IN CASE IT IS NEEDED.
// */

// function ServerRemoveDevice(key){
//     console.log("KEY: " + key);
//     if(powerStripMap.has(key)){
//         powerStripMap.delete(key);
//         mapsReadWrite.copyMapToPowerStripStorage();
//     }
//     if (lightMap.has(key)){
//         lightMap.delete(key);
//         mapsReadWrite.copyMapToLightStorage();
//     }
//     else{
//         console.log("An error occurred while removing the data.");
//     }
// }

// module.exports.ServerRemoveDevice = ServerRemoveDevice;