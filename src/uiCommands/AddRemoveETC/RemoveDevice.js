const readlineSync = require('readline-sync');


function RemoveDevice() {
    try {
        var keyName = readlineSync.question("Device key name?\n");
        var result = "remove device=" + keyName;
        console.log("Result: " + result);
        return result;
    } catch (error) {
        console.log(error);
        console.log("\nINVALID OPTION\n")
    }

}
module.exports.RemoveDevice = RemoveDevice;