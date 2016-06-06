var _ = {};

/*************************************************************************************************/
/*** Type Check                                                                                ***/
/*************************************************************************************************/
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

_.isPlainObject = function (val) {
    // an object, not null, not array, not from Class
    var proto,
        validConstr,
        validProto,
        preCheckPass = _.isObject(val) && !_.isArray(val) && Object.prototype.toString.call(val) === '[object Object]';

    if (!preCheckPass)
        return false;

    validConstr = (typeof val.constructor === 'function');

    if (!validConstr)
        return false;

    proto = val.constructor.prototype;
    validProto = _.isObject(proto);

    if (!validProto || !proto.hasOwnProperty('isPrototypeOf'))
        return false;

    return true;
};

/*************************************************************************************************/
/*** Object                                                                                    ***/
/*************************************************************************************************/
_.assign = Object.assign;

_.keys = Object.keys;

_.values = function (obj) {
    var strLen,
        result = [];

    if (_.isString(obj)) {
        strLen = obj.length;
        for(var i = 0; i < strLen; i += 1) {
            result.push(obj[i]);
        }
    } else if (_.isObject(obj))
        result =  _.map(obj, function (val) {
            return val;
        });

    return result;
};

_.forOwn = function (obj, iteratee) {
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key))
            if (false === iteratee(obj[key], key, obj))
                break;  // exit iteration early by explicitly returning false
    }
};

