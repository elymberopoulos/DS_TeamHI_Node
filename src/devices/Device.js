const timer = require('./timer/Timer');

class Device{
    constructor(){   
        this.power = false;
        this.timer = new timer.Timer(this);
    }

}
module.exports.Device = Device;