const readlineSync = require('readline-sync');
const commandLoop = require('../uiCommands/SwitchLoop');
const connectionInfo = require('../connectionInfo/ConnectionInfo');
const net = require('net');

const address = connectionInfo.getAddress();
const port = connectionInfo.getPort();
console.log("ADDRESS: " + address + " PORT: " + port);


/*
This is a recursive loop that repeatedly waits for commands to be sent to the specified server port.
Command modules are in the uiCommands folder and SwitchLoop.js is used to determine a command input path
and return a string value device to be sent over TCP.
*/
var loopConnection = function () {
  try {
    var client = new net.Socket();
    var ans = readlineSync.question("What would you like to do? Type help for options\n");
    var commandToPost = commandLoop.Start(ans);

    //IF statement and recursion for robustness.
    //Value sent to server is only done if a valid command is returned
    if (commandToPost !== '-1' || commandToPost !== 'help') {
      client.connect(port, function () {
        console.log('CONNECTED TO Port ' + port);
        client.write(commandToPost);
      });
    }
    else{
      loopConnection();
    }

    client.on('data', function (data) {
      console.log('DATA: ' + data);
      client.destroy();
    });
  } catch (error) {
    console.log("CONNECTION ERROR");
    console.log(error);
  }


  client.on('close', function () {
    setTimeout(function () {
      loopConnection(); // restart again
    }, 500);
  });
};

loopConnection();

module.exports = {
  address: address,
  port: port
}
