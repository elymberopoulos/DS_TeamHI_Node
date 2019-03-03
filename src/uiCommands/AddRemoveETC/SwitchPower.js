
const readlineSync = require('readline-sync');


function SwitchPower() {
    try {
        var keyName = readlineSync.question("Device key name?\n");
        var result = "switch power=" + keyName;
        console.log("Result: " + result);
        return result;
    } catch (error) {
        console.log(error);
        console.log("\nINVALID OPTION\n")
    }

}
module.exports.SwitchPower = SwitchPower;
