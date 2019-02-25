const light = require('../devices/SmartLight');
const powerStrip = require('../devices/PowerStrip');
const jsonInvoker = require('../devices/DeviceJSON')
const readlineSync = require('readline-sync');
const key = require('uuid/v1')


function AddDevice() {
    try {
        var ans = readlineSync.question("Add 'light' or 'power strip' device?\n");
        switch (ans) {
            ////////////////////////////////////////////////////////////////////////
            case 'light':
                try {
                    var keyName = key();
                    console.log(keyName);
                    var storeLocation = readlineSync.question("What is the storage location name?\n");
                    let device = new light.SmartLight();
                    jsonInvoker.setJSONObject(JSON.stringify(device));
                    console.log(jsonInvoker.getJSONObject());
                } catch (error) {
                    console.log(error);
                    console.log("\nINVALID OPTION\n")
                }

                break;
            ////////////////////////////////////////////////////////////////////////
            case 'power strip':
                try {
                    var keyName = readlineSync.question("Device key name?\n");
                    var storeLocation = readlineSync.question("What is the storage location name?\n")
                    let device = new powerStrip.PowerStrip();
                    let deviceJSON = JSON.stringify(device);
                } catch (error) {
                    console.log(error);
                    console.log("\nINVALID OPTION\n")
                }
                break;
            ////////////////////////////////////////////////////////////////////////
            default:
                console.log("Invalid input.");
        }
    } catch (error) {
        console.log(error);
        console.log("\nINVALID OPTION\n")
    }
}
module.exports = {
    AddDevice: AddDevice
}
