const customStorage = require('../storageInit/Storage');


var nodeStorage = customStorage.storage;

async function setItem(key, value) {

    await nodeStorage.setItem(key, value);
}

async function getItem(key) {
    // console.log(await nodeStorage.getItem(key));
    return await nodeStorage.getItem(key)
        .then(value => {
            return value;
        });
}

async function removeItem(key) {
    await nodeStorage.removeItem(key);
}

module.exports = {
    setItem,
    getItem,
    removeItem
}
