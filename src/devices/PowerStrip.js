const outlet = require('./Outlets');
const device = require('./Device');

class PowerStrip extends device.Device {

    constructor() {
        super();
        this.description = "power strip";
        this.outlets = new Map();

        for (var i = 0; i < 7; i++) {
            this.outlets.set(i, false);
        }
    }

    setPower() {
        if (this.power === false) {
            this.power = true;
        }
        else {
            this.power = false;
        }
    }

    turnOnAllOutlets() {
        for (var i = 0; i < this.outlets.size; i++) {
            this.outlets.set(i, true);
        }
    }

    turnOnOutletRange(a, b) {
        if (typeof a == 'number' && typeof b == 'number') {
            for (var i = 0; i < this.outlets.size; i++) {
                if (i === a && i <= b) {
                    this.outlets.set(i, true);
                }
            }
        }
        else {
            throw new Error('Incorrect types');
        }
    }

    showOutletStates() {
        console.log("This device's power is " + this.power);
        for (var i = 0; i < this.outlets.size; i++) {
            console.log('outlet ' + i + 'power is ' + this.outlets.get(i));
        }
    }
}
module.exports.PowerStrip = PowerStrip;