const readlineSync = require("readline-sync");
const powerStrips = require("./src/devices/Device");
const smartLight = require("./src/devices/PowerStrip");
const powerStrip = require("./src/devices/SmartLight");
const myDevice = require("./src/devices/Device");

const rl = readlineSync.createInterface;



function start() {
  while (true) {
    var ans = readlineSync.question(
      "What would you like to do? Type help for options"
    );
    switch (ans) {
      case "add device":
        var device = new myDevice.Device(false);
        break;
      case "remove device":
        removeDevice();
        break;
      case "manage device":
        sayHello();
        break;
      case "move device":
        moveDevice();
        break;
      case "show device with state":
        showDeviceswstate();
        break;
      case "show device":
        showDevices();
        break;
      default:
        console.log("Invalid Input");
    }
  }
} start();


