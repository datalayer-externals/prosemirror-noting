(function () {
'use strict';

const VALIDATE_REQUEST = "VALIDATE_REQUEST";
const VALIDATE_RESPONSE = "VALIDATE_RESPONSE";
const CANCEL_REQUEST = "CANCEL_REQUEST";

//# sourceMappingURL=WorkerEvents.js.map

class EventEmitter {
    constructor() {
        this.events = {};
    }
    on(event, listener) {
        if (typeof this.events[event] !== "object") {
            this.events[event] = [];
        }
        this.events[event].push(listener);
        return () => this.removeListener(event, listener);
    }
    removeListener(event, listener) {
        if (typeof this.events[event] !== "object") {
            return;
        }
        const idx = this.events[event].indexOf(listener);
        if (idx > -1) {
            this.events[event].splice(idx, 1);
        }
    }
    removeAllListeners() {
        Object.keys(this.events).forEach((event) => this.events[event].splice(0, this.events[event].length));
    }
    emit(event, ...args) {
        if (typeof this.events[event] !== "object") {
            return;
        }
        [...this.events[event]].forEach(listener => listener.apply(this, args));
    }
    once(event, listener) {
        const remove = this.on(event, (...args) => {
            remove();
            listener.apply(this, args);
        });
        return remove;
    }
}
//# sourceMappingURL=EventEmitter.js.map

class ValidationStateManager extends EventEmitter {
    constructor() {
        super(...arguments);
        this.runningValidations = [];
        this.addRunningValidation = (rv) => {
            this.runningValidations.push(rv);
        };
        this.removeRunningValidation = (validation) => {
            this.runningValidations.splice(this.runningValidations.indexOf(validation), 1);
        };
        this.findRunningValidation = (id) => {
            return this.runningValidations.find(_ => _.id === id);
        };
        this.getRunningValidations = (ranges) => {
            return this.runningValidations;
        };
    }
}

//# sourceMappingURL=ValidationStateManager.js.map

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

var _arrayPush = arrayPush;

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};



function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal;

var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal || freeSelf || Function('return this')();

var _root = root;

var Symbol = _root.Symbol;

var _Symbol = Symbol;

var objectProto$1 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto$1.toString;

/** Built-in value references. */
var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty$1.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];

  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}

var _getRawTag = getRawTag;

/** Used for built-in method references. */
var objectProto$2 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$2.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

var _objectToString = objectToString;

var nullTag = '[object Null]';
var undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

var _baseGetTag = baseGetTag;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike;

var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike_1(value) && _baseGetTag(value) == argsTag;
}

var _baseIsArguments = baseIsArguments;

