var dgram = require('dgram');

function testSend() {
  var s = dgram.createSocket('udp4');
  s.send(Buffer.from('abc'), 3000, 'localhost');
}
module.exports.testSend = testSend;