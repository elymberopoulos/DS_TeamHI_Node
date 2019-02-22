const device = require('./Device');
class SmartLight extends device.Device{
    constructor(){
        super();
        this.brightness = 0;
    }

    setBrightness(value){
        if(!value instanceof Number){
            throw new Error("Error!");
        }
        else{
            this.brightness = value;
        }
    }
}
module.exports.SmartLight = SmartLight;