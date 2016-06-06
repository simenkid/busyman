var expect = require('chai').expect,
    _ = require('../index.js');     // busyman module

describe('Methods of type checking', function() {
    describe('#_.assign', function() {
        var originObj = {
                user: 'barney'
            },
            sourceObj1 = {
                age: 36
            },
            sourceObj2 = { x: 'hi', y: [0, 1, 2] },
            sourceObj3 = { z: { z3: [ 0, 1, 2 ] } };

        it('should be a function', function () {
            expect(_.assign).to.be.a('function');
        });

        it('assigned object should be equal to originObj', function () {
            expect(_.assign(originObj, sourceObj1)).to.be.equal(originObj);
            expect(originObj).to.be.deep.equal({
                user: 'barney',
                age: 36
            });

            expect(_.assign(originObj, sourceObj2, sourceObj3)).to.be.equal(originObj);
            expect(originObj).to.be.deep.equal({
                user: 'barney',
                age: 36,
                x: 'hi', 
                y: [0, 1, 2],
                z: { z3: [ 0, 1, 2 ] }
            });

            sourceObj1.age = 40;
            expect(_.assign(originObj, sourceObj1)).to.be.equal(originObj);
            expect(originObj).to.be.deep.equal({
                user: 'barney',
                age: 40,
                x: 'hi', 
                y: [0, 1, 2],
                z: { z3: [ 0, 1, 2 ] }
            });
        });
    });

    describe('#_.keys', function() {
        var obj = { a:0, b:1, c:2 },
            arr = [ 1, 2, 3, 4, 5 ],
            str = 'hey';

        it('should be a function', function() {
            expect(_.keys).to.be.a('function');
        });

        it('should returns the array of property names', function() {
            expect(_.keys(obj)).to.be.deep.equal([ 'a', 'b', 'c' ]);
            expect(_.keys(arr)).to.be.deep.equal([ '0', '1', '2', '3', '4' ]);
            expect(_.keys(str)).to.be.deep.equal([ '0', '1', '2' ]);
        });
    });

    describe('#_.values', function() {
        var obj = { a: 0, b: 1, c: 2 },
            arr = [ 1, 'a', 'b', {}, [] ],
            str = 'hey';

        it('should be a function', function() {
            expect(_.values).to.be.a('function');
        });

        it('should returns the array of property names', function() {
            expect(_.values(obj)).to.be.deep.equal([ 0, 1, 2 ]);
            expect(_.values(arr)).to.be.deep.equal([ 1, 'a', 'b', {}, [] ]);
            expect(_.values(str)).to.be.deep.equal([ 'h', 'e', 'y' ]);
        });
    });

    describe('#_.forOwn', function() {}).skip;

    describe('#_.get', function() {
        var object = { 'a': [{ 'b': { 'c': 3 } }] };

        it('should be a function', function() {
            expect(_.get).to.be.a('function');
        });

        it('should be the value of the specified path', function() {
            expect(_.get(object, 'a[0].b.c')).to.be.equal(3);
            expect(_.get(object,  ['a', '0', 'b'])).to.be.deep.equal({ 'c': 3 });
            expect(_.get(object,  'a.b.c')).to.be.equal(undefined);
            expect(_.get(object,  'a.b.c', 'default')).to.be.equal('default');
        });
    });

    describe('#_.has', function() {
        var object = { 'a': [{ 'b': { 'c': 3 } }] };

        it('should be a function', function() {
            expect(_.has).to.be.a('function');
        });

        it('should be the value of the specified path', function() {
            expect(_.has(object, 'a')).to.be.equal(true);
            expect(_.has(object,  ['a', '0'])).to.be.equal(true);
            expect(_.has(object,  'a[0].b.c')).to.be.equal(true);
            expect(_.has(object,  'a.b.c')).to.be.equal(false);
        });
    });

    
});