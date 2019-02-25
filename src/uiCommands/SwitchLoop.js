const readlineSync = require('readline-sync');
const commands = require('./AddRemoveETC/AddDevice');

function Start(ans) {
    try {
        
        switch (ans) {
            case "add device":
                return commands.AddDevice();
                break;
            case "remove device":
                removeDevice()
                break;
            case "manage device":
                sayHello()
                break;
            case "move device":
                moveDevice();
                break;
            case "show device with state":
                showDeviceswstate()
                break;
            case "show device":
                showDevices();
                break;
            case "test":
                test.testSend();
                break;

            case "exit":
                running = false;
                console.log("Program Ended");
                break;
            default:
                console.log("Invalid Input");
        }
    }
    catch (error) {
        console.log(error);
        console.log("\n\nINVALID COMMAND\n\n");
    }
}
module.exports.Start = Start;