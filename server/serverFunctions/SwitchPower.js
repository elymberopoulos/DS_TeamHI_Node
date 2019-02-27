const mapsReadWrite = require('../storageInit/LightandPowerMaps');
var lightMap = mapsReadWrite.lightMap;
var powerStripMap = mapsReadWrite.powerStripMap;

function SwitchLightPower(key){
    var stringValue = JSON.stringify(lightMap.get(key));

    if (stringValue.includes('false')) {
        let newVal = stringValue.replace('false', 'true');
        lightMap.set(key, JSON.parse(newVal));
        mapsReadWrite.copyMapToLightStorage();
        console.log("NEW VALUE: " + lightMap.get(key));
    }
    else if(stringValue.includes('true')){
        let newVal = stringValue.replace('true', 'false');
        lightMap.set(key, JSON.parse(newVal));
        mapsReadWrite.copyMapToLightStorage();
        console.log("NEW VALUE: " + lightMap.get(key));
    }
}

function SwitchPowerStripPower(key){
    var stringValue = JSON.stringify(powerStripMap.get(key));

    if (stringValue.includes('false')) {
        let newVal = stringValue.replace('false', 'true');
        powerStripMap.set(key, JSON.parse(newVal));
        mapsReadWrite.copyMapToPowerStripStorage();
        console.log("NEW VALUE: " + powerStripMap.get(key));
    }
    else if(stringValue.includes('true')){
        let newVal = stringValue.replace('true', 'false');
        powerStripMap.set(key, JSON.parse(newVal));
        mapsReadWrite.copyMapToPowerStripStorage();
        console.log("NEW VALUE: " + powerStripMap.get(key));
    }
}

module.exports = {
    SwitchLightPower,
    SwitchPowerStripPower
}