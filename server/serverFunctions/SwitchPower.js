const dataPersist = require('../storageInit/Storage');

var nodeStorage = dataPersist.storage;

async function SwitchPower(key){
    var stringValue = JSON.stringify(await nodeStorage.getItem(key));

    if (stringValue.includes('false')) {
        let newVal = stringValue.replace('false', 'true');
        await nodeStorage.setItem(key, JSON.parse(newVal));
        console.log("NEW VALUE: " + await nodeStorage.getItem(key));
    }
    else if(stringValue.includes('true')){
        let newVal = stringValue.replace('true', 'false');
        await nodeStorage.setItem(key, JSON.parse(newVal));
        console.log("NEW VALUE: " + await nodeStorage.getItem(key));
    }
}

module.exports = {
    SwitchPower
}