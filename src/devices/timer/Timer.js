// const baseDevice = require('../Device');
// class Timer {
//     constructor(device) {
//         if (!device instanceof baseDevice.Device) {
//             throw new Error('Incorrect type');
//         }
//         else {
//             this.device = device;
//         }
//     }
//     setTimer(time) {
//         if (typeof time != 'number') {
//             throw new Error('Type error');
//         }
//         else {
//             console.log("Timer started at " + new Date());
//             this.device
//             return new Promise((resolve, reject) => {

//                 setTimeout(() => {
//                     resolve(console.log("Timer ended at " + new Date()));
//              }, value * 1000);

//                 if (error) {
//                     reject(console.log('Timer function rejected'));
//                 }
//             })
//         }
//     }
// }
// module.exports.Timer = Timer;