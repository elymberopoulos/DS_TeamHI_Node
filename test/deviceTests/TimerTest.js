const assert = require('chai').assert;
const defaultAssert = require('assert');
const device = require('../../src/devices/Device');
const light = require('../../src/devices/SmartLight');
const powerStrip = require('../../src/devices/PowerStrip');
const outlet = require('../../src/devices/Outlets');

describe("Timer.js Tests", function(){
    it("Assert that a child device Power Strip a timer that is instantiated in the base constructor", function(){
        var testVal = new powerStrip.PowerStrip();
        var timer = testVal.timer;
        assert.isNotNull(timer);
    })
    it("Assert that a child device Smart Light a timer that is instantiated in the base constructor", function(){
        var testVal = new light.SmartLight();
        var timer = testVal.timer;
        assert.isNotNull(timer);
    })
})
