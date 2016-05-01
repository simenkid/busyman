var busyman = {};

busyman.isArray = Array.isArray;

busyman.isBuffer = Buffer.isBuffer;

busyman.isInteger = Number.isInteger;

busyman.isNaN = isNaN;

busyman.isUndefined = function (val) {
    return (undefined === val);
};

busyman.isNull = function (val) {
    return (null === val);
};

busyman.isNil = function (val) {
    return this.isUndefined(val) || this.isNull(val);
};

busyman.isBoolean = function (val) {
    return (typeof val === 'boolean');
};

busyman.isString = function (val) {
    return (typeof val === 'string');
};

busyman.isFunction = function (val) {
    return (typeof val === 'function');
};

busyman.isNumber = function (val) {
    return (typeof val === 'number');
};
busyman.isObject = function (val) {
    // null is considered not an object
    return (typeof val === 'object' && val !== null);
};

busyman.isObjectLike = function (val) {
    return !!val && typeof val == 'object';
};

busyman.isEmpty = function (val) {
    var empty = false;

    if (this.isObject(val))
        empty = !!this.keys(val).length;
    else if (this.isArray(val) || this.isString(val))
        empty = !!val.length;
    else if (this.isString(val))
        empty = !!val.length;
    else if (this.isNil(val))
        empty = true;

    return empty;
};

busyman.isPlainObject = function (val) {
    return (this.isObject(val) && !this.isArray(val));
};

// object
busyman.assign = Object.assign;

busyman.forOwn = function (obj, iter) { // iter(val, key, obj)
    var returned = true;

    for (var key in obj) {
        console.log('key: ' + key);
        if (obj.hasOwnProperty(key))
            returned = iter(obj[key], key, obj);
            
        if (returned === false)
            break;
    }
};


busyman.keys = Object.keys;
busyman.merge = function () {};
busyman.omit = function () {};
busyman.pick = function () {};

busyman.set = function (obj, path, val) {
    var self = this,
        allocated = obj,
        lastObj,
        lastKey;

    path = this.toPath(path);
    // [a, k]
    this.forEach(path, function (key, i) {
        if (!self.isObject(allocated[key])) {
            allocated[key] = {};
        } else if (!allocated.hasOwnProperty(key)) {
            allocated[key] = undefined;
        }
        lastObj = allocated;
        lastKey = key;
        allocated = allocated[key];

    });


    if (allocated === undefined || Object.keys(allocated).length === 0) {
        console.log(allocated);
        console.log('xxxxxxxx');
        lastObj[lastKey] = val;
    }

    return obj;
};


busyman.get = function () {};
busyman.has = function (obj, path) {
    var has = true,
        allocated = obj;

    path = this.toPath(path);

    this.forEach(path, function (key) {
        if (allocated.hasOwnProperty(key)) {
            allocated = allocated[key];
        } else {
            has = false;
            return false;
        }
    });

    return has;
};

// array
busyman.concat = function () {};
busyman.drop = function () {};
busyman.dropRight = function () {};
busyman.findIndex = function () {};
busyman.indexOf = function () {};
busyman.join = function () {};
busyman.pull = function () {};

busyman.remove = function (arr, pred) {
    var i,
        hit = false,
        len = arr.length,
        removed = [];

    for (i = 0; i < len; i++) {
        hit = pred(arr[i], i, arr);
        if (hit) {
            removed.push(arr.splice(i, 1)[0]);
            len -= 1;
            i -= 1;
        }
    }

    return removed;
};

busyman.slice = function () {};
busyman.take = function () {};

// collection
busyman.filter = function () {};
busyman.find = function () {};

busyman.forEach = function (collection, iter) {
    if (this.isPlainObject(collection))
        return this.forOwn(collection, iter);

    var returned = true;

    for (var i = 0, len = collection.length; i < len; i++) {
        returned = iter(collection[i], i, collection);

        if (returned === false)
            break;
    }
};

busyman.includes = function () {};
busyman.map = function () {};
busyman.reject = function () {};
busyman.size = function (val) {
    var s = 0;

    if (val === null)
        size = 0;
    else if (Array.isArray(val))
        size = val.length;
    else if (typeof val === 'object')
        size = Object.keys(val).length;
    else if (typeof val === 'string')
        size = val.length;

    return size;

};
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
busyman.split = function (str, separator, limit) {
    return str.split(separator, limit);
};
busyman.startsWith = function () {};
busyman.toLower = function () {};
busyman.toUpper = function () {};
busyman.upperCase = function () {};
busyman.upperFirst = function () {};

// util
busyman.toPath = function (str) {
    var pathArr;

    if (this.isArray(str)) {
        pathArr = str.map(function (val) {
            return val.toString();
        });
    } else if (this.isString(str)) {
        pathArr = str.split(/\.|\[|\]/);
        this.remove(pathArr, function (p) {
            return (p === '');
        });
    }

    return pathArr;
};

busyman.clone = function () {};
busyman.cloneDeep = function () {};

module.exports = busyman;