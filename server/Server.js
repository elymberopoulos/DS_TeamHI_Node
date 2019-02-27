
const customStorage = require('./storageInit/Storage');
const port = process.env.PORT || 3001;
const net = require('net');
const mapsReadWrite = require('./storageInit/LightandPowerMaps');
const powerSwitch = require('./serverFunctions/SwitchPower');
const moveDevice = require('./serverFunctions/ServerMoveDevice');
const removeDevice = require('./serverFunctions/ServerRemoveDevice');

customStorage.createStorageDirectories();
// customStorage.storageInit();

const storageRoot = customStorage.storageDir;
const powerStripDir = customStorage.powerStripDir;
const lightsDir = customStorage.lightDir;

var lightMap = mapsReadWrite.lightMap;
var powerStripMap = mapsReadWrite.powerStripMap;


/*
IN ADD DEVICE UNDER THE UICOMMANDS PACKAGE A SERVER SIDE COMMAND IS PREPENDED TO THE STRING
TO BE SENT OVER TCP. THE SERVER SPLITS ON '=' AND USES A SWITCH TO CHOOSE AN ACTION. INDEX 0 IS
THE COMMAND AND INDEX 1 AND 2 ARE KEY/VALLUES PAIRS.
*/

const server = net.createServer(conn => {
    console.log('new client request');

    conn.on('data', data => {

        let dataString = data.toString();
        console.log(dataString);
        let split = dataString.split('=');

        if (data !== null) {
            try {
                switch (split[0]) {

                    case 'add light':
                        lightMap.set(split[1], split[2]);

                        //OVERWRITE VALUES IN THE NODE DATA PERSIST
                        //IN LIGHTS AND POWER MAPS.js
                        mapsReadWrite.copyMapToLightStorage();
                        console.log(lightMap.entries());
                        break;

                    case 'add power strip':
                        powerStripMap.set(split[1], split[2]);

                        //OVERWRITE VALUES IN THE NODE DATA PERSIST
                        //IN LIGHTS AND POWER MAPS.js
                        mapsReadWrite.copyMapToPowerStripStorage();
                        console.log(powerStripMap.entries());
                        break;

                    case 'switch power':
                        //Switch power functions are in serverFunctions directory
                        var key = split[1];
                        if (lightMap.has(key)) {
                            powerSwitch.SwitchLightPower(key);
                        }

                        else if (powerStripMap.has(key)) {
                            powerSwitch.SwitchPowerStripPower(key);
                        }

                        break;

                    case 'move device':
                        var key = split[1];
                        var destination = split[2];
                        if(destination === 'lights'){
                            moveDevice.MoveToLights(key);
                        }
                        else if(destination === 'power strips'){
                            moveDevice.MoveToPowerStrip(key);
                        }

                    case 'remove device':
                        var key = split[1];
                        removeDevice.ServerRemoveDevice(key);
                    default:
                        break;

                }

            } catch (error) {

            }
        }

        conn.write("DATA RETURN " + data + '\r\n');
    });

    conn.on('end', () => {
        console.log('client left');
    });
});
var serverOptions = {
    host: 'localhost',
    port: port
}
server.listen(serverOptions);
