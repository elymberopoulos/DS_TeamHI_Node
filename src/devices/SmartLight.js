class SmartLight extends Device{
    constructor(){
        this.brightness = 0;
    }

    setBrightness(value){
        if(!value instanceof Number){
            throw("Incorrect variable type.");
        }
        else{
            this.brightness = value;
        }
    }
}
module.exports.SmartLight = SmartLight;