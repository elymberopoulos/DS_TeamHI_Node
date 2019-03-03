const commands = require('./AddRemoveETC/AddDevice');
const powerSwitch = require('./AddRemoveETC/SwitchPower');
const help = require('./AddRemoveETC/UIHelper');
const moveDevice = require('./AddRemoveETC/MoveDevice');
const removeDevice = require('./AddRemoveETC/RemoveDevice');

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
               
            case "remove device":
                return removeDevice.RemoveDevice();

            case "move device":
                return moveDevice.MoveDevice();

            case "switch power":
                return powerSwitch.SwitchPower();
              
            case "help":
                return help.uiHelp();
    
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