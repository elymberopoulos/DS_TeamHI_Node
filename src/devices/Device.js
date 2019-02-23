const timer = require('./timer/Timer');
const echo = require('./client');
var client = new echo.client; 

class Device{
    constructor(power){   

        this.power = power;
        this.timer = new timer.Timer(this);
        client = new echo.client; 
        client.sendData(power.toString());
        
        
    }


}
module.exports.Device = Device;