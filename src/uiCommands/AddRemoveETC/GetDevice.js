//Under Construction 

const readlineSync = require('readline-sync');


function GetDevice() {
    try {
        var keyName = readlineSync.question("Device key name?\n");
        var result = "get device=" + keyName;
        console.log("Result: " + result);
        return result;
    } catch (error) {
        console.log(error);
        console.log("\nINVALID OPTION\n")
    }

}
module.exports.GetDevice = GetDevice;