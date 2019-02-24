const readlineSync = require('readline-sync');
const dgram = require('dgram');
const add = require('../uiCommands/Commands')
const connectionInfo = require('../datagram/ConnectionInfo');
var s = dgram.createSocket('udp4');

const rl = readlineSync.createInterface;

const address = connectionInfo.getAddress();
const port = connectionInfo.getPort();
console.log("ADDRESS: " + address + " PORT: " + port);

function start() {
  var running = true;
  while (running) {
    try {
      var ans = readlineSync.question("What would you like to do? Type help for options\n");
      switch (ans) {
        case "add device":
          add.AddDevice();
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
          showDevices()
          break;
        case "test send":
          s.send(Buffer.from('abc'), 3000, 'localhost');
          s.on('message', function (msg, rinfo) {
            console.log('I got this message: ' + msg.toString());
          });
          s.bind(3000);
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
}
  module.exports = {
    address: address,
    port: port
  }
  start();