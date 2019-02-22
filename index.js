
var readlineSync = require('readline-sync');

const rl = readlineSync.createInterface;

start();
                        
function start(){

          while(true)
          {
              var ans = readlineSync.question("What would you like to do? Type help for options");
              switch(ans) {
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
                          default:
                            console.log("Invalid Input")
                        }
                    
                  };    
                }
        
        
          
          
