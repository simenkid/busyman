# busyman
A lodash-like JavaScript utility library

[![NPM](https://nodei.co/npm/busyman.png?downloads=true)](https://nodei.co/npm/busyman/)  

[![Travis branch](https://img.shields.io/travis/simenkid/busyman/master.svg?maxAge=2592000)](https://travis-ci.org/simenkid/busyman)
[![npm](https://img.shields.io/npm/v/busyman.svg?maxAge=2592000)](https://www.npmjs.com/package/busyman)
[![npm](https://img.shields.io/npm/l/busyman.svg?maxAge=2592000)](https://www.npmjs.com/package/busyman)

<br />

## Table of Contents

1. [Overiew](#Overiew)  
2. [Installation](#Installation)  
3. [Usage](#Usage)
4. [APIs](#APIs)  

<br />

<a name="Overiew"></a>  
## 1. Overview  

**busyman** is a lodash-like JS utility library that provides commonly used functions.  
  
<a name="Installation"></a>
## 2. Installation

> $ npm install busyman --save
  

<a name="Usage"></a>
## 3. Usage

```js
var _ = require('busyman');

console.log(_.isArray('hello'));    // false
```
  
<a name="APIs"></a>
## 4. APIs

* Type checking
    * [_.isNull()](#API_isNull), [_.isNil()](#API_isNil), [_.isUndefined()](#API_isUndefined), [_.isNaN()](#API_isNaN)  
    * [_.isArray()](#API_isArray), [_.isObject()](#API_isObject), [_.isPlainObject()](#API_isPlainObject), [_.isBuffer()](#API_isBuffer)  
    * [_.isBoolean()](#API_isBoolean),[_.isNumber()](#API_isNumber), [_.isString()](#API_isString), [_.isInteger()](#API_isInteger), [_.isFunction()](#API_isFunction)  
  
* String
    * [_.parseInt()](#API_parseInt)  
    * [_.startsWith()](#API_startsWith), [_.endsWith()](#API_endsWith)  
    * [_.split()](#API_split), [_.replace()](#API_replace)  
    * [_.camelCase()](#API_camelCase), [_.toLower()](#API_toLower), [_.toUpper()](#API_toUpper), [_.lowerCase()](#API_lowerCase), [_.upperCase()](#API_upperCase), [_.lowerFirst()](#API_lowerFirst), [_.upperFirst()](#API_upperFirst)  
  
* Object/Collection
    * [_.has()](#API_has), [_.includes()](#API_includes)  
    * [_.keys()](#API_keys), [_.values()](#API_values), [_.size()](#API_size)  
    * [_.assign()](#API_assign), [_.merge()](#API_merge), [_.omit()](#API_omit), [_.pick()](#API_pick)  
    * [_.get()](#API_get), [_.set()](#API_set), [_.find()](#API_find), [_.filter()](#API_filter)  
    * [_.forOwn()](#API_forOwn), [_.forEach()](#API_forEach)  
  
* Array
    * [_.some()](#API_some)  
    * [_.findIndex()](#API_findIndex), [_.indexOf()](#API_indexOf)  
    * [_.concat()](#API_concat), [_.join()](#API_join)  
    * [_.slice()](#API_slice), [_.last()](#API_last), [_.pull()](#API_pull), [_.take()](#API_take), [_.drop()](#API_drop), [_.dropRight()](#API_dropRight)  
    * [_.map()](#API_map), [_.reject()](#API_reject), [_.remove()](#API_remove)  
  
* Function
    * [_.bind()](#API_bind), [_.delay()](#API_delay)
  
* Utility
    * [_.isEmpty()](#API_isEmpty), [_.isEqual()](#API_isEqual)  
    * [_.clone()](#API_clone), [_.cloneDeep()](#API_cloneDeep)  
    * [_.now()](#API_now)  


*************************************************
<a name="API_isArray"></a>
### _.isArray(value)
Checks if a value is an array. This method is based on [Array.isArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray).  

**Arguments:**  

1. `value` (_*_): The value to check.  

**Returns:**  

 * (_Boolean_): `true` if it is, otherwise `false`.  

**Examples:** 

```js
_.isArray([ 1 ]);       // true
_.isArray({ x: 1 });    // false
```

*************************************************
<a name="API_isNaN"></a>
### _.isNaN(value)
Checks if a value is NaN. This method is based on the global [isNaN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN).  

**Arguments:**  

1. `value` (_*_): The value to check.  

**Returns:**  

 * (_Boolean_): `true` if it is NaN, otherwise `false`.  

**Examples:** 

```js
// These examples are from MDN document
_.isNaN(NaN);       // true
_.isNaN(undefined); // true
_.isNaN({});        // true
_.
_.isNaN(true);      // false
_.isNaN(null);      // false
_.isNaN(37);        // false

// strings
_.isNaN("37");      // false
_.isNaN("37.37");   // false
_.isNaN("123ABC");  // true
_.isNaN("");        // false
_.isNaN(" ");       // false

// dates
_.isNaN(new Date());            // false
_.isNaN(new Date().toString()); // true

// This is a false positive and the reason why isNaN is not entirely reliable
_.isNaN("blabla");  // true: "blabla" is converted to a number. 
                    // Parsing this as a number fails and returns NaN
```

*************************************************
<a name="API_isBuffer"></a>
### _.isBuffer(value)
Checks if a value is a Buffer. This method is based on node.js [Buffer.isBuffer](https://nodejs.org/api/buffer.html#buffer_class_method_buffer_isbuffer_obj).  

**Arguments:**  

1. `value` (_*_): The value to check.  

**Returns:**  

 * (_Boolean_): `true` if it is a buffer, otherwise `false`.  

**Examples:** 

```js
_.isBuffer(new Buffer([ 1, 2, 3 ]));    // true
_.isBuffer([ 1, 2 ]);                   // false
```

*************************************************
<a name="API_isInteger"></a>
### _.isInteger(value)
Checks if a value is an integer. This method is based on [Number.isInteger](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger).  

**Arguments:**  

1. `value` (_*_): The value to check.  

**Returns:**  

 * (_Boolean_): `true` if it is an interger, otherwise `false`.  

**Examples:** 

```js
_.isInteger(12);    // true
_.isInteger(1.36);  // false
_.isInteger('hi');  // false
_.isInteger('18');  // false
_.isInteger({});    // false
```

*************************************************
<a name="API_isBoolean"></a>
### _.isBoolean(value)
Checks if a value is a bool.  

**Arguments:**  

1. `value` (_*_): The value to check.  

**Returns:**  

 * (_Boolean_): `true` if it is a bool, otherwise `false`.  

**Examples:** 

```js
_.isBoolean(false); // true
_.isBoolean(18);    // false
```

*************************************************
<a name="API_isNumber"></a>
### _.isNumber(value)
Checks if a value is a number.  

**Arguments:**  

1. `value` (_*_): The value to check.  

**Returns:**  

 * (_Boolean_): `true` if it is a number, otherwise `false`.  

**Examples:** 

```js
_.isNumber(3);          // true
_.isNumber('18');       // false
_.isNumber('hello');    // false

```

*************************************************
<a name="API_isString"></a>
### _.isString(value)
Checks if a value is a string.  

**Arguments:**  

1. `value` (_*_): The value to check.  

**Returns:**  

 * (_Boolean_): `true` if it is a string, otherwise `false`.  

**Examples:** 

```js
_.isString('hello');    // true
_.isString(6);          // false
```

*************************************************
<a name="API_isFunction"></a>
### _.isFunction(value)
Checks if a value is a function.  

**Arguments:**  

1. `value` (_*_): The value to check.  

**Returns:**  

 * (_Boolean_): `true` if it is a function, otherwise `false`.  

**Examples:** 

```js
_.isFunction(function () {});   // true
_.isFunction(6);                // false
```

*************************************************
<a name="API_isUndefined"></a>
### _.isUndefined(value)
Checks if a value is undefined.  

**Arguments:**  

1. `value` (_*_): The value to check.  

**Returns:**  

 * (_Boolean_): `true` if it is undefined, otherwise `false`.  

**Examples:** 

```js
var aUndef;

_.isUndefined();        // true
_.isUndefined(aUndef);  // true
_.isUndefined(6);       // false
```

*************************************************
<a name="API_isNull"></a>
### _.isNull(value)
Checks if a value is null.  

**Arguments:**  

1. `value` (_*_): The value to check.  

**Returns:**  

 * (_Boolean_): `true` if it is null, otherwise `false`.  

**Examples:** 

```js
var aUndef;

_.isNull(null);     // true
_.isNull(aUndef);   // false
_.isNull(3);        // false
```

*************************************************
<a name="API_isNil"></a>
### _.isNil(value)
Checks if a value is null or undefined.  

**Arguments:**  

1. `value` (_*_): The value to check.  

**Returns:**  

 * (_Boolean_): `true` if it is null or undefined, otherwise `false`.  

**Examples:** 

```js
var aUndef;

_.isNil(null);      // true
_.isNil(aUndef);    // true
_.isNil(3);         // false
_.isNil([]);        // false
```

*************************************************
<a name="API_isObject"></a>
### _.isObject(value)
Checks if a value is an object. A `null` is considered not an object. An array is considered as an object as usual.  

**Arguments:**  

1. `value` (_*_): The value to check.  

**Returns:**  

 * (_Boolean_): `true` if it is an object, otherwise `false`.  

**Examples:** 

```js
var anObject = { x: 1 },
    anArray = [ 1, 2 ],
    aNull = null,
    notAnObject = 8;

_.isObject({ x: 1 });   // true
_.isObject([ 1, 2 ]);   // true
_.isObject(null);       // false
_.isObject(8);          // false
```

*************************************************
<a name="API_isPlainObject"></a>
### _.isPlainObject(value)
Checks if a value is a plain object. A `null` is not an plain object. An array is not an plain object. An object created from a constructo other than Object constructor is not an plain object.  

**Arguments:**  

1. `value` (_*_): The value to check.  

**Returns:**  

 * (_Boolean_): `true` if it is a plain object, otherwise `false`.  

**Examples:** 

```js
function Foo() {}   // Foo constructor

_.isPlainObject({ x: 1 });  // true
_.isPlainObject([ 1, 2 ]);  // false
_.isPlainObject(null);      // false
_.isPlainObject(8);         // false
_.isPlainObject(new Foo()); // false
```

*************************************************
<a name="API_concat"></a>
### _.concat(array, value1[, value2[, ...[, valueN]]])
Creates a new array concatenating `array` with any additional arrays and/or values.

**Arguments:**  

1. `array` (_Array_): The array to concatenate.
2. `valueN` (_Depends_): The values to concatenate.

**Returns:**  

 * (_Array_): Returns the new concatenated array.

**Examples:** 

```js
var array = [ 1 ];
var other = _.concat(array, 2, [ 3 ], [ [ 4 ] ]);

console.log(other);     // [ 1, 2, 3, [ 4 ] ]
console.log(array);     // [ 1 ]
```

*************************************************
<a name="API_drop"></a>
### _.drop(array, n)
Creates a slice of `array` with `n` elements dropped from the beginning.

**Arguments:**  

1. `array` (_Array_): The array to query.
2. `n` (_Number_): The number of elements to drop. Default is 0.

**Returns:**  

 * (_Array_): Returns the slice of `array`.

**Examples:** 

```js
var array = [ 1, 2, 3, 4, 5, 6 ];

_.drop(array);      // [ 1, 2, 3, 4, 5, 6 ]
_.drop(array, 3);   // [ 4, 5, 6 ]
_.drop(array, 6);   // []
```

*************************************************
<a name="API_dropRight"></a>
### _.dropRight(array, n)
Creates a slice of `array` with `n` elements dropped from the end.

**Arguments:**  

1. `array` (_Array_): The array to query.
2. `n` (_Number_): The number of elements to drop. Default is 0.

**Returns:**  

 * (_Array_): Returns the slice of `array`.

**Examples:** 

```js
var array = [ 1, 2, 3, 4, 5, 6 ];

_.dropRight(array);      // [ 1, 2, 3, 4, 5, 6 ]
_.dropRight(array, 3);   // [ 1, 2, 3 ]
_.dropRight(array, 6);   // []
```

*************************************************
<a name="API_findIndex"></a>
### _.findIndex(array, predicate[, thisArg])
Gets an index in the `array`, if an value in the array satisfies the provided `predicate` function. Otherwise -1 is returned.  

**Arguments:**  

1. `array` (_Array_): The array to search.
2. `predicate` (_Function_): `function (value, index, array) { }`, the function invoked per iteration.
     * `value`: The current value being processed in the `array`.
     * `index`: The index of the current value being processed in the `array`.
     * `array`: The original `array`.
3. `thisArg` (_Depends_): Optional. Object to use as this when executing callback.

**Returns:**  

 * (_Number_): Returns the index of the found value, else -1.

**Examples:** 

```js
var array = [ 1, 2, 3, 1, 2, 3 ];

_.findIndex(array, function (value, index, array) {
    return value > 2;
}); // 2

_.findIndex(array, function (value, index, array) {
    return value > 4;
});    // -1
```

*************************************************
<a name="API_indexOf"></a>
### _.indexOf(array, value[, fromIndex])  
Gets the first index at which a given `value` can be found in the `array`, or -1 if it is not present.  

**Arguments:**  

1. `array` (_Array_): The array to search.
2. `value` (_String_ | _Number_): The value to search for.
3. `fromIndex` (_Number_): The index to search from. Default is 0.

**Returns:**  

 * (_Number_): Returns the index of the matched value, else -1.  

**Examples:** 

```js
var array = [ 1, 2, 3, 1, 2, 3 ];

_.indexOf(array, 3);    // 2
_.indexOf(array, 3, 2); // 5
```

*************************************************
<a name="API_join"></a>
### _.join(array[, separator])
Converts all elements in array into a string separated by `separator`.

**Arguments:**  

1. `array` (_Array_): The array to convert.
2. `separator` (_String_): Specifies a string to separate each element of the array. Default is ','.

**Returns:**  

 * (_String_): Returns the joined string.

**Examples:** 

```js
_.join([ 'a', 'b', 'c' ]));       // 'a,b,c'
_.join([ 'a', 'b', 'c' ], '-'));  // 'a-b-c'
```

*************************************************
<a name="API_last"></a>
### _.last(array)
Gets the last element of array.

**Arguments:**  

1. `array` (_Array_): The array to query.

**Returns:**  

 * (_Depends_): Returns the last element of `array`.

**Examples:** 

```js
_.last(['a', 'b', 'c']);    // 'c'
```

*************************************************
<a name="API_pull"></a>
### _.pull(array, value1[, value2[, ...[, valueN]]])
Removes all given `values` from `array`.  

**Arguments:**  

1. `array` (_Array_): The array to modify.
2. `valueN` (_String_ | _Number_): The values to remove.

**Returns:**  

 * (_Array_): Returns the pulled `array`.

**Examples:** 

```js
var array = [ 'a', 'b', 'c', 'a', 'b' ];

_.pull(array, 'a', 'c');    // [ 'b', 'b' ]
```

*************************************************
<a name="API_slice"></a>
### _.slice(array[, start[, end]])
Creates a shallow copy of a portion of an `array` into a new array object.

**Arguments:**  

1. `array` (_Array_): The array to slice.
2. `start` (_Number_): The start position. Default is 0.
3. `end` (_Number_): The end position. Default is `array.length`.

**Returns:**  

 * (_Array_): Returns the slice of `array`.

**Examples:** 

```js
var array = [ 1, 2, 3 ];

_.slice(array, 1);      // [ 2, 3 ]
_.slice(array, 1, 2);   // [ 2 ]
```

*************************************************
<a name="API_take"></a>
### _.take(array)
Creates a slice of `array` with `n` elements taken from the beginning.

**Arguments:**  

1. `array` (_Array_): The array to query.
2. `n` (_Number_): The number of elements to take.

**Returns:**  

 * (_Array_): Returns the slice of `array`.

**Examples:** 

```js
var array = [ 1, 2, 3 ];

_.take(array, 2);   // [ 1, 2 ]
```

*************************************************
<a name="API_map"></a>
### _.map(array, iterate)
Creates an array of values by running each element in `array` thru `iterate`.

**Arguments:**  

1. `array` (_Array_): The array to iterate over.
2. `iterate` (_Function_): `function (value, index, array) { }`, the function invoked per iteration.
     * `value`: The current value being processed in the `array`.
     * `index`: The index of the current value being processed in the `array`.
     * `array`: The original `array`.

**Returns:**  

 * (_Array_): Returns the new mapped array.

**Examples:** 

```js
var array = [ 1, 2, 3 ];

_.map(array, String);   // [ '1', '2', '3' ]

_.map(array, function (val) {
    return val * 2;
});  // [ 2, 4, 6 ]
```

*************************************************
<a name="API_reject"></a>
### _.reject(array, predicate)
returns the elements of `array` that predicate does not return truthy for.

**Arguments:**  

1. `array` (_Array_): The array to iterate over.
2. `predicate` (_Function_ | _String_ | _Number_): `function (value, index, array) { }`, the function invoked per iteration.
     * `value`: The current value being processed in the `array`.
     * `index`: The index of the current value being processed in the `array`.
     * `array`: The original `array`.

**Returns:**  

 * (_Array_): Returns the new filtered array.  

**Examples:** 

```js
var array = [ 1, 2, 3, 4 ];

_.reject(array, function (val) {
    return val % 2 === 0;
});  // [ 1, 3 ]

_.reject(array, 4);     // [ 1, 2, 3 ]
```

*************************************************
<a name="API_some"></a>
### _.some(array, predicate)
Checks if predicate returns truthy for _String_ and _Number_ element of collection. Iteration is stopped once predicate returns truthy.

**Arguments:**  

1. `array` (_Array_): The array to iterate over.
2. `predicate` (_Function_ | _String_ | _Number_): `function (value, index, array) { }`, the function invoked per iteration.
     * `value`: The current value being processed in the `array`.
     * `index`: The index of the current value being processed in the `array`.
     * `array`: The original `array`.

**Returns:**  

 * (_Boolean_): Returns true if any element passes the predicate check, else false.

**Examples:** 

```js
_.some([ 1, 2, 3, 4, 5 ], function (val) {
    return val % 2 === 0;
}); // true

_.some([ 1, 3, 5 ], function (val) {
    return val % 2 === 0;
}); // false

_.some([ 'a', 'b', 'c' ], 'a'); // true
_.some([ 'a', 'b', 'c' ], 'd'); // false
```

*************************************************
<a name="API_remove"></a>
### _.remove(array, predicate)
Removes all elements from `array` that predicate returns truthy for and returns an array of the removed elements.

**Arguments:**  

1. `array` (_Array_): The array to modify.
2. `predicate` (_Function_ | _String_ | _Number_): `function (value, index, array) { }`, the function invoked per iteration.
     * `value`: The current value being processed in the `array`.
     * `index`: The index of the current value being processed in the `array`.
     * `array`: The original `array`.

**Returns:**  

 * (_Array_): Returns the new array of removed elements.

**Examples:** 

```js
var array = [ 1, 2, 3, 4 ];

_.remove(array, function (val) {
    return val % 2 === 0;
}); // [ 2, 4 ]

console.log(array); // [ 1, 3 ]

_.remove(array, 3); // [ 3 ]
console.log(array); // [ 1 ]
```

*************************************************
<a name="API_bind"></a>
### _.bind(func, thisArg[, partial1[, partial2[, ... [, partialN]]]])
Creates a function that invokes `func` with the this binding of `thisArg` and `partialN` prepended to the arguments it receives. 

**Arguments:**  

1. `func` (_Function_): The function to bind.
2. `thisArg` (): The this binding of `func`.
3. `partialN` (_Depends_): The arguments to be partially applied.

**Returns:**  

 * (_Function_): Returns the new bound function.

**Examples:** 

```js
var greet = function (greeting, punctuation) {
    return greeting + ' ' + this.name + punctuation;
};

var person = {
    name: 'Peter',
    age: 24
};

var bound = _.bind(greet, person, 'Hello');

bound('!'); // 'Hello Peter!'
```

*************************************************
<a name="API_delay"></a>
### _.delay(func, time, [, arg1[, arg2[, ...[, argN]]]])
Invokes `func` after `time` milliseconds. Any additional arguments are provided to `func` when it’s invoked.

**Arguments:**  

1. `func` (_Function_): The function to delay.
2. `time` (_Number_): The number of milliseconds to delay invocation.
3. `argN` (_Depends_): The arguments to invoke `func` with.

**Returns:**  

 * (_Object_): Returns the timer id.

**Examples:** 

```js
_.delay(function(text) {
    console.log(text);
}, 1000, 'Hello');

// Logs 'Hello' after one second.
```

*************************************************
<a name="API_split"></a>
### _.split(string, separator[, limit])

Splits a string into an array of strings by separator.  

**Arguments:**  

1. `string` (_String_): The string to split.  
2. `separator` (_String_ | _RegExp_): The separator pattern to split by.  
3. `limit` (_Number_): The length to truncate results to.  

**Returns:**  

* (_Array_): Returns the string segments.  

**Examples:**  

```js
_.split('abcde', 'c');      // [ 'ab', 'de' ]
_.split('abcde', /[bd]/);   // [ 'a', 'c', 'e' ]
_.split('abcde', '', 3);    // [ 'a', 'b', 'c' ]
```

*************************************************
<a name="API_camelCase"></a>
### _.camelCase(string)

Converts a string into camel case.  

**Arguments:**  

1. `string` (_String_): The string to convert.  

**Returns:**  

* (_String_): Returns the camel cased string.  

**Examples:**  

```js
_.camelCase('24 hour');     // '24Hour'
_.camelCase('HELLO-WORLD'); // 'helloWorld'
_.camelCase('__FOO_BAR__'); // 'fooBar'
```

*************************************************
<a name="API_endsWith"></a>
### _.endsWith(string, target[, position])

Checks if string ends with the given target string.  

**Arguments:**  

1. `string` (_String_): The string to search.  
2. `target` (_String_): The string to search for.  
3. `position` (_Number_): The position to search up to.  

**Returns:**  

* (_Boolean_): Returns true if string ends with target, else false.  

**Examples:**  

```js
_.endsWith('abc', 'c');     // true
_.endsWith('abc', 'b');     // false
_.endsWith('abc', 'b', 2);  // true
```

*************************************************
<a name="API_replace"></a>
### _.replace(string, pattern, replacement)

Replaces matches for pattern in string with replacement.  

**Arguments:**  

1. `string` (_String_): The string to modify.  
2. `pattern` (_String_ | _RegExp_): The pattern to replace.  
3. `replacement` (_String_ | _Function_): The match replacement.  

**Returns:**  

* (_String_): Returns the modified string.  

**Examples:**  

```js
_.replace('abcde', 'c', ' ');       // 'ab de'
_.replace('abcde', 'cde', '123');   // 'ab123'
_.replace('abcde', /[bd]/g, '-');   // 'a-c-e'
```

*************************************************
<a name="API_startsWith"></a>
### _.startsWith(string, target[, position])

Checks if string starts with the given target string.  

**Arguments:**  

1. `string` (_String_): The string to search.  
2. `target` (_String_ | _RegExp_): The string to search for.  
3. `position` (_Number_): The match replacement.  

**Returns:**  

* (_Boolean_): Returns true if string starts with target, else false.  

**Examples:**  

```js
_.startsWith('abc', 'a');       // true
_.startsWith('abc', 'b');       // false
_.startsWith('abc', 'b', 1);    // true
```

*************************************************
<a name="API_toLower"></a>
### _.toLower(string)

Converts a string into lower case.  

**Arguments:**  

1. `string` (_String_): The string to convert.  

**Returns:**  

* (_String_): Returns the lower cased string.  

**Examples:**  

```js
_.toLower('ABCDE');         // 'abcde'
_.toLower('24_HOUR');       // '24_hour'
_.toLower('--FOO-BAR--');   // '--foo-bar--'
```

*************************************************
<a name="API_toUpper"></a>
### _.toUpper()

Converts a string into upper case.  

**Arguments:**  

1. `string` (_String_): The string to convert.  

**Returns:**  

* (_String_): Returns the upper cased string.  

**Examples:**  

```js
_.toUpper('abcde');         // 'ABCDE'
_.toUpper('24_hour');       // '24_HOUR'
_.toUpper('--foo-bar--');   // '--FOO-BAR--'
```

*************************************************
<a name="API_lowerCase"></a>
### _.lowerCase()

Converts string, as space separated words, to lower case.  

**Arguments:**  

1. `string` (_String_): The string to convert.  

**Returns:**  

* (_String_): Returns the lower cased string.  

**Examples:**  

```js
_.lowerCase('HELLO');       // 'hello'
_.lowerCase('HELLO-WORLD'); // 'hello world'
```

*************************************************
<a name="API_lowerFirst"></a>
### _.lowerFirst()

Converts the first character of string to lower case.  

**Arguments:**  

1. `string` (_String_): The string to convert.  

**Returns:**  

* (_String_): Returns the converted string.  

**Examples:**  

```js
_.lowerFirst('HELLO');          // 'hELLO'
_.lowerFirst('HELLO-WORLD');    // 'hELLO-WORLD'
```

*************************************************
<a name="API_upperCase"></a>
### _.upperCase()

Converts string, as space separated words, to upper case.  

**Arguments:**  

1. `string` (_String_): The string to convert.  

**Returns:**  

* (_String_): Returns the upper cased string.  

**Examples:**  

```js
_.upperCase('hello');           // 'HELLO'
_.upperCase('hello-world');     // 'HELLO WORLD'
```

*************************************************
<a name="API_upperFirst"></a>
### _.upperFirst()

Converts the first character of string to upper case.  

**Arguments:**  

1. `string` (_String_): The string to convert.  

**Returns:**  

* (_String_): Returns the converted string.  

**Examples:**  

```js
_.upperFirst('hello');          // 'Hello'
_.upperFirst('hello-world');    // 'Hello-world'
```

*************************************************
<a name="API_assign"></a>
###_.assign(object[, sources1[, sources2[, ...[, sourcesN]]]])

Copy the values of all enumerable own properties from one or more source objects to a destination object. It will return the destination object.

**Arguments:**

1. `object` (*Object*): The destination object.
2. `sourcesN` (*Object*): The source objects.

**Returns:**

- (*Object*): object

**Examples:**

```js
var result;

var function A() {
    this.b = 1;
}

var function B() {
    this.d = 3;
}

A.prototype.c = 2;
B.prototype.e = 4;

result = _.assign({a: 0}, new A(), new B());

console.log(result);
// log { a: 0, b: 1, d: 3 }
```

*************************************************
<a name="API_keys"></a>
###_.keys(object)

Creates an array contains all enumerable property names of a given `object` own. 

**Arguments:**

1. `object` (*Object*): The object to query.

**Returns:**

- (*Array*): Returns the array of all property names.

**Examples:**

```js
function Foo() {
  this.x = 0;
  this.y = 1;
}

Foo.prototype.z = 2;

console.log(_.keys(new Foo));
// log [ 'x', 'y' ] (iteration order is not guaranteed)

console.log(_.keys([ 1, 2, 3, 4, 5 ]));
// log [ '0', '1', '2', '3', '4' ]

console.log(_.keys('hey'));
// log [ '0', '1', '2' ]
```

*************************************************
<a name="API_values"></a>
###_.values(object)

Creates an array contains all enumerable property values of a given `object` own.

**Arguments:**

1. `object` (*Object*): The object to query.

**Returns:**

- (*Array*): Returns the array of all property values.

**Examples:**

```js
function Foo() {
  this.x = 0;
  this.y = 1;
}

Foo.prototype.z = 2;

console.log(_.values(new Foo));
// log [ 0, 1 ] (iteration order is not guaranteed)

console.log(_.values([ 1, 2, 3, 4, 5 ]));
// log [ 1, 2, 3, 4, 5 ]

console.log(_.values('hey'));
// log [ 'h', 'e', 'y' ]
```

*************************************************
<a name="API_forOwn"></a>
###_.forOwn(object, iteratee)

Interates all enumerable properties of `object` own, and execute `iteratee` for each property.

**Arguments:**

1. `object` (*Object*): The object to be iterated.
2. `iteratee` (*Function*): The function invoked per iteration.

**Returns:**

- (*None*)

**Examples:**

```js
var keys = [];
    vals = [];

function Foo() {
  this.x = 0;
  this.y = 1;
}

Foo.prototype.z = 2;

_.forOwn(new Foo, function(value, key) {
  keys.push(key);
  vals.push(val);
});

console.log(keys);
// log [ 'x', 'y' ]

console.log(vals);
// log [ 0, 1 ]

```

*************************************************
<a name="API_get"></a>
###_.get(object, path[, defaultValue])

Get the value of the specified `path` of `object`

**Arguments:**

1. `object` (*Object*): The object to query.
2. `path` (*Array* | *String*): The path refers to an object property.
3. `defaultValue` (*Depends*): If value of specified path not found, return `defaultValue`.

**Returns:**

- (*Depends*): The value of specified path.

**Examples:**

```js
var object = { x: { y: [ { z: 5 } ] } };

console.log(_.get(object, 'x.y[0].z'));
// log 5

console.log(_.get(object, ['x', 'y', '0', 'z']));
// log 5

console.log(_.get(object, 'x.y.z', 'defaultVal'));
// log 'defaultVal'
```

*************************************************
<a name="API_has"></a>
###_.has(object, path)

Check the path of the object exists or not.

**Arguments:**

1. `object` (*Object*): The object to query.
2. `path` (*String* | *Array*): Path to be checked.

**Returns:**

- (*Boolean*): true or false means path is exist or not.

**Examples:**

```js
var object = { x: { y: [ { z: 5 } ] } };

console.log(_.has(object, 'x.y[0].z'));
// log true

console.log(_.has(object, ['x', 'y', '0', 'z']));
// log true

console.log(_.has(object, 'x.y.z'));
// log 'false
```

*************************************************
<a name="API_merge"></a>
###_.merge(object[, sources1[, sources2[, ...[, sourcesN]]]])

Merge all source objects into the destination object.

**Arguments:**

1. `object` (*Object*): The destination object.
2. `sourceN` (*Object*): The source objects.

**Returns:**

- (*Object*): The destination object.

**Examples:**

```js
var originObj = {
        data: [ { user: 'arya' }, { user: 'robb' } ]
    },
    sourceObj1 = {
        data: [ { age: 19 }, { age: 25 } ]
    };

console.log(_.merge(originObj, sourceObj1));
// log [ { user: 'arya', age: 19 }, { user: 'robb', age: 25 } ]
```

*************************************************
<a name="API_omit"></a>
###_.omit(object, props)

Create an object with properties that are not omitted in `object`.

**Arguments:**

1. `object` (*Object*): The source object.
2. `props` (*String* | *Array*): Properties of object to be omitted

**Returns:**

- (*Object*): New object with properities not omit.

**Examples:**

```js
var object = { x: 0, y: '1', z: 2 }

console.log(_.omit(object, 'x'));
//log { y: '1', z: 2 }

console.log(_.omit(object, ['y', 'z']));
//log { x: 0 }
```

*************************************************
<a name="API_pick"></a>
###_.pick(object, props)

Create an object with properties that are picked in `object`.

**Arguments:**

1. `object` (*Object*): The source object.
2. `props` (*String* | *Array*): Properties of object to be picked

**Returns:**

- (*Object*): New object with picked properities.

**Examples:**

```js
var object = { x: 0, y: '1', z: 2 }

console.log(_.pick(object, 'x'));
//log { x: 0 }

console.log(_.pick(object, ['y', 'z']));
//log { y: '1', z: 2 }
```

*************************************************
<a name="API_set"></a>
###_.set(object, path, value)

Set object value to the new `value` at the given `path`

**Arguments:**

1. `object` (*object*): The object to be set
2. `path` (*String* | *Array*): The path specify to the object value.
3. `value` (*Depends*): The value to set.

**Returns:**

- (*Object*): `object`

**Examples:**

```js
var object = { x: { y: [ { z: 5 } ] } };

console.log(_.set(object, 'x.y[0].z'), 'hello');
// log { x: { y: [ { z: 'hello' } ] } }
```

*************************************************
<a name="API_forEach"></a>
###_.forEach(collection, iteratee)

Iterative each element of collection, and execute the iteratee for each element

**Arguments:**

1. `collection` (*Array* | *Object*): The collection to be iterated.
2. `iteratee` (*Function*): The function execute for each element.

**Returns:**

- (*None*)

**Examples:**

```js
var obj = { a: 0, b: 1, c: 'x', d: '2' },
    arr = [ 'x', 'y', 3, '0' ],
    vals1 = [],
    keys1 = [],
    vals2 = [],
    keys2 = [];

_.forEach(obj, function (val, key) {
    vals1.push(val);
    keys1.push(key);
});
console.log(vals1);
// log [ 0, 1, 'x', 'x' ]
console.log(keys1);
// log [ 'a', 'b', 'c', 'd' ]

_.forEach(arr, function (val, key) {
    vals2.push(val);
    keys2.push(key);
});
console.log(vals2);
// log [ 'x', 'y', 3, '0' ]
console.log(keys2);
// log [ '0', '1', '2', '3' ]
```

*************************************************
<a name="API_includes"></a>
###_.includes(collection, value)

Check whether the `value` contained in the `collection`

**Arguments:**

1. `collection` (*Object* | *Array* | *String*): The collection to query.
2. `value` (*Depends*): The value to search for.

**Returns:**

- (*Boolean*): true or false means the value is found or not.

**Examples:**

```js
var obj = { 'user': 'fred', 'age': 40 },
    arr = [1, 2, 3],
    str = 'pebbles';

console.log(_.includes(obj, 'fred'));     // log true
console.log(_.includes(obj, 'freddy'));   // log false

console.log(_.includes(arr, 2));          // log true
console.log(_.includes(arr, 4));          // log false

console.log(_.includes(str, 'eb'));       // log true
console.log(_.includes(str, 'ese'));      // log false
```

*************************************************
<a name="API_size"></a>
###_.size(collection)

Obtains the size of the `collection`.

**Arguments:**

1. `collection` (*Object* | *Array* | *String*): The collection to query.

**Returns:**

- (*Number*): collection size.

**Examples:**

```js
var obj = { 'user': 'fred', 'age': 40 },
    arr = [1, 2, 3],
    str = 'pebbles';

console.log(_.size(obj));   // log 2
console.log(_.size(arr));   // log 3
console.log(_.size(str));   // log 7
```

*************************************************
<a name="API_filter"></a>
###_.filter(collection, predicate)

Iterates all the elements of `collection`, will return an array which contains all the elements of `predicate` returns true.

**Arguments:**

1. `collection` (*Array* | *Object*): The collection to be iterated.
2. `predicate` (*Function*): The function execute for each element.

**Returns:**

- (*Array*): Array contains the filter value.

**Examples:**

```js
var users = [
        { 'user': 'arya',  'age': 19, 'active': true },
        { 'user': 'robb',  'age': 25, 'active': false },
        { 'user': 'sansa', 'age': 22, 'active': true }
    ],
    result;

result = _.filter(users, function (user) {
    return user.active === true;
});

console.log(result);
// log [
//         { 'user': 'arya',  'age': 19, 'active': true },
//         { 'user': 'sansa', 'age': 22, 'active': true }
//     ]
```

*************************************************
<a name="API_find"></a>
###_.find(collection, predicate)

Iterates all the elements of `collection`, will return the first element of `predicate` returns true.

**Arguments:**

1. `collection` (*Array* | *Object*): The collection to be iterated.
2. `predicate` (*Function*): The function execute for each element.

**Returns:**

- (*Depends*): The first matching element.

**Examples:**

```js
var users = [
        { 'user': 'arya',  'age': 19, 'active': true },
        { 'user': 'robb',  'age': 25, 'active': false },
        { 'user': 'sansa', 'age': 22, 'active': true }
    ],
    result;

result = _.find(users, function (user) {
    return user.age > 20; 
});

console.log(result);
// log { 'user': 'robb', 'age': 25, 'active': false }
```
=======
<a name="API_now"></a>
### _.now()

This method is based on [Date.now](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now). It returns the numeric value corresponding to the current time - the number of milliseconds elapsed since 1 January 1970 00:00:00 UTC.  

**Arguments:**  

* **_none_**  

**Returns:**  

* (_Number_): Milliseconds elapsed since 1 January 1970 00:00:00 UTC up until now.  

**Examples:**  

```js
_.now();    // 1466047513349
```

*************************************************
<a name="API_now"></a>
### _.parseInt(string[, radix])

Parses a string to an integer with the specified radix. This method is based on the global [parseInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt).  

**Arguments:**  

* (_String_): The string to parse.  

**Returns:**  

* (_Number_): The parsed numeric value, or NaN if parsing fails.  

**Examples:**  

```js
_.parseInt(" 0xF", 16);     // 15
_.parseInt("17", 8));       // 15
_.parseInt("-F", 16));      // -15
_.parseInt(-15.1, 10));     // -15
_.parseInt("-1111", 2));    // -15
_.parseInt("hello", 16);    // NaN
_.parseInt("546", 2);       // NaN
_.parseInt([], 16);         // NaN
_.parseInt({}, 16);         // NaN
_.parseInt(true, 16);        // NaN
```

*************************************************
<a name="API_isEmpty"></a>
### _.isEmpty(value)

Check if the vlaue is an empty object. An object is empty if it has no own enumerable properties.  
`null` is empty. Array-like values such as arguments objects, arrays, buffers, or strings are considered empty if they have a length of 0.  

**Arguments:**  

1. `value` (_*_): The value to check.  

**Returns:**  

* (_Boolean_): `true` if it is empty, otherwise `false`.  

**Examples:**  

```js
function X () {}
X.prototype.someProp = 0;

function Y (name) {
    this.name = name;
}

_.isEmpty({});      // true
_.isEmpty(new X()); // true
_.isEmpty([]);      // true
_.isEmpty('');      // true

function foo() {
    console.log(_.isEmpty(arguments));
}

foo();                  // true
foo('a', 2, 'hello');   // false

_.isEmpty({ x: 1 });            // false
_.isEmpty(new Y('busyman'));    // false
_.isEmpty([ 2 ]);               // false
_.isEmpty('hello');             // false
```

*************************************************
<a name="API_isEqual"></a>
### _.isEqual(value, other)

Check if the tow given values are deeply equal to each other.  

**Arguments:**  

1. `value` (_*_): The value to compare.  
1. `other` (_*_): The other value to compare.  

**Returns:**  

* (_Boolean_): `true` if the values are deeply equal, otherwise `false`.  

**Examples:**  

```js
var obj1 = {
        x: 1,
        y: [ 1, 2, 3 ],
        z: {
            m: 'hello',
            n: { p: 2, q: [ 'foo', 'bar' ] }
        }
    },
    obj2 = {
        x: 1,
        y: [ 1, 2, 3 ],
        z: {
            m: 'hello',
            n: { p: 2, q: [ 'foo', 'bar' ] }
        }
    },

_.isEqual(obj1, 'hi' );     // false
_.isEqual(obj1, {
    x: 1,
    y: [ 1, 2, 3 ]
});                         // false

_.isEqual(obj1, obj2 );     // true
console.log(obj1 === obj2); // false
```

*************************************************
<a name="API_clone"></a>
### _.clone(value)
Creates a shallow copy of the value.  

**Arguments:**  

1. `value` (_*_): The value to clone.  

**Returns:**  

 * (_*_): The shallow cloned value.  

**Examples:** 

```js
var objects = [ { x: 1 }, { y: 2 } ];

var shallow = _.clone(objects);

console.log(shallow[0] === objects[0]); // true
```

*************************************************
<a name="API_cloneDeep"></a>
### _.cloneDeep(value)
Creates a deep clone of the value.  

**Arguments:**  

1. `value` (_*_): The value to clone.  

**Returns:**  

 * (_*_): The deeply cloned value.  

**Examples:** 

```js
var objects = [ { x: 1 }, { y: 2 } ];

var deep = _.clone(objects);

console.log(deep[0] === objects[0]); // false
```

*************************************************
