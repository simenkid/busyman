var expect = require('chai').expect,
    _ = require('../index.js');     // busyman module

describe('Methods of type checking', function() {
    describe('#_.isArray', function() {

        it('should be a function', function () {
            expect(_.isArray).to.be.a('function');
        });

        it('should return true with an input of array', function () {
            expect(_.isArray([ 1, 'xx', 3 ])).to.be.true;
        });

        it('should return false with an input of not array', function () {
            expect(_.isArray(null)).to.be.false;
            expect(_.isArray(undefined)).to.be.false;
            expect(_.isArray(NaN)).to.be.false;
            expect(_.isArray(1)).to.be.false;
            expect(_.isArray({})).to.be.false;
            expect(_.isArray(true)).to.be.false;
            expect(_.isArray('xxx')).to.be.false;
            expect(_.isArray(function () {})).to.be.false;
        });
    });

    describe('#_.isNaN', function() {
        // ...
    });

});