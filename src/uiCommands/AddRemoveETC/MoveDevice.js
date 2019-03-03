const readlineSync = require('readline-sync');

//Under Construction 
function MoveDevice() {
    try {
        var keyName = readlineSync.question("Device key name?\n");
        var storeLocation = readlineSync.question("What is the storage location name 'lights' or 'power strips'?\n")

        var result = "move device=" + keyName + '=' + storeLocation;
        console.log("Result: " + result);
        return result;
    } catch (error) {
        console.log(error);
        console.log("\nINVALID OPTION\n")
    }

}
module.exports.MoveDevice = MoveDevice;