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

* [_.isNull()](#API_isNull)
* [_.isNil()](#API_isNil)
* [_.isUndefined()](#API_isUndefined)
* [_.isNaN()](#API_isNaN)
* [_.isArray()](#API_isArray)
* [_.isBoolean()](#API_isBoolean)
* [_.isBuffer()](#API_isBuffer)
* [_.isFunction()](#API_isFunction)
* [_.isInteger()](#API_isInteger)
* [_.isNumber()](#API_isNumber)
* [_.isObject()](#API_isObject)
* [_.isPlainObject()](#API_isPlainObject)
* [_.isString()](#API_isString)

* [_.has()](#API_has)
* [_.assign()](#API_assign)
* [_.keys()](#API_keys)
* [_.values()](#API_values)
* [_.get()](#API_get)
* [_.set()](#API_set)
* [_.omit()](#API_omit)
* [_.pick()](#API_pick)
* [_.merge()](#API_merge)
* [_.forOwn()](#API_forOwn)

* [_.includes()](#API_includes)
* [_.size()](#API_size)
* [_.find()](#API_find)
* [_.filter()](#API_filter)
* [_.forEach()](#API_forEach)

* [_.concat()](#API_concat)
* [_.drop()](#API_drop)
* [_.dropRight()](#API_dropRight)
* [_.findIndex()](#API_findIndex)
* [_.indexOf()](#API_indexOf)
* [_.join()](#API_join)
* [_.last()](#API_last)
* [_.pull()](#API_pull)
* [_.slice()](#API_slice)
* [_.map()](#API_map)
* [_.take()](#API_take)
* [_.reject()](#API_reject)
* [_.some()](#API_some)
* [_.remove()](#API_remove)

* [_.bind()](#API_bind)
* [_.delay()](#API_delay)

* [_.parseInt()](#API_parseInt)
* [_.split()](#API_split)
* [_.camelCase()](#API_camelCase)
* [_.endsWith()](#API_endsWith)
* [_.replace()](#API_replace)
* [_.startsWith()](#API_startsWith)
* [_.toLower()](#API_toLower)
* [_.toUpper()](#API_toUpper)
* [_.lowerCase()](#API_lowerCase)
* [_.lowerFirst()](#API_lowerFirst)
* [_.upperCase()](#API_upperCase)
* [_.upperFirst()](#API_upperFirst)

* [_.isEmpty()](#API_isEmpty)
* [_.isEqual()](#API_isEqual)
* [_.clone()](#API_clone)
* [_.cloneDeep()](#API_cloneDeep)
* [_.now()](#API_now)

*************************************************

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
var array = [1];
var other = _.concat(array, 2, [3], [[4]]);

console.log(other);     // [1, 2, 3, [4]]

console.log(array);     // [1]
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
var array = [1, 2, 3, 4, 5, 6];

console.log(_.drop(array));         // [1, 2, 3, 4, 5, 6]

console.log(_.drop(array, 3));      // [4, 5, 6]

console.log(_.drop(array, 6));      // []
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
var array = [1, 2, 3, 4, 5, 6];

console.log(_.drop(array));         // [1, 2, 3, 4, 5, 6]

console.log(_.drop(array, 3));      // [1, 2, 3]

console.log(_.drop(array, 6));      // []
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
var array = [1, 2, 3, 1, 2, 3];

console.log(_.findIndex(array, function (value, index, array) {
    return value > 2;
}));        // 2

console.log(_.findIndex(array, function (value, index, array) {
    return value > 4;
}));        // -1
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
var array = [1, 2, 3, 1, 2, 3];

console.log(_.indexOf(array, 3));       // 2

console.log(_.indexOf(array, 3, 2));    // 5
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
console.log(_.join(['a', 'b', 'c']));       // 'a,b,c'

console.log(_.join(['a', 'b', 'c'], '-'));  // 'a-b-c'
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
console.log(_.last(['a', 'b', 'c']));   // 'c'
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
var array = ['a', 'b', 'c', 'a', 'b'];

console.log(_.pull(array, 'a', 'c'));    // ['b', 'b']
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
var array = [1, 2, 3];

console.log(_.slice(array, 1));         // [2, 3]

console.log(_.slice(array, 1, 2));      // [2]
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
var array = [1, 2, 3];

console.log(_.take(array, 2));     // [1, 2]
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
var array = [1, 2, 3];

console.log(_.map(array, String));  // ['1', '2', '3']

console.log(_.map(array, function (val) {
    return val * 2;
}));  // [2, 4, 6]
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
var array = [1, 2, 3, 4];

console.log(_.reject(array, function (val) { return val % 2 === 0; }));     // [1, 3]

console.log(_.reject(array, 4));    // [1, 2, 3]
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

 * (_boolean_): Returns true if any element passes the predicate check, else false.

**Examples:** 

```js
console.log(_.some([1, 2, 3, 4, 5], function (val) { return val % 2 === 0; }));     // true

console.log(_.some([1, 3, 5], function (val) { return val % 2 === 0; }));           // false

console.log(_.some(['a', 'b', 'c'], 'a'));      // true

console.log(_.some(['a', 'b', 'c'], 'd'));      // false
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
var array = [1, 2, 3, 4];

console.log(_.remove(array, function (val) { return val % 2 === 0; }));       // [2, 4]

console.log(array);                 // [1, 3]

console.log(_.remove(array, 3));    // [3]

console.log(array);                 // [1]
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

var person = { name: 'Peter', age: 24 }

var bound = _.bind(greet, person, 'Hello');

console.log(bound('!'));
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
