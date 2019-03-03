const assert = require('chai').assert;
const powerStrip = require('../../src/devices/PowerStrip');

describe('Tests for subclass PowerStrip.js', function () {
    it('Power strips should have a map of 7 outlets', function () {
        var testVal = new powerStrip.PowerStrip();
        assert.equal(testVal.outlets.size, 7);
    })

    it('Test that power is initially off when constructed', function () {
        var testVal = new powerStrip.PowerStrip();
        assert.isFalse(testVal.power);
    })

    it("Test that turning on power strips power works", function () {
        var testVal = new powerStrip.PowerStrip();
        assert.isFalse(testVal.power);
        testVal.setPower();
        assert.isTrue(testVal.power);
    })

    it('Assert that all power strips are initially false', function () {
        var testVal = new powerStrip.PowerStrip();
        for (var i = 0; i < testVal.outlets.size; i++) {
            assert.isFalse(testVal.outlets.get(i));
        }
    })

    it('Test turning on all outlets boolean values', function () {
        var testVal = new powerStrip.PowerStrip();
        for (var i = 0; i < testVal.outlets.size; i++) {
            assert.isFalse(testVal.outlets.get(i));
        }
        testVal.turnOnAllOutlets();
        for (var i = 0; i < testVal.outlets.size; i++) {
            assert.isTrue(testVal.outlets.get(i));
        }
    })

    it('Turn on outlets in certain range of numbers', function () {
        var testVal = new powerStrip.PowerStrip();
        testVal.turnOnOutletRange(1, 4);
        for (var i = 0; i < testVal.outlets.size; i++) {
            if (i === 1 && i <= 4) {
                assert.isTrue(testVal.outlets.get(i));
            }
        }
    })

    it('If non-numerical number ranges are entered an error will throw.', function(){
        var testVal = new powerStrip.PowerStrip();
        assert.throws(()=>{
            testVal.turnOnOutletRange('a', 's');
        }, 'Incorrect types');
    })
})