var _ = require('./index');

var o = { a: 0, b: 'hi' };

var x = _.set(o, 'a.k.g.c[3].tt', 1);
console.log(x.a.k.g.c);