var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = _baseIsArguments(function() { return arguments; }()) ? _baseIsArguments : function(value) {
  return isObjectLike_1(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

var isArguments_1 = isArguments;

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

var isArray_1 = isArray;

var spreadableSymbol = _Symbol ? _Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray_1(value) || isArguments_1(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

var _isFlattenable = isFlattenable;

function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = _isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        _arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

var _baseFlatten = baseFlatten;

function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? _baseFlatten(array, 1) : [];
}

var flatten_1 = flatten;

const findOverlappingRangeIndex = (range, ranges) => {
    return ranges.findIndex(localRange => (localRange.from <= range.from && localRange.to >= range.from) ||
        (localRange.to >= range.to && localRange.from <= range.to) ||
        (localRange.from >= range.from && localRange.to <= range.to));
};
const mergeRange = (range1, range2) => ({
    from: range1.from < range2.from ? range1.from : range2.from,
    to: range1.to > range2.to ? range1.to : range2.to
});
const mergeRanges = (ranges) => ranges.reduce((acc, range) => {
    const index = findOverlappingRangeIndex(range, acc);
    if (index === -1) {
        return acc.concat(range);
    }
    const newRange = acc.slice();
    newRange.splice(index, 1, mergeRange(range, acc[index]));
    return newRange;
}, []);
const diffRanges = (firstRanges, secondRanges) => {
    const firstRangesMerged = mergeRanges(firstRanges);
    const secondRangesMerged = mergeRanges(secondRanges);
    return firstRangesMerged.reduce((acc, range) => {
        const overlap = findOverlappingRangeIndex(range, secondRangesMerged);
        if (overlap === -1) {
            return acc.concat(range);
        }
        const overlappingRange = secondRangesMerged[overlap];
        const firstShortenedRange = {
            from: range.from,
            to: secondRangesMerged[overlap].from
        };
        if (overlappingRange.to >= range.to) {
            return firstShortenedRange.from === firstShortenedRange.to
                ? acc
                : acc.concat(firstShortenedRange);
        }
        return acc.concat(firstShortenedRange, diffRanges([
            {
                from: overlappingRange.to + 1,
                to: range.to
            }
        ], secondRangesMerged));
    }, []);
};
const validationInputToRange = (vi) => ({
    from: vi.from,
    to: vi.from + vi.str.length
});
const getValRangesFromRange = (range, valRanges) => valRanges.reduce((acc, vi) => {
    if (range.from >= vi.from && range.from <= vi.from + vi.str.length) {
        const from = range.from - vi.from;
        const to = range.from - vi.from + (range.to - range.from);
        const str = vi.str.slice(from > 0 ? from - 1 : 0, to);
        return str
            ? acc.concat(Object.assign({}, vi, {
                from: range.from,
                to: range.to,
                str
            }))
            : acc;
    }
    return acc;
}, []);
const diffValidationInputs = (firstValInputs, secondValInputs) => flatten_1(diffRanges(firstValInputs.map(validationInputToRange), secondValInputs.map(validationInputToRange)).map(range => getValRangesFromRange(range, firstValInputs)));
//# sourceMappingURL=range.js.map

const Operations = {
    ANNOTATE: "ANNOTATE",
    REPLACE: "REPLACE"
};
const getMatchIndexes = (str, from, regExp) => {
    const matches = [];
    let match;
    while ((match = regExp.exec(str))) {
        matches.push({ index: match.index + from, item: match[0] });
    }
    return matches;
};
const validationRunner = (validationInputs, validationLibrary) => {
    const gen = applyLibraryToValidationMap(validationLibrary);
    let cancelled = false;
    let currentInputs = validationInputs;
    let inputsToOmit = [];
    return {
        promise: new Promise(resolve => {
            const getNextRange = () => {
                if (cancelled) {
                    resolve([]);
                }
                const { done, value } = gen.next(currentInputs);
                if (done) {
                    return resolve(diffValidationInputs(value, inputsToOmit));
                }
                setTimeout(getNextRange);
            };
            getNextRange();
        }),
        cancel: () => (cancelled = true),
        omitOverlappingInputs: (newInputs) => {
            currentInputs = diffValidationInputs(currentInputs, newInputs);
            inputsToOmit = inputsToOmit.concat(newInputs);
        }
    };
};
function* applyLibraryToValidationMap(validationLibrary) {
    let matches = [];
    for (let i = 0; i < validationLibrary.length; i++) {
        const validationInputs = yield matches;
        if (!validationInputs.length) {
            break;
        }
        for (let j = 0; j < validationLibrary[i].length; j++) {
            const rule = validationLibrary[i][j];
            const ruleMatches = flatten_1(validationInputs.map(vi => getMatchIndexes(vi.str, vi.from || 0, rule.regExp)));
            matches = matches.concat(ruleMatches
                .map(match => ({
                annotation: rule.annotation,
                type: rule.type,
                from: match.index,
                to: match.index + match.item.length,
                str: match.item
            }))
                .filter(match => match));
        }
    }
    return matches;
}
//# sourceMappingURL=validate.js.map

class ValidationWorker extends ValidationStateManager {
    constructor(validationLibrary, registerEventHandler, eventEmitter) {
        super();
        this.handleMessage = (e) => {
            console.log("workerMessage", e.data);
            const event = e.data;
            if (event.type === CANCEL_REQUEST) {
                this.cancelValidation();
            }
            if (event.type === VALIDATE_REQUEST) {
                this.beginValidation(event.payload.id, event.payload.validationInputs);
            }
        };
        this.cancelValidation = () => { };
        this.beginValidation = (id, validationInputs) => {
            const { promise, omitOverlappingInputs } = validationRunner(validationInputs, this.validationLibrary);
            this.runningValidations.forEach(_ => _.omitOverlappingInputs(validationInputs));
            promise.then(validationOutputs => {
                this.postMessage({
                    type: VALIDATE_RESPONSE,
                    payload: {
                        id,
                        validationOutputs
                    }
                });
            });
            this.addRunningValidation({
                id,
                validationInputs,
                promise,
                omitOverlappingInputs
            });
        };
        if (registerEventHandler) {
            registerEventHandler(this.handleMessage);
        }
        else {
            onmessage = this.handleMessage;
        }
        this.emitEvent = eventEmitter;
        this.validationLibrary = validationLibrary;
    }
    postMessage(e) {
        this.emitEvent ? this.emitEvent(e) : postMessage(e);
    }
}

//# sourceMappingURL=ValidationWorker.js.map

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

var _baseSlice = baseSlice;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

var eq_1 = eq;

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject;

var asyncTag = '[object AsyncFunction]';
var funcTag = '[object Function]';
var genTag = '[object GeneratorFunction]';
var proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject_1(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = _baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

var isFunction_1 = isFunction;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

var isLength_1 = isLength;

function isArrayLike(value) {
  return value != null && isLength_1(value.length) && !isFunction_1(value);
}

var isArrayLike_1 = isArrayLike;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$1 = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

var _isIndex = isIndex;

function isIterateeCall(value, index, object) {
  if (!isObject_1(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike_1(object) && _isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq_1(object[index], value);
  }
  return false;
}

var _isIterateeCall = isIterateeCall;

var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike_1(value) && _baseGetTag(value) == symbolTag);
}

var isSymbol_1 = isSymbol;

var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol_1(value)) {
    return NAN;
  }
  if (isObject_1(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject_1(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

var toNumber_1 = toNumber;

var INFINITY = 1 / 0;
var MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber_1(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

var toFinite_1 = toFinite;

function toInteger(value) {
  var result = toFinite_1(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

var toInteger_1 = toInteger;

var nativeCeil = Math.ceil;
var nativeMax = Math.max;

/**
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining
 * elements.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to process.
 * @param {number} [size=1] The length of each chunk
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the new array of chunks.
 * @example
 *
 * _.chunk(['a', 'b', 'c', 'd'], 2);
 * // => [['a', 'b'], ['c', 'd']]
 *
 * _.chunk(['a', 'b', 'c', 'd'], 3);
 * // => [['a', 'b', 'c'], ['d']]
 */
function chunk(array, size, guard) {
  if ((guard ? _isIterateeCall(array, size, guard) : size === undefined)) {
    size = 1;
  } else {
    size = nativeMax(toInteger_1(size), 0);
  }
  var length = array == null ? 0 : array.length;
  if (!length || size < 1) {
    return [];
  }
  var index = 0,
      resIndex = 0,
      result = Array(nativeCeil(length / size));

  while (index < length) {
    result[resIndex++] = _baseSlice(array, index, (index += size));
  }
  return result;
}

var chunk_1 = chunk;

// ::- Persistent data structure representing an ordered mapping from
// strings to values, with some convenient update methods.
function OrderedMap(content) {
  this.content = content;
}

OrderedMap.prototype = {
  constructor: OrderedMap,

  find: function(key) {
    for (var i = 0; i < this.content.length; i += 2)
      if (this.content[i] === key) return i
    return -1
  },

  // :: (string) → ?any
  // Retrieve the value stored under `key`, or return undefined when
  // no such key exists.
  get: function(key) {
    var found = this.find(key);
    return found == -1 ? undefined : this.content[found + 1]
  },

  // :: (string, any, ?string) → OrderedMap
  // Create a new map by replacing the value of `key` with a new
  // value, or adding a binding to the end of the map. If `newKey` is
  // given, the key of the binding will be replaced with that key.
  update: function(key, value, newKey) {
    var self = newKey && newKey != key ? this.remove(newKey) : this;
    var found = self.find(key), content = self.content.slice();
    if (found == -1) {
      content.push(newKey || key, value);
    } else {
      content[found + 1] = value;
      if (newKey) content[found] = newKey;
    }
    return new OrderedMap(content)
  },

  // :: (string) → OrderedMap
  // Return a map with the given key removed, if it existed.
  remove: function(key) {
    var found = this.find(key);
    if (found == -1) return this
    var content = this.content.slice();
    content.splice(found, 2);
    return new OrderedMap(content)
  },

  // :: (string, any) → OrderedMap
  // Add a new key to the start of the map.
  addToStart: function(key, value) {
    return new OrderedMap([key, value].concat(this.remove(key).content))
  },

  // :: (string, any) → OrderedMap
  // Add a new key to the end of the map.
  addToEnd: function(key, value) {
    var content = this.remove(key).content.slice();
    content.push(key, value);
    return new OrderedMap(content)
  },

  // :: (string, string, any) → OrderedMap
  // Add a key after the given key. If `place` is not found, the new
  // key is added to the end.
  addBefore: function(place, key, value) {
    var without = this.remove(key), content = without.content.slice();
    var found = without.find(place);
    content.splice(found == -1 ? content.length : found, 0, key, value);
    return new OrderedMap(content)
  },

  // :: ((key: string, value: any))
  // Call the given function for each key/value pair in the map, in
  // order.
  forEach: function(f) {
    for (var i = 0; i < this.content.length; i += 2)
      f(this.content[i], this.content[i + 1]);
  },

  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by prepending the keys in this map that don't
  // appear in `map` before the keys in `map`.
  prepend: function(map) {
    map = OrderedMap.from(map);
    if (!map.size) return this
    return new OrderedMap(map.content.concat(this.subtract(map).content))
  },

  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by appending the keys in this map that don't
  // appear in `map` after the keys in `map`.
  append: function(map) {
    map = OrderedMap.from(map);
    if (!map.size) return this
    return new OrderedMap(this.subtract(map).content.concat(map.content))
  },

  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a map containing all the keys in this map that don't
  // appear in `map`.
  subtract: function(map) {
    var result = this;
    map = OrderedMap.from(map);
    for (var i = 0; i < map.content.length; i += 2)
      result = result.remove(map.content[i]);
    return result
  },

  // :: number
  // The amount of keys in this map.
  get size() {
    return this.content.length >> 1
  }
};

// :: (?union<Object, OrderedMap>) → OrderedMap
// Return a map with the given content. If null, create an empty
// map. If given an ordered map, return that map itself. If given an
// object, create a map from the object's properties.
OrderedMap.from = function(value) {
  if (value instanceof OrderedMap) return value
  var content = [];
  if (value) for (var prop in value) content.push(prop, value[prop]);
  return new OrderedMap(content)
};

var orderedmap = OrderedMap;

var dist = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var OrderedMap = _interopDefault(orderedmap);

function findDiffStart(a, b, pos) {
  for (var i = 0;; i++) {
    if (i == a.childCount || i == b.childCount)
      { return a.childCount == b.childCount ? null : pos }

    var childA = a.child(i), childB = b.child(i);
    if (childA == childB) { pos += childA.nodeSize; continue }

    if (!childA.sameMarkup(childB)) { return pos }

    if (childA.isText && childA.text != childB.text) {
      for (var j = 0; childA.text[j] == childB.text[j]; j++)
        { pos++; }
      return pos
    }
    if (childA.content.size || childB.content.size) {
      var inner = findDiffStart(childA.content, childB.content, pos + 1);
      if (inner != null) { return inner }
    }
    pos += childA.nodeSize;
  }
}

function findDiffEnd(a, b, posA, posB) {
  for (var iA = a.childCount, iB = b.childCount;;) {
    if (iA == 0 || iB == 0)
      { return iA == iB ? null : {a: posA, b: posB} }

    var childA = a.child(--iA), childB = b.child(--iB), size = childA.nodeSize;
    if (childA == childB) {
      posA -= size; posB -= size;
      continue
    }

    if (!childA.sameMarkup(childB)) { return {a: posA, b: posB} }

    if (childA.isText && childA.text != childB.text) {
      var same = 0, minSize = Math.min(childA.text.length, childB.text.length);
      while (same < minSize && childA.text[childA.text.length - same - 1] == childB.text[childB.text.length - same - 1]) {
        same++; posA--; posB--;
      }
      return {a: posA, b: posB}
    }
    if (childA.content.size || childB.content.size) {
      var inner = findDiffEnd(childA.content, childB.content, posA - 1, posB - 1);
      if (inner) { return inner }
    }
    posA -= size; posB -= size;
  }
}

// ::- A fragment represents a node's collection of child nodes.
//
// Like nodes, fragments are persistent data structures, and you
// should not mutate them or their content. Rather, you create new
// instances whenever needed. The API tries to make this easy.
var Fragment = function Fragment(content, size) {
  var this$1 = this;

  this.content = content;
  // :: number
  // The size of the fragment, which is the total of the size of its
  // content nodes.
  this.size = size || 0;
  if (size == null) { for (var i = 0; i < content.length; i++)
    { this$1.size += content[i].nodeSize; } }
};

var prototypeAccessors$1 = { firstChild: {},lastChild: {},childCount: {} };

// :: (number, number, (node: Node, start: number, parent: Node, index: number) → ?bool, ?number)
// Invoke a callback for all descendant nodes between the given two
// positions (relative to start of this fragment). Doesn't descend
// into a node when the callback returns `false`.
Fragment.prototype.nodesBetween = function nodesBetween (from, to, f, nodeStart, parent) {
    var this$1 = this;
    if ( nodeStart === void 0 ) nodeStart = 0;

  for (var i = 0, pos = 0; pos < to; i++) {
    var child = this$1.content[i], end = pos + child.nodeSize;
    if (end > from && f(child, nodeStart + pos, parent, i) !== false && child.content.size) {
      var start = pos + 1;
      child.nodesBetween(Math.max(0, from - start),
                         Math.min(child.content.size, to - start),
                         f, nodeStart + start);
    }
    pos = end;
  }
};

// :: ((node: Node, pos: number, parent: Node) → ?bool)
// Call the given callback for every descendant node. The callback
// may return `false` to prevent traversal of a given node's children.
Fragment.prototype.descendants = function descendants (f) {
  this.nodesBetween(0, this.size, f);
};

// : (number, number, ?string, ?string) → string
Fragment.prototype.textBetween = function textBetween (from, to, blockSeparator, leafText) {
  var text = "", separated = true;
  this.nodesBetween(from, to, function (node, pos) {
    if (node.isText) {
      text += node.text.slice(Math.max(from, pos) - pos, to - pos);
      separated = !blockSeparator;
    } else if (node.isLeaf && leafText) {
      text += leafText;
      separated = !blockSeparator;
    } else if (!separated && node.isBlock) {
      text += blockSeparator;
      separated = true;
    }
  }, 0);
  return text
};

// :: (Fragment) → Fragment
// Create a new fragment containing the combined content of this
// fragment and the other.
Fragment.prototype.append = function append (other) {
  if (!other.size) { return this }
  if (!this.size) { return other }
  var last = this.lastChild, first = other.firstChild, content = this.content.slice(), i = 0;
  if (last.isText && last.sameMarkup(first)) {
    content[content.length - 1] = last.withText(last.text + first.text);
    i = 1;
  }
  for (; i < other.content.length; i++) { content.push(other.content[i]); }
  return new Fragment(content, this.size + other.size)
};

// :: (number, ?number) → Fragment
// Cut out the sub-fragment between the two given positions.
Fragment.prototype.cut = function cut (from, to) {
    var this$1 = this;

  if (to == null) { to = this.size; }
  if (from == 0 && to == this.size) { return this }
  var result = [], size = 0;
  if (to > from) { for (var i = 0, pos = 0; pos < to; i++) {
    var child = this$1.content[i], end = pos + child.nodeSize;
    if (end > from) {
      if (pos < from || end > to) {
        if (child.isText)
          { child = child.cut(Math.max(0, from - pos), Math.min(child.text.length, to - pos)); }
        else
          { child = child.cut(Math.max(0, from - pos - 1), Math.min(child.content.size, to - pos - 1)); }
      }
      result.push(child);
      size += child.nodeSize;
    }
    pos = end;
  } }
  return new Fragment(result, size)
};

Fragment.prototype.cutByIndex = function cutByIndex (from, to) {
  if (from == to) { return Fragment.empty }
  if (from == 0 && to == this.content.length) { return this }
  return new Fragment(this.content.slice(from, to))
};

// :: (number, Node) → Fragment
// Create a new fragment in which the node at the given index is
// replaced by the given node.
Fragment.prototype.replaceChild = function replaceChild (index, node) {
  var current = this.content[index];
  if (current == node) { return this }
  var copy = this.content.slice();
  var size = this.size + node.nodeSize - current.nodeSize;
  copy[index] = node;
  return new Fragment(copy, size)
};

// : (Node) → Fragment
// Create a new fragment by prepending the given node to this
// fragment.
Fragment.prototype.addToStart = function addToStart (node) {
  return new Fragment([node].concat(this.content), this.size + node.nodeSize)
};

// : (Node) → Fragment
// Create a new fragment by appending the given node to this
// fragment.
Fragment.prototype.addToEnd = function addToEnd (node) {
  return new Fragment(this.content.concat(node), this.size + node.nodeSize)
};

// :: (Fragment) → bool
// Compare this fragment to another one.
Fragment.prototype.eq = function eq (other) {
    var this$1 = this;

  if (this.content.length != other.content.length) { return false }
  for (var i = 0; i < this.content.length; i++)
    { if (!this$1.content[i].eq(other.content[i])) { return false } }
  return true
};

// :: ?Node
// The first child of the fragment, or `null` if it is empty.
prototypeAccessors$1.firstChild.get = function () { return this.content.length ? this.content[0] : null };

// :: ?Node
// The last child of the fragment, or `null` if it is empty.
prototypeAccessors$1.lastChild.get = function () { return this.content.length ? this.content[this.content.length - 1] : null };

// :: number
// The number of child nodes in this fragment.
prototypeAccessors$1.childCount.get = function () { return this.content.length };

// :: (number) → Node
// Get the child node at the given index. Raise an error when the
// index is out of range.
Fragment.prototype.child = function child (index) {
  var found = this.content[index];
  if (!found) { throw new RangeError("Index " + index + " out of range for " + this) }
  return found
};

// :: (number) → ?Node
// Get the child node at the given index, if it exists.
Fragment.prototype.maybeChild = function maybeChild (index) {
  return this.content[index]
};

// :: ((node: Node, offset: number, index: number))
// Call `f` for every child node, passing the node, its offset
// into this parent node, and its index.
Fragment.prototype.forEach = function forEach (f) {
    var this$1 = this;

  for (var i = 0, p = 0; i < this.content.length; i++) {
    var child = this$1.content[i];
    f(child, p, i);
    p += child.nodeSize;
  }
};

// :: (Fragment) → ?number
// Find the first position at which this fragment and another
// fragment differ, or `null` if they are the same.
Fragment.prototype.findDiffStart = function findDiffStart$1 (other, pos) {
    if ( pos === void 0 ) pos = 0;

  return findDiffStart(this, other, pos)
};

// :: (Node) → ?{a: number, b: number}
// Find the first position, searching from the end, at which this
// fragment and the given fragment differ, or `null` if they are the
// same. Since this position will not be the same in both nodes, an
// object with two separate positions is returned.
Fragment.prototype.findDiffEnd = function findDiffEnd$1 (other, pos, otherPos) {
    if ( pos === void 0 ) pos = this.size;
    if ( otherPos === void 0 ) otherPos = other.size;

  return findDiffEnd(this, other, pos, otherPos)
};

// : (number, ?number) → {index: number, offset: number}
// Find the index and inner offset corresponding to a given relative
// position in this fragment. The result object will be reused
// (overwritten) the next time the function is called. (Not public.)
Fragment.prototype.findIndex = function findIndex (pos, round) {
    var this$1 = this;
    if ( round === void 0 ) round = -1;

  if (pos == 0) { return retIndex(0, pos) }
  if (pos == this.size) { return retIndex(this.content.length, pos) }
  if (pos > this.size || pos < 0) { throw new RangeError(("Position " + pos + " outside of fragment (" + (this) + ")")) }
  for (var i = 0, curPos = 0;; i++) {
    var cur = this$1.child(i), end = curPos + cur.nodeSize;
    if (end >= pos) {
      if (end == pos || round > 0) { return retIndex(i + 1, end) }
      return retIndex(i, curPos)
    }
    curPos = end;
  }
};

// :: () → string
// Return a debugging string that describes this fragment.
Fragment.prototype.toString = function toString () { return "<" + this.toStringInner() + ">" };

Fragment.prototype.toStringInner = function toStringInner () { return this.content.join(", ") };

// :: () → ?Object
// Create a JSON-serializeable representation of this fragment.
Fragment.prototype.toJSON = function toJSON () {
  return this.content.length ? this.content.map(function (n) { return n.toJSON(); }) : null
};

// :: (Schema, ?Object) → Fragment
// Deserialize a fragment from its JSON representation.
Fragment.fromJSON = function fromJSON (schema, value) {
  return value ? new Fragment(value.map(schema.nodeFromJSON)) : Fragment.empty
};

// :: ([Node]) → Fragment
// Build a fragment from an array of nodes. Ensures that adjacent
// text nodes with the same marks are joined together.
Fragment.fromArray = function fromArray (array) {
  if (!array.length) { return Fragment.empty }
  var joined, size = 0;
  for (var i = 0; i < array.length; i++) {
    var node = array[i];
    size += node.nodeSize;
    if (i && node.isText && array[i - 1].sameMarkup(node)) {
      if (!joined) { joined = array.slice(0, i); }
      joined[joined.length - 1] = node.withText(joined[joined.length - 1].text + node.text);
    } else if (joined) {
      joined.push(node);
    }
  }
  return new Fragment(joined || array, size)
};

// :: (?union<Fragment, Node, [Node]>) → Fragment
// Create a fragment from something that can be interpreted as a set
// of nodes. For `null`, it returns the empty fragment. For a
// fragment, the fragment itself. For a node or array of nodes, a
// fragment containing those nodes.
Fragment.from = function from (nodes) {
  if (!nodes) { return Fragment.empty }
  if (nodes instanceof Fragment) { return nodes }
  if (Array.isArray(nodes)) { return this.fromArray(nodes) }
  return new Fragment([nodes], nodes.nodeSize)
};

Object.defineProperties( Fragment.prototype, prototypeAccessors$1 );

var found = {index: 0, offset: 0};
function retIndex(index, offset) {
  found.index = index;
  found.offset = offset;
  return found
}

// :: Fragment
// An empty fragment. Intended to be reused whenever a node doesn't
// contain anything (rather than allocating a new empty fragment for
// each leaf node).
Fragment.empty = new Fragment([], 0);

function compareDeep(a, b) {
  if (a === b) { return true }
  if (!(a && typeof a == "object") ||
      !(b && typeof b == "object")) { return false }
  var array = Array.isArray(a);
  if (Array.isArray(b) != array) { return false }
  if (array) {
    if (a.length != b.length) { return false }
    for (var i = 0; i < a.length; i++) { if (!compareDeep(a[i], b[i])) { return false } }
  } else {
    for (var p in a) { if (!(p in b) || !compareDeep(a[p], b[p])) { return false } }
    for (var p$1 in b) { if (!(p$1 in a)) { return false } }
  }
  return true
}

// ::- A mark is a piece of information that can be attached to a node,
// such as it being emphasized, in code font, or a link. It has a type
// and optionally a set of attributes that provide further information
// (such as the target of the link). Marks are created through a
// `Schema`, which controls which types exist and which
// attributes they have.
var Mark = function Mark(type, attrs) {
  // :: MarkType
  // The type of this mark.
  this.type = type;
  // :: Object
  // The attributes associated with this mark.
  this.attrs = attrs;
};

// :: ([Mark]) → [Mark]
// Given a set of marks, create a new set which contains this one as
// well, in the right position. If this mark is already in the set,
// the set itself is returned. If any marks that are set to be
// [exclusive](#model.MarkSpec.excludes) with this mark are present,
// those are replaced by this one.
Mark.prototype.addToSet = function addToSet (set) {
    var this$1 = this;

  var copy, placed = false;
  for (var i = 0; i < set.length; i++) {
    var other = set[i];
    if (this$1.eq(other)) { return set }
    if (this$1.type.excludes(other.type)) {
      if (!copy) { copy = set.slice(0, i); }
    } else if (other.type.excludes(this$1.type)) {
      return set
    } else {
      if (!placed && other.type.rank > this$1.type.rank) {
        if (!copy) { copy = set.slice(0, i); }
        copy.push(this$1);
        placed = true;
      }
      if (copy) { copy.push(other); }
    }
  }
  if (!copy) { copy = set.slice(); }
  if (!placed) { copy.push(this); }
  return copy
};

// :: ([Mark]) → [Mark]
// Remove this mark from the given set, returning a new set. If this
// mark is not in the set, the set itself is returned.
Mark.prototype.removeFromSet = function removeFromSet (set) {
    var this$1 = this;

  for (var i = 0; i < set.length; i++)
    { if (this$1.eq(set[i]))
      { return set.slice(0, i).concat(set.slice(i + 1)) } }
  return set
};

// :: ([Mark]) → bool
// Test whether this mark is in the given set of marks.
Mark.prototype.isInSet = function isInSet (set) {
    var this$1 = this;

  for (var i = 0; i < set.length; i++)
    { if (this$1.eq(set[i])) { return true } }
  return false
};

// :: (Mark) → bool
// Test whether this mark has the same type and attributes as
// another mark.
Mark.prototype.eq = function eq (other) {
  return this == other ||
    (this.type == other.type && compareDeep(this.attrs, other.attrs))
};

// :: () → Object
// Convert this mark to a JSON-serializeable representation.
Mark.prototype.toJSON = function toJSON () {
    var this$1 = this;

  var obj = {type: this.type.name};
  for (var _ in this$1.attrs) {
    obj.attrs = this$1.attrs;
    break
  }
  return obj
};

// :: (Schema, Object) → Mark
Mark.fromJSON = function fromJSON (schema, json) {
  var type = schema.marks[json.type];
  if (!type) { throw new RangeError(("There is no mark type " + (json.type) + " in this schema")) }
  return type.create(json.attrs)
};

// :: ([Mark], [Mark]) → bool
// Test whether two sets of marks are identical.
Mark.sameSet = function sameSet (a, b) {
  if (a == b) { return true }
  if (a.length != b.length) { return false }
  for (var i = 0; i < a.length; i++)
    { if (!a[i].eq(b[i])) { return false } }
  return true
};

// :: (?union<Mark, [Mark]>) → [Mark]
// Create a properly sorted mark set from null, a single mark, or an
// unsorted array of marks.
Mark.setFrom = function setFrom (marks) {
  if (!marks || marks.length == 0) { return Mark.none }
  if (marks instanceof Mark) { return [marks] }
  var copy = marks.slice();
  copy.sort(function (a, b) { return a.type.rank - b.type.rank; });
  return copy
};

// :: [Mark] The empty set of marks.
Mark.none = [];

// ReplaceError:: class extends Error
// Error type raised by [`Node.replace`](#model.Node.replace) when
// given an invalid replacement.

function ReplaceError(message) {
  var err = Error.call(this, message);
  err.__proto__ = ReplaceError.prototype;
  return err
}

ReplaceError.prototype = Object.create(Error.prototype);
ReplaceError.prototype.constructor = ReplaceError;
ReplaceError.prototype.name = "ReplaceError";

// ::- A slice represents a piece cut out of a larger document. It
// stores not only a fragment, but also the depth up to which nodes on
// both side are ‘open’ (cut through).
var Slice = function Slice(content, openStart, openEnd) {
  // :: Fragment The slice's content.
  this.content = content;
  // :: number The open depth at the start.
  this.openStart = openStart;
  // :: number The open depth at the end.
  this.openEnd = openEnd;
};

var prototypeAccessors$2 = { size: {} };

// :: number
// The size this slice would add when inserted into a document.
prototypeAccessors$2.size.get = function () {
  return this.content.size - this.openStart - this.openEnd
};

Slice.prototype.insertAt = function insertAt (pos, fragment) {
  var content = insertInto(this.content, pos + this.openStart, fragment, null);
  return content && new Slice(content, this.openStart, this.openEnd)
};

Slice.prototype.removeBetween = function removeBetween (from, to) {
  return new Slice(removeRange(this.content, from + this.openStart, to + this.openStart), this.openStart, this.openEnd)
};

// :: (Slice) → bool
// Tests whether this slice is equal to another slice.
Slice.prototype.eq = function eq (other) {
  return this.content.eq(other.content) && this.openStart == other.openStart && this.openEnd == other.openEnd
};

Slice.prototype.toString = function toString () {
  return this.content + "(" + this.openStart + "," + this.openEnd + ")"
};

// :: () → ?Object
// Convert a slice to a JSON-serializable representation.
Slice.prototype.toJSON = function toJSON () {
  if (!this.content.size) { return null }
  var json = {content: this.content.toJSON()};
  if (this.openStart > 0) { json.openStart = this.openStart; }
  if (this.openEnd > 0) { json.openEnd = this.openEnd; }
  return json
};

// :: (Schema, ?Object) → Slice
// Deserialize a slice from its JSON representation.
Slice.fromJSON = function fromJSON (schema, json) {
  if (!json) { return Slice.empty }
  return new Slice(Fragment.fromJSON(schema, json.content), json.openStart || 0, json.openEnd || 0)
};

// :: (Fragment, ?bool) → Slice
// Create a slice from a fragment by taking the maximum possible
// open value on both side of the fragment.
Slice.maxOpen = function maxOpen (fragment, openIsolating) {
    if ( openIsolating === void 0 ) openIsolating=true;

  var openStart = 0, openEnd = 0;
  for (var n = fragment.firstChild; n && !n.isLeaf && (openIsolating || !n.type.spec.isolating); n = n.firstChild) { openStart++; }
  for (var n$1 = fragment.lastChild; n$1 && !n$1.isLeaf && (openIsolating || !n$1.type.spec.isolating); n$1 = n$1.lastChild) { openEnd++; }
  return new Slice(fragment, openStart, openEnd)
};

Object.defineProperties( Slice.prototype, prototypeAccessors$2 );

function removeRange(content, from, to) {
  var ref = content.findIndex(from);
  var index = ref.index;
  var offset = ref.offset;
  var child = content.maybeChild(index);
  var ref$1 = content.findIndex(to);
  var indexTo = ref$1.index;
  var offsetTo = ref$1.offset;
  if (offset == from || child.isText) {
    if (offsetTo != to && !content.child(indexTo).isText) { throw new RangeError("Removing non-flat range") }
    return content.cut(0, from).append(content.cut(to))
  }
  if (index != indexTo) { throw new RangeError("Removing non-flat range") }
  return content.replaceChild(index, child.copy(removeRange(child.content, from - offset - 1, to - offset - 1)))
}

function insertInto(content, dist, insert, parent) {
  var ref = content.findIndex(dist);
  var index = ref.index;
  var offset = ref.offset;
  var child = content.maybeChild(index);
  if (offset == dist || child.isText) {
    if (parent && !parent.canReplace(index, index, insert)) { return null }
    return content.cut(0, dist).append(insert).append(content.cut(dist))
  }
  var inner = insertInto(child.content, dist - offset - 1, insert);
  return inner && content.replaceChild(index, child.copy(inner))
}

// :: Slice
// The empty slice.
Slice.empty = new Slice(Fragment.empty, 0, 0);

function replace($from, $to, slice) {
  if (slice.openStart > $from.depth)
    { throw new ReplaceError("Inserted content deeper than insertion position") }
  if ($from.depth - slice.openStart != $to.depth - slice.openEnd)
    { throw new ReplaceError("Inconsistent open depths") }
  return replaceOuter($from, $to, slice, 0)
}

function replaceOuter($from, $to, slice, depth) {
  var index = $from.index(depth), node = $from.node(depth);
  if (index == $to.index(depth) && depth < $from.depth - slice.openStart) {
    var inner = replaceOuter($from, $to, slice, depth + 1);
    return node.copy(node.content.replaceChild(index, inner))
  } else if (!slice.content.size) {
    return close(node, replaceTwoWay($from, $to, depth))
  } else if (!slice.openStart && !slice.openEnd && $from.depth == depth && $to.depth == depth) { // Simple, flat case
    var parent = $from.parent, content = parent.content;
    return close(parent, content.cut(0, $from.parentOffset).append(slice.content).append(content.cut($to.parentOffset)))
  } else {
    var ref = prepareSliceForReplace(slice, $from);
    var start = ref.start;
    var end = ref.end;
    return close(node, replaceThreeWay($from, start, end, $to, depth))
  }
}

function checkJoin(main, sub) {
  if (!sub.type.compatibleContent(main.type))
    { throw new ReplaceError("Cannot join " + sub.type.name + " onto " + main.type.name) }
}

function joinable($before, $after, depth) {
  var node = $before.node(depth);
  checkJoin(node, $after.node(depth));
  return node
}

function addNode(child, target) {
  var last = target.length - 1;
  if (last >= 0 && child.isText && child.sameMarkup(target[last]))
    { target[last] = child.withText(target[last].text + child.text); }
  else
    { target.push(child); }
}

function addRange($start, $end, depth, target) {
  var node = ($end || $start).node(depth);
  var startIndex = 0, endIndex = $end ? $end.index(depth) : node.childCount;
  if ($start) {
    startIndex = $start.index(depth);
    if ($start.depth > depth) {
      startIndex++;
    } else if ($start.textOffset) {
      addNode($start.nodeAfter, target);
      startIndex++;
    }
  }
  for (var i = startIndex; i < endIndex; i++) { addNode(node.child(i), target); }
  if ($end && $end.depth == depth && $end.textOffset)
    { addNode($end.nodeBefore, target); }
}

function close(node, content) {
  if (!node.type.validContent(content))
    { throw new ReplaceError("Invalid content for node " + node.type.name) }
  return node.copy(content)
}

function replaceThreeWay($from, $start, $end, $to, depth) {
  var openStart = $from.depth > depth && joinable($from, $start, depth + 1);
  var openEnd = $to.depth > depth && joinable($end, $to, depth + 1);

  var content = [];
  addRange(null, $from, depth, content);
  if (openStart && openEnd && $start.index(depth) == $end.index(depth)) {
    checkJoin(openStart, openEnd);
    addNode(close(openStart, replaceThreeWay($from, $start, $end, $to, depth + 1)), content);
  } else {
    if (openStart)
      { addNode(close(openStart, replaceTwoWay($from, $start, depth + 1)), content); }
    addRange($start, $end, depth, content);
    if (openEnd)
      { addNode(close(openEnd, replaceTwoWay($end, $to, depth + 1)), content); }
  }
  addRange($to, null, depth, content);
  return new Fragment(content)
}

function replaceTwoWay($from, $to, depth) {
  var content = [];
  addRange(null, $from, depth, content);
  if ($from.depth > depth) {
    var type = joinable($from, $to, depth + 1);
    addNode(close(type, replaceTwoWay($from, $to, depth + 1)), content);
  }
  addRange($to, null, depth, content);
  return new Fragment(content)
}

function prepareSliceForReplace(slice, $along) {
  var extra = $along.depth - slice.openStart, parent = $along.node(extra);
  var node = parent.copy(slice.content);
  for (var i = extra - 1; i >= 0; i--)
    { node = $along.node(i).copy(Fragment.from(node)); }
  return {start: node.resolveNoCache(slice.openStart + extra),
          end: node.resolveNoCache(node.content.size - slice.openEnd - extra)}
}

// ::- You can [_resolve_](#model.Node.resolve) a position to get more
// information about it. Objects of this class represent such a
// resolved position, providing various pieces of context information,
// and some helper methods.
//
// Throughout this interface, methods that take an optional `depth`
// parameter will interpret undefined as `this.depth` and negative
// numbers as `this.depth + value`.
var ResolvedPos = function ResolvedPos(pos, path, parentOffset) {
  // :: number The position that was resolved.
  this.pos = pos;
  this.path = path;
  // :: number
  // The number of levels the parent node is from the root. If this
  // position points directly into the root node, it is 0. If it
  // points into a top-level paragraph, 1, and so on.
  this.depth = path.length / 3 - 1;
  // :: number The offset this position has into its parent node.
  this.parentOffset = parentOffset;
};

var prototypeAccessors$3 = { parent: {},doc: {},textOffset: {},nodeAfter: {},nodeBefore: {} };

ResolvedPos.prototype.resolveDepth = function resolveDepth (val) {
  if (val == null) { return this.depth }
  if (val < 0) { return this.depth + val }
  return val
};

// :: Node
// The parent node that the position points into. Note that even if
// a position points into a text node, that node is not considered
// the parent—text nodes are ‘flat’ in this model, and have no content.
prototypeAccessors$3.parent.get = function () { return this.node(this.depth) };

// :: Node
// The root node in which the position was resolved.
prototypeAccessors$3.doc.get = function () { return this.node(0) };

// :: (?number) → Node
// The ancestor node at the given level. `p.node(p.depth)` is the
// same as `p.parent`.
ResolvedPos.prototype.node = function node (depth) { return this.path[this.resolveDepth(depth) * 3] };

// :: (?number) → number
// The index into the ancestor at the given level. If this points at
// the 3rd node in the 2nd paragraph on the top level, for example,
// `p.index(0)` is 2 and `p.index(1)` is 3.
ResolvedPos.prototype.index = function index (depth) { return this.path[this.resolveDepth(depth) * 3 + 1] };

// :: (?number) → number
// The index pointing after this position into the ancestor at the
// given level.
ResolvedPos.prototype.indexAfter = function indexAfter (depth) {
  depth = this.resolveDepth(depth);
  return this.index(depth) + (depth == this.depth && !this.textOffset ? 0 : 1)
};

// :: (?number) → number
// The (absolute) position at the start of the node at the given
// level.
ResolvedPos.prototype.start = function start (depth) {
  depth = this.resolveDepth(depth);
  return depth == 0 ? 0 : this.path[depth * 3 - 1] + 1
};

// :: (?number) → number
// The (absolute) position at the end of the node at the given
// level.
ResolvedPos.prototype.end = function end (depth) {
  depth = this.resolveDepth(depth);
  return this.start(depth) + this.node(depth).content.size
};

// :: (?number) → number
// The (absolute) position directly before the wrapping node at the
// given level, or, when `level` is `this.depth + 1`, the original
// position.
ResolvedPos.prototype.before = function before (depth) {
  depth = this.resolveDepth(depth);
  if (!depth) { throw new RangeError("There is no position before the top-level node") }
  return depth == this.depth + 1 ? this.pos : this.path[depth * 3 - 1]
};

// :: (?number) → number
// The (absolute) position directly after the wrapping node at the
// given level, or the original position when `level` is `this.depth + 1`.
ResolvedPos.prototype.after = function after (depth) {
  depth = this.resolveDepth(depth);
  if (!depth) { throw new RangeError("There is no position after the top-level node") }
  return depth == this.depth + 1 ? this.pos : this.path[depth * 3 - 1] + this.path[depth * 3].nodeSize
};

// :: number
// When this position points into a text node, this returns the
// distance between the position and the start of the text node.
// Will be zero for positions that point between nodes.
prototypeAccessors$3.textOffset.get = function () { return this.pos - this.path[this.path.length - 1] };

// :: ?Node
// Get the node directly after the position, if any. If the position
// points into a text node, only the part of that node after the
// position is returned.
prototypeAccessors$3.nodeAfter.get = function () {
  var parent = this.parent, index = this.index(this.depth);
  if (index == parent.childCount) { return null }
  var dOff = this.pos - this.path[this.path.length - 1], child = parent.child(index);
  return dOff ? parent.child(index).cut(dOff) : child
};

// :: ?Node
// Get the node directly before the position, if any. If the
// position points into a text node, only the part of that node
// before the position is returned.
prototypeAccessors$3.nodeBefore.get = function () {
  var index = this.index(this.depth);
  var dOff = this.pos - this.path[this.path.length - 1];
  if (dOff) { return this.parent.child(index).cut(0, dOff) }
  return index == 0 ? null : this.parent.child(index - 1)
};

// :: () → [Mark]
// Get the marks at this position, factoring in the surrounding
// marks' [`inclusive`](#model.MarkSpec.inclusive) property. If the
// position is at the start of a non-empty node, the marks of the
// node after it (if any) are returned.
ResolvedPos.prototype.marks = function marks () {
  var parent = this.parent, index = this.index();

  // In an empty parent, return the empty array
  if (parent.content.size == 0) { return Mark.none }

  // When inside a text node, just return the text node's marks
  if (this.textOffset) { return parent.child(index).marks }

  var main = parent.maybeChild(index - 1), other = parent.maybeChild(index);
  // If the `after` flag is true of there is no node before, make
  // the node after this position the main reference.
  if (!main) { var tmp = main; main = other; other = tmp; }

  // Use all marks in the main node, except those that have
  // `inclusive` set to false and are not present in the other node.
  var marks = main.marks;
  for (var i = 0; i < marks.length; i++)
    { if (marks[i].type.spec.inclusive === false && (!other || !marks[i].isInSet(other.marks)))
      { marks = marks[i--].removeFromSet(marks); } }

  return marks
};

// :: (ResolvedPos) → ?[Mark]
// Get the marks after the current position, if any, except those
// that are non-inclusive and not present at position `$end`. This
// is mostly useful for getting the set of marks to preserve after a
// deletion. Will return `null` if this position is at the end of
// its parent node or its parent node isn't a textblock (in which
// case no marks should be preserved).
ResolvedPos.prototype.marksAcross = function marksAcross ($end) {
  var after = this.parent.maybeChild(this.index());
  if (!after || !after.isInline) { return null }

  var marks = after.marks, next = $end.parent.maybeChild($end.index());
  for (var i = 0; i < marks.length; i++)
    { if (marks[i].type.spec.inclusive === false && (!next || !marks[i].isInSet(next.marks)))
      { marks = marks[i--].removeFromSet(marks); } }
  return marks
};

// :: (number) → number
// The depth up to which this position and the given (non-resolved)
// position share the same parent nodes.
ResolvedPos.prototype.sharedDepth = function sharedDepth (pos) {
    var this$1 = this;

  for (var depth = this.depth; depth > 0; depth--)
    { if (this$1.start(depth) <= pos && this$1.end(depth) >= pos) { return depth } }
  return 0
};

// :: (?ResolvedPos, ?(Node) → bool) → ?NodeRange
// Returns a range based on the place where this position and the
// given position diverge around block content. If both point into
// the same textblock, for example, a range around that textblock
// will be returned. If they point into different blocks, the range
// around those blocks in their shared ancestor is returned. You can
// pass in an optional predicate that will be called with a parent
// node to see if a range into that parent is acceptable.
ResolvedPos.prototype.blockRange = function blockRange (other, pred) {
    var this$1 = this;
    if ( other === void 0 ) other = this;

  if (other.pos < this.pos) { return other.blockRange(this) }
  for (var d = this.depth - (this.parent.inlineContent || this.pos == other.pos ? 1 : 0); d >= 0; d--)
    { if (other.pos <= this$1.end(d) && (!pred || pred(this$1.node(d))))
      { return new NodeRange(this$1, other, d) } }
};

// :: (ResolvedPos) → bool
// Query whether the given position shares the same parent node.
ResolvedPos.prototype.sameParent = function sameParent (other) {
  return this.pos - this.parentOffset == other.pos - other.parentOffset
};

// :: (ResolvedPos) → ResolvedPos
// Return the greater of this and the given position.
ResolvedPos.prototype.max = function max (other) {
  return other.pos > this.pos ? other : this
};

// :: (ResolvedPos) → ResolvedPos
// Return the smaller of this and the given position.
ResolvedPos.prototype.min = function min (other) {
  return other.pos < this.pos ? other : this
};

ResolvedPos.prototype.toString = function toString () {
    var this$1 = this;

  var str = "";
  for (var i = 1; i <= this.depth; i++)
    { str += (str ? "/" : "") + this$1.node(i).type.name + "_" + this$1.index(i - 1); }
  return str + ":" + this.parentOffset
};

ResolvedPos.resolve = function resolve (doc, pos) {
  if (!(pos >= 0 && pos <= doc.content.size)) { throw new RangeError("Position " + pos + " out of range") }
  var path = [];
  var start = 0, parentOffset = pos;
  for (var node = doc;;) {
    var ref = node.content.findIndex(parentOffset);
      var index = ref.index;
      var offset = ref.offset;
    var rem = parentOffset - offset;
    path.push(node, index, start + offset);
    if (!rem) { break }
    node = node.child(index);
    if (node.isText) { break }
    parentOffset = rem - 1;
    start += offset + 1;
  }
  return new ResolvedPos(pos, path, parentOffset)
};

ResolvedPos.resolveCached = function resolveCached (doc, pos) {
  for (var i = 0; i < resolveCache.length; i++) {
    var cached = resolveCache[i];
    if (cached.pos == pos && cached.doc == doc) { return cached }
  }
  var result = resolveCache[resolveCachePos] = ResolvedPos.resolve(doc, pos);
  resolveCachePos = (resolveCachePos + 1) % resolveCacheSize;
  return result
};

Object.defineProperties( ResolvedPos.prototype, prototypeAccessors$3 );

var resolveCache = [];
var resolveCachePos = 0;
var resolveCacheSize = 12;

// ::- Represents a flat range of content, i.e. one that starts and
// ends in the same node.
var NodeRange = function NodeRange($from, $to, depth) {
  // :: ResolvedPos A resolved position along the start of the
  // content. May have a `depth` greater than this object's `depth`
  // property, since these are the positions that were used to
  // compute the range, not re-resolved positions directly at its
  // boundaries.
  this.$from = $from;
  // :: ResolvedPos A position along the end of the content. See
  // caveat for [`$from`](#model.NodeRange.$from).
  this.$to = $to;
  // :: number The depth of the node that this range points into.
  this.depth = depth;
};

var prototypeAccessors$1$1 = { start: {},end: {},parent: {},startIndex: {},endIndex: {} };

// :: number The position at the start of the range.
prototypeAccessors$1$1.start.get = function () { return this.$from.before(this.depth + 1) };
// :: number The position at the end of the range.
prototypeAccessors$1$1.end.get = function () { return this.$to.after(this.depth + 1) };

// :: Node The parent node that the range points into.
prototypeAccessors$1$1.parent.get = function () { return this.$from.node(this.depth) };
// :: number The start index of the range in the parent node.
prototypeAccessors$1$1.startIndex.get = function () { return this.$from.index(this.depth) };
// :: number The end index of the range in the parent node.
prototypeAccessors$1$1.endIndex.get = function () { return this.$to.indexAfter(this.depth) };

Object.defineProperties( NodeRange.prototype, prototypeAccessors$1$1 );

var emptyAttrs = Object.create(null);

// ::- This class represents a node in the tree that makes up a
// ProseMirror document. So a document is an instance of `Node`, with
// children that are also instances of `Node`.
//
// Nodes are persistent data structures. Instead of changing them, you
// create new ones with the content you want. Old ones keep pointing
// at the old document shape. This is made cheaper by sharing
// structure between the old and new data as much as possible, which a
// tree shape like this (without back pointers) makes easy.
//
// **Do not** directly mutate the properties of a `Node` object. See
// [the guide](/docs/guide/#doc) for more information.
var Node = function Node(type, attrs, content, marks) {
  // :: NodeType
  // The type of node that this is.
  this.type = type;

  // :: Object
  // An object mapping attribute names to values. The kind of
  // attributes allowed and required are
  // [determined](#model.NodeSpec.attrs) by the node type.
  this.attrs = attrs;

  // :: Fragment
  // A container holding the node's children.
  this.content = content || Fragment.empty;

  // :: [Mark]
  // The marks (things like whether it is emphasized or part of a
  // link) applied to this node.
  this.marks = marks || Mark.none;
};

var prototypeAccessors = { nodeSize: {},childCount: {},textContent: {},firstChild: {},lastChild: {},isBlock: {},isTextblock: {},inlineContent: {},isInline: {},isText: {},isLeaf: {},isAtom: {} };

// text:: ?string
// For text nodes, this contains the node's text content.

// :: number
// The size of this node, as defined by the integer-based [indexing
// scheme](/docs/guide/#doc.indexing). For text nodes, this is the
// amount of characters. For other leaf nodes, it is one. For
// non-leaf nodes, it is the size of the content plus two (the start
// and end token).
prototypeAccessors.nodeSize.get = function () { return this.isLeaf ? 1 : 2 + this.content.size };

// :: number
// The number of children that the node has.
prototypeAccessors.childCount.get = function () { return this.content.childCount };

// :: (number) → Node
// Get the child node at the given index. Raises an error when the
// index is out of range.
Node.prototype.child = function child (index) { return this.content.child(index) };

// :: (number) → ?Node
// Get the child node at the given index, if it exists.
Node.prototype.maybeChild = function maybeChild (index) { return this.content.maybeChild(index) };

// :: ((node: Node, offset: number, index: number))
// Call `f` for every child node, passing the node, its offset
// into this parent node, and its index.
Node.prototype.forEach = function forEach (f) { this.content.forEach(f); };

// :: (number, number, (node: Node, pos: number, parent: Node, index: number) → ?bool, ?number)
// Invoke a callback for all descendant nodes recursively between
// the given two positions that are relative to start of this node's
// content. The callback is invoked with the node, its
// parent-relative position, its parent node, and its child index.
// When the callback returns false for a given node, that node's
// children will not be recursed over. The last parameter can be
// used to specify a starting position to count from.
Node.prototype.nodesBetween = function nodesBetween (from, to, f, startPos) {
    if ( startPos === void 0 ) startPos = 0;

  this.content.nodesBetween(from, to, f, startPos, this);
};

// :: ((node: Node, pos: number, parent: Node) → ?bool)
// Call the given callback for every descendant node. Doesn't
// descend into a node when the callback returns `false`.
Node.prototype.descendants = function descendants (f) {
  this.nodesBetween(0, this.content.size, f);
};

// :: string
// Concatenates all the text nodes found in this fragment and its
// children.
prototypeAccessors.textContent.get = function () { return this.textBetween(0, this.content.size, "") };

// :: (number, number, ?string, ?string) → string
// Get all text between positions `from` and `to`. When
// `blockSeparator` is given, it will be inserted whenever a new
// block node is started. When `leafText` is given, it'll be
// inserted for every non-text leaf node encountered.
Node.prototype.textBetween = function textBetween (from, to, blockSeparator, leafText) {
  return this.content.textBetween(from, to, blockSeparator, leafText)
};

// :: ?Node
// Returns this node's first child, or `null` if there are no
// children.
prototypeAccessors.firstChild.get = function () { return this.content.firstChild };

// :: ?Node
// Returns this node's last child, or `null` if there are no
// children.
prototypeAccessors.lastChild.get = function () { return this.content.lastChild };

// :: (Node) → bool
// Test whether two nodes represent the same piece of document.
Node.prototype.eq = function eq (other) {
  return this == other || (this.sameMarkup(other) && this.content.eq(other.content))
};

// :: (Node) → bool
// Compare the markup (type, attributes, and marks) of this node to
// those of another. Returns `true` if both have the same markup.
Node.prototype.sameMarkup = function sameMarkup (other) {
  return this.hasMarkup(other.type, other.attrs, other.marks)
};

// :: (NodeType, ?Object, ?[Mark]) → bool
// Check whether this node's markup correspond to the given type,
// attributes, and marks.
Node.prototype.hasMarkup = function hasMarkup (type, attrs, marks) {
  return this.type == type &&
    compareDeep(this.attrs, attrs || type.defaultAttrs || emptyAttrs) &&
    Mark.sameSet(this.marks, marks || Mark.none)
};

// :: (?Fragment) → Node
// Create a new node with the same markup as this node, containing
// the given content (or empty, if no content is given).
Node.prototype.copy = function copy (content) {
    if ( content === void 0 ) content = null;

  if (content == this.content) { return this }
  return new this.constructor(this.type, this.attrs, content, this.marks)
};

// :: ([Mark]) → Node
// Create a copy of this node, with the given set of marks instead
// of the node's own marks.
Node.prototype.mark = function mark (marks) {
  return marks == this.marks ? this : new this.constructor(this.type, this.attrs, this.content, marks)
};

// :: (number, ?number) → Node
// Create a copy of this node with only the content between the
// given positions. If `to` is not given, it defaults to the end of
// the node.
Node.prototype.cut = function cut (from, to) {
  if (from == 0 && to == this.content.size) { return this }
  return this.copy(this.content.cut(from, to))
};

// :: (number, ?number) → Slice
// Cut out the part of the document between the given positions, and
// return it as a `Slice` object.
Node.prototype.slice = function slice (from, to, includeParents) {
    if ( to === void 0 ) to = this.content.size;
    if ( includeParents === void 0 ) includeParents = false;

  if (from == to) { return Slice.empty }

  var $from = this.resolve(from), $to = this.resolve(to);
  var depth = includeParents ? 0 : $from.sharedDepth(to);
  var start = $from.start(depth), node = $from.node(depth);
  var content = node.content.cut($from.pos - start, $to.pos - start);
  return new Slice(content, $from.depth - depth, $to.depth - depth)
};

// :: (number, number, Slice) → Node
// Replace the part of the document between the given positions with
// the given slice. The slice must 'fit', meaning its open sides
// must be able to connect to the surrounding content, and its
// content nodes must be valid children for the node they are placed
// into. If any of this is violated, an error of type
// [`ReplaceError`](#model.ReplaceError) is thrown.
Node.prototype.replace = function replace$1 (from, to, slice) {
  return replace(this.resolve(from), this.resolve(to), slice)
};

// :: (number) → ?Node
// Find the node starting at the given position.
Node.prototype.nodeAt = function nodeAt (pos) {
  for (var node = this;;) {
    var ref = node.content.findIndex(pos);
      var index = ref.index;
      var offset = ref.offset;
    node = node.maybeChild(index);
    if (!node) { return null }
    if (offset == pos || node.isText) { return node }
    pos -= offset + 1;
  }
};

// :: (number) → {node: ?Node, index: number, offset: number}
// Find the (direct) child node after the given offset, if any,
// and return it along with its index and offset relative to this
// node.
Node.prototype.childAfter = function childAfter (pos) {
  var ref = this.content.findIndex(pos);
    var index = ref.index;
    var offset = ref.offset;
  return {node: this.content.maybeChild(index), index: index, offset: offset}
};

// :: (number) → {node: ?Node, index: number, offset: number}
// Find the (direct) child node before the given offset, if any,
// and return it along with its index and offset relative to this
// node.
Node.prototype.childBefore = function childBefore (pos) {
  if (pos == 0) { return {node: null, index: 0, offset: 0} }
  var ref = this.content.findIndex(pos);
    var index = ref.index;
    var offset = ref.offset;
  if (offset < pos) { return {node: this.content.child(index), index: index, offset: offset} }
  var node = this.content.child(index - 1);
  return {node: node, index: index - 1, offset: offset - node.nodeSize}
};

// :: (number) → ResolvedPos
// Resolve the given position in the document, returning an
// [object](#model.ResolvedPos) with information about its context.
Node.prototype.resolve = function resolve (pos) { return ResolvedPos.resolveCached(this, pos) };

Node.prototype.resolveNoCache = function resolveNoCache (pos) { return ResolvedPos.resolve(this, pos) };

// :: (number, number, MarkType) → bool
// Test whether a mark of the given type occurs in this document
// between the two given positions.
Node.prototype.rangeHasMark = function rangeHasMark (from, to, type) {
  var found = false;
  if (to > from) { this.nodesBetween(from, to, function (node) {
    if (type.isInSet(node.marks)) { found = true; }
    return !found
  }); }
  return found
};

// :: bool
// True when this is a block (non-inline node)
prototypeAccessors.isBlock.get = function () { return this.type.isBlock };

// :: bool
// True when this is a textblock node, a block node with inline
// content.
prototypeAccessors.isTextblock.get = function () { return this.type.isTextblock };

// :: bool
// True when this node has inline content.
prototypeAccessors.inlineContent.get = function () { return this.type.inlineContent };

// :: bool
// True when this is an inline node (a text node or a node that can
// appear among text).
prototypeAccessors.isInline.get = function () { return this.type.isInline };

// :: bool
// True when this is a text node.
prototypeAccessors.isText.get = function () { return this.type.isText };

// :: bool
// True when this is a leaf node.
prototypeAccessors.isLeaf.get = function () { return this.type.isLeaf };

// :: bool
// True when this is an atom, i.e. when it does not have directly
// editable content. This is usually the same as `isLeaf`, but can
// be configured with the [`atom` property](#model.NodeSpec.atom) on
// a node's spec (typically used when the node is displayed as an
// uneditable [node view](#view.NodeView)).
prototypeAccessors.isAtom.get = function () { return this.type.isAtom };

// :: () → string
// Return a string representation of this node for debugging
// purposes.
Node.prototype.toString = function toString () {
  var name = this.type.name;
  if (this.content.size)
    { name += "(" + this.content.toStringInner() + ")"; }
  return wrapMarks(this.marks, name)
};

// :: (number) → ContentMatch
// Get the content match in this node at the given index.
Node.prototype.contentMatchAt = function contentMatchAt (index) {
  return this.type.contentMatch.matchFragment(this.content, 0, index)
};

// :: (number, number, ?Fragment, ?number, ?number) → bool
// Test whether replacing the range between `from` and `to` (by
// child index) with the given replacement fragment (which defaults
// to the empty fragment) would leave the node's content valid. You
// can optionally pass `start` and `end` indices into the
// replacement fragment.
Node.prototype.canReplace = function canReplace (from, to, replacement, start, end) {
    var this$1 = this;
    if ( replacement === void 0 ) replacement = Fragment.empty;
    if ( start === void 0 ) start = 0;
    if ( end === void 0 ) end = replacement.childCount;

  var one = this.contentMatchAt(from).matchFragment(replacement, start, end);
  var two = one && one.matchFragment(this.content, to);
  if (!two || !two.validEnd) { return false }
  for (var i = start; i < end; i++) { if (!this$1.type.allowsMarks(replacement.child(i).marks)) { return false } }
  return true
};

// :: (number, number, NodeType, ?[Mark]) → bool
// Test whether replacing the range `from` to `to` (by index) with a
// node of the given type would leave the node's content valid.
Node.prototype.canReplaceWith = function canReplaceWith (from, to, type, marks) {
  if (marks && !this.type.allowsMarks(marks)) { return false }
  var start = this.contentMatchAt(from).matchType(type);
  var end = start && start.matchFragment(this.content, to);
  return end ? end.validEnd : false
};

// :: (Node) → bool
// Test whether the given node's content could be appended to this
// node. If that node is empty, this will only return true if there
// is at least one node type that can appear in both nodes (to avoid
// merging completely incompatible nodes).
Node.prototype.canAppend = function canAppend (other) {
  if (other.content.size) { return this.canReplace(this.childCount, this.childCount, other.content) }
  else { return this.type.compatibleContent(other.type) }
};

Node.prototype.defaultContentType = function defaultContentType (at) {
  return this.contentMatchAt(at).defaultType
};

// :: ()
// Check whether this node and its descendants conform to the
// schema, and raise error when they do not.
Node.prototype.check = function check () {
  if (!this.type.validContent(this.content))
    { throw new RangeError(("Invalid content for node " + (this.type.name) + ": " + (this.content.toString().slice(0, 50)))) }
  this.content.forEach(function (node) { return node.check(); });
};

// :: () → Object
// Return a JSON-serializeable representation of this node.
Node.prototype.toJSON = function toJSON () {
    var this$1 = this;

  var obj = {type: this.type.name};
  for (var _ in this$1.attrs) {
    obj.attrs = this$1.attrs;
    break
  }
  if (this.content.size)
    { obj.content = this.content.toJSON(); }
  if (this.marks.length)
    { obj.marks = this.marks.map(function (n) { return n.toJSON(); }); }
  return obj
};

// :: (Schema, Object) → Node
// Deserialize a node from its JSON representation.
Node.fromJSON = function fromJSON (schema, json) {
  var marks = json.marks && json.marks.map(schema.markFromJSON);
  if (json.type == "text") { return schema.text(json.text, marks) }
  var type = schema.nodeType(json.type);
  if (!type) { throw new RangeError(("There is no node type " + (json.type) + " in this schema")) }
  return type.create(json.attrs, Fragment.fromJSON(schema, json.content), marks)
};

Object.defineProperties( Node.prototype, prototypeAccessors );

var TextNode = (function (Node) {
  function TextNode(type, attrs, content, marks) {
    Node.call(this, type, attrs, null, marks);

    if (!content) { throw new RangeError("Empty text nodes are not allowed") }

    this.text = content;
  }

  if ( Node ) TextNode.__proto__ = Node;
  TextNode.prototype = Object.create( Node && Node.prototype );
  TextNode.prototype.constructor = TextNode;

  var prototypeAccessors$1 = { textContent: {},nodeSize: {} };

  TextNode.prototype.toString = function toString () { return wrapMarks(this.marks, JSON.stringify(this.text)) };

  prototypeAccessors$1.textContent.get = function () { return this.text };

  TextNode.prototype.textBetween = function textBetween (from, to) { return this.text.slice(from, to) };

  prototypeAccessors$1.nodeSize.get = function () { return this.text.length };

  TextNode.prototype.mark = function mark (marks) {
    return marks == this.marks ? this : new TextNode(this.type, this.attrs, this.text, marks)
  };

  TextNode.prototype.withText = function withText (text) {
    if (text == this.text) { return this }
    return new TextNode(this.type, this.attrs, text, this.marks)
  };

  TextNode.prototype.cut = function cut (from, to) {
    if ( from === void 0 ) from = 0;
    if ( to === void 0 ) to = this.text.length;

    if (from == 0 && to == this.text.length) { return this }
    return this.withText(this.text.slice(from, to))
  };

  TextNode.prototype.eq = function eq (other) {
    return this.sameMarkup(other) && this.text == other.text
  };

  TextNode.prototype.toJSON = function toJSON () {
    var base = Node.prototype.toJSON.call(this);
    base.text = this.text;
    return base
  };

  Object.defineProperties( TextNode.prototype, prototypeAccessors$1 );

  return TextNode;
}(Node));

function wrapMarks(marks, str) {
  for (var i = marks.length - 1; i >= 0; i--)
    { str = marks[i].type.name + "(" + str + ")"; }
  return str
}

// ::- Instances of this class represent a match state of a node
// type's [content expression](#model.NodeSpec.content), and can be
// used to find out whether further content matches here, and whether
// a given position is a valid end of the node.
var ContentMatch = function ContentMatch(validEnd) {
  // :: bool
  // True when this match state represents a valid end of the node.
  this.validEnd = validEnd;
  this.next = [];
  this.wrapCache = [];
};

var prototypeAccessors$5 = { inlineContent: {},defaultType: {} };

ContentMatch.parse = function parse (string, nodeTypes) {
  var stream = new TokenStream(string, nodeTypes);
  if (stream.next == null) { return ContentMatch.empty }
  var expr = parseExpr(stream);
  if (stream.next) { stream.err("Unexpected trailing text"); }
  var match = dfa(nfa(expr));
  checkForDeadEnds(match, stream);
  return match
};

// :: (NodeType) → ?ContentMatch
// Match a node type, returning a match after that node if
// successful.
ContentMatch.prototype.matchType = function matchType (type) {
    var this$1 = this;

  for (var i = 0; i < this.next.length; i += 2)
    { if (this$1.next[i] == type) { return this$1.next[i + 1] } }
  return null
};

// :: (Fragment, ?number, ?number) → ?ContentMatch
// Try to match a fragment. Returns the resulting match when
// successful.
ContentMatch.prototype.matchFragment = function matchFragment (frag, start, end) {
    if ( start === void 0 ) start = 0;
    if ( end === void 0 ) end = frag.childCount;

  var cur = this;
  for (var i = start; cur && i < end; i++)
    { cur = cur.matchType(frag.child(i).type); }
  return cur
};

prototypeAccessors$5.inlineContent.get = function () {
  var first = this.next[0];
  return first ? first.isInline : false
};

prototypeAccessors$5.defaultType.get = function () {
  return this.next[0]
};

ContentMatch.prototype.compatible = function compatible (other) {
    var this$1 = this;

  for (var i = 0; i < this.next.length; i += 2)
    { for (var j = 0; j < other.next.length; j += 2)
      { if (this$1.next[i] == other.next[j]) { return true } } }
  return false
};

// :: (Fragment, bool, ?number) → ?Fragment
// Try to match the given fragment, and if that fails, see if it can
// be made to match by inserting nodes in front of it. When
// successful, return a fragment of inserted nodes (which may be
// empty if nothing had to be inserted). When `toEnd` is true, only
// return a fragment if the resulting match goes to the end of the
// content expression.
ContentMatch.prototype.fillBefore = function fillBefore (after, toEnd, startIndex) {
    if ( toEnd === void 0 ) toEnd = false;
    if ( startIndex === void 0 ) startIndex = 0;

  var seen = [this];
  function search(match, types) {
    var finished = match.matchFragment(after, startIndex);
    if (finished && (!toEnd || finished.validEnd))
      { return Fragment.from(types.map(function (tp) { return tp.createAndFill(); })) }

    for (var i = 0; i < match.next.length; i += 2) {
      var type = match.next[i], next = match.next[i + 1];
      if (!type.hasRequiredAttrs() && seen.indexOf(next) == -1) {
        seen.push(next);
        var found = search(next, types.concat(type));
        if (found) { return found }
      }
    }
  }

  return search(this, [])
};

// :: (NodeType) → ?[NodeType]
// Find a set of wrapping node types that would allow a node of the
// given type to appear at this position. The result may be empty
// (when it fits directly) and will be null when no such wrapping
// exists.
ContentMatch.prototype.findWrapping = function findWrapping (target) {
    var this$1 = this;

  for (var i = 0; i < this.wrapCache.length; i += 2)
    { if (this$1.wrapCache[i] == target) { return this$1.wrapCache[i + 1] } }
  var computed = this.computeWrapping(target);
  this.wrapCache.push(target, computed);
  return computed
};

ContentMatch.prototype.computeWrapping = function computeWrapping (target) {
  var seen = Object.create(null), active = [{match: this, type: null, via: null}];
  while (active.length) {
    var current = active.shift(), match = current.match;
    if (match.matchType(target)) {
      var result = [];
      for (var obj = current; obj.type; obj = obj.via)
        { result.push(obj.type); }
      return result.reverse()
    }
    for (var i = 0; i < match.next.length; i += 2) {
      var type = match.next[i];
      if (!type.isLeaf && !(type.name in seen) && (!current.type || match.next[i + 1].validEnd)) {
        active.push({match: type.contentMatch, type: type, via: current});
        seen[type.name] = true;
      }
    }
  }
};

ContentMatch.prototype.toString = function toString () {
  var seen = [];
  function scan(m) {
    seen.push(m);
    for (var i = 1; i < m.next.length; i += 2)
      { if (seen.indexOf(m.next[i]) == -1) { scan(m.next[i]); } }
  }
  scan(this);
  return seen.map(function (m, i) {
    var out = i + (m.validEnd ? "*" : " ") + " ";
    for (var i$1 = 0; i$1 < m.next.length; i$1 += 2)
      { out += (i$1 ? ", " : "") + m.next[i$1].name + "->" + seen.indexOf(m.next[i$1 + 1]); }
    return out
  }).join("\n")
};

Object.defineProperties( ContentMatch.prototype, prototypeAccessors$5 );

ContentMatch.empty = new ContentMatch(true);

var TokenStream = function TokenStream(string, nodeTypes) {
  this.string = string;
  this.nodeTypes = nodeTypes;
  this.inline = null;
  this.pos = 0;
  this.tokens = string.split(/\s*(?=\b|\W|$)/);
  if (this.tokens[this.tokens.length - 1] == "") { this.tokens.pop(); }
  if (this.tokens[0] == "") { this.tokens.unshift(); }
};

var prototypeAccessors$1$3 = { next: {} };

prototypeAccessors$1$3.next.get = function () { return this.tokens[this.pos] };

TokenStream.prototype.eat = function eat (tok) { return this.next == tok && (this.pos++ || true) };

TokenStream.prototype.err = function err (str) { throw new SyntaxError(str + " (in content expression '" + this.string + "')") };

Object.defineProperties( TokenStream.prototype, prototypeAccessors$1$3 );

function parseExpr(stream) {
  var exprs = [];
  do { exprs.push(parseExprSeq(stream)); }
  while (stream.eat("|"))
  return exprs.length == 1 ? exprs[0] : {type: "choice", exprs: exprs}
}

function parseExprSeq(stream) {
  var exprs = [];
  do { exprs.push(parseExprSubscript(stream)); }
  while (stream.next && stream.next != ")" && stream.next != "|")
  return exprs.length == 1 ? exprs[0] : {type: "seq", exprs: exprs}
}

function parseExprSubscript(stream) {
  var expr = parseExprAtom(stream);
  for (;;) {
    if (stream.eat("+"))
      { expr = {type: "plus", expr: expr}; }
    else if (stream.eat("*"))
      { expr = {type: "star", expr: expr}; }
    else if (stream.eat("?"))
      { expr = {type: "opt", expr: expr}; }
    else if (stream.eat("{"))
      { expr = parseExprRange(stream, expr); }
    else { break }
  }
  return expr
}

function parseNum(stream) {
  if (/\D/.test(stream.next)) { stream.err("Expected number, got '" + stream.next + "'"); }
  var result = Number(stream.next);
  stream.pos++;
  return result
}

function parseExprRange(stream, expr) {
  var min = parseNum(stream), max = min;
  if (stream.eat(",")) {
    if (stream.next != "}") { max = parseNum(stream); }
    else { max = -1; }
  }
  if (!stream.eat("}")) { stream.err("Unclosed braced range"); }
  return {type: "range", min: min, max: max, expr: expr}
}

function resolveName(stream, name) {
  var types = stream.nodeTypes, type = types[name];
  if (type) { return [type] }
  var result = [];
  for (var typeName in types) {
    var type$1 = types[typeName];
    if (type$1.groups.indexOf(name) > -1) { result.push(type$1); }
  }
  if (result.length == 0) { stream.err("No node type or group '" + name + "' found"); }
  return result
}

function parseExprAtom(stream) {
  if (stream.eat("(")) {
    var expr = parseExpr(stream);
    if (!stream.eat(")")) { stream.err("Missing closing paren"); }
    return expr
  } else if (!/\W/.test(stream.next)) {
    var exprs = resolveName(stream, stream.next).map(function (type) {
      if (stream.inline == null) { stream.inline = type.isInline; }
      else if (stream.inline != type.isInline) { stream.err("Mixing inline and block content"); }
      return {type: "name", value: type}
    });
    stream.pos++;
    return exprs.length == 1 ? exprs[0] : {type: "choice", exprs: exprs}
  } else {
    stream.err("Unexpected token '" + stream.next + "'");
  }
}

// The code below helps compile a regular-expression-like language
// into a deterministic finite automaton. For a good introduction to
// these concepts, see https://swtch.com/~rsc/regexp/regexp1.html

// : (Object) → [[{term: ?any, to: number}]]
// Construct an NFA from an expression as returned by the parser. The
// NFA is represented as an array of states, which are themselves
// arrays of edges, which are `{term, to}` objects. The first state is
// the entry state and the last node is the success state.
//
// Note that unlike typical NFAs, the edge ordering in this one is
// significant, in that it is used to contruct filler content when
// necessary.
function nfa(expr) {
  var nfa = [[]];
  connect(compile(expr, 0), node());
  return nfa

  function node() { return nfa.push([]) - 1 }
  function edge(from, to, term) {
    var edge = {term: term, to: to};
    nfa[from].push(edge);
    return edge
  }
  function connect(edges, to) { edges.forEach(function (edge) { return edge.to = to; }); }

  function compile(expr, from) {
    if (expr.type == "choice") {
      return expr.exprs.reduce(function (out, expr) { return out.concat(compile(expr, from)); }, [])
    } else if (expr.type == "seq") {
      for (var i = 0;; i++) {
        var next = compile(expr.exprs[i], from);
        if (i == expr.exprs.length - 1) { return next }
        connect(next, from = node());
      }
    } else if (expr.type == "star") {
      var loop = node();
      edge(from, loop);
      connect(compile(expr.expr, loop), loop);
      return [edge(loop)]
    } else if (expr.type == "plus") {
      var loop$1 = node();
      connect(compile(expr.expr, from), loop$1);
      connect(compile(expr.expr, loop$1), loop$1);
      return [edge(loop$1)]
    } else if (expr.type == "opt") {
      return [edge(from)].concat(compile(expr.expr, from))
    } else if (expr.type == "range") {
      var cur = from;
      for (var i$1 = 0; i$1 < expr.min; i$1++) {
        var next$1 = node();
        connect(compile(expr.expr, cur), next$1);
        cur = next$1;
      }
      if (expr.max == -1) {
        connect(compile(expr.expr, cur), cur);
      } else {
        for (var i$2 = expr.min; i$2 < expr.max; i$2++) {
          var next$2 = node();
          edge(cur, next$2);
          connect(compile(expr.expr, cur), next$2);
          cur = next$2;
        }
      }
      return [edge(cur)]
    } else if (expr.type == "name") {
      return [edge(from, null, expr.value)]
    }
  }
}

function cmp(a, b) { return a - b }

function nullFrom(nfa, node) {
  var result = [];
  scan(node);
  return result.sort(cmp)

  function scan(node) {
    result.push(node);
    for (var a = nfa[node], i = 0; i < a.length; i++) {
      var ref = a[i];
      var term = ref.term;
      var to = ref.to;
      if (!term && result.indexOf(to) == -1) { scan(to); }
    }
  }
}

// : ([[{term: ?any, to: number}]]) → ContentMatch
// Compiles an NFA as produced by `nfa` into a DFA, modeled as a set
// of state objects (`ContentMatch` instances) with transitions
// between them.
function dfa(nfa) {
  var labeled = Object.create(null);
  return explore(nullFrom(nfa, 0))

  function explore(states) {
    var out = [];
    states.forEach(function (node) {
      nfa[node].forEach(function (ref) {
        var term = ref.term;
        var to = ref.to;

        if (!term) { return }
        var known = out.indexOf(term), set = known > -1 && out[known + 1];
        nullFrom(nfa, to).forEach(function (node) {
          if (!set) { out.push(term, set = []); }
          if (set.indexOf(node) == -1) { set.push(node); }
        });
      });
    });
    var state = labeled[states.join(",")] = new ContentMatch(states.indexOf(nfa.length - 1) > -1);
    for (var i = 0; i < out.length; i += 2) {
      var states$1 = out[i + 1].sort(cmp);
      state.next.push(out[i], labeled[states$1.join(",")] || explore(states$1));
    }
    return state
  }
}

function checkForDeadEnds(match, stream) {
  for (var i = 0, work = [match]; i < work.length; i++) {
    var state = work[i], dead = !state.validEnd, nodes = [];
    for (var j = 0; j < state.next.length; j += 2) {
      var node = state.next[j], next = state.next[j + 1];
      nodes.push(node.name);
      if (dead && !state.next[j].hasRequiredAttrs()) { dead = false; }
      if (work.indexOf(next) == -1) { work.push(next); }
    }
    if (dead) { stream.err("Only non-generatable nodes (" + nodes.join(", ") + ") after a match state"); }
  }
}

// For node types where all attrs have a default value (or which don't
// have any attributes), build up a single reusable default attribute
// object, and use it for all nodes that don't specify specific
// attributes.
function defaultAttrs(attrs) {
  var defaults = Object.create(null);
  for (var attrName in attrs) {
    var attr = attrs[attrName];
    if (!attr.hasDefault) { return null }
    defaults[attrName] = attr.default;
  }
  return defaults
}

function computeAttrs(attrs, value) {
  var built = Object.create(null);
  for (var name in attrs) {
    var given = value && value[name];
    if (given === undefined) {
      var attr = attrs[name];
      if (attr.hasDefault) { given = attr.default; }
      else { throw new RangeError("No value supplied for attribute " + name) }
    }
    built[name] = given;
  }
  return built
}

function initAttrs(attrs) {
  var result = Object.create(null);
  if (attrs) { for (var name in attrs) { result[name] = new Attribute(attrs[name]); } }
  return result
}

// ::- Node types are objects allocated once per `Schema` and used to
// [tag](#model.Node.type) `Node` instances. They contain information
// about the node type, such as its name and what kind of node it
// represents.
var NodeType = function NodeType(name, schema, spec) {
  // :: string
  // The name the node type has in this schema.
  this.name = name;

  // :: Schema
  // A link back to the `Schema` the node type belongs to.
  this.schema = schema;

  // :: NodeSpec
  // The spec that this type is based on
  this.spec = spec;

  this.groups = spec.group ? spec.group.split(" ") : [];
  this.attrs = initAttrs(spec.attrs);

  this.defaultAttrs = defaultAttrs(this.attrs);

  // :: ContentMatch
  // The starting match of the node type's content expression.
  this.contentMatch = null;

  // : ?[MarkType]
  // The set of marks allowed in this node. `null` means all marks
  // are allowed.
  this.markSet = null;

  // :: bool
  // True if this node type has inline content.
  this.inlineContent = null;

  // :: bool
  // True if this is a block type
  this.isBlock = !(spec.inline || name == "text");

  // :: bool
  // True if this is the text node type.
  this.isText = name == "text";
};

var prototypeAccessors$4 = { isInline: {},isTextblock: {},isLeaf: {},isAtom: {} };

// :: bool
// True if this is an inline type.
prototypeAccessors$4.isInline.get = function () { return !this.isBlock };

// :: bool
// True if this is a textblock type, a block that contains inline
// content.
prototypeAccessors$4.isTextblock.get = function () { return this.isBlock && this.inlineContent };

// :: bool
// True for node types that allow no content.
prototypeAccessors$4.isLeaf.get = function () { return this.contentMatch == ContentMatch.empty };

// :: bool
// True when this node is an atom, i.e. when it does not have
// directly editable content.
prototypeAccessors$4.isAtom.get = function () { return this.isLeaf || this.spec.atom };

NodeType.prototype.hasRequiredAttrs = function hasRequiredAttrs (ignore) {
    var this$1 = this;

  for (var n in this$1.attrs)
    { if (this$1.attrs[n].isRequired && (!ignore || !(n in ignore))) { return true } }
  return false
};

NodeType.prototype.compatibleContent = function compatibleContent (other) {
  return this == other || this.contentMatch.compatible(other.contentMatch)
};

NodeType.prototype.computeAttrs = function computeAttrs$1 (attrs) {
  if (!attrs && this.defaultAttrs) { return this.defaultAttrs }
  else { return computeAttrs(this.attrs, attrs) }
};

// :: (?Object, ?union<Fragment, Node, [Node]>, ?[Mark]) → Node
// Create a `Node` of this type. The given attributes are
// checked and defaulted (you can pass `null` to use the type's
// defaults entirely, if no required attributes exist). `content`
// may be a `Fragment`, a node, an array of nodes, or
// `null`. Similarly `marks` may be `null` to default to the empty
// set of marks.
NodeType.prototype.create = function create (attrs, content, marks) {
  if (typeof content == "string") { throw new Error("Calling create with string") }
  if (this.isText) { throw new Error("NodeType.create can't construct text nodes") }
  return new Node(this, this.computeAttrs(attrs), Fragment.from(content), Mark.setFrom(marks))
};

// :: (?Object, ?union<Fragment, Node, [Node]>, ?[Mark]) → Node
// Like [`create`](#model.NodeType.create), but check the given content
// against the node type's content restrictions, and throw an error
// if it doesn't match.
NodeType.prototype.createChecked = function createChecked (attrs, content, marks) {
  content = Fragment.from(content);
  if (!this.validContent(content))
    { throw new RangeError("Invalid content for node " + this.name) }
  return new Node(this, this.computeAttrs(attrs), content, Mark.setFrom(marks))
};

// :: (?Object, ?union<Fragment, Node, [Node]>, ?[Mark]) → ?Node
// Like [`create`](#model.NodeType.create), but see if it is necessary to
// add nodes to the start or end of the given fragment to make it
// fit the node. If no fitting wrapping can be found, return null.
// Note that, due to the fact that required nodes can always be
// created, this will always succeed if you pass null or
// `Fragment.empty` as content.
NodeType.prototype.createAndFill = function createAndFill (attrs, content, marks) {
  attrs = this.computeAttrs(attrs);
  content = Fragment.from(content);
  if (content.size) {
    var before = this.contentMatch.fillBefore(content);
    if (!before) { return null }
    content = before.append(content);
  }
  var after = this.contentMatch.matchFragment(content).fillBefore(Fragment.empty, true);
  if (!after) { return null }
  return new Node(this, attrs, content.append(after), Mark.setFrom(marks))
};

// :: (Fragment) → bool
// Returns true if the given fragment is valid content for this node
// type with the given attributes.
NodeType.prototype.validContent = function validContent (content) {
    var this$1 = this;

  var result = this.contentMatch.matchFragment(content);
  if (!result || !result.validEnd) { return false }
  for (var i = 0; i < content.childCount; i++)
    { if (!this$1.allowsMarks(content.child(i).marks)) { return false } }
  return true
};

// :: (MarkType) → bool
// Check whether the given mark type is allowed in this node.
NodeType.prototype.allowsMarkType = function allowsMarkType (markType) {
  return this.markSet == null || this.markSet.indexOf(markType) > -1
};

// :: ([Mark]) → bool
// Test whether the given set of marks are allowed in this node.
NodeType.prototype.allowsMarks = function allowsMarks (marks) {
    var this$1 = this;

  if (this.markSet == null) { return true }
  for (var i = 0; i < marks.length; i++) { if (!this$1.allowsMarkType(marks[i].type)) { return false } }
  return true
};

// :: ([Mark]) → [Mark]
// Removes the marks that are not allowed in this node from the given set.
NodeType.prototype.allowedMarks = function allowedMarks (marks) {
    var this$1 = this;

  if (this.markSet == null) { return marks }
  var copy;
  for (var i = 0; i < marks.length; i++) {
    if (!this$1.allowsMarkType(marks[i].type)) {
      if (!copy) { copy = marks.slice(0, i); }
    } else if (copy) {
      copy.push(marks[i]);
    }
  }
  return !copy ? marks : copy.length ? copy : Mark.empty
};

NodeType.compile = function compile (nodes, schema) {
  var result = Object.create(null);
  nodes.forEach(function (name, spec) { return result[name] = new NodeType(name, schema, spec); });

  var topType = schema.spec.topNode || "doc";
  if (!result[topType]) { throw new RangeError("Schema is missing its top node type ('" + topType + "')") }
  if (!result.text) { throw new RangeError("Every schema needs a 'text' type") }
  for (var _ in result.text.attrs) { throw new RangeError("The text node type should not have attributes") }

  return result
};

Object.defineProperties( NodeType.prototype, prototypeAccessors$4 );

// Attribute descriptors

var Attribute = function Attribute(options) {
  this.hasDefault = Object.prototype.hasOwnProperty.call(options, "default");
  this.default = options.default;
};

var prototypeAccessors$1$2 = { isRequired: {} };

prototypeAccessors$1$2.isRequired.get = function () {
  return !this.hasDefault
};

Object.defineProperties( Attribute.prototype, prototypeAccessors$1$2 );

// Marks

// ::- Like nodes, marks (which are associated with nodes to signify
// things like emphasis or being part of a link) are
// [tagged](#model.Mark.type) with type objects, which are
// instantiated once per `Schema`.
var MarkType = function MarkType(name, rank, schema, spec) {
  // :: string
  // The name of the mark type.
  this.name = name;

  // :: Schema
  // The schema that this mark type instance is part of.
  this.schema = schema;

  // :: MarkSpec
  // The spec on which the type is based.
  this.spec = spec;

  this.attrs = initAttrs(spec.attrs);

  this.rank = rank;
  this.excluded = null;
  var defaults = defaultAttrs(this.attrs);
  this.instance = defaults && new Mark(this, defaults);
};

// :: (?Object) → Mark
// Create a mark of this type. `attrs` may be `null` or an object
// containing only some of the mark's attributes. The others, if
// they have defaults, will be added.
MarkType.prototype.create = function create (attrs) {
  if (!attrs && this.instance) { return this.instance }
  return new Mark(this, computeAttrs(this.attrs, attrs))
};

MarkType.compile = function compile (marks, schema) {
  var result = Object.create(null), rank = 0;
  marks.forEach(function (name, spec) { return result[name] = new MarkType(name, rank++, schema, spec); });
  return result
};

// :: ([Mark]) → [Mark]
// When there is a mark of this type in the given set, a new set
// without it is returned. Otherwise, the input set is returned.
MarkType.prototype.removeFromSet = function removeFromSet (set) {
    var this$1 = this;

  for (var i = 0; i < set.length; i++)
    { if (set[i].type == this$1)
      { return set.slice(0, i).concat(set.slice(i + 1)) } }
  return set
};

// :: ([Mark]) → ?Mark
// Tests whether there is a mark of this type in the given set.
MarkType.prototype.isInSet = function isInSet (set) {
    var this$1 = this;

  for (var i = 0; i < set.length; i++)
    { if (set[i].type == this$1) { return set[i] } }
};

// :: (MarkType) → bool
// Queries whether a given mark type is
// [excluded](#model.MarkSpec.excludes) by this one.
MarkType.prototype.excludes = function excludes (other) {
  return this.excluded.indexOf(other) > -1
};

// SchemaSpec:: interface
// An object describing a schema, as passed to the [`Schema`](#model.Schema)
// constructor.
//
//   nodes:: union<Object<NodeSpec>, OrderedMap<NodeSpec>>
//   The node types in this schema. Maps names to
//   [`NodeSpec`](#model.NodeSpec) objects that describe the node type
//   associated with that name. Their order is significant—it
//   determines which [parse rules](#model.NodeSpec.parseDOM) take
//   precedence by default, and which nodes come first in a given
//   [group](#model.NodeSpec.group).
//
//   marks:: ?union<Object<MarkSpec>, OrderedMap<MarkSpec>>
//   The mark types that exist in this schema. The order in which they
//   are provided determines the order in which [mark
//   sets](#model.Mark.addToSet) are sorted and in which [parse
//   rules](#model.MarkSpec.parseDOM) are tried.
//
//   topNode:: ?string
//   The name of the default top-level node for the schema. Defaults
//   to `"doc"`.

// NodeSpec:: interface
//
//   content:: ?string
//   The content expression for this node, as described in the [schema
//   guide](/docs/guide/#schema.content_expressions). When not given,
//   the node does not allow any content.
//
//   marks:: ?string
//   The marks that are allowed inside of this node. May be a
//   space-separated string referring to mark names or groups, `"_"`
//   to explicitly allow all marks, or `""` to disallow marks. When
//   not given, nodes with inline content default to allowing all
//   marks, other nodes default to not allowing marks.
//
//   group:: ?string
//   The group or space-separated groups to which this node belongs,
//   which can be referred to in the content expressions for the
//   schema.
//
//   inline:: ?bool
//   Should be set to true for inline nodes. (Implied for text nodes.)
//
//   atom:: ?bool
//   Can be set to true to indicate that, though this isn't a [leaf
//   node](#model.NodeType.isLeaf), it doesn't have directly editable
//   content and should be treated as a single unit in the view.
//
//   attrs:: ?Object<AttributeSpec>
//   The attributes that nodes of this type get.
//
//   selectable:: ?bool
//   Controls whether nodes of this type can be selected as a [node
//   selection](#state.NodeSelection). Defaults to true for non-text
//   nodes.
//
//   draggable:: ?bool
//   Determines whether nodes of this type can be dragged without
//   being selected. Defaults to false.
//
//   code:: ?bool
//   Can be used to indicate that this node contains code, which
//   causes some commands to behave differently.
//
//   defining:: ?bool
//   Determines whether this node is considered an important parent
//   node during replace operations (such as paste). Non-defining (the
//   default) nodes get dropped when their entire content is replaced,
//   whereas defining nodes persist and wrap the inserted content.
//   Likewise, in _inserted_ content the defining parents of the
//   content are preserved when possible. Typically,
//   non-default-paragraph textblock types, and possibly list items,
//   are marked as defining.
//
//   isolating:: ?bool
//   When enabled (default is false), the sides of nodes of this type
//   count as boundaries that regular editing operations, like
//   backspacing or lifting, won't cross. An example of a node that
//   should probably have this enabled is a table cell.
//
//   toDOM:: ?(node: Node) → DOMOutputSpec
//   Defines the default way a node of this type should be serialized
//   to DOM/HTML (as used by
//   [`DOMSerializer.fromSchema`](#model.DOMSerializer^fromSchema)).
//   Should return a DOM node or an [array
//   structure](#model.DOMOutputSpec) that describes one, with an
//   optional number zero (“hole”) in it to indicate where the node's
//   content should be inserted.
//
//   For text nodes, the default is to create a text DOM node. Though
//   it is possible to create a serializer where text is rendered
//   differently, this is not supported inside the editor, so you
//   shouldn't override that in your text node spec.
//
//   parseDOM:: ?[ParseRule]
//   Associates DOM parser information with this node, which can be
//   used by [`DOMParser.fromSchema`](#model.DOMParser^fromSchema) to
//   automatically derive a parser. The `node` field in the rules is
//   implied (the name of this node will be filled in automatically).
//   If you supply your own parser, you do not need to also specify
//   parsing rules in your schema.

// MarkSpec:: interface
//
//   attrs:: ?Object<AttributeSpec>
//   The attributes that marks of this type get.
//
//   inclusive:: ?bool
//   Whether this mark should be active when the cursor is positioned
//   at its end (or at its start when that is also the start of the
//   parent node). Defaults to true.
//
//   excludes:: ?string
//   Determines which other marks this mark can coexist with. Should
//   be a space-separated strings naming other marks or groups of marks.
//   When a mark is [added](#model.Mark.addToSet) to a set, all marks
//   that it excludes are removed in the process. If the set contains
//   any mark that excludes the new mark but is not, itself, excluded
//   by the new mark, the mark can not be added an the set. You can
//   use the value `"_"` to indicate that the mark excludes all
//   marks in the schema.
//
//   Defaults to only being exclusive with marks of the same type. You
//   can set it to an empty string (or any string not containing the
//   mark's own name) to allow multiple marks of a given type to
//   coexist (as long as they have different attributes).
//
//   group:: ?string
//   The group or space-separated groups to which this mark belongs.
//
//   toDOM:: ?(mark: Mark, inline: bool) → DOMOutputSpec
//   Defines the default way marks of this type should be serialized
//   to DOM/HTML. When the resulting spec contains a hole, that is
//   where the marked content is placed. Otherwise, it is appended to
//   the top node.
//
//   parseDOM:: ?[ParseRule]
//   Associates DOM parser information with this mark (see the
//   corresponding [node spec field](#model.NodeSpec.parseDOM)). The
//   `mark` field in the rules is implied.

// AttributeSpec:: interface
//
// Used to [define](#model.NodeSpec.attrs) attributes on nodes or
// marks.
//
//   default:: ?any
//   The default value for this attribute, to use when no explicit
//   value is provided. Attributes that have no default must be
//   provided whenever a node or mark of a type that has them is
//   created.

// ::- A document schema. Holds [node](#model.NodeType) and [mark
// type](#model.MarkType) objects for the nodes and marks that may
// occur in conforming documents, and provides functionality for
// creating and deserializing such documents.
var Schema = function Schema(spec) {
  var this$1 = this;

  // :: SchemaSpec
  // The [spec](#model.SchemaSpec) on which the schema is based,
  // with the added guarantee that its `nodes` and `marks`
  // properties are
  // [`OrderedMap`](https://github.com/marijnh/orderedmap) instances
  // (not raw objects).
  this.spec = {};
  for (var prop in spec) { this$1.spec[prop] = spec[prop]; }
  this.spec.nodes = OrderedMap.from(spec.nodes);
  this.spec.marks = OrderedMap.from(spec.marks);

  // :: Object<NodeType>
  // An object mapping the schema's node names to node type objects.
  this.nodes = NodeType.compile(this.spec.nodes, this);

  // :: Object<MarkType>
  // A map from mark names to mark type objects.
  this.marks = MarkType.compile(this.spec.marks, this);

  for (var prop$1 in this$1.nodes) {
    if (prop$1 in this$1.marks)
      { throw new RangeError(prop$1 + " can not be both a node and a mark") }
    var type = this$1.nodes[prop$1], contentExpr = type.spec.content || "", markExpr = type.spec.marks;
    type.contentMatch = ContentMatch.parse(contentExpr, this$1.nodes);
    type.inlineContent = type.contentMatch.inlineContent;
    type.markSet = markExpr == "_" ? null :
      markExpr ? gatherMarks(this$1, markExpr.split(" ")) :
      markExpr == "" || !type.inlineContent ? [] : null;
  }
  for (var prop$2 in this$1.marks) {
    var type$1 = this$1.marks[prop$2], excl = type$1.spec.excludes;
    type$1.excluded = excl == null ? [type$1] : excl == "" ? [] : gatherMarks(this$1, excl.split(" "));
  }

  this.nodeFromJSON = this.nodeFromJSON.bind(this);
  this.markFromJSON = this.markFromJSON.bind(this);

  // :: NodeType
  // The type of the [default top node](#model.SchemaSpec.topNode)
  // for this schema.
  this.topNodeType = this.nodes[this.spec.topNode || "doc"];

  // :: Object
  // An object for storing whatever values modules may want to
  // compute and cache per schema. (If you want to store something
  // in it, try to use property names unlikely to clash.)
  this.cached = Object.create(null);
  this.cached.wrappings = Object.create(null);
};

// :: (union<string, NodeType>, ?Object, ?union<Fragment, Node, [Node]>, ?[Mark]) → Node
// Create a node in this schema. The `type` may be a string or a
// `NodeType` instance. Attributes will be extended
// with defaults, `content` may be a `Fragment`,
// `null`, a `Node`, or an array of nodes.
Schema.prototype.node = function node (type, attrs, content, marks) {
  if (typeof type == "string")
    { type = this.nodeType(type); }
  else if (!(type instanceof NodeType))
    { throw new RangeError("Invalid node type: " + type) }
  else if (type.schema != this)
    { throw new RangeError("Node type from different schema used (" + type.name + ")") }

  return type.createChecked(attrs, content, marks)
};

// :: (string, ?[Mark]) → Node
// Create a text node in the schema. Empty text nodes are not
// allowed.
Schema.prototype.text = function text (text$1, marks) {
  var type = this.nodes.text;
  return new TextNode(type, type.defaultAttrs, text$1, Mark.setFrom(marks))
};

// :: (union<string, MarkType>, ?Object) → Mark
// Create a mark with the given type and attributes.
Schema.prototype.mark = function mark (type, attrs) {
  if (typeof type == "string") { type = this.marks[type]; }
  return type.create(attrs)
};

// :: (Object) → Node
// Deserialize a node from its JSON representation. This method is
// bound.
Schema.prototype.nodeFromJSON = function nodeFromJSON (json) {
  return Node.fromJSON(this, json)
};

// :: (Object) → Mark
// Deserialize a mark from its JSON representation. This method is
// bound.
Schema.prototype.markFromJSON = function markFromJSON (json) {
  return Mark.fromJSON(this, json)
};

Schema.prototype.nodeType = function nodeType (name) {
  var found = this.nodes[name];
  if (!found) { throw new RangeError("Unknown node type: " + name) }
  return found
};

function gatherMarks(schema, marks) {
  var found = [];
  for (var i = 0; i < marks.length; i++) {
    var name = marks[i], mark = schema.marks[name], ok = mark;
    if (mark) {
      found.push(mark);
    } else {
      for (var prop in schema.marks) {
        var mark$1 = schema.marks[prop];
        if (name == "_" || (mark$1.spec.group && mark$1.spec.group.split(" ").indexOf(name) > -1))
          { found.push(ok = mark$1); }
      }
    }
    if (!ok) { throw new SyntaxError("Unknown mark type: '" + marks[i] + "'") }
  }
  return found
}

// ParseOptions:: interface
// These are the options recognized by the
// [`parse`](#model.DOMParser.parse) and
// [`parseSlice`](#model.DOMParser.parseSlice) methods.
//
//   preserveWhitespace:: ?union<bool, "full">
//   By default, whitespace is collapsed as per HTML's rules. Pass
//   `true` to preserve whitespace, but normalize newlines to
//   spaces, and `"full"` to preserve whitespace entirely.
//
//   findPositions:: ?[{node: dom.Node, offset: number}]
//   When given, the parser will, beside parsing the content,
//   record the document positions of the given DOM positions. It
//   will do so by writing to the objects, adding a `pos` property
//   that holds the document position. DOM positions that are not
//   in the parsed content will not be written to.
//
//   from:: ?number
//   The child node index to start parsing from.
//
//   to:: ?number
//   The child node index to stop parsing at.
//
//   topNode:: ?Node
//   By default, the content is parsed into the schema's default
//   [top node type](#model.Schema.topNodeType). You can pass this
//   option to use the type and attributes from a different node
//   as the top container.
//
//   topMatch:: ?ContentMatch
//   Provide the starting content match that content parsed into the
//   top node is matched against.
//
//   context:: ?ResolvedPos
//   A set of additional nodes to count as
//   [context](#model.ParseRule.context) when parsing, above the
//   given [top node](#model.ParseOptions.topNode).

// ParseRule:: interface
// A value that describes how to parse a given DOM node or inline
// style as a ProseMirror node or mark.
//
//   tag:: ?string
//   A CSS selector describing the kind of DOM elements to match. A
//   single rule should have _either_ a `tag` or a `style` property.
//
//   namespace:: ?string
//   The namespace to match. This should be used with `tag`.
//   Nodes are only matched when the namespace matches or this property
//   is null.
//
//   style:: ?string
//   A CSS property name to match. When given, this rule matches
//   inline styles that list that property. May also have the form
//   `"property=value"`, in which case the rule only matches if the
//   propery's value exactly matches the given value. (For more
//   complicated filters, use [`getAttrs`](#model.ParseRule.getAttrs)
//   and return undefined to indicate that the match failed.)
//
//   priority:: ?number
//   Can be used to change the order in which the parse rules in a
//   schema are tried. Those with higher priority come first. Rules
//   without a priority are counted as having priority 50. This
//   property is only meaningful in a schema—when directly
//   constructing a parser, the order of the rule array is used.
//
//   context:: ?string
//   When given, restricts this rule to only match when the current
//   context—the parent nodes into which the content is being
//   parsed—matches this expression. Should contain one or more node
//   names or node group names followed by single or double slashes.
//   For example `"paragraph/"` means the rule only matches when the
//   parent node is a paragraph, `"blockquote/paragraph/"` restricts
//   it to be in a paragraph that is inside a blockquote, and
//   `"section//"` matches any position inside a section—a double
//   slash matches any sequence of ancestor nodes. To allow multiple
//   different contexts, they can be separated by a pipe (`|`)
//   character, as in `"blockquote/|list_item/"`.
//
//   node:: ?string
//   The name of the node type to create when this rule matches. Only
//   valid for rules with a `tag` property, not for style rules. Each
//   rule should have one of a `node`, `mark`, or `ignore` property
//   (except when it appears in a [node](#model.NodeSpec.parseDOM) or
//   [mark spec](#model.MarkSpec.parseDOM), in which case the `node`
//   or `mark` property will be derived from its position).
//
//   mark:: ?string
//   The name of the mark type to wrap the matched content in.
//
//   ignore:: ?bool
//   When true, ignore content that matches this rule.
//
//   skip:: ?bool
//   When true, ignore the node that matches this rule, but do parse
//   its content.
//
//   attrs:: ?Object
//   Attributes for the node or mark created by this rule. When
//   `getAttrs` is provided, it takes precedence.
//
//   getAttrs:: ?(union<dom.Node, string>) → ?union<Object, false>
//   A function used to compute the attributes for the node or mark
//   created by this rule. Can also be used to describe further
//   conditions the DOM element or style must match. When it returns
//   `false`, the rule won't match. When it returns null or undefined,
//   that is interpreted as an empty/default set of attributes.
//
//   Called with a DOM Element for `tag` rules, and with a string (the
//   style's value) for `style` rules.
//
//   contentElement:: ?union<string, (dom.Node) → dom.Node>
//   For `tag` rules that produce non-leaf nodes or marks, by default
//   the content of the DOM element is parsed as content of the mark
//   or node. If the child nodes are in a descendent node, this may be
//   a CSS selector string that the parser must use to find the actual
//   content element, or a function that returns the actual content
//   element to the parser.
//
//   getContent:: ?(dom.Node) → Fragment
//   Can be used to override the content of a matched node. When
//   present, instead of parsing the node's child nodes, the result of
//   this function is used.
//
//   preserveWhitespace:: ?union<bool, "full">
//   Controls whether whitespace should be preserved when parsing the
//   content inside the matched element. `false` means whitespace may
//   be collapsed, `true` means that whitespace should be preserved
//   but newlines normalized to spaces, and `"full"` means that
//   newlines should also be preserved.

// ::- A DOM parser represents a strategy for parsing DOM content into
// a ProseMirror document conforming to a given schema. Its behavior
// is defined by an array of [rules](#model.ParseRule).
var DOMParser = function DOMParser(schema, rules) {
  var this$1 = this;

  // :: Schema
  // The schema into which the parser parses.
  this.schema = schema;
  // :: [ParseRule]
  // The set of [parse rules](#model.ParseRule) that the parser
  // uses, in order of precedence.
  this.rules = rules;
  this.tags = [];
  this.styles = [];

  rules.forEach(function (rule) {
    if (rule.tag) { this$1.tags.push(rule); }
    else if (rule.style) { this$1.styles.push(rule); }
  });
};

// :: (dom.Node, ?ParseOptions) → Node
// Parse a document from the content of a DOM node.
DOMParser.prototype.parse = function parse (dom, options) {
    if ( options === void 0 ) options = {};

  var context = new ParseContext(this, options, false);
  context.addAll(dom, null, options.from, options.to);
  return context.finish()
};

// :: (dom.Node, ?ParseOptions) → Slice
// Parses the content of the given DOM node, like
// [`parse`](#model.DOMParser.parse), and takes the same set of
// options. But unlike that method, which produces a whole node,
// this one returns a slice that is open at the sides, meaning that
// the schema constraints aren't applied to the start of nodes to
// the left of the input and the end of nodes at the end.
DOMParser.prototype.parseSlice = function parseSlice (dom, options) {
    if ( options === void 0 ) options = {};

  var context = new ParseContext(this, options, true);
  context.addAll(dom, null, options.from, options.to);
  return Slice.maxOpen(context.finish())
};

DOMParser.prototype.matchTag = function matchTag (dom, context) {
    var this$1 = this;

  for (var i = 0; i < this.tags.length; i++) {
    var rule = this$1.tags[i];
    if (matches(dom, rule.tag) &&
        (rule.namespace === undefined || dom.namespaceURI == rule.namespace) &&
        (!rule.context || context.matchesContext(rule.context))) {
      if (rule.getAttrs) {
        var result = rule.getAttrs(dom);
        if (result === false) { continue }
        rule.attrs = result;
      }
      return rule
    }
  }
};

DOMParser.prototype.matchStyle = function matchStyle (prop, value, context) {
    var this$1 = this;

  for (var i = 0; i < this.styles.length; i++) {
    var rule = this$1.styles[i];
    if (rule.style.indexOf(prop) != 0 ||
        rule.context && !context.matchesContext(rule.context) ||
        // Test that the style string either precisely matches the prop,
        // or has an '=' sign after the prop, followed by the given
        // value.
        rule.style.length > prop.length &&
        (rule.style.charCodeAt(prop.length) != 61 || rule.style.slice(prop.length + 1) != value))
      { continue }
    if (rule.getAttrs) {
      var result = rule.getAttrs(value);
      if (result === false) { continue }
      rule.attrs = result;
    }
    return rule
  }
};

// : (Schema) → [ParseRule]
DOMParser.schemaRules = function schemaRules (schema) {
  var result = [];
  function insert(rule) {
    var priority = rule.priority == null ? 50 : rule.priority, i = 0;
    for (; i < result.length; i++) {
      var next = result[i], nextPriority = next.priority == null ? 50 : next.priority;
      if (nextPriority < priority) { break }
    }
    result.splice(i, 0, rule);
  }

  var loop = function ( name ) {
    var rules = schema.marks[name].spec.parseDOM;
    if (rules) { rules.forEach(function (rule) {
      insert(rule = copy(rule));
      rule.mark = name;
    }); }
  };

    for (var name in schema.marks) loop( name );
  var loop$1 = function ( name ) {
    var rules$1 = schema.nodes[name$1].spec.parseDOM;
    if (rules$1) { rules$1.forEach(function (rule) {
      insert(rule = copy(rule));
      rule.node = name$1;
    }); }
  };

    for (var name$1 in schema.nodes) loop$1( name );
  return result
};

// :: (Schema) → DOMParser
// Construct a DOM parser using the parsing rules listed in a
// schema's [node specs](#model.NodeSpec.parseDOM), reordered by
// [priority](#model.ParseRule.priority).
DOMParser.fromSchema = function fromSchema (schema) {
  return schema.cached.domParser ||
    (schema.cached.domParser = new DOMParser(schema, DOMParser.schemaRules(schema)))
};

// : Object<bool> The block-level tags in HTML5
var blockTags = {
  address: true, article: true, aside: true, blockquote: true, canvas: true,
  dd: true, div: true, dl: true, fieldset: true, figcaption: true, figure: true,
  footer: true, form: true, h1: true, h2: true, h3: true, h4: true, h5: true,
  h6: true, header: true, hgroup: true, hr: true, li: true, noscript: true, ol: true,
  output: true, p: true, pre: true, section: true, table: true, tfoot: true, ul: true
};

// : Object<bool> The tags that we normally ignore.
var ignoreTags = {
  head: true, noscript: true, object: true, script: true, style: true, title: true
};

// : Object<bool> List tags.
var listTags = {ol: true, ul: true};

// Using a bitfield for node context options
var OPT_PRESERVE_WS = 1;
var OPT_PRESERVE_WS_FULL = 2;
var OPT_OPEN_LEFT = 4;

function wsOptionsFor(preserveWhitespace) {
  return (preserveWhitespace ? OPT_PRESERVE_WS : 0) | (preserveWhitespace === "full" ? OPT_PRESERVE_WS_FULL : 0)
}

var NodeContext = function NodeContext(type, attrs, solid, match, options) {
  this.type = type;
  this.attrs = attrs;
  this.solid = solid;
  this.match = match || (options & OPT_OPEN_LEFT ? null : type.contentMatch);
  this.options = options;
  this.content = [];
};

NodeContext.prototype.findWrapping = function findWrapping (node) {
  if (!this.match) {
    if (!this.type) { return [] }
    var fill = this.type.contentMatch.fillBefore(Fragment.from(node));
    if (fill) {
      this.match = this.type.contentMatch.matchFragment(fill);
    } else {
      var start = this.type.contentMatch, wrap;
      if (wrap = start.findWrapping(node.type)) {
        this.match = start;
        return wrap
      } else {
        return null
      }
    }
  }
  return this.match.findWrapping(node.type)
};

NodeContext.prototype.finish = function finish (openEnd) {
  if (!(this.options & OPT_PRESERVE_WS)) { // Strip trailing whitespace
    var last = this.content[this.content.length - 1], m;
    if (last && last.isText && (m = /\s+$/.exec(last.text))) {
      if (last.text.length == m[0].length) { this.content.pop(); }
      else { this.content[this.content.length - 1] = last.withText(last.text.slice(0, last.text.length - m[0].length)); }
    }
  }
  var content = Fragment.from(this.content);
  if (!openEnd && this.match)
    { content = content.append(this.match.fillBefore(Fragment.empty, true)); }
  return this.type ? this.type.create(this.attrs, content) : content
};

var ParseContext = function ParseContext(parser, options, open) {
  // : DOMParser The parser we are using.
  this.parser = parser;
  // : Object The options passed to this parse.
  this.options = options;
  this.isOpen = open;
  var topNode = options.topNode, topContext;
  var topOptions = wsOptionsFor(options.preserveWhitespace) | (open ? OPT_OPEN_LEFT : 0);
  if (topNode)
    { topContext = new NodeContext(topNode.type, topNode.attrs, true,
                                 options.topMatch || topNode.type.contentMatch, topOptions); }
  else if (open)
    { topContext = new NodeContext(null, null, true, null, topOptions); }
  else
    { topContext = new NodeContext(parser.schema.topNodeType, null, true, null, topOptions); }
  this.nodes = [topContext];
  // : [Mark] The current set of marks
  this.marks = Mark.none;
  this.open = 0;
  this.find = options.findPositions;
  this.needsBlock = false;
};

var prototypeAccessors$6 = { top: {},currentPos: {} };

prototypeAccessors$6.top.get = function () {
  return this.nodes[this.open]
};

// : (Mark) → [Mark]
// Add a mark to the current set of marks, return the old set.
ParseContext.prototype.addMark = function addMark (mark) {
  var old = this.marks;
  this.marks = mark.addToSet(this.marks);
  return old
};

// : (dom.Node)
// Add a DOM node to the content. Text is inserted as text node,
// otherwise, the node is passed to `addElement` or, if it has a
// `style` attribute, `addElementWithStyles`.
ParseContext.prototype.addDOM = function addDOM (dom) {
  if (dom.nodeType == 3) {
    this.addTextNode(dom);
  } else if (dom.nodeType == 1) {
    var style = dom.getAttribute("style");
    if (style) { this.addElementWithStyles(parseStyles(style), dom); }
    else { this.addElement(dom); }
  }
};

ParseContext.prototype.addTextNode = function addTextNode (dom) {
  var value = dom.nodeValue;
  var top = this.top;
  if ((top.type ? top.type.inlineContent : top.content.length && top.content[0].isInline) || /\S/.test(value)) {
    if (!(top.options & OPT_PRESERVE_WS)) {
      value = value.replace(/\s+/g, " ");
      // If this starts with whitespace, and there is either no node
      // before it or a node that ends with whitespace, strip the
      // leading space.
      if (/^\s/.test(value) && this.open == this.nodes.length - 1) {
        var nodeBefore = top.content[top.content.length - 1];
        if (!nodeBefore || nodeBefore.isText && /\s$/.test(nodeBefore.text))
          { value = value.slice(1); }
      }
    } else if (!(top.options & OPT_PRESERVE_WS_FULL)) {
      value = value.replace(/\r?\n|\r/g, " ");
    }
    if (value) { this.insertNode(this.parser.schema.text(value, this.marks)); }
    this.findInText(dom);
  } else {
    this.findInside(dom);
  }
};

// : (dom.Element)
// Try to find a handler for the given tag and use that to parse. If
// none is found, the element's content nodes are added directly.
ParseContext.prototype.addElement = function addElement (dom) {
  var name = dom.nodeName.toLowerCase();
  if (listTags.hasOwnProperty(name)) { normalizeList(dom); }
  var rule = (this.options.ruleFromNode && this.options.ruleFromNode(dom)) || this.parser.matchTag(dom, this);
  if (rule ? rule.ignore : ignoreTags.hasOwnProperty(name)) {
    this.findInside(dom);
  } else if (!rule || rule.skip) {
    if (rule && rule.skip.nodeType) { dom = rule.skip; }
    var sync, oldNeedsBlock = this.needsBlock;
    if (blockTags.hasOwnProperty(name)) {
      sync = this.top;
      if (!sync.type) { this.needsBlock = true; }
    }
    this.addAll(dom);
    if (sync) { this.sync(sync); }
    this.needsBlock = oldNeedsBlock;
  } else {
    this.addElementByRule(dom, rule);
  }
};

// Run any style parser associated with the node's styles. After
// that, if no style parser suppressed the node's content, pass it
// through to `addElement`.
ParseContext.prototype.addElementWithStyles = function addElementWithStyles (styles, dom) {
    var this$1 = this;

  var oldMarks = this.marks, ignore = false;
  for (var i = 0; i < styles.length; i += 2) {
    var rule = this$1.parser.matchStyle(styles[i], styles[i + 1], this$1);
    if (!rule) { continue }
    if (rule.ignore) { ignore = true; break }
    this$1.addMark(this$1.parser.schema.marks[rule.mark].create(rule.attrs));
  }
  if (!ignore) { this.addElement(dom); }
  this.marks = oldMarks;
};

// : (dom.Element, ParseRule) → bool
// Look up a handler for the given node. If none are found, return
// false. Otherwise, apply it, use its return value to drive the way
// the node's content is wrapped, and return true.
ParseContext.prototype.addElementByRule = function addElementByRule (dom, rule) {
    var this$1 = this;

  var sync, before, nodeType, markType, mark;
  if (rule.node) {
    nodeType = this.parser.schema.nodes[rule.node];
    if (nodeType.isLeaf) { this.insertNode(nodeType.create(rule.attrs, null, this.marks)); }
    else { sync = this.enter(nodeType, rule.attrs, rule.preserveWhitespace) && this.top; }
  } else {
    markType = this.parser.schema.marks[rule.mark];
    before = this.addMark(mark = markType.create(rule.attrs));
  }

  if (nodeType && nodeType.isLeaf) {
    this.findInside(dom);
  } else if (rule.getContent) {
    this.findInside(dom);
    rule.getContent(dom).forEach(function (node) { return this$1.insertNode(mark ? node.mark(mark.addToSet(node.marks)) : node); });
  } else {
    var contentDOM = rule.contentElement;
    if (typeof contentDOM == "string") { contentDOM = dom.querySelector(contentDOM); }
    else if (typeof contentDOM == "function") { contentDOM = contentDOM(dom); }
    if (!contentDOM) { contentDOM = dom; }
    this.findAround(dom, contentDOM, true);
    this.addAll(contentDOM, sync);
  }
  if (sync) { this.sync(sync); this.open--; }
  else if (before) { this.marks = before; }
  return true
};

// : (dom.Node, ?NodeBuilder, ?number, ?number)
// Add all child nodes between `startIndex` and `endIndex` (or the
// whole node, if not given). If `sync` is passed, use it to
// synchronize after every block element.
ParseContext.prototype.addAll = function addAll (parent, sync, startIndex, endIndex) {
    var this$1 = this;

  var index = startIndex || 0;
  for (var dom = startIndex ? parent.childNodes[startIndex] : parent.firstChild,
           end = endIndex == null ? null : parent.childNodes[endIndex];
       dom != end; dom = dom.nextSibling, ++index) {
    this$1.findAtPoint(parent, index);
    this$1.addDOM(dom);
    if (sync && blockTags.hasOwnProperty(dom.nodeName.toLowerCase()))
      { this$1.sync(sync); }
  }
  this.findAtPoint(parent, index);
};

// Try to find a way to fit the given node type into the current
// context. May add intermediate wrappers and/or leave non-solid
// nodes that we're in.
ParseContext.prototype.findPlace = function findPlace (node) {
    var this$1 = this;

  var route, sync;
  for (var depth = this.open; depth >= 0; depth--) {
    var cx = this$1.nodes[depth];
    var found = cx.findWrapping(node);
    if (found && (!route || route.length > found.length)) {
      route = found;
      sync = cx;
      if (!found.length) { break }
    }
    if (cx.solid) { break }
  }
  if (!route) { return false }
  this.sync(sync);
  for (var i = 0; i < route.length; i++)
    { this$1.enterInner(route[i], null, false); }
  return true
};

// : (Node) → ?Node
// Try to insert the given node, adjusting the context when needed.
ParseContext.prototype.insertNode = function insertNode (node) {
  if (node.isInline && this.needsBlock && !this.top.type) {
    var block = this.textblockFromContext();
    if (block) { this.enter(block); }
  }
  if (this.findPlace(node)) {
    this.closeExtra();
    var top = this.top;
    if (top.match) {
      top.match = top.match.matchType(node.type);
      if (top.type) { node = node.mark(top.type.allowedMarks(node.marks)); }
    }
    top.content.push(node);
  }
};

// : (NodeType, ?Object) → bool
// Try to start a node of the given type, adjusting the context when
// necessary.
ParseContext.prototype.enter = function enter (type, attrs, preserveWS) {
  var ok = this.findPlace(type.create(attrs));
  if (ok) { this.enterInner(type, attrs, true, preserveWS); }
  return ok
};

// Open a node of the given type
ParseContext.prototype.enterInner = function enterInner (type, attrs, solid, preserveWS) {
  this.closeExtra();
  var top = this.top;
  top.match = top.match && top.match.matchType(type, attrs);
  var options = preserveWS == null ? top.options & ~OPT_OPEN_LEFT : wsOptionsFor(preserveWS);
  if ((top.options & OPT_OPEN_LEFT) && top.content.length == 0) { options |= OPT_OPEN_LEFT; }
  this.nodes.push(new NodeContext(type, attrs, solid, null, options));
  this.open++;
};

// Make sure all nodes above this.open are finished and added to
// their parents
ParseContext.prototype.closeExtra = function closeExtra (openEnd) {
    var this$1 = this;

  var i = this.nodes.length - 1;
  if (i > this.open) {
    this.marks = Mark.none;
    for (; i > this.open; i--) { this$1.nodes[i - 1].content.push(this$1.nodes[i].finish(openEnd)); }
    this.nodes.length = this.open + 1;
  }
};

ParseContext.prototype.finish = function finish () {
  this.open = 0;
  this.closeExtra(this.isOpen);
  return this.nodes[0].finish(this.isOpen || this.options.topOpen)
};

ParseContext.prototype.sync = function sync (to) {
    var this$1 = this;

  for (var i = this.open; i >= 0; i--) { if (this$1.nodes[i] == to) {
    this$1.open = i;
    return
  } }
};

prototypeAccessors$6.currentPos.get = function () {
    var this$1 = this;

  this.closeExtra();
  var pos = 0;
  for (var i = this.open; i >= 0; i--) {
    var content = this$1.nodes[i].content;
    for (var j = content.length - 1; j >= 0; j--)
      { pos += content[j].nodeSize; }
    if (i) { pos++; }
  }
  return pos
};

ParseContext.prototype.findAtPoint = function findAtPoint (parent, offset) {
    var this$1 = this;

  if (this.find) { for (var i = 0; i < this.find.length; i++) {
    if (this$1.find[i].node == parent && this$1.find[i].offset == offset)
      { this$1.find[i].pos = this$1.currentPos; }
  } }
};

ParseContext.prototype.findInside = function findInside (parent) {
    var this$1 = this;

  if (this.find) { for (var i = 0; i < this.find.length; i++) {
    if (this$1.find[i].pos == null && parent.nodeType == 1 && parent.contains(this$1.find[i].node))
      { this$1.find[i].pos = this$1.currentPos; }
  } }
};

ParseContext.prototype.findAround = function findAround (parent, content, before) {
    var this$1 = this;

  if (parent != content && this.find) { for (var i = 0; i < this.find.length; i++) {
    if (this$1.find[i].pos == null && parent.nodeType == 1 && parent.contains(this$1.find[i].node)) {
      var pos = content.compareDocumentPosition(this$1.find[i].node);
      if (pos & (before ? 2 : 4))
        { this$1.find[i].pos = this$1.currentPos; }
    }
  } }
};

ParseContext.prototype.findInText = function findInText (textNode) {
    var this$1 = this;

  if (this.find) { for (var i = 0; i < this.find.length; i++) {
    if (this$1.find[i].node == textNode)
      { this$1.find[i].pos = this$1.currentPos - (textNode.nodeValue.length - this$1.find[i].offset); }
  } }
};

// : (string) → bool
// Determines whether the given [context
// string](#ParseRule.context) matches this context.
ParseContext.prototype.matchesContext = function matchesContext (context) {
    var this$1 = this;

  if (context.indexOf("|") > -1)
    { return context.split(/\s*\|\s*/).some(this.matchesContext, this) }

  var parts = context.split("/");
  var option = this.options.context;
  var useRoot = !this.isOpen && (!option || option.parent.type == this.nodes[0].type);
  var minDepth = -(option ? option.depth + 1 : 0) + (useRoot ? 0 : 1);
  var match = function (i, depth) {
    for (; i >= 0; i--) {
      var part = parts[i];
      if (part == "") {
        if (i == parts.length - 1 || i == 0) { continue }
        for (; depth >= minDepth; depth--)
          { if (match(i - 1, depth)) { return true } }
        return false
      } else {
        var next = depth > 0 || (depth == 0 && useRoot) ? this$1.nodes[depth].type
            : option && depth >= minDepth ? option.node(depth - minDepth).type
            : null;
        if (!next || (next.name != part && next.groups.indexOf(part) == -1))
          { return false }
        depth--;
      }
    }
    return true
  };
  return match(parts.length - 1, this.open)
};

ParseContext.prototype.textblockFromContext = function textblockFromContext () {
    var this$1 = this;

  var $context = this.options.context;
  if ($context) { for (var d = $context.depth; d >= 0; d--) {
    var deflt = $context.node(d).defaultContentType($context.indexAfter(d));
    if (deflt && deflt.isTextblock && deflt.defaultAttrs) { return deflt }
  } }
  for (var name in this$1.parser.schema.nodes) {
    var type = this$1.parser.schema.nodes[name];
    if (type.isTextblock && type.defaultAttrs) { return type }
  }
};

Object.defineProperties( ParseContext.prototype, prototypeAccessors$6 );

// Kludge to work around directly nested list nodes produced by some
// tools and allowed by browsers to mean that the nested list is
// actually part of the list item above it.
function normalizeList(dom) {
  for (var child = dom.firstChild, prevItem = null; child; child = child.nextSibling) {
    var name = child.nodeType == 1 ? child.nodeName.toLowerCase() : null;
    if (name && listTags.hasOwnProperty(name) && prevItem) {
      prevItem.appendChild(child);
      child = prevItem;
    } else if (name == "li") {
      prevItem = child;
    } else if (name) {
      prevItem = null;
    }
  }
}

// Apply a CSS selector.
function matches(dom, selector) {
  return (dom.matches || dom.msMatchesSelector || dom.webkitMatchesSelector || dom.mozMatchesSelector).call(dom, selector)
}

// : (string) → [string]
// Tokenize a style attribute into property/value pairs.
function parseStyles(style) {
  var re = /\s*([\w-]+)\s*:\s*([^;]+)/g, m, result = [];
  while (m = re.exec(style)) { result.push(m[1], m[2].trim()); }
  return result
}

function copy(obj) {
  var copy = {};
  for (var prop in obj) { copy[prop] = obj[prop]; }
  return copy
}

// DOMOutputSpec:: interface
// A description of a DOM structure. Can be either a string, which is
// interpreted as a text node, a DOM node, which is interpreted as
// itself, or an array.
//
// An array describes a DOM element. The first value in the array
// should be a string—the name of the DOM element. If the second
// element is plain object, it is interpreted as a set of attributes
// for the element. Any elements after that (including the 2nd if it's
// not an attribute object) are interpreted as children of the DOM
// elements, and must either be valid `DOMOutputSpec` values, or the
// number zero.
//
// The number zero (pronounced “hole”) is used to indicate the place
// where a node's child nodes should be inserted. It it occurs in an
// output spec, it should be the only child element in its parent
// node.

// ::- A DOM serializer knows how to convert ProseMirror nodes and
// marks of various types to DOM nodes.
var DOMSerializer = function DOMSerializer(nodes, marks) {
  // :: Object<(node: Node) → DOMOutputSpec>
  // The node serialization functions.
  this.nodes = nodes || {};
  // :: Object<?(mark: Mark, inline: bool) → DOMOutputSpec>
  // The mark serialization functions.
  this.marks = marks || {};
};

// :: (Fragment, ?Object) → dom.DocumentFragment
// Serialize the content of this fragment to a DOM fragment. When
// not in the browser, the `document` option, containing a DOM
// document, should be passed so that the serializer can create
// nodes.
DOMSerializer.prototype.serializeFragment = function serializeFragment (fragment, options, target) {
    var this$1 = this;
    if ( options === void 0 ) options = {};

  if (!target) { target = doc(options).createDocumentFragment(); }

  var top = target, active = null;
  fragment.forEach(function (node) {
    if (active || node.marks.length) {
      if (!active) { active = []; }
      var keep = 0, rendered = 0;
      while (keep < active.length && rendered < node.marks.length) {
        var next = node.marks[rendered];
        if (!this$1.marks[next.type.name]) { rendered++; continue }
        if (!next.eq(active[keep])) { break }
        keep += 2; rendered++;
      }
      while (keep < active.length) {
        top = active.pop();
        active.pop();
      }
      while (rendered < node.marks.length) {
        var add = node.marks[rendered++];
        var markDOM = this$1.serializeMark(add, node.isInline, options);
        if (markDOM) {
          active.push(add, top);
          top.appendChild(markDOM.dom);
          top = markDOM.contentDOM || markDOM.dom;
        }
      }
    }
    top.appendChild(this$1.serializeNode(node, options));
  });

  return target
};

// :: (Node, ?Object) → dom.Node
// Serialize this node to a DOM node. This can be useful when you
// need to serialize a part of a document, as opposed to the whole
// document. To serialize a whole document, use
// [`serializeFragment`](#model.DOMSerializer.serializeFragment) on
// its [content](#model.Node.content).
DOMSerializer.prototype.serializeNode = function serializeNode (node, options) {
    if ( options === void 0 ) options = {};

  var ref =
      DOMSerializer.renderSpec(doc(options), this.nodes[node.type.name](node));
    var dom = ref.dom;
    var contentDOM = ref.contentDOM;
  if (contentDOM) {
    if (node.isLeaf)
      { throw new RangeError("Content hole not allowed in a leaf node spec") }
    if (options.onContent)
      { options.onContent(node, contentDOM, options); }
    else
      { this.serializeFragment(node.content, options, contentDOM); }
  }
  return dom
};

DOMSerializer.prototype.serializeNodeAndMarks = function serializeNodeAndMarks (node, options) {
    var this$1 = this;
    if ( options === void 0 ) options = {};

  var dom = this.serializeNode(node, options);
  for (var i = node.marks.length - 1; i >= 0; i--) {
    var wrap = this$1.serializeMark(node.marks[i], node.isInline, options);
    if (wrap) {
      (wrap.contentDOM || wrap.dom).appendChild(dom);
      dom = wrap.dom;
    }
  }
  return dom
};

DOMSerializer.prototype.serializeMark = function serializeMark (mark, inline, options) {
    if ( options === void 0 ) options = {};

  var toDOM = this.marks[mark.type.name];
  return toDOM && DOMSerializer.renderSpec(doc(options), toDOM(mark, inline))
};

// :: (dom.Document, DOMOutputSpec) → {dom: dom.Node, contentDOM: ?dom.Node}
// Render an [output spec](#model.DOMOutputSpec) to a DOM node. If
// the spec has a hole (zero) in it, `contentDOM` will point at the
// node with the hole.
DOMSerializer.renderSpec = function renderSpec (doc, structure) {
  if (typeof structure == "string")
    { return {dom: doc.createTextNode(structure)} }
  if (structure.nodeType != null)
    { return {dom: structure} }
  var dom = doc.createElement(structure[0]), contentDOM = null;
  var attrs = structure[1], start = 1;
  if (attrs && typeof attrs == "object" && attrs.nodeType == null && !Array.isArray(attrs)) {
    start = 2;
    for (var name in attrs) {
      if (name == "style") { dom.style.cssText = attrs[name]; }
      else if (attrs[name] != null) { dom.setAttribute(name, attrs[name]); }
    }
  }
  for (var i = start; i < structure.length; i++) {
    var child = structure[i];
    if (child === 0) {
      if (i < structure.length - 1 || i > start)
        { throw new RangeError("Content hole must be the only child of its parent node") }
      return {dom: dom, contentDOM: dom}
    } else {
      var ref = DOMSerializer.renderSpec(doc, child);
        var inner = ref.dom;
        var innerContent = ref.contentDOM;
      dom.appendChild(inner);
      if (innerContent) {
        if (contentDOM) { throw new RangeError("Multiple content holes") }
        contentDOM = innerContent;
      }
    }
  }
  return {dom: dom, contentDOM: contentDOM}
};

// :: (Schema) → DOMSerializer
// Build a serializer using the [`toDOM`](#model.NodeSpec.toDOM)
// properties in a schema's node and mark specs.
DOMSerializer.fromSchema = function fromSchema (schema) {
  return schema.cached.domSerializer ||
    (schema.cached.domSerializer = new DOMSerializer(this.nodesFromSchema(schema), this.marksFromSchema(schema)))
};

// : (Schema) → Object<(node: Node) → DOMOutputSpec>
// Gather the serializers in a schema's node specs into an object.
// This can be useful as a base to build a custom serializer from.
DOMSerializer.nodesFromSchema = function nodesFromSchema (schema) {
  var result = gatherToDOM(schema.nodes);
  if (!result.text) { result.text = function (node) { return node.text; }; }
  return result
};

// : (Schema) → Object<(mark: Mark) → DOMOutputSpec>
// Gather the serializers in a schema's mark specs into an object.
DOMSerializer.marksFromSchema = function marksFromSchema (schema) {
  return gatherToDOM(schema.marks)
};

function gatherToDOM(obj) {
  var result = {};
  for (var name in obj) {
    var toDOM = obj[name].spec.toDOM;
    if (toDOM) { result[name] = toDOM; }
  }
  return result
}

function doc(options) {
  // declare global: window
  return options.document || window.document
}

exports.Node = Node;
exports.ResolvedPos = ResolvedPos;
exports.NodeRange = NodeRange;
exports.Fragment = Fragment;
exports.Slice = Slice;
exports.ReplaceError = ReplaceError;
exports.Mark = Mark;
exports.Schema = Schema;
exports.NodeType = NodeType;
exports.MarkType = MarkType;
exports.ContentMatch = ContentMatch;
exports.DOMParser = DOMParser;
exports.DOMSerializer = DOMSerializer;
//# sourceMappingURL=index.js.map
});

unwrapExports(dist);
var dist_1 = dist.Node;
var dist_2 = dist.ResolvedPos;
var dist_3 = dist.NodeRange;
var dist_4 = dist.Fragment;
var dist_5 = dist.Slice;
var dist_6 = dist.ReplaceError;
var dist_7 = dist.Mark;
var dist_8 = dist.Schema;
var dist_9 = dist.NodeType;
var dist_10 = dist.MarkType;
var dist_11 = dist.ContentMatch;
var dist_12 = dist.DOMParser;
var dist_13 = dist.DOMSerializer;

const MarkTypes = {
    legal: "legal",
    warn: "warn"
};
const createValidationMark = (markName) => ({
    attrs: {},
    inclusive: false,
    parseDOM: [
        {
            tag: `span.${markName}`,
            getAttrs: () => ({})
        }
    ],
    toDOM: (mark, inline) => [`span.${markName}`]
});
const validationMarks = Object.keys(MarkTypes).reduce((acc, markName) => {
    return Object.assign({}, acc, { [markName]: createValidationMark(markName) });
}, {});



//# sourceMappingURL=prosemirror.js.map

const withoutIndex = (arr, index) => arr.slice(0, index).concat(arr.slice(index + 1));
const permutations = seq => seq.reduce((acc, el, index, arr) => {
    if (!arr.length)
        return [[]];
    if (arr.length === 1)
        return [arr];
    return [
        ...acc,
        ...permutations(withoutIndex(arr, index)).map(perms => [el, ...perms], [])
    ];
}, []);
const validationLibrary = chunk_1(permutations(Array.from("qwer")).map(perm => {
    const str = perm.join("");
    return {
        regExp: new RegExp(str, "g"),
        annotation: `You used the word ${str}`,
        operation: Operations.ANNOTATE,
        type: MarkTypes.legal
    };
}), 500);
//# sourceMappingURL=library.js.map

const worker = new ValidationWorker(validationLibrary);
//# sourceMappingURL=worker.js.map

}());