_.get = function (obj, path, defaultValue) {
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

    return has ? target : defaultValue;
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

_.merge = function () {
    var dstObj = arguments[0],
        len = arguments.length;

    for (var i = 1; i < len; i++) {
        _._mergeTwoObjs(dstObj, arguments[i]);
    }

    return dstObj;
};

_.omit = function (obj, props) {
    var copied = _.clone(obj);

    if (_.isString(props)) {
        delete copied[props];
    } else if (_.isArray(props)) {
        _.forEach(props, function (prop) {
            delete copied[prop];
        });
    }

    return copied;
};  // return new object (shallow copy)

_.pick = function (obj, props) {
    var copied = {};

    if (_.isString(props))
        props = [ props ];

    _.forEach(props, function (prop) {
        if (_.isString(prop) && !_.isUndefined(obj[prop]))
            copied[prop] = obj[prop];
    });

    return copied;
};  // return new object (shallow copy)

_.set = function (obj, path, val) {
    var allocated = obj,
        lastObj,
        lastKey;

    path = _.toPath(path);
    // [a, k]
    _.forEach(path, function (key, i) {
        if (!_.isObject(allocated[key]))
            allocated[key] = {};
        else if (!allocated.hasOwnProperty(key))
            allocated[key] = undefined;

        lastObj = allocated;
        lastKey = key;
        allocated = allocated[key];
    });

    if (allocated === undefined || Object.keys(allocated).length === 0)
        lastObj[lastKey] = val;

    return obj;
};

/*************************************************************************************************/
/*** Collection                                                                                ***/
/*************************************************************************************************/
_.forEach = function (collection, iter) {
    if (_.isArray(collection)) {
        // we don't use Array.prototype.forEach, since it cannot early break.
        for (var i = 0, len = collection.length; i < len; i++) {
            if (false === iter(collection[i], i, collection))
                break;
        }
    } else if (_.isObject(collection)) {
        return _.forOwn(collection, iter);
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
    var size = 0;

    if (val === null)
        size = 0;
    else if (_.isArray(val))
        size = val.length;
    else if (_.isObject(val))
        size = Object.keys(val).length;
    else if (_.isString(val))
        size = val.length;

    return size;
};

_.filter = function (colleciton, pred) {
    var toPred,
        result = [];

    if (!_.isFunction(pred)) {
        toPred = function (val) {
            return val === pred;
        };
    } else {
        toPred = pred;
    }

    _.forEach(colleciton, function (val, key) {
        if (true === toPred(val, key, colleciton))
            result.push(colleciton[key]);
    });

    return result;
};

_.find = function (colleciton, pred) {
    var result;

    if (_.isArray(colleciton)) {
        result = Array.prototype.find.call(arguments);
    } else {
        _.forEach(colleciton, function (val, idx) {
            if (true === pred(val, idx, colleciton)) {
                result = (colleciton[key]);
                return false;   // break the loop
            }
        });
    }

    return result;
};

/*************************************************************************************************/
/*** Array                                                                                     ***/
/*************************************************************************************************/
_.concat = function () {
    return Array.prototype.concat.call(arguments);
};

_.drop = function (arr, n) {
    n = n || 0;
    return Array.prototype.slice.call(arr, n, arr.length);
};

_.dropRight = function (arr, n) {
    var end;
    n = n || 0;
    end = arr.length - n;
    end = end < 0 ? 0 : end;
    return Array.prototype.slice.call(arr, 0, end);
};

_.findIndex = function () {
    return Array.prototype.findIndex.call(arguments);
};

_.indexOf = function () {
    return Array.prototype.indexOf.call(arguments);
};

_.join = function () {
    return Array.prototype.join.call(arguments);
};

_.last = function (elems) {
    return elems[elems.length - 1];
};

_.pull = function () {
    var valMaxIndex = arguments.length,
        arr = arguments[0];

    for (var i = 1; i < valMaxIndex; i++) {
        _.remove(arr, arguments[i]);
    }

    return arr;
};

_.slice = function () {
    return Array.prototype.slice.call(arguments);
};

_.take = function (arr, n) {
    return Array.prototype.slice.call(arr, 0, n);
};

_.map = function (elems, fn) {
    var result = [];

    _.forEach(elems, function(elem) {
        result.push(fn(elem));
    });

    return result;
};

_.reject = function (colleciton, pred) {
    var toPred,
        result = [];

    if (!_.isFunction(pred)) {
        toPred = function (val) {
            return val === pred;
        };
    } else {
        toPred = pred;
    }

    _.forEach(colleciton, function (val, key) {
        if (false === toPred(val, key, colleciton))
            result.push(colleciton[key]);
    });

    return result;
};

_.some = function (colleciton, pred) {
    var toPred,
        has = false;

    if (!_.isFunction(pred)) {
        toPred = function (val) {
            // [TODO] if val and pred are objects
            return val === pred;
        };
    } else {
        toPred = pred;
    }

    _.forEach(colleciton, function (val, key) {
        if (true === toPred(val, key, colleciton)) {
           has = true;
           return false;
        }
    });

    return has;
};

_.now = Date.now;

_.remove = function (arr, pred) {
    var toPred,
        len = arr.length,
        hit = false,
        removed = [];

    if (!_.isFunction(pred))
        toPred = function (val, idx) {
            return pred === val;
        };
    else
        toPred = pred;

    for (var i = 0; i < len; i++) {
        hit = toPred(arr[i], i, arr);
        if (hit) {
            removed.push(arr.splice(i, 1)[0]);
            len -= 1;
            i -= 1;
        }
    }

    return removed;
};

/*************************************************************************************************/
/*** Function                                                                                  ***/
/*************************************************************************************************/
_.bind = function () {
    return Function.prototype.bind.call(arguments);
};

_.delay = function () {
    var fn = arguments[0],
        dly = arguments[1],
        args = [];

    for (var i = 2, len = arguments.length; i < len; i++) {
        args.push(arguments[i]);
    }

    return setTimeout(function () {
        fn.apply(null, args);
    }, dly);
};

/*************************************************************************************************/
/*** String                                                                                    ***/
/*************************************************************************************************/
_.parseInt = parseInt;

_.split = function (str, separator, limit) {
    return str.split(separator, limit);
};

_.camelCase = function (str) {
    var result;
    // replace -, _ with  (space)
    str = str.replace(/-/g, ' ');
    str = str.replace(/_/g, ' ');
    str = str.trim();

    str = str.split(' ');

    _.forEach(str, function () {
        // 1st lower case, ... Uppercae, then concat all
    });

};

_.endsWith = function () {
    return String.prototype.endsWith.call(arguments);
};

_.replace = function () {
    return String.prototype.replace.call(arguments);
};

_.startsWith = function () {
    return String.prototype.startsWith.call(arguments);
};

_.toLower = function () {
    return String.prototype.toLowerCase.call(arguments);
};

_.toUpper = function () {
    return String.prototype.toUpperCase.call(arguments);
};

_.lowerCase = function (str) {
    var result;
    // replace -, _ with  (space)
    str = str.replace(/-/g, ' ');
    str = str.replace(/_/g, ' ');
    str = str.trim();

    return str.toLowerCase();
};

_.lowerFirst = function (str) {
    var head = str.substr(0, 1).toLowerCase(),
        tail = str.substr(1, str.length - 1);

    return (head + tail);
};

_.upperCase = function () {
    var result;
    // replace -, _ with  (space)
    str = str.replace(/-/g, ' ');
    str = str.replace(/_/g, ' ');
    str = str.trim();

    return str.toUpperCase();
};

_.upperFirst = function (str) {
    var head = str.substr(0, 1).toUpperCase(),
        tail = str.substr(1, str.length - 1);

    return (head + tail);
};

/*************************************************************************************************/
/*** Utils                                                                                     ***/
/*************************************************************************************************/
_.isEmpty = function (val) {
    var empty = false;

    if (_.isObject(val))
        empty = !_.keys(val).length;
    else if (_.isArray(val) || _.isString(val) || _.isBuffer(val))
        empty = !val.length;
    else if (_.isNil(val))
        empty = true;
    else if (Object.prototype.hasOwnProperty.call(val, 'length'))
        empty = !val.length;
    else if (Object.prototype.hasOwnProperty.call(val, 'size'))
        empty = !val.size;

    return empty;
};

_.isEqual = function (val, other) {
    var isEq = true;

    if (typeof val !== typeof other)
        return false;
    else if (_.isArray(val) && !_.isArray(other))
        return false;
    else if (_.isArray(other) && !_.isArray(val))
        return false;
    else if (_.isFunction(val) || _.isFunction(other))
        return false;
    else if (!_.isObjectLike(val))
        return val === other;

    // object-like comparison
    if (_.size(val) !== _.size(other))
        return false;

    _.forEach(other, function (v, k) {
        isEq = _.isEqual(val[k], v);
        return isEq;    // false, break immediately
    });

    return isEq;
};

_.toPath = function (str) {
    var pathArr;

    if (_.isArray(str)) {
        pathArr = str.map(function (val) {
            return val.toString();
        });
    } else if (_.isString(str)) {
        pathArr = str.split(/\.|\[|\]/);
        _.remove(pathArr, '');
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
    else if (_.isObject(collection))
        copied = {};

    if (copied) {
        _.forEach(collection, function (val, key) {
            copied[key] = _.cloneDeep(val);
        });
    } else {
        copied = collection;
    }

    return copied;
};  // deep copy

_._mergeTwoObjs = function (dst, src) {
    _.forEach(src, function (val, key) {
        if (!_.isUndefined(val)) {
            if (!_.isObjectLike(val))
                dst[key] = val;
            else if (!_.isObjectLike(dst[key]))
                dst[key] = val;
            else
                _._mergeTwoObjs(dst[key], val);
        }
    });

    return dst;
};

module.exports = _;
