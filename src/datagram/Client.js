const net = require('net');
/*const options = {

  port: 9090

};


client.on('data', data => {
  console.log(data.toString());
  client.end();
});*/


var loopConnection = function() {

    var client = new net.Socket();

    client.connect(9090, function() {
        console.log('CONNECTED TO Port ' + 9090);
        client.write('data');
    });

    client.on('data', function(data) {
        console.log('DATA: ' + data);
        client.destroy();
    });

    client.on('close', function() {
        console.log('Connection closed');
        setTimeout(function() {
            loopConnection(); // restart again
        }, 1000); // Wait for one second
    });
};

loopConnection(); // Initialize and first call loopConnection

