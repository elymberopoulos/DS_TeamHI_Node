const device = require('./Device');
class SmartLight extends device.Device {
    constructor() {
        super();
        this.description = "light";
        this.brightness = 0;
    }

    setBrightness(value) {
        if (typeof value == 'number') {
            this.brightness = value;
        }
        else {
            throw new Error('Error!');

        }
    }
}
module.exports.SmartLight = SmartLight;