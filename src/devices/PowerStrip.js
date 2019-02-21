const outlet = require('./Outlets');
class PowerStrip extends Device{

    constructor(){
        this.power = false;
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