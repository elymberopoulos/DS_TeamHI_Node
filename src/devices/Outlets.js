class Outlet{

    constructor(){
        this.power = false;
    }

    setPower(){
        if(this.power === false){
            this.power = true;
        }
        else{
            this.power = false;
        }
    }
}

// let Outlet = class Outlet {
//     constructor() {
//         this.power = false;
//     }
//     setPower() {
//         if (this.power === false) {
//             this.power = true;
//         }
//         else {
//             this.power = false;
//         }
//     }
// }
module.exports.Outlet = Outlet;