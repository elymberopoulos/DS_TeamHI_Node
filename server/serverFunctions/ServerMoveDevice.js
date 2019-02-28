const mapsReadWrite = require('../storageInit/LightandPowerMaps');
var lightMap = mapsReadWrite.lightMap;
var powerStripMap = mapsReadWrite.powerStripMap;

async function MoveToLights(key){
    if(powerStripMap.has(key)){
        var placeHolder = await powerStripMap.get(key);
        powerStripMap.delete(key);
        lightMap.set(key, placeHolder);
        await mapsReadWrite.copyMapToLightStorage();
        await mapsReadWrite.copyMapToPowerStripStorage();
    }
}
async function MoveToPowerStrip(key){
    if(lightMap.has(key)){
        var placeHolder = await lightMap.get(key);
        lightMap.delete(key);
        powerStripMap.set(key, placeHolder);
        await mapsReadWrite.copyMapToPowerStripStorage();
        await mapsReadWrite.copyMapToLightStorage();
    }
}

module.exports = {
    MoveToLights,
    MoveToPowerStrip
}