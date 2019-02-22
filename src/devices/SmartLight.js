const device = require('./Device');
class SmartLight extends device.Device {
    constructor() {
        super();
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

    // setBrightness(value) {
    //     if (value instanceof Number) {
    //         if (value > 10 || value < 0) {
    //             throw new Error("Invalid number");
    //         }
    //         else {
    //             this.brightness = value;
    //         }
    //     }
    //     else {
    //         throw new Error('Error!');
    //     }
    // }
}
module.exports.SmartLight = SmartLight;