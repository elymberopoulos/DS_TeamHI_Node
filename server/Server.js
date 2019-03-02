
const customStorage = require('./storageInit/Storage');
const port = process.env.PORT || 3000;
const net = require('net');
const powerSwitch = require('./serverFunctions/SwitchPower');
const moveDevice = require('./serverFunctions/ServerMoveDevice');

const functions = require('./serverFunctions/NodePersistFunctions');

customStorage.storageInit();

/*
IN ADD DEVICE UNDER THE UICOMMANDS PACKAGE A SERVER SIDE COMMAND IS PREPENDED TO THE STRING
TO BE SENT OVER TCP. THE SERVER SPLITS ON '=' AND USES A SWITCH TO CHOOSE AN ACTION. INDEX 0 IS
THE COMMAND AND INDEX 1 AND 2 ARE KEY/VALLUES PAIRS.
*/

const server = net.createServer(conn => {
    console.log('new client request');

    conn.on('data', data => {

        let dataString = data.toString();
        let split = dataString.split('=');
        var returnValue = 'blank';

        try {
            switch (split[0]) {

                case 'add light':
                    var key = split[1];
                    var value = split[2];
                    functions.setItem(key, value);
                    console.log(key + value);

                    break;

                case 'add power strip':
                    var key = split[1];
                    var value = split[2];
                    functions.setItem(key, value);
                    console.log(key + value);

                    break;

                case 'switch power':
                    //Switch power functions are in serverFunctions directory in NodePersistFunctions.js
                    var key = split[1];
                    powerSwitch.SwitchPower(key);
                    break;

                case 'move device':
                    var key = split[1];
                    var destination = split[2];
                    if (destination === 'lights') {
                        moveDevice.MoveToLights(key);
                    }
                    else if (destination === 'power strips') {
                        moveDevice.MoveToPowerStrip(key);
                    }

                case 'remove device':
                    var key = split[1];
                    functions.removeItem(key);

                case 'get device':

                    var key = split[1];
                    
                    returnValue = promiseItem.then(value => {
                        console.log(`RETURNVALUE value ${value}`);
                        return value;
                    })

                    console.log('test = ' + returnValue);
                    break;
                default:
                    break;

            }

        } catch (error) {

        }

        conn.write("DATA FROM SERVER " + returnValue + '\r\n');

    });

    conn.on('end', () => {
    });
});


var serverOptions = {
    host: 'localhost',
    port: port
}
server.listen(serverOptions);
console.log("Server on port " + port);
