const outlet = require('./Outlets');
const device = require('./Device');

class PowerStrip extends device.Device{

    constructor(){
        super(); 
        this.outlets = new Map();
        
        for(var i = 0; i < 7; i++){
            this.outlets.set(i,false);
        }
    }

    setPower(){
        if(this.power === false){
            this.power = true;
        }
        else{
            this.power = false;
        }
    }

    showOutletStates(){
        console.log("This device's power is " + this.power);
        for(var i = 0; i < this.outlets.size; i++){
            console.log('outlet ' + i + 'power is ' + this.outlets.get(i));
        }
    }
}
module.exports.PowerStrip = PowerStrip;