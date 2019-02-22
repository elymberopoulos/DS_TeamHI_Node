const assert = require('chai').assert;
const defaultAssert = require('assert');
const device = require('../../src/devices/Device');
const light = require('../../src/devices/SmartLight');
const powerStrip = require('../../src/devices/PowerStrip');
const outlet = require('../../src/devices/Outlets');

describe('Tests for the project devices', function () {
    describe('Tests for the base class of Device.js', function () {
        it('The default state of the base class should be false (off)', function () {
            var testVal = new device.Device();
            assert.isFalse(testVal.power, false);
        });
    });
    describe('Tests for the subclass of SmartLight.js', function () {
        it('The intial brightness should be set to 0', function () {
            var testVal = new light.SmartLight();
            assert.equal(testVal.brightness, 0);
        });
        it('Test that setting the light brightness works correctly', function () {
            var testVal = new light.SmartLight();
            testVal.setBrightness(9);
            assert.equal(testVal.brightness, 9);
        });
        it('Test that the light class throws an error if incorrect brightness type submitted', function () {
            var testVal = new light.SmartLight();
            defaultAssert.throws(() => {
                testVal.setBrightness('k');
            }, 'Error!');
        });
    })
})