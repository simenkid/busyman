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
        preCheckPass = _.isObject(val) && !_.isArray(val) && Object.prototype.toString.call(o) === '[object Object]';

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

_.values = Object.values;

_.forOwn = function (obj, iteratee) {
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key))
            if (false === iteratee(obj[key], key, obj))
                break;  // exit iteration early by explicitly returning false
    }
};

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

//- next check
/*************************************************************************************************/
/*** Collection                                                                                ***/
/*************************************************************************************************/
_.forEach = function (collection, iter) {
    if (_.isObject(collection))
        return _.forOwn(collection, iter);

    // we don't use Array.prototype.forEach, since it cannot early break.
    for (var i = 0, len = collection.length; i < len; i++) {
        if (false === iter(collection[i], i, collection)) 
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

_.filter = function (colleciton, pred) {
    var result;

    if (_.isArray(colleciton)) {
        result = Array.prototype.filter.call(colleciton, pred);
    } else {
        result = [];

        _.forEach(colleciton, function (val, key) {
            if (pred(val, key, colleciton))
                result.push(colleciton[key]);
        });
    }

    return result;
};

_.find = function (colleciton, pred) {
    var result;

    if (_.isArray(colleciton)) {
        result = Array.prototype.find.call(colleciton, pred);
    } else {
        _.forEach(colleciton, function (val, idx) {
            if (pred(val, idx, colleciton)) {
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
// _.drop = function () {};
// _.dropRight = function () {};
_.findIndex = function () {
    return Array.prototype.findIndex.call(arguments);
};

_.indexOf = function (elems, value) {
    Array.prototype.indexOf.call(elems, value);
};

_.join = function () {
    return Array.prototype.join.call(arguments);
};

_.last = function (elems) {
    return elems[elems.length - 1];
};

// _.pull = function () {};
// _.slice = function () {};
// _.take = function () {};

_.map = function (elems, fn) {
    return Array.prototype.map.call(elems, fn);
};

_.isEqual = function () {};

// _.reject = function () {};
// _.some = function () {};

_.sortBy = function () {};
// _.now = function () {};

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
// _.bind = function () {};
// _.delay = function () {};
// _.spread = function () {};
// _.wrap = function () {};

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

// _.lowerCase = function () {};
// _.lowerFirst = function () {};
// _.upperCase = function () {};
// _.upperFirst = function () {};

/*************************************************************************************************/
/*** Utils                                                                                     ***/
/*************************************************************************************************/
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
    else if (_.isObject)
        copied = {};

    if (copied) {
        _.forEach(collection, function (val, key) {
            copied[key] = _.cloneDeep(val);
        });
    }

    return copied;
};  // deep copy

_._mergeTwoObjs = function (dst, src) {
    _.forEach(src, function (val, key) {
        console.log(key);
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
