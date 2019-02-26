
const customStorage = require('./storageInit/Storage');
const port = process.env.PORT || 3000;
const net = require('net');
const readWrite = require('./storageInit/ReadWrite');
const maps = require('./storageInit/LightandPowerMaps');

customStorage.createStorageDirectories();
// customStorage.storageInit();

const storageRoot = customStorage.storageDir;
const powerStripDir = customStorage.powerStripDir;
const lightsDir = customStorage.lightDir;

var lightMap = maps.lightMap;
var powerStripMap = maps.powerStripMap;

/////////////////////////////////
/*
These functions copy the current key value pairs to the .txt files.
Use these if a value is ever changed or new entry added.
*/
function copyMapToLightStorage() {
    for (const entry of lightMap.entries()) {
        readWrite.WriteToLights(entry[0] + '=' + entry[1]);
    }
}
function copyMapToPowerStripStorage() {
    for (const entry of powerStripMap.entries()) {
        readWrite.WriteToPowerStrips(entry[0] + '=' + entry[1]);
    }
}
/////////////////////////////////

/*
IN ADD DEVICE UNDER THE UICOMMANDS PACKAGE A SERVER SIDE COMMAND IS PREPENDED TO THE STRING
TO BE SENT OVER TCP. THE SERVER SPLITS ON '=' AND USES A SWITCH TO CHOOSE AN ACTION. INDEX 0 IS
THE COMMAND AND INDEX 1 IS THE VALUE.
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
                        copyMapToLightStorage();
                        console.log(lightMap.entries());
                        break;

                    case 'add power strip':
                        powerStripMap.set(split[1], split[2]);

                        //OVERWRITE VALUES IN THE NODE DATA PERSIST
                        copyMapToPowerStripStorage();
                        console.log(powerStripMap.entries());
                        break;

                    case 'switch power':

                        var key = split[1];
                        if (lightMap.has(key)) {
                            var stringValue = JSON.stringify(lightMap.get(key));

                            if (stringValue.includes('false')) {
                                let newVal = stringValue.replace('false', 'true');
                                lightMap.set(key, newVal);
                                copyMapToLightStorage();
                                console.log("NEW VALUE: " + lightMap.get(key));
                            }
                        }
                        break;
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

server.listen(port);
