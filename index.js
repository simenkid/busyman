var busyman = {};

busyman.clone = function () {};
busyman.cloneDeep = function () {};

busyman.isArray = Array.isArray;

busyman.isBoolean = function (val) {
    return (typeof val === 'boolean');
};

busyman.isBuffer = function () {};

busyman.isEmpty = function (val) {
};

busyman.isFunction = function () {};
busyman.isInteger = function () {};
busyman.isNaN = function () {};
busyman.isNil = function () {};
busyman.isNull = function () {};
busyman.isNumber = function () {};
busyman.isObject = function () {};
busyman.isPlainObject = function () {};
busyman.isString = function () {};
busyman.isUndefined = function () {};

// object
busyman.assign = function () {};
busyman.forOwn = function () {};
busyman.keys = function () {};
busyman.merge = function () {};
busyman.omit = function () {};
busyman.pick = function () {};
busyman.set = function () {};
busyman.get = function () {};
busyman.has = function () {};

// array
busyman.concat = function () {};
busyman.drop = function () {};
busyman.dropRight = function () {};
busyman.findIndex = function () {};
busyman.indexOf = function () {};
busyman.join = function () {};
busyman.pull = function () {};
busyman.remove = function () {};
busyman.slice = function () {};
busyman.take = function () {};

// collection
busyman.filter = function () {};
busyman.find = function () {};
busyman.forEach = function () {};
busyman.includes = function () {};
busyman.map = function () {};
busyman.reject = function () {};
busyman.size = function () {};
busyman.some = function () {};
busyman.now = function () {};

// function
busyman.bind = function () {};
busyman.delay = function () {};
busyman.spread = function () {};
busyman.wrap = function () {};

// string
busyman.endsWith = function () {};
busyman.lowerCase = function () {};
busyman.lowerFirst = function () {};
busyman.parseInt = function () {};
busyman.replace = function () {};
busyman.split = function () {};
busyman.startsWith = function () {};
busyman.toLower = function () {};
busyman.toUpper = function () {};
busyman.upperCase = function () {};
busyman.upperFirst = function () {};

// util
busyman.toPath = function () {};

module.exports = busyman;