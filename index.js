var _ = {};

_.isArray = Array.isArray;
_.isNaN = isNaN;
_.isBuffer = Buffer.isBuffer;
_.isInteger = Number.isInteger;

_.isBoolean = function (val) {
    return (typeof val === 'boolean');
};

_.isNumber = function (val) {
    return (typeof val === 'number');
};

_.isString = function (val) {
    return (typeof val === 'string');
};

_.isFunction = function (val) {
    return (typeof val === 'function');
};

_.isUndefined = function (val) {
    return (undefined === val);
};

_.isNull = function (val) {
    return (null === val);
};

_.isNil = function (val) {
    return ((undefined === val) || (null === val));
};

_.isObjectLike = function (val) {
    return !!val && typeof val === 'object';
};

_.isObject = function (val) {
    // null is considered not an object
    return (typeof val === 'object' && val !== null);
};

_.isEmpty = function (val) {
    var empty = false;

    if (_.isObject(val))
        empty = !!_.keys(val).length;
    else if (_.isArray(val) || _.isString(val))
        empty = !!val.length;
    else if (_.isNil(val))
        empty = true;

    return empty;
};

// object
_.assign = Object.assign;
_.keys = Object.keys;
_.values = Object.values;

_.forOwn = function (obj, iter) { // iter(val, key, obj)
    var returned = true;

    for (var key in obj) {
        if (obj.hasOwnProperty(key))
            returned = iter(obj[key], key, obj);
            
        if (returned === false)
            break;
    }
};

_.omit = function (obj, props) {
    var copied = _.clone(obj);

    if (_.isString(props))
        props = [ props ];

    _.forEach(props, function (prop) {
        delete copied[prop];
    });

    return copied;
};  // return new object (shallow copy)

_.pick = function (obj, props) {
    var copied = {};

    if (_.isString(props))
        props = [ props ];

    _.forEach(props, function (prop) {
        if (!_.isUndefined(obj[prop]))
            copied[prop] = obj[prop];
    });

    return copied;
};  // return new object (shallow copy)

// objbox
_.set = function (obj, path, val) {
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
        lastObj[lastKey] = val;
    }

    return obj;
};

_.has = function (obj, path) {
    var has = true,
        target = obj;

    path = this.toPath(path);

    _.forEach(path, function (key) {
        if (!_.isObject(target)) {
            has = false;
            return false;
        } else if (!(key in target)) {
            has = false;
            return false;
        } else {
            target = target[key];
        }
    });

    return has;
};

_.remove = function (arr, pred) {
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

// objbox
_.forEach = function (collection, iter) {
    if (this.isPlainObject(collection))
        return this.forOwn(collection, iter);

    var returned = true;

    for (var i = 0, len = collection.length; i < len; i++) {
        returned = iter(collection[i], i, collection);

        if (returned === false)
            break;
    }
};

_.includes = function (collection, val) {
    var included = false;

    if (_.isString(collection)) {
        included = collection.includes(val);
    } else if (_.isArray(collection) || _.isObject(collection)) {
        _.forEach(collection, function (item) {
            if (item === val) {
                included = true;
                return false;   //  break the loop
            }
        });
    }

    return included;
};

_.size = function (val) {
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

_.split = function (str, separator, limit) {
    return str.split(separator, limit);
};

// util
_.toPath = function (str) {
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

_.clone = function (collection) {
    var copied;

    if (_.isArray(collection))
        copied = [];
    else if (_.isObject)
        copied = {};

    if (copied) {
        _.forEach(collection, function (val, key) {
            copied[key] = val;
        });
    }

    return copied;
};  // shallow copy

_.cloneDeep = function (collection) {
    var copied;

    if (_.isArray(collection))
        copied = [];
    else if (_.isObject)
        copied = {};

    if (copied) {
        _.forEach(collection, function (val, key) {
            copied[key] = _.cloneDeep(val);
        });
    }

    return copied;
};  // deep copy


// var x = {
//     a: '1',
//     b: 'xxx',
//     c: [ {x:1}, {x:2}, {x:{ a:1, b:{ x: [ 1, { '1': 77 }, 3 ]} } }]
// };

// var y = _.has(x, 'c[2].x.b.x[1][1]');

// console.log(y);

_.isPlainObject = function (val) {
    // an object, not null, not array, not from Class
};

// objbox
_.get = function (obj, path) {
    var has = true,
        target = obj;

    path = this.toPath(path);

    _.forEach(path, function (key) {
        if (!_.isObject(target)) {
            has = false;
            return false;
        } else if (!(key in target)) {
            has = false;
            return false;
        } else {
            target = target[key];
        }
    });

    return has ? target : undefined;
};

// objbox
_.merge = function (dstObj, srcObj) {

};



// // array
// _.concat = function () {};
// _.drop = function () {};
// _.dropRight = function () {};
// _.findIndex = function () {};
_.indexOf = function () {};
// _.join = function () {};
_.last = function () {};
// _.pull = function () {};
// _.slice = function () {};
// _.take = function () {};
// // collection
_.filter = function (colleciton, pred) {
    var result = [];

    _.forEach(colleciton, function (val, idx) {
        if (pred(val, idx, colleciton))
            result.push(colleciton[key]);
    });

    return result;
};

_.find = function (colleciton, pred) {
    var result;

    _.forEach(colleciton, function (val, idx) {
        if (pred(val, idx, colleciton)) {
            result = (colleciton[key]);
            return false;   // break the loop
        }
    });

    return result;
};

_.map = function (elems, fn) {
    return Array.prototype.map.call(elems, fn);
};

_.isEqual = function () {};
// _.reject = function () {};
// _.some = function () {};
_.sortBy = function () {};
// _.now = function () {};
// // function
// _.bind = function () {};
// _.delay = function () {};
// _.spread = function () {};
// _.wrap = function () {};

// // string
_.camelCase = function () {};
// _.endsWith = function () {};
// _.lowerCase = function () {};
// _.lowerFirst = function () {};
_.parseInt = function () {};
// _.replace = function () {};
_.startsWith = function () {};
// _.toLower = function () {};
// _.toUpper = function () {};
// _.upperCase = function () {};
// _.upperFirst = function () {};

module.exports = _;
