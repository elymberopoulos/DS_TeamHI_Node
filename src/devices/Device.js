class Device{

    constructor(){   
        this.power = false;
    }

    setTimer(time) {
        if (typeof time != 'number') {
            throw new Error('Type error');
        }
        else {
            console.log("Timer started at " + new Date());
            this.device
            return new Promise((resolve, reject) => {

                setTimeout(() => {
                    resolve(console.log("Timer ended at " + new Date()));
             }, value * 1000);

                if (error) {
                    reject(console.log('Timer function rejected'));
                }
            })
        }
    }

}
module.exports.Device = Device;