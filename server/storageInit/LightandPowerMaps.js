// /*
// THESE FUNCTIONS ARE NO LONGER USED BY THE MAIN PROGRAM.
// THEY ARE ONLY KEPT FOR CODE REFERENCE.
// */


// const readWrite = require('./ReadWrite');
// const fs = require('fs');
// var lightMap = new Map();
// var powerStripMap = new Map();

// /*
// These maps hold the various devices that have been added to the server and the entry sets
// will periodically be written to the data persistence .txt files
// */


// /////////////////////////////////
// /*
// These functions copy the current key value pairs to the .txt files.
// Use these if a value is ever changed or new entry added.
// */
// async function copyMapToLightStorage() {
//     await fs.writeFileSync(readWrite.lightsTXT, '', 'utf8', error => {
//         console.log("Error while writing " + error);
//     });
//     if (lightMap.size > 0) {
//         console.log("LIGHT SIZE" + lightMap.size);
//         for (const entry of lightMap.entries()) {
//             readWrite.WriteToLights(entry[0] + '=' + entry[1]);
//         }
//     }
//     else {
//         fs.writeFileSync(readWrite.lightsTXT, '', 'utf8', error => {
//             console.log("Error while writing " + error);
//         });
//     }
// }
// async function copyMapToPowerStripStorage() {
//     await fs.writeFileSync(readWrite.powerStripsTXT, '', 'utf8', error => {
//         console.log("Error while writing " + error);
//     });
//     if (powerStripMap.size > 0) {
//         console.log("PS SIZE" + powerStripMap.size);
//         for (const entry of powerStripMap.entries()) {
//             readWrite.WriteToPowerStrips(entry[0] + '=' + entry[1]);
//         }
//     }
//     else {
//         fs.writeFileSync(readWrite.powerStripsTXT, '', 'utf8', error => {
//             console.log("Error while writing " + error);
//         });
//     }

// }


// module.exports = {
//     lightMap,
//     powerStripMap,
//     copyMapToLightStorage,
//     copyMapToPowerStripStorage
// }