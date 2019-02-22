const outlet = require('./Outlets');
const device = require('./Device');
class PowerStrip extends device.Device{

    constructor(){
        super();
        this.outlets = new Array();
        for(var i = 0; i < 7; i ++){
            this.outlets.push(new outlet.Outlet())
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
        for(var i = 0; i < this.outlets.length; i++){
            console.log(this.outlets[i]);
        }
    }
    
    

}
module.exports.PowerStrip = PowerStrip;