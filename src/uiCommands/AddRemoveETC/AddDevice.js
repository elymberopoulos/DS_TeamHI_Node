const light = require('../../devices/SmartLight');
const powerStrip = require('../../devices/PowerStrip');
const readlineSync = require('readline-sync');


function AddDevice() {
    try {
        var ans = readlineSync.question("Add 'light' or 'power strip' device?\n");
        switch (ans) {
            ////////////////////////////////////////////////////////////////////////
            case 'light':
                try {
                    var keyName = readlineSync.question("Device key name?\n");
                    let device = new light.SmartLight();

                    let deviceJSON = JSON.stringify(device);
                    var result = "add light=" + keyName + "=" + deviceJSON;
                    console.log(device);
                    console.log(deviceJSON);
                    return result;
                } catch (error) {
                    console.log(error);
                    console.log("\nINVALID OPTION\n")
                }

                break;
            ////////////////////////////////////////////////////////////////////////
            case 'power strip':
                try {
                    var keyName = readlineSync.question("Device key name?\n");
                    let device = new powerStrip.PowerStrip();
                    let deviceJSON = JSON.stringify(device);
                    var result = "add power strip=" + keyName + "=" + deviceJSON;
                    console.log(device);
                    console.log("Result: " + result);
                    return result;
                } catch (error) {
                    console.log(error);
                    console.log("\nINVALID OPTION\n")
                }
                break;
            ////////////////////////////////////////////////////////////////////////
            default:
                console.log("\n\n invalid device type");
                return "-1";
        }
    } catch (error) {
        console.log(error);
        console.log("\nINVALID OPTION\n")
    }
}
module.exports = {
    AddDevice: AddDevice
}
