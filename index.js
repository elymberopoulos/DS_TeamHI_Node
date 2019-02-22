
var readlineSync = require('readline-sync');
const dgram = require('dgram');
var s = dgram.createSocket('udp4');

const rl = readlineSync.createInterface;


function start() {
try {
  while (true) {
    var ans = readlineSync.question("What would you like to do? Type help for options");
    switch (ans) {
      case "add device":
        addDevice()
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
        s.on('message', function(msg, rinfo) {
          console.log('I got this message: ' + msg.toString());
        });
        s.bind(3000);
        break;
      default:
        console.log("Invalid Input")
    }
  };
} catch (error) {
  
}

}
start();





