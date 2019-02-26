const readlineSync = require('readline-sync');
const commands = require('./AddRemoveETC/AddDevice');
const powerSwitch = require('./AddRemoveETC/SwitchPower');

/*
This is the main command loop that is imported into index.js.
The command is entered as an argument in index.js and is read here.
A concatenated string is returned and sent through the socket and is
spliced into its respective pieces on the server.
*/

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
            case "switch power":
                return powerSwitch.SwitchPower();
                break;

            case "exit":
                running = false;
                console.log("Program Ended");
                break;
            default:
                console.log("\nINVALID COMMAND\n");
                return "-1";
        }
    }
    catch (error) {
        console.log(error);
        console.log("\n\nINVALID COMMAND\n\n");
    }
}
module.exports.Start = Start;