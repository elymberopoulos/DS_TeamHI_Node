const fs = require('fs');
const storage = require('./Storage');
const lightsTXT = storage.lightDir + '/lights.txt';
const powerStripsTXT = storage.lightDir + '/powerstrips.txt';

async function WriteToLights(x) {
    var data = x + '\n';
    await fs.open(lightsTXT, 'as', (err, data) => {
        if (err) {
            if (err.code === 'EEXIST') {
                console.error('lights.txt already exists');
                return;
            }
            throw err;
        }
    });
    await fs.appendFile(lightsTXT, data, 'utf-8', function(err) {
        if(err) {
            return console.log(err);
        }
    
        console.log("successful write");
    });
}

function ReadFromLights(){
    fs.readFile(lightsTXT, {encoding: 'utf-8'}, function(err,data){
        if (!err) {
            console.log('received data: \n' + data);
            return JSON.stringify(data);
        } else {
            console.log(err);
        }
    });
}

async function WriteToPowerStrips(x) {
    var data = x + '\n';
    await fs.open(powerStripsTXT, 'as', (err, data) => {
        if (err) {
            if (err.code === 'EEXIST') {
                console.error('lights.txt already exists');
                return;
            }
            throw err;
        }
    });
    await fs.appendFile(powerStripsTXT, data, 'utf-8', function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("successful write");
    });
}

function ReadFromPowerStrips(){
    fs.readFile(powerStripsTXT, {encoding: 'utf-8'}, function(err,data){
        if (!err) {
            console.log('received data: \n' + data);
            return JSON.stringify(data);
        } else {
            console.log(err);
        }
    });
}

module.exports = {
    WriteToLights: WriteToLights,
    ReadFromLights: ReadFromLights,
    WriteToPowerStrips: WriteToPowerStrips,
    ReadFromPowerStrips: ReadFromPowerStrips
}


// WriteToLights('a');
// WriteToPowerStrips('xxx');
ReadFromLights();
ReadFromPowerStrips();