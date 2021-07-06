'use strict';

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function getAugmentedNamespace(n) {
	if (n.__esModule) return n;
	var a = Object.defineProperty({}, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

var _global = {exports: {}};

var global$k = _global.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self // eslint-disable-next-line no-new-func
: Function('return this')();
if (typeof __g == 'number') __g = global$k; // eslint-disable-line no-undef

var _core = {exports: {}};

var core$5 = _core.exports = {
  version: '2.6.12'
};
if (typeof __e == 'number') __e = core$5; // eslint-disable-line no-undef

var _objectDp = {};

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

var _isObject = function _isObject(it) {
  return _typeof(it) === 'object' ? it !== null : typeof it === 'function';
};

var isObject$t = _isObject;

var _anObject = function _anObject(it) {
  if (!isObject$t(it)) throw TypeError(it + ' is not an object!');
  return it;
};

var _fails = function _fails(exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

var _descriptors = !_fails(function () {
  return Object.defineProperty({}, 'a', {
    get: function get() {
      return 7;
    }
  }).a != 7;
});

var isObject$s = _isObject;
var document$2 = _global.exports.document; // typeof document.createElement is 'object' in old IE

var is$1 = isObject$s(document$2) && isObject$s(document$2.createElement);

var _domCreate = function _domCreate(it) {
  return is$1 ? document$2.createElement(it) : {};
};

var _ie8DomDefine = !_descriptors && !_fails(function () {
  return Object.defineProperty(_domCreate('div'), 'a', {
    get: function get() {
      return 7;
    }
  }).a != 7;
});

var isObject$r = _isObject; // instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string

var _toPrimitive = function _toPrimitive(it, S) {
  if (!isObject$r(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject$r(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject$r(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject$r(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

var anObject$s = _anObject;
var IE8_DOM_DEFINE$1 = _ie8DomDefine;
var toPrimitive$9 = _toPrimitive;
var dP$b = Object.defineProperty;
_objectDp.f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject$s(O);
  P = toPrimitive$9(P, true);
  anObject$s(Attributes);
  if (IE8_DOM_DEFINE$1) try {
    return dP$b(O, P, Attributes);
  } catch (e) {
    /* empty */
  }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var _propertyDesc = function _propertyDesc(bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var dP$a = _objectDp;
var createDesc$4 = _propertyDesc;

var _hide = _descriptors ? function (object, key, value) {
  return dP$a.f(object, key, createDesc$4(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var _redefine = {exports: {}};

var hasOwnProperty = {}.hasOwnProperty;

var _has = function _has(it, key) {
  return hasOwnProperty.call(it, key);
};

var id$2 = 0;
var px = Math.random();

var _uid = function _uid(key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id$2 + px).toString(36));
};

var _shared = {exports: {}};

var _library = false;

var core$4 = _core.exports;
var global$j = _global.exports;
var SHARED = '__core-js_shared__';
var store$1 = global$j[SHARED] || (global$j[SHARED] = {});
(_shared.exports = function (key, value) {
  return store$1[key] || (store$1[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core$4.version,
  mode: 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});

var _functionToString = _shared.exports('native-function-to-string', Function.toString);

var global$i = _global.exports;
var hide$6 = _hide;
var has$b = _has;
var SRC = _uid('src');
var $toString$2 = _functionToString;
var TO_STRING$2 = 'toString';
var TPL = ('' + $toString$2).split(TO_STRING$2);

_core.exports.inspectSource = function (it) {
  return $toString$2.call(it);
};

(_redefine.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has$b(val, 'name') || hide$6(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has$b(val, SRC) || hide$6(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));

  if (O === global$i) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide$6(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide$6(O, key, val);
  } // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative

})(Function.prototype, TO_STRING$2, function toString() {
  return typeof this == 'function' && this[SRC] || $toString$2.call(this);
});

var _aFunction = function _aFunction(it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

var aFunction$b = _aFunction;

var _ctx = function _ctx(fn, that, length) {
  aFunction$b(fn);
  if (that === undefined) return fn;

  switch (length) {
    case 1:
      return function (a) {
        return fn.call(that, a);
      };

    case 2:
      return function (a, b) {
        return fn.call(that, a, b);
      };

    case 3:
      return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
  }

  return function ()
  /* ...args */
  {
    return fn.apply(that, arguments);
  };
};

var global$h = _global.exports;
var core$3 = _core.exports;
var hide$5 = _hide;
var redefine$7 = _redefine.exports;
var ctx$8 = _ctx;
var PROTOTYPE$3 = 'prototype';

var $export$1y = function $export(type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global$h : IS_STATIC ? global$h[name] || (global$h[name] = {}) : (global$h[name] || {})[PROTOTYPE$3];
  var exports = IS_GLOBAL ? core$3 : core$3[name] || (core$3[name] = {});
  var expProto = exports[PROTOTYPE$3] || (exports[PROTOTYPE$3] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;

  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined; // export native or passed

    out = (own ? target : source)[key]; // bind timers to global for call from export context

    exp = IS_BIND && own ? ctx$8(out, global$h) : IS_PROTO && typeof out == 'function' ? ctx$8(Function.call, out) : out; // extend global

    if (target) redefine$7(target, key, out, type & $export.U); // export

    if (exports[key] != out) hide$5(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};

global$h.core = core$3; // type bitmap

$export$1y.F = 1; // forced

$export$1y.G = 2; // global

$export$1y.S = 4; // static

$export$1y.P = 8; // proto

$export$1y.B = 16; // bind

$export$1y.W = 32; // wrap

$export$1y.U = 64; // safe

$export$1y.R = 128; // real proto method for `library`

var _export = $export$1y;

var _defined = function _defined(it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

var defined$8 = _defined;

var _toObject = function _toObject(it) {
  return Object(defined$8(it));
};

var ceil = Math.ceil;
var floor$2 = Math.floor;

var _toInteger = function _toInteger(it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor$2 : ceil)(it);
};

var toInteger$7 = _toInteger;
var max$1 = Math.max;
var min$2 = Math.min;

var _toAbsoluteIndex = function _toAbsoluteIndex(index, length) {
  index = toInteger$7(index);
  return index < 0 ? max$1(index + length, 0) : min$2(index, length);
};

var toInteger$6 = _toInteger;
var min$1 = Math.min;

var _toLength = function _toLength(it) {
  return it > 0 ? min$1(toInteger$6(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

var toObject$i = _toObject;
var toAbsoluteIndex$6 = _toAbsoluteIndex;
var toLength$k = _toLength;

var _arrayCopyWithin = [].copyWithin || function copyWithin(target
/* = 0 */
, start
/* = 0, end = @length */
) {
  var O = toObject$i(this);
  var len = toLength$k(O.length);
  var to = toAbsoluteIndex$6(target, len);
  var from = toAbsoluteIndex$6(start, len);
  var end = arguments.length > 2 ? arguments[2] : undefined;
  var count = Math.min((end === undefined ? len : toAbsoluteIndex$6(end, len)) - from, len - to);
  var inc = 1;

  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }

  while (count-- > 0) {
    if (from in O) O[to] = O[from];else delete O[to];
    to += inc;
    from += inc;
  }

  return O;
};

var _wks = {exports: {}};

var store = _shared.exports('wks');
var uid$4 = _uid;
var _Symbol = _global.exports.Symbol;
var USE_SYMBOL = typeof _Symbol == 'function';

var $exports = _wks.exports = function (name) {
  return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : uid$4)('Symbol.' + name));
};

$exports.store = store;

var UNSCOPABLES = _wks.exports('unscopables');
var ArrayProto$2 = Array.prototype;
if (ArrayProto$2[UNSCOPABLES] == undefined) _hide(ArrayProto$2, UNSCOPABLES, {});

var _addToUnscopables = function _addToUnscopables(key) {
  ArrayProto$2[UNSCOPABLES][key] = true;
};

var $export$1x = _export;
$export$1x($export$1x.P, 'Array', {
  copyWithin: _arrayCopyWithin
});
_addToUnscopables('copyWithin');

var toString$2 = {}.toString;

var _cof = function _cof(it) {
  return toString$2.call(it).slice(8, -1);
};

var cof$5 = _cof; // eslint-disable-next-line no-prototype-builtins

var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof$5(it) == 'String' ? it.split('') : Object(it);
};

var cof$4 = _cof;

var _isArray = Array.isArray || function isArray(arg) {
  return cof$4(arg) == 'Array';
};

var isObject$q = _isObject;
var isArray$2 = _isArray;
var SPECIES$3 = _wks.exports('species');

var _arraySpeciesConstructor = function _arraySpeciesConstructor(original) {
  var C;

  if (isArray$2(original)) {
    C = original.constructor; // cross-realm fallback

    if (typeof C == 'function' && (C === Array || isArray$2(C.prototype))) C = undefined;

    if (isObject$q(C)) {
      C = C[SPECIES$3];
      if (C === null) C = undefined;
    }
  }

  return C === undefined ? Array : C;
};

var speciesConstructor$5 = _arraySpeciesConstructor;

var _arraySpeciesCreate = function _arraySpeciesCreate(original, length) {
  return new (speciesConstructor$5(original))(length);
};

// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex

var ctx$7 = _ctx;
var IObject$3 = _iobject;
var toObject$h = _toObject;
var toLength$j = _toLength;
var asc = _arraySpeciesCreate;

var _arrayMethods = function _arrayMethods(TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject$h($this);
    var self = IObject$3(O);
    var f = ctx$7(callbackfn, that, 3);
    var length = toLength$j(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;

    for (; length > index; index++) {
      if (NO_HOLES || index in self) {
        val = self[index];
        res = f(val, index, O);

        if (TYPE) {
          if (IS_MAP) result[index] = res; // map
          else if (res) switch (TYPE) {
              case 3:
                return true;
              // some

              case 5:
                return val;
              // find

              case 6:
                return index;
              // findIndex

              case 2:
                result.push(val);
              // filter
            } else if (IS_EVERY) return false; // every
        }
      }
    }

    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};

var fails$b = _fails;

var _strictMethod = function _strictMethod(method, arg) {
  return !!method && fails$b(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () {
      /* empty */
    }, 1) : method.call(null);
  });
};

var $export$1w = _export;
var $every = _arrayMethods(4);
$export$1w($export$1w.P + $export$1w.F * !_strictMethod([].every, true), 'Array', {
  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
  every: function every(callbackfn
  /* , thisArg */
  ) {
    return $every(this, callbackfn, arguments[1]);
  }
});

var toObject$g = _toObject;
var toAbsoluteIndex$5 = _toAbsoluteIndex;
var toLength$i = _toLength;

var _arrayFill = function fill(value
/* , start = 0, end = @length */
) {
  var O = toObject$g(this);
  var length = toLength$i(O.length);
  var aLen = arguments.length;
  var index = toAbsoluteIndex$5(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex$5(end, length);

  while (endPos > index) {
    O[index++] = value;
  }

  return O;
};

var $export$1v = _export;
$export$1v($export$1v.P, 'Array', {
  fill: _arrayFill
});
_addToUnscopables('fill');

var $export$1u = _export;
var $filter = _arrayMethods(2);
$export$1u($export$1u.P + $export$1u.F * !_strictMethod([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn
  /* , thisArg */
  ) {
    return $filter(this, callbackfn, arguments[1]);
  }
});

var $export$1t = _export;
var $find$1 = _arrayMethods(5);
var KEY$1 = 'find';
var forced$1 = true; // Shouldn't skip holes

if (KEY$1 in []) Array(1)[KEY$1](function () {
  forced$1 = false;
});
$export$1t($export$1t.P + $export$1t.F * forced$1, 'Array', {
  find: function find(callbackfn
  /* , that = undefined */
  ) {
    return $find$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
_addToUnscopables(KEY$1);

var $export$1s = _export;
var $find = _arrayMethods(6);
var KEY = 'findIndex';
var forced = true; // Shouldn't skip holes

if (KEY in []) Array(1)[KEY](function () {
  forced = false;
});
$export$1s($export$1s.P + $export$1s.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn
  /* , that = undefined */
  ) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
_addToUnscopables(KEY);

var isArray$1 = _isArray;
var isObject$p = _isObject;
var toLength$h = _toLength;
var ctx$6 = _ctx;
var IS_CONCAT_SPREADABLE = _wks.exports('isConcatSpreadable');

function flattenIntoArray$1(target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? ctx$6(mapper, thisArg, 3) : false;
  var element, spreadable;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];
      spreadable = false;

      if (isObject$p(element)) {
        spreadable = element[IS_CONCAT_SPREADABLE];
        spreadable = spreadable !== undefined ? !!spreadable : isArray$1(element);
      }

      if (spreadable && depth > 0) {
        targetIndex = flattenIntoArray$1(target, original, element, toLength$h(element.length), targetIndex, depth - 1) - 1;
      } else {
        if (targetIndex >= 0x1fffffffffffff) throw TypeError();
        target[targetIndex] = element;
      }

      targetIndex++;
    }

    sourceIndex++;
  }

  return targetIndex;
}

var _flattenIntoArray = flattenIntoArray$1;

var $export$1r = _export;
var flattenIntoArray = _flattenIntoArray;
var toObject$f = _toObject;
var toLength$g = _toLength;
var aFunction$a = _aFunction;
var arraySpeciesCreate = _arraySpeciesCreate;
$export$1r($export$1r.P, 'Array', {
  flatMap: function flatMap(callbackfn
  /* , thisArg */
  ) {
    var O = toObject$f(this);
    var sourceLen, A;
    aFunction$a(callbackfn);
    sourceLen = toLength$g(O.length);
    A = arraySpeciesCreate(O, 0);
    flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);
    return A;
  }
});
_addToUnscopables('flatMap');

var $export$1q = _export;
var $forEach = _arrayMethods(0);
var STRICT = _strictMethod([].forEach, true);
$export$1q($export$1q.P + $export$1q.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn
  /* , thisArg */
  ) {
    return $forEach(this, callbackfn, arguments[1]);
  }
});

var anObject$r = _anObject;

var _iterCall = function _iterCall(iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject$r(value)[0], value[1]) : fn(value); // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject$r(ret.call(iterator));
    throw e;
  }
};

var _iterators = {};

var Iterators$5 = _iterators;
var ITERATOR$5 = _wks.exports('iterator');
var ArrayProto$1 = Array.prototype;

var _isArrayIter = function _isArrayIter(it) {
  return it !== undefined && (Iterators$5.Array === it || ArrayProto$1[ITERATOR$5] === it);
};

var $defineProperty$3 = _objectDp;
var createDesc$3 = _propertyDesc;

var _createProperty = function _createProperty(object, index, value) {
  if (index in object) $defineProperty$3.f(object, index, createDesc$3(0, value));else object[index] = value;
};

var cof$3 = _cof;
var TAG$2 = _wks.exports('toStringTag'); // ES3 wrong here

var ARG = cof$3(function () {
  return arguments;
}()) == 'Arguments'; // fallback for IE11 Script Access Denied error

var tryGet = function tryGet(it, key) {
  try {
    return it[key];
  } catch (e) {
    /* empty */
  }
};

var _classof = function _classof(it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
  : typeof (T = tryGet(O = Object(it), TAG$2)) == 'string' ? T // builtinTag case
  : ARG ? cof$3(O) // ES3 arguments fallback
  : (B = cof$3(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

var classof$4 = _classof;
var ITERATOR$4 = _wks.exports('iterator');
var Iterators$4 = _iterators;

var core_getIteratorMethod = _core.exports.getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR$4] || it['@@iterator'] || Iterators$4[classof$4(it)];
};

var ITERATOR$3 = _wks.exports('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR$3]();

  riter['return'] = function () {
    SAFE_CLOSING = true;
  }; // eslint-disable-next-line no-throw-literal


  Array.from(riter, function () {
    throw 2;
  });
} catch (e) {
  /* empty */
}

var _iterDetect = function _iterDetect(exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;

  try {
    var arr = [7];
    var iter = arr[ITERATOR$3]();

    iter.next = function () {
      return {
        done: safe = true
      };
    };

    arr[ITERATOR$3] = function () {
      return iter;
    };

    exec(arr);
  } catch (e) {
    /* empty */
  }

  return safe;
};

var ctx$5 = _ctx;
var $export$1p = _export;
var toObject$e = _toObject;
var call$1 = _iterCall;
var isArrayIter$2 = _isArrayIter;
var toLength$f = _toLength;
var createProperty$2 = _createProperty;
var getIterFn$2 = core_getIteratorMethod;
$export$1p($export$1p.S + $export$1p.F * !_iterDetect(function (iter) {
  Array.from(iter);
}), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike
  /* , mapfn = undefined, thisArg = undefined */
  ) {
    var O = toObject$e(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn$2(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx$5(mapfn, aLen > 2 ? arguments[2] : undefined, 2); // if object isn't iterable or it's array with default iterator - use simple case

    if (iterFn != undefined && !(C == Array && isArrayIter$2(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty$2(result, index, mapping ? call$1(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength$f(O.length);

      for (result = new C(length); length > index; index++) {
        createProperty$2(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }

    result.length = index;
    return result;
  }
});

var IObject$2 = _iobject;
var defined$7 = _defined;

var _toIobject = function _toIobject(it) {
  return IObject$2(defined$7(it));
};

// true  -> Array#includes

var toIObject$a = _toIobject;
var toLength$e = _toLength;
var toAbsoluteIndex$4 = _toAbsoluteIndex;

var _arrayIncludes = function _arrayIncludes(IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject$a($this);
    var length = toLength$e(O.length);
    var index = toAbsoluteIndex$4(fromIndex, length);
    var value; // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare

    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++]; // eslint-disable-next-line no-self-compare

      if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
    } else for (; length > index; index++) {
      if (IS_INCLUDES || index in O) {
        if (O[index] === el) return IS_INCLUDES || index || 0;
      }
    }
    return !IS_INCLUDES && -1;
  };
};

var $export$1o = _export;
var $includes = _arrayIncludes(true);
$export$1o($export$1o.P, 'Array', {
  includes: function includes(el
  /* , fromIndex = 0 */
  ) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});
_addToUnscopables('includes');

var $export$1n = _export;
var $indexOf = _arrayIncludes(false);
var $native$1 = [].indexOf;
var NEGATIVE_ZERO$1 = !!$native$1 && 1 / [1].indexOf(1, -0) < 0;
$export$1n($export$1n.P + $export$1n.F * (NEGATIVE_ZERO$1 || !_strictMethod($native$1)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement
  /* , fromIndex = 0 */
  ) {
    return NEGATIVE_ZERO$1 // convert -0 to +0
    ? $native$1.apply(this, arguments) || 0 : $indexOf(this, searchElement, arguments[1]);
  }
});

var $export$1m = _export;
$export$1m($export$1m.S, 'Array', {
  isArray: _isArray
});

var _iterStep = function _iterStep(done, value) {
  return {
    value: value,
    done: !!done
  };
};

var shared$1 = _shared.exports('keys');
var uid$3 = _uid;

var _sharedKey = function _sharedKey(key) {
  return shared$1[key] || (shared$1[key] = uid$3(key));
};

var has$a = _has;
var toIObject$9 = _toIobject;
var arrayIndexOf$1 = _arrayIncludes(false);
var IE_PROTO$2 = _sharedKey('IE_PROTO');

var _objectKeysInternal = function _objectKeysInternal(object, names) {
  var O = toIObject$9(object);
  var i = 0;
  var result = [];
  var key;

  for (key in O) {
    if (key != IE_PROTO$2) has$a(O, key) && result.push(key);
  } // Don't enum bug & hidden keys


  while (names.length > i) {
    if (has$a(O, key = names[i++])) {
      ~arrayIndexOf$1(result, key) || result.push(key);
    }
  }

  return result;
};

var _enumBugKeys = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

var $keys$3 = _objectKeysInternal;
var enumBugKeys$1 = _enumBugKeys;

var _objectKeys = Object.keys || function keys(O) {
  return $keys$3(O, enumBugKeys$1);
};

var dP$9 = _objectDp;
var anObject$q = _anObject;
var getKeys$4 = _objectKeys;

var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject$q(O);
  var keys = getKeys$4(Properties);
  var length = keys.length;
  var i = 0;
  var P;

  while (length > i) {
    dP$9.f(O, P = keys[i++], Properties[P]);
  }

  return O;
};

var document$1 = _global.exports.document;

var _html = document$1 && document$1.documentElement;

var anObject$p = _anObject;
var dPs = _objectDps;
var enumBugKeys = _enumBugKeys;
var IE_PROTO$1 = _sharedKey('IE_PROTO');

var Empty = function Empty() {
  /* empty */
};

var PROTOTYPE$2 = 'prototype'; // Create object with fake `null` prototype: use iframe Object with cleared prototype

var _createDict = function createDict() {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = _domCreate('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  _html.appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);

  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  _createDict = iframeDocument.F;

  while (i--) {
    delete _createDict[PROTOTYPE$2][enumBugKeys[i]];
  }

  return _createDict();
};

var _objectCreate = Object.create || function create(O, Properties) {
  var result;

  if (O !== null) {
    Empty[PROTOTYPE$2] = anObject$p(O);
    result = new Empty();
    Empty[PROTOTYPE$2] = null; // add "__proto__" for Object.getPrototypeOf polyfill

    result[IE_PROTO$1] = O;
  } else result = _createDict();

  return Properties === undefined ? result : dPs(result, Properties);
};

var def = _objectDp.f;
var has$9 = _has;
var TAG$1 = _wks.exports('toStringTag');

var _setToStringTag = function _setToStringTag(it, tag, stat) {
  if (it && !has$9(it = stat ? it : it.prototype, TAG$1)) def(it, TAG$1, {
    configurable: true,
    value: tag
  });
};

var create$3 = _objectCreate;
var descriptor = _propertyDesc;
var setToStringTag$3 = _setToStringTag;
var IteratorPrototype = {}; // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()

_hide(IteratorPrototype, _wks.exports('iterator'), function () {
  return this;
});

var _iterCreate = function _iterCreate(Constructor, NAME, next) {
  Constructor.prototype = create$3(IteratorPrototype, {
    next: descriptor(1, next)
  });
  setToStringTag$3(Constructor, NAME + ' Iterator');
};

var has$8 = _has;
var toObject$d = _toObject;
var IE_PROTO = _sharedKey('IE_PROTO');
var ObjectProto$1 = Object.prototype;

var _objectGpo = Object.getPrototypeOf || function (O) {
  O = toObject$d(O);
  if (has$8(O, IE_PROTO)) return O[IE_PROTO];

  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  }

  return O instanceof Object ? ObjectProto$1 : null;
};

var $export$1l = _export;
var redefine$6 = _redefine.exports;
var hide$4 = _hide;
var Iterators$3 = _iterators;
var $iterCreate = _iterCreate;
var setToStringTag$2 = _setToStringTag;
var getPrototypeOf$6 = _objectGpo;
var ITERATOR$2 = _wks.exports('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`

var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function returnThis() {
  return this;
};

var _iterDefine = function _iterDefine(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);

  var getMethod = function getMethod(kind) {
    if (!BUGGY && kind in proto) return proto[kind];

    switch (kind) {
      case KEYS:
        return function keys() {
          return new Constructor(this, kind);
        };

      case VALUES:
        return function values() {
          return new Constructor(this, kind);
        };
    }

    return function entries() {
      return new Constructor(this, kind);
    };
  };

  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR$2] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype; // Fix native

  if ($anyNative) {
    IteratorPrototype = getPrototypeOf$6($anyNative.call(new Base()));

    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag$2(IteratorPrototype, TAG, true); // fix for some old engines

      if (typeof IteratorPrototype[ITERATOR$2] != 'function') hide$4(IteratorPrototype, ITERATOR$2, returnThis);
    }
  } // fix Array#{values, @@iterator}.name in V8 / FF


  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;

    $default = function values() {
      return $native.call(this);
    };
  } // Define iterator


  if ((BUGGY || VALUES_BUG || !proto[ITERATOR$2])) {
    hide$4(proto, ITERATOR$2, $default);
  } // Plug for library


  Iterators$3[NAME] = $default;
  Iterators$3[TAG] = returnThis;

  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine$6(proto, key, methods[key]);
    } else $export$1l($export$1l.P + $export$1l.F * (BUGGY || VALUES_BUG), NAME, methods);
  }

  return methods;
};

var addToUnscopables = _addToUnscopables;
var step$1 = _iterStep;
var Iterators$2 = _iterators;
var toIObject$8 = _toIobject; // 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()

var es6_array_iterator = _iterDefine(Array, 'Array', function (iterated, kind) {
  this._t = toIObject$8(iterated); // target

  this._i = 0; // next index

  this._k = kind; // kind
  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;

  if (!O || index >= O.length) {
    this._t = undefined;
    return step$1(1);
  }

  if (kind == 'keys') return step$1(0, index);
  if (kind == 'values') return step$1(0, O[index]);
  return step$1(0, [index, O[index]]);
}, 'values'); // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)

Iterators$2.Arguments = Iterators$2.Array;
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

var $export$1k = _export;
var toIObject$7 = _toIobject;
var toInteger$5 = _toInteger;
var toLength$d = _toLength;
var $native = [].lastIndexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;
$export$1k($export$1k.P + $export$1k.F * (NEGATIVE_ZERO || !_strictMethod($native)), 'Array', {
  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
  lastIndexOf: function lastIndexOf(searchElement
  /* , fromIndex = @[*-1] */
  ) {
    // convert -0 to +0
    if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
    var O = toIObject$7(this);
    var length = toLength$d(O.length);
    var index = length - 1;
    if (arguments.length > 1) index = Math.min(index, toInteger$5(arguments[1]));
    if (index < 0) index = length + index;

    for (; index >= 0; index--) {
      if (index in O) if (O[index] === searchElement) return index || 0;
    }

    return -1;
  }
});

var $export$1j = _export;
var $map$1 = _arrayMethods(1);
$export$1j($export$1j.P + $export$1j.F * !_strictMethod([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn
  /* , thisArg */
  ) {
    return $map$1(this, callbackfn, arguments[1]);
  }
});

var $export$1i = _export;
var createProperty$1 = _createProperty; // WebKit Array.of isn't generic

$export$1i($export$1i.S + $export$1i.F * _fails(function () {
  function F() {
    /* empty */
  }

  return !(Array.of.call(F) instanceof F);
}), 'Array', {
  // 22.1.2.3 Array.of( ...items)
  of: function of()
  /* ...args */
  {
    var index = 0;
    var aLen = arguments.length;
    var result = new (typeof this == 'function' ? this : Array)(aLen);

    while (aLen > index) {
      createProperty$1(result, index, arguments[index++]);
    }

    result.length = aLen;
    return result;
  }
});

var aFunction$9 = _aFunction;
var toObject$c = _toObject;
var IObject$1 = _iobject;
var toLength$c = _toLength;

var _arrayReduce = function _arrayReduce(that, callbackfn, aLen, memo, isRight) {
  aFunction$9(callbackfn);
  var O = toObject$c(that);
  var self = IObject$1(O);
  var length = toLength$c(O.length);
  var index = isRight ? length - 1 : 0;
  var i = isRight ? -1 : 1;
  if (aLen < 2) for (;;) {
    if (index in self) {
      memo = self[index];
      index += i;
      break;
    }

    index += i;

    if (isRight ? index < 0 : length <= index) {
      throw TypeError('Reduce of empty array with no initial value');
    }
  }

  for (; isRight ? index >= 0 : length > index; index += i) {
    if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
  }

  return memo;
};

var $export$1h = _export;
var $reduce$1 = _arrayReduce;
$export$1h($export$1h.P + $export$1h.F * !_strictMethod([].reduce, true), 'Array', {
  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
  reduce: function reduce(callbackfn
  /* , initialValue */
  ) {
    return $reduce$1(this, callbackfn, arguments.length, arguments[1], false);
  }
});

var $export$1g = _export;
var $reduce = _arrayReduce;
$export$1g($export$1g.P + $export$1g.F * !_strictMethod([].reduceRight, true), 'Array', {
  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
  reduceRight: function reduceRight(callbackfn
  /* , initialValue */
  ) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
  }
});

var $export$1f = _export;
var html$4 = _html;
var cof$2 = _cof;
var toAbsoluteIndex$3 = _toAbsoluteIndex;
var toLength$b = _toLength;
var arraySlice$2 = [].slice; // fallback for not array-like ES3 strings and DOM objects

$export$1f($export$1f.P + $export$1f.F * _fails(function () {
  if (html$4) arraySlice$2.call(html$4);
}), 'Array', {
  slice: function slice(begin, end) {
    var len = toLength$b(this.length);
    var klass = cof$2(this);
    end = end === undefined ? len : end;
    if (klass == 'Array') return arraySlice$2.call(this, begin, end);
    var start = toAbsoluteIndex$3(begin, len);
    var upTo = toAbsoluteIndex$3(end, len);
    var size = toLength$b(upTo - start);
    var cloned = new Array(size);
    var i = 0;

    for (; i < size; i++) {
      cloned[i] = klass == 'String' ? this.charAt(start + i) : this[start + i];
    }

    return cloned;
  }
});

var $export$1e = _export;
var $some = _arrayMethods(3);
$export$1e($export$1e.P + $export$1e.F * !_strictMethod([].some, true), 'Array', {
  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
  some: function some(callbackfn
  /* , thisArg */
  ) {
    return $some(this, callbackfn, arguments[1]);
  }
});

var $export$1d = _export;
var aFunction$8 = _aFunction;
var toObject$b = _toObject;
var fails$a = _fails;
var $sort = [].sort;
var test$1 = [1, 2, 3];
$export$1d($export$1d.P + $export$1d.F * (fails$a(function () {
  // IE8-
  test$1.sort(undefined);
}) || !fails$a(function () {
  // V8 bug
  test$1.sort(null); // Old WebKit
}) || !_strictMethod($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined ? $sort.call(toObject$b(this)) : $sort.call(toObject$b(this), aFunction$8(comparefn));
  }
});

var global$g = _global.exports;
var dP$8 = _objectDp;
var DESCRIPTORS$5 = _descriptors;
var SPECIES$2 = _wks.exports('species');

var _setSpecies = function _setSpecies(KEY) {
  var C = global$g[KEY];
  if (DESCRIPTORS$5 && C && !C[SPECIES$2]) dP$8.f(C, SPECIES$2, {
    configurable: true,
    get: function get() {
      return this;
    }
  });
};

_setSpecies('Array');

var $export$1c = _export;
$export$1c($export$1c.S, 'Date', {
  now: function now() {
    return new Date().getTime();
  }
});

var fails$9 = _fails;
var getTime$1 = Date.prototype.getTime;
var $toISOString = Date.prototype.toISOString;

var lz = function lz(num) {
  return num > 9 ? num : '0' + num;
}; // PhantomJS / old WebKit has a broken implementations


var _dateToIsoString = fails$9(function () {
  return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
}) || !fails$9(function () {
  $toISOString.call(new Date(NaN));
}) ? function toISOString() {
  if (!isFinite(getTime$1.call(this))) throw RangeError('Invalid time value');
  var d = this;
  var y = d.getUTCFullYear();
  var m = d.getUTCMilliseconds();
  var s = y < 0 ? '-' : y > 9999 ? '+' : '';
  return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) + '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) + 'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) + ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
} : $toISOString;

var $export$1b = _export;
var toISOString = _dateToIsoString; // PhantomJS / old WebKit has a broken implementations

$export$1b($export$1b.P + $export$1b.F * (Date.prototype.toISOString !== toISOString), 'Date', {
  toISOString: toISOString
});

var $export$1a = _export;
var toObject$a = _toObject;
var toPrimitive$8 = _toPrimitive;
$export$1a($export$1a.P + $export$1a.F * _fails(function () {
  return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({
    toISOString: function toISOString() {
      return 1;
    }
  }) !== 1;
}), 'Date', {
  // eslint-disable-next-line no-unused-vars
  toJSON: function toJSON(key) {
    var O = toObject$a(this);
    var pv = toPrimitive$8(O);
    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
  }
});

var anObject$o = _anObject;
var toPrimitive$7 = _toPrimitive;
var NUMBER$1 = 'number';

var _dateToPrimitive = function _dateToPrimitive(hint) {
  if (hint !== 'string' && hint !== NUMBER$1 && hint !== 'default') throw TypeError('Incorrect hint');
  return toPrimitive$7(anObject$o(this), hint != NUMBER$1);
};

var TO_PRIMITIVE$1 = _wks.exports('toPrimitive');
var proto$4 = Date.prototype;
if (!(TO_PRIMITIVE$1 in proto$4)) _hide(proto$4, TO_PRIMITIVE$1, _dateToPrimitive);

var DateProto = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING$1 = 'toString';
var $toString$1 = DateProto[TO_STRING$1];
var getTime = DateProto.getTime;

if (new Date(NaN) + '' != INVALID_DATE) {
  _redefine.exports(DateProto, TO_STRING$1, function toString() {
    var value = getTime.call(this); // eslint-disable-next-line no-self-compare

    return value === value ? $toString$1.call(this) : INVALID_DATE;
  });
}

var _invoke = function _invoke(fn, args, that) {
  var un = that === undefined;

  switch (args.length) {
    case 0:
      return un ? fn() : fn.call(that);

    case 1:
      return un ? fn(args[0]) : fn.call(that, args[0]);

    case 2:
      return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);

    case 3:
      return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);

    case 4:
      return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
  }

  return fn.apply(that, args);
};

var aFunction$7 = _aFunction;
var isObject$o = _isObject;
var invoke$1 = _invoke;
var arraySlice$1 = [].slice;
var factories = {};

var construct = function construct(F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) {
      n[i] = 'a[' + i + ']';
    } // eslint-disable-next-line no-new-func


    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  }

  return factories[len](F, args);
};

var _bind = Function.bind || function bind(that
/* , ...args */
) {
  var fn = aFunction$7(this);
  var partArgs = arraySlice$1.call(arguments, 1);

  var bound = function bound()
  /* args... */
  {
    var args = partArgs.concat(arraySlice$1.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke$1(fn, args, that);
  };

  if (isObject$o(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};

var $export$19 = _export;
$export$19($export$19.P, 'Function', {
  bind: _bind
});

var isObject$n = _isObject;
var getPrototypeOf$5 = _objectGpo;
var HAS_INSTANCE = _wks.exports('hasInstance');
var FunctionProto = Function.prototype; // 19.2.3.6 Function.prototype[@@hasInstance](V)

if (!(HAS_INSTANCE in FunctionProto)) _objectDp.f(FunctionProto, HAS_INSTANCE, {
  value: function value(O) {
    if (typeof this != 'function' || !isObject$n(O)) return false;
    if (!isObject$n(this.prototype)) return O instanceof this; // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:

    while (O = getPrototypeOf$5(O)) {
      if (this.prototype === O) return true;
    }

    return false;
  }
});

var dP$7 = _objectDp.f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME$1 = 'name'; // 19.2.4.2 name

NAME$1 in FProto || _descriptors && dP$7(FProto, NAME$1, {
  configurable: true,
  get: function get() {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});

var redefine$5 = _redefine.exports;

var _redefineAll = function _redefineAll(target, src, safe) {
  for (var key in src) {
    redefine$5(target, key, src[key], safe);
  }

  return target;
};

var _anInstance = function _anInstance(it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {
    throw TypeError(name + ': incorrect invocation!');
  }

  return it;
};

var _forOf = {exports: {}};

var ctx$4 = _ctx;
var call = _iterCall;
var isArrayIter$1 = _isArrayIter;
var anObject$n = _anObject;
var toLength$a = _toLength;
var getIterFn$1 = core_getIteratorMethod;
var BREAK = {};
var RETURN = {};

var exports$1 = _forOf.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () {
    return iterable;
  } : getIterFn$1(iterable);
  var f = ctx$4(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!'); // fast case for arrays with default iterator

  if (isArrayIter$1(iterFn)) for (length = toLength$a(iterable.length); length > index; index++) {
    result = entries ? f(anObject$n(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};

exports$1.BREAK = BREAK;
exports$1.RETURN = RETURN;

var _meta = {exports: {}};

var META$1 = _uid('meta');
var isObject$m = _isObject;
var has$7 = _has;
var setDesc = _objectDp.f;
var id$1 = 0;

var isExtensible$1 = Object.isExtensible || function () {
  return true;
};

var FREEZE = !_fails(function () {
  return isExtensible$1(Object.preventExtensions({}));
});

var setMeta = function setMeta(it) {
  setDesc(it, META$1, {
    value: {
      i: 'O' + ++id$1,
      // object ID
      w: {} // weak collections IDs

    }
  });
};

var fastKey$1 = function fastKey(it, create) {
  // return primitive with prefix
  if (!isObject$m(it)) return _typeof(it) == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;

  if (!has$7(it, META$1)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible$1(it)) return 'F'; // not necessary to add metadata

    if (!create) return 'E'; // add missing metadata

    setMeta(it); // return object ID
  }

  return it[META$1].i;
};

var getWeak$2 = function getWeak(it, create) {
  if (!has$7(it, META$1)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible$1(it)) return true; // not necessary to add metadata

    if (!create) return false; // add missing metadata

    setMeta(it); // return hash weak collections IDs
  }

  return it[META$1].w;
}; // add metadata on freeze-family methods calling


var onFreeze = function onFreeze(it) {
  if (FREEZE && meta$5.NEED && isExtensible$1(it) && !has$7(it, META$1)) setMeta(it);
  return it;
};

var meta$5 = _meta.exports = {
  KEY: META$1,
  NEED: false,
  fastKey: fastKey$1,
  getWeak: getWeak$2,
  onFreeze: onFreeze
};

var isObject$l = _isObject;

var _validateCollection = function _validateCollection(it, TYPE) {
  if (!isObject$l(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};

var dP$6 = _objectDp.f;
var create$2 = _objectCreate;
var redefineAll$3 = _redefineAll;
var ctx$3 = _ctx;
var anInstance$4 = _anInstance;
var forOf$3 = _forOf.exports;
var $iterDefine = _iterDefine;
var step = _iterStep;
var setSpecies$1 = _setSpecies;
var DESCRIPTORS$4 = _descriptors;
var fastKey = _meta.exports.fastKey;
var validate$7 = _validateCollection;
var SIZE = DESCRIPTORS$4 ? '_s' : 'size';

var getEntry = function getEntry(that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index]; // frozen object case

  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

var _collectionStrong = {
  getConstructor: function getConstructor(wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance$4(that, C, NAME, '_i');
      that._t = NAME; // collection type

      that._i = create$2(null); // index

      that._f = undefined; // first entry

      that._l = undefined; // last entry

      that[SIZE] = 0; // size

      if (iterable != undefined) forOf$3(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll$3(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate$7(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }

        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function _delete(key) {
        var that = validate$7(this, NAME);
        var entry = getEntry(that, key);

        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        }

        return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn
      /* , that = undefined */
      ) {
        validate$7(this, NAME);
        var f = ctx$3(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;

        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this); // revert to the last existing entry

          while (entry && entry.r) {
            entry = entry.p;
          }
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate$7(this, NAME), key);
      }
    });
    if (DESCRIPTORS$4) dP$6(C.prototype, 'size', {
      get: function get() {
        return validate$7(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function def(that, key, value) {
    var entry = getEntry(that, key);
    var prev, index; // change existing entry

    if (entry) {
      entry.v = value; // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true),
        // <- index
        k: key,
        // <- key
        v: value,
        // <- value
        p: prev = that._l,
        // <- previous entry
        n: undefined,
        // <- next entry
        r: false // <- removed

      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++; // add to index

      if (index !== 'F') that._i[index] = entry;
    }

    return that;
  },
  getEntry: getEntry,
  setStrong: function setStrong(C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate$7(iterated, NAME); // target

      this._k = kind; // kind

      this._l = undefined; // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l; // revert to the last existing entry

      while (entry && entry.r) {
        entry = entry.p;
      } // get next entry


      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      } // return step by kind


      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true); // add [@@species], 23.1.2.2, 23.2.2.2

    setSpecies$1(NAME);
  }
};

var _objectGopd = {};

var _objectPie = {};

_objectPie.f = {}.propertyIsEnumerable;

var pIE$2 = _objectPie;
var createDesc$2 = _propertyDesc;
var toIObject$6 = _toIobject;
var toPrimitive$6 = _toPrimitive;
var has$6 = _has;
var IE8_DOM_DEFINE = _ie8DomDefine;
var gOPD$8 = Object.getOwnPropertyDescriptor;
_objectGopd.f = _descriptors ? gOPD$8 : function getOwnPropertyDescriptor(O, P) {
  O = toIObject$6(O);
  P = toPrimitive$6(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD$8(O, P);
  } catch (e) {
    /* empty */
  }
  if (has$6(O, P)) return createDesc$2(!pIE$2.f.call(O, P), O[P]);
};

/* eslint-disable no-proto */

var isObject$k = _isObject;
var anObject$m = _anObject;

var check$1 = function check(O, proto) {
  anObject$m(O);
  if (!isObject$k(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};

var _setProto = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
  function (test, buggy, set) {
    try {
      set = _ctx(Function.call, _objectGopd.f(Object.prototype, '__proto__').set, 2);
      set(test, []);
      buggy = !(test instanceof Array);
    } catch (e) {
      buggy = true;
    }

    return function setPrototypeOf(O, proto) {
      check$1(O, proto);
      if (buggy) O.__proto__ = proto;else set(O, proto);
      return O;
    };
  }({}, false) : undefined),
  check: check$1
};

var isObject$j = _isObject;
var setPrototypeOf = _setProto.set;

var _inheritIfRequired = function _inheritIfRequired(that, target, C) {
  var S = target.constructor;
  var P;

  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject$j(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  }

  return that;
};

var global$f = _global.exports;
var $export$18 = _export;
var redefine$4 = _redefine.exports;
var redefineAll$2 = _redefineAll;
var meta$4 = _meta.exports;
var forOf$2 = _forOf.exports;
var anInstance$3 = _anInstance;
var isObject$i = _isObject;
var fails$8 = _fails;
var $iterDetect$1 = _iterDetect;
var setToStringTag$1 = _setToStringTag;
var inheritIfRequired$2 = _inheritIfRequired;

var _collection = function _collection(NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global$f[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};

  var fixMethod = function fixMethod(KEY) {
    var fn = proto[KEY];
    redefine$4(proto, KEY, KEY == 'delete' ? function (a) {
      return IS_WEAK && !isObject$i(a) ? false : fn.call(this, a === 0 ? 0 : a);
    } : KEY == 'has' ? function has(a) {
      return IS_WEAK && !isObject$i(a) ? false : fn.call(this, a === 0 ? 0 : a);
    } : KEY == 'get' ? function get(a) {
      return IS_WEAK && !isObject$i(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
    } : KEY == 'add' ? function add(a) {
      fn.call(this, a === 0 ? 0 : a);
      return this;
    } : function set(a, b) {
      fn.call(this, a === 0 ? 0 : a, b);
      return this;
    });
  };

  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails$8(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll$2(C.prototype, methods);
    meta$4.NEED = true;
  } else {
    var instance = new C(); // early implementations not supports chaining

    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance; // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false

    var THROWS_ON_PRIMITIVES = fails$8(function () {
      instance.has(1);
    }); // most early implementations doesn't supports iterables, most modern - not close it correctly

    var ACCEPT_ITERABLES = $iterDetect$1(function (iter) {
      new C(iter);
    }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same

    var BUGGY_ZERO = !IS_WEAK && fails$8(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;

      while (index--) {
        $instance[ADDER](index, index);
      }

      return !$instance.has(-0);
    });

    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance$3(target, C, NAME);
        var that = inheritIfRequired$2(new Base(), target, C);
        if (iterable != undefined) forOf$2(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }

    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }

    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER); // weak collections should not contains .clear method

    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag$1(C, NAME);
  O[NAME] = C;
  $export$18($export$18.G + $export$18.W + $export$18.F * (C != Base), O);
  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);
  return C;
};

var strong$1 = _collectionStrong;
var validate$6 = _validateCollection;
var MAP = 'Map'; // 23.1 Map Objects

_collection(MAP, function (get) {
  return function Map() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong$1.getEntry(validate$6(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong$1.def(validate$6(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong$1, true);

var _mathLog1p = Math.log1p || function log1p(x) {
  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
};

var $export$17 = _export;
var log1p = _mathLog1p;
var sqrt = Math.sqrt;
var $acosh = Math.acosh;
$export$17($export$17.S + $export$17.F * !($acosh // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
&& Math.floor($acosh(Number.MAX_VALUE)) == 710 // Tor Browser bug: Math.acosh(Infinity) -> NaN
&& $acosh(Infinity) == Infinity), 'Math', {
  acosh: function acosh(x) {
    return (x = +x) < 1 ? NaN : x > 94906265.62425156 ? Math.log(x) + Math.LN2 : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
  }
});

var $export$16 = _export;
var $asinh = Math.asinh;

function asinh(x) {
  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
} // Tor Browser bug: Math.asinh(0) -> -0


$export$16($export$16.S + $export$16.F * !($asinh && 1 / $asinh(0) > 0), 'Math', {
  asinh: asinh
});

var $export$15 = _export;
var $atanh = Math.atanh; // Tor Browser bug: Math.atanh(-0) -> 0

$export$15($export$15.S + $export$15.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
  atanh: function atanh(x) {
    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
  }
});

var _mathSign = Math.sign || function sign(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};

var $export$14 = _export;
var sign$1 = _mathSign;
$export$14($export$14.S, 'Math', {
  cbrt: function cbrt(x) {
    return sign$1(x = +x) * Math.pow(Math.abs(x), 1 / 3);
  }
});

var $export$13 = _export;
$export$13($export$13.S, 'Math', {
  clz32: function clz32(x) {
    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
  }
});

var $export$12 = _export;
var exp$2 = Math.exp;
$export$12($export$12.S, 'Math', {
  cosh: function cosh(x) {
    return (exp$2(x = +x) + exp$2(-x)) / 2;
  }
});

var $expm1$1 = Math.expm1;

var _mathExpm1 = !$expm1$1 // Old FF bug
|| $expm1$1(10) > 22025.465794806719 || $expm1$1(10) < 22025.4657948067165168 // Tor Browser bug
|| $expm1$1(-2e-17) != -2e-17 ? function expm1(x) {
  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
} : $expm1$1;

var $export$11 = _export;
var $expm1 = _mathExpm1;
$export$11($export$11.S + $export$11.F * ($expm1 != Math.expm1), 'Math', {
  expm1: $expm1
});

var sign = _mathSign;
var pow = Math.pow;
var EPSILON = pow(2, -52);
var EPSILON32 = pow(2, -23);
var MAX32 = pow(2, 127) * (2 - EPSILON32);
var MIN32 = pow(2, -126);

var roundTiesToEven = function roundTiesToEven(n) {
  return n + 1 / EPSILON - 1 / EPSILON;
};

var _mathFround = Math.fround || function fround(x) {
  var $abs = Math.abs(x);
  var $sign = sign(x);
  var a, result;
  if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
  a = (1 + EPSILON32 / EPSILON) * $abs;
  result = a - (a - $abs); // eslint-disable-next-line no-self-compare

  if (result > MAX32 || result != result) return $sign * Infinity;
  return $sign * result;
};

var $export$10 = _export;
$export$10($export$10.S, 'Math', {
  fround: _mathFround
});

var $export$$ = _export;
var abs$1 = Math.abs;
$export$$($export$$.S, 'Math', {
  hypot: function hypot(value1, value2) {
    // eslint-disable-line no-unused-vars
    var sum = 0;
    var i = 0;
    var aLen = arguments.length;
    var larg = 0;
    var arg, div;

    while (i < aLen) {
      arg = abs$1(arguments[i++]);

      if (larg < arg) {
        div = larg / arg;
        sum = sum * div * div + 1;
        larg = arg;
      } else if (arg > 0) {
        div = arg / larg;
        sum += div * div;
      } else sum += arg;
    }

    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
  }
});

var $export$_ = _export;
var $imul = Math.imul; // some WebKit versions fails with big numbers, some has wrong arity

$export$_($export$_.S + $export$_.F * _fails(function () {
  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
}), 'Math', {
  imul: function imul(x, y) {
    var UINT16 = 0xffff;
    var xn = +x;
    var yn = +y;
    var xl = UINT16 & xn;
    var yl = UINT16 & yn;
    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
  }
});

var $export$Z = _export;
$export$Z($export$Z.S, 'Math', {
  log1p: _mathLog1p
});

var $export$Y = _export;
$export$Y($export$Y.S, 'Math', {
  log10: function log10(x) {
    return Math.log(x) * Math.LOG10E;
  }
});

var $export$X = _export;
$export$X($export$X.S, 'Math', {
  log2: function log2(x) {
    return Math.log(x) / Math.LN2;
  }
});

var $export$W = _export;
$export$W($export$W.S, 'Math', {
  sign: _mathSign
});

var $export$V = _export;
var expm1$1 = _mathExpm1;
var exp$1 = Math.exp; // V8 near Chromium 38 has a problem with very small numbers

$export$V($export$V.S + $export$V.F * _fails(function () {
  return !Math.sinh(-2e-17) != -2e-17;
}), 'Math', {
  sinh: function sinh(x) {
    return Math.abs(x = +x) < 1 ? (expm1$1(x) - expm1$1(-x)) / 2 : (exp$1(x - 1) - exp$1(-x - 1)) * (Math.E / 2);
  }
});

var $export$U = _export;
var expm1 = _mathExpm1;
var exp = Math.exp;
$export$U($export$U.S, 'Math', {
  tanh: function tanh(x) {
    var a = expm1(x = +x);
    var b = expm1(-x);
    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
  }
});

var $export$T = _export;
$export$T($export$T.S, 'Math', {
  trunc: function trunc(it) {
    return (it > 0 ? Math.floor : Math.ceil)(it);
  }
});

var _objectGopn = {};

var $keys$2 = _objectKeysInternal;
var hiddenKeys = _enumBugKeys.concat('length', 'prototype');

_objectGopn.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys$2(O, hiddenKeys);
};

var _stringWs = "\t\n\x0B\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003" + "\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";

var $export$S = _export;
var defined$6 = _defined;
var fails$7 = _fails;
var spaces = _stringWs;
var space = '[' + spaces + ']';
var non = "\u200B\x85";
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function exporter(KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails$7(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export$S($export$S.P + $export$S.F * FORCE, 'String', exp);
}; // 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim


var trim = exporter.trim = function (string, TYPE) {
  string = String(defined$6(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

var _stringTrim = exporter;

var global$e = _global.exports;
var has$5 = _has;
var cof$1 = _cof;
var inheritIfRequired$1 = _inheritIfRequired;
var toPrimitive$5 = _toPrimitive;
var fails$6 = _fails;
var gOPN$5 = _objectGopn.f;
var gOPD$7 = _objectGopd.f;
var dP$5 = _objectDp.f;
var $trim$2 = _stringTrim.trim;
var NUMBER = 'Number';
var $Number = global$e[NUMBER];
var Base$1 = $Number;
var proto$3 = $Number.prototype; // Opera ~12 has broken Object#toString

var BROKEN_COF = cof$1(_objectCreate(proto$3)) == NUMBER;
var TRIM = ('trim' in String.prototype); // 7.1.3 ToNumber(argument)

var toNumber = function toNumber(argument) {
  var it = toPrimitive$5(argument, false);

  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim$2(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;

    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66:
        case 98:
          radix = 2;
          maxCode = 49;
          break;
        // fast equal /^0b[01]+$/i

        case 79:
        case 111:
          radix = 8;
          maxCode = 55;
          break;
        // fast equal /^0o[0-7]+$/i

        default:
          return +it;
      }

      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i); // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols

        if (code < 48 || code > maxCode) return NaN;
      }

      return parseInt(digits, radix);
    }
  }

  return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number // check on 1..constructor(foo) case
    && (BROKEN_COF ? fails$6(function () {
      proto$3.valueOf.call(that);
    }) : cof$1(that) != NUMBER) ? inheritIfRequired$1(new Base$1(toNumber(it)), that, $Number) : toNumber(it);
  };

  for (var keys$1 = _descriptors ? gOPN$5(Base$1) : ( // ES3:
  'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' + // ES6 (in case, if modules with ES6 Number statics required before):
  'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' + 'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger').split(','), j$1 = 0, key$1; keys$1.length > j$1; j$1++) {
    if (has$5(Base$1, key$1 = keys$1[j$1]) && !has$5($Number, key$1)) {
      dP$5($Number, key$1, gOPD$7(Base$1, key$1));
    }
  }

  $Number.prototype = proto$3;
  proto$3.constructor = $Number;
  _redefine.exports(global$e, NUMBER, $Number);
}

var $export$R = _export;
$export$R($export$R.S, 'Number', {
  EPSILON: Math.pow(2, -52)
});

var $export$Q = _export;
var _isFinite = _global.exports.isFinite;
$export$Q($export$Q.S, 'Number', {
  isFinite: function isFinite(it) {
    return typeof it == 'number' && _isFinite(it);
  }
});

var isObject$h = _isObject;
var floor$1 = Math.floor;

var _isInteger = function isInteger(it) {
  return !isObject$h(it) && isFinite(it) && floor$1(it) === it;
};

var $export$P = _export;
$export$P($export$P.S, 'Number', {
  isInteger: _isInteger
});

var $export$O = _export;
$export$O($export$O.S, 'Number', {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});

var $export$N = _export;
var isInteger = _isInteger;
var abs = Math.abs;
$export$N($export$N.S, 'Number', {
  isSafeInteger: function isSafeInteger(number) {
    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
  }
});

var $export$M = _export;
$export$M($export$M.S, 'Number', {
  MAX_SAFE_INTEGER: 0x1fffffffffffff
});

var $export$L = _export;
$export$L($export$L.S, 'Number', {
  MIN_SAFE_INTEGER: -0x1fffffffffffff
});

var $parseFloat$1 = _global.exports.parseFloat;
var $trim$1 = _stringTrim.trim;

var _parseFloat = 1 / $parseFloat$1(_stringWs + '-0') !== -Infinity ? function parseFloat(str) {
  var string = $trim$1(String(str), 3);
  var result = $parseFloat$1(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat$1;

var $export$K = _export;
var $parseFloat = _parseFloat; // 20.1.2.12 Number.parseFloat(string)

$export$K($export$K.S + $export$K.F * (Number.parseFloat != $parseFloat), 'Number', {
  parseFloat: $parseFloat
});

var $parseInt$1 = _global.exports.parseInt;
var $trim = _stringTrim.trim;
var ws = _stringWs;
var hex = /^[-+]?0[xX]/;

var _parseInt = $parseInt$1(ws + '08') !== 8 || $parseInt$1(ws + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt$1(string, radix >>> 0 || (hex.test(string) ? 16 : 10));
} : $parseInt$1;

var $export$J = _export;
var $parseInt = _parseInt; // 20.1.2.13 Number.parseInt(string, radix)

$export$J($export$J.S + $export$J.F * (Number.parseInt != $parseInt), 'Number', {
  parseInt: $parseInt
});

var _objectGops = {};

_objectGops.f = Object.getOwnPropertySymbols;

var DESCRIPTORS$3 = _descriptors;
var getKeys$3 = _objectKeys;
var gOPS$2 = _objectGops;
var pIE$1 = _objectPie;
var toObject$9 = _toObject;
var IObject = _iobject;
var $assign = Object.assign; // should work with symbols and should have deterministic property order (V8 bug)

var _objectAssign = !$assign || _fails(function () {
  var A = {};
  var B = {}; // eslint-disable-next-line no-undef

  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) {
    B[k] = k;
  });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) {
  // eslint-disable-line no-unused-vars
  var T = toObject$9(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS$2.f;
  var isEnum = pIE$1.f;

  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys$3(S).concat(getSymbols(S)) : getKeys$3(S);
    var length = keys.length;
    var j = 0;
    var key;

    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS$3 || isEnum.call(S, key)) T[key] = S[key];
    }
  }

  return T;
} : $assign;

var $export$I = _export;
$export$I($export$I.S + $export$I.F, 'Object', {
  assign: _objectAssign
});

var $export$H = _export; // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])

$export$H($export$H.S, 'Object', {
  create: _objectCreate
});

var _objectForcedPam = !_fails(function () {
  var K = Math.random(); // In FF throws only define methods
  // eslint-disable-next-line no-undef, no-useless-call

  __defineSetter__.call(null, K, function () {
    /* empty */
  });

  delete _global.exports[K];
});

var $export$G = _export;
var toObject$8 = _toObject;
var aFunction$6 = _aFunction;
var $defineProperty$2 = _objectDp; // B.2.2.2 Object.prototype.__defineGetter__(P, getter)

_descriptors && $export$G($export$G.P + _objectForcedPam, 'Object', {
  __defineGetter__: function __defineGetter__(P, getter) {
    $defineProperty$2.f(toObject$8(this), P, {
      get: aFunction$6(getter),
      enumerable: true,
      configurable: true
    });
  }
});

var $export$F = _export;
var toObject$7 = _toObject;
var aFunction$5 = _aFunction;
var $defineProperty$1 = _objectDp; // B.2.2.3 Object.prototype.__defineSetter__(P, setter)

_descriptors && $export$F($export$F.P + _objectForcedPam, 'Object', {
  __defineSetter__: function __defineSetter__(P, setter) {
    $defineProperty$1.f(toObject$7(this), P, {
      set: aFunction$5(setter),
      enumerable: true,
      configurable: true
    });
  }
});

var $export$E = _export; // 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)

$export$E($export$E.S + $export$E.F * !_descriptors, 'Object', {
  defineProperty: _objectDp.f
});

var $export$D = _export; // 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)

$export$D($export$D.S + $export$D.F * !_descriptors, 'Object', {
  defineProperties: _objectDps
});

var DESCRIPTORS$2 = _descriptors;
var getKeys$2 = _objectKeys;
var toIObject$5 = _toIobject;
var isEnum$1 = _objectPie.f;

var _objectToArray = function _objectToArray(isEntries) {
  return function (it) {
    var O = toIObject$5(it);
    var keys = getKeys$2(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;

    while (length > i) {
      key = keys[i++];

      if (!DESCRIPTORS$2 || isEnum$1.call(O, key)) {
        result.push(isEntries ? [key, O[key]] : O[key]);
      }
    }

    return result;
  };
};

var $export$C = _export;
var $entries = _objectToArray(true);
$export$C($export$C.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});

var $export$B = _export;
var core$2 = _core.exports;
var fails$5 = _fails;

var _objectSap = function _objectSap(KEY, exec) {
  var fn = (core$2.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export$B($export$B.S + $export$B.F * fails$5(function () {
    fn(1);
  }), 'Object', exp);
};

var isObject$g = _isObject;
var meta$3 = _meta.exports.onFreeze;
_objectSap('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && isObject$g(it) ? $freeze(meta$3(it)) : it;
  };
});

var toIObject$4 = _toIobject;
var $getOwnPropertyDescriptor$1 = _objectGopd.f;
_objectSap('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor$1(toIObject$4(it), key);
  };
});

var gOPN$4 = _objectGopn;
var gOPS$1 = _objectGops;
var anObject$l = _anObject;
var Reflect$1 = _global.exports.Reflect;

var _ownKeys = Reflect$1 && Reflect$1.ownKeys || function ownKeys(it) {
  var keys = gOPN$4.f(anObject$l(it));
  var getSymbols = gOPS$1.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};

var $export$A = _export;
var ownKeys = _ownKeys;
var toIObject$3 = _toIobject;
var gOPD$6 = _objectGopd;
var createProperty = _createProperty;
$export$A($export$A.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject$3(object);
    var getDesc = gOPD$6.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;

    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }

    return result;
  }
});

var _objectGopnExt = {};

var toIObject$2 = _toIobject;
var gOPN$3 = _objectGopn.f;
var toString$1 = {}.toString;
var windowNames = (typeof window === "undefined" ? "undefined" : _typeof(window)) == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function getWindowNames(it) {
  try {
    return gOPN$3(it);
  } catch (e) {
    return windowNames.slice();
  }
};

_objectGopnExt.f = function getOwnPropertyNames(it) {
  return windowNames && toString$1.call(it) == '[object Window]' ? getWindowNames(it) : gOPN$3(toIObject$2(it));
};

_objectSap('getOwnPropertyNames', function () {
  return _objectGopnExt.f;
});

var toObject$6 = _toObject;
var $getPrototypeOf = _objectGpo;
_objectSap('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject$6(it));
  };
});

var $export$z = _export;
var toObject$5 = _toObject;
var toPrimitive$4 = _toPrimitive;
var getPrototypeOf$4 = _objectGpo;
var getOwnPropertyDescriptor$1 = _objectGopd.f; // B.2.2.4 Object.prototype.__lookupGetter__(P)

_descriptors && $export$z($export$z.P + _objectForcedPam, 'Object', {
  __lookupGetter__: function __lookupGetter__(P) {
    var O = toObject$5(this);
    var K = toPrimitive$4(P, true);
    var D;

    do {
      if (D = getOwnPropertyDescriptor$1(O, K)) return D.get;
    } while (O = getPrototypeOf$4(O));
  }
});

var $export$y = _export;
var toObject$4 = _toObject;
var toPrimitive$3 = _toPrimitive;
var getPrototypeOf$3 = _objectGpo;
var getOwnPropertyDescriptor = _objectGopd.f; // B.2.2.5 Object.prototype.__lookupSetter__(P)

_descriptors && $export$y($export$y.P + _objectForcedPam, 'Object', {
  __lookupSetter__: function __lookupSetter__(P) {
    var O = toObject$4(this);
    var K = toPrimitive$3(P, true);
    var D;

    do {
      if (D = getOwnPropertyDescriptor(O, K)) return D.set;
    } while (O = getPrototypeOf$3(O));
  }
});

var isObject$f = _isObject;
var meta$2 = _meta.exports.onFreeze;
_objectSap('preventExtensions', function ($preventExtensions) {
  return function preventExtensions(it) {
    return $preventExtensions && isObject$f(it) ? $preventExtensions(meta$2(it)) : it;
  };
});

var classof$3 = _classof;
var test = {};
test[_wks.exports('toStringTag')] = 'z';

if (test + '' != '[object z]') {
  _redefine.exports(Object.prototype, 'toString', function toString() {
    return '[object ' + classof$3(this) + ']';
  }, true);
}

var _sameValue = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};

var $export$x = _export;
$export$x($export$x.S, 'Object', {
  is: _sameValue
});

var isObject$e = _isObject;
_objectSap('isFrozen', function ($isFrozen) {
  return function isFrozen(it) {
    return isObject$e(it) ? $isFrozen ? $isFrozen(it) : false : true;
  };
});

var isObject$d = _isObject;
_objectSap('isSealed', function ($isSealed) {
  return function isSealed(it) {
    return isObject$d(it) ? $isSealed ? $isSealed(it) : false : true;
  };
});

var isObject$c = _isObject;
_objectSap('isExtensible', function ($isExtensible) {
  return function isExtensible(it) {
    return isObject$c(it) ? $isExtensible ? $isExtensible(it) : true : false;
  };
});

var toObject$3 = _toObject;
var $keys$1 = _objectKeys;
_objectSap('keys', function () {
  return function keys(it) {
    return $keys$1(toObject$3(it));
  };
});

var isObject$b = _isObject;
var meta$1 = _meta.exports.onFreeze;
_objectSap('seal', function ($seal) {
  return function seal(it) {
    return $seal && isObject$b(it) ? $seal(meta$1(it)) : it;
  };
});

var $export$w = _export;
$export$w($export$w.S, 'Object', {
  setPrototypeOf: _setProto.set
});

var $export$v = _export;
var $values = _objectToArray(false);
$export$v($export$v.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});

var anObject$k = _anObject;
var aFunction$4 = _aFunction;
var SPECIES$1 = _wks.exports('species');

var _speciesConstructor = function _speciesConstructor(O, D) {
  var C = anObject$k(O).constructor;
  var S;
  return C === undefined || (S = anObject$k(C)[SPECIES$1]) == undefined ? D : aFunction$4(S);
};

var ctx$2 = _ctx;
var invoke = _invoke;
var html$3 = _html;
var cel = _domCreate;
var global$d = _global.exports;
var process$2 = global$d.process;
var setTask = global$d.setImmediate;
var clearTask = global$d.clearImmediate;
var MessageChannel = global$d.MessageChannel;
var Dispatch = global$d.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;

var run = function run() {
  var id = +this; // eslint-disable-next-line no-prototype-builtins

  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var listener = function listener(event) {
  run.call(event.data);
}; // Node.js 0.9+ & IE10+ has setImmediate, otherwise:


if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;

    while (arguments.length > i) {
      args.push(arguments[i++]);
    }

    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };

    defer(counter);
    return counter;
  };

  clearTask = function clearImmediate(id) {
    delete queue[id];
  }; // Node.js 0.8-


  if (_cof(process$2) == 'process') {
    defer = function defer(id) {
      process$2.nextTick(ctx$2(run, id, 1));
    }; // Sphere (JS game engine) Dispatch API

  } else if (Dispatch && Dispatch.now) {
    defer = function defer(id) {
      Dispatch.now(ctx$2(run, id, 1));
    }; // Browsers with MessageChannel, includes WebWorkers

  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx$2(port.postMessage, port, 1); // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global$d.addEventListener && typeof postMessage == 'function' && !global$d.importScripts) {
    defer = function defer(id) {
      global$d.postMessage(id + '', '*');
    };

    global$d.addEventListener('message', listener, false); // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function defer(id) {
      html$3.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html$3.removeChild(this);
        run.call(id);
      };
    }; // Rest old browsers

  } else {
    defer = function defer(id) {
      setTimeout(ctx$2(run, id, 1), 0);
    };
  }
}

var _task = {
  set: setTask,
  clear: clearTask
};

var global$c = _global.exports;
var macrotask = _task.set;
var Observer = global$c.MutationObserver || global$c.WebKitMutationObserver;
var process$1 = global$c.process;
var Promise$1 = global$c.Promise;
var isNode$2 = _cof(process$1) == 'process';

var _microtask = function _microtask() {
  var head, last, notify;

  var flush = function flush() {
    var parent, fn;
    if (isNode$2 && (parent = process$1.domain)) parent.exit();

    while (head) {
      fn = head.fn;
      head = head.next;

      try {
        fn();
      } catch (e) {
        if (head) notify();else last = undefined;
        throw e;
      }
    }

    last = undefined;
    if (parent) parent.enter();
  }; // Node.js


  if (isNode$2) {
    notify = function notify() {
      process$1.nextTick(flush);
    }; // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339

  } else if (Observer && !(global$c.navigator && global$c.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, {
      characterData: true
    }); // eslint-disable-line no-new

    notify = function notify() {
      node.data = toggle = !toggle;
    }; // environments with maybe non-completely correct, but existent Promise

  } else if (Promise$1 && Promise$1.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise$1.resolve(undefined);

    notify = function notify() {
      promise.then(flush);
    }; // for other environments - macrotask based on:
    // - setImmediate
    // - MessageChannel
    // - window.postMessag
    // - onreadystatechange
    // - setTimeout

  } else {
    notify = function notify() {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global$c, flush);
    };
  }

  return function (fn) {
    var task = {
      fn: fn,
      next: undefined
    };
    if (last) last.next = task;

    if (!head) {
      head = task;
      notify();
    }

    last = task;
  };
};

var _newPromiseCapability = {};

var aFunction$3 = _aFunction;

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction$3(resolve);
  this.reject = aFunction$3(reject);
}

_newPromiseCapability.f = function (C) {
  return new PromiseCapability(C);
};

var _perform = function _perform(exec) {
  try {
    return {
      e: false,
      v: exec()
    };
  } catch (e) {
    return {
      e: true,
      v: e
    };
  }
};

var global$b = _global.exports;
var navigator = global$b.navigator;

var _userAgent = navigator && navigator.userAgent || '';

var anObject$j = _anObject;
var isObject$a = _isObject;
var newPromiseCapability$1 = _newPromiseCapability;

var _promiseResolve = function _promiseResolve(C, x) {
  anObject$j(C);
  if (isObject$a(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability$1.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

var global$a = _global.exports;
var ctx$1 = _ctx;
var classof$2 = _classof;
var $export$u = _export;
var isObject$9 = _isObject;
var aFunction$2 = _aFunction;
var anInstance$2 = _anInstance;
var forOf$1 = _forOf.exports;
var speciesConstructor$4 = _speciesConstructor;
var task = _task.set;
var microtask = _microtask();
var newPromiseCapabilityModule = _newPromiseCapability;
var perform = _perform;
var userAgent$3 = _userAgent;
var promiseResolve$1 = _promiseResolve;
var PROMISE = 'Promise';
var TypeError$2 = global$a.TypeError;
var process = global$a.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global$a[PROMISE];
var isNode$1 = classof$2(process) == 'process';

var empty$2 = function empty() {
  /* empty */
};

var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;
var USE_NATIVE$1 = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);

    var FakePromise = (promise.constructor = {})[_wks.exports('species')] = function (exec) {
      exec(empty$2, empty$2);
    }; // unhandled rejections tracking support, NodeJS Promise without it fails @@species test


    return (isNode$1 || typeof PromiseRejectionEvent == 'function') && promise.then(empty$2) instanceof FakePromise // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // we can't detect it synchronously, so just check versions
    && v8.indexOf('6.6') !== 0 && userAgent$3.indexOf('Chrome/66') === -1;
  } catch (e) {
    /* empty */
  }
}(); // helpers

var isThenable = function isThenable(it) {
  var then;
  return isObject$9(it) && typeof (then = it.then) == 'function' ? then : false;
};

var notify = function notify(promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;

    var run = function run(reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;

      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }

          if (handler === true) result = value;else {
            if (domain) domain.enter();
            result = handler(value); // may throw

            if (domain) {
              domain.exit();
              exited = true;
            }
          }

          if (result === reaction.promise) {
            reject(TypeError$2('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };

    while (chain.length > i) {
      run(chain[i++]);
    } // variable length - can't use forEach


    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};

var onUnhandled = function onUnhandled(promise) {
  task.call(global$a, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;

    if (unhandled) {
      result = perform(function () {
        if (isNode$1) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global$a.onunhandledrejection) {
          handler({
            promise: promise,
            reason: value
          });
        } else if ((console = global$a.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      }); // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should

      promise._h = isNode$1 || isUnhandled(promise) ? 2 : 1;
    }

    promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};

var isUnhandled = function isUnhandled(promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};

var onHandleUnhandled = function onHandleUnhandled(promise) {
  task.call(global$a, function () {
    var handler;

    if (isNode$1) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global$a.onrejectionhandled) {
      handler({
        promise: promise,
        reason: promise._v
      });
    }
  });
};

var $reject = function $reject(value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap

  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};

var $resolve = function $resolve(value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap

  try {
    if (promise === value) throw TypeError$2("Promise can't be resolved itself");

    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = {
          _w: promise,
          _d: false
        }; // wrap

        try {
          then.call(value, ctx$1($resolve, wrapper, 1), ctx$1($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({
      _w: promise,
      _d: false
    }, e); // wrap
  }
}; // constructor polyfill


if (!USE_NATIVE$1) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance$2(this, $Promise, PROMISE, '_h');
    aFunction$2(executor);
    Internal.call(this);

    try {
      executor(ctx$1($resolve, this, 1), ctx$1($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  }; // eslint-disable-next-line no-unused-vars


  Internal = function Promise(executor) {
    this._c = []; // <- awaiting reactions

    this._a = undefined; // <- checked in isUnhandled reactions

    this._s = 0; // <- state

    this._d = false; // <- done

    this._v = undefined; // <- value

    this._h = 0; // <- rejection state, 0 - default, 1 - handled, 2 - unhandled

    this._n = false; // <- notify
  };

  Internal.prototype = _redefineAll($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor$4(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode$1 ? process.domain : undefined;

      this._c.push(reaction);

      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function _catch(onRejected) {
      return this.then(undefined, onRejected);
    }
  });

  OwnPromiseCapability = function OwnPromiseCapability() {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx$1($resolve, promise, 1);
    this.reject = ctx$1($reject, promise, 1);
  };

  newPromiseCapabilityModule.f = newPromiseCapability = function newPromiseCapability(C) {
    return C === $Promise || C === Wrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
  };
}

$export$u($export$u.G + $export$u.W + $export$u.F * !USE_NATIVE$1, {
  Promise: $Promise
});
_setToStringTag($Promise, PROMISE);
_setSpecies(PROMISE);
Wrapper = _core.exports[PROMISE]; // statics

$export$u($export$u.S + $export$u.F * !USE_NATIVE$1, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export$u($export$u.S + $export$u.F * (!USE_NATIVE$1), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve$1(this, x);
  }
});
$export$u($export$u.S + $export$u.F * !(USE_NATIVE$1 && _iterDetect(function (iter) {
  $Promise.all(iter)['catch'](empty$2);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf$1(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf$1(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});

var $export$t = _export;
var core$1 = _core.exports;
var global$9 = _global.exports;
var speciesConstructor$3 = _speciesConstructor;
var promiseResolve = _promiseResolve;
$export$t($export$t.P + $export$t.R, 'Promise', {
  'finally': function _finally(onFinally) {
    var C = speciesConstructor$3(this, core$1.Promise || global$9.Promise);
    var isFunction = typeof onFinally == 'function';
    return this.then(isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () {
        return x;
      });
    } : onFinally, isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () {
        throw e;
      });
    } : onFinally);
  }
});

var $export$s = _export;
var aFunction$1 = _aFunction;
var anObject$i = _anObject;
var rApply = (_global.exports.Reflect || {}).apply;
var fApply = Function.apply; // MS Edge argumentsList argument is optional

$export$s($export$s.S + $export$s.F * !_fails(function () {
  rApply(function () {
    /* empty */
  });
}), 'Reflect', {
  apply: function apply(target, thisArgument, argumentsList) {
    var T = aFunction$1(target);
    var L = anObject$i(argumentsList);
    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
  }
});

var $export$r = _export;
var create$1 = _objectCreate;
var aFunction = _aFunction;
var anObject$h = _anObject;
var isObject$8 = _isObject;
var fails$4 = _fails;
var bind = _bind;
var rConstruct = (_global.exports.Reflect || {}).construct; // MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it

var NEW_TARGET_BUG = fails$4(function () {
  function F() {
    /* empty */
  }

  return !(rConstruct(function () {
    /* empty */
  }, [], F) instanceof F);
});
var ARGS_BUG = !fails$4(function () {
  rConstruct(function () {
    /* empty */
  });
});
$export$r($export$r.S + $export$r.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args
  /* , newTarget */
  ) {
    aFunction(Target);
    anObject$h(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);

    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0:
          return new Target();

        case 1:
          return new Target(args[0]);

        case 2:
          return new Target(args[0], args[1]);

        case 3:
          return new Target(args[0], args[1], args[2]);

        case 4:
          return new Target(args[0], args[1], args[2], args[3]);
      } // w/o altered newTarget, lot of arguments case


      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    } // with altered newTarget, not support built-in constructors


    var proto = newTarget.prototype;
    var instance = create$1(isObject$8(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject$8(result) ? result : instance;
  }
});

var dP$4 = _objectDp;
var $export$q = _export;
var anObject$g = _anObject;
var toPrimitive$2 = _toPrimitive; // MS Edge has broken Reflect.defineProperty - throwing instead of returning false

$export$q($export$q.S + $export$q.F * _fails(function () {
  // eslint-disable-next-line no-undef
  Reflect.defineProperty(dP$4.f({}, 1, {
    value: 1
  }), 1, {
    value: 2
  });
}), 'Reflect', {
  defineProperty: function defineProperty(target, propertyKey, attributes) {
    anObject$g(target);
    propertyKey = toPrimitive$2(propertyKey, true);
    anObject$g(attributes);

    try {
      dP$4.f(target, propertyKey, attributes);
      return true;
    } catch (e) {
      return false;
    }
  }
});

var $export$p = _export;
var gOPD$5 = _objectGopd.f;
var anObject$f = _anObject;
$export$p($export$p.S, 'Reflect', {
  deleteProperty: function deleteProperty(target, propertyKey) {
    var desc = gOPD$5(anObject$f(target), propertyKey);
    return desc && !desc.configurable ? false : delete target[propertyKey];
  }
});

var gOPD$4 = _objectGopd;
var getPrototypeOf$2 = _objectGpo;
var has$4 = _has;
var $export$o = _export;
var isObject$7 = _isObject;
var anObject$e = _anObject;

function get$1(target, propertyKey
/* , receiver */
) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var desc, proto;
  if (anObject$e(target) === receiver) return target[propertyKey];
  if (desc = gOPD$4.f(target, propertyKey)) return has$4(desc, 'value') ? desc.value : desc.get !== undefined ? desc.get.call(receiver) : undefined;
  if (isObject$7(proto = getPrototypeOf$2(target))) return get$1(proto, propertyKey, receiver);
}

$export$o($export$o.S, 'Reflect', {
  get: get$1
});

var gOPD$3 = _objectGopd;
var $export$n = _export;
var anObject$d = _anObject;
$export$n($export$n.S, 'Reflect', {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
    return gOPD$3.f(anObject$d(target), propertyKey);
  }
});

var $export$m = _export;
var getProto = _objectGpo;
var anObject$c = _anObject;
$export$m($export$m.S, 'Reflect', {
  getPrototypeOf: function getPrototypeOf(target) {
    return getProto(anObject$c(target));
  }
});

var $export$l = _export;
$export$l($export$l.S, 'Reflect', {
  has: function has(target, propertyKey) {
    return propertyKey in target;
  }
});

var $export$k = _export;
var anObject$b = _anObject;
var $isExtensible = Object.isExtensible;
$export$k($export$k.S, 'Reflect', {
  isExtensible: function isExtensible(target) {
    anObject$b(target);
    return $isExtensible ? $isExtensible(target) : true;
  }
});

var $export$j = _export;
$export$j($export$j.S, 'Reflect', {
  ownKeys: _ownKeys
});

var $export$i = _export;
var anObject$a = _anObject;
var $preventExtensions = Object.preventExtensions;
$export$i($export$i.S, 'Reflect', {
  preventExtensions: function preventExtensions(target) {
    anObject$a(target);

    try {
      if ($preventExtensions) $preventExtensions(target);
      return true;
    } catch (e) {
      return false;
    }
  }
});

var dP$3 = _objectDp;
var gOPD$2 = _objectGopd;
var getPrototypeOf$1 = _objectGpo;
var has$3 = _has;
var $export$h = _export;
var createDesc$1 = _propertyDesc;
var anObject$9 = _anObject;
var isObject$6 = _isObject;

function set(target, propertyKey, V
/* , receiver */
) {
  var receiver = arguments.length < 4 ? target : arguments[3];
  var ownDesc = gOPD$2.f(anObject$9(target), propertyKey);
  var existingDescriptor, proto;

  if (!ownDesc) {
    if (isObject$6(proto = getPrototypeOf$1(target))) {
      return set(proto, propertyKey, V, receiver);
    }

    ownDesc = createDesc$1(0);
  }

  if (has$3(ownDesc, 'value')) {
    if (ownDesc.writable === false || !isObject$6(receiver)) return false;

    if (existingDescriptor = gOPD$2.f(receiver, propertyKey)) {
      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
      existingDescriptor.value = V;
      dP$3.f(receiver, propertyKey, existingDescriptor);
    } else dP$3.f(receiver, propertyKey, createDesc$1(0, V));

    return true;
  }

  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
}

$export$h($export$h.S, 'Reflect', {
  set: set
});

var $export$g = _export;
var setProto = _setProto;
if (setProto) $export$g($export$g.S, 'Reflect', {
  setPrototypeOf: function setPrototypeOf(target, proto) {
    setProto.check(target, proto);

    try {
      setProto.set(target, proto);
      return true;
    } catch (e) {
      return false;
    }
  }
});

var isObject$5 = _isObject;
var cof = _cof;
var MATCH$1 = _wks.exports('match');

var _isRegexp = function _isRegexp(it) {
  var isRegExp;
  return isObject$5(it) && ((isRegExp = it[MATCH$1]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};

var anObject$8 = _anObject;

var _flags = function _flags() {
  var that = anObject$8(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};

var global$8 = _global.exports;
var inheritIfRequired = _inheritIfRequired;
var dP$2 = _objectDp.f;
var gOPN$2 = _objectGopn.f;
var isRegExp$2 = _isRegexp;
var $flags$1 = _flags;
var $RegExp = global$8.RegExp;
var Base = $RegExp;
var proto$2 = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g; // "new" creates a new object, old webkit buggy here

var CORRECT_NEW = new $RegExp(re1) !== re1;

if (_descriptors && (!CORRECT_NEW || _fails(function () {
  re2[_wks.exports('match')] = false; // RegExp constructor can alter flags and IsRegExp works correct with @@match

  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = isRegExp$2(p);
    var fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p : inheritIfRequired(CORRECT_NEW ? new Base(piRE && !fiU ? p.source : p, f) : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags$1.call(p) : f), tiRE ? this : proto$2, $RegExp);
  };

  var proxy = function proxy(key) {
    key in $RegExp || dP$2($RegExp, key, {
      configurable: true,
      get: function get() {
        return Base[key];
      },
      set: function set(it) {
        Base[key] = it;
      }
    });
  };

  for (var keys = gOPN$2(Base), i$4 = 0; keys.length > i$4;) {
    proxy(keys[i$4++]);
  }

  proto$2.constructor = $RegExp;
  $RegExp.prototype = proto$2;
  _redefine.exports(global$8, 'RegExp', $RegExp);
}

_setSpecies('RegExp');

if (_descriptors && /./g.flags != 'g') _objectDp.f(RegExp.prototype, 'flags', {
  configurable: true,
  get: _flags
});

var toInteger$4 = _toInteger;
var defined$5 = _defined; // true  -> String#at
// false -> String#codePointAt

var _stringAt = function _stringAt(TO_STRING) {
  return function (that, pos) {
    var s = String(defined$5(that));
    var i = toInteger$4(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

var at = _stringAt(true); // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex

var _advanceStringIndex = function _advanceStringIndex(S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};

var classof$1 = _classof;
var builtinExec = RegExp.prototype.exec; // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec

var _regexpExecAbstract = function _regexpExecAbstract(R, S) {
  var exec = R.exec;

  if (typeof exec === 'function') {
    var result = exec.call(R, S);

    if (_typeof(result) !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }

    return result;
  }

  if (classof$1(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }

  return builtinExec.call(R, S);
};

var regexpFlags = _flags;
var nativeExec = RegExp.prototype.exec; // This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.

var nativeReplace = String.prototype.replace;
var patchedExec = nativeExec;
var LAST_INDEX$1 = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX$1] !== 0 || re2[LAST_INDEX$1] !== 0;
}(); // nonparticipating capturing group, copied from es5-shim's String#split patch.


var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;
var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }

    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX$1];
    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX$1] = re.global ? match.index + match[0].length : lastIndex;
    }

    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

var _regexpExec = patchedExec;

var regexpExec$2 = _regexpExec;
_export({
  target: 'RegExp',
  proto: true,
  forced: regexpExec$2 !== /./.exec
}, {
  exec: regexpExec$2
});

var redefine$3 = _redefine.exports;
var hide$3 = _hide;
var fails$3 = _fails;
var defined$4 = _defined;
var wks$3 = _wks.exports;
var regexpExec$1 = _regexpExec;
var SPECIES = wks$3('species');
var REPLACE_SUPPORTS_NAMED_GROUPS = !fails$3(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;

  re.exec = function () {
    var result = [];
    result.groups = {
      a: '7'
    };
    return result;
  };

  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;

  re.exec = function () {
    return originalExec.apply(this, arguments);
  };

  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
}();

var _fixReWks = function _fixReWks(KEY, length, exec) {
  var SYMBOL = wks$3(KEY);
  var DELEGATES_TO_SYMBOL = !fails$3(function () {
    // String methods call symbol-named RegEp methods
    var O = {};

    O[SYMBOL] = function () {
      return 7;
    };

    return ''[KEY](O) != 7;
  });
  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails$3(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    re.exec = function () {
      execCalled = true;
      return null;
    };

    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};

      re.constructor[SPECIES] = function () {
        return re;
      };
    }

    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS || KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(defined$4, SYMBOL, ''[KEY], function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec$1) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return {
            done: true,
            value: nativeRegExpMethod.call(regexp, str, arg2)
          };
        }

        return {
          done: true,
          value: nativeMethod.call(str, regexp, arg2)
        };
      }

      return {
        done: false
      };
    });
    var strfn = fns[0];
    var rxfn = fns[1];
    redefine$3(String.prototype, KEY, strfn);
    hide$3(RegExp.prototype, SYMBOL, length == 2 // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
    // 21.2.5.11 RegExp.prototype[@@split](string, limit)
    ? function (string, arg) {
      return rxfn.call(string, this, arg);
    } // 21.2.5.6 RegExp.prototype[@@match](string)
    // 21.2.5.9 RegExp.prototype[@@search](string)
    : function (string) {
      return rxfn.call(string, this);
    });
  }
};

var anObject$7 = _anObject;
var toLength$9 = _toLength;
var advanceStringIndex$2 = _advanceStringIndex;
var regExpExec$2 = _regexpExecAbstract; // @@match logic

_fixReWks('match', 1, function (defined, MATCH, $match, maybeCallNative) {
  return [// `String.prototype.match` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.match
  function match(regexp) {
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[MATCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
  }, // `RegExp.prototype[@@match]` method
  // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
  function (regexp) {
    var res = maybeCallNative($match, regexp, this);
    if (res.done) return res.value;
    var rx = anObject$7(regexp);
    var S = String(this);
    if (!rx.global) return regExpExec$2(rx, S);
    var fullUnicode = rx.unicode;
    rx.lastIndex = 0;
    var A = [];
    var n = 0;
    var result;

    while ((result = regExpExec$2(rx, S)) !== null) {
      var matchStr = String(result[0]);
      A[n] = matchStr;
      if (matchStr === '') rx.lastIndex = advanceStringIndex$2(S, toLength$9(rx.lastIndex), fullUnicode);
      n++;
    }

    return n === 0 ? null : A;
  }];
});

var anObject$6 = _anObject;
var toObject$2 = _toObject;
var toLength$8 = _toLength;
var toInteger$3 = _toInteger;
var advanceStringIndex$1 = _advanceStringIndex;
var regExpExec$1 = _regexpExecAbstract;
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function maybeToString(it) {
  return it === undefined ? it : String(it);
}; // @@replace logic


_fixReWks('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [// `String.prototype.replace` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.replace
  function replace(searchValue, replaceValue) {
    var O = defined(this);
    var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
    return fn !== undefined ? fn.call(searchValue, O, replaceValue) : $replace.call(String(O), searchValue, replaceValue);
  }, // `RegExp.prototype[@@replace]` method
  // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
  function (regexp, replaceValue) {
    var res = maybeCallNative($replace, regexp, this, replaceValue);
    if (res.done) return res.value;
    var rx = anObject$6(regexp);
    var S = String(this);
    var functionalReplace = typeof replaceValue === 'function';
    if (!functionalReplace) replaceValue = String(replaceValue);
    var global = rx.global;

    if (global) {
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
    }

    var results = [];

    while (true) {
      var result = regExpExec$1(rx, S);
      if (result === null) break;
      results.push(result);
      if (!global) break;
      var matchStr = String(result[0]);
      if (matchStr === '') rx.lastIndex = advanceStringIndex$1(S, toLength$8(rx.lastIndex), fullUnicode);
    }

    var accumulatedResult = '';
    var nextSourcePosition = 0;

    for (var i = 0; i < results.length; i++) {
      result = results[i];
      var matched = String(result[0]);
      var position = max(min(toInteger$3(result.index), S.length), 0);
      var captures = []; // NOTE: This is equivalent to
      //   captures = result.slice(1).map(maybeToString)
      // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
      // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
      // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.

      for (var j = 1; j < result.length; j++) {
        captures.push(maybeToString(result[j]));
      }

      var namedCaptures = result.groups;

      if (functionalReplace) {
        var replacerArgs = [matched].concat(captures, position, S);
        if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
        var replacement = String(replaceValue.apply(undefined, replacerArgs));
      } else {
        replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
      }

      if (position >= nextSourcePosition) {
        accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
        nextSourcePosition = position + matched.length;
      }
    }

    return accumulatedResult + S.slice(nextSourcePosition);
  }]; // https://tc39.github.io/ecma262/#sec-getsubstitution

  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;

    if (namedCaptures !== undefined) {
      namedCaptures = toObject$2(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }

    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;

      switch (ch.charAt(0)) {
        case '$':
          return '$';

        case '&':
          return matched;

        case '`':
          return str.slice(0, position);

        case "'":
          return str.slice(tailPos);

        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;

        default:
          // \d\d?
          var n = +ch;
          if (n === 0) return match;

          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }

          capture = captures[n - 1];
      }

      return capture === undefined ? '' : capture;
    });
  }
});

var isRegExp$1 = _isRegexp;
var anObject$5 = _anObject;
var speciesConstructor$2 = _speciesConstructor;
var advanceStringIndex = _advanceStringIndex;
var toLength$7 = _toLength;
var callRegExpExec = _regexpExecAbstract;
var regexpExec = _regexpExec;
var fails$2 = _fails;
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff; // babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError

var SUPPORTS_Y = !fails$2(function () {
  RegExp(MAX_UINT32, 'y');
}); // @@split logic

_fixReWks('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;

  if ('abbc'[$SPLIT](/(b)*/)[1] == 'c' || 'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 || 'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 || '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 || '.'[$SPLIT](/()()/)[LENGTH] > 1 || ''[$SPLIT](/.?/)[LENGTH]) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function internalSplit(separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return []; // If `separator` is not a regex, use native split

      if (!isRegExp$1(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0; // Make `global` and avoid `lastIndex` issues by working with a copy

      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;

      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];

        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }

        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }

      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));

      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    }; // Chakra, V8

  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function internalSplit(separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [// `String.prototype.split` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.split
  function split(separator, limit) {
    var O = defined(this);
    var splitter = separator == undefined ? undefined : separator[SPLIT];
    return splitter !== undefined ? splitter.call(separator, O, limit) : internalSplit.call(String(O), separator, limit);
  }, // `RegExp.prototype[@@split]` method
  // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
  //
  // NOTE: This cannot be properly polyfilled in engines that don't support
  // the 'y' flag.
  function (regexp, limit) {
    var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
    if (res.done) return res.value;
    var rx = anObject$5(regexp);
    var S = String(this);
    var C = speciesConstructor$2(rx, RegExp);
    var unicodeMatching = rx.unicode;
    var flags = (rx.ignoreCase ? 'i' : '') + (rx.multiline ? 'm' : '') + (rx.unicode ? 'u' : '') + (SUPPORTS_Y ? 'y' : 'g'); // ^(? + rx + ) is needed, in combination with some S slicing, to
    // simulate the 'y' flag.

    var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
    var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
    if (lim === 0) return [];
    if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
    var p = 0;
    var q = 0;
    var A = [];

    while (q < S.length) {
      splitter.lastIndex = SUPPORTS_Y ? q : 0;
      var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
      var e;

      if (z === null || (e = $min(toLength$7(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p) {
        q = advanceStringIndex(S, q, unicodeMatching);
      } else {
        A.push(S.slice(p, q));
        if (A.length === lim) return A;

        for (var i = 1; i <= z.length - 1; i++) {
          A.push(z[i]);
          if (A.length === lim) return A;
        }

        q = p = e;
      }
    }

    A.push(S.slice(p));
    return A;
  }];
});

var anObject$4 = _anObject;
var sameValue = _sameValue;
var regExpExec = _regexpExecAbstract; // @@search logic

_fixReWks('search', 1, function (defined, SEARCH, $search, maybeCallNative) {
  return [// `String.prototype.search` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.search
  function search(regexp) {
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[SEARCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
  }, // `RegExp.prototype[@@search]` method
  // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
  function (regexp) {
    var res = maybeCallNative($search, regexp, this);
    if (res.done) return res.value;
    var rx = anObject$4(regexp);
    var S = String(this);
    var previousLastIndex = rx.lastIndex;
    if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
    var result = regExpExec(rx, S);
    if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
    return result === null ? -1 : result.index;
  }];
});

var anObject$3 = _anObject;
var $flags = _flags;
var DESCRIPTORS$1 = _descriptors;
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function define(fn) {
  _redefine.exports(RegExp.prototype, TO_STRING, fn, true);
}; // 21.2.5.14 RegExp.prototype.toString()


if (_fails(function () {
  return $toString.call({
    source: 'a',
    flags: 'b'
  }) != '/a/b';
})) {
  define(function toString() {
    var R = anObject$3(this);
    return '/'.concat(R.source, '/', 'flags' in R ? R.flags : !DESCRIPTORS$1 && R instanceof RegExp ? $flags.call(R) : undefined);
  }); // FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}

var strong = _collectionStrong;
var validate$5 = _validateCollection;
var SET = 'Set'; // 23.2 Set Objects

_collection(SET, function (get) {
  return function Set() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate$5(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);

var _wksExt = {};

_wksExt.f = _wks.exports;

var global$7 = _global.exports;
var core = _core.exports;
var wksExt$1 = _wksExt;
var defineProperty = _objectDp.f;

var _wksDefine = function _wksDefine(name) {
  var $Symbol = core.Symbol || (core.Symbol = global$7.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, {
    value: wksExt$1.f(name)
  });
};

var getKeys$1 = _objectKeys;
var gOPS = _objectGops;
var pIE = _objectPie;

var _enumKeys = function _enumKeys(it) {
  var result = getKeys$1(it);
  var getSymbols = gOPS.f;

  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;

    while (symbols.length > i) {
      if (isEnum.call(it, key = symbols[i++])) result.push(key);
    }
  }

  return result;
};

var global$6 = _global.exports;
var has$2 = _has;
var DESCRIPTORS = _descriptors;
var $export$f = _export;
var redefine$2 = _redefine.exports;
var META = _meta.exports.KEY;
var $fails = _fails;
var shared = _shared.exports;
var setToStringTag = _setToStringTag;
var uid$2 = _uid;
var wks$2 = _wks.exports;
var wksExt = _wksExt;
var wksDefine = _wksDefine;
var enumKeys = _enumKeys;
var isArray = _isArray;
var anObject$2 = _anObject;
var isObject$4 = _isObject;
var toObject$1 = _toObject;
var toIObject$1 = _toIobject;
var toPrimitive$1 = _toPrimitive;
var createDesc = _propertyDesc;
var _create = _objectCreate;
var gOPNExt = _objectGopnExt;
var $GOPD$1 = _objectGopd;
var $GOPS = _objectGops;
var $DP$1 = _objectDp;
var $keys = _objectKeys;
var gOPD$1 = $GOPD$1.f;
var dP$1 = $DP$1.f;
var gOPN$1 = gOPNExt.f;
var $Symbol = global$6.Symbol;
var $JSON = global$6.JSON;

var _stringify = $JSON && $JSON.stringify;

var PROTOTYPE$1 = 'prototype';
var HIDDEN = wks$2('_hidden');
var TO_PRIMITIVE = wks$2('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE$1];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global$6.QObject; // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173

var setter = !QObject || !QObject[PROTOTYPE$1] || !QObject[PROTOTYPE$1].findChild; // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687

var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP$1({}, 'a', {
    get: function get() {
      return dP$1(this, 'a', {
        value: 7
      }).a;
    }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD$1(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP$1(it, key, D);
  if (protoDesc && it !== ObjectProto) dP$1(ObjectProto, key, protoDesc);
} : dP$1;

var wrap$1 = function wrap(tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE$1]);

  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && _typeof($Symbol.iterator) == 'symbol' ? function (it) {
  return _typeof(it) == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject$2(it);
  key = toPrimitive$1(key, true);
  anObject$2(D);

  if (has$2(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has$2(it, HIDDEN)) dP$1(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has$2(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, {
        enumerable: createDesc(0, false)
      });
    }

    return setSymbolDesc(it, key, D);
  }

  return dP$1(it, key, D);
};

var $defineProperties = function defineProperties(it, P) {
  anObject$2(it);
  var keys = enumKeys(P = toIObject$1(P));
  var i = 0;
  var l = keys.length;
  var key;

  while (l > i) {
    $defineProperty(it, key = keys[i++], P[key]);
  }

  return it;
};

var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};

var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive$1(key, true));
  if (this === ObjectProto && has$2(AllSymbols, key) && !has$2(OPSymbols, key)) return false;
  return E || !has$2(this, key) || !has$2(AllSymbols, key) || has$2(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject$1(it);
  key = toPrimitive$1(key, true);
  if (it === ObjectProto && has$2(AllSymbols, key) && !has$2(OPSymbols, key)) return;
  var D = gOPD$1(it, key);
  if (D && has$2(AllSymbols, key) && !(has$2(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};

var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN$1(toIObject$1(it));
  var result = [];
  var i = 0;
  var key;

  while (names.length > i) {
    if (!has$2(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  }

  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN$1(IS_OP ? OPSymbols : toIObject$1(it));
  var result = [];
  var i = 0;
  var key;

  while (names.length > i) {
    if (has$2(AllSymbols, key = names[i++]) && (IS_OP ? has$2(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  }

  return result;
}; // 19.4.1.1 Symbol([description])


if (!USE_NATIVE) {
  $Symbol = function _Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid$2(arguments.length > 0 ? arguments[0] : undefined);

    var $set = function $set(value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has$2(this, HIDDEN) && has$2(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };

    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, {
      configurable: true,
      set: $set
    });
    return wrap$1(tag);
  };

  redefine$2($Symbol[PROTOTYPE$1], 'toString', function toString() {
    return this._k;
  });
  $GOPD$1.f = $getOwnPropertyDescriptor;
  $DP$1.f = $defineProperty;
  _objectGopn.f = gOPNExt.f = $getOwnPropertyNames;
  _objectPie.f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !_library) {
    redefine$2(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap$1(wks$2(name));
  };
}

$export$f($export$f.G + $export$f.W + $export$f.F * !USE_NATIVE, {
  Symbol: $Symbol
});

for (var es6Symbols = // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), j = 0; es6Symbols.length > j;) {
  wks$2(es6Symbols[j++]);
}

for (var wellKnownSymbols = $keys(wks$2.store), k = 0; wellKnownSymbols.length > k;) {
  wksDefine(wellKnownSymbols[k++]);
}

$export$f($export$f.S + $export$f.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function _for(key) {
    return has$2(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');

    for (var key in SymbolRegistry) {
      if (SymbolRegistry[key] === sym) return key;
    }
  },
  useSetter: function useSetter() {
    setter = true;
  },
  useSimple: function useSimple() {
    setter = false;
  }
});
$export$f($export$f.S + $export$f.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
}); // Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443

var FAILS_ON_PRIMITIVES = $fails(function () {
  $GOPS.f(1);
});
$export$f($export$f.S + $export$f.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject$1(it));
  }
}); // 24.3.2 JSON.stringify(value [, replacer [, space]])

$JSON && $export$f($export$f.S + $export$f.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol(); // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols

  return _stringify([S]) != '[null]' || _stringify({
    a: S
  }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;

    while (arguments.length > i) {
      args.push(arguments[i++]);
    }

    $replacer = replacer = args[1];
    if (!isObject$4(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined

    if (!isArray(replacer)) replacer = function replacer(key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
}); // 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)

$Symbol[PROTOTYPE$1][TO_PRIMITIVE] || _hide($Symbol[PROTOTYPE$1], TO_PRIMITIVE, $Symbol[PROTOTYPE$1].valueOf); // 19.4.3.5 Symbol.prototype[@@toStringTag]

setToStringTag($Symbol, 'Symbol'); // 20.2.1.9 Math[@@toStringTag]

setToStringTag(Math, 'Math', true); // 24.3.3 JSON[@@toStringTag]

setToStringTag(global$6.JSON, 'JSON', true);

_wksDefine('asyncIterator');

var $export$e = _export;
var fails$1 = _fails;
var defined$3 = _defined;
var quot$3 = /"/g; // B.2.3.2.1 CreateHTML(string, tag, attribute, value)

var createHTML = function createHTML(string, tag, attribute, value) {
  var S = String(defined$3(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot$3, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};

var _stringHtml = function _stringHtml(NAME, exec) {
  var O = {};
  O[NAME] = exec(createHTML);
  $export$e($export$e.P + $export$e.F * fails$1(function () {
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};

_stringHtml('anchor', function (createHTML) {
  return function anchor(name) {
    return createHTML(this, 'a', 'name', name);
  };
});

_stringHtml('big', function (createHTML) {
  return function big() {
    return createHTML(this, 'big', '', '');
  };
});

_stringHtml('blink', function (createHTML) {
  return function blink() {
    return createHTML(this, 'blink', '', '');
  };
});

_stringHtml('bold', function (createHTML) {
  return function bold() {
    return createHTML(this, 'b', '', '');
  };
});

var $export$d = _export;
var $at$1 = _stringAt(false);
$export$d($export$d.P, 'String', {
  // 21.1.3.3 String.prototype.codePointAt(pos)
  codePointAt: function codePointAt(pos) {
    return $at$1(this, pos);
  }
});

var isRegExp = _isRegexp;
var defined$2 = _defined;

var _stringContext = function _stringContext(that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined$2(that));
};

var MATCH = _wks.exports('match');

var _failsIsRegexp = function _failsIsRegexp(KEY) {
  var re = /./;

  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) {
      /* empty */
    }
  }

  return true;
};

var $export$c = _export;
var toLength$6 = _toLength;
var context$2 = _stringContext;
var ENDS_WITH = 'endsWith';
var $endsWith = ''[ENDS_WITH];
$export$c($export$c.P + $export$c.F * _failsIsRegexp(ENDS_WITH), 'String', {
  endsWith: function endsWith(searchString
  /* , endPosition = @length */
  ) {
    var that = context$2(this, searchString, ENDS_WITH);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = toLength$6(that.length);
    var end = endPosition === undefined ? len : Math.min(toLength$6(endPosition), len);
    var search = String(searchString);
    return $endsWith ? $endsWith.call(that, search, end) : that.slice(end - search.length, end) === search;
  }
});

_stringHtml('fixed', function (createHTML) {
  return function fixed() {
    return createHTML(this, 'tt', '', '');
  };
});

_stringHtml('fontcolor', function (createHTML) {
  return function fontcolor(color) {
    return createHTML(this, 'font', 'color', color);
  };
});

_stringHtml('fontsize', function (createHTML) {
  return function fontsize(size) {
    return createHTML(this, 'font', 'size', size);
  };
});

var $export$b = _export;
var toAbsoluteIndex$2 = _toAbsoluteIndex;
var fromCharCode = String.fromCharCode;
var $fromCodePoint = String.fromCodePoint; // length should be 1, old FF problem

$export$b($export$b.S + $export$b.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
  // 21.1.2.2 String.fromCodePoint(...codePoints)
  fromCodePoint: function fromCodePoint(x) {
    // eslint-disable-line no-unused-vars
    var res = [];
    var aLen = arguments.length;
    var i = 0;
    var code;

    while (aLen > i) {
      code = +arguments[i++];
      if (toAbsoluteIndex$2(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
      res.push(code < 0x10000 ? fromCharCode(code) : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00));
    }

    return res.join('');
  }
});

var $export$a = _export;
var context$1 = _stringContext;
var INCLUDES = 'includes';
$export$a($export$a.P + $export$a.F * _failsIsRegexp(INCLUDES), 'String', {
  includes: function includes(searchString
  /* , position = 0 */
  ) {
    return !!~context$1(this, searchString, INCLUDES).indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});

_stringHtml('italics', function (createHTML) {
  return function italics() {
    return createHTML(this, 'i', '', '');
  };
});

var $at = _stringAt(true); // 21.1.3.27 String.prototype[@@iterator]()

_iterDefine(String, 'String', function (iterated) {
  this._t = String(iterated); // target

  this._i = 0; // next index
  // 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return {
    value: undefined,
    done: true
  };
  point = $at(O, index);
  this._i += point.length;
  return {
    value: point,
    done: false
  };
});

_stringHtml('link', function (createHTML) {
  return function link(url) {
    return createHTML(this, 'a', 'href', url);
  };
});

var toInteger$2 = _toInteger;
var defined$1 = _defined;

var _stringRepeat = function repeat(count) {
  var str = String(defined$1(this));
  var res = '';
  var n = toInteger$2(count);
  if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");

  for (; n > 0; (n >>>= 1) && (str += str)) {
    if (n & 1) res += str;
  }

  return res;
};

var toLength$5 = _toLength;
var repeat = _stringRepeat;
var defined = _defined;

var _stringPad = function _stringPad(that, maxLength, fillString, left) {
  var S = String(defined(that));
  var stringLength = S.length;
  var fillStr = fillString === undefined ? ' ' : String(fillString);
  var intMaxLength = toLength$5(maxLength);
  if (intMaxLength <= stringLength || fillStr == '') return S;
  var fillLen = intMaxLength - stringLength;
  var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
  return left ? stringFiller + S : S + stringFiller;
};

var $export$9 = _export;
var $pad$1 = _stringPad;
var userAgent$2 = _userAgent; // https://github.com/zloirock/core-js/issues/280

var WEBKIT_BUG$1 = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent$2);
$export$9($export$9.P + $export$9.F * WEBKIT_BUG$1, 'String', {
  padStart: function padStart(maxLength
  /* , fillString = ' ' */
  ) {
    return $pad$1(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
  }
});

var $export$8 = _export;
var $pad = _stringPad;
var userAgent$1 = _userAgent; // https://github.com/zloirock/core-js/issues/280

var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent$1);
$export$8($export$8.P + $export$8.F * WEBKIT_BUG, 'String', {
  padEnd: function padEnd(maxLength
  /* , fillString = ' ' */
  ) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
  }
});

var $export$7 = _export;
var toIObject = _toIobject;
var toLength$4 = _toLength;
$export$7($export$7.S, 'String', {
  // 21.1.2.4 String.raw(callSite, ...substitutions)
  raw: function raw(callSite) {
    var tpl = toIObject(callSite.raw);
    var len = toLength$4(tpl.length);
    var aLen = arguments.length;
    var res = [];
    var i = 0;

    while (len > i) {
      res.push(String(tpl[i++]));
      if (i < aLen) res.push(String(arguments[i]));
    }

    return res.join('');
  }
});

var $export$6 = _export;
$export$6($export$6.P, 'String', {
  // 21.1.3.13 String.prototype.repeat(count)
  repeat: _stringRepeat
});

_stringHtml('small', function (createHTML) {
  return function small() {
    return createHTML(this, 'small', '', '');
  };
});

var $export$5 = _export;
var toLength$3 = _toLength;
var context = _stringContext;
var STARTS_WITH = 'startsWith';
var $startsWith = ''[STARTS_WITH];
$export$5($export$5.P + $export$5.F * _failsIsRegexp(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString
  /* , position = 0 */
  ) {
    var that = context(this, searchString, STARTS_WITH);
    var index = toLength$3(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return $startsWith ? $startsWith.call(that, search, index) : that.slice(index, index + search.length) === search;
  }
});

_stringHtml('strike', function (createHTML) {
  return function strike() {
    return createHTML(this, 'strike', '', '');
  };
});

_stringHtml('sub', function (createHTML) {
  return function sub() {
    return createHTML(this, 'sub', '', '');
  };
});

_stringHtml('sup', function (createHTML) {
  return function sup() {
    return createHTML(this, 'sup', '', '');
  };
});

_stringTrim('trim', function ($trim) {
  return function trim() {
    return $trim(this, 3);
  };
});

_stringTrim('trimLeft', function ($trim) {
  return function trimLeft() {
    return $trim(this, 1);
  };
}, 'trimStart');

_stringTrim('trimRight', function ($trim) {
  return function trimRight() {
    return $trim(this, 2);
  };
}, 'trimEnd');

var global$5 = _global.exports;
var hide$2 = _hide;
var uid$1 = _uid;
var TYPED = uid$1('typed_array');
var VIEW$2 = uid$1('view');
var ABV = !!(global$5.ArrayBuffer && global$5.DataView);
var CONSTR = ABV;
var i$3 = 0;
var l = 9;
var Typed;
var TypedArrayConstructors = 'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'.split(',');

while (i$3 < l) {
  if (Typed = global$5[TypedArrayConstructors[i$3++]]) {
    hide$2(Typed.prototype, TYPED, true);
    hide$2(Typed.prototype, VIEW$2, true);
  } else CONSTR = false;
}

var _typed = {
  ABV: ABV,
  CONSTR: CONSTR,
  TYPED: TYPED,
  VIEW: VIEW$2
};

var _typedBuffer = {};

var toInteger$1 = _toInteger;
var toLength$2 = _toLength;

var _toIndex = function _toIndex(it) {
  if (it === undefined) return 0;
  var number = toInteger$1(it);
  var length = toLength$2(number);
  if (number !== length) throw RangeError('Wrong length!');
  return length;
};

(function (exports) {

  var global = _global.exports;
  var DESCRIPTORS = _descriptors;
  var $typed = _typed;
  var hide = _hide;
  var redefineAll = _redefineAll;
  var fails = _fails;
  var anInstance = _anInstance;
  var toInteger = _toInteger;
  var toLength = _toLength;
  var toIndex = _toIndex;
  var gOPN = _objectGopn.f;
  var dP = _objectDp.f;
  var arrayFill = _arrayFill;
  var setToStringTag = _setToStringTag;
  var ARRAY_BUFFER = 'ArrayBuffer';
  var DATA_VIEW = 'DataView';
  var PROTOTYPE = 'prototype';
  var WRONG_LENGTH = 'Wrong length!';
  var WRONG_INDEX = 'Wrong index!';
  var $ArrayBuffer = global[ARRAY_BUFFER];
  var $DataView = global[DATA_VIEW];
  var Math = global.Math;
  var RangeError = global.RangeError; // eslint-disable-next-line no-shadow-restricted-names

  var Infinity = global.Infinity;
  var BaseBuffer = $ArrayBuffer;
  var abs = Math.abs;
  var pow = Math.pow;
  var floor = Math.floor;
  var log = Math.log;
  var LN2 = Math.LN2;
  var BUFFER = 'buffer';
  var BYTE_LENGTH = 'byteLength';
  var BYTE_OFFSET = 'byteOffset';
  var $BUFFER = DESCRIPTORS ? '_b' : BUFFER;
  var $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;
  var $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET; // IEEE754 conversions based on https://github.com/feross/ieee754

  function packIEEE754(value, mLen, nBytes) {
    var buffer = new Array(nBytes);
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
    var i = 0;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    var e, m, c;
    value = abs(value); // eslint-disable-next-line no-self-compare

    if (value != value || value === Infinity) {
      // eslint-disable-next-line no-self-compare
      m = value != value ? 1 : 0;
      e = eMax;
    } else {
      e = floor(log(value) / LN2);

      if (value * (c = pow(2, -e)) < 1) {
        e--;
        c *= 2;
      }

      if (e + eBias >= 1) {
        value += rt / c;
      } else {
        value += rt * pow(2, 1 - eBias);
      }

      if (value * c >= 2) {
        e++;
        c /= 2;
      }

      if (e + eBias >= eMax) {
        m = 0;
        e = eMax;
      } else if (e + eBias >= 1) {
        m = (value * c - 1) * pow(2, mLen);
        e = e + eBias;
      } else {
        m = value * pow(2, eBias - 1) * pow(2, mLen);
        e = 0;
      }
    }

    for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8) {
    }

    e = e << mLen | m;
    eLen += mLen;

    for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8) {
    }

    buffer[--i] |= s * 128;
    return buffer;
  }

  function unpackIEEE754(buffer, mLen, nBytes) {
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = eLen - 7;
    var i = nBytes - 1;
    var s = buffer[i--];
    var e = s & 127;
    var m;
    s >>= 7;

    for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8) {
    }

    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;

    for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8) {
    }

    if (e === 0) {
      e = 1 - eBias;
    } else if (e === eMax) {
      return m ? NaN : s ? -Infinity : Infinity;
    } else {
      m = m + pow(2, mLen);
      e = e - eBias;
    }

    return (s ? -1 : 1) * m * pow(2, e - mLen);
  }

  function unpackI32(bytes) {
    return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
  }

  function packI8(it) {
    return [it & 0xff];
  }

  function packI16(it) {
    return [it & 0xff, it >> 8 & 0xff];
  }

  function packI32(it) {
    return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
  }

  function packF64(it) {
    return packIEEE754(it, 52, 8);
  }

  function packF32(it) {
    return packIEEE754(it, 23, 4);
  }

  function addGetter(C, key, internal) {
    dP(C[PROTOTYPE], key, {
      get: function get() {
        return this[internal];
      }
    });
  }

  function get(view, bytes, index, isLittleEndian) {
    var numIndex = +index;
    var intIndex = toIndex(numIndex);
    if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
    var store = view[$BUFFER]._b;
    var start = intIndex + view[$OFFSET];
    var pack = store.slice(start, start + bytes);
    return isLittleEndian ? pack : pack.reverse();
  }

  function set(view, bytes, index, conversion, value, isLittleEndian) {
    var numIndex = +index;
    var intIndex = toIndex(numIndex);
    if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
    var store = view[$BUFFER]._b;
    var start = intIndex + view[$OFFSET];
    var pack = conversion(+value);

    for (var i = 0; i < bytes; i++) {
      store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
    }
  }

  if (!$typed.ABV) {
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
      var byteLength = toIndex(length);
      this._b = arrayFill.call(new Array(byteLength), 0);
      this[$LENGTH] = byteLength;
    };

    $DataView = function DataView(buffer, byteOffset, byteLength) {
      anInstance(this, $DataView, DATA_VIEW);
      anInstance(buffer, $ArrayBuffer, DATA_VIEW);
      var bufferLength = buffer[$LENGTH];
      var offset = toInteger(byteOffset);
      if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
      byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
      if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
      this[$BUFFER] = buffer;
      this[$OFFSET] = offset;
      this[$LENGTH] = byteLength;
    };

    if (DESCRIPTORS) {
      addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
      addGetter($DataView, BUFFER, '_b');
      addGetter($DataView, BYTE_LENGTH, '_l');
      addGetter($DataView, BYTE_OFFSET, '_o');
    }

    redefineAll($DataView[PROTOTYPE], {
      getInt8: function getInt8(byteOffset) {
        return get(this, 1, byteOffset)[0] << 24 >> 24;
      },
      getUint8: function getUint8(byteOffset) {
        return get(this, 1, byteOffset)[0];
      },
      getInt16: function getInt16(byteOffset
      /* , littleEndian */
      ) {
        var bytes = get(this, 2, byteOffset, arguments[1]);
        return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
      },
      getUint16: function getUint16(byteOffset
      /* , littleEndian */
      ) {
        var bytes = get(this, 2, byteOffset, arguments[1]);
        return bytes[1] << 8 | bytes[0];
      },
      getInt32: function getInt32(byteOffset
      /* , littleEndian */
      ) {
        return unpackI32(get(this, 4, byteOffset, arguments[1]));
      },
      getUint32: function getUint32(byteOffset
      /* , littleEndian */
      ) {
        return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
      },
      getFloat32: function getFloat32(byteOffset
      /* , littleEndian */
      ) {
        return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
      },
      getFloat64: function getFloat64(byteOffset
      /* , littleEndian */
      ) {
        return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
      },
      setInt8: function setInt8(byteOffset, value) {
        set(this, 1, byteOffset, packI8, value);
      },
      setUint8: function setUint8(byteOffset, value) {
        set(this, 1, byteOffset, packI8, value);
      },
      setInt16: function setInt16(byteOffset, value
      /* , littleEndian */
      ) {
        set(this, 2, byteOffset, packI16, value, arguments[2]);
      },
      setUint16: function setUint16(byteOffset, value
      /* , littleEndian */
      ) {
        set(this, 2, byteOffset, packI16, value, arguments[2]);
      },
      setInt32: function setInt32(byteOffset, value
      /* , littleEndian */
      ) {
        set(this, 4, byteOffset, packI32, value, arguments[2]);
      },
      setUint32: function setUint32(byteOffset, value
      /* , littleEndian */
      ) {
        set(this, 4, byteOffset, packI32, value, arguments[2]);
      },
      setFloat32: function setFloat32(byteOffset, value
      /* , littleEndian */
      ) {
        set(this, 4, byteOffset, packF32, value, arguments[2]);
      },
      setFloat64: function setFloat64(byteOffset, value
      /* , littleEndian */
      ) {
        set(this, 8, byteOffset, packF64, value, arguments[2]);
      }
    });
  } else {
    if (!fails(function () {
      $ArrayBuffer(1);
    }) || !fails(function () {
      new $ArrayBuffer(-1); // eslint-disable-line no-new
    }) || fails(function () {
      new $ArrayBuffer(); // eslint-disable-line no-new

      new $ArrayBuffer(1.5); // eslint-disable-line no-new

      new $ArrayBuffer(NaN); // eslint-disable-line no-new

      return $ArrayBuffer.name != ARRAY_BUFFER;
    })) {
      $ArrayBuffer = function ArrayBuffer(length) {
        anInstance(this, $ArrayBuffer);
        return new BaseBuffer(toIndex(length));
      };

      var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];

      for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
        if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
      }

      ArrayBufferProto.constructor = $ArrayBuffer;
    } // iOS Safari 7.x bug


    var view = new $DataView(new $ArrayBuffer(2));
    var $setInt8 = $DataView[PROTOTYPE].setInt8;
    view.setInt8(0, 2147483648);
    view.setInt8(1, 2147483649);
    if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
      setInt8: function setInt8(byteOffset, value) {
        $setInt8.call(this, byteOffset, value << 24 >> 24);
      },
      setUint8: function setUint8(byteOffset, value) {
        $setInt8.call(this, byteOffset, value << 24 >> 24);
      }
    }, true);
  }

  setToStringTag($ArrayBuffer, ARRAY_BUFFER);
  setToStringTag($DataView, DATA_VIEW);
  hide($DataView[PROTOTYPE], $typed.VIEW, true);
  exports[ARRAY_BUFFER] = $ArrayBuffer;
  exports[DATA_VIEW] = $DataView;
})(_typedBuffer);

var $export$4 = _export;
var $typed$1 = _typed;
var buffer = _typedBuffer;
var anObject$1 = _anObject;
var toAbsoluteIndex$1 = _toAbsoluteIndex;
var toLength$1 = _toLength;
var isObject$3 = _isObject;
var ArrayBuffer = _global.exports.ArrayBuffer;
var speciesConstructor$1 = _speciesConstructor;
var $ArrayBuffer$1 = buffer.ArrayBuffer;
var $DataView$1 = buffer.DataView;
var $isView = $typed$1.ABV && ArrayBuffer.isView;
var $slice$1 = $ArrayBuffer$1.prototype.slice;
var VIEW$1 = $typed$1.VIEW;
var ARRAY_BUFFER$1 = 'ArrayBuffer';
$export$4($export$4.G + $export$4.W + $export$4.F * (ArrayBuffer !== $ArrayBuffer$1), {
  ArrayBuffer: $ArrayBuffer$1
});
$export$4($export$4.S + $export$4.F * !$typed$1.CONSTR, ARRAY_BUFFER$1, {
  // 24.1.3.1 ArrayBuffer.isView(arg)
  isView: function isView(it) {
    return $isView && $isView(it) || isObject$3(it) && VIEW$1 in it;
  }
});
$export$4($export$4.P + $export$4.U + $export$4.F * _fails(function () {
  return !new $ArrayBuffer$1(2).slice(1, undefined).byteLength;
}), ARRAY_BUFFER$1, {
  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
  slice: function slice(start, end) {
    if ($slice$1 !== undefined && end === undefined) return $slice$1.call(anObject$1(this), start); // FF fix

    var len = anObject$1(this).byteLength;
    var first = toAbsoluteIndex$1(start, len);
    var fin = toAbsoluteIndex$1(end === undefined ? len : end, len);
    var result = new (speciesConstructor$1(this, $ArrayBuffer$1))(toLength$1(fin - first));
    var viewS = new $DataView$1(this);
    var viewT = new $DataView$1(result);
    var index = 0;

    while (first < fin) {
      viewT.setUint8(index++, viewS.getUint8(first++));
    }

    return result;
  }
});
_setSpecies(ARRAY_BUFFER$1);

var $export$3 = _export;
$export$3($export$3.G + $export$3.W + $export$3.F * !_typed.ABV, {
  DataView: _typedBuffer.DataView
});

var _typedArray = {exports: {}};

if (_descriptors) {
  var LIBRARY = _library;
  var global$4 = _global.exports;
  var fails = _fails;
  var $export$2 = _export;
  var $typed = _typed;
  var $buffer = _typedBuffer;
  var ctx = _ctx;
  var anInstance$1 = _anInstance;
  var propertyDesc = _propertyDesc;
  var hide$1 = _hide;
  var redefineAll$1 = _redefineAll;
  var toInteger = _toInteger;
  var toLength = _toLength;
  var toIndex = _toIndex;
  var toAbsoluteIndex = _toAbsoluteIndex;
  var toPrimitive = _toPrimitive;
  var has$1 = _has;
  var classof = _classof;
  var isObject$2 = _isObject;
  var toObject = _toObject;
  var isArrayIter = _isArrayIter;
  var create = _objectCreate;
  var getPrototypeOf = _objectGpo;
  var gOPN = _objectGopn.f;
  var getIterFn = core_getIteratorMethod;
  var uid = _uid;
  var wks$1 = _wks.exports;
  var createArrayMethod$1 = _arrayMethods;
  var createArrayIncludes = _arrayIncludes;
  var speciesConstructor = _speciesConstructor;
  var ArrayIterators = es6_array_iterator;
  var Iterators$1 = _iterators;
  var $iterDetect = _iterDetect;
  var setSpecies = _setSpecies;
  var arrayFill = _arrayFill;
  var arrayCopyWithin = _arrayCopyWithin;
  var $DP = _objectDp;
  var $GOPD = _objectGopd;
  var dP = $DP.f;
  var gOPD = $GOPD.f;
  var RangeError$1 = global$4.RangeError;
  var TypeError$1 = global$4.TypeError;
  var Uint8Array$1 = global$4.Uint8Array;
  var ARRAY_BUFFER = 'ArrayBuffer';
  var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
  var PROTOTYPE = 'prototype';
  var ArrayProto = Array[PROTOTYPE];
  var $ArrayBuffer = $buffer.ArrayBuffer;
  var $DataView = $buffer.DataView;
  var arrayForEach = createArrayMethod$1(0);
  var arrayFilter = createArrayMethod$1(2);
  var arraySome = createArrayMethod$1(3);
  var arrayEvery = createArrayMethod$1(4);
  var arrayFind$1 = createArrayMethod$1(5);
  var arrayFindIndex$1 = createArrayMethod$1(6);
  var arrayIncludes = createArrayIncludes(true);
  var arrayIndexOf = createArrayIncludes(false);
  var arrayValues = ArrayIterators.values;
  var arrayKeys = ArrayIterators.keys;
  var arrayEntries = ArrayIterators.entries;
  var arrayLastIndexOf = ArrayProto.lastIndexOf;
  var arrayReduce = ArrayProto.reduce;
  var arrayReduceRight = ArrayProto.reduceRight;
  var arrayJoin = ArrayProto.join;
  var arraySort = ArrayProto.sort;
  var arraySlice = ArrayProto.slice;
  var arrayToString = ArrayProto.toString;
  var arrayToLocaleString = ArrayProto.toLocaleString;
  var ITERATOR$1 = wks$1('iterator');
  var TAG = wks$1('toStringTag');
  var TYPED_CONSTRUCTOR = uid('typed_constructor');
  var DEF_CONSTRUCTOR = uid('def_constructor');
  var ALL_CONSTRUCTORS = $typed.CONSTR;
  var TYPED_ARRAY = $typed.TYPED;
  var VIEW = $typed.VIEW;
  var WRONG_LENGTH = 'Wrong length!';
  var $map = createArrayMethod$1(1, function (O, length) {
    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
  });
  var LITTLE_ENDIAN = fails(function () {
    // eslint-disable-next-line no-undef
    return new Uint8Array$1(new Uint16Array([1]).buffer)[0] === 1;
  });
  var FORCED_SET = !!Uint8Array$1 && !!Uint8Array$1[PROTOTYPE].set && fails(function () {
    new Uint8Array$1(1).set({});
  });

  var toOffset = function toOffset(it, BYTES) {
    var offset = toInteger(it);
    if (offset < 0 || offset % BYTES) throw RangeError$1('Wrong offset!');
    return offset;
  };

  var validate$4 = function validate(it) {
    if (isObject$2(it) && TYPED_ARRAY in it) return it;
    throw TypeError$1(it + ' is not a typed array!');
  };

  var allocate = function allocate(C, length) {
    if (!(isObject$2(C) && TYPED_CONSTRUCTOR in C)) {
      throw TypeError$1('It is not a typed array constructor!');
    }

    return new C(length);
  };

  var speciesFromList = function speciesFromList(O, list) {
    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
  };

  var fromList = function fromList(C, list) {
    var index = 0;
    var length = list.length;
    var result = allocate(C, length);

    while (length > index) {
      result[index] = list[index++];
    }

    return result;
  };

  var addGetter = function addGetter(it, key, internal) {
    dP(it, key, {
      get: function get() {
        return this._d[internal];
      }
    });
  };

  var $from = function from(source
  /* , mapfn, thisArg */
  ) {
    var O = toObject(source);
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var iterFn = getIterFn(O);
    var i, length, values, result, step, iterator;

    if (iterFn != undefined && !isArrayIter(iterFn)) {
      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
        values.push(step.value);
      }

      O = values;
    }

    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);

    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }

    return result;
  };

  var $of = function of()
  /* ...items */
  {
    var index = 0;
    var length = arguments.length;
    var result = allocate(this, length);

    while (length > index) {
      result[index] = arguments[index++];
    }

    return result;
  }; // iOS Safari 6.x fails here


  var TO_LOCALE_BUG = !!Uint8Array$1 && fails(function () {
    arrayToLocaleString.call(new Uint8Array$1(1));
  });

  var $toLocaleString = function toLocaleString() {
    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate$4(this)) : validate$4(this), arguments);
  };

  var proto$1 = {
    copyWithin: function copyWithin(target, start
    /* , end */
    ) {
      return arrayCopyWithin.call(validate$4(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
    },
    every: function every(callbackfn
    /* , thisArg */
    ) {
      return arrayEvery(validate$4(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    fill: function fill(value
    /* , start, end */
    ) {
      // eslint-disable-line no-unused-vars
      return arrayFill.apply(validate$4(this), arguments);
    },
    filter: function filter(callbackfn
    /* , thisArg */
    ) {
      return speciesFromList(this, arrayFilter(validate$4(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined));
    },
    find: function find(predicate
    /* , thisArg */
    ) {
      return arrayFind$1(validate$4(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    findIndex: function findIndex(predicate
    /* , thisArg */
    ) {
      return arrayFindIndex$1(validate$4(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    forEach: function forEach(callbackfn
    /* , thisArg */
    ) {
      arrayForEach(validate$4(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    indexOf: function indexOf(searchElement
    /* , fromIndex */
    ) {
      return arrayIndexOf(validate$4(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    includes: function includes(searchElement
    /* , fromIndex */
    ) {
      return arrayIncludes(validate$4(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    join: function join(separator) {
      // eslint-disable-line no-unused-vars
      return arrayJoin.apply(validate$4(this), arguments);
    },
    lastIndexOf: function lastIndexOf(searchElement
    /* , fromIndex */
    ) {
      // eslint-disable-line no-unused-vars
      return arrayLastIndexOf.apply(validate$4(this), arguments);
    },
    map: function map(mapfn
    /* , thisArg */
    ) {
      return $map(validate$4(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    reduce: function reduce(callbackfn
    /* , initialValue */
    ) {
      // eslint-disable-line no-unused-vars
      return arrayReduce.apply(validate$4(this), arguments);
    },
    reduceRight: function reduceRight(callbackfn
    /* , initialValue */
    ) {
      // eslint-disable-line no-unused-vars
      return arrayReduceRight.apply(validate$4(this), arguments);
    },
    reverse: function reverse() {
      var that = this;
      var length = validate$4(that).length;
      var middle = Math.floor(length / 2);
      var index = 0;
      var value;

      while (index < middle) {
        value = that[index];
        that[index++] = that[--length];
        that[length] = value;
      }

      return that;
    },
    some: function some(callbackfn
    /* , thisArg */
    ) {
      return arraySome(validate$4(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    sort: function sort(comparefn) {
      return arraySort.call(validate$4(this), comparefn);
    },
    subarray: function subarray(begin, end) {
      var O = validate$4(this);
      var length = O.length;
      var $begin = toAbsoluteIndex(begin, length);
      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(O.buffer, O.byteOffset + $begin * O.BYTES_PER_ELEMENT, toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin));
    }
  };

  var $slice = function slice(start, end) {
    return speciesFromList(this, arraySlice.call(validate$4(this), start, end));
  };

  var $set = function set(arrayLike
  /* , offset */
  ) {
    validate$4(this);
    var offset = toOffset(arguments[1], 1);
    var length = this.length;
    var src = toObject(arrayLike);
    var len = toLength(src.length);
    var index = 0;
    if (len + offset > length) throw RangeError$1(WRONG_LENGTH);

    while (index < len) {
      this[offset + index] = src[index++];
    }
  };

  var $iterators$1 = {
    entries: function entries() {
      return arrayEntries.call(validate$4(this));
    },
    keys: function keys() {
      return arrayKeys.call(validate$4(this));
    },
    values: function values() {
      return arrayValues.call(validate$4(this));
    }
  };

  var isTAIndex = function isTAIndex(target, key) {
    return isObject$2(target) && target[TYPED_ARRAY] && _typeof(key) != 'symbol' && key in target && String(+key) == String(key);
  };

  var $getDesc = function getOwnPropertyDescriptor(target, key) {
    return isTAIndex(target, key = toPrimitive(key, true)) ? propertyDesc(2, target[key]) : gOPD(target, key);
  };

  var $setDesc = function defineProperty(target, key, desc) {
    if (isTAIndex(target, key = toPrimitive(key, true)) && isObject$2(desc) && has$1(desc, 'value') && !has$1(desc, 'get') && !has$1(desc, 'set') // TODO: add validation descriptor w/o calling accessors
    && !desc.configurable && (!has$1(desc, 'writable') || desc.writable) && (!has$1(desc, 'enumerable') || desc.enumerable)) {
      target[key] = desc.value;
      return target;
    }

    return dP(target, key, desc);
  };

  if (!ALL_CONSTRUCTORS) {
    $GOPD.f = $getDesc;
    $DP.f = $setDesc;
  }

  $export$2($export$2.S + $export$2.F * !ALL_CONSTRUCTORS, 'Object', {
    getOwnPropertyDescriptor: $getDesc,
    defineProperty: $setDesc
  });

  if (fails(function () {
    arrayToString.call({});
  })) {
    arrayToString = arrayToLocaleString = function toString() {
      return arrayJoin.call(this);
    };
  }

  var $TypedArrayPrototype$ = redefineAll$1({}, proto$1);
  redefineAll$1($TypedArrayPrototype$, $iterators$1);
  hide$1($TypedArrayPrototype$, ITERATOR$1, $iterators$1.values);
  redefineAll$1($TypedArrayPrototype$, {
    slice: $slice,
    set: $set,
    constructor: function constructor() {
      /* noop */
    },
    toString: arrayToString,
    toLocaleString: $toLocaleString
  });
  addGetter($TypedArrayPrototype$, 'buffer', 'b');
  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
  addGetter($TypedArrayPrototype$, 'length', 'e');
  dP($TypedArrayPrototype$, TAG, {
    get: function get() {
      return this[TYPED_ARRAY];
    }
  }); // eslint-disable-next-line max-statements

  _typedArray.exports = function (KEY, BYTES, wrapper, CLAMPED) {
    CLAMPED = !!CLAMPED;
    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
    var GETTER = 'get' + KEY;
    var SETTER = 'set' + KEY;
    var TypedArray = global$4[NAME];
    var Base = TypedArray || {};
    var TAC = TypedArray && getPrototypeOf(TypedArray);
    var FORCED = !TypedArray || !$typed.ABV;
    var O = {};
    var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];

    var getter = function getter(that, index) {
      var data = that._d;
      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
    };

    var setter = function setter(that, index, value) {
      var data = that._d;
      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
    };

    var addElement = function addElement(that, index) {
      dP(that, index, {
        get: function get() {
          return getter(this, index);
        },
        set: function set(value) {
          return setter(this, index, value);
        },
        enumerable: true
      });
    };

    if (FORCED) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance$1(that, TypedArray, NAME, '_d');
        var index = 0;
        var offset = 0;
        var buffer, byteLength, length, klass;

        if (!isObject$2(data)) {
          length = toIndex(data);
          byteLength = length * BYTES;
          buffer = new $ArrayBuffer(byteLength);
        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          buffer = data;
          offset = toOffset($offset, BYTES);
          var $len = data.byteLength;

          if ($length === undefined) {
            if ($len % BYTES) throw RangeError$1(WRONG_LENGTH);
            byteLength = $len - offset;
            if (byteLength < 0) throw RangeError$1(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if (byteLength + offset > $len) throw RangeError$1(WRONG_LENGTH);
          }

          length = byteLength / BYTES;
        } else if (TYPED_ARRAY in data) {
          return fromList(TypedArray, data);
        } else {
          return $from.call(TypedArray, data);
        }

        hide$1(that, '_d', {
          b: buffer,
          o: offset,
          l: byteLength,
          e: length,
          v: new $DataView(buffer)
        });

        while (index < length) {
          addElement(that, index++);
        }
      });
      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
      hide$1(TypedArrayPrototype, 'constructor', TypedArray);
    } else if (!fails(function () {
      TypedArray(1);
    }) || !fails(function () {
      new TypedArray(-1); // eslint-disable-line no-new
    }) || !$iterDetect(function (iter) {
      new TypedArray(); // eslint-disable-line no-new

      new TypedArray(null); // eslint-disable-line no-new

      new TypedArray(1.5); // eslint-disable-line no-new

      new TypedArray(iter); // eslint-disable-line no-new
    }, true)) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance$1(that, TypedArray, NAME);
        var klass; // `ws` module bug, temporarily remove validation length for Uint8Array
        // https://github.com/websockets/ws/pull/645

        if (!isObject$2(data)) return new Base(toIndex(data));

        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          return $length !== undefined ? new Base(data, toOffset($offset, BYTES), $length) : $offset !== undefined ? new Base(data, toOffset($offset, BYTES)) : new Base(data);
        }

        if (TYPED_ARRAY in data) return fromList(TypedArray, data);
        return $from.call(TypedArray, data);
      });
      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
        if (!(key in TypedArray)) hide$1(TypedArray, key, Base[key]);
      });
      TypedArray[PROTOTYPE] = TypedArrayPrototype;
      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
    }

    var $nativeIterator = TypedArrayPrototype[ITERATOR$1];
    var CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
    var $iterator = $iterators$1.values;
    hide$1(TypedArray, TYPED_CONSTRUCTOR, true);
    hide$1(TypedArrayPrototype, TYPED_ARRAY, NAME);
    hide$1(TypedArrayPrototype, VIEW, true);
    hide$1(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
      dP(TypedArrayPrototype, TAG, {
        get: function get() {
          return NAME;
        }
      });
    }

    O[NAME] = TypedArray;
    $export$2($export$2.G + $export$2.W + $export$2.F * (TypedArray != Base), O);
    $export$2($export$2.S, NAME, {
      BYTES_PER_ELEMENT: BYTES
    });
    $export$2($export$2.S + $export$2.F * fails(function () {
      Base.of.call(TypedArray, 1);
    }), NAME, {
      from: $from,
      of: $of
    });
    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide$1(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);
    $export$2($export$2.P, NAME, proto$1);
    setSpecies(NAME);
    $export$2($export$2.P + $export$2.F * FORCED_SET, NAME, {
      set: $set
    });
    $export$2($export$2.P + $export$2.F * !CORRECT_ITER_NAME, NAME, $iterators$1);
    if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;
    $export$2($export$2.P + $export$2.F * fails(function () {
      new TypedArray(1).slice();
    }), NAME, {
      slice: $slice
    });
    $export$2($export$2.P + $export$2.F * (fails(function () {
      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
    }) || !fails(function () {
      TypedArrayPrototype.toLocaleString.call([1, 2]);
    })), NAME, {
      toLocaleString: $toLocaleString
    });
    Iterators$1[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
    if (!LIBRARY && !CORRECT_ITER_NAME) hide$1(TypedArrayPrototype, ITERATOR$1, $iterator);
  };
} else _typedArray.exports = function () {
  /* empty */
};

_typedArray.exports('Int8', 1, function (init) {
  return function Int8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

_typedArray.exports('Uint8', 1, function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

_typedArray.exports('Uint8', 1, function (init) {
  return function Uint8ClampedArray(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
}, true);

_typedArray.exports('Int16', 2, function (init) {
  return function Int16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

_typedArray.exports('Uint16', 2, function (init) {
  return function Uint16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

_typedArray.exports('Int32', 4, function (init) {
  return function Int32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

_typedArray.exports('Uint32', 4, function (init) {
  return function Uint32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

_typedArray.exports('Float32', 4, function (init) {
  return function Float32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

_typedArray.exports('Float64', 8, function (init) {
  return function Float64Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

var redefineAll = _redefineAll;
var getWeak$1 = _meta.exports.getWeak;
var anObject = _anObject;
var isObject$1 = _isObject;
var anInstance = _anInstance;
var forOf = _forOf.exports;
var createArrayMethod = _arrayMethods;
var $has = _has;
var validate$3 = _validateCollection;
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0; // fallback for uncaught frozen keys

var uncaughtFrozenStore$1 = function uncaughtFrozenStore(that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};

var UncaughtFrozenStore = function UncaughtFrozenStore() {
  this.a = [];
};

var findUncaughtFrozen = function findUncaughtFrozen(store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};

UncaughtFrozenStore.prototype = {
  get: function get(key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function has(key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function set(key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;else this.a.push([key, value]);
  },
  'delete': function _delete(key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};
var _collectionWeak = {
  getConstructor: function getConstructor(wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME; // collection type

      that._i = id++; // collection id

      that._l = undefined; // leak store for uncaught frozen objects

      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function _delete(key) {
        if (!isObject$1(key)) return false;
        var data = getWeak$1(key);
        if (data === true) return uncaughtFrozenStore$1(validate$3(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject$1(key)) return false;
        var data = getWeak$1(key);
        if (data === true) return uncaughtFrozenStore$1(validate$3(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function def(that, key, value) {
    var data = getWeak$1(anObject(key), true);
    if (data === true) uncaughtFrozenStore$1(that).set(key, value);else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore$1
};

var global$3 = _global.exports;
var each$1 = _arrayMethods(0);
var redefine$1 = _redefine.exports;
var meta = _meta.exports;
var assign = _objectAssign;
var weak$1 = _collectionWeak;
var isObject = _isObject;
var validate$2 = _validateCollection;
var NATIVE_WEAK_MAP = _validateCollection;
var IS_IE11 = !global$3.ActiveXObject && 'ActiveXObject' in global$3;
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak$1.ufstore;
var InternalMap;

var wrapper = function wrapper(get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate$2(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak$1.def(validate$2(this, WEAK_MAP), key, value);
  }
}; // 23.3 WeakMap Objects

var $WeakMap = _collection(WEAK_MAP, wrapper, methods, weak$1, true, true); // IE11 WeakMap frozen keys fix

if (NATIVE_WEAK_MAP && IS_IE11) {
  InternalMap = weak$1.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each$1(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine$1(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();

        var result = this._f[key](a, b);

        return key == 'set' ? this : result; // store all the rest on native weakmap
      }

      return method.call(this, a, b);
    });
  });
}

var weak = _collectionWeak;
var validate$1 = _validateCollection;
var WEAK_SET = 'WeakSet'; // 23.4 WeakSet Objects

_collection(WEAK_SET, function (get) {
  return function WeakSet() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
}, {
  // 23.4.3.1 WeakSet.prototype.add(value)
  add: function add(value) {
    return weak.def(validate$1(this, WEAK_SET), value, true);
  }
}, weak, false, true);

var global$2 = _global.exports;
var $export$1 = _export;
var userAgent = _userAgent;
var slice$1 = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check

var wrap = function wrap(set) {
  return function (fn, time
  /* , ...args */
  ) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice$1.call(arguments, 2) : false;
    return set(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(this, args);
    } : fn, time);
  };
};

$export$1($export$1.G + $export$1.B + $export$1.F * MSIE, {
  setTimeout: wrap(global$2.setTimeout),
  setInterval: wrap(global$2.setInterval)
});

var $export = _export;
var $task = _task;
$export($export.G + $export.B, {
  setImmediate: $task.set,
  clearImmediate: $task.clear
});

var $iterators = es6_array_iterator;
var getKeys = _objectKeys;
var redefine = _redefine.exports;
var global$1 = _global.exports;
var hide = _hide;
var Iterators = _iterators;
var wks = _wks.exports;
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;
var DOMIterables = {
  CSSRuleList: true,
  // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true,
  // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true,
  // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i$2 = 0; i$2 < collections.length; i$2++) {
  var NAME = collections[i$2];
  var explicit = DOMIterables[NAME];
  var Collection = global$1[NAME];
  var proto = Collection && Collection.prototype;
  var key;

  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) {
      if (!proto[key]) redefine(proto, key, $iterators[key], true);
    }
  }
}

var runtime = {exports: {}};

(function (module) {
  var runtime = function (exports) {

    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined$1; // More compressible than void 0.

    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

    function define(obj, key, value) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
      return obj[key];
    }

    try {
      // IE 8 has a broken Object.defineProperty that only works on DOM objects.
      define({}, "");
    } catch (err) {
      define = function define(obj, key, value) {
        return obj[key] = value;
      };
    }

    function wrap(innerFn, outerFn, self, tryLocsList) {
      // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
      var generator = Object.create(protoGenerator.prototype);
      var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
      // .throw, and .return methods.

      generator._invoke = makeInvokeMethod(innerFn, self, context);
      return generator;
    }

    exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.

    function tryCatch(fn, obj, arg) {
      try {
        return {
          type: "normal",
          arg: fn.call(obj, arg)
        };
      } catch (err) {
        return {
          type: "throw",
          arg: err
        };
      }
    }

    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.

    var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.

    function Generator() {}

    function GeneratorFunction() {}

    function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.


    var IteratorPrototype = {};

    IteratorPrototype[iteratorSymbol] = function () {
      return this;
    };

    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
      // This environment has a native %IteratorPrototype%; use it instead
      // of the polyfill.
      IteratorPrototype = NativeIteratorPrototype;
    }

    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
    GeneratorFunctionPrototype.constructor = GeneratorFunction;
    GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"); // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.

    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function (method) {
        define(prototype, method, function (arg) {
          return this._invoke(method, arg);
        });
      });
    }

    exports.isGeneratorFunction = function (genFun) {
      var ctor = typeof genFun === "function" && genFun.constructor;
      return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
      // do is to check its .name property.
      (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };

    exports.mark = function (genFun) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
      } else {
        genFun.__proto__ = GeneratorFunctionPrototype;
        define(genFun, toStringTagSymbol, "GeneratorFunction");
      }

      genFun.prototype = Object.create(Gp);
      return genFun;
    }; // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.


    exports.awrap = function (arg) {
      return {
        __await: arg
      };
    };

    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);

        if (record.type === "throw") {
          reject(record.arg);
        } else {
          var result = record.arg;
          var value = result.value;

          if (value && _typeof(value) === "object" && hasOwn.call(value, "__await")) {
            return PromiseImpl.resolve(value.__await).then(function (value) {
              invoke("next", value, resolve, reject);
            }, function (err) {
              invoke("throw", err, resolve, reject);
            });
          }

          return PromiseImpl.resolve(value).then(function (unwrapped) {
            // When a yielded Promise is resolved, its final value becomes
            // the .value of the Promise<{value,done}> result for the
            // current iteration.
            result.value = unwrapped;
            resolve(result);
          }, function (error) {
            // If a rejected Promise was yielded, throw the rejection back
            // into the async generator function so it can be handled there.
            return invoke("throw", error, resolve, reject);
          });
        }
      }

      var previousPromise;

      function enqueue(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }

        return previousPromise = // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
        // invocations of the iterator.
        callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      } // Define the unified helper method that is used to implement .next,
      // .throw, and .return (see defineIteratorMethods).


      this._invoke = enqueue;
    }

    defineIteratorMethods(AsyncIterator.prototype);

    AsyncIterator.prototype[asyncIteratorSymbol] = function () {
      return this;
    };

    exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.

    exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
      if (PromiseImpl === void 0) PromiseImpl = Promise;
      var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
      return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function (result) {
        return result.done ? result.value : iter.next();
      });
    };

    function makeInvokeMethod(innerFn, self, context) {
      var state = GenStateSuspendedStart;
      return function invoke(method, arg) {
        if (state === GenStateExecuting) {
          throw new Error("Generator is already running");
        }

        if (state === GenStateCompleted) {
          if (method === "throw") {
            throw arg;
          } // Be forgiving, per 25.3.3.3.3 of the spec:
          // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


          return doneResult();
        }

        context.method = method;
        context.arg = arg;

        while (true) {
          var delegate = context.delegate;

          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);

            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if (context.method === "next") {
            // Setting context._sent for legacy support of Babel's
            // function.sent implementation.
            context.sent = context._sent = context.arg;
          } else if (context.method === "throw") {
            if (state === GenStateSuspendedStart) {
              state = GenStateCompleted;
              throw context.arg;
            }

            context.dispatchException(context.arg);
          } else if (context.method === "return") {
            context.abrupt("return", context.arg);
          }

          state = GenStateExecuting;
          var record = tryCatch(innerFn, self, context);

          if (record.type === "normal") {
            // If an exception is thrown from innerFn, we leave state ===
            // GenStateExecuting and loop back for another invocation.
            state = context.done ? GenStateCompleted : GenStateSuspendedYield;

            if (record.arg === ContinueSentinel) {
              continue;
            }

            return {
              value: record.arg,
              done: context.done
            };
          } else if (record.type === "throw") {
            state = GenStateCompleted; // Dispatch the exception by looping back around to the
            // context.dispatchException(context.arg) call above.

            context.method = "throw";
            context.arg = record.arg;
          }
        }
      };
    } // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.


    function maybeInvokeDelegate(delegate, context) {
      var method = delegate.iterator[context.method];

      if (method === undefined$1) {
        // A .throw or .return when the delegate iterator has no .throw
        // method always terminates the yield* loop.
        context.delegate = null;

        if (context.method === "throw") {
          // Note: ["return"] must be used for ES3 parsing compatibility.
          if (delegate.iterator["return"]) {
            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            context.method = "return";
            context.arg = undefined$1;
            maybeInvokeDelegate(delegate, context);

            if (context.method === "throw") {
              // If maybeInvokeDelegate(context) changed context.method from
              // "return" to "throw", let that override the TypeError below.
              return ContinueSentinel;
            }
          }

          context.method = "throw";
          context.arg = new TypeError("The iterator does not provide a 'throw' method");
        }

        return ContinueSentinel;
      }

      var record = tryCatch(method, delegate.iterator, context.arg);

      if (record.type === "throw") {
        context.method = "throw";
        context.arg = record.arg;
        context.delegate = null;
        return ContinueSentinel;
      }

      var info = record.arg;

      if (!info) {
        context.method = "throw";
        context.arg = new TypeError("iterator result is not an object");
        context.delegate = null;
        return ContinueSentinel;
      }

      if (info.done) {
        // Assign the result of the finished delegate to the temporary
        // variable specified by delegate.resultName (see delegateYield).
        context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

        context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
        // exception, let the outer generator proceed normally. If
        // context.method was "next", forget context.arg since it has been
        // "consumed" by the delegate iterator. If context.method was
        // "return", allow the original .return call to continue in the
        // outer generator.

        if (context.method !== "return") {
          context.method = "next";
          context.arg = undefined$1;
        }
      } else {
        // Re-yield the result returned by the delegate method.
        return info;
      } // The delegate iterator is finished, so forget it and continue with
      // the outer generator.


      context.delegate = null;
      return ContinueSentinel;
    } // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.


    defineIteratorMethods(Gp);
    define(Gp, toStringTagSymbol, "Generator"); // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.

    Gp[iteratorSymbol] = function () {
      return this;
    };

    Gp.toString = function () {
      return "[object Generator]";
    };

    function pushTryEntry(locs) {
      var entry = {
        tryLoc: locs[0]
      };

      if (1 in locs) {
        entry.catchLoc = locs[1];
      }

      if (2 in locs) {
        entry.finallyLoc = locs[2];
        entry.afterLoc = locs[3];
      }

      this.tryEntries.push(entry);
    }

    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal";
      delete record.arg;
      entry.completion = record;
    }

    function Context(tryLocsList) {
      // The root entry object (effectively a try statement without a catch
      // or a finally block) gives us a place to store values thrown from
      // locations where there is no enclosing try statement.
      this.tryEntries = [{
        tryLoc: "root"
      }];
      tryLocsList.forEach(pushTryEntry, this);
      this.reset(true);
    }

    exports.keys = function (object) {
      var keys = [];

      for (var key in object) {
        keys.push(key);
      }

      keys.reverse(); // Rather than returning an object with a next method, we keep
      // things simple and return the next function itself.

      return function next() {
        while (keys.length) {
          var key = keys.pop();

          if (key in object) {
            next.value = key;
            next.done = false;
            return next;
          }
        } // To avoid creating an additional object, we just hang the .value
        // and .done properties off the next function object itself. This
        // also ensures that the minifier will not anonymize the function.


        next.done = true;
        return next;
      };
    };

    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];

        if (iteratorMethod) {
          return iteratorMethod.call(iterable);
        }

        if (typeof iterable.next === "function") {
          return iterable;
        }

        if (!isNaN(iterable.length)) {
          var i = -1,
              next = function next() {
            while (++i < iterable.length) {
              if (hasOwn.call(iterable, i)) {
                next.value = iterable[i];
                next.done = false;
                return next;
              }
            }

            next.value = undefined$1;
            next.done = true;
            return next;
          };

          return next.next = next;
        }
      } // Return an iterator with no values.


      return {
        next: doneResult
      };
    }

    exports.values = values;

    function doneResult() {
      return {
        value: undefined$1,
        done: true
      };
    }

    Context.prototype = {
      constructor: Context,
      reset: function reset(skipTempReset) {
        this.prev = 0;
        this.next = 0; // Resetting context._sent for legacy support of Babel's
        // function.sent implementation.

        this.sent = this._sent = undefined$1;
        this.done = false;
        this.delegate = null;
        this.method = "next";
        this.arg = undefined$1;
        this.tryEntries.forEach(resetTryEntry);

        if (!skipTempReset) {
          for (var name in this) {
            // Not sure about the optimal order of these conditions:
            if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
              this[name] = undefined$1;
            }
          }
        }
      },
      stop: function stop() {
        this.done = true;
        var rootEntry = this.tryEntries[0];
        var rootRecord = rootEntry.completion;

        if (rootRecord.type === "throw") {
          throw rootRecord.arg;
        }

        return this.rval;
      },
      dispatchException: function dispatchException(exception) {
        if (this.done) {
          throw exception;
        }

        var context = this;

        function handle(loc, caught) {
          record.type = "throw";
          record.arg = exception;
          context.next = loc;

          if (caught) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            context.method = "next";
            context.arg = undefined$1;
          }

          return !!caught;
        }

        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          var record = entry.completion;

          if (entry.tryLoc === "root") {
            // Exception thrown outside of any try block that could handle
            // it, so set the completion value of the entire function to
            // throw the exception.
            return handle("end");
          }

          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc");
            var hasFinally = hasOwn.call(entry, "finallyLoc");

            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              } else if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              }
            } else if (hasFinally) {
              if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else {
              throw new Error("try statement without catch or finally");
            }
          }
        }
      },
      abrupt: function abrupt(type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }

        if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
          // Ignore the finally entry if control is not jumping to a
          // location outside the try/catch block.
          finallyEntry = null;
        }

        var record = finallyEntry ? finallyEntry.completion : {};
        record.type = type;
        record.arg = arg;

        if (finallyEntry) {
          this.method = "next";
          this.next = finallyEntry.finallyLoc;
          return ContinueSentinel;
        }

        return this.complete(record);
      },
      complete: function complete(record, afterLoc) {
        if (record.type === "throw") {
          throw record.arg;
        }

        if (record.type === "break" || record.type === "continue") {
          this.next = record.arg;
        } else if (record.type === "return") {
          this.rval = this.arg = record.arg;
          this.method = "return";
          this.next = "end";
        } else if (record.type === "normal" && afterLoc) {
          this.next = afterLoc;
        }

        return ContinueSentinel;
      },
      finish: function finish(finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.finallyLoc === finallyLoc) {
            this.complete(entry.completion, entry.afterLoc);
            resetTryEntry(entry);
            return ContinueSentinel;
          }
        }
      },
      "catch": function _catch(tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;

            if (record.type === "throw") {
              var thrown = record.arg;
              resetTryEntry(entry);
            }

            return thrown;
          }
        } // The context.catch method must only be called with a location
        // argument that corresponds to a known catch block.


        throw new Error("illegal catch attempt");
      },
      delegateYield: function delegateYield(iterable, resultName, nextLoc) {
        this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        };

        if (this.method === "next") {
          // Deliberately forget the last sent value so that we don't
          // accidentally pass it on to the delegate.
          this.arg = undefined$1;
        }

        return ContinueSentinel;
      }
    }; // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.

    return exports;
  }( // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
  module.exports );

  try {
    regeneratorRuntime = runtime;
  } catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    Function("r", "regeneratorRuntime = r")(runtime);
  }
})(runtime);

var CODE_TAG = {
  EXAMPLE: 'example',
  ASSERTION: 'assertion',
  VARIABLE: 'variable',
  FUNCTION: 'function'
};
var CODE_TAG_SELECTOR = {
  EXAMPLE: '.example',
  ASSERTION: '.assertion',
  VARIABLE: '.variable'
};
var EXAMPLE_ID = 'context-id';
var ASSERTION_ID = 'assertion-id';
var DATA_NAME = 'data-name';
var DATA_ACTION = 'data-action';
var DATA_PARAMS = 'data-params';
var DATA_EXPECT = 'data-expect';
var EXPECT_TYPE = {
  EQUAL: 'equal',
  TRUE: 'true',
  FALSE: 'false'
};
var FUNCTION_PREFIX = 'fixture.';
var CODE_JOINER = ';';
var PARAM_JOINER = ', ';
var PARAM_SPLITTER = ' ';

var lib$c = {};

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

/* global Reflect, Promise */
var _extendStatics = function extendStatics(d, b) {
  _extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) {
      if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    }
  };

  return _extendStatics(d, b);
};

function __extends$2(d, b) {
  if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

  _extendStatics(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var _assign = function __assign() {
  _assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return _assign.apply(this, arguments);
};
function __rest(s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}
function __decorate(decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
  return function (target, key) {
    decorator(target, key, paramIndex);
  };
}
function __metadata(metadataKey, metadataValue) {
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}
var __createBinding$2 = Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
};
function __exportStar(m, o) {
  for (var p in m) {
    if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding$2(o, m, p);
  }
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function next() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
}
/** @deprecated */

function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
}
/** @deprecated */

function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
    s += arguments[i].length;
  }

  for (var r = Array(s), k = 0, i = 0; i < il; i++) {
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
      r[k] = a[j];
    }
  }

  return r;
}
function __spreadArray$2(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || from);
}
function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []),
      i,
      q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i;

  function verb(n) {
    if (g[n]) i[n] = function (v) {
      return new Promise(function (a, b) {
        q.push([n, v, a, b]) > 1 || resume(n, v);
      });
    };
  }

  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }

  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }

  function fulfill(value) {
    resume("next", value);
  }

  function reject(value) {
    resume("throw", value);
  }

  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
}
function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function () {
    return this;
  }, i;

  function verb(n, f) {
    i[n] = o[n] ? function (v) {
      return (p = !p) ? {
        value: __await(o[n](v)),
        done: n === "return"
      } : f ? f(v) : v;
    } : f;
  }
}
function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator],
      i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i);

  function verb(n) {
    i[n] = o[n] && function (v) {
      return new Promise(function (resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }

  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function (v) {
      resolve({
        value: v,
        done: d
      });
    }, reject);
  }
}
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
}

var __setModuleDefault$2 = Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
};

function __importStar$2(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding$2(result, mod, k);
  }

  __setModuleDefault$2(result, mod);

  return result;
}
function __importDefault$8(mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}

var tslib_es6 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	__extends: __extends$2,
	get __assign () { return _assign; },
	__rest: __rest,
	__decorate: __decorate,
	__param: __param,
	__metadata: __metadata,
	__awaiter: __awaiter,
	__generator: __generator,
	__createBinding: __createBinding$2,
	__exportStar: __exportStar,
	__values: __values,
	__read: __read,
	__spread: __spread,
	__spreadArrays: __spreadArrays,
	__spreadArray: __spreadArray$2,
	__await: __await,
	__asyncGenerator: __asyncGenerator,
	__asyncDelegator: __asyncDelegator,
	__asyncValues: __asyncValues,
	__makeTemplateObject: __makeTemplateObject,
	__importStar: __importStar$2,
	__importDefault: __importDefault$8,
	__classPrivateFieldGet: __classPrivateFieldGet,
	__classPrivateFieldSet: __classPrivateFieldSet
});

var require$$0$1 = /*@__PURE__*/getAugmentedNamespace(tslib_es6);

var types = {};

Object.defineProperty(types, "__esModule", {
  value: true
});

var load$1 = {};

var options = {};

Object.defineProperty(options, "__esModule", {
  value: true
});
options.flatten = void 0;
var tslib_1$6 = require$$0$1;
var defaultOpts = {
  xml: false,
  decodeEntities: true
};
/** Cheerio default options. */

options["default"] = defaultOpts;

var xmlModeDefault = {
  _useHtmlParser2: true,
  xmlMode: true
};

function flatten(options) {
  return (options === null || options === void 0 ? void 0 : options.xml) ? typeof options.xml === 'boolean' ? xmlModeDefault : tslib_1$6.__assign(tslib_1$6.__assign({}, xmlModeDefault), options.xml) : options !== null && options !== void 0 ? options : undefined;
}

options.flatten = flatten;

var _static = {};

var lib$b = {};

var lib$a = {};

var parse$7 = {};

var __spreadArray$1 = commonjsGlobal && commonjsGlobal.__spreadArray || function (to, from) {
  for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) {
    to[j] = from[i];
  }

  return to;
};

Object.defineProperty(parse$7, "__esModule", {
  value: true
});
parse$7.isTraversal = void 0;
var reName = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/;
var reEscape = /\\([\da-f]{1,6}\s?|(\s)|.)/gi;
var actionTypes$1 = new Map([["~", "element"], ["^", "start"], ["$", "end"], ["*", "any"], ["!", "not"], ["|", "hyphen"]]);
var Traversals = {
  ">": "child",
  "<": "parent",
  "~": "sibling",
  "+": "adjacent"
};
var attribSelectors = {
  "#": ["id", "equals"],
  ".": ["class", "element"]
}; // Pseudos, whose data property is parsed as well.

var unpackPseudos = new Set(["has", "not", "matches", "is", "host", "host-context"]);
var traversalNames = new Set(__spreadArray$1(["descendant"], Object.keys(Traversals).map(function (k) {
  return Traversals[k];
})));
/**
 * Attributes that are case-insensitive in HTML.
 *
 * @private
 * @see https://html.spec.whatwg.org/multipage/semantics-other.html#case-sensitivity-of-selectors
 */

var caseInsensitiveAttributes = new Set(["accept", "accept-charset", "align", "alink", "axis", "bgcolor", "charset", "checked", "clear", "codetype", "color", "compact", "declare", "defer", "dir", "direction", "disabled", "enctype", "face", "frame", "hreflang", "http-equiv", "lang", "language", "link", "media", "method", "multiple", "nohref", "noresize", "noshade", "nowrap", "readonly", "rel", "rev", "rules", "scope", "scrolling", "selected", "shape", "target", "text", "type", "valign", "valuetype", "vlink"]);
/**
 * Checks whether a specific selector is a traversal.
 * This is useful eg. in swapping the order of elements that
 * are not traversals.
 *
 * @param selector Selector to check.
 */

function isTraversal(selector) {
  return traversalNames.has(selector.type);
}

parse$7.isTraversal = isTraversal;
var stripQuotesFromPseudos = new Set(["contains", "icontains"]);
var quotes = new Set(['"', "'"]); // Unescape function taken from https://github.com/jquery/sizzle/blob/master/src/sizzle.js#L152

function funescape(_, escaped, escapedWhitespace) {
  var high = parseInt(escaped, 16) - 0x10000; // NaN means non-codepoint

  return high !== high || escapedWhitespace ? escaped : high < 0 ? // BMP codepoint
  String.fromCharCode(high + 0x10000) : // Supplemental Plane codepoint (surrogate pair)
  String.fromCharCode(high >> 10 | 0xd800, high & 0x3ff | 0xdc00);
}

function unescapeCSS(str) {
  return str.replace(reEscape, funescape);
}

function isWhitespace$1(c) {
  return c === " " || c === "\n" || c === "\t" || c === "\f" || c === "\r";
}
/**
 * Parses `selector`, optionally with the passed `options`.
 *
 * @param selector Selector to parse.
 * @param options Options for parsing.
 * @returns Returns a two-dimensional array.
 * The first dimension represents selectors separated by commas (eg. `sub1, sub2`),
 * the second contains the relevant tokens for that selector.
 */


function parse$6(selector, options) {
  var subselects = [];
  var endIndex = parseSelector(subselects, "" + selector, options, 0);

  if (endIndex < selector.length) {
    throw new Error("Unmatched selector: " + selector.slice(endIndex));
  }

  return subselects;
}

parse$7["default"] = parse$6;

function parseSelector(subselects, selector, options, selectorIndex) {
  var _a, _b;

  if (options === void 0) {
    options = {};
  }

  var tokens = [];
  var sawWS = false;

  function getName(offset) {
    var match = selector.slice(selectorIndex + offset).match(reName);

    if (!match) {
      throw new Error("Expected name, found " + selector.slice(selectorIndex));
    }

    var name = match[0];
    selectorIndex += offset + name.length;
    return unescapeCSS(name);
  }

  function stripWhitespace(offset) {
    while (isWhitespace$1(selector.charAt(selectorIndex + offset))) {
      offset++;
    }

    selectorIndex += offset;
  }

  function isEscaped(pos) {
    var slashCount = 0;

    while (selector.charAt(--pos) === "\\") {
      slashCount++;
    }

    return (slashCount & 1) === 1;
  }

  function ensureNotTraversal() {
    if (tokens.length > 0 && isTraversal(tokens[tokens.length - 1])) {
      throw new Error("Did not expect successive traversals.");
    }
  }

  stripWhitespace(0);

  while (selector !== "") {
    var firstChar = selector.charAt(selectorIndex);

    if (isWhitespace$1(firstChar)) {
      sawWS = true;
      stripWhitespace(1);
    } else if (firstChar in Traversals) {
      ensureNotTraversal();
      tokens.push({
        type: Traversals[firstChar]
      });
      sawWS = false;
      stripWhitespace(1);
    } else if (firstChar === ",") {
      if (tokens.length === 0) {
        throw new Error("Empty sub-selector");
      }

      subselects.push(tokens);
      tokens = [];
      sawWS = false;
      stripWhitespace(1);
    } else if (selector.startsWith("/*", selectorIndex)) {
      var endIndex = selector.indexOf("*/", selectorIndex + 2);

      if (endIndex < 0) {
        throw new Error("Comment was not terminated");
      }

      selectorIndex = endIndex + 2;
    } else {
      if (sawWS) {
        ensureNotTraversal();
        tokens.push({
          type: "descendant"
        });
        sawWS = false;
      }

      if (firstChar in attribSelectors) {
        var _c = attribSelectors[firstChar],
            name_1 = _c[0],
            action = _c[1];
        tokens.push({
          type: "attribute",
          name: name_1,
          action: action,
          value: getName(1),
          namespace: null,
          // TODO: Add quirksMode option, which makes `ignoreCase` `true` for HTML.
          ignoreCase: options.xmlMode ? null : false
        });
      } else if (firstChar === "[") {
        stripWhitespace(1); // Determine attribute name and namespace

        var name_2 = void 0;
        var namespace = null;

        if (selector.charAt(selectorIndex) === "|") {
          namespace = "";
          selectorIndex += 1;
        }

        if (selector.startsWith("*|", selectorIndex)) {
          namespace = "*";
          selectorIndex += 2;
        }

        name_2 = getName(0);

        if (namespace === null && selector.charAt(selectorIndex) === "|" && selector.charAt(selectorIndex + 1) !== "=") {
          namespace = name_2;
          name_2 = getName(1);
        }

        if ((_a = options.lowerCaseAttributeNames) !== null && _a !== void 0 ? _a : !options.xmlMode) {
          name_2 = name_2.toLowerCase();
        }

        stripWhitespace(0); // Determine comparison operation

        var action = "exists";
        var possibleAction = actionTypes$1.get(selector.charAt(selectorIndex));

        if (possibleAction) {
          action = possibleAction;

          if (selector.charAt(selectorIndex + 1) !== "=") {
            throw new Error("Expected `=`");
          }

          stripWhitespace(2);
        } else if (selector.charAt(selectorIndex) === "=") {
          action = "equals";
          stripWhitespace(1);
        } // Determine value


        var value = "";
        var ignoreCase = null;

        if (action !== "exists") {
          if (quotes.has(selector.charAt(selectorIndex))) {
            var quote = selector.charAt(selectorIndex);
            var sectionEnd = selectorIndex + 1;

            while (sectionEnd < selector.length && (selector.charAt(sectionEnd) !== quote || isEscaped(sectionEnd))) {
              sectionEnd += 1;
            }

            if (selector.charAt(sectionEnd) !== quote) {
              throw new Error("Attribute value didn't end");
            }

            value = unescapeCSS(selector.slice(selectorIndex + 1, sectionEnd));
            selectorIndex = sectionEnd + 1;
          } else {
            var valueStart = selectorIndex;

            while (selectorIndex < selector.length && (!isWhitespace$1(selector.charAt(selectorIndex)) && selector.charAt(selectorIndex) !== "]" || isEscaped(selectorIndex))) {
              selectorIndex += 1;
            }

            value = unescapeCSS(selector.slice(valueStart, selectorIndex));
          }

          stripWhitespace(0); // See if we have a force ignore flag

          var forceIgnore = selector.charAt(selectorIndex); // If the forceIgnore flag is set (either `i` or `s`), use that value

          if (forceIgnore === "s" || forceIgnore === "S") {
            ignoreCase = false;
            stripWhitespace(1);
          } else if (forceIgnore === "i" || forceIgnore === "I") {
            ignoreCase = true;
            stripWhitespace(1);
          }
        } // If `xmlMode` is set, there are no rules; otherwise, use the `caseInsensitiveAttributes` list.


        if (!options.xmlMode) {
          // TODO: Skip this for `exists`, as there is no value to compare to.
          ignoreCase !== null && ignoreCase !== void 0 ? ignoreCase : ignoreCase = caseInsensitiveAttributes.has(name_2);
        }

        if (selector.charAt(selectorIndex) !== "]") {
          throw new Error("Attribute selector didn't terminate");
        }

        selectorIndex += 1;
        var attributeSelector = {
          type: "attribute",
          name: name_2,
          action: action,
          value: value,
          namespace: namespace,
          ignoreCase: ignoreCase
        };
        tokens.push(attributeSelector);
      } else if (firstChar === ":") {
        if (selector.charAt(selectorIndex + 1) === ":") {
          tokens.push({
            type: "pseudo-element",
            name: getName(2).toLowerCase()
          });
          continue;
        }

        var name_3 = getName(1).toLowerCase();
        var data = null;

        if (selector.charAt(selectorIndex) === "(") {
          if (unpackPseudos.has(name_3)) {
            if (quotes.has(selector.charAt(selectorIndex + 1))) {
              throw new Error("Pseudo-selector " + name_3 + " cannot be quoted");
            }

            data = [];
            selectorIndex = parseSelector(data, selector, options, selectorIndex + 1);

            if (selector.charAt(selectorIndex) !== ")") {
              throw new Error("Missing closing parenthesis in :" + name_3 + " (" + selector + ")");
            }

            selectorIndex += 1;
          } else {
            selectorIndex += 1;
            var start = selectorIndex;
            var counter = 1;

            for (; counter > 0 && selectorIndex < selector.length; selectorIndex++) {
              if (selector.charAt(selectorIndex) === "(" && !isEscaped(selectorIndex)) {
                counter++;
              } else if (selector.charAt(selectorIndex) === ")" && !isEscaped(selectorIndex)) {
                counter--;
              }
            }

            if (counter) {
              throw new Error("Parenthesis not matched");
            }

            data = selector.slice(start, selectorIndex - 1);

            if (stripQuotesFromPseudos.has(name_3)) {
              var quot = data.charAt(0);

              if (quot === data.slice(-1) && quotes.has(quot)) {
                data = data.slice(1, -1);
              }

              data = unescapeCSS(data);
            }
          }
        }

        tokens.push({
          type: "pseudo",
          name: name_3,
          data: data
        });
      } else {
        var namespace = null;
        var name_4 = void 0;

        if (firstChar === "*") {
          selectorIndex += 1;
          name_4 = "*";
        } else if (reName.test(selector.slice(selectorIndex))) {
          if (selector.charAt(selectorIndex) === "|") {
            namespace = "";
            selectorIndex += 1;
          }

          name_4 = getName(0);
        } else {
          /*
           * We have finished parsing the selector.
           * Remove descendant tokens at the end if they exist,
           * and return the last index, so that parsing can be
           * picked up from here.
           */
          if (tokens.length && tokens[tokens.length - 1].type === "descendant") {
            tokens.pop();
          }

          addToken(subselects, tokens);
          return selectorIndex;
        }

        if (selector.charAt(selectorIndex) === "|") {
          namespace = name_4;

          if (selector.charAt(selectorIndex + 1) === "*") {
            name_4 = "*";
            selectorIndex += 2;
          } else {
            name_4 = getName(1);
          }
        }

        if (name_4 === "*") {
          tokens.push({
            type: "universal",
            namespace: namespace
          });
        } else {
          if ((_b = options.lowerCaseTags) !== null && _b !== void 0 ? _b : !options.xmlMode) {
            name_4 = name_4.toLowerCase();
          }

          tokens.push({
            type: "tag",
            name: name_4,
            namespace: namespace
          });
        }
      }
    }
  }

  addToken(subselects, tokens);
  return selectorIndex;
}

function addToken(subselects, tokens) {
  if (subselects.length > 0 && tokens.length === 0) {
    throw new Error("Empty sub-selector");
  }

  subselects.push(tokens);
}

var stringify$4 = {};

var __spreadArray = commonjsGlobal && commonjsGlobal.__spreadArray || function (to, from) {
  for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) {
    to[j] = from[i];
  }

  return to;
};

Object.defineProperty(stringify$4, "__esModule", {
  value: true
});
var actionTypes = {
  equals: "",
  element: "~",
  start: "^",
  end: "$",
  any: "*",
  not: "!",
  hyphen: "|"
};
var charsToEscape = new Set(__spreadArray(__spreadArray([], Object.keys(actionTypes).map(function (typeKey) {
  return actionTypes[typeKey];
}).filter(Boolean)), [":", "[", "]", " ", "\\", "(", ")", "'"]));
/**
 * Turns `selector` back into a string.
 *
 * @param selector Selector to stringify.
 */

function stringify$3(selector) {
  return selector.map(stringifySubselector).join(", ");
}

stringify$4["default"] = stringify$3;

function stringifySubselector(token) {
  return token.map(stringifyToken).join("");
}

function stringifyToken(token) {
  switch (token.type) {
    // Simple types
    case "child":
      return " > ";

    case "parent":
      return " < ";

    case "sibling":
      return " ~ ";

    case "adjacent":
      return " + ";

    case "descendant":
      return " ";

    case "universal":
      return getNamespace(token.namespace) + "*";

    case "tag":
      return getNamespacedName(token);

    case "pseudo-element":
      return "::" + escapeName(token.name);

    case "pseudo":
      if (token.data === null) return ":" + escapeName(token.name);

      if (typeof token.data === "string") {
        return ":" + escapeName(token.name) + "(" + escapeName(token.data) + ")";
      }

      return ":" + escapeName(token.name) + "(" + stringify$3(token.data) + ")";

    case "attribute":
      {
        if (token.name === "id" && token.action === "equals" && !token.ignoreCase && !token.namespace) {
          return "#" + escapeName(token.value);
        }

        if (token.name === "class" && token.action === "element" && !token.ignoreCase && !token.namespace) {
          return "." + escapeName(token.value);
        }

        var name_1 = getNamespacedName(token);

        if (token.action === "exists") {
          return "[" + name_1 + "]";
        }

        return "[" + name_1 + actionTypes[token.action] + "='" + escapeName(token.value) + "'" + (token.ignoreCase ? "i" : token.ignoreCase === false ? "s" : "") + "]";
      }
  }
}

function getNamespacedName(token) {
  return "" + getNamespace(token.namespace) + escapeName(token.name);
}

function getNamespace(namespace) {
  return namespace !== null ? (namespace === "*" ? "*" : escapeName(namespace)) + "|" : "";
}

function escapeName(str) {
  return str.split("").map(function (c) {
    return charsToEscape.has(c) ? "\\" + c : c;
  }).join("");
}

(function (exports) {

  var __createBinding = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    });
  } : function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
  });

  var __exportStar = commonjsGlobal && commonjsGlobal.__exportStar || function (m, exports) {
    for (var p in m) {
      if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
    }
  };

  var __importDefault = commonjsGlobal && commonjsGlobal.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : {
      "default": mod
    };
  };

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.stringify = exports.parse = void 0;

  __exportStar(parse$7, exports);

  var parse_1 = parse$7;
  Object.defineProperty(exports, "parse", {
    enumerable: true,
    get: function get() {
      return __importDefault(parse_1)["default"];
    }
  });
  var stringify_1 = stringify$4;
  Object.defineProperty(exports, "stringify", {
    enumerable: true,
    get: function get() {
      return __importDefault(stringify_1)["default"];
    }
  });
})(lib$a);

var lib$9 = {};

var lib$8 = {};

var stringify$2 = {};

var lib$7 = {};

var lib$6 = {};

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Doctype = exports.CDATA = exports.Tag = exports.Style = exports.Script = exports.Comment = exports.Directive = exports.Text = exports.Root = exports.isTag = exports.ElementType = void 0;
  /** Types of elements found in htmlparser2's DOM */

  var ElementType;

  (function (ElementType) {
    /** Type for the root element of a document */
    ElementType["Root"] = "root";
    /** Type for Text */

    ElementType["Text"] = "text";
    /** Type for <? ... ?> */

    ElementType["Directive"] = "directive";
    /** Type for <!-- ... --> */

    ElementType["Comment"] = "comment";
    /** Type for <script> tags */

    ElementType["Script"] = "script";
    /** Type for <style> tags */

    ElementType["Style"] = "style";
    /** Type for Any tag */

    ElementType["Tag"] = "tag";
    /** Type for <![CDATA[ ... ]]> */

    ElementType["CDATA"] = "cdata";
    /** Type for <!doctype ...> */

    ElementType["Doctype"] = "doctype";
  })(ElementType = exports.ElementType || (exports.ElementType = {}));
  /**
   * Tests whether an element is a tag or not.
   *
   * @param elem Element to test
   */


  function isTag(elem) {
    return elem.type === ElementType.Tag || elem.type === ElementType.Script || elem.type === ElementType.Style;
  }

  exports.isTag = isTag; // Exports for backwards compatibility

  /** Type for the root element of a document */

  exports.Root = ElementType.Root;
  /** Type for Text */

  exports.Text = ElementType.Text;
  /** Type for <? ... ?> */

  exports.Directive = ElementType.Directive;
  /** Type for <!-- ... --> */

  exports.Comment = ElementType.Comment;
  /** Type for <script> tags */

  exports.Script = ElementType.Script;
  /** Type for <style> tags */

  exports.Style = ElementType.Style;
  /** Type for Any tag */

  exports.Tag = ElementType.Tag;
  /** Type for <![CDATA[ ... ]]> */

  exports.CDATA = ElementType.CDATA;
  /** Type for <!doctype ...> */

  exports.Doctype = ElementType.Doctype;
})(lib$6);

var node = {};

var __extends$1 = commonjsGlobal && commonjsGlobal.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __assign$1 = commonjsGlobal && commonjsGlobal.__assign || function () {
  __assign$1 = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign$1.apply(this, arguments);
};

Object.defineProperty(node, "__esModule", {
  value: true
});
node.cloneNode = node.hasChildren = node.isDocument = node.isDirective = node.isComment = node.isText = node.isCDATA = node.isTag = node.Element = node.Document = node.NodeWithChildren = node.ProcessingInstruction = node.Comment = node.Text = node.DataNode = node.Node = void 0;
var domelementtype_1$1 = lib$6;
var nodeTypes$1 = new Map([[domelementtype_1$1.ElementType.Tag, 1], [domelementtype_1$1.ElementType.Script, 1], [domelementtype_1$1.ElementType.Style, 1], [domelementtype_1$1.ElementType.Directive, 1], [domelementtype_1$1.ElementType.Text, 3], [domelementtype_1$1.ElementType.CDATA, 4], [domelementtype_1$1.ElementType.Comment, 8], [domelementtype_1$1.ElementType.Root, 9]]);
/**
 * This object will be used as the prototype for Nodes when creating a
 * DOM-Level-1-compliant structure.
 */

var Node$1 =
/** @class */
function () {
  /**
   *
   * @param type The type of the node.
   */
  function Node(type) {
    this.type = type;
    /** Parent of the node */

    this.parent = null;
    /** Previous sibling */

    this.prev = null;
    /** Next sibling */

    this.next = null;
    /** The start index of the node. Requires `withStartIndices` on the handler to be `true. */

    this.startIndex = null;
    /** The end index of the node. Requires `withEndIndices` on the handler to be `true. */

    this.endIndex = null;
  }

  Object.defineProperty(Node.prototype, "nodeType", {
    // Read-only aliases
    get: function get() {
      var _a;

      return (_a = nodeTypes$1.get(this.type)) !== null && _a !== void 0 ? _a : 1;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Node.prototype, "parentNode", {
    // Read-write aliases for properties
    get: function get() {
      return this.parent;
    },
    set: function set(parent) {
      this.parent = parent;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Node.prototype, "previousSibling", {
    get: function get() {
      return this.prev;
    },
    set: function set(prev) {
      this.prev = prev;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Node.prototype, "nextSibling", {
    get: function get() {
      return this.next;
    },
    set: function set(next) {
      this.next = next;
    },
    enumerable: false,
    configurable: true
  });
  /**
   * Clone this node, and optionally its children.
   *
   * @param recursive Clone child nodes as well.
   * @returns A clone of the node.
   */

  Node.prototype.cloneNode = function (recursive) {
    if (recursive === void 0) {
      recursive = false;
    }

    return cloneNode(this, recursive);
  };

  return Node;
}();

node.Node = Node$1;

var DataNode =
/** @class */
function (_super) {
  __extends$1(DataNode, _super);
  /**
   * @param type The type of the node
   * @param data The content of the data node
   */


  function DataNode(type, data) {
    var _this = _super.call(this, type) || this;

    _this.data = data;
    return _this;
  }

  Object.defineProperty(DataNode.prototype, "nodeValue", {
    get: function get() {
      return this.data;
    },
    set: function set(data) {
      this.data = data;
    },
    enumerable: false,
    configurable: true
  });
  return DataNode;
}(Node$1);

node.DataNode = DataNode;

var Text =
/** @class */
function (_super) {
  __extends$1(Text, _super);

  function Text(data) {
    return _super.call(this, domelementtype_1$1.ElementType.Text, data) || this;
  }

  return Text;
}(DataNode);

node.Text = Text;

var Comment =
/** @class */
function (_super) {
  __extends$1(Comment, _super);

  function Comment(data) {
    return _super.call(this, domelementtype_1$1.ElementType.Comment, data) || this;
  }

  return Comment;
}(DataNode);

node.Comment = Comment;

var ProcessingInstruction =
/** @class */
function (_super) {
  __extends$1(ProcessingInstruction, _super);

  function ProcessingInstruction(name, data) {
    var _this = _super.call(this, domelementtype_1$1.ElementType.Directive, data) || this;

    _this.name = name;
    return _this;
  }

  return ProcessingInstruction;
}(DataNode);

node.ProcessingInstruction = ProcessingInstruction;
/**
 * A `Node` that can have children.
 */

var NodeWithChildren =
/** @class */
function (_super) {
  __extends$1(NodeWithChildren, _super);
  /**
   * @param type Type of the node.
   * @param children Children of the node. Only certain node types can have children.
   */


  function NodeWithChildren(type, children) {
    var _this = _super.call(this, type) || this;

    _this.children = children;
    return _this;
  }

  Object.defineProperty(NodeWithChildren.prototype, "firstChild", {
    // Aliases
    get: function get() {
      var _a;

      return (_a = this.children[0]) !== null && _a !== void 0 ? _a : null;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(NodeWithChildren.prototype, "lastChild", {
    get: function get() {
      return this.children.length > 0 ? this.children[this.children.length - 1] : null;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(NodeWithChildren.prototype, "childNodes", {
    get: function get() {
      return this.children;
    },
    set: function set(children) {
      this.children = children;
    },
    enumerable: false,
    configurable: true
  });
  return NodeWithChildren;
}(Node$1);

node.NodeWithChildren = NodeWithChildren;

var Document =
/** @class */
function (_super) {
  __extends$1(Document, _super);

  function Document(children) {
    return _super.call(this, domelementtype_1$1.ElementType.Root, children) || this;
  }

  return Document;
}(NodeWithChildren);

node.Document = Document;

var Element$1 =
/** @class */
function (_super) {
  __extends$1(Element, _super);
  /**
   * @param name Name of the tag, eg. `div`, `span`.
   * @param attribs Object mapping attribute names to attribute values.
   * @param children Children of the node.
   */


  function Element(name, attribs, children, type) {
    if (children === void 0) {
      children = [];
    }

    if (type === void 0) {
      type = name === "script" ? domelementtype_1$1.ElementType.Script : name === "style" ? domelementtype_1$1.ElementType.Style : domelementtype_1$1.ElementType.Tag;
    }

    var _this = _super.call(this, type, children) || this;

    _this.name = name;
    _this.attribs = attribs;
    return _this;
  }

  Object.defineProperty(Element.prototype, "tagName", {
    // DOM Level 1 aliases
    get: function get() {
      return this.name;
    },
    set: function set(name) {
      this.name = name;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Element.prototype, "attributes", {
    get: function get() {
      var _this = this;

      return Object.keys(this.attribs).map(function (name) {
        var _a, _b;

        return {
          name: name,
          value: _this.attribs[name],
          namespace: (_a = _this["x-attribsNamespace"]) === null || _a === void 0 ? void 0 : _a[name],
          prefix: (_b = _this["x-attribsPrefix"]) === null || _b === void 0 ? void 0 : _b[name]
        };
      });
    },
    enumerable: false,
    configurable: true
  });
  return Element;
}(NodeWithChildren);

node.Element = Element$1;
/**
 * @param node Node to check.
 * @returns `true` if the node is a `Element`, `false` otherwise.
 */

function isTag(node) {
  return domelementtype_1$1.isTag(node);
}

node.isTag = isTag;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `CDATA`, `false` otherwise.
 */

function isCDATA(node) {
  return node.type === domelementtype_1$1.ElementType.CDATA;
}

node.isCDATA = isCDATA;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `Text`, `false` otherwise.
 */

function isText(node) {
  return node.type === domelementtype_1$1.ElementType.Text;
}

node.isText = isText;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `Comment`, `false` otherwise.
 */

function isComment(node) {
  return node.type === domelementtype_1$1.ElementType.Comment;
}

node.isComment = isComment;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `ProcessingInstruction`, `false` otherwise.
 */

function isDirective(node) {
  return node.type === domelementtype_1$1.ElementType.Directive;
}

node.isDirective = isDirective;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `ProcessingInstruction`, `false` otherwise.
 */

function isDocument(node) {
  return node.type === domelementtype_1$1.ElementType.Root;
}

node.isDocument = isDocument;
/**
 * @param node Node to check.
 * @returns `true` if the node is a `NodeWithChildren` (has children), `false` otherwise.
 */

function hasChildren(node) {
  return Object.prototype.hasOwnProperty.call(node, "children");
}

node.hasChildren = hasChildren;
/**
 * Clone a node, and optionally its children.
 *
 * @param recursive Clone child nodes as well.
 * @returns A clone of the node.
 */

function cloneNode(node, recursive) {
  if (recursive === void 0) {
    recursive = false;
  }

  var result;

  if (isText(node)) {
    result = new Text(node.data);
  } else if (isComment(node)) {
    result = new Comment(node.data);
  } else if (isTag(node)) {
    var children = recursive ? cloneChildren(node.children) : [];
    var clone_1 = new Element$1(node.name, __assign$1({}, node.attribs), children);
    children.forEach(function (child) {
      return child.parent = clone_1;
    });

    if (node["x-attribsNamespace"]) {
      clone_1["x-attribsNamespace"] = __assign$1({}, node["x-attribsNamespace"]);
    }

    if (node["x-attribsPrefix"]) {
      clone_1["x-attribsPrefix"] = __assign$1({}, node["x-attribsPrefix"]);
    }

    result = clone_1;
  } else if (isCDATA(node)) {
    var children = recursive ? cloneChildren(node.children) : [];
    var clone_2 = new NodeWithChildren(domelementtype_1$1.ElementType.CDATA, children);
    children.forEach(function (child) {
      return child.parent = clone_2;
    });
    result = clone_2;
  } else if (isDocument(node)) {
    var children = recursive ? cloneChildren(node.children) : [];
    var clone_3 = new Document(children);
    children.forEach(function (child) {
      return child.parent = clone_3;
    });

    if (node["x-mode"]) {
      clone_3["x-mode"] = node["x-mode"];
    }

    result = clone_3;
  } else if (isDirective(node)) {
    var instruction = new ProcessingInstruction(node.name, node.data);

    if (node["x-name"] != null) {
      instruction["x-name"] = node["x-name"];
      instruction["x-publicId"] = node["x-publicId"];
      instruction["x-systemId"] = node["x-systemId"];
    }

    result = instruction;
  } else {
    throw new Error("Not implemented yet: " + node.type);
  }

  result.startIndex = node.startIndex;
  result.endIndex = node.endIndex;
  return result;
}

node.cloneNode = cloneNode;

function cloneChildren(childs) {
  var children = childs.map(function (child) {
    return cloneNode(child, true);
  });

  for (var i = 1; i < children.length; i++) {
    children[i].prev = children[i - 1];
    children[i - 1].next = children[i];
  }

  return children;
}

(function (exports) {

  var __createBinding = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    });
  } : function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
  });

  var __exportStar = commonjsGlobal && commonjsGlobal.__exportStar || function (m, exports) {
    for (var p in m) {
      if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
    }
  };

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.DomHandler = void 0;
  var domelementtype_1 = lib$6;
  var node_1 = node;

  __exportStar(node, exports);

  var reWhitespace = /\s+/g; // Default options

  var defaultOpts = {
    normalizeWhitespace: false,
    withStartIndices: false,
    withEndIndices: false
  };

  var DomHandler =
  /** @class */
  function () {
    /**
     * @param callback Called once parsing has completed.
     * @param options Settings for the handler.
     * @param elementCB Callback whenever a tag is closed.
     */
    function DomHandler(callback, options, elementCB) {
      /** The elements of the DOM */
      this.dom = [];
      /** The root element for the DOM */

      this.root = new node_1.Document(this.dom);
      /** Indicated whether parsing has been completed. */

      this.done = false;
      /** Stack of open tags. */

      this.tagStack = [this.root];
      /** A data node that is still being written to. */

      this.lastNode = null;
      /** Reference to the parser instance. Used for location information. */

      this.parser = null; // Make it possible to skip arguments, for backwards-compatibility

      if (typeof options === "function") {
        elementCB = options;
        options = defaultOpts;
      }

      if (_typeof(callback) === "object") {
        options = callback;
        callback = undefined;
      }

      this.callback = callback !== null && callback !== void 0 ? callback : null;
      this.options = options !== null && options !== void 0 ? options : defaultOpts;
      this.elementCB = elementCB !== null && elementCB !== void 0 ? elementCB : null;
    }

    DomHandler.prototype.onparserinit = function (parser) {
      this.parser = parser;
    }; // Resets the handler back to starting state


    DomHandler.prototype.onreset = function () {
      var _a;

      this.dom = [];
      this.root = new node_1.Document(this.dom);
      this.done = false;
      this.tagStack = [this.root];
      this.lastNode = null;
      this.parser = (_a = this.parser) !== null && _a !== void 0 ? _a : null;
    }; // Signals the handler that parsing is done


    DomHandler.prototype.onend = function () {
      if (this.done) return;
      this.done = true;
      this.parser = null;
      this.handleCallback(null);
    };

    DomHandler.prototype.onerror = function (error) {
      this.handleCallback(error);
    };

    DomHandler.prototype.onclosetag = function () {
      this.lastNode = null;
      var elem = this.tagStack.pop();

      if (this.options.withEndIndices) {
        elem.endIndex = this.parser.endIndex;
      }

      if (this.elementCB) this.elementCB(elem);
    };

    DomHandler.prototype.onopentag = function (name, attribs) {
      var type = this.options.xmlMode ? domelementtype_1.ElementType.Tag : undefined;
      var element = new node_1.Element(name, attribs, undefined, type);
      this.addNode(element);
      this.tagStack.push(element);
    };

    DomHandler.prototype.ontext = function (data) {
      var normalizeWhitespace = this.options.normalizeWhitespace;
      var lastNode = this.lastNode;

      if (lastNode && lastNode.type === domelementtype_1.ElementType.Text) {
        if (normalizeWhitespace) {
          lastNode.data = (lastNode.data + data).replace(reWhitespace, " ");
        } else {
          lastNode.data += data;
        }
      } else {
        if (normalizeWhitespace) {
          data = data.replace(reWhitespace, " ");
        }

        var node = new node_1.Text(data);
        this.addNode(node);
        this.lastNode = node;
      }
    };

    DomHandler.prototype.oncomment = function (data) {
      if (this.lastNode && this.lastNode.type === domelementtype_1.ElementType.Comment) {
        this.lastNode.data += data;
        return;
      }

      var node = new node_1.Comment(data);
      this.addNode(node);
      this.lastNode = node;
    };

    DomHandler.prototype.oncommentend = function () {
      this.lastNode = null;
    };

    DomHandler.prototype.oncdatastart = function () {
      var text = new node_1.Text("");
      var node = new node_1.NodeWithChildren(domelementtype_1.ElementType.CDATA, [text]);
      this.addNode(node);
      text.parent = node;
      this.lastNode = text;
    };

    DomHandler.prototype.oncdataend = function () {
      this.lastNode = null;
    };

    DomHandler.prototype.onprocessinginstruction = function (name, data) {
      var node = new node_1.ProcessingInstruction(name, data);
      this.addNode(node);
    };

    DomHandler.prototype.handleCallback = function (error) {
      if (typeof this.callback === "function") {
        this.callback(error, this.dom);
      } else if (error) {
        throw error;
      }
    };

    DomHandler.prototype.addNode = function (node) {
      var parent = this.tagStack[this.tagStack.length - 1];
      var previousSibling = parent.children[parent.children.length - 1];

      if (this.options.withStartIndices) {
        node.startIndex = this.parser.startIndex;
      }

      if (this.options.withEndIndices) {
        node.endIndex = this.parser.endIndex;
      }

      parent.children.push(node);

      if (previousSibling) {
        node.prev = previousSibling;
        previousSibling.next = node;
      }

      node.parent = parent;
      this.lastNode = null;
    };

    return DomHandler;
  }();

  exports.DomHandler = DomHandler;
  exports["default"] = DomHandler;
})(lib$7);

var lib$5 = {};

var lib$4 = {};

var decode = {};

var Aacute$1 = "Á";
var aacute$1 = "á";
var Abreve = "Ă";
var abreve = "ă";
var ac = "∾";
var acd = "∿";
var acE = "∾̳";
var Acirc$1 = "Â";
var acirc$1 = "â";
var acute$1 = "´";
var Acy = "А";
var acy = "а";
var AElig$1 = "Æ";
var aelig$1 = "æ";
var af = "⁡";
var Afr = "𝔄";
var afr = "𝔞";
var Agrave$1 = "À";
var agrave$1 = "à";
var alefsym = "ℵ";
var aleph = "ℵ";
var Alpha = "Α";
var alpha = "α";
var Amacr = "Ā";
var amacr = "ā";
var amalg = "⨿";
var amp$2 = "&";
var AMP$1 = "&";
var andand = "⩕";
var And = "⩓";
var and = "∧";
var andd = "⩜";
var andslope = "⩘";
var andv = "⩚";
var ang = "∠";
var ange = "⦤";
var angle = "∠";
var angmsdaa = "⦨";
var angmsdab = "⦩";
var angmsdac = "⦪";
var angmsdad = "⦫";
var angmsdae = "⦬";
var angmsdaf = "⦭";
var angmsdag = "⦮";
var angmsdah = "⦯";
var angmsd = "∡";
var angrt = "∟";
var angrtvb = "⊾";
var angrtvbd = "⦝";
var angsph = "∢";
var angst = "Å";
var angzarr = "⍼";
var Aogon = "Ą";
var aogon = "ą";
var Aopf = "𝔸";
var aopf = "𝕒";
var apacir = "⩯";
var ap = "≈";
var apE = "⩰";
var ape = "≊";
var apid = "≋";
var apos$1 = "'";
var ApplyFunction = "⁡";
var approx = "≈";
var approxeq = "≊";
var Aring$1 = "Å";
var aring$1 = "å";
var Ascr = "𝒜";
var ascr = "𝒶";
var Assign = "≔";
var ast = "*";
var asymp = "≈";
var asympeq = "≍";
var Atilde$1 = "Ã";
var atilde$1 = "ã";
var Auml$1 = "Ä";
var auml$1 = "ä";
var awconint = "∳";
var awint = "⨑";
var backcong = "≌";
var backepsilon = "϶";
var backprime = "‵";
var backsim = "∽";
var backsimeq = "⋍";
var Backslash = "∖";
var Barv = "⫧";
var barvee = "⊽";
var barwed = "⌅";
var Barwed = "⌆";
var barwedge = "⌅";
var bbrk = "⎵";
var bbrktbrk = "⎶";
var bcong = "≌";
var Bcy = "Б";
var bcy = "б";
var bdquo = "„";
var becaus = "∵";
var because = "∵";
var Because = "∵";
var bemptyv = "⦰";
var bepsi = "϶";
var bernou = "ℬ";
var Bernoullis = "ℬ";
var Beta = "Β";
var beta = "β";
var beth = "ℶ";
var between = "≬";
var Bfr = "𝔅";
var bfr = "𝔟";
var bigcap = "⋂";
var bigcirc = "◯";
var bigcup = "⋃";
var bigodot = "⨀";
var bigoplus = "⨁";
var bigotimes = "⨂";
var bigsqcup = "⨆";
var bigstar = "★";
var bigtriangledown = "▽";
var bigtriangleup = "△";
var biguplus = "⨄";
var bigvee = "⋁";
var bigwedge = "⋀";
var bkarow = "⤍";
var blacklozenge = "⧫";
var blacksquare = "▪";
var blacktriangle = "▴";
var blacktriangledown = "▾";
var blacktriangleleft = "◂";
var blacktriangleright = "▸";
var blank = "␣";
var blk12 = "▒";
var blk14 = "░";
var blk34 = "▓";
var block = "█";
var bne = "=⃥";
var bnequiv = "≡⃥";
var bNot = "⫭";
var bnot = "⌐";
var Bopf = "𝔹";
var bopf = "𝕓";
var bot = "⊥";
var bottom = "⊥";
var bowtie = "⋈";
var boxbox = "⧉";
var boxdl = "┐";
var boxdL = "╕";
var boxDl = "╖";
var boxDL = "╗";
var boxdr = "┌";
var boxdR = "╒";
var boxDr = "╓";
var boxDR = "╔";
var boxh = "─";
var boxH = "═";
var boxhd = "┬";
var boxHd = "╤";
var boxhD = "╥";
var boxHD = "╦";
var boxhu = "┴";
var boxHu = "╧";
var boxhU = "╨";
var boxHU = "╩";
var boxminus = "⊟";
var boxplus = "⊞";
var boxtimes = "⊠";
var boxul = "┘";
var boxuL = "╛";
var boxUl = "╜";
var boxUL = "╝";
var boxur = "└";
var boxuR = "╘";
var boxUr = "╙";
var boxUR = "╚";
var boxv = "│";
var boxV = "║";
var boxvh = "┼";
var boxvH = "╪";
var boxVh = "╫";
var boxVH = "╬";
var boxvl = "┤";
var boxvL = "╡";
var boxVl = "╢";
var boxVL = "╣";
var boxvr = "├";
var boxvR = "╞";
var boxVr = "╟";
var boxVR = "╠";
var bprime = "‵";
var breve = "˘";
var Breve = "˘";
var brvbar$1 = "¦";
var bscr = "𝒷";
var Bscr = "ℬ";
var bsemi = "⁏";
var bsim = "∽";
var bsime = "⋍";
var bsolb = "⧅";
var bsol = "\\";
var bsolhsub = "⟈";
var bull = "•";
var bullet = "•";
var bump = "≎";
var bumpE = "⪮";
var bumpe = "≏";
var Bumpeq = "≎";
var bumpeq = "≏";
var Cacute = "Ć";
var cacute = "ć";
var capand = "⩄";
var capbrcup = "⩉";
var capcap = "⩋";
var cap = "∩";
var Cap = "⋒";
var capcup = "⩇";
var capdot = "⩀";
var CapitalDifferentialD = "ⅅ";
var caps = "∩︀";
var caret = "⁁";
var caron = "ˇ";
var Cayleys = "ℭ";
var ccaps = "⩍";
var Ccaron = "Č";
var ccaron = "č";
var Ccedil$1 = "Ç";
var ccedil$1 = "ç";
var Ccirc = "Ĉ";
var ccirc = "ĉ";
var Cconint = "∰";
var ccups = "⩌";
var ccupssm = "⩐";
var Cdot = "Ċ";
var cdot = "ċ";
var cedil$1 = "¸";
var Cedilla = "¸";
var cemptyv = "⦲";
var cent$1 = "¢";
var centerdot = "·";
var CenterDot = "·";
var cfr = "𝔠";
var Cfr = "ℭ";
var CHcy = "Ч";
var chcy = "ч";
var check = "✓";
var checkmark = "✓";
var Chi = "Χ";
var chi = "χ";
var circ = "ˆ";
var circeq = "≗";
var circlearrowleft = "↺";
var circlearrowright = "↻";
var circledast = "⊛";
var circledcirc = "⊚";
var circleddash = "⊝";
var CircleDot = "⊙";
var circledR = "®";
var circledS = "Ⓢ";
var CircleMinus = "⊖";
var CirclePlus = "⊕";
var CircleTimes = "⊗";
var cir = "○";
var cirE = "⧃";
var cire = "≗";
var cirfnint = "⨐";
var cirmid = "⫯";
var cirscir = "⧂";
var ClockwiseContourIntegral = "∲";
var CloseCurlyDoubleQuote = "”";
var CloseCurlyQuote = "’";
var clubs = "♣";
var clubsuit = "♣";
var colon = ":";
var Colon = "∷";
var Colone = "⩴";
var colone = "≔";
var coloneq = "≔";
var comma = ",";
var commat = "@";
var comp = "∁";
var compfn = "∘";
var complement = "∁";
var complexes = "ℂ";
var cong = "≅";
var congdot = "⩭";
var Congruent = "≡";
var conint = "∮";
var Conint = "∯";
var ContourIntegral = "∮";
var copf = "𝕔";
var Copf = "ℂ";
var coprod = "∐";
var Coproduct = "∐";
var copy$1 = "©";
var COPY$1 = "©";
var copysr = "℗";
var CounterClockwiseContourIntegral = "∳";
var crarr = "↵";
var cross = "✗";
var Cross = "⨯";
var Cscr = "𝒞";
var cscr = "𝒸";
var csub = "⫏";
var csube = "⫑";
var csup = "⫐";
var csupe = "⫒";
var ctdot = "⋯";
var cudarrl = "⤸";
var cudarrr = "⤵";
var cuepr = "⋞";
var cuesc = "⋟";
var cularr = "↶";
var cularrp = "⤽";
var cupbrcap = "⩈";
var cupcap = "⩆";
var CupCap = "≍";
var cup = "∪";
var Cup = "⋓";
var cupcup = "⩊";
var cupdot = "⊍";
var cupor = "⩅";
var cups = "∪︀";
var curarr = "↷";
var curarrm = "⤼";
var curlyeqprec = "⋞";
var curlyeqsucc = "⋟";
var curlyvee = "⋎";
var curlywedge = "⋏";
var curren$1 = "¤";
var curvearrowleft = "↶";
var curvearrowright = "↷";
var cuvee = "⋎";
var cuwed = "⋏";
var cwconint = "∲";
var cwint = "∱";
var cylcty = "⌭";
var dagger = "†";
var Dagger = "‡";
var daleth = "ℸ";
var darr = "↓";
var Darr = "↡";
var dArr = "⇓";
var dash = "‐";
var Dashv = "⫤";
var dashv = "⊣";
var dbkarow = "⤏";
var dblac = "˝";
var Dcaron = "Ď";
var dcaron = "ď";
var Dcy = "Д";
var dcy = "д";
var ddagger = "‡";
var ddarr = "⇊";
var DD = "ⅅ";
var dd = "ⅆ";
var DDotrahd = "⤑";
var ddotseq = "⩷";
var deg$1 = "°";
var Del = "∇";
var Delta = "Δ";
var delta = "δ";
var demptyv = "⦱";
var dfisht = "⥿";
var Dfr = "𝔇";
var dfr = "𝔡";
var dHar = "⥥";
var dharl = "⇃";
var dharr = "⇂";
var DiacriticalAcute = "´";
var DiacriticalDot = "˙";
var DiacriticalDoubleAcute = "˝";
var DiacriticalGrave = "`";
var DiacriticalTilde = "˜";
var diam = "⋄";
var diamond = "⋄";
var Diamond = "⋄";
var diamondsuit = "♦";
var diams = "♦";
var die = "¨";
var DifferentialD = "ⅆ";
var digamma = "ϝ";
var disin = "⋲";
var div = "÷";
var divide$1 = "÷";
var divideontimes = "⋇";
var divonx = "⋇";
var DJcy = "Ђ";
var djcy = "ђ";
var dlcorn = "⌞";
var dlcrop = "⌍";
var dollar = "$";
var Dopf = "𝔻";
var dopf = "𝕕";
var Dot = "¨";
var dot = "˙";
var DotDot = "⃜";
var doteq = "≐";
var doteqdot = "≑";
var DotEqual = "≐";
var dotminus = "∸";
var dotplus = "∔";
var dotsquare = "⊡";
var doublebarwedge = "⌆";
var DoubleContourIntegral = "∯";
var DoubleDot = "¨";
var DoubleDownArrow = "⇓";
var DoubleLeftArrow = "⇐";
var DoubleLeftRightArrow = "⇔";
var DoubleLeftTee = "⫤";
var DoubleLongLeftArrow = "⟸";
var DoubleLongLeftRightArrow = "⟺";
var DoubleLongRightArrow = "⟹";
var DoubleRightArrow = "⇒";
var DoubleRightTee = "⊨";
var DoubleUpArrow = "⇑";
var DoubleUpDownArrow = "⇕";
var DoubleVerticalBar = "∥";
var DownArrowBar = "⤓";
var downarrow = "↓";
var DownArrow = "↓";
var Downarrow = "⇓";
var DownArrowUpArrow = "⇵";
var DownBreve = "̑";
var downdownarrows = "⇊";
var downharpoonleft = "⇃";
var downharpoonright = "⇂";
var DownLeftRightVector = "⥐";
var DownLeftTeeVector = "⥞";
var DownLeftVectorBar = "⥖";
var DownLeftVector = "↽";
var DownRightTeeVector = "⥟";
var DownRightVectorBar = "⥗";
var DownRightVector = "⇁";
var DownTeeArrow = "↧";
var DownTee = "⊤";
var drbkarow = "⤐";
var drcorn = "⌟";
var drcrop = "⌌";
var Dscr = "𝒟";
var dscr = "𝒹";
var DScy = "Ѕ";
var dscy = "ѕ";
var dsol = "⧶";
var Dstrok = "Đ";
var dstrok = "đ";
var dtdot = "⋱";
var dtri = "▿";
var dtrif = "▾";
var duarr = "⇵";
var duhar = "⥯";
var dwangle = "⦦";
var DZcy = "Џ";
var dzcy = "џ";
var dzigrarr = "⟿";
var Eacute$1 = "É";
var eacute$1 = "é";
var easter = "⩮";
var Ecaron = "Ě";
var ecaron = "ě";
var Ecirc$1 = "Ê";
var ecirc$1 = "ê";
var ecir = "≖";
var ecolon = "≕";
var Ecy = "Э";
var ecy = "э";
var eDDot = "⩷";
var Edot = "Ė";
var edot = "ė";
var eDot = "≑";
var ee = "ⅇ";
var efDot = "≒";
var Efr = "𝔈";
var efr = "𝔢";
var eg = "⪚";
var Egrave$1 = "È";
var egrave$1 = "è";
var egs = "⪖";
var egsdot = "⪘";
var el = "⪙";
var Element = "∈";
var elinters = "⏧";
var ell = "ℓ";
var els = "⪕";
var elsdot = "⪗";
var Emacr = "Ē";
var emacr = "ē";
var empty$1 = "∅";
var emptyset = "∅";
var EmptySmallSquare = "◻";
var emptyv = "∅";
var EmptyVerySmallSquare = "▫";
var emsp13 = " ";
var emsp14 = " ";
var emsp = " ";
var ENG = "Ŋ";
var eng = "ŋ";
var ensp = " ";
var Eogon = "Ę";
var eogon = "ę";
var Eopf = "𝔼";
var eopf = "𝕖";
var epar = "⋕";
var eparsl = "⧣";
var eplus = "⩱";
var epsi = "ε";
var Epsilon = "Ε";
var epsilon = "ε";
var epsiv = "ϵ";
var eqcirc = "≖";
var eqcolon = "≕";
var eqsim = "≂";
var eqslantgtr = "⪖";
var eqslantless = "⪕";
var Equal = "⩵";
var equals = "=";
var EqualTilde = "≂";
var equest = "≟";
var Equilibrium = "⇌";
var equiv = "≡";
var equivDD = "⩸";
var eqvparsl = "⧥";
var erarr = "⥱";
var erDot = "≓";
var escr = "ℯ";
var Escr = "ℰ";
var esdot = "≐";
var Esim = "⩳";
var esim = "≂";
var Eta = "Η";
var eta = "η";
var ETH$1 = "Ð";
var eth$1 = "ð";
var Euml$1 = "Ë";
var euml$1 = "ë";
var euro = "€";
var excl = "!";
var exist = "∃";
var Exists = "∃";
var expectation = "ℰ";
var exponentiale = "ⅇ";
var ExponentialE = "ⅇ";
var fallingdotseq = "≒";
var Fcy = "Ф";
var fcy = "ф";
var female = "♀";
var ffilig = "ﬃ";
var fflig = "ﬀ";
var ffllig = "ﬄ";
var Ffr = "𝔉";
var ffr = "𝔣";
var filig = "ﬁ";
var FilledSmallSquare = "◼";
var FilledVerySmallSquare = "▪";
var fjlig = "fj";
var flat = "♭";
var fllig = "ﬂ";
var fltns = "▱";
var fnof = "ƒ";
var Fopf = "𝔽";
var fopf = "𝕗";
var forall = "∀";
var ForAll = "∀";
var fork = "⋔";
var forkv = "⫙";
var Fouriertrf = "ℱ";
var fpartint = "⨍";
var frac12$1 = "½";
var frac13 = "⅓";
var frac14$1 = "¼";
var frac15 = "⅕";
var frac16 = "⅙";
var frac18 = "⅛";
var frac23 = "⅔";
var frac25 = "⅖";
var frac34$1 = "¾";
var frac35 = "⅗";
var frac38 = "⅜";
var frac45 = "⅘";
var frac56 = "⅚";
var frac58 = "⅝";
var frac78 = "⅞";
var frasl = "⁄";
var frown = "⌢";
var fscr = "𝒻";
var Fscr = "ℱ";
var gacute = "ǵ";
var Gamma = "Γ";
var gamma = "γ";
var Gammad = "Ϝ";
var gammad = "ϝ";
var gap = "⪆";
var Gbreve = "Ğ";
var gbreve = "ğ";
var Gcedil = "Ģ";
var Gcirc = "Ĝ";
var gcirc = "ĝ";
var Gcy = "Г";
var gcy = "г";
var Gdot = "Ġ";
var gdot = "ġ";
var ge = "≥";
var gE = "≧";
var gEl = "⪌";
var gel = "⋛";
var geq = "≥";
var geqq = "≧";
var geqslant = "⩾";
var gescc = "⪩";
var ges = "⩾";
var gesdot = "⪀";
var gesdoto = "⪂";
var gesdotol = "⪄";
var gesl = "⋛︀";
var gesles = "⪔";
var Gfr = "𝔊";
var gfr = "𝔤";
var gg = "≫";
var Gg = "⋙";
var ggg = "⋙";
var gimel = "ℷ";
var GJcy = "Ѓ";
var gjcy = "ѓ";
var gla = "⪥";
var gl = "≷";
var glE = "⪒";
var glj = "⪤";
var gnap = "⪊";
var gnapprox = "⪊";
var gne = "⪈";
var gnE = "≩";
var gneq = "⪈";
var gneqq = "≩";
var gnsim = "⋧";
var Gopf = "𝔾";
var gopf = "𝕘";
var grave = "`";
var GreaterEqual = "≥";
var GreaterEqualLess = "⋛";
var GreaterFullEqual = "≧";
var GreaterGreater = "⪢";
var GreaterLess = "≷";
var GreaterSlantEqual = "⩾";
var GreaterTilde = "≳";
var Gscr = "𝒢";
var gscr = "ℊ";
var gsim = "≳";
var gsime = "⪎";
var gsiml = "⪐";
var gtcc = "⪧";
var gtcir = "⩺";
var gt$2 = ">";
var GT$1 = ">";
var Gt = "≫";
var gtdot = "⋗";
var gtlPar = "⦕";
var gtquest = "⩼";
var gtrapprox = "⪆";
var gtrarr = "⥸";
var gtrdot = "⋗";
var gtreqless = "⋛";
var gtreqqless = "⪌";
var gtrless = "≷";
var gtrsim = "≳";
var gvertneqq = "≩︀";
var gvnE = "≩︀";
var Hacek = "ˇ";
var hairsp = " ";
var half = "½";
var hamilt = "ℋ";
var HARDcy = "Ъ";
var hardcy = "ъ";
var harrcir = "⥈";
var harr = "↔";
var hArr = "⇔";
var harrw = "↭";
var Hat = "^";
var hbar = "ℏ";
var Hcirc = "Ĥ";
var hcirc = "ĥ";
var hearts = "♥";
var heartsuit = "♥";
var hellip = "…";
var hercon = "⊹";
var hfr = "𝔥";
var Hfr = "ℌ";
var HilbertSpace = "ℋ";
var hksearow = "⤥";
var hkswarow = "⤦";
var hoarr = "⇿";
var homtht = "∻";
var hookleftarrow = "↩";
var hookrightarrow = "↪";
var hopf = "𝕙";
var Hopf = "ℍ";
var horbar = "―";
var HorizontalLine = "─";
var hscr = "𝒽";
var Hscr = "ℋ";
var hslash = "ℏ";
var Hstrok = "Ħ";
var hstrok = "ħ";
var HumpDownHump = "≎";
var HumpEqual = "≏";
var hybull = "⁃";
var hyphen = "‐";
var Iacute$1 = "Í";
var iacute$1 = "í";
var ic = "⁣";
var Icirc$1 = "Î";
var icirc$1 = "î";
var Icy = "И";
var icy = "и";
var Idot = "İ";
var IEcy = "Е";
var iecy = "е";
var iexcl$1 = "¡";
var iff = "⇔";
var ifr = "𝔦";
var Ifr = "ℑ";
var Igrave$1 = "Ì";
var igrave$1 = "ì";
var ii = "ⅈ";
var iiiint = "⨌";
var iiint = "∭";
var iinfin = "⧜";
var iiota = "℩";
var IJlig = "Ĳ";
var ijlig = "ĳ";
var Imacr = "Ī";
var imacr = "ī";
var image = "ℑ";
var ImaginaryI = "ⅈ";
var imagline = "ℐ";
var imagpart = "ℑ";
var imath = "ı";
var Im = "ℑ";
var imof = "⊷";
var imped = "Ƶ";
var Implies = "⇒";
var incare = "℅";
var infin = "∞";
var infintie = "⧝";
var inodot = "ı";
var intcal = "⊺";
var int = "∫";
var Int = "∬";
var integers = "ℤ";
var Integral = "∫";
var intercal = "⊺";
var Intersection = "⋂";
var intlarhk = "⨗";
var intprod = "⨼";
var InvisibleComma = "⁣";
var InvisibleTimes = "⁢";
var IOcy = "Ё";
var iocy = "ё";
var Iogon = "Į";
var iogon = "į";
var Iopf = "𝕀";
var iopf = "𝕚";
var Iota = "Ι";
var iota = "ι";
var iprod = "⨼";
var iquest$1 = "¿";
var iscr = "𝒾";
var Iscr = "ℐ";
var isin = "∈";
var isindot = "⋵";
var isinE = "⋹";
var isins = "⋴";
var isinsv = "⋳";
var isinv = "∈";
var it = "⁢";
var Itilde = "Ĩ";
var itilde = "ĩ";
var Iukcy = "І";
var iukcy = "і";
var Iuml$1 = "Ï";
var iuml$1 = "ï";
var Jcirc = "Ĵ";
var jcirc = "ĵ";
var Jcy = "Й";
var jcy = "й";
var Jfr = "𝔍";
var jfr = "𝔧";
var jmath = "ȷ";
var Jopf = "𝕁";
var jopf = "𝕛";
var Jscr = "𝒥";
var jscr = "𝒿";
var Jsercy = "Ј";
var jsercy = "ј";
var Jukcy = "Є";
var jukcy = "є";
var Kappa = "Κ";
var kappa = "κ";
var kappav = "ϰ";
var Kcedil = "Ķ";
var kcedil = "ķ";
var Kcy = "К";
var kcy = "к";
var Kfr = "𝔎";
var kfr = "𝔨";
var kgreen = "ĸ";
var KHcy = "Х";
var khcy = "х";
var KJcy = "Ќ";
var kjcy = "ќ";
var Kopf = "𝕂";
var kopf = "𝕜";
var Kscr = "𝒦";
var kscr = "𝓀";
var lAarr = "⇚";
var Lacute = "Ĺ";
var lacute = "ĺ";
var laemptyv = "⦴";
var lagran = "ℒ";
var Lambda = "Λ";
var lambda = "λ";
var lang = "⟨";
var Lang = "⟪";
var langd = "⦑";
var langle = "⟨";
var lap = "⪅";
var Laplacetrf = "ℒ";
var laquo$1 = "«";
var larrb = "⇤";
var larrbfs = "⤟";
var larr = "←";
var Larr = "↞";
var lArr = "⇐";
var larrfs = "⤝";
var larrhk = "↩";
var larrlp = "↫";
var larrpl = "⤹";
var larrsim = "⥳";
var larrtl = "↢";
var latail = "⤙";
var lAtail = "⤛";
var lat = "⪫";
var late = "⪭";
var lates = "⪭︀";
var lbarr = "⤌";
var lBarr = "⤎";
var lbbrk = "❲";
var lbrace = "{";
var lbrack = "[";
var lbrke = "⦋";
var lbrksld = "⦏";
var lbrkslu = "⦍";
var Lcaron = "Ľ";
var lcaron = "ľ";
var Lcedil = "Ļ";
var lcedil = "ļ";
var lceil = "⌈";
var lcub = "{";
var Lcy = "Л";
var lcy = "л";
var ldca = "⤶";
var ldquo = "“";
var ldquor = "„";
var ldrdhar = "⥧";
var ldrushar = "⥋";
var ldsh = "↲";
var le = "≤";
var lE = "≦";
var LeftAngleBracket = "⟨";
var LeftArrowBar = "⇤";
var leftarrow = "←";
var LeftArrow = "←";
var Leftarrow = "⇐";
var LeftArrowRightArrow = "⇆";
var leftarrowtail = "↢";
var LeftCeiling = "⌈";
var LeftDoubleBracket = "⟦";
var LeftDownTeeVector = "⥡";
var LeftDownVectorBar = "⥙";
var LeftDownVector = "⇃";
var LeftFloor = "⌊";
var leftharpoondown = "↽";
var leftharpoonup = "↼";
var leftleftarrows = "⇇";
var leftrightarrow = "↔";
var LeftRightArrow = "↔";
var Leftrightarrow = "⇔";
var leftrightarrows = "⇆";
var leftrightharpoons = "⇋";
var leftrightsquigarrow = "↭";
var LeftRightVector = "⥎";
var LeftTeeArrow = "↤";
var LeftTee = "⊣";
var LeftTeeVector = "⥚";
var leftthreetimes = "⋋";
var LeftTriangleBar = "⧏";
var LeftTriangle = "⊲";
var LeftTriangleEqual = "⊴";
var LeftUpDownVector = "⥑";
var LeftUpTeeVector = "⥠";
var LeftUpVectorBar = "⥘";
var LeftUpVector = "↿";
var LeftVectorBar = "⥒";
var LeftVector = "↼";
var lEg = "⪋";
var leg = "⋚";
var leq = "≤";
var leqq = "≦";
var leqslant = "⩽";
var lescc = "⪨";
var les = "⩽";
var lesdot = "⩿";
var lesdoto = "⪁";
var lesdotor = "⪃";
var lesg = "⋚︀";
var lesges = "⪓";
var lessapprox = "⪅";
var lessdot = "⋖";
var lesseqgtr = "⋚";
var lesseqqgtr = "⪋";
var LessEqualGreater = "⋚";
var LessFullEqual = "≦";
var LessGreater = "≶";
var lessgtr = "≶";
var LessLess = "⪡";
var lesssim = "≲";
var LessSlantEqual = "⩽";
var LessTilde = "≲";
var lfisht = "⥼";
var lfloor = "⌊";
var Lfr = "𝔏";
var lfr = "𝔩";
var lg = "≶";
var lgE = "⪑";
var lHar = "⥢";
var lhard = "↽";
var lharu = "↼";
var lharul = "⥪";
var lhblk = "▄";
var LJcy = "Љ";
var ljcy = "љ";
var llarr = "⇇";
var ll = "≪";
var Ll = "⋘";
var llcorner = "⌞";
var Lleftarrow = "⇚";
var llhard = "⥫";
var lltri = "◺";
var Lmidot = "Ŀ";
var lmidot = "ŀ";
var lmoustache = "⎰";
var lmoust = "⎰";
var lnap = "⪉";
var lnapprox = "⪉";
var lne = "⪇";
var lnE = "≨";
var lneq = "⪇";
var lneqq = "≨";
var lnsim = "⋦";
var loang = "⟬";
var loarr = "⇽";
var lobrk = "⟦";
var longleftarrow = "⟵";
var LongLeftArrow = "⟵";
var Longleftarrow = "⟸";
var longleftrightarrow = "⟷";
var LongLeftRightArrow = "⟷";
var Longleftrightarrow = "⟺";
var longmapsto = "⟼";
var longrightarrow = "⟶";
var LongRightArrow = "⟶";
var Longrightarrow = "⟹";
var looparrowleft = "↫";
var looparrowright = "↬";
var lopar = "⦅";
var Lopf = "𝕃";
var lopf = "𝕝";
var loplus = "⨭";
var lotimes = "⨴";
var lowast = "∗";
var lowbar = "_";
var LowerLeftArrow = "↙";
var LowerRightArrow = "↘";
var loz = "◊";
var lozenge = "◊";
var lozf = "⧫";
var lpar = "(";
var lparlt = "⦓";
var lrarr = "⇆";
var lrcorner = "⌟";
var lrhar = "⇋";
var lrhard = "⥭";
var lrm = "‎";
var lrtri = "⊿";
var lsaquo = "‹";
var lscr = "𝓁";
var Lscr = "ℒ";
var lsh = "↰";
var Lsh = "↰";
var lsim = "≲";
var lsime = "⪍";
var lsimg = "⪏";
var lsqb = "[";
var lsquo = "‘";
var lsquor = "‚";
var Lstrok = "Ł";
var lstrok = "ł";
var ltcc = "⪦";
var ltcir = "⩹";
var lt$2 = "<";
var LT$1 = "<";
var Lt = "≪";
var ltdot = "⋖";
var lthree = "⋋";
var ltimes = "⋉";
var ltlarr = "⥶";
var ltquest = "⩻";
var ltri = "◃";
var ltrie = "⊴";
var ltrif = "◂";
var ltrPar = "⦖";
var lurdshar = "⥊";
var luruhar = "⥦";
var lvertneqq = "≨︀";
var lvnE = "≨︀";
var macr$1 = "¯";
var male = "♂";
var malt = "✠";
var maltese = "✠";
var map$1 = "↦";
var mapsto = "↦";
var mapstodown = "↧";
var mapstoleft = "↤";
var mapstoup = "↥";
var marker = "▮";
var mcomma = "⨩";
var Mcy = "М";
var mcy = "м";
var mdash = "—";
var mDDot = "∺";
var measuredangle = "∡";
var MediumSpace = " ";
var Mellintrf = "ℳ";
var Mfr = "𝔐";
var mfr = "𝔪";
var mho = "℧";
var micro$1 = "µ";
var midast = "*";
var midcir = "⫰";
var mid = "∣";
var middot$1 = "·";
var minusb = "⊟";
var minus = "−";
var minusd = "∸";
var minusdu = "⨪";
var MinusPlus = "∓";
var mlcp = "⫛";
var mldr = "…";
var mnplus = "∓";
var models = "⊧";
var Mopf = "𝕄";
var mopf = "𝕞";
var mp = "∓";
var mscr = "𝓂";
var Mscr = "ℳ";
var mstpos = "∾";
var Mu = "Μ";
var mu = "μ";
var multimap = "⊸";
var mumap = "⊸";
var nabla = "∇";
var Nacute = "Ń";
var nacute = "ń";
var nang = "∠⃒";
var nap = "≉";
var napE = "⩰̸";
var napid = "≋̸";
var napos = "ŉ";
var napprox = "≉";
var natural = "♮";
var naturals = "ℕ";
var natur = "♮";
var nbsp$1 = " ";
var nbump = "≎̸";
var nbumpe = "≏̸";
var ncap = "⩃";
var Ncaron = "Ň";
var ncaron = "ň";
var Ncedil = "Ņ";
var ncedil = "ņ";
var ncong = "≇";
var ncongdot = "⩭̸";
var ncup = "⩂";
var Ncy = "Н";
var ncy = "н";
var ndash = "–";
var nearhk = "⤤";
var nearr = "↗";
var neArr = "⇗";
var nearrow = "↗";
var ne = "≠";
var nedot = "≐̸";
var NegativeMediumSpace = "​";
var NegativeThickSpace = "​";
var NegativeThinSpace = "​";
var NegativeVeryThinSpace = "​";
var nequiv = "≢";
var nesear = "⤨";
var nesim = "≂̸";
var NestedGreaterGreater = "≫";
var NestedLessLess = "≪";
var NewLine = "\n";
var nexist = "∄";
var nexists = "∄";
var Nfr = "𝔑";
var nfr = "𝔫";
var ngE = "≧̸";
var nge = "≱";
var ngeq = "≱";
var ngeqq = "≧̸";
var ngeqslant = "⩾̸";
var nges = "⩾̸";
var nGg = "⋙̸";
var ngsim = "≵";
var nGt = "≫⃒";
var ngt = "≯";
var ngtr = "≯";
var nGtv = "≫̸";
var nharr = "↮";
var nhArr = "⇎";
var nhpar = "⫲";
var ni = "∋";
var nis = "⋼";
var nisd = "⋺";
var niv = "∋";
var NJcy = "Њ";
var njcy = "њ";
var nlarr = "↚";
var nlArr = "⇍";
var nldr = "‥";
var nlE = "≦̸";
var nle = "≰";
var nleftarrow = "↚";
var nLeftarrow = "⇍";
var nleftrightarrow = "↮";
var nLeftrightarrow = "⇎";
var nleq = "≰";
var nleqq = "≦̸";
var nleqslant = "⩽̸";
var nles = "⩽̸";
var nless = "≮";
var nLl = "⋘̸";
var nlsim = "≴";
var nLt = "≪⃒";
var nlt = "≮";
var nltri = "⋪";
var nltrie = "⋬";
var nLtv = "≪̸";
var nmid = "∤";
var NoBreak = "⁠";
var NonBreakingSpace = " ";
var nopf = "𝕟";
var Nopf = "ℕ";
var Not = "⫬";
var not$2 = "¬";
var NotCongruent = "≢";
var NotCupCap = "≭";
var NotDoubleVerticalBar = "∦";
var NotElement = "∉";
var NotEqual = "≠";
var NotEqualTilde = "≂̸";
var NotExists = "∄";
var NotGreater = "≯";
var NotGreaterEqual = "≱";
var NotGreaterFullEqual = "≧̸";
var NotGreaterGreater = "≫̸";
var NotGreaterLess = "≹";
var NotGreaterSlantEqual = "⩾̸";
var NotGreaterTilde = "≵";
var NotHumpDownHump = "≎̸";
var NotHumpEqual = "≏̸";
var notin = "∉";
var notindot = "⋵̸";
var notinE = "⋹̸";
var notinva = "∉";
var notinvb = "⋷";
var notinvc = "⋶";
var NotLeftTriangleBar = "⧏̸";
var NotLeftTriangle = "⋪";
var NotLeftTriangleEqual = "⋬";
var NotLess = "≮";
var NotLessEqual = "≰";
var NotLessGreater = "≸";
var NotLessLess = "≪̸";
var NotLessSlantEqual = "⩽̸";
var NotLessTilde = "≴";
var NotNestedGreaterGreater = "⪢̸";
var NotNestedLessLess = "⪡̸";
var notni = "∌";
var notniva = "∌";
var notnivb = "⋾";
var notnivc = "⋽";
var NotPrecedes = "⊀";
var NotPrecedesEqual = "⪯̸";
var NotPrecedesSlantEqual = "⋠";
var NotReverseElement = "∌";
var NotRightTriangleBar = "⧐̸";
var NotRightTriangle = "⋫";
var NotRightTriangleEqual = "⋭";
var NotSquareSubset = "⊏̸";
var NotSquareSubsetEqual = "⋢";
var NotSquareSuperset = "⊐̸";
var NotSquareSupersetEqual = "⋣";
var NotSubset = "⊂⃒";
var NotSubsetEqual = "⊈";
var NotSucceeds = "⊁";
var NotSucceedsEqual = "⪰̸";
var NotSucceedsSlantEqual = "⋡";
var NotSucceedsTilde = "≿̸";
var NotSuperset = "⊃⃒";
var NotSupersetEqual = "⊉";
var NotTilde = "≁";
var NotTildeEqual = "≄";
var NotTildeFullEqual = "≇";
var NotTildeTilde = "≉";
var NotVerticalBar = "∤";
var nparallel = "∦";
var npar = "∦";
var nparsl = "⫽⃥";
var npart = "∂̸";
var npolint = "⨔";
var npr = "⊀";
var nprcue = "⋠";
var nprec = "⊀";
var npreceq = "⪯̸";
var npre = "⪯̸";
var nrarrc = "⤳̸";
var nrarr = "↛";
var nrArr = "⇏";
var nrarrw = "↝̸";
var nrightarrow = "↛";
var nRightarrow = "⇏";
var nrtri = "⋫";
var nrtrie = "⋭";
var nsc = "⊁";
var nsccue = "⋡";
var nsce = "⪰̸";
var Nscr = "𝒩";
var nscr = "𝓃";
var nshortmid = "∤";
var nshortparallel = "∦";
var nsim = "≁";
var nsime = "≄";
var nsimeq = "≄";
var nsmid = "∤";
var nspar = "∦";
var nsqsube = "⋢";
var nsqsupe = "⋣";
var nsub = "⊄";
var nsubE = "⫅̸";
var nsube = "⊈";
var nsubset = "⊂⃒";
var nsubseteq = "⊈";
var nsubseteqq = "⫅̸";
var nsucc = "⊁";
var nsucceq = "⪰̸";
var nsup = "⊅";
var nsupE = "⫆̸";
var nsupe = "⊉";
var nsupset = "⊃⃒";
var nsupseteq = "⊉";
var nsupseteqq = "⫆̸";
var ntgl = "≹";
var Ntilde$1 = "Ñ";
var ntilde$1 = "ñ";
var ntlg = "≸";
var ntriangleleft = "⋪";
var ntrianglelefteq = "⋬";
var ntriangleright = "⋫";
var ntrianglerighteq = "⋭";
var Nu = "Ν";
var nu = "ν";
var num = "#";
var numero = "№";
var numsp = " ";
var nvap = "≍⃒";
var nvdash = "⊬";
var nvDash = "⊭";
var nVdash = "⊮";
var nVDash = "⊯";
var nvge = "≥⃒";
var nvgt = ">⃒";
var nvHarr = "⤄";
var nvinfin = "⧞";
var nvlArr = "⤂";
var nvle = "≤⃒";
var nvlt = "<⃒";
var nvltrie = "⊴⃒";
var nvrArr = "⤃";
var nvrtrie = "⊵⃒";
var nvsim = "∼⃒";
var nwarhk = "⤣";
var nwarr = "↖";
var nwArr = "⇖";
var nwarrow = "↖";
var nwnear = "⤧";
var Oacute$1 = "Ó";
var oacute$1 = "ó";
var oast = "⊛";
var Ocirc$1 = "Ô";
var ocirc$1 = "ô";
var ocir = "⊚";
var Ocy = "О";
var ocy = "о";
var odash = "⊝";
var Odblac = "Ő";
var odblac = "ő";
var odiv = "⨸";
var odot = "⊙";
var odsold = "⦼";
var OElig = "Œ";
var oelig = "œ";
var ofcir = "⦿";
var Ofr = "𝔒";
var ofr = "𝔬";
var ogon = "˛";
var Ograve$1 = "Ò";
var ograve$1 = "ò";
var ogt = "⧁";
var ohbar = "⦵";
var ohm = "Ω";
var oint = "∮";
var olarr = "↺";
var olcir = "⦾";
var olcross = "⦻";
var oline = "‾";
var olt = "⧀";
var Omacr = "Ō";
var omacr = "ō";
var Omega = "Ω";
var omega = "ω";
var Omicron = "Ο";
var omicron = "ο";
var omid = "⦶";
var ominus = "⊖";
var Oopf = "𝕆";
var oopf = "𝕠";
var opar = "⦷";
var OpenCurlyDoubleQuote = "“";
var OpenCurlyQuote = "‘";
var operp = "⦹";
var oplus = "⊕";
var orarr = "↻";
var Or = "⩔";
var or = "∨";
var ord = "⩝";
var order = "ℴ";
var orderof = "ℴ";
var ordf$1 = "ª";
var ordm$1 = "º";
var origof = "⊶";
var oror = "⩖";
var orslope = "⩗";
var orv = "⩛";
var oS = "Ⓢ";
var Oscr = "𝒪";
var oscr = "ℴ";
var Oslash$1 = "Ø";
var oslash$1 = "ø";
var osol = "⊘";
var Otilde$1 = "Õ";
var otilde$1 = "õ";
var otimesas = "⨶";
var Otimes = "⨷";
var otimes = "⊗";
var Ouml$1 = "Ö";
var ouml$1 = "ö";
var ovbar = "⌽";
var OverBar = "‾";
var OverBrace = "⏞";
var OverBracket = "⎴";
var OverParenthesis = "⏜";
var para$1 = "¶";
var parallel = "∥";
var par = "∥";
var parsim = "⫳";
var parsl = "⫽";
var part = "∂";
var PartialD = "∂";
var Pcy = "П";
var pcy = "п";
var percnt = "%";
var period = ".";
var permil = "‰";
var perp = "⊥";
var pertenk = "‱";
var Pfr = "𝔓";
var pfr = "𝔭";
var Phi = "Φ";
var phi = "φ";
var phiv = "ϕ";
var phmmat = "ℳ";
var phone = "☎";
var Pi = "Π";
var pi = "π";
var pitchfork = "⋔";
var piv = "ϖ";
var planck = "ℏ";
var planckh = "ℎ";
var plankv = "ℏ";
var plusacir = "⨣";
var plusb = "⊞";
var pluscir = "⨢";
var plus = "+";
var plusdo = "∔";
var plusdu = "⨥";
var pluse = "⩲";
var PlusMinus = "±";
var plusmn$1 = "±";
var plussim = "⨦";
var plustwo = "⨧";
var pm = "±";
var Poincareplane = "ℌ";
var pointint = "⨕";
var popf = "𝕡";
var Popf = "ℙ";
var pound$1 = "£";
var prap = "⪷";
var Pr = "⪻";
var pr = "≺";
var prcue = "≼";
var precapprox = "⪷";
var prec = "≺";
var preccurlyeq = "≼";
var Precedes = "≺";
var PrecedesEqual = "⪯";
var PrecedesSlantEqual = "≼";
var PrecedesTilde = "≾";
var preceq = "⪯";
var precnapprox = "⪹";
var precneqq = "⪵";
var precnsim = "⋨";
var pre = "⪯";
var prE = "⪳";
var precsim = "≾";
var prime = "′";
var Prime = "″";
var primes = "ℙ";
var prnap = "⪹";
var prnE = "⪵";
var prnsim = "⋨";
var prod = "∏";
var Product = "∏";
var profalar = "⌮";
var profline = "⌒";
var profsurf = "⌓";
var prop$1 = "∝";
var Proportional = "∝";
var Proportion = "∷";
var propto = "∝";
var prsim = "≾";
var prurel = "⊰";
var Pscr = "𝒫";
var pscr = "𝓅";
var Psi = "Ψ";
var psi = "ψ";
var puncsp = " ";
var Qfr = "𝔔";
var qfr = "𝔮";
var qint = "⨌";
var qopf = "𝕢";
var Qopf = "ℚ";
var qprime = "⁗";
var Qscr = "𝒬";
var qscr = "𝓆";
var quaternions = "ℍ";
var quatint = "⨖";
var quest = "?";
var questeq = "≟";
var quot$2 = "\"";
var QUOT$1 = "\"";
var rAarr = "⇛";
var race = "∽̱";
var Racute = "Ŕ";
var racute = "ŕ";
var radic = "√";
var raemptyv = "⦳";
var rang = "⟩";
var Rang = "⟫";
var rangd = "⦒";
var range = "⦥";
var rangle = "⟩";
var raquo$1 = "»";
var rarrap = "⥵";
var rarrb = "⇥";
var rarrbfs = "⤠";
var rarrc = "⤳";
var rarr = "→";
var Rarr = "↠";
var rArr = "⇒";
var rarrfs = "⤞";
var rarrhk = "↪";
var rarrlp = "↬";
var rarrpl = "⥅";
var rarrsim = "⥴";
var Rarrtl = "⤖";
var rarrtl = "↣";
var rarrw = "↝";
var ratail = "⤚";
var rAtail = "⤜";
var ratio = "∶";
var rationals = "ℚ";
var rbarr = "⤍";
var rBarr = "⤏";
var RBarr = "⤐";
var rbbrk = "❳";
var rbrace$1 = "}";
var rbrack = "]";
var rbrke = "⦌";
var rbrksld = "⦎";
var rbrkslu = "⦐";
var Rcaron = "Ř";
var rcaron = "ř";
var Rcedil = "Ŗ";
var rcedil = "ŗ";
var rceil = "⌉";
var rcub = "}";
var Rcy = "Р";
var rcy = "р";
var rdca = "⤷";
var rdldhar = "⥩";
var rdquo = "”";
var rdquor = "”";
var rdsh = "↳";
var real = "ℜ";
var realine = "ℛ";
var realpart = "ℜ";
var reals = "ℝ";
var Re = "ℜ";
var rect = "▭";
var reg$1 = "®";
var REG$1 = "®";
var ReverseElement = "∋";
var ReverseEquilibrium = "⇋";
var ReverseUpEquilibrium = "⥯";
var rfisht = "⥽";
var rfloor = "⌋";
var rfr = "𝔯";
var Rfr = "ℜ";
var rHar = "⥤";
var rhard = "⇁";
var rharu = "⇀";
var rharul = "⥬";
var Rho = "Ρ";
var rho = "ρ";
var rhov = "ϱ";
var RightAngleBracket = "⟩";
var RightArrowBar = "⇥";
var rightarrow = "→";
var RightArrow = "→";
var Rightarrow = "⇒";
var RightArrowLeftArrow = "⇄";
var rightarrowtail = "↣";
var RightCeiling = "⌉";
var RightDoubleBracket = "⟧";
var RightDownTeeVector = "⥝";
var RightDownVectorBar = "⥕";
var RightDownVector = "⇂";
var RightFloor = "⌋";
var rightharpoondown = "⇁";
var rightharpoonup = "⇀";
var rightleftarrows = "⇄";
var rightleftharpoons = "⇌";
var rightrightarrows = "⇉";
var rightsquigarrow = "↝";
var RightTeeArrow = "↦";
var RightTee = "⊢";
var RightTeeVector = "⥛";
var rightthreetimes = "⋌";
var RightTriangleBar = "⧐";
var RightTriangle = "⊳";
var RightTriangleEqual = "⊵";
var RightUpDownVector = "⥏";
var RightUpTeeVector = "⥜";
var RightUpVectorBar = "⥔";
var RightUpVector = "↾";
var RightVectorBar = "⥓";
var RightVector = "⇀";
var ring = "˚";
var risingdotseq = "≓";
var rlarr = "⇄";
var rlhar = "⇌";
var rlm = "‏";
var rmoustache = "⎱";
var rmoust = "⎱";
var rnmid = "⫮";
var roang = "⟭";
var roarr = "⇾";
var robrk = "⟧";
var ropar = "⦆";
var ropf = "𝕣";
var Ropf = "ℝ";
var roplus = "⨮";
var rotimes = "⨵";
var RoundImplies = "⥰";
var rpar = ")";
var rpargt = "⦔";
var rppolint = "⨒";
var rrarr = "⇉";
var Rrightarrow = "⇛";
var rsaquo = "›";
var rscr = "𝓇";
var Rscr = "ℛ";
var rsh = "↱";
var Rsh = "↱";
var rsqb = "]";
var rsquo = "’";
var rsquor = "’";
var rthree = "⋌";
var rtimes = "⋊";
var rtri = "▹";
var rtrie = "⊵";
var rtrif = "▸";
var rtriltri = "⧎";
var RuleDelayed = "⧴";
var ruluhar = "⥨";
var rx = "℞";
var Sacute = "Ś";
var sacute = "ś";
var sbquo = "‚";
var scap = "⪸";
var Scaron = "Š";
var scaron = "š";
var Sc = "⪼";
var sc = "≻";
var sccue = "≽";
var sce = "⪰";
var scE = "⪴";
var Scedil = "Ş";
var scedil = "ş";
var Scirc = "Ŝ";
var scirc = "ŝ";
var scnap = "⪺";
var scnE = "⪶";
var scnsim = "⋩";
var scpolint = "⨓";
var scsim = "≿";
var Scy = "С";
var scy = "с";
var sdotb = "⊡";
var sdot = "⋅";
var sdote = "⩦";
var searhk = "⤥";
var searr = "↘";
var seArr = "⇘";
var searrow = "↘";
var sect$1 = "§";
var semi = ";";
var seswar = "⤩";
var setminus = "∖";
var setmn = "∖";
var sext = "✶";
var Sfr = "𝔖";
var sfr = "𝔰";
var sfrown = "⌢";
var sharp = "♯";
var SHCHcy = "Щ";
var shchcy = "щ";
var SHcy = "Ш";
var shcy = "ш";
var ShortDownArrow = "↓";
var ShortLeftArrow = "←";
var shortmid = "∣";
var shortparallel = "∥";
var ShortRightArrow = "→";
var ShortUpArrow = "↑";
var shy$1 = "­";
var Sigma = "Σ";
var sigma = "σ";
var sigmaf = "ς";
var sigmav = "ς";
var sim = "∼";
var simdot = "⩪";
var sime = "≃";
var simeq = "≃";
var simg = "⪞";
var simgE = "⪠";
var siml = "⪝";
var simlE = "⪟";
var simne = "≆";
var simplus = "⨤";
var simrarr = "⥲";
var slarr = "←";
var SmallCircle = "∘";
var smallsetminus = "∖";
var smashp = "⨳";
var smeparsl = "⧤";
var smid = "∣";
var smile = "⌣";
var smt = "⪪";
var smte = "⪬";
var smtes = "⪬︀";
var SOFTcy = "Ь";
var softcy = "ь";
var solbar = "⌿";
var solb = "⧄";
var sol = "/";
var Sopf = "𝕊";
var sopf = "𝕤";
var spades = "♠";
var spadesuit = "♠";
var spar = "∥";
var sqcap = "⊓";
var sqcaps = "⊓︀";
var sqcup = "⊔";
var sqcups = "⊔︀";
var Sqrt = "√";
var sqsub = "⊏";
var sqsube = "⊑";
var sqsubset = "⊏";
var sqsubseteq = "⊑";
var sqsup = "⊐";
var sqsupe = "⊒";
var sqsupset = "⊐";
var sqsupseteq = "⊒";
var square = "□";
var Square = "□";
var SquareIntersection = "⊓";
var SquareSubset = "⊏";
var SquareSubsetEqual = "⊑";
var SquareSuperset = "⊐";
var SquareSupersetEqual = "⊒";
var SquareUnion = "⊔";
var squarf = "▪";
var squ = "□";
var squf = "▪";
var srarr = "→";
var Sscr = "𝒮";
var sscr = "𝓈";
var ssetmn = "∖";
var ssmile = "⌣";
var sstarf = "⋆";
var Star = "⋆";
var star = "☆";
var starf = "★";
var straightepsilon = "ϵ";
var straightphi = "ϕ";
var strns = "¯";
var sub = "⊂";
var Sub = "⋐";
var subdot = "⪽";
var subE = "⫅";
var sube = "⊆";
var subedot = "⫃";
var submult = "⫁";
var subnE = "⫋";
var subne = "⊊";
var subplus = "⪿";
var subrarr = "⥹";
var subset = "⊂";
var Subset = "⋐";
var subseteq = "⊆";
var subseteqq = "⫅";
var SubsetEqual = "⊆";
var subsetneq = "⊊";
var subsetneqq = "⫋";
var subsim = "⫇";
var subsub = "⫕";
var subsup = "⫓";
var succapprox = "⪸";
var succ = "≻";
var succcurlyeq = "≽";
var Succeeds = "≻";
var SucceedsEqual = "⪰";
var SucceedsSlantEqual = "≽";
var SucceedsTilde = "≿";
var succeq = "⪰";
var succnapprox = "⪺";
var succneqq = "⪶";
var succnsim = "⋩";
var succsim = "≿";
var SuchThat = "∋";
var sum = "∑";
var Sum = "∑";
var sung = "♪";
var sup1$1 = "¹";
var sup2$1 = "²";
var sup3$1 = "³";
var sup = "⊃";
var Sup = "⋑";
var supdot = "⪾";
var supdsub = "⫘";
var supE = "⫆";
var supe = "⊇";
var supedot = "⫄";
var Superset = "⊃";
var SupersetEqual = "⊇";
var suphsol = "⟉";
var suphsub = "⫗";
var suplarr = "⥻";
var supmult = "⫂";
var supnE = "⫌";
var supne = "⊋";
var supplus = "⫀";
var supset = "⊃";
var Supset = "⋑";
var supseteq = "⊇";
var supseteqq = "⫆";
var supsetneq = "⊋";
var supsetneqq = "⫌";
var supsim = "⫈";
var supsub = "⫔";
var supsup = "⫖";
var swarhk = "⤦";
var swarr = "↙";
var swArr = "⇙";
var swarrow = "↙";
var swnwar = "⤪";
var szlig$1 = "ß";
var Tab = "\t";
var target = "⌖";
var Tau = "Τ";
var tau = "τ";
var tbrk = "⎴";
var Tcaron = "Ť";
var tcaron = "ť";
var Tcedil = "Ţ";
var tcedil = "ţ";
var Tcy = "Т";
var tcy = "т";
var tdot = "⃛";
var telrec = "⌕";
var Tfr = "𝔗";
var tfr = "𝔱";
var there4 = "∴";
var therefore = "∴";
var Therefore = "∴";
var Theta = "Θ";
var theta = "θ";
var thetasym = "ϑ";
var thetav = "ϑ";
var thickapprox = "≈";
var thicksim = "∼";
var ThickSpace = "  ";
var ThinSpace = " ";
var thinsp = " ";
var thkap = "≈";
var thksim = "∼";
var THORN$1 = "Þ";
var thorn$1 = "þ";
var tilde = "˜";
var Tilde = "∼";
var TildeEqual = "≃";
var TildeFullEqual = "≅";
var TildeTilde = "≈";
var timesbar = "⨱";
var timesb = "⊠";
var times$1 = "×";
var timesd = "⨰";
var tint = "∭";
var toea = "⤨";
var topbot = "⌶";
var topcir = "⫱";
var top = "⊤";
var Topf = "𝕋";
var topf = "𝕥";
var topfork = "⫚";
var tosa = "⤩";
var tprime = "‴";
var trade = "™";
var TRADE = "™";
var triangle = "▵";
var triangledown = "▿";
var triangleleft = "◃";
var trianglelefteq = "⊴";
var triangleq = "≜";
var triangleright = "▹";
var trianglerighteq = "⊵";
var tridot = "◬";
var trie = "≜";
var triminus = "⨺";
var TripleDot = "⃛";
var triplus = "⨹";
var trisb = "⧍";
var tritime = "⨻";
var trpezium = "⏢";
var Tscr = "𝒯";
var tscr = "𝓉";
var TScy = "Ц";
var tscy = "ц";
var TSHcy = "Ћ";
var tshcy = "ћ";
var Tstrok = "Ŧ";
var tstrok = "ŧ";
var twixt = "≬";
var twoheadleftarrow = "↞";
var twoheadrightarrow = "↠";
var Uacute$1 = "Ú";
var uacute$1 = "ú";
var uarr = "↑";
var Uarr = "↟";
var uArr = "⇑";
var Uarrocir = "⥉";
var Ubrcy = "Ў";
var ubrcy = "ў";
var Ubreve = "Ŭ";
var ubreve = "ŭ";
var Ucirc$1 = "Û";
var ucirc$1 = "û";
var Ucy = "У";
var ucy = "у";
var udarr = "⇅";
var Udblac = "Ű";
var udblac = "ű";
var udhar = "⥮";
var ufisht = "⥾";
var Ufr = "𝔘";
var ufr = "𝔲";
var Ugrave$1 = "Ù";
var ugrave$1 = "ù";
var uHar = "⥣";
var uharl = "↿";
var uharr = "↾";
var uhblk = "▀";
var ulcorn = "⌜";
var ulcorner = "⌜";
var ulcrop = "⌏";
var ultri = "◸";
var Umacr = "Ū";
var umacr = "ū";
var uml$1 = "¨";
var UnderBar = "_";
var UnderBrace = "⏟";
var UnderBracket = "⎵";
var UnderParenthesis = "⏝";
var Union = "⋃";
var UnionPlus = "⊎";
var Uogon = "Ų";
var uogon = "ų";
var Uopf = "𝕌";
var uopf = "𝕦";
var UpArrowBar = "⤒";
var uparrow = "↑";
var UpArrow = "↑";
var Uparrow = "⇑";
var UpArrowDownArrow = "⇅";
var updownarrow = "↕";
var UpDownArrow = "↕";
var Updownarrow = "⇕";
var UpEquilibrium = "⥮";
var upharpoonleft = "↿";
var upharpoonright = "↾";
var uplus = "⊎";
var UpperLeftArrow = "↖";
var UpperRightArrow = "↗";
var upsi = "υ";
var Upsi = "ϒ";
var upsih = "ϒ";
var Upsilon = "Υ";
var upsilon = "υ";
var UpTeeArrow = "↥";
var UpTee = "⊥";
var upuparrows = "⇈";
var urcorn = "⌝";
var urcorner = "⌝";
var urcrop = "⌎";
var Uring = "Ů";
var uring = "ů";
var urtri = "◹";
var Uscr = "𝒰";
var uscr = "𝓊";
var utdot = "⋰";
var Utilde = "Ũ";
var utilde = "ũ";
var utri = "▵";
var utrif = "▴";
var uuarr = "⇈";
var Uuml$1 = "Ü";
var uuml$1 = "ü";
var uwangle = "⦧";
var vangrt = "⦜";
var varepsilon = "ϵ";
var varkappa = "ϰ";
var varnothing = "∅";
var varphi = "ϕ";
var varpi = "ϖ";
var varpropto = "∝";
var varr = "↕";
var vArr = "⇕";
var varrho = "ϱ";
var varsigma = "ς";
var varsubsetneq = "⊊︀";
var varsubsetneqq = "⫋︀";
var varsupsetneq = "⊋︀";
var varsupsetneqq = "⫌︀";
var vartheta = "ϑ";
var vartriangleleft = "⊲";
var vartriangleright = "⊳";
var vBar = "⫨";
var Vbar = "⫫";
var vBarv = "⫩";
var Vcy = "В";
var vcy = "в";
var vdash = "⊢";
var vDash = "⊨";
var Vdash = "⊩";
var VDash = "⊫";
var Vdashl = "⫦";
var veebar = "⊻";
var vee = "∨";
var Vee = "⋁";
var veeeq = "≚";
var vellip = "⋮";
var verbar = "|";
var Verbar = "‖";
var vert = "|";
var Vert = "‖";
var VerticalBar = "∣";
var VerticalLine = "|";
var VerticalSeparator = "❘";
var VerticalTilde = "≀";
var VeryThinSpace = " ";
var Vfr = "𝔙";
var vfr = "𝔳";
var vltri = "⊲";
var vnsub = "⊂⃒";
var vnsup = "⊃⃒";
var Vopf = "𝕍";
var vopf = "𝕧";
var vprop = "∝";
var vrtri = "⊳";
var Vscr = "𝒱";
var vscr = "𝓋";
var vsubnE = "⫋︀";
var vsubne = "⊊︀";
var vsupnE = "⫌︀";
var vsupne = "⊋︀";
var Vvdash = "⊪";
var vzigzag = "⦚";
var Wcirc = "Ŵ";
var wcirc = "ŵ";
var wedbar = "⩟";
var wedge = "∧";
var Wedge = "⋀";
var wedgeq = "≙";
var weierp = "℘";
var Wfr = "𝔚";
var wfr = "𝔴";
var Wopf = "𝕎";
var wopf = "𝕨";
var wp = "℘";
var wr = "≀";
var wreath = "≀";
var Wscr = "𝒲";
var wscr = "𝓌";
var xcap = "⋂";
var xcirc = "◯";
var xcup = "⋃";
var xdtri = "▽";
var Xfr = "𝔛";
var xfr = "𝔵";
var xharr = "⟷";
var xhArr = "⟺";
var Xi = "Ξ";
var xi = "ξ";
var xlarr = "⟵";
var xlArr = "⟸";
var xmap = "⟼";
var xnis = "⋻";
var xodot = "⨀";
var Xopf = "𝕏";
var xopf = "𝕩";
var xoplus = "⨁";
var xotime = "⨂";
var xrarr = "⟶";
var xrArr = "⟹";
var Xscr = "𝒳";
var xscr = "𝓍";
var xsqcup = "⨆";
var xuplus = "⨄";
var xutri = "△";
var xvee = "⋁";
var xwedge = "⋀";
var Yacute$1 = "Ý";
var yacute$1 = "ý";
var YAcy = "Я";
var yacy = "я";
var Ycirc = "Ŷ";
var ycirc = "ŷ";
var Ycy = "Ы";
var ycy = "ы";
var yen$1 = "¥";
var Yfr = "𝔜";
var yfr = "𝔶";
var YIcy = "Ї";
var yicy = "ї";
var Yopf = "𝕐";
var yopf = "𝕪";
var Yscr = "𝒴";
var yscr = "𝓎";
var YUcy = "Ю";
var yucy = "ю";
var yuml$1 = "ÿ";
var Yuml = "Ÿ";
var Zacute = "Ź";
var zacute = "ź";
var Zcaron = "Ž";
var zcaron = "ž";
var Zcy = "З";
var zcy = "з";
var Zdot = "Ż";
var zdot = "ż";
var zeetrf = "ℨ";
var ZeroWidthSpace = "​";
var Zeta = "Ζ";
var zeta = "ζ";
var zfr = "𝔷";
var Zfr = "ℨ";
var ZHcy = "Ж";
var zhcy = "ж";
var zigrarr = "⇝";
var zopf = "𝕫";
var Zopf = "ℤ";
var Zscr = "𝒵";
var zscr = "𝓏";
var zwj = "‍";
var zwnj = "‌";
var require$$1 = {
	Aacute: Aacute$1,
	aacute: aacute$1,
	Abreve: Abreve,
	abreve: abreve,
	ac: ac,
	acd: acd,
	acE: acE,
	Acirc: Acirc$1,
	acirc: acirc$1,
	acute: acute$1,
	Acy: Acy,
	acy: acy,
	AElig: AElig$1,
	aelig: aelig$1,
	af: af,
	Afr: Afr,
	afr: afr,
	Agrave: Agrave$1,
	agrave: agrave$1,
	alefsym: alefsym,
	aleph: aleph,
	Alpha: Alpha,
	alpha: alpha,
	Amacr: Amacr,
	amacr: amacr,
	amalg: amalg,
	amp: amp$2,
	AMP: AMP$1,
	andand: andand,
	And: And,
	and: and,
	andd: andd,
	andslope: andslope,
	andv: andv,
	ang: ang,
	ange: ange,
	angle: angle,
	angmsdaa: angmsdaa,
	angmsdab: angmsdab,
	angmsdac: angmsdac,
	angmsdad: angmsdad,
	angmsdae: angmsdae,
	angmsdaf: angmsdaf,
	angmsdag: angmsdag,
	angmsdah: angmsdah,
	angmsd: angmsd,
	angrt: angrt,
	angrtvb: angrtvb,
	angrtvbd: angrtvbd,
	angsph: angsph,
	angst: angst,
	angzarr: angzarr,
	Aogon: Aogon,
	aogon: aogon,
	Aopf: Aopf,
	aopf: aopf,
	apacir: apacir,
	ap: ap,
	apE: apE,
	ape: ape,
	apid: apid,
	apos: apos$1,
	ApplyFunction: ApplyFunction,
	approx: approx,
	approxeq: approxeq,
	Aring: Aring$1,
	aring: aring$1,
	Ascr: Ascr,
	ascr: ascr,
	Assign: Assign,
	ast: ast,
	asymp: asymp,
	asympeq: asympeq,
	Atilde: Atilde$1,
	atilde: atilde$1,
	Auml: Auml$1,
	auml: auml$1,
	awconint: awconint,
	awint: awint,
	backcong: backcong,
	backepsilon: backepsilon,
	backprime: backprime,
	backsim: backsim,
	backsimeq: backsimeq,
	Backslash: Backslash,
	Barv: Barv,
	barvee: barvee,
	barwed: barwed,
	Barwed: Barwed,
	barwedge: barwedge,
	bbrk: bbrk,
	bbrktbrk: bbrktbrk,
	bcong: bcong,
	Bcy: Bcy,
	bcy: bcy,
	bdquo: bdquo,
	becaus: becaus,
	because: because,
	Because: Because,
	bemptyv: bemptyv,
	bepsi: bepsi,
	bernou: bernou,
	Bernoullis: Bernoullis,
	Beta: Beta,
	beta: beta,
	beth: beth,
	between: between,
	Bfr: Bfr,
	bfr: bfr,
	bigcap: bigcap,
	bigcirc: bigcirc,
	bigcup: bigcup,
	bigodot: bigodot,
	bigoplus: bigoplus,
	bigotimes: bigotimes,
	bigsqcup: bigsqcup,
	bigstar: bigstar,
	bigtriangledown: bigtriangledown,
	bigtriangleup: bigtriangleup,
	biguplus: biguplus,
	bigvee: bigvee,
	bigwedge: bigwedge,
	bkarow: bkarow,
	blacklozenge: blacklozenge,
	blacksquare: blacksquare,
	blacktriangle: blacktriangle,
	blacktriangledown: blacktriangledown,
	blacktriangleleft: blacktriangleleft,
	blacktriangleright: blacktriangleright,
	blank: blank,
	blk12: blk12,
	blk14: blk14,
	blk34: blk34,
	block: block,
	bne: bne,
	bnequiv: bnequiv,
	bNot: bNot,
	bnot: bnot,
	Bopf: Bopf,
	bopf: bopf,
	bot: bot,
	bottom: bottom,
	bowtie: bowtie,
	boxbox: boxbox,
	boxdl: boxdl,
	boxdL: boxdL,
	boxDl: boxDl,
	boxDL: boxDL,
	boxdr: boxdr,
	boxdR: boxdR,
	boxDr: boxDr,
	boxDR: boxDR,
	boxh: boxh,
	boxH: boxH,
	boxhd: boxhd,
	boxHd: boxHd,
	boxhD: boxhD,
	boxHD: boxHD,
	boxhu: boxhu,
	boxHu: boxHu,
	boxhU: boxhU,
	boxHU: boxHU,
	boxminus: boxminus,
	boxplus: boxplus,
	boxtimes: boxtimes,
	boxul: boxul,
	boxuL: boxuL,
	boxUl: boxUl,
	boxUL: boxUL,
	boxur: boxur,
	boxuR: boxuR,
	boxUr: boxUr,
	boxUR: boxUR,
	boxv: boxv,
	boxV: boxV,
	boxvh: boxvh,
	boxvH: boxvH,
	boxVh: boxVh,
	boxVH: boxVH,
	boxvl: boxvl,
	boxvL: boxvL,
	boxVl: boxVl,
	boxVL: boxVL,
	boxvr: boxvr,
	boxvR: boxvR,
	boxVr: boxVr,
	boxVR: boxVR,
	bprime: bprime,
	breve: breve,
	Breve: Breve,
	brvbar: brvbar$1,
	bscr: bscr,
	Bscr: Bscr,
	bsemi: bsemi,
	bsim: bsim,
	bsime: bsime,
	bsolb: bsolb,
	bsol: bsol,
	bsolhsub: bsolhsub,
	bull: bull,
	bullet: bullet,
	bump: bump,
	bumpE: bumpE,
	bumpe: bumpe,
	Bumpeq: Bumpeq,
	bumpeq: bumpeq,
	Cacute: Cacute,
	cacute: cacute,
	capand: capand,
	capbrcup: capbrcup,
	capcap: capcap,
	cap: cap,
	Cap: Cap,
	capcup: capcup,
	capdot: capdot,
	CapitalDifferentialD: CapitalDifferentialD,
	caps: caps,
	caret: caret,
	caron: caron,
	Cayleys: Cayleys,
	ccaps: ccaps,
	Ccaron: Ccaron,
	ccaron: ccaron,
	Ccedil: Ccedil$1,
	ccedil: ccedil$1,
	Ccirc: Ccirc,
	ccirc: ccirc,
	Cconint: Cconint,
	ccups: ccups,
	ccupssm: ccupssm,
	Cdot: Cdot,
	cdot: cdot,
	cedil: cedil$1,
	Cedilla: Cedilla,
	cemptyv: cemptyv,
	cent: cent$1,
	centerdot: centerdot,
	CenterDot: CenterDot,
	cfr: cfr,
	Cfr: Cfr,
	CHcy: CHcy,
	chcy: chcy,
	check: check,
	checkmark: checkmark,
	Chi: Chi,
	chi: chi,
	circ: circ,
	circeq: circeq,
	circlearrowleft: circlearrowleft,
	circlearrowright: circlearrowright,
	circledast: circledast,
	circledcirc: circledcirc,
	circleddash: circleddash,
	CircleDot: CircleDot,
	circledR: circledR,
	circledS: circledS,
	CircleMinus: CircleMinus,
	CirclePlus: CirclePlus,
	CircleTimes: CircleTimes,
	cir: cir,
	cirE: cirE,
	cire: cire,
	cirfnint: cirfnint,
	cirmid: cirmid,
	cirscir: cirscir,
	ClockwiseContourIntegral: ClockwiseContourIntegral,
	CloseCurlyDoubleQuote: CloseCurlyDoubleQuote,
	CloseCurlyQuote: CloseCurlyQuote,
	clubs: clubs,
	clubsuit: clubsuit,
	colon: colon,
	Colon: Colon,
	Colone: Colone,
	colone: colone,
	coloneq: coloneq,
	comma: comma,
	commat: commat,
	comp: comp,
	compfn: compfn,
	complement: complement,
	complexes: complexes,
	cong: cong,
	congdot: congdot,
	Congruent: Congruent,
	conint: conint,
	Conint: Conint,
	ContourIntegral: ContourIntegral,
	copf: copf,
	Copf: Copf,
	coprod: coprod,
	Coproduct: Coproduct,
	copy: copy$1,
	COPY: COPY$1,
	copysr: copysr,
	CounterClockwiseContourIntegral: CounterClockwiseContourIntegral,
	crarr: crarr,
	cross: cross,
	Cross: Cross,
	Cscr: Cscr,
	cscr: cscr,
	csub: csub,
	csube: csube,
	csup: csup,
	csupe: csupe,
	ctdot: ctdot,
	cudarrl: cudarrl,
	cudarrr: cudarrr,
	cuepr: cuepr,
	cuesc: cuesc,
	cularr: cularr,
	cularrp: cularrp,
	cupbrcap: cupbrcap,
	cupcap: cupcap,
	CupCap: CupCap,
	cup: cup,
	Cup: Cup,
	cupcup: cupcup,
	cupdot: cupdot,
	cupor: cupor,
	cups: cups,
	curarr: curarr,
	curarrm: curarrm,
	curlyeqprec: curlyeqprec,
	curlyeqsucc: curlyeqsucc,
	curlyvee: curlyvee,
	curlywedge: curlywedge,
	curren: curren$1,
	curvearrowleft: curvearrowleft,
	curvearrowright: curvearrowright,
	cuvee: cuvee,
	cuwed: cuwed,
	cwconint: cwconint,
	cwint: cwint,
	cylcty: cylcty,
	dagger: dagger,
	Dagger: Dagger,
	daleth: daleth,
	darr: darr,
	Darr: Darr,
	dArr: dArr,
	dash: dash,
	Dashv: Dashv,
	dashv: dashv,
	dbkarow: dbkarow,
	dblac: dblac,
	Dcaron: Dcaron,
	dcaron: dcaron,
	Dcy: Dcy,
	dcy: dcy,
	ddagger: ddagger,
	ddarr: ddarr,
	DD: DD,
	dd: dd,
	DDotrahd: DDotrahd,
	ddotseq: ddotseq,
	deg: deg$1,
	Del: Del,
	Delta: Delta,
	delta: delta,
	demptyv: demptyv,
	dfisht: dfisht,
	Dfr: Dfr,
	dfr: dfr,
	dHar: dHar,
	dharl: dharl,
	dharr: dharr,
	DiacriticalAcute: DiacriticalAcute,
	DiacriticalDot: DiacriticalDot,
	DiacriticalDoubleAcute: DiacriticalDoubleAcute,
	DiacriticalGrave: DiacriticalGrave,
	DiacriticalTilde: DiacriticalTilde,
	diam: diam,
	diamond: diamond,
	Diamond: Diamond,
	diamondsuit: diamondsuit,
	diams: diams,
	die: die,
	DifferentialD: DifferentialD,
	digamma: digamma,
	disin: disin,
	div: div,
	divide: divide$1,
	divideontimes: divideontimes,
	divonx: divonx,
	DJcy: DJcy,
	djcy: djcy,
	dlcorn: dlcorn,
	dlcrop: dlcrop,
	dollar: dollar,
	Dopf: Dopf,
	dopf: dopf,
	Dot: Dot,
	dot: dot,
	DotDot: DotDot,
	doteq: doteq,
	doteqdot: doteqdot,
	DotEqual: DotEqual,
	dotminus: dotminus,
	dotplus: dotplus,
	dotsquare: dotsquare,
	doublebarwedge: doublebarwedge,
	DoubleContourIntegral: DoubleContourIntegral,
	DoubleDot: DoubleDot,
	DoubleDownArrow: DoubleDownArrow,
	DoubleLeftArrow: DoubleLeftArrow,
	DoubleLeftRightArrow: DoubleLeftRightArrow,
	DoubleLeftTee: DoubleLeftTee,
	DoubleLongLeftArrow: DoubleLongLeftArrow,
	DoubleLongLeftRightArrow: DoubleLongLeftRightArrow,
	DoubleLongRightArrow: DoubleLongRightArrow,
	DoubleRightArrow: DoubleRightArrow,
	DoubleRightTee: DoubleRightTee,
	DoubleUpArrow: DoubleUpArrow,
	DoubleUpDownArrow: DoubleUpDownArrow,
	DoubleVerticalBar: DoubleVerticalBar,
	DownArrowBar: DownArrowBar,
	downarrow: downarrow,
	DownArrow: DownArrow,
	Downarrow: Downarrow,
	DownArrowUpArrow: DownArrowUpArrow,
	DownBreve: DownBreve,
	downdownarrows: downdownarrows,
	downharpoonleft: downharpoonleft,
	downharpoonright: downharpoonright,
	DownLeftRightVector: DownLeftRightVector,
	DownLeftTeeVector: DownLeftTeeVector,
	DownLeftVectorBar: DownLeftVectorBar,
	DownLeftVector: DownLeftVector,
	DownRightTeeVector: DownRightTeeVector,
	DownRightVectorBar: DownRightVectorBar,
	DownRightVector: DownRightVector,
	DownTeeArrow: DownTeeArrow,
	DownTee: DownTee,
	drbkarow: drbkarow,
	drcorn: drcorn,
	drcrop: drcrop,
	Dscr: Dscr,
	dscr: dscr,
	DScy: DScy,
	dscy: dscy,
	dsol: dsol,
	Dstrok: Dstrok,
	dstrok: dstrok,
	dtdot: dtdot,
	dtri: dtri,
	dtrif: dtrif,
	duarr: duarr,
	duhar: duhar,
	dwangle: dwangle,
	DZcy: DZcy,
	dzcy: dzcy,
	dzigrarr: dzigrarr,
	Eacute: Eacute$1,
	eacute: eacute$1,
	easter: easter,
	Ecaron: Ecaron,
	ecaron: ecaron,
	Ecirc: Ecirc$1,
	ecirc: ecirc$1,
	ecir: ecir,
	ecolon: ecolon,
	Ecy: Ecy,
	ecy: ecy,
	eDDot: eDDot,
	Edot: Edot,
	edot: edot,
	eDot: eDot,
	ee: ee,
	efDot: efDot,
	Efr: Efr,
	efr: efr,
	eg: eg,
	Egrave: Egrave$1,
	egrave: egrave$1,
	egs: egs,
	egsdot: egsdot,
	el: el,
	Element: Element,
	elinters: elinters,
	ell: ell,
	els: els,
	elsdot: elsdot,
	Emacr: Emacr,
	emacr: emacr,
	empty: empty$1,
	emptyset: emptyset,
	EmptySmallSquare: EmptySmallSquare,
	emptyv: emptyv,
	EmptyVerySmallSquare: EmptyVerySmallSquare,
	emsp13: emsp13,
	emsp14: emsp14,
	emsp: emsp,
	ENG: ENG,
	eng: eng,
	ensp: ensp,
	Eogon: Eogon,
	eogon: eogon,
	Eopf: Eopf,
	eopf: eopf,
	epar: epar,
	eparsl: eparsl,
	eplus: eplus,
	epsi: epsi,
	Epsilon: Epsilon,
	epsilon: epsilon,
	epsiv: epsiv,
	eqcirc: eqcirc,
	eqcolon: eqcolon,
	eqsim: eqsim,
	eqslantgtr: eqslantgtr,
	eqslantless: eqslantless,
	Equal: Equal,
	equals: equals,
	EqualTilde: EqualTilde,
	equest: equest,
	Equilibrium: Equilibrium,
	equiv: equiv,
	equivDD: equivDD,
	eqvparsl: eqvparsl,
	erarr: erarr,
	erDot: erDot,
	escr: escr,
	Escr: Escr,
	esdot: esdot,
	Esim: Esim,
	esim: esim,
	Eta: Eta,
	eta: eta,
	ETH: ETH$1,
	eth: eth$1,
	Euml: Euml$1,
	euml: euml$1,
	euro: euro,
	excl: excl,
	exist: exist,
	Exists: Exists,
	expectation: expectation,
	exponentiale: exponentiale,
	ExponentialE: ExponentialE,
	fallingdotseq: fallingdotseq,
	Fcy: Fcy,
	fcy: fcy,
	female: female,
	ffilig: ffilig,
	fflig: fflig,
	ffllig: ffllig,
	Ffr: Ffr,
	ffr: ffr,
	filig: filig,
	FilledSmallSquare: FilledSmallSquare,
	FilledVerySmallSquare: FilledVerySmallSquare,
	fjlig: fjlig,
	flat: flat,
	fllig: fllig,
	fltns: fltns,
	fnof: fnof,
	Fopf: Fopf,
	fopf: fopf,
	forall: forall,
	ForAll: ForAll,
	fork: fork,
	forkv: forkv,
	Fouriertrf: Fouriertrf,
	fpartint: fpartint,
	frac12: frac12$1,
	frac13: frac13,
	frac14: frac14$1,
	frac15: frac15,
	frac16: frac16,
	frac18: frac18,
	frac23: frac23,
	frac25: frac25,
	frac34: frac34$1,
	frac35: frac35,
	frac38: frac38,
	frac45: frac45,
	frac56: frac56,
	frac58: frac58,
	frac78: frac78,
	frasl: frasl,
	frown: frown,
	fscr: fscr,
	Fscr: Fscr,
	gacute: gacute,
	Gamma: Gamma,
	gamma: gamma,
	Gammad: Gammad,
	gammad: gammad,
	gap: gap,
	Gbreve: Gbreve,
	gbreve: gbreve,
	Gcedil: Gcedil,
	Gcirc: Gcirc,
	gcirc: gcirc,
	Gcy: Gcy,
	gcy: gcy,
	Gdot: Gdot,
	gdot: gdot,
	ge: ge,
	gE: gE,
	gEl: gEl,
	gel: gel,
	geq: geq,
	geqq: geqq,
	geqslant: geqslant,
	gescc: gescc,
	ges: ges,
	gesdot: gesdot,
	gesdoto: gesdoto,
	gesdotol: gesdotol,
	gesl: gesl,
	gesles: gesles,
	Gfr: Gfr,
	gfr: gfr,
	gg: gg,
	Gg: Gg,
	ggg: ggg,
	gimel: gimel,
	GJcy: GJcy,
	gjcy: gjcy,
	gla: gla,
	gl: gl,
	glE: glE,
	glj: glj,
	gnap: gnap,
	gnapprox: gnapprox,
	gne: gne,
	gnE: gnE,
	gneq: gneq,
	gneqq: gneqq,
	gnsim: gnsim,
	Gopf: Gopf,
	gopf: gopf,
	grave: grave,
	GreaterEqual: GreaterEqual,
	GreaterEqualLess: GreaterEqualLess,
	GreaterFullEqual: GreaterFullEqual,
	GreaterGreater: GreaterGreater,
	GreaterLess: GreaterLess,
	GreaterSlantEqual: GreaterSlantEqual,
	GreaterTilde: GreaterTilde,
	Gscr: Gscr,
	gscr: gscr,
	gsim: gsim,
	gsime: gsime,
	gsiml: gsiml,
	gtcc: gtcc,
	gtcir: gtcir,
	gt: gt$2,
	GT: GT$1,
	Gt: Gt,
	gtdot: gtdot,
	gtlPar: gtlPar,
	gtquest: gtquest,
	gtrapprox: gtrapprox,
	gtrarr: gtrarr,
	gtrdot: gtrdot,
	gtreqless: gtreqless,
	gtreqqless: gtreqqless,
	gtrless: gtrless,
	gtrsim: gtrsim,
	gvertneqq: gvertneqq,
	gvnE: gvnE,
	Hacek: Hacek,
	hairsp: hairsp,
	half: half,
	hamilt: hamilt,
	HARDcy: HARDcy,
	hardcy: hardcy,
	harrcir: harrcir,
	harr: harr,
	hArr: hArr,
	harrw: harrw,
	Hat: Hat,
	hbar: hbar,
	Hcirc: Hcirc,
	hcirc: hcirc,
	hearts: hearts,
	heartsuit: heartsuit,
	hellip: hellip,
	hercon: hercon,
	hfr: hfr,
	Hfr: Hfr,
	HilbertSpace: HilbertSpace,
	hksearow: hksearow,
	hkswarow: hkswarow,
	hoarr: hoarr,
	homtht: homtht,
	hookleftarrow: hookleftarrow,
	hookrightarrow: hookrightarrow,
	hopf: hopf,
	Hopf: Hopf,
	horbar: horbar,
	HorizontalLine: HorizontalLine,
	hscr: hscr,
	Hscr: Hscr,
	hslash: hslash,
	Hstrok: Hstrok,
	hstrok: hstrok,
	HumpDownHump: HumpDownHump,
	HumpEqual: HumpEqual,
	hybull: hybull,
	hyphen: hyphen,
	Iacute: Iacute$1,
	iacute: iacute$1,
	ic: ic,
	Icirc: Icirc$1,
	icirc: icirc$1,
	Icy: Icy,
	icy: icy,
	Idot: Idot,
	IEcy: IEcy,
	iecy: iecy,
	iexcl: iexcl$1,
	iff: iff,
	ifr: ifr,
	Ifr: Ifr,
	Igrave: Igrave$1,
	igrave: igrave$1,
	ii: ii,
	iiiint: iiiint,
	iiint: iiint,
	iinfin: iinfin,
	iiota: iiota,
	IJlig: IJlig,
	ijlig: ijlig,
	Imacr: Imacr,
	imacr: imacr,
	image: image,
	ImaginaryI: ImaginaryI,
	imagline: imagline,
	imagpart: imagpart,
	imath: imath,
	Im: Im,
	imof: imof,
	imped: imped,
	Implies: Implies,
	incare: incare,
	"in": "∈",
	infin: infin,
	infintie: infintie,
	inodot: inodot,
	intcal: intcal,
	int: int,
	Int: Int,
	integers: integers,
	Integral: Integral,
	intercal: intercal,
	Intersection: Intersection,
	intlarhk: intlarhk,
	intprod: intprod,
	InvisibleComma: InvisibleComma,
	InvisibleTimes: InvisibleTimes,
	IOcy: IOcy,
	iocy: iocy,
	Iogon: Iogon,
	iogon: iogon,
	Iopf: Iopf,
	iopf: iopf,
	Iota: Iota,
	iota: iota,
	iprod: iprod,
	iquest: iquest$1,
	iscr: iscr,
	Iscr: Iscr,
	isin: isin,
	isindot: isindot,
	isinE: isinE,
	isins: isins,
	isinsv: isinsv,
	isinv: isinv,
	it: it,
	Itilde: Itilde,
	itilde: itilde,
	Iukcy: Iukcy,
	iukcy: iukcy,
	Iuml: Iuml$1,
	iuml: iuml$1,
	Jcirc: Jcirc,
	jcirc: jcirc,
	Jcy: Jcy,
	jcy: jcy,
	Jfr: Jfr,
	jfr: jfr,
	jmath: jmath,
	Jopf: Jopf,
	jopf: jopf,
	Jscr: Jscr,
	jscr: jscr,
	Jsercy: Jsercy,
	jsercy: jsercy,
	Jukcy: Jukcy,
	jukcy: jukcy,
	Kappa: Kappa,
	kappa: kappa,
	kappav: kappav,
	Kcedil: Kcedil,
	kcedil: kcedil,
	Kcy: Kcy,
	kcy: kcy,
	Kfr: Kfr,
	kfr: kfr,
	kgreen: kgreen,
	KHcy: KHcy,
	khcy: khcy,
	KJcy: KJcy,
	kjcy: kjcy,
	Kopf: Kopf,
	kopf: kopf,
	Kscr: Kscr,
	kscr: kscr,
	lAarr: lAarr,
	Lacute: Lacute,
	lacute: lacute,
	laemptyv: laemptyv,
	lagran: lagran,
	Lambda: Lambda,
	lambda: lambda,
	lang: lang,
	Lang: Lang,
	langd: langd,
	langle: langle,
	lap: lap,
	Laplacetrf: Laplacetrf,
	laquo: laquo$1,
	larrb: larrb,
	larrbfs: larrbfs,
	larr: larr,
	Larr: Larr,
	lArr: lArr,
	larrfs: larrfs,
	larrhk: larrhk,
	larrlp: larrlp,
	larrpl: larrpl,
	larrsim: larrsim,
	larrtl: larrtl,
	latail: latail,
	lAtail: lAtail,
	lat: lat,
	late: late,
	lates: lates,
	lbarr: lbarr,
	lBarr: lBarr,
	lbbrk: lbbrk,
	lbrace: lbrace,
	lbrack: lbrack,
	lbrke: lbrke,
	lbrksld: lbrksld,
	lbrkslu: lbrkslu,
	Lcaron: Lcaron,
	lcaron: lcaron,
	Lcedil: Lcedil,
	lcedil: lcedil,
	lceil: lceil,
	lcub: lcub,
	Lcy: Lcy,
	lcy: lcy,
	ldca: ldca,
	ldquo: ldquo,
	ldquor: ldquor,
	ldrdhar: ldrdhar,
	ldrushar: ldrushar,
	ldsh: ldsh,
	le: le,
	lE: lE,
	LeftAngleBracket: LeftAngleBracket,
	LeftArrowBar: LeftArrowBar,
	leftarrow: leftarrow,
	LeftArrow: LeftArrow,
	Leftarrow: Leftarrow,
	LeftArrowRightArrow: LeftArrowRightArrow,
	leftarrowtail: leftarrowtail,
	LeftCeiling: LeftCeiling,
	LeftDoubleBracket: LeftDoubleBracket,
	LeftDownTeeVector: LeftDownTeeVector,
	LeftDownVectorBar: LeftDownVectorBar,
	LeftDownVector: LeftDownVector,
	LeftFloor: LeftFloor,
	leftharpoondown: leftharpoondown,
	leftharpoonup: leftharpoonup,
	leftleftarrows: leftleftarrows,
	leftrightarrow: leftrightarrow,
	LeftRightArrow: LeftRightArrow,
	Leftrightarrow: Leftrightarrow,
	leftrightarrows: leftrightarrows,
	leftrightharpoons: leftrightharpoons,
	leftrightsquigarrow: leftrightsquigarrow,
	LeftRightVector: LeftRightVector,
	LeftTeeArrow: LeftTeeArrow,
	LeftTee: LeftTee,
	LeftTeeVector: LeftTeeVector,
	leftthreetimes: leftthreetimes,
	LeftTriangleBar: LeftTriangleBar,
	LeftTriangle: LeftTriangle,
	LeftTriangleEqual: LeftTriangleEqual,
	LeftUpDownVector: LeftUpDownVector,
	LeftUpTeeVector: LeftUpTeeVector,
	LeftUpVectorBar: LeftUpVectorBar,
	LeftUpVector: LeftUpVector,
	LeftVectorBar: LeftVectorBar,
	LeftVector: LeftVector,
	lEg: lEg,
	leg: leg,
	leq: leq,
	leqq: leqq,
	leqslant: leqslant,
	lescc: lescc,
	les: les,
	lesdot: lesdot,
	lesdoto: lesdoto,
	lesdotor: lesdotor,
	lesg: lesg,
	lesges: lesges,
	lessapprox: lessapprox,
	lessdot: lessdot,
	lesseqgtr: lesseqgtr,
	lesseqqgtr: lesseqqgtr,
	LessEqualGreater: LessEqualGreater,
	LessFullEqual: LessFullEqual,
	LessGreater: LessGreater,
	lessgtr: lessgtr,
	LessLess: LessLess,
	lesssim: lesssim,
	LessSlantEqual: LessSlantEqual,
	LessTilde: LessTilde,
	lfisht: lfisht,
	lfloor: lfloor,
	Lfr: Lfr,
	lfr: lfr,
	lg: lg,
	lgE: lgE,
	lHar: lHar,
	lhard: lhard,
	lharu: lharu,
	lharul: lharul,
	lhblk: lhblk,
	LJcy: LJcy,
	ljcy: ljcy,
	llarr: llarr,
	ll: ll,
	Ll: Ll,
	llcorner: llcorner,
	Lleftarrow: Lleftarrow,
	llhard: llhard,
	lltri: lltri,
	Lmidot: Lmidot,
	lmidot: lmidot,
	lmoustache: lmoustache,
	lmoust: lmoust,
	lnap: lnap,
	lnapprox: lnapprox,
	lne: lne,
	lnE: lnE,
	lneq: lneq,
	lneqq: lneqq,
	lnsim: lnsim,
	loang: loang,
	loarr: loarr,
	lobrk: lobrk,
	longleftarrow: longleftarrow,
	LongLeftArrow: LongLeftArrow,
	Longleftarrow: Longleftarrow,
	longleftrightarrow: longleftrightarrow,
	LongLeftRightArrow: LongLeftRightArrow,
	Longleftrightarrow: Longleftrightarrow,
	longmapsto: longmapsto,
	longrightarrow: longrightarrow,
	LongRightArrow: LongRightArrow,
	Longrightarrow: Longrightarrow,
	looparrowleft: looparrowleft,
	looparrowright: looparrowright,
	lopar: lopar,
	Lopf: Lopf,
	lopf: lopf,
	loplus: loplus,
	lotimes: lotimes,
	lowast: lowast,
	lowbar: lowbar,
	LowerLeftArrow: LowerLeftArrow,
	LowerRightArrow: LowerRightArrow,
	loz: loz,
	lozenge: lozenge,
	lozf: lozf,
	lpar: lpar,
	lparlt: lparlt,
	lrarr: lrarr,
	lrcorner: lrcorner,
	lrhar: lrhar,
	lrhard: lrhard,
	lrm: lrm,
	lrtri: lrtri,
	lsaquo: lsaquo,
	lscr: lscr,
	Lscr: Lscr,
	lsh: lsh,
	Lsh: Lsh,
	lsim: lsim,
	lsime: lsime,
	lsimg: lsimg,
	lsqb: lsqb,
	lsquo: lsquo,
	lsquor: lsquor,
	Lstrok: Lstrok,
	lstrok: lstrok,
	ltcc: ltcc,
	ltcir: ltcir,
	lt: lt$2,
	LT: LT$1,
	Lt: Lt,
	ltdot: ltdot,
	lthree: lthree,
	ltimes: ltimes,
	ltlarr: ltlarr,
	ltquest: ltquest,
	ltri: ltri,
	ltrie: ltrie,
	ltrif: ltrif,
	ltrPar: ltrPar,
	lurdshar: lurdshar,
	luruhar: luruhar,
	lvertneqq: lvertneqq,
	lvnE: lvnE,
	macr: macr$1,
	male: male,
	malt: malt,
	maltese: maltese,
	"Map": "⤅",
	map: map$1,
	mapsto: mapsto,
	mapstodown: mapstodown,
	mapstoleft: mapstoleft,
	mapstoup: mapstoup,
	marker: marker,
	mcomma: mcomma,
	Mcy: Mcy,
	mcy: mcy,
	mdash: mdash,
	mDDot: mDDot,
	measuredangle: measuredangle,
	MediumSpace: MediumSpace,
	Mellintrf: Mellintrf,
	Mfr: Mfr,
	mfr: mfr,
	mho: mho,
	micro: micro$1,
	midast: midast,
	midcir: midcir,
	mid: mid,
	middot: middot$1,
	minusb: minusb,
	minus: minus,
	minusd: minusd,
	minusdu: minusdu,
	MinusPlus: MinusPlus,
	mlcp: mlcp,
	mldr: mldr,
	mnplus: mnplus,
	models: models,
	Mopf: Mopf,
	mopf: mopf,
	mp: mp,
	mscr: mscr,
	Mscr: Mscr,
	mstpos: mstpos,
	Mu: Mu,
	mu: mu,
	multimap: multimap,
	mumap: mumap,
	nabla: nabla,
	Nacute: Nacute,
	nacute: nacute,
	nang: nang,
	nap: nap,
	napE: napE,
	napid: napid,
	napos: napos,
	napprox: napprox,
	natural: natural,
	naturals: naturals,
	natur: natur,
	nbsp: nbsp$1,
	nbump: nbump,
	nbumpe: nbumpe,
	ncap: ncap,
	Ncaron: Ncaron,
	ncaron: ncaron,
	Ncedil: Ncedil,
	ncedil: ncedil,
	ncong: ncong,
	ncongdot: ncongdot,
	ncup: ncup,
	Ncy: Ncy,
	ncy: ncy,
	ndash: ndash,
	nearhk: nearhk,
	nearr: nearr,
	neArr: neArr,
	nearrow: nearrow,
	ne: ne,
	nedot: nedot,
	NegativeMediumSpace: NegativeMediumSpace,
	NegativeThickSpace: NegativeThickSpace,
	NegativeThinSpace: NegativeThinSpace,
	NegativeVeryThinSpace: NegativeVeryThinSpace,
	nequiv: nequiv,
	nesear: nesear,
	nesim: nesim,
	NestedGreaterGreater: NestedGreaterGreater,
	NestedLessLess: NestedLessLess,
	NewLine: NewLine,
	nexist: nexist,
	nexists: nexists,
	Nfr: Nfr,
	nfr: nfr,
	ngE: ngE,
	nge: nge,
	ngeq: ngeq,
	ngeqq: ngeqq,
	ngeqslant: ngeqslant,
	nges: nges,
	nGg: nGg,
	ngsim: ngsim,
	nGt: nGt,
	ngt: ngt,
	ngtr: ngtr,
	nGtv: nGtv,
	nharr: nharr,
	nhArr: nhArr,
	nhpar: nhpar,
	ni: ni,
	nis: nis,
	nisd: nisd,
	niv: niv,
	NJcy: NJcy,
	njcy: njcy,
	nlarr: nlarr,
	nlArr: nlArr,
	nldr: nldr,
	nlE: nlE,
	nle: nle,
	nleftarrow: nleftarrow,
	nLeftarrow: nLeftarrow,
	nleftrightarrow: nleftrightarrow,
	nLeftrightarrow: nLeftrightarrow,
	nleq: nleq,
	nleqq: nleqq,
	nleqslant: nleqslant,
	nles: nles,
	nless: nless,
	nLl: nLl,
	nlsim: nlsim,
	nLt: nLt,
	nlt: nlt,
	nltri: nltri,
	nltrie: nltrie,
	nLtv: nLtv,
	nmid: nmid,
	NoBreak: NoBreak,
	NonBreakingSpace: NonBreakingSpace,
	nopf: nopf,
	Nopf: Nopf,
	Not: Not,
	not: not$2,
	NotCongruent: NotCongruent,
	NotCupCap: NotCupCap,
	NotDoubleVerticalBar: NotDoubleVerticalBar,
	NotElement: NotElement,
	NotEqual: NotEqual,
	NotEqualTilde: NotEqualTilde,
	NotExists: NotExists,
	NotGreater: NotGreater,
	NotGreaterEqual: NotGreaterEqual,
	NotGreaterFullEqual: NotGreaterFullEqual,
	NotGreaterGreater: NotGreaterGreater,
	NotGreaterLess: NotGreaterLess,
	NotGreaterSlantEqual: NotGreaterSlantEqual,
	NotGreaterTilde: NotGreaterTilde,
	NotHumpDownHump: NotHumpDownHump,
	NotHumpEqual: NotHumpEqual,
	notin: notin,
	notindot: notindot,
	notinE: notinE,
	notinva: notinva,
	notinvb: notinvb,
	notinvc: notinvc,
	NotLeftTriangleBar: NotLeftTriangleBar,
	NotLeftTriangle: NotLeftTriangle,
	NotLeftTriangleEqual: NotLeftTriangleEqual,
	NotLess: NotLess,
	NotLessEqual: NotLessEqual,
	NotLessGreater: NotLessGreater,
	NotLessLess: NotLessLess,
	NotLessSlantEqual: NotLessSlantEqual,
	NotLessTilde: NotLessTilde,
	NotNestedGreaterGreater: NotNestedGreaterGreater,
	NotNestedLessLess: NotNestedLessLess,
	notni: notni,
	notniva: notniva,
	notnivb: notnivb,
	notnivc: notnivc,
	NotPrecedes: NotPrecedes,
	NotPrecedesEqual: NotPrecedesEqual,
	NotPrecedesSlantEqual: NotPrecedesSlantEqual,
	NotReverseElement: NotReverseElement,
	NotRightTriangleBar: NotRightTriangleBar,
	NotRightTriangle: NotRightTriangle,
	NotRightTriangleEqual: NotRightTriangleEqual,
	NotSquareSubset: NotSquareSubset,
	NotSquareSubsetEqual: NotSquareSubsetEqual,
	NotSquareSuperset: NotSquareSuperset,
	NotSquareSupersetEqual: NotSquareSupersetEqual,
	NotSubset: NotSubset,
	NotSubsetEqual: NotSubsetEqual,
	NotSucceeds: NotSucceeds,
	NotSucceedsEqual: NotSucceedsEqual,
	NotSucceedsSlantEqual: NotSucceedsSlantEqual,
	NotSucceedsTilde: NotSucceedsTilde,
	NotSuperset: NotSuperset,
	NotSupersetEqual: NotSupersetEqual,
	NotTilde: NotTilde,
	NotTildeEqual: NotTildeEqual,
	NotTildeFullEqual: NotTildeFullEqual,
	NotTildeTilde: NotTildeTilde,
	NotVerticalBar: NotVerticalBar,
	nparallel: nparallel,
	npar: npar,
	nparsl: nparsl,
	npart: npart,
	npolint: npolint,
	npr: npr,
	nprcue: nprcue,
	nprec: nprec,
	npreceq: npreceq,
	npre: npre,
	nrarrc: nrarrc,
	nrarr: nrarr,
	nrArr: nrArr,
	nrarrw: nrarrw,
	nrightarrow: nrightarrow,
	nRightarrow: nRightarrow,
	nrtri: nrtri,
	nrtrie: nrtrie,
	nsc: nsc,
	nsccue: nsccue,
	nsce: nsce,
	Nscr: Nscr,
	nscr: nscr,
	nshortmid: nshortmid,
	nshortparallel: nshortparallel,
	nsim: nsim,
	nsime: nsime,
	nsimeq: nsimeq,
	nsmid: nsmid,
	nspar: nspar,
	nsqsube: nsqsube,
	nsqsupe: nsqsupe,
	nsub: nsub,
	nsubE: nsubE,
	nsube: nsube,
	nsubset: nsubset,
	nsubseteq: nsubseteq,
	nsubseteqq: nsubseteqq,
	nsucc: nsucc,
	nsucceq: nsucceq,
	nsup: nsup,
	nsupE: nsupE,
	nsupe: nsupe,
	nsupset: nsupset,
	nsupseteq: nsupseteq,
	nsupseteqq: nsupseteqq,
	ntgl: ntgl,
	Ntilde: Ntilde$1,
	ntilde: ntilde$1,
	ntlg: ntlg,
	ntriangleleft: ntriangleleft,
	ntrianglelefteq: ntrianglelefteq,
	ntriangleright: ntriangleright,
	ntrianglerighteq: ntrianglerighteq,
	Nu: Nu,
	nu: nu,
	num: num,
	numero: numero,
	numsp: numsp,
	nvap: nvap,
	nvdash: nvdash,
	nvDash: nvDash,
	nVdash: nVdash,
	nVDash: nVDash,
	nvge: nvge,
	nvgt: nvgt,
	nvHarr: nvHarr,
	nvinfin: nvinfin,
	nvlArr: nvlArr,
	nvle: nvle,
	nvlt: nvlt,
	nvltrie: nvltrie,
	nvrArr: nvrArr,
	nvrtrie: nvrtrie,
	nvsim: nvsim,
	nwarhk: nwarhk,
	nwarr: nwarr,
	nwArr: nwArr,
	nwarrow: nwarrow,
	nwnear: nwnear,
	Oacute: Oacute$1,
	oacute: oacute$1,
	oast: oast,
	Ocirc: Ocirc$1,
	ocirc: ocirc$1,
	ocir: ocir,
	Ocy: Ocy,
	ocy: ocy,
	odash: odash,
	Odblac: Odblac,
	odblac: odblac,
	odiv: odiv,
	odot: odot,
	odsold: odsold,
	OElig: OElig,
	oelig: oelig,
	ofcir: ofcir,
	Ofr: Ofr,
	ofr: ofr,
	ogon: ogon,
	Ograve: Ograve$1,
	ograve: ograve$1,
	ogt: ogt,
	ohbar: ohbar,
	ohm: ohm,
	oint: oint,
	olarr: olarr,
	olcir: olcir,
	olcross: olcross,
	oline: oline,
	olt: olt,
	Omacr: Omacr,
	omacr: omacr,
	Omega: Omega,
	omega: omega,
	Omicron: Omicron,
	omicron: omicron,
	omid: omid,
	ominus: ominus,
	Oopf: Oopf,
	oopf: oopf,
	opar: opar,
	OpenCurlyDoubleQuote: OpenCurlyDoubleQuote,
	OpenCurlyQuote: OpenCurlyQuote,
	operp: operp,
	oplus: oplus,
	orarr: orarr,
	Or: Or,
	or: or,
	ord: ord,
	order: order,
	orderof: orderof,
	ordf: ordf$1,
	ordm: ordm$1,
	origof: origof,
	oror: oror,
	orslope: orslope,
	orv: orv,
	oS: oS,
	Oscr: Oscr,
	oscr: oscr,
	Oslash: Oslash$1,
	oslash: oslash$1,
	osol: osol,
	Otilde: Otilde$1,
	otilde: otilde$1,
	otimesas: otimesas,
	Otimes: Otimes,
	otimes: otimes,
	Ouml: Ouml$1,
	ouml: ouml$1,
	ovbar: ovbar,
	OverBar: OverBar,
	OverBrace: OverBrace,
	OverBracket: OverBracket,
	OverParenthesis: OverParenthesis,
	para: para$1,
	parallel: parallel,
	par: par,
	parsim: parsim,
	parsl: parsl,
	part: part,
	PartialD: PartialD,
	Pcy: Pcy,
	pcy: pcy,
	percnt: percnt,
	period: period,
	permil: permil,
	perp: perp,
	pertenk: pertenk,
	Pfr: Pfr,
	pfr: pfr,
	Phi: Phi,
	phi: phi,
	phiv: phiv,
	phmmat: phmmat,
	phone: phone,
	Pi: Pi,
	pi: pi,
	pitchfork: pitchfork,
	piv: piv,
	planck: planck,
	planckh: planckh,
	plankv: plankv,
	plusacir: plusacir,
	plusb: plusb,
	pluscir: pluscir,
	plus: plus,
	plusdo: plusdo,
	plusdu: plusdu,
	pluse: pluse,
	PlusMinus: PlusMinus,
	plusmn: plusmn$1,
	plussim: plussim,
	plustwo: plustwo,
	pm: pm,
	Poincareplane: Poincareplane,
	pointint: pointint,
	popf: popf,
	Popf: Popf,
	pound: pound$1,
	prap: prap,
	Pr: Pr,
	pr: pr,
	prcue: prcue,
	precapprox: precapprox,
	prec: prec,
	preccurlyeq: preccurlyeq,
	Precedes: Precedes,
	PrecedesEqual: PrecedesEqual,
	PrecedesSlantEqual: PrecedesSlantEqual,
	PrecedesTilde: PrecedesTilde,
	preceq: preceq,
	precnapprox: precnapprox,
	precneqq: precneqq,
	precnsim: precnsim,
	pre: pre,
	prE: prE,
	precsim: precsim,
	prime: prime,
	Prime: Prime,
	primes: primes,
	prnap: prnap,
	prnE: prnE,
	prnsim: prnsim,
	prod: prod,
	Product: Product,
	profalar: profalar,
	profline: profline,
	profsurf: profsurf,
	prop: prop$1,
	Proportional: Proportional,
	Proportion: Proportion,
	propto: propto,
	prsim: prsim,
	prurel: prurel,
	Pscr: Pscr,
	pscr: pscr,
	Psi: Psi,
	psi: psi,
	puncsp: puncsp,
	Qfr: Qfr,
	qfr: qfr,
	qint: qint,
	qopf: qopf,
	Qopf: Qopf,
	qprime: qprime,
	Qscr: Qscr,
	qscr: qscr,
	quaternions: quaternions,
	quatint: quatint,
	quest: quest,
	questeq: questeq,
	quot: quot$2,
	QUOT: QUOT$1,
	rAarr: rAarr,
	race: race,
	Racute: Racute,
	racute: racute,
	radic: radic,
	raemptyv: raemptyv,
	rang: rang,
	Rang: Rang,
	rangd: rangd,
	range: range,
	rangle: rangle,
	raquo: raquo$1,
	rarrap: rarrap,
	rarrb: rarrb,
	rarrbfs: rarrbfs,
	rarrc: rarrc,
	rarr: rarr,
	Rarr: Rarr,
	rArr: rArr,
	rarrfs: rarrfs,
	rarrhk: rarrhk,
	rarrlp: rarrlp,
	rarrpl: rarrpl,
	rarrsim: rarrsim,
	Rarrtl: Rarrtl,
	rarrtl: rarrtl,
	rarrw: rarrw,
	ratail: ratail,
	rAtail: rAtail,
	ratio: ratio,
	rationals: rationals,
	rbarr: rbarr,
	rBarr: rBarr,
	RBarr: RBarr,
	rbbrk: rbbrk,
	rbrace: rbrace$1,
	rbrack: rbrack,
	rbrke: rbrke,
	rbrksld: rbrksld,
	rbrkslu: rbrkslu,
	Rcaron: Rcaron,
	rcaron: rcaron,
	Rcedil: Rcedil,
	rcedil: rcedil,
	rceil: rceil,
	rcub: rcub,
	Rcy: Rcy,
	rcy: rcy,
	rdca: rdca,
	rdldhar: rdldhar,
	rdquo: rdquo,
	rdquor: rdquor,
	rdsh: rdsh,
	real: real,
	realine: realine,
	realpart: realpart,
	reals: reals,
	Re: Re,
	rect: rect,
	reg: reg$1,
	REG: REG$1,
	ReverseElement: ReverseElement,
	ReverseEquilibrium: ReverseEquilibrium,
	ReverseUpEquilibrium: ReverseUpEquilibrium,
	rfisht: rfisht,
	rfloor: rfloor,
	rfr: rfr,
	Rfr: Rfr,
	rHar: rHar,
	rhard: rhard,
	rharu: rharu,
	rharul: rharul,
	Rho: Rho,
	rho: rho,
	rhov: rhov,
	RightAngleBracket: RightAngleBracket,
	RightArrowBar: RightArrowBar,
	rightarrow: rightarrow,
	RightArrow: RightArrow,
	Rightarrow: Rightarrow,
	RightArrowLeftArrow: RightArrowLeftArrow,
	rightarrowtail: rightarrowtail,
	RightCeiling: RightCeiling,
	RightDoubleBracket: RightDoubleBracket,
	RightDownTeeVector: RightDownTeeVector,
	RightDownVectorBar: RightDownVectorBar,
	RightDownVector: RightDownVector,
	RightFloor: RightFloor,
	rightharpoondown: rightharpoondown,
	rightharpoonup: rightharpoonup,
	rightleftarrows: rightleftarrows,
	rightleftharpoons: rightleftharpoons,
	rightrightarrows: rightrightarrows,
	rightsquigarrow: rightsquigarrow,
	RightTeeArrow: RightTeeArrow,
	RightTee: RightTee,
	RightTeeVector: RightTeeVector,
	rightthreetimes: rightthreetimes,
	RightTriangleBar: RightTriangleBar,
	RightTriangle: RightTriangle,
	RightTriangleEqual: RightTriangleEqual,
	RightUpDownVector: RightUpDownVector,
	RightUpTeeVector: RightUpTeeVector,
	RightUpVectorBar: RightUpVectorBar,
	RightUpVector: RightUpVector,
	RightVectorBar: RightVectorBar,
	RightVector: RightVector,
	ring: ring,
	risingdotseq: risingdotseq,
	rlarr: rlarr,
	rlhar: rlhar,
	rlm: rlm,
	rmoustache: rmoustache,
	rmoust: rmoust,
	rnmid: rnmid,
	roang: roang,
	roarr: roarr,
	robrk: robrk,
	ropar: ropar,
	ropf: ropf,
	Ropf: Ropf,
	roplus: roplus,
	rotimes: rotimes,
	RoundImplies: RoundImplies,
	rpar: rpar,
	rpargt: rpargt,
	rppolint: rppolint,
	rrarr: rrarr,
	Rrightarrow: Rrightarrow,
	rsaquo: rsaquo,
	rscr: rscr,
	Rscr: Rscr,
	rsh: rsh,
	Rsh: Rsh,
	rsqb: rsqb,
	rsquo: rsquo,
	rsquor: rsquor,
	rthree: rthree,
	rtimes: rtimes,
	rtri: rtri,
	rtrie: rtrie,
	rtrif: rtrif,
	rtriltri: rtriltri,
	RuleDelayed: RuleDelayed,
	ruluhar: ruluhar,
	rx: rx,
	Sacute: Sacute,
	sacute: sacute,
	sbquo: sbquo,
	scap: scap,
	Scaron: Scaron,
	scaron: scaron,
	Sc: Sc,
	sc: sc,
	sccue: sccue,
	sce: sce,
	scE: scE,
	Scedil: Scedil,
	scedil: scedil,
	Scirc: Scirc,
	scirc: scirc,
	scnap: scnap,
	scnE: scnE,
	scnsim: scnsim,
	scpolint: scpolint,
	scsim: scsim,
	Scy: Scy,
	scy: scy,
	sdotb: sdotb,
	sdot: sdot,
	sdote: sdote,
	searhk: searhk,
	searr: searr,
	seArr: seArr,
	searrow: searrow,
	sect: sect$1,
	semi: semi,
	seswar: seswar,
	setminus: setminus,
	setmn: setmn,
	sext: sext,
	Sfr: Sfr,
	sfr: sfr,
	sfrown: sfrown,
	sharp: sharp,
	SHCHcy: SHCHcy,
	shchcy: shchcy,
	SHcy: SHcy,
	shcy: shcy,
	ShortDownArrow: ShortDownArrow,
	ShortLeftArrow: ShortLeftArrow,
	shortmid: shortmid,
	shortparallel: shortparallel,
	ShortRightArrow: ShortRightArrow,
	ShortUpArrow: ShortUpArrow,
	shy: shy$1,
	Sigma: Sigma,
	sigma: sigma,
	sigmaf: sigmaf,
	sigmav: sigmav,
	sim: sim,
	simdot: simdot,
	sime: sime,
	simeq: simeq,
	simg: simg,
	simgE: simgE,
	siml: siml,
	simlE: simlE,
	simne: simne,
	simplus: simplus,
	simrarr: simrarr,
	slarr: slarr,
	SmallCircle: SmallCircle,
	smallsetminus: smallsetminus,
	smashp: smashp,
	smeparsl: smeparsl,
	smid: smid,
	smile: smile,
	smt: smt,
	smte: smte,
	smtes: smtes,
	SOFTcy: SOFTcy,
	softcy: softcy,
	solbar: solbar,
	solb: solb,
	sol: sol,
	Sopf: Sopf,
	sopf: sopf,
	spades: spades,
	spadesuit: spadesuit,
	spar: spar,
	sqcap: sqcap,
	sqcaps: sqcaps,
	sqcup: sqcup,
	sqcups: sqcups,
	Sqrt: Sqrt,
	sqsub: sqsub,
	sqsube: sqsube,
	sqsubset: sqsubset,
	sqsubseteq: sqsubseteq,
	sqsup: sqsup,
	sqsupe: sqsupe,
	sqsupset: sqsupset,
	sqsupseteq: sqsupseteq,
	square: square,
	Square: Square,
	SquareIntersection: SquareIntersection,
	SquareSubset: SquareSubset,
	SquareSubsetEqual: SquareSubsetEqual,
	SquareSuperset: SquareSuperset,
	SquareSupersetEqual: SquareSupersetEqual,
	SquareUnion: SquareUnion,
	squarf: squarf,
	squ: squ,
	squf: squf,
	srarr: srarr,
	Sscr: Sscr,
	sscr: sscr,
	ssetmn: ssetmn,
	ssmile: ssmile,
	sstarf: sstarf,
	Star: Star,
	star: star,
	starf: starf,
	straightepsilon: straightepsilon,
	straightphi: straightphi,
	strns: strns,
	sub: sub,
	Sub: Sub,
	subdot: subdot,
	subE: subE,
	sube: sube,
	subedot: subedot,
	submult: submult,
	subnE: subnE,
	subne: subne,
	subplus: subplus,
	subrarr: subrarr,
	subset: subset,
	Subset: Subset,
	subseteq: subseteq,
	subseteqq: subseteqq,
	SubsetEqual: SubsetEqual,
	subsetneq: subsetneq,
	subsetneqq: subsetneqq,
	subsim: subsim,
	subsub: subsub,
	subsup: subsup,
	succapprox: succapprox,
	succ: succ,
	succcurlyeq: succcurlyeq,
	Succeeds: Succeeds,
	SucceedsEqual: SucceedsEqual,
	SucceedsSlantEqual: SucceedsSlantEqual,
	SucceedsTilde: SucceedsTilde,
	succeq: succeq,
	succnapprox: succnapprox,
	succneqq: succneqq,
	succnsim: succnsim,
	succsim: succsim,
	SuchThat: SuchThat,
	sum: sum,
	Sum: Sum,
	sung: sung,
	sup1: sup1$1,
	sup2: sup2$1,
	sup3: sup3$1,
	sup: sup,
	Sup: Sup,
	supdot: supdot,
	supdsub: supdsub,
	supE: supE,
	supe: supe,
	supedot: supedot,
	Superset: Superset,
	SupersetEqual: SupersetEqual,
	suphsol: suphsol,
	suphsub: suphsub,
	suplarr: suplarr,
	supmult: supmult,
	supnE: supnE,
	supne: supne,
	supplus: supplus,
	supset: supset,
	Supset: Supset,
	supseteq: supseteq,
	supseteqq: supseteqq,
	supsetneq: supsetneq,
	supsetneqq: supsetneqq,
	supsim: supsim,
	supsub: supsub,
	supsup: supsup,
	swarhk: swarhk,
	swarr: swarr,
	swArr: swArr,
	swarrow: swarrow,
	swnwar: swnwar,
	szlig: szlig$1,
	Tab: Tab,
	target: target,
	Tau: Tau,
	tau: tau,
	tbrk: tbrk,
	Tcaron: Tcaron,
	tcaron: tcaron,
	Tcedil: Tcedil,
	tcedil: tcedil,
	Tcy: Tcy,
	tcy: tcy,
	tdot: tdot,
	telrec: telrec,
	Tfr: Tfr,
	tfr: tfr,
	there4: there4,
	therefore: therefore,
	Therefore: Therefore,
	Theta: Theta,
	theta: theta,
	thetasym: thetasym,
	thetav: thetav,
	thickapprox: thickapprox,
	thicksim: thicksim,
	ThickSpace: ThickSpace,
	ThinSpace: ThinSpace,
	thinsp: thinsp,
	thkap: thkap,
	thksim: thksim,
	THORN: THORN$1,
	thorn: thorn$1,
	tilde: tilde,
	Tilde: Tilde,
	TildeEqual: TildeEqual,
	TildeFullEqual: TildeFullEqual,
	TildeTilde: TildeTilde,
	timesbar: timesbar,
	timesb: timesb,
	times: times$1,
	timesd: timesd,
	tint: tint,
	toea: toea,
	topbot: topbot,
	topcir: topcir,
	top: top,
	Topf: Topf,
	topf: topf,
	topfork: topfork,
	tosa: tosa,
	tprime: tprime,
	trade: trade,
	TRADE: TRADE,
	triangle: triangle,
	triangledown: triangledown,
	triangleleft: triangleleft,
	trianglelefteq: trianglelefteq,
	triangleq: triangleq,
	triangleright: triangleright,
	trianglerighteq: trianglerighteq,
	tridot: tridot,
	trie: trie,
	triminus: triminus,
	TripleDot: TripleDot,
	triplus: triplus,
	trisb: trisb,
	tritime: tritime,
	trpezium: trpezium,
	Tscr: Tscr,
	tscr: tscr,
	TScy: TScy,
	tscy: tscy,
	TSHcy: TSHcy,
	tshcy: tshcy,
	Tstrok: Tstrok,
	tstrok: tstrok,
	twixt: twixt,
	twoheadleftarrow: twoheadleftarrow,
	twoheadrightarrow: twoheadrightarrow,
	Uacute: Uacute$1,
	uacute: uacute$1,
	uarr: uarr,
	Uarr: Uarr,
	uArr: uArr,
	Uarrocir: Uarrocir,
	Ubrcy: Ubrcy,
	ubrcy: ubrcy,
	Ubreve: Ubreve,
	ubreve: ubreve,
	Ucirc: Ucirc$1,
	ucirc: ucirc$1,
	Ucy: Ucy,
	ucy: ucy,
	udarr: udarr,
	Udblac: Udblac,
	udblac: udblac,
	udhar: udhar,
	ufisht: ufisht,
	Ufr: Ufr,
	ufr: ufr,
	Ugrave: Ugrave$1,
	ugrave: ugrave$1,
	uHar: uHar,
	uharl: uharl,
	uharr: uharr,
	uhblk: uhblk,
	ulcorn: ulcorn,
	ulcorner: ulcorner,
	ulcrop: ulcrop,
	ultri: ultri,
	Umacr: Umacr,
	umacr: umacr,
	uml: uml$1,
	UnderBar: UnderBar,
	UnderBrace: UnderBrace,
	UnderBracket: UnderBracket,
	UnderParenthesis: UnderParenthesis,
	Union: Union,
	UnionPlus: UnionPlus,
	Uogon: Uogon,
	uogon: uogon,
	Uopf: Uopf,
	uopf: uopf,
	UpArrowBar: UpArrowBar,
	uparrow: uparrow,
	UpArrow: UpArrow,
	Uparrow: Uparrow,
	UpArrowDownArrow: UpArrowDownArrow,
	updownarrow: updownarrow,
	UpDownArrow: UpDownArrow,
	Updownarrow: Updownarrow,
	UpEquilibrium: UpEquilibrium,
	upharpoonleft: upharpoonleft,
	upharpoonright: upharpoonright,
	uplus: uplus,
	UpperLeftArrow: UpperLeftArrow,
	UpperRightArrow: UpperRightArrow,
	upsi: upsi,
	Upsi: Upsi,
	upsih: upsih,
	Upsilon: Upsilon,
	upsilon: upsilon,
	UpTeeArrow: UpTeeArrow,
	UpTee: UpTee,
	upuparrows: upuparrows,
	urcorn: urcorn,
	urcorner: urcorner,
	urcrop: urcrop,
	Uring: Uring,
	uring: uring,
	urtri: urtri,
	Uscr: Uscr,
	uscr: uscr,
	utdot: utdot,
	Utilde: Utilde,
	utilde: utilde,
	utri: utri,
	utrif: utrif,
	uuarr: uuarr,
	Uuml: Uuml$1,
	uuml: uuml$1,
	uwangle: uwangle,
	vangrt: vangrt,
	varepsilon: varepsilon,
	varkappa: varkappa,
	varnothing: varnothing,
	varphi: varphi,
	varpi: varpi,
	varpropto: varpropto,
	varr: varr,
	vArr: vArr,
	varrho: varrho,
	varsigma: varsigma,
	varsubsetneq: varsubsetneq,
	varsubsetneqq: varsubsetneqq,
	varsupsetneq: varsupsetneq,
	varsupsetneqq: varsupsetneqq,
	vartheta: vartheta,
	vartriangleleft: vartriangleleft,
	vartriangleright: vartriangleright,
	vBar: vBar,
	Vbar: Vbar,
	vBarv: vBarv,
	Vcy: Vcy,
	vcy: vcy,
	vdash: vdash,
	vDash: vDash,
	Vdash: Vdash,
	VDash: VDash,
	Vdashl: Vdashl,
	veebar: veebar,
	vee: vee,
	Vee: Vee,
	veeeq: veeeq,
	vellip: vellip,
	verbar: verbar,
	Verbar: Verbar,
	vert: vert,
	Vert: Vert,
	VerticalBar: VerticalBar,
	VerticalLine: VerticalLine,
	VerticalSeparator: VerticalSeparator,
	VerticalTilde: VerticalTilde,
	VeryThinSpace: VeryThinSpace,
	Vfr: Vfr,
	vfr: vfr,
	vltri: vltri,
	vnsub: vnsub,
	vnsup: vnsup,
	Vopf: Vopf,
	vopf: vopf,
	vprop: vprop,
	vrtri: vrtri,
	Vscr: Vscr,
	vscr: vscr,
	vsubnE: vsubnE,
	vsubne: vsubne,
	vsupnE: vsupnE,
	vsupne: vsupne,
	Vvdash: Vvdash,
	vzigzag: vzigzag,
	Wcirc: Wcirc,
	wcirc: wcirc,
	wedbar: wedbar,
	wedge: wedge,
	Wedge: Wedge,
	wedgeq: wedgeq,
	weierp: weierp,
	Wfr: Wfr,
	wfr: wfr,
	Wopf: Wopf,
	wopf: wopf,
	wp: wp,
	wr: wr,
	wreath: wreath,
	Wscr: Wscr,
	wscr: wscr,
	xcap: xcap,
	xcirc: xcirc,
	xcup: xcup,
	xdtri: xdtri,
	Xfr: Xfr,
	xfr: xfr,
	xharr: xharr,
	xhArr: xhArr,
	Xi: Xi,
	xi: xi,
	xlarr: xlarr,
	xlArr: xlArr,
	xmap: xmap,
	xnis: xnis,
	xodot: xodot,
	Xopf: Xopf,
	xopf: xopf,
	xoplus: xoplus,
	xotime: xotime,
	xrarr: xrarr,
	xrArr: xrArr,
	Xscr: Xscr,
	xscr: xscr,
	xsqcup: xsqcup,
	xuplus: xuplus,
	xutri: xutri,
	xvee: xvee,
	xwedge: xwedge,
	Yacute: Yacute$1,
	yacute: yacute$1,
	YAcy: YAcy,
	yacy: yacy,
	Ycirc: Ycirc,
	ycirc: ycirc,
	Ycy: Ycy,
	ycy: ycy,
	yen: yen$1,
	Yfr: Yfr,
	yfr: yfr,
	YIcy: YIcy,
	yicy: yicy,
	Yopf: Yopf,
	yopf: yopf,
	Yscr: Yscr,
	yscr: yscr,
	YUcy: YUcy,
	yucy: yucy,
	yuml: yuml$1,
	Yuml: Yuml,
	Zacute: Zacute,
	zacute: zacute,
	Zcaron: Zcaron,
	zcaron: zcaron,
	Zcy: Zcy,
	zcy: zcy,
	Zdot: Zdot,
	zdot: zdot,
	zeetrf: zeetrf,
	ZeroWidthSpace: ZeroWidthSpace,
	Zeta: Zeta,
	zeta: zeta,
	zfr: zfr,
	Zfr: Zfr,
	ZHcy: ZHcy,
	zhcy: zhcy,
	zigrarr: zigrarr,
	zopf: zopf,
	Zopf: Zopf,
	Zscr: Zscr,
	zscr: zscr,
	zwj: zwj,
	zwnj: zwnj
};

var Aacute = "Á";
var aacute = "á";
var Acirc = "Â";
var acirc = "â";
var acute = "´";
var AElig = "Æ";
var aelig = "æ";
var Agrave = "À";
var agrave = "à";
var amp$1 = "&";
var AMP = "&";
var Aring = "Å";
var aring = "å";
var Atilde = "Ã";
var atilde = "ã";
var Auml = "Ä";
var auml = "ä";
var brvbar = "¦";
var Ccedil = "Ç";
var ccedil = "ç";
var cedil = "¸";
var cent = "¢";
var copy = "©";
var COPY = "©";
var curren = "¤";
var deg = "°";
var divide = "÷";
var Eacute = "É";
var eacute = "é";
var Ecirc = "Ê";
var ecirc = "ê";
var Egrave = "È";
var egrave = "è";
var ETH = "Ð";
var eth = "ð";
var Euml = "Ë";
var euml = "ë";
var frac12 = "½";
var frac14 = "¼";
var frac34 = "¾";
var gt$1 = ">";
var GT = ">";
var Iacute = "Í";
var iacute = "í";
var Icirc = "Î";
var icirc = "î";
var iexcl = "¡";
var Igrave = "Ì";
var igrave = "ì";
var iquest = "¿";
var Iuml = "Ï";
var iuml = "ï";
var laquo = "«";
var lt$1 = "<";
var LT = "<";
var macr = "¯";
var micro = "µ";
var middot = "·";
var nbsp = " ";
var not$1 = "¬";
var Ntilde = "Ñ";
var ntilde = "ñ";
var Oacute = "Ó";
var oacute = "ó";
var Ocirc = "Ô";
var ocirc = "ô";
var Ograve = "Ò";
var ograve = "ò";
var ordf = "ª";
var ordm = "º";
var Oslash = "Ø";
var oslash = "ø";
var Otilde = "Õ";
var otilde = "õ";
var Ouml = "Ö";
var ouml = "ö";
var para = "¶";
var plusmn = "±";
var pound = "£";
var quot$1 = "\"";
var QUOT = "\"";
var raquo = "»";
var reg = "®";
var REG = "®";
var sect = "§";
var shy = "­";
var sup1 = "¹";
var sup2 = "²";
var sup3 = "³";
var szlig = "ß";
var THORN = "Þ";
var thorn = "þ";
var times = "×";
var Uacute = "Ú";
var uacute = "ú";
var Ucirc = "Û";
var ucirc = "û";
var Ugrave = "Ù";
var ugrave = "ù";
var uml = "¨";
var Uuml = "Ü";
var uuml = "ü";
var Yacute = "Ý";
var yacute = "ý";
var yen = "¥";
var yuml = "ÿ";
var require$$2 = {
	Aacute: Aacute,
	aacute: aacute,
	Acirc: Acirc,
	acirc: acirc,
	acute: acute,
	AElig: AElig,
	aelig: aelig,
	Agrave: Agrave,
	agrave: agrave,
	amp: amp$1,
	AMP: AMP,
	Aring: Aring,
	aring: aring,
	Atilde: Atilde,
	atilde: atilde,
	Auml: Auml,
	auml: auml,
	brvbar: brvbar,
	Ccedil: Ccedil,
	ccedil: ccedil,
	cedil: cedil,
	cent: cent,
	copy: copy,
	COPY: COPY,
	curren: curren,
	deg: deg,
	divide: divide,
	Eacute: Eacute,
	eacute: eacute,
	Ecirc: Ecirc,
	ecirc: ecirc,
	Egrave: Egrave,
	egrave: egrave,
	ETH: ETH,
	eth: eth,
	Euml: Euml,
	euml: euml,
	frac12: frac12,
	frac14: frac14,
	frac34: frac34,
	gt: gt$1,
	GT: GT,
	Iacute: Iacute,
	iacute: iacute,
	Icirc: Icirc,
	icirc: icirc,
	iexcl: iexcl,
	Igrave: Igrave,
	igrave: igrave,
	iquest: iquest,
	Iuml: Iuml,
	iuml: iuml,
	laquo: laquo,
	lt: lt$1,
	LT: LT,
	macr: macr,
	micro: micro,
	middot: middot,
	nbsp: nbsp,
	not: not$1,
	Ntilde: Ntilde,
	ntilde: ntilde,
	Oacute: Oacute,
	oacute: oacute,
	Ocirc: Ocirc,
	ocirc: ocirc,
	Ograve: Ograve,
	ograve: ograve,
	ordf: ordf,
	ordm: ordm,
	Oslash: Oslash,
	oslash: oslash,
	Otilde: Otilde,
	otilde: otilde,
	Ouml: Ouml,
	ouml: ouml,
	para: para,
	plusmn: plusmn,
	pound: pound,
	quot: quot$1,
	QUOT: QUOT,
	raquo: raquo,
	reg: reg,
	REG: REG,
	sect: sect,
	shy: shy,
	sup1: sup1,
	sup2: sup2,
	sup3: sup3,
	szlig: szlig,
	THORN: THORN,
	thorn: thorn,
	times: times,
	Uacute: Uacute,
	uacute: uacute,
	Ucirc: Ucirc,
	ucirc: ucirc,
	Ugrave: Ugrave,
	ugrave: ugrave,
	uml: uml,
	Uuml: Uuml,
	uuml: uuml,
	Yacute: Yacute,
	yacute: yacute,
	yen: yen,
	yuml: yuml
};

var amp = "&";
var apos = "'";
var gt = ">";
var lt = "<";
var quot = "\"";
var require$$3 = {
	amp: amp,
	apos: apos,
	gt: gt,
	lt: lt,
	quot: quot
};

var decode_codepoint = {};

var require$$0 = {
	"0": 65533,
	"128": 8364,
	"130": 8218,
	"131": 402,
	"132": 8222,
	"133": 8230,
	"134": 8224,
	"135": 8225,
	"136": 710,
	"137": 8240,
	"138": 352,
	"139": 8249,
	"140": 338,
	"142": 381,
	"145": 8216,
	"146": 8217,
	"147": 8220,
	"148": 8221,
	"149": 8226,
	"150": 8211,
	"151": 8212,
	"152": 732,
	"153": 8482,
	"154": 353,
	"155": 8250,
	"156": 339,
	"158": 382,
	"159": 376
};

var __importDefault$7 = commonjsGlobal && commonjsGlobal.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(decode_codepoint, "__esModule", {
  value: true
});

var decode_json_1 = __importDefault$7(require$$0); // Adapted from https://github.com/mathiasbynens/he/blob/master/src/he.js#L94-L119


var fromCodePoint = // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
String.fromCodePoint || function (codePoint) {
  var output = "";

  if (codePoint > 0xffff) {
    codePoint -= 0x10000;
    output += String.fromCharCode(codePoint >>> 10 & 0x3ff | 0xd800);
    codePoint = 0xdc00 | codePoint & 0x3ff;
  }

  output += String.fromCharCode(codePoint);
  return output;
};

function decodeCodePoint(codePoint) {
  if (codePoint >= 0xd800 && codePoint <= 0xdfff || codePoint > 0x10ffff) {
    return "\uFFFD";
  }

  if (codePoint in decode_json_1["default"]) {
    codePoint = decode_json_1["default"][codePoint];
  }

  return fromCodePoint(codePoint);
}

decode_codepoint["default"] = decodeCodePoint;

var __importDefault$6 = commonjsGlobal && commonjsGlobal.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(decode, "__esModule", {
  value: true
});
decode.decodeHTML = decode.decodeHTMLStrict = decode.decodeXML = void 0;

var entities_json_1$2 = __importDefault$6(require$$1);

var legacy_json_1$1 = __importDefault$6(require$$2);

var xml_json_1$2 = __importDefault$6(require$$3);

var decode_codepoint_1$1 = __importDefault$6(decode_codepoint);

var strictEntityRe = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;
decode.decodeXML = getStrictDecoder(xml_json_1$2["default"]);
decode.decodeHTMLStrict = getStrictDecoder(entities_json_1$2["default"]);

function getStrictDecoder(map) {
  var replace = getReplacer(map);
  return function (str) {
    return String(str).replace(strictEntityRe, replace);
  };
}

var sorter = function sorter(a, b) {
  return a < b ? 1 : -1;
};

decode.decodeHTML = function () {
  var legacy = Object.keys(legacy_json_1$1["default"]).sort(sorter);
  var keys = Object.keys(entities_json_1$2["default"]).sort(sorter);

  for (var i = 0, j = 0; i < keys.length; i++) {
    if (legacy[j] === keys[i]) {
      keys[i] += ";?";
      j++;
    } else {
      keys[i] += ";";
    }
  }

  var re = new RegExp("&(?:" + keys.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g");
  var replace = getReplacer(entities_json_1$2["default"]);

  function replacer(str) {
    if (str.substr(-1) !== ";") str += ";";
    return replace(str);
  } // TODO consider creating a merged map


  return function (str) {
    return String(str).replace(re, replacer);
  };
}();

function getReplacer(map) {
  return function replace(str) {
    if (str.charAt(1) === "#") {
      var secondChar = str.charAt(2);

      if (secondChar === "X" || secondChar === "x") {
        return decode_codepoint_1$1["default"](parseInt(str.substr(3), 16));
      }

      return decode_codepoint_1$1["default"](parseInt(str.substr(2), 10));
    } // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing


    return map[str.slice(1, -1)] || str;
  };
}

var encode = {};

var __importDefault$5 = commonjsGlobal && commonjsGlobal.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(encode, "__esModule", {
  value: true
});
encode.escapeUTF8 = encode.escape = encode.encodeNonAsciiHTML = encode.encodeHTML = encode.encodeXML = void 0;

var xml_json_1$1 = __importDefault$5(require$$3);

var inverseXML = getInverseObj(xml_json_1$1["default"]);
var xmlReplacer = getInverseReplacer(inverseXML);
/**
 * Encodes all non-ASCII characters, as well as characters not valid in XML
 * documents using XML entities.
 *
 * If a character has no equivalent entity, a
 * numeric hexadecimal reference (eg. `&#xfc;`) will be used.
 */

encode.encodeXML = getASCIIEncoder(inverseXML);

var entities_json_1$1 = __importDefault$5(require$$1);

var inverseHTML = getInverseObj(entities_json_1$1["default"]);
var htmlReplacer = getInverseReplacer(inverseHTML);
/**
 * Encodes all entities and non-ASCII characters in the input.
 *
 * This includes characters that are valid ASCII characters in HTML documents.
 * For example `#` will be encoded as `&num;`. To get a more compact output,
 * consider using the `encodeNonAsciiHTML` function.
 *
 * If a character has no equivalent entity, a
 * numeric hexadecimal reference (eg. `&#xfc;`) will be used.
 */

encode.encodeHTML = getInverse(inverseHTML, htmlReplacer);
/**
 * Encodes all non-ASCII characters, as well as characters not valid in HTML
 * documents using HTML entities.
 *
 * If a character has no equivalent entity, a
 * numeric hexadecimal reference (eg. `&#xfc;`) will be used.
 */

encode.encodeNonAsciiHTML = getASCIIEncoder(inverseHTML);

function getInverseObj(obj) {
  return Object.keys(obj).sort().reduce(function (inverse, name) {
    inverse[obj[name]] = "&" + name + ";";
    return inverse;
  }, {});
}

function getInverseReplacer(inverse) {
  var single = [];
  var multiple = [];

  for (var _i = 0, _a = Object.keys(inverse); _i < _a.length; _i++) {
    var k = _a[_i];

    if (k.length === 1) {
      // Add value to single array
      single.push("\\" + k);
    } else {
      // Add value to multiple array
      multiple.push(k);
    }
  } // Add ranges to single characters.


  single.sort();

  for (var start = 0; start < single.length - 1; start++) {
    // Find the end of a run of characters
    var end = start;

    while (end < single.length - 1 && single[end].charCodeAt(1) + 1 === single[end + 1].charCodeAt(1)) {
      end += 1;
    }

    var count = 1 + end - start; // We want to replace at least three characters

    if (count < 3) continue;
    single.splice(start, count, single[start] + "-" + single[end]);
  }

  multiple.unshift("[" + single.join("") + "]");
  return new RegExp(multiple.join("|"), "g");
} // /[^\0-\x7F]/gu


var reNonASCII = /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g;
var getCodePoint = // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
String.prototype.codePointAt != null ? // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
function (str) {
  return str.codePointAt(0);
} : // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
function (c) {
  return (c.charCodeAt(0) - 0xd800) * 0x400 + c.charCodeAt(1) - 0xdc00 + 0x10000;
};

function singleCharReplacer(c) {
  return "&#x" + (c.length > 1 ? getCodePoint(c) : c.charCodeAt(0)).toString(16).toUpperCase() + ";";
}

function getInverse(inverse, re) {
  return function (data) {
    return data.replace(re, function (name) {
      return inverse[name];
    }).replace(reNonASCII, singleCharReplacer);
  };
}

var reEscapeChars = new RegExp(xmlReplacer.source + "|" + reNonASCII.source, "g");
/**
 * Encodes all non-ASCII characters, as well as characters not valid in XML
 * documents using numeric hexadecimal reference (eg. `&#xfc;`).
 *
 * Have a look at `escapeUTF8` if you want a more concise output at the expense
 * of reduced transportability.
 *
 * @param data String to escape.
 */

function escape(data) {
  return data.replace(reEscapeChars, singleCharReplacer);
}

encode.escape = escape;
/**
 * Encodes all characters not valid in XML documents using numeric hexadecimal
 * reference (eg. `&#xfc;`).
 *
 * Note that the output will be character-set dependent.
 *
 * @param data String to escape.
 */


function escapeUTF8(data) {
  return data.replace(xmlReplacer, singleCharReplacer);
}

encode.escapeUTF8 = escapeUTF8;

function getASCIIEncoder(obj) {
  return function (data) {
    return data.replace(reEscapeChars, function (c) {
      return obj[c] || singleCharReplacer(c);
    });
  };
}

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.decodeXMLStrict = exports.decodeHTML5Strict = exports.decodeHTML4Strict = exports.decodeHTML5 = exports.decodeHTML4 = exports.decodeHTMLStrict = exports.decodeHTML = exports.decodeXML = exports.encodeHTML5 = exports.encodeHTML4 = exports.escapeUTF8 = exports.escape = exports.encodeNonAsciiHTML = exports.encodeHTML = exports.encodeXML = exports.encode = exports.decodeStrict = exports.decode = void 0;
  var decode_1 = decode;
  var encode_1 = encode;
  /**
   * Decodes a string with entities.
   *
   * @param data String to decode.
   * @param level Optional level to decode at. 0 = XML, 1 = HTML. Default is 0.
   * @deprecated Use `decodeXML` or `decodeHTML` directly.
   */

  function decode$1(data, level) {
    return (!level || level <= 0 ? decode_1.decodeXML : decode_1.decodeHTML)(data);
  }

  exports.decode = decode$1;
  /**
   * Decodes a string with entities. Does not allow missing trailing semicolons for entities.
   *
   * @param data String to decode.
   * @param level Optional level to decode at. 0 = XML, 1 = HTML. Default is 0.
   * @deprecated Use `decodeHTMLStrict` or `decodeXML` directly.
   */

  function decodeStrict(data, level) {
    return (!level || level <= 0 ? decode_1.decodeXML : decode_1.decodeHTMLStrict)(data);
  }

  exports.decodeStrict = decodeStrict;
  /**
   * Encodes a string with entities.
   *
   * @param data String to encode.
   * @param level Optional level to encode at. 0 = XML, 1 = HTML. Default is 0.
   * @deprecated Use `encodeHTML`, `encodeXML` or `encodeNonAsciiHTML` directly.
   */

  function encode$1(data, level) {
    return (!level || level <= 0 ? encode_1.encodeXML : encode_1.encodeHTML)(data);
  }

  exports.encode = encode$1;
  var encode_2 = encode;
  Object.defineProperty(exports, "encodeXML", {
    enumerable: true,
    get: function get() {
      return encode_2.encodeXML;
    }
  });
  Object.defineProperty(exports, "encodeHTML", {
    enumerable: true,
    get: function get() {
      return encode_2.encodeHTML;
    }
  });
  Object.defineProperty(exports, "encodeNonAsciiHTML", {
    enumerable: true,
    get: function get() {
      return encode_2.encodeNonAsciiHTML;
    }
  });
  Object.defineProperty(exports, "escape", {
    enumerable: true,
    get: function get() {
      return encode_2.escape;
    }
  });
  Object.defineProperty(exports, "escapeUTF8", {
    enumerable: true,
    get: function get() {
      return encode_2.escapeUTF8;
    }
  }); // Legacy aliases (deprecated)

  Object.defineProperty(exports, "encodeHTML4", {
    enumerable: true,
    get: function get() {
      return encode_2.encodeHTML;
    }
  });
  Object.defineProperty(exports, "encodeHTML5", {
    enumerable: true,
    get: function get() {
      return encode_2.encodeHTML;
    }
  });
  var decode_2 = decode;
  Object.defineProperty(exports, "decodeXML", {
    enumerable: true,
    get: function get() {
      return decode_2.decodeXML;
    }
  });
  Object.defineProperty(exports, "decodeHTML", {
    enumerable: true,
    get: function get() {
      return decode_2.decodeHTML;
    }
  });
  Object.defineProperty(exports, "decodeHTMLStrict", {
    enumerable: true,
    get: function get() {
      return decode_2.decodeHTMLStrict;
    }
  }); // Legacy aliases (deprecated)

  Object.defineProperty(exports, "decodeHTML4", {
    enumerable: true,
    get: function get() {
      return decode_2.decodeHTML;
    }
  });
  Object.defineProperty(exports, "decodeHTML5", {
    enumerable: true,
    get: function get() {
      return decode_2.decodeHTML;
    }
  });
  Object.defineProperty(exports, "decodeHTML4Strict", {
    enumerable: true,
    get: function get() {
      return decode_2.decodeHTMLStrict;
    }
  });
  Object.defineProperty(exports, "decodeHTML5Strict", {
    enumerable: true,
    get: function get() {
      return decode_2.decodeHTMLStrict;
    }
  });
  Object.defineProperty(exports, "decodeXMLStrict", {
    enumerable: true,
    get: function get() {
      return decode_2.decodeXML;
    }
  });
})(lib$4);

var foreignNames = {};

Object.defineProperty(foreignNames, "__esModule", {
  value: true
});
foreignNames.attributeNames = foreignNames.elementNames = void 0;
foreignNames.elementNames = new Map([["altglyph", "altGlyph"], ["altglyphdef", "altGlyphDef"], ["altglyphitem", "altGlyphItem"], ["animatecolor", "animateColor"], ["animatemotion", "animateMotion"], ["animatetransform", "animateTransform"], ["clippath", "clipPath"], ["feblend", "feBlend"], ["fecolormatrix", "feColorMatrix"], ["fecomponenttransfer", "feComponentTransfer"], ["fecomposite", "feComposite"], ["feconvolvematrix", "feConvolveMatrix"], ["fediffuselighting", "feDiffuseLighting"], ["fedisplacementmap", "feDisplacementMap"], ["fedistantlight", "feDistantLight"], ["fedropshadow", "feDropShadow"], ["feflood", "feFlood"], ["fefunca", "feFuncA"], ["fefuncb", "feFuncB"], ["fefuncg", "feFuncG"], ["fefuncr", "feFuncR"], ["fegaussianblur", "feGaussianBlur"], ["feimage", "feImage"], ["femerge", "feMerge"], ["femergenode", "feMergeNode"], ["femorphology", "feMorphology"], ["feoffset", "feOffset"], ["fepointlight", "fePointLight"], ["fespecularlighting", "feSpecularLighting"], ["fespotlight", "feSpotLight"], ["fetile", "feTile"], ["feturbulence", "feTurbulence"], ["foreignobject", "foreignObject"], ["glyphref", "glyphRef"], ["lineargradient", "linearGradient"], ["radialgradient", "radialGradient"], ["textpath", "textPath"]]);
foreignNames.attributeNames = new Map([["definitionurl", "definitionURL"], ["attributename", "attributeName"], ["attributetype", "attributeType"], ["basefrequency", "baseFrequency"], ["baseprofile", "baseProfile"], ["calcmode", "calcMode"], ["clippathunits", "clipPathUnits"], ["diffuseconstant", "diffuseConstant"], ["edgemode", "edgeMode"], ["filterunits", "filterUnits"], ["glyphref", "glyphRef"], ["gradienttransform", "gradientTransform"], ["gradientunits", "gradientUnits"], ["kernelmatrix", "kernelMatrix"], ["kernelunitlength", "kernelUnitLength"], ["keypoints", "keyPoints"], ["keysplines", "keySplines"], ["keytimes", "keyTimes"], ["lengthadjust", "lengthAdjust"], ["limitingconeangle", "limitingConeAngle"], ["markerheight", "markerHeight"], ["markerunits", "markerUnits"], ["markerwidth", "markerWidth"], ["maskcontentunits", "maskContentUnits"], ["maskunits", "maskUnits"], ["numoctaves", "numOctaves"], ["pathlength", "pathLength"], ["patterncontentunits", "patternContentUnits"], ["patterntransform", "patternTransform"], ["patternunits", "patternUnits"], ["pointsatx", "pointsAtX"], ["pointsaty", "pointsAtY"], ["pointsatz", "pointsAtZ"], ["preservealpha", "preserveAlpha"], ["preserveaspectratio", "preserveAspectRatio"], ["primitiveunits", "primitiveUnits"], ["refx", "refX"], ["refy", "refY"], ["repeatcount", "repeatCount"], ["repeatdur", "repeatDur"], ["requiredextensions", "requiredExtensions"], ["requiredfeatures", "requiredFeatures"], ["specularconstant", "specularConstant"], ["specularexponent", "specularExponent"], ["spreadmethod", "spreadMethod"], ["startoffset", "startOffset"], ["stddeviation", "stdDeviation"], ["stitchtiles", "stitchTiles"], ["surfacescale", "surfaceScale"], ["systemlanguage", "systemLanguage"], ["tablevalues", "tableValues"], ["targetx", "targetX"], ["targety", "targetY"], ["textlength", "textLength"], ["viewbox", "viewBox"], ["viewtarget", "viewTarget"], ["xchannelselector", "xChannelSelector"], ["ychannelselector", "yChannelSelector"], ["zoomandpan", "zoomAndPan"]]);

var __assign = commonjsGlobal && commonjsGlobal.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __createBinding$1 = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault$1 = commonjsGlobal && commonjsGlobal.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar$1 = commonjsGlobal && commonjsGlobal.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding$1(result, mod, k);
  }

  __setModuleDefault$1(result, mod);

  return result;
};

Object.defineProperty(lib$5, "__esModule", {
  value: true
});
/*
 * Module dependencies
 */

var ElementType = __importStar$1(lib$6);

var entities_1 = lib$4;
/**
 * Mixed-case SVG and MathML tags & attributes
 * recognized by the HTML parser.
 *
 * @see https://html.spec.whatwg.org/multipage/parsing.html#parsing-main-inforeign
 */

var foreignNames_1 = foreignNames;
var unencodedElements = new Set(["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"]);
/**
 * Format attributes
 */

function formatAttributes(attributes, opts) {
  if (!attributes) return;
  return Object.keys(attributes).map(function (key) {
    var _a, _b;

    var value = (_a = attributes[key]) !== null && _a !== void 0 ? _a : "";

    if (opts.xmlMode === "foreign") {
      /* Fix up mixed-case attribute names */
      key = (_b = foreignNames_1.attributeNames.get(key)) !== null && _b !== void 0 ? _b : key;
    }

    if (!opts.emptyAttrs && !opts.xmlMode && value === "") {
      return key;
    }

    return key + "=\"" + (opts.decodeEntities !== false ? entities_1.encodeXML(value) : value.replace(/"/g, "&quot;")) + "\"";
  }).join(" ");
}
/**
 * Self-enclosing tags
 */


var singleTag = new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]);
/**
 * Renders a DOM node or an array of DOM nodes to a string.
 *
 * Can be thought of as the equivalent of the `outerHTML` of the passed node(s).
 *
 * @param node Node to be rendered.
 * @param options Changes serialization behavior
 */

function render$2(node, options) {
  if (options === void 0) {
    options = {};
  }

  var nodes = "length" in node ? node : [node];
  var output = "";

  for (var i = 0; i < nodes.length; i++) {
    output += renderNode(nodes[i], options);
  }

  return output;
}

lib$5["default"] = render$2;

function renderNode(node, options) {
  switch (node.type) {
    case ElementType.Root:
      return render$2(node.children, options);

    case ElementType.Directive:
    case ElementType.Doctype:
      return renderDirective(node);

    case ElementType.Comment:
      return renderComment(node);

    case ElementType.CDATA:
      return renderCdata(node);

    case ElementType.Script:
    case ElementType.Style:
    case ElementType.Tag:
      return renderTag(node, options);

    case ElementType.Text:
      return renderText(node, options);
  }
}

var foreignModeIntegrationPoints = new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignObject", "desc", "title"]);
var foreignElements = new Set(["svg", "math"]);

function renderTag(elem, opts) {
  var _a; // Handle SVG / MathML in HTML


  if (opts.xmlMode === "foreign") {
    /* Fix up mixed-case element names */
    elem.name = (_a = foreignNames_1.elementNames.get(elem.name)) !== null && _a !== void 0 ? _a : elem.name;
    /* Exit foreign mode at integration points */

    if (elem.parent && foreignModeIntegrationPoints.has(elem.parent.name)) {
      opts = __assign(__assign({}, opts), {
        xmlMode: false
      });
    }
  }

  if (!opts.xmlMode && foreignElements.has(elem.name)) {
    opts = __assign(__assign({}, opts), {
      xmlMode: "foreign"
    });
  }

  var tag = "<" + elem.name;
  var attribs = formatAttributes(elem.attribs, opts);

  if (attribs) {
    tag += " " + attribs;
  }

  if (elem.children.length === 0 && (opts.xmlMode ? // In XML mode or foreign mode, and user hasn't explicitly turned off self-closing tags
  opts.selfClosingTags !== false : // User explicitly asked for self-closing tags, even in HTML mode
  opts.selfClosingTags && singleTag.has(elem.name))) {
    if (!opts.xmlMode) tag += " ";
    tag += "/>";
  } else {
    tag += ">";

    if (elem.children.length > 0) {
      tag += render$2(elem.children, opts);
    }

    if (opts.xmlMode || !singleTag.has(elem.name)) {
      tag += "</" + elem.name + ">";
    }
  }

  return tag;
}

function renderDirective(elem) {
  return "<" + elem.data + ">";
}

function renderText(elem, opts) {
  var data = elem.data || ""; // If entities weren't decoded, no need to encode them back

  if (opts.decodeEntities !== false && !(!opts.xmlMode && elem.parent && unencodedElements.has(elem.parent.name))) {
    data = entities_1.encodeXML(data);
  }

  return data;
}

function renderCdata(elem) {
  return "<![CDATA[" + elem.children[0].data + "]]>";
}

function renderComment(elem) {
  return "<!--" + elem.data + "-->";
}

var __importDefault$4 = commonjsGlobal && commonjsGlobal.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(stringify$2, "__esModule", {
  value: true
});
stringify$2.innerText = stringify$2.textContent = stringify$2.getText = stringify$2.getInnerHTML = stringify$2.getOuterHTML = void 0;
var domhandler_1$a = lib$7;

var dom_serializer_1 = __importDefault$4(lib$5);

var domelementtype_1 = lib$6;
/**
 * @param node Node to get the outer HTML of.
 * @param options Options for serialization.
 * @deprecated Use the `dom-serializer` module directly.
 * @returns `node`'s outer HTML.
 */

function getOuterHTML(node, options) {
  return dom_serializer_1["default"](node, options);
}

stringify$2.getOuterHTML = getOuterHTML;
/**
 * @param node Node to get the inner HTML of.
 * @param options Options for serialization.
 * @deprecated Use the `dom-serializer` module directly.
 * @returns `node`'s inner HTML.
 */

function getInnerHTML(node, options) {
  return domhandler_1$a.hasChildren(node) ? node.children.map(function (node) {
    return getOuterHTML(node, options);
  }).join("") : "";
}

stringify$2.getInnerHTML = getInnerHTML;
/**
 * Get a node's inner text. Same as `textContent`, but inserts newlines for `<br>` tags.
 *
 * @deprecated Use `textContent` instead.
 * @param node Node to get the inner text of.
 * @returns `node`'s inner text.
 */

function getText(node) {
  if (Array.isArray(node)) return node.map(getText).join("");
  if (domhandler_1$a.isTag(node)) return node.name === "br" ? "\n" : getText(node.children);
  if (domhandler_1$a.isCDATA(node)) return getText(node.children);
  if (domhandler_1$a.isText(node)) return node.data;
  return "";
}

stringify$2.getText = getText;
/**
 * Get a node's text content.
 *
 * @param node Node to get the text content of.
 * @returns `node`'s text content.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent}
 */

function textContent(node) {
  if (Array.isArray(node)) return node.map(textContent).join("");
  if (domhandler_1$a.isTag(node)) return textContent(node.children);
  if (domhandler_1$a.isCDATA(node)) return textContent(node.children);
  if (domhandler_1$a.isText(node)) return node.data;
  return "";
}

stringify$2.textContent = textContent;
/**
 * Get a node's inner text.
 *
 * @param node Node to get the inner text of.
 * @returns `node`'s inner text.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Node/innerText}
 */

function innerText(node) {
  if (Array.isArray(node)) return node.map(innerText).join("");

  if (domhandler_1$a.hasChildren(node) && node.type === domelementtype_1.ElementType.Tag) {
    return innerText(node.children);
  }

  if (domhandler_1$a.isCDATA(node)) return innerText(node.children);
  if (domhandler_1$a.isText(node)) return node.data;
  return "";
}

stringify$2.innerText = innerText;

var traversal = {};

Object.defineProperty(traversal, "__esModule", {
  value: true
});
traversal.prevElementSibling = traversal.nextElementSibling = traversal.getName = traversal.hasAttrib = traversal.getAttributeValue = traversal.getSiblings = traversal.getParent = traversal.getChildren = void 0;
var domhandler_1$9 = lib$7;
var emptyArray = [];
/**
 * Get a node's children.
 *
 * @param elem Node to get the children of.
 * @returns `elem`'s children, or an empty array.
 */

function getChildren(elem) {
  var _a;

  return (_a = elem.children) !== null && _a !== void 0 ? _a : emptyArray;
}

traversal.getChildren = getChildren;
/**
 * Get a node's parent.
 *
 * @param elem Node to get the parent of.
 * @returns `elem`'s parent node.
 */

function getParent(elem) {
  return elem.parent || null;
}

traversal.getParent = getParent;
/**
 * Gets an elements siblings, including the element itself.
 *
 * Attempts to get the children through the element's parent first.
 * If we don't have a parent (the element is a root node),
 * we walk the element's `prev` & `next` to get all remaining nodes.
 *
 * @param elem Element to get the siblings of.
 * @returns `elem`'s siblings.
 */

function getSiblings(elem) {
  var _a, _b;

  var parent = getParent(elem);
  if (parent != null) return getChildren(parent);
  var siblings = [elem];
  var prev = elem.prev,
      next = elem.next;

  while (prev != null) {
    siblings.unshift(prev);
    _a = prev, prev = _a.prev;
  }

  while (next != null) {
    siblings.push(next);
    _b = next, next = _b.next;
  }

  return siblings;
}

traversal.getSiblings = getSiblings;
/**
 * Gets an attribute from an element.
 *
 * @param elem Element to check.
 * @param name Attribute name to retrieve.
 * @returns The element's attribute value, or `undefined`.
 */

function getAttributeValue(elem, name) {
  var _a;

  return (_a = elem.attribs) === null || _a === void 0 ? void 0 : _a[name];
}

traversal.getAttributeValue = getAttributeValue;
/**
 * Checks whether an element has an attribute.
 *
 * @param elem Element to check.
 * @param name Attribute name to look for.
 * @returns Returns whether `elem` has the attribute `name`.
 */

function hasAttrib(elem, name) {
  return elem.attribs != null && Object.prototype.hasOwnProperty.call(elem.attribs, name) && elem.attribs[name] != null;
}

traversal.hasAttrib = hasAttrib;
/**
 * Get the tag name of an element.
 *
 * @param elem The element to get the name for.
 * @returns The tag name of `elem`.
 */

function getName(elem) {
  return elem.name;
}

traversal.getName = getName;
/**
 * Returns the next element sibling of a node.
 *
 * @param elem The element to get the next sibling of.
 * @returns `elem`'s next sibling that is a tag.
 */

function nextElementSibling(elem) {
  var _a;

  var next = elem.next;

  while (next !== null && !domhandler_1$9.isTag(next)) {
    _a = next, next = _a.next;
  }

  return next;
}

traversal.nextElementSibling = nextElementSibling;
/**
 * Returns the previous element sibling of a node.
 *
 * @param elem The element to get the previous sibling of.
 * @returns `elem`'s previous sibling that is a tag.
 */

function prevElementSibling(elem) {
  var _a;

  var prev = elem.prev;

  while (prev !== null && !domhandler_1$9.isTag(prev)) {
    _a = prev, prev = _a.prev;
  }

  return prev;
}

traversal.prevElementSibling = prevElementSibling;

var manipulation$1 = {};

Object.defineProperty(manipulation$1, "__esModule", {
  value: true
});
manipulation$1.prepend = manipulation$1.prependChild = manipulation$1.append = manipulation$1.appendChild = manipulation$1.replaceElement = manipulation$1.removeElement = void 0;
/**
 * Remove an element from the dom
 *
 * @param elem The element to be removed
 */

function removeElement(elem) {
  if (elem.prev) elem.prev.next = elem.next;
  if (elem.next) elem.next.prev = elem.prev;

  if (elem.parent) {
    var childs = elem.parent.children;
    childs.splice(childs.lastIndexOf(elem), 1);
  }
}

manipulation$1.removeElement = removeElement;
/**
 * Replace an element in the dom
 *
 * @param elem The element to be replaced
 * @param replacement The element to be added
 */

function replaceElement(elem, replacement) {
  var prev = replacement.prev = elem.prev;

  if (prev) {
    prev.next = replacement;
  }

  var next = replacement.next = elem.next;

  if (next) {
    next.prev = replacement;
  }

  var parent = replacement.parent = elem.parent;

  if (parent) {
    var childs = parent.children;
    childs[childs.lastIndexOf(elem)] = replacement;
  }
}

manipulation$1.replaceElement = replaceElement;
/**
 * Append a child to an element.
 *
 * @param elem The element to append to.
 * @param child The element to be added as a child.
 */

function appendChild$2(elem, child) {
  removeElement(child);
  child.next = null;
  child.parent = elem;

  if (elem.children.push(child) > 1) {
    var sibling = elem.children[elem.children.length - 2];
    sibling.next = child;
    child.prev = sibling;
  } else {
    child.prev = null;
  }
}

manipulation$1.appendChild = appendChild$2;
/**
 * Append an element after another.
 *
 * @param elem The element to append after.
 * @param next The element be added.
 */

function append(elem, next) {
  removeElement(next);
  var parent = elem.parent;
  var currNext = elem.next;
  next.next = currNext;
  next.prev = elem;
  elem.next = next;
  next.parent = parent;

  if (currNext) {
    currNext.prev = next;

    if (parent) {
      var childs = parent.children;
      childs.splice(childs.lastIndexOf(currNext), 0, next);
    }
  } else if (parent) {
    parent.children.push(next);
  }
}

manipulation$1.append = append;
/**
 * Prepend a child to an element.
 *
 * @param elem The element to prepend before.
 * @param child The element to be added as a child.
 */

function prependChild(elem, child) {
  removeElement(child);
  child.parent = elem;
  child.prev = null;

  if (elem.children.unshift(child) !== 1) {
    var sibling = elem.children[1];
    sibling.prev = child;
    child.next = sibling;
  } else {
    child.next = null;
  }
}

manipulation$1.prependChild = prependChild;
/**
 * Prepend an element before another.
 *
 * @param elem The element to prepend before.
 * @param prev The element be added.
 */

function prepend(elem, prev) {
  removeElement(prev);
  var parent = elem.parent;

  if (parent) {
    var childs = parent.children;
    childs.splice(childs.indexOf(elem), 0, prev);
  }

  if (elem.prev) {
    elem.prev.next = prev;
  }

  prev.parent = parent;
  prev.prev = elem.prev;
  prev.next = elem;
  elem.prev = prev;
}

manipulation$1.prepend = prepend;

var querying = {};

Object.defineProperty(querying, "__esModule", {
  value: true
});
querying.findAll = querying.existsOne = querying.findOne = querying.findOneChild = querying.find = querying.filter = void 0;
var domhandler_1$8 = lib$7;
/**
 * Search a node and its children for nodes passing a test function.
 *
 * @param test Function to test nodes on.
 * @param node Node to search. Will be included in the result set if it matches.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes passing `test`.
 */

function filter$1(test, node, recurse, limit) {
  if (recurse === void 0) {
    recurse = true;
  }

  if (limit === void 0) {
    limit = Infinity;
  }

  if (!Array.isArray(node)) node = [node];
  return find$1(test, node, recurse, limit);
}

querying.filter = filter$1;
/**
 * Search an array of node and its children for nodes passing a test function.
 *
 * @param test Function to test nodes on.
 * @param nodes Array of nodes to search.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes passing `test`.
 */

function find$1(test, nodes, recurse, limit) {
  var result = [];

  for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
    var elem = nodes_1[_i];

    if (test(elem)) {
      result.push(elem);
      if (--limit <= 0) break;
    }

    if (recurse && domhandler_1$8.hasChildren(elem) && elem.children.length > 0) {
      var children = find$1(test, elem.children, recurse, limit);
      result.push.apply(result, children);
      limit -= children.length;
      if (limit <= 0) break;
    }
  }

  return result;
}

querying.find = find$1;
/**
 * Finds the first element inside of an array that matches a test function.
 *
 * @param test Function to test nodes on.
 * @param nodes Array of nodes to search.
 * @returns The first node in the array that passes `test`.
 */

function findOneChild(test, nodes) {
  return nodes.find(test);
}

querying.findOneChild = findOneChild;
/**
 * Finds one element in a tree that passes a test.
 *
 * @param test Function to test nodes on.
 * @param nodes Array of nodes to search.
 * @param recurse Also consider child nodes.
 * @returns The first child node that passes `test`.
 */

function findOne(test, nodes, recurse) {
  if (recurse === void 0) {
    recurse = true;
  }

  var elem = null;

  for (var i = 0; i < nodes.length && !elem; i++) {
    var checked = nodes[i];

    if (!domhandler_1$8.isTag(checked)) {
      continue;
    } else if (test(checked)) {
      elem = checked;
    } else if (recurse && checked.children.length > 0) {
      elem = findOne(test, checked.children);
    }
  }

  return elem;
}

querying.findOne = findOne;
/**
 * @param test Function to test nodes on.
 * @param nodes Array of nodes to search.
 * @returns Whether a tree of nodes contains at least one node passing a test.
 */

function existsOne(test, nodes) {
  return nodes.some(function (checked) {
    return domhandler_1$8.isTag(checked) && (test(checked) || checked.children.length > 0 && existsOne(test, checked.children));
  });
}

querying.existsOne = existsOne;
/**
 * Search and array of nodes and its children for nodes passing a test function.
 *
 * Same as `find`, only with less options, leading to reduced complexity.
 *
 * @param test Function to test nodes on.
 * @param nodes Array of nodes to search.
 * @returns All nodes passing `test`.
 */

function findAll(test, nodes) {
  var _a;

  var result = [];
  var stack = nodes.filter(domhandler_1$8.isTag);
  var elem;

  while (elem = stack.shift()) {
    var children = (_a = elem.children) === null || _a === void 0 ? void 0 : _a.filter(domhandler_1$8.isTag);

    if (children && children.length > 0) {
      stack.unshift.apply(stack, children);
    }

    if (test(elem)) result.push(elem);
  }

  return result;
}

querying.findAll = findAll;

var legacy = {};

Object.defineProperty(legacy, "__esModule", {
  value: true
});
legacy.getElementsByTagType = legacy.getElementsByTagName = legacy.getElementById = legacy.getElements = legacy.testElement = void 0;
var domhandler_1$7 = lib$7;
var querying_1 = querying;
var Checks = {
  tag_name: function tag_name(name) {
    if (typeof name === "function") {
      return function (elem) {
        return domhandler_1$7.isTag(elem) && name(elem.name);
      };
    } else if (name === "*") {
      return domhandler_1$7.isTag;
    }

    return function (elem) {
      return domhandler_1$7.isTag(elem) && elem.name === name;
    };
  },
  tag_type: function tag_type(type) {
    if (typeof type === "function") {
      return function (elem) {
        return type(elem.type);
      };
    }

    return function (elem) {
      return elem.type === type;
    };
  },
  tag_contains: function tag_contains(data) {
    if (typeof data === "function") {
      return function (elem) {
        return domhandler_1$7.isText(elem) && data(elem.data);
      };
    }

    return function (elem) {
      return domhandler_1$7.isText(elem) && elem.data === data;
    };
  }
};
/**
 * @param attrib Attribute to check.
 * @param value Attribute value to look for.
 * @returns A function to check whether the a node has an attribute with a particular value.
 */

function getAttribCheck(attrib, value) {
  if (typeof value === "function") {
    return function (elem) {
      return domhandler_1$7.isTag(elem) && value(elem.attribs[attrib]);
    };
  }

  return function (elem) {
    return domhandler_1$7.isTag(elem) && elem.attribs[attrib] === value;
  };
}
/**
 * @param a First function to combine.
 * @param b Second function to combine.
 * @returns A function taking a node and returning `true` if either
 * of the input functions returns `true` for the node.
 */


function combineFuncs(a, b) {
  return function (elem) {
    return a(elem) || b(elem);
  };
}
/**
 * @param options An object describing nodes to look for.
 * @returns A function executing all checks in `options` and returning `true`
 * if any of them match a node.
 */


function compileTest(options) {
  var funcs = Object.keys(options).map(function (key) {
    var value = options[key];
    return key in Checks ? Checks[key](value) : getAttribCheck(key, value);
  });
  return funcs.length === 0 ? null : funcs.reduce(combineFuncs);
}
/**
 * @param options An object describing nodes to look for.
 * @param node The element to test.
 * @returns Whether the element matches the description in `options`.
 */


function testElement(options, node) {
  var test = compileTest(options);
  return test ? test(node) : true;
}

legacy.testElement = testElement;
/**
 * @param options An object describing nodes to look for.
 * @param nodes Nodes to search through.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes that match `options`.
 */

function getElements$1(options, nodes, recurse, limit) {
  if (limit === void 0) {
    limit = Infinity;
  }

  var test = compileTest(options);
  return test ? querying_1.filter(test, nodes, recurse, limit) : [];
}

legacy.getElements = getElements$1;
/**
 * @param id The unique ID attribute value to look for.
 * @param nodes Nodes to search through.
 * @param recurse Also consider child nodes.
 * @returns The node with the supplied ID.
 */

function getElementById(id, nodes, recurse) {
  if (recurse === void 0) {
    recurse = true;
  }

  if (!Array.isArray(nodes)) nodes = [nodes];
  return querying_1.findOne(getAttribCheck("id", id), nodes, recurse);
}

legacy.getElementById = getElementById;
/**
 * @param tagName Tag name to search for.
 * @param nodes Nodes to search through.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes with the supplied `tagName`.
 */

function getElementsByTagName(tagName, nodes, recurse, limit) {
  if (recurse === void 0) {
    recurse = true;
  }

  if (limit === void 0) {
    limit = Infinity;
  }

  return querying_1.filter(Checks.tag_name(tagName), nodes, recurse, limit);
}

legacy.getElementsByTagName = getElementsByTagName;
/**
 * @param type Element type to look for.
 * @param nodes Nodes to search through.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes with the supplied `type`.
 */

function getElementsByTagType(type, nodes, recurse, limit) {
  if (recurse === void 0) {
    recurse = true;
  }

  if (limit === void 0) {
    limit = Infinity;
  }

  return querying_1.filter(Checks.tag_type(type), nodes, recurse, limit);
}

legacy.getElementsByTagType = getElementsByTagType;

var helpers$1 = {};

Object.defineProperty(helpers$1, "__esModule", {
  value: true
});
helpers$1.uniqueSort = helpers$1.compareDocumentPosition = helpers$1.removeSubsets = void 0;
var domhandler_1$6 = lib$7;
/**
 * Given an array of nodes, remove any member that is contained by another.
 *
 * @param nodes Nodes to filter.
 * @returns Remaining nodes that aren't subtrees of each other.
 */

function removeSubsets(nodes) {
  var idx = nodes.length;
  /*
   * Check if each node (or one of its ancestors) is already contained in the
   * array.
   */

  while (--idx >= 0) {
    var node = nodes[idx];
    /*
     * Remove the node if it is not unique.
     * We are going through the array from the end, so we only
     * have to check nodes that preceed the node under consideration in the array.
     */

    if (idx > 0 && nodes.lastIndexOf(node, idx - 1) >= 0) {
      nodes.splice(idx, 1);
      continue;
    }

    for (var ancestor = node.parent; ancestor; ancestor = ancestor.parent) {
      if (nodes.includes(ancestor)) {
        nodes.splice(idx, 1);
        break;
      }
    }
  }

  return nodes;
}

helpers$1.removeSubsets = removeSubsets;
/**
 * Compare the position of one node against another node in any other document.
 * The return value is a bitmask with the following values:
 *
 * Document order:
 * > There is an ordering, document order, defined on all the nodes in the
 * > document corresponding to the order in which the first character of the
 * > XML representation of each node occurs in the XML representation of the
 * > document after expansion of general entities. Thus, the document element
 * > node will be the first node. Element nodes occur before their children.
 * > Thus, document order orders element nodes in order of the occurrence of
 * > their start-tag in the XML (after expansion of entities). The attribute
 * > nodes of an element occur after the element and before its children. The
 * > relative order of attribute nodes is implementation-dependent./
 *
 * Source:
 * http://www.w3.org/TR/DOM-Level-3-Core/glossary.html#dt-document-order
 *
 * @param nodeA The first node to use in the comparison
 * @param nodeB The second node to use in the comparison
 * @returns A bitmask describing the input nodes' relative position.
 *
 * See http://dom.spec.whatwg.org/#dom-node-comparedocumentposition for
 * a description of these values.
 */

function compareDocumentPosition(nodeA, nodeB) {
  var aParents = [];
  var bParents = [];

  if (nodeA === nodeB) {
    return 0;
  }

  var current = domhandler_1$6.hasChildren(nodeA) ? nodeA : nodeA.parent;

  while (current) {
    aParents.unshift(current);
    current = current.parent;
  }

  current = domhandler_1$6.hasChildren(nodeB) ? nodeB : nodeB.parent;

  while (current) {
    bParents.unshift(current);
    current = current.parent;
  }

  var maxIdx = Math.min(aParents.length, bParents.length);
  var idx = 0;

  while (idx < maxIdx && aParents[idx] === bParents[idx]) {
    idx++;
  }

  if (idx === 0) {
    return 1
    /* DISCONNECTED */
    ;
  }

  var sharedParent = aParents[idx - 1];
  var siblings = sharedParent.children;
  var aSibling = aParents[idx];
  var bSibling = bParents[idx];

  if (siblings.indexOf(aSibling) > siblings.indexOf(bSibling)) {
    if (sharedParent === nodeB) {
      return 4
      /* FOLLOWING */
      | 16
      /* CONTAINED_BY */
      ;
    }

    return 4
    /* FOLLOWING */
    ;
  }

  if (sharedParent === nodeA) {
    return 2
    /* PRECEDING */
    | 8
    /* CONTAINS */
    ;
  }

  return 2
  /* PRECEDING */
  ;
}

helpers$1.compareDocumentPosition = compareDocumentPosition;
/**
 * Sort an array of nodes based on their relative position in the document and
 * remove any duplicate nodes. If the array contains nodes that do not belong
 * to the same document, sort order is unspecified.
 *
 * @param nodes Array of DOM nodes.
 * @returns Collection of unique nodes, sorted in document order.
 */

function uniqueSort$1(nodes) {
  nodes = nodes.filter(function (node, i, arr) {
    return !arr.includes(node, i + 1);
  });
  nodes.sort(function (a, b) {
    var relative = compareDocumentPosition(a, b);

    if (relative & 2
    /* PRECEDING */
    ) {
        return -1;
      } else if (relative & 4
    /* FOLLOWING */
    ) {
        return 1;
      }

    return 0;
  });
  return nodes;
}

helpers$1.uniqueSort = uniqueSort$1;

(function (exports) {

  var __createBinding = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    });
  } : function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
  });

  var __exportStar = commonjsGlobal && commonjsGlobal.__exportStar || function (m, exports) {
    for (var p in m) {
      if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
    }
  };

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.hasChildren = exports.isDocument = exports.isComment = exports.isText = exports.isCDATA = exports.isTag = void 0;

  __exportStar(stringify$2, exports);

  __exportStar(traversal, exports);

  __exportStar(manipulation$1, exports);

  __exportStar(querying, exports);

  __exportStar(legacy, exports);

  __exportStar(helpers$1, exports);

  var domhandler_1 = lib$7;
  Object.defineProperty(exports, "isTag", {
    enumerable: true,
    get: function get() {
      return domhandler_1.isTag;
    }
  });
  Object.defineProperty(exports, "isCDATA", {
    enumerable: true,
    get: function get() {
      return domhandler_1.isCDATA;
    }
  });
  Object.defineProperty(exports, "isText", {
    enumerable: true,
    get: function get() {
      return domhandler_1.isText;
    }
  });
  Object.defineProperty(exports, "isComment", {
    enumerable: true,
    get: function get() {
      return domhandler_1.isComment;
    }
  });
  Object.defineProperty(exports, "isDocument", {
    enumerable: true,
    get: function get() {
      return domhandler_1.isDocument;
    }
  });
  Object.defineProperty(exports, "hasChildren", {
    enumerable: true,
    get: function get() {
      return domhandler_1.hasChildren;
    }
  });
})(lib$8);

var boolbase = {
  trueFunc: function trueFunc() {
    return true;
  },
  falseFunc: function falseFunc() {
    return false;
  }
};

var compile$3 = {};

var sort = {};

var procedure = {};

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.isTraversal = exports.procedure = void 0;
  exports.procedure = {
    universal: 50,
    tag: 30,
    attribute: 1,
    pseudo: 0,
    "pseudo-element": 0,
    descendant: -1,
    child: -1,
    parent: -1,
    sibling: -1,
    adjacent: -1,
    _flexibleDescendant: -1
  };

  function isTraversal(t) {
    return exports.procedure[t.type] < 0;
  }

  exports.isTraversal = isTraversal;
})(procedure);

Object.defineProperty(sort, "__esModule", {
  value: true
});
var procedure_1$1 = procedure;
var attributes$2 = {
  exists: 10,
  equals: 8,
  not: 7,
  start: 6,
  end: 6,
  any: 5,
  hyphen: 4,
  element: 4
};
/**
 * Sort the parts of the passed selector,
 * as there is potential for optimization
 * (some types of selectors are faster than others)
 *
 * @param arr Selector to sort
 */

function sortByProcedure(arr) {
  var procs = arr.map(getProcedure);

  for (var i = 1; i < arr.length; i++) {
    var procNew = procs[i];
    if (procNew < 0) continue;

    for (var j = i - 1; j >= 0 && procNew < procs[j]; j--) {
      var token = arr[j + 1];
      arr[j + 1] = arr[j];
      arr[j] = token;
      procs[j + 1] = procs[j];
      procs[j] = procNew;
    }
  }
}

sort["default"] = sortByProcedure;

function getProcedure(token) {
  var proc = procedure_1$1.procedure[token.type];

  if (token.type === "attribute") {
    proc = attributes$2[token.action];

    if (proc === attributes$2.equals && token.name === "id") {
      // Prefer ID selectors (eg. #ID)
      proc = 9;
    }

    if (token.ignoreCase) {
      /*
       * IgnoreCase adds some overhead, prefer "normal" token
       * this is a binary operation, to ensure it's still an int
       */
      proc >>= 1;
    }
  } else if (token.type === "pseudo") {
    if (!token.data) {
      proc = 3;
    } else if (token.name === "has" || token.name === "contains") {
      proc = 0; // Expensive in any case
    } else if (Array.isArray(token.data)) {
      // "matches" and "not"
      proc = 0;

      for (var i = 0; i < token.data.length; i++) {
        // TODO better handling of complex selectors
        if (token.data[i].length !== 1) continue;
        var cur = getProcedure(token.data[i][0]); // Avoid executing :has or :contains

        if (cur === 0) {
          proc = 0;
          break;
        }

        if (cur > proc) proc = cur;
      }

      if (token.data.length > 1 && proc > 0) proc -= 1;
    } else {
      proc = 1;
    }
  }

  return proc;
}

var general = {};

var attributes$1 = {};

Object.defineProperty(attributes$1, "__esModule", {
  value: true
});
attributes$1.attributeRules = void 0;
var boolbase_1$2 = boolbase;
/**
 * All reserved characters in a regex, used for escaping.
 *
 * Taken from XRegExp, (c) 2007-2020 Steven Levithan under the MIT license
 * https://github.com/slevithan/xregexp/blob/95eeebeb8fac8754d54eafe2b4743661ac1cf028/src/xregexp.js#L794
 */

var reChars = /[-[\]{}()*+?.,\\^$|#\s]/g;

function escapeRegex(value) {
  return value.replace(reChars, "\\$&");
}
/**
 * Attribute selectors
 */


attributes$1.attributeRules = {
  equals: function equals(next, data, _a) {
    var adapter = _a.adapter;
    var name = data.name;
    var value = data.value;

    if (data.ignoreCase) {
      value = value.toLowerCase();
      return function (elem) {
        var attr = adapter.getAttributeValue(elem, name);
        return attr != null && attr.length === value.length && attr.toLowerCase() === value && next(elem);
      };
    }

    return function (elem) {
      return adapter.getAttributeValue(elem, name) === value && next(elem);
    };
  },
  hyphen: function hyphen(next, data, _a) {
    var adapter = _a.adapter;
    var name = data.name;
    var value = data.value;
    var len = value.length;

    if (data.ignoreCase) {
      value = value.toLowerCase();
      return function hyphenIC(elem) {
        var attr = adapter.getAttributeValue(elem, name);
        return attr != null && (attr.length === len || attr.charAt(len) === "-") && attr.substr(0, len).toLowerCase() === value && next(elem);
      };
    }

    return function hyphen(elem) {
      var attr = adapter.getAttributeValue(elem, name);
      return attr != null && (attr.length === len || attr.charAt(len) === "-") && attr.substr(0, len) === value && next(elem);
    };
  },
  element: function element(next, _a, _b) {
    var name = _a.name,
        value = _a.value,
        ignoreCase = _a.ignoreCase;
    var adapter = _b.adapter;

    if (/\s/.test(value)) {
      return boolbase_1$2.falseFunc;
    }

    var regex = new RegExp("(?:^|\\s)" + escapeRegex(value) + "(?:$|\\s)", ignoreCase ? "i" : "");
    return function element(elem) {
      var attr = adapter.getAttributeValue(elem, name);
      return attr != null && attr.length >= value.length && regex.test(attr) && next(elem);
    };
  },
  exists: function exists(next, _a, _b) {
    var name = _a.name;
    var adapter = _b.adapter;
    return function (elem) {
      return adapter.hasAttrib(elem, name) && next(elem);
    };
  },
  start: function start(next, data, _a) {
    var adapter = _a.adapter;
    var name = data.name;
    var value = data.value;
    var len = value.length;

    if (len === 0) {
      return boolbase_1$2.falseFunc;
    }

    if (data.ignoreCase) {
      value = value.toLowerCase();
      return function (elem) {
        var attr = adapter.getAttributeValue(elem, name);
        return attr != null && attr.length >= len && attr.substr(0, len).toLowerCase() === value && next(elem);
      };
    }

    return function (elem) {
      var _a;

      return !!((_a = adapter.getAttributeValue(elem, name)) === null || _a === void 0 ? void 0 : _a.startsWith(value)) && next(elem);
    };
  },
  end: function end(next, data, _a) {
    var adapter = _a.adapter;
    var name = data.name;
    var value = data.value;
    var len = -value.length;

    if (len === 0) {
      return boolbase_1$2.falseFunc;
    }

    if (data.ignoreCase) {
      value = value.toLowerCase();
      return function (elem) {
        var _a;

        return ((_a = adapter.getAttributeValue(elem, name)) === null || _a === void 0 ? void 0 : _a.substr(len).toLowerCase()) === value && next(elem);
      };
    }

    return function (elem) {
      var _a;

      return !!((_a = adapter.getAttributeValue(elem, name)) === null || _a === void 0 ? void 0 : _a.endsWith(value)) && next(elem);
    };
  },
  any: function any(next, data, _a) {
    var adapter = _a.adapter;
    var name = data.name,
        value = data.value;

    if (value === "") {
      return boolbase_1$2.falseFunc;
    }

    if (data.ignoreCase) {
      var regex_1 = new RegExp(escapeRegex(value), "i");
      return function anyIC(elem) {
        var attr = adapter.getAttributeValue(elem, name);
        return attr != null && attr.length >= value.length && regex_1.test(attr) && next(elem);
      };
    }

    return function (elem) {
      var _a;

      return !!((_a = adapter.getAttributeValue(elem, name)) === null || _a === void 0 ? void 0 : _a.includes(value)) && next(elem);
    };
  },
  not: function not(next, data, _a) {
    var adapter = _a.adapter;
    var name = data.name;
    var value = data.value;

    if (value === "") {
      return function (elem) {
        return !!adapter.getAttributeValue(elem, name) && next(elem);
      };
    } else if (data.ignoreCase) {
      value = value.toLowerCase();
      return function (elem) {
        var attr = adapter.getAttributeValue(elem, name);
        return (attr == null || attr.length !== value.length || attr.toLowerCase() !== value) && next(elem);
      };
    }

    return function (elem) {
      return adapter.getAttributeValue(elem, name) !== value && next(elem);
    };
  }
};

var pseudoSelectors = {};

var filters = {};

var lib$3 = {};

var parse$5 = {};

Object.defineProperty(parse$5, "__esModule", {
  value: true
});
parse$5.parse = void 0; // [ ['-'|'+']? INTEGER? {N} [ S* ['-'|'+'] S* INTEGER ]?

var RE_NTH_ELEMENT = /^([+-]?\d*n)?\s*(?:([+-]?)\s*(\d+))?$/;
/**
 * Parses an expression.
 *
 * @throws An `Error` if parsing fails.
 * @returns An array containing the integer step size and the integer offset of the nth rule.
 * @example nthCheck.parse("2n+3"); // returns [2, 3]
 */

function parse$4(formula) {
  formula = formula.trim().toLowerCase();

  if (formula === "even") {
    return [2, 0];
  } else if (formula === "odd") {
    return [2, 1];
  }

  var parsed = formula.match(RE_NTH_ELEMENT);

  if (!parsed) {
    throw new Error("n-th rule couldn't be parsed ('" + formula + "')");
  }

  var a;

  if (parsed[1]) {
    a = parseInt(parsed[1], 10);

    if (isNaN(a)) {
      a = parsed[1].startsWith("-") ? -1 : 1;
    }
  } else a = 0;

  var b = (parsed[2] === "-" ? -1 : 1) * (parsed[3] ? parseInt(parsed[3], 10) : 0);
  return [a, b];
}

parse$5.parse = parse$4;

var compile$2 = {};

Object.defineProperty(compile$2, "__esModule", {
  value: true
});
compile$2.compile = void 0;
var boolbase_1$1 = boolbase;
/**
 * Returns a function that checks if an elements index matches the given rule
 * highly optimized to return the fastest solution.
 *
 * @param parsed A tuple [a, b], as returned by `parse`.
 * @returns A highly optimized function that returns whether an index matches the nth-check.
 * @example
 * const check = nthCheck.compile([2, 3]);
 *
 * check(0); // `false`
 * check(1); // `false`
 * check(2); // `true`
 * check(3); // `false`
 * check(4); // `true`
 * check(5); // `false`
 * check(6); // `true`
 */

function compile$1(parsed) {
  var a = parsed[0]; // Subtract 1 from `b`, to convert from one- to zero-indexed.

  var b = parsed[1] - 1;
  /*
   * When `b <= 0`, `a * n` won't be lead to any matches for `a < 0`.
   * Besides, the specification states that no elements are
   * matched when `a` and `b` are 0.
   *
   * `b < 0` here as we subtracted 1 from `b` above.
   */

  if (b < 0 && a <= 0) return boolbase_1$1.falseFunc; // When `a` is in the range -1..1, it matches any element (so only `b` is checked).

  if (a === -1) return function (index) {
    return index <= b;
  };
  if (a === 0) return function (index) {
    return index === b;
  }; // When `b <= 0` and `a === 1`, they match any element.

  if (a === 1) return b < 0 ? boolbase_1$1.trueFunc : function (index) {
    return index >= b;
  };
  /*
   * Otherwise, modulo can be used to check if there is a match.
   *
   * Modulo doesn't care about the sign, so let's use `a`s absolute value.
   */

  var absA = Math.abs(a); // Get `b mod a`, + a if this is negative.

  var bMod = (b % absA + absA) % absA;
  return a > 1 ? function (index) {
    return index >= b && index % absA === bMod;
  } : function (index) {
    return index <= b && index % absA === bMod;
  };
}

compile$2.compile = compile$1;

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.compile = exports.parse = void 0;
  var parse_1 = parse$5;
  Object.defineProperty(exports, "parse", {
    enumerable: true,
    get: function get() {
      return parse_1.parse;
    }
  });
  var compile_1 = compile$2;
  Object.defineProperty(exports, "compile", {
    enumerable: true,
    get: function get() {
      return compile_1.compile;
    }
  });
  /**
   * Parses and compiles a formula to a highly optimized function.
   * Combination of `parse` and `compile`.
   *
   * If the formula doesn't match any elements,
   * it returns [`boolbase`](https://github.com/fb55/boolbase)'s `falseFunc`.
   * Otherwise, a function accepting an _index_ is returned, which returns
   * whether or not the passed _index_ matches the formula.
   *
   * Note: The nth-rule starts counting at `1`, the returned function at `0`.
   *
   * @param formula The formula to compile.
   * @example
   * const check = nthCheck("2n+3");
   *
   * check(0); // `false`
   * check(1); // `false`
   * check(2); // `true`
   * check(3); // `false`
   * check(4); // `true`
   * check(5); // `false`
   * check(6); // `true`
   */

  function nthCheck(formula) {
    return compile_1.compile(parse_1.parse(formula));
  }

  exports["default"] = nthCheck;
})(lib$3);

(function (exports) {

  var __importDefault = commonjsGlobal && commonjsGlobal.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : {
      "default": mod
    };
  };

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.filters = void 0;

  var nth_check_1 = __importDefault(lib$3);

  var boolbase_1 = boolbase;

  function getChildFunc(next, adapter) {
    return function (elem) {
      var parent = adapter.getParent(elem);
      return parent != null && adapter.isTag(parent) && next(elem);
    };
  }

  exports.filters = {
    contains: function contains(next, text, _a) {
      var adapter = _a.adapter;
      return function contains(elem) {
        return next(elem) && adapter.getText(elem).includes(text);
      };
    },
    icontains: function icontains(next, text, _a) {
      var adapter = _a.adapter;
      var itext = text.toLowerCase();
      return function icontains(elem) {
        return next(elem) && adapter.getText(elem).toLowerCase().includes(itext);
      };
    },
    // Location specific methods
    "nth-child": function nthChild(next, rule, _a) {
      var adapter = _a.adapter,
          equals = _a.equals;
      var func = nth_check_1["default"](rule);
      if (func === boolbase_1.falseFunc) return boolbase_1.falseFunc;
      if (func === boolbase_1.trueFunc) return getChildFunc(next, adapter);
      return function nthChild(elem) {
        var siblings = adapter.getSiblings(elem);
        var pos = 0;

        for (var i = 0; i < siblings.length; i++) {
          if (equals(elem, siblings[i])) break;

          if (adapter.isTag(siblings[i])) {
            pos++;
          }
        }

        return func(pos) && next(elem);
      };
    },
    "nth-last-child": function nthLastChild(next, rule, _a) {
      var adapter = _a.adapter,
          equals = _a.equals;
      var func = nth_check_1["default"](rule);
      if (func === boolbase_1.falseFunc) return boolbase_1.falseFunc;
      if (func === boolbase_1.trueFunc) return getChildFunc(next, adapter);
      return function nthLastChild(elem) {
        var siblings = adapter.getSiblings(elem);
        var pos = 0;

        for (var i = siblings.length - 1; i >= 0; i--) {
          if (equals(elem, siblings[i])) break;

          if (adapter.isTag(siblings[i])) {
            pos++;
          }
        }

        return func(pos) && next(elem);
      };
    },
    "nth-of-type": function nthOfType(next, rule, _a) {
      var adapter = _a.adapter,
          equals = _a.equals;
      var func = nth_check_1["default"](rule);
      if (func === boolbase_1.falseFunc) return boolbase_1.falseFunc;
      if (func === boolbase_1.trueFunc) return getChildFunc(next, adapter);
      return function nthOfType(elem) {
        var siblings = adapter.getSiblings(elem);
        var pos = 0;

        for (var i = 0; i < siblings.length; i++) {
          var currentSibling = siblings[i];
          if (equals(elem, currentSibling)) break;

          if (adapter.isTag(currentSibling) && adapter.getName(currentSibling) === adapter.getName(elem)) {
            pos++;
          }
        }

        return func(pos) && next(elem);
      };
    },
    "nth-last-of-type": function nthLastOfType(next, rule, _a) {
      var adapter = _a.adapter,
          equals = _a.equals;
      var func = nth_check_1["default"](rule);
      if (func === boolbase_1.falseFunc) return boolbase_1.falseFunc;
      if (func === boolbase_1.trueFunc) return getChildFunc(next, adapter);
      return function nthLastOfType(elem) {
        var siblings = adapter.getSiblings(elem);
        var pos = 0;

        for (var i = siblings.length - 1; i >= 0; i--) {
          var currentSibling = siblings[i];
          if (equals(elem, currentSibling)) break;

          if (adapter.isTag(currentSibling) && adapter.getName(currentSibling) === adapter.getName(elem)) {
            pos++;
          }
        }

        return func(pos) && next(elem);
      };
    },
    // TODO determine the actual root element
    root: function root(next, _rule, _a) {
      var adapter = _a.adapter;
      return function (elem) {
        var parent = adapter.getParent(elem);
        return (parent == null || !adapter.isTag(parent)) && next(elem);
      };
    },
    scope: function scope(next, rule, options, context) {
      var equals = options.equals;

      if (!context || context.length === 0) {
        // Equivalent to :root
        return exports.filters.root(next, rule, options);
      }

      if (context.length === 1) {
        // NOTE: can't be unpacked, as :has uses this for side-effects
        return function (elem) {
          return equals(context[0], elem) && next(elem);
        };
      }

      return function (elem) {
        return context.includes(elem) && next(elem);
      };
    },
    hover: dynamicStatePseudo("isHovered"),
    visited: dynamicStatePseudo("isVisited"),
    active: dynamicStatePseudo("isActive")
  };
  /**
   * Dynamic state pseudos. These depend on optional Adapter methods.
   *
   * @param name The name of the adapter method to call.
   * @returns Pseudo for the `filters` object.
   */

  function dynamicStatePseudo(name) {
    return function dynamicPseudo(next, _rule, _a) {
      var adapter = _a.adapter;
      var func = adapter[name];

      if (typeof func !== "function") {
        return boolbase_1.falseFunc;
      }

      return function active(elem) {
        return func(elem) && next(elem);
      };
    };
  }
})(filters);

var pseudos = {};

Object.defineProperty(pseudos, "__esModule", {
  value: true
});
pseudos.verifyPseudoArgs = pseudos.pseudos = void 0; // While filters are precompiled, pseudos get called when they are needed

pseudos.pseudos = {
  empty: function empty(elem, _a) {
    var adapter = _a.adapter;
    return !adapter.getChildren(elem).some(function (elem) {
      // FIXME: `getText` call is potentially expensive.
      return adapter.isTag(elem) || adapter.getText(elem) !== "";
    });
  },
  "first-child": function firstChild(elem, _a) {
    var adapter = _a.adapter,
        equals = _a.equals;
    var firstChild = adapter.getSiblings(elem).find(function (elem) {
      return adapter.isTag(elem);
    });
    return firstChild != null && equals(elem, firstChild);
  },
  "last-child": function lastChild(elem, _a) {
    var adapter = _a.adapter,
        equals = _a.equals;
    var siblings = adapter.getSiblings(elem);

    for (var i = siblings.length - 1; i >= 0; i--) {
      if (equals(elem, siblings[i])) return true;
      if (adapter.isTag(siblings[i])) break;
    }

    return false;
  },
  "first-of-type": function firstOfType(elem, _a) {
    var adapter = _a.adapter,
        equals = _a.equals;
    var siblings = adapter.getSiblings(elem);
    var elemName = adapter.getName(elem);

    for (var i = 0; i < siblings.length; i++) {
      var currentSibling = siblings[i];
      if (equals(elem, currentSibling)) return true;

      if (adapter.isTag(currentSibling) && adapter.getName(currentSibling) === elemName) {
        break;
      }
    }

    return false;
  },
  "last-of-type": function lastOfType(elem, _a) {
    var adapter = _a.adapter,
        equals = _a.equals;
    var siblings = adapter.getSiblings(elem);
    var elemName = adapter.getName(elem);

    for (var i = siblings.length - 1; i >= 0; i--) {
      var currentSibling = siblings[i];
      if (equals(elem, currentSibling)) return true;

      if (adapter.isTag(currentSibling) && adapter.getName(currentSibling) === elemName) {
        break;
      }
    }

    return false;
  },
  "only-of-type": function onlyOfType(elem, _a) {
    var adapter = _a.adapter,
        equals = _a.equals;
    var elemName = adapter.getName(elem);
    return adapter.getSiblings(elem).every(function (sibling) {
      return equals(elem, sibling) || !adapter.isTag(sibling) || adapter.getName(sibling) !== elemName;
    });
  },
  "only-child": function onlyChild(elem, _a) {
    var adapter = _a.adapter,
        equals = _a.equals;
    return adapter.getSiblings(elem).every(function (sibling) {
      return equals(elem, sibling) || !adapter.isTag(sibling);
    });
  }
};

function verifyPseudoArgs(func, name, subselect) {
  if (subselect === null) {
    if (func.length > 2) {
      throw new Error("pseudo-selector :" + name + " requires an argument");
    }
  } else if (func.length === 2) {
    throw new Error("pseudo-selector :" + name + " doesn't have any arguments");
  }
}

pseudos.verifyPseudoArgs = verifyPseudoArgs;

var aliases = {};

Object.defineProperty(aliases, "__esModule", {
  value: true
});
aliases.aliases = void 0;
/**
 * Aliases are pseudos that are expressed as selectors.
 */

aliases.aliases = {
  // Links
  "any-link": ":is(a, area, link)[href]",
  link: ":any-link:not(:visited)",
  // Forms
  // https://html.spec.whatwg.org/multipage/scripting.html#disabled-elements
  disabled: ":is(\n        :is(button, input, select, textarea, optgroup, option)[disabled],\n        optgroup[disabled] > option,\n        fieldset[disabled]:not(fieldset[disabled] legend:first-of-type *)\n    )",
  enabled: ":not(:disabled)",
  checked: ":is(:is(input[type=radio], input[type=checkbox])[checked], option:selected)",
  required: ":is(input, select, textarea)[required]",
  optional: ":is(input, select, textarea):not([required])",
  // JQuery extensions
  // https://html.spec.whatwg.org/multipage/form-elements.html#concept-option-selectedness
  selected: "option:is([selected], select:not([multiple]):not(:has(> option[selected])) > :first-of-type)",
  checkbox: "[type=checkbox]",
  file: "[type=file]",
  password: "[type=password]",
  radio: "[type=radio]",
  reset: "[type=reset]",
  image: "[type=image]",
  submit: "[type=submit]",
  parent: ":not(:empty)",
  header: ":is(h1, h2, h3, h4, h5, h6)",
  button: ":is(button, input[type=button])",
  input: ":is(input, textarea, select, button)",
  text: "input:is(:not([type!='']), [type=text])"
};

var subselects = {};

(function (exports) {

  var __spreadArray = commonjsGlobal && commonjsGlobal.__spreadArray || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) {
      to[j] = from[i];
    }

    return to;
  };

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.subselects = exports.getNextSiblings = exports.ensureIsTag = exports.PLACEHOLDER_ELEMENT = void 0;
  var boolbase_1 = boolbase;
  var procedure_1 = procedure;
  /** Used as a placeholder for :has. Will be replaced with the actual element. */

  exports.PLACEHOLDER_ELEMENT = {};

  function ensureIsTag(next, adapter) {
    if (next === boolbase_1.falseFunc) return boolbase_1.falseFunc;
    return function (elem) {
      return adapter.isTag(elem) && next(elem);
    };
  }

  exports.ensureIsTag = ensureIsTag;

  function getNextSiblings(elem, adapter) {
    var siblings = adapter.getSiblings(elem);
    if (siblings.length <= 1) return [];
    var elemIndex = siblings.indexOf(elem);
    if (elemIndex < 0 || elemIndex === siblings.length - 1) return [];
    return siblings.slice(elemIndex + 1).filter(adapter.isTag);
  }

  exports.getNextSiblings = getNextSiblings;

  var is = function is(next, token, options, context, compileToken) {
    var opts = {
      xmlMode: !!options.xmlMode,
      adapter: options.adapter,
      equals: options.equals
    };
    var func = compileToken(token, opts, context);
    return function (elem) {
      return func(elem) && next(elem);
    };
  };
  /*
   * :not, :has, :is and :matches have to compile selectors
   * doing this in src/pseudos.ts would lead to circular dependencies,
   * so we add them here
   */


  exports.subselects = {
    is: is,

    /**
     * `:matches` is an alias for `:is`.
     */
    matches: is,
    not: function not(next, token, options, context, compileToken) {
      var opts = {
        xmlMode: !!options.xmlMode,
        adapter: options.adapter,
        equals: options.equals
      };
      var func = compileToken(token, opts, context);
      if (func === boolbase_1.falseFunc) return next;
      if (func === boolbase_1.trueFunc) return boolbase_1.falseFunc;
      return function not(elem) {
        return !func(elem) && next(elem);
      };
    },
    has: function has(next, subselect, options, _context, compileToken) {
      var adapter = options.adapter;
      var opts = {
        xmlMode: !!options.xmlMode,
        adapter: adapter,
        equals: options.equals
      }; // @ts-expect-error Uses an array as a pointer to the current element (side effects)

      var context = subselect.some(function (s) {
        return s.some(procedure_1.isTraversal);
      }) ? [exports.PLACEHOLDER_ELEMENT] : undefined;
      var compiled = compileToken(subselect, opts, context);
      if (compiled === boolbase_1.falseFunc) return boolbase_1.falseFunc;

      if (compiled === boolbase_1.trueFunc) {
        return function (elem) {
          return adapter.getChildren(elem).some(adapter.isTag) && next(elem);
        };
      }

      var hasElement = ensureIsTag(compiled, adapter);
      var _a = compiled.shouldTestNextSiblings,
          shouldTestNextSiblings = _a === void 0 ? false : _a;
      /*
       * `shouldTestNextSiblings` will only be true if the query starts with
       * a traversal (sibling or adjacent). That means we will always have a context.
       */

      if (context) {
        return function (elem) {
          context[0] = elem;
          var childs = adapter.getChildren(elem);
          var nextElements = shouldTestNextSiblings ? __spreadArray(__spreadArray([], childs), getNextSiblings(elem, adapter)) : childs;
          return next(elem) && adapter.existsOne(hasElement, nextElements);
        };
      }

      return function (elem) {
        return next(elem) && adapter.existsOne(hasElement, adapter.getChildren(elem));
      };
    }
  };
})(subselects);

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.compilePseudoSelector = exports.aliases = exports.pseudos = exports.filters = void 0;
  /*
   * Pseudo selectors
   *
   * Pseudo selectors are available in three forms:
   *
   * 1. Filters are called when the selector is compiled and return a function
   *  that has to return either false, or the results of `next()`.
   * 2. Pseudos are called on execution. They have to return a boolean.
   * 3. Subselects work like filters, but have an embedded selector that will be run separately.
   *
   * Filters are great if you want to do some pre-processing, or change the call order
   * of `next()` and your code.
   * Pseudos should be used to implement simple checks.
   */

  var boolbase_1 = boolbase;
  var css_what_1 = lib$a;
  var filters_1 = filters;
  Object.defineProperty(exports, "filters", {
    enumerable: true,
    get: function get() {
      return filters_1.filters;
    }
  });
  var pseudos_1 = pseudos;
  Object.defineProperty(exports, "pseudos", {
    enumerable: true,
    get: function get() {
      return pseudos_1.pseudos;
    }
  });
  var aliases_1 = aliases;
  Object.defineProperty(exports, "aliases", {
    enumerable: true,
    get: function get() {
      return aliases_1.aliases;
    }
  });
  var subselects_1 = subselects;

  function compilePseudoSelector(next, selector, options, context, compileToken) {
    var name = selector.name,
        data = selector.data;

    if (Array.isArray(data)) {
      return subselects_1.subselects[name](next, data, options, context, compileToken);
    }

    if (name in aliases_1.aliases) {
      if (data != null) {
        throw new Error("Pseudo " + name + " doesn't have any arguments");
      } // The alias has to be parsed here, to make sure options are respected.


      var alias = css_what_1.parse(aliases_1.aliases[name], options);
      return subselects_1.subselects.is(next, alias, options, context, compileToken);
    }

    if (name in filters_1.filters) {
      return filters_1.filters[name](next, data, options, context);
    }

    if (name in pseudos_1.pseudos) {
      var pseudo_1 = pseudos_1.pseudos[name];
      pseudos_1.verifyPseudoArgs(pseudo_1, name, data);
      return pseudo_1 === boolbase_1.falseFunc ? boolbase_1.falseFunc : next === boolbase_1.trueFunc ? function (elem) {
        return pseudo_1(elem, options, data);
      } : function (elem) {
        return pseudo_1(elem, options, data) && next(elem);
      };
    }

    throw new Error("unmatched pseudo-class :" + name);
  }

  exports.compilePseudoSelector = compilePseudoSelector;
})(pseudoSelectors);

Object.defineProperty(general, "__esModule", {
  value: true
});
general.compileGeneralSelector = void 0;
var attributes_1 = attributes$1;
var pseudo_selectors_1 = pseudoSelectors;
/*
 * All available rules
 */

function compileGeneralSelector(next, selector, options, context, compileToken) {
  var adapter = options.adapter,
      equals = options.equals;

  switch (selector.type) {
    case "pseudo-element":
      throw new Error("Pseudo-elements are not supported by css-select");

    case "attribute":
      return attributes_1.attributeRules[selector.action](next, selector, options);

    case "pseudo":
      return pseudo_selectors_1.compilePseudoSelector(next, selector, options, context, compileToken);
    // Tags

    case "tag":
      return function tag(elem) {
        return adapter.getName(elem) === selector.name && next(elem);
      };
    // Traversal

    case "descendant":
      if (options.cacheResults === false || typeof WeakSet === "undefined") {
        return function descendant(elem) {
          var current = elem;

          while (current = adapter.getParent(current)) {
            if (adapter.isTag(current) && next(current)) {
              return true;
            }
          }

          return false;
        };
      } // @ts-expect-error `ElementNode` is not extending object
      // eslint-disable-next-line no-case-declarations


      var isFalseCache_1 = new WeakSet();
      return function cachedDescendant(elem) {
        var current = elem;

        while (current = adapter.getParent(current)) {
          if (!isFalseCache_1.has(current)) {
            if (adapter.isTag(current) && next(current)) {
              return true;
            }

            isFalseCache_1.add(current);
          }
        }

        return false;
      };

    case "_flexibleDescendant":
      // Include element itself, only used while querying an array
      return function flexibleDescendant(elem) {
        var current = elem;

        do {
          if (adapter.isTag(current) && next(current)) return true;
        } while (current = adapter.getParent(current));

        return false;
      };

    case "parent":
      return function parent(elem) {
        return adapter.getChildren(elem).some(function (elem) {
          return adapter.isTag(elem) && next(elem);
        });
      };

    case "child":
      return function child(elem) {
        var parent = adapter.getParent(elem);
        return parent != null && adapter.isTag(parent) && next(parent);
      };

    case "sibling":
      return function sibling(elem) {
        var siblings = adapter.getSiblings(elem);

        for (var i = 0; i < siblings.length; i++) {
          var currentSibling = siblings[i];
          if (equals(elem, currentSibling)) break;

          if (adapter.isTag(currentSibling) && next(currentSibling)) {
            return true;
          }
        }

        return false;
      };

    case "adjacent":
      return function adjacent(elem) {
        var siblings = adapter.getSiblings(elem);
        var lastElement;

        for (var i = 0; i < siblings.length; i++) {
          var currentSibling = siblings[i];
          if (equals(elem, currentSibling)) break;

          if (adapter.isTag(currentSibling)) {
            lastElement = currentSibling;
          }
        }

        return !!lastElement && next(lastElement);
      };

    case "universal":
      return next;
  }
}

general.compileGeneralSelector = compileGeneralSelector;

var __importDefault$3 = commonjsGlobal && commonjsGlobal.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(compile$3, "__esModule", {
  value: true
});
compile$3.compileToken = compile$3.compileUnsafe = compile$3.compile = void 0;
var css_what_1 = lib$a;
var boolbase_1 = boolbase;

var sort_1 = __importDefault$3(sort);

var procedure_1 = procedure;
var general_1 = general;
var subselects_1 = subselects;
/**
 * Compiles a selector to an executable function.
 *
 * @param selector Selector to compile.
 * @param options Compilation options.
 * @param context Optional context for the selector.
 */

function compile(selector, options, context) {
  var next = compileUnsafe(selector, options, context);
  return subselects_1.ensureIsTag(next, options.adapter);
}

compile$3.compile = compile;

function compileUnsafe(selector, options, context) {
  var token = typeof selector === "string" ? css_what_1.parse(selector, options) : selector;
  return compileToken(token, options, context);
}

compile$3.compileUnsafe = compileUnsafe;

function includesScopePseudo(t) {
  return t.type === "pseudo" && (t.name === "scope" || Array.isArray(t.data) && t.data.some(function (data) {
    return data.some(includesScopePseudo);
  }));
}

var DESCENDANT_TOKEN = {
  type: "descendant"
};
var FLEXIBLE_DESCENDANT_TOKEN = {
  type: "_flexibleDescendant"
};
var SCOPE_TOKEN = {
  type: "pseudo",
  name: "scope",
  data: null
};
/*
 * CSS 4 Spec (Draft): 3.3.1. Absolutizing a Scope-relative Selector
 * http://www.w3.org/TR/selectors4/#absolutizing
 */

function absolutize(token, _a, context) {
  var adapter = _a.adapter; // TODO Use better check if the context is a document

  var hasContext = !!(context === null || context === void 0 ? void 0 : context.every(function (e) {
    var parent = adapter.isTag(e) && adapter.getParent(e);
    return e === subselects_1.PLACEHOLDER_ELEMENT || parent && adapter.isTag(parent);
  }));

  for (var _i = 0, token_1 = token; _i < token_1.length; _i++) {
    var t = token_1[_i];

    if (t.length > 0 && procedure_1.isTraversal(t[0]) && t[0].type !== "descendant") ; else if (hasContext && !t.some(includesScopePseudo)) {
      t.unshift(DESCENDANT_TOKEN);
    } else {
      continue;
    }

    t.unshift(SCOPE_TOKEN);
  }
}

function compileToken(token, options, context) {
  var _a;

  token = token.filter(function (t) {
    return t.length > 0;
  });
  token.forEach(sort_1["default"]);
  context = (_a = options.context) !== null && _a !== void 0 ? _a : context;
  var isArrayContext = Array.isArray(context);
  var finalContext = context && (Array.isArray(context) ? context : [context]);
  absolutize(token, options, finalContext);
  var shouldTestNextSiblings = false;
  var query = token.map(function (rules) {
    if (rules.length >= 2) {
      var first = rules[0],
          second = rules[1];

      if (first.type !== "pseudo" || first.name !== "scope") ; else if (isArrayContext && second.type === "descendant") {
        rules[1] = FLEXIBLE_DESCENDANT_TOKEN;
      } else if (second.type === "adjacent" || second.type === "sibling") {
        shouldTestNextSiblings = true;
      }
    }

    return compileRules(rules, options, finalContext);
  }).reduce(reduceRules, boolbase_1.falseFunc);
  query.shouldTestNextSiblings = shouldTestNextSiblings;
  return query;
}

compile$3.compileToken = compileToken;

function compileRules(rules, options, context) {
  var _a;

  return rules.reduce(function (previous, rule) {
    return previous === boolbase_1.falseFunc ? boolbase_1.falseFunc : general_1.compileGeneralSelector(previous, rule, options, context, compileToken);
  }, (_a = options.rootFunc) !== null && _a !== void 0 ? _a : boolbase_1.trueFunc);
}

function reduceRules(a, b) {
  if (b === boolbase_1.falseFunc || a === boolbase_1.trueFunc) {
    return a;
  }

  if (a === boolbase_1.falseFunc || b === boolbase_1.trueFunc) {
    return b;
  }

  return function combine(elem) {
    return a(elem) || b(elem);
  };
}

(function (exports) {

  var __createBinding = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    });
  } : function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
  });

  var __setModuleDefault = commonjsGlobal && commonjsGlobal.__setModuleDefault || (Object.create ? function (o, v) {
    Object.defineProperty(o, "default", {
      enumerable: true,
      value: v
    });
  } : function (o, v) {
    o["default"] = v;
  });

  var __importStar = commonjsGlobal && commonjsGlobal.__importStar || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) {
      if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }

    __setModuleDefault(result, mod);

    return result;
  };

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.aliases = exports.pseudos = exports.filters = exports.is = exports.selectOne = exports.selectAll = exports.prepareContext = exports._compileToken = exports._compileUnsafe = exports.compile = void 0;

  var DomUtils = __importStar(lib$8);

  var boolbase_1 = boolbase;
  var compile_1 = compile$3;
  var subselects_1 = subselects;

  var defaultEquals = function defaultEquals(a, b) {
    return a === b;
  };

  var defaultOptions = {
    adapter: DomUtils,
    equals: defaultEquals
  };

  function convertOptionFormats(options) {
    var _a, _b, _c, _d;
    /*
     * We force one format of options to the other one.
     */
    // @ts-expect-error Default options may have incompatible `Node` / `ElementNode`.


    var opts = options !== null && options !== void 0 ? options : defaultOptions; // @ts-expect-error Same as above.

    (_a = opts.adapter) !== null && _a !== void 0 ? _a : opts.adapter = DomUtils; // @ts-expect-error `equals` does not exist on `Options`

    (_b = opts.equals) !== null && _b !== void 0 ? _b : opts.equals = (_d = (_c = opts.adapter) === null || _c === void 0 ? void 0 : _c.equals) !== null && _d !== void 0 ? _d : defaultEquals;
    return opts;
  }

  function wrapCompile(func) {
    return function addAdapter(selector, options, context) {
      var opts = convertOptionFormats(options);
      return func(selector, opts, context);
    };
  }
  /**
   * Compiles the query, returns a function.
   */


  exports.compile = wrapCompile(compile_1.compile);
  exports._compileUnsafe = wrapCompile(compile_1.compileUnsafe);
  exports._compileToken = wrapCompile(compile_1.compileToken);

  function getSelectorFunc(searchFunc) {
    return function select(query, elements, options) {
      var opts = convertOptionFormats(options);

      if (typeof query !== "function") {
        query = compile_1.compileUnsafe(query, opts, elements);
      }

      var filteredElements = prepareContext(elements, opts.adapter, query.shouldTestNextSiblings);
      return searchFunc(query, filteredElements, opts);
    };
  }

  function prepareContext(elems, adapter, shouldTestNextSiblings) {
    if (shouldTestNextSiblings === void 0) {
      shouldTestNextSiblings = false;
    }
    /*
     * Add siblings if the query requires them.
     * See https://github.com/fb55/css-select/pull/43#issuecomment-225414692
     */


    if (shouldTestNextSiblings) {
      elems = appendNextSiblings(elems, adapter);
    }

    return Array.isArray(elems) ? adapter.removeSubsets(elems) : adapter.getChildren(elems);
  }

  exports.prepareContext = prepareContext;

  function appendNextSiblings(elem, adapter) {
    // Order matters because jQuery seems to check the children before the siblings
    var elems = Array.isArray(elem) ? elem.slice(0) : [elem];

    for (var i = 0; i < elems.length; i++) {
      var nextSiblings = subselects_1.getNextSiblings(elems[i], adapter);
      elems.push.apply(elems, nextSiblings);
    }

    return elems;
  }
  /**
   * @template Node The generic Node type for the DOM adapter being used.
   * @template ElementNode The Node type for elements for the DOM adapter being used.
   * @param elems Elements to query. If it is an element, its children will be queried..
   * @param query can be either a CSS selector string or a compiled query function.
   * @param [options] options for querying the document.
   * @see compile for supported selector queries.
   * @returns All matching elements.
   *
   */


  exports.selectAll = getSelectorFunc(function (query, elems, options) {
    return query === boolbase_1.falseFunc || !elems || elems.length === 0 ? [] : options.adapter.findAll(query, elems);
  });
  /**
   * @template Node The generic Node type for the DOM adapter being used.
   * @template ElementNode The Node type for elements for the DOM adapter being used.
   * @param elems Elements to query. If it is an element, its children will be queried..
   * @param query can be either a CSS selector string or a compiled query function.
   * @param [options] options for querying the document.
   * @see compile for supported selector queries.
   * @returns the first match, or null if there was no match.
   */

  exports.selectOne = getSelectorFunc(function (query, elems, options) {
    return query === boolbase_1.falseFunc || !elems || elems.length === 0 ? null : options.adapter.findOne(query, elems);
  });
  /**
   * Tests whether or not an element is matched by query.
   *
   * @template Node The generic Node type for the DOM adapter being used.
   * @template ElementNode The Node type for elements for the DOM adapter being used.
   * @param elem The element to test if it matches the query.
   * @param query can be either a CSS selector string or a compiled query function.
   * @param [options] options for querying the document.
   * @see compile for supported selector queries.
   * @returns
   */

  function is(elem, query, options) {
    var opts = convertOptionFormats(options);
    return (typeof query === "function" ? query : compile_1.compile(query, opts))(elem);
  }

  exports.is = is;
  /**
   * Alias for selectAll(query, elems, options).
   * @see [compile] for supported selector queries.
   */

  exports["default"] = exports.selectAll; // Export filters, pseudos and aliases to allow users to supply their own.

  var pseudo_selectors_1 = pseudoSelectors;
  Object.defineProperty(exports, "filters", {
    enumerable: true,
    get: function get() {
      return pseudo_selectors_1.filters;
    }
  });
  Object.defineProperty(exports, "pseudos", {
    enumerable: true,
    get: function get() {
      return pseudo_selectors_1.pseudos;
    }
  });
  Object.defineProperty(exports, "aliases", {
    enumerable: true,
    get: function get() {
      return pseudo_selectors_1.aliases;
    }
  });
})(lib$9);

var helpers = {};

var positionals = {};

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getLimit = exports.isFilter = exports.filterNames = void 0;
  exports.filterNames = new Set(["first", "last", "eq", "gt", "nth", "lt", "even", "odd"]);

  function isFilter(s) {
    if (s.type !== "pseudo") return false;
    if (exports.filterNames.has(s.name)) return true;

    if (s.name === "not" && Array.isArray(s.data)) {
      // Only consider `:not` with embedded filters
      return s.data.some(function (s) {
        return s.some(isFilter);
      });
    }

    return false;
  }

  exports.isFilter = isFilter;

  function getLimit(filter, data) {
    var num = data != null ? parseInt(data, 10) : NaN;

    switch (filter) {
      case "first":
        return 1;

      case "nth":
      case "eq":
        return isFinite(num) ? num >= 0 ? num + 1 : Infinity : 0;

      case "lt":
        return isFinite(num) ? num >= 0 ? num : Infinity : 0;

      case "gt":
        return isFinite(num) ? Infinity : 0;

      default:
        return Infinity;
    }
  }

  exports.getLimit = getLimit;
})(positionals);

Object.defineProperty(helpers, "__esModule", {
  value: true
});
helpers.groupSelectors = helpers.getDocumentRoot = void 0;
var positionals_1 = positionals;

function getDocumentRoot(node) {
  while (node.parent) {
    node = node.parent;
  }

  return node;
}

helpers.getDocumentRoot = getDocumentRoot;

function groupSelectors(selectors) {
  var filteredSelectors = [];
  var plainSelectors = [];

  for (var _i = 0, selectors_1 = selectors; _i < selectors_1.length; _i++) {
    var selector = selectors_1[_i];

    if (selector.some(positionals_1.isFilter)) {
      filteredSelectors.push(selector);
    } else {
      plainSelectors.push(selector);
    }
  }

  return [plainSelectors, filteredSelectors];
}

helpers.groupSelectors = groupSelectors;

(function (exports) {

  var __assign = commonjsGlobal && commonjsGlobal.__assign || function () {
    __assign = Object.assign || function (t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];

        for (var p in s) {
          if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
      }

      return t;
    };

    return __assign.apply(this, arguments);
  };

  var __createBinding = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    });
  } : function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
  });

  var __setModuleDefault = commonjsGlobal && commonjsGlobal.__setModuleDefault || (Object.create ? function (o, v) {
    Object.defineProperty(o, "default", {
      enumerable: true,
      value: v
    });
  } : function (o, v) {
    o["default"] = v;
  });

  var __importStar = commonjsGlobal && commonjsGlobal.__importStar || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) {
      if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }

    __setModuleDefault(result, mod);

    return result;
  };

  var __spreadArray = commonjsGlobal && commonjsGlobal.__spreadArray || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) {
      to[j] = from[i];
    }

    return to;
  };

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.select = exports.filter = exports.some = exports.is = exports.aliases = exports.pseudos = exports.filters = void 0;
  var css_what_1 = lib$a;
  var css_select_1 = lib$9;

  var DomUtils = __importStar(lib$8);

  var helpers_1 = helpers;
  var positionals_1 = positionals; // Re-export pseudo extension points

  var css_select_2 = lib$9;
  Object.defineProperty(exports, "filters", {
    enumerable: true,
    get: function get() {
      return css_select_2.filters;
    }
  });
  Object.defineProperty(exports, "pseudos", {
    enumerable: true,
    get: function get() {
      return css_select_2.pseudos;
    }
  });
  Object.defineProperty(exports, "aliases", {
    enumerable: true,
    get: function get() {
      return css_select_2.aliases;
    }
  });
  /** Used to indicate a scope should be filtered. Might be ignored when filtering. */

  var SCOPE_PSEUDO = {
    type: "pseudo",
    name: "scope",
    data: null
  };
  /** Used for actually filtering for scope. */

  var CUSTOM_SCOPE_PSEUDO = __assign({}, SCOPE_PSEUDO);

  var UNIVERSAL_SELECTOR = {
    type: "universal",
    namespace: null
  };

  function is(element, selector, options) {
    if (options === void 0) {
      options = {};
    }

    return some([element], selector, options);
  }

  exports.is = is;

  function some(elements, selector, options) {
    if (options === void 0) {
      options = {};
    }

    if (typeof selector === "function") return elements.some(selector);

    var _a = helpers_1.groupSelectors(css_what_1.parse(selector, options)),
        plain = _a[0],
        filtered = _a[1];

    return plain.length > 0 && elements.some(css_select_1._compileToken(plain, options)) || filtered.some(function (sel) {
      return filterBySelector(sel, elements, options).length > 0;
    });
  }

  exports.some = some;

  function filterByPosition(filter, elems, data, options) {
    var num = typeof data === "string" ? parseInt(data, 10) : NaN;

    switch (filter) {
      case "first":
      case "lt":
        // Already done in `getLimit`
        return elems;

      case "last":
        return elems.length > 0 ? [elems[elems.length - 1]] : elems;

      case "nth":
      case "eq":
        return isFinite(num) && Math.abs(num) < elems.length ? [num < 0 ? elems[elems.length + num] : elems[num]] : [];

      case "gt":
        return isFinite(num) ? elems.slice(num + 1) : [];

      case "even":
        return elems.filter(function (_, i) {
          return i % 2 === 0;
        });

      case "odd":
        return elems.filter(function (_, i) {
          return i % 2 === 1;
        });

      case "not":
        {
          var filtered_1 = new Set(filterParsed(data, elems, options));
          return elems.filter(function (e) {
            return !filtered_1.has(e);
          });
        }
    }
  }

  function filter(selector, elements, options) {
    if (options === void 0) {
      options = {};
    }

    return filterParsed(css_what_1.parse(selector, options), elements, options);
  }

  exports.filter = filter;
  /**
   * Filter a set of elements by a selector.
   *
   * Will return elements in the original order.
   *
   * @param selector Selector to filter by.
   * @param elements Elements to filter.
   * @param options Options for selector.
   */

  function filterParsed(selector, elements, options) {
    if (elements.length === 0) return [];

    var _a = helpers_1.groupSelectors(selector),
        plainSelectors = _a[0],
        filteredSelectors = _a[1];

    var found;

    if (plainSelectors.length) {
      var filtered = filterElements(elements, plainSelectors, options); // If there are no filters, just return

      if (filteredSelectors.length === 0) {
        return filtered;
      } // Otherwise, we have to do some filtering


      if (filtered.length) {
        found = new Set(filtered);
      }
    }

    for (var i = 0; i < filteredSelectors.length && (found === null || found === void 0 ? void 0 : found.size) !== elements.length; i++) {
      var filteredSelector = filteredSelectors[i];
      var missing = found ? elements.filter(function (e) {
        return DomUtils.isTag(e) && !found.has(e);
      }) : elements;
      if (missing.length === 0) break;
      var filtered = filterBySelector(filteredSelector, elements, options);

      if (filtered.length) {
        if (!found) {
          /*
           * If we haven't found anything before the last selector,
           * just return what we found now.
           */
          if (i === filteredSelectors.length - 1) {
            return filtered;
          }

          found = new Set(filtered);
        } else {
          filtered.forEach(function (el) {
            return found.add(el);
          });
        }
      }
    }

    return typeof found !== "undefined" ? found.size === elements.length ? elements : // Filter elements to preserve order
    elements.filter(function (el) {
      return found.has(el);
    }) : [];
  }

  function filterBySelector(selector, elements, options) {
    var _a;

    if (selector.some(css_what_1.isTraversal)) {
      /*
       * Get root node, run selector with the scope
       * set to all of our nodes.
       */
      var root = (_a = options.root) !== null && _a !== void 0 ? _a : helpers_1.getDocumentRoot(elements[0]);

      var sel = __spreadArray(__spreadArray([], selector), [CUSTOM_SCOPE_PSEUDO]);

      return findFilterElements(root, sel, options, true, elements);
    } // Performance optimization: If we don't have to traverse, just filter set.


    return findFilterElements(elements, selector, options, false);
  }

  function select(selector, root, options) {
    if (options === void 0) {
      options = {};
    }

    if (typeof selector === "function") {
      return find(root, selector);
    }

    var _a = helpers_1.groupSelectors(css_what_1.parse(selector, options)),
        plain = _a[0],
        filtered = _a[1];

    var results = filtered.map(function (sel) {
      return findFilterElements(root, sel, options, true);
    }); // Plain selectors can be queried in a single go

    if (plain.length) {
      results.push(findElements(root, plain, options, Infinity));
    } // If there was only a single selector, just return the result


    if (results.length === 1) {
      return results[0];
    } // Sort results, filtering for duplicates


    return DomUtils.uniqueSort(results.reduce(function (a, b) {
      return __spreadArray(__spreadArray([], a), b);
    }));
  }

  exports.select = select; // Traversals that are treated differently in css-select.

  var specialTraversal = new Set(["descendant", "adjacent"]);

  function includesScopePseudo(t) {
    return t !== SCOPE_PSEUDO && t.type === "pseudo" && (t.name === "scope" || Array.isArray(t.data) && t.data.some(function (data) {
      return data.some(includesScopePseudo);
    }));
  }

  function addContextIfScope(selector, options, scopeContext) {
    return scopeContext && selector.some(includesScopePseudo) ? __assign(__assign({}, options), {
      context: scopeContext
    }) : options;
  }
  /**
   *
   * @param root Element(s) to search from.
   * @param selector Selector to look for.
   * @param options Options for querying.
   * @param queryForSelector Query multiple levels deep for the initial selector, even if it doesn't contain a traversal.
   * @param scopeContext Optional context for a :scope.
   */


  function findFilterElements(root, selector, options, queryForSelector, scopeContext) {
    var filterIndex = selector.findIndex(positionals_1.isFilter);
    var sub = selector.slice(0, filterIndex);
    var filter = selector[filterIndex];
    /*
     * Set the number of elements to retrieve.
     * Eg. for :first, we only have to get a single element.
     */

    var limit = positionals_1.getLimit(filter.name, filter.data);
    if (limit === 0) return [];
    var subOpts = addContextIfScope(sub, options, scopeContext);
    /*
     * Skip `findElements` call if our selector starts with a positional
     * pseudo.
     */

    var elemsNoLimit = sub.length === 0 && !Array.isArray(root) ? DomUtils.getChildren(root).filter(DomUtils.isTag) : sub.length === 0 || sub.length === 1 && sub[0] === SCOPE_PSEUDO ? (Array.isArray(root) ? root : [root]).filter(DomUtils.isTag) : queryForSelector || sub.some(css_what_1.isTraversal) ? findElements(root, [sub], subOpts, limit) : filterElements(root, [sub], subOpts);
    var elems = elemsNoLimit.slice(0, limit);
    var result = filterByPosition(filter.name, elems, filter.data, options);

    if (result.length === 0 || selector.length === filterIndex + 1) {
      return result;
    }

    var remainingSelector = selector.slice(filterIndex + 1);
    var remainingHasTraversal = remainingSelector.some(css_what_1.isTraversal);
    var remainingOpts = addContextIfScope(remainingSelector, options, scopeContext);

    if (remainingHasTraversal) {
      /*
       * Some types of traversals have special logic when they start a selector
       * in css-select. If this is the case, add a universal selector in front of
       * the selector to avoid this behavior.
       */
      if (specialTraversal.has(remainingSelector[0].type)) {
        remainingSelector.unshift(UNIVERSAL_SELECTOR);
      }
      /*
       * Add a scope token in front of the remaining selector,
       * to make sure traversals don't match elements that aren't a
       * part of the considered tree.
       */


      remainingSelector.unshift(SCOPE_PSEUDO);
    }
    /*
     * If we have another filter, recursively call `findFilterElements`,
     * with the `recursive` flag disabled. We only have to look for more
     * elements when we see a traversal.
     *
     * Otherwise,
     */


    return remainingSelector.some(positionals_1.isFilter) ? findFilterElements(result, remainingSelector, options, false, scopeContext) : remainingHasTraversal ? // Query existing elements to resolve traversal.
    findElements(result, [remainingSelector], remainingOpts, Infinity) : // If we don't have any more traversals, simply filter elements.
    filterElements(result, [remainingSelector], remainingOpts);
  }

  function findElements(root, sel, options, limit) {
    if (limit === 0) return [];

    var query = css_select_1._compileToken(sel, options, root);

    return find(root, query, limit);
  }

  function find(root, query, limit) {
    if (limit === void 0) {
      limit = Infinity;
    }

    var elems = css_select_1.prepareContext(root, DomUtils, query.shouldTestNextSiblings);
    return DomUtils.find(function (node) {
      return DomUtils.isTag(node) && query(node);
    }, elems, true, limit);
  }

  function filterElements(elements, sel, options) {
    var els = (Array.isArray(elements) ? elements : [elements]).filter(DomUtils.isTag);
    if (els.length === 0) return els;

    var query = css_select_1._compileToken(sel, options);

    return els.filter(query);
  }
})(lib$b);

var lib$2 = {};

var Parser$3 = {};

var Tokenizer$6 = {};

var __importDefault$2 = commonjsGlobal && commonjsGlobal.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(Tokenizer$6, "__esModule", {
  value: true
});

var decode_codepoint_1 = __importDefault$2(decode_codepoint);

var entities_json_1 = __importDefault$2(require$$1);

var legacy_json_1 = __importDefault$2(require$$2);

var xml_json_1 = __importDefault$2(require$$3);

function whitespace(c) {
  return c === " " || c === "\n" || c === "\t" || c === "\f" || c === "\r";
}

function isASCIIAlpha(c) {
  return c >= "a" && c <= "z" || c >= "A" && c <= "Z";
}

function ifElseState(upper, SUCCESS, FAILURE) {
  var lower = upper.toLowerCase();

  if (upper === lower) {
    return function (t, c) {
      if (c === lower) {
        t._state = SUCCESS;
      } else {
        t._state = FAILURE;
        t._index--;
      }
    };
  }

  return function (t, c) {
    if (c === lower || c === upper) {
      t._state = SUCCESS;
    } else {
      t._state = FAILURE;
      t._index--;
    }
  };
}

function consumeSpecialNameChar(upper, NEXT_STATE) {
  var lower = upper.toLowerCase();
  return function (t, c) {
    if (c === lower || c === upper) {
      t._state = NEXT_STATE;
    } else {
      t._state = 3
      /* InTagName */
      ;
      t._index--; // Consume the token again
    }
  };
}

var stateBeforeCdata1 = ifElseState("C", 24
/* BeforeCdata2 */
, 16
/* InDeclaration */
);
var stateBeforeCdata2 = ifElseState("D", 25
/* BeforeCdata3 */
, 16
/* InDeclaration */
);
var stateBeforeCdata3 = ifElseState("A", 26
/* BeforeCdata4 */
, 16
/* InDeclaration */
);
var stateBeforeCdata4 = ifElseState("T", 27
/* BeforeCdata5 */
, 16
/* InDeclaration */
);
var stateBeforeCdata5 = ifElseState("A", 28
/* BeforeCdata6 */
, 16
/* InDeclaration */
);
var stateBeforeScript1 = consumeSpecialNameChar("R", 35
/* BeforeScript2 */
);
var stateBeforeScript2 = consumeSpecialNameChar("I", 36
/* BeforeScript3 */
);
var stateBeforeScript3 = consumeSpecialNameChar("P", 37
/* BeforeScript4 */
);
var stateBeforeScript4 = consumeSpecialNameChar("T", 38
/* BeforeScript5 */
);
var stateAfterScript1 = ifElseState("R", 40
/* AfterScript2 */
, 1
/* Text */
);
var stateAfterScript2 = ifElseState("I", 41
/* AfterScript3 */
, 1
/* Text */
);
var stateAfterScript3 = ifElseState("P", 42
/* AfterScript4 */
, 1
/* Text */
);
var stateAfterScript4 = ifElseState("T", 43
/* AfterScript5 */
, 1
/* Text */
);
var stateBeforeStyle1 = consumeSpecialNameChar("Y", 45
/* BeforeStyle2 */
);
var stateBeforeStyle2 = consumeSpecialNameChar("L", 46
/* BeforeStyle3 */
);
var stateBeforeStyle3 = consumeSpecialNameChar("E", 47
/* BeforeStyle4 */
);
var stateAfterStyle1 = ifElseState("Y", 49
/* AfterStyle2 */
, 1
/* Text */
);
var stateAfterStyle2 = ifElseState("L", 50
/* AfterStyle3 */
, 1
/* Text */
);
var stateAfterStyle3 = ifElseState("E", 51
/* AfterStyle4 */
, 1
/* Text */
);
var stateBeforeSpecialT = consumeSpecialNameChar("I", 54
/* BeforeTitle1 */
);
var stateBeforeTitle1 = consumeSpecialNameChar("T", 55
/* BeforeTitle2 */
);
var stateBeforeTitle2 = consumeSpecialNameChar("L", 56
/* BeforeTitle3 */
);
var stateBeforeTitle3 = consumeSpecialNameChar("E", 57
/* BeforeTitle4 */
);
var stateAfterSpecialTEnd = ifElseState("I", 58
/* AfterTitle1 */
, 1
/* Text */
);
var stateAfterTitle1 = ifElseState("T", 59
/* AfterTitle2 */
, 1
/* Text */
);
var stateAfterTitle2 = ifElseState("L", 60
/* AfterTitle3 */
, 1
/* Text */
);
var stateAfterTitle3 = ifElseState("E", 61
/* AfterTitle4 */
, 1
/* Text */
);
var stateBeforeEntity = ifElseState("#", 63
/* BeforeNumericEntity */
, 64
/* InNamedEntity */
);
var stateBeforeNumericEntity = ifElseState("X", 66
/* InHexEntity */
, 65
/* InNumericEntity */
);

var Tokenizer$5 =
/** @class */
function () {
  function Tokenizer(options, cbs) {
    var _a;
    /** The current state the tokenizer is in. */


    this._state = 1
    /* Text */
    ;
    /** The read buffer. */

    this.buffer = "";
    /** The beginning of the section that is currently being read. */

    this.sectionStart = 0;
    /** The index within the buffer that we are currently looking at. */

    this._index = 0;
    /**
     * Data that has already been processed will be removed from the buffer occasionally.
     * `_bufferOffset` keeps track of how many characters have been removed, to make sure position information is accurate.
     */

    this.bufferOffset = 0;
    /** Some behavior, eg. when decoding entities, is done while we are in another state. This keeps track of the other state type. */

    this.baseState = 1
    /* Text */
    ;
    /** For special parsing behavior inside of script and style tags. */

    this.special = 1
    /* None */
    ;
    /** Indicates whether the tokenizer has been paused. */

    this.running = true;
    /** Indicates whether the tokenizer has finished running / `.end` has been called. */

    this.ended = false;
    this.cbs = cbs;
    this.xmlMode = !!(options === null || options === void 0 ? void 0 : options.xmlMode);
    this.decodeEntities = (_a = options === null || options === void 0 ? void 0 : options.decodeEntities) !== null && _a !== void 0 ? _a : true;
  }

  Tokenizer.prototype.reset = function () {
    this._state = 1
    /* Text */
    ;
    this.buffer = "";
    this.sectionStart = 0;
    this._index = 0;
    this.bufferOffset = 0;
    this.baseState = 1
    /* Text */
    ;
    this.special = 1
    /* None */
    ;
    this.running = true;
    this.ended = false;
  };

  Tokenizer.prototype.write = function (chunk) {
    if (this.ended) this.cbs.onerror(Error(".write() after done!"));
    this.buffer += chunk;
    this.parse();
  };

  Tokenizer.prototype.end = function (chunk) {
    if (this.ended) this.cbs.onerror(Error(".end() after done!"));
    if (chunk) this.write(chunk);
    this.ended = true;
    if (this.running) this.finish();
  };

  Tokenizer.prototype.pause = function () {
    this.running = false;
  };

  Tokenizer.prototype.resume = function () {
    this.running = true;

    if (this._index < this.buffer.length) {
      this.parse();
    }

    if (this.ended) {
      this.finish();
    }
  };
  /**
   * The current index within all of the written data.
   */


  Tokenizer.prototype.getAbsoluteIndex = function () {
    return this.bufferOffset + this._index;
  };

  Tokenizer.prototype.stateText = function (c) {
    if (c === "<") {
      if (this._index > this.sectionStart) {
        this.cbs.ontext(this.getSection());
      }

      this._state = 2
      /* BeforeTagName */
      ;
      this.sectionStart = this._index;
    } else if (this.decodeEntities && c === "&" && (this.special === 1
    /* None */
    || this.special === 4
    /* Title */
    )) {
      if (this._index > this.sectionStart) {
        this.cbs.ontext(this.getSection());
      }

      this.baseState = 1
      /* Text */
      ;
      this._state = 62
      /* BeforeEntity */
      ;
      this.sectionStart = this._index;
    }
  };
  /**
   * HTML only allows ASCII alpha characters (a-z and A-Z) at the beginning of a tag name.
   *
   * XML allows a lot more characters here (@see https://www.w3.org/TR/REC-xml/#NT-NameStartChar).
   * We allow anything that wouldn't end the tag.
   */


  Tokenizer.prototype.isTagStartChar = function (c) {
    return isASCIIAlpha(c) || this.xmlMode && !whitespace(c) && c !== "/" && c !== ">";
  };

  Tokenizer.prototype.stateBeforeTagName = function (c) {
    if (c === "/") {
      this._state = 5
      /* BeforeClosingTagName */
      ;
    } else if (c === "<") {
      this.cbs.ontext(this.getSection());
      this.sectionStart = this._index;
    } else if (c === ">" || this.special !== 1
    /* None */
    || whitespace(c)) {
      this._state = 1
      /* Text */
      ;
    } else if (c === "!") {
      this._state = 15
      /* BeforeDeclaration */
      ;
      this.sectionStart = this._index + 1;
    } else if (c === "?") {
      this._state = 17
      /* InProcessingInstruction */
      ;
      this.sectionStart = this._index + 1;
    } else if (!this.isTagStartChar(c)) {
      this._state = 1
      /* Text */
      ;
    } else {
      this._state = !this.xmlMode && (c === "s" || c === "S") ? 32
      /* BeforeSpecialS */
      : !this.xmlMode && (c === "t" || c === "T") ? 52
      /* BeforeSpecialT */
      : 3
      /* InTagName */
      ;
      this.sectionStart = this._index;
    }
  };

  Tokenizer.prototype.stateInTagName = function (c) {
    if (c === "/" || c === ">" || whitespace(c)) {
      this.emitToken("onopentagname");
      this._state = 8
      /* BeforeAttributeName */
      ;
      this._index--;
    }
  };

  Tokenizer.prototype.stateBeforeClosingTagName = function (c) {
    if (whitespace(c)) ; else if (c === ">") {
      this._state = 1
      /* Text */
      ;
    } else if (this.special !== 1
    /* None */
    ) {
        if (this.special !== 4
        /* Title */
        && (c === "s" || c === "S")) {
          this._state = 33
          /* BeforeSpecialSEnd */
          ;
        } else if (this.special === 4
        /* Title */
        && (c === "t" || c === "T")) {
          this._state = 53
          /* BeforeSpecialTEnd */
          ;
        } else {
          this._state = 1
          /* Text */
          ;
          this._index--;
        }
      } else if (!this.isTagStartChar(c)) {
      this._state = 20
      /* InSpecialComment */
      ;
      this.sectionStart = this._index;
    } else {
      this._state = 6
      /* InClosingTagName */
      ;
      this.sectionStart = this._index;
    }
  };

  Tokenizer.prototype.stateInClosingTagName = function (c) {
    if (c === ">" || whitespace(c)) {
      this.emitToken("onclosetag");
      this._state = 7
      /* AfterClosingTagName */
      ;
      this._index--;
    }
  };

  Tokenizer.prototype.stateAfterClosingTagName = function (c) {
    // Skip everything until ">"
    if (c === ">") {
      this._state = 1
      /* Text */
      ;
      this.sectionStart = this._index + 1;
    }
  };

  Tokenizer.prototype.stateBeforeAttributeName = function (c) {
    if (c === ">") {
      this.cbs.onopentagend();
      this._state = 1
      /* Text */
      ;
      this.sectionStart = this._index + 1;
    } else if (c === "/") {
      this._state = 4
      /* InSelfClosingTag */
      ;
    } else if (!whitespace(c)) {
      this._state = 9
      /* InAttributeName */
      ;
      this.sectionStart = this._index;
    }
  };

  Tokenizer.prototype.stateInSelfClosingTag = function (c) {
    if (c === ">") {
      this.cbs.onselfclosingtag();
      this._state = 1
      /* Text */
      ;
      this.sectionStart = this._index + 1;
      this.special = 1
      /* None */
      ; // Reset special state, in case of self-closing special tags
    } else if (!whitespace(c)) {
      this._state = 8
      /* BeforeAttributeName */
      ;
      this._index--;
    }
  };

  Tokenizer.prototype.stateInAttributeName = function (c) {
    if (c === "=" || c === "/" || c === ">" || whitespace(c)) {
      this.cbs.onattribname(this.getSection());
      this.sectionStart = -1;
      this._state = 10
      /* AfterAttributeName */
      ;
      this._index--;
    }
  };

  Tokenizer.prototype.stateAfterAttributeName = function (c) {
    if (c === "=") {
      this._state = 11
      /* BeforeAttributeValue */
      ;
    } else if (c === "/" || c === ">") {
      this.cbs.onattribend(undefined);
      this._state = 8
      /* BeforeAttributeName */
      ;
      this._index--;
    } else if (!whitespace(c)) {
      this.cbs.onattribend(undefined);
      this._state = 9
      /* InAttributeName */
      ;
      this.sectionStart = this._index;
    }
  };

  Tokenizer.prototype.stateBeforeAttributeValue = function (c) {
    if (c === '"') {
      this._state = 12
      /* InAttributeValueDq */
      ;
      this.sectionStart = this._index + 1;
    } else if (c === "'") {
      this._state = 13
      /* InAttributeValueSq */
      ;
      this.sectionStart = this._index + 1;
    } else if (!whitespace(c)) {
      this._state = 14
      /* InAttributeValueNq */
      ;
      this.sectionStart = this._index;
      this._index--; // Reconsume token
    }
  };

  Tokenizer.prototype.handleInAttributeValue = function (c, quote) {
    if (c === quote) {
      this.emitToken("onattribdata");
      this.cbs.onattribend(quote);
      this._state = 8
      /* BeforeAttributeName */
      ;
    } else if (this.decodeEntities && c === "&") {
      this.emitToken("onattribdata");
      this.baseState = this._state;
      this._state = 62
      /* BeforeEntity */
      ;
      this.sectionStart = this._index;
    }
  };

  Tokenizer.prototype.stateInAttributeValueDoubleQuotes = function (c) {
    this.handleInAttributeValue(c, '"');
  };

  Tokenizer.prototype.stateInAttributeValueSingleQuotes = function (c) {
    this.handleInAttributeValue(c, "'");
  };

  Tokenizer.prototype.stateInAttributeValueNoQuotes = function (c) {
    if (whitespace(c) || c === ">") {
      this.emitToken("onattribdata");
      this.cbs.onattribend(null);
      this._state = 8
      /* BeforeAttributeName */
      ;
      this._index--;
    } else if (this.decodeEntities && c === "&") {
      this.emitToken("onattribdata");
      this.baseState = this._state;
      this._state = 62
      /* BeforeEntity */
      ;
      this.sectionStart = this._index;
    }
  };

  Tokenizer.prototype.stateBeforeDeclaration = function (c) {
    this._state = c === "[" ? 23
    /* BeforeCdata1 */
    : c === "-" ? 18
    /* BeforeComment */
    : 16
    /* InDeclaration */
    ;
  };

  Tokenizer.prototype.stateInDeclaration = function (c) {
    if (c === ">") {
      this.cbs.ondeclaration(this.getSection());
      this._state = 1
      /* Text */
      ;
      this.sectionStart = this._index + 1;
    }
  };

  Tokenizer.prototype.stateInProcessingInstruction = function (c) {
    if (c === ">") {
      this.cbs.onprocessinginstruction(this.getSection());
      this._state = 1
      /* Text */
      ;
      this.sectionStart = this._index + 1;
    }
  };

  Tokenizer.prototype.stateBeforeComment = function (c) {
    if (c === "-") {
      this._state = 19
      /* InComment */
      ;
      this.sectionStart = this._index + 1;
    } else {
      this._state = 16
      /* InDeclaration */
      ;
    }
  };

  Tokenizer.prototype.stateInComment = function (c) {
    if (c === "-") this._state = 21
    /* AfterComment1 */
    ;
  };

  Tokenizer.prototype.stateInSpecialComment = function (c) {
    if (c === ">") {
      this.cbs.oncomment(this.buffer.substring(this.sectionStart, this._index));
      this._state = 1
      /* Text */
      ;
      this.sectionStart = this._index + 1;
    }
  };

  Tokenizer.prototype.stateAfterComment1 = function (c) {
    if (c === "-") {
      this._state = 22
      /* AfterComment2 */
      ;
    } else {
      this._state = 19
      /* InComment */
      ;
    }
  };

  Tokenizer.prototype.stateAfterComment2 = function (c) {
    if (c === ">") {
      // Remove 2 trailing chars
      this.cbs.oncomment(this.buffer.substring(this.sectionStart, this._index - 2));
      this._state = 1
      /* Text */
      ;
      this.sectionStart = this._index + 1;
    } else if (c !== "-") {
      this._state = 19
      /* InComment */
      ;
    } // Else: stay in AFTER_COMMENT_2 (`--->`)

  };

  Tokenizer.prototype.stateBeforeCdata6 = function (c) {
    if (c === "[") {
      this._state = 29
      /* InCdata */
      ;
      this.sectionStart = this._index + 1;
    } else {
      this._state = 16
      /* InDeclaration */
      ;
      this._index--;
    }
  };

  Tokenizer.prototype.stateInCdata = function (c) {
    if (c === "]") this._state = 30
    /* AfterCdata1 */
    ;
  };

  Tokenizer.prototype.stateAfterCdata1 = function (c) {
    if (c === "]") this._state = 31
    /* AfterCdata2 */
    ;else this._state = 29
    /* InCdata */
    ;
  };

  Tokenizer.prototype.stateAfterCdata2 = function (c) {
    if (c === ">") {
      // Remove 2 trailing chars
      this.cbs.oncdata(this.buffer.substring(this.sectionStart, this._index - 2));
      this._state = 1
      /* Text */
      ;
      this.sectionStart = this._index + 1;
    } else if (c !== "]") {
      this._state = 29
      /* InCdata */
      ;
    } // Else: stay in AFTER_CDATA_2 (`]]]>`)

  };

  Tokenizer.prototype.stateBeforeSpecialS = function (c) {
    if (c === "c" || c === "C") {
      this._state = 34
      /* BeforeScript1 */
      ;
    } else if (c === "t" || c === "T") {
      this._state = 44
      /* BeforeStyle1 */
      ;
    } else {
      this._state = 3
      /* InTagName */
      ;
      this._index--; // Consume the token again
    }
  };

  Tokenizer.prototype.stateBeforeSpecialSEnd = function (c) {
    if (this.special === 2
    /* Script */
    && (c === "c" || c === "C")) {
      this._state = 39
      /* AfterScript1 */
      ;
    } else if (this.special === 3
    /* Style */
    && (c === "t" || c === "T")) {
      this._state = 48
      /* AfterStyle1 */
      ;
    } else this._state = 1
    /* Text */
    ;
  };

  Tokenizer.prototype.stateBeforeSpecialLast = function (c, special) {
    if (c === "/" || c === ">" || whitespace(c)) {
      this.special = special;
    }

    this._state = 3
    /* InTagName */
    ;
    this._index--; // Consume the token again
  };

  Tokenizer.prototype.stateAfterSpecialLast = function (c, sectionStartOffset) {
    if (c === ">" || whitespace(c)) {
      this.special = 1
      /* None */
      ;
      this._state = 6
      /* InClosingTagName */
      ;
      this.sectionStart = this._index - sectionStartOffset;
      this._index--; // Reconsume the token
    } else this._state = 1
    /* Text */
    ;
  }; // For entities terminated with a semicolon


  Tokenizer.prototype.parseFixedEntity = function (map) {
    if (map === void 0) {
      map = this.xmlMode ? xml_json_1["default"] : entities_json_1["default"];
    } // Offset = 1


    if (this.sectionStart + 1 < this._index) {
      var entity = this.buffer.substring(this.sectionStart + 1, this._index);

      if (Object.prototype.hasOwnProperty.call(map, entity)) {
        this.emitPartial(map[entity]);
        this.sectionStart = this._index + 1;
      }
    }
  }; // Parses legacy entities (without trailing semicolon)


  Tokenizer.prototype.parseLegacyEntity = function () {
    var start = this.sectionStart + 1; // The max length of legacy entities is 6

    var limit = Math.min(this._index - start, 6);

    while (limit >= 2) {
      // The min length of legacy entities is 2
      var entity = this.buffer.substr(start, limit);

      if (Object.prototype.hasOwnProperty.call(legacy_json_1["default"], entity)) {
        this.emitPartial(legacy_json_1["default"][entity]);
        this.sectionStart += limit + 1;
        return;
      }

      limit--;
    }
  };

  Tokenizer.prototype.stateInNamedEntity = function (c) {
    if (c === ";") {
      this.parseFixedEntity(); // Retry as legacy entity if entity wasn't parsed

      if (this.baseState === 1
      /* Text */
      && this.sectionStart + 1 < this._index && !this.xmlMode) {
        this.parseLegacyEntity();
      }

      this._state = this.baseState;
    } else if ((c < "0" || c > "9") && !isASCIIAlpha(c)) {
      if (this.xmlMode || this.sectionStart + 1 === this._index) ; else if (this.baseState !== 1
      /* Text */
      ) {
          if (c !== "=") {
            // Parse as legacy entity, without allowing additional characters.
            this.parseFixedEntity(legacy_json_1["default"]);
          }
        } else {
        this.parseLegacyEntity();
      }

      this._state = this.baseState;
      this._index--;
    }
  };

  Tokenizer.prototype.decodeNumericEntity = function (offset, base, strict) {
    var sectionStart = this.sectionStart + offset;

    if (sectionStart !== this._index) {
      // Parse entity
      var entity = this.buffer.substring(sectionStart, this._index);
      var parsed = parseInt(entity, base);
      this.emitPartial(decode_codepoint_1["default"](parsed));
      this.sectionStart = strict ? this._index + 1 : this._index;
    }

    this._state = this.baseState;
  };

  Tokenizer.prototype.stateInNumericEntity = function (c) {
    if (c === ";") {
      this.decodeNumericEntity(2, 10, true);
    } else if (c < "0" || c > "9") {
      if (!this.xmlMode) {
        this.decodeNumericEntity(2, 10, false);
      } else {
        this._state = this.baseState;
      }

      this._index--;
    }
  };

  Tokenizer.prototype.stateInHexEntity = function (c) {
    if (c === ";") {
      this.decodeNumericEntity(3, 16, true);
    } else if ((c < "a" || c > "f") && (c < "A" || c > "F") && (c < "0" || c > "9")) {
      if (!this.xmlMode) {
        this.decodeNumericEntity(3, 16, false);
      } else {
        this._state = this.baseState;
      }

      this._index--;
    }
  };

  Tokenizer.prototype.cleanup = function () {
    if (this.sectionStart < 0) {
      this.buffer = "";
      this.bufferOffset += this._index;
      this._index = 0;
    } else if (this.running) {
      if (this._state === 1
      /* Text */
      ) {
          if (this.sectionStart !== this._index) {
            this.cbs.ontext(this.buffer.substr(this.sectionStart));
          }

          this.buffer = "";
          this.bufferOffset += this._index;
          this._index = 0;
        } else if (this.sectionStart === this._index) {
        // The section just started
        this.buffer = "";
        this.bufferOffset += this._index;
        this._index = 0;
      } else {
        // Remove everything unnecessary
        this.buffer = this.buffer.substr(this.sectionStart);
        this._index -= this.sectionStart;
        this.bufferOffset += this.sectionStart;
      }

      this.sectionStart = 0;
    }
  };
  /**
   * Iterates through the buffer, calling the function corresponding to the current state.
   *
   * States that are more likely to be hit are higher up, as a performance improvement.
   */


  Tokenizer.prototype.parse = function () {
    while (this._index < this.buffer.length && this.running) {
      var c = this.buffer.charAt(this._index);

      if (this._state === 1
      /* Text */
      ) {
          this.stateText(c);
        } else if (this._state === 12
      /* InAttributeValueDq */
      ) {
          this.stateInAttributeValueDoubleQuotes(c);
        } else if (this._state === 9
      /* InAttributeName */
      ) {
          this.stateInAttributeName(c);
        } else if (this._state === 19
      /* InComment */
      ) {
          this.stateInComment(c);
        } else if (this._state === 20
      /* InSpecialComment */
      ) {
          this.stateInSpecialComment(c);
        } else if (this._state === 8
      /* BeforeAttributeName */
      ) {
          this.stateBeforeAttributeName(c);
        } else if (this._state === 3
      /* InTagName */
      ) {
          this.stateInTagName(c);
        } else if (this._state === 6
      /* InClosingTagName */
      ) {
          this.stateInClosingTagName(c);
        } else if (this._state === 2
      /* BeforeTagName */
      ) {
          this.stateBeforeTagName(c);
        } else if (this._state === 10
      /* AfterAttributeName */
      ) {
          this.stateAfterAttributeName(c);
        } else if (this._state === 13
      /* InAttributeValueSq */
      ) {
          this.stateInAttributeValueSingleQuotes(c);
        } else if (this._state === 11
      /* BeforeAttributeValue */
      ) {
          this.stateBeforeAttributeValue(c);
        } else if (this._state === 5
      /* BeforeClosingTagName */
      ) {
          this.stateBeforeClosingTagName(c);
        } else if (this._state === 7
      /* AfterClosingTagName */
      ) {
          this.stateAfterClosingTagName(c);
        } else if (this._state === 32
      /* BeforeSpecialS */
      ) {
          this.stateBeforeSpecialS(c);
        } else if (this._state === 21
      /* AfterComment1 */
      ) {
          this.stateAfterComment1(c);
        } else if (this._state === 14
      /* InAttributeValueNq */
      ) {
          this.stateInAttributeValueNoQuotes(c);
        } else if (this._state === 4
      /* InSelfClosingTag */
      ) {
          this.stateInSelfClosingTag(c);
        } else if (this._state === 16
      /* InDeclaration */
      ) {
          this.stateInDeclaration(c);
        } else if (this._state === 15
      /* BeforeDeclaration */
      ) {
          this.stateBeforeDeclaration(c);
        } else if (this._state === 22
      /* AfterComment2 */
      ) {
          this.stateAfterComment2(c);
        } else if (this._state === 18
      /* BeforeComment */
      ) {
          this.stateBeforeComment(c);
        } else if (this._state === 33
      /* BeforeSpecialSEnd */
      ) {
          this.stateBeforeSpecialSEnd(c);
        } else if (this._state === 53
      /* BeforeSpecialTEnd */
      ) {
          stateAfterSpecialTEnd(this, c);
        } else if (this._state === 39
      /* AfterScript1 */
      ) {
          stateAfterScript1(this, c);
        } else if (this._state === 40
      /* AfterScript2 */
      ) {
          stateAfterScript2(this, c);
        } else if (this._state === 41
      /* AfterScript3 */
      ) {
          stateAfterScript3(this, c);
        } else if (this._state === 34
      /* BeforeScript1 */
      ) {
          stateBeforeScript1(this, c);
        } else if (this._state === 35
      /* BeforeScript2 */
      ) {
          stateBeforeScript2(this, c);
        } else if (this._state === 36
      /* BeforeScript3 */
      ) {
          stateBeforeScript3(this, c);
        } else if (this._state === 37
      /* BeforeScript4 */
      ) {
          stateBeforeScript4(this, c);
        } else if (this._state === 38
      /* BeforeScript5 */
      ) {
          this.stateBeforeSpecialLast(c, 2
          /* Script */
          );
        } else if (this._state === 42
      /* AfterScript4 */
      ) {
          stateAfterScript4(this, c);
        } else if (this._state === 43
      /* AfterScript5 */
      ) {
          this.stateAfterSpecialLast(c, 6);
        } else if (this._state === 44
      /* BeforeStyle1 */
      ) {
          stateBeforeStyle1(this, c);
        } else if (this._state === 29
      /* InCdata */
      ) {
          this.stateInCdata(c);
        } else if (this._state === 45
      /* BeforeStyle2 */
      ) {
          stateBeforeStyle2(this, c);
        } else if (this._state === 46
      /* BeforeStyle3 */
      ) {
          stateBeforeStyle3(this, c);
        } else if (this._state === 47
      /* BeforeStyle4 */
      ) {
          this.stateBeforeSpecialLast(c, 3
          /* Style */
          );
        } else if (this._state === 48
      /* AfterStyle1 */
      ) {
          stateAfterStyle1(this, c);
        } else if (this._state === 49
      /* AfterStyle2 */
      ) {
          stateAfterStyle2(this, c);
        } else if (this._state === 50
      /* AfterStyle3 */
      ) {
          stateAfterStyle3(this, c);
        } else if (this._state === 51
      /* AfterStyle4 */
      ) {
          this.stateAfterSpecialLast(c, 5);
        } else if (this._state === 52
      /* BeforeSpecialT */
      ) {
          stateBeforeSpecialT(this, c);
        } else if (this._state === 54
      /* BeforeTitle1 */
      ) {
          stateBeforeTitle1(this, c);
        } else if (this._state === 55
      /* BeforeTitle2 */
      ) {
          stateBeforeTitle2(this, c);
        } else if (this._state === 56
      /* BeforeTitle3 */
      ) {
          stateBeforeTitle3(this, c);
        } else if (this._state === 57
      /* BeforeTitle4 */
      ) {
          this.stateBeforeSpecialLast(c, 4
          /* Title */
          );
        } else if (this._state === 58
      /* AfterTitle1 */
      ) {
          stateAfterTitle1(this, c);
        } else if (this._state === 59
      /* AfterTitle2 */
      ) {
          stateAfterTitle2(this, c);
        } else if (this._state === 60
      /* AfterTitle3 */
      ) {
          stateAfterTitle3(this, c);
        } else if (this._state === 61
      /* AfterTitle4 */
      ) {
          this.stateAfterSpecialLast(c, 5);
        } else if (this._state === 17
      /* InProcessingInstruction */
      ) {
          this.stateInProcessingInstruction(c);
        } else if (this._state === 64
      /* InNamedEntity */
      ) {
          this.stateInNamedEntity(c);
        } else if (this._state === 23
      /* BeforeCdata1 */
      ) {
          stateBeforeCdata1(this, c);
        } else if (this._state === 62
      /* BeforeEntity */
      ) {
          stateBeforeEntity(this, c);
        } else if (this._state === 24
      /* BeforeCdata2 */
      ) {
          stateBeforeCdata2(this, c);
        } else if (this._state === 25
      /* BeforeCdata3 */
      ) {
          stateBeforeCdata3(this, c);
        } else if (this._state === 30
      /* AfterCdata1 */
      ) {
          this.stateAfterCdata1(c);
        } else if (this._state === 31
      /* AfterCdata2 */
      ) {
          this.stateAfterCdata2(c);
        } else if (this._state === 26
      /* BeforeCdata4 */
      ) {
          stateBeforeCdata4(this, c);
        } else if (this._state === 27
      /* BeforeCdata5 */
      ) {
          stateBeforeCdata5(this, c);
        } else if (this._state === 28
      /* BeforeCdata6 */
      ) {
          this.stateBeforeCdata6(c);
        } else if (this._state === 66
      /* InHexEntity */
      ) {
          this.stateInHexEntity(c);
        } else if (this._state === 65
      /* InNumericEntity */
      ) {
          this.stateInNumericEntity(c); // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        } else if (this._state === 63
      /* BeforeNumericEntity */
      ) {
          stateBeforeNumericEntity(this, c);
        } else {
        this.cbs.onerror(Error("unknown _state"), this._state);
      }

      this._index++;
    }

    this.cleanup();
  };

  Tokenizer.prototype.finish = function () {
    // If there is remaining data, emit it in a reasonable way
    if (this.sectionStart < this._index) {
      this.handleTrailingData();
    }

    this.cbs.onend();
  };

  Tokenizer.prototype.handleTrailingData = function () {
    var data = this.buffer.substr(this.sectionStart);

    if (this._state === 29
    /* InCdata */
    || this._state === 30
    /* AfterCdata1 */
    || this._state === 31
    /* AfterCdata2 */
    ) {
        this.cbs.oncdata(data);
      } else if (this._state === 19
    /* InComment */
    || this._state === 21
    /* AfterComment1 */
    || this._state === 22
    /* AfterComment2 */
    ) {
        this.cbs.oncomment(data);
      } else if (this._state === 64
    /* InNamedEntity */
    && !this.xmlMode) {
      this.parseLegacyEntity();

      if (this.sectionStart < this._index) {
        this._state = this.baseState;
        this.handleTrailingData();
      }
    } else if (this._state === 65
    /* InNumericEntity */
    && !this.xmlMode) {
      this.decodeNumericEntity(2, 10, false);

      if (this.sectionStart < this._index) {
        this._state = this.baseState;
        this.handleTrailingData();
      }
    } else if (this._state === 66
    /* InHexEntity */
    && !this.xmlMode) {
      this.decodeNumericEntity(3, 16, false);

      if (this.sectionStart < this._index) {
        this._state = this.baseState;
        this.handleTrailingData();
      }
    } else if (this._state !== 3
    /* InTagName */
    && this._state !== 8
    /* BeforeAttributeName */
    && this._state !== 11
    /* BeforeAttributeValue */
    && this._state !== 10
    /* AfterAttributeName */
    && this._state !== 9
    /* InAttributeName */
    && this._state !== 13
    /* InAttributeValueSq */
    && this._state !== 12
    /* InAttributeValueDq */
    && this._state !== 14
    /* InAttributeValueNq */
    && this._state !== 6
    /* InClosingTagName */
    ) {
        this.cbs.ontext(data);
      }
    /*
     * Else, ignore remaining data
     * TODO add a way to remove current tag
     */

  };

  Tokenizer.prototype.getSection = function () {
    return this.buffer.substring(this.sectionStart, this._index);
  };

  Tokenizer.prototype.emitToken = function (name) {
    this.cbs[name](this.getSection());
    this.sectionStart = -1;
  };

  Tokenizer.prototype.emitPartial = function (value) {
    if (this.baseState !== 1
    /* Text */
    ) {
        this.cbs.onattribdata(value); // TODO implement the new event
      } else {
      this.cbs.ontext(value);
    }
  };

  return Tokenizer;
}();

Tokenizer$6["default"] = Tokenizer$5;

var __importDefault$1 = commonjsGlobal && commonjsGlobal.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(Parser$3, "__esModule", {
  value: true
});
Parser$3.Parser = void 0;

var Tokenizer_1 = __importDefault$1(Tokenizer$6);

var formTags = new Set(["input", "option", "optgroup", "select", "button", "datalist", "textarea"]);
var pTag = new Set(["p"]);
var openImpliesClose = {
  tr: new Set(["tr", "th", "td"]),
  th: new Set(["th"]),
  td: new Set(["thead", "th", "td"]),
  body: new Set(["head", "link", "script"]),
  li: new Set(["li"]),
  p: pTag,
  h1: pTag,
  h2: pTag,
  h3: pTag,
  h4: pTag,
  h5: pTag,
  h6: pTag,
  select: formTags,
  input: formTags,
  output: formTags,
  button: formTags,
  datalist: formTags,
  textarea: formTags,
  option: new Set(["option"]),
  optgroup: new Set(["optgroup", "option"]),
  dd: new Set(["dt", "dd"]),
  dt: new Set(["dt", "dd"]),
  address: pTag,
  article: pTag,
  aside: pTag,
  blockquote: pTag,
  details: pTag,
  div: pTag,
  dl: pTag,
  fieldset: pTag,
  figcaption: pTag,
  figure: pTag,
  footer: pTag,
  form: pTag,
  header: pTag,
  hr: pTag,
  main: pTag,
  nav: pTag,
  ol: pTag,
  pre: pTag,
  section: pTag,
  table: pTag,
  ul: pTag,
  rt: new Set(["rt", "rp"]),
  rp: new Set(["rt", "rp"]),
  tbody: new Set(["thead", "tbody"]),
  tfoot: new Set(["thead", "tbody"])
};
var voidElements$1 = new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]);
var foreignContextElements = new Set(["math", "svg"]);
var htmlIntegrationElements = new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignObject", "desc", "title"]);
var reNameEnd = /\s|\//;

var Parser$2 =
/** @class */
function () {
  function Parser(cbs, options) {
    if (options === void 0) {
      options = {};
    }

    var _a, _b, _c, _d, _e;
    /** The start index of the last event. */


    this.startIndex = 0;
    /** The end index of the last event. */

    this.endIndex = null;
    this.tagname = "";
    this.attribname = "";
    this.attribvalue = "";
    this.attribs = null;
    this.stack = [];
    this.foreignContext = [];
    this.options = options;
    this.cbs = cbs !== null && cbs !== void 0 ? cbs : {};
    this.lowerCaseTagNames = (_a = options.lowerCaseTags) !== null && _a !== void 0 ? _a : !options.xmlMode;
    this.lowerCaseAttributeNames = (_b = options.lowerCaseAttributeNames) !== null && _b !== void 0 ? _b : !options.xmlMode;
    this.tokenizer = new ((_c = options.Tokenizer) !== null && _c !== void 0 ? _c : Tokenizer_1["default"])(this.options, this);
    (_e = (_d = this.cbs).onparserinit) === null || _e === void 0 ? void 0 : _e.call(_d, this);
  }

  Parser.prototype.updatePosition = function (initialOffset) {
    if (this.endIndex === null) {
      if (this.tokenizer.sectionStart <= initialOffset) {
        this.startIndex = 0;
      } else {
        this.startIndex = this.tokenizer.sectionStart - initialOffset;
      }
    } else {
      this.startIndex = this.endIndex + 1;
    }

    this.endIndex = this.tokenizer.getAbsoluteIndex();
  }; // Tokenizer event handlers


  Parser.prototype.ontext = function (data) {
    var _a, _b;

    this.updatePosition(1);
    this.endIndex--;
    (_b = (_a = this.cbs).ontext) === null || _b === void 0 ? void 0 : _b.call(_a, data);
  };

  Parser.prototype.onopentagname = function (name) {
    var _a, _b;

    if (this.lowerCaseTagNames) {
      name = name.toLowerCase();
    }

    this.tagname = name;

    if (!this.options.xmlMode && Object.prototype.hasOwnProperty.call(openImpliesClose, name)) {
      var el = void 0;

      while (this.stack.length > 0 && openImpliesClose[name].has(el = this.stack[this.stack.length - 1])) {
        this.onclosetag(el);
      }
    }

    if (this.options.xmlMode || !voidElements$1.has(name)) {
      this.stack.push(name);

      if (foreignContextElements.has(name)) {
        this.foreignContext.push(true);
      } else if (htmlIntegrationElements.has(name)) {
        this.foreignContext.push(false);
      }
    }

    (_b = (_a = this.cbs).onopentagname) === null || _b === void 0 ? void 0 : _b.call(_a, name);
    if (this.cbs.onopentag) this.attribs = {};
  };

  Parser.prototype.onopentagend = function () {
    var _a, _b;

    this.updatePosition(1);

    if (this.attribs) {
      (_b = (_a = this.cbs).onopentag) === null || _b === void 0 ? void 0 : _b.call(_a, this.tagname, this.attribs);
      this.attribs = null;
    }

    if (!this.options.xmlMode && this.cbs.onclosetag && voidElements$1.has(this.tagname)) {
      this.cbs.onclosetag(this.tagname);
    }

    this.tagname = "";
  };

  Parser.prototype.onclosetag = function (name) {
    this.updatePosition(1);

    if (this.lowerCaseTagNames) {
      name = name.toLowerCase();
    }

    if (foreignContextElements.has(name) || htmlIntegrationElements.has(name)) {
      this.foreignContext.pop();
    }

    if (this.stack.length && (this.options.xmlMode || !voidElements$1.has(name))) {
      var pos = this.stack.lastIndexOf(name);

      if (pos !== -1) {
        if (this.cbs.onclosetag) {
          pos = this.stack.length - pos;

          while (pos--) {
            // We know the stack has sufficient elements.
            this.cbs.onclosetag(this.stack.pop());
          }
        } else this.stack.length = pos;
      } else if (name === "p" && !this.options.xmlMode) {
        this.onopentagname(name);
        this.closeCurrentTag();
      }
    } else if (!this.options.xmlMode && (name === "br" || name === "p")) {
      this.onopentagname(name);
      this.closeCurrentTag();
    }
  };

  Parser.prototype.onselfclosingtag = function () {
    if (this.options.xmlMode || this.options.recognizeSelfClosing || this.foreignContext[this.foreignContext.length - 1]) {
      this.closeCurrentTag();
    } else {
      this.onopentagend();
    }
  };

  Parser.prototype.closeCurrentTag = function () {
    var _a, _b;

    var name = this.tagname;
    this.onopentagend();
    /*
     * Self-closing tags will be on the top of the stack
     * (cheaper check than in onclosetag)
     */

    if (this.stack[this.stack.length - 1] === name) {
      (_b = (_a = this.cbs).onclosetag) === null || _b === void 0 ? void 0 : _b.call(_a, name);
      this.stack.pop();
    }
  };

  Parser.prototype.onattribname = function (name) {
    if (this.lowerCaseAttributeNames) {
      name = name.toLowerCase();
    }

    this.attribname = name;
  };

  Parser.prototype.onattribdata = function (value) {
    this.attribvalue += value;
  };

  Parser.prototype.onattribend = function (quote) {
    var _a, _b;

    (_b = (_a = this.cbs).onattribute) === null || _b === void 0 ? void 0 : _b.call(_a, this.attribname, this.attribvalue, quote);

    if (this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname)) {
      this.attribs[this.attribname] = this.attribvalue;
    }

    this.attribname = "";
    this.attribvalue = "";
  };

  Parser.prototype.getInstructionName = function (value) {
    var idx = value.search(reNameEnd);
    var name = idx < 0 ? value : value.substr(0, idx);

    if (this.lowerCaseTagNames) {
      name = name.toLowerCase();
    }

    return name;
  };

  Parser.prototype.ondeclaration = function (value) {
    if (this.cbs.onprocessinginstruction) {
      var name_1 = this.getInstructionName(value);
      this.cbs.onprocessinginstruction("!" + name_1, "!" + value);
    }
  };

  Parser.prototype.onprocessinginstruction = function (value) {
    if (this.cbs.onprocessinginstruction) {
      var name_2 = this.getInstructionName(value);
      this.cbs.onprocessinginstruction("?" + name_2, "?" + value);
    }
  };

  Parser.prototype.oncomment = function (value) {
    var _a, _b, _c, _d;

    this.updatePosition(4);
    (_b = (_a = this.cbs).oncomment) === null || _b === void 0 ? void 0 : _b.call(_a, value);
    (_d = (_c = this.cbs).oncommentend) === null || _d === void 0 ? void 0 : _d.call(_c);
  };

  Parser.prototype.oncdata = function (value) {
    var _a, _b, _c, _d, _e, _f;

    this.updatePosition(1);

    if (this.options.xmlMode || this.options.recognizeCDATA) {
      (_b = (_a = this.cbs).oncdatastart) === null || _b === void 0 ? void 0 : _b.call(_a);
      (_d = (_c = this.cbs).ontext) === null || _d === void 0 ? void 0 : _d.call(_c, value);
      (_f = (_e = this.cbs).oncdataend) === null || _f === void 0 ? void 0 : _f.call(_e);
    } else {
      this.oncomment("[CDATA[" + value + "]]");
    }
  };

  Parser.prototype.onerror = function (err) {
    var _a, _b;

    (_b = (_a = this.cbs).onerror) === null || _b === void 0 ? void 0 : _b.call(_a, err);
  };

  Parser.prototype.onend = function () {
    var _a, _b;

    if (this.cbs.onclosetag) {
      for (var i = this.stack.length; i > 0; this.cbs.onclosetag(this.stack[--i])) {
      }
    }

    (_b = (_a = this.cbs).onend) === null || _b === void 0 ? void 0 : _b.call(_a);
  };
  /**
   * Resets the parser to a blank state, ready to parse a new HTML document
   */


  Parser.prototype.reset = function () {
    var _a, _b, _c, _d;

    (_b = (_a = this.cbs).onreset) === null || _b === void 0 ? void 0 : _b.call(_a);
    this.tokenizer.reset();
    this.tagname = "";
    this.attribname = "";
    this.attribs = null;
    this.stack = [];
    (_d = (_c = this.cbs).onparserinit) === null || _d === void 0 ? void 0 : _d.call(_c, this);
  };
  /**
   * Resets the parser, then parses a complete document and
   * pushes it to the handler.
   *
   * @param data Document to parse.
   */


  Parser.prototype.parseComplete = function (data) {
    this.reset();
    this.end(data);
  };
  /**
   * Parses a chunk of data and calls the corresponding callbacks.
   *
   * @param chunk Chunk to parse.
   */


  Parser.prototype.write = function (chunk) {
    this.tokenizer.write(chunk);
  };
  /**
   * Parses the end of the buffer and clears the stack, calls onend.
   *
   * @param chunk Optional final chunk to parse.
   */


  Parser.prototype.end = function (chunk) {
    this.tokenizer.end(chunk);
  };
  /**
   * Pauses parsing. The parser won't emit events until `resume` is called.
   */


  Parser.prototype.pause = function () {
    this.tokenizer.pause();
  };
  /**
   * Resumes parsing after `pause` was called.
   */


  Parser.prototype.resume = function () {
    this.tokenizer.resume();
  };
  /**
   * Alias of `write`, for backwards compatibility.
   *
   * @param chunk Chunk to parse.
   * @deprecated
   */


  Parser.prototype.parseChunk = function (chunk) {
    this.write(chunk);
  };
  /**
   * Alias of `end`, for backwards compatibility.
   *
   * @param chunk Optional final chunk to parse.
   * @deprecated
   */


  Parser.prototype.done = function (chunk) {
    this.end(chunk);
  };

  return Parser;
}();

Parser$3.Parser = Parser$2;

var FeedHandler$1 = {};

var __extends = commonjsGlobal && commonjsGlobal.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __createBinding = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = commonjsGlobal && commonjsGlobal.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = commonjsGlobal && commonjsGlobal.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = commonjsGlobal && commonjsGlobal.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(FeedHandler$1, "__esModule", {
  value: true
});
FeedHandler$1.parseFeed = FeedHandler$1.FeedHandler = void 0;

var domhandler_1$5 = __importDefault(lib$7);

var DomUtils = __importStar(lib$8);

var Parser_1 = Parser$3;
var FeedItemMediaMedium;

(function (FeedItemMediaMedium) {
  FeedItemMediaMedium[FeedItemMediaMedium["image"] = 0] = "image";
  FeedItemMediaMedium[FeedItemMediaMedium["audio"] = 1] = "audio";
  FeedItemMediaMedium[FeedItemMediaMedium["video"] = 2] = "video";
  FeedItemMediaMedium[FeedItemMediaMedium["document"] = 3] = "document";
  FeedItemMediaMedium[FeedItemMediaMedium["executable"] = 4] = "executable";
})(FeedItemMediaMedium || (FeedItemMediaMedium = {}));

var FeedItemMediaExpression;

(function (FeedItemMediaExpression) {
  FeedItemMediaExpression[FeedItemMediaExpression["sample"] = 0] = "sample";
  FeedItemMediaExpression[FeedItemMediaExpression["full"] = 1] = "full";
  FeedItemMediaExpression[FeedItemMediaExpression["nonstop"] = 2] = "nonstop";
})(FeedItemMediaExpression || (FeedItemMediaExpression = {})); // TODO: Consume data as it is coming in


var FeedHandler =
/** @class */
function (_super) {
  __extends(FeedHandler, _super);
  /**
   *
   * @param callback
   * @param options
   */


  function FeedHandler(callback, options) {
    var _this = this;

    if (_typeof(callback) === "object") {
      callback = undefined;
      options = callback;
    }

    _this = _super.call(this, callback, options) || this;
    return _this;
  }

  FeedHandler.prototype.onend = function () {
    var _a, _b;

    var feedRoot = getOneElement(isValidFeed, this.dom);

    if (!feedRoot) {
      this.handleCallback(new Error("couldn't find root of feed"));
      return;
    }

    var feed = {};

    if (feedRoot.name === "feed") {
      var childs = feedRoot.children;
      feed.type = "atom";
      addConditionally(feed, "id", "id", childs);
      addConditionally(feed, "title", "title", childs);
      var href = getAttribute("href", getOneElement("link", childs));

      if (href) {
        feed.link = href;
      }

      addConditionally(feed, "description", "subtitle", childs);
      var updated = fetch("updated", childs);

      if (updated) {
        feed.updated = new Date(updated);
      }

      addConditionally(feed, "author", "email", childs, true);
      feed.items = getElements("entry", childs).map(function (item) {
        var entry = {};
        var children = item.children;
        addConditionally(entry, "id", "id", children);
        addConditionally(entry, "title", "title", children);
        var href = getAttribute("href", getOneElement("link", children));

        if (href) {
          entry.link = href;
        }

        var description = fetch("summary", children) || fetch("content", children);

        if (description) {
          entry.description = description;
        }

        var pubDate = fetch("updated", children);

        if (pubDate) {
          entry.pubDate = new Date(pubDate);
        }

        entry.media = getMediaElements(children);
        return entry;
      });
    } else {
      var childs = (_b = (_a = getOneElement("channel", feedRoot.children)) === null || _a === void 0 ? void 0 : _a.children) !== null && _b !== void 0 ? _b : [];
      feed.type = feedRoot.name.substr(0, 3);
      feed.id = "";
      addConditionally(feed, "title", "title", childs);
      addConditionally(feed, "link", "link", childs);
      addConditionally(feed, "description", "description", childs);
      var updated = fetch("lastBuildDate", childs);

      if (updated) {
        feed.updated = new Date(updated);
      }

      addConditionally(feed, "author", "managingEditor", childs, true);
      feed.items = getElements("item", feedRoot.children).map(function (item) {
        var entry = {};
        var children = item.children;
        addConditionally(entry, "id", "guid", children);
        addConditionally(entry, "title", "title", children);
        addConditionally(entry, "link", "link", children);
        addConditionally(entry, "description", "description", children);
        var pubDate = fetch("pubDate", children);
        if (pubDate) entry.pubDate = new Date(pubDate);
        entry.media = getMediaElements(children);
        return entry;
      });
    }

    this.feed = feed;
    this.handleCallback(null);
  };

  return FeedHandler;
}(domhandler_1$5["default"]);

FeedHandler$1.FeedHandler = FeedHandler;

function getMediaElements(where) {
  return getElements("media:content", where).map(function (elem) {
    var media = {
      medium: elem.attribs.medium,
      isDefault: !!elem.attribs.isDefault
    };

    if (elem.attribs.url) {
      media.url = elem.attribs.url;
    }

    if (elem.attribs.fileSize) {
      media.fileSize = parseInt(elem.attribs.fileSize, 10);
    }

    if (elem.attribs.type) {
      media.type = elem.attribs.type;
    }

    if (elem.attribs.expression) {
      media.expression = elem.attribs.expression;
    }

    if (elem.attribs.bitrate) {
      media.bitrate = parseInt(elem.attribs.bitrate, 10);
    }

    if (elem.attribs.framerate) {
      media.framerate = parseInt(elem.attribs.framerate, 10);
    }

    if (elem.attribs.samplingrate) {
      media.samplingrate = parseInt(elem.attribs.samplingrate, 10);
    }

    if (elem.attribs.channels) {
      media.channels = parseInt(elem.attribs.channels, 10);
    }

    if (elem.attribs.duration) {
      media.duration = parseInt(elem.attribs.duration, 10);
    }

    if (elem.attribs.height) {
      media.height = parseInt(elem.attribs.height, 10);
    }

    if (elem.attribs.width) {
      media.width = parseInt(elem.attribs.width, 10);
    }

    if (elem.attribs.lang) {
      media.lang = elem.attribs.lang;
    }

    return media;
  });
}

function getElements(tagName, where) {
  return DomUtils.getElementsByTagName(tagName, where, true);
}

function getOneElement(tagName, node) {
  return DomUtils.getElementsByTagName(tagName, node, true, 1)[0];
}

function fetch(tagName, where, recurse) {
  if (recurse === void 0) {
    recurse = false;
  }

  return DomUtils.getText(DomUtils.getElementsByTagName(tagName, where, recurse, 1)).trim();
}

function getAttribute(name, elem) {
  if (!elem) {
    return null;
  }

  var attribs = elem.attribs;
  return attribs[name];
}

function addConditionally(obj, prop, what, where, recurse) {
  if (recurse === void 0) {
    recurse = false;
  }

  var tmp = fetch(what, where, recurse);
  if (tmp) obj[prop] = tmp;
}

function isValidFeed(value) {
  return value === "rss" || value === "feed" || value === "rdf:RDF";
}
/**
 * Parse a feed.
 *
 * @param feed The feed that should be parsed, as a string.
 * @param options Optionally, options for parsing. When using this option, you should set `xmlMode` to `true`.
 */


function parseFeed(feed, options) {
  if (options === void 0) {
    options = {
      xmlMode: true
    };
  }

  var handler = new FeedHandler(options);
  new Parser_1.Parser(handler, options).end(feed);
  return handler.feed;
}

FeedHandler$1.parseFeed = parseFeed;

(function (exports) {

  var __createBinding = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    });
  } : function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
  });

  var __setModuleDefault = commonjsGlobal && commonjsGlobal.__setModuleDefault || (Object.create ? function (o, v) {
    Object.defineProperty(o, "default", {
      enumerable: true,
      value: v
    });
  } : function (o, v) {
    o["default"] = v;
  });

  var __importStar = commonjsGlobal && commonjsGlobal.__importStar || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) {
      if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }

    __setModuleDefault(result, mod);

    return result;
  };

  var __exportStar = commonjsGlobal && commonjsGlobal.__exportStar || function (m, exports) {
    for (var p in m) {
      if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
    }
  };

  var __importDefault = commonjsGlobal && commonjsGlobal.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : {
      "default": mod
    };
  };

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.RssHandler = exports.DefaultHandler = exports.DomUtils = exports.ElementType = exports.Tokenizer = exports.createDomStream = exports.parseDOM = exports.parseDocument = exports.DomHandler = exports.Parser = void 0;
  var Parser_1 = Parser$3;
  Object.defineProperty(exports, "Parser", {
    enumerable: true,
    get: function get() {
      return Parser_1.Parser;
    }
  });
  var domhandler_1 = lib$7;
  Object.defineProperty(exports, "DomHandler", {
    enumerable: true,
    get: function get() {
      return domhandler_1.DomHandler;
    }
  });
  Object.defineProperty(exports, "DefaultHandler", {
    enumerable: true,
    get: function get() {
      return domhandler_1.DomHandler;
    }
  }); // Helper methods

  /**
   * Parses the data, returns the resulting document.
   *
   * @param data The data that should be parsed.
   * @param options Optional options for the parser and DOM builder.
   */

  function parseDocument(data, options) {
    var handler = new domhandler_1.DomHandler(undefined, options);
    new Parser_1.Parser(handler, options).end(data);
    return handler.root;
  }

  exports.parseDocument = parseDocument;
  /**
   * Parses data, returns an array of the root nodes.
   *
   * Note that the root nodes still have a `Document` node as their parent.
   * Use `parseDocument` to get the `Document` node instead.
   *
   * @param data The data that should be parsed.
   * @param options Optional options for the parser and DOM builder.
   * @deprecated Use `parseDocument` instead.
   */

  function parseDOM(data, options) {
    return parseDocument(data, options).children;
  }

  exports.parseDOM = parseDOM;
  /**
   * Creates a parser instance, with an attached DOM handler.
   *
   * @param cb A callback that will be called once parsing has been completed.
   * @param options Optional options for the parser and DOM builder.
   * @param elementCb An optional callback that will be called every time a tag has been completed inside of the DOM.
   */

  function createDomStream(cb, options, elementCb) {
    var handler = new domhandler_1.DomHandler(cb, options, elementCb);
    return new Parser_1.Parser(handler, options);
  }

  exports.createDomStream = createDomStream;
  var Tokenizer_1 = Tokenizer$6;
  Object.defineProperty(exports, "Tokenizer", {
    enumerable: true,
    get: function get() {
      return __importDefault(Tokenizer_1)["default"];
    }
  });

  var ElementType = __importStar(lib$6);

  exports.ElementType = ElementType;
  /*
   * All of the following exports exist for backwards-compatibility.
   * They should probably be removed eventually.
   */

  __exportStar(FeedHandler$1, exports);

  exports.DomUtils = __importStar(lib$8);
  var FeedHandler_1 = FeedHandler$1;
  Object.defineProperty(exports, "RssHandler", {
    enumerable: true,
    get: function get() {
      return FeedHandler_1.FeedHandler;
    }
  });
})(lib$2);

var parse5Adapter = {};

var lib$1 = {};

var unicode$3 = {};

var UNDEFINED_CODE_POINTS = [0xfffe, 0xffff, 0x1fffe, 0x1ffff, 0x2fffe, 0x2ffff, 0x3fffe, 0x3ffff, 0x4fffe, 0x4ffff, 0x5fffe, 0x5ffff, 0x6fffe, 0x6ffff, 0x7fffe, 0x7ffff, 0x8fffe, 0x8ffff, 0x9fffe, 0x9ffff, 0xafffe, 0xaffff, 0xbfffe, 0xbffff, 0xcfffe, 0xcffff, 0xdfffe, 0xdffff, 0xefffe, 0xeffff, 0xffffe, 0xfffff, 0x10fffe, 0x10ffff];
unicode$3.REPLACEMENT_CHARACTER = "\uFFFD";
unicode$3.CODE_POINTS = {
  EOF: -1,
  NULL: 0x00,
  TABULATION: 0x09,
  CARRIAGE_RETURN: 0x0d,
  LINE_FEED: 0x0a,
  FORM_FEED: 0x0c,
  SPACE: 0x20,
  EXCLAMATION_MARK: 0x21,
  QUOTATION_MARK: 0x22,
  NUMBER_SIGN: 0x23,
  AMPERSAND: 0x26,
  APOSTROPHE: 0x27,
  HYPHEN_MINUS: 0x2d,
  SOLIDUS: 0x2f,
  DIGIT_0: 0x30,
  DIGIT_9: 0x39,
  SEMICOLON: 0x3b,
  LESS_THAN_SIGN: 0x3c,
  EQUALS_SIGN: 0x3d,
  GREATER_THAN_SIGN: 0x3e,
  QUESTION_MARK: 0x3f,
  LATIN_CAPITAL_A: 0x41,
  LATIN_CAPITAL_F: 0x46,
  LATIN_CAPITAL_X: 0x58,
  LATIN_CAPITAL_Z: 0x5a,
  RIGHT_SQUARE_BRACKET: 0x5d,
  GRAVE_ACCENT: 0x60,
  LATIN_SMALL_A: 0x61,
  LATIN_SMALL_F: 0x66,
  LATIN_SMALL_X: 0x78,
  LATIN_SMALL_Z: 0x7a,
  REPLACEMENT_CHARACTER: 0xfffd
};
unicode$3.CODE_POINT_SEQUENCES = {
  DASH_DASH_STRING: [0x2d, 0x2d],
  //--
  DOCTYPE_STRING: [0x44, 0x4f, 0x43, 0x54, 0x59, 0x50, 0x45],
  //DOCTYPE
  CDATA_START_STRING: [0x5b, 0x43, 0x44, 0x41, 0x54, 0x41, 0x5b],
  //[CDATA[
  SCRIPT_STRING: [0x73, 0x63, 0x72, 0x69, 0x70, 0x74],
  //script
  PUBLIC_STRING: [0x50, 0x55, 0x42, 0x4c, 0x49, 0x43],
  //PUBLIC
  SYSTEM_STRING: [0x53, 0x59, 0x53, 0x54, 0x45, 0x4d] //SYSTEM

}; //Surrogates

unicode$3.isSurrogate = function (cp) {
  return cp >= 0xd800 && cp <= 0xdfff;
};

unicode$3.isSurrogatePair = function (cp) {
  return cp >= 0xdc00 && cp <= 0xdfff;
};

unicode$3.getSurrogatePairCodePoint = function (cp1, cp2) {
  return (cp1 - 0xd800) * 0x400 + 0x2400 + cp2;
}; //NOTE: excluding NULL and ASCII whitespace


unicode$3.isControlCodePoint = function (cp) {
  return cp !== 0x20 && cp !== 0x0a && cp !== 0x0d && cp !== 0x09 && cp !== 0x0c && cp >= 0x01 && cp <= 0x1f || cp >= 0x7f && cp <= 0x9f;
};

unicode$3.isUndefinedCodePoint = function (cp) {
  return cp >= 0xfdd0 && cp <= 0xfdef || UNDEFINED_CODE_POINTS.indexOf(cp) > -1;
};

var errorCodes = {
  controlCharacterInInputStream: 'control-character-in-input-stream',
  noncharacterInInputStream: 'noncharacter-in-input-stream',
  surrogateInInputStream: 'surrogate-in-input-stream',
  nonVoidHtmlElementStartTagWithTrailingSolidus: 'non-void-html-element-start-tag-with-trailing-solidus',
  endTagWithAttributes: 'end-tag-with-attributes',
  endTagWithTrailingSolidus: 'end-tag-with-trailing-solidus',
  unexpectedSolidusInTag: 'unexpected-solidus-in-tag',
  unexpectedNullCharacter: 'unexpected-null-character',
  unexpectedQuestionMarkInsteadOfTagName: 'unexpected-question-mark-instead-of-tag-name',
  invalidFirstCharacterOfTagName: 'invalid-first-character-of-tag-name',
  unexpectedEqualsSignBeforeAttributeName: 'unexpected-equals-sign-before-attribute-name',
  missingEndTagName: 'missing-end-tag-name',
  unexpectedCharacterInAttributeName: 'unexpected-character-in-attribute-name',
  unknownNamedCharacterReference: 'unknown-named-character-reference',
  missingSemicolonAfterCharacterReference: 'missing-semicolon-after-character-reference',
  unexpectedCharacterAfterDoctypeSystemIdentifier: 'unexpected-character-after-doctype-system-identifier',
  unexpectedCharacterInUnquotedAttributeValue: 'unexpected-character-in-unquoted-attribute-value',
  eofBeforeTagName: 'eof-before-tag-name',
  eofInTag: 'eof-in-tag',
  missingAttributeValue: 'missing-attribute-value',
  missingWhitespaceBetweenAttributes: 'missing-whitespace-between-attributes',
  missingWhitespaceAfterDoctypePublicKeyword: 'missing-whitespace-after-doctype-public-keyword',
  missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers: 'missing-whitespace-between-doctype-public-and-system-identifiers',
  missingWhitespaceAfterDoctypeSystemKeyword: 'missing-whitespace-after-doctype-system-keyword',
  missingQuoteBeforeDoctypePublicIdentifier: 'missing-quote-before-doctype-public-identifier',
  missingQuoteBeforeDoctypeSystemIdentifier: 'missing-quote-before-doctype-system-identifier',
  missingDoctypePublicIdentifier: 'missing-doctype-public-identifier',
  missingDoctypeSystemIdentifier: 'missing-doctype-system-identifier',
  abruptDoctypePublicIdentifier: 'abrupt-doctype-public-identifier',
  abruptDoctypeSystemIdentifier: 'abrupt-doctype-system-identifier',
  cdataInHtmlContent: 'cdata-in-html-content',
  incorrectlyOpenedComment: 'incorrectly-opened-comment',
  eofInScriptHtmlCommentLikeText: 'eof-in-script-html-comment-like-text',
  eofInDoctype: 'eof-in-doctype',
  nestedComment: 'nested-comment',
  abruptClosingOfEmptyComment: 'abrupt-closing-of-empty-comment',
  eofInComment: 'eof-in-comment',
  incorrectlyClosedComment: 'incorrectly-closed-comment',
  eofInCdata: 'eof-in-cdata',
  absenceOfDigitsInNumericCharacterReference: 'absence-of-digits-in-numeric-character-reference',
  nullCharacterReference: 'null-character-reference',
  surrogateCharacterReference: 'surrogate-character-reference',
  characterReferenceOutsideUnicodeRange: 'character-reference-outside-unicode-range',
  controlCharacterReference: 'control-character-reference',
  noncharacterCharacterReference: 'noncharacter-character-reference',
  missingWhitespaceBeforeDoctypeName: 'missing-whitespace-before-doctype-name',
  missingDoctypeName: 'missing-doctype-name',
  invalidCharacterSequenceAfterDoctypeName: 'invalid-character-sequence-after-doctype-name',
  duplicateAttribute: 'duplicate-attribute',
  nonConformingDoctype: 'non-conforming-doctype',
  missingDoctype: 'missing-doctype',
  misplacedDoctype: 'misplaced-doctype',
  endTagWithoutMatchingOpenElement: 'end-tag-without-matching-open-element',
  closingOfElementWithOpenChildElements: 'closing-of-element-with-open-child-elements',
  disallowedContentInNoscriptInHead: 'disallowed-content-in-noscript-in-head',
  openElementsLeftAfterEof: 'open-elements-left-after-eof',
  abandonedHeadElementChild: 'abandoned-head-element-child',
  misplacedStartTagForHeadElement: 'misplaced-start-tag-for-head-element',
  nestedNoscriptInHead: 'nested-noscript-in-head',
  eofInElementThatCanContainOnlyText: 'eof-in-element-that-can-contain-only-text'
};

var unicode$2 = unicode$3;
var ERR$2 = errorCodes; //Aliases

var $$7 = unicode$2.CODE_POINTS; //Const

var DEFAULT_BUFFER_WATERLINE = 1 << 16; //Preprocessor
//NOTE: HTML input preprocessing
//(see: http://www.whatwg.org/specs/web-apps/current-work/multipage/parsing.html#preprocessing-the-input-stream)

var Preprocessor$1 = /*#__PURE__*/function () {
  function Preprocessor() {
    _classCallCheck(this, Preprocessor);

    this.html = null;
    this.pos = -1;
    this.lastGapPos = -1;
    this.lastCharPos = -1;
    this.gapStack = [];
    this.skipNextNewLine = false;
    this.lastChunkWritten = false;
    this.endOfChunkHit = false;
    this.bufferWaterline = DEFAULT_BUFFER_WATERLINE;
  }

  _createClass(Preprocessor, [{
    key: "_err",
    value: function _err() {// NOTE: err reporting is noop by default. Enabled by mixin.
    }
  }, {
    key: "_addGap",
    value: function _addGap() {
      this.gapStack.push(this.lastGapPos);
      this.lastGapPos = this.pos;
    }
  }, {
    key: "_processSurrogate",
    value: function _processSurrogate(cp) {
      //NOTE: try to peek a surrogate pair
      if (this.pos !== this.lastCharPos) {
        var nextCp = this.html.charCodeAt(this.pos + 1);

        if (unicode$2.isSurrogatePair(nextCp)) {
          //NOTE: we have a surrogate pair. Peek pair character and recalculate code point.
          this.pos++; //NOTE: add gap that should be avoided during retreat

          this._addGap();

          return unicode$2.getSurrogatePairCodePoint(cp, nextCp);
        }
      } //NOTE: we are at the end of a chunk, therefore we can't infer surrogate pair yet.
      else if (!this.lastChunkWritten) {
          this.endOfChunkHit = true;
          return $$7.EOF;
        } //NOTE: isolated surrogate


      this._err(ERR$2.surrogateInInputStream);

      return cp;
    }
  }, {
    key: "dropParsedChunk",
    value: function dropParsedChunk() {
      if (this.pos > this.bufferWaterline) {
        this.lastCharPos -= this.pos;
        this.html = this.html.substring(this.pos);
        this.pos = 0;
        this.lastGapPos = -1;
        this.gapStack = [];
      }
    }
  }, {
    key: "write",
    value: function write(chunk, isLastChunk) {
      if (this.html) {
        this.html += chunk;
      } else {
        this.html = chunk;
      }

      this.lastCharPos = this.html.length - 1;
      this.endOfChunkHit = false;
      this.lastChunkWritten = isLastChunk;
    }
  }, {
    key: "insertHtmlAtCurrentPos",
    value: function insertHtmlAtCurrentPos(chunk) {
      this.html = this.html.substring(0, this.pos + 1) + chunk + this.html.substring(this.pos + 1, this.html.length);
      this.lastCharPos = this.html.length - 1;
      this.endOfChunkHit = false;
    }
  }, {
    key: "advance",
    value: function advance() {
      this.pos++;

      if (this.pos > this.lastCharPos) {
        this.endOfChunkHit = !this.lastChunkWritten;
        return $$7.EOF;
      }

      var cp = this.html.charCodeAt(this.pos); //NOTE: any U+000A LINE FEED (LF) characters that immediately follow a U+000D CARRIAGE RETURN (CR) character
      //must be ignored.

      if (this.skipNextNewLine && cp === $$7.LINE_FEED) {
        this.skipNextNewLine = false;

        this._addGap();

        return this.advance();
      } //NOTE: all U+000D CARRIAGE RETURN (CR) characters must be converted to U+000A LINE FEED (LF) characters


      if (cp === $$7.CARRIAGE_RETURN) {
        this.skipNextNewLine = true;
        return $$7.LINE_FEED;
      }

      this.skipNextNewLine = false;

      if (unicode$2.isSurrogate(cp)) {
        cp = this._processSurrogate(cp);
      } //OPTIMIZATION: first check if code point is in the common allowed
      //range (ASCII alphanumeric, whitespaces, big chunk of BMP)
      //before going into detailed performance cost validation.


      var isCommonValidRange = cp > 0x1f && cp < 0x7f || cp === $$7.LINE_FEED || cp === $$7.CARRIAGE_RETURN || cp > 0x9f && cp < 0xfdd0;

      if (!isCommonValidRange) {
        this._checkForProblematicCharacters(cp);
      }

      return cp;
    }
  }, {
    key: "_checkForProblematicCharacters",
    value: function _checkForProblematicCharacters(cp) {
      if (unicode$2.isControlCodePoint(cp)) {
        this._err(ERR$2.controlCharacterInInputStream);
      } else if (unicode$2.isUndefinedCodePoint(cp)) {
        this._err(ERR$2.noncharacterInInputStream);
      }
    }
  }, {
    key: "retreat",
    value: function retreat() {
      if (this.pos === this.lastGapPos) {
        this.lastGapPos = this.gapStack.pop();
        this.pos--;
      }

      this.pos--;
    }
  }]);

  return Preprocessor;
}();

var preprocessor = Preprocessor$1;

//(details: https://github.com/inikulin/parse5/tree/master/scripts/generate-named-entity-data/README.md)


var namedEntityData = new Uint16Array([4, 52, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 106, 303, 412, 810, 1432, 1701, 1796, 1987, 2114, 2360, 2420, 2484, 3170, 3251, 4140, 4393, 4575, 4610, 5106, 5512, 5728, 6117, 6274, 6315, 6345, 6427, 6516, 7002, 7910, 8733, 9323, 9870, 10170, 10631, 10893, 11318, 11386, 11467, 12773, 13092, 14474, 14922, 15448, 15542, 16419, 17666, 18166, 18611, 19004, 19095, 19298, 19397, 4, 16, 69, 77, 97, 98, 99, 102, 103, 108, 109, 110, 111, 112, 114, 115, 116, 117, 140, 150, 158, 169, 176, 194, 199, 210, 216, 222, 226, 242, 256, 266, 283, 294, 108, 105, 103, 5, 198, 1, 59, 148, 1, 198, 80, 5, 38, 1, 59, 156, 1, 38, 99, 117, 116, 101, 5, 193, 1, 59, 167, 1, 193, 114, 101, 118, 101, 59, 1, 258, 4, 2, 105, 121, 182, 191, 114, 99, 5, 194, 1, 59, 189, 1, 194, 59, 1, 1040, 114, 59, 3, 55349, 56580, 114, 97, 118, 101, 5, 192, 1, 59, 208, 1, 192, 112, 104, 97, 59, 1, 913, 97, 99, 114, 59, 1, 256, 100, 59, 1, 10835, 4, 2, 103, 112, 232, 237, 111, 110, 59, 1, 260, 102, 59, 3, 55349, 56632, 112, 108, 121, 70, 117, 110, 99, 116, 105, 111, 110, 59, 1, 8289, 105, 110, 103, 5, 197, 1, 59, 264, 1, 197, 4, 2, 99, 115, 272, 277, 114, 59, 3, 55349, 56476, 105, 103, 110, 59, 1, 8788, 105, 108, 100, 101, 5, 195, 1, 59, 292, 1, 195, 109, 108, 5, 196, 1, 59, 301, 1, 196, 4, 8, 97, 99, 101, 102, 111, 114, 115, 117, 321, 350, 354, 383, 388, 394, 400, 405, 4, 2, 99, 114, 327, 336, 107, 115, 108, 97, 115, 104, 59, 1, 8726, 4, 2, 118, 119, 342, 345, 59, 1, 10983, 101, 100, 59, 1, 8966, 121, 59, 1, 1041, 4, 3, 99, 114, 116, 362, 369, 379, 97, 117, 115, 101, 59, 1, 8757, 110, 111, 117, 108, 108, 105, 115, 59, 1, 8492, 97, 59, 1, 914, 114, 59, 3, 55349, 56581, 112, 102, 59, 3, 55349, 56633, 101, 118, 101, 59, 1, 728, 99, 114, 59, 1, 8492, 109, 112, 101, 113, 59, 1, 8782, 4, 14, 72, 79, 97, 99, 100, 101, 102, 104, 105, 108, 111, 114, 115, 117, 442, 447, 456, 504, 542, 547, 569, 573, 577, 616, 678, 784, 790, 796, 99, 121, 59, 1, 1063, 80, 89, 5, 169, 1, 59, 454, 1, 169, 4, 3, 99, 112, 121, 464, 470, 497, 117, 116, 101, 59, 1, 262, 4, 2, 59, 105, 476, 478, 1, 8914, 116, 97, 108, 68, 105, 102, 102, 101, 114, 101, 110, 116, 105, 97, 108, 68, 59, 1, 8517, 108, 101, 121, 115, 59, 1, 8493, 4, 4, 97, 101, 105, 111, 514, 520, 530, 535, 114, 111, 110, 59, 1, 268, 100, 105, 108, 5, 199, 1, 59, 528, 1, 199, 114, 99, 59, 1, 264, 110, 105, 110, 116, 59, 1, 8752, 111, 116, 59, 1, 266, 4, 2, 100, 110, 553, 560, 105, 108, 108, 97, 59, 1, 184, 116, 101, 114, 68, 111, 116, 59, 1, 183, 114, 59, 1, 8493, 105, 59, 1, 935, 114, 99, 108, 101, 4, 4, 68, 77, 80, 84, 591, 596, 603, 609, 111, 116, 59, 1, 8857, 105, 110, 117, 115, 59, 1, 8854, 108, 117, 115, 59, 1, 8853, 105, 109, 101, 115, 59, 1, 8855, 111, 4, 2, 99, 115, 623, 646, 107, 119, 105, 115, 101, 67, 111, 110, 116, 111, 117, 114, 73, 110, 116, 101, 103, 114, 97, 108, 59, 1, 8754, 101, 67, 117, 114, 108, 121, 4, 2, 68, 81, 658, 671, 111, 117, 98, 108, 101, 81, 117, 111, 116, 101, 59, 1, 8221, 117, 111, 116, 101, 59, 1, 8217, 4, 4, 108, 110, 112, 117, 688, 701, 736, 753, 111, 110, 4, 2, 59, 101, 696, 698, 1, 8759, 59, 1, 10868, 4, 3, 103, 105, 116, 709, 717, 722, 114, 117, 101, 110, 116, 59, 1, 8801, 110, 116, 59, 1, 8751, 111, 117, 114, 73, 110, 116, 101, 103, 114, 97, 108, 59, 1, 8750, 4, 2, 102, 114, 742, 745, 59, 1, 8450, 111, 100, 117, 99, 116, 59, 1, 8720, 110, 116, 101, 114, 67, 108, 111, 99, 107, 119, 105, 115, 101, 67, 111, 110, 116, 111, 117, 114, 73, 110, 116, 101, 103, 114, 97, 108, 59, 1, 8755, 111, 115, 115, 59, 1, 10799, 99, 114, 59, 3, 55349, 56478, 112, 4, 2, 59, 67, 803, 805, 1, 8915, 97, 112, 59, 1, 8781, 4, 11, 68, 74, 83, 90, 97, 99, 101, 102, 105, 111, 115, 834, 850, 855, 860, 865, 888, 903, 916, 921, 1011, 1415, 4, 2, 59, 111, 840, 842, 1, 8517, 116, 114, 97, 104, 100, 59, 1, 10513, 99, 121, 59, 1, 1026, 99, 121, 59, 1, 1029, 99, 121, 59, 1, 1039, 4, 3, 103, 114, 115, 873, 879, 883, 103, 101, 114, 59, 1, 8225, 114, 59, 1, 8609, 104, 118, 59, 1, 10980, 4, 2, 97, 121, 894, 900, 114, 111, 110, 59, 1, 270, 59, 1, 1044, 108, 4, 2, 59, 116, 910, 912, 1, 8711, 97, 59, 1, 916, 114, 59, 3, 55349, 56583, 4, 2, 97, 102, 927, 998, 4, 2, 99, 109, 933, 992, 114, 105, 116, 105, 99, 97, 108, 4, 4, 65, 68, 71, 84, 950, 957, 978, 985, 99, 117, 116, 101, 59, 1, 180, 111, 4, 2, 116, 117, 964, 967, 59, 1, 729, 98, 108, 101, 65, 99, 117, 116, 101, 59, 1, 733, 114, 97, 118, 101, 59, 1, 96, 105, 108, 100, 101, 59, 1, 732, 111, 110, 100, 59, 1, 8900, 102, 101, 114, 101, 110, 116, 105, 97, 108, 68, 59, 1, 8518, 4, 4, 112, 116, 117, 119, 1021, 1026, 1048, 1249, 102, 59, 3, 55349, 56635, 4, 3, 59, 68, 69, 1034, 1036, 1041, 1, 168, 111, 116, 59, 1, 8412, 113, 117, 97, 108, 59, 1, 8784, 98, 108, 101, 4, 6, 67, 68, 76, 82, 85, 86, 1065, 1082, 1101, 1189, 1211, 1236, 111, 110, 116, 111, 117, 114, 73, 110, 116, 101, 103, 114, 97, 108, 59, 1, 8751, 111, 4, 2, 116, 119, 1089, 1092, 59, 1, 168, 110, 65, 114, 114, 111, 119, 59, 1, 8659, 4, 2, 101, 111, 1107, 1141, 102, 116, 4, 3, 65, 82, 84, 1117, 1124, 1136, 114, 114, 111, 119, 59, 1, 8656, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 8660, 101, 101, 59, 1, 10980, 110, 103, 4, 2, 76, 82, 1149, 1177, 101, 102, 116, 4, 2, 65, 82, 1158, 1165, 114, 114, 111, 119, 59, 1, 10232, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 10234, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 10233, 105, 103, 104, 116, 4, 2, 65, 84, 1199, 1206, 114, 114, 111, 119, 59, 1, 8658, 101, 101, 59, 1, 8872, 112, 4, 2, 65, 68, 1218, 1225, 114, 114, 111, 119, 59, 1, 8657, 111, 119, 110, 65, 114, 114, 111, 119, 59, 1, 8661, 101, 114, 116, 105, 99, 97, 108, 66, 97, 114, 59, 1, 8741, 110, 4, 6, 65, 66, 76, 82, 84, 97, 1264, 1292, 1299, 1352, 1391, 1408, 114, 114, 111, 119, 4, 3, 59, 66, 85, 1276, 1278, 1283, 1, 8595, 97, 114, 59, 1, 10515, 112, 65, 114, 114, 111, 119, 59, 1, 8693, 114, 101, 118, 101, 59, 1, 785, 101, 102, 116, 4, 3, 82, 84, 86, 1310, 1323, 1334, 105, 103, 104, 116, 86, 101, 99, 116, 111, 114, 59, 1, 10576, 101, 101, 86, 101, 99, 116, 111, 114, 59, 1, 10590, 101, 99, 116, 111, 114, 4, 2, 59, 66, 1345, 1347, 1, 8637, 97, 114, 59, 1, 10582, 105, 103, 104, 116, 4, 2, 84, 86, 1362, 1373, 101, 101, 86, 101, 99, 116, 111, 114, 59, 1, 10591, 101, 99, 116, 111, 114, 4, 2, 59, 66, 1384, 1386, 1, 8641, 97, 114, 59, 1, 10583, 101, 101, 4, 2, 59, 65, 1399, 1401, 1, 8868, 114, 114, 111, 119, 59, 1, 8615, 114, 114, 111, 119, 59, 1, 8659, 4, 2, 99, 116, 1421, 1426, 114, 59, 3, 55349, 56479, 114, 111, 107, 59, 1, 272, 4, 16, 78, 84, 97, 99, 100, 102, 103, 108, 109, 111, 112, 113, 115, 116, 117, 120, 1466, 1470, 1478, 1489, 1515, 1520, 1525, 1536, 1544, 1593, 1609, 1617, 1650, 1664, 1668, 1677, 71, 59, 1, 330, 72, 5, 208, 1, 59, 1476, 1, 208, 99, 117, 116, 101, 5, 201, 1, 59, 1487, 1, 201, 4, 3, 97, 105, 121, 1497, 1503, 1512, 114, 111, 110, 59, 1, 282, 114, 99, 5, 202, 1, 59, 1510, 1, 202, 59, 1, 1069, 111, 116, 59, 1, 278, 114, 59, 3, 55349, 56584, 114, 97, 118, 101, 5, 200, 1, 59, 1534, 1, 200, 101, 109, 101, 110, 116, 59, 1, 8712, 4, 2, 97, 112, 1550, 1555, 99, 114, 59, 1, 274, 116, 121, 4, 2, 83, 86, 1563, 1576, 109, 97, 108, 108, 83, 113, 117, 97, 114, 101, 59, 1, 9723, 101, 114, 121, 83, 109, 97, 108, 108, 83, 113, 117, 97, 114, 101, 59, 1, 9643, 4, 2, 103, 112, 1599, 1604, 111, 110, 59, 1, 280, 102, 59, 3, 55349, 56636, 115, 105, 108, 111, 110, 59, 1, 917, 117, 4, 2, 97, 105, 1624, 1640, 108, 4, 2, 59, 84, 1631, 1633, 1, 10869, 105, 108, 100, 101, 59, 1, 8770, 108, 105, 98, 114, 105, 117, 109, 59, 1, 8652, 4, 2, 99, 105, 1656, 1660, 114, 59, 1, 8496, 109, 59, 1, 10867, 97, 59, 1, 919, 109, 108, 5, 203, 1, 59, 1675, 1, 203, 4, 2, 105, 112, 1683, 1689, 115, 116, 115, 59, 1, 8707, 111, 110, 101, 110, 116, 105, 97, 108, 69, 59, 1, 8519, 4, 5, 99, 102, 105, 111, 115, 1713, 1717, 1722, 1762, 1791, 121, 59, 1, 1060, 114, 59, 3, 55349, 56585, 108, 108, 101, 100, 4, 2, 83, 86, 1732, 1745, 109, 97, 108, 108, 83, 113, 117, 97, 114, 101, 59, 1, 9724, 101, 114, 121, 83, 109, 97, 108, 108, 83, 113, 117, 97, 114, 101, 59, 1, 9642, 4, 3, 112, 114, 117, 1770, 1775, 1781, 102, 59, 3, 55349, 56637, 65, 108, 108, 59, 1, 8704, 114, 105, 101, 114, 116, 114, 102, 59, 1, 8497, 99, 114, 59, 1, 8497, 4, 12, 74, 84, 97, 98, 99, 100, 102, 103, 111, 114, 115, 116, 1822, 1827, 1834, 1848, 1855, 1877, 1882, 1887, 1890, 1896, 1978, 1984, 99, 121, 59, 1, 1027, 5, 62, 1, 59, 1832, 1, 62, 109, 109, 97, 4, 2, 59, 100, 1843, 1845, 1, 915, 59, 1, 988, 114, 101, 118, 101, 59, 1, 286, 4, 3, 101, 105, 121, 1863, 1869, 1874, 100, 105, 108, 59, 1, 290, 114, 99, 59, 1, 284, 59, 1, 1043, 111, 116, 59, 1, 288, 114, 59, 3, 55349, 56586, 59, 1, 8921, 112, 102, 59, 3, 55349, 56638, 101, 97, 116, 101, 114, 4, 6, 69, 70, 71, 76, 83, 84, 1915, 1933, 1944, 1953, 1959, 1971, 113, 117, 97, 108, 4, 2, 59, 76, 1925, 1927, 1, 8805, 101, 115, 115, 59, 1, 8923, 117, 108, 108, 69, 113, 117, 97, 108, 59, 1, 8807, 114, 101, 97, 116, 101, 114, 59, 1, 10914, 101, 115, 115, 59, 1, 8823, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 1, 10878, 105, 108, 100, 101, 59, 1, 8819, 99, 114, 59, 3, 55349, 56482, 59, 1, 8811, 4, 8, 65, 97, 99, 102, 105, 111, 115, 117, 2005, 2012, 2026, 2032, 2036, 2049, 2073, 2089, 82, 68, 99, 121, 59, 1, 1066, 4, 2, 99, 116, 2018, 2023, 101, 107, 59, 1, 711, 59, 1, 94, 105, 114, 99, 59, 1, 292, 114, 59, 1, 8460, 108, 98, 101, 114, 116, 83, 112, 97, 99, 101, 59, 1, 8459, 4, 2, 112, 114, 2055, 2059, 102, 59, 1, 8461, 105, 122, 111, 110, 116, 97, 108, 76, 105, 110, 101, 59, 1, 9472, 4, 2, 99, 116, 2079, 2083, 114, 59, 1, 8459, 114, 111, 107, 59, 1, 294, 109, 112, 4, 2, 68, 69, 2097, 2107, 111, 119, 110, 72, 117, 109, 112, 59, 1, 8782, 113, 117, 97, 108, 59, 1, 8783, 4, 14, 69, 74, 79, 97, 99, 100, 102, 103, 109, 110, 111, 115, 116, 117, 2144, 2149, 2155, 2160, 2171, 2189, 2194, 2198, 2209, 2245, 2307, 2329, 2334, 2341, 99, 121, 59, 1, 1045, 108, 105, 103, 59, 1, 306, 99, 121, 59, 1, 1025, 99, 117, 116, 101, 5, 205, 1, 59, 2169, 1, 205, 4, 2, 105, 121, 2177, 2186, 114, 99, 5, 206, 1, 59, 2184, 1, 206, 59, 1, 1048, 111, 116, 59, 1, 304, 114, 59, 1, 8465, 114, 97, 118, 101, 5, 204, 1, 59, 2207, 1, 204, 4, 3, 59, 97, 112, 2217, 2219, 2238, 1, 8465, 4, 2, 99, 103, 2225, 2229, 114, 59, 1, 298, 105, 110, 97, 114, 121, 73, 59, 1, 8520, 108, 105, 101, 115, 59, 1, 8658, 4, 2, 116, 118, 2251, 2281, 4, 2, 59, 101, 2257, 2259, 1, 8748, 4, 2, 103, 114, 2265, 2271, 114, 97, 108, 59, 1, 8747, 115, 101, 99, 116, 105, 111, 110, 59, 1, 8898, 105, 115, 105, 98, 108, 101, 4, 2, 67, 84, 2293, 2300, 111, 109, 109, 97, 59, 1, 8291, 105, 109, 101, 115, 59, 1, 8290, 4, 3, 103, 112, 116, 2315, 2320, 2325, 111, 110, 59, 1, 302, 102, 59, 3, 55349, 56640, 97, 59, 1, 921, 99, 114, 59, 1, 8464, 105, 108, 100, 101, 59, 1, 296, 4, 2, 107, 109, 2347, 2352, 99, 121, 59, 1, 1030, 108, 5, 207, 1, 59, 2358, 1, 207, 4, 5, 99, 102, 111, 115, 117, 2372, 2386, 2391, 2397, 2414, 4, 2, 105, 121, 2378, 2383, 114, 99, 59, 1, 308, 59, 1, 1049, 114, 59, 3, 55349, 56589, 112, 102, 59, 3, 55349, 56641, 4, 2, 99, 101, 2403, 2408, 114, 59, 3, 55349, 56485, 114, 99, 121, 59, 1, 1032, 107, 99, 121, 59, 1, 1028, 4, 7, 72, 74, 97, 99, 102, 111, 115, 2436, 2441, 2446, 2452, 2467, 2472, 2478, 99, 121, 59, 1, 1061, 99, 121, 59, 1, 1036, 112, 112, 97, 59, 1, 922, 4, 2, 101, 121, 2458, 2464, 100, 105, 108, 59, 1, 310, 59, 1, 1050, 114, 59, 3, 55349, 56590, 112, 102, 59, 3, 55349, 56642, 99, 114, 59, 3, 55349, 56486, 4, 11, 74, 84, 97, 99, 101, 102, 108, 109, 111, 115, 116, 2508, 2513, 2520, 2562, 2585, 2981, 2986, 3004, 3011, 3146, 3167, 99, 121, 59, 1, 1033, 5, 60, 1, 59, 2518, 1, 60, 4, 5, 99, 109, 110, 112, 114, 2532, 2538, 2544, 2548, 2558, 117, 116, 101, 59, 1, 313, 98, 100, 97, 59, 1, 923, 103, 59, 1, 10218, 108, 97, 99, 101, 116, 114, 102, 59, 1, 8466, 114, 59, 1, 8606, 4, 3, 97, 101, 121, 2570, 2576, 2582, 114, 111, 110, 59, 1, 317, 100, 105, 108, 59, 1, 315, 59, 1, 1051, 4, 2, 102, 115, 2591, 2907, 116, 4, 10, 65, 67, 68, 70, 82, 84, 85, 86, 97, 114, 2614, 2663, 2672, 2728, 2735, 2760, 2820, 2870, 2888, 2895, 4, 2, 110, 114, 2620, 2633, 103, 108, 101, 66, 114, 97, 99, 107, 101, 116, 59, 1, 10216, 114, 111, 119, 4, 3, 59, 66, 82, 2644, 2646, 2651, 1, 8592, 97, 114, 59, 1, 8676, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 8646, 101, 105, 108, 105, 110, 103, 59, 1, 8968, 111, 4, 2, 117, 119, 2679, 2692, 98, 108, 101, 66, 114, 97, 99, 107, 101, 116, 59, 1, 10214, 110, 4, 2, 84, 86, 2699, 2710, 101, 101, 86, 101, 99, 116, 111, 114, 59, 1, 10593, 101, 99, 116, 111, 114, 4, 2, 59, 66, 2721, 2723, 1, 8643, 97, 114, 59, 1, 10585, 108, 111, 111, 114, 59, 1, 8970, 105, 103, 104, 116, 4, 2, 65, 86, 2745, 2752, 114, 114, 111, 119, 59, 1, 8596, 101, 99, 116, 111, 114, 59, 1, 10574, 4, 2, 101, 114, 2766, 2792, 101, 4, 3, 59, 65, 86, 2775, 2777, 2784, 1, 8867, 114, 114, 111, 119, 59, 1, 8612, 101, 99, 116, 111, 114, 59, 1, 10586, 105, 97, 110, 103, 108, 101, 4, 3, 59, 66, 69, 2806, 2808, 2813, 1, 8882, 97, 114, 59, 1, 10703, 113, 117, 97, 108, 59, 1, 8884, 112, 4, 3, 68, 84, 86, 2829, 2841, 2852, 111, 119, 110, 86, 101, 99, 116, 111, 114, 59, 1, 10577, 101, 101, 86, 101, 99, 116, 111, 114, 59, 1, 10592, 101, 99, 116, 111, 114, 4, 2, 59, 66, 2863, 2865, 1, 8639, 97, 114, 59, 1, 10584, 101, 99, 116, 111, 114, 4, 2, 59, 66, 2881, 2883, 1, 8636, 97, 114, 59, 1, 10578, 114, 114, 111, 119, 59, 1, 8656, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 8660, 115, 4, 6, 69, 70, 71, 76, 83, 84, 2922, 2936, 2947, 2956, 2962, 2974, 113, 117, 97, 108, 71, 114, 101, 97, 116, 101, 114, 59, 1, 8922, 117, 108, 108, 69, 113, 117, 97, 108, 59, 1, 8806, 114, 101, 97, 116, 101, 114, 59, 1, 8822, 101, 115, 115, 59, 1, 10913, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 1, 10877, 105, 108, 100, 101, 59, 1, 8818, 114, 59, 3, 55349, 56591, 4, 2, 59, 101, 2992, 2994, 1, 8920, 102, 116, 97, 114, 114, 111, 119, 59, 1, 8666, 105, 100, 111, 116, 59, 1, 319, 4, 3, 110, 112, 119, 3019, 3110, 3115, 103, 4, 4, 76, 82, 108, 114, 3030, 3058, 3070, 3098, 101, 102, 116, 4, 2, 65, 82, 3039, 3046, 114, 114, 111, 119, 59, 1, 10229, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 10231, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 10230, 101, 102, 116, 4, 2, 97, 114, 3079, 3086, 114, 114, 111, 119, 59, 1, 10232, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 10234, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 10233, 102, 59, 3, 55349, 56643, 101, 114, 4, 2, 76, 82, 3123, 3134, 101, 102, 116, 65, 114, 114, 111, 119, 59, 1, 8601, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 8600, 4, 3, 99, 104, 116, 3154, 3158, 3161, 114, 59, 1, 8466, 59, 1, 8624, 114, 111, 107, 59, 1, 321, 59, 1, 8810, 4, 8, 97, 99, 101, 102, 105, 111, 115, 117, 3188, 3192, 3196, 3222, 3227, 3237, 3243, 3248, 112, 59, 1, 10501, 121, 59, 1, 1052, 4, 2, 100, 108, 3202, 3213, 105, 117, 109, 83, 112, 97, 99, 101, 59, 1, 8287, 108, 105, 110, 116, 114, 102, 59, 1, 8499, 114, 59, 3, 55349, 56592, 110, 117, 115, 80, 108, 117, 115, 59, 1, 8723, 112, 102, 59, 3, 55349, 56644, 99, 114, 59, 1, 8499, 59, 1, 924, 4, 9, 74, 97, 99, 101, 102, 111, 115, 116, 117, 3271, 3276, 3283, 3306, 3422, 3427, 4120, 4126, 4137, 99, 121, 59, 1, 1034, 99, 117, 116, 101, 59, 1, 323, 4, 3, 97, 101, 121, 3291, 3297, 3303, 114, 111, 110, 59, 1, 327, 100, 105, 108, 59, 1, 325, 59, 1, 1053, 4, 3, 103, 115, 119, 3314, 3380, 3415, 97, 116, 105, 118, 101, 4, 3, 77, 84, 86, 3327, 3340, 3365, 101, 100, 105, 117, 109, 83, 112, 97, 99, 101, 59, 1, 8203, 104, 105, 4, 2, 99, 110, 3348, 3357, 107, 83, 112, 97, 99, 101, 59, 1, 8203, 83, 112, 97, 99, 101, 59, 1, 8203, 101, 114, 121, 84, 104, 105, 110, 83, 112, 97, 99, 101, 59, 1, 8203, 116, 101, 100, 4, 2, 71, 76, 3389, 3405, 114, 101, 97, 116, 101, 114, 71, 114, 101, 97, 116, 101, 114, 59, 1, 8811, 101, 115, 115, 76, 101, 115, 115, 59, 1, 8810, 76, 105, 110, 101, 59, 1, 10, 114, 59, 3, 55349, 56593, 4, 4, 66, 110, 112, 116, 3437, 3444, 3460, 3464, 114, 101, 97, 107, 59, 1, 8288, 66, 114, 101, 97, 107, 105, 110, 103, 83, 112, 97, 99, 101, 59, 1, 160, 102, 59, 1, 8469, 4, 13, 59, 67, 68, 69, 71, 72, 76, 78, 80, 82, 83, 84, 86, 3492, 3494, 3517, 3536, 3578, 3657, 3685, 3784, 3823, 3860, 3915, 4066, 4107, 1, 10988, 4, 2, 111, 117, 3500, 3510, 110, 103, 114, 117, 101, 110, 116, 59, 1, 8802, 112, 67, 97, 112, 59, 1, 8813, 111, 117, 98, 108, 101, 86, 101, 114, 116, 105, 99, 97, 108, 66, 97, 114, 59, 1, 8742, 4, 3, 108, 113, 120, 3544, 3552, 3571, 101, 109, 101, 110, 116, 59, 1, 8713, 117, 97, 108, 4, 2, 59, 84, 3561, 3563, 1, 8800, 105, 108, 100, 101, 59, 3, 8770, 824, 105, 115, 116, 115, 59, 1, 8708, 114, 101, 97, 116, 101, 114, 4, 7, 59, 69, 70, 71, 76, 83, 84, 3600, 3602, 3609, 3621, 3631, 3637, 3650, 1, 8815, 113, 117, 97, 108, 59, 1, 8817, 117, 108, 108, 69, 113, 117, 97, 108, 59, 3, 8807, 824, 114, 101, 97, 116, 101, 114, 59, 3, 8811, 824, 101, 115, 115, 59, 1, 8825, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 3, 10878, 824, 105, 108, 100, 101, 59, 1, 8821, 117, 109, 112, 4, 2, 68, 69, 3666, 3677, 111, 119, 110, 72, 117, 109, 112, 59, 3, 8782, 824, 113, 117, 97, 108, 59, 3, 8783, 824, 101, 4, 2, 102, 115, 3692, 3724, 116, 84, 114, 105, 97, 110, 103, 108, 101, 4, 3, 59, 66, 69, 3709, 3711, 3717, 1, 8938, 97, 114, 59, 3, 10703, 824, 113, 117, 97, 108, 59, 1, 8940, 115, 4, 6, 59, 69, 71, 76, 83, 84, 3739, 3741, 3748, 3757, 3764, 3777, 1, 8814, 113, 117, 97, 108, 59, 1, 8816, 114, 101, 97, 116, 101, 114, 59, 1, 8824, 101, 115, 115, 59, 3, 8810, 824, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 3, 10877, 824, 105, 108, 100, 101, 59, 1, 8820, 101, 115, 116, 101, 100, 4, 2, 71, 76, 3795, 3812, 114, 101, 97, 116, 101, 114, 71, 114, 101, 97, 116, 101, 114, 59, 3, 10914, 824, 101, 115, 115, 76, 101, 115, 115, 59, 3, 10913, 824, 114, 101, 99, 101, 100, 101, 115, 4, 3, 59, 69, 83, 3838, 3840, 3848, 1, 8832, 113, 117, 97, 108, 59, 3, 10927, 824, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 1, 8928, 4, 2, 101, 105, 3866, 3881, 118, 101, 114, 115, 101, 69, 108, 101, 109, 101, 110, 116, 59, 1, 8716, 103, 104, 116, 84, 114, 105, 97, 110, 103, 108, 101, 4, 3, 59, 66, 69, 3900, 3902, 3908, 1, 8939, 97, 114, 59, 3, 10704, 824, 113, 117, 97, 108, 59, 1, 8941, 4, 2, 113, 117, 3921, 3973, 117, 97, 114, 101, 83, 117, 4, 2, 98, 112, 3933, 3952, 115, 101, 116, 4, 2, 59, 69, 3942, 3945, 3, 8847, 824, 113, 117, 97, 108, 59, 1, 8930, 101, 114, 115, 101, 116, 4, 2, 59, 69, 3963, 3966, 3, 8848, 824, 113, 117, 97, 108, 59, 1, 8931, 4, 3, 98, 99, 112, 3981, 4000, 4045, 115, 101, 116, 4, 2, 59, 69, 3990, 3993, 3, 8834, 8402, 113, 117, 97, 108, 59, 1, 8840, 99, 101, 101, 100, 115, 4, 4, 59, 69, 83, 84, 4015, 4017, 4025, 4037, 1, 8833, 113, 117, 97, 108, 59, 3, 10928, 824, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 1, 8929, 105, 108, 100, 101, 59, 3, 8831, 824, 101, 114, 115, 101, 116, 4, 2, 59, 69, 4056, 4059, 3, 8835, 8402, 113, 117, 97, 108, 59, 1, 8841, 105, 108, 100, 101, 4, 4, 59, 69, 70, 84, 4080, 4082, 4089, 4100, 1, 8769, 113, 117, 97, 108, 59, 1, 8772, 117, 108, 108, 69, 113, 117, 97, 108, 59, 1, 8775, 105, 108, 100, 101, 59, 1, 8777, 101, 114, 116, 105, 99, 97, 108, 66, 97, 114, 59, 1, 8740, 99, 114, 59, 3, 55349, 56489, 105, 108, 100, 101, 5, 209, 1, 59, 4135, 1, 209, 59, 1, 925, 4, 14, 69, 97, 99, 100, 102, 103, 109, 111, 112, 114, 115, 116, 117, 118, 4170, 4176, 4187, 4205, 4212, 4217, 4228, 4253, 4259, 4292, 4295, 4316, 4337, 4346, 108, 105, 103, 59, 1, 338, 99, 117, 116, 101, 5, 211, 1, 59, 4185, 1, 211, 4, 2, 105, 121, 4193, 4202, 114, 99, 5, 212, 1, 59, 4200, 1, 212, 59, 1, 1054, 98, 108, 97, 99, 59, 1, 336, 114, 59, 3, 55349, 56594, 114, 97, 118, 101, 5, 210, 1, 59, 4226, 1, 210, 4, 3, 97, 101, 105, 4236, 4241, 4246, 99, 114, 59, 1, 332, 103, 97, 59, 1, 937, 99, 114, 111, 110, 59, 1, 927, 112, 102, 59, 3, 55349, 56646, 101, 110, 67, 117, 114, 108, 121, 4, 2, 68, 81, 4272, 4285, 111, 117, 98, 108, 101, 81, 117, 111, 116, 101, 59, 1, 8220, 117, 111, 116, 101, 59, 1, 8216, 59, 1, 10836, 4, 2, 99, 108, 4301, 4306, 114, 59, 3, 55349, 56490, 97, 115, 104, 5, 216, 1, 59, 4314, 1, 216, 105, 4, 2, 108, 109, 4323, 4332, 100, 101, 5, 213, 1, 59, 4330, 1, 213, 101, 115, 59, 1, 10807, 109, 108, 5, 214, 1, 59, 4344, 1, 214, 101, 114, 4, 2, 66, 80, 4354, 4380, 4, 2, 97, 114, 4360, 4364, 114, 59, 1, 8254, 97, 99, 4, 2, 101, 107, 4372, 4375, 59, 1, 9182, 101, 116, 59, 1, 9140, 97, 114, 101, 110, 116, 104, 101, 115, 105, 115, 59, 1, 9180, 4, 9, 97, 99, 102, 104, 105, 108, 111, 114, 115, 4413, 4422, 4426, 4431, 4435, 4438, 4448, 4471, 4561, 114, 116, 105, 97, 108, 68, 59, 1, 8706, 121, 59, 1, 1055, 114, 59, 3, 55349, 56595, 105, 59, 1, 934, 59, 1, 928, 117, 115, 77, 105, 110, 117, 115, 59, 1, 177, 4, 2, 105, 112, 4454, 4467, 110, 99, 97, 114, 101, 112, 108, 97, 110, 101, 59, 1, 8460, 102, 59, 1, 8473, 4, 4, 59, 101, 105, 111, 4481, 4483, 4526, 4531, 1, 10939, 99, 101, 100, 101, 115, 4, 4, 59, 69, 83, 84, 4498, 4500, 4507, 4519, 1, 8826, 113, 117, 97, 108, 59, 1, 10927, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 1, 8828, 105, 108, 100, 101, 59, 1, 8830, 109, 101, 59, 1, 8243, 4, 2, 100, 112, 4537, 4543, 117, 99, 116, 59, 1, 8719, 111, 114, 116, 105, 111, 110, 4, 2, 59, 97, 4555, 4557, 1, 8759, 108, 59, 1, 8733, 4, 2, 99, 105, 4567, 4572, 114, 59, 3, 55349, 56491, 59, 1, 936, 4, 4, 85, 102, 111, 115, 4585, 4594, 4599, 4604, 79, 84, 5, 34, 1, 59, 4592, 1, 34, 114, 59, 3, 55349, 56596, 112, 102, 59, 1, 8474, 99, 114, 59, 3, 55349, 56492, 4, 12, 66, 69, 97, 99, 101, 102, 104, 105, 111, 114, 115, 117, 4636, 4642, 4650, 4681, 4704, 4763, 4767, 4771, 5047, 5069, 5081, 5094, 97, 114, 114, 59, 1, 10512, 71, 5, 174, 1, 59, 4648, 1, 174, 4, 3, 99, 110, 114, 4658, 4664, 4668, 117, 116, 101, 59, 1, 340, 103, 59, 1, 10219, 114, 4, 2, 59, 116, 4675, 4677, 1, 8608, 108, 59, 1, 10518, 4, 3, 97, 101, 121, 4689, 4695, 4701, 114, 111, 110, 59, 1, 344, 100, 105, 108, 59, 1, 342, 59, 1, 1056, 4, 2, 59, 118, 4710, 4712, 1, 8476, 101, 114, 115, 101, 4, 2, 69, 85, 4722, 4748, 4, 2, 108, 113, 4728, 4736, 101, 109, 101, 110, 116, 59, 1, 8715, 117, 105, 108, 105, 98, 114, 105, 117, 109, 59, 1, 8651, 112, 69, 113, 117, 105, 108, 105, 98, 114, 105, 117, 109, 59, 1, 10607, 114, 59, 1, 8476, 111, 59, 1, 929, 103, 104, 116, 4, 8, 65, 67, 68, 70, 84, 85, 86, 97, 4792, 4840, 4849, 4905, 4912, 4972, 5022, 5040, 4, 2, 110, 114, 4798, 4811, 103, 108, 101, 66, 114, 97, 99, 107, 101, 116, 59, 1, 10217, 114, 111, 119, 4, 3, 59, 66, 76, 4822, 4824, 4829, 1, 8594, 97, 114, 59, 1, 8677, 101, 102, 116, 65, 114, 114, 111, 119, 59, 1, 8644, 101, 105, 108, 105, 110, 103, 59, 1, 8969, 111, 4, 2, 117, 119, 4856, 4869, 98, 108, 101, 66, 114, 97, 99, 107, 101, 116, 59, 1, 10215, 110, 4, 2, 84, 86, 4876, 4887, 101, 101, 86, 101, 99, 116, 111, 114, 59, 1, 10589, 101, 99, 116, 111, 114, 4, 2, 59, 66, 4898, 4900, 1, 8642, 97, 114, 59, 1, 10581, 108, 111, 111, 114, 59, 1, 8971, 4, 2, 101, 114, 4918, 4944, 101, 4, 3, 59, 65, 86, 4927, 4929, 4936, 1, 8866, 114, 114, 111, 119, 59, 1, 8614, 101, 99, 116, 111, 114, 59, 1, 10587, 105, 97, 110, 103, 108, 101, 4, 3, 59, 66, 69, 4958, 4960, 4965, 1, 8883, 97, 114, 59, 1, 10704, 113, 117, 97, 108, 59, 1, 8885, 112, 4, 3, 68, 84, 86, 4981, 4993, 5004, 111, 119, 110, 86, 101, 99, 116, 111, 114, 59, 1, 10575, 101, 101, 86, 101, 99, 116, 111, 114, 59, 1, 10588, 101, 99, 116, 111, 114, 4, 2, 59, 66, 5015, 5017, 1, 8638, 97, 114, 59, 1, 10580, 101, 99, 116, 111, 114, 4, 2, 59, 66, 5033, 5035, 1, 8640, 97, 114, 59, 1, 10579, 114, 114, 111, 119, 59, 1, 8658, 4, 2, 112, 117, 5053, 5057, 102, 59, 1, 8477, 110, 100, 73, 109, 112, 108, 105, 101, 115, 59, 1, 10608, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 8667, 4, 2, 99, 104, 5087, 5091, 114, 59, 1, 8475, 59, 1, 8625, 108, 101, 68, 101, 108, 97, 121, 101, 100, 59, 1, 10740, 4, 13, 72, 79, 97, 99, 102, 104, 105, 109, 111, 113, 115, 116, 117, 5134, 5150, 5157, 5164, 5198, 5203, 5259, 5265, 5277, 5283, 5374, 5380, 5385, 4, 2, 67, 99, 5140, 5146, 72, 99, 121, 59, 1, 1065, 121, 59, 1, 1064, 70, 84, 99, 121, 59, 1, 1068, 99, 117, 116, 101, 59, 1, 346, 4, 5, 59, 97, 101, 105, 121, 5176, 5178, 5184, 5190, 5195, 1, 10940, 114, 111, 110, 59, 1, 352, 100, 105, 108, 59, 1, 350, 114, 99, 59, 1, 348, 59, 1, 1057, 114, 59, 3, 55349, 56598, 111, 114, 116, 4, 4, 68, 76, 82, 85, 5216, 5227, 5238, 5250, 111, 119, 110, 65, 114, 114, 111, 119, 59, 1, 8595, 101, 102, 116, 65, 114, 114, 111, 119, 59, 1, 8592, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 8594, 112, 65, 114, 114, 111, 119, 59, 1, 8593, 103, 109, 97, 59, 1, 931, 97, 108, 108, 67, 105, 114, 99, 108, 101, 59, 1, 8728, 112, 102, 59, 3, 55349, 56650, 4, 2, 114, 117, 5289, 5293, 116, 59, 1, 8730, 97, 114, 101, 4, 4, 59, 73, 83, 85, 5306, 5308, 5322, 5367, 1, 9633, 110, 116, 101, 114, 115, 101, 99, 116, 105, 111, 110, 59, 1, 8851, 117, 4, 2, 98, 112, 5329, 5347, 115, 101, 116, 4, 2, 59, 69, 5338, 5340, 1, 8847, 113, 117, 97, 108, 59, 1, 8849, 101, 114, 115, 101, 116, 4, 2, 59, 69, 5358, 5360, 1, 8848, 113, 117, 97, 108, 59, 1, 8850, 110, 105, 111, 110, 59, 1, 8852, 99, 114, 59, 3, 55349, 56494, 97, 114, 59, 1, 8902, 4, 4, 98, 99, 109, 112, 5395, 5420, 5475, 5478, 4, 2, 59, 115, 5401, 5403, 1, 8912, 101, 116, 4, 2, 59, 69, 5411, 5413, 1, 8912, 113, 117, 97, 108, 59, 1, 8838, 4, 2, 99, 104, 5426, 5468, 101, 101, 100, 115, 4, 4, 59, 69, 83, 84, 5440, 5442, 5449, 5461, 1, 8827, 113, 117, 97, 108, 59, 1, 10928, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 1, 8829, 105, 108, 100, 101, 59, 1, 8831, 84, 104, 97, 116, 59, 1, 8715, 59, 1, 8721, 4, 3, 59, 101, 115, 5486, 5488, 5507, 1, 8913, 114, 115, 101, 116, 4, 2, 59, 69, 5498, 5500, 1, 8835, 113, 117, 97, 108, 59, 1, 8839, 101, 116, 59, 1, 8913, 4, 11, 72, 82, 83, 97, 99, 102, 104, 105, 111, 114, 115, 5536, 5546, 5552, 5567, 5579, 5602, 5607, 5655, 5695, 5701, 5711, 79, 82, 78, 5, 222, 1, 59, 5544, 1, 222, 65, 68, 69, 59, 1, 8482, 4, 2, 72, 99, 5558, 5563, 99, 121, 59, 1, 1035, 121, 59, 1, 1062, 4, 2, 98, 117, 5573, 5576, 59, 1, 9, 59, 1, 932, 4, 3, 97, 101, 121, 5587, 5593, 5599, 114, 111, 110, 59, 1, 356, 100, 105, 108, 59, 1, 354, 59, 1, 1058, 114, 59, 3, 55349, 56599, 4, 2, 101, 105, 5613, 5631, 4, 2, 114, 116, 5619, 5627, 101, 102, 111, 114, 101, 59, 1, 8756, 97, 59, 1, 920, 4, 2, 99, 110, 5637, 5647, 107, 83, 112, 97, 99, 101, 59, 3, 8287, 8202, 83, 112, 97, 99, 101, 59, 1, 8201, 108, 100, 101, 4, 4, 59, 69, 70, 84, 5668, 5670, 5677, 5688, 1, 8764, 113, 117, 97, 108, 59, 1, 8771, 117, 108, 108, 69, 113, 117, 97, 108, 59, 1, 8773, 105, 108, 100, 101, 59, 1, 8776, 112, 102, 59, 3, 55349, 56651, 105, 112, 108, 101, 68, 111, 116, 59, 1, 8411, 4, 2, 99, 116, 5717, 5722, 114, 59, 3, 55349, 56495, 114, 111, 107, 59, 1, 358, 4, 14, 97, 98, 99, 100, 102, 103, 109, 110, 111, 112, 114, 115, 116, 117, 5758, 5789, 5805, 5823, 5830, 5835, 5846, 5852, 5921, 5937, 6089, 6095, 6101, 6108, 4, 2, 99, 114, 5764, 5774, 117, 116, 101, 5, 218, 1, 59, 5772, 1, 218, 114, 4, 2, 59, 111, 5781, 5783, 1, 8607, 99, 105, 114, 59, 1, 10569, 114, 4, 2, 99, 101, 5796, 5800, 121, 59, 1, 1038, 118, 101, 59, 1, 364, 4, 2, 105, 121, 5811, 5820, 114, 99, 5, 219, 1, 59, 5818, 1, 219, 59, 1, 1059, 98, 108, 97, 99, 59, 1, 368, 114, 59, 3, 55349, 56600, 114, 97, 118, 101, 5, 217, 1, 59, 5844, 1, 217, 97, 99, 114, 59, 1, 362, 4, 2, 100, 105, 5858, 5905, 101, 114, 4, 2, 66, 80, 5866, 5892, 4, 2, 97, 114, 5872, 5876, 114, 59, 1, 95, 97, 99, 4, 2, 101, 107, 5884, 5887, 59, 1, 9183, 101, 116, 59, 1, 9141, 97, 114, 101, 110, 116, 104, 101, 115, 105, 115, 59, 1, 9181, 111, 110, 4, 2, 59, 80, 5913, 5915, 1, 8899, 108, 117, 115, 59, 1, 8846, 4, 2, 103, 112, 5927, 5932, 111, 110, 59, 1, 370, 102, 59, 3, 55349, 56652, 4, 8, 65, 68, 69, 84, 97, 100, 112, 115, 5955, 5985, 5996, 6009, 6026, 6033, 6044, 6075, 114, 114, 111, 119, 4, 3, 59, 66, 68, 5967, 5969, 5974, 1, 8593, 97, 114, 59, 1, 10514, 111, 119, 110, 65, 114, 114, 111, 119, 59, 1, 8645, 111, 119, 110, 65, 114, 114, 111, 119, 59, 1, 8597, 113, 117, 105, 108, 105, 98, 114, 105, 117, 109, 59, 1, 10606, 101, 101, 4, 2, 59, 65, 6017, 6019, 1, 8869, 114, 114, 111, 119, 59, 1, 8613, 114, 114, 111, 119, 59, 1, 8657, 111, 119, 110, 97, 114, 114, 111, 119, 59, 1, 8661, 101, 114, 4, 2, 76, 82, 6052, 6063, 101, 102, 116, 65, 114, 114, 111, 119, 59, 1, 8598, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 8599, 105, 4, 2, 59, 108, 6082, 6084, 1, 978, 111, 110, 59, 1, 933, 105, 110, 103, 59, 1, 366, 99, 114, 59, 3, 55349, 56496, 105, 108, 100, 101, 59, 1, 360, 109, 108, 5, 220, 1, 59, 6115, 1, 220, 4, 9, 68, 98, 99, 100, 101, 102, 111, 115, 118, 6137, 6143, 6148, 6152, 6166, 6250, 6255, 6261, 6267, 97, 115, 104, 59, 1, 8875, 97, 114, 59, 1, 10987, 121, 59, 1, 1042, 97, 115, 104, 4, 2, 59, 108, 6161, 6163, 1, 8873, 59, 1, 10982, 4, 2, 101, 114, 6172, 6175, 59, 1, 8897, 4, 3, 98, 116, 121, 6183, 6188, 6238, 97, 114, 59, 1, 8214, 4, 2, 59, 105, 6194, 6196, 1, 8214, 99, 97, 108, 4, 4, 66, 76, 83, 84, 6209, 6214, 6220, 6231, 97, 114, 59, 1, 8739, 105, 110, 101, 59, 1, 124, 101, 112, 97, 114, 97, 116, 111, 114, 59, 1, 10072, 105, 108, 100, 101, 59, 1, 8768, 84, 104, 105, 110, 83, 112, 97, 99, 101, 59, 1, 8202, 114, 59, 3, 55349, 56601, 112, 102, 59, 3, 55349, 56653, 99, 114, 59, 3, 55349, 56497, 100, 97, 115, 104, 59, 1, 8874, 4, 5, 99, 101, 102, 111, 115, 6286, 6292, 6298, 6303, 6309, 105, 114, 99, 59, 1, 372, 100, 103, 101, 59, 1, 8896, 114, 59, 3, 55349, 56602, 112, 102, 59, 3, 55349, 56654, 99, 114, 59, 3, 55349, 56498, 4, 4, 102, 105, 111, 115, 6325, 6330, 6333, 6339, 114, 59, 3, 55349, 56603, 59, 1, 926, 112, 102, 59, 3, 55349, 56655, 99, 114, 59, 3, 55349, 56499, 4, 9, 65, 73, 85, 97, 99, 102, 111, 115, 117, 6365, 6370, 6375, 6380, 6391, 6405, 6410, 6416, 6422, 99, 121, 59, 1, 1071, 99, 121, 59, 1, 1031, 99, 121, 59, 1, 1070, 99, 117, 116, 101, 5, 221, 1, 59, 6389, 1, 221, 4, 2, 105, 121, 6397, 6402, 114, 99, 59, 1, 374, 59, 1, 1067, 114, 59, 3, 55349, 56604, 112, 102, 59, 3, 55349, 56656, 99, 114, 59, 3, 55349, 56500, 109, 108, 59, 1, 376, 4, 8, 72, 97, 99, 100, 101, 102, 111, 115, 6445, 6450, 6457, 6472, 6477, 6501, 6505, 6510, 99, 121, 59, 1, 1046, 99, 117, 116, 101, 59, 1, 377, 4, 2, 97, 121, 6463, 6469, 114, 111, 110, 59, 1, 381, 59, 1, 1047, 111, 116, 59, 1, 379, 4, 2, 114, 116, 6483, 6497, 111, 87, 105, 100, 116, 104, 83, 112, 97, 99, 101, 59, 1, 8203, 97, 59, 1, 918, 114, 59, 1, 8488, 112, 102, 59, 1, 8484, 99, 114, 59, 3, 55349, 56501, 4, 16, 97, 98, 99, 101, 102, 103, 108, 109, 110, 111, 112, 114, 115, 116, 117, 119, 6550, 6561, 6568, 6612, 6622, 6634, 6645, 6672, 6699, 6854, 6870, 6923, 6933, 6963, 6974, 6983, 99, 117, 116, 101, 5, 225, 1, 59, 6559, 1, 225, 114, 101, 118, 101, 59, 1, 259, 4, 6, 59, 69, 100, 105, 117, 121, 6582, 6584, 6588, 6591, 6600, 6609, 1, 8766, 59, 3, 8766, 819, 59, 1, 8767, 114, 99, 5, 226, 1, 59, 6598, 1, 226, 116, 101, 5, 180, 1, 59, 6607, 1, 180, 59, 1, 1072, 108, 105, 103, 5, 230, 1, 59, 6620, 1, 230, 4, 2, 59, 114, 6628, 6630, 1, 8289, 59, 3, 55349, 56606, 114, 97, 118, 101, 5, 224, 1, 59, 6643, 1, 224, 4, 2, 101, 112, 6651, 6667, 4, 2, 102, 112, 6657, 6663, 115, 121, 109, 59, 1, 8501, 104, 59, 1, 8501, 104, 97, 59, 1, 945, 4, 2, 97, 112, 6678, 6692, 4, 2, 99, 108, 6684, 6688, 114, 59, 1, 257, 103, 59, 1, 10815, 5, 38, 1, 59, 6697, 1, 38, 4, 2, 100, 103, 6705, 6737, 4, 5, 59, 97, 100, 115, 118, 6717, 6719, 6724, 6727, 6734, 1, 8743, 110, 100, 59, 1, 10837, 59, 1, 10844, 108, 111, 112, 101, 59, 1, 10840, 59, 1, 10842, 4, 7, 59, 101, 108, 109, 114, 115, 122, 6753, 6755, 6758, 6762, 6814, 6835, 6848, 1, 8736, 59, 1, 10660, 101, 59, 1, 8736, 115, 100, 4, 2, 59, 97, 6770, 6772, 1, 8737, 4, 8, 97, 98, 99, 100, 101, 102, 103, 104, 6790, 6793, 6796, 6799, 6802, 6805, 6808, 6811, 59, 1, 10664, 59, 1, 10665, 59, 1, 10666, 59, 1, 10667, 59, 1, 10668, 59, 1, 10669, 59, 1, 10670, 59, 1, 10671, 116, 4, 2, 59, 118, 6821, 6823, 1, 8735, 98, 4, 2, 59, 100, 6830, 6832, 1, 8894, 59, 1, 10653, 4, 2, 112, 116, 6841, 6845, 104, 59, 1, 8738, 59, 1, 197, 97, 114, 114, 59, 1, 9084, 4, 2, 103, 112, 6860, 6865, 111, 110, 59, 1, 261, 102, 59, 3, 55349, 56658, 4, 7, 59, 69, 97, 101, 105, 111, 112, 6886, 6888, 6891, 6897, 6900, 6904, 6908, 1, 8776, 59, 1, 10864, 99, 105, 114, 59, 1, 10863, 59, 1, 8778, 100, 59, 1, 8779, 115, 59, 1, 39, 114, 111, 120, 4, 2, 59, 101, 6917, 6919, 1, 8776, 113, 59, 1, 8778, 105, 110, 103, 5, 229, 1, 59, 6931, 1, 229, 4, 3, 99, 116, 121, 6941, 6946, 6949, 114, 59, 3, 55349, 56502, 59, 1, 42, 109, 112, 4, 2, 59, 101, 6957, 6959, 1, 8776, 113, 59, 1, 8781, 105, 108, 100, 101, 5, 227, 1, 59, 6972, 1, 227, 109, 108, 5, 228, 1, 59, 6981, 1, 228, 4, 2, 99, 105, 6989, 6997, 111, 110, 105, 110, 116, 59, 1, 8755, 110, 116, 59, 1, 10769, 4, 16, 78, 97, 98, 99, 100, 101, 102, 105, 107, 108, 110, 111, 112, 114, 115, 117, 7036, 7041, 7119, 7135, 7149, 7155, 7219, 7224, 7347, 7354, 7463, 7489, 7786, 7793, 7814, 7866, 111, 116, 59, 1, 10989, 4, 2, 99, 114, 7047, 7094, 107, 4, 4, 99, 101, 112, 115, 7058, 7064, 7073, 7080, 111, 110, 103, 59, 1, 8780, 112, 115, 105, 108, 111, 110, 59, 1, 1014, 114, 105, 109, 101, 59, 1, 8245, 105, 109, 4, 2, 59, 101, 7088, 7090, 1, 8765, 113, 59, 1, 8909, 4, 2, 118, 119, 7100, 7105, 101, 101, 59, 1, 8893, 101, 100, 4, 2, 59, 103, 7113, 7115, 1, 8965, 101, 59, 1, 8965, 114, 107, 4, 2, 59, 116, 7127, 7129, 1, 9141, 98, 114, 107, 59, 1, 9142, 4, 2, 111, 121, 7141, 7146, 110, 103, 59, 1, 8780, 59, 1, 1073, 113, 117, 111, 59, 1, 8222, 4, 5, 99, 109, 112, 114, 116, 7167, 7181, 7188, 7193, 7199, 97, 117, 115, 4, 2, 59, 101, 7176, 7178, 1, 8757, 59, 1, 8757, 112, 116, 121, 118, 59, 1, 10672, 115, 105, 59, 1, 1014, 110, 111, 117, 59, 1, 8492, 4, 3, 97, 104, 119, 7207, 7210, 7213, 59, 1, 946, 59, 1, 8502, 101, 101, 110, 59, 1, 8812, 114, 59, 3, 55349, 56607, 103, 4, 7, 99, 111, 115, 116, 117, 118, 119, 7241, 7262, 7288, 7305, 7328, 7335, 7340, 4, 3, 97, 105, 117, 7249, 7253, 7258, 112, 59, 1, 8898, 114, 99, 59, 1, 9711, 112, 59, 1, 8899, 4, 3, 100, 112, 116, 7270, 7275, 7281, 111, 116, 59, 1, 10752, 108, 117, 115, 59, 1, 10753, 105, 109, 101, 115, 59, 1, 10754, 4, 2, 113, 116, 7294, 7300, 99, 117, 112, 59, 1, 10758, 97, 114, 59, 1, 9733, 114, 105, 97, 110, 103, 108, 101, 4, 2, 100, 117, 7318, 7324, 111, 119, 110, 59, 1, 9661, 112, 59, 1, 9651, 112, 108, 117, 115, 59, 1, 10756, 101, 101, 59, 1, 8897, 101, 100, 103, 101, 59, 1, 8896, 97, 114, 111, 119, 59, 1, 10509, 4, 3, 97, 107, 111, 7362, 7436, 7458, 4, 2, 99, 110, 7368, 7432, 107, 4, 3, 108, 115, 116, 7377, 7386, 7394, 111, 122, 101, 110, 103, 101, 59, 1, 10731, 113, 117, 97, 114, 101, 59, 1, 9642, 114, 105, 97, 110, 103, 108, 101, 4, 4, 59, 100, 108, 114, 7411, 7413, 7419, 7425, 1, 9652, 111, 119, 110, 59, 1, 9662, 101, 102, 116, 59, 1, 9666, 105, 103, 104, 116, 59, 1, 9656, 107, 59, 1, 9251, 4, 2, 49, 51, 7442, 7454, 4, 2, 50, 52, 7448, 7451, 59, 1, 9618, 59, 1, 9617, 52, 59, 1, 9619, 99, 107, 59, 1, 9608, 4, 2, 101, 111, 7469, 7485, 4, 2, 59, 113, 7475, 7478, 3, 61, 8421, 117, 105, 118, 59, 3, 8801, 8421, 116, 59, 1, 8976, 4, 4, 112, 116, 119, 120, 7499, 7504, 7517, 7523, 102, 59, 3, 55349, 56659, 4, 2, 59, 116, 7510, 7512, 1, 8869, 111, 109, 59, 1, 8869, 116, 105, 101, 59, 1, 8904, 4, 12, 68, 72, 85, 86, 98, 100, 104, 109, 112, 116, 117, 118, 7549, 7571, 7597, 7619, 7655, 7660, 7682, 7708, 7715, 7721, 7728, 7750, 4, 4, 76, 82, 108, 114, 7559, 7562, 7565, 7568, 59, 1, 9559, 59, 1, 9556, 59, 1, 9558, 59, 1, 9555, 4, 5, 59, 68, 85, 100, 117, 7583, 7585, 7588, 7591, 7594, 1, 9552, 59, 1, 9574, 59, 1, 9577, 59, 1, 9572, 59, 1, 9575, 4, 4, 76, 82, 108, 114, 7607, 7610, 7613, 7616, 59, 1, 9565, 59, 1, 9562, 59, 1, 9564, 59, 1, 9561, 4, 7, 59, 72, 76, 82, 104, 108, 114, 7635, 7637, 7640, 7643, 7646, 7649, 7652, 1, 9553, 59, 1, 9580, 59, 1, 9571, 59, 1, 9568, 59, 1, 9579, 59, 1, 9570, 59, 1, 9567, 111, 120, 59, 1, 10697, 4, 4, 76, 82, 108, 114, 7670, 7673, 7676, 7679, 59, 1, 9557, 59, 1, 9554, 59, 1, 9488, 59, 1, 9484, 4, 5, 59, 68, 85, 100, 117, 7694, 7696, 7699, 7702, 7705, 1, 9472, 59, 1, 9573, 59, 1, 9576, 59, 1, 9516, 59, 1, 9524, 105, 110, 117, 115, 59, 1, 8863, 108, 117, 115, 59, 1, 8862, 105, 109, 101, 115, 59, 1, 8864, 4, 4, 76, 82, 108, 114, 7738, 7741, 7744, 7747, 59, 1, 9563, 59, 1, 9560, 59, 1, 9496, 59, 1, 9492, 4, 7, 59, 72, 76, 82, 104, 108, 114, 7766, 7768, 7771, 7774, 7777, 7780, 7783, 1, 9474, 59, 1, 9578, 59, 1, 9569, 59, 1, 9566, 59, 1, 9532, 59, 1, 9508, 59, 1, 9500, 114, 105, 109, 101, 59, 1, 8245, 4, 2, 101, 118, 7799, 7804, 118, 101, 59, 1, 728, 98, 97, 114, 5, 166, 1, 59, 7812, 1, 166, 4, 4, 99, 101, 105, 111, 7824, 7829, 7834, 7846, 114, 59, 3, 55349, 56503, 109, 105, 59, 1, 8271, 109, 4, 2, 59, 101, 7841, 7843, 1, 8765, 59, 1, 8909, 108, 4, 3, 59, 98, 104, 7855, 7857, 7860, 1, 92, 59, 1, 10693, 115, 117, 98, 59, 1, 10184, 4, 2, 108, 109, 7872, 7885, 108, 4, 2, 59, 101, 7879, 7881, 1, 8226, 116, 59, 1, 8226, 112, 4, 3, 59, 69, 101, 7894, 7896, 7899, 1, 8782, 59, 1, 10926, 4, 2, 59, 113, 7905, 7907, 1, 8783, 59, 1, 8783, 4, 15, 97, 99, 100, 101, 102, 104, 105, 108, 111, 114, 115, 116, 117, 119, 121, 7942, 8021, 8075, 8080, 8121, 8126, 8157, 8279, 8295, 8430, 8446, 8485, 8491, 8707, 8726, 4, 3, 99, 112, 114, 7950, 7956, 8007, 117, 116, 101, 59, 1, 263, 4, 6, 59, 97, 98, 99, 100, 115, 7970, 7972, 7977, 7984, 7998, 8003, 1, 8745, 110, 100, 59, 1, 10820, 114, 99, 117, 112, 59, 1, 10825, 4, 2, 97, 117, 7990, 7994, 112, 59, 1, 10827, 112, 59, 1, 10823, 111, 116, 59, 1, 10816, 59, 3, 8745, 65024, 4, 2, 101, 111, 8013, 8017, 116, 59, 1, 8257, 110, 59, 1, 711, 4, 4, 97, 101, 105, 117, 8031, 8046, 8056, 8061, 4, 2, 112, 114, 8037, 8041, 115, 59, 1, 10829, 111, 110, 59, 1, 269, 100, 105, 108, 5, 231, 1, 59, 8054, 1, 231, 114, 99, 59, 1, 265, 112, 115, 4, 2, 59, 115, 8069, 8071, 1, 10828, 109, 59, 1, 10832, 111, 116, 59, 1, 267, 4, 3, 100, 109, 110, 8088, 8097, 8104, 105, 108, 5, 184, 1, 59, 8095, 1, 184, 112, 116, 121, 118, 59, 1, 10674, 116, 5, 162, 2, 59, 101, 8112, 8114, 1, 162, 114, 100, 111, 116, 59, 1, 183, 114, 59, 3, 55349, 56608, 4, 3, 99, 101, 105, 8134, 8138, 8154, 121, 59, 1, 1095, 99, 107, 4, 2, 59, 109, 8146, 8148, 1, 10003, 97, 114, 107, 59, 1, 10003, 59, 1, 967, 114, 4, 7, 59, 69, 99, 101, 102, 109, 115, 8174, 8176, 8179, 8258, 8261, 8268, 8273, 1, 9675, 59, 1, 10691, 4, 3, 59, 101, 108, 8187, 8189, 8193, 1, 710, 113, 59, 1, 8791, 101, 4, 2, 97, 100, 8200, 8223, 114, 114, 111, 119, 4, 2, 108, 114, 8210, 8216, 101, 102, 116, 59, 1, 8634, 105, 103, 104, 116, 59, 1, 8635, 4, 5, 82, 83, 97, 99, 100, 8235, 8238, 8241, 8246, 8252, 59, 1, 174, 59, 1, 9416, 115, 116, 59, 1, 8859, 105, 114, 99, 59, 1, 8858, 97, 115, 104, 59, 1, 8861, 59, 1, 8791, 110, 105, 110, 116, 59, 1, 10768, 105, 100, 59, 1, 10991, 99, 105, 114, 59, 1, 10690, 117, 98, 115, 4, 2, 59, 117, 8288, 8290, 1, 9827, 105, 116, 59, 1, 9827, 4, 4, 108, 109, 110, 112, 8305, 8326, 8376, 8400, 111, 110, 4, 2, 59, 101, 8313, 8315, 1, 58, 4, 2, 59, 113, 8321, 8323, 1, 8788, 59, 1, 8788, 4, 2, 109, 112, 8332, 8344, 97, 4, 2, 59, 116, 8339, 8341, 1, 44, 59, 1, 64, 4, 3, 59, 102, 108, 8352, 8354, 8358, 1, 8705, 110, 59, 1, 8728, 101, 4, 2, 109, 120, 8365, 8371, 101, 110, 116, 59, 1, 8705, 101, 115, 59, 1, 8450, 4, 2, 103, 105, 8382, 8395, 4, 2, 59, 100, 8388, 8390, 1, 8773, 111, 116, 59, 1, 10861, 110, 116, 59, 1, 8750, 4, 3, 102, 114, 121, 8408, 8412, 8417, 59, 3, 55349, 56660, 111, 100, 59, 1, 8720, 5, 169, 2, 59, 115, 8424, 8426, 1, 169, 114, 59, 1, 8471, 4, 2, 97, 111, 8436, 8441, 114, 114, 59, 1, 8629, 115, 115, 59, 1, 10007, 4, 2, 99, 117, 8452, 8457, 114, 59, 3, 55349, 56504, 4, 2, 98, 112, 8463, 8474, 4, 2, 59, 101, 8469, 8471, 1, 10959, 59, 1, 10961, 4, 2, 59, 101, 8480, 8482, 1, 10960, 59, 1, 10962, 100, 111, 116, 59, 1, 8943, 4, 7, 100, 101, 108, 112, 114, 118, 119, 8507, 8522, 8536, 8550, 8600, 8697, 8702, 97, 114, 114, 4, 2, 108, 114, 8516, 8519, 59, 1, 10552, 59, 1, 10549, 4, 2, 112, 115, 8528, 8532, 114, 59, 1, 8926, 99, 59, 1, 8927, 97, 114, 114, 4, 2, 59, 112, 8545, 8547, 1, 8630, 59, 1, 10557, 4, 6, 59, 98, 99, 100, 111, 115, 8564, 8566, 8573, 8587, 8592, 8596, 1, 8746, 114, 99, 97, 112, 59, 1, 10824, 4, 2, 97, 117, 8579, 8583, 112, 59, 1, 10822, 112, 59, 1, 10826, 111, 116, 59, 1, 8845, 114, 59, 1, 10821, 59, 3, 8746, 65024, 4, 4, 97, 108, 114, 118, 8610, 8623, 8663, 8672, 114, 114, 4, 2, 59, 109, 8618, 8620, 1, 8631, 59, 1, 10556, 121, 4, 3, 101, 118, 119, 8632, 8651, 8656, 113, 4, 2, 112, 115, 8639, 8645, 114, 101, 99, 59, 1, 8926, 117, 99, 99, 59, 1, 8927, 101, 101, 59, 1, 8910, 101, 100, 103, 101, 59, 1, 8911, 101, 110, 5, 164, 1, 59, 8670, 1, 164, 101, 97, 114, 114, 111, 119, 4, 2, 108, 114, 8684, 8690, 101, 102, 116, 59, 1, 8630, 105, 103, 104, 116, 59, 1, 8631, 101, 101, 59, 1, 8910, 101, 100, 59, 1, 8911, 4, 2, 99, 105, 8713, 8721, 111, 110, 105, 110, 116, 59, 1, 8754, 110, 116, 59, 1, 8753, 108, 99, 116, 121, 59, 1, 9005, 4, 19, 65, 72, 97, 98, 99, 100, 101, 102, 104, 105, 106, 108, 111, 114, 115, 116, 117, 119, 122, 8773, 8778, 8783, 8821, 8839, 8854, 8887, 8914, 8930, 8944, 9036, 9041, 9058, 9197, 9227, 9258, 9281, 9297, 9305, 114, 114, 59, 1, 8659, 97, 114, 59, 1, 10597, 4, 4, 103, 108, 114, 115, 8793, 8799, 8805, 8809, 103, 101, 114, 59, 1, 8224, 101, 116, 104, 59, 1, 8504, 114, 59, 1, 8595, 104, 4, 2, 59, 118, 8816, 8818, 1, 8208, 59, 1, 8867, 4, 2, 107, 108, 8827, 8834, 97, 114, 111, 119, 59, 1, 10511, 97, 99, 59, 1, 733, 4, 2, 97, 121, 8845, 8851, 114, 111, 110, 59, 1, 271, 59, 1, 1076, 4, 3, 59, 97, 111, 8862, 8864, 8880, 1, 8518, 4, 2, 103, 114, 8870, 8876, 103, 101, 114, 59, 1, 8225, 114, 59, 1, 8650, 116, 115, 101, 113, 59, 1, 10871, 4, 3, 103, 108, 109, 8895, 8902, 8907, 5, 176, 1, 59, 8900, 1, 176, 116, 97, 59, 1, 948, 112, 116, 121, 118, 59, 1, 10673, 4, 2, 105, 114, 8920, 8926, 115, 104, 116, 59, 1, 10623, 59, 3, 55349, 56609, 97, 114, 4, 2, 108, 114, 8938, 8941, 59, 1, 8643, 59, 1, 8642, 4, 5, 97, 101, 103, 115, 118, 8956, 8986, 8989, 8996, 9001, 109, 4, 3, 59, 111, 115, 8965, 8967, 8983, 1, 8900, 110, 100, 4, 2, 59, 115, 8975, 8977, 1, 8900, 117, 105, 116, 59, 1, 9830, 59, 1, 9830, 59, 1, 168, 97, 109, 109, 97, 59, 1, 989, 105, 110, 59, 1, 8946, 4, 3, 59, 105, 111, 9009, 9011, 9031, 1, 247, 100, 101, 5, 247, 2, 59, 111, 9020, 9022, 1, 247, 110, 116, 105, 109, 101, 115, 59, 1, 8903, 110, 120, 59, 1, 8903, 99, 121, 59, 1, 1106, 99, 4, 2, 111, 114, 9048, 9053, 114, 110, 59, 1, 8990, 111, 112, 59, 1, 8973, 4, 5, 108, 112, 116, 117, 119, 9070, 9076, 9081, 9130, 9144, 108, 97, 114, 59, 1, 36, 102, 59, 3, 55349, 56661, 4, 5, 59, 101, 109, 112, 115, 9093, 9095, 9109, 9116, 9122, 1, 729, 113, 4, 2, 59, 100, 9102, 9104, 1, 8784, 111, 116, 59, 1, 8785, 105, 110, 117, 115, 59, 1, 8760, 108, 117, 115, 59, 1, 8724, 113, 117, 97, 114, 101, 59, 1, 8865, 98, 108, 101, 98, 97, 114, 119, 101, 100, 103, 101, 59, 1, 8966, 110, 4, 3, 97, 100, 104, 9153, 9160, 9172, 114, 114, 111, 119, 59, 1, 8595, 111, 119, 110, 97, 114, 114, 111, 119, 115, 59, 1, 8650, 97, 114, 112, 111, 111, 110, 4, 2, 108, 114, 9184, 9190, 101, 102, 116, 59, 1, 8643, 105, 103, 104, 116, 59, 1, 8642, 4, 2, 98, 99, 9203, 9211, 107, 97, 114, 111, 119, 59, 1, 10512, 4, 2, 111, 114, 9217, 9222, 114, 110, 59, 1, 8991, 111, 112, 59, 1, 8972, 4, 3, 99, 111, 116, 9235, 9248, 9252, 4, 2, 114, 121, 9241, 9245, 59, 3, 55349, 56505, 59, 1, 1109, 108, 59, 1, 10742, 114, 111, 107, 59, 1, 273, 4, 2, 100, 114, 9264, 9269, 111, 116, 59, 1, 8945, 105, 4, 2, 59, 102, 9276, 9278, 1, 9663, 59, 1, 9662, 4, 2, 97, 104, 9287, 9292, 114, 114, 59, 1, 8693, 97, 114, 59, 1, 10607, 97, 110, 103, 108, 101, 59, 1, 10662, 4, 2, 99, 105, 9311, 9315, 121, 59, 1, 1119, 103, 114, 97, 114, 114, 59, 1, 10239, 4, 18, 68, 97, 99, 100, 101, 102, 103, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 120, 9361, 9376, 9398, 9439, 9444, 9447, 9462, 9495, 9531, 9585, 9598, 9614, 9659, 9755, 9771, 9792, 9808, 9826, 4, 2, 68, 111, 9367, 9372, 111, 116, 59, 1, 10871, 116, 59, 1, 8785, 4, 2, 99, 115, 9382, 9392, 117, 116, 101, 5, 233, 1, 59, 9390, 1, 233, 116, 101, 114, 59, 1, 10862, 4, 4, 97, 105, 111, 121, 9408, 9414, 9430, 9436, 114, 111, 110, 59, 1, 283, 114, 4, 2, 59, 99, 9421, 9423, 1, 8790, 5, 234, 1, 59, 9428, 1, 234, 108, 111, 110, 59, 1, 8789, 59, 1, 1101, 111, 116, 59, 1, 279, 59, 1, 8519, 4, 2, 68, 114, 9453, 9458, 111, 116, 59, 1, 8786, 59, 3, 55349, 56610, 4, 3, 59, 114, 115, 9470, 9472, 9482, 1, 10906, 97, 118, 101, 5, 232, 1, 59, 9480, 1, 232, 4, 2, 59, 100, 9488, 9490, 1, 10902, 111, 116, 59, 1, 10904, 4, 4, 59, 105, 108, 115, 9505, 9507, 9515, 9518, 1, 10905, 110, 116, 101, 114, 115, 59, 1, 9191, 59, 1, 8467, 4, 2, 59, 100, 9524, 9526, 1, 10901, 111, 116, 59, 1, 10903, 4, 3, 97, 112, 115, 9539, 9544, 9564, 99, 114, 59, 1, 275, 116, 121, 4, 3, 59, 115, 118, 9554, 9556, 9561, 1, 8709, 101, 116, 59, 1, 8709, 59, 1, 8709, 112, 4, 2, 49, 59, 9571, 9583, 4, 2, 51, 52, 9577, 9580, 59, 1, 8196, 59, 1, 8197, 1, 8195, 4, 2, 103, 115, 9591, 9594, 59, 1, 331, 112, 59, 1, 8194, 4, 2, 103, 112, 9604, 9609, 111, 110, 59, 1, 281, 102, 59, 3, 55349, 56662, 4, 3, 97, 108, 115, 9622, 9635, 9640, 114, 4, 2, 59, 115, 9629, 9631, 1, 8917, 108, 59, 1, 10723, 117, 115, 59, 1, 10865, 105, 4, 3, 59, 108, 118, 9649, 9651, 9656, 1, 949, 111, 110, 59, 1, 949, 59, 1, 1013, 4, 4, 99, 115, 117, 118, 9669, 9686, 9716, 9747, 4, 2, 105, 111, 9675, 9680, 114, 99, 59, 1, 8790, 108, 111, 110, 59, 1, 8789, 4, 2, 105, 108, 9692, 9696, 109, 59, 1, 8770, 97, 110, 116, 4, 2, 103, 108, 9705, 9710, 116, 114, 59, 1, 10902, 101, 115, 115, 59, 1, 10901, 4, 3, 97, 101, 105, 9724, 9729, 9734, 108, 115, 59, 1, 61, 115, 116, 59, 1, 8799, 118, 4, 2, 59, 68, 9741, 9743, 1, 8801, 68, 59, 1, 10872, 112, 97, 114, 115, 108, 59, 1, 10725, 4, 2, 68, 97, 9761, 9766, 111, 116, 59, 1, 8787, 114, 114, 59, 1, 10609, 4, 3, 99, 100, 105, 9779, 9783, 9788, 114, 59, 1, 8495, 111, 116, 59, 1, 8784, 109, 59, 1, 8770, 4, 2, 97, 104, 9798, 9801, 59, 1, 951, 5, 240, 1, 59, 9806, 1, 240, 4, 2, 109, 114, 9814, 9822, 108, 5, 235, 1, 59, 9820, 1, 235, 111, 59, 1, 8364, 4, 3, 99, 105, 112, 9834, 9838, 9843, 108, 59, 1, 33, 115, 116, 59, 1, 8707, 4, 2, 101, 111, 9849, 9859, 99, 116, 97, 116, 105, 111, 110, 59, 1, 8496, 110, 101, 110, 116, 105, 97, 108, 101, 59, 1, 8519, 4, 12, 97, 99, 101, 102, 105, 106, 108, 110, 111, 112, 114, 115, 9896, 9910, 9914, 9921, 9954, 9960, 9967, 9989, 9994, 10027, 10036, 10164, 108, 108, 105, 110, 103, 100, 111, 116, 115, 101, 113, 59, 1, 8786, 121, 59, 1, 1092, 109, 97, 108, 101, 59, 1, 9792, 4, 3, 105, 108, 114, 9929, 9935, 9950, 108, 105, 103, 59, 1, 64259, 4, 2, 105, 108, 9941, 9945, 103, 59, 1, 64256, 105, 103, 59, 1, 64260, 59, 3, 55349, 56611, 108, 105, 103, 59, 1, 64257, 108, 105, 103, 59, 3, 102, 106, 4, 3, 97, 108, 116, 9975, 9979, 9984, 116, 59, 1, 9837, 105, 103, 59, 1, 64258, 110, 115, 59, 1, 9649, 111, 102, 59, 1, 402, 4, 2, 112, 114, 10000, 10005, 102, 59, 3, 55349, 56663, 4, 2, 97, 107, 10011, 10016, 108, 108, 59, 1, 8704, 4, 2, 59, 118, 10022, 10024, 1, 8916, 59, 1, 10969, 97, 114, 116, 105, 110, 116, 59, 1, 10765, 4, 2, 97, 111, 10042, 10159, 4, 2, 99, 115, 10048, 10155, 4, 6, 49, 50, 51, 52, 53, 55, 10062, 10102, 10114, 10135, 10139, 10151, 4, 6, 50, 51, 52, 53, 54, 56, 10076, 10083, 10086, 10093, 10096, 10099, 5, 189, 1, 59, 10081, 1, 189, 59, 1, 8531, 5, 188, 1, 59, 10091, 1, 188, 59, 1, 8533, 59, 1, 8537, 59, 1, 8539, 4, 2, 51, 53, 10108, 10111, 59, 1, 8532, 59, 1, 8534, 4, 3, 52, 53, 56, 10122, 10129, 10132, 5, 190, 1, 59, 10127, 1, 190, 59, 1, 8535, 59, 1, 8540, 53, 59, 1, 8536, 4, 2, 54, 56, 10145, 10148, 59, 1, 8538, 59, 1, 8541, 56, 59, 1, 8542, 108, 59, 1, 8260, 119, 110, 59, 1, 8994, 99, 114, 59, 3, 55349, 56507, 4, 17, 69, 97, 98, 99, 100, 101, 102, 103, 105, 106, 108, 110, 111, 114, 115, 116, 118, 10206, 10217, 10247, 10254, 10268, 10273, 10358, 10363, 10374, 10380, 10385, 10406, 10458, 10464, 10470, 10497, 10610, 4, 2, 59, 108, 10212, 10214, 1, 8807, 59, 1, 10892, 4, 3, 99, 109, 112, 10225, 10231, 10244, 117, 116, 101, 59, 1, 501, 109, 97, 4, 2, 59, 100, 10239, 10241, 1, 947, 59, 1, 989, 59, 1, 10886, 114, 101, 118, 101, 59, 1, 287, 4, 2, 105, 121, 10260, 10265, 114, 99, 59, 1, 285, 59, 1, 1075, 111, 116, 59, 1, 289, 4, 4, 59, 108, 113, 115, 10283, 10285, 10288, 10308, 1, 8805, 59, 1, 8923, 4, 3, 59, 113, 115, 10296, 10298, 10301, 1, 8805, 59, 1, 8807, 108, 97, 110, 116, 59, 1, 10878, 4, 4, 59, 99, 100, 108, 10318, 10320, 10324, 10345, 1, 10878, 99, 59, 1, 10921, 111, 116, 4, 2, 59, 111, 10332, 10334, 1, 10880, 4, 2, 59, 108, 10340, 10342, 1, 10882, 59, 1, 10884, 4, 2, 59, 101, 10351, 10354, 3, 8923, 65024, 115, 59, 1, 10900, 114, 59, 3, 55349, 56612, 4, 2, 59, 103, 10369, 10371, 1, 8811, 59, 1, 8921, 109, 101, 108, 59, 1, 8503, 99, 121, 59, 1, 1107, 4, 4, 59, 69, 97, 106, 10395, 10397, 10400, 10403, 1, 8823, 59, 1, 10898, 59, 1, 10917, 59, 1, 10916, 4, 4, 69, 97, 101, 115, 10416, 10419, 10434, 10453, 59, 1, 8809, 112, 4, 2, 59, 112, 10426, 10428, 1, 10890, 114, 111, 120, 59, 1, 10890, 4, 2, 59, 113, 10440, 10442, 1, 10888, 4, 2, 59, 113, 10448, 10450, 1, 10888, 59, 1, 8809, 105, 109, 59, 1, 8935, 112, 102, 59, 3, 55349, 56664, 97, 118, 101, 59, 1, 96, 4, 2, 99, 105, 10476, 10480, 114, 59, 1, 8458, 109, 4, 3, 59, 101, 108, 10489, 10491, 10494, 1, 8819, 59, 1, 10894, 59, 1, 10896, 5, 62, 6, 59, 99, 100, 108, 113, 114, 10512, 10514, 10527, 10532, 10538, 10545, 1, 62, 4, 2, 99, 105, 10520, 10523, 59, 1, 10919, 114, 59, 1, 10874, 111, 116, 59, 1, 8919, 80, 97, 114, 59, 1, 10645, 117, 101, 115, 116, 59, 1, 10876, 4, 5, 97, 100, 101, 108, 115, 10557, 10574, 10579, 10599, 10605, 4, 2, 112, 114, 10563, 10570, 112, 114, 111, 120, 59, 1, 10886, 114, 59, 1, 10616, 111, 116, 59, 1, 8919, 113, 4, 2, 108, 113, 10586, 10592, 101, 115, 115, 59, 1, 8923, 108, 101, 115, 115, 59, 1, 10892, 101, 115, 115, 59, 1, 8823, 105, 109, 59, 1, 8819, 4, 2, 101, 110, 10616, 10626, 114, 116, 110, 101, 113, 113, 59, 3, 8809, 65024, 69, 59, 3, 8809, 65024, 4, 10, 65, 97, 98, 99, 101, 102, 107, 111, 115, 121, 10653, 10658, 10713, 10718, 10724, 10760, 10765, 10786, 10850, 10875, 114, 114, 59, 1, 8660, 4, 4, 105, 108, 109, 114, 10668, 10674, 10678, 10684, 114, 115, 112, 59, 1, 8202, 102, 59, 1, 189, 105, 108, 116, 59, 1, 8459, 4, 2, 100, 114, 10690, 10695, 99, 121, 59, 1, 1098, 4, 3, 59, 99, 119, 10703, 10705, 10710, 1, 8596, 105, 114, 59, 1, 10568, 59, 1, 8621, 97, 114, 59, 1, 8463, 105, 114, 99, 59, 1, 293, 4, 3, 97, 108, 114, 10732, 10748, 10754, 114, 116, 115, 4, 2, 59, 117, 10741, 10743, 1, 9829, 105, 116, 59, 1, 9829, 108, 105, 112, 59, 1, 8230, 99, 111, 110, 59, 1, 8889, 114, 59, 3, 55349, 56613, 115, 4, 2, 101, 119, 10772, 10779, 97, 114, 111, 119, 59, 1, 10533, 97, 114, 111, 119, 59, 1, 10534, 4, 5, 97, 109, 111, 112, 114, 10798, 10803, 10809, 10839, 10844, 114, 114, 59, 1, 8703, 116, 104, 116, 59, 1, 8763, 107, 4, 2, 108, 114, 10816, 10827, 101, 102, 116, 97, 114, 114, 111, 119, 59, 1, 8617, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 8618, 102, 59, 3, 55349, 56665, 98, 97, 114, 59, 1, 8213, 4, 3, 99, 108, 116, 10858, 10863, 10869, 114, 59, 3, 55349, 56509, 97, 115, 104, 59, 1, 8463, 114, 111, 107, 59, 1, 295, 4, 2, 98, 112, 10881, 10887, 117, 108, 108, 59, 1, 8259, 104, 101, 110, 59, 1, 8208, 4, 15, 97, 99, 101, 102, 103, 105, 106, 109, 110, 111, 112, 113, 115, 116, 117, 10925, 10936, 10958, 10977, 10990, 11001, 11039, 11045, 11101, 11192, 11220, 11226, 11237, 11285, 11299, 99, 117, 116, 101, 5, 237, 1, 59, 10934, 1, 237, 4, 3, 59, 105, 121, 10944, 10946, 10955, 1, 8291, 114, 99, 5, 238, 1, 59, 10953, 1, 238, 59, 1, 1080, 4, 2, 99, 120, 10964, 10968, 121, 59, 1, 1077, 99, 108, 5, 161, 1, 59, 10975, 1, 161, 4, 2, 102, 114, 10983, 10986, 59, 1, 8660, 59, 3, 55349, 56614, 114, 97, 118, 101, 5, 236, 1, 59, 10999, 1, 236, 4, 4, 59, 105, 110, 111, 11011, 11013, 11028, 11034, 1, 8520, 4, 2, 105, 110, 11019, 11024, 110, 116, 59, 1, 10764, 116, 59, 1, 8749, 102, 105, 110, 59, 1, 10716, 116, 97, 59, 1, 8489, 108, 105, 103, 59, 1, 307, 4, 3, 97, 111, 112, 11053, 11092, 11096, 4, 3, 99, 103, 116, 11061, 11065, 11088, 114, 59, 1, 299, 4, 3, 101, 108, 112, 11073, 11076, 11082, 59, 1, 8465, 105, 110, 101, 59, 1, 8464, 97, 114, 116, 59, 1, 8465, 104, 59, 1, 305, 102, 59, 1, 8887, 101, 100, 59, 1, 437, 4, 5, 59, 99, 102, 111, 116, 11113, 11115, 11121, 11136, 11142, 1, 8712, 97, 114, 101, 59, 1, 8453, 105, 110, 4, 2, 59, 116, 11129, 11131, 1, 8734, 105, 101, 59, 1, 10717, 100, 111, 116, 59, 1, 305, 4, 5, 59, 99, 101, 108, 112, 11154, 11156, 11161, 11179, 11186, 1, 8747, 97, 108, 59, 1, 8890, 4, 2, 103, 114, 11167, 11173, 101, 114, 115, 59, 1, 8484, 99, 97, 108, 59, 1, 8890, 97, 114, 104, 107, 59, 1, 10775, 114, 111, 100, 59, 1, 10812, 4, 4, 99, 103, 112, 116, 11202, 11206, 11211, 11216, 121, 59, 1, 1105, 111, 110, 59, 1, 303, 102, 59, 3, 55349, 56666, 97, 59, 1, 953, 114, 111, 100, 59, 1, 10812, 117, 101, 115, 116, 5, 191, 1, 59, 11235, 1, 191, 4, 2, 99, 105, 11243, 11248, 114, 59, 3, 55349, 56510, 110, 4, 5, 59, 69, 100, 115, 118, 11261, 11263, 11266, 11271, 11282, 1, 8712, 59, 1, 8953, 111, 116, 59, 1, 8949, 4, 2, 59, 118, 11277, 11279, 1, 8948, 59, 1, 8947, 59, 1, 8712, 4, 2, 59, 105, 11291, 11293, 1, 8290, 108, 100, 101, 59, 1, 297, 4, 2, 107, 109, 11305, 11310, 99, 121, 59, 1, 1110, 108, 5, 239, 1, 59, 11316, 1, 239, 4, 6, 99, 102, 109, 111, 115, 117, 11332, 11346, 11351, 11357, 11363, 11380, 4, 2, 105, 121, 11338, 11343, 114, 99, 59, 1, 309, 59, 1, 1081, 114, 59, 3, 55349, 56615, 97, 116, 104, 59, 1, 567, 112, 102, 59, 3, 55349, 56667, 4, 2, 99, 101, 11369, 11374, 114, 59, 3, 55349, 56511, 114, 99, 121, 59, 1, 1112, 107, 99, 121, 59, 1, 1108, 4, 8, 97, 99, 102, 103, 104, 106, 111, 115, 11404, 11418, 11433, 11438, 11445, 11450, 11455, 11461, 112, 112, 97, 4, 2, 59, 118, 11413, 11415, 1, 954, 59, 1, 1008, 4, 2, 101, 121, 11424, 11430, 100, 105, 108, 59, 1, 311, 59, 1, 1082, 114, 59, 3, 55349, 56616, 114, 101, 101, 110, 59, 1, 312, 99, 121, 59, 1, 1093, 99, 121, 59, 1, 1116, 112, 102, 59, 3, 55349, 56668, 99, 114, 59, 3, 55349, 56512, 4, 23, 65, 66, 69, 72, 97, 98, 99, 100, 101, 102, 103, 104, 106, 108, 109, 110, 111, 112, 114, 115, 116, 117, 118, 11515, 11538, 11544, 11555, 11560, 11721, 11780, 11818, 11868, 12136, 12160, 12171, 12203, 12208, 12246, 12275, 12327, 12509, 12523, 12569, 12641, 12732, 12752, 4, 3, 97, 114, 116, 11523, 11528, 11532, 114, 114, 59, 1, 8666, 114, 59, 1, 8656, 97, 105, 108, 59, 1, 10523, 97, 114, 114, 59, 1, 10510, 4, 2, 59, 103, 11550, 11552, 1, 8806, 59, 1, 10891, 97, 114, 59, 1, 10594, 4, 9, 99, 101, 103, 109, 110, 112, 113, 114, 116, 11580, 11586, 11594, 11600, 11606, 11624, 11627, 11636, 11694, 117, 116, 101, 59, 1, 314, 109, 112, 116, 121, 118, 59, 1, 10676, 114, 97, 110, 59, 1, 8466, 98, 100, 97, 59, 1, 955, 103, 4, 3, 59, 100, 108, 11615, 11617, 11620, 1, 10216, 59, 1, 10641, 101, 59, 1, 10216, 59, 1, 10885, 117, 111, 5, 171, 1, 59, 11634, 1, 171, 114, 4, 8, 59, 98, 102, 104, 108, 112, 115, 116, 11655, 11657, 11669, 11673, 11677, 11681, 11685, 11690, 1, 8592, 4, 2, 59, 102, 11663, 11665, 1, 8676, 115, 59, 1, 10527, 115, 59, 1, 10525, 107, 59, 1, 8617, 112, 59, 1, 8619, 108, 59, 1, 10553, 105, 109, 59, 1, 10611, 108, 59, 1, 8610, 4, 3, 59, 97, 101, 11702, 11704, 11709, 1, 10923, 105, 108, 59, 1, 10521, 4, 2, 59, 115, 11715, 11717, 1, 10925, 59, 3, 10925, 65024, 4, 3, 97, 98, 114, 11729, 11734, 11739, 114, 114, 59, 1, 10508, 114, 107, 59, 1, 10098, 4, 2, 97, 107, 11745, 11758, 99, 4, 2, 101, 107, 11752, 11755, 59, 1, 123, 59, 1, 91, 4, 2, 101, 115, 11764, 11767, 59, 1, 10635, 108, 4, 2, 100, 117, 11774, 11777, 59, 1, 10639, 59, 1, 10637, 4, 4, 97, 101, 117, 121, 11790, 11796, 11811, 11815, 114, 111, 110, 59, 1, 318, 4, 2, 100, 105, 11802, 11807, 105, 108, 59, 1, 316, 108, 59, 1, 8968, 98, 59, 1, 123, 59, 1, 1083, 4, 4, 99, 113, 114, 115, 11828, 11832, 11845, 11864, 97, 59, 1, 10550, 117, 111, 4, 2, 59, 114, 11840, 11842, 1, 8220, 59, 1, 8222, 4, 2, 100, 117, 11851, 11857, 104, 97, 114, 59, 1, 10599, 115, 104, 97, 114, 59, 1, 10571, 104, 59, 1, 8626, 4, 5, 59, 102, 103, 113, 115, 11880, 11882, 12008, 12011, 12031, 1, 8804, 116, 4, 5, 97, 104, 108, 114, 116, 11895, 11913, 11935, 11947, 11996, 114, 114, 111, 119, 4, 2, 59, 116, 11905, 11907, 1, 8592, 97, 105, 108, 59, 1, 8610, 97, 114, 112, 111, 111, 110, 4, 2, 100, 117, 11925, 11931, 111, 119, 110, 59, 1, 8637, 112, 59, 1, 8636, 101, 102, 116, 97, 114, 114, 111, 119, 115, 59, 1, 8647, 105, 103, 104, 116, 4, 3, 97, 104, 115, 11959, 11974, 11984, 114, 114, 111, 119, 4, 2, 59, 115, 11969, 11971, 1, 8596, 59, 1, 8646, 97, 114, 112, 111, 111, 110, 115, 59, 1, 8651, 113, 117, 105, 103, 97, 114, 114, 111, 119, 59, 1, 8621, 104, 114, 101, 101, 116, 105, 109, 101, 115, 59, 1, 8907, 59, 1, 8922, 4, 3, 59, 113, 115, 12019, 12021, 12024, 1, 8804, 59, 1, 8806, 108, 97, 110, 116, 59, 1, 10877, 4, 5, 59, 99, 100, 103, 115, 12043, 12045, 12049, 12070, 12083, 1, 10877, 99, 59, 1, 10920, 111, 116, 4, 2, 59, 111, 12057, 12059, 1, 10879, 4, 2, 59, 114, 12065, 12067, 1, 10881, 59, 1, 10883, 4, 2, 59, 101, 12076, 12079, 3, 8922, 65024, 115, 59, 1, 10899, 4, 5, 97, 100, 101, 103, 115, 12095, 12103, 12108, 12126, 12131, 112, 112, 114, 111, 120, 59, 1, 10885, 111, 116, 59, 1, 8918, 113, 4, 2, 103, 113, 12115, 12120, 116, 114, 59, 1, 8922, 103, 116, 114, 59, 1, 10891, 116, 114, 59, 1, 8822, 105, 109, 59, 1, 8818, 4, 3, 105, 108, 114, 12144, 12150, 12156, 115, 104, 116, 59, 1, 10620, 111, 111, 114, 59, 1, 8970, 59, 3, 55349, 56617, 4, 2, 59, 69, 12166, 12168, 1, 8822, 59, 1, 10897, 4, 2, 97, 98, 12177, 12198, 114, 4, 2, 100, 117, 12184, 12187, 59, 1, 8637, 4, 2, 59, 108, 12193, 12195, 1, 8636, 59, 1, 10602, 108, 107, 59, 1, 9604, 99, 121, 59, 1, 1113, 4, 5, 59, 97, 99, 104, 116, 12220, 12222, 12227, 12235, 12241, 1, 8810, 114, 114, 59, 1, 8647, 111, 114, 110, 101, 114, 59, 1, 8990, 97, 114, 100, 59, 1, 10603, 114, 105, 59, 1, 9722, 4, 2, 105, 111, 12252, 12258, 100, 111, 116, 59, 1, 320, 117, 115, 116, 4, 2, 59, 97, 12267, 12269, 1, 9136, 99, 104, 101, 59, 1, 9136, 4, 4, 69, 97, 101, 115, 12285, 12288, 12303, 12322, 59, 1, 8808, 112, 4, 2, 59, 112, 12295, 12297, 1, 10889, 114, 111, 120, 59, 1, 10889, 4, 2, 59, 113, 12309, 12311, 1, 10887, 4, 2, 59, 113, 12317, 12319, 1, 10887, 59, 1, 8808, 105, 109, 59, 1, 8934, 4, 8, 97, 98, 110, 111, 112, 116, 119, 122, 12345, 12359, 12364, 12421, 12446, 12467, 12474, 12490, 4, 2, 110, 114, 12351, 12355, 103, 59, 1, 10220, 114, 59, 1, 8701, 114, 107, 59, 1, 10214, 103, 4, 3, 108, 109, 114, 12373, 12401, 12409, 101, 102, 116, 4, 2, 97, 114, 12382, 12389, 114, 114, 111, 119, 59, 1, 10229, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 10231, 97, 112, 115, 116, 111, 59, 1, 10236, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 10230, 112, 97, 114, 114, 111, 119, 4, 2, 108, 114, 12433, 12439, 101, 102, 116, 59, 1, 8619, 105, 103, 104, 116, 59, 1, 8620, 4, 3, 97, 102, 108, 12454, 12458, 12462, 114, 59, 1, 10629, 59, 3, 55349, 56669, 117, 115, 59, 1, 10797, 105, 109, 101, 115, 59, 1, 10804, 4, 2, 97, 98, 12480, 12485, 115, 116, 59, 1, 8727, 97, 114, 59, 1, 95, 4, 3, 59, 101, 102, 12498, 12500, 12506, 1, 9674, 110, 103, 101, 59, 1, 9674, 59, 1, 10731, 97, 114, 4, 2, 59, 108, 12517, 12519, 1, 40, 116, 59, 1, 10643, 4, 5, 97, 99, 104, 109, 116, 12535, 12540, 12548, 12561, 12564, 114, 114, 59, 1, 8646, 111, 114, 110, 101, 114, 59, 1, 8991, 97, 114, 4, 2, 59, 100, 12556, 12558, 1, 8651, 59, 1, 10605, 59, 1, 8206, 114, 105, 59, 1, 8895, 4, 6, 97, 99, 104, 105, 113, 116, 12583, 12589, 12594, 12597, 12614, 12635, 113, 117, 111, 59, 1, 8249, 114, 59, 3, 55349, 56513, 59, 1, 8624, 109, 4, 3, 59, 101, 103, 12606, 12608, 12611, 1, 8818, 59, 1, 10893, 59, 1, 10895, 4, 2, 98, 117, 12620, 12623, 59, 1, 91, 111, 4, 2, 59, 114, 12630, 12632, 1, 8216, 59, 1, 8218, 114, 111, 107, 59, 1, 322, 5, 60, 8, 59, 99, 100, 104, 105, 108, 113, 114, 12660, 12662, 12675, 12680, 12686, 12692, 12698, 12705, 1, 60, 4, 2, 99, 105, 12668, 12671, 59, 1, 10918, 114, 59, 1, 10873, 111, 116, 59, 1, 8918, 114, 101, 101, 59, 1, 8907, 109, 101, 115, 59, 1, 8905, 97, 114, 114, 59, 1, 10614, 117, 101, 115, 116, 59, 1, 10875, 4, 2, 80, 105, 12711, 12716, 97, 114, 59, 1, 10646, 4, 3, 59, 101, 102, 12724, 12726, 12729, 1, 9667, 59, 1, 8884, 59, 1, 9666, 114, 4, 2, 100, 117, 12739, 12746, 115, 104, 97, 114, 59, 1, 10570, 104, 97, 114, 59, 1, 10598, 4, 2, 101, 110, 12758, 12768, 114, 116, 110, 101, 113, 113, 59, 3, 8808, 65024, 69, 59, 3, 8808, 65024, 4, 14, 68, 97, 99, 100, 101, 102, 104, 105, 108, 110, 111, 112, 115, 117, 12803, 12809, 12893, 12908, 12914, 12928, 12933, 12937, 13011, 13025, 13032, 13049, 13052, 13069, 68, 111, 116, 59, 1, 8762, 4, 4, 99, 108, 112, 114, 12819, 12827, 12849, 12887, 114, 5, 175, 1, 59, 12825, 1, 175, 4, 2, 101, 116, 12833, 12836, 59, 1, 9794, 4, 2, 59, 101, 12842, 12844, 1, 10016, 115, 101, 59, 1, 10016, 4, 2, 59, 115, 12855, 12857, 1, 8614, 116, 111, 4, 4, 59, 100, 108, 117, 12869, 12871, 12877, 12883, 1, 8614, 111, 119, 110, 59, 1, 8615, 101, 102, 116, 59, 1, 8612, 112, 59, 1, 8613, 107, 101, 114, 59, 1, 9646, 4, 2, 111, 121, 12899, 12905, 109, 109, 97, 59, 1, 10793, 59, 1, 1084, 97, 115, 104, 59, 1, 8212, 97, 115, 117, 114, 101, 100, 97, 110, 103, 108, 101, 59, 1, 8737, 114, 59, 3, 55349, 56618, 111, 59, 1, 8487, 4, 3, 99, 100, 110, 12945, 12954, 12985, 114, 111, 5, 181, 1, 59, 12952, 1, 181, 4, 4, 59, 97, 99, 100, 12964, 12966, 12971, 12976, 1, 8739, 115, 116, 59, 1, 42, 105, 114, 59, 1, 10992, 111, 116, 5, 183, 1, 59, 12983, 1, 183, 117, 115, 4, 3, 59, 98, 100, 12995, 12997, 13000, 1, 8722, 59, 1, 8863, 4, 2, 59, 117, 13006, 13008, 1, 8760, 59, 1, 10794, 4, 2, 99, 100, 13017, 13021, 112, 59, 1, 10971, 114, 59, 1, 8230, 112, 108, 117, 115, 59, 1, 8723, 4, 2, 100, 112, 13038, 13044, 101, 108, 115, 59, 1, 8871, 102, 59, 3, 55349, 56670, 59, 1, 8723, 4, 2, 99, 116, 13058, 13063, 114, 59, 3, 55349, 56514, 112, 111, 115, 59, 1, 8766, 4, 3, 59, 108, 109, 13077, 13079, 13087, 1, 956, 116, 105, 109, 97, 112, 59, 1, 8888, 97, 112, 59, 1, 8888, 4, 24, 71, 76, 82, 86, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 108, 109, 111, 112, 114, 115, 116, 117, 118, 119, 13142, 13165, 13217, 13229, 13247, 13330, 13359, 13414, 13420, 13508, 13513, 13579, 13602, 13626, 13631, 13762, 13767, 13855, 13936, 13995, 14214, 14285, 14312, 14432, 4, 2, 103, 116, 13148, 13152, 59, 3, 8921, 824, 4, 2, 59, 118, 13158, 13161, 3, 8811, 8402, 59, 3, 8811, 824, 4, 3, 101, 108, 116, 13173, 13200, 13204, 102, 116, 4, 2, 97, 114, 13181, 13188, 114, 114, 111, 119, 59, 1, 8653, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 8654, 59, 3, 8920, 824, 4, 2, 59, 118, 13210, 13213, 3, 8810, 8402, 59, 3, 8810, 824, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 8655, 4, 2, 68, 100, 13235, 13241, 97, 115, 104, 59, 1, 8879, 97, 115, 104, 59, 1, 8878, 4, 5, 98, 99, 110, 112, 116, 13259, 13264, 13270, 13275, 13308, 108, 97, 59, 1, 8711, 117, 116, 101, 59, 1, 324, 103, 59, 3, 8736, 8402, 4, 5, 59, 69, 105, 111, 112, 13287, 13289, 13293, 13298, 13302, 1, 8777, 59, 3, 10864, 824, 100, 59, 3, 8779, 824, 115, 59, 1, 329, 114, 111, 120, 59, 1, 8777, 117, 114, 4, 2, 59, 97, 13316, 13318, 1, 9838, 108, 4, 2, 59, 115, 13325, 13327, 1, 9838, 59, 1, 8469, 4, 2, 115, 117, 13336, 13344, 112, 5, 160, 1, 59, 13342, 1, 160, 109, 112, 4, 2, 59, 101, 13352, 13355, 3, 8782, 824, 59, 3, 8783, 824, 4, 5, 97, 101, 111, 117, 121, 13371, 13385, 13391, 13407, 13411, 4, 2, 112, 114, 13377, 13380, 59, 1, 10819, 111, 110, 59, 1, 328, 100, 105, 108, 59, 1, 326, 110, 103, 4, 2, 59, 100, 13399, 13401, 1, 8775, 111, 116, 59, 3, 10861, 824, 112, 59, 1, 10818, 59, 1, 1085, 97, 115, 104, 59, 1, 8211, 4, 7, 59, 65, 97, 100, 113, 115, 120, 13436, 13438, 13443, 13466, 13472, 13478, 13494, 1, 8800, 114, 114, 59, 1, 8663, 114, 4, 2, 104, 114, 13450, 13454, 107, 59, 1, 10532, 4, 2, 59, 111, 13460, 13462, 1, 8599, 119, 59, 1, 8599, 111, 116, 59, 3, 8784, 824, 117, 105, 118, 59, 1, 8802, 4, 2, 101, 105, 13484, 13489, 97, 114, 59, 1, 10536, 109, 59, 3, 8770, 824, 105, 115, 116, 4, 2, 59, 115, 13503, 13505, 1, 8708, 59, 1, 8708, 114, 59, 3, 55349, 56619, 4, 4, 69, 101, 115, 116, 13523, 13527, 13563, 13568, 59, 3, 8807, 824, 4, 3, 59, 113, 115, 13535, 13537, 13559, 1, 8817, 4, 3, 59, 113, 115, 13545, 13547, 13551, 1, 8817, 59, 3, 8807, 824, 108, 97, 110, 116, 59, 3, 10878, 824, 59, 3, 10878, 824, 105, 109, 59, 1, 8821, 4, 2, 59, 114, 13574, 13576, 1, 8815, 59, 1, 8815, 4, 3, 65, 97, 112, 13587, 13592, 13597, 114, 114, 59, 1, 8654, 114, 114, 59, 1, 8622, 97, 114, 59, 1, 10994, 4, 3, 59, 115, 118, 13610, 13612, 13623, 1, 8715, 4, 2, 59, 100, 13618, 13620, 1, 8956, 59, 1, 8954, 59, 1, 8715, 99, 121, 59, 1, 1114, 4, 7, 65, 69, 97, 100, 101, 115, 116, 13647, 13652, 13656, 13661, 13665, 13737, 13742, 114, 114, 59, 1, 8653, 59, 3, 8806, 824, 114, 114, 59, 1, 8602, 114, 59, 1, 8229, 4, 4, 59, 102, 113, 115, 13675, 13677, 13703, 13725, 1, 8816, 116, 4, 2, 97, 114, 13684, 13691, 114, 114, 111, 119, 59, 1, 8602, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 8622, 4, 3, 59, 113, 115, 13711, 13713, 13717, 1, 8816, 59, 3, 8806, 824, 108, 97, 110, 116, 59, 3, 10877, 824, 4, 2, 59, 115, 13731, 13734, 3, 10877, 824, 59, 1, 8814, 105, 109, 59, 1, 8820, 4, 2, 59, 114, 13748, 13750, 1, 8814, 105, 4, 2, 59, 101, 13757, 13759, 1, 8938, 59, 1, 8940, 105, 100, 59, 1, 8740, 4, 2, 112, 116, 13773, 13778, 102, 59, 3, 55349, 56671, 5, 172, 3, 59, 105, 110, 13787, 13789, 13829, 1, 172, 110, 4, 4, 59, 69, 100, 118, 13800, 13802, 13806, 13812, 1, 8713, 59, 3, 8953, 824, 111, 116, 59, 3, 8949, 824, 4, 3, 97, 98, 99, 13820, 13823, 13826, 59, 1, 8713, 59, 1, 8951, 59, 1, 8950, 105, 4, 2, 59, 118, 13836, 13838, 1, 8716, 4, 3, 97, 98, 99, 13846, 13849, 13852, 59, 1, 8716, 59, 1, 8958, 59, 1, 8957, 4, 3, 97, 111, 114, 13863, 13892, 13899, 114, 4, 4, 59, 97, 115, 116, 13874, 13876, 13883, 13888, 1, 8742, 108, 108, 101, 108, 59, 1, 8742, 108, 59, 3, 11005, 8421, 59, 3, 8706, 824, 108, 105, 110, 116, 59, 1, 10772, 4, 3, 59, 99, 101, 13907, 13909, 13914, 1, 8832, 117, 101, 59, 1, 8928, 4, 2, 59, 99, 13920, 13923, 3, 10927, 824, 4, 2, 59, 101, 13929, 13931, 1, 8832, 113, 59, 3, 10927, 824, 4, 4, 65, 97, 105, 116, 13946, 13951, 13971, 13982, 114, 114, 59, 1, 8655, 114, 114, 4, 3, 59, 99, 119, 13961, 13963, 13967, 1, 8603, 59, 3, 10547, 824, 59, 3, 8605, 824, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 8603, 114, 105, 4, 2, 59, 101, 13990, 13992, 1, 8939, 59, 1, 8941, 4, 7, 99, 104, 105, 109, 112, 113, 117, 14011, 14036, 14060, 14080, 14085, 14090, 14106, 4, 4, 59, 99, 101, 114, 14021, 14023, 14028, 14032, 1, 8833, 117, 101, 59, 1, 8929, 59, 3, 10928, 824, 59, 3, 55349, 56515, 111, 114, 116, 4, 2, 109, 112, 14045, 14050, 105, 100, 59, 1, 8740, 97, 114, 97, 108, 108, 101, 108, 59, 1, 8742, 109, 4, 2, 59, 101, 14067, 14069, 1, 8769, 4, 2, 59, 113, 14075, 14077, 1, 8772, 59, 1, 8772, 105, 100, 59, 1, 8740, 97, 114, 59, 1, 8742, 115, 117, 4, 2, 98, 112, 14098, 14102, 101, 59, 1, 8930, 101, 59, 1, 8931, 4, 3, 98, 99, 112, 14114, 14157, 14171, 4, 4, 59, 69, 101, 115, 14124, 14126, 14130, 14133, 1, 8836, 59, 3, 10949, 824, 59, 1, 8840, 101, 116, 4, 2, 59, 101, 14141, 14144, 3, 8834, 8402, 113, 4, 2, 59, 113, 14151, 14153, 1, 8840, 59, 3, 10949, 824, 99, 4, 2, 59, 101, 14164, 14166, 1, 8833, 113, 59, 3, 10928, 824, 4, 4, 59, 69, 101, 115, 14181, 14183, 14187, 14190, 1, 8837, 59, 3, 10950, 824, 59, 1, 8841, 101, 116, 4, 2, 59, 101, 14198, 14201, 3, 8835, 8402, 113, 4, 2, 59, 113, 14208, 14210, 1, 8841, 59, 3, 10950, 824, 4, 4, 103, 105, 108, 114, 14224, 14228, 14238, 14242, 108, 59, 1, 8825, 108, 100, 101, 5, 241, 1, 59, 14236, 1, 241, 103, 59, 1, 8824, 105, 97, 110, 103, 108, 101, 4, 2, 108, 114, 14254, 14269, 101, 102, 116, 4, 2, 59, 101, 14263, 14265, 1, 8938, 113, 59, 1, 8940, 105, 103, 104, 116, 4, 2, 59, 101, 14279, 14281, 1, 8939, 113, 59, 1, 8941, 4, 2, 59, 109, 14291, 14293, 1, 957, 4, 3, 59, 101, 115, 14301, 14303, 14308, 1, 35, 114, 111, 59, 1, 8470, 112, 59, 1, 8199, 4, 9, 68, 72, 97, 100, 103, 105, 108, 114, 115, 14332, 14338, 14344, 14349, 14355, 14369, 14376, 14408, 14426, 97, 115, 104, 59, 1, 8877, 97, 114, 114, 59, 1, 10500, 112, 59, 3, 8781, 8402, 97, 115, 104, 59, 1, 8876, 4, 2, 101, 116, 14361, 14365, 59, 3, 8805, 8402, 59, 3, 62, 8402, 110, 102, 105, 110, 59, 1, 10718, 4, 3, 65, 101, 116, 14384, 14389, 14393, 114, 114, 59, 1, 10498, 59, 3, 8804, 8402, 4, 2, 59, 114, 14399, 14402, 3, 60, 8402, 105, 101, 59, 3, 8884, 8402, 4, 2, 65, 116, 14414, 14419, 114, 114, 59, 1, 10499, 114, 105, 101, 59, 3, 8885, 8402, 105, 109, 59, 3, 8764, 8402, 4, 3, 65, 97, 110, 14440, 14445, 14468, 114, 114, 59, 1, 8662, 114, 4, 2, 104, 114, 14452, 14456, 107, 59, 1, 10531, 4, 2, 59, 111, 14462, 14464, 1, 8598, 119, 59, 1, 8598, 101, 97, 114, 59, 1, 10535, 4, 18, 83, 97, 99, 100, 101, 102, 103, 104, 105, 108, 109, 111, 112, 114, 115, 116, 117, 118, 14512, 14515, 14535, 14560, 14597, 14603, 14618, 14643, 14657, 14662, 14701, 14741, 14747, 14769, 14851, 14877, 14907, 14916, 59, 1, 9416, 4, 2, 99, 115, 14521, 14531, 117, 116, 101, 5, 243, 1, 59, 14529, 1, 243, 116, 59, 1, 8859, 4, 2, 105, 121, 14541, 14557, 114, 4, 2, 59, 99, 14548, 14550, 1, 8858, 5, 244, 1, 59, 14555, 1, 244, 59, 1, 1086, 4, 5, 97, 98, 105, 111, 115, 14572, 14577, 14583, 14587, 14591, 115, 104, 59, 1, 8861, 108, 97, 99, 59, 1, 337, 118, 59, 1, 10808, 116, 59, 1, 8857, 111, 108, 100, 59, 1, 10684, 108, 105, 103, 59, 1, 339, 4, 2, 99, 114, 14609, 14614, 105, 114, 59, 1, 10687, 59, 3, 55349, 56620, 4, 3, 111, 114, 116, 14626, 14630, 14640, 110, 59, 1, 731, 97, 118, 101, 5, 242, 1, 59, 14638, 1, 242, 59, 1, 10689, 4, 2, 98, 109, 14649, 14654, 97, 114, 59, 1, 10677, 59, 1, 937, 110, 116, 59, 1, 8750, 4, 4, 97, 99, 105, 116, 14672, 14677, 14693, 14698, 114, 114, 59, 1, 8634, 4, 2, 105, 114, 14683, 14687, 114, 59, 1, 10686, 111, 115, 115, 59, 1, 10683, 110, 101, 59, 1, 8254, 59, 1, 10688, 4, 3, 97, 101, 105, 14709, 14714, 14719, 99, 114, 59, 1, 333, 103, 97, 59, 1, 969, 4, 3, 99, 100, 110, 14727, 14733, 14736, 114, 111, 110, 59, 1, 959, 59, 1, 10678, 117, 115, 59, 1, 8854, 112, 102, 59, 3, 55349, 56672, 4, 3, 97, 101, 108, 14755, 14759, 14764, 114, 59, 1, 10679, 114, 112, 59, 1, 10681, 117, 115, 59, 1, 8853, 4, 7, 59, 97, 100, 105, 111, 115, 118, 14785, 14787, 14792, 14831, 14837, 14841, 14848, 1, 8744, 114, 114, 59, 1, 8635, 4, 4, 59, 101, 102, 109, 14802, 14804, 14817, 14824, 1, 10845, 114, 4, 2, 59, 111, 14811, 14813, 1, 8500, 102, 59, 1, 8500, 5, 170, 1, 59, 14822, 1, 170, 5, 186, 1, 59, 14829, 1, 186, 103, 111, 102, 59, 1, 8886, 114, 59, 1, 10838, 108, 111, 112, 101, 59, 1, 10839, 59, 1, 10843, 4, 3, 99, 108, 111, 14859, 14863, 14873, 114, 59, 1, 8500, 97, 115, 104, 5, 248, 1, 59, 14871, 1, 248, 108, 59, 1, 8856, 105, 4, 2, 108, 109, 14884, 14893, 100, 101, 5, 245, 1, 59, 14891, 1, 245, 101, 115, 4, 2, 59, 97, 14901, 14903, 1, 8855, 115, 59, 1, 10806, 109, 108, 5, 246, 1, 59, 14914, 1, 246, 98, 97, 114, 59, 1, 9021, 4, 12, 97, 99, 101, 102, 104, 105, 108, 109, 111, 114, 115, 117, 14948, 14992, 14996, 15033, 15038, 15068, 15090, 15189, 15192, 15222, 15427, 15441, 114, 4, 4, 59, 97, 115, 116, 14959, 14961, 14976, 14989, 1, 8741, 5, 182, 2, 59, 108, 14968, 14970, 1, 182, 108, 101, 108, 59, 1, 8741, 4, 2, 105, 108, 14982, 14986, 109, 59, 1, 10995, 59, 1, 11005, 59, 1, 8706, 121, 59, 1, 1087, 114, 4, 5, 99, 105, 109, 112, 116, 15009, 15014, 15019, 15024, 15027, 110, 116, 59, 1, 37, 111, 100, 59, 1, 46, 105, 108, 59, 1, 8240, 59, 1, 8869, 101, 110, 107, 59, 1, 8241, 114, 59, 3, 55349, 56621, 4, 3, 105, 109, 111, 15046, 15057, 15063, 4, 2, 59, 118, 15052, 15054, 1, 966, 59, 1, 981, 109, 97, 116, 59, 1, 8499, 110, 101, 59, 1, 9742, 4, 3, 59, 116, 118, 15076, 15078, 15087, 1, 960, 99, 104, 102, 111, 114, 107, 59, 1, 8916, 59, 1, 982, 4, 2, 97, 117, 15096, 15119, 110, 4, 2, 99, 107, 15103, 15115, 107, 4, 2, 59, 104, 15110, 15112, 1, 8463, 59, 1, 8462, 118, 59, 1, 8463, 115, 4, 9, 59, 97, 98, 99, 100, 101, 109, 115, 116, 15140, 15142, 15148, 15151, 15156, 15168, 15171, 15179, 15184, 1, 43, 99, 105, 114, 59, 1, 10787, 59, 1, 8862, 105, 114, 59, 1, 10786, 4, 2, 111, 117, 15162, 15165, 59, 1, 8724, 59, 1, 10789, 59, 1, 10866, 110, 5, 177, 1, 59, 15177, 1, 177, 105, 109, 59, 1, 10790, 119, 111, 59, 1, 10791, 59, 1, 177, 4, 3, 105, 112, 117, 15200, 15208, 15213, 110, 116, 105, 110, 116, 59, 1, 10773, 102, 59, 3, 55349, 56673, 110, 100, 5, 163, 1, 59, 15220, 1, 163, 4, 10, 59, 69, 97, 99, 101, 105, 110, 111, 115, 117, 15244, 15246, 15249, 15253, 15258, 15334, 15347, 15367, 15416, 15421, 1, 8826, 59, 1, 10931, 112, 59, 1, 10935, 117, 101, 59, 1, 8828, 4, 2, 59, 99, 15264, 15266, 1, 10927, 4, 6, 59, 97, 99, 101, 110, 115, 15280, 15282, 15290, 15299, 15303, 15329, 1, 8826, 112, 112, 114, 111, 120, 59, 1, 10935, 117, 114, 108, 121, 101, 113, 59, 1, 8828, 113, 59, 1, 10927, 4, 3, 97, 101, 115, 15311, 15319, 15324, 112, 112, 114, 111, 120, 59, 1, 10937, 113, 113, 59, 1, 10933, 105, 109, 59, 1, 8936, 105, 109, 59, 1, 8830, 109, 101, 4, 2, 59, 115, 15342, 15344, 1, 8242, 59, 1, 8473, 4, 3, 69, 97, 115, 15355, 15358, 15362, 59, 1, 10933, 112, 59, 1, 10937, 105, 109, 59, 1, 8936, 4, 3, 100, 102, 112, 15375, 15378, 15404, 59, 1, 8719, 4, 3, 97, 108, 115, 15386, 15392, 15398, 108, 97, 114, 59, 1, 9006, 105, 110, 101, 59, 1, 8978, 117, 114, 102, 59, 1, 8979, 4, 2, 59, 116, 15410, 15412, 1, 8733, 111, 59, 1, 8733, 105, 109, 59, 1, 8830, 114, 101, 108, 59, 1, 8880, 4, 2, 99, 105, 15433, 15438, 114, 59, 3, 55349, 56517, 59, 1, 968, 110, 99, 115, 112, 59, 1, 8200, 4, 6, 102, 105, 111, 112, 115, 117, 15462, 15467, 15472, 15478, 15485, 15491, 114, 59, 3, 55349, 56622, 110, 116, 59, 1, 10764, 112, 102, 59, 3, 55349, 56674, 114, 105, 109, 101, 59, 1, 8279, 99, 114, 59, 3, 55349, 56518, 4, 3, 97, 101, 111, 15499, 15520, 15534, 116, 4, 2, 101, 105, 15506, 15515, 114, 110, 105, 111, 110, 115, 59, 1, 8461, 110, 116, 59, 1, 10774, 115, 116, 4, 2, 59, 101, 15528, 15530, 1, 63, 113, 59, 1, 8799, 116, 5, 34, 1, 59, 15540, 1, 34, 4, 21, 65, 66, 72, 97, 98, 99, 100, 101, 102, 104, 105, 108, 109, 110, 111, 112, 114, 115, 116, 117, 120, 15586, 15609, 15615, 15620, 15796, 15855, 15893, 15931, 15977, 16001, 16039, 16183, 16204, 16222, 16228, 16285, 16312, 16318, 16363, 16408, 16416, 4, 3, 97, 114, 116, 15594, 15599, 15603, 114, 114, 59, 1, 8667, 114, 59, 1, 8658, 97, 105, 108, 59, 1, 10524, 97, 114, 114, 59, 1, 10511, 97, 114, 59, 1, 10596, 4, 7, 99, 100, 101, 110, 113, 114, 116, 15636, 15651, 15656, 15664, 15687, 15696, 15770, 4, 2, 101, 117, 15642, 15646, 59, 3, 8765, 817, 116, 101, 59, 1, 341, 105, 99, 59, 1, 8730, 109, 112, 116, 121, 118, 59, 1, 10675, 103, 4, 4, 59, 100, 101, 108, 15675, 15677, 15680, 15683, 1, 10217, 59, 1, 10642, 59, 1, 10661, 101, 59, 1, 10217, 117, 111, 5, 187, 1, 59, 15694, 1, 187, 114, 4, 11, 59, 97, 98, 99, 102, 104, 108, 112, 115, 116, 119, 15721, 15723, 15727, 15739, 15742, 15746, 15750, 15754, 15758, 15763, 15767, 1, 8594, 112, 59, 1, 10613, 4, 2, 59, 102, 15733, 15735, 1, 8677, 115, 59, 1, 10528, 59, 1, 10547, 115, 59, 1, 10526, 107, 59, 1, 8618, 112, 59, 1, 8620, 108, 59, 1, 10565, 105, 109, 59, 1, 10612, 108, 59, 1, 8611, 59, 1, 8605, 4, 2, 97, 105, 15776, 15781, 105, 108, 59, 1, 10522, 111, 4, 2, 59, 110, 15788, 15790, 1, 8758, 97, 108, 115, 59, 1, 8474, 4, 3, 97, 98, 114, 15804, 15809, 15814, 114, 114, 59, 1, 10509, 114, 107, 59, 1, 10099, 4, 2, 97, 107, 15820, 15833, 99, 4, 2, 101, 107, 15827, 15830, 59, 1, 125, 59, 1, 93, 4, 2, 101, 115, 15839, 15842, 59, 1, 10636, 108, 4, 2, 100, 117, 15849, 15852, 59, 1, 10638, 59, 1, 10640, 4, 4, 97, 101, 117, 121, 15865, 15871, 15886, 15890, 114, 111, 110, 59, 1, 345, 4, 2, 100, 105, 15877, 15882, 105, 108, 59, 1, 343, 108, 59, 1, 8969, 98, 59, 1, 125, 59, 1, 1088, 4, 4, 99, 108, 113, 115, 15903, 15907, 15914, 15927, 97, 59, 1, 10551, 100, 104, 97, 114, 59, 1, 10601, 117, 111, 4, 2, 59, 114, 15922, 15924, 1, 8221, 59, 1, 8221, 104, 59, 1, 8627, 4, 3, 97, 99, 103, 15939, 15966, 15970, 108, 4, 4, 59, 105, 112, 115, 15950, 15952, 15957, 15963, 1, 8476, 110, 101, 59, 1, 8475, 97, 114, 116, 59, 1, 8476, 59, 1, 8477, 116, 59, 1, 9645, 5, 174, 1, 59, 15975, 1, 174, 4, 3, 105, 108, 114, 15985, 15991, 15997, 115, 104, 116, 59, 1, 10621, 111, 111, 114, 59, 1, 8971, 59, 3, 55349, 56623, 4, 2, 97, 111, 16007, 16028, 114, 4, 2, 100, 117, 16014, 16017, 59, 1, 8641, 4, 2, 59, 108, 16023, 16025, 1, 8640, 59, 1, 10604, 4, 2, 59, 118, 16034, 16036, 1, 961, 59, 1, 1009, 4, 3, 103, 110, 115, 16047, 16167, 16171, 104, 116, 4, 6, 97, 104, 108, 114, 115, 116, 16063, 16081, 16103, 16130, 16143, 16155, 114, 114, 111, 119, 4, 2, 59, 116, 16073, 16075, 1, 8594, 97, 105, 108, 59, 1, 8611, 97, 114, 112, 111, 111, 110, 4, 2, 100, 117, 16093, 16099, 111, 119, 110, 59, 1, 8641, 112, 59, 1, 8640, 101, 102, 116, 4, 2, 97, 104, 16112, 16120, 114, 114, 111, 119, 115, 59, 1, 8644, 97, 114, 112, 111, 111, 110, 115, 59, 1, 8652, 105, 103, 104, 116, 97, 114, 114, 111, 119, 115, 59, 1, 8649, 113, 117, 105, 103, 97, 114, 114, 111, 119, 59, 1, 8605, 104, 114, 101, 101, 116, 105, 109, 101, 115, 59, 1, 8908, 103, 59, 1, 730, 105, 110, 103, 100, 111, 116, 115, 101, 113, 59, 1, 8787, 4, 3, 97, 104, 109, 16191, 16196, 16201, 114, 114, 59, 1, 8644, 97, 114, 59, 1, 8652, 59, 1, 8207, 111, 117, 115, 116, 4, 2, 59, 97, 16214, 16216, 1, 9137, 99, 104, 101, 59, 1, 9137, 109, 105, 100, 59, 1, 10990, 4, 4, 97, 98, 112, 116, 16238, 16252, 16257, 16278, 4, 2, 110, 114, 16244, 16248, 103, 59, 1, 10221, 114, 59, 1, 8702, 114, 107, 59, 1, 10215, 4, 3, 97, 102, 108, 16265, 16269, 16273, 114, 59, 1, 10630, 59, 3, 55349, 56675, 117, 115, 59, 1, 10798, 105, 109, 101, 115, 59, 1, 10805, 4, 2, 97, 112, 16291, 16304, 114, 4, 2, 59, 103, 16298, 16300, 1, 41, 116, 59, 1, 10644, 111, 108, 105, 110, 116, 59, 1, 10770, 97, 114, 114, 59, 1, 8649, 4, 4, 97, 99, 104, 113, 16328, 16334, 16339, 16342, 113, 117, 111, 59, 1, 8250, 114, 59, 3, 55349, 56519, 59, 1, 8625, 4, 2, 98, 117, 16348, 16351, 59, 1, 93, 111, 4, 2, 59, 114, 16358, 16360, 1, 8217, 59, 1, 8217, 4, 3, 104, 105, 114, 16371, 16377, 16383, 114, 101, 101, 59, 1, 8908, 109, 101, 115, 59, 1, 8906, 105, 4, 4, 59, 101, 102, 108, 16394, 16396, 16399, 16402, 1, 9657, 59, 1, 8885, 59, 1, 9656, 116, 114, 105, 59, 1, 10702, 108, 117, 104, 97, 114, 59, 1, 10600, 59, 1, 8478, 4, 19, 97, 98, 99, 100, 101, 102, 104, 105, 108, 109, 111, 112, 113, 114, 115, 116, 117, 119, 122, 16459, 16466, 16472, 16572, 16590, 16672, 16687, 16746, 16844, 16850, 16924, 16963, 16988, 17115, 17121, 17154, 17206, 17614, 17656, 99, 117, 116, 101, 59, 1, 347, 113, 117, 111, 59, 1, 8218, 4, 10, 59, 69, 97, 99, 101, 105, 110, 112, 115, 121, 16494, 16496, 16499, 16513, 16518, 16531, 16536, 16556, 16564, 16569, 1, 8827, 59, 1, 10932, 4, 2, 112, 114, 16505, 16508, 59, 1, 10936, 111, 110, 59, 1, 353, 117, 101, 59, 1, 8829, 4, 2, 59, 100, 16524, 16526, 1, 10928, 105, 108, 59, 1, 351, 114, 99, 59, 1, 349, 4, 3, 69, 97, 115, 16544, 16547, 16551, 59, 1, 10934, 112, 59, 1, 10938, 105, 109, 59, 1, 8937, 111, 108, 105, 110, 116, 59, 1, 10771, 105, 109, 59, 1, 8831, 59, 1, 1089, 111, 116, 4, 3, 59, 98, 101, 16582, 16584, 16587, 1, 8901, 59, 1, 8865, 59, 1, 10854, 4, 7, 65, 97, 99, 109, 115, 116, 120, 16606, 16611, 16634, 16642, 16646, 16652, 16668, 114, 114, 59, 1, 8664, 114, 4, 2, 104, 114, 16618, 16622, 107, 59, 1, 10533, 4, 2, 59, 111, 16628, 16630, 1, 8600, 119, 59, 1, 8600, 116, 5, 167, 1, 59, 16640, 1, 167, 105, 59, 1, 59, 119, 97, 114, 59, 1, 10537, 109, 4, 2, 105, 110, 16659, 16665, 110, 117, 115, 59, 1, 8726, 59, 1, 8726, 116, 59, 1, 10038, 114, 4, 2, 59, 111, 16679, 16682, 3, 55349, 56624, 119, 110, 59, 1, 8994, 4, 4, 97, 99, 111, 121, 16697, 16702, 16716, 16739, 114, 112, 59, 1, 9839, 4, 2, 104, 121, 16708, 16713, 99, 121, 59, 1, 1097, 59, 1, 1096, 114, 116, 4, 2, 109, 112, 16724, 16729, 105, 100, 59, 1, 8739, 97, 114, 97, 108, 108, 101, 108, 59, 1, 8741, 5, 173, 1, 59, 16744, 1, 173, 4, 2, 103, 109, 16752, 16770, 109, 97, 4, 3, 59, 102, 118, 16762, 16764, 16767, 1, 963, 59, 1, 962, 59, 1, 962, 4, 8, 59, 100, 101, 103, 108, 110, 112, 114, 16788, 16790, 16795, 16806, 16817, 16828, 16832, 16838, 1, 8764, 111, 116, 59, 1, 10858, 4, 2, 59, 113, 16801, 16803, 1, 8771, 59, 1, 8771, 4, 2, 59, 69, 16812, 16814, 1, 10910, 59, 1, 10912, 4, 2, 59, 69, 16823, 16825, 1, 10909, 59, 1, 10911, 101, 59, 1, 8774, 108, 117, 115, 59, 1, 10788, 97, 114, 114, 59, 1, 10610, 97, 114, 114, 59, 1, 8592, 4, 4, 97, 101, 105, 116, 16860, 16883, 16891, 16904, 4, 2, 108, 115, 16866, 16878, 108, 115, 101, 116, 109, 105, 110, 117, 115, 59, 1, 8726, 104, 112, 59, 1, 10803, 112, 97, 114, 115, 108, 59, 1, 10724, 4, 2, 100, 108, 16897, 16900, 59, 1, 8739, 101, 59, 1, 8995, 4, 2, 59, 101, 16910, 16912, 1, 10922, 4, 2, 59, 115, 16918, 16920, 1, 10924, 59, 3, 10924, 65024, 4, 3, 102, 108, 112, 16932, 16938, 16958, 116, 99, 121, 59, 1, 1100, 4, 2, 59, 98, 16944, 16946, 1, 47, 4, 2, 59, 97, 16952, 16954, 1, 10692, 114, 59, 1, 9023, 102, 59, 3, 55349, 56676, 97, 4, 2, 100, 114, 16970, 16985, 101, 115, 4, 2, 59, 117, 16978, 16980, 1, 9824, 105, 116, 59, 1, 9824, 59, 1, 8741, 4, 3, 99, 115, 117, 16996, 17028, 17089, 4, 2, 97, 117, 17002, 17015, 112, 4, 2, 59, 115, 17009, 17011, 1, 8851, 59, 3, 8851, 65024, 112, 4, 2, 59, 115, 17022, 17024, 1, 8852, 59, 3, 8852, 65024, 117, 4, 2, 98, 112, 17035, 17062, 4, 3, 59, 101, 115, 17043, 17045, 17048, 1, 8847, 59, 1, 8849, 101, 116, 4, 2, 59, 101, 17056, 17058, 1, 8847, 113, 59, 1, 8849, 4, 3, 59, 101, 115, 17070, 17072, 17075, 1, 8848, 59, 1, 8850, 101, 116, 4, 2, 59, 101, 17083, 17085, 1, 8848, 113, 59, 1, 8850, 4, 3, 59, 97, 102, 17097, 17099, 17112, 1, 9633, 114, 4, 2, 101, 102, 17106, 17109, 59, 1, 9633, 59, 1, 9642, 59, 1, 9642, 97, 114, 114, 59, 1, 8594, 4, 4, 99, 101, 109, 116, 17131, 17136, 17142, 17148, 114, 59, 3, 55349, 56520, 116, 109, 110, 59, 1, 8726, 105, 108, 101, 59, 1, 8995, 97, 114, 102, 59, 1, 8902, 4, 2, 97, 114, 17160, 17172, 114, 4, 2, 59, 102, 17167, 17169, 1, 9734, 59, 1, 9733, 4, 2, 97, 110, 17178, 17202, 105, 103, 104, 116, 4, 2, 101, 112, 17188, 17197, 112, 115, 105, 108, 111, 110, 59, 1, 1013, 104, 105, 59, 1, 981, 115, 59, 1, 175, 4, 5, 98, 99, 109, 110, 112, 17218, 17351, 17420, 17423, 17427, 4, 9, 59, 69, 100, 101, 109, 110, 112, 114, 115, 17238, 17240, 17243, 17248, 17261, 17267, 17279, 17285, 17291, 1, 8834, 59, 1, 10949, 111, 116, 59, 1, 10941, 4, 2, 59, 100, 17254, 17256, 1, 8838, 111, 116, 59, 1, 10947, 117, 108, 116, 59, 1, 10945, 4, 2, 69, 101, 17273, 17276, 59, 1, 10955, 59, 1, 8842, 108, 117, 115, 59, 1, 10943, 97, 114, 114, 59, 1, 10617, 4, 3, 101, 105, 117, 17299, 17335, 17339, 116, 4, 3, 59, 101, 110, 17308, 17310, 17322, 1, 8834, 113, 4, 2, 59, 113, 17317, 17319, 1, 8838, 59, 1, 10949, 101, 113, 4, 2, 59, 113, 17330, 17332, 1, 8842, 59, 1, 10955, 109, 59, 1, 10951, 4, 2, 98, 112, 17345, 17348, 59, 1, 10965, 59, 1, 10963, 99, 4, 6, 59, 97, 99, 101, 110, 115, 17366, 17368, 17376, 17385, 17389, 17415, 1, 8827, 112, 112, 114, 111, 120, 59, 1, 10936, 117, 114, 108, 121, 101, 113, 59, 1, 8829, 113, 59, 1, 10928, 4, 3, 97, 101, 115, 17397, 17405, 17410, 112, 112, 114, 111, 120, 59, 1, 10938, 113, 113, 59, 1, 10934, 105, 109, 59, 1, 8937, 105, 109, 59, 1, 8831, 59, 1, 8721, 103, 59, 1, 9834, 4, 13, 49, 50, 51, 59, 69, 100, 101, 104, 108, 109, 110, 112, 115, 17455, 17462, 17469, 17476, 17478, 17481, 17496, 17509, 17524, 17530, 17536, 17548, 17554, 5, 185, 1, 59, 17460, 1, 185, 5, 178, 1, 59, 17467, 1, 178, 5, 179, 1, 59, 17474, 1, 179, 1, 8835, 59, 1, 10950, 4, 2, 111, 115, 17487, 17491, 116, 59, 1, 10942, 117, 98, 59, 1, 10968, 4, 2, 59, 100, 17502, 17504, 1, 8839, 111, 116, 59, 1, 10948, 115, 4, 2, 111, 117, 17516, 17520, 108, 59, 1, 10185, 98, 59, 1, 10967, 97, 114, 114, 59, 1, 10619, 117, 108, 116, 59, 1, 10946, 4, 2, 69, 101, 17542, 17545, 59, 1, 10956, 59, 1, 8843, 108, 117, 115, 59, 1, 10944, 4, 3, 101, 105, 117, 17562, 17598, 17602, 116, 4, 3, 59, 101, 110, 17571, 17573, 17585, 1, 8835, 113, 4, 2, 59, 113, 17580, 17582, 1, 8839, 59, 1, 10950, 101, 113, 4, 2, 59, 113, 17593, 17595, 1, 8843, 59, 1, 10956, 109, 59, 1, 10952, 4, 2, 98, 112, 17608, 17611, 59, 1, 10964, 59, 1, 10966, 4, 3, 65, 97, 110, 17622, 17627, 17650, 114, 114, 59, 1, 8665, 114, 4, 2, 104, 114, 17634, 17638, 107, 59, 1, 10534, 4, 2, 59, 111, 17644, 17646, 1, 8601, 119, 59, 1, 8601, 119, 97, 114, 59, 1, 10538, 108, 105, 103, 5, 223, 1, 59, 17664, 1, 223, 4, 13, 97, 98, 99, 100, 101, 102, 104, 105, 111, 112, 114, 115, 119, 17694, 17709, 17714, 17737, 17742, 17749, 17754, 17860, 17905, 17957, 17964, 18090, 18122, 4, 2, 114, 117, 17700, 17706, 103, 101, 116, 59, 1, 8982, 59, 1, 964, 114, 107, 59, 1, 9140, 4, 3, 97, 101, 121, 17722, 17728, 17734, 114, 111, 110, 59, 1, 357, 100, 105, 108, 59, 1, 355, 59, 1, 1090, 111, 116, 59, 1, 8411, 108, 114, 101, 99, 59, 1, 8981, 114, 59, 3, 55349, 56625, 4, 4, 101, 105, 107, 111, 17764, 17805, 17836, 17851, 4, 2, 114, 116, 17770, 17786, 101, 4, 2, 52, 102, 17777, 17780, 59, 1, 8756, 111, 114, 101, 59, 1, 8756, 97, 4, 3, 59, 115, 118, 17795, 17797, 17802, 1, 952, 121, 109, 59, 1, 977, 59, 1, 977, 4, 2, 99, 110, 17811, 17831, 107, 4, 2, 97, 115, 17818, 17826, 112, 112, 114, 111, 120, 59, 1, 8776, 105, 109, 59, 1, 8764, 115, 112, 59, 1, 8201, 4, 2, 97, 115, 17842, 17846, 112, 59, 1, 8776, 105, 109, 59, 1, 8764, 114, 110, 5, 254, 1, 59, 17858, 1, 254, 4, 3, 108, 109, 110, 17868, 17873, 17901, 100, 101, 59, 1, 732, 101, 115, 5, 215, 3, 59, 98, 100, 17884, 17886, 17898, 1, 215, 4, 2, 59, 97, 17892, 17894, 1, 8864, 114, 59, 1, 10801, 59, 1, 10800, 116, 59, 1, 8749, 4, 3, 101, 112, 115, 17913, 17917, 17953, 97, 59, 1, 10536, 4, 4, 59, 98, 99, 102, 17927, 17929, 17934, 17939, 1, 8868, 111, 116, 59, 1, 9014, 105, 114, 59, 1, 10993, 4, 2, 59, 111, 17945, 17948, 3, 55349, 56677, 114, 107, 59, 1, 10970, 97, 59, 1, 10537, 114, 105, 109, 101, 59, 1, 8244, 4, 3, 97, 105, 112, 17972, 17977, 18082, 100, 101, 59, 1, 8482, 4, 7, 97, 100, 101, 109, 112, 115, 116, 17993, 18051, 18056, 18059, 18066, 18072, 18076, 110, 103, 108, 101, 4, 5, 59, 100, 108, 113, 114, 18009, 18011, 18017, 18032, 18035, 1, 9653, 111, 119, 110, 59, 1, 9663, 101, 102, 116, 4, 2, 59, 101, 18026, 18028, 1, 9667, 113, 59, 1, 8884, 59, 1, 8796, 105, 103, 104, 116, 4, 2, 59, 101, 18045, 18047, 1, 9657, 113, 59, 1, 8885, 111, 116, 59, 1, 9708, 59, 1, 8796, 105, 110, 117, 115, 59, 1, 10810, 108, 117, 115, 59, 1, 10809, 98, 59, 1, 10701, 105, 109, 101, 59, 1, 10811, 101, 122, 105, 117, 109, 59, 1, 9186, 4, 3, 99, 104, 116, 18098, 18111, 18116, 4, 2, 114, 121, 18104, 18108, 59, 3, 55349, 56521, 59, 1, 1094, 99, 121, 59, 1, 1115, 114, 111, 107, 59, 1, 359, 4, 2, 105, 111, 18128, 18133, 120, 116, 59, 1, 8812, 104, 101, 97, 100, 4, 2, 108, 114, 18143, 18154, 101, 102, 116, 97, 114, 114, 111, 119, 59, 1, 8606, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 8608, 4, 18, 65, 72, 97, 98, 99, 100, 102, 103, 104, 108, 109, 111, 112, 114, 115, 116, 117, 119, 18204, 18209, 18214, 18234, 18250, 18268, 18292, 18308, 18319, 18343, 18379, 18397, 18413, 18504, 18547, 18553, 18584, 18603, 114, 114, 59, 1, 8657, 97, 114, 59, 1, 10595, 4, 2, 99, 114, 18220, 18230, 117, 116, 101, 5, 250, 1, 59, 18228, 1, 250, 114, 59, 1, 8593, 114, 4, 2, 99, 101, 18241, 18245, 121, 59, 1, 1118, 118, 101, 59, 1, 365, 4, 2, 105, 121, 18256, 18265, 114, 99, 5, 251, 1, 59, 18263, 1, 251, 59, 1, 1091, 4, 3, 97, 98, 104, 18276, 18281, 18287, 114, 114, 59, 1, 8645, 108, 97, 99, 59, 1, 369, 97, 114, 59, 1, 10606, 4, 2, 105, 114, 18298, 18304, 115, 104, 116, 59, 1, 10622, 59, 3, 55349, 56626, 114, 97, 118, 101, 5, 249, 1, 59, 18317, 1, 249, 4, 2, 97, 98, 18325, 18338, 114, 4, 2, 108, 114, 18332, 18335, 59, 1, 8639, 59, 1, 8638, 108, 107, 59, 1, 9600, 4, 2, 99, 116, 18349, 18374, 4, 2, 111, 114, 18355, 18369, 114, 110, 4, 2, 59, 101, 18363, 18365, 1, 8988, 114, 59, 1, 8988, 111, 112, 59, 1, 8975, 114, 105, 59, 1, 9720, 4, 2, 97, 108, 18385, 18390, 99, 114, 59, 1, 363, 5, 168, 1, 59, 18395, 1, 168, 4, 2, 103, 112, 18403, 18408, 111, 110, 59, 1, 371, 102, 59, 3, 55349, 56678, 4, 6, 97, 100, 104, 108, 115, 117, 18427, 18434, 18445, 18470, 18475, 18494, 114, 114, 111, 119, 59, 1, 8593, 111, 119, 110, 97, 114, 114, 111, 119, 59, 1, 8597, 97, 114, 112, 111, 111, 110, 4, 2, 108, 114, 18457, 18463, 101, 102, 116, 59, 1, 8639, 105, 103, 104, 116, 59, 1, 8638, 117, 115, 59, 1, 8846, 105, 4, 3, 59, 104, 108, 18484, 18486, 18489, 1, 965, 59, 1, 978, 111, 110, 59, 1, 965, 112, 97, 114, 114, 111, 119, 115, 59, 1, 8648, 4, 3, 99, 105, 116, 18512, 18537, 18542, 4, 2, 111, 114, 18518, 18532, 114, 110, 4, 2, 59, 101, 18526, 18528, 1, 8989, 114, 59, 1, 8989, 111, 112, 59, 1, 8974, 110, 103, 59, 1, 367, 114, 105, 59, 1, 9721, 99, 114, 59, 3, 55349, 56522, 4, 3, 100, 105, 114, 18561, 18566, 18572, 111, 116, 59, 1, 8944, 108, 100, 101, 59, 1, 361, 105, 4, 2, 59, 102, 18579, 18581, 1, 9653, 59, 1, 9652, 4, 2, 97, 109, 18590, 18595, 114, 114, 59, 1, 8648, 108, 5, 252, 1, 59, 18601, 1, 252, 97, 110, 103, 108, 101, 59, 1, 10663, 4, 15, 65, 66, 68, 97, 99, 100, 101, 102, 108, 110, 111, 112, 114, 115, 122, 18643, 18648, 18661, 18667, 18847, 18851, 18857, 18904, 18909, 18915, 18931, 18937, 18943, 18949, 18996, 114, 114, 59, 1, 8661, 97, 114, 4, 2, 59, 118, 18656, 18658, 1, 10984, 59, 1, 10985, 97, 115, 104, 59, 1, 8872, 4, 2, 110, 114, 18673, 18679, 103, 114, 116, 59, 1, 10652, 4, 7, 101, 107, 110, 112, 114, 115, 116, 18695, 18704, 18711, 18720, 18742, 18754, 18810, 112, 115, 105, 108, 111, 110, 59, 1, 1013, 97, 112, 112, 97, 59, 1, 1008, 111, 116, 104, 105, 110, 103, 59, 1, 8709, 4, 3, 104, 105, 114, 18728, 18732, 18735, 105, 59, 1, 981, 59, 1, 982, 111, 112, 116, 111, 59, 1, 8733, 4, 2, 59, 104, 18748, 18750, 1, 8597, 111, 59, 1, 1009, 4, 2, 105, 117, 18760, 18766, 103, 109, 97, 59, 1, 962, 4, 2, 98, 112, 18772, 18791, 115, 101, 116, 110, 101, 113, 4, 2, 59, 113, 18784, 18787, 3, 8842, 65024, 59, 3, 10955, 65024, 115, 101, 116, 110, 101, 113, 4, 2, 59, 113, 18803, 18806, 3, 8843, 65024, 59, 3, 10956, 65024, 4, 2, 104, 114, 18816, 18822, 101, 116, 97, 59, 1, 977, 105, 97, 110, 103, 108, 101, 4, 2, 108, 114, 18834, 18840, 101, 102, 116, 59, 1, 8882, 105, 103, 104, 116, 59, 1, 8883, 121, 59, 1, 1074, 97, 115, 104, 59, 1, 8866, 4, 3, 101, 108, 114, 18865, 18884, 18890, 4, 3, 59, 98, 101, 18873, 18875, 18880, 1, 8744, 97, 114, 59, 1, 8891, 113, 59, 1, 8794, 108, 105, 112, 59, 1, 8942, 4, 2, 98, 116, 18896, 18901, 97, 114, 59, 1, 124, 59, 1, 124, 114, 59, 3, 55349, 56627, 116, 114, 105, 59, 1, 8882, 115, 117, 4, 2, 98, 112, 18923, 18927, 59, 3, 8834, 8402, 59, 3, 8835, 8402, 112, 102, 59, 3, 55349, 56679, 114, 111, 112, 59, 1, 8733, 116, 114, 105, 59, 1, 8883, 4, 2, 99, 117, 18955, 18960, 114, 59, 3, 55349, 56523, 4, 2, 98, 112, 18966, 18981, 110, 4, 2, 69, 101, 18973, 18977, 59, 3, 10955, 65024, 59, 3, 8842, 65024, 110, 4, 2, 69, 101, 18988, 18992, 59, 3, 10956, 65024, 59, 3, 8843, 65024, 105, 103, 122, 97, 103, 59, 1, 10650, 4, 7, 99, 101, 102, 111, 112, 114, 115, 19020, 19026, 19061, 19066, 19072, 19075, 19089, 105, 114, 99, 59, 1, 373, 4, 2, 100, 105, 19032, 19055, 4, 2, 98, 103, 19038, 19043, 97, 114, 59, 1, 10847, 101, 4, 2, 59, 113, 19050, 19052, 1, 8743, 59, 1, 8793, 101, 114, 112, 59, 1, 8472, 114, 59, 3, 55349, 56628, 112, 102, 59, 3, 55349, 56680, 59, 1, 8472, 4, 2, 59, 101, 19081, 19083, 1, 8768, 97, 116, 104, 59, 1, 8768, 99, 114, 59, 3, 55349, 56524, 4, 14, 99, 100, 102, 104, 105, 108, 109, 110, 111, 114, 115, 117, 118, 119, 19125, 19146, 19152, 19157, 19173, 19176, 19192, 19197, 19202, 19236, 19252, 19269, 19286, 19291, 4, 3, 97, 105, 117, 19133, 19137, 19142, 112, 59, 1, 8898, 114, 99, 59, 1, 9711, 112, 59, 1, 8899, 116, 114, 105, 59, 1, 9661, 114, 59, 3, 55349, 56629, 4, 2, 65, 97, 19163, 19168, 114, 114, 59, 1, 10234, 114, 114, 59, 1, 10231, 59, 1, 958, 4, 2, 65, 97, 19182, 19187, 114, 114, 59, 1, 10232, 114, 114, 59, 1, 10229, 97, 112, 59, 1, 10236, 105, 115, 59, 1, 8955, 4, 3, 100, 112, 116, 19210, 19215, 19230, 111, 116, 59, 1, 10752, 4, 2, 102, 108, 19221, 19225, 59, 3, 55349, 56681, 117, 115, 59, 1, 10753, 105, 109, 101, 59, 1, 10754, 4, 2, 65, 97, 19242, 19247, 114, 114, 59, 1, 10233, 114, 114, 59, 1, 10230, 4, 2, 99, 113, 19258, 19263, 114, 59, 3, 55349, 56525, 99, 117, 112, 59, 1, 10758, 4, 2, 112, 116, 19275, 19281, 108, 117, 115, 59, 1, 10756, 114, 105, 59, 1, 9651, 101, 101, 59, 1, 8897, 101, 100, 103, 101, 59, 1, 8896, 4, 8, 97, 99, 101, 102, 105, 111, 115, 117, 19316, 19335, 19349, 19357, 19362, 19367, 19373, 19379, 99, 4, 2, 117, 121, 19323, 19332, 116, 101, 5, 253, 1, 59, 19330, 1, 253, 59, 1, 1103, 4, 2, 105, 121, 19341, 19346, 114, 99, 59, 1, 375, 59, 1, 1099, 110, 5, 165, 1, 59, 19355, 1, 165, 114, 59, 3, 55349, 56630, 99, 121, 59, 1, 1111, 112, 102, 59, 3, 55349, 56682, 99, 114, 59, 3, 55349, 56526, 4, 2, 99, 109, 19385, 19389, 121, 59, 1, 1102, 108, 5, 255, 1, 59, 19395, 1, 255, 4, 10, 97, 99, 100, 101, 102, 104, 105, 111, 115, 119, 19419, 19426, 19441, 19446, 19462, 19467, 19472, 19480, 19486, 19492, 99, 117, 116, 101, 59, 1, 378, 4, 2, 97, 121, 19432, 19438, 114, 111, 110, 59, 1, 382, 59, 1, 1079, 111, 116, 59, 1, 380, 4, 2, 101, 116, 19452, 19458, 116, 114, 102, 59, 1, 8488, 97, 59, 1, 950, 114, 59, 3, 55349, 56631, 99, 121, 59, 1, 1078, 103, 114, 97, 114, 114, 59, 1, 8669, 112, 102, 59, 3, 55349, 56683, 99, 114, 59, 3, 55349, 56527, 4, 2, 106, 110, 19498, 19501, 59, 1, 8205, 106, 59, 1, 8204]);

var Preprocessor = preprocessor;
var unicode$1 = unicode$3;
var neTree = namedEntityData;
var ERR$1 = errorCodes; //Aliases

var $$6 = unicode$1.CODE_POINTS;
var $$ = unicode$1.CODE_POINT_SEQUENCES; //C1 Unicode control character reference replacements

var C1_CONTROLS_REFERENCE_REPLACEMENTS = {
  0x80: 0x20ac,
  0x82: 0x201a,
  0x83: 0x0192,
  0x84: 0x201e,
  0x85: 0x2026,
  0x86: 0x2020,
  0x87: 0x2021,
  0x88: 0x02c6,
  0x89: 0x2030,
  0x8a: 0x0160,
  0x8b: 0x2039,
  0x8c: 0x0152,
  0x8e: 0x017d,
  0x91: 0x2018,
  0x92: 0x2019,
  0x93: 0x201c,
  0x94: 0x201d,
  0x95: 0x2022,
  0x96: 0x2013,
  0x97: 0x2014,
  0x98: 0x02dc,
  0x99: 0x2122,
  0x9a: 0x0161,
  0x9b: 0x203a,
  0x9c: 0x0153,
  0x9e: 0x017e,
  0x9f: 0x0178
}; // Named entity tree flags

var HAS_DATA_FLAG = 1 << 0;
var DATA_DUPLET_FLAG = 1 << 1;
var HAS_BRANCHES_FLAG = 1 << 2;
var MAX_BRANCH_MARKER_VALUE = HAS_DATA_FLAG | DATA_DUPLET_FLAG | HAS_BRANCHES_FLAG; //States

var DATA_STATE = 'DATA_STATE';
var RCDATA_STATE = 'RCDATA_STATE';
var RAWTEXT_STATE = 'RAWTEXT_STATE';
var SCRIPT_DATA_STATE = 'SCRIPT_DATA_STATE';
var PLAINTEXT_STATE = 'PLAINTEXT_STATE';
var TAG_OPEN_STATE = 'TAG_OPEN_STATE';
var END_TAG_OPEN_STATE = 'END_TAG_OPEN_STATE';
var TAG_NAME_STATE = 'TAG_NAME_STATE';
var RCDATA_LESS_THAN_SIGN_STATE = 'RCDATA_LESS_THAN_SIGN_STATE';
var RCDATA_END_TAG_OPEN_STATE = 'RCDATA_END_TAG_OPEN_STATE';
var RCDATA_END_TAG_NAME_STATE = 'RCDATA_END_TAG_NAME_STATE';
var RAWTEXT_LESS_THAN_SIGN_STATE = 'RAWTEXT_LESS_THAN_SIGN_STATE';
var RAWTEXT_END_TAG_OPEN_STATE = 'RAWTEXT_END_TAG_OPEN_STATE';
var RAWTEXT_END_TAG_NAME_STATE = 'RAWTEXT_END_TAG_NAME_STATE';
var SCRIPT_DATA_LESS_THAN_SIGN_STATE = 'SCRIPT_DATA_LESS_THAN_SIGN_STATE';
var SCRIPT_DATA_END_TAG_OPEN_STATE = 'SCRIPT_DATA_END_TAG_OPEN_STATE';
var SCRIPT_DATA_END_TAG_NAME_STATE = 'SCRIPT_DATA_END_TAG_NAME_STATE';
var SCRIPT_DATA_ESCAPE_START_STATE = 'SCRIPT_DATA_ESCAPE_START_STATE';
var SCRIPT_DATA_ESCAPE_START_DASH_STATE = 'SCRIPT_DATA_ESCAPE_START_DASH_STATE';
var SCRIPT_DATA_ESCAPED_STATE = 'SCRIPT_DATA_ESCAPED_STATE';
var SCRIPT_DATA_ESCAPED_DASH_STATE = 'SCRIPT_DATA_ESCAPED_DASH_STATE';
var SCRIPT_DATA_ESCAPED_DASH_DASH_STATE = 'SCRIPT_DATA_ESCAPED_DASH_DASH_STATE';
var SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE = 'SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE';
var SCRIPT_DATA_ESCAPED_END_TAG_OPEN_STATE = 'SCRIPT_DATA_ESCAPED_END_TAG_OPEN_STATE';
var SCRIPT_DATA_ESCAPED_END_TAG_NAME_STATE = 'SCRIPT_DATA_ESCAPED_END_TAG_NAME_STATE';
var SCRIPT_DATA_DOUBLE_ESCAPE_START_STATE = 'SCRIPT_DATA_DOUBLE_ESCAPE_START_STATE';
var SCRIPT_DATA_DOUBLE_ESCAPED_STATE = 'SCRIPT_DATA_DOUBLE_ESCAPED_STATE';
var SCRIPT_DATA_DOUBLE_ESCAPED_DASH_STATE = 'SCRIPT_DATA_DOUBLE_ESCAPED_DASH_STATE';
var SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH_STATE = 'SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH_STATE';
var SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE = 'SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE';
var SCRIPT_DATA_DOUBLE_ESCAPE_END_STATE = 'SCRIPT_DATA_DOUBLE_ESCAPE_END_STATE';
var BEFORE_ATTRIBUTE_NAME_STATE = 'BEFORE_ATTRIBUTE_NAME_STATE';
var ATTRIBUTE_NAME_STATE = 'ATTRIBUTE_NAME_STATE';
var AFTER_ATTRIBUTE_NAME_STATE = 'AFTER_ATTRIBUTE_NAME_STATE';
var BEFORE_ATTRIBUTE_VALUE_STATE = 'BEFORE_ATTRIBUTE_VALUE_STATE';
var ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE = 'ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE';
var ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE = 'ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE';
var ATTRIBUTE_VALUE_UNQUOTED_STATE = 'ATTRIBUTE_VALUE_UNQUOTED_STATE';
var AFTER_ATTRIBUTE_VALUE_QUOTED_STATE = 'AFTER_ATTRIBUTE_VALUE_QUOTED_STATE';
var SELF_CLOSING_START_TAG_STATE = 'SELF_CLOSING_START_TAG_STATE';
var BOGUS_COMMENT_STATE = 'BOGUS_COMMENT_STATE';
var MARKUP_DECLARATION_OPEN_STATE = 'MARKUP_DECLARATION_OPEN_STATE';
var COMMENT_START_STATE = 'COMMENT_START_STATE';
var COMMENT_START_DASH_STATE = 'COMMENT_START_DASH_STATE';
var COMMENT_STATE = 'COMMENT_STATE';
var COMMENT_LESS_THAN_SIGN_STATE = 'COMMENT_LESS_THAN_SIGN_STATE';
var COMMENT_LESS_THAN_SIGN_BANG_STATE = 'COMMENT_LESS_THAN_SIGN_BANG_STATE';
var COMMENT_LESS_THAN_SIGN_BANG_DASH_STATE = 'COMMENT_LESS_THAN_SIGN_BANG_DASH_STATE';
var COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH_STATE = 'COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH_STATE';
var COMMENT_END_DASH_STATE = 'COMMENT_END_DASH_STATE';
var COMMENT_END_STATE = 'COMMENT_END_STATE';
var COMMENT_END_BANG_STATE = 'COMMENT_END_BANG_STATE';
var DOCTYPE_STATE = 'DOCTYPE_STATE';
var BEFORE_DOCTYPE_NAME_STATE = 'BEFORE_DOCTYPE_NAME_STATE';
var DOCTYPE_NAME_STATE = 'DOCTYPE_NAME_STATE';
var AFTER_DOCTYPE_NAME_STATE = 'AFTER_DOCTYPE_NAME_STATE';
var AFTER_DOCTYPE_PUBLIC_KEYWORD_STATE = 'AFTER_DOCTYPE_PUBLIC_KEYWORD_STATE';
var BEFORE_DOCTYPE_PUBLIC_IDENTIFIER_STATE = 'BEFORE_DOCTYPE_PUBLIC_IDENTIFIER_STATE';
var DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED_STATE = 'DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED_STATE';
var DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED_STATE = 'DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED_STATE';
var AFTER_DOCTYPE_PUBLIC_IDENTIFIER_STATE = 'AFTER_DOCTYPE_PUBLIC_IDENTIFIER_STATE';
var BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS_STATE = 'BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS_STATE';
var AFTER_DOCTYPE_SYSTEM_KEYWORD_STATE = 'AFTER_DOCTYPE_SYSTEM_KEYWORD_STATE';
var BEFORE_DOCTYPE_SYSTEM_IDENTIFIER_STATE = 'BEFORE_DOCTYPE_SYSTEM_IDENTIFIER_STATE';
var DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE = 'DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE';
var DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE = 'DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE';
var AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE = 'AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE';
var BOGUS_DOCTYPE_STATE = 'BOGUS_DOCTYPE_STATE';
var CDATA_SECTION_STATE = 'CDATA_SECTION_STATE';
var CDATA_SECTION_BRACKET_STATE = 'CDATA_SECTION_BRACKET_STATE';
var CDATA_SECTION_END_STATE = 'CDATA_SECTION_END_STATE';
var CHARACTER_REFERENCE_STATE = 'CHARACTER_REFERENCE_STATE';
var NAMED_CHARACTER_REFERENCE_STATE = 'NAMED_CHARACTER_REFERENCE_STATE';
var AMBIGUOUS_AMPERSAND_STATE = 'AMBIGUOS_AMPERSAND_STATE';
var NUMERIC_CHARACTER_REFERENCE_STATE = 'NUMERIC_CHARACTER_REFERENCE_STATE';
var HEXADEMICAL_CHARACTER_REFERENCE_START_STATE = 'HEXADEMICAL_CHARACTER_REFERENCE_START_STATE';
var DECIMAL_CHARACTER_REFERENCE_START_STATE = 'DECIMAL_CHARACTER_REFERENCE_START_STATE';
var HEXADEMICAL_CHARACTER_REFERENCE_STATE = 'HEXADEMICAL_CHARACTER_REFERENCE_STATE';
var DECIMAL_CHARACTER_REFERENCE_STATE = 'DECIMAL_CHARACTER_REFERENCE_STATE';
var NUMERIC_CHARACTER_REFERENCE_END_STATE = 'NUMERIC_CHARACTER_REFERENCE_END_STATE'; //Utils
//OPTIMIZATION: these utility functions should not be moved out of this module. V8 Crankshaft will not inline
//this functions if they will be situated in another module due to context switch.
//Always perform inlining check before modifying this functions ('node --trace-inlining').

function isWhitespace(cp) {
  return cp === $$6.SPACE || cp === $$6.LINE_FEED || cp === $$6.TABULATION || cp === $$6.FORM_FEED;
}

function isAsciiDigit(cp) {
  return cp >= $$6.DIGIT_0 && cp <= $$6.DIGIT_9;
}

function isAsciiUpper(cp) {
  return cp >= $$6.LATIN_CAPITAL_A && cp <= $$6.LATIN_CAPITAL_Z;
}

function isAsciiLower(cp) {
  return cp >= $$6.LATIN_SMALL_A && cp <= $$6.LATIN_SMALL_Z;
}

function isAsciiLetter(cp) {
  return isAsciiLower(cp) || isAsciiUpper(cp);
}

function isAsciiAlphaNumeric(cp) {
  return isAsciiLetter(cp) || isAsciiDigit(cp);
}

function isAsciiUpperHexDigit(cp) {
  return cp >= $$6.LATIN_CAPITAL_A && cp <= $$6.LATIN_CAPITAL_F;
}

function isAsciiLowerHexDigit(cp) {
  return cp >= $$6.LATIN_SMALL_A && cp <= $$6.LATIN_SMALL_F;
}

function isAsciiHexDigit(cp) {
  return isAsciiDigit(cp) || isAsciiUpperHexDigit(cp) || isAsciiLowerHexDigit(cp);
}

function toAsciiLowerCodePoint(cp) {
  return cp + 0x0020;
} //NOTE: String.fromCharCode() function can handle only characters from BMP subset.
//So, we need to workaround this manually.
//(see: https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/String/fromCharCode#Getting_it_to_work_with_higher_values)


function toChar(cp) {
  if (cp <= 0xffff) {
    return String.fromCharCode(cp);
  }

  cp -= 0x10000;
  return String.fromCharCode(cp >>> 10 & 0x3ff | 0xd800) + String.fromCharCode(0xdc00 | cp & 0x3ff);
}

function toAsciiLowerChar(cp) {
  return String.fromCharCode(toAsciiLowerCodePoint(cp));
}

function findNamedEntityTreeBranch(nodeIx, cp) {
  var branchCount = neTree[++nodeIx];
  var lo = ++nodeIx;
  var hi = lo + branchCount - 1;

  while (lo <= hi) {
    var mid = lo + hi >>> 1;
    var midCp = neTree[mid];

    if (midCp < cp) {
      lo = mid + 1;
    } else if (midCp > cp) {
      hi = mid - 1;
    } else {
      return neTree[mid + branchCount];
    }
  }

  return -1;
} //Tokenizer


var Tokenizer$4 = /*#__PURE__*/function () {
  function Tokenizer() {
    _classCallCheck(this, Tokenizer);

    this.preprocessor = new Preprocessor();
    this.tokenQueue = [];
    this.allowCDATA = false;
    this.state = DATA_STATE;
    this.returnState = '';
    this.charRefCode = -1;
    this.tempBuff = [];
    this.lastStartTagName = '';
    this.consumedAfterSnapshot = -1;
    this.active = false;
    this.currentCharacterToken = null;
    this.currentToken = null;
    this.currentAttr = null;
  } //Errors


  _createClass(Tokenizer, [{
    key: "_err",
    value: function _err() {// NOTE: err reporting is noop by default. Enabled by mixin.
    }
  }, {
    key: "_errOnNextCodePoint",
    value: function _errOnNextCodePoint(err) {
      this._consume();

      this._err(err);

      this._unconsume();
    } //API

  }, {
    key: "getNextToken",
    value: function getNextToken() {
      while (!this.tokenQueue.length && this.active) {
        this.consumedAfterSnapshot = 0;

        var cp = this._consume();

        if (!this._ensureHibernation()) {
          this[this.state](cp);
        }
      }

      return this.tokenQueue.shift();
    }
  }, {
    key: "write",
    value: function write(chunk, isLastChunk) {
      this.active = true;
      this.preprocessor.write(chunk, isLastChunk);
    }
  }, {
    key: "insertHtmlAtCurrentPos",
    value: function insertHtmlAtCurrentPos(chunk) {
      this.active = true;
      this.preprocessor.insertHtmlAtCurrentPos(chunk);
    } //Hibernation

  }, {
    key: "_ensureHibernation",
    value: function _ensureHibernation() {
      if (this.preprocessor.endOfChunkHit) {
        for (; this.consumedAfterSnapshot > 0; this.consumedAfterSnapshot--) {
          this.preprocessor.retreat();
        }

        this.active = false;
        this.tokenQueue.push({
          type: Tokenizer.HIBERNATION_TOKEN
        });
        return true;
      }

      return false;
    } //Consumption

  }, {
    key: "_consume",
    value: function _consume() {
      this.consumedAfterSnapshot++;
      return this.preprocessor.advance();
    }
  }, {
    key: "_unconsume",
    value: function _unconsume() {
      this.consumedAfterSnapshot--;
      this.preprocessor.retreat();
    }
  }, {
    key: "_reconsumeInState",
    value: function _reconsumeInState(state) {
      this.state = state;

      this._unconsume();
    }
  }, {
    key: "_consumeSequenceIfMatch",
    value: function _consumeSequenceIfMatch(pattern, startCp, caseSensitive) {
      var consumedCount = 0;
      var isMatch = true;
      var patternLength = pattern.length;
      var patternPos = 0;
      var cp = startCp;
      var patternCp = void 0;

      for (; patternPos < patternLength; patternPos++) {
        if (patternPos > 0) {
          cp = this._consume();
          consumedCount++;
        }

        if (cp === $$6.EOF) {
          isMatch = false;
          break;
        }

        patternCp = pattern[patternPos];

        if (cp !== patternCp && (caseSensitive || cp !== toAsciiLowerCodePoint(patternCp))) {
          isMatch = false;
          break;
        }
      }

      if (!isMatch) {
        while (consumedCount--) {
          this._unconsume();
        }
      }

      return isMatch;
    } //Temp buffer

  }, {
    key: "_isTempBufferEqualToScriptString",
    value: function _isTempBufferEqualToScriptString() {
      if (this.tempBuff.length !== $$.SCRIPT_STRING.length) {
        return false;
      }

      for (var i = 0; i < this.tempBuff.length; i++) {
        if (this.tempBuff[i] !== $$.SCRIPT_STRING[i]) {
          return false;
        }
      }

      return true;
    } //Token creation

  }, {
    key: "_createStartTagToken",
    value: function _createStartTagToken() {
      this.currentToken = {
        type: Tokenizer.START_TAG_TOKEN,
        tagName: '',
        selfClosing: false,
        ackSelfClosing: false,
        attrs: []
      };
    }
  }, {
    key: "_createEndTagToken",
    value: function _createEndTagToken() {
      this.currentToken = {
        type: Tokenizer.END_TAG_TOKEN,
        tagName: '',
        selfClosing: false,
        attrs: []
      };
    }
  }, {
    key: "_createCommentToken",
    value: function _createCommentToken() {
      this.currentToken = {
        type: Tokenizer.COMMENT_TOKEN,
        data: ''
      };
    }
  }, {
    key: "_createDoctypeToken",
    value: function _createDoctypeToken(initialName) {
      this.currentToken = {
        type: Tokenizer.DOCTYPE_TOKEN,
        name: initialName,
        forceQuirks: false,
        publicId: null,
        systemId: null
      };
    }
  }, {
    key: "_createCharacterToken",
    value: function _createCharacterToken(type, ch) {
      this.currentCharacterToken = {
        type: type,
        chars: ch
      };
    }
  }, {
    key: "_createEOFToken",
    value: function _createEOFToken() {
      this.currentToken = {
        type: Tokenizer.EOF_TOKEN
      };
    } //Tag attributes

  }, {
    key: "_createAttr",
    value: function _createAttr(attrNameFirstCh) {
      this.currentAttr = {
        name: attrNameFirstCh,
        value: ''
      };
    }
  }, {
    key: "_leaveAttrName",
    value: function _leaveAttrName(toState) {
      if (Tokenizer.getTokenAttr(this.currentToken, this.currentAttr.name) === null) {
        this.currentToken.attrs.push(this.currentAttr);
      } else {
        this._err(ERR$1.duplicateAttribute);
      }

      this.state = toState;
    }
  }, {
    key: "_leaveAttrValue",
    value: function _leaveAttrValue(toState) {
      this.state = toState;
    } //Token emission

  }, {
    key: "_emitCurrentToken",
    value: function _emitCurrentToken() {
      this._emitCurrentCharacterToken();

      var ct = this.currentToken;
      this.currentToken = null; //NOTE: store emited start tag's tagName to determine is the following end tag token is appropriate.

      if (ct.type === Tokenizer.START_TAG_TOKEN) {
        this.lastStartTagName = ct.tagName;
      } else if (ct.type === Tokenizer.END_TAG_TOKEN) {
        if (ct.attrs.length > 0) {
          this._err(ERR$1.endTagWithAttributes);
        }

        if (ct.selfClosing) {
          this._err(ERR$1.endTagWithTrailingSolidus);
        }
      }

      this.tokenQueue.push(ct);
    }
  }, {
    key: "_emitCurrentCharacterToken",
    value: function _emitCurrentCharacterToken() {
      if (this.currentCharacterToken) {
        this.tokenQueue.push(this.currentCharacterToken);
        this.currentCharacterToken = null;
      }
    }
  }, {
    key: "_emitEOFToken",
    value: function _emitEOFToken() {
      this._createEOFToken();

      this._emitCurrentToken();
    } //Characters emission
    //OPTIMIZATION: specification uses only one type of character tokens (one token per character).
    //This causes a huge memory overhead and a lot of unnecessary parser loops. parse5 uses 3 groups of characters.
    //If we have a sequence of characters that belong to the same group, parser can process it
    //as a single solid character token.
    //So, there are 3 types of character tokens in parse5:
    //1)NULL_CHARACTER_TOKEN - \u0000-character sequences (e.g. '\u0000\u0000\u0000')
    //2)WHITESPACE_CHARACTER_TOKEN - any whitespace/new-line character sequences (e.g. '\n  \r\t   \f')
    //3)CHARACTER_TOKEN - any character sequence which don't belong to groups 1 and 2 (e.g. 'abcdef1234@@#$%^')

  }, {
    key: "_appendCharToCurrentCharacterToken",
    value: function _appendCharToCurrentCharacterToken(type, ch) {
      if (this.currentCharacterToken && this.currentCharacterToken.type !== type) {
        this._emitCurrentCharacterToken();
      }

      if (this.currentCharacterToken) {
        this.currentCharacterToken.chars += ch;
      } else {
        this._createCharacterToken(type, ch);
      }
    }
  }, {
    key: "_emitCodePoint",
    value: function _emitCodePoint(cp) {
      var type = Tokenizer.CHARACTER_TOKEN;

      if (isWhitespace(cp)) {
        type = Tokenizer.WHITESPACE_CHARACTER_TOKEN;
      } else if (cp === $$6.NULL) {
        type = Tokenizer.NULL_CHARACTER_TOKEN;
      }

      this._appendCharToCurrentCharacterToken(type, toChar(cp));
    }
  }, {
    key: "_emitSeveralCodePoints",
    value: function _emitSeveralCodePoints(codePoints) {
      for (var i = 0; i < codePoints.length; i++) {
        this._emitCodePoint(codePoints[i]);
      }
    } //NOTE: used then we emit character explicitly. This is always a non-whitespace and a non-null character.
    //So we can avoid additional checks here.

  }, {
    key: "_emitChars",
    value: function _emitChars(ch) {
      this._appendCharToCurrentCharacterToken(Tokenizer.CHARACTER_TOKEN, ch);
    } // Character reference helpers

  }, {
    key: "_matchNamedCharacterReference",
    value: function _matchNamedCharacterReference(startCp) {
      var result = null;
      var excess = 1;
      var i = findNamedEntityTreeBranch(0, startCp);
      this.tempBuff.push(startCp);

      while (i > -1) {
        var current = neTree[i];
        var inNode = current < MAX_BRANCH_MARKER_VALUE;
        var nodeWithData = inNode && current & HAS_DATA_FLAG;

        if (nodeWithData) {
          //NOTE: we use greedy search, so we continue lookup at this point
          result = current & DATA_DUPLET_FLAG ? [neTree[++i], neTree[++i]] : [neTree[++i]];
          excess = 0;
        }

        var cp = this._consume();

        this.tempBuff.push(cp);
        excess++;

        if (cp === $$6.EOF) {
          break;
        }

        if (inNode) {
          i = current & HAS_BRANCHES_FLAG ? findNamedEntityTreeBranch(i, cp) : -1;
        } else {
          i = cp === current ? ++i : -1;
        }
      }

      while (excess--) {
        this.tempBuff.pop();

        this._unconsume();
      }

      return result;
    }
  }, {
    key: "_isCharacterReferenceInAttribute",
    value: function _isCharacterReferenceInAttribute() {
      return this.returnState === ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE || this.returnState === ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE || this.returnState === ATTRIBUTE_VALUE_UNQUOTED_STATE;
    }
  }, {
    key: "_isCharacterReferenceAttributeQuirk",
    value: function _isCharacterReferenceAttributeQuirk(withSemicolon) {
      if (!withSemicolon && this._isCharacterReferenceInAttribute()) {
        var nextCp = this._consume();

        this._unconsume();

        return nextCp === $$6.EQUALS_SIGN || isAsciiAlphaNumeric(nextCp);
      }

      return false;
    }
  }, {
    key: "_flushCodePointsConsumedAsCharacterReference",
    value: function _flushCodePointsConsumedAsCharacterReference() {
      if (this._isCharacterReferenceInAttribute()) {
        for (var i = 0; i < this.tempBuff.length; i++) {
          this.currentAttr.value += toChar(this.tempBuff[i]);
        }
      } else {
        this._emitSeveralCodePoints(this.tempBuff);
      }

      this.tempBuff = [];
    } // State machine
    // Data state
    //------------------------------------------------------------------

  }, {
    key: DATA_STATE,
    value: function value(cp) {
      this.preprocessor.dropParsedChunk();

      if (cp === $$6.LESS_THAN_SIGN) {
        this.state = TAG_OPEN_STATE;
      } else if (cp === $$6.AMPERSAND) {
        this.returnState = DATA_STATE;
        this.state = CHARACTER_REFERENCE_STATE;
      } else if (cp === $$6.NULL) {
        this._err(ERR$1.unexpectedNullCharacter);

        this._emitCodePoint(cp);
      } else if (cp === $$6.EOF) {
        this._emitEOFToken();
      } else {
        this._emitCodePoint(cp);
      }
    } //  RCDATA state
    //------------------------------------------------------------------

  }, {
    key: RCDATA_STATE,
    value: function value(cp) {
      this.preprocessor.dropParsedChunk();

      if (cp === $$6.AMPERSAND) {
        this.returnState = RCDATA_STATE;
        this.state = CHARACTER_REFERENCE_STATE;
      } else if (cp === $$6.LESS_THAN_SIGN) {
        this.state = RCDATA_LESS_THAN_SIGN_STATE;
      } else if (cp === $$6.NULL) {
        this._err(ERR$1.unexpectedNullCharacter);

        this._emitChars(unicode$1.REPLACEMENT_CHARACTER);
      } else if (cp === $$6.EOF) {
        this._emitEOFToken();
      } else {
        this._emitCodePoint(cp);
      }
    } // RAWTEXT state
    //------------------------------------------------------------------

  }, {
    key: RAWTEXT_STATE,
    value: function value(cp) {
      this.preprocessor.dropParsedChunk();

      if (cp === $$6.LESS_THAN_SIGN) {
        this.state = RAWTEXT_LESS_THAN_SIGN_STATE;
      } else if (cp === $$6.NULL) {
        this._err(ERR$1.unexpectedNullCharacter);

        this._emitChars(unicode$1.REPLACEMENT_CHARACTER);
      } else if (cp === $$6.EOF) {
        this._emitEOFToken();
      } else {
        this._emitCodePoint(cp);
      }
    } // Script data state
    //------------------------------------------------------------------

  }, {
    key: SCRIPT_DATA_STATE,
    value: function value(cp) {
      this.preprocessor.dropParsedChunk();

      if (cp === $$6.LESS_THAN_SIGN) {
        this.state = SCRIPT_DATA_LESS_THAN_SIGN_STATE;
      } else if (cp === $$6.NULL) {
        this._err(ERR$1.unexpectedNullCharacter);

        this._emitChars(unicode$1.REPLACEMENT_CHARACTER);
      } else if (cp === $$6.EOF) {
        this._emitEOFToken();
      } else {
        this._emitCodePoint(cp);
      }
    } // PLAINTEXT state
    //------------------------------------------------------------------

  }, {
    key: PLAINTEXT_STATE,
    value: function value(cp) {
      this.preprocessor.dropParsedChunk();

      if (cp === $$6.NULL) {
        this._err(ERR$1.unexpectedNullCharacter);

        this._emitChars(unicode$1.REPLACEMENT_CHARACTER);
      } else if (cp === $$6.EOF) {
        this._emitEOFToken();
      } else {
        this._emitCodePoint(cp);
      }
    } // Tag open state
    //------------------------------------------------------------------

  }, {
    key: TAG_OPEN_STATE,
    value: function value(cp) {
      if (cp === $$6.EXCLAMATION_MARK) {
        this.state = MARKUP_DECLARATION_OPEN_STATE;
      } else if (cp === $$6.SOLIDUS) {
        this.state = END_TAG_OPEN_STATE;
      } else if (isAsciiLetter(cp)) {
        this._createStartTagToken();

        this._reconsumeInState(TAG_NAME_STATE);
      } else if (cp === $$6.QUESTION_MARK) {
        this._err(ERR$1.unexpectedQuestionMarkInsteadOfTagName);

        this._createCommentToken();

        this._reconsumeInState(BOGUS_COMMENT_STATE);
      } else if (cp === $$6.EOF) {
        this._err(ERR$1.eofBeforeTagName);

        this._emitChars('<');

        this._emitEOFToken();
      } else {
        this._err(ERR$1.invalidFirstCharacterOfTagName);

        this._emitChars('<');

        this._reconsumeInState(DATA_STATE);
      }
    } // End tag open state
    //------------------------------------------------------------------

  }, {
    key: END_TAG_OPEN_STATE,
    value: function value(cp) {
      if (isAsciiLetter(cp)) {
        this._createEndTagToken();

        this._reconsumeInState(TAG_NAME_STATE);
      } else if (cp === $$6.GREATER_THAN_SIGN) {
        this._err(ERR$1.missingEndTagName);

        this.state = DATA_STATE;
      } else if (cp === $$6.EOF) {
        this._err(ERR$1.eofBeforeTagName);

        this._emitChars('</');

        this._emitEOFToken();
      } else {
        this._err(ERR$1.invalidFirstCharacterOfTagName);

        this._createCommentToken();

        this._reconsumeInState(BOGUS_COMMENT_STATE);
      }
    } // Tag name state
    //------------------------------------------------------------------

  }, {
    key: TAG_NAME_STATE,
    value: function value(cp) {
      if (isWhitespace(cp)) {
        this.state = BEFORE_ATTRIBUTE_NAME_STATE;
      } else if (cp === $$6.SOLIDUS) {
        this.state = SELF_CLOSING_START_TAG_STATE;
      } else if (cp === $$6.GREATER_THAN_SIGN) {
        this.state = DATA_STATE;

        this._emitCurrentToken();
      } else if (isAsciiUpper(cp)) {
        this.currentToken.tagName += toAsciiLowerChar(cp);
      } else if (cp === $$6.NULL) {
        this._err(ERR$1.unexpectedNullCharacter);

        this.currentToken.tagName += unicode$1.REPLACEMENT_CHARACTER;
      } else if (cp === $$6.EOF) {
        this._err(ERR$1.eofInTag);

        this._emitEOFToken();
      } else {
        this.currentToken.tagName += toChar(cp);
      }
    } // RCDATA less-than sign state
    //------------------------------------------------------------------

  }, {
    key: RCDATA_LESS_THAN_SIGN_STATE,
    value: function value(cp) {
      if (cp === $$6.SOLIDUS) {
        this.tempBuff = [];
        this.state = RCDATA_END_TAG_OPEN_STATE;
      } else {
        this._emitChars('<');

        this._reconsumeInState(RCDATA_STATE);
      }
    } // RCDATA end tag open state
    //------------------------------------------------------------------

  }, {
    key: RCDATA_END_TAG_OPEN_STATE,
    value: function value(cp) {
      if (isAsciiLetter(cp)) {
        this._createEndTagToken();

        this._reconsumeInState(RCDATA_END_TAG_NAME_STATE);
      } else {
        this._emitChars('</');

        this._reconsumeInState(RCDATA_STATE);
      }
    } // RCDATA end tag name state
    //------------------------------------------------------------------

  }, {
    key: RCDATA_END_TAG_NAME_STATE,
    value: function value(cp) {
      if (isAsciiUpper(cp)) {
        this.currentToken.tagName += toAsciiLowerChar(cp);
        this.tempBuff.push(cp);
      } else if (isAsciiLower(cp)) {
        this.currentToken.tagName += toChar(cp);
        this.tempBuff.push(cp);
      } else {
        if (this.lastStartTagName === this.currentToken.tagName) {
          if (isWhitespace(cp)) {
            this.state = BEFORE_ATTRIBUTE_NAME_STATE;
            return;
          }

          if (cp === $$6.SOLIDUS) {
            this.state = SELF_CLOSING_START_TAG_STATE;
            return;
          }

          if (cp === $$6.GREATER_THAN_SIGN) {
            this.state = DATA_STATE;

            this._emitCurrentToken();

            return;
          }
        }

        this._emitChars('</');

        this._emitSeveralCodePoints(this.tempBuff);

        this._reconsumeInState(RCDATA_STATE);
      }
    } // RAWTEXT less-than sign state
    //------------------------------------------------------------------

  }, {
    key: RAWTEXT_LESS_THAN_SIGN_STATE,
    value: function value(cp) {
      if (cp === $$6.SOLIDUS) {
        this.tempBuff = [];
        this.state = RAWTEXT_END_TAG_OPEN_STATE;
      } else {
        this._emitChars('<');

        this._reconsumeInState(RAWTEXT_STATE);
      }
    } // RAWTEXT end tag open state
    //------------------------------------------------------------------

  }, {
    key: RAWTEXT_END_TAG_OPEN_STATE,
    value: function value(cp) {
      if (isAsciiLetter(cp)) {
        this._createEndTagToken();

        this._reconsumeInState(RAWTEXT_END_TAG_NAME_STATE);
      } else {
        this._emitChars('</');

        this._reconsumeInState(RAWTEXT_STATE);
      }
    } // RAWTEXT end tag name state
    //------------------------------------------------------------------

  }, {
    key: RAWTEXT_END_TAG_NAME_STATE,
    value: function value(cp) {
      if (isAsciiUpper(cp)) {
        this.currentToken.tagName += toAsciiLowerChar(cp);
        this.tempBuff.push(cp);
      } else if (isAsciiLower(cp)) {
        this.currentToken.tagName += toChar(cp);
        this.tempBuff.push(cp);
      } else {
        if (this.lastStartTagName === this.currentToken.tagName) {
          if (isWhitespace(cp)) {
            this.state = BEFORE_ATTRIBUTE_NAME_STATE;
            return;
          }

          if (cp === $$6.SOLIDUS) {
            this.state = SELF_CLOSING_START_TAG_STATE;
            return;
          }

          if (cp === $$6.GREATER_THAN_SIGN) {
            this._emitCurrentToken();

            this.state = DATA_STATE;
            return;
          }
        }

        this._emitChars('</');

        this._emitSeveralCodePoints(this.tempBuff);

        this._reconsumeInState(RAWTEXT_STATE);
      }
    } // Script data less-than sign state
    //------------------------------------------------------------------

  }, {
    key: SCRIPT_DATA_LESS_THAN_SIGN_STATE,
    value: function value(cp) {
      if (cp === $$6.SOLIDUS) {
        this.tempBuff = [];
        this.state = SCRIPT_DATA_END_TAG_OPEN_STATE;
      } else if (cp === $$6.EXCLAMATION_MARK) {
        this.state = SCRIPT_DATA_ESCAPE_START_STATE;

        this._emitChars('<!');
      } else {
        this._emitChars('<');

        this._reconsumeInState(SCRIPT_DATA_STATE);
      }
    } // Script data end tag open state
    //------------------------------------------------------------------

  }, {
    key: SCRIPT_DATA_END_TAG_OPEN_STATE,
    value: function value(cp) {
      if (isAsciiLetter(cp)) {
        this._createEndTagToken();

        this._reconsumeInState(SCRIPT_DATA_END_TAG_NAME_STATE);
      } else {
        this._emitChars('</');

        this._reconsumeInState(SCRIPT_DATA_STATE);
      }
    } // Script data end tag name state
    //------------------------------------------------------------------

  }, {
    key: SCRIPT_DATA_END_TAG_NAME_STATE,
    value: function value(cp) {
      if (isAsciiUpper(cp)) {
        this.currentToken.tagName += toAsciiLowerChar(cp);
        this.tempBuff.push(cp);
      } else if (isAsciiLower(cp)) {
        this.currentToken.tagName += toChar(cp);
        this.tempBuff.push(cp);
      } else {
        if (this.lastStartTagName === this.currentToken.tagName) {
          if (isWhitespace(cp)) {
            this.state = BEFORE_ATTRIBUTE_NAME_STATE;
            return;
          } else if (cp === $$6.SOLIDUS) {
            this.state = SELF_CLOSING_START_TAG_STATE;
            return;
          } else if (cp === $$6.GREATER_THAN_SIGN) {
            this._emitCurrentToken();

            this.state = DATA_STATE;
            return;
          }
        }

        this._emitChars('</');

        this._emitSeveralCodePoints(this.tempBuff);

        this._reconsumeInState(SCRIPT_DATA_STATE);
      }
    } // Script data escape start state
    //------------------------------------------------------------------

  }, {
    key: SCRIPT_DATA_ESCAPE_START_STATE,
    value: function value(cp) {
      if (cp === $$6.HYPHEN_MINUS) {
        this.state = SCRIPT_DATA_ESCAPE_START_DASH_STATE;

        this._emitChars('-');
      } else {
        this._reconsumeInState(SCRIPT_DATA_STATE);
      }
    } // Script data escape start dash state
    //------------------------------------------------------------------

  }, {
    key: SCRIPT_DATA_ESCAPE_START_DASH_STATE,
    value: function value(cp) {
      if (cp === $$6.HYPHEN_MINUS) {
        this.state = SCRIPT_DATA_ESCAPED_DASH_DASH_STATE;

        this._emitChars('-');
      } else {
        this._reconsumeInState(SCRIPT_DATA_STATE);
      }
    } // Script data escaped state
    //------------------------------------------------------------------

  }, {
    key: SCRIPT_DATA_ESCAPED_STATE,
    value: function value(cp) {
      if (cp === $$6.HYPHEN_MINUS) {
        this.state = SCRIPT_DATA_ESCAPED_DASH_STATE;

        this._emitChars('-');
      } else if (cp === $$6.LESS_THAN_SIGN) {
        this.state = SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE;
      } else if (cp === $$6.NULL) {
        this._err(ERR$1.unexpectedNullCharacter);

        this._emitChars(unicode$1.REPLACEMENT_CHARACTER);
      } else if (cp === $$6.EOF) {
        this._err(ERR$1.eofInScriptHtmlCommentLikeText);

        this._emitEOFToken();
      } else {
        this._emitCodePoint(cp);
      }
    } // Script data escaped dash state
    //------------------------------------------------------------------

  }, {
    key: SCRIPT_DATA_ESCAPED_DASH_STATE,
    value: function value(cp) {
      if (cp === $$6.HYPHEN_MINUS) {
        this.state = SCRIPT_DATA_ESCAPED_DASH_DASH_STATE;

        this._emitChars('-');
      } else if (cp === $$6.LESS_THAN_SIGN) {
        this.state = SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE;
      } else if (cp === $$6.NULL) {
        this._err(ERR$1.unexpectedNullCharacter);

        this.state = SCRIPT_DATA_ESCAPED_STATE;

        this._emitChars(unicode$1.REPLACEMENT_CHARACTER);
      } else if (cp === $$6.EOF) {
        this._err(ERR$1.eofInScriptHtmlCommentLikeText);

        this._emitEOFToken();
      } else {
        this.state = SCRIPT_DATA_ESCAPED_STATE;

        this._emitCodePoint(cp);
      }
    } // Script data escaped dash dash state
    //------------------------------------------------------------------

  }, {
    key: SCRIPT_DATA_ESCAPED_DASH_DASH_STATE,
    value: function value(cp) {
      if (cp === $$6.HYPHEN_MINUS) {
        this._emitChars('-');
      } else if (cp === $$6.LESS_THAN_SIGN) {
        this.state = SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE;
      } else if (cp === $$6.GREATER_THAN_SIGN) {
        this.state = SCRIPT_DATA_STATE;

        this._emitChars('>');
      } else if (cp === $$6.NULL) {
        this._err(ERR$1.unexpectedNullCharacter);

        this.state = SCRIPT_DATA_ESCAPED_STATE;

        this._emitChars(unicode$1.REPLACEMENT_CHARACTER);
      } else if (cp === $$6.EOF) {
        this._err(ERR$1.eofInScriptHtmlCommentLikeText);

        this._emitEOFToken();
      } else {
        this.state = SCRIPT_DATA_ESCAPED_STATE;

        this._emitCodePoint(cp);
      }
    } // Script data escaped less-than sign state
    //------------------------------------------------------------------

  }, {
    key: SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE,
    value: function value(cp) {
      if (cp === $$6.SOLIDUS) {
        this.tempBuff = [];
        this.state = SCRIPT_DATA_ESCAPED_END_TAG_OPEN_STATE;
      } else if (isAsciiLetter(cp)) {
        this.tempBuff = [];

        this._emitChars('<');

        this._reconsumeInState(SCRIPT_DATA_DOUBLE_ESCAPE_START_STATE);
      } else {
        this._emitChars('<');

        this._reconsumeInState(SCRIPT_DATA_ESCAPED_STATE);
      }
    } // Script data escaped end tag open state
    //------------------------------------------------------------------

  }, {
    key: SCRIPT_DATA_ESCAPED_END_TAG_OPEN_STATE,
    value: function value(cp) {
      if (isAsciiLetter(cp)) {
        this._createEndTagToken();

        this._reconsumeInState(SCRIPT_DATA_ESCAPED_END_TAG_NAME_STATE);
      } else {
        this._emitChars('</');

        this._reconsumeInState(SCRIPT_DATA_ESCAPED_STATE);
      }
    } // Script data escaped end tag name state
    //------------------------------------------------------------------

  }, {
    key: SCRIPT_DATA_ESCAPED_END_TAG_NAME_STATE,
    value: function value(cp) {
      if (isAsciiUpper(cp)) {
        this.currentToken.tagName += toAsciiLowerChar(cp);
        this.tempBuff.push(cp);
      } else if (isAsciiLower(cp)) {
        this.currentToken.tagName += toChar(cp);
        this.tempBuff.push(cp);
      } else {
        if (this.lastStartTagName === this.currentToken.tagName) {
          if (isWhitespace(cp)) {
            this.state = BEFORE_ATTRIBUTE_NAME_STATE;
            return;
          }

          if (cp === $$6.SOLIDUS) {
            this.state = SELF_CLOSING_START_TAG_STATE;
            return;
          }

          if (cp === $$6.GREATER_THAN_SIGN) {
            this._emitCurrentToken();

            this.state = DATA_STATE;
            return;
          }
        }

        this._emitChars('</');

        this._emitSeveralCodePoints(this.tempBuff);

        this._reconsumeInState(SCRIPT_DATA_ESCAPED_STATE);
      }
    } // Script data double escape start state
    //------------------------------------------------------------------

  }, {
    key: SCRIPT_DATA_DOUBLE_ESCAPE_START_STATE,
    value: function value(cp) {
      if (isWhitespace(cp) || cp === $$6.SOLIDUS || cp === $$6.GREATER_THAN_SIGN) {
        this.state = this._isTempBufferEqualToScriptString() ? SCRIPT_DATA_DOUBLE_ESCAPED_STATE : SCRIPT_DATA_ESCAPED_STATE;

        this._emitCodePoint(cp);
      } else if (isAsciiUpper(cp)) {
        this.tempBuff.push(toAsciiLowerCodePoint(cp));

        this._emitCodePoint(cp);
      } else if (isAsciiLower(cp)) {
        this.tempBuff.push(cp);

        this._emitCodePoint(cp);
      } else {
        this._reconsumeInState(SCRIPT_DATA_ESCAPED_STATE);
      }
    } // Script data double escaped state
    //------------------------------------------------------------------

  }, {
    key: SCRIPT_DATA_DOUBLE_ESCAPED_STATE,
    value: function value(cp) {
      if (cp === $$6.HYPHEN_MINUS) {
        this.state = SCRIPT_DATA_DOUBLE_ESCAPED_DASH_STATE;

        this._emitChars('-');
      } else if (cp === $$6.LESS_THAN_SIGN) {
        this.state = SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE;

        this._emitChars('<');
      } else if (cp === $$6.NULL) {
        this._err(ERR$1.unexpectedNullCharacter);

        this._emitChars(unicode$1.REPLACEMENT_CHARACTER);
      } else if (cp === $$6.EOF) {
        this._err(ERR$1.eofInScriptHtmlCommentLikeText);

        this._emitEOFToken();
      } else {
        this._emitCodePoint(cp);
      }
    } // Script data double escaped dash state
    //------------------------------------------------------------------

  }, {
    key: SCRIPT_DATA_DOUBLE_ESCAPED_DASH_STATE,
    value: function value(cp) {
      if (cp === $$6.HYPHEN_MINUS) {
        this.state = SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH_STATE;

        this._emitChars('-');
      } else if (cp === $$6.LESS_THAN_SIGN) {
        this.state = SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE;

        this._emitChars('<');
      } else if (cp === $$6.NULL) {
        this._err(ERR$1.unexpectedNullCharacter);

        this.state = SCRIPT_DATA_DOUBLE_ESCAPED_STATE;

        this._emitChars(unicode$1.REPLACEMENT_CHARACTER);
      } else if (cp === $$6.EOF) {
        this._err(ERR$1.eofInScriptHtmlCommentLikeText);

        this._emitEOFToken();
      } else {
        this.state = SCRIPT_DATA_DOUBLE_ESCAPED_STATE;

        this._emitCodePoint(cp);
      }
    } // Script data double escaped dash dash state
    //------------------------------------------------------------------

  }, {
    key: SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH_STATE,
    value: function value(cp) {
      if (cp === $$6.HYPHEN_MINUS) {
        this._emitChars('-');
      } else if (cp === $$6.LESS_THAN_SIGN) {
        this.state = SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE;

        this._emitChars('<');
      } else if (cp === $$6.GREATER_THAN_SIGN) {
        this.state = SCRIPT_DATA_STATE;

        this._emitChars('>');
      } else if (cp === $$6.NULL) {
        this._err(ERR$1.unexpectedNullCharacter);

        this.state = SCRIPT_DATA_DOUBLE_ESCAPED_STATE;

        this._emitChars(unicode$1.REPLACEMENT_CHARACTER);
      } else if (cp === $$6.EOF) {
        this._err(ERR$1.eofInScriptHtmlCommentLikeText);

        this._emitEOFToken();
      } else {
        this.state = SCRIPT_DATA_DOUBLE_ESCAPED_STATE;

        this._emitCodePoint(cp);
      }
    } // Script data double escaped less-than sign state
    //------------------------------------------------------------------

  }, {
    key: SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE,
    value: function value(cp) {
      if (cp === $$6.SOLIDUS) {
        this.tempBuff = [];
        this.state = SCRIPT_DATA_DOUBLE_ESCAPE_END_STATE;

        this._emitChars('/');
      } else {
        this._reconsumeInState(SCRIPT_DATA_DOUBLE_ESCAPED_STATE);
      }
    } // Script data double escape end state
    //------------------------------------------------------------------

  }, {
    key: SCRIPT_DATA_DOUBLE_ESCAPE_END_STATE,
    value: function value(cp) {
      if (isWhitespace(cp) || cp === $$6.SOLIDUS || cp === $$6.GREATER_THAN_SIGN) {
        this.state = this._isTempBufferEqualToScriptString() ? SCRIPT_DATA_ESCAPED_STATE : SCRIPT_DATA_DOUBLE_ESCAPED_STATE;

        this._emitCodePoint(cp);
      } else if (isAsciiUpper(cp)) {
        this.tempBuff.push(toAsciiLowerCodePoint(cp));

        this._emitCodePoint(cp);
      } else if (isAsciiLower(cp)) {
        this.tempBuff.push(cp);

        this._emitCodePoint(cp);
      } else {
        this._reconsumeInState(SCRIPT_DATA_DOUBLE_ESCAPED_STATE);
      }
    } // Before attribute name state
    //------------------------------------------------------------------

  }, {
    key: BEFORE_ATTRIBUTE_NAME_STATE,
    value: function value(cp) {
      if (isWhitespace(cp)) {
        return;
      }

      if (cp === $$6.SOLIDUS || cp === $$6.GREATER_THAN_SIGN || cp === $$6.EOF) {
        this._reconsumeInState(AFTER_ATTRIBUTE_NAME_STATE);
      } else if (cp === $$6.EQUALS_SIGN) {
        this._err(ERR$1.unexpectedEqualsSignBeforeAttributeName);

        this._createAttr('=');

        this.state = ATTRIBUTE_NAME_STATE;
      } else {
        this._createAttr('');

        this._reconsumeInState(ATTRIBUTE_NAME_STATE);
      }
    } // Attribute name state
    //------------------------------------------------------------------

  }, {
    key: ATTRIBUTE_NAME_STATE,
    value: function value(cp) {
      if (isWhitespace(cp) || cp === $$6.SOLIDUS || cp === $$6.GREATER_THAN_SIGN || cp === $$6.EOF) {
        this._leaveAttrName(AFTER_ATTRIBUTE_NAME_STATE);

        this._unconsume();
      } else if (cp === $$6.EQUALS_SIGN) {
        this._leaveAttrName(BEFORE_ATTRIBUTE_VALUE_STATE);
      } else if (isAsciiUpper(cp)) {
        this.currentAttr.name += toAsciiLowerChar(cp);
      } else if (cp === $$6.QUOTATION_MARK || cp === $$6.APOSTROPHE || cp === $$6.LESS_THAN_SIGN) {
        this._err(ERR$1.unexpectedCharacterInAttributeName);

        this.currentAttr.name += toChar(cp);
      } else if (cp === $$6.NULL) {
        this._err(ERR$1.unexpectedNullCharacter);

        this.currentAttr.name += unicode$1.REPLACEMENT_CHARACTER;
      } else {
        this.currentAttr.name += toChar(cp);
      }
    } // After attribute name state
    //------------------------------------------------------------------

  }, {
    key: AFTER_ATTRIBUTE_NAME_STATE,
    value: function value(cp) {
      if (isWhitespace(cp)) {
        return;
      }

      if (cp === $$6.SOLIDUS) {
        this.state = SELF_CLOSING_START_TAG_STATE;
      } else if (cp === $$6.EQUALS_SIGN) {
        this.state = BEFORE_ATTRIBUTE_VALUE_STATE;
      } else if (cp === $$6.GREATER_THAN_SIGN) {
        this.state = DATA_STATE;

        this._emitCurrentToken();
      } else if (cp === $$6.EOF) {
        this._err(ERR$1.eofInTag);

        this._emitEOFToken();
      } else {
        this._createAttr('');

        this._reconsumeInState(ATTRIBUTE_NAME_STATE);
      }
    } // Before attribute value state
    //------------------------------------------------------------------

  }, {
    key: BEFORE_ATTRIBUTE_VALUE_STATE,
    value: function value(cp) {
      if (isWhitespace(cp)) {
        return;
      }

      if (cp === $$6.QUOTATION_MARK) {
        this.state = ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE;
      } else if (cp === $$6.APOSTROPHE) {
        this.state = ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE;
      } else if (cp === $$6.GREATER_THAN_SIGN) {
        this._err(ERR$1.missingAttributeValue);

        this.state = DATA_STATE;

        this._emitCurrentToken();
      } else {
        this._reconsumeInState(ATTRIBUTE_VALUE_UNQUOTED_STATE);
      }
    } // Attribute value (double-quoted) state
    //------------------------------------------------------------------

  }, {
    key: ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE,
    value: function value(cp) {
      if (cp === $$6.QUOTATION_MARK) {
        this.state = AFTER_ATTRIBUTE_VALUE_QUOTED_STATE;
      } else if (cp === $$6.AMPERSAND) {
        this.returnState = ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE;
        this.state = CHARACTER_REFERENCE_STATE;
      } else if (cp === $$6.NULL) {
        this._err(ERR$1.unexpectedNullCharacter);

        this.currentAttr.value += unicode$1.REPLACEMENT_CHARACTER;
      } else if (cp === $$6.EOF) {
        this._err(ERR$1.eofInTag);

        this._emitEOFToken();
      } else {
        this.currentAttr.value += toChar(cp);
      }
    } // Attribute value (single-quoted) state
    //------------------------------------------------------------------

  }, {
    key: ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE,
    value: function value(cp) {
      if (cp === $$6.APOSTROPHE) {
        this.state = AFTER_ATTRIBUTE_VALUE_QUOTED_STATE;
      } else if (cp === $$6.AMPERSAND) {
        this.returnState = ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE;
        this.state = CHARACTER_REFERENCE_STATE;
      } else if (cp === $$6.NULL) {
        this._err(ERR$1.unexpectedNullCharacter);

        this.currentAttr.value += unicode$1.REPLACEMENT_CHARACTER;
      } else if (cp === $$6.EOF) {
        this._err(ERR$1.eofInTag);

        this._emitEOFToken();
      } else {
        this.currentAttr.value += toChar(cp);
      }
    } // Attribute value (unquoted) state
    //------------------------------------------------------------------

  }, {
    key: ATTRIBUTE_VALUE_UNQUOTED_STATE,
    value: function value(cp) {
      if (isWhitespace(cp)) {
        this._leaveAttrValue(BEFORE_ATTRIBUTE_NAME_STATE);
      } else if (cp === $$6.AMPERSAND) {
        this.returnState = ATTRIBUTE_VALUE_UNQUOTED_STATE;
        this.state = CHARACTER_REFERENCE_STATE;
      } else if (cp === $$6.GREATER_THAN_SIGN) {
        this._leaveAttrValue(DATA_STATE);

        this._emitCurrentToken();
      } else if (cp === $$6.NULL) {
        this._err(ERR$1.unexpectedNullCharacter);

        this.currentAttr.value += unicode$1.REPLACEMENT_CHARACTER;
      } else if (cp === $$6.QUOTATION_MARK || cp === $$6.APOSTROPHE || cp === $$6.LESS_THAN_SIGN || cp === $$6.EQUALS_SIGN || cp === $$6.GRAVE_ACCENT) {
        this._err(ERR$1.unexpectedCharacterInUnquotedAttributeValue);

        this.currentAttr.value += toChar(cp);
      } else if (cp === $$6.EOF) {
        this._err(ERR$1.eofInTag);

        this._emitEOFToken();
      } else {
        this.currentAttr.value += toChar(cp);
      }
    } // After attribute value (quoted) state
    //------------------------------------------------------------------

  }, {
    key: AFTER_ATTRIBUTE_VALUE_QUOTED_STATE,
    value: function value(cp) {
      if (isWhitespace(cp)) {
        this._leaveAttrValue(BEFORE_ATTRIBUTE_NAME_STATE);
      } else if (cp === $$6.SOLIDUS) {
        this._leaveAttrValue(SELF_CLOSING_START_TAG_STATE);
      } else if (cp === $$6.GREATER_THAN_SIGN) {
        this._leaveAttrValue(DATA_STATE);

        this._emitCurrentToken();
      } else if (cp === $$6.EOF) {
        this._err(ERR$1.eofInTag);

        this._emitEOFToken();
      } else {
        this._err(ERR$1.missingWhitespaceBetweenAttributes);

        this._reconsumeInState(BEFORE_ATTRIBUTE_NAME_STATE);
      }
    } // Self-closing start tag state
    //------------------------------------------------------------------

  }, {
    key: SELF_CLOSING_START_TAG_STATE,
    value: function value(cp) {
      if (cp === $$6.GREATER_THAN_SIGN) {
        this.currentToken.selfClosing = true;
        this.state = DATA_STATE;

        this._emitCurrentToken();
      } else if (cp === $$6.EOF) {
        this._err(ERR$1.eofInTag);

        this._emitEOFToken();
      } else {
        this._err(ERR$1.unexpectedSolidusInTag);

        this._reconsumeInState(BEFORE_ATTRIBUTE_NAME_STATE);
      }
    } // Bogus comment state
    //------------------------------------------------------------------

  }, {
    key: BOGUS_COMMENT_STATE,
    value: function value(cp) {
      if (cp === $$6.GREATER_THAN_SIGN) {
        this.state = DATA_STATE;

        this._emitCurrentToken();
      } else if (cp === $$6.EOF) {
        this._emitCurrentToken();

        this._emitEOFToken();
      } else if (cp === $$6.NULL) {
        this._err(ERR$1.unexpectedNullCharacter);

        this.currentToken.data += unicode$1.REPLACEMENT_CHARACTER;
      } else {
        this.currentToken.data += toChar(cp);
      }
    } // Markup declaration open state
    //------------------------------------------------------------------

  }, {
    key: MARKUP_DECLARATION_OPEN_STATE,
    value: function value(cp) {
      if (this._consumeSequenceIfMatch($$.DASH_DASH_STRING, cp, true)) {
        this._createCommentToken();

        this.state = COMMENT_START_STATE;
      } else if (this._consumeSequenceIfMatch($$.DOCTYPE_STRING, cp, false)) {
        this.state = DOCTYPE_STATE;
      } else if (this._consumeSequenceIfMatch($$.CDATA_START_STRING, cp, true)) {
        if (this.allowCDATA) {
          this.state = CDATA_SECTION_STATE;
        } else {
          this._err(ERR$1.cdataInHtmlContent);

          this._createCommentToken();

          this.currentToken.data = '[CDATA[';
          this.state = BOGUS_COMMENT_STATE;
        }
      } //NOTE: sequence lookup can be abrupted by hibernation. In that case lookup
      //results are no longer valid and we will need to start over.
      else if (!this._ensureHibernation()) {
          this._err(ERR$1.incorrectlyOpenedComment);

          this._createCommentToken();

          this._reconsumeInState(BOGUS_COMMENT_STATE);
        }
    } // Comment start state
    //------------------------------------------------------------------

  }, {
    key: COMMENT_START_STATE,
    value: function value(cp) {
      if (cp === $$6.HYPHEN_MINUS) {
        this.state = COMMENT_START_DASH_STATE;
      } else if (cp === $$6.GREATER_THAN_SIGN) {
        this._err(ERR$1.abruptClosingOfEmptyComment);

        this.state = DATA_STATE;

        this._emitCurrentToken();
      } else {
        this._reconsumeInState(COMMENT_STATE);
      }
    } // Comment start dash state
    //------------------------------------------------------------------

  }, {
    key: COMMENT_START_DASH_STATE,
    value: function value(cp) {
      if (cp === $$6.HYPHEN_MINUS) {
        this.state = COMMENT_END_STATE;
      } else if (cp === $$6.GREATER_THAN_SIGN) {
        this._err(ERR$1.abruptClosingOfEmptyComment);

        this.state = DATA_STATE;

        this._emitCurrentToken();
      } else if (cp === $$6.EOF) {
        this._err(ERR$1.eofInComment);

        this._emitCurrentToken();

        this._emitEOFToken();
      } else {
        this.currentToken.data += '-';

        this._reconsumeInState(COMMENT_STATE);
      }
    } // Comment state
    //------------------------------------------------------------------

  }, {
    key: COMMENT_STATE,
    value: function value(cp) {
      if (cp === $$6.HYPHEN_MINUS) {
        this.state = COMMENT_END_DASH_STATE;
      } else if (cp === $$6.LESS_THAN_SIGN) {
        this.currentToken.data += '<';
        this.state = COMMENT_LESS_THAN_SIGN_STATE;
      } else if (cp === $$6.NULL) {
        this._err(ERR$1.unexpectedNullCharacter);

        this.currentToken.data += unicode$1.REPLACEMENT_CHARACTER;
      } else if (cp === $$6.EOF) {
        this._err(ERR$1.eofInComment);

        this._emitCurrentToken();

        this._emitEOFToken();
      } else {
        this.currentToken.data += toChar(cp);
      }
    } // Comment less-than sign state
    //------------------------------------------------------------------

  }, {
    key: COMMENT_LESS_THAN_SIGN_STATE,
    value: function value(cp) {
      if (cp === $$6.EXCLAMATION_MARK) {
        this.currentToken.data += '!';
        this.state = COMMENT_LESS_THAN_SIGN_BANG_STATE;
      } else if (cp === $$6.LESS_THAN_SIGN) {
        this.currentToken.data += '!';
      } else {
        this._reconsumeInState(COMMENT_STATE);
      }
    } // Comment less-than sign bang state
    //------------------------------------------------------------------

  }, {
    key: COMMENT_LESS_THAN_SIGN_BANG_STATE,
    value: function value(cp) {
      if (cp === $$6.HYPHEN_MINUS) {
        this.state = COMMENT_LESS_THAN_SIGN_BANG_DASH_STATE;
      } else {
        this._reconsumeInState(COMMENT_STATE);
      }
    } // Comment less-than sign bang dash state
    //------------------------------------------------------------------

  }, {
    key: COMMENT_LESS_THAN_SIGN_BANG_DASH_STATE,
    value: function value(cp) {
      if (cp === $$6.HYPHEN_MINUS) {
        this.state = COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH_STATE;
      } else {
        this._reconsumeInState(COMMENT_END_DASH_STATE);
      }
    } // Comment less-than sign bang dash dash state
    //------------------------------------------------------------------

  }, {
    key: COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH_STATE,
    value: function value(cp) {
      if (cp !== $$6.GREATER_THAN_SIGN && cp !== $$6.EOF) {
        this._err(ERR$1.nestedComment);
      }

      this._reconsumeInState(COMMENT_END_STATE);
    } // Comment end dash state
    //------------------------------------------------------------------

  }, {
    key: COMMENT_END_DASH_STATE,
    value: function value(cp) {
      if (cp === $$6.HYPHEN_MINUS) {
        this.state = COMMENT_END_STATE;
      } else if (cp === $$6.EOF) {
        this._err(ERR$1.eofInComment);

        this._emitCurrentToken();

        this._emitEOFToken();
      } else {
        this.currentToken.data += '-';

        this._reconsumeInState(COMMENT_STATE);
      }
    } // Comment end state
    //------------------------------------------------------------------

  }, {
    key: COMMENT_END_STATE,
    value: function value(cp) {
      if (cp === $$6.GREATER_THAN_SIGN) {
        this.state = DATA_STATE;

        this._emitCurrentToken();
      } else if (cp === $$6.EXCLAMATION_MARK) {
        this.state = COMMENT_END_BANG_STATE;
      } else if (cp === $$6.HYPHEN_MINUS) {
        this.currentToken.data += '-';
      } else if (cp === $$6.EOF) {
        this._err(ERR$1.eofInComment);

        this._emitCurrentToken();

        this._emitEOFToken();
      } else {
        this.currentToken.data += '--';

        this._reconsumeInState(COMMENT_STATE);
      }
    } // Comment end bang state
    //------------------------------------------------------------------

  }, {
    key: COMMENT_END_BANG_STATE,
    value: function value(cp) {
      if (cp === $$6.HYPHEN_MINUS) {
        this.currentToken.data += '--!';
        this.state = COMMENT_END_DASH_STATE;
      } else if (cp === $$6.GREATER_THAN_SIGN) {
        this._err(ERR$1.incorrectlyClosedComment);

        this.state = DATA_STATE;

        this._emitCurrentToken();
      } else if (cp === $$6.EOF) {
        this._err(ERR$1.eofInComment);

        this._emitCurrentToken();

        this._emitEOFToken();
      } else {
        this.currentToken.data += '--!';

        this._reconsumeInState(COMMENT_STATE);
      }
    } // DOCTYPE state
    //------------------------------------------------------------------

  }, {
    key: DOCTYPE_STATE,
    value: function value(cp) {
      if (isWhitespace(cp)) {
        this.state = BEFORE_DOCTYPE_NAME_STATE;
      } else if (cp === $$6.GREATER_THAN_SIGN) {
        this._reconsumeInState(BEFORE_DOCTYPE_NAME_STATE);
      } else if (cp === $$6.EOF) {
        this._err(ERR$1.eofInDoctype);

        this._createDoctypeToken(null);

        this.currentToken.forceQuirks = true;

        this._emitCurrentToken();

        this._emitEOFToken();
      } else {
        this._err(ERR$1.missingWhitespaceBeforeDoctypeName);

        this._reconsumeInState(BEFORE_DOCTYPE_NAME_STATE);
      }
    } // Before DOCTYPE name state
    //------------------------------------------------------------------

  }, {
    key: BEFORE_DOCTYPE_NAME_STATE,
    value: function value(cp) {
      if (isWhitespace(cp)) {
        return;
      }

      if (isAsciiUpper(cp)) {
        this._createDoctypeToken(toAsciiLowerChar(cp));

        this.state = DOCTYPE_NAME_STATE;
      } else if (cp === $$6.NULL) {
        this._err(ERR$1.unexpectedNullCharacter);

        this._createDoctypeToken(unicode$1.REPLACEMENT_CHARACTER);

        this.state = DOCTYPE_NAME_STATE;
      } else if (cp === $$6.GREATER_THAN_SIGN) {
        this._err(ERR$1.missingDoctypeName);

        this._createDoctypeToken(null);

        this.currentToken.forceQuirks = true;

        this._emitCurrentToken();

        this.state = DATA_STATE;
      } else if (cp === $$6.EOF) {
        this._err(ERR$1.eofInDoctype);

        this._createDoctypeToken(null);

        this.currentToken.forceQuirks = true;

        this._emitCurrentToken();

        this._emitEOFToken();
      } else {
        this._createDoctypeToken(toChar(cp));

        this.state = DOCTYPE_NAME_STATE;
      }
    } // DOCTYPE name state
    //------------------------------------------------------------------

  }, {
    key: DOCTYPE_NAME_STATE,
    value: function value(cp) {
      if (isWhitespace(cp)) {
        this.state = AFTER_DOCTYPE_NAME_STATE;
      } else if (cp === $$6.GREATER_THAN_SIGN) {
        this.state = DATA_STATE;

        this._emitCurrentToken();
      } else if (isAsciiUpper(cp)) {
        this.currentToken.name += toAsciiLowerChar(cp);
      } else if (cp === $$6.NULL) {
        this._err(ERR$1.unexpectedNullCharacter);

        this.currentToken.name += unicode$1.REPLACEMENT_CHARACTER;
      } else if (cp === $$6.EOF) {
        this._err(ERR$1.eofInDoctype);

        this.currentToken.forceQuirks = true;

        this._emitCurrentToken();

        this._emitEOFToken();
      } else {
        this.currentToken.name += toChar(cp);
      }
    } // After DOCTYPE name state
    //------------------------------------------------------------------

  }, {
    key: AFTER_DOCTYPE_NAME_STATE,
    value: function value(cp) {
      if (isWhitespace(cp)) {
        return;
      }

      if (cp === $$6.GREATER_THAN_SIGN) {
        this.state = DATA_STATE;

        this._emitCurrentToken();
      } else if (cp === $$6.EOF) {
        this._err(ERR$1.eofInDoctype);

        this.currentToken.forceQuirks = true;

        this._emitCurrentToken();

        this._emitEOFToken();
      } else if (this._consumeSequenceIfMatch($$.PUBLIC_STRING, cp, false)) {
        this.state = AFTER_DOCTYPE_PUBLIC_KEYWORD_STATE;
      } else if (this._consumeSequenceIfMatch($$.SYSTEM_STRING, cp, false)) {
        this.state = AFTER_DOCTYPE_SYSTEM_KEYWORD_STATE;
      } //NOTE: sequence lookup can be abrupted by hibernation. In that case lookup
      //results are no longer valid and we will need to start over.
      else if (!this._ensureHibernation()) {
          this._err(ERR$1.invalidCharacterSequenceAfterDoctypeName);

          this.currentToken.forceQuirks = true;

          this._reconsumeInState(BOGUS_DOCTYPE_STATE);
        }
    } // After DOCTYPE public keyword state
    //------------------------------------------------------------------

  }, {
    key: AFTER_DOCTYPE_PUBLIC_KEYWORD_STATE,
    value: function value(cp) {
      if (isWhitespace(cp)) {
        this.state = BEFORE_DOCTYPE_PUBLIC_IDENTIFIER_STATE;
      } else if (cp === $$6.QUOTATION_MARK) {
        this._err(ERR$1.missingWhitespaceAfterDoctypePublicKeyword);

        this.currentToken.publicId = '';
        this.state = DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED_STATE;
      } else if (cp === $$6.APOSTROPHE) {
        this._err(ERR$1.missingWhitespaceAfterDoctypePublicKeyword);

        this.currentToken.publicId = '';
        this.state = DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED_STATE;
      } else if (cp === $$6.GREATER_THAN_SIGN) {
        this._err(ERR$1.missingDoctypePublicIdentifier);

        this.currentToken.forceQuirks = true;
        this.state = DATA_STATE;

        this._emitCurrentToken();
      } else if (cp === $$6.EOF) {
        this._err(ERR$1.eofInDoctype);

        this.currentToken.forceQuirks = true;

        this._emitCurrentToken();

        this._emitEOFToken();
      } else {
        this._err(ERR$1.missingQuoteBeforeDoctypePublicIdentifier);

        this.currentToken.forceQuirks = true;

        this._reconsumeInState(BOGUS_DOCTYPE_STATE);
      }
    } // Before DOCTYPE public identifier state
    //------------------------------------------------------------------

  }, {
    key: BEFORE_DOCTYPE_PUBLIC_IDENTIFIER_STATE,
    value: function value(cp) {
      if (isWhitespace(cp)) {
        return;
      }

      if (cp === $$6.QUOTATION_MARK) {
        this.currentToken.publicId = '';
        this.state = DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED_STATE;
      } else if (cp === $$6.APOSTROPHE) {
        this.currentToken.publicId = '';
        this.state = DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED_STATE;
      } else if (cp === $$6.GREATER_THAN_SIGN) {
        this._err(ERR$1.missingDoctypePublicIdentifier);

        this.currentToken.forceQuirks = true;
        this.state = DATA_STATE;

        this._emitCurrentToken();
      } else if (cp === $$6.EOF) {
        this._err(ERR$1.eofInDoctype);

        this.currentToken.forceQuirks = true;

        this._emitCurrentToken();

        this._emitEOFToken();
      } else {
        this._err(ERR$1.missingQuoteBeforeDoctypePublicIdentifier);

        this.currentToken.forceQuirks = true;

        this._reconsumeInState(BOGUS_DOCTYPE_STATE);
      }
    } // DOCTYPE public identifier (double-quoted) state
    //------------------------------------------------------------------

  }, {
    key: DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED_STATE,
    value: function value(cp) {
      if (cp === $$6.QUOTATION_MARK) {
        this.state = AFTER_DOCTYPE_PUBLIC_IDENTIFIER_STATE;
      } else if (cp === $$6.NULL) {
        this._err(ERR$1.unexpectedNullCharacter);

        this.currentToken.publicId += unicode$1.REPLACEMENT_CHARACTER;
      } else if (cp === $$6.GREATER_THAN_SIGN) {
        this._err(ERR$1.abruptDoctypePublicIdentifier);

        this.currentToken.forceQuirks = true;

        this._emitCurrentToken();

        this.state = DATA_STATE;
      } else if (cp === $$6.EOF) {
        this._err(ERR$1.eofInDoctype);

        this.currentToken.forceQuirks = true;

        this._emitCurrentToken();

        this._emitEOFToken();
      } else {
        this.currentToken.publicId += toChar(cp);
      }
    } // DOCTYPE public identifier (single-quoted) state
    //------------------------------------------------------------------

  }, {
    key: DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED_STATE,
    value: function value(cp) {
      if (cp === $$6.APOSTROPHE) {
        this.state = AFTER_DOCTYPE_PUBLIC_IDENTIFIER_STATE;
      } else if (cp === $$6.NULL) {
        this._err(ERR$1.unexpectedNullCharacter);

        this.currentToken.publicId += unicode$1.REPLACEMENT_CHARACTER;
      } else if (cp === $$6.GREATER_THAN_SIGN) {
        this._err(ERR$1.abruptDoctypePublicIdentifier);

        this.currentToken.forceQuirks = true;

        this._emitCurrentToken();

        this.state = DATA_STATE;
      } else if (cp === $$6.EOF) {
        this._err(ERR$1.eofInDoctype);

        this.currentToken.forceQuirks = true;

        this._emitCurrentToken();

        this._emitEOFToken();
      } else {
        this.currentToken.publicId += toChar(cp);
      }
    } // After DOCTYPE public identifier state
    //------------------------------------------------------------------

  }, {
    key: AFTER_DOCTYPE_PUBLIC_IDENTIFIER_STATE,
    value: function value(cp) {
      if (isWhitespace(cp)) {
        this.state = BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS_STATE;
      } else if (cp === $$6.GREATER_THAN_SIGN) {
        this.state = DATA_STATE;

        this._emitCurrentToken();
      } else if (cp === $$6.QUOTATION_MARK) {
        this._err(ERR$1.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers);

        this.currentToken.systemId = '';
        this.state = DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE;
      } else if (cp === $$6.APOSTROPHE) {
        this._err(ERR$1.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers);

        this.currentToken.systemId = '';
        this.state = DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE;
      } else if (cp === $$6.EOF) {
        this._err(ERR$1.eofInDoctype);

        this.currentToken.forceQuirks = true;

        this._emitCurrentToken();

        this._emitEOFToken();
      } else {
        this._err(ERR$1.missingQuoteBeforeDoctypeSystemIdentifier);

        this.currentToken.forceQuirks = true;

        this._reconsumeInState(BOGUS_DOCTYPE_STATE);
      }
    } // Between DOCTYPE public and system identifiers state
    //------------------------------------------------------------------

  }, {
    key: BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS_STATE,
    value: function value(cp) {
      if (isWhitespace(cp)) {
        return;
      }

      if (cp === $$6.GREATER_THAN_SIGN) {
        this._emitCurrentToken();

        this.state = DATA_STATE;
      } else if (cp === $$6.QUOTATION_MARK) {
        this.currentToken.systemId = '';
        this.state = DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE;
      } else if (cp === $$6.APOSTROPHE) {
        this.currentToken.systemId = '';
        this.state = DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE;
      } else if (cp === $$6.EOF) {
        this._err(ERR$1.eofInDoctype);

        this.currentToken.forceQuirks = true;

        this._emitCurrentToken();

        this._emitEOFToken();
      } else {
        this._err(ERR$1.missingQuoteBeforeDoctypeSystemIdentifier);

        this.currentToken.forceQuirks = true;

        this._reconsumeInState(BOGUS_DOCTYPE_STATE);
      }
    } // After DOCTYPE system keyword state
    //------------------------------------------------------------------

  }, {
    key: AFTER_DOCTYPE_SYSTEM_KEYWORD_STATE,
    value: function value(cp) {
      if (isWhitespace(cp)) {
        this.state = BEFORE_DOCTYPE_SYSTEM_IDENTIFIER_STATE;
      } else if (cp === $$6.QUOTATION_MARK) {
        this._err(ERR$1.missingWhitespaceAfterDoctypeSystemKeyword);

        this.currentToken.systemId = '';
        this.state = DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE;
      } else if (cp === $$6.APOSTROPHE) {
        this._err(ERR$1.missingWhitespaceAfterDoctypeSystemKeyword);

        this.currentToken.systemId = '';
        this.state = DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE;
      } else if (cp === $$6.GREATER_THAN_SIGN) {
        this._err(ERR$1.missingDoctypeSystemIdentifier);

        this.currentToken.forceQuirks = true;
        this.state = DATA_STATE;

        this._emitCurrentToken();
      } else if (cp === $$6.EOF) {
        this._err(ERR$1.eofInDoctype);

        this.currentToken.forceQuirks = true;

        this._emitCurrentToken();

        this._emitEOFToken();
      } else {
        this._err(ERR$1.missingQuoteBeforeDoctypeSystemIdentifier);

        this.currentToken.forceQuirks = true;

        this._reconsumeInState(BOGUS_DOCTYPE_STATE);
      }
    } // Before DOCTYPE system identifier state
    //------------------------------------------------------------------

  }, {
    key: BEFORE_DOCTYPE_SYSTEM_IDENTIFIER_STATE,
    value: function value(cp) {
      if (isWhitespace(cp)) {
        return;
      }

      if (cp === $$6.QUOTATION_MARK) {
        this.currentToken.systemId = '';
        this.state = DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE;
      } else if (cp === $$6.APOSTROPHE) {
        this.currentToken.systemId = '';
        this.state = DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE;
      } else if (cp === $$6.GREATER_THAN_SIGN) {
        this._err(ERR$1.missingDoctypeSystemIdentifier);

        this.currentToken.forceQuirks = true;
        this.state = DATA_STATE;

        this._emitCurrentToken();
      } else if (cp === $$6.EOF) {
        this._err(ERR$1.eofInDoctype);

        this.currentToken.forceQuirks = true;

        this._emitCurrentToken();

        this._emitEOFToken();
      } else {
        this._err(ERR$1.missingQuoteBeforeDoctypeSystemIdentifier);

        this.currentToken.forceQuirks = true;

        this._reconsumeInState(BOGUS_DOCTYPE_STATE);
      }
    } // DOCTYPE system identifier (double-quoted) state
    //------------------------------------------------------------------

  }, {
    key: DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE,
    value: function value(cp) {
      if (cp === $$6.QUOTATION_MARK) {
        this.state = AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE;
      } else if (cp === $$6.NULL) {
        this._err(ERR$1.unexpectedNullCharacter);

        this.currentToken.systemId += unicode$1.REPLACEMENT_CHARACTER;
      } else if (cp === $$6.GREATER_THAN_SIGN) {
        this._err(ERR$1.abruptDoctypeSystemIdentifier);

        this.currentToken.forceQuirks = true;

        this._emitCurrentToken();

        this.state = DATA_STATE;
      } else if (cp === $$6.EOF) {
        this._err(ERR$1.eofInDoctype);

        this.currentToken.forceQuirks = true;

        this._emitCurrentToken();

        this._emitEOFToken();
      } else {
        this.currentToken.systemId += toChar(cp);
      }
    } // DOCTYPE system identifier (single-quoted) state
    //------------------------------------------------------------------

  }, {
    key: DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE,
    value: function value(cp) {
      if (cp === $$6.APOSTROPHE) {
        this.state = AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE;
      } else if (cp === $$6.NULL) {
        this._err(ERR$1.unexpectedNullCharacter);

        this.currentToken.systemId += unicode$1.REPLACEMENT_CHARACTER;
      } else if (cp === $$6.GREATER_THAN_SIGN) {
        this._err(ERR$1.abruptDoctypeSystemIdentifier);

        this.currentToken.forceQuirks = true;

        this._emitCurrentToken();

        this.state = DATA_STATE;
      } else if (cp === $$6.EOF) {
        this._err(ERR$1.eofInDoctype);

        this.currentToken.forceQuirks = true;

        this._emitCurrentToken();

        this._emitEOFToken();
      } else {
        this.currentToken.systemId += toChar(cp);
      }
    } // After DOCTYPE system identifier state
    //------------------------------------------------------------------

  }, {
    key: AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE,
    value: function value(cp) {
      if (isWhitespace(cp)) {
        return;
      }

      if (cp === $$6.GREATER_THAN_SIGN) {
        this._emitCurrentToken();

        this.state = DATA_STATE;
      } else if (cp === $$6.EOF) {
        this._err(ERR$1.eofInDoctype);

        this.currentToken.forceQuirks = true;

        this._emitCurrentToken();

        this._emitEOFToken();
      } else {
        this._err(ERR$1.unexpectedCharacterAfterDoctypeSystemIdentifier);

        this._reconsumeInState(BOGUS_DOCTYPE_STATE);
      }
    } // Bogus DOCTYPE state
    //------------------------------------------------------------------

  }, {
    key: BOGUS_DOCTYPE_STATE,
    value: function value(cp) {
      if (cp === $$6.GREATER_THAN_SIGN) {
        this._emitCurrentToken();

        this.state = DATA_STATE;
      } else if (cp === $$6.NULL) {
        this._err(ERR$1.unexpectedNullCharacter);
      } else if (cp === $$6.EOF) {
        this._emitCurrentToken();

        this._emitEOFToken();
      }
    } // CDATA section state
    //------------------------------------------------------------------

  }, {
    key: CDATA_SECTION_STATE,
    value: function value(cp) {
      if (cp === $$6.RIGHT_SQUARE_BRACKET) {
        this.state = CDATA_SECTION_BRACKET_STATE;
      } else if (cp === $$6.EOF) {
        this._err(ERR$1.eofInCdata);

        this._emitEOFToken();
      } else {
        this._emitCodePoint(cp);
      }
    } // CDATA section bracket state
    //------------------------------------------------------------------

  }, {
    key: CDATA_SECTION_BRACKET_STATE,
    value: function value(cp) {
      if (cp === $$6.RIGHT_SQUARE_BRACKET) {
        this.state = CDATA_SECTION_END_STATE;
      } else {
        this._emitChars(']');

        this._reconsumeInState(CDATA_SECTION_STATE);
      }
    } // CDATA section end state
    //------------------------------------------------------------------

  }, {
    key: CDATA_SECTION_END_STATE,
    value: function value(cp) {
      if (cp === $$6.GREATER_THAN_SIGN) {
        this.state = DATA_STATE;
      } else if (cp === $$6.RIGHT_SQUARE_BRACKET) {
        this._emitChars(']');
      } else {
        this._emitChars(']]');

        this._reconsumeInState(CDATA_SECTION_STATE);
      }
    } // Character reference state
    //------------------------------------------------------------------

  }, {
    key: CHARACTER_REFERENCE_STATE,
    value: function value(cp) {
      this.tempBuff = [$$6.AMPERSAND];

      if (cp === $$6.NUMBER_SIGN) {
        this.tempBuff.push(cp);
        this.state = NUMERIC_CHARACTER_REFERENCE_STATE;
      } else if (isAsciiAlphaNumeric(cp)) {
        this._reconsumeInState(NAMED_CHARACTER_REFERENCE_STATE);
      } else {
        this._flushCodePointsConsumedAsCharacterReference();

        this._reconsumeInState(this.returnState);
      }
    } // Named character reference state
    //------------------------------------------------------------------

  }, {
    key: NAMED_CHARACTER_REFERENCE_STATE,
    value: function value(cp) {
      var matchResult = this._matchNamedCharacterReference(cp); //NOTE: matching can be abrupted by hibernation. In that case match
      //results are no longer valid and we will need to start over.


      if (this._ensureHibernation()) {
        this.tempBuff = [$$6.AMPERSAND];
      } else if (matchResult) {
        var withSemicolon = this.tempBuff[this.tempBuff.length - 1] === $$6.SEMICOLON;

        if (!this._isCharacterReferenceAttributeQuirk(withSemicolon)) {
          if (!withSemicolon) {
            this._errOnNextCodePoint(ERR$1.missingSemicolonAfterCharacterReference);
          }

          this.tempBuff = matchResult;
        }

        this._flushCodePointsConsumedAsCharacterReference();

        this.state = this.returnState;
      } else {
        this._flushCodePointsConsumedAsCharacterReference();

        this.state = AMBIGUOUS_AMPERSAND_STATE;
      }
    } // Ambiguos ampersand state
    //------------------------------------------------------------------

  }, {
    key: AMBIGUOUS_AMPERSAND_STATE,
    value: function value(cp) {
      if (isAsciiAlphaNumeric(cp)) {
        if (this._isCharacterReferenceInAttribute()) {
          this.currentAttr.value += toChar(cp);
        } else {
          this._emitCodePoint(cp);
        }
      } else {
        if (cp === $$6.SEMICOLON) {
          this._err(ERR$1.unknownNamedCharacterReference);
        }

        this._reconsumeInState(this.returnState);
      }
    } // Numeric character reference state
    //------------------------------------------------------------------

  }, {
    key: NUMERIC_CHARACTER_REFERENCE_STATE,
    value: function value(cp) {
      this.charRefCode = 0;

      if (cp === $$6.LATIN_SMALL_X || cp === $$6.LATIN_CAPITAL_X) {
        this.tempBuff.push(cp);
        this.state = HEXADEMICAL_CHARACTER_REFERENCE_START_STATE;
      } else {
        this._reconsumeInState(DECIMAL_CHARACTER_REFERENCE_START_STATE);
      }
    } // Hexademical character reference start state
    //------------------------------------------------------------------

  }, {
    key: HEXADEMICAL_CHARACTER_REFERENCE_START_STATE,
    value: function value(cp) {
      if (isAsciiHexDigit(cp)) {
        this._reconsumeInState(HEXADEMICAL_CHARACTER_REFERENCE_STATE);
      } else {
        this._err(ERR$1.absenceOfDigitsInNumericCharacterReference);

        this._flushCodePointsConsumedAsCharacterReference();

        this._reconsumeInState(this.returnState);
      }
    } // Decimal character reference start state
    //------------------------------------------------------------------

  }, {
    key: DECIMAL_CHARACTER_REFERENCE_START_STATE,
    value: function value(cp) {
      if (isAsciiDigit(cp)) {
        this._reconsumeInState(DECIMAL_CHARACTER_REFERENCE_STATE);
      } else {
        this._err(ERR$1.absenceOfDigitsInNumericCharacterReference);

        this._flushCodePointsConsumedAsCharacterReference();

        this._reconsumeInState(this.returnState);
      }
    } // Hexademical character reference state
    //------------------------------------------------------------------

  }, {
    key: HEXADEMICAL_CHARACTER_REFERENCE_STATE,
    value: function value(cp) {
      if (isAsciiUpperHexDigit(cp)) {
        this.charRefCode = this.charRefCode * 16 + cp - 0x37;
      } else if (isAsciiLowerHexDigit(cp)) {
        this.charRefCode = this.charRefCode * 16 + cp - 0x57;
      } else if (isAsciiDigit(cp)) {
        this.charRefCode = this.charRefCode * 16 + cp - 0x30;
      } else if (cp === $$6.SEMICOLON) {
        this.state = NUMERIC_CHARACTER_REFERENCE_END_STATE;
      } else {
        this._err(ERR$1.missingSemicolonAfterCharacterReference);

        this._reconsumeInState(NUMERIC_CHARACTER_REFERENCE_END_STATE);
      }
    } // Decimal character reference state
    //------------------------------------------------------------------

  }, {
    key: DECIMAL_CHARACTER_REFERENCE_STATE,
    value: function value(cp) {
      if (isAsciiDigit(cp)) {
        this.charRefCode = this.charRefCode * 10 + cp - 0x30;
      } else if (cp === $$6.SEMICOLON) {
        this.state = NUMERIC_CHARACTER_REFERENCE_END_STATE;
      } else {
        this._err(ERR$1.missingSemicolonAfterCharacterReference);

        this._reconsumeInState(NUMERIC_CHARACTER_REFERENCE_END_STATE);
      }
    } // Numeric character reference end state
    //------------------------------------------------------------------

  }, {
    key: NUMERIC_CHARACTER_REFERENCE_END_STATE,
    value: function value() {
      if (this.charRefCode === $$6.NULL) {
        this._err(ERR$1.nullCharacterReference);

        this.charRefCode = $$6.REPLACEMENT_CHARACTER;
      } else if (this.charRefCode > 0x10ffff) {
        this._err(ERR$1.characterReferenceOutsideUnicodeRange);

        this.charRefCode = $$6.REPLACEMENT_CHARACTER;
      } else if (unicode$1.isSurrogate(this.charRefCode)) {
        this._err(ERR$1.surrogateCharacterReference);

        this.charRefCode = $$6.REPLACEMENT_CHARACTER;
      } else if (unicode$1.isUndefinedCodePoint(this.charRefCode)) {
        this._err(ERR$1.noncharacterCharacterReference);
      } else if (unicode$1.isControlCodePoint(this.charRefCode) || this.charRefCode === $$6.CARRIAGE_RETURN) {
        this._err(ERR$1.controlCharacterReference);

        var replacement = C1_CONTROLS_REFERENCE_REPLACEMENTS[this.charRefCode];

        if (replacement) {
          this.charRefCode = replacement;
        }
      }

      this.tempBuff = [this.charRefCode];

      this._flushCodePointsConsumedAsCharacterReference();

      this._reconsumeInState(this.returnState);
    }
  }]);

  return Tokenizer;
}(); //Token types


Tokenizer$4.CHARACTER_TOKEN = 'CHARACTER_TOKEN';
Tokenizer$4.NULL_CHARACTER_TOKEN = 'NULL_CHARACTER_TOKEN';
Tokenizer$4.WHITESPACE_CHARACTER_TOKEN = 'WHITESPACE_CHARACTER_TOKEN';
Tokenizer$4.START_TAG_TOKEN = 'START_TAG_TOKEN';
Tokenizer$4.END_TAG_TOKEN = 'END_TAG_TOKEN';
Tokenizer$4.COMMENT_TOKEN = 'COMMENT_TOKEN';
Tokenizer$4.DOCTYPE_TOKEN = 'DOCTYPE_TOKEN';
Tokenizer$4.EOF_TOKEN = 'EOF_TOKEN';
Tokenizer$4.HIBERNATION_TOKEN = 'HIBERNATION_TOKEN'; //Tokenizer initial states for different modes

Tokenizer$4.MODE = {
  DATA: DATA_STATE,
  RCDATA: RCDATA_STATE,
  RAWTEXT: RAWTEXT_STATE,
  SCRIPT_DATA: SCRIPT_DATA_STATE,
  PLAINTEXT: PLAINTEXT_STATE
}; //Static

Tokenizer$4.getTokenAttr = function (token, attrName) {
  for (var i = token.attrs.length - 1; i >= 0; i--) {
    if (token.attrs[i].name === attrName) {
      return token.attrs[i].value;
    }
  }

  return null;
};

var tokenizer = Tokenizer$4;

var html$2 = {};

var _NS$HTML, _NS$MATHML, _NS$SVG, _html$SPECIAL_ELEMENT;

var NS$4 = html$2.NAMESPACES = {
  HTML: 'http://www.w3.org/1999/xhtml',
  MATHML: 'http://www.w3.org/1998/Math/MathML',
  SVG: 'http://www.w3.org/2000/svg',
  XLINK: 'http://www.w3.org/1999/xlink',
  XML: 'http://www.w3.org/XML/1998/namespace',
  XMLNS: 'http://www.w3.org/2000/xmlns/'
};
html$2.ATTRS = {
  TYPE: 'type',
  ACTION: 'action',
  ENCODING: 'encoding',
  PROMPT: 'prompt',
  NAME: 'name',
  COLOR: 'color',
  FACE: 'face',
  SIZE: 'size'
};
html$2.DOCUMENT_MODE = {
  NO_QUIRKS: 'no-quirks',
  QUIRKS: 'quirks',
  LIMITED_QUIRKS: 'limited-quirks'
};
var $$5 = html$2.TAG_NAMES = {
  A: 'a',
  ADDRESS: 'address',
  ANNOTATION_XML: 'annotation-xml',
  APPLET: 'applet',
  AREA: 'area',
  ARTICLE: 'article',
  ASIDE: 'aside',
  B: 'b',
  BASE: 'base',
  BASEFONT: 'basefont',
  BGSOUND: 'bgsound',
  BIG: 'big',
  BLOCKQUOTE: 'blockquote',
  BODY: 'body',
  BR: 'br',
  BUTTON: 'button',
  CAPTION: 'caption',
  CENTER: 'center',
  CODE: 'code',
  COL: 'col',
  COLGROUP: 'colgroup',
  DD: 'dd',
  DESC: 'desc',
  DETAILS: 'details',
  DIALOG: 'dialog',
  DIR: 'dir',
  DIV: 'div',
  DL: 'dl',
  DT: 'dt',
  EM: 'em',
  EMBED: 'embed',
  FIELDSET: 'fieldset',
  FIGCAPTION: 'figcaption',
  FIGURE: 'figure',
  FONT: 'font',
  FOOTER: 'footer',
  FOREIGN_OBJECT: 'foreignObject',
  FORM: 'form',
  FRAME: 'frame',
  FRAMESET: 'frameset',
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
  H4: 'h4',
  H5: 'h5',
  H6: 'h6',
  HEAD: 'head',
  HEADER: 'header',
  HGROUP: 'hgroup',
  HR: 'hr',
  HTML: 'html',
  I: 'i',
  IMG: 'img',
  IMAGE: 'image',
  INPUT: 'input',
  IFRAME: 'iframe',
  KEYGEN: 'keygen',
  LABEL: 'label',
  LI: 'li',
  LINK: 'link',
  LISTING: 'listing',
  MAIN: 'main',
  MALIGNMARK: 'malignmark',
  MARQUEE: 'marquee',
  MATH: 'math',
  MENU: 'menu',
  META: 'meta',
  MGLYPH: 'mglyph',
  MI: 'mi',
  MO: 'mo',
  MN: 'mn',
  MS: 'ms',
  MTEXT: 'mtext',
  NAV: 'nav',
  NOBR: 'nobr',
  NOFRAMES: 'noframes',
  NOEMBED: 'noembed',
  NOSCRIPT: 'noscript',
  OBJECT: 'object',
  OL: 'ol',
  OPTGROUP: 'optgroup',
  OPTION: 'option',
  P: 'p',
  PARAM: 'param',
  PLAINTEXT: 'plaintext',
  PRE: 'pre',
  RB: 'rb',
  RP: 'rp',
  RT: 'rt',
  RTC: 'rtc',
  RUBY: 'ruby',
  S: 's',
  SCRIPT: 'script',
  SECTION: 'section',
  SELECT: 'select',
  SOURCE: 'source',
  SMALL: 'small',
  SPAN: 'span',
  STRIKE: 'strike',
  STRONG: 'strong',
  STYLE: 'style',
  SUB: 'sub',
  SUMMARY: 'summary',
  SUP: 'sup',
  TABLE: 'table',
  TBODY: 'tbody',
  TEMPLATE: 'template',
  TEXTAREA: 'textarea',
  TFOOT: 'tfoot',
  TD: 'td',
  TH: 'th',
  THEAD: 'thead',
  TITLE: 'title',
  TR: 'tr',
  TRACK: 'track',
  TT: 'tt',
  U: 'u',
  UL: 'ul',
  SVG: 'svg',
  VAR: 'var',
  WBR: 'wbr',
  XMP: 'xmp'
};
html$2.SPECIAL_ELEMENTS = (_html$SPECIAL_ELEMENT = {}, _defineProperty(_html$SPECIAL_ELEMENT, NS$4.HTML, (_NS$HTML = {}, _defineProperty(_NS$HTML, $$5.ADDRESS, true), _defineProperty(_NS$HTML, $$5.APPLET, true), _defineProperty(_NS$HTML, $$5.AREA, true), _defineProperty(_NS$HTML, $$5.ARTICLE, true), _defineProperty(_NS$HTML, $$5.ASIDE, true), _defineProperty(_NS$HTML, $$5.BASE, true), _defineProperty(_NS$HTML, $$5.BASEFONT, true), _defineProperty(_NS$HTML, $$5.BGSOUND, true), _defineProperty(_NS$HTML, $$5.BLOCKQUOTE, true), _defineProperty(_NS$HTML, $$5.BODY, true), _defineProperty(_NS$HTML, $$5.BR, true), _defineProperty(_NS$HTML, $$5.BUTTON, true), _defineProperty(_NS$HTML, $$5.CAPTION, true), _defineProperty(_NS$HTML, $$5.CENTER, true), _defineProperty(_NS$HTML, $$5.COL, true), _defineProperty(_NS$HTML, $$5.COLGROUP, true), _defineProperty(_NS$HTML, $$5.DD, true), _defineProperty(_NS$HTML, $$5.DETAILS, true), _defineProperty(_NS$HTML, $$5.DIR, true), _defineProperty(_NS$HTML, $$5.DIV, true), _defineProperty(_NS$HTML, $$5.DL, true), _defineProperty(_NS$HTML, $$5.DT, true), _defineProperty(_NS$HTML, $$5.EMBED, true), _defineProperty(_NS$HTML, $$5.FIELDSET, true), _defineProperty(_NS$HTML, $$5.FIGCAPTION, true), _defineProperty(_NS$HTML, $$5.FIGURE, true), _defineProperty(_NS$HTML, $$5.FOOTER, true), _defineProperty(_NS$HTML, $$5.FORM, true), _defineProperty(_NS$HTML, $$5.FRAME, true), _defineProperty(_NS$HTML, $$5.FRAMESET, true), _defineProperty(_NS$HTML, $$5.H1, true), _defineProperty(_NS$HTML, $$5.H2, true), _defineProperty(_NS$HTML, $$5.H3, true), _defineProperty(_NS$HTML, $$5.H4, true), _defineProperty(_NS$HTML, $$5.H5, true), _defineProperty(_NS$HTML, $$5.H6, true), _defineProperty(_NS$HTML, $$5.HEAD, true), _defineProperty(_NS$HTML, $$5.HEADER, true), _defineProperty(_NS$HTML, $$5.HGROUP, true), _defineProperty(_NS$HTML, $$5.HR, true), _defineProperty(_NS$HTML, $$5.HTML, true), _defineProperty(_NS$HTML, $$5.IFRAME, true), _defineProperty(_NS$HTML, $$5.IMG, true), _defineProperty(_NS$HTML, $$5.INPUT, true), _defineProperty(_NS$HTML, $$5.LI, true), _defineProperty(_NS$HTML, $$5.LINK, true), _defineProperty(_NS$HTML, $$5.LISTING, true), _defineProperty(_NS$HTML, $$5.MAIN, true), _defineProperty(_NS$HTML, $$5.MARQUEE, true), _defineProperty(_NS$HTML, $$5.MENU, true), _defineProperty(_NS$HTML, $$5.META, true), _defineProperty(_NS$HTML, $$5.NAV, true), _defineProperty(_NS$HTML, $$5.NOEMBED, true), _defineProperty(_NS$HTML, $$5.NOFRAMES, true), _defineProperty(_NS$HTML, $$5.NOSCRIPT, true), _defineProperty(_NS$HTML, $$5.OBJECT, true), _defineProperty(_NS$HTML, $$5.OL, true), _defineProperty(_NS$HTML, $$5.P, true), _defineProperty(_NS$HTML, $$5.PARAM, true), _defineProperty(_NS$HTML, $$5.PLAINTEXT, true), _defineProperty(_NS$HTML, $$5.PRE, true), _defineProperty(_NS$HTML, $$5.SCRIPT, true), _defineProperty(_NS$HTML, $$5.SECTION, true), _defineProperty(_NS$HTML, $$5.SELECT, true), _defineProperty(_NS$HTML, $$5.SOURCE, true), _defineProperty(_NS$HTML, $$5.STYLE, true), _defineProperty(_NS$HTML, $$5.SUMMARY, true), _defineProperty(_NS$HTML, $$5.TABLE, true), _defineProperty(_NS$HTML, $$5.TBODY, true), _defineProperty(_NS$HTML, $$5.TD, true), _defineProperty(_NS$HTML, $$5.TEMPLATE, true), _defineProperty(_NS$HTML, $$5.TEXTAREA, true), _defineProperty(_NS$HTML, $$5.TFOOT, true), _defineProperty(_NS$HTML, $$5.TH, true), _defineProperty(_NS$HTML, $$5.THEAD, true), _defineProperty(_NS$HTML, $$5.TITLE, true), _defineProperty(_NS$HTML, $$5.TR, true), _defineProperty(_NS$HTML, $$5.TRACK, true), _defineProperty(_NS$HTML, $$5.UL, true), _defineProperty(_NS$HTML, $$5.WBR, true), _defineProperty(_NS$HTML, $$5.XMP, true), _NS$HTML)), _defineProperty(_html$SPECIAL_ELEMENT, NS$4.MATHML, (_NS$MATHML = {}, _defineProperty(_NS$MATHML, $$5.MI, true), _defineProperty(_NS$MATHML, $$5.MO, true), _defineProperty(_NS$MATHML, $$5.MN, true), _defineProperty(_NS$MATHML, $$5.MS, true), _defineProperty(_NS$MATHML, $$5.MTEXT, true), _defineProperty(_NS$MATHML, $$5.ANNOTATION_XML, true), _NS$MATHML)), _defineProperty(_html$SPECIAL_ELEMENT, NS$4.SVG, (_NS$SVG = {}, _defineProperty(_NS$SVG, $$5.TITLE, true), _defineProperty(_NS$SVG, $$5.FOREIGN_OBJECT, true), _defineProperty(_NS$SVG, $$5.DESC, true), _NS$SVG)), _html$SPECIAL_ELEMENT);

var HTML$4 = html$2; //Aliases

var $$4 = HTML$4.TAG_NAMES;
var NS$3 = HTML$4.NAMESPACES; //Element utils
//OPTIMIZATION: Integer comparisons are low-cost, so we can use very fast tag name length filters here.
//It's faster than using dictionary.

function isImpliedEndTagRequired(tn) {
  switch (tn.length) {
    case 1:
      return tn === $$4.P;

    case 2:
      return tn === $$4.RB || tn === $$4.RP || tn === $$4.RT || tn === $$4.DD || tn === $$4.DT || tn === $$4.LI;

    case 3:
      return tn === $$4.RTC;

    case 6:
      return tn === $$4.OPTION;

    case 8:
      return tn === $$4.OPTGROUP;
  }

  return false;
}

function isImpliedEndTagRequiredThoroughly(tn) {
  switch (tn.length) {
    case 1:
      return tn === $$4.P;

    case 2:
      return tn === $$4.RB || tn === $$4.RP || tn === $$4.RT || tn === $$4.DD || tn === $$4.DT || tn === $$4.LI || tn === $$4.TD || tn === $$4.TH || tn === $$4.TR;

    case 3:
      return tn === $$4.RTC;

    case 5:
      return tn === $$4.TBODY || tn === $$4.TFOOT || tn === $$4.THEAD;

    case 6:
      return tn === $$4.OPTION;

    case 7:
      return tn === $$4.CAPTION;

    case 8:
      return tn === $$4.OPTGROUP || tn === $$4.COLGROUP;
  }

  return false;
}

function isScopingElement(tn, ns) {
  switch (tn.length) {
    case 2:
      if (tn === $$4.TD || tn === $$4.TH) {
        return ns === NS$3.HTML;
      } else if (tn === $$4.MI || tn === $$4.MO || tn === $$4.MN || tn === $$4.MS) {
        return ns === NS$3.MATHML;
      }

      break;

    case 4:
      if (tn === $$4.HTML) {
        return ns === NS$3.HTML;
      } else if (tn === $$4.DESC) {
        return ns === NS$3.SVG;
      }

      break;

    case 5:
      if (tn === $$4.TABLE) {
        return ns === NS$3.HTML;
      } else if (tn === $$4.MTEXT) {
        return ns === NS$3.MATHML;
      } else if (tn === $$4.TITLE) {
        return ns === NS$3.SVG;
      }

      break;

    case 6:
      return (tn === $$4.APPLET || tn === $$4.OBJECT) && ns === NS$3.HTML;

    case 7:
      return (tn === $$4.CAPTION || tn === $$4.MARQUEE) && ns === NS$3.HTML;

    case 8:
      return tn === $$4.TEMPLATE && ns === NS$3.HTML;

    case 13:
      return tn === $$4.FOREIGN_OBJECT && ns === NS$3.SVG;

    case 14:
      return tn === $$4.ANNOTATION_XML && ns === NS$3.MATHML;
  }

  return false;
} //Stack of open elements


var OpenElementStack$1 = /*#__PURE__*/function () {
  function OpenElementStack(document, treeAdapter) {
    _classCallCheck(this, OpenElementStack);

    this.stackTop = -1;
    this.items = [];
    this.current = document;
    this.currentTagName = null;
    this.currentTmplContent = null;
    this.tmplCount = 0;
    this.treeAdapter = treeAdapter;
  } //Index of element


  _createClass(OpenElementStack, [{
    key: "_indexOf",
    value: function _indexOf(element) {
      var idx = -1;

      for (var i = this.stackTop; i >= 0; i--) {
        if (this.items[i] === element) {
          idx = i;
          break;
        }
      }

      return idx;
    } //Update current element

  }, {
    key: "_isInTemplate",
    value: function _isInTemplate() {
      return this.currentTagName === $$4.TEMPLATE && this.treeAdapter.getNamespaceURI(this.current) === NS$3.HTML;
    }
  }, {
    key: "_updateCurrentElement",
    value: function _updateCurrentElement() {
      this.current = this.items[this.stackTop];
      this.currentTagName = this.current && this.treeAdapter.getTagName(this.current);
      this.currentTmplContent = this._isInTemplate() ? this.treeAdapter.getTemplateContent(this.current) : null;
    } //Mutations

  }, {
    key: "push",
    value: function push(element) {
      this.items[++this.stackTop] = element;

      this._updateCurrentElement();

      if (this._isInTemplate()) {
        this.tmplCount++;
      }
    }
  }, {
    key: "pop",
    value: function pop() {
      this.stackTop--;

      if (this.tmplCount > 0 && this._isInTemplate()) {
        this.tmplCount--;
      }

      this._updateCurrentElement();
    }
  }, {
    key: "replace",
    value: function replace(oldElement, newElement) {
      var idx = this._indexOf(oldElement);

      this.items[idx] = newElement;

      if (idx === this.stackTop) {
        this._updateCurrentElement();
      }
    }
  }, {
    key: "insertAfter",
    value: function insertAfter(referenceElement, newElement) {
      var insertionIdx = this._indexOf(referenceElement) + 1;
      this.items.splice(insertionIdx, 0, newElement);

      if (insertionIdx === ++this.stackTop) {
        this._updateCurrentElement();
      }
    }
  }, {
    key: "popUntilTagNamePopped",
    value: function popUntilTagNamePopped(tagName) {
      while (this.stackTop > -1) {
        var tn = this.currentTagName;
        var ns = this.treeAdapter.getNamespaceURI(this.current);
        this.pop();

        if (tn === tagName && ns === NS$3.HTML) {
          break;
        }
      }
    }
  }, {
    key: "popUntilElementPopped",
    value: function popUntilElementPopped(element) {
      while (this.stackTop > -1) {
        var poppedElement = this.current;
        this.pop();

        if (poppedElement === element) {
          break;
        }
      }
    }
  }, {
    key: "popUntilNumberedHeaderPopped",
    value: function popUntilNumberedHeaderPopped() {
      while (this.stackTop > -1) {
        var tn = this.currentTagName;
        var ns = this.treeAdapter.getNamespaceURI(this.current);
        this.pop();

        if (tn === $$4.H1 || tn === $$4.H2 || tn === $$4.H3 || tn === $$4.H4 || tn === $$4.H5 || tn === $$4.H6 && ns === NS$3.HTML) {
          break;
        }
      }
    }
  }, {
    key: "popUntilTableCellPopped",
    value: function popUntilTableCellPopped() {
      while (this.stackTop > -1) {
        var tn = this.currentTagName;
        var ns = this.treeAdapter.getNamespaceURI(this.current);
        this.pop();

        if (tn === $$4.TD || tn === $$4.TH && ns === NS$3.HTML) {
          break;
        }
      }
    }
  }, {
    key: "popAllUpToHtmlElement",
    value: function popAllUpToHtmlElement() {
      //NOTE: here we assume that root <html> element is always first in the open element stack, so
      //we perform this fast stack clean up.
      this.stackTop = 0;

      this._updateCurrentElement();
    }
  }, {
    key: "clearBackToTableContext",
    value: function clearBackToTableContext() {
      while (this.currentTagName !== $$4.TABLE && this.currentTagName !== $$4.TEMPLATE && this.currentTagName !== $$4.HTML || this.treeAdapter.getNamespaceURI(this.current) !== NS$3.HTML) {
        this.pop();
      }
    }
  }, {
    key: "clearBackToTableBodyContext",
    value: function clearBackToTableBodyContext() {
      while (this.currentTagName !== $$4.TBODY && this.currentTagName !== $$4.TFOOT && this.currentTagName !== $$4.THEAD && this.currentTagName !== $$4.TEMPLATE && this.currentTagName !== $$4.HTML || this.treeAdapter.getNamespaceURI(this.current) !== NS$3.HTML) {
        this.pop();
      }
    }
  }, {
    key: "clearBackToTableRowContext",
    value: function clearBackToTableRowContext() {
      while (this.currentTagName !== $$4.TR && this.currentTagName !== $$4.TEMPLATE && this.currentTagName !== $$4.HTML || this.treeAdapter.getNamespaceURI(this.current) !== NS$3.HTML) {
        this.pop();
      }
    }
  }, {
    key: "remove",
    value: function remove(element) {
      for (var i = this.stackTop; i >= 0; i--) {
        if (this.items[i] === element) {
          this.items.splice(i, 1);
          this.stackTop--;

          this._updateCurrentElement();

          break;
        }
      }
    } //Search

  }, {
    key: "tryPeekProperlyNestedBodyElement",
    value: function tryPeekProperlyNestedBodyElement() {
      //Properly nested <body> element (should be second element in stack).
      var element = this.items[1];
      return element && this.treeAdapter.getTagName(element) === $$4.BODY ? element : null;
    }
  }, {
    key: "contains",
    value: function contains(element) {
      return this._indexOf(element) > -1;
    }
  }, {
    key: "getCommonAncestor",
    value: function getCommonAncestor(element) {
      var elementIdx = this._indexOf(element);

      return --elementIdx >= 0 ? this.items[elementIdx] : null;
    }
  }, {
    key: "isRootHtmlElementCurrent",
    value: function isRootHtmlElementCurrent() {
      return this.stackTop === 0 && this.currentTagName === $$4.HTML;
    } //Element in scope

  }, {
    key: "hasInScope",
    value: function hasInScope(tagName) {
      for (var i = this.stackTop; i >= 0; i--) {
        var tn = this.treeAdapter.getTagName(this.items[i]);
        var ns = this.treeAdapter.getNamespaceURI(this.items[i]);

        if (tn === tagName && ns === NS$3.HTML) {
          return true;
        }

        if (isScopingElement(tn, ns)) {
          return false;
        }
      }

      return true;
    }
  }, {
    key: "hasNumberedHeaderInScope",
    value: function hasNumberedHeaderInScope() {
      for (var i = this.stackTop; i >= 0; i--) {
        var tn = this.treeAdapter.getTagName(this.items[i]);
        var ns = this.treeAdapter.getNamespaceURI(this.items[i]);

        if ((tn === $$4.H1 || tn === $$4.H2 || tn === $$4.H3 || tn === $$4.H4 || tn === $$4.H5 || tn === $$4.H6) && ns === NS$3.HTML) {
          return true;
        }

        if (isScopingElement(tn, ns)) {
          return false;
        }
      }

      return true;
    }
  }, {
    key: "hasInListItemScope",
    value: function hasInListItemScope(tagName) {
      for (var i = this.stackTop; i >= 0; i--) {
        var tn = this.treeAdapter.getTagName(this.items[i]);
        var ns = this.treeAdapter.getNamespaceURI(this.items[i]);

        if (tn === tagName && ns === NS$3.HTML) {
          return true;
        }

        if ((tn === $$4.UL || tn === $$4.OL) && ns === NS$3.HTML || isScopingElement(tn, ns)) {
          return false;
        }
      }

      return true;
    }
  }, {
    key: "hasInButtonScope",
    value: function hasInButtonScope(tagName) {
      for (var i = this.stackTop; i >= 0; i--) {
        var tn = this.treeAdapter.getTagName(this.items[i]);
        var ns = this.treeAdapter.getNamespaceURI(this.items[i]);

        if (tn === tagName && ns === NS$3.HTML) {
          return true;
        }

        if (tn === $$4.BUTTON && ns === NS$3.HTML || isScopingElement(tn, ns)) {
          return false;
        }
      }

      return true;
    }
  }, {
    key: "hasInTableScope",
    value: function hasInTableScope(tagName) {
      for (var i = this.stackTop; i >= 0; i--) {
        var tn = this.treeAdapter.getTagName(this.items[i]);
        var ns = this.treeAdapter.getNamespaceURI(this.items[i]);

        if (ns !== NS$3.HTML) {
          continue;
        }

        if (tn === tagName) {
          return true;
        }

        if (tn === $$4.TABLE || tn === $$4.TEMPLATE || tn === $$4.HTML) {
          return false;
        }
      }

      return true;
    }
  }, {
    key: "hasTableBodyContextInTableScope",
    value: function hasTableBodyContextInTableScope() {
      for (var i = this.stackTop; i >= 0; i--) {
        var tn = this.treeAdapter.getTagName(this.items[i]);
        var ns = this.treeAdapter.getNamespaceURI(this.items[i]);

        if (ns !== NS$3.HTML) {
          continue;
        }

        if (tn === $$4.TBODY || tn === $$4.THEAD || tn === $$4.TFOOT) {
          return true;
        }

        if (tn === $$4.TABLE || tn === $$4.HTML) {
          return false;
        }
      }

      return true;
    }
  }, {
    key: "hasInSelectScope",
    value: function hasInSelectScope(tagName) {
      for (var i = this.stackTop; i >= 0; i--) {
        var tn = this.treeAdapter.getTagName(this.items[i]);
        var ns = this.treeAdapter.getNamespaceURI(this.items[i]);

        if (ns !== NS$3.HTML) {
          continue;
        }

        if (tn === tagName) {
          return true;
        }

        if (tn !== $$4.OPTION && tn !== $$4.OPTGROUP) {
          return false;
        }
      }

      return true;
    } //Implied end tags

  }, {
    key: "generateImpliedEndTags",
    value: function generateImpliedEndTags() {
      while (isImpliedEndTagRequired(this.currentTagName)) {
        this.pop();
      }
    }
  }, {
    key: "generateImpliedEndTagsThoroughly",
    value: function generateImpliedEndTagsThoroughly() {
      while (isImpliedEndTagRequiredThoroughly(this.currentTagName)) {
        this.pop();
      }
    }
  }, {
    key: "generateImpliedEndTagsWithExclusion",
    value: function generateImpliedEndTagsWithExclusion(exclusionTagName) {
      while (isImpliedEndTagRequired(this.currentTagName) && this.currentTagName !== exclusionTagName) {
        this.pop();
      }
    }
  }]);

  return OpenElementStack;
}();

var openElementStack = OpenElementStack$1;

var NOAH_ARK_CAPACITY = 3; //List of formatting elements

var FormattingElementList$1 = /*#__PURE__*/function () {
  function FormattingElementList(treeAdapter) {
    _classCallCheck(this, FormattingElementList);

    this.length = 0;
    this.entries = [];
    this.treeAdapter = treeAdapter;
    this.bookmark = null;
  } //Noah Ark's condition
  //OPTIMIZATION: at first we try to find possible candidates for exclusion using
  //lightweight heuristics without thorough attributes check.


  _createClass(FormattingElementList, [{
    key: "_getNoahArkConditionCandidates",
    value: function _getNoahArkConditionCandidates(newElement) {
      var candidates = [];

      if (this.length >= NOAH_ARK_CAPACITY) {
        var neAttrsLength = this.treeAdapter.getAttrList(newElement).length;
        var neTagName = this.treeAdapter.getTagName(newElement);
        var neNamespaceURI = this.treeAdapter.getNamespaceURI(newElement);

        for (var i = this.length - 1; i >= 0; i--) {
          var entry = this.entries[i];

          if (entry.type === FormattingElementList.MARKER_ENTRY) {
            break;
          }

          var element = entry.element;
          var elementAttrs = this.treeAdapter.getAttrList(element);
          var isCandidate = this.treeAdapter.getTagName(element) === neTagName && this.treeAdapter.getNamespaceURI(element) === neNamespaceURI && elementAttrs.length === neAttrsLength;

          if (isCandidate) {
            candidates.push({
              idx: i,
              attrs: elementAttrs
            });
          }
        }
      }

      return candidates.length < NOAH_ARK_CAPACITY ? [] : candidates;
    }
  }, {
    key: "_ensureNoahArkCondition",
    value: function _ensureNoahArkCondition(newElement) {
      var candidates = this._getNoahArkConditionCandidates(newElement);

      var cLength = candidates.length;

      if (cLength) {
        var neAttrs = this.treeAdapter.getAttrList(newElement);
        var neAttrsLength = neAttrs.length;
        var neAttrsMap = Object.create(null); //NOTE: build attrs map for the new element so we can perform fast lookups

        for (var i = 0; i < neAttrsLength; i++) {
          var neAttr = neAttrs[i];
          neAttrsMap[neAttr.name] = neAttr.value;
        }

        for (var _i = 0; _i < neAttrsLength; _i++) {
          for (var j = 0; j < cLength; j++) {
            var cAttr = candidates[j].attrs[_i];

            if (neAttrsMap[cAttr.name] !== cAttr.value) {
              candidates.splice(j, 1);
              cLength--;
            }

            if (candidates.length < NOAH_ARK_CAPACITY) {
              return;
            }
          }
        } //NOTE: remove bottommost candidates until Noah's Ark condition will not be met


        for (var _i2 = cLength - 1; _i2 >= NOAH_ARK_CAPACITY - 1; _i2--) {
          this.entries.splice(candidates[_i2].idx, 1);
          this.length--;
        }
      }
    } //Mutations

  }, {
    key: "insertMarker",
    value: function insertMarker() {
      this.entries.push({
        type: FormattingElementList.MARKER_ENTRY
      });
      this.length++;
    }
  }, {
    key: "pushElement",
    value: function pushElement(element, token) {
      this._ensureNoahArkCondition(element);

      this.entries.push({
        type: FormattingElementList.ELEMENT_ENTRY,
        element: element,
        token: token
      });
      this.length++;
    }
  }, {
    key: "insertElementAfterBookmark",
    value: function insertElementAfterBookmark(element, token) {
      var bookmarkIdx = this.length - 1;

      for (; bookmarkIdx >= 0; bookmarkIdx--) {
        if (this.entries[bookmarkIdx] === this.bookmark) {
          break;
        }
      }

      this.entries.splice(bookmarkIdx + 1, 0, {
        type: FormattingElementList.ELEMENT_ENTRY,
        element: element,
        token: token
      });
      this.length++;
    }
  }, {
    key: "removeEntry",
    value: function removeEntry(entry) {
      for (var i = this.length - 1; i >= 0; i--) {
        if (this.entries[i] === entry) {
          this.entries.splice(i, 1);
          this.length--;
          break;
        }
      }
    }
  }, {
    key: "clearToLastMarker",
    value: function clearToLastMarker() {
      while (this.length) {
        var entry = this.entries.pop();
        this.length--;

        if (entry.type === FormattingElementList.MARKER_ENTRY) {
          break;
        }
      }
    } //Search

  }, {
    key: "getElementEntryInScopeWithTagName",
    value: function getElementEntryInScopeWithTagName(tagName) {
      for (var i = this.length - 1; i >= 0; i--) {
        var entry = this.entries[i];

        if (entry.type === FormattingElementList.MARKER_ENTRY) {
          return null;
        }

        if (this.treeAdapter.getTagName(entry.element) === tagName) {
          return entry;
        }
      }

      return null;
    }
  }, {
    key: "getElementEntry",
    value: function getElementEntry(element) {
      for (var i = this.length - 1; i >= 0; i--) {
        var entry = this.entries[i];

        if (entry.type === FormattingElementList.ELEMENT_ENTRY && entry.element === element) {
          return entry;
        }
      }

      return null;
    }
  }]);

  return FormattingElementList;
}(); //Entry types


FormattingElementList$1.MARKER_ENTRY = 'MARKER_ENTRY';
FormattingElementList$1.ELEMENT_ENTRY = 'ELEMENT_ENTRY';
var formattingElementList = FormattingElementList$1;

var Mixin$9 = /*#__PURE__*/function () {
  function Mixin(host) {
    _classCallCheck(this, Mixin);

    var originalMethods = {};

    var overriddenMethods = this._getOverriddenMethods(this, originalMethods);

    for (var _i = 0, _Object$keys = Object.keys(overriddenMethods); _i < _Object$keys.length; _i++) {
      var key = _Object$keys[_i];

      if (typeof overriddenMethods[key] === 'function') {
        originalMethods[key] = host[key];
        host[key] = overriddenMethods[key];
      }
    }
  }

  _createClass(Mixin, [{
    key: "_getOverriddenMethods",
    value: function _getOverriddenMethods() {
      throw new Error('Not implemented');
    }
  }]);

  return Mixin;
}();

Mixin$9.install = function (host, Ctor, opts) {
  if (!host.__mixins) {
    host.__mixins = [];
  }

  for (var i = 0; i < host.__mixins.length; i++) {
    if (host.__mixins[i].constructor === Ctor) {
      return host.__mixins[i];
    }
  }

  var mixin = new Ctor(host, opts);

  host.__mixins.push(mixin);

  return mixin;
};

var mixin = Mixin$9;

var Mixin$8 = mixin;

var PositionTrackingPreprocessorMixin$2 = /*#__PURE__*/function (_Mixin) {
  _inherits(PositionTrackingPreprocessorMixin, _Mixin);

  var _super = _createSuper(PositionTrackingPreprocessorMixin);

  function PositionTrackingPreprocessorMixin(preprocessor) {
    var _this;

    _classCallCheck(this, PositionTrackingPreprocessorMixin);

    _this = _super.call(this, preprocessor);
    _this.preprocessor = preprocessor;
    _this.isEol = false;
    _this.lineStartPos = 0;
    _this.droppedBufferSize = 0;
    _this.offset = 0;
    _this.col = 0;
    _this.line = 1;
    return _this;
  }

  _createClass(PositionTrackingPreprocessorMixin, [{
    key: "_getOverriddenMethods",
    value: function _getOverriddenMethods(mxn, orig) {
      return {
        advance: function advance() {
          var pos = this.pos + 1;
          var ch = this.html[pos]; //NOTE: LF should be in the last column of the line

          if (mxn.isEol) {
            mxn.isEol = false;
            mxn.line++;
            mxn.lineStartPos = pos;
          }

          if (ch === '\n' || ch === '\r' && this.html[pos + 1] !== '\n') {
            mxn.isEol = true;
          }

          mxn.col = pos - mxn.lineStartPos + 1;
          mxn.offset = mxn.droppedBufferSize + pos;
          return orig.advance.call(this);
        },
        retreat: function retreat() {
          orig.retreat.call(this);
          mxn.isEol = false;
          mxn.col = this.pos - mxn.lineStartPos + 1;
        },
        dropParsedChunk: function dropParsedChunk() {
          var prevPos = this.pos;
          orig.dropParsedChunk.call(this);
          var reduction = prevPos - this.pos;
          mxn.lineStartPos -= reduction;
          mxn.droppedBufferSize += reduction;
          mxn.offset = mxn.droppedBufferSize + this.pos;
        }
      };
    }
  }]);

  return PositionTrackingPreprocessorMixin;
}(Mixin$8);

var preprocessorMixin$1 = PositionTrackingPreprocessorMixin$2;

var Mixin$7 = mixin;
var Tokenizer$3 = tokenizer;
var PositionTrackingPreprocessorMixin$1 = preprocessorMixin$1;

var LocationInfoTokenizerMixin$2 = /*#__PURE__*/function (_Mixin) {
  _inherits(LocationInfoTokenizerMixin, _Mixin);

  var _super = _createSuper(LocationInfoTokenizerMixin);

  function LocationInfoTokenizerMixin(tokenizer) {
    var _this;

    _classCallCheck(this, LocationInfoTokenizerMixin);

    _this = _super.call(this, tokenizer);
    _this.tokenizer = tokenizer;
    _this.posTracker = Mixin$7.install(tokenizer.preprocessor, PositionTrackingPreprocessorMixin$1);
    _this.currentAttrLocation = null;
    _this.ctLoc = null;
    return _this;
  }

  _createClass(LocationInfoTokenizerMixin, [{
    key: "_getCurrentLocation",
    value: function _getCurrentLocation() {
      return {
        startLine: this.posTracker.line,
        startCol: this.posTracker.col,
        startOffset: this.posTracker.offset,
        endLine: -1,
        endCol: -1,
        endOffset: -1
      };
    }
  }, {
    key: "_attachCurrentAttrLocationInfo",
    value: function _attachCurrentAttrLocationInfo() {
      this.currentAttrLocation.endLine = this.posTracker.line;
      this.currentAttrLocation.endCol = this.posTracker.col;
      this.currentAttrLocation.endOffset = this.posTracker.offset;
      var currentToken = this.tokenizer.currentToken;
      var currentAttr = this.tokenizer.currentAttr;

      if (!currentToken.location.attrs) {
        currentToken.location.attrs = Object.create(null);
      }

      currentToken.location.attrs[currentAttr.name] = this.currentAttrLocation;
    }
  }, {
    key: "_getOverriddenMethods",
    value: function _getOverriddenMethods(mxn, orig) {
      var methods = {
        _createStartTagToken: function _createStartTagToken() {
          orig._createStartTagToken.call(this);

          this.currentToken.location = mxn.ctLoc;
        },
        _createEndTagToken: function _createEndTagToken() {
          orig._createEndTagToken.call(this);

          this.currentToken.location = mxn.ctLoc;
        },
        _createCommentToken: function _createCommentToken() {
          orig._createCommentToken.call(this);

          this.currentToken.location = mxn.ctLoc;
        },
        _createDoctypeToken: function _createDoctypeToken(initialName) {
          orig._createDoctypeToken.call(this, initialName);

          this.currentToken.location = mxn.ctLoc;
        },
        _createCharacterToken: function _createCharacterToken(type, ch) {
          orig._createCharacterToken.call(this, type, ch);

          this.currentCharacterToken.location = mxn.ctLoc;
        },
        _createEOFToken: function _createEOFToken() {
          orig._createEOFToken.call(this);

          this.currentToken.location = mxn._getCurrentLocation();
        },
        _createAttr: function _createAttr(attrNameFirstCh) {
          orig._createAttr.call(this, attrNameFirstCh);

          mxn.currentAttrLocation = mxn._getCurrentLocation();
        },
        _leaveAttrName: function _leaveAttrName(toState) {
          orig._leaveAttrName.call(this, toState);

          mxn._attachCurrentAttrLocationInfo();
        },
        _leaveAttrValue: function _leaveAttrValue(toState) {
          orig._leaveAttrValue.call(this, toState);

          mxn._attachCurrentAttrLocationInfo();
        },
        _emitCurrentToken: function _emitCurrentToken() {
          var ctLoc = this.currentToken.location; //NOTE: if we have pending character token make it's end location equal to the
          //current token's start location.

          if (this.currentCharacterToken) {
            this.currentCharacterToken.location.endLine = ctLoc.startLine;
            this.currentCharacterToken.location.endCol = ctLoc.startCol;
            this.currentCharacterToken.location.endOffset = ctLoc.startOffset;
          }

          if (this.currentToken.type === Tokenizer$3.EOF_TOKEN) {
            ctLoc.endLine = ctLoc.startLine;
            ctLoc.endCol = ctLoc.startCol;
            ctLoc.endOffset = ctLoc.startOffset;
          } else {
            ctLoc.endLine = mxn.posTracker.line;
            ctLoc.endCol = mxn.posTracker.col + 1;
            ctLoc.endOffset = mxn.posTracker.offset + 1;
          }

          orig._emitCurrentToken.call(this);
        },
        _emitCurrentCharacterToken: function _emitCurrentCharacterToken() {
          var ctLoc = this.currentCharacterToken && this.currentCharacterToken.location; //NOTE: if we have character token and it's location wasn't set in the _emitCurrentToken(),
          //then set it's location at the current preprocessor position.
          //We don't need to increment preprocessor position, since character token
          //emission is always forced by the start of the next character token here.
          //So, we already have advanced position.

          if (ctLoc && ctLoc.endOffset === -1) {
            ctLoc.endLine = mxn.posTracker.line;
            ctLoc.endCol = mxn.posTracker.col;
            ctLoc.endOffset = mxn.posTracker.offset;
          }

          orig._emitCurrentCharacterToken.call(this);
        }
      }; //NOTE: patch initial states for each mode to obtain token start position

      Object.keys(Tokenizer$3.MODE).forEach(function (modeName) {
        var state = Tokenizer$3.MODE[modeName];

        methods[state] = function (cp) {
          mxn.ctLoc = mxn._getCurrentLocation();
          orig[state].call(this, cp);
        };
      });
      return methods;
    }
  }]);

  return LocationInfoTokenizerMixin;
}(Mixin$7);

var tokenizerMixin$1 = LocationInfoTokenizerMixin$2;

var Mixin$6 = mixin;

var LocationInfoOpenElementStackMixin$1 = /*#__PURE__*/function (_Mixin) {
  _inherits(LocationInfoOpenElementStackMixin, _Mixin);

  var _super = _createSuper(LocationInfoOpenElementStackMixin);

  function LocationInfoOpenElementStackMixin(stack, opts) {
    var _this;

    _classCallCheck(this, LocationInfoOpenElementStackMixin);

    _this = _super.call(this, stack);
    _this.onItemPop = opts.onItemPop;
    return _this;
  }

  _createClass(LocationInfoOpenElementStackMixin, [{
    key: "_getOverriddenMethods",
    value: function _getOverriddenMethods(mxn, orig) {
      return {
        pop: function pop() {
          mxn.onItemPop(this.current);
          orig.pop.call(this);
        },
        popAllUpToHtmlElement: function popAllUpToHtmlElement() {
          for (var i = this.stackTop; i > 0; i--) {
            mxn.onItemPop(this.items[i]);
          }

          orig.popAllUpToHtmlElement.call(this);
        },
        remove: function remove(element) {
          mxn.onItemPop(this.current);
          orig.remove.call(this, element);
        }
      };
    }
  }]);

  return LocationInfoOpenElementStackMixin;
}(Mixin$6);

var openElementStackMixin = LocationInfoOpenElementStackMixin$1;

var Mixin$5 = mixin;
var Tokenizer$2 = tokenizer;
var LocationInfoTokenizerMixin$1 = tokenizerMixin$1;
var LocationInfoOpenElementStackMixin = openElementStackMixin;
var HTML$3 = html$2; //Aliases

var $$3 = HTML$3.TAG_NAMES;

var LocationInfoParserMixin$1 = /*#__PURE__*/function (_Mixin) {
  _inherits(LocationInfoParserMixin, _Mixin);

  var _super = _createSuper(LocationInfoParserMixin);

  function LocationInfoParserMixin(parser) {
    var _this;

    _classCallCheck(this, LocationInfoParserMixin);

    _this = _super.call(this, parser);
    _this.parser = parser;
    _this.treeAdapter = _this.parser.treeAdapter;
    _this.posTracker = null;
    _this.lastStartTagToken = null;
    _this.lastFosterParentingLocation = null;
    _this.currentToken = null;
    return _this;
  }

  _createClass(LocationInfoParserMixin, [{
    key: "_setStartLocation",
    value: function _setStartLocation(element) {
      var loc = null;

      if (this.lastStartTagToken) {
        loc = Object.assign({}, this.lastStartTagToken.location);
        loc.startTag = this.lastStartTagToken.location;
      }

      this.treeAdapter.setNodeSourceCodeLocation(element, loc);
    }
  }, {
    key: "_setEndLocation",
    value: function _setEndLocation(element, closingToken) {
      var loc = this.treeAdapter.getNodeSourceCodeLocation(element);

      if (loc) {
        if (closingToken.location) {
          var ctLoc = closingToken.location;
          var tn = this.treeAdapter.getTagName(element); // NOTE: For cases like <p> <p> </p> - First 'p' closes without a closing
          // tag and for cases like <td> <p> </td> - 'p' closes without a closing tag.

          var isClosingEndTag = closingToken.type === Tokenizer$2.END_TAG_TOKEN && tn === closingToken.tagName;
          var endLoc = {};

          if (isClosingEndTag) {
            endLoc.endTag = Object.assign({}, ctLoc);
            endLoc.endLine = ctLoc.endLine;
            endLoc.endCol = ctLoc.endCol;
            endLoc.endOffset = ctLoc.endOffset;
          } else {
            endLoc.endLine = ctLoc.startLine;
            endLoc.endCol = ctLoc.startCol;
            endLoc.endOffset = ctLoc.startOffset;
          }

          this.treeAdapter.updateNodeSourceCodeLocation(element, endLoc);
        }
      }
    }
  }, {
    key: "_getOverriddenMethods",
    value: function _getOverriddenMethods(mxn, orig) {
      return {
        _bootstrap: function _bootstrap(document, fragmentContext) {
          orig._bootstrap.call(this, document, fragmentContext);

          mxn.lastStartTagToken = null;
          mxn.lastFosterParentingLocation = null;
          mxn.currentToken = null;
          var tokenizerMixin = Mixin$5.install(this.tokenizer, LocationInfoTokenizerMixin$1);
          mxn.posTracker = tokenizerMixin.posTracker;
          Mixin$5.install(this.openElements, LocationInfoOpenElementStackMixin, {
            onItemPop: function onItemPop(element) {
              mxn._setEndLocation(element, mxn.currentToken);
            }
          });
        },
        _runParsingLoop: function _runParsingLoop(scriptHandler) {
          orig._runParsingLoop.call(this, scriptHandler); // NOTE: generate location info for elements
          // that remains on open element stack


          for (var i = this.openElements.stackTop; i >= 0; i--) {
            mxn._setEndLocation(this.openElements.items[i], mxn.currentToken);
          }
        },
        //Token processing
        _processTokenInForeignContent: function _processTokenInForeignContent(token) {
          mxn.currentToken = token;

          orig._processTokenInForeignContent.call(this, token);
        },
        _processToken: function _processToken(token) {
          mxn.currentToken = token;

          orig._processToken.call(this, token); //NOTE: <body> and <html> are never popped from the stack, so we need to updated
          //their end location explicitly.


          var requireExplicitUpdate = token.type === Tokenizer$2.END_TAG_TOKEN && (token.tagName === $$3.HTML || token.tagName === $$3.BODY && this.openElements.hasInScope($$3.BODY));

          if (requireExplicitUpdate) {
            for (var i = this.openElements.stackTop; i >= 0; i--) {
              var element = this.openElements.items[i];

              if (this.treeAdapter.getTagName(element) === token.tagName) {
                mxn._setEndLocation(element, token);

                break;
              }
            }
          }
        },
        //Doctype
        _setDocumentType: function _setDocumentType(token) {
          orig._setDocumentType.call(this, token);

          var documentChildren = this.treeAdapter.getChildNodes(this.document);
          var cnLength = documentChildren.length;

          for (var i = 0; i < cnLength; i++) {
            var node = documentChildren[i];

            if (this.treeAdapter.isDocumentTypeNode(node)) {
              this.treeAdapter.setNodeSourceCodeLocation(node, token.location);
              break;
            }
          }
        },
        //Elements
        _attachElementToTree: function _attachElementToTree(element) {
          //NOTE: _attachElementToTree is called from _appendElement, _insertElement and _insertTemplate methods.
          //So we will use token location stored in this methods for the element.
          mxn._setStartLocation(element);

          mxn.lastStartTagToken = null;

          orig._attachElementToTree.call(this, element);
        },
        _appendElement: function _appendElement(token, namespaceURI) {
          mxn.lastStartTagToken = token;

          orig._appendElement.call(this, token, namespaceURI);
        },
        _insertElement: function _insertElement(token, namespaceURI) {
          mxn.lastStartTagToken = token;

          orig._insertElement.call(this, token, namespaceURI);
        },
        _insertTemplate: function _insertTemplate(token) {
          mxn.lastStartTagToken = token;

          orig._insertTemplate.call(this, token);

          var tmplContent = this.treeAdapter.getTemplateContent(this.openElements.current);
          this.treeAdapter.setNodeSourceCodeLocation(tmplContent, null);
        },
        _insertFakeRootElement: function _insertFakeRootElement() {
          orig._insertFakeRootElement.call(this);

          this.treeAdapter.setNodeSourceCodeLocation(this.openElements.current, null);
        },
        //Comments
        _appendCommentNode: function _appendCommentNode(token, parent) {
          orig._appendCommentNode.call(this, token, parent);

          var children = this.treeAdapter.getChildNodes(parent);
          var commentNode = children[children.length - 1];
          this.treeAdapter.setNodeSourceCodeLocation(commentNode, token.location);
        },
        //Text
        _findFosterParentingLocation: function _findFosterParentingLocation() {
          //NOTE: store last foster parenting location, so we will be able to find inserted text
          //in case of foster parenting
          mxn.lastFosterParentingLocation = orig._findFosterParentingLocation.call(this);
          return mxn.lastFosterParentingLocation;
        },
        _insertCharacters: function _insertCharacters(token) {
          orig._insertCharacters.call(this, token);

          var hasFosterParent = this._shouldFosterParentOnInsertion();

          var parent = hasFosterParent && mxn.lastFosterParentingLocation.parent || this.openElements.currentTmplContent || this.openElements.current;
          var siblings = this.treeAdapter.getChildNodes(parent);
          var textNodeIdx = hasFosterParent && mxn.lastFosterParentingLocation.beforeElement ? siblings.indexOf(mxn.lastFosterParentingLocation.beforeElement) - 1 : siblings.length - 1;
          var textNode = siblings[textNodeIdx]; //NOTE: if we have location assigned by another token, then just update end position

          var tnLoc = this.treeAdapter.getNodeSourceCodeLocation(textNode);

          if (tnLoc) {
            var _token$location = token.location,
                endLine = _token$location.endLine,
                endCol = _token$location.endCol,
                endOffset = _token$location.endOffset;
            this.treeAdapter.updateNodeSourceCodeLocation(textNode, {
              endLine: endLine,
              endCol: endCol,
              endOffset: endOffset
            });
          } else {
            this.treeAdapter.setNodeSourceCodeLocation(textNode, token.location);
          }
        }
      };
    }
  }]);

  return LocationInfoParserMixin;
}(Mixin$5);

var parserMixin$1 = LocationInfoParserMixin$1;

var Mixin$4 = mixin;

var ErrorReportingMixinBase$3 = /*#__PURE__*/function (_Mixin) {
  _inherits(ErrorReportingMixinBase, _Mixin);

  var _super = _createSuper(ErrorReportingMixinBase);

  function ErrorReportingMixinBase(host, opts) {
    var _this;

    _classCallCheck(this, ErrorReportingMixinBase);

    _this = _super.call(this, host);
    _this.posTracker = null;
    _this.onParseError = opts.onParseError;
    return _this;
  }

  _createClass(ErrorReportingMixinBase, [{
    key: "_setErrorLocation",
    value: function _setErrorLocation(err) {
      err.startLine = err.endLine = this.posTracker.line;
      err.startCol = err.endCol = this.posTracker.col;
      err.startOffset = err.endOffset = this.posTracker.offset;
    }
  }, {
    key: "_reportError",
    value: function _reportError(code) {
      var err = {
        code: code,
        startLine: -1,
        startCol: -1,
        startOffset: -1,
        endLine: -1,
        endCol: -1,
        endOffset: -1
      };

      this._setErrorLocation(err);

      this.onParseError(err);
    }
  }, {
    key: "_getOverriddenMethods",
    value: function _getOverriddenMethods(mxn) {
      return {
        _err: function _err(code) {
          mxn._reportError(code);
        }
      };
    }
  }]);

  return ErrorReportingMixinBase;
}(Mixin$4);

var mixinBase = ErrorReportingMixinBase$3;

var ErrorReportingMixinBase$2 = mixinBase;
var PositionTrackingPreprocessorMixin = preprocessorMixin$1;
var Mixin$3 = mixin;

var ErrorReportingPreprocessorMixin$1 = /*#__PURE__*/function (_ErrorReportingMixinB) {
  _inherits(ErrorReportingPreprocessorMixin, _ErrorReportingMixinB);

  var _super = _createSuper(ErrorReportingPreprocessorMixin);

  function ErrorReportingPreprocessorMixin(preprocessor, opts) {
    var _this;

    _classCallCheck(this, ErrorReportingPreprocessorMixin);

    _this = _super.call(this, preprocessor, opts);
    _this.posTracker = Mixin$3.install(preprocessor, PositionTrackingPreprocessorMixin);
    _this.lastErrOffset = -1;
    return _this;
  }

  _createClass(ErrorReportingPreprocessorMixin, [{
    key: "_reportError",
    value: function _reportError(code) {
      //NOTE: avoid reporting error twice on advance/retreat
      if (this.lastErrOffset !== this.posTracker.offset) {
        this.lastErrOffset = this.posTracker.offset;

        _get(_getPrototypeOf(ErrorReportingPreprocessorMixin.prototype), "_reportError", this).call(this, code);
      }
    }
  }]);

  return ErrorReportingPreprocessorMixin;
}(ErrorReportingMixinBase$2);

var preprocessorMixin = ErrorReportingPreprocessorMixin$1;

var ErrorReportingMixinBase$1 = mixinBase;
var ErrorReportingPreprocessorMixin = preprocessorMixin;
var Mixin$2 = mixin;

var ErrorReportingTokenizerMixin$1 = /*#__PURE__*/function (_ErrorReportingMixinB) {
  _inherits(ErrorReportingTokenizerMixin, _ErrorReportingMixinB);

  var _super = _createSuper(ErrorReportingTokenizerMixin);

  function ErrorReportingTokenizerMixin(tokenizer, opts) {
    var _this;

    _classCallCheck(this, ErrorReportingTokenizerMixin);

    _this = _super.call(this, tokenizer, opts);
    var preprocessorMixin = Mixin$2.install(tokenizer.preprocessor, ErrorReportingPreprocessorMixin, opts);
    _this.posTracker = preprocessorMixin.posTracker;
    return _this;
  }

  return ErrorReportingTokenizerMixin;
}(ErrorReportingMixinBase$1);

var tokenizerMixin = ErrorReportingTokenizerMixin$1;

var ErrorReportingMixinBase = mixinBase;
var ErrorReportingTokenizerMixin = tokenizerMixin;
var LocationInfoTokenizerMixin = tokenizerMixin$1;
var Mixin$1 = mixin;

var ErrorReportingParserMixin$1 = /*#__PURE__*/function (_ErrorReportingMixinB) {
  _inherits(ErrorReportingParserMixin, _ErrorReportingMixinB);

  var _super = _createSuper(ErrorReportingParserMixin);

  function ErrorReportingParserMixin(parser, opts) {
    var _this;

    _classCallCheck(this, ErrorReportingParserMixin);

    _this = _super.call(this, parser, opts);
    _this.opts = opts;
    _this.ctLoc = null;
    _this.locBeforeToken = false;
    return _this;
  }

  _createClass(ErrorReportingParserMixin, [{
    key: "_setErrorLocation",
    value: function _setErrorLocation(err) {
      if (this.ctLoc) {
        err.startLine = this.ctLoc.startLine;
        err.startCol = this.ctLoc.startCol;
        err.startOffset = this.ctLoc.startOffset;
        err.endLine = this.locBeforeToken ? this.ctLoc.startLine : this.ctLoc.endLine;
        err.endCol = this.locBeforeToken ? this.ctLoc.startCol : this.ctLoc.endCol;
        err.endOffset = this.locBeforeToken ? this.ctLoc.startOffset : this.ctLoc.endOffset;
      }
    }
  }, {
    key: "_getOverriddenMethods",
    value: function _getOverriddenMethods(mxn, orig) {
      return {
        _bootstrap: function _bootstrap(document, fragmentContext) {
          orig._bootstrap.call(this, document, fragmentContext);

          Mixin$1.install(this.tokenizer, ErrorReportingTokenizerMixin, mxn.opts);
          Mixin$1.install(this.tokenizer, LocationInfoTokenizerMixin);
        },
        _processInputToken: function _processInputToken(token) {
          mxn.ctLoc = token.location;

          orig._processInputToken.call(this, token);
        },
        _err: function _err(code, options) {
          mxn.locBeforeToken = options && options.beforeToken;

          mxn._reportError(code);
        }
      };
    }
  }]);

  return ErrorReportingParserMixin;
}(ErrorReportingMixinBase);

var parserMixin = ErrorReportingParserMixin$1;

var _default = {};

var DOCUMENT_MODE$2 = html$2.DOCUMENT_MODE; //Node construction

_default.createDocument = function () {
  return {
    nodeName: '#document',
    mode: DOCUMENT_MODE$2.NO_QUIRKS,
    childNodes: []
  };
};

_default.createDocumentFragment = function () {
  return {
    nodeName: '#document-fragment',
    childNodes: []
  };
};

_default.createElement = function (tagName, namespaceURI, attrs) {
  return {
    nodeName: tagName,
    tagName: tagName,
    attrs: attrs,
    namespaceURI: namespaceURI,
    childNodes: [],
    parentNode: null
  };
};

_default.createCommentNode = function (data) {
  return {
    nodeName: '#comment',
    data: data,
    parentNode: null
  };
};

var createTextNode$1 = function createTextNode(value) {
  return {
    nodeName: '#text',
    value: value,
    parentNode: null
  };
}; //Tree mutation


var appendChild$1 = _default.appendChild = function (parentNode, newNode) {
  parentNode.childNodes.push(newNode);
  newNode.parentNode = parentNode;
};

var insertBefore$2 = _default.insertBefore = function (parentNode, newNode, referenceNode) {
  var insertionIdx = parentNode.childNodes.indexOf(referenceNode);
  parentNode.childNodes.splice(insertionIdx, 0, newNode);
  newNode.parentNode = parentNode;
};

_default.setTemplateContent = function (templateElement, contentElement) {
  templateElement.content = contentElement;
};

_default.getTemplateContent = function (templateElement) {
  return templateElement.content;
};

_default.setDocumentType = function (document, name, publicId, systemId) {
  var doctypeNode = null;

  for (var i = 0; i < document.childNodes.length; i++) {
    if (document.childNodes[i].nodeName === '#documentType') {
      doctypeNode = document.childNodes[i];
      break;
    }
  }

  if (doctypeNode) {
    doctypeNode.name = name;
    doctypeNode.publicId = publicId;
    doctypeNode.systemId = systemId;
  } else {
    appendChild$1(document, {
      nodeName: '#documentType',
      name: name,
      publicId: publicId,
      systemId: systemId
    });
  }
};

_default.setDocumentMode = function (document, mode) {
  document.mode = mode;
};

_default.getDocumentMode = function (document) {
  return document.mode;
};

_default.detachNode = function (node) {
  if (node.parentNode) {
    var idx = node.parentNode.childNodes.indexOf(node);
    node.parentNode.childNodes.splice(idx, 1);
    node.parentNode = null;
  }
};

_default.insertText = function (parentNode, text) {
  if (parentNode.childNodes.length) {
    var prevNode = parentNode.childNodes[parentNode.childNodes.length - 1];

    if (prevNode.nodeName === '#text') {
      prevNode.value += text;
      return;
    }
  }

  appendChild$1(parentNode, createTextNode$1(text));
};

_default.insertTextBefore = function (parentNode, text, referenceNode) {
  var prevNode = parentNode.childNodes[parentNode.childNodes.indexOf(referenceNode) - 1];

  if (prevNode && prevNode.nodeName === '#text') {
    prevNode.value += text;
  } else {
    insertBefore$2(parentNode, createTextNode$1(text), referenceNode);
  }
};

_default.adoptAttributes = function (recipient, attrs) {
  var recipientAttrsMap = [];

  for (var i = 0; i < recipient.attrs.length; i++) {
    recipientAttrsMap.push(recipient.attrs[i].name);
  }

  for (var j = 0; j < attrs.length; j++) {
    if (recipientAttrsMap.indexOf(attrs[j].name) === -1) {
      recipient.attrs.push(attrs[j]);
    }
  }
}; //Tree traversing


_default.getFirstChild = function (node) {
  return node.childNodes[0];
};

_default.getChildNodes = function (node) {
  return node.childNodes;
};

_default.getParentNode = function (node) {
  return node.parentNode;
};

_default.getAttrList = function (element) {
  return element.attrs;
}; //Node data


_default.getTagName = function (element) {
  return element.tagName;
};

_default.getNamespaceURI = function (element) {
  return element.namespaceURI;
};

_default.getTextNodeContent = function (textNode) {
  return textNode.value;
};

_default.getCommentNodeContent = function (commentNode) {
  return commentNode.data;
};

_default.getDocumentTypeNodeName = function (doctypeNode) {
  return doctypeNode.name;
};

_default.getDocumentTypeNodePublicId = function (doctypeNode) {
  return doctypeNode.publicId;
};

_default.getDocumentTypeNodeSystemId = function (doctypeNode) {
  return doctypeNode.systemId;
}; //Node types


_default.isTextNode = function (node) {
  return node.nodeName === '#text';
};

_default.isCommentNode = function (node) {
  return node.nodeName === '#comment';
};

_default.isDocumentTypeNode = function (node) {
  return node.nodeName === '#documentType';
};

_default.isElementNode = function (node) {
  return !!node.tagName;
}; // Source code location


_default.setNodeSourceCodeLocation = function (node, location) {
  node.sourceCodeLocation = location;
};

_default.getNodeSourceCodeLocation = function (node) {
  return node.sourceCodeLocation;
};

_default.updateNodeSourceCodeLocation = function (node, endLocation) {
  node.sourceCodeLocation = Object.assign(node.sourceCodeLocation, endLocation);
};

var mergeOptions$2 = function mergeOptions(defaults, options) {
  options = options || Object.create(null);
  return [defaults, options].reduce(function (merged, optObj) {
    Object.keys(optObj).forEach(function (key) {
      merged[key] = optObj[key];
    });
    return merged;
  }, Object.create(null));
};

var doctype$3 = {};

var DOCUMENT_MODE$1 = html$2.DOCUMENT_MODE; //Const

var VALID_DOCTYPE_NAME = 'html';
var VALID_SYSTEM_ID = 'about:legacy-compat';
var QUIRKS_MODE_SYSTEM_ID = 'http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd';
var QUIRKS_MODE_PUBLIC_ID_PREFIXES = ['+//silmaril//dtd html pro v0r11 19970101//', '-//as//dtd html 3.0 aswedit + extensions//', '-//advasoft ltd//dtd html 3.0 aswedit + extensions//', '-//ietf//dtd html 2.0 level 1//', '-//ietf//dtd html 2.0 level 2//', '-//ietf//dtd html 2.0 strict level 1//', '-//ietf//dtd html 2.0 strict level 2//', '-//ietf//dtd html 2.0 strict//', '-//ietf//dtd html 2.0//', '-//ietf//dtd html 2.1e//', '-//ietf//dtd html 3.0//', '-//ietf//dtd html 3.2 final//', '-//ietf//dtd html 3.2//', '-//ietf//dtd html 3//', '-//ietf//dtd html level 0//', '-//ietf//dtd html level 1//', '-//ietf//dtd html level 2//', '-//ietf//dtd html level 3//', '-//ietf//dtd html strict level 0//', '-//ietf//dtd html strict level 1//', '-//ietf//dtd html strict level 2//', '-//ietf//dtd html strict level 3//', '-//ietf//dtd html strict//', '-//ietf//dtd html//', '-//metrius//dtd metrius presentational//', '-//microsoft//dtd internet explorer 2.0 html strict//', '-//microsoft//dtd internet explorer 2.0 html//', '-//microsoft//dtd internet explorer 2.0 tables//', '-//microsoft//dtd internet explorer 3.0 html strict//', '-//microsoft//dtd internet explorer 3.0 html//', '-//microsoft//dtd internet explorer 3.0 tables//', '-//netscape comm. corp.//dtd html//', '-//netscape comm. corp.//dtd strict html//', "-//o'reilly and associates//dtd html 2.0//", "-//o'reilly and associates//dtd html extended 1.0//", "-//o'reilly and associates//dtd html extended relaxed 1.0//", '-//sq//dtd html 2.0 hotmetal + extensions//', '-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//', '-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//', '-//spyglass//dtd html 2.0 extended//', '-//sun microsystems corp.//dtd hotjava html//', '-//sun microsystems corp.//dtd hotjava strict html//', '-//w3c//dtd html 3 1995-03-24//', '-//w3c//dtd html 3.2 draft//', '-//w3c//dtd html 3.2 final//', '-//w3c//dtd html 3.2//', '-//w3c//dtd html 3.2s draft//', '-//w3c//dtd html 4.0 frameset//', '-//w3c//dtd html 4.0 transitional//', '-//w3c//dtd html experimental 19960712//', '-//w3c//dtd html experimental 970421//', '-//w3c//dtd w3 html//', '-//w3o//dtd w3 html 3.0//', '-//webtechs//dtd mozilla html 2.0//', '-//webtechs//dtd mozilla html//'];
var QUIRKS_MODE_NO_SYSTEM_ID_PUBLIC_ID_PREFIXES = QUIRKS_MODE_PUBLIC_ID_PREFIXES.concat(['-//w3c//dtd html 4.01 frameset//', '-//w3c//dtd html 4.01 transitional//']);
var QUIRKS_MODE_PUBLIC_IDS = ['-//w3o//dtd w3 html strict 3.0//en//', '-/w3c/dtd html 4.0 transitional/en', 'html'];
var LIMITED_QUIRKS_PUBLIC_ID_PREFIXES = ['-//w3c//dtd xhtml 1.0 frameset//', '-//w3c//dtd xhtml 1.0 transitional//'];
var LIMITED_QUIRKS_WITH_SYSTEM_ID_PUBLIC_ID_PREFIXES = LIMITED_QUIRKS_PUBLIC_ID_PREFIXES.concat(['-//w3c//dtd html 4.01 frameset//', '-//w3c//dtd html 4.01 transitional//']); //Utils

function enquoteDoctypeId(id) {
  var quote = id.indexOf('"') !== -1 ? "'" : '"';
  return quote + id + quote;
}

function hasPrefix(publicId, prefixes) {
  for (var i = 0; i < prefixes.length; i++) {
    if (publicId.indexOf(prefixes[i]) === 0) {
      return true;
    }
  }

  return false;
} //API


doctype$3.isConforming = function (token) {
  return token.name === VALID_DOCTYPE_NAME && token.publicId === null && (token.systemId === null || token.systemId === VALID_SYSTEM_ID);
};

doctype$3.getDocumentMode = function (token) {
  if (token.name !== VALID_DOCTYPE_NAME) {
    return DOCUMENT_MODE$1.QUIRKS;
  }

  var systemId = token.systemId;

  if (systemId && systemId.toLowerCase() === QUIRKS_MODE_SYSTEM_ID) {
    return DOCUMENT_MODE$1.QUIRKS;
  }

  var publicId = token.publicId;

  if (publicId !== null) {
    publicId = publicId.toLowerCase();

    if (QUIRKS_MODE_PUBLIC_IDS.indexOf(publicId) > -1) {
      return DOCUMENT_MODE$1.QUIRKS;
    }

    var prefixes = systemId === null ? QUIRKS_MODE_NO_SYSTEM_ID_PUBLIC_ID_PREFIXES : QUIRKS_MODE_PUBLIC_ID_PREFIXES;

    if (hasPrefix(publicId, prefixes)) {
      return DOCUMENT_MODE$1.QUIRKS;
    }

    prefixes = systemId === null ? LIMITED_QUIRKS_PUBLIC_ID_PREFIXES : LIMITED_QUIRKS_WITH_SYSTEM_ID_PUBLIC_ID_PREFIXES;

    if (hasPrefix(publicId, prefixes)) {
      return DOCUMENT_MODE$1.LIMITED_QUIRKS;
    }
  }

  return DOCUMENT_MODE$1.NO_QUIRKS;
};

doctype$3.serializeContent = function (name, publicId, systemId) {
  var str = '!DOCTYPE ';

  if (name) {
    str += name;
  }

  if (publicId) {
    str += ' PUBLIC ' + enquoteDoctypeId(publicId);
  } else if (systemId) {
    str += ' SYSTEM';
  }

  if (systemId !== null) {
    str += ' ' + enquoteDoctypeId(systemId);
  }

  return str;
};

var foreignContent$1 = {};

var _EXITS_FOREIGN_CONTEN;

var Tokenizer$1 = tokenizer;
var HTML$2 = html$2; //Aliases

var $$2 = HTML$2.TAG_NAMES;
var NS$2 = HTML$2.NAMESPACES;
var ATTRS$1 = HTML$2.ATTRS; //MIME types

var MIME_TYPES = {
  TEXT_HTML: 'text/html',
  APPLICATION_XML: 'application/xhtml+xml'
}; //Attributes

var DEFINITION_URL_ATTR = 'definitionurl';
var ADJUSTED_DEFINITION_URL_ATTR = 'definitionURL';
var SVG_ATTRS_ADJUSTMENT_MAP = {
  attributename: 'attributeName',
  attributetype: 'attributeType',
  basefrequency: 'baseFrequency',
  baseprofile: 'baseProfile',
  calcmode: 'calcMode',
  clippathunits: 'clipPathUnits',
  diffuseconstant: 'diffuseConstant',
  edgemode: 'edgeMode',
  filterunits: 'filterUnits',
  glyphref: 'glyphRef',
  gradienttransform: 'gradientTransform',
  gradientunits: 'gradientUnits',
  kernelmatrix: 'kernelMatrix',
  kernelunitlength: 'kernelUnitLength',
  keypoints: 'keyPoints',
  keysplines: 'keySplines',
  keytimes: 'keyTimes',
  lengthadjust: 'lengthAdjust',
  limitingconeangle: 'limitingConeAngle',
  markerheight: 'markerHeight',
  markerunits: 'markerUnits',
  markerwidth: 'markerWidth',
  maskcontentunits: 'maskContentUnits',
  maskunits: 'maskUnits',
  numoctaves: 'numOctaves',
  pathlength: 'pathLength',
  patterncontentunits: 'patternContentUnits',
  patterntransform: 'patternTransform',
  patternunits: 'patternUnits',
  pointsatx: 'pointsAtX',
  pointsaty: 'pointsAtY',
  pointsatz: 'pointsAtZ',
  preservealpha: 'preserveAlpha',
  preserveaspectratio: 'preserveAspectRatio',
  primitiveunits: 'primitiveUnits',
  refx: 'refX',
  refy: 'refY',
  repeatcount: 'repeatCount',
  repeatdur: 'repeatDur',
  requiredextensions: 'requiredExtensions',
  requiredfeatures: 'requiredFeatures',
  specularconstant: 'specularConstant',
  specularexponent: 'specularExponent',
  spreadmethod: 'spreadMethod',
  startoffset: 'startOffset',
  stddeviation: 'stdDeviation',
  stitchtiles: 'stitchTiles',
  surfacescale: 'surfaceScale',
  systemlanguage: 'systemLanguage',
  tablevalues: 'tableValues',
  targetx: 'targetX',
  targety: 'targetY',
  textlength: 'textLength',
  viewbox: 'viewBox',
  viewtarget: 'viewTarget',
  xchannelselector: 'xChannelSelector',
  ychannelselector: 'yChannelSelector',
  zoomandpan: 'zoomAndPan'
};
var XML_ATTRS_ADJUSTMENT_MAP = {
  'xlink:actuate': {
    prefix: 'xlink',
    name: 'actuate',
    namespace: NS$2.XLINK
  },
  'xlink:arcrole': {
    prefix: 'xlink',
    name: 'arcrole',
    namespace: NS$2.XLINK
  },
  'xlink:href': {
    prefix: 'xlink',
    name: 'href',
    namespace: NS$2.XLINK
  },
  'xlink:role': {
    prefix: 'xlink',
    name: 'role',
    namespace: NS$2.XLINK
  },
  'xlink:show': {
    prefix: 'xlink',
    name: 'show',
    namespace: NS$2.XLINK
  },
  'xlink:title': {
    prefix: 'xlink',
    name: 'title',
    namespace: NS$2.XLINK
  },
  'xlink:type': {
    prefix: 'xlink',
    name: 'type',
    namespace: NS$2.XLINK
  },
  'xml:base': {
    prefix: 'xml',
    name: 'base',
    namespace: NS$2.XML
  },
  'xml:lang': {
    prefix: 'xml',
    name: 'lang',
    namespace: NS$2.XML
  },
  'xml:space': {
    prefix: 'xml',
    name: 'space',
    namespace: NS$2.XML
  },
  xmlns: {
    prefix: '',
    name: 'xmlns',
    namespace: NS$2.XMLNS
  },
  'xmlns:xlink': {
    prefix: 'xmlns',
    name: 'xlink',
    namespace: NS$2.XMLNS
  }
}; //SVG tag names adjustment map

var SVG_TAG_NAMES_ADJUSTMENT_MAP = foreignContent$1.SVG_TAG_NAMES_ADJUSTMENT_MAP = {
  altglyph: 'altGlyph',
  altglyphdef: 'altGlyphDef',
  altglyphitem: 'altGlyphItem',
  animatecolor: 'animateColor',
  animatemotion: 'animateMotion',
  animatetransform: 'animateTransform',
  clippath: 'clipPath',
  feblend: 'feBlend',
  fecolormatrix: 'feColorMatrix',
  fecomponenttransfer: 'feComponentTransfer',
  fecomposite: 'feComposite',
  feconvolvematrix: 'feConvolveMatrix',
  fediffuselighting: 'feDiffuseLighting',
  fedisplacementmap: 'feDisplacementMap',
  fedistantlight: 'feDistantLight',
  feflood: 'feFlood',
  fefunca: 'feFuncA',
  fefuncb: 'feFuncB',
  fefuncg: 'feFuncG',
  fefuncr: 'feFuncR',
  fegaussianblur: 'feGaussianBlur',
  feimage: 'feImage',
  femerge: 'feMerge',
  femergenode: 'feMergeNode',
  femorphology: 'feMorphology',
  feoffset: 'feOffset',
  fepointlight: 'fePointLight',
  fespecularlighting: 'feSpecularLighting',
  fespotlight: 'feSpotLight',
  fetile: 'feTile',
  feturbulence: 'feTurbulence',
  foreignobject: 'foreignObject',
  glyphref: 'glyphRef',
  lineargradient: 'linearGradient',
  radialgradient: 'radialGradient',
  textpath: 'textPath'
}; //Tags that causes exit from foreign content

var EXITS_FOREIGN_CONTENT = (_EXITS_FOREIGN_CONTEN = {}, _defineProperty(_EXITS_FOREIGN_CONTEN, $$2.B, true), _defineProperty(_EXITS_FOREIGN_CONTEN, $$2.BIG, true), _defineProperty(_EXITS_FOREIGN_CONTEN, $$2.BLOCKQUOTE, true), _defineProperty(_EXITS_FOREIGN_CONTEN, $$2.BODY, true), _defineProperty(_EXITS_FOREIGN_CONTEN, $$2.BR, true), _defineProperty(_EXITS_FOREIGN_CONTEN, $$2.CENTER, true), _defineProperty(_EXITS_FOREIGN_CONTEN, $$2.CODE, true), _defineProperty(_EXITS_FOREIGN_CONTEN, $$2.DD, true), _defineProperty(_EXITS_FOREIGN_CONTEN, $$2.DIV, true), _defineProperty(_EXITS_FOREIGN_CONTEN, $$2.DL, true), _defineProperty(_EXITS_FOREIGN_CONTEN, $$2.DT, true), _defineProperty(_EXITS_FOREIGN_CONTEN, $$2.EM, true), _defineProperty(_EXITS_FOREIGN_CONTEN, $$2.EMBED, true), _defineProperty(_EXITS_FOREIGN_CONTEN, $$2.H1, true), _defineProperty(_EXITS_FOREIGN_CONTEN, $$2.H2, true), _defineProperty(_EXITS_FOREIGN_CONTEN, $$2.H3, true), _defineProperty(_EXITS_FOREIGN_CONTEN, $$2.H4, true), _defineProperty(_EXITS_FOREIGN_CONTEN, $$2.H5, true), _defineProperty(_EXITS_FOREIGN_CONTEN, $$2.H6, true), _defineProperty(_EXITS_FOREIGN_CONTEN, $$2.HEAD, true), _defineProperty(_EXITS_FOREIGN_CONTEN, $$2.HR, true), _defineProperty(_EXITS_FOREIGN_CONTEN, $$2.I, true), _defineProperty(_EXITS_FOREIGN_CONTEN, $$2.IMG, true), _defineProperty(_EXITS_FOREIGN_CONTEN, $$2.LI, true), _defineProperty(_EXITS_FOREIGN_CONTEN, $$2.LISTING, true), _defineProperty(_EXITS_FOREIGN_CONTEN, $$2.MENU, true), _defineProperty(_EXITS_FOREIGN_CONTEN, $$2.META, true), _defineProperty(_EXITS_FOREIGN_CONTEN, $$2.NOBR, true), _defineProperty(_EXITS_FOREIGN_CONTEN, $$2.OL, true), _defineProperty(_EXITS_FOREIGN_CONTEN, $$2.P, true), _defineProperty(_EXITS_FOREIGN_CONTEN, $$2.PRE, true), _defineProperty(_EXITS_FOREIGN_CONTEN, $$2.RUBY, true), _defineProperty(_EXITS_FOREIGN_CONTEN, $$2.S, true), _defineProperty(_EXITS_FOREIGN_CONTEN, $$2.SMALL, true), _defineProperty(_EXITS_FOREIGN_CONTEN, $$2.SPAN, true), _defineProperty(_EXITS_FOREIGN_CONTEN, $$2.STRONG, true), _defineProperty(_EXITS_FOREIGN_CONTEN, $$2.STRIKE, true), _defineProperty(_EXITS_FOREIGN_CONTEN, $$2.SUB, true), _defineProperty(_EXITS_FOREIGN_CONTEN, $$2.SUP, true), _defineProperty(_EXITS_FOREIGN_CONTEN, $$2.TABLE, true), _defineProperty(_EXITS_FOREIGN_CONTEN, $$2.TT, true), _defineProperty(_EXITS_FOREIGN_CONTEN, $$2.U, true), _defineProperty(_EXITS_FOREIGN_CONTEN, $$2.UL, true), _defineProperty(_EXITS_FOREIGN_CONTEN, $$2.VAR, true), _EXITS_FOREIGN_CONTEN); //Check exit from foreign content

foreignContent$1.causesExit = function (startTagToken) {
  var tn = startTagToken.tagName;
  var isFontWithAttrs = tn === $$2.FONT && (Tokenizer$1.getTokenAttr(startTagToken, ATTRS$1.COLOR) !== null || Tokenizer$1.getTokenAttr(startTagToken, ATTRS$1.SIZE) !== null || Tokenizer$1.getTokenAttr(startTagToken, ATTRS$1.FACE) !== null);
  return isFontWithAttrs ? true : EXITS_FOREIGN_CONTENT[tn];
}; //Token adjustments


foreignContent$1.adjustTokenMathMLAttrs = function (token) {
  for (var i = 0; i < token.attrs.length; i++) {
    if (token.attrs[i].name === DEFINITION_URL_ATTR) {
      token.attrs[i].name = ADJUSTED_DEFINITION_URL_ATTR;
      break;
    }
  }
};

foreignContent$1.adjustTokenSVGAttrs = function (token) {
  for (var i = 0; i < token.attrs.length; i++) {
    var adjustedAttrName = SVG_ATTRS_ADJUSTMENT_MAP[token.attrs[i].name];

    if (adjustedAttrName) {
      token.attrs[i].name = adjustedAttrName;
    }
  }
};

foreignContent$1.adjustTokenXMLAttrs = function (token) {
  for (var i = 0; i < token.attrs.length; i++) {
    var adjustedAttrEntry = XML_ATTRS_ADJUSTMENT_MAP[token.attrs[i].name];

    if (adjustedAttrEntry) {
      token.attrs[i].prefix = adjustedAttrEntry.prefix;
      token.attrs[i].name = adjustedAttrEntry.name;
      token.attrs[i].namespace = adjustedAttrEntry.namespace;
    }
  }
};

foreignContent$1.adjustTokenSVGTagName = function (token) {
  var adjustedTagName = SVG_TAG_NAMES_ADJUSTMENT_MAP[token.tagName];

  if (adjustedTagName) {
    token.tagName = adjustedTagName;
  }
}; //Integration points


function isMathMLTextIntegrationPoint(tn, ns) {
  return ns === NS$2.MATHML && (tn === $$2.MI || tn === $$2.MO || tn === $$2.MN || tn === $$2.MS || tn === $$2.MTEXT);
}

function isHtmlIntegrationPoint(tn, ns, attrs) {
  if (ns === NS$2.MATHML && tn === $$2.ANNOTATION_XML) {
    for (var i = 0; i < attrs.length; i++) {
      if (attrs[i].name === ATTRS$1.ENCODING) {
        var value = attrs[i].value.toLowerCase();
        return value === MIME_TYPES.TEXT_HTML || value === MIME_TYPES.APPLICATION_XML;
      }
    }
  }

  return ns === NS$2.SVG && (tn === $$2.FOREIGN_OBJECT || tn === $$2.DESC || tn === $$2.TITLE);
}

foreignContent$1.isIntegrationPoint = function (tn, ns, attrs, foreignNS) {
  if ((!foreignNS || foreignNS === NS$2.HTML) && isHtmlIntegrationPoint(tn, ns, attrs)) {
    return true;
  }

  if ((!foreignNS || foreignNS === NS$2.MATHML) && isMathMLTextIntegrationPoint(tn, ns)) {
    return true;
  }

  return false;
};

var _INSERTION_MODE_RESET, _TEMPLATE_INSERTION_M, _INITIAL_MODE, _BEFORE_HTML_MODE, _BEFORE_HEAD_MODE, _IN_HEAD_MODE, _IN_HEAD_NO_SCRIPT_MO, _AFTER_HEAD_MODE, _IN_BODY_MODE, _TEXT_MODE, _IN_TABLE_MODE, _IN_TABLE_TEXT_MODE, _IN_CAPTION_MODE, _IN_COLUMN_GROUP_MODE, _IN_TABLE_BODY_MODE, _IN_ROW_MODE, _IN_CELL_MODE, _IN_SELECT_MODE, _IN_SELECT_IN_TABLE_M, _IN_TEMPLATE_MODE, _AFTER_BODY_MODE, _IN_FRAMESET_MODE, _AFTER_FRAMESET_MODE, _AFTER_AFTER_BODY_MOD, _AFTER_AFTER_FRAMESET, _TOKEN_HANDLERS;

var Tokenizer = tokenizer;
var OpenElementStack = openElementStack;
var FormattingElementList = formattingElementList;
var LocationInfoParserMixin = parserMixin$1;
var ErrorReportingParserMixin = parserMixin;
var Mixin = mixin;
var defaultTreeAdapter$1 = _default;
var mergeOptions$1 = mergeOptions$2;
var doctype$2 = doctype$3;
var foreignContent = foreignContent$1;
var ERR = errorCodes;
var unicode = unicode$3;
var HTML$1 = html$2; //Aliases

var $$1 = HTML$1.TAG_NAMES;
var NS$1 = HTML$1.NAMESPACES;
var ATTRS = HTML$1.ATTRS;
var DEFAULT_OPTIONS$1 = {
  scriptingEnabled: true,
  sourceCodeLocationInfo: false,
  onParseError: null,
  treeAdapter: defaultTreeAdapter$1
}; //Misc constants

var HIDDEN_INPUT_TYPE = 'hidden'; //Adoption agency loops iteration count

var AA_OUTER_LOOP_ITER = 8;
var AA_INNER_LOOP_ITER = 3; //Insertion modes

var INITIAL_MODE = 'INITIAL_MODE';
var BEFORE_HTML_MODE = 'BEFORE_HTML_MODE';
var BEFORE_HEAD_MODE = 'BEFORE_HEAD_MODE';
var IN_HEAD_MODE = 'IN_HEAD_MODE';
var IN_HEAD_NO_SCRIPT_MODE = 'IN_HEAD_NO_SCRIPT_MODE';
var AFTER_HEAD_MODE = 'AFTER_HEAD_MODE';
var IN_BODY_MODE = 'IN_BODY_MODE';
var TEXT_MODE = 'TEXT_MODE';
var IN_TABLE_MODE = 'IN_TABLE_MODE';
var IN_TABLE_TEXT_MODE = 'IN_TABLE_TEXT_MODE';
var IN_CAPTION_MODE = 'IN_CAPTION_MODE';
var IN_COLUMN_GROUP_MODE = 'IN_COLUMN_GROUP_MODE';
var IN_TABLE_BODY_MODE = 'IN_TABLE_BODY_MODE';
var IN_ROW_MODE = 'IN_ROW_MODE';
var IN_CELL_MODE = 'IN_CELL_MODE';
var IN_SELECT_MODE = 'IN_SELECT_MODE';
var IN_SELECT_IN_TABLE_MODE = 'IN_SELECT_IN_TABLE_MODE';
var IN_TEMPLATE_MODE = 'IN_TEMPLATE_MODE';
var AFTER_BODY_MODE = 'AFTER_BODY_MODE';
var IN_FRAMESET_MODE = 'IN_FRAMESET_MODE';
var AFTER_FRAMESET_MODE = 'AFTER_FRAMESET_MODE';
var AFTER_AFTER_BODY_MODE = 'AFTER_AFTER_BODY_MODE';
var AFTER_AFTER_FRAMESET_MODE = 'AFTER_AFTER_FRAMESET_MODE'; //Insertion mode reset map

var INSERTION_MODE_RESET_MAP = (_INSERTION_MODE_RESET = {}, _defineProperty(_INSERTION_MODE_RESET, $$1.TR, IN_ROW_MODE), _defineProperty(_INSERTION_MODE_RESET, $$1.TBODY, IN_TABLE_BODY_MODE), _defineProperty(_INSERTION_MODE_RESET, $$1.THEAD, IN_TABLE_BODY_MODE), _defineProperty(_INSERTION_MODE_RESET, $$1.TFOOT, IN_TABLE_BODY_MODE), _defineProperty(_INSERTION_MODE_RESET, $$1.CAPTION, IN_CAPTION_MODE), _defineProperty(_INSERTION_MODE_RESET, $$1.COLGROUP, IN_COLUMN_GROUP_MODE), _defineProperty(_INSERTION_MODE_RESET, $$1.TABLE, IN_TABLE_MODE), _defineProperty(_INSERTION_MODE_RESET, $$1.BODY, IN_BODY_MODE), _defineProperty(_INSERTION_MODE_RESET, $$1.FRAMESET, IN_FRAMESET_MODE), _INSERTION_MODE_RESET); //Template insertion mode switch map

var TEMPLATE_INSERTION_MODE_SWITCH_MAP = (_TEMPLATE_INSERTION_M = {}, _defineProperty(_TEMPLATE_INSERTION_M, $$1.CAPTION, IN_TABLE_MODE), _defineProperty(_TEMPLATE_INSERTION_M, $$1.COLGROUP, IN_TABLE_MODE), _defineProperty(_TEMPLATE_INSERTION_M, $$1.TBODY, IN_TABLE_MODE), _defineProperty(_TEMPLATE_INSERTION_M, $$1.TFOOT, IN_TABLE_MODE), _defineProperty(_TEMPLATE_INSERTION_M, $$1.THEAD, IN_TABLE_MODE), _defineProperty(_TEMPLATE_INSERTION_M, $$1.COL, IN_COLUMN_GROUP_MODE), _defineProperty(_TEMPLATE_INSERTION_M, $$1.TR, IN_TABLE_BODY_MODE), _defineProperty(_TEMPLATE_INSERTION_M, $$1.TD, IN_ROW_MODE), _defineProperty(_TEMPLATE_INSERTION_M, $$1.TH, IN_ROW_MODE), _TEMPLATE_INSERTION_M); //Token handlers map for insertion modes

var TOKEN_HANDLERS = (_TOKEN_HANDLERS = {}, _defineProperty(_TOKEN_HANDLERS, INITIAL_MODE, (_INITIAL_MODE = {}, _defineProperty(_INITIAL_MODE, Tokenizer.CHARACTER_TOKEN, tokenInInitialMode), _defineProperty(_INITIAL_MODE, Tokenizer.NULL_CHARACTER_TOKEN, tokenInInitialMode), _defineProperty(_INITIAL_MODE, Tokenizer.WHITESPACE_CHARACTER_TOKEN, ignoreToken), _defineProperty(_INITIAL_MODE, Tokenizer.COMMENT_TOKEN, appendComment), _defineProperty(_INITIAL_MODE, Tokenizer.DOCTYPE_TOKEN, doctypeInInitialMode), _defineProperty(_INITIAL_MODE, Tokenizer.START_TAG_TOKEN, tokenInInitialMode), _defineProperty(_INITIAL_MODE, Tokenizer.END_TAG_TOKEN, tokenInInitialMode), _defineProperty(_INITIAL_MODE, Tokenizer.EOF_TOKEN, tokenInInitialMode), _INITIAL_MODE)), _defineProperty(_TOKEN_HANDLERS, BEFORE_HTML_MODE, (_BEFORE_HTML_MODE = {}, _defineProperty(_BEFORE_HTML_MODE, Tokenizer.CHARACTER_TOKEN, tokenBeforeHtml), _defineProperty(_BEFORE_HTML_MODE, Tokenizer.NULL_CHARACTER_TOKEN, tokenBeforeHtml), _defineProperty(_BEFORE_HTML_MODE, Tokenizer.WHITESPACE_CHARACTER_TOKEN, ignoreToken), _defineProperty(_BEFORE_HTML_MODE, Tokenizer.COMMENT_TOKEN, appendComment), _defineProperty(_BEFORE_HTML_MODE, Tokenizer.DOCTYPE_TOKEN, ignoreToken), _defineProperty(_BEFORE_HTML_MODE, Tokenizer.START_TAG_TOKEN, startTagBeforeHtml), _defineProperty(_BEFORE_HTML_MODE, Tokenizer.END_TAG_TOKEN, endTagBeforeHtml), _defineProperty(_BEFORE_HTML_MODE, Tokenizer.EOF_TOKEN, tokenBeforeHtml), _BEFORE_HTML_MODE)), _defineProperty(_TOKEN_HANDLERS, BEFORE_HEAD_MODE, (_BEFORE_HEAD_MODE = {}, _defineProperty(_BEFORE_HEAD_MODE, Tokenizer.CHARACTER_TOKEN, tokenBeforeHead), _defineProperty(_BEFORE_HEAD_MODE, Tokenizer.NULL_CHARACTER_TOKEN, tokenBeforeHead), _defineProperty(_BEFORE_HEAD_MODE, Tokenizer.WHITESPACE_CHARACTER_TOKEN, ignoreToken), _defineProperty(_BEFORE_HEAD_MODE, Tokenizer.COMMENT_TOKEN, appendComment), _defineProperty(_BEFORE_HEAD_MODE, Tokenizer.DOCTYPE_TOKEN, misplacedDoctype), _defineProperty(_BEFORE_HEAD_MODE, Tokenizer.START_TAG_TOKEN, startTagBeforeHead), _defineProperty(_BEFORE_HEAD_MODE, Tokenizer.END_TAG_TOKEN, endTagBeforeHead), _defineProperty(_BEFORE_HEAD_MODE, Tokenizer.EOF_TOKEN, tokenBeforeHead), _BEFORE_HEAD_MODE)), _defineProperty(_TOKEN_HANDLERS, IN_HEAD_MODE, (_IN_HEAD_MODE = {}, _defineProperty(_IN_HEAD_MODE, Tokenizer.CHARACTER_TOKEN, tokenInHead), _defineProperty(_IN_HEAD_MODE, Tokenizer.NULL_CHARACTER_TOKEN, tokenInHead), _defineProperty(_IN_HEAD_MODE, Tokenizer.WHITESPACE_CHARACTER_TOKEN, insertCharacters), _defineProperty(_IN_HEAD_MODE, Tokenizer.COMMENT_TOKEN, appendComment), _defineProperty(_IN_HEAD_MODE, Tokenizer.DOCTYPE_TOKEN, misplacedDoctype), _defineProperty(_IN_HEAD_MODE, Tokenizer.START_TAG_TOKEN, startTagInHead), _defineProperty(_IN_HEAD_MODE, Tokenizer.END_TAG_TOKEN, endTagInHead), _defineProperty(_IN_HEAD_MODE, Tokenizer.EOF_TOKEN, tokenInHead), _IN_HEAD_MODE)), _defineProperty(_TOKEN_HANDLERS, IN_HEAD_NO_SCRIPT_MODE, (_IN_HEAD_NO_SCRIPT_MO = {}, _defineProperty(_IN_HEAD_NO_SCRIPT_MO, Tokenizer.CHARACTER_TOKEN, tokenInHeadNoScript), _defineProperty(_IN_HEAD_NO_SCRIPT_MO, Tokenizer.NULL_CHARACTER_TOKEN, tokenInHeadNoScript), _defineProperty(_IN_HEAD_NO_SCRIPT_MO, Tokenizer.WHITESPACE_CHARACTER_TOKEN, insertCharacters), _defineProperty(_IN_HEAD_NO_SCRIPT_MO, Tokenizer.COMMENT_TOKEN, appendComment), _defineProperty(_IN_HEAD_NO_SCRIPT_MO, Tokenizer.DOCTYPE_TOKEN, misplacedDoctype), _defineProperty(_IN_HEAD_NO_SCRIPT_MO, Tokenizer.START_TAG_TOKEN, startTagInHeadNoScript), _defineProperty(_IN_HEAD_NO_SCRIPT_MO, Tokenizer.END_TAG_TOKEN, endTagInHeadNoScript), _defineProperty(_IN_HEAD_NO_SCRIPT_MO, Tokenizer.EOF_TOKEN, tokenInHeadNoScript), _IN_HEAD_NO_SCRIPT_MO)), _defineProperty(_TOKEN_HANDLERS, AFTER_HEAD_MODE, (_AFTER_HEAD_MODE = {}, _defineProperty(_AFTER_HEAD_MODE, Tokenizer.CHARACTER_TOKEN, tokenAfterHead), _defineProperty(_AFTER_HEAD_MODE, Tokenizer.NULL_CHARACTER_TOKEN, tokenAfterHead), _defineProperty(_AFTER_HEAD_MODE, Tokenizer.WHITESPACE_CHARACTER_TOKEN, insertCharacters), _defineProperty(_AFTER_HEAD_MODE, Tokenizer.COMMENT_TOKEN, appendComment), _defineProperty(_AFTER_HEAD_MODE, Tokenizer.DOCTYPE_TOKEN, misplacedDoctype), _defineProperty(_AFTER_HEAD_MODE, Tokenizer.START_TAG_TOKEN, startTagAfterHead), _defineProperty(_AFTER_HEAD_MODE, Tokenizer.END_TAG_TOKEN, endTagAfterHead), _defineProperty(_AFTER_HEAD_MODE, Tokenizer.EOF_TOKEN, tokenAfterHead), _AFTER_HEAD_MODE)), _defineProperty(_TOKEN_HANDLERS, IN_BODY_MODE, (_IN_BODY_MODE = {}, _defineProperty(_IN_BODY_MODE, Tokenizer.CHARACTER_TOKEN, characterInBody), _defineProperty(_IN_BODY_MODE, Tokenizer.NULL_CHARACTER_TOKEN, ignoreToken), _defineProperty(_IN_BODY_MODE, Tokenizer.WHITESPACE_CHARACTER_TOKEN, whitespaceCharacterInBody), _defineProperty(_IN_BODY_MODE, Tokenizer.COMMENT_TOKEN, appendComment), _defineProperty(_IN_BODY_MODE, Tokenizer.DOCTYPE_TOKEN, ignoreToken), _defineProperty(_IN_BODY_MODE, Tokenizer.START_TAG_TOKEN, startTagInBody), _defineProperty(_IN_BODY_MODE, Tokenizer.END_TAG_TOKEN, endTagInBody), _defineProperty(_IN_BODY_MODE, Tokenizer.EOF_TOKEN, eofInBody), _IN_BODY_MODE)), _defineProperty(_TOKEN_HANDLERS, TEXT_MODE, (_TEXT_MODE = {}, _defineProperty(_TEXT_MODE, Tokenizer.CHARACTER_TOKEN, insertCharacters), _defineProperty(_TEXT_MODE, Tokenizer.NULL_CHARACTER_TOKEN, insertCharacters), _defineProperty(_TEXT_MODE, Tokenizer.WHITESPACE_CHARACTER_TOKEN, insertCharacters), _defineProperty(_TEXT_MODE, Tokenizer.COMMENT_TOKEN, ignoreToken), _defineProperty(_TEXT_MODE, Tokenizer.DOCTYPE_TOKEN, ignoreToken), _defineProperty(_TEXT_MODE, Tokenizer.START_TAG_TOKEN, ignoreToken), _defineProperty(_TEXT_MODE, Tokenizer.END_TAG_TOKEN, endTagInText), _defineProperty(_TEXT_MODE, Tokenizer.EOF_TOKEN, eofInText), _TEXT_MODE)), _defineProperty(_TOKEN_HANDLERS, IN_TABLE_MODE, (_IN_TABLE_MODE = {}, _defineProperty(_IN_TABLE_MODE, Tokenizer.CHARACTER_TOKEN, characterInTable), _defineProperty(_IN_TABLE_MODE, Tokenizer.NULL_CHARACTER_TOKEN, characterInTable), _defineProperty(_IN_TABLE_MODE, Tokenizer.WHITESPACE_CHARACTER_TOKEN, characterInTable), _defineProperty(_IN_TABLE_MODE, Tokenizer.COMMENT_TOKEN, appendComment), _defineProperty(_IN_TABLE_MODE, Tokenizer.DOCTYPE_TOKEN, ignoreToken), _defineProperty(_IN_TABLE_MODE, Tokenizer.START_TAG_TOKEN, startTagInTable), _defineProperty(_IN_TABLE_MODE, Tokenizer.END_TAG_TOKEN, endTagInTable), _defineProperty(_IN_TABLE_MODE, Tokenizer.EOF_TOKEN, eofInBody), _IN_TABLE_MODE)), _defineProperty(_TOKEN_HANDLERS, IN_TABLE_TEXT_MODE, (_IN_TABLE_TEXT_MODE = {}, _defineProperty(_IN_TABLE_TEXT_MODE, Tokenizer.CHARACTER_TOKEN, characterInTableText), _defineProperty(_IN_TABLE_TEXT_MODE, Tokenizer.NULL_CHARACTER_TOKEN, ignoreToken), _defineProperty(_IN_TABLE_TEXT_MODE, Tokenizer.WHITESPACE_CHARACTER_TOKEN, whitespaceCharacterInTableText), _defineProperty(_IN_TABLE_TEXT_MODE, Tokenizer.COMMENT_TOKEN, tokenInTableText), _defineProperty(_IN_TABLE_TEXT_MODE, Tokenizer.DOCTYPE_TOKEN, tokenInTableText), _defineProperty(_IN_TABLE_TEXT_MODE, Tokenizer.START_TAG_TOKEN, tokenInTableText), _defineProperty(_IN_TABLE_TEXT_MODE, Tokenizer.END_TAG_TOKEN, tokenInTableText), _defineProperty(_IN_TABLE_TEXT_MODE, Tokenizer.EOF_TOKEN, tokenInTableText), _IN_TABLE_TEXT_MODE)), _defineProperty(_TOKEN_HANDLERS, IN_CAPTION_MODE, (_IN_CAPTION_MODE = {}, _defineProperty(_IN_CAPTION_MODE, Tokenizer.CHARACTER_TOKEN, characterInBody), _defineProperty(_IN_CAPTION_MODE, Tokenizer.NULL_CHARACTER_TOKEN, ignoreToken), _defineProperty(_IN_CAPTION_MODE, Tokenizer.WHITESPACE_CHARACTER_TOKEN, whitespaceCharacterInBody), _defineProperty(_IN_CAPTION_MODE, Tokenizer.COMMENT_TOKEN, appendComment), _defineProperty(_IN_CAPTION_MODE, Tokenizer.DOCTYPE_TOKEN, ignoreToken), _defineProperty(_IN_CAPTION_MODE, Tokenizer.START_TAG_TOKEN, startTagInCaption), _defineProperty(_IN_CAPTION_MODE, Tokenizer.END_TAG_TOKEN, endTagInCaption), _defineProperty(_IN_CAPTION_MODE, Tokenizer.EOF_TOKEN, eofInBody), _IN_CAPTION_MODE)), _defineProperty(_TOKEN_HANDLERS, IN_COLUMN_GROUP_MODE, (_IN_COLUMN_GROUP_MODE = {}, _defineProperty(_IN_COLUMN_GROUP_MODE, Tokenizer.CHARACTER_TOKEN, tokenInColumnGroup), _defineProperty(_IN_COLUMN_GROUP_MODE, Tokenizer.NULL_CHARACTER_TOKEN, tokenInColumnGroup), _defineProperty(_IN_COLUMN_GROUP_MODE, Tokenizer.WHITESPACE_CHARACTER_TOKEN, insertCharacters), _defineProperty(_IN_COLUMN_GROUP_MODE, Tokenizer.COMMENT_TOKEN, appendComment), _defineProperty(_IN_COLUMN_GROUP_MODE, Tokenizer.DOCTYPE_TOKEN, ignoreToken), _defineProperty(_IN_COLUMN_GROUP_MODE, Tokenizer.START_TAG_TOKEN, startTagInColumnGroup), _defineProperty(_IN_COLUMN_GROUP_MODE, Tokenizer.END_TAG_TOKEN, endTagInColumnGroup), _defineProperty(_IN_COLUMN_GROUP_MODE, Tokenizer.EOF_TOKEN, eofInBody), _IN_COLUMN_GROUP_MODE)), _defineProperty(_TOKEN_HANDLERS, IN_TABLE_BODY_MODE, (_IN_TABLE_BODY_MODE = {}, _defineProperty(_IN_TABLE_BODY_MODE, Tokenizer.CHARACTER_TOKEN, characterInTable), _defineProperty(_IN_TABLE_BODY_MODE, Tokenizer.NULL_CHARACTER_TOKEN, characterInTable), _defineProperty(_IN_TABLE_BODY_MODE, Tokenizer.WHITESPACE_CHARACTER_TOKEN, characterInTable), _defineProperty(_IN_TABLE_BODY_MODE, Tokenizer.COMMENT_TOKEN, appendComment), _defineProperty(_IN_TABLE_BODY_MODE, Tokenizer.DOCTYPE_TOKEN, ignoreToken), _defineProperty(_IN_TABLE_BODY_MODE, Tokenizer.START_TAG_TOKEN, startTagInTableBody), _defineProperty(_IN_TABLE_BODY_MODE, Tokenizer.END_TAG_TOKEN, endTagInTableBody), _defineProperty(_IN_TABLE_BODY_MODE, Tokenizer.EOF_TOKEN, eofInBody), _IN_TABLE_BODY_MODE)), _defineProperty(_TOKEN_HANDLERS, IN_ROW_MODE, (_IN_ROW_MODE = {}, _defineProperty(_IN_ROW_MODE, Tokenizer.CHARACTER_TOKEN, characterInTable), _defineProperty(_IN_ROW_MODE, Tokenizer.NULL_CHARACTER_TOKEN, characterInTable), _defineProperty(_IN_ROW_MODE, Tokenizer.WHITESPACE_CHARACTER_TOKEN, characterInTable), _defineProperty(_IN_ROW_MODE, Tokenizer.COMMENT_TOKEN, appendComment), _defineProperty(_IN_ROW_MODE, Tokenizer.DOCTYPE_TOKEN, ignoreToken), _defineProperty(_IN_ROW_MODE, Tokenizer.START_TAG_TOKEN, startTagInRow), _defineProperty(_IN_ROW_MODE, Tokenizer.END_TAG_TOKEN, endTagInRow), _defineProperty(_IN_ROW_MODE, Tokenizer.EOF_TOKEN, eofInBody), _IN_ROW_MODE)), _defineProperty(_TOKEN_HANDLERS, IN_CELL_MODE, (_IN_CELL_MODE = {}, _defineProperty(_IN_CELL_MODE, Tokenizer.CHARACTER_TOKEN, characterInBody), _defineProperty(_IN_CELL_MODE, Tokenizer.NULL_CHARACTER_TOKEN, ignoreToken), _defineProperty(_IN_CELL_MODE, Tokenizer.WHITESPACE_CHARACTER_TOKEN, whitespaceCharacterInBody), _defineProperty(_IN_CELL_MODE, Tokenizer.COMMENT_TOKEN, appendComment), _defineProperty(_IN_CELL_MODE, Tokenizer.DOCTYPE_TOKEN, ignoreToken), _defineProperty(_IN_CELL_MODE, Tokenizer.START_TAG_TOKEN, startTagInCell), _defineProperty(_IN_CELL_MODE, Tokenizer.END_TAG_TOKEN, endTagInCell), _defineProperty(_IN_CELL_MODE, Tokenizer.EOF_TOKEN, eofInBody), _IN_CELL_MODE)), _defineProperty(_TOKEN_HANDLERS, IN_SELECT_MODE, (_IN_SELECT_MODE = {}, _defineProperty(_IN_SELECT_MODE, Tokenizer.CHARACTER_TOKEN, insertCharacters), _defineProperty(_IN_SELECT_MODE, Tokenizer.NULL_CHARACTER_TOKEN, ignoreToken), _defineProperty(_IN_SELECT_MODE, Tokenizer.WHITESPACE_CHARACTER_TOKEN, insertCharacters), _defineProperty(_IN_SELECT_MODE, Tokenizer.COMMENT_TOKEN, appendComment), _defineProperty(_IN_SELECT_MODE, Tokenizer.DOCTYPE_TOKEN, ignoreToken), _defineProperty(_IN_SELECT_MODE, Tokenizer.START_TAG_TOKEN, startTagInSelect), _defineProperty(_IN_SELECT_MODE, Tokenizer.END_TAG_TOKEN, endTagInSelect), _defineProperty(_IN_SELECT_MODE, Tokenizer.EOF_TOKEN, eofInBody), _IN_SELECT_MODE)), _defineProperty(_TOKEN_HANDLERS, IN_SELECT_IN_TABLE_MODE, (_IN_SELECT_IN_TABLE_M = {}, _defineProperty(_IN_SELECT_IN_TABLE_M, Tokenizer.CHARACTER_TOKEN, insertCharacters), _defineProperty(_IN_SELECT_IN_TABLE_M, Tokenizer.NULL_CHARACTER_TOKEN, ignoreToken), _defineProperty(_IN_SELECT_IN_TABLE_M, Tokenizer.WHITESPACE_CHARACTER_TOKEN, insertCharacters), _defineProperty(_IN_SELECT_IN_TABLE_M, Tokenizer.COMMENT_TOKEN, appendComment), _defineProperty(_IN_SELECT_IN_TABLE_M, Tokenizer.DOCTYPE_TOKEN, ignoreToken), _defineProperty(_IN_SELECT_IN_TABLE_M, Tokenizer.START_TAG_TOKEN, startTagInSelectInTable), _defineProperty(_IN_SELECT_IN_TABLE_M, Tokenizer.END_TAG_TOKEN, endTagInSelectInTable), _defineProperty(_IN_SELECT_IN_TABLE_M, Tokenizer.EOF_TOKEN, eofInBody), _IN_SELECT_IN_TABLE_M)), _defineProperty(_TOKEN_HANDLERS, IN_TEMPLATE_MODE, (_IN_TEMPLATE_MODE = {}, _defineProperty(_IN_TEMPLATE_MODE, Tokenizer.CHARACTER_TOKEN, characterInBody), _defineProperty(_IN_TEMPLATE_MODE, Tokenizer.NULL_CHARACTER_TOKEN, ignoreToken), _defineProperty(_IN_TEMPLATE_MODE, Tokenizer.WHITESPACE_CHARACTER_TOKEN, whitespaceCharacterInBody), _defineProperty(_IN_TEMPLATE_MODE, Tokenizer.COMMENT_TOKEN, appendComment), _defineProperty(_IN_TEMPLATE_MODE, Tokenizer.DOCTYPE_TOKEN, ignoreToken), _defineProperty(_IN_TEMPLATE_MODE, Tokenizer.START_TAG_TOKEN, startTagInTemplate), _defineProperty(_IN_TEMPLATE_MODE, Tokenizer.END_TAG_TOKEN, endTagInTemplate), _defineProperty(_IN_TEMPLATE_MODE, Tokenizer.EOF_TOKEN, eofInTemplate), _IN_TEMPLATE_MODE)), _defineProperty(_TOKEN_HANDLERS, AFTER_BODY_MODE, (_AFTER_BODY_MODE = {}, _defineProperty(_AFTER_BODY_MODE, Tokenizer.CHARACTER_TOKEN, tokenAfterBody), _defineProperty(_AFTER_BODY_MODE, Tokenizer.NULL_CHARACTER_TOKEN, tokenAfterBody), _defineProperty(_AFTER_BODY_MODE, Tokenizer.WHITESPACE_CHARACTER_TOKEN, whitespaceCharacterInBody), _defineProperty(_AFTER_BODY_MODE, Tokenizer.COMMENT_TOKEN, appendCommentToRootHtmlElement), _defineProperty(_AFTER_BODY_MODE, Tokenizer.DOCTYPE_TOKEN, ignoreToken), _defineProperty(_AFTER_BODY_MODE, Tokenizer.START_TAG_TOKEN, startTagAfterBody), _defineProperty(_AFTER_BODY_MODE, Tokenizer.END_TAG_TOKEN, endTagAfterBody), _defineProperty(_AFTER_BODY_MODE, Tokenizer.EOF_TOKEN, stopParsing), _AFTER_BODY_MODE)), _defineProperty(_TOKEN_HANDLERS, IN_FRAMESET_MODE, (_IN_FRAMESET_MODE = {}, _defineProperty(_IN_FRAMESET_MODE, Tokenizer.CHARACTER_TOKEN, ignoreToken), _defineProperty(_IN_FRAMESET_MODE, Tokenizer.NULL_CHARACTER_TOKEN, ignoreToken), _defineProperty(_IN_FRAMESET_MODE, Tokenizer.WHITESPACE_CHARACTER_TOKEN, insertCharacters), _defineProperty(_IN_FRAMESET_MODE, Tokenizer.COMMENT_TOKEN, appendComment), _defineProperty(_IN_FRAMESET_MODE, Tokenizer.DOCTYPE_TOKEN, ignoreToken), _defineProperty(_IN_FRAMESET_MODE, Tokenizer.START_TAG_TOKEN, startTagInFrameset), _defineProperty(_IN_FRAMESET_MODE, Tokenizer.END_TAG_TOKEN, endTagInFrameset), _defineProperty(_IN_FRAMESET_MODE, Tokenizer.EOF_TOKEN, stopParsing), _IN_FRAMESET_MODE)), _defineProperty(_TOKEN_HANDLERS, AFTER_FRAMESET_MODE, (_AFTER_FRAMESET_MODE = {}, _defineProperty(_AFTER_FRAMESET_MODE, Tokenizer.CHARACTER_TOKEN, ignoreToken), _defineProperty(_AFTER_FRAMESET_MODE, Tokenizer.NULL_CHARACTER_TOKEN, ignoreToken), _defineProperty(_AFTER_FRAMESET_MODE, Tokenizer.WHITESPACE_CHARACTER_TOKEN, insertCharacters), _defineProperty(_AFTER_FRAMESET_MODE, Tokenizer.COMMENT_TOKEN, appendComment), _defineProperty(_AFTER_FRAMESET_MODE, Tokenizer.DOCTYPE_TOKEN, ignoreToken), _defineProperty(_AFTER_FRAMESET_MODE, Tokenizer.START_TAG_TOKEN, startTagAfterFrameset), _defineProperty(_AFTER_FRAMESET_MODE, Tokenizer.END_TAG_TOKEN, endTagAfterFrameset), _defineProperty(_AFTER_FRAMESET_MODE, Tokenizer.EOF_TOKEN, stopParsing), _AFTER_FRAMESET_MODE)), _defineProperty(_TOKEN_HANDLERS, AFTER_AFTER_BODY_MODE, (_AFTER_AFTER_BODY_MOD = {}, _defineProperty(_AFTER_AFTER_BODY_MOD, Tokenizer.CHARACTER_TOKEN, tokenAfterAfterBody), _defineProperty(_AFTER_AFTER_BODY_MOD, Tokenizer.NULL_CHARACTER_TOKEN, tokenAfterAfterBody), _defineProperty(_AFTER_AFTER_BODY_MOD, Tokenizer.WHITESPACE_CHARACTER_TOKEN, whitespaceCharacterInBody), _defineProperty(_AFTER_AFTER_BODY_MOD, Tokenizer.COMMENT_TOKEN, appendCommentToDocument), _defineProperty(_AFTER_AFTER_BODY_MOD, Tokenizer.DOCTYPE_TOKEN, ignoreToken), _defineProperty(_AFTER_AFTER_BODY_MOD, Tokenizer.START_TAG_TOKEN, startTagAfterAfterBody), _defineProperty(_AFTER_AFTER_BODY_MOD, Tokenizer.END_TAG_TOKEN, tokenAfterAfterBody), _defineProperty(_AFTER_AFTER_BODY_MOD, Tokenizer.EOF_TOKEN, stopParsing), _AFTER_AFTER_BODY_MOD)), _defineProperty(_TOKEN_HANDLERS, AFTER_AFTER_FRAMESET_MODE, (_AFTER_AFTER_FRAMESET = {}, _defineProperty(_AFTER_AFTER_FRAMESET, Tokenizer.CHARACTER_TOKEN, ignoreToken), _defineProperty(_AFTER_AFTER_FRAMESET, Tokenizer.NULL_CHARACTER_TOKEN, ignoreToken), _defineProperty(_AFTER_AFTER_FRAMESET, Tokenizer.WHITESPACE_CHARACTER_TOKEN, whitespaceCharacterInBody), _defineProperty(_AFTER_AFTER_FRAMESET, Tokenizer.COMMENT_TOKEN, appendCommentToDocument), _defineProperty(_AFTER_AFTER_FRAMESET, Tokenizer.DOCTYPE_TOKEN, ignoreToken), _defineProperty(_AFTER_AFTER_FRAMESET, Tokenizer.START_TAG_TOKEN, startTagAfterAfterFrameset), _defineProperty(_AFTER_AFTER_FRAMESET, Tokenizer.END_TAG_TOKEN, ignoreToken), _defineProperty(_AFTER_AFTER_FRAMESET, Tokenizer.EOF_TOKEN, stopParsing), _AFTER_AFTER_FRAMESET)), _TOKEN_HANDLERS); //Parser

var Parser$1 = /*#__PURE__*/function () {
  function Parser(options) {
    _classCallCheck(this, Parser);

    this.options = mergeOptions$1(DEFAULT_OPTIONS$1, options);
    this.treeAdapter = this.options.treeAdapter;
    this.pendingScript = null;

    if (this.options.sourceCodeLocationInfo) {
      Mixin.install(this, LocationInfoParserMixin);
    }

    if (this.options.onParseError) {
      Mixin.install(this, ErrorReportingParserMixin, {
        onParseError: this.options.onParseError
      });
    }
  } // API


  _createClass(Parser, [{
    key: "parse",
    value: function parse(html) {
      var document = this.treeAdapter.createDocument();

      this._bootstrap(document, null);

      this.tokenizer.write(html, true);

      this._runParsingLoop(null);

      return document;
    }
  }, {
    key: "parseFragment",
    value: function parseFragment(html, fragmentContext) {
      //NOTE: use <template> element as a fragment context if context element was not provided,
      //so we will parse in "forgiving" manner
      if (!fragmentContext) {
        fragmentContext = this.treeAdapter.createElement($$1.TEMPLATE, NS$1.HTML, []);
      } //NOTE: create fake element which will be used as 'document' for fragment parsing.
      //This is important for jsdom there 'document' can't be recreated, therefore
      //fragment parsing causes messing of the main `document`.


      var documentMock = this.treeAdapter.createElement('documentmock', NS$1.HTML, []);

      this._bootstrap(documentMock, fragmentContext);

      if (this.treeAdapter.getTagName(fragmentContext) === $$1.TEMPLATE) {
        this._pushTmplInsertionMode(IN_TEMPLATE_MODE);
      }

      this._initTokenizerForFragmentParsing();

      this._insertFakeRootElement();

      this._resetInsertionMode();

      this._findFormInFragmentContext();

      this.tokenizer.write(html, true);

      this._runParsingLoop(null);

      var rootElement = this.treeAdapter.getFirstChild(documentMock);
      var fragment = this.treeAdapter.createDocumentFragment();

      this._adoptNodes(rootElement, fragment);

      return fragment;
    } //Bootstrap parser

  }, {
    key: "_bootstrap",
    value: function _bootstrap(document, fragmentContext) {
      this.tokenizer = new Tokenizer(this.options);
      this.stopped = false;
      this.insertionMode = INITIAL_MODE;
      this.originalInsertionMode = '';
      this.document = document;
      this.fragmentContext = fragmentContext;
      this.headElement = null;
      this.formElement = null;
      this.openElements = new OpenElementStack(this.document, this.treeAdapter);
      this.activeFormattingElements = new FormattingElementList(this.treeAdapter);
      this.tmplInsertionModeStack = [];
      this.tmplInsertionModeStackTop = -1;
      this.currentTmplInsertionMode = null;
      this.pendingCharacterTokens = [];
      this.hasNonWhitespacePendingCharacterToken = false;
      this.framesetOk = true;
      this.skipNextNewLine = false;
      this.fosterParentingEnabled = false;
    } //Errors

  }, {
    key: "_err",
    value: function _err() {// NOTE: err reporting is noop by default. Enabled by mixin.
    } //Parsing loop

  }, {
    key: "_runParsingLoop",
    value: function _runParsingLoop(scriptHandler) {
      while (!this.stopped) {
        this._setupTokenizerCDATAMode();

        var token = this.tokenizer.getNextToken();

        if (token.type === Tokenizer.HIBERNATION_TOKEN) {
          break;
        }

        if (this.skipNextNewLine) {
          this.skipNextNewLine = false;

          if (token.type === Tokenizer.WHITESPACE_CHARACTER_TOKEN && token.chars[0] === '\n') {
            if (token.chars.length === 1) {
              continue;
            }

            token.chars = token.chars.substr(1);
          }
        }

        this._processInputToken(token);

        if (scriptHandler && this.pendingScript) {
          break;
        }
      }
    }
  }, {
    key: "runParsingLoopForCurrentChunk",
    value: function runParsingLoopForCurrentChunk(writeCallback, scriptHandler) {
      this._runParsingLoop(scriptHandler);

      if (scriptHandler && this.pendingScript) {
        var script = this.pendingScript;
        this.pendingScript = null;
        scriptHandler(script);
        return;
      }

      if (writeCallback) {
        writeCallback();
      }
    } //Text parsing

  }, {
    key: "_setupTokenizerCDATAMode",
    value: function _setupTokenizerCDATAMode() {
      var current = this._getAdjustedCurrentElement();

      this.tokenizer.allowCDATA = current && current !== this.document && this.treeAdapter.getNamespaceURI(current) !== NS$1.HTML && !this._isIntegrationPoint(current);
    }
  }, {
    key: "_switchToTextParsing",
    value: function _switchToTextParsing(currentToken, nextTokenizerState) {
      this._insertElement(currentToken, NS$1.HTML);

      this.tokenizer.state = nextTokenizerState;
      this.originalInsertionMode = this.insertionMode;
      this.insertionMode = TEXT_MODE;
    }
  }, {
    key: "switchToPlaintextParsing",
    value: function switchToPlaintextParsing() {
      this.insertionMode = TEXT_MODE;
      this.originalInsertionMode = IN_BODY_MODE;
      this.tokenizer.state = Tokenizer.MODE.PLAINTEXT;
    } //Fragment parsing

  }, {
    key: "_getAdjustedCurrentElement",
    value: function _getAdjustedCurrentElement() {
      return this.openElements.stackTop === 0 && this.fragmentContext ? this.fragmentContext : this.openElements.current;
    }
  }, {
    key: "_findFormInFragmentContext",
    value: function _findFormInFragmentContext() {
      var node = this.fragmentContext;

      do {
        if (this.treeAdapter.getTagName(node) === $$1.FORM) {
          this.formElement = node;
          break;
        }

        node = this.treeAdapter.getParentNode(node);
      } while (node);
    }
  }, {
    key: "_initTokenizerForFragmentParsing",
    value: function _initTokenizerForFragmentParsing() {
      if (this.treeAdapter.getNamespaceURI(this.fragmentContext) === NS$1.HTML) {
        var tn = this.treeAdapter.getTagName(this.fragmentContext);

        if (tn === $$1.TITLE || tn === $$1.TEXTAREA) {
          this.tokenizer.state = Tokenizer.MODE.RCDATA;
        } else if (tn === $$1.STYLE || tn === $$1.XMP || tn === $$1.IFRAME || tn === $$1.NOEMBED || tn === $$1.NOFRAMES || tn === $$1.NOSCRIPT) {
          this.tokenizer.state = Tokenizer.MODE.RAWTEXT;
        } else if (tn === $$1.SCRIPT) {
          this.tokenizer.state = Tokenizer.MODE.SCRIPT_DATA;
        } else if (tn === $$1.PLAINTEXT) {
          this.tokenizer.state = Tokenizer.MODE.PLAINTEXT;
        }
      }
    } //Tree mutation

  }, {
    key: "_setDocumentType",
    value: function _setDocumentType(token) {
      var name = token.name || '';
      var publicId = token.publicId || '';
      var systemId = token.systemId || '';
      this.treeAdapter.setDocumentType(this.document, name, publicId, systemId);
    }
  }, {
    key: "_attachElementToTree",
    value: function _attachElementToTree(element) {
      if (this._shouldFosterParentOnInsertion()) {
        this._fosterParentElement(element);
      } else {
        var parent = this.openElements.currentTmplContent || this.openElements.current;
        this.treeAdapter.appendChild(parent, element);
      }
    }
  }, {
    key: "_appendElement",
    value: function _appendElement(token, namespaceURI) {
      var element = this.treeAdapter.createElement(token.tagName, namespaceURI, token.attrs);

      this._attachElementToTree(element);
    }
  }, {
    key: "_insertElement",
    value: function _insertElement(token, namespaceURI) {
      var element = this.treeAdapter.createElement(token.tagName, namespaceURI, token.attrs);

      this._attachElementToTree(element);

      this.openElements.push(element);
    }
  }, {
    key: "_insertFakeElement",
    value: function _insertFakeElement(tagName) {
      var element = this.treeAdapter.createElement(tagName, NS$1.HTML, []);

      this._attachElementToTree(element);

      this.openElements.push(element);
    }
  }, {
    key: "_insertTemplate",
    value: function _insertTemplate(token) {
      var tmpl = this.treeAdapter.createElement(token.tagName, NS$1.HTML, token.attrs);
      var content = this.treeAdapter.createDocumentFragment();
      this.treeAdapter.setTemplateContent(tmpl, content);

      this._attachElementToTree(tmpl);

      this.openElements.push(tmpl);
    }
  }, {
    key: "_insertFakeRootElement",
    value: function _insertFakeRootElement() {
      var element = this.treeAdapter.createElement($$1.HTML, NS$1.HTML, []);
      this.treeAdapter.appendChild(this.openElements.current, element);
      this.openElements.push(element);
    }
  }, {
    key: "_appendCommentNode",
    value: function _appendCommentNode(token, parent) {
      var commentNode = this.treeAdapter.createCommentNode(token.data);
      this.treeAdapter.appendChild(parent, commentNode);
    }
  }, {
    key: "_insertCharacters",
    value: function _insertCharacters(token) {
      if (this._shouldFosterParentOnInsertion()) {
        this._fosterParentText(token.chars);
      } else {
        var parent = this.openElements.currentTmplContent || this.openElements.current;
        this.treeAdapter.insertText(parent, token.chars);
      }
    }
  }, {
    key: "_adoptNodes",
    value: function _adoptNodes(donor, recipient) {
      for (var child = this.treeAdapter.getFirstChild(donor); child; child = this.treeAdapter.getFirstChild(donor)) {
        this.treeAdapter.detachNode(child);
        this.treeAdapter.appendChild(recipient, child);
      }
    } //Token processing

  }, {
    key: "_shouldProcessTokenInForeignContent",
    value: function _shouldProcessTokenInForeignContent(token) {
      var current = this._getAdjustedCurrentElement();

      if (!current || current === this.document) {
        return false;
      }

      var ns = this.treeAdapter.getNamespaceURI(current);

      if (ns === NS$1.HTML) {
        return false;
      }

      if (this.treeAdapter.getTagName(current) === $$1.ANNOTATION_XML && ns === NS$1.MATHML && token.type === Tokenizer.START_TAG_TOKEN && token.tagName === $$1.SVG) {
        return false;
      }

      var isCharacterToken = token.type === Tokenizer.CHARACTER_TOKEN || token.type === Tokenizer.NULL_CHARACTER_TOKEN || token.type === Tokenizer.WHITESPACE_CHARACTER_TOKEN;
      var isMathMLTextStartTag = token.type === Tokenizer.START_TAG_TOKEN && token.tagName !== $$1.MGLYPH && token.tagName !== $$1.MALIGNMARK;

      if ((isMathMLTextStartTag || isCharacterToken) && this._isIntegrationPoint(current, NS$1.MATHML)) {
        return false;
      }

      if ((token.type === Tokenizer.START_TAG_TOKEN || isCharacterToken) && this._isIntegrationPoint(current, NS$1.HTML)) {
        return false;
      }

      return token.type !== Tokenizer.EOF_TOKEN;
    }
  }, {
    key: "_processToken",
    value: function _processToken(token) {
      TOKEN_HANDLERS[this.insertionMode][token.type](this, token);
    }
  }, {
    key: "_processTokenInBodyMode",
    value: function _processTokenInBodyMode(token) {
      TOKEN_HANDLERS[IN_BODY_MODE][token.type](this, token);
    }
  }, {
    key: "_processTokenInForeignContent",
    value: function _processTokenInForeignContent(token) {
      if (token.type === Tokenizer.CHARACTER_TOKEN) {
        characterInForeignContent(this, token);
      } else if (token.type === Tokenizer.NULL_CHARACTER_TOKEN) {
        nullCharacterInForeignContent(this, token);
      } else if (token.type === Tokenizer.WHITESPACE_CHARACTER_TOKEN) {
        insertCharacters(this, token);
      } else if (token.type === Tokenizer.COMMENT_TOKEN) {
        appendComment(this, token);
      } else if (token.type === Tokenizer.START_TAG_TOKEN) {
        startTagInForeignContent(this, token);
      } else if (token.type === Tokenizer.END_TAG_TOKEN) {
        endTagInForeignContent(this, token);
      }
    }
  }, {
    key: "_processInputToken",
    value: function _processInputToken(token) {
      if (this._shouldProcessTokenInForeignContent(token)) {
        this._processTokenInForeignContent(token);
      } else {
        this._processToken(token);
      }

      if (token.type === Tokenizer.START_TAG_TOKEN && token.selfClosing && !token.ackSelfClosing) {
        this._err(ERR.nonVoidHtmlElementStartTagWithTrailingSolidus);
      }
    } //Integration points

  }, {
    key: "_isIntegrationPoint",
    value: function _isIntegrationPoint(element, foreignNS) {
      var tn = this.treeAdapter.getTagName(element);
      var ns = this.treeAdapter.getNamespaceURI(element);
      var attrs = this.treeAdapter.getAttrList(element);
      return foreignContent.isIntegrationPoint(tn, ns, attrs, foreignNS);
    } //Active formatting elements reconstruction

  }, {
    key: "_reconstructActiveFormattingElements",
    value: function _reconstructActiveFormattingElements() {
      var listLength = this.activeFormattingElements.length;

      if (listLength) {
        var unopenIdx = listLength;
        var entry = null;

        do {
          unopenIdx--;
          entry = this.activeFormattingElements.entries[unopenIdx];

          if (entry.type === FormattingElementList.MARKER_ENTRY || this.openElements.contains(entry.element)) {
            unopenIdx++;
            break;
          }
        } while (unopenIdx > 0);

        for (var i = unopenIdx; i < listLength; i++) {
          entry = this.activeFormattingElements.entries[i];

          this._insertElement(entry.token, this.treeAdapter.getNamespaceURI(entry.element));

          entry.element = this.openElements.current;
        }
      }
    } //Close elements

  }, {
    key: "_closeTableCell",
    value: function _closeTableCell() {
      this.openElements.generateImpliedEndTags();
      this.openElements.popUntilTableCellPopped();
      this.activeFormattingElements.clearToLastMarker();
      this.insertionMode = IN_ROW_MODE;
    }
  }, {
    key: "_closePElement",
    value: function _closePElement() {
      this.openElements.generateImpliedEndTagsWithExclusion($$1.P);
      this.openElements.popUntilTagNamePopped($$1.P);
    } //Insertion modes

  }, {
    key: "_resetInsertionMode",
    value: function _resetInsertionMode() {
      for (var i = this.openElements.stackTop, last = false; i >= 0; i--) {
        var element = this.openElements.items[i];

        if (i === 0) {
          last = true;

          if (this.fragmentContext) {
            element = this.fragmentContext;
          }
        }

        var tn = this.treeAdapter.getTagName(element);
        var newInsertionMode = INSERTION_MODE_RESET_MAP[tn];

        if (newInsertionMode) {
          this.insertionMode = newInsertionMode;
          break;
        } else if (!last && (tn === $$1.TD || tn === $$1.TH)) {
          this.insertionMode = IN_CELL_MODE;
          break;
        } else if (!last && tn === $$1.HEAD) {
          this.insertionMode = IN_HEAD_MODE;
          break;
        } else if (tn === $$1.SELECT) {
          this._resetInsertionModeForSelect(i);

          break;
        } else if (tn === $$1.TEMPLATE) {
          this.insertionMode = this.currentTmplInsertionMode;
          break;
        } else if (tn === $$1.HTML) {
          this.insertionMode = this.headElement ? AFTER_HEAD_MODE : BEFORE_HEAD_MODE;
          break;
        } else if (last) {
          this.insertionMode = IN_BODY_MODE;
          break;
        }
      }
    }
  }, {
    key: "_resetInsertionModeForSelect",
    value: function _resetInsertionModeForSelect(selectIdx) {
      if (selectIdx > 0) {
        for (var i = selectIdx - 1; i > 0; i--) {
          var ancestor = this.openElements.items[i];
          var tn = this.treeAdapter.getTagName(ancestor);

          if (tn === $$1.TEMPLATE) {
            break;
          } else if (tn === $$1.TABLE) {
            this.insertionMode = IN_SELECT_IN_TABLE_MODE;
            return;
          }
        }
      }

      this.insertionMode = IN_SELECT_MODE;
    }
  }, {
    key: "_pushTmplInsertionMode",
    value: function _pushTmplInsertionMode(mode) {
      this.tmplInsertionModeStack.push(mode);
      this.tmplInsertionModeStackTop++;
      this.currentTmplInsertionMode = mode;
    }
  }, {
    key: "_popTmplInsertionMode",
    value: function _popTmplInsertionMode() {
      this.tmplInsertionModeStack.pop();
      this.tmplInsertionModeStackTop--;
      this.currentTmplInsertionMode = this.tmplInsertionModeStack[this.tmplInsertionModeStackTop];
    } //Foster parenting

  }, {
    key: "_isElementCausesFosterParenting",
    value: function _isElementCausesFosterParenting(element) {
      var tn = this.treeAdapter.getTagName(element);
      return tn === $$1.TABLE || tn === $$1.TBODY || tn === $$1.TFOOT || tn === $$1.THEAD || tn === $$1.TR;
    }
  }, {
    key: "_shouldFosterParentOnInsertion",
    value: function _shouldFosterParentOnInsertion() {
      return this.fosterParentingEnabled && this._isElementCausesFosterParenting(this.openElements.current);
    }
  }, {
    key: "_findFosterParentingLocation",
    value: function _findFosterParentingLocation() {
      var location = {
        parent: null,
        beforeElement: null
      };

      for (var i = this.openElements.stackTop; i >= 0; i--) {
        var openElement = this.openElements.items[i];
        var tn = this.treeAdapter.getTagName(openElement);
        var ns = this.treeAdapter.getNamespaceURI(openElement);

        if (tn === $$1.TEMPLATE && ns === NS$1.HTML) {
          location.parent = this.treeAdapter.getTemplateContent(openElement);
          break;
        } else if (tn === $$1.TABLE) {
          location.parent = this.treeAdapter.getParentNode(openElement);

          if (location.parent) {
            location.beforeElement = openElement;
          } else {
            location.parent = this.openElements.items[i - 1];
          }

          break;
        }
      }

      if (!location.parent) {
        location.parent = this.openElements.items[0];
      }

      return location;
    }
  }, {
    key: "_fosterParentElement",
    value: function _fosterParentElement(element) {
      var location = this._findFosterParentingLocation();

      if (location.beforeElement) {
        this.treeAdapter.insertBefore(location.parent, element, location.beforeElement);
      } else {
        this.treeAdapter.appendChild(location.parent, element);
      }
    }
  }, {
    key: "_fosterParentText",
    value: function _fosterParentText(chars) {
      var location = this._findFosterParentingLocation();

      if (location.beforeElement) {
        this.treeAdapter.insertTextBefore(location.parent, chars, location.beforeElement);
      } else {
        this.treeAdapter.insertText(location.parent, chars);
      }
    } //Special elements

  }, {
    key: "_isSpecialElement",
    value: function _isSpecialElement(element) {
      var tn = this.treeAdapter.getTagName(element);
      var ns = this.treeAdapter.getNamespaceURI(element);
      return HTML$1.SPECIAL_ELEMENTS[ns][tn];
    }
  }]);

  return Parser;
}();

var parser = Parser$1; //Adoption agency algorithm
//(see: http://www.whatwg.org/specs/web-apps/current-work/multipage/tree-construction.html#adoptionAgency)
//------------------------------------------------------------------
//Steps 5-8 of the algorithm

function aaObtainFormattingElementEntry(p, token) {
  var formattingElementEntry = p.activeFormattingElements.getElementEntryInScopeWithTagName(token.tagName);

  if (formattingElementEntry) {
    if (!p.openElements.contains(formattingElementEntry.element)) {
      p.activeFormattingElements.removeEntry(formattingElementEntry);
      formattingElementEntry = null;
    } else if (!p.openElements.hasInScope(token.tagName)) {
      formattingElementEntry = null;
    }
  } else {
    genericEndTagInBody(p, token);
  }

  return formattingElementEntry;
} //Steps 9 and 10 of the algorithm


function aaObtainFurthestBlock(p, formattingElementEntry) {
  var furthestBlock = null;

  for (var i = p.openElements.stackTop; i >= 0; i--) {
    var element = p.openElements.items[i];

    if (element === formattingElementEntry.element) {
      break;
    }

    if (p._isSpecialElement(element)) {
      furthestBlock = element;
    }
  }

  if (!furthestBlock) {
    p.openElements.popUntilElementPopped(formattingElementEntry.element);
    p.activeFormattingElements.removeEntry(formattingElementEntry);
  }

  return furthestBlock;
} //Step 13 of the algorithm


function aaInnerLoop(p, furthestBlock, formattingElement) {
  var lastElement = furthestBlock;
  var nextElement = p.openElements.getCommonAncestor(furthestBlock);

  for (var i = 0, element = nextElement; element !== formattingElement; i++, element = nextElement) {
    //NOTE: store next element for the next loop iteration (it may be deleted from the stack by step 9.5)
    nextElement = p.openElements.getCommonAncestor(element);
    var elementEntry = p.activeFormattingElements.getElementEntry(element);
    var counterOverflow = elementEntry && i >= AA_INNER_LOOP_ITER;
    var shouldRemoveFromOpenElements = !elementEntry || counterOverflow;

    if (shouldRemoveFromOpenElements) {
      if (counterOverflow) {
        p.activeFormattingElements.removeEntry(elementEntry);
      }

      p.openElements.remove(element);
    } else {
      element = aaRecreateElementFromEntry(p, elementEntry);

      if (lastElement === furthestBlock) {
        p.activeFormattingElements.bookmark = elementEntry;
      }

      p.treeAdapter.detachNode(lastElement);
      p.treeAdapter.appendChild(element, lastElement);
      lastElement = element;
    }
  }

  return lastElement;
} //Step 13.7 of the algorithm


function aaRecreateElementFromEntry(p, elementEntry) {
  var ns = p.treeAdapter.getNamespaceURI(elementEntry.element);
  var newElement = p.treeAdapter.createElement(elementEntry.token.tagName, ns, elementEntry.token.attrs);
  p.openElements.replace(elementEntry.element, newElement);
  elementEntry.element = newElement;
  return newElement;
} //Step 14 of the algorithm


function aaInsertLastNodeInCommonAncestor(p, commonAncestor, lastElement) {
  if (p._isElementCausesFosterParenting(commonAncestor)) {
    p._fosterParentElement(lastElement);
  } else {
    var tn = p.treeAdapter.getTagName(commonAncestor);
    var ns = p.treeAdapter.getNamespaceURI(commonAncestor);

    if (tn === $$1.TEMPLATE && ns === NS$1.HTML) {
      commonAncestor = p.treeAdapter.getTemplateContent(commonAncestor);
    }

    p.treeAdapter.appendChild(commonAncestor, lastElement);
  }
} //Steps 15-19 of the algorithm


function aaReplaceFormattingElement(p, furthestBlock, formattingElementEntry) {
  var ns = p.treeAdapter.getNamespaceURI(formattingElementEntry.element);
  var token = formattingElementEntry.token;
  var newElement = p.treeAdapter.createElement(token.tagName, ns, token.attrs);

  p._adoptNodes(furthestBlock, newElement);

  p.treeAdapter.appendChild(furthestBlock, newElement);
  p.activeFormattingElements.insertElementAfterBookmark(newElement, formattingElementEntry.token);
  p.activeFormattingElements.removeEntry(formattingElementEntry);
  p.openElements.remove(formattingElementEntry.element);
  p.openElements.insertAfter(furthestBlock, newElement);
} //Algorithm entry point


function callAdoptionAgency(p, token) {
  var formattingElementEntry;

  for (var i = 0; i < AA_OUTER_LOOP_ITER; i++) {
    formattingElementEntry = aaObtainFormattingElementEntry(p, token);

    if (!formattingElementEntry) {
      break;
    }

    var furthestBlock = aaObtainFurthestBlock(p, formattingElementEntry);

    if (!furthestBlock) {
      break;
    }

    p.activeFormattingElements.bookmark = formattingElementEntry;
    var lastElement = aaInnerLoop(p, furthestBlock, formattingElementEntry.element);
    var commonAncestor = p.openElements.getCommonAncestor(formattingElementEntry.element);
    p.treeAdapter.detachNode(lastElement);
    aaInsertLastNodeInCommonAncestor(p, commonAncestor, lastElement);
    aaReplaceFormattingElement(p, furthestBlock, formattingElementEntry);
  }
} //Generic token handlers
//------------------------------------------------------------------


function ignoreToken() {//NOTE: do nothing =)
}

function misplacedDoctype(p) {
  p._err(ERR.misplacedDoctype);
}

function appendComment(p, token) {
  p._appendCommentNode(token, p.openElements.currentTmplContent || p.openElements.current);
}

function appendCommentToRootHtmlElement(p, token) {
  p._appendCommentNode(token, p.openElements.items[0]);
}

function appendCommentToDocument(p, token) {
  p._appendCommentNode(token, p.document);
}

function insertCharacters(p, token) {
  p._insertCharacters(token);
}

function stopParsing(p) {
  p.stopped = true;
} // The "initial" insertion mode
//------------------------------------------------------------------


function doctypeInInitialMode(p, token) {
  p._setDocumentType(token);

  var mode = token.forceQuirks ? HTML$1.DOCUMENT_MODE.QUIRKS : doctype$2.getDocumentMode(token);

  if (!doctype$2.isConforming(token)) {
    p._err(ERR.nonConformingDoctype);
  }

  p.treeAdapter.setDocumentMode(p.document, mode);
  p.insertionMode = BEFORE_HTML_MODE;
}

function tokenInInitialMode(p, token) {
  p._err(ERR.missingDoctype, {
    beforeToken: true
  });

  p.treeAdapter.setDocumentMode(p.document, HTML$1.DOCUMENT_MODE.QUIRKS);
  p.insertionMode = BEFORE_HTML_MODE;

  p._processToken(token);
} // The "before html" insertion mode
//------------------------------------------------------------------


function startTagBeforeHtml(p, token) {
  if (token.tagName === $$1.HTML) {
    p._insertElement(token, NS$1.HTML);

    p.insertionMode = BEFORE_HEAD_MODE;
  } else {
    tokenBeforeHtml(p, token);
  }
}

function endTagBeforeHtml(p, token) {
  var tn = token.tagName;

  if (tn === $$1.HTML || tn === $$1.HEAD || tn === $$1.BODY || tn === $$1.BR) {
    tokenBeforeHtml(p, token);
  }
}

function tokenBeforeHtml(p, token) {
  p._insertFakeRootElement();

  p.insertionMode = BEFORE_HEAD_MODE;

  p._processToken(token);
} // The "before head" insertion mode
//------------------------------------------------------------------


function startTagBeforeHead(p, token) {
  var tn = token.tagName;

  if (tn === $$1.HTML) {
    startTagInBody(p, token);
  } else if (tn === $$1.HEAD) {
    p._insertElement(token, NS$1.HTML);

    p.headElement = p.openElements.current;
    p.insertionMode = IN_HEAD_MODE;
  } else {
    tokenBeforeHead(p, token);
  }
}

function endTagBeforeHead(p, token) {
  var tn = token.tagName;

  if (tn === $$1.HEAD || tn === $$1.BODY || tn === $$1.HTML || tn === $$1.BR) {
    tokenBeforeHead(p, token);
  } else {
    p._err(ERR.endTagWithoutMatchingOpenElement);
  }
}

function tokenBeforeHead(p, token) {
  p._insertFakeElement($$1.HEAD);

  p.headElement = p.openElements.current;
  p.insertionMode = IN_HEAD_MODE;

  p._processToken(token);
} // The "in head" insertion mode
//------------------------------------------------------------------


function startTagInHead(p, token) {
  var tn = token.tagName;

  if (tn === $$1.HTML) {
    startTagInBody(p, token);
  } else if (tn === $$1.BASE || tn === $$1.BASEFONT || tn === $$1.BGSOUND || tn === $$1.LINK || tn === $$1.META) {
    p._appendElement(token, NS$1.HTML);

    token.ackSelfClosing = true;
  } else if (tn === $$1.TITLE) {
    p._switchToTextParsing(token, Tokenizer.MODE.RCDATA);
  } else if (tn === $$1.NOSCRIPT) {
    if (p.options.scriptingEnabled) {
      p._switchToTextParsing(token, Tokenizer.MODE.RAWTEXT);
    } else {
      p._insertElement(token, NS$1.HTML);

      p.insertionMode = IN_HEAD_NO_SCRIPT_MODE;
    }
  } else if (tn === $$1.NOFRAMES || tn === $$1.STYLE) {
    p._switchToTextParsing(token, Tokenizer.MODE.RAWTEXT);
  } else if (tn === $$1.SCRIPT) {
    p._switchToTextParsing(token, Tokenizer.MODE.SCRIPT_DATA);
  } else if (tn === $$1.TEMPLATE) {
    p._insertTemplate(token, NS$1.HTML);

    p.activeFormattingElements.insertMarker();
    p.framesetOk = false;
    p.insertionMode = IN_TEMPLATE_MODE;

    p._pushTmplInsertionMode(IN_TEMPLATE_MODE);
  } else if (tn === $$1.HEAD) {
    p._err(ERR.misplacedStartTagForHeadElement);
  } else {
    tokenInHead(p, token);
  }
}

function endTagInHead(p, token) {
  var tn = token.tagName;

  if (tn === $$1.HEAD) {
    p.openElements.pop();
    p.insertionMode = AFTER_HEAD_MODE;
  } else if (tn === $$1.BODY || tn === $$1.BR || tn === $$1.HTML) {
    tokenInHead(p, token);
  } else if (tn === $$1.TEMPLATE) {
    if (p.openElements.tmplCount > 0) {
      p.openElements.generateImpliedEndTagsThoroughly();

      if (p.openElements.currentTagName !== $$1.TEMPLATE) {
        p._err(ERR.closingOfElementWithOpenChildElements);
      }

      p.openElements.popUntilTagNamePopped($$1.TEMPLATE);
      p.activeFormattingElements.clearToLastMarker();

      p._popTmplInsertionMode();

      p._resetInsertionMode();
    } else {
      p._err(ERR.endTagWithoutMatchingOpenElement);
    }
  } else {
    p._err(ERR.endTagWithoutMatchingOpenElement);
  }
}

function tokenInHead(p, token) {
  p.openElements.pop();
  p.insertionMode = AFTER_HEAD_MODE;

  p._processToken(token);
} // The "in head no script" insertion mode
//------------------------------------------------------------------


function startTagInHeadNoScript(p, token) {
  var tn = token.tagName;

  if (tn === $$1.HTML) {
    startTagInBody(p, token);
  } else if (tn === $$1.BASEFONT || tn === $$1.BGSOUND || tn === $$1.HEAD || tn === $$1.LINK || tn === $$1.META || tn === $$1.NOFRAMES || tn === $$1.STYLE) {
    startTagInHead(p, token);
  } else if (tn === $$1.NOSCRIPT) {
    p._err(ERR.nestedNoscriptInHead);
  } else {
    tokenInHeadNoScript(p, token);
  }
}

function endTagInHeadNoScript(p, token) {
  var tn = token.tagName;

  if (tn === $$1.NOSCRIPT) {
    p.openElements.pop();
    p.insertionMode = IN_HEAD_MODE;
  } else if (tn === $$1.BR) {
    tokenInHeadNoScript(p, token);
  } else {
    p._err(ERR.endTagWithoutMatchingOpenElement);
  }
}

function tokenInHeadNoScript(p, token) {
  var errCode = token.type === Tokenizer.EOF_TOKEN ? ERR.openElementsLeftAfterEof : ERR.disallowedContentInNoscriptInHead;

  p._err(errCode);

  p.openElements.pop();
  p.insertionMode = IN_HEAD_MODE;

  p._processToken(token);
} // The "after head" insertion mode
//------------------------------------------------------------------


function startTagAfterHead(p, token) {
  var tn = token.tagName;

  if (tn === $$1.HTML) {
    startTagInBody(p, token);
  } else if (tn === $$1.BODY) {
    p._insertElement(token, NS$1.HTML);

    p.framesetOk = false;
    p.insertionMode = IN_BODY_MODE;
  } else if (tn === $$1.FRAMESET) {
    p._insertElement(token, NS$1.HTML);

    p.insertionMode = IN_FRAMESET_MODE;
  } else if (tn === $$1.BASE || tn === $$1.BASEFONT || tn === $$1.BGSOUND || tn === $$1.LINK || tn === $$1.META || tn === $$1.NOFRAMES || tn === $$1.SCRIPT || tn === $$1.STYLE || tn === $$1.TEMPLATE || tn === $$1.TITLE) {
    p._err(ERR.abandonedHeadElementChild);

    p.openElements.push(p.headElement);
    startTagInHead(p, token);
    p.openElements.remove(p.headElement);
  } else if (tn === $$1.HEAD) {
    p._err(ERR.misplacedStartTagForHeadElement);
  } else {
    tokenAfterHead(p, token);
  }
}

function endTagAfterHead(p, token) {
  var tn = token.tagName;

  if (tn === $$1.BODY || tn === $$1.HTML || tn === $$1.BR) {
    tokenAfterHead(p, token);
  } else if (tn === $$1.TEMPLATE) {
    endTagInHead(p, token);
  } else {
    p._err(ERR.endTagWithoutMatchingOpenElement);
  }
}

function tokenAfterHead(p, token) {
  p._insertFakeElement($$1.BODY);

  p.insertionMode = IN_BODY_MODE;

  p._processToken(token);
} // The "in body" insertion mode
//------------------------------------------------------------------


function whitespaceCharacterInBody(p, token) {
  p._reconstructActiveFormattingElements();

  p._insertCharacters(token);
}

function characterInBody(p, token) {
  p._reconstructActiveFormattingElements();

  p._insertCharacters(token);

  p.framesetOk = false;
}

function htmlStartTagInBody(p, token) {
  if (p.openElements.tmplCount === 0) {
    p.treeAdapter.adoptAttributes(p.openElements.items[0], token.attrs);
  }
}

function bodyStartTagInBody(p, token) {
  var bodyElement = p.openElements.tryPeekProperlyNestedBodyElement();

  if (bodyElement && p.openElements.tmplCount === 0) {
    p.framesetOk = false;
    p.treeAdapter.adoptAttributes(bodyElement, token.attrs);
  }
}

function framesetStartTagInBody(p, token) {
  var bodyElement = p.openElements.tryPeekProperlyNestedBodyElement();

  if (p.framesetOk && bodyElement) {
    p.treeAdapter.detachNode(bodyElement);
    p.openElements.popAllUpToHtmlElement();

    p._insertElement(token, NS$1.HTML);

    p.insertionMode = IN_FRAMESET_MODE;
  }
}

function addressStartTagInBody(p, token) {
  if (p.openElements.hasInButtonScope($$1.P)) {
    p._closePElement();
  }

  p._insertElement(token, NS$1.HTML);
}

function numberedHeaderStartTagInBody(p, token) {
  if (p.openElements.hasInButtonScope($$1.P)) {
    p._closePElement();
  }

  var tn = p.openElements.currentTagName;

  if (tn === $$1.H1 || tn === $$1.H2 || tn === $$1.H3 || tn === $$1.H4 || tn === $$1.H5 || tn === $$1.H6) {
    p.openElements.pop();
  }

  p._insertElement(token, NS$1.HTML);
}

function preStartTagInBody(p, token) {
  if (p.openElements.hasInButtonScope($$1.P)) {
    p._closePElement();
  }

  p._insertElement(token, NS$1.HTML); //NOTE: If the next token is a U+000A LINE FEED (LF) character token, then ignore that token and move
  //on to the next one. (Newlines at the start of pre blocks are ignored as an authoring convenience.)


  p.skipNextNewLine = true;
  p.framesetOk = false;
}

function formStartTagInBody(p, token) {
  var inTemplate = p.openElements.tmplCount > 0;

  if (!p.formElement || inTemplate) {
    if (p.openElements.hasInButtonScope($$1.P)) {
      p._closePElement();
    }

    p._insertElement(token, NS$1.HTML);

    if (!inTemplate) {
      p.formElement = p.openElements.current;
    }
  }
}

function listItemStartTagInBody(p, token) {
  p.framesetOk = false;
  var tn = token.tagName;

  for (var i = p.openElements.stackTop; i >= 0; i--) {
    var element = p.openElements.items[i];
    var elementTn = p.treeAdapter.getTagName(element);
    var closeTn = null;

    if (tn === $$1.LI && elementTn === $$1.LI) {
      closeTn = $$1.LI;
    } else if ((tn === $$1.DD || tn === $$1.DT) && (elementTn === $$1.DD || elementTn === $$1.DT)) {
      closeTn = elementTn;
    }

    if (closeTn) {
      p.openElements.generateImpliedEndTagsWithExclusion(closeTn);
      p.openElements.popUntilTagNamePopped(closeTn);
      break;
    }

    if (elementTn !== $$1.ADDRESS && elementTn !== $$1.DIV && elementTn !== $$1.P && p._isSpecialElement(element)) {
      break;
    }
  }

  if (p.openElements.hasInButtonScope($$1.P)) {
    p._closePElement();
  }

  p._insertElement(token, NS$1.HTML);
}

function plaintextStartTagInBody(p, token) {
  if (p.openElements.hasInButtonScope($$1.P)) {
    p._closePElement();
  }

  p._insertElement(token, NS$1.HTML);

  p.tokenizer.state = Tokenizer.MODE.PLAINTEXT;
}

function buttonStartTagInBody(p, token) {
  if (p.openElements.hasInScope($$1.BUTTON)) {
    p.openElements.generateImpliedEndTags();
    p.openElements.popUntilTagNamePopped($$1.BUTTON);
  }

  p._reconstructActiveFormattingElements();

  p._insertElement(token, NS$1.HTML);

  p.framesetOk = false;
}

function aStartTagInBody(p, token) {
  var activeElementEntry = p.activeFormattingElements.getElementEntryInScopeWithTagName($$1.A);

  if (activeElementEntry) {
    callAdoptionAgency(p, token);
    p.openElements.remove(activeElementEntry.element);
    p.activeFormattingElements.removeEntry(activeElementEntry);
  }

  p._reconstructActiveFormattingElements();

  p._insertElement(token, NS$1.HTML);

  p.activeFormattingElements.pushElement(p.openElements.current, token);
}

function bStartTagInBody(p, token) {
  p._reconstructActiveFormattingElements();

  p._insertElement(token, NS$1.HTML);

  p.activeFormattingElements.pushElement(p.openElements.current, token);
}

function nobrStartTagInBody(p, token) {
  p._reconstructActiveFormattingElements();

  if (p.openElements.hasInScope($$1.NOBR)) {
    callAdoptionAgency(p, token);

    p._reconstructActiveFormattingElements();
  }

  p._insertElement(token, NS$1.HTML);

  p.activeFormattingElements.pushElement(p.openElements.current, token);
}

function appletStartTagInBody(p, token) {
  p._reconstructActiveFormattingElements();

  p._insertElement(token, NS$1.HTML);

  p.activeFormattingElements.insertMarker();
  p.framesetOk = false;
}

function tableStartTagInBody(p, token) {
  if (p.treeAdapter.getDocumentMode(p.document) !== HTML$1.DOCUMENT_MODE.QUIRKS && p.openElements.hasInButtonScope($$1.P)) {
    p._closePElement();
  }

  p._insertElement(token, NS$1.HTML);

  p.framesetOk = false;
  p.insertionMode = IN_TABLE_MODE;
}

function areaStartTagInBody(p, token) {
  p._reconstructActiveFormattingElements();

  p._appendElement(token, NS$1.HTML);

  p.framesetOk = false;
  token.ackSelfClosing = true;
}

function inputStartTagInBody(p, token) {
  p._reconstructActiveFormattingElements();

  p._appendElement(token, NS$1.HTML);

  var inputType = Tokenizer.getTokenAttr(token, ATTRS.TYPE);

  if (!inputType || inputType.toLowerCase() !== HIDDEN_INPUT_TYPE) {
    p.framesetOk = false;
  }

  token.ackSelfClosing = true;
}

function paramStartTagInBody(p, token) {
  p._appendElement(token, NS$1.HTML);

  token.ackSelfClosing = true;
}

function hrStartTagInBody(p, token) {
  if (p.openElements.hasInButtonScope($$1.P)) {
    p._closePElement();
  }

  p._appendElement(token, NS$1.HTML);

  p.framesetOk = false;
  token.ackSelfClosing = true;
}

function imageStartTagInBody(p, token) {
  token.tagName = $$1.IMG;
  areaStartTagInBody(p, token);
}

function textareaStartTagInBody(p, token) {
  p._insertElement(token, NS$1.HTML); //NOTE: If the next token is a U+000A LINE FEED (LF) character token, then ignore that token and move
  //on to the next one. (Newlines at the start of textarea elements are ignored as an authoring convenience.)


  p.skipNextNewLine = true;
  p.tokenizer.state = Tokenizer.MODE.RCDATA;
  p.originalInsertionMode = p.insertionMode;
  p.framesetOk = false;
  p.insertionMode = TEXT_MODE;
}

function xmpStartTagInBody(p, token) {
  if (p.openElements.hasInButtonScope($$1.P)) {
    p._closePElement();
  }

  p._reconstructActiveFormattingElements();

  p.framesetOk = false;

  p._switchToTextParsing(token, Tokenizer.MODE.RAWTEXT);
}

function iframeStartTagInBody(p, token) {
  p.framesetOk = false;

  p._switchToTextParsing(token, Tokenizer.MODE.RAWTEXT);
} //NOTE: here we assume that we always act as an user agent with enabled plugins, so we parse
//<noembed> as a rawtext.


function noembedStartTagInBody(p, token) {
  p._switchToTextParsing(token, Tokenizer.MODE.RAWTEXT);
}

function selectStartTagInBody(p, token) {
  p._reconstructActiveFormattingElements();

  p._insertElement(token, NS$1.HTML);

  p.framesetOk = false;

  if (p.insertionMode === IN_TABLE_MODE || p.insertionMode === IN_CAPTION_MODE || p.insertionMode === IN_TABLE_BODY_MODE || p.insertionMode === IN_ROW_MODE || p.insertionMode === IN_CELL_MODE) {
    p.insertionMode = IN_SELECT_IN_TABLE_MODE;
  } else {
    p.insertionMode = IN_SELECT_MODE;
  }
}

function optgroupStartTagInBody(p, token) {
  if (p.openElements.currentTagName === $$1.OPTION) {
    p.openElements.pop();
  }

  p._reconstructActiveFormattingElements();

  p._insertElement(token, NS$1.HTML);
}

function rbStartTagInBody(p, token) {
  if (p.openElements.hasInScope($$1.RUBY)) {
    p.openElements.generateImpliedEndTags();
  }

  p._insertElement(token, NS$1.HTML);
}

function rtStartTagInBody(p, token) {
  if (p.openElements.hasInScope($$1.RUBY)) {
    p.openElements.generateImpliedEndTagsWithExclusion($$1.RTC);
  }

  p._insertElement(token, NS$1.HTML);
}

function menuStartTagInBody(p, token) {
  if (p.openElements.hasInButtonScope($$1.P)) {
    p._closePElement();
  }

  p._insertElement(token, NS$1.HTML);
}

function mathStartTagInBody(p, token) {
  p._reconstructActiveFormattingElements();

  foreignContent.adjustTokenMathMLAttrs(token);
  foreignContent.adjustTokenXMLAttrs(token);

  if (token.selfClosing) {
    p._appendElement(token, NS$1.MATHML);
  } else {
    p._insertElement(token, NS$1.MATHML);
  }

  token.ackSelfClosing = true;
}

function svgStartTagInBody(p, token) {
  p._reconstructActiveFormattingElements();

  foreignContent.adjustTokenSVGAttrs(token);
  foreignContent.adjustTokenXMLAttrs(token);

  if (token.selfClosing) {
    p._appendElement(token, NS$1.SVG);
  } else {
    p._insertElement(token, NS$1.SVG);
  }

  token.ackSelfClosing = true;
}

function genericStartTagInBody(p, token) {
  p._reconstructActiveFormattingElements();

  p._insertElement(token, NS$1.HTML);
} //OPTIMIZATION: Integer comparisons are low-cost, so we can use very fast tag name length filters here.
//It's faster than using dictionary.


function startTagInBody(p, token) {
  var tn = token.tagName;

  switch (tn.length) {
    case 1:
      if (tn === $$1.I || tn === $$1.S || tn === $$1.B || tn === $$1.U) {
        bStartTagInBody(p, token);
      } else if (tn === $$1.P) {
        addressStartTagInBody(p, token);
      } else if (tn === $$1.A) {
        aStartTagInBody(p, token);
      } else {
        genericStartTagInBody(p, token);
      }

      break;

    case 2:
      if (tn === $$1.DL || tn === $$1.OL || tn === $$1.UL) {
        addressStartTagInBody(p, token);
      } else if (tn === $$1.H1 || tn === $$1.H2 || tn === $$1.H3 || tn === $$1.H4 || tn === $$1.H5 || tn === $$1.H6) {
        numberedHeaderStartTagInBody(p, token);
      } else if (tn === $$1.LI || tn === $$1.DD || tn === $$1.DT) {
        listItemStartTagInBody(p, token);
      } else if (tn === $$1.EM || tn === $$1.TT) {
        bStartTagInBody(p, token);
      } else if (tn === $$1.BR) {
        areaStartTagInBody(p, token);
      } else if (tn === $$1.HR) {
        hrStartTagInBody(p, token);
      } else if (tn === $$1.RB) {
        rbStartTagInBody(p, token);
      } else if (tn === $$1.RT || tn === $$1.RP) {
        rtStartTagInBody(p, token);
      } else if (tn !== $$1.TH && tn !== $$1.TD && tn !== $$1.TR) {
        genericStartTagInBody(p, token);
      }

      break;

    case 3:
      if (tn === $$1.DIV || tn === $$1.DIR || tn === $$1.NAV) {
        addressStartTagInBody(p, token);
      } else if (tn === $$1.PRE) {
        preStartTagInBody(p, token);
      } else if (tn === $$1.BIG) {
        bStartTagInBody(p, token);
      } else if (tn === $$1.IMG || tn === $$1.WBR) {
        areaStartTagInBody(p, token);
      } else if (tn === $$1.XMP) {
        xmpStartTagInBody(p, token);
      } else if (tn === $$1.SVG) {
        svgStartTagInBody(p, token);
      } else if (tn === $$1.RTC) {
        rbStartTagInBody(p, token);
      } else if (tn !== $$1.COL) {
        genericStartTagInBody(p, token);
      }

      break;

    case 4:
      if (tn === $$1.HTML) {
        htmlStartTagInBody(p, token);
      } else if (tn === $$1.BASE || tn === $$1.LINK || tn === $$1.META) {
        startTagInHead(p, token);
      } else if (tn === $$1.BODY) {
        bodyStartTagInBody(p, token);
      } else if (tn === $$1.MAIN || tn === $$1.MENU) {
        addressStartTagInBody(p, token);
      } else if (tn === $$1.FORM) {
        formStartTagInBody(p, token);
      } else if (tn === $$1.CODE || tn === $$1.FONT) {
        bStartTagInBody(p, token);
      } else if (tn === $$1.NOBR) {
        nobrStartTagInBody(p, token);
      } else if (tn === $$1.AREA) {
        areaStartTagInBody(p, token);
      } else if (tn === $$1.MATH) {
        mathStartTagInBody(p, token);
      } else if (tn === $$1.MENU) {
        menuStartTagInBody(p, token);
      } else if (tn !== $$1.HEAD) {
        genericStartTagInBody(p, token);
      }

      break;

    case 5:
      if (tn === $$1.STYLE || tn === $$1.TITLE) {
        startTagInHead(p, token);
      } else if (tn === $$1.ASIDE) {
        addressStartTagInBody(p, token);
      } else if (tn === $$1.SMALL) {
        bStartTagInBody(p, token);
      } else if (tn === $$1.TABLE) {
        tableStartTagInBody(p, token);
      } else if (tn === $$1.EMBED) {
        areaStartTagInBody(p, token);
      } else if (tn === $$1.INPUT) {
        inputStartTagInBody(p, token);
      } else if (tn === $$1.PARAM || tn === $$1.TRACK) {
        paramStartTagInBody(p, token);
      } else if (tn === $$1.IMAGE) {
        imageStartTagInBody(p, token);
      } else if (tn !== $$1.FRAME && tn !== $$1.TBODY && tn !== $$1.TFOOT && tn !== $$1.THEAD) {
        genericStartTagInBody(p, token);
      }

      break;

    case 6:
      if (tn === $$1.SCRIPT) {
        startTagInHead(p, token);
      } else if (tn === $$1.CENTER || tn === $$1.FIGURE || tn === $$1.FOOTER || tn === $$1.HEADER || tn === $$1.HGROUP || tn === $$1.DIALOG) {
        addressStartTagInBody(p, token);
      } else if (tn === $$1.BUTTON) {
        buttonStartTagInBody(p, token);
      } else if (tn === $$1.STRIKE || tn === $$1.STRONG) {
        bStartTagInBody(p, token);
      } else if (tn === $$1.APPLET || tn === $$1.OBJECT) {
        appletStartTagInBody(p, token);
      } else if (tn === $$1.KEYGEN) {
        areaStartTagInBody(p, token);
      } else if (tn === $$1.SOURCE) {
        paramStartTagInBody(p, token);
      } else if (tn === $$1.IFRAME) {
        iframeStartTagInBody(p, token);
      } else if (tn === $$1.SELECT) {
        selectStartTagInBody(p, token);
      } else if (tn === $$1.OPTION) {
        optgroupStartTagInBody(p, token);
      } else {
        genericStartTagInBody(p, token);
      }

      break;

    case 7:
      if (tn === $$1.BGSOUND) {
        startTagInHead(p, token);
      } else if (tn === $$1.DETAILS || tn === $$1.ADDRESS || tn === $$1.ARTICLE || tn === $$1.SECTION || tn === $$1.SUMMARY) {
        addressStartTagInBody(p, token);
      } else if (tn === $$1.LISTING) {
        preStartTagInBody(p, token);
      } else if (tn === $$1.MARQUEE) {
        appletStartTagInBody(p, token);
      } else if (tn === $$1.NOEMBED) {
        noembedStartTagInBody(p, token);
      } else if (tn !== $$1.CAPTION) {
        genericStartTagInBody(p, token);
      }

      break;

    case 8:
      if (tn === $$1.BASEFONT) {
        startTagInHead(p, token);
      } else if (tn === $$1.FRAMESET) {
        framesetStartTagInBody(p, token);
      } else if (tn === $$1.FIELDSET) {
        addressStartTagInBody(p, token);
      } else if (tn === $$1.TEXTAREA) {
        textareaStartTagInBody(p, token);
      } else if (tn === $$1.TEMPLATE) {
        startTagInHead(p, token);
      } else if (tn === $$1.NOSCRIPT) {
        if (p.options.scriptingEnabled) {
          noembedStartTagInBody(p, token);
        } else {
          genericStartTagInBody(p, token);
        }
      } else if (tn === $$1.OPTGROUP) {
        optgroupStartTagInBody(p, token);
      } else if (tn !== $$1.COLGROUP) {
        genericStartTagInBody(p, token);
      }

      break;

    case 9:
      if (tn === $$1.PLAINTEXT) {
        plaintextStartTagInBody(p, token);
      } else {
        genericStartTagInBody(p, token);
      }

      break;

    case 10:
      if (tn === $$1.BLOCKQUOTE || tn === $$1.FIGCAPTION) {
        addressStartTagInBody(p, token);
      } else {
        genericStartTagInBody(p, token);
      }

      break;

    default:
      genericStartTagInBody(p, token);
  }
}

function bodyEndTagInBody(p) {
  if (p.openElements.hasInScope($$1.BODY)) {
    p.insertionMode = AFTER_BODY_MODE;
  }
}

function htmlEndTagInBody(p, token) {
  if (p.openElements.hasInScope($$1.BODY)) {
    p.insertionMode = AFTER_BODY_MODE;

    p._processToken(token);
  }
}

function addressEndTagInBody(p, token) {
  var tn = token.tagName;

  if (p.openElements.hasInScope(tn)) {
    p.openElements.generateImpliedEndTags();
    p.openElements.popUntilTagNamePopped(tn);
  }
}

function formEndTagInBody(p) {
  var inTemplate = p.openElements.tmplCount > 0;
  var formElement = p.formElement;

  if (!inTemplate) {
    p.formElement = null;
  }

  if ((formElement || inTemplate) && p.openElements.hasInScope($$1.FORM)) {
    p.openElements.generateImpliedEndTags();

    if (inTemplate) {
      p.openElements.popUntilTagNamePopped($$1.FORM);
    } else {
      p.openElements.remove(formElement);
    }
  }
}

function pEndTagInBody(p) {
  if (!p.openElements.hasInButtonScope($$1.P)) {
    p._insertFakeElement($$1.P);
  }

  p._closePElement();
}

function liEndTagInBody(p) {
  if (p.openElements.hasInListItemScope($$1.LI)) {
    p.openElements.generateImpliedEndTagsWithExclusion($$1.LI);
    p.openElements.popUntilTagNamePopped($$1.LI);
  }
}

function ddEndTagInBody(p, token) {
  var tn = token.tagName;

  if (p.openElements.hasInScope(tn)) {
    p.openElements.generateImpliedEndTagsWithExclusion(tn);
    p.openElements.popUntilTagNamePopped(tn);
  }
}

function numberedHeaderEndTagInBody(p) {
  if (p.openElements.hasNumberedHeaderInScope()) {
    p.openElements.generateImpliedEndTags();
    p.openElements.popUntilNumberedHeaderPopped();
  }
}

function appletEndTagInBody(p, token) {
  var tn = token.tagName;

  if (p.openElements.hasInScope(tn)) {
    p.openElements.generateImpliedEndTags();
    p.openElements.popUntilTagNamePopped(tn);
    p.activeFormattingElements.clearToLastMarker();
  }
}

function brEndTagInBody(p) {
  p._reconstructActiveFormattingElements();

  p._insertFakeElement($$1.BR);

  p.openElements.pop();
  p.framesetOk = false;
}

function genericEndTagInBody(p, token) {
  var tn = token.tagName;

  for (var i = p.openElements.stackTop; i > 0; i--) {
    var element = p.openElements.items[i];

    if (p.treeAdapter.getTagName(element) === tn) {
      p.openElements.generateImpliedEndTagsWithExclusion(tn);
      p.openElements.popUntilElementPopped(element);
      break;
    }

    if (p._isSpecialElement(element)) {
      break;
    }
  }
} //OPTIMIZATION: Integer comparisons are low-cost, so we can use very fast tag name length filters here.
//It's faster than using dictionary.


function endTagInBody(p, token) {
  var tn = token.tagName;

  switch (tn.length) {
    case 1:
      if (tn === $$1.A || tn === $$1.B || tn === $$1.I || tn === $$1.S || tn === $$1.U) {
        callAdoptionAgency(p, token);
      } else if (tn === $$1.P) {
        pEndTagInBody(p);
      } else {
        genericEndTagInBody(p, token);
      }

      break;

    case 2:
      if (tn === $$1.DL || tn === $$1.UL || tn === $$1.OL) {
        addressEndTagInBody(p, token);
      } else if (tn === $$1.LI) {
        liEndTagInBody(p);
      } else if (tn === $$1.DD || tn === $$1.DT) {
        ddEndTagInBody(p, token);
      } else if (tn === $$1.H1 || tn === $$1.H2 || tn === $$1.H3 || tn === $$1.H4 || tn === $$1.H5 || tn === $$1.H6) {
        numberedHeaderEndTagInBody(p);
      } else if (tn === $$1.BR) {
        brEndTagInBody(p);
      } else if (tn === $$1.EM || tn === $$1.TT) {
        callAdoptionAgency(p, token);
      } else {
        genericEndTagInBody(p, token);
      }

      break;

    case 3:
      if (tn === $$1.BIG) {
        callAdoptionAgency(p, token);
      } else if (tn === $$1.DIR || tn === $$1.DIV || tn === $$1.NAV || tn === $$1.PRE) {
        addressEndTagInBody(p, token);
      } else {
        genericEndTagInBody(p, token);
      }

      break;

    case 4:
      if (tn === $$1.BODY) {
        bodyEndTagInBody(p);
      } else if (tn === $$1.HTML) {
        htmlEndTagInBody(p, token);
      } else if (tn === $$1.FORM) {
        formEndTagInBody(p);
      } else if (tn === $$1.CODE || tn === $$1.FONT || tn === $$1.NOBR) {
        callAdoptionAgency(p, token);
      } else if (tn === $$1.MAIN || tn === $$1.MENU) {
        addressEndTagInBody(p, token);
      } else {
        genericEndTagInBody(p, token);
      }

      break;

    case 5:
      if (tn === $$1.ASIDE) {
        addressEndTagInBody(p, token);
      } else if (tn === $$1.SMALL) {
        callAdoptionAgency(p, token);
      } else {
        genericEndTagInBody(p, token);
      }

      break;

    case 6:
      if (tn === $$1.CENTER || tn === $$1.FIGURE || tn === $$1.FOOTER || tn === $$1.HEADER || tn === $$1.HGROUP || tn === $$1.DIALOG) {
        addressEndTagInBody(p, token);
      } else if (tn === $$1.APPLET || tn === $$1.OBJECT) {
        appletEndTagInBody(p, token);
      } else if (tn === $$1.STRIKE || tn === $$1.STRONG) {
        callAdoptionAgency(p, token);
      } else {
        genericEndTagInBody(p, token);
      }

      break;

    case 7:
      if (tn === $$1.ADDRESS || tn === $$1.ARTICLE || tn === $$1.DETAILS || tn === $$1.SECTION || tn === $$1.SUMMARY || tn === $$1.LISTING) {
        addressEndTagInBody(p, token);
      } else if (tn === $$1.MARQUEE) {
        appletEndTagInBody(p, token);
      } else {
        genericEndTagInBody(p, token);
      }

      break;

    case 8:
      if (tn === $$1.FIELDSET) {
        addressEndTagInBody(p, token);
      } else if (tn === $$1.TEMPLATE) {
        endTagInHead(p, token);
      } else {
        genericEndTagInBody(p, token);
      }

      break;

    case 10:
      if (tn === $$1.BLOCKQUOTE || tn === $$1.FIGCAPTION) {
        addressEndTagInBody(p, token);
      } else {
        genericEndTagInBody(p, token);
      }

      break;

    default:
      genericEndTagInBody(p, token);
  }
}

function eofInBody(p, token) {
  if (p.tmplInsertionModeStackTop > -1) {
    eofInTemplate(p, token);
  } else {
    p.stopped = true;
  }
} // The "text" insertion mode
//------------------------------------------------------------------


function endTagInText(p, token) {
  if (token.tagName === $$1.SCRIPT) {
    p.pendingScript = p.openElements.current;
  }

  p.openElements.pop();
  p.insertionMode = p.originalInsertionMode;
}

function eofInText(p, token) {
  p._err(ERR.eofInElementThatCanContainOnlyText);

  p.openElements.pop();
  p.insertionMode = p.originalInsertionMode;

  p._processToken(token);
} // The "in table" insertion mode
//------------------------------------------------------------------


function characterInTable(p, token) {
  var curTn = p.openElements.currentTagName;

  if (curTn === $$1.TABLE || curTn === $$1.TBODY || curTn === $$1.TFOOT || curTn === $$1.THEAD || curTn === $$1.TR) {
    p.pendingCharacterTokens = [];
    p.hasNonWhitespacePendingCharacterToken = false;
    p.originalInsertionMode = p.insertionMode;
    p.insertionMode = IN_TABLE_TEXT_MODE;

    p._processToken(token);
  } else {
    tokenInTable(p, token);
  }
}

function captionStartTagInTable(p, token) {
  p.openElements.clearBackToTableContext();
  p.activeFormattingElements.insertMarker();

  p._insertElement(token, NS$1.HTML);

  p.insertionMode = IN_CAPTION_MODE;
}

function colgroupStartTagInTable(p, token) {
  p.openElements.clearBackToTableContext();

  p._insertElement(token, NS$1.HTML);

  p.insertionMode = IN_COLUMN_GROUP_MODE;
}

function colStartTagInTable(p, token) {
  p.openElements.clearBackToTableContext();

  p._insertFakeElement($$1.COLGROUP);

  p.insertionMode = IN_COLUMN_GROUP_MODE;

  p._processToken(token);
}

function tbodyStartTagInTable(p, token) {
  p.openElements.clearBackToTableContext();

  p._insertElement(token, NS$1.HTML);

  p.insertionMode = IN_TABLE_BODY_MODE;
}

function tdStartTagInTable(p, token) {
  p.openElements.clearBackToTableContext();

  p._insertFakeElement($$1.TBODY);

  p.insertionMode = IN_TABLE_BODY_MODE;

  p._processToken(token);
}

function tableStartTagInTable(p, token) {
  if (p.openElements.hasInTableScope($$1.TABLE)) {
    p.openElements.popUntilTagNamePopped($$1.TABLE);

    p._resetInsertionMode();

    p._processToken(token);
  }
}

function inputStartTagInTable(p, token) {
  var inputType = Tokenizer.getTokenAttr(token, ATTRS.TYPE);

  if (inputType && inputType.toLowerCase() === HIDDEN_INPUT_TYPE) {
    p._appendElement(token, NS$1.HTML);
  } else {
    tokenInTable(p, token);
  }

  token.ackSelfClosing = true;
}

function formStartTagInTable(p, token) {
  if (!p.formElement && p.openElements.tmplCount === 0) {
    p._insertElement(token, NS$1.HTML);

    p.formElement = p.openElements.current;
    p.openElements.pop();
  }
}

function startTagInTable(p, token) {
  var tn = token.tagName;

  switch (tn.length) {
    case 2:
      if (tn === $$1.TD || tn === $$1.TH || tn === $$1.TR) {
        tdStartTagInTable(p, token);
      } else {
        tokenInTable(p, token);
      }

      break;

    case 3:
      if (tn === $$1.COL) {
        colStartTagInTable(p, token);
      } else {
        tokenInTable(p, token);
      }

      break;

    case 4:
      if (tn === $$1.FORM) {
        formStartTagInTable(p, token);
      } else {
        tokenInTable(p, token);
      }

      break;

    case 5:
      if (tn === $$1.TABLE) {
        tableStartTagInTable(p, token);
      } else if (tn === $$1.STYLE) {
        startTagInHead(p, token);
      } else if (tn === $$1.TBODY || tn === $$1.TFOOT || tn === $$1.THEAD) {
        tbodyStartTagInTable(p, token);
      } else if (tn === $$1.INPUT) {
        inputStartTagInTable(p, token);
      } else {
        tokenInTable(p, token);
      }

      break;

    case 6:
      if (tn === $$1.SCRIPT) {
        startTagInHead(p, token);
      } else {
        tokenInTable(p, token);
      }

      break;

    case 7:
      if (tn === $$1.CAPTION) {
        captionStartTagInTable(p, token);
      } else {
        tokenInTable(p, token);
      }

      break;

    case 8:
      if (tn === $$1.COLGROUP) {
        colgroupStartTagInTable(p, token);
      } else if (tn === $$1.TEMPLATE) {
        startTagInHead(p, token);
      } else {
        tokenInTable(p, token);
      }

      break;

    default:
      tokenInTable(p, token);
  }
}

function endTagInTable(p, token) {
  var tn = token.tagName;

  if (tn === $$1.TABLE) {
    if (p.openElements.hasInTableScope($$1.TABLE)) {
      p.openElements.popUntilTagNamePopped($$1.TABLE);

      p._resetInsertionMode();
    }
  } else if (tn === $$1.TEMPLATE) {
    endTagInHead(p, token);
  } else if (tn !== $$1.BODY && tn !== $$1.CAPTION && tn !== $$1.COL && tn !== $$1.COLGROUP && tn !== $$1.HTML && tn !== $$1.TBODY && tn !== $$1.TD && tn !== $$1.TFOOT && tn !== $$1.TH && tn !== $$1.THEAD && tn !== $$1.TR) {
    tokenInTable(p, token);
  }
}

function tokenInTable(p, token) {
  var savedFosterParentingState = p.fosterParentingEnabled;
  p.fosterParentingEnabled = true;

  p._processTokenInBodyMode(token);

  p.fosterParentingEnabled = savedFosterParentingState;
} // The "in table text" insertion mode
//------------------------------------------------------------------


function whitespaceCharacterInTableText(p, token) {
  p.pendingCharacterTokens.push(token);
}

function characterInTableText(p, token) {
  p.pendingCharacterTokens.push(token);
  p.hasNonWhitespacePendingCharacterToken = true;
}

function tokenInTableText(p, token) {
  var i = 0;

  if (p.hasNonWhitespacePendingCharacterToken) {
    for (; i < p.pendingCharacterTokens.length; i++) {
      tokenInTable(p, p.pendingCharacterTokens[i]);
    }
  } else {
    for (; i < p.pendingCharacterTokens.length; i++) {
      p._insertCharacters(p.pendingCharacterTokens[i]);
    }
  }

  p.insertionMode = p.originalInsertionMode;

  p._processToken(token);
} // The "in caption" insertion mode
//------------------------------------------------------------------


function startTagInCaption(p, token) {
  var tn = token.tagName;

  if (tn === $$1.CAPTION || tn === $$1.COL || tn === $$1.COLGROUP || tn === $$1.TBODY || tn === $$1.TD || tn === $$1.TFOOT || tn === $$1.TH || tn === $$1.THEAD || tn === $$1.TR) {
    if (p.openElements.hasInTableScope($$1.CAPTION)) {
      p.openElements.generateImpliedEndTags();
      p.openElements.popUntilTagNamePopped($$1.CAPTION);
      p.activeFormattingElements.clearToLastMarker();
      p.insertionMode = IN_TABLE_MODE;

      p._processToken(token);
    }
  } else {
    startTagInBody(p, token);
  }
}

function endTagInCaption(p, token) {
  var tn = token.tagName;

  if (tn === $$1.CAPTION || tn === $$1.TABLE) {
    if (p.openElements.hasInTableScope($$1.CAPTION)) {
      p.openElements.generateImpliedEndTags();
      p.openElements.popUntilTagNamePopped($$1.CAPTION);
      p.activeFormattingElements.clearToLastMarker();
      p.insertionMode = IN_TABLE_MODE;

      if (tn === $$1.TABLE) {
        p._processToken(token);
      }
    }
  } else if (tn !== $$1.BODY && tn !== $$1.COL && tn !== $$1.COLGROUP && tn !== $$1.HTML && tn !== $$1.TBODY && tn !== $$1.TD && tn !== $$1.TFOOT && tn !== $$1.TH && tn !== $$1.THEAD && tn !== $$1.TR) {
    endTagInBody(p, token);
  }
} // The "in column group" insertion mode
//------------------------------------------------------------------


function startTagInColumnGroup(p, token) {
  var tn = token.tagName;

  if (tn === $$1.HTML) {
    startTagInBody(p, token);
  } else if (tn === $$1.COL) {
    p._appendElement(token, NS$1.HTML);

    token.ackSelfClosing = true;
  } else if (tn === $$1.TEMPLATE) {
    startTagInHead(p, token);
  } else {
    tokenInColumnGroup(p, token);
  }
}

function endTagInColumnGroup(p, token) {
  var tn = token.tagName;

  if (tn === $$1.COLGROUP) {
    if (p.openElements.currentTagName === $$1.COLGROUP) {
      p.openElements.pop();
      p.insertionMode = IN_TABLE_MODE;
    }
  } else if (tn === $$1.TEMPLATE) {
    endTagInHead(p, token);
  } else if (tn !== $$1.COL) {
    tokenInColumnGroup(p, token);
  }
}

function tokenInColumnGroup(p, token) {
  if (p.openElements.currentTagName === $$1.COLGROUP) {
    p.openElements.pop();
    p.insertionMode = IN_TABLE_MODE;

    p._processToken(token);
  }
} // The "in table body" insertion mode
//------------------------------------------------------------------


function startTagInTableBody(p, token) {
  var tn = token.tagName;

  if (tn === $$1.TR) {
    p.openElements.clearBackToTableBodyContext();

    p._insertElement(token, NS$1.HTML);

    p.insertionMode = IN_ROW_MODE;
  } else if (tn === $$1.TH || tn === $$1.TD) {
    p.openElements.clearBackToTableBodyContext();

    p._insertFakeElement($$1.TR);

    p.insertionMode = IN_ROW_MODE;

    p._processToken(token);
  } else if (tn === $$1.CAPTION || tn === $$1.COL || tn === $$1.COLGROUP || tn === $$1.TBODY || tn === $$1.TFOOT || tn === $$1.THEAD) {
    if (p.openElements.hasTableBodyContextInTableScope()) {
      p.openElements.clearBackToTableBodyContext();
      p.openElements.pop();
      p.insertionMode = IN_TABLE_MODE;

      p._processToken(token);
    }
  } else {
    startTagInTable(p, token);
  }
}

function endTagInTableBody(p, token) {
  var tn = token.tagName;

  if (tn === $$1.TBODY || tn === $$1.TFOOT || tn === $$1.THEAD) {
    if (p.openElements.hasInTableScope(tn)) {
      p.openElements.clearBackToTableBodyContext();
      p.openElements.pop();
      p.insertionMode = IN_TABLE_MODE;
    }
  } else if (tn === $$1.TABLE) {
    if (p.openElements.hasTableBodyContextInTableScope()) {
      p.openElements.clearBackToTableBodyContext();
      p.openElements.pop();
      p.insertionMode = IN_TABLE_MODE;

      p._processToken(token);
    }
  } else if (tn !== $$1.BODY && tn !== $$1.CAPTION && tn !== $$1.COL && tn !== $$1.COLGROUP || tn !== $$1.HTML && tn !== $$1.TD && tn !== $$1.TH && tn !== $$1.TR) {
    endTagInTable(p, token);
  }
} // The "in row" insertion mode
//------------------------------------------------------------------


function startTagInRow(p, token) {
  var tn = token.tagName;

  if (tn === $$1.TH || tn === $$1.TD) {
    p.openElements.clearBackToTableRowContext();

    p._insertElement(token, NS$1.HTML);

    p.insertionMode = IN_CELL_MODE;
    p.activeFormattingElements.insertMarker();
  } else if (tn === $$1.CAPTION || tn === $$1.COL || tn === $$1.COLGROUP || tn === $$1.TBODY || tn === $$1.TFOOT || tn === $$1.THEAD || tn === $$1.TR) {
    if (p.openElements.hasInTableScope($$1.TR)) {
      p.openElements.clearBackToTableRowContext();
      p.openElements.pop();
      p.insertionMode = IN_TABLE_BODY_MODE;

      p._processToken(token);
    }
  } else {
    startTagInTable(p, token);
  }
}

function endTagInRow(p, token) {
  var tn = token.tagName;

  if (tn === $$1.TR) {
    if (p.openElements.hasInTableScope($$1.TR)) {
      p.openElements.clearBackToTableRowContext();
      p.openElements.pop();
      p.insertionMode = IN_TABLE_BODY_MODE;
    }
  } else if (tn === $$1.TABLE) {
    if (p.openElements.hasInTableScope($$1.TR)) {
      p.openElements.clearBackToTableRowContext();
      p.openElements.pop();
      p.insertionMode = IN_TABLE_BODY_MODE;

      p._processToken(token);
    }
  } else if (tn === $$1.TBODY || tn === $$1.TFOOT || tn === $$1.THEAD) {
    if (p.openElements.hasInTableScope(tn) || p.openElements.hasInTableScope($$1.TR)) {
      p.openElements.clearBackToTableRowContext();
      p.openElements.pop();
      p.insertionMode = IN_TABLE_BODY_MODE;

      p._processToken(token);
    }
  } else if (tn !== $$1.BODY && tn !== $$1.CAPTION && tn !== $$1.COL && tn !== $$1.COLGROUP || tn !== $$1.HTML && tn !== $$1.TD && tn !== $$1.TH) {
    endTagInTable(p, token);
  }
} // The "in cell" insertion mode
//------------------------------------------------------------------


function startTagInCell(p, token) {
  var tn = token.tagName;

  if (tn === $$1.CAPTION || tn === $$1.COL || tn === $$1.COLGROUP || tn === $$1.TBODY || tn === $$1.TD || tn === $$1.TFOOT || tn === $$1.TH || tn === $$1.THEAD || tn === $$1.TR) {
    if (p.openElements.hasInTableScope($$1.TD) || p.openElements.hasInTableScope($$1.TH)) {
      p._closeTableCell();

      p._processToken(token);
    }
  } else {
    startTagInBody(p, token);
  }
}

function endTagInCell(p, token) {
  var tn = token.tagName;

  if (tn === $$1.TD || tn === $$1.TH) {
    if (p.openElements.hasInTableScope(tn)) {
      p.openElements.generateImpliedEndTags();
      p.openElements.popUntilTagNamePopped(tn);
      p.activeFormattingElements.clearToLastMarker();
      p.insertionMode = IN_ROW_MODE;
    }
  } else if (tn === $$1.TABLE || tn === $$1.TBODY || tn === $$1.TFOOT || tn === $$1.THEAD || tn === $$1.TR) {
    if (p.openElements.hasInTableScope(tn)) {
      p._closeTableCell();

      p._processToken(token);
    }
  } else if (tn !== $$1.BODY && tn !== $$1.CAPTION && tn !== $$1.COL && tn !== $$1.COLGROUP && tn !== $$1.HTML) {
    endTagInBody(p, token);
  }
} // The "in select" insertion mode
//------------------------------------------------------------------


function startTagInSelect(p, token) {
  var tn = token.tagName;

  if (tn === $$1.HTML) {
    startTagInBody(p, token);
  } else if (tn === $$1.OPTION) {
    if (p.openElements.currentTagName === $$1.OPTION) {
      p.openElements.pop();
    }

    p._insertElement(token, NS$1.HTML);
  } else if (tn === $$1.OPTGROUP) {
    if (p.openElements.currentTagName === $$1.OPTION) {
      p.openElements.pop();
    }

    if (p.openElements.currentTagName === $$1.OPTGROUP) {
      p.openElements.pop();
    }

    p._insertElement(token, NS$1.HTML);
  } else if (tn === $$1.INPUT || tn === $$1.KEYGEN || tn === $$1.TEXTAREA || tn === $$1.SELECT) {
    if (p.openElements.hasInSelectScope($$1.SELECT)) {
      p.openElements.popUntilTagNamePopped($$1.SELECT);

      p._resetInsertionMode();

      if (tn !== $$1.SELECT) {
        p._processToken(token);
      }
    }
  } else if (tn === $$1.SCRIPT || tn === $$1.TEMPLATE) {
    startTagInHead(p, token);
  }
}

function endTagInSelect(p, token) {
  var tn = token.tagName;

  if (tn === $$1.OPTGROUP) {
    var prevOpenElement = p.openElements.items[p.openElements.stackTop - 1];
    var prevOpenElementTn = prevOpenElement && p.treeAdapter.getTagName(prevOpenElement);

    if (p.openElements.currentTagName === $$1.OPTION && prevOpenElementTn === $$1.OPTGROUP) {
      p.openElements.pop();
    }

    if (p.openElements.currentTagName === $$1.OPTGROUP) {
      p.openElements.pop();
    }
  } else if (tn === $$1.OPTION) {
    if (p.openElements.currentTagName === $$1.OPTION) {
      p.openElements.pop();
    }
  } else if (tn === $$1.SELECT && p.openElements.hasInSelectScope($$1.SELECT)) {
    p.openElements.popUntilTagNamePopped($$1.SELECT);

    p._resetInsertionMode();
  } else if (tn === $$1.TEMPLATE) {
    endTagInHead(p, token);
  }
} //12.2.5.4.17 The "in select in table" insertion mode
//------------------------------------------------------------------


function startTagInSelectInTable(p, token) {
  var tn = token.tagName;

  if (tn === $$1.CAPTION || tn === $$1.TABLE || tn === $$1.TBODY || tn === $$1.TFOOT || tn === $$1.THEAD || tn === $$1.TR || tn === $$1.TD || tn === $$1.TH) {
    p.openElements.popUntilTagNamePopped($$1.SELECT);

    p._resetInsertionMode();

    p._processToken(token);
  } else {
    startTagInSelect(p, token);
  }
}

function endTagInSelectInTable(p, token) {
  var tn = token.tagName;

  if (tn === $$1.CAPTION || tn === $$1.TABLE || tn === $$1.TBODY || tn === $$1.TFOOT || tn === $$1.THEAD || tn === $$1.TR || tn === $$1.TD || tn === $$1.TH) {
    if (p.openElements.hasInTableScope(tn)) {
      p.openElements.popUntilTagNamePopped($$1.SELECT);

      p._resetInsertionMode();

      p._processToken(token);
    }
  } else {
    endTagInSelect(p, token);
  }
} // The "in template" insertion mode
//------------------------------------------------------------------


function startTagInTemplate(p, token) {
  var tn = token.tagName;

  if (tn === $$1.BASE || tn === $$1.BASEFONT || tn === $$1.BGSOUND || tn === $$1.LINK || tn === $$1.META || tn === $$1.NOFRAMES || tn === $$1.SCRIPT || tn === $$1.STYLE || tn === $$1.TEMPLATE || tn === $$1.TITLE) {
    startTagInHead(p, token);
  } else {
    var newInsertionMode = TEMPLATE_INSERTION_MODE_SWITCH_MAP[tn] || IN_BODY_MODE;

    p._popTmplInsertionMode();

    p._pushTmplInsertionMode(newInsertionMode);

    p.insertionMode = newInsertionMode;

    p._processToken(token);
  }
}

function endTagInTemplate(p, token) {
  if (token.tagName === $$1.TEMPLATE) {
    endTagInHead(p, token);
  }
}

function eofInTemplate(p, token) {
  if (p.openElements.tmplCount > 0) {
    p.openElements.popUntilTagNamePopped($$1.TEMPLATE);
    p.activeFormattingElements.clearToLastMarker();

    p._popTmplInsertionMode();

    p._resetInsertionMode();

    p._processToken(token);
  } else {
    p.stopped = true;
  }
} // The "after body" insertion mode
//------------------------------------------------------------------


function startTagAfterBody(p, token) {
  if (token.tagName === $$1.HTML) {
    startTagInBody(p, token);
  } else {
    tokenAfterBody(p, token);
  }
}

function endTagAfterBody(p, token) {
  if (token.tagName === $$1.HTML) {
    if (!p.fragmentContext) {
      p.insertionMode = AFTER_AFTER_BODY_MODE;
    }
  } else {
    tokenAfterBody(p, token);
  }
}

function tokenAfterBody(p, token) {
  p.insertionMode = IN_BODY_MODE;

  p._processToken(token);
} // The "in frameset" insertion mode
//------------------------------------------------------------------


function startTagInFrameset(p, token) {
  var tn = token.tagName;

  if (tn === $$1.HTML) {
    startTagInBody(p, token);
  } else if (tn === $$1.FRAMESET) {
    p._insertElement(token, NS$1.HTML);
  } else if (tn === $$1.FRAME) {
    p._appendElement(token, NS$1.HTML);

    token.ackSelfClosing = true;
  } else if (tn === $$1.NOFRAMES) {
    startTagInHead(p, token);
  }
}

function endTagInFrameset(p, token) {
  if (token.tagName === $$1.FRAMESET && !p.openElements.isRootHtmlElementCurrent()) {
    p.openElements.pop();

    if (!p.fragmentContext && p.openElements.currentTagName !== $$1.FRAMESET) {
      p.insertionMode = AFTER_FRAMESET_MODE;
    }
  }
} // The "after frameset" insertion mode
//------------------------------------------------------------------


function startTagAfterFrameset(p, token) {
  var tn = token.tagName;

  if (tn === $$1.HTML) {
    startTagInBody(p, token);
  } else if (tn === $$1.NOFRAMES) {
    startTagInHead(p, token);
  }
}

function endTagAfterFrameset(p, token) {
  if (token.tagName === $$1.HTML) {
    p.insertionMode = AFTER_AFTER_FRAMESET_MODE;
  }
} // The "after after body" insertion mode
//------------------------------------------------------------------


function startTagAfterAfterBody(p, token) {
  if (token.tagName === $$1.HTML) {
    startTagInBody(p, token);
  } else {
    tokenAfterAfterBody(p, token);
  }
}

function tokenAfterAfterBody(p, token) {
  p.insertionMode = IN_BODY_MODE;

  p._processToken(token);
} // The "after after frameset" insertion mode
//------------------------------------------------------------------


function startTagAfterAfterFrameset(p, token) {
  var tn = token.tagName;

  if (tn === $$1.HTML) {
    startTagInBody(p, token);
  } else if (tn === $$1.NOFRAMES) {
    startTagInHead(p, token);
  }
} // The rules for parsing tokens in foreign content
//------------------------------------------------------------------


function nullCharacterInForeignContent(p, token) {
  token.chars = unicode.REPLACEMENT_CHARACTER;

  p._insertCharacters(token);
}

function characterInForeignContent(p, token) {
  p._insertCharacters(token);

  p.framesetOk = false;
}

function startTagInForeignContent(p, token) {
  if (foreignContent.causesExit(token) && !p.fragmentContext) {
    while (p.treeAdapter.getNamespaceURI(p.openElements.current) !== NS$1.HTML && !p._isIntegrationPoint(p.openElements.current)) {
      p.openElements.pop();
    }

    p._processToken(token);
  } else {
    var current = p._getAdjustedCurrentElement();

    var currentNs = p.treeAdapter.getNamespaceURI(current);

    if (currentNs === NS$1.MATHML) {
      foreignContent.adjustTokenMathMLAttrs(token);
    } else if (currentNs === NS$1.SVG) {
      foreignContent.adjustTokenSVGTagName(token);
      foreignContent.adjustTokenSVGAttrs(token);
    }

    foreignContent.adjustTokenXMLAttrs(token);

    if (token.selfClosing) {
      p._appendElement(token, currentNs);
    } else {
      p._insertElement(token, currentNs);
    }

    token.ackSelfClosing = true;
  }
}

function endTagInForeignContent(p, token) {
  for (var i = p.openElements.stackTop; i > 0; i--) {
    var element = p.openElements.items[i];

    if (p.treeAdapter.getNamespaceURI(element) === NS$1.HTML) {
      p._processToken(token);

      break;
    }

    if (p.treeAdapter.getTagName(element).toLowerCase() === token.tagName) {
      p.openElements.popUntilElementPopped(element);
      break;
    }
  }
}

var defaultTreeAdapter = _default;
var mergeOptions = mergeOptions$2;
var doctype$1 = doctype$3;
var HTML = html$2; //Aliases

var $ = HTML.TAG_NAMES;
var NS = HTML.NAMESPACES; //Default serializer options

var DEFAULT_OPTIONS = {
  treeAdapter: defaultTreeAdapter
}; //Escaping regexes

var AMP_REGEX = /&/g;
var NBSP_REGEX = /\u00a0/g;
var DOUBLE_QUOTE_REGEX = /"/g;
var LT_REGEX = /</g;
var GT_REGEX = />/g; //Serializer

var Serializer$1 = /*#__PURE__*/function () {
  function Serializer(node, options) {
    _classCallCheck(this, Serializer);

    this.options = mergeOptions(DEFAULT_OPTIONS, options);
    this.treeAdapter = this.options.treeAdapter;
    this.html = '';
    this.startNode = node;
  } //API


  _createClass(Serializer, [{
    key: "serialize",
    value: function serialize() {
      this._serializeChildNodes(this.startNode);

      return this.html;
    } //Internals

  }, {
    key: "_serializeChildNodes",
    value: function _serializeChildNodes(parentNode) {
      var childNodes = this.treeAdapter.getChildNodes(parentNode);

      if (childNodes) {
        for (var i = 0, cnLength = childNodes.length; i < cnLength; i++) {
          var currentNode = childNodes[i];

          if (this.treeAdapter.isElementNode(currentNode)) {
            this._serializeElement(currentNode);
          } else if (this.treeAdapter.isTextNode(currentNode)) {
            this._serializeTextNode(currentNode);
          } else if (this.treeAdapter.isCommentNode(currentNode)) {
            this._serializeCommentNode(currentNode);
          } else if (this.treeAdapter.isDocumentTypeNode(currentNode)) {
            this._serializeDocumentTypeNode(currentNode);
          }
        }
      }
    }
  }, {
    key: "_serializeElement",
    value: function _serializeElement(node) {
      var tn = this.treeAdapter.getTagName(node);
      var ns = this.treeAdapter.getNamespaceURI(node);
      this.html += '<' + tn;

      this._serializeAttributes(node);

      this.html += '>';

      if (tn !== $.AREA && tn !== $.BASE && tn !== $.BASEFONT && tn !== $.BGSOUND && tn !== $.BR && tn !== $.COL && tn !== $.EMBED && tn !== $.FRAME && tn !== $.HR && tn !== $.IMG && tn !== $.INPUT && tn !== $.KEYGEN && tn !== $.LINK && tn !== $.META && tn !== $.PARAM && tn !== $.SOURCE && tn !== $.TRACK && tn !== $.WBR) {
        var childNodesHolder = tn === $.TEMPLATE && ns === NS.HTML ? this.treeAdapter.getTemplateContent(node) : node;

        this._serializeChildNodes(childNodesHolder);

        this.html += '</' + tn + '>';
      }
    }
  }, {
    key: "_serializeAttributes",
    value: function _serializeAttributes(node) {
      var attrs = this.treeAdapter.getAttrList(node);

      for (var i = 0, attrsLength = attrs.length; i < attrsLength; i++) {
        var attr = attrs[i];
        var value = Serializer.escapeString(attr.value, true);
        this.html += ' ';

        if (!attr.namespace) {
          this.html += attr.name;
        } else if (attr.namespace === NS.XML) {
          this.html += 'xml:' + attr.name;
        } else if (attr.namespace === NS.XMLNS) {
          if (attr.name !== 'xmlns') {
            this.html += 'xmlns:';
          }

          this.html += attr.name;
        } else if (attr.namespace === NS.XLINK) {
          this.html += 'xlink:' + attr.name;
        } else {
          this.html += attr.prefix + ':' + attr.name;
        }

        this.html += '="' + value + '"';
      }
    }
  }, {
    key: "_serializeTextNode",
    value: function _serializeTextNode(node) {
      var content = this.treeAdapter.getTextNodeContent(node);
      var parent = this.treeAdapter.getParentNode(node);
      var parentTn = void 0;

      if (parent && this.treeAdapter.isElementNode(parent)) {
        parentTn = this.treeAdapter.getTagName(parent);
      }

      if (parentTn === $.STYLE || parentTn === $.SCRIPT || parentTn === $.XMP || parentTn === $.IFRAME || parentTn === $.NOEMBED || parentTn === $.NOFRAMES || parentTn === $.PLAINTEXT || parentTn === $.NOSCRIPT) {
        this.html += content;
      } else {
        this.html += Serializer.escapeString(content, false);
      }
    }
  }, {
    key: "_serializeCommentNode",
    value: function _serializeCommentNode(node) {
      this.html += '<!--' + this.treeAdapter.getCommentNodeContent(node) + '-->';
    }
  }, {
    key: "_serializeDocumentTypeNode",
    value: function _serializeDocumentTypeNode(node) {
      var name = this.treeAdapter.getDocumentTypeNodeName(node);
      this.html += '<' + doctype$1.serializeContent(name, null, null) + '>';
    }
  }]);

  return Serializer;
}(); // NOTE: used in tests and by rewriting stream


Serializer$1.escapeString = function (str, attrMode) {
  str = str.replace(AMP_REGEX, '&amp;').replace(NBSP_REGEX, '&nbsp;');

  if (attrMode) {
    str = str.replace(DOUBLE_QUOTE_REGEX, '&quot;');
  } else {
    str = str.replace(LT_REGEX, '&lt;').replace(GT_REGEX, '&gt;');
  }

  return str;
};

var serializer = Serializer$1;

var Parser = parser;
var Serializer = serializer; // Shorthands

lib$1.parse = function parse(html, options) {
  var parser = new Parser(options);
  return parser.parse(html);
};

lib$1.parseFragment = function parseFragment(fragmentContext, html, options) {
  if (typeof fragmentContext === 'string') {
    options = html;
    html = fragmentContext;
    fragmentContext = null;
  }

  var parser = new Parser(options);
  return parser.parseFragment(html, fragmentContext);
};

lib$1.serialize = function (node, options) {
  var serializer = new Serializer(node, options);
  return serializer.serialize();
};

var lib = {};

var doctype = doctype$3;
var DOCUMENT_MODE = html$2.DOCUMENT_MODE; //Conversion tables for DOM Level1 structure emulation

var nodeTypes = {
  element: 1,
  text: 3,
  cdata: 4,
  comment: 8
};
var nodePropertyShorthands = {
  tagName: 'name',
  childNodes: 'children',
  parentNode: 'parent',
  previousSibling: 'prev',
  nextSibling: 'next',
  nodeValue: 'data'
}; //Node

var Node = /*#__PURE__*/function () {
  function Node(props) {
    _classCallCheck(this, Node);

    for (var _i = 0, _Object$keys = Object.keys(props); _i < _Object$keys.length; _i++) {
      var key = _Object$keys[_i];
      this[key] = props[key];
    }
  }

  _createClass(Node, [{
    key: "firstChild",
    get: function get() {
      var children = this.children;
      return children && children[0] || null;
    }
  }, {
    key: "lastChild",
    get: function get() {
      var children = this.children;
      return children && children[children.length - 1] || null;
    }
  }, {
    key: "nodeType",
    get: function get() {
      return nodeTypes[this.type] || nodeTypes.element;
    }
  }]);

  return Node;
}();

Object.keys(nodePropertyShorthands).forEach(function (key) {
  var shorthand = nodePropertyShorthands[key];
  Object.defineProperty(Node.prototype, key, {
    get: function get() {
      return this[shorthand] || null;
    },
    set: function set(val) {
      this[shorthand] = val;
      return val;
    }
  });
}); //Node construction

lib.createDocument = function () {
  return new Node({
    type: 'root',
    name: 'root',
    parent: null,
    prev: null,
    next: null,
    children: [],
    'x-mode': DOCUMENT_MODE.NO_QUIRKS
  });
};

lib.createDocumentFragment = function () {
  return new Node({
    type: 'root',
    name: 'root',
    parent: null,
    prev: null,
    next: null,
    children: []
  });
};

lib.createElement = function (tagName, namespaceURI, attrs) {
  var attribs = Object.create(null);
  var attribsNamespace = Object.create(null);
  var attribsPrefix = Object.create(null);

  for (var i = 0; i < attrs.length; i++) {
    var attrName = attrs[i].name;
    attribs[attrName] = attrs[i].value;
    attribsNamespace[attrName] = attrs[i].namespace;
    attribsPrefix[attrName] = attrs[i].prefix;
  }

  return new Node({
    type: tagName === 'script' || tagName === 'style' ? tagName : 'tag',
    name: tagName,
    namespace: namespaceURI,
    attribs: attribs,
    'x-attribsNamespace': attribsNamespace,
    'x-attribsPrefix': attribsPrefix,
    children: [],
    parent: null,
    prev: null,
    next: null
  });
};

lib.createCommentNode = function (data) {
  return new Node({
    type: 'comment',
    data: data,
    parent: null,
    prev: null,
    next: null
  });
};

var createTextNode = function createTextNode(value) {
  return new Node({
    type: 'text',
    data: value,
    parent: null,
    prev: null,
    next: null
  });
}; //Tree mutation


var appendChild = lib.appendChild = function (parentNode, newNode) {
  var prev = parentNode.children[parentNode.children.length - 1];

  if (prev) {
    prev.next = newNode;
    newNode.prev = prev;
  }

  parentNode.children.push(newNode);
  newNode.parent = parentNode;
};

var insertBefore$1 = lib.insertBefore = function (parentNode, newNode, referenceNode) {
  var insertionIdx = parentNode.children.indexOf(referenceNode);
  var prev = referenceNode.prev;

  if (prev) {
    prev.next = newNode;
    newNode.prev = prev;
  }

  referenceNode.prev = newNode;
  newNode.next = referenceNode;
  parentNode.children.splice(insertionIdx, 0, newNode);
  newNode.parent = parentNode;
};

lib.setTemplateContent = function (templateElement, contentElement) {
  appendChild(templateElement, contentElement);
};

lib.getTemplateContent = function (templateElement) {
  return templateElement.children[0];
};

lib.setDocumentType = function (document, name, publicId, systemId) {
  var data = doctype.serializeContent(name, publicId, systemId);
  var doctypeNode = null;

  for (var i = 0; i < document.children.length; i++) {
    if (document.children[i].type === 'directive' && document.children[i].name === '!doctype') {
      doctypeNode = document.children[i];
      break;
    }
  }

  if (doctypeNode) {
    doctypeNode.data = data;
    doctypeNode['x-name'] = name;
    doctypeNode['x-publicId'] = publicId;
    doctypeNode['x-systemId'] = systemId;
  } else {
    appendChild(document, new Node({
      type: 'directive',
      name: '!doctype',
      data: data,
      'x-name': name,
      'x-publicId': publicId,
      'x-systemId': systemId
    }));
  }
};

lib.setDocumentMode = function (document, mode) {
  document['x-mode'] = mode;
};

lib.getDocumentMode = function (document) {
  return document['x-mode'];
};

lib.detachNode = function (node) {
  if (node.parent) {
    var idx = node.parent.children.indexOf(node);
    var prev = node.prev;
    var next = node.next;
    node.prev = null;
    node.next = null;

    if (prev) {
      prev.next = next;
    }

    if (next) {
      next.prev = prev;
    }

    node.parent.children.splice(idx, 1);
    node.parent = null;
  }
};

lib.insertText = function (parentNode, text) {
  var lastChild = parentNode.children[parentNode.children.length - 1];

  if (lastChild && lastChild.type === 'text') {
    lastChild.data += text;
  } else {
    appendChild(parentNode, createTextNode(text));
  }
};

lib.insertTextBefore = function (parentNode, text, referenceNode) {
  var prevNode = parentNode.children[parentNode.children.indexOf(referenceNode) - 1];

  if (prevNode && prevNode.type === 'text') {
    prevNode.data += text;
  } else {
    insertBefore$1(parentNode, createTextNode(text), referenceNode);
  }
};

lib.adoptAttributes = function (recipient, attrs) {
  for (var i = 0; i < attrs.length; i++) {
    var attrName = attrs[i].name;

    if (typeof recipient.attribs[attrName] === 'undefined') {
      recipient.attribs[attrName] = attrs[i].value;
      recipient['x-attribsNamespace'][attrName] = attrs[i].namespace;
      recipient['x-attribsPrefix'][attrName] = attrs[i].prefix;
    }
  }
}; //Tree traversing


lib.getFirstChild = function (node) {
  return node.children[0];
};

lib.getChildNodes = function (node) {
  return node.children;
};

lib.getParentNode = function (node) {
  return node.parent;
};

lib.getAttrList = function (element) {
  var attrList = [];

  for (var name in element.attribs) {
    attrList.push({
      name: name,
      value: element.attribs[name],
      namespace: element['x-attribsNamespace'][name],
      prefix: element['x-attribsPrefix'][name]
    });
  }

  return attrList;
}; //Node data


lib.getTagName = function (element) {
  return element.name;
};

lib.getNamespaceURI = function (element) {
  return element.namespace;
};

lib.getTextNodeContent = function (textNode) {
  return textNode.data;
};

lib.getCommentNodeContent = function (commentNode) {
  return commentNode.data;
};

lib.getDocumentTypeNodeName = function (doctypeNode) {
  return doctypeNode['x-name'];
};

lib.getDocumentTypeNodePublicId = function (doctypeNode) {
  return doctypeNode['x-publicId'];
};

lib.getDocumentTypeNodeSystemId = function (doctypeNode) {
  return doctypeNode['x-systemId'];
}; //Node types


lib.isTextNode = function (node) {
  return node.type === 'text';
};

lib.isCommentNode = function (node) {
  return node.type === 'comment';
};

lib.isDocumentTypeNode = function (node) {
  return node.type === 'directive' && node.name === '!doctype';
};

lib.isElementNode = function (node) {
  return !!node.attribs;
}; // Source code location


lib.setNodeSourceCodeLocation = function (node, location) {
  node.sourceCodeLocation = location;
};

lib.getNodeSourceCodeLocation = function (node) {
  return node.sourceCodeLocation;
};

lib.updateNodeSourceCodeLocation = function (node, endLocation) {
  node.sourceCodeLocation = Object.assign(node.sourceCodeLocation, endLocation);
};

Object.defineProperty(parse5Adapter, "__esModule", {
  value: true
});
parse5Adapter.render = parse5Adapter.parse = void 0;
var tslib_1$5 = require$$0$1;
var domhandler_1$4 = lib$7;
var parse5_1 = lib$1;

var parse5_htmlparser2_tree_adapter_1 = tslib_1$5.__importDefault(lib);

function parse$3(content, options, isDocument) {
  var opts = {
    scriptingEnabled: typeof options.scriptingEnabled === 'boolean' ? options.scriptingEnabled : true,
    treeAdapter: parse5_htmlparser2_tree_adapter_1["default"],
    sourceCodeLocationInfo: options.sourceCodeLocationInfo
  };
  var context = options.context; // @ts-expect-error The tree adapter unfortunately doesn't return the exact types.

  return isDocument ? parse5_1.parse(content, opts) : // @ts-expect-error Same issue again.
  parse5_1.parseFragment(context, content, opts);
}

parse5Adapter.parse = parse$3;

function render$1(dom) {
  var _a;
  /*
   * `dom-serializer` passes over the special "root" node and renders the
   * node's children in its place. To mimic this behavior with `parse5`, an
   * equivalent operation must be applied to the input array.
   */


  var nodes = 'length' in dom ? dom : [dom];

  for (var index = 0; index < nodes.length; index += 1) {
    var node = nodes[index];

    if (domhandler_1$4.isDocument(node)) {
      (_a = Array.prototype.splice).call.apply(_a, tslib_1$5.__spreadArray([nodes, index, 1], node.children));
    }
  } // @ts-expect-error Types don't align here either.


  return parse5_1.serialize({
    children: nodes
  }, {
    treeAdapter: parse5_htmlparser2_tree_adapter_1["default"]
  });
}

parse5Adapter.render = render$1;

var htmlparser2Adapter = {};

(function (exports) {

  var __importDefault = commonjsGlobal && commonjsGlobal.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : {
      "default": mod
    };
  };

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.render = exports.parse = void 0;
  var htmlparser2_1 = lib$2;
  Object.defineProperty(exports, "parse", {
    enumerable: true,
    get: function get() {
      return htmlparser2_1.parseDocument;
    }
  });
  var dom_serializer_1 = lib$5;
  Object.defineProperty(exports, "render", {
    enumerable: true,
    get: function get() {
      return __importDefault(dom_serializer_1)["default"];
    }
  });
})(htmlparser2Adapter);

Object.defineProperty(_static, "__esModule", {
  value: true
});
_static.merge = _static.contains = _static.root = _static.parseHTML = _static.text = _static.xml = _static.html = void 0;
var tslib_1$4 = require$$0$1;

var options_1$2 = tslib_1$4.__importStar(options);

var cheerio_select_1 = lib$b;
var htmlparser2_1$4 = lib$2;
var parse5_adapter_1$1 = parse5Adapter;
var htmlparser2_adapter_1$1 = htmlparser2Adapter;
/**
 * Helper function to render a DOM.
 *
 * @param that - Cheerio instance to render.
 * @param dom - The DOM to render. Defaults to `that`'s root.
 * @param options - Options for rendering.
 * @returns The rendered document.
 */

function render(that, dom, options) {
  var _a;

  var toRender = dom ? typeof dom === 'string' ? cheerio_select_1.select(dom, (_a = that === null || that === void 0 ? void 0 : that._root) !== null && _a !== void 0 ? _a : [], options) : dom : that === null || that === void 0 ? void 0 : that._root.children;
  if (!toRender) return '';
  return options.xmlMode || options._useHtmlParser2 ? htmlparser2_adapter_1$1.render(toRender, options) : parse5_adapter_1$1.render(toRender);
}
/**
 * Checks if a passed object is an options object.
 *
 * @param dom - Object to check if it is an options object.
 * @returns Whether the object is an options object.
 */


function isOptions(dom) {
  return _typeof(dom) === 'object' && dom != null && !('length' in dom) && !('type' in dom);
}

function html$1(dom, options) {
  /*
   * Be flexible about parameters, sometimes we call html(),
   * with options as only parameter
   * check dom argument for dom element specific properties
   * assume there is no 'length' or 'type' properties in the options object
   */
  if (!options && isOptions(dom)) {
    options = dom;
    dom = undefined;
  }
  /*
   * Sometimes `$.html()` is used without preloading html,
   * so fallback non-existing options to the default ones.
   */


  var opts = tslib_1$4.__assign(tslib_1$4.__assign(tslib_1$4.__assign({}, options_1$2["default"]), this ? this._options : {}), options_1$2.flatten(options !== null && options !== void 0 ? options : {}));

  return render(this || undefined, dom, opts);
}

_static.html = html$1;
/**
 * Render the document as XML.
 *
 * @param dom - Element to render.
 * @returns THe rendered document.
 */

function xml(dom) {
  var options = tslib_1$4.__assign(tslib_1$4.__assign({}, this._options), {
    xmlMode: true
  });

  return render(this, dom, options);
}

_static.xml = xml;
/**
 * Render the document as text.
 *
 * @param elements - Elements to render.
 * @returns The rendered document.
 */

function text$1(elements) {
  var elems = elements ? elements : this ? this.root() : [];
  var ret = '';

  for (var i = 0; i < elems.length; i++) {
    var elem = elems[i];
    if (htmlparser2_1$4.DomUtils.isText(elem)) ret += elem.data;else if (htmlparser2_1$4.DomUtils.hasChildren(elem) && elem.type !== htmlparser2_1$4.ElementType.Comment && elem.type !== htmlparser2_1$4.ElementType.Script && elem.type !== htmlparser2_1$4.ElementType.Style) {
      ret += text$1(elem.children);
    }
  }

  return ret;
}

_static.text = text$1;

function parseHTML(data, context, keepScripts) {
  if (keepScripts === void 0) {
    keepScripts = typeof context === 'boolean' ? context : false;
  }

  if (!data || typeof data !== 'string') {
    return null;
  }

  if (typeof context === 'boolean') {
    keepScripts = context;
  }

  var parsed = this.load(data, options_1$2["default"], false);

  if (!keepScripts) {
    parsed('script').remove();
  }
  /*
   * The `children` array is used by Cheerio internally to group elements that
   * share the same parents. When nodes created through `parseHTML` are
   * inserted into previously-existing DOM structures, they will be removed
   * from the `children` array. The results of `parseHTML` should remain
   * constant across these operations, so a shallow copy should be returned.
   */


  return parsed.root()[0].children.slice();
}

_static.parseHTML = parseHTML;
/**
 * Sometimes you need to work with the top-level root element. To query it, you
 * can use `$.root()`.
 *
 * @example
 *
 * ```js
 * $.root().append('<ul id="vegetables"></ul>').html();
 * //=> <ul id="fruits">...</ul><ul id="vegetables"></ul>
 * ```
 *
 * @returns Cheerio instance wrapping the root node.
 * @alias Cheerio.root
 */

function root() {
  return this(this._root);
}

_static.root = root;
/**
 * Checks to see if the `contained` DOM element is a descendant of the
 * `container` DOM element.
 *
 * @param container - Potential parent node.
 * @param contained - Potential child node.
 * @returns Indicates if the nodes contain one another.
 * @alias Cheerio.contains
 * @see {@link https://api.jquery.com/jQuery.contains/}
 */

function contains(container, contained) {
  // According to the jQuery API, an element does not "contain" itself
  if (contained === container) {
    return false;
  }
  /*
   * Step up the descendants, stopping when the root element is reached
   * (signaled by `.parent` returning a reference to the same object)
   */


  var next = contained;

  while (next && next !== next.parent) {
    next = next.parent;

    if (next === container) {
      return true;
    }
  }

  return false;
}

_static.contains = contains;
/**
 * $.merge().
 *
 * @param arr1 - First array.
 * @param arr2 - Second array.
 * @returns `arr1`, with elements of `arr2` inserted.
 * @alias Cheerio.merge
 * @see {@link https://api.jquery.com/jQuery.merge/}
 */

function merge(arr1, arr2) {
  if (!isArrayLike(arr1) || !isArrayLike(arr2)) {
    return;
  }

  var newLength = arr1.length;
  var len = +arr2.length;

  for (var i = 0; i < len; i++) {
    arr1[newLength++] = arr2[i];
  }

  arr1.length = newLength;
  return arr1;
}

_static.merge = merge;
/**
 * @param item - Item to check.
 * @returns Indicates if the item is array-like.
 */

function isArrayLike(item) {
  if (Array.isArray(item)) {
    return true;
  }

  if (_typeof(item) !== 'object' || !Object.prototype.hasOwnProperty.call(item, 'length') || typeof item.length !== 'number' || item.length < 0) {
    return false;
  }

  for (var i = 0; i < item.length; i++) {
    if (!(i in item)) {
      return false;
    }
  }

  return true;
}

var cheerio$1 = {};

var parse$2 = {};

Object.defineProperty(parse$2, "__esModule", {
  value: true
});
parse$2.update = void 0;
var htmlparser2_1$3 = lib$2;
var htmlparser2_adapter_1 = htmlparser2Adapter;
var parse5_adapter_1 = parse5Adapter;
var domhandler_1$3 = lib$7;
/*
 * Parser
 */

function parse$1(content, options, isDocument) {
  if (typeof Buffer !== 'undefined' && Buffer.isBuffer(content)) {
    content = content.toString();
  }

  if (typeof content === 'string') {
    return options.xmlMode || options._useHtmlParser2 ? htmlparser2_adapter_1.parse(content, options) : parse5_adapter_1.parse(content, options, isDocument);
  }

  var doc = content;

  if (!Array.isArray(doc) && domhandler_1$3.isDocument(doc)) {
    // If `doc` is already a root, just return it
    return doc;
  } // Add conent to new root element


  var root = new domhandler_1$3.Document([]); // Update the DOM using the root

  update(doc, root);
  return root;
}

parse$2["default"] = parse$1;
/**
 * Update the dom structure, for one changed layer.
 *
 * @param newChilds - The new children.
 * @param parent - The new parent.
 * @returns The parent node.
 */


function update(newChilds, parent) {
  // Normalize
  var arr = Array.isArray(newChilds) ? newChilds : [newChilds]; // Update parent

  if (parent) {
    parent.children = arr;
  } else {
    parent = null;
  } // Update neighbors


  for (var i = 0; i < arr.length; i++) {
    var node = arr[i]; // Cleanly remove existing nodes from their previous structures.

    if (node.parent && node.parent.children !== arr) {
      htmlparser2_1$3.DomUtils.removeElement(node);
    }

    if (parent) {
      node.prev = arr[i - 1] || null;
      node.next = arr[i + 1] || null;
    } else {
      node.prev = node.next = null;
    }

    node.parent = parent;
  }

  return parent;
}

parse$2.update = update;

var utils = {};

Object.defineProperty(utils, "__esModule", {
  value: true
});
utils.isHtml = utils.cloneDom = utils.domEach = utils.cssCase = utils.camelCase = utils.isCheerio = utils.isTag = void 0;
var htmlparser2_1$2 = lib$2;
var domhandler_1$2 = lib$7;
/**
 * Check if the DOM element is a tag.
 *
 * `isTag(type)` includes `<script>` and `<style>` tags.
 *
 * @private
 * @category Utils
 * @param type - DOM node to check.
 * @returns Whether the node is a tag.
 */

utils.isTag = htmlparser2_1$2.DomUtils.isTag;
/**
 * Checks if an object is a Cheerio instance.
 *
 * @category Utils
 * @param maybeCheerio - The object to check.
 * @returns Whether the object is a Cheerio instance.
 */

function isCheerio(maybeCheerio) {
  return maybeCheerio.cheerio != null;
}

utils.isCheerio = isCheerio;
/**
 * Convert a string to camel case notation.
 *
 * @private
 * @category Utils
 * @param str - String to be converted.
 * @returns String in camel case notation.
 */

function camelCase(str) {
  return str.replace(/[_.-](\w|$)/g, function (_, x) {
    return x.toUpperCase();
  });
}

utils.camelCase = camelCase;
/**
 * Convert a string from camel case to "CSS case", where word boundaries are
 * described by hyphens ("-") and all characters are lower-case.
 *
 * @private
 * @category Utils
 * @param str - String to be converted.
 * @returns String in "CSS case".
 */

function cssCase(str) {
  return str.replace(/[A-Z]/g, '-$&').toLowerCase();
}

utils.cssCase = cssCase;
/**
 * Iterate over each DOM element without creating intermediary Cheerio instances.
 *
 * This is indented for use internally to avoid otherwise unnecessary memory
 * pressure introduced by _make.
 *
 * @category Utils
 * @param array - Array to iterate over.
 * @param fn - Function to call.
 * @returns The original instance.
 */

function domEach(array, fn) {
  var len = array.length;

  for (var i = 0; i < len; i++) {
    fn(array[i], i);
  }

  return array;
}

utils.domEach = domEach;
/**
 * Create a deep copy of the given DOM structure. Sets the parents of the copies
 * of the passed nodes to `null`.
 *
 * @private
 * @category Utils
 * @param dom - The htmlparser2-compliant DOM structure.
 * @returns - The cloned DOM.
 */

function cloneDom(dom) {
  var clone = 'length' in dom ? Array.prototype.map.call(dom, function (el) {
    return domhandler_1$2.cloneNode(el, true);
  }) : [domhandler_1$2.cloneNode(dom, true)]; // Add a root node around the cloned nodes

  var root = new domhandler_1$2.Document(clone);
  clone.forEach(function (node) {
    node.parent = root;
  });
  return clone;
}

utils.cloneDom = cloneDom;
/**
 * A simple way to check for HTML strings. Tests for a `<` within a string,
 * immediate followed by a letter and eventually followed by a `>`.
 *
 * @private
 */

var quickExpr = /<[a-zA-Z][^]*>/;
/**
 * Check if string is HTML.
 *
 * @private
 * @category Utils
 * @param str - String to check.
 * @returns Indicates if `str` is HTML.
 */

function isHtml(str) {
  // Run the regex
  return quickExpr.test(str);
}

utils.isHtml = isHtml;

var attributes = {};

/**
 * Methods for getting and modifying attributes.
 *
 * @module cheerio/attributes
 */


Object.defineProperty(attributes, "__esModule", {
  value: true
});
attributes.toggleClass = attributes.removeClass = attributes.addClass = attributes.hasClass = attributes.removeAttr = attributes.val = attributes.data = attributes.prop = attributes.attr = void 0;
var static_1$2 = _static;
var utils_1$5 = utils;
var hasOwn = Object.prototype.hasOwnProperty;
var rspace = /\s+/;
var dataAttrPrefix = 'data-';
/*
 * Lookup table for coercing string data-* attributes to their corresponding
 * JavaScript primitives
 */

var primitives = {
  "null": null,
  "true": true,
  "false": false
}; // Attributes that are booleans

var rboolean = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i; // Matches strings that look like JSON objects or arrays

var rbrace = /^{[^]*}$|^\[[^]*]$/;

function getAttr(elem, name, xmlMode) {
  var _a;

  if (!elem || !utils_1$5.isTag(elem)) return undefined;
  (_a = elem.attribs) !== null && _a !== void 0 ? _a : elem.attribs = {}; // Return the entire attribs object if no attribute specified

  if (!name) {
    return elem.attribs;
  }

  if (hasOwn.call(elem.attribs, name)) {
    // Get the (decoded) attribute
    return !xmlMode && rboolean.test(name) ? name : elem.attribs[name];
  } // Mimic the DOM and return text content as value for `option's`


  if (elem.name === 'option' && name === 'value') {
    return static_1$2.text(elem.children);
  } // Mimic DOM with default value for radios/checkboxes


  if (elem.name === 'input' && (elem.attribs.type === 'radio' || elem.attribs.type === 'checkbox') && name === 'value') {
    return 'on';
  }

  return undefined;
}
/**
 * Sets the value of an attribute. The attribute will be deleted if the value is `null`.
 *
 * @private
 * @param el - The element to set the attribute on.
 * @param name - The attribute's name.
 * @param value - The attribute's value.
 */


function setAttr(el, name, value) {
  if (value === null) {
    removeAttribute(el, name);
  } else {
    el.attribs[name] = "" + value;
  }
}

function attr(name, value) {
  // Set the value (with attr map support)
  if (_typeof(name) === 'object' || value !== undefined) {
    if (typeof value === 'function') {
      if (typeof name !== 'string') {
        {
          throw new Error('Bad combination of arguments.');
        }
      }

      return utils_1$5.domEach(this, function (el, i) {
        if (utils_1$5.isTag(el)) setAttr(el, name, value.call(el, i, el.attribs[name]));
      });
    }

    return utils_1$5.domEach(this, function (el) {
      if (!utils_1$5.isTag(el)) return;

      if (_typeof(name) === 'object') {
        Object.keys(name).forEach(function (objName) {
          var objValue = name[objName];
          setAttr(el, objName, objValue);
        });
      } else {
        setAttr(el, name, value);
      }
    });
  }

  return arguments.length > 1 ? this : getAttr(this[0], name, this.options.xmlMode);
}

attributes.attr = attr;
/**
 * Gets a node's prop.
 *
 * @private
 * @category Attributes
 * @param el - Elenent to get the prop of.
 * @param name - Name of the prop.
 * @returns The prop's value.
 */

function getProp(el, name, xmlMode) {
  if (!el || !utils_1$5.isTag(el)) return;
  return name in el ? // @ts-expect-error TS doesn't like us accessing the value directly here.
  el[name] : !xmlMode && rboolean.test(name) ? getAttr(el, name, false) !== undefined : getAttr(el, name, xmlMode);
}
/**
 * Sets the value of a prop.
 *
 * @private
 * @param el - The element to set the prop on.
 * @param name - The prop's name.
 * @param value - The prop's value.
 */


function setProp(el, name, value, xmlMode) {
  if (name in el) {
    // @ts-expect-error Overriding value
    el[name] = value;
  } else {
    setAttr(el, name, !xmlMode && rboolean.test(name) ? value ? '' : null : "" + value);
  }
}

function prop(name, value) {
  var _this = this;

  if (typeof name === 'string' && value === undefined) {
    switch (name) {
      case 'style':
        {
          var property_1 = this.css();
          var keys = Object.keys(property_1);
          keys.forEach(function (p, i) {
            property_1[i] = p;
          });
          property_1.length = keys.length;
          return property_1;
        }

      case 'tagName':
      case 'nodeName':
        {
          var el = this[0];
          return utils_1$5.isTag(el) ? el.name.toUpperCase() : undefined;
        }

      case 'outerHTML':
        return this.clone().wrap('<container />').parent().html();

      case 'innerHTML':
        return this.html();

      default:
        return getProp(this[0], name, this.options.xmlMode);
    }
  }

  if (_typeof(name) === 'object' || value !== undefined) {
    if (typeof value === 'function') {
      if (_typeof(name) === 'object') {
        throw new Error('Bad combination of arguments.');
      }

      return utils_1$5.domEach(this, function (el, i) {
        if (utils_1$5.isTag(el)) setProp(el, name, value.call(el, i, getProp(el, name, _this.options.xmlMode)), _this.options.xmlMode);
      });
    }

    return utils_1$5.domEach(this, function (el) {
      if (!utils_1$5.isTag(el)) return;

      if (_typeof(name) === 'object') {
        Object.keys(name).forEach(function (key) {
          var val = name[key];
          setProp(el, key, val, _this.options.xmlMode);
        });
      } else {
        setProp(el, name, value, _this.options.xmlMode);
      }
    });
  }

  return undefined;
}

attributes.prop = prop;
/**
 * Sets the value of a data attribute.
 *
 * @private
 * @param el - The element to set the data attribute on.
 * @param name - The data attribute's name.
 * @param value - The data attribute's value.
 */

function setData(el, name, value) {
  var _a;

  var elem = el;
  (_a = elem.data) !== null && _a !== void 0 ? _a : elem.data = {};
  if (_typeof(name) === 'object') Object.assign(elem.data, name);else if (typeof name === 'string' && value !== undefined) {
    elem.data[name] = value;
  }
}
/**
 * Read the specified attribute from the equivalent HTML5 `data-*` attribute,
 * and (if present) cache the value in the node's internal data store. If no
 * attribute name is specified, read *all* HTML5 `data-*` attributes in this manner.
 *
 * @private
 * @category Attributes
 * @param el - Elenent to get the data attribute of.
 * @param name - Name of the data attribute.
 * @returns The data attribute's value, or a map with all of the data attribute.
 */


function readData(el, name) {
  var domNames;
  var jsNames;
  var value;

  if (name == null) {
    domNames = Object.keys(el.attribs).filter(function (attrName) {
      return attrName.startsWith(dataAttrPrefix);
    });
    jsNames = domNames.map(function (domName) {
      return utils_1$5.camelCase(domName.slice(dataAttrPrefix.length));
    });
  } else {
    domNames = [dataAttrPrefix + utils_1$5.cssCase(name)];
    jsNames = [name];
  }

  for (var idx = 0; idx < domNames.length; ++idx) {
    var domName = domNames[idx];
    var jsName = jsNames[idx];

    if (hasOwn.call(el.attribs, domName) && !hasOwn.call(el.data, jsName)) {
      value = el.attribs[domName];

      if (hasOwn.call(primitives, value)) {
        value = primitives[value];
      } else if (value === String(Number(value))) {
        value = Number(value);
      } else if (rbrace.test(value)) {
        try {
          value = JSON.parse(value);
        } catch (e) {
          /* Ignore */
        }
      }

      el.data[jsName] = value;
    }
  }

  return name == null ? el.data : value;
}

function data(name, value) {
  var _a;

  var elem = this[0];
  if (!elem || !utils_1$5.isTag(elem)) return;
  var dataEl = elem;
  (_a = dataEl.data) !== null && _a !== void 0 ? _a : dataEl.data = {}; // Return the entire data object if no data specified

  if (!name) {
    return readData(dataEl);
  } // Set the value (with attr map support)


  if (_typeof(name) === 'object' || value !== undefined) {
    utils_1$5.domEach(this, function (el) {
      if (utils_1$5.isTag(el)) if (_typeof(name) === 'object') setData(el, name);else setData(el, name, value);
    });
    return this;
  }

  if (hasOwn.call(dataEl.data, name)) {
    return dataEl.data[name];
  }

  return readData(dataEl, name);
}

attributes.data = data;

function val(value) {
  var querying = arguments.length === 0;
  var element = this[0];
  if (!element || !utils_1$5.isTag(element)) return querying ? undefined : this;

  switch (element.name) {
    case 'textarea':
      return this.text(value);

    case 'select':
      {
        var option = this.find('option:selected');

        if (!querying) {
          if (this.attr('multiple') == null && _typeof(value) === 'object') {
            return this;
          }

          this.find('option').removeAttr('selected');
          var values = _typeof(value) !== 'object' ? [value] : value;

          for (var i = 0; i < values.length; i++) {
            this.find("option[value=\"" + values[i] + "\"]").attr('selected', '');
          }

          return this;
        }

        return this.attr('multiple') ? option.toArray().map(function (el) {
          return static_1$2.text(el.children);
        }) : option.attr('value');
      }

    case 'input':
    case 'option':
      return querying ? this.attr('value') : this.attr('value', value);
  }

  return undefined;
}

attributes.val = val;
/**
 * Remove an attribute.
 *
 * @private
 * @param elem - Node to remove attribute from.
 * @param name - Name of the attribute to remove.
 */

function removeAttribute(elem, name) {
  if (!elem.attribs || !hasOwn.call(elem.attribs, name)) return;
  delete elem.attribs[name];
}
/**
 * Splits a space-separated list of names to individual names.
 *
 * @category Attributes
 * @param names - Names to split.
 * @returns - Split names.
 */


function splitNames(names) {
  return names ? names.trim().split(rspace) : [];
}
/**
 * Method for removing attributes by `name`.
 *
 * @category Attributes
 * @example
 *
 * ```js
 * $('.pear').removeAttr('class').html();
 * //=> <li>Pear</li>
 *
 * $('.apple').attr('id', 'favorite');
 * $('.apple').removeAttr('id class').html();
 * //=> <li>Apple</li>
 * ```
 *
 * @param name - Name of the attribute.
 * @returns The instance itself.
 * @see {@link https://api.jquery.com/removeAttr/}
 */


function removeAttr(name) {
  var attrNames = splitNames(name);

  var _loop_1 = function _loop_1(i) {
    utils_1$5.domEach(this_1, function (elem) {
      if (utils_1$5.isTag(elem)) removeAttribute(elem, attrNames[i]);
    });
  };

  var this_1 = this;

  for (var i = 0; i < attrNames.length; i++) {
    _loop_1(i);
  }

  return this;
}

attributes.removeAttr = removeAttr;
/**
 * Check to see if *any* of the matched elements have the given `className`.
 *
 * @category Attributes
 * @example
 *
 * ```js
 * $('.pear').hasClass('pear');
 * //=> true
 *
 * $('apple').hasClass('fruit');
 * //=> false
 *
 * $('li').hasClass('pear');
 * //=> true
 * ```
 *
 * @param className - Name of the class.
 * @returns Indicates if an element has the given `className`.
 * @see {@link https://api.jquery.com/hasClass/}
 */

function hasClass(className) {
  return this.toArray().some(function (elem) {
    var clazz = utils_1$5.isTag(elem) && elem.attribs["class"];
    var idx = -1;

    if (clazz && className.length) {
      while ((idx = clazz.indexOf(className, idx + 1)) > -1) {
        var end = idx + className.length;

        if ((idx === 0 || rspace.test(clazz[idx - 1])) && (end === clazz.length || rspace.test(clazz[end]))) {
          return true;
        }
      }
    }

    return false;
  });
}

attributes.hasClass = hasClass;
/**
 * Adds class(es) to all of the matched elements. Also accepts a `function`.
 *
 * @category Attributes
 * @example
 *
 * ```js
 * $('.pear').addClass('fruit').html();
 * //=> <li class="pear fruit">Pear</li>
 *
 * $('.apple').addClass('fruit red').html();
 * //=> <li class="apple fruit red">Apple</li>
 * ```
 *
 * @param value - Name of new class.
 * @returns The instance itself.
 * @see {@link https://api.jquery.com/addClass/}
 */

function addClass(value) {
  // Support functions
  if (typeof value === 'function') {
    return utils_1$5.domEach(this, function (el, i) {
      if (utils_1$5.isTag(el)) {
        var className = el.attribs["class"] || '';
        addClass.call([el], value.call(el, i, className));
      }
    });
  } // Return if no value or not a string or function


  if (!value || typeof value !== 'string') return this;
  var classNames = value.split(rspace);
  var numElements = this.length;

  for (var i = 0; i < numElements; i++) {
    var el = this[i]; // If selected element isn't a tag, move on

    if (!utils_1$5.isTag(el)) continue; // If we don't already have classes — always set xmlMode to false here, as it doesn't matter for classes

    var className = getAttr(el, 'class', false);

    if (!className) {
      setAttr(el, 'class', classNames.join(' ').trim());
    } else {
      var setClass = " " + className + " "; // Check if class already exists

      for (var j = 0; j < classNames.length; j++) {
        var appendClass = classNames[j] + " ";
        if (!setClass.includes(" " + appendClass)) setClass += appendClass;
      }

      setAttr(el, 'class', setClass.trim());
    }
  }

  return this;
}

attributes.addClass = addClass;
/**
 * Removes one or more space-separated classes from the selected elements. If no
 * `className` is defined, all classes will be removed. Also accepts a `function`.
 *
 * @category Attributes
 * @example
 *
 * ```js
 * $('.pear').removeClass('pear').html();
 * //=> <li class="">Pear</li>
 *
 * $('.apple').addClass('red').removeClass().html();
 * //=> <li class="">Apple</li>
 * ```
 *
 * @param name - Name of the class. If not specified, removes all elements.
 * @returns The instance itself.
 * @see {@link https://api.jquery.com/removeClass/}
 */

function removeClass(name) {
  // Handle if value is a function
  if (typeof name === 'function') {
    return utils_1$5.domEach(this, function (el, i) {
      if (utils_1$5.isTag(el)) removeClass.call([el], name.call(el, i, el.attribs["class"] || ''));
    });
  }

  var classes = splitNames(name);
  var numClasses = classes.length;
  var removeAll = arguments.length === 0;
  return utils_1$5.domEach(this, function (el) {
    if (!utils_1$5.isTag(el)) return;

    if (removeAll) {
      // Short circuit the remove all case as this is the nice one
      el.attribs["class"] = '';
    } else {
      var elClasses = splitNames(el.attribs["class"]);
      var changed = false;

      for (var j = 0; j < numClasses; j++) {
        var index = elClasses.indexOf(classes[j]);

        if (index >= 0) {
          elClasses.splice(index, 1);
          changed = true;
          /*
           * We have to do another pass to ensure that there are not duplicate
           * classes listed
           */

          j--;
        }
      }

      if (changed) {
        el.attribs["class"] = elClasses.join(' ');
      }
    }
  });
}

attributes.removeClass = removeClass;
/**
 * Add or remove class(es) from the matched elements, depending on either the
 * class's presence or the value of the switch argument. Also accepts a `function`.
 *
 * @category Attributes
 * @example
 *
 * ```js
 * $('.apple.green').toggleClass('fruit green red').html();
 * //=> <li class="apple fruit red">Apple</li>
 *
 * $('.apple.green').toggleClass('fruit green red', true).html();
 * //=> <li class="apple green fruit red">Apple</li>
 * ```
 *
 * @param value - Name of the class. Can also be a function.
 * @param stateVal - If specified the state of the class.
 * @returns The instance itself.
 * @see {@link https://api.jquery.com/toggleClass/}
 */

function toggleClass(value, stateVal) {
  // Support functions
  if (typeof value === 'function') {
    return utils_1$5.domEach(this, function (el, i) {
      if (utils_1$5.isTag(el)) {
        toggleClass.call([el], value.call(el, i, el.attribs["class"] || '', stateVal), stateVal);
      }
    });
  } // Return if no value or not a string or function


  if (!value || typeof value !== 'string') return this;
  var classNames = value.split(rspace);
  var numClasses = classNames.length;
  var state = typeof stateVal === 'boolean' ? stateVal ? 1 : -1 : 0;
  var numElements = this.length;

  for (var i = 0; i < numElements; i++) {
    var el = this[i]; // If selected element isn't a tag, move on

    if (!utils_1$5.isTag(el)) continue;
    var elementClasses = splitNames(el.attribs["class"]); // Check if class already exists

    for (var j = 0; j < numClasses; j++) {
      // Check if the class name is currently defined
      var index = elementClasses.indexOf(classNames[j]); // Add if stateValue === true or we are toggling and there is no value

      if (state >= 0 && index < 0) {
        elementClasses.push(classNames[j]);
      } else if (state <= 0 && index >= 0) {
        // Otherwise remove but only if the item exists
        elementClasses.splice(index, 1);
      }
    }

    el.attribs["class"] = elementClasses.join(' ');
  }

  return this;
}

attributes.toggleClass = toggleClass;

var traversing = {};

/**
 * Methods for traversing the DOM structure.
 *
 * @module cheerio/traversing
 */


Object.defineProperty(traversing, "__esModule", {
  value: true
});
traversing.addBack = traversing.add = traversing.end = traversing.slice = traversing.index = traversing.toArray = traversing.get = traversing.eq = traversing.last = traversing.first = traversing.has = traversing.not = traversing.is = traversing.filterArray = traversing.filter = traversing.map = traversing.each = traversing.contents = traversing.children = traversing.siblings = traversing.prevUntil = traversing.prevAll = traversing.prev = traversing.nextUntil = traversing.nextAll = traversing.next = traversing.closest = traversing.parentsUntil = traversing.parents = traversing.parent = traversing.find = void 0;
var tslib_1$3 = require$$0$1;
var domhandler_1$1 = lib$7;

var select = tslib_1$3.__importStar(lib$b);

var utils_1$4 = utils;
var static_1$1 = _static;
var htmlparser2_1$1 = lib$2;
var uniqueSort = htmlparser2_1$1.DomUtils.uniqueSort;
var reSiblingSelector = /^\s*[~+]/;
/**
 * Get the descendants of each element in the current set of matched elements,
 * filtered by a selector, jQuery object, or element.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('#fruits').find('li').length;
 * //=> 3
 * $('#fruits').find($('.apple')).length;
 * //=> 1
 * ```
 *
 * @param selectorOrHaystack - Element to look for.
 * @returns The found elements.
 * @see {@link https://api.jquery.com/find/}
 */

function find(selectorOrHaystack) {
  var _a;

  if (!selectorOrHaystack) {
    return this._make([]);
  }

  var context = this.toArray();

  if (typeof selectorOrHaystack !== 'string') {
    var haystack = utils_1$4.isCheerio(selectorOrHaystack) ? selectorOrHaystack.toArray() : [selectorOrHaystack];
    return this._make(haystack.filter(function (elem) {
      return context.some(function (node) {
        return static_1$1.contains(node, elem);
      });
    }));
  }

  var elems = reSiblingSelector.test(selectorOrHaystack) ? context : this.children().toArray();
  var options = {
    context: context,
    root: (_a = this._root) === null || _a === void 0 ? void 0 : _a[0],
    xmlMode: this.options.xmlMode
  };
  return this._make(select.select(selectorOrHaystack, elems, options));
}

traversing.find = find;
/**
 * Creates a matcher, using a particular mapping function. Matchers provide a
 * function that finds elements using a generating function, supporting filtering.
 *
 * @private
 * @param matchMap - Mapping function.
 * @returns - Function for wrapping generating functions.
 */

function _getMatcher(matchMap) {
  return function (fn) {
    var postFns = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      postFns[_i - 1] = arguments[_i];
    }

    return function (selector) {
      var _a;

      var matched = matchMap(fn, this);

      if (selector) {
        matched = filterArray(matched, selector, this.options.xmlMode, (_a = this._root) === null || _a === void 0 ? void 0 : _a[0]);
      }

      return this._make( // Post processing is only necessary if there is more than one element.
      this.length > 1 && matched.length > 1 ? postFns.reduce(function (elems, fn) {
        return fn(elems);
      }, matched) : matched);
    };
  };
}
/** Matcher that adds multiple elements for each entry in the input. */


var _matcher = _getMatcher(function (fn, elems) {
  var _a;

  var ret = [];

  for (var i = 0; i < elems.length; i++) {
    var value = fn(elems[i]);
    ret.push(value);
  }

  return (_a = new Array()).concat.apply(_a, ret);
});
/** Matcher that adds at most one element for each entry in the input. */


var _singleMatcher = _getMatcher(function (fn, elems) {
  var ret = [];

  for (var i = 0; i < elems.length; i++) {
    var value = fn(elems[i]);

    if (value !== null) {
      ret.push(value);
    }
  }

  return ret;
});
/**
 * Matcher that supports traversing until a condition is met.
 *
 * @returns A function usable for `*Until` methods.
 */


function _matchUntil(nextElem) {
  var postFns = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    postFns[_i - 1] = arguments[_i];
  } // We use a variable here that is used from within the matcher.


  var matches = null;

  var innerMatcher = _getMatcher(function (nextElem, elems) {
    var matched = [];
    utils_1$4.domEach(elems, function (elem) {
      for (var next_1; next_1 = nextElem(elem); elem = next_1) {
        // FIXME: `matched` might contain duplicates here and the index is too large.
        if (matches === null || matches === void 0 ? void 0 : matches(next_1, matched.length)) break;
        matched.push(next_1);
      }
    });
    return matched;
  }).apply(void 0, tslib_1$3.__spreadArray([nextElem], postFns));

  return function (selector, filterSelector) {
    var _this = this; // Override `matches` variable with the new target.


    matches = typeof selector === 'string' ? function (elem) {
      return select.is(elem, selector, _this.options);
    } : selector ? getFilterFn(selector) : null;
    var ret = innerMatcher.call(this, filterSelector); // Set `matches` to `null`, so we don't waste memory.

    matches = null;
    return ret;
  };
}

function _removeDuplicates(elems) {
  return Array.from(new Set(elems));
}
/**
 * Get the parent of each element in the current set of matched elements,
 * optionally filtered by a selector.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('.pear').parent().attr('id');
 * //=> fruits
 * ```
 *
 * @param selector - If specified filter for parent.
 * @returns The parents.
 * @see {@link https://api.jquery.com/parent/}
 */


traversing.parent = _singleMatcher(function (_a) {
  var parent = _a.parent;
  return parent && !domhandler_1$1.isDocument(parent) ? parent : null;
}, _removeDuplicates);
/**
 * Get a set of parents filtered by `selector` of each element in the current
 * set of match elements.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('.orange').parents().length;
 * //=> 2
 * $('.orange').parents('#fruits').length;
 * //=> 1
 * ```
 *
 * @param selector - If specified filter for parents.
 * @returns The parents.
 * @see {@link https://api.jquery.com/parents/}
 */


traversing.parents = _matcher(function (elem) {
  var matched = [];

  while (elem.parent && !domhandler_1$1.isDocument(elem.parent)) {
    matched.push(elem.parent);
    elem = elem.parent;
  }

  return matched;
}, uniqueSort, function (elems) {
  return elems.reverse();
});
/**
 * Get the ancestors of each element in the current set of matched elements, up
 * to but not including the element matched by the selector, DOM node, or cheerio object.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('.orange').parentsUntil('#food').length;
 * //=> 1
 * ```
 *
 * @param selector - Selector for element to stop at.
 * @param filterSelector - Optional filter for parents.
 * @returns The parents.
 * @see {@link https://api.jquery.com/parentsUntil/}
 */


traversing.parentsUntil = _matchUntil(function (_a) {
  var parent = _a.parent;
  return parent && !domhandler_1$1.isDocument(parent) ? parent : null;
}, uniqueSort, function (elems) {
  return elems.reverse();
});
/**
 * For each element in the set, get the first element that matches the selector
 * by testing the element itself and traversing up through its ancestors in the DOM tree.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('.orange').closest();
 * //=> []
 *
 * $('.orange').closest('.apple');
 * // => []
 *
 * $('.orange').closest('li');
 * //=> [<li class="orange">Orange</li>]
 *
 * $('.orange').closest('#fruits');
 * //=> [<ul id="fruits"> ... </ul>]
 * ```
 *
 * @param selector - Selector for the element to find.
 * @returns The closest nodes.
 * @see {@link https://api.jquery.com/closest/}
 */


function closest(selector) {
  var _this = this;

  var set = [];

  if (!selector) {
    return this._make(set);
  }

  utils_1$4.domEach(this, function (elem) {
    var _a;

    while (elem && elem.type !== 'root') {
      if (!selector || filterArray([elem], selector, _this.options.xmlMode, (_a = _this._root) === null || _a === void 0 ? void 0 : _a[0]).length) {
        // Do not add duplicate elements to the set
        if (elem && !set.includes(elem)) {
          set.push(elem);
        }

        break;
      }

      elem = elem.parent;
    }
  });
  return this._make(set);
}

traversing.closest = closest;
/**
 * Gets the next sibling of the first selected element, optionally filtered by a selector.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('.apple').next().hasClass('orange');
 * //=> true
 * ```
 *
 * @param selector - If specified filter for sibling.
 * @returns The next nodes.
 * @see {@link https://api.jquery.com/next/}
 */

traversing.next = _singleMatcher(function (elem) {
  return htmlparser2_1$1.DomUtils.nextElementSibling(elem);
});
/**
 * Gets all the following siblings of the first selected element, optionally
 * filtered by a selector.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('.apple').nextAll();
 * //=> [<li class="orange">Orange</li>, <li class="pear">Pear</li>]
 * $('.apple').nextAll('.orange');
 * //=> [<li class="orange">Orange</li>]
 * ```
 *
 * @param selector - If specified filter for siblings.
 * @returns The next nodes.
 * @see {@link https://api.jquery.com/nextAll/}
 */


traversing.nextAll = _matcher(function (elem) {
  var matched = [];

  while (elem.next) {
    elem = elem.next;
    if (utils_1$4.isTag(elem)) matched.push(elem);
  }

  return matched;
}, _removeDuplicates);
/**
 * Gets all the following siblings up to but not including the element matched
 * by the selector, optionally filtered by another selector.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('.apple').nextUntil('.pear');
 * //=> [<li class="orange">Orange</li>]
 * ```
 *
 * @param selector - Selector for element to stop at.
 * @param filterSelector - If specified filter for siblings.
 * @returns The next nodes.
 * @see {@link https://api.jquery.com/nextUntil/}
 */


traversing.nextUntil = _matchUntil(function (el) {
  return htmlparser2_1$1.DomUtils.nextElementSibling(el);
}, _removeDuplicates);
/**
 * Gets the previous sibling of the first selected element optionally filtered
 * by a selector.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('.orange').prev().hasClass('apple');
 * //=> true
 * ```
 *
 * @param selector - If specified filter for siblings.
 * @returns The previous nodes.
 * @see {@link https://api.jquery.com/prev/}
 */


traversing.prev = _singleMatcher(function (elem) {
  return htmlparser2_1$1.DomUtils.prevElementSibling(elem);
});
/**
 * Gets all the preceding siblings of the first selected element, optionally
 * filtered by a selector.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('.pear').prevAll();
 * //=> [<li class="orange">Orange</li>, <li class="apple">Apple</li>]
 *
 * $('.pear').prevAll('.orange');
 * //=> [<li class="orange">Orange</li>]
 * ```
 *
 * @param selector - If specified filter for siblings.
 * @returns The previous nodes.
 * @see {@link https://api.jquery.com/prevAll/}
 */


traversing.prevAll = _matcher(function (elem) {
  var matched = [];

  while (elem.prev) {
    elem = elem.prev;
    if (utils_1$4.isTag(elem)) matched.push(elem);
  }

  return matched;
}, _removeDuplicates);
/**
 * Gets all the preceding siblings up to but not including the element matched
 * by the selector, optionally filtered by another selector.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('.pear').prevUntil('.apple');
 * //=> [<li class="orange">Orange</li>]
 * ```
 *
 * @param selector - Selector for element to stop at.
 * @param filterSelector - If specified filter for siblings.
 * @returns The previous nodes.
 * @see {@link https://api.jquery.com/prevUntil/}
 */


traversing.prevUntil = _matchUntil(function (el) {
  return htmlparser2_1$1.DomUtils.prevElementSibling(el);
}, _removeDuplicates);
/**
 * Get the siblings of each element (excluding the element) in the set of
 * matched elements, optionally filtered by a selector.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('.pear').siblings().length;
 * //=> 2
 *
 * $('.pear').siblings('.orange').length;
 * //=> 1
 * ```
 *
 * @param selector - If specified filter for siblings.
 * @returns The siblings.
 * @see {@link https://api.jquery.com/siblings/}
 */


traversing.siblings = _matcher(function (elem) {
  return htmlparser2_1$1.DomUtils.getSiblings(elem).filter(function (el) {
    return utils_1$4.isTag(el) && el !== elem;
  });
}, uniqueSort);
/**
 * Gets the children of the first selected element.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('#fruits').children().length;
 * //=> 3
 *
 * $('#fruits').children('.pear').text();
 * //=> Pear
 * ```
 *
 * @param selector - If specified filter for children.
 * @returns The children.
 * @see {@link https://api.jquery.com/children/}
 */


traversing.children = _matcher(function (elem) {
  return htmlparser2_1$1.DomUtils.getChildren(elem).filter(utils_1$4.isTag);
}, _removeDuplicates);
/**
 * Gets the children of each element in the set of matched elements, including
 * text and comment nodes.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('#fruits').contents().length;
 * //=> 3
 * ```
 *
 * @returns The children.
 * @see {@link https://api.jquery.com/contents/}
 */


function contents() {
  var elems = this.toArray().reduce(function (newElems, elem) {
    return domhandler_1$1.hasChildren(elem) ? newElems.concat(elem.children) : newElems;
  }, []);
  return this._make(elems);
}

traversing.contents = contents;
/**
 * Iterates over a cheerio object, executing a function for each matched
 * element. When the callback is fired, the function is fired in the context of
 * the DOM element, so `this` refers to the current element, which is equivalent
 * to the function parameter `element`. To break out of the `each` loop early,
 * return with `false`.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * const fruits = [];
 *
 * $('li').each(function (i, elem) {
 *   fruits[i] = $(this).text();
 * });
 *
 * fruits.join(', ');
 * //=> Apple, Orange, Pear
 * ```
 *
 * @param fn - Function to execute.
 * @returns The instance itself, useful for chaining.
 * @see {@link https://api.jquery.com/each/}
 */

function each(fn) {
  var i = 0;
  var len = this.length;

  while (i < len && fn.call(this[i], i, this[i]) !== false) {
    ++i;
  }

  return this;
}

traversing.each = each;
/**
 * Pass each element in the current matched set through a function, producing a
 * new Cheerio object containing the return values. The function can return an
 * individual data item or an array of data items to be inserted into the
 * resulting set. If an array is returned, the elements inside the array are
 * inserted into the set. If the function returns null or undefined, no element
 * will be inserted.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('li')
 *   .map(function (i, el) {
 *     // this === el
 *     return $(this).text();
 *   })
 *   .toArray()
 *   .join(' ');
 * //=> "apple orange pear"
 * ```
 *
 * @param fn - Function to execute.
 * @returns The mapped elements, wrapped in a Cheerio collection.
 * @see {@link https://api.jquery.com/map/}
 */

function map(fn) {
  var elems = [];

  for (var i = 0; i < this.length; i++) {
    var el = this[i];
    var val = fn.call(el, i, el);

    if (val != null) {
      elems = elems.concat(val);
    }
  }

  return this._make(elems);
}

traversing.map = map;
/**
 * Creates a function to test if a filter is matched.
 *
 * @param match - A filter.
 * @returns A function that determines if a filter has been matched.
 */

function getFilterFn(match) {
  if (typeof match === 'function') {
    return function (el, i) {
      return match.call(el, i, el);
    };
  }

  if (utils_1$4.isCheerio(match)) {
    return function (el) {
      return Array.prototype.includes.call(match, el);
    };
  }

  return function (el) {
    return match === el;
  };
}

function filter(match) {
  var _a;

  return this._make(filterArray(this.toArray(), match, this.options.xmlMode, (_a = this._root) === null || _a === void 0 ? void 0 : _a[0]));
}

traversing.filter = filter;

function filterArray(nodes, match, xmlMode, root) {
  return typeof match === 'string' ? select.filter(match, nodes, {
    xmlMode: xmlMode,
    root: root
  }) : nodes.filter(getFilterFn(match));
}

traversing.filterArray = filterArray;
/**
 * Checks the current list of elements and returns `true` if *any* of the
 * elements match the selector. If using an element or Cheerio selection,
 * returns `true` if *any* of the elements match. If using a predicate function,
 * the function is executed in the context of the selected element, so `this`
 * refers to the current element.
 *
 * @category Attributes
 * @param selector - Selector for the selection.
 * @returns Whether or not the selector matches an element of the instance.
 * @see {@link https://api.jquery.com/is/}
 */

function is(selector) {
  var nodes = this.toArray();
  return typeof selector === 'string' ? select.some(nodes.filter(utils_1$4.isTag), selector, this.options) : selector ? nodes.some(getFilterFn(selector)) : false;
}

traversing.is = is;
/**
 * Remove elements from the set of matched elements. Given a Cheerio object that
 * represents a set of DOM elements, the `.not()` method constructs a new
 * Cheerio object from a subset of the matching elements. The supplied selector
 * is tested against each element; the elements that don't match the selector
 * will be included in the result.
 *
 * The `.not()` method can take a function as its argument in the same way that
 * `.filter()` does. Elements for which the function returns `true` are excluded
 * from the filtered set; all other elements are included.
 *
 * @category Traversing
 * @example <caption>Selector</caption>
 *
 * ```js
 * $('li').not('.apple').length;
 * //=> 2
 * ```
 *
 * @example <caption>Function</caption>
 *
 * ```js
 * $('li').not(function (i, el) {
 *   // this === el
 *   return $(this).attr('class') === 'orange';
 * }).length; //=> 2
 * ```
 *
 * @param match - Value to look for, following the rules above.
 * @param container - Optional node to filter instead.
 * @returns The filtered collection.
 * @see {@link https://api.jquery.com/not/}
 */

function not(match) {
  var nodes = this.toArray();

  if (typeof match === 'string') {
    var matches_1 = new Set(select.filter(match, nodes, this.options));
    nodes = nodes.filter(function (el) {
      return !matches_1.has(el);
    });
  } else {
    var filterFn_1 = getFilterFn(match);
    nodes = nodes.filter(function (el, i) {
      return !filterFn_1(el, i);
    });
  }

  return this._make(nodes);
}

traversing.not = not;
/**
 * Filters the set of matched elements to only those which have the given DOM
 * element as a descendant or which have a descendant that matches the given
 * selector. Equivalent to `.filter(':has(selector)')`.
 *
 * @category Traversing
 * @example <caption>Selector</caption>
 *
 * ```js
 * $('ul').has('.pear').attr('id');
 * //=> fruits
 * ```
 *
 * @example <caption>Element</caption>
 *
 * ```js
 * $('ul').has($('.pear')[0]).attr('id');
 * //=> fruits
 * ```
 *
 * @param selectorOrHaystack - Element to look for.
 * @returns The filtered collection.
 * @see {@link https://api.jquery.com/has/}
 */

function has(selectorOrHaystack) {
  var _this = this;

  return this.filter(typeof selectorOrHaystack === 'string' ? // Using the `:has` selector here short-circuits searches.
  ":has(" + selectorOrHaystack + ")" : function (_, el) {
    return _this._make(el).find(selectorOrHaystack).length > 0;
  });
}

traversing.has = has;
/**
 * Will select the first element of a cheerio object.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('#fruits').children().first().text();
 * //=> Apple
 * ```
 *
 * @returns The first element.
 * @see {@link https://api.jquery.com/first/}
 */

function first() {
  return this.length > 1 ? this._make(this[0]) : this;
}

traversing.first = first;
/**
 * Will select the last element of a cheerio object.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('#fruits').children().last().text();
 * //=> Pear
 * ```
 *
 * @returns The last element.
 * @see {@link https://api.jquery.com/last/}
 */

function last() {
  return this.length > 0 ? this._make(this[this.length - 1]) : this;
}

traversing.last = last;
/**
 * Reduce the set of matched elements to the one at the specified index. Use
 * `.eq(-i)` to count backwards from the last selected element.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('li').eq(0).text();
 * //=> Apple
 *
 * $('li').eq(-1).text();
 * //=> Pear
 * ```
 *
 * @param i - Index of the element to select.
 * @returns The element at the `i`th position.
 * @see {@link https://api.jquery.com/eq/}
 */

function eq(i) {
  var _a;

  i = +i; // Use the first identity optimization if possible

  if (i === 0 && this.length <= 1) return this;
  if (i < 0) i = this.length + i;
  return this._make((_a = this[i]) !== null && _a !== void 0 ? _a : []);
}

traversing.eq = eq;

function get(i) {
  if (i == null) {
    return this.toArray();
  }

  return this[i < 0 ? this.length + i : i];
}

traversing.get = get;
/**
 * Retrieve all the DOM elements contained in the jQuery set as an array.
 *
 * @example
 *
 * ```js
 * $('li').toArray();
 * //=> [ {...}, {...}, {...} ]
 * ```
 *
 * @returns The contained items.
 */

function toArray() {
  return Array.prototype.slice.call(this);
}

traversing.toArray = toArray;
/**
 * Search for a given element from among the matched elements.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('.pear').index();
 * //=> 2 $('.orange').index('li');
 * //=> 1
 * $('.apple').index($('#fruit, li'));
 * //=> 1
 * ```
 *
 * @param selectorOrNeedle - Element to look for.
 * @returns The index of the element.
 * @see {@link https://api.jquery.com/index/}
 */

function index(selectorOrNeedle) {
  var $haystack;
  var needle;

  if (selectorOrNeedle == null) {
    $haystack = this.parent().children();
    needle = this[0];
  } else if (typeof selectorOrNeedle === 'string') {
    $haystack = this._make(selectorOrNeedle);
    needle = this[0];
  } else {
    $haystack = this;
    needle = utils_1$4.isCheerio(selectorOrNeedle) ? selectorOrNeedle[0] : selectorOrNeedle;
  }

  return Array.prototype.indexOf.call($haystack, needle);
}

traversing.index = index;
/**
 * Gets the elements matching the specified range (0-based position).
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('li').slice(1).eq(0).text();
 * //=> 'Orange'
 *
 * $('li').slice(1, 2).length;
 * //=> 1
 * ```
 *
 * @param start - An position at which the elements begin to be selected. If
 *   negative, it indicates an offset from the end of the set.
 * @param end - An position at which the elements stop being selected. If
 *   negative, it indicates an offset from the end of the set. If omitted, the
 *   range continues until the end of the set.
 * @returns The elements matching the specified range.
 * @see {@link https://api.jquery.com/slice/}
 */

function slice(start, end) {
  return this._make(Array.prototype.slice.call(this, start, end));
}

traversing.slice = slice;
/**
 * End the most recent filtering operation in the current chain and return the
 * set of matched elements to its previous state.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('li').eq(0).end().length;
 * //=> 3
 * ```
 *
 * @returns The previous state of the set of matched elements.
 * @see {@link https://api.jquery.com/end/}
 */

function end() {
  var _a;

  return (_a = this.prevObject) !== null && _a !== void 0 ? _a : this._make([]);
}

traversing.end = end;
/**
 * Add elements to the set of matched elements.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('.apple').add('.orange').length;
 * //=> 2
 * ```
 *
 * @param other - Elements to add.
 * @param context - Optionally the context of the new selection.
 * @returns The combined set.
 * @see {@link https://api.jquery.com/add/}
 */

function add(other, context) {
  var selection = this._make(other, context);

  var contents = uniqueSort(tslib_1$3.__spreadArray(tslib_1$3.__spreadArray([], this.get()), selection.get()));
  return this._make(contents);
}

traversing.add = add;
/**
 * Add the previous set of elements on the stack to the current set, optionally
 * filtered by a selector.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('li').eq(0).addBack('.orange').length;
 * //=> 2
 * ```
 *
 * @param selector - Selector for the elements to add.
 * @returns The combined set.
 * @see {@link https://api.jquery.com/addBack/}
 */

function addBack(selector) {
  return this.prevObject ? this.add(selector ? this.prevObject.filter(selector) : this.prevObject) : this;
}

traversing.addBack = addBack;

var manipulation = {};

Object.defineProperty(manipulation, "__esModule", {
  value: true
});
manipulation.clone = manipulation.text = manipulation.toString = manipulation.html = manipulation.empty = manipulation.replaceWith = manipulation.remove = manipulation.insertBefore = manipulation.before = manipulation.insertAfter = manipulation.after = manipulation.wrapAll = manipulation.unwrap = manipulation.wrapInner = manipulation.wrap = manipulation.prepend = manipulation.append = manipulation.prependTo = manipulation.appendTo = manipulation._makeDomArray = void 0;
var tslib_1$2 = require$$0$1;
var domhandler_1 = lib$7;
/**
 * Methods for modifying the DOM structure.
 *
 * @module cheerio/manipulation
 */

var domhandler_2 = lib$7;

var parse_1$2 = tslib_1$2.__importStar(parse$2);

var static_1 = _static;
var utils_1$3 = utils;
var htmlparser2_1 = lib$2;
/**
 * Create an array of nodes, recursing into arrays and parsing strings if necessary.
 *
 * @private
 * @category Manipulation
 * @param elem - Elements to make an array of.
 * @param clone - Optionally clone nodes.
 * @returns The array of nodes.
 */

function _makeDomArray(elem, clone) {
  var _this = this;

  if (elem == null) {
    return [];
  }

  if (utils_1$3.isCheerio(elem)) {
    return clone ? utils_1$3.cloneDom(elem.get()) : elem.get();
  }

  if (Array.isArray(elem)) {
    return elem.reduce(function (newElems, el) {
      return newElems.concat(_this._makeDomArray(el, clone));
    }, []);
  }

  if (typeof elem === 'string') {
    return parse_1$2["default"](elem, this.options, false).children;
  }

  return clone ? utils_1$3.cloneDom([elem]) : [elem];
}

manipulation._makeDomArray = _makeDomArray;

function _insert(concatenator) {
  return function () {
    var _this = this;

    var elems = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      elems[_i] = arguments[_i];
    }

    var lastIdx = this.length - 1;
    return utils_1$3.domEach(this, function (el, i) {
      if (!domhandler_1.hasChildren(el)) return;
      var domSrc = typeof elems[0] === 'function' ? elems[0].call(el, i, static_1.html(el.children)) : elems;

      var dom = _this._makeDomArray(domSrc, i < lastIdx);

      concatenator(dom, el.children, el);
    });
  };
}
/**
 * Modify an array in-place, removing some number of elements and adding new
 * elements directly following them.
 *
 * @private
 * @category Manipulation
 * @param array - Target array to splice.
 * @param spliceIdx - Index at which to begin changing the array.
 * @param spliceCount - Number of elements to remove from the array.
 * @param newElems - Elements to insert into the array.
 * @param parent - The parent of the node.
 * @returns The spliced array.
 */


function uniqueSplice(array, spliceIdx, spliceCount, newElems, parent) {
  var _a, _b;

  var spliceArgs = tslib_1$2.__spreadArray([spliceIdx, spliceCount], newElems);

  var prev = array[spliceIdx - 1] || null;
  var next = array[spliceIdx + spliceCount] || null;
  /*
   * Before splicing in new elements, ensure they do not already appear in the
   * current array.
   */

  for (var idx = 0; idx < newElems.length; ++idx) {
    var node = newElems[idx];
    var oldParent = node.parent;

    if (oldParent) {
      var prevIdx = oldParent.children.indexOf(newElems[idx]);

      if (prevIdx > -1) {
        oldParent.children.splice(prevIdx, 1);

        if (parent === oldParent && spliceIdx > prevIdx) {
          spliceArgs[0]--;
        }
      }
    }

    node.parent = parent;

    if (node.prev) {
      node.prev.next = (_a = node.next) !== null && _a !== void 0 ? _a : null;
    }

    if (node.next) {
      node.next.prev = (_b = node.prev) !== null && _b !== void 0 ? _b : null;
    }

    node.prev = newElems[idx - 1] || prev;
    node.next = newElems[idx + 1] || next;
  }

  if (prev) {
    prev.next = newElems[0];
  }

  if (next) {
    next.prev = newElems[newElems.length - 1];
  }

  return array.splice.apply(array, spliceArgs);
}
/**
 * Insert every element in the set of matched elements to the end of the target.
 *
 * @category Manipulation
 * @example
 *
 * ```js
 * $('<li class="plum">Plum</li>').appendTo('#fruits');
 * $.html();
 * //=>  <ul id="fruits">
 * //      <li class="apple">Apple</li>
 * //      <li class="orange">Orange</li>
 * //      <li class="pear">Pear</li>
 * //      <li class="plum">Plum</li>
 * //    </ul>
 * ```
 *
 * @param target - Element to append elements to.
 * @returns The instance itself.
 * @see {@link https://api.jquery.com/appendTo/}
 */


function appendTo(target) {
  var appendTarget = utils_1$3.isCheerio(target) ? target : this._make(target);
  appendTarget.append(this);
  return this;
}

manipulation.appendTo = appendTo;
/**
 * Insert every element in the set of matched elements to the beginning of the target.
 *
 * @category Manipulation
 * @example
 *
 * ```js
 * $('<li class="plum">Plum</li>').prependTo('#fruits');
 * $.html();
 * //=>  <ul id="fruits">
 * //      <li class="plum">Plum</li>
 * //      <li class="apple">Apple</li>
 * //      <li class="orange">Orange</li>
 * //      <li class="pear">Pear</li>
 * //    </ul>
 * ```
 *
 * @param target - Element to prepend elements to.
 * @returns The instance itself.
 * @see {@link https://api.jquery.com/prependTo/}
 */

function prependTo(target) {
  var prependTarget = utils_1$3.isCheerio(target) ? target : this._make(target);
  prependTarget.prepend(this);
  return this;
}

manipulation.prependTo = prependTo;
/**
 * Inserts content as the *last* child of each of the selected elements.
 *
 * @category Manipulation
 * @example
 *
 * ```js
 * $('ul').append('<li class="plum">Plum</li>');
 * $.html();
 * //=>  <ul id="fruits">
 * //      <li class="apple">Apple</li>
 * //      <li class="orange">Orange</li>
 * //      <li class="pear">Pear</li>
 * //      <li class="plum">Plum</li>
 * //    </ul>
 * ```
 *
 * @see {@link https://api.jquery.com/append/}
 */

manipulation.append = _insert(function (dom, children, parent) {
  uniqueSplice(children, children.length, 0, dom, parent);
});
/**
 * Inserts content as the *first* child of each of the selected elements.
 *
 * @category Manipulation
 * @example
 *
 * ```js
 * $('ul').prepend('<li class="plum">Plum</li>');
 * $.html();
 * //=>  <ul id="fruits">
 * //      <li class="plum">Plum</li>
 * //      <li class="apple">Apple</li>
 * //      <li class="orange">Orange</li>
 * //      <li class="pear">Pear</li>
 * //    </ul>
 * ```
 *
 * @see {@link https://api.jquery.com/prepend/}
 */


manipulation.prepend = _insert(function (dom, children, parent) {
  uniqueSplice(children, 0, 0, dom, parent);
});

function _wrap(insert) {
  return function (wrapper) {
    var lastIdx = this.length - 1;
    var lastParent = this.parents().last();

    for (var i = 0; i < this.length; i++) {
      var el = this[i];
      var wrap_1 = typeof wrapper === 'function' ? wrapper.call(el, i, el) : typeof wrapper === 'string' && !utils_1$3.isHtml(wrapper) ? lastParent.find(wrapper).clone() : wrapper;

      var wrapperDom = this._makeDomArray(wrap_1, i < lastIdx)[0];

      if (!wrapperDom || !htmlparser2_1.DomUtils.hasChildren(wrapperDom)) continue;
      var elInsertLocation = wrapperDom;
      /*
       * Find the deepest child. Only consider the first tag child of each node
       * (ignore text); stop if no children are found.
       */

      var j = 0;

      while (j < elInsertLocation.children.length) {
        var child = elInsertLocation.children[j];

        if (utils_1$3.isTag(child)) {
          elInsertLocation = child;
          j = 0;
        } else {
          j++;
        }
      }

      insert(el, elInsertLocation, [wrapperDom]);
    }

    return this;
  };
}
/**
 * The .wrap() function can take any string or object that could be passed to
 * the $() factory function to specify a DOM structure. This structure may be
 * nested several levels deep, but should contain only one inmost element. A
 * copy of this structure will be wrapped around each of the elements in the set
 * of matched elements. This method returns the original set of elements for
 * chaining purposes.
 *
 * @category Manipulation
 * @example
 *
 * ```js
 * const redFruit = $('<div class="red-fruit"></div>');
 * $('.apple').wrap(redFruit);
 *
 * //=> <ul id="fruits">
 * //     <div class="red-fruit">
 * //      <li class="apple">Apple</li>
 * //     </div>
 * //     <li class="orange">Orange</li>
 * //     <li class="plum">Plum</li>
 * //   </ul>
 *
 * const healthy = $('<div class="healthy"></div>');
 * $('li').wrap(healthy);
 *
 * //=> <ul id="fruits">
 * //     <div class="healthy">
 * //       <li class="apple">Apple</li>
 * //     </div>
 * //     <div class="healthy">
 * //       <li class="orange">Orange</li>
 * //     </div>
 * //     <div class="healthy">
 * //        <li class="plum">Plum</li>
 * //     </div>
 * //   </ul>
 * ```
 *
 * @param wrapper - The DOM structure to wrap around each element in the selection.
 * @see {@link https://api.jquery.com/wrap/}
 */


manipulation.wrap = _wrap(function (el, elInsertLocation, wrapperDom) {
  var parent = el.parent;
  if (!parent) return;
  var siblings = parent.children;
  var index = siblings.indexOf(el);
  parse_1$2.update([el], elInsertLocation);
  /*
   * The previous operation removed the current element from the `siblings`
   * array, so the `dom` array can be inserted without removing any
   * additional elements.
   */

  uniqueSplice(siblings, index, 0, wrapperDom, parent);
});
/**
 * The .wrapInner() function can take any string or object that could be passed
 * to the $() factory function to specify a DOM structure. This structure may be
 * nested several levels deep, but should contain only one inmost element. The
 * structure will be wrapped around the content of each of the elements in the
 * set of matched elements.
 *
 * @category Manipulation
 * @example
 *
 * ```js
 * const redFruit = $('<div class="red-fruit"></div>');
 * $('.apple').wrapInner(redFruit);
 *
 * //=> <ul id="fruits">
 * //     <li class="apple">
 * //       <div class="red-fruit">Apple</div>
 * //     </li>
 * //     <li class="orange">Orange</li>
 * //     <li class="pear">Pear</li>
 * //   </ul>
 *
 * const healthy = $('<div class="healthy"></div>');
 * $('li').wrapInner(healthy);
 *
 * //=> <ul id="fruits">
 * //     <li class="apple">
 * //       <div class="healthy">Apple</div>
 * //     </li>
 * //     <li class="orange">
 * //       <div class="healthy">Orange</div>
 * //     </li>
 * //     <li class="pear">
 * //       <div class="healthy">Pear</div>
 * //     </li>
 * //   </ul>
 * ```
 *
 * @param wrapper - The DOM structure to wrap around the content of each element
 *   in the selection.
 * @returns The instance itself, for chaining.
 * @see {@link https://api.jquery.com/wrapInner/}
 */


manipulation.wrapInner = _wrap(function (el, elInsertLocation, wrapperDom) {
  if (!domhandler_1.hasChildren(el)) return;
  parse_1$2.update(el.children, elInsertLocation);
  parse_1$2.update(wrapperDom, el);
});
/**
 * The .unwrap() function, removes the parents of the set of matched elements
 * from the DOM, leaving the matched elements in their place.
 *
 * @category Manipulation
 * @example <caption>without selector</caption>
 *
 * ```js
 * const $ = cheerio.load(
 *   '<div id=test>\n  <div><p>Hello</p></div>\n  <div><p>World</p></div>\n</div>'
 * );
 * $('#test p').unwrap();
 *
 * //=> <div id=test>
 * //     <p>Hello</p>
 * //     <p>World</p>
 * //   </div>
 * ```
 *
 * @example <caption>with selector</caption>
 *
 * ```js
 * const $ = cheerio.load(
 *   '<div id=test>\n  <p>Hello</p>\n  <b><p>World</p></b>\n</div>'
 * );
 * $('#test p').unwrap('b');
 *
 * //=> <div id=test>
 * //     <p>Hello</p>
 * //     <p>World</p>
 * //   </div>
 * ```
 *
 * @param selector - A selector to check the parent element against. If an
 *   element's parent does not match the selector, the element won't be unwrapped.
 * @returns The instance itself, for chaining.
 * @see {@link https://api.jquery.com/unwrap/}
 */


function unwrap(selector) {
  var _this = this;

  this.parent(selector).not('body').each(function (_, el) {
    _this._make(el).replaceWith(el.children);
  });
  return this;
}

manipulation.unwrap = unwrap;
/**
 * The .wrapAll() function can take any string or object that could be passed to
 * the $() function to specify a DOM structure. This structure may be nested
 * several levels deep, but should contain only one inmost element. The
 * structure will be wrapped around all of the elements in the set of matched
 * elements, as a single group.
 *
 * @category Manipulation
 * @example <caption>With markup passed to `wrapAll`</caption>
 *
 * ```js
 * const $ = cheerio.load(
 *   '<div class="container"><div class="inner">First</div><div class="inner">Second</div></div>'
 * );
 * $('.inner').wrapAll("<div class='new'></div>");
 *
 * //=> <div class="container">
 * //     <div class='new'>
 * //       <div class="inner">First</div>
 * //       <div class="inner">Second</div>
 * //     </div>
 * //   </div>
 * ```
 *
 * @example <caption>With an existing cheerio instance</caption>
 *
 * ```js
 * const $ = cheerio.load(
 *   '<span>Span 1</span><strong>Strong</strong><span>Span 2</span>'
 * );
 * const wrap = $('<div><p><em><b></b></em></p></div>');
 * $('span').wrapAll(wrap);
 *
 * //=> <div>
 * //     <p>
 * //       <em>
 * //         <b>
 * //           <span>Span 1</span>
 * //           <span>Span 2</span>
 * //         </b>
 * //       </em>
 * //     </p>
 * //   </div>
 * //   <strong>Strong</strong>
 * ```
 *
 * @param wrapper - The DOM structure to wrap around all matched elements in the
 *   selection.
 * @returns The instance itself.
 * @see {@link https://api.jquery.com/wrapAll/}
 */

function wrapAll(wrapper) {
  var el = this[0];

  if (el) {
    var wrap_2 = this._make(typeof wrapper === 'function' ? wrapper.call(el, 0, el) : wrapper).insertBefore(el); // If html is given as wrapper, wrap may contain text elements


    var elInsertLocation = void 0;

    for (var i = 0; i < wrap_2.length; i++) {
      if (wrap_2[i].type === 'tag') elInsertLocation = wrap_2[i];
    }

    var j = 0;
    /*
     * Find the deepest child. Only consider the first tag child of each node
     * (ignore text); stop if no children are found.
     */

    while (elInsertLocation && j < elInsertLocation.children.length) {
      var child = elInsertLocation.children[j];

      if (child.type === 'tag') {
        elInsertLocation = child;
        j = 0;
      } else {
        j++;
      }
    }

    if (elInsertLocation) this._make(elInsertLocation).append(this);
  }

  return this;
}

manipulation.wrapAll = wrapAll;
/* eslint-disable jsdoc/check-param-names*/

/**
 * Insert content next to each element in the set of matched elements.
 *
 * @category Manipulation
 * @example
 *
 * ```js
 * $('.apple').after('<li class="plum">Plum</li>');
 * $.html();
 * //=>  <ul id="fruits">
 * //      <li class="apple">Apple</li>
 * //      <li class="plum">Plum</li>
 * //      <li class="orange">Orange</li>
 * //      <li class="pear">Pear</li>
 * //    </ul>
 * ```
 *
 * @param content - HTML string, DOM element, array of DOM elements or Cheerio
 *   to insert after each element in the set of matched elements.
 * @returns The instance itself.
 * @see {@link https://api.jquery.com/after/}
 */

function after() {
  var _this = this;

  var elems = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    elems[_i] = arguments[_i];
  }

  var lastIdx = this.length - 1;
  return utils_1$3.domEach(this, function (el, i) {
    var parent = el.parent;

    if (!htmlparser2_1.DomUtils.hasChildren(el) || !parent) {
      return;
    }

    var siblings = parent.children;
    var index = siblings.indexOf(el); // If not found, move on

    /* istanbul ignore next */

    if (index < 0) return;
    var domSrc = typeof elems[0] === 'function' ? elems[0].call(el, i, static_1.html(el.children)) : elems;

    var dom = _this._makeDomArray(domSrc, i < lastIdx); // Add element after `this` element


    uniqueSplice(siblings, index + 1, 0, dom, parent);
  });
}

manipulation.after = after;
/* eslint-enable jsdoc/check-param-names*/

/**
 * Insert every element in the set of matched elements after the target.
 *
 * @category Manipulation
 * @example
 *
 * ```js
 * $('<li class="plum">Plum</li>').insertAfter('.apple');
 * $.html();
 * //=>  <ul id="fruits">
 * //      <li class="apple">Apple</li>
 * //      <li class="plum">Plum</li>
 * //      <li class="orange">Orange</li>
 * //      <li class="pear">Pear</li>
 * //    </ul>
 * ```
 *
 * @param target - Element to insert elements after.
 * @returns The set of newly inserted elements.
 * @see {@link https://api.jquery.com/insertAfter/}
 */

function insertAfter(target) {
  var _this = this;

  if (typeof target === 'string') {
    target = this._make(target);
  }

  this.remove();
  var clones = [];

  this._makeDomArray(target).forEach(function (el) {
    var clonedSelf = _this.clone().toArray();

    var parent = el.parent;

    if (!parent) {
      return;
    }

    var siblings = parent.children;
    var index = siblings.indexOf(el); // If not found, move on

    /* istanbul ignore next */

    if (index < 0) return; // Add cloned `this` element(s) after target element

    uniqueSplice(siblings, index + 1, 0, clonedSelf, parent);
    clones.push.apply(clones, clonedSelf);
  });

  return this._make(clones);
}

manipulation.insertAfter = insertAfter;
/* eslint-disable jsdoc/check-param-names*/

/**
 * Insert content previous to each element in the set of matched elements.
 *
 * @category Manipulation
 * @example
 *
 * ```js
 * $('.apple').before('<li class="plum">Plum</li>');
 * $.html();
 * //=>  <ul id="fruits">
 * //      <li class="plum">Plum</li>
 * //      <li class="apple">Apple</li>
 * //      <li class="orange">Orange</li>
 * //      <li class="pear">Pear</li>
 * //    </ul>
 * ```
 *
 * @param content - HTML string, DOM element, array of DOM elements or Cheerio
 *   to insert before each element in the set of matched elements.
 * @returns The instance itself.
 * @see {@link https://api.jquery.com/before/}
 */

function before() {
  var _this = this;

  var elems = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    elems[_i] = arguments[_i];
  }

  var lastIdx = this.length - 1;
  return utils_1$3.domEach(this, function (el, i) {
    var parent = el.parent;

    if (!htmlparser2_1.DomUtils.hasChildren(el) || !parent) {
      return;
    }

    var siblings = parent.children;
    var index = siblings.indexOf(el); // If not found, move on

    /* istanbul ignore next */

    if (index < 0) return;
    var domSrc = typeof elems[0] === 'function' ? elems[0].call(el, i, static_1.html(el.children)) : elems;

    var dom = _this._makeDomArray(domSrc, i < lastIdx); // Add element before `el` element


    uniqueSplice(siblings, index, 0, dom, parent);
  });
}

manipulation.before = before;
/* eslint-enable jsdoc/check-param-names*/

/**
 * Insert every element in the set of matched elements before the target.
 *
 * @category Manipulation
 * @example
 *
 * ```js
 * $('<li class="plum">Plum</li>').insertBefore('.apple');
 * $.html();
 * //=>  <ul id="fruits">
 * //      <li class="plum">Plum</li>
 * //      <li class="apple">Apple</li>
 * //      <li class="orange">Orange</li>
 * //      <li class="pear">Pear</li>
 * //    </ul>
 * ```
 *
 * @param target - Element to insert elements before.
 * @returns The set of newly inserted elements.
 * @see {@link https://api.jquery.com/insertBefore/}
 */

function insertBefore(target) {
  var _this = this;

  var targetArr = this._make(target);

  this.remove();
  var clones = [];
  utils_1$3.domEach(targetArr, function (el) {
    var clonedSelf = _this.clone().toArray();

    var parent = el.parent;

    if (!parent) {
      return;
    }

    var siblings = parent.children;
    var index = siblings.indexOf(el); // If not found, move on

    /* istanbul ignore next */

    if (index < 0) return; // Add cloned `this` element(s) after target element

    uniqueSplice(siblings, index, 0, clonedSelf, parent);
    clones.push.apply(clones, clonedSelf);
  });
  return this._make(clones);
}

manipulation.insertBefore = insertBefore;
/**
 * Removes the set of matched elements from the DOM and all their children.
 * `selector` filters the set of matched elements to be removed.
 *
 * @category Manipulation
 * @example
 *
 * ```js
 * $('.pear').remove();
 * $.html();
 * //=>  <ul id="fruits">
 * //      <li class="apple">Apple</li>
 * //      <li class="orange">Orange</li>
 * //    </ul>
 * ```
 *
 * @param selector - Optional selector for elements to remove.
 * @returns The instance itself.
 * @see {@link https://api.jquery.com/remove/}
 */

function remove(selector) {
  // Filter if we have selector
  var elems = selector ? this.filter(selector) : this;
  utils_1$3.domEach(elems, function (el) {
    htmlparser2_1.DomUtils.removeElement(el);
    el.prev = el.next = el.parent = null;
  });
  return this;
}

manipulation.remove = remove;
/**
 * Replaces matched elements with `content`.
 *
 * @category Manipulation
 * @example
 *
 * ```js
 * const plum = $('<li class="plum">Plum</li>');
 * $('.pear').replaceWith(plum);
 * $.html();
 * //=> <ul id="fruits">
 * //     <li class="apple">Apple</li>
 * //     <li class="orange">Orange</li>
 * //     <li class="plum">Plum</li>
 * //   </ul>
 * ```
 *
 * @param content - Replacement for matched elements.
 * @returns The instance itself.
 * @see {@link https://api.jquery.com/replaceWith/}
 */

function replaceWith(content) {
  var _this = this;

  return utils_1$3.domEach(this, function (el, i) {
    var parent = el.parent;

    if (!parent) {
      return;
    }

    var siblings = parent.children;
    var cont = typeof content === 'function' ? content.call(el, i, el) : content;

    var dom = _this._makeDomArray(cont);
    /*
     * In the case that `dom` contains nodes that already exist in other
     * structures, ensure those nodes are properly removed.
     */


    parse_1$2.update(dom, null);
    var index = siblings.indexOf(el); // Completely remove old element

    uniqueSplice(siblings, index, 1, dom, parent);

    if (!dom.includes(el)) {
      el.parent = el.prev = el.next = null;
    }
  });
}

manipulation.replaceWith = replaceWith;
/**
 * Empties an element, removing all its children.
 *
 * @category Manipulation
 * @example
 *
 * ```js
 * $('ul').empty();
 * $.html();
 * //=>  <ul id="fruits"></ul>
 * ```
 *
 * @returns The instance itself.
 * @see {@link https://api.jquery.com/empty/}
 */

function empty() {
  return utils_1$3.domEach(this, function (el) {
    if (!htmlparser2_1.DomUtils.hasChildren(el)) return;
    el.children.forEach(function (child) {
      child.next = child.prev = child.parent = null;
    });
    el.children.length = 0;
  });
}

manipulation.empty = empty;

function html(str) {
  if (str === undefined) {
    var el = this[0];
    if (!el || !htmlparser2_1.DomUtils.hasChildren(el)) return null;
    return static_1.html(el.children, this.options);
  } // Keep main options unchanged


  var opts = tslib_1$2.__assign(tslib_1$2.__assign({}, this.options), {
    context: null
  });

  return utils_1$3.domEach(this, function (el) {
    if (!htmlparser2_1.DomUtils.hasChildren(el)) return;
    el.children.forEach(function (child) {
      child.next = child.prev = child.parent = null;
    });
    opts.context = el;
    var content = utils_1$3.isCheerio(str) ? str.toArray() : parse_1$2["default"]("" + str, opts, false).children;
    parse_1$2.update(content, el);
  });
}

manipulation.html = html;
/**
 * Turns the collection to a string. Alias for `.html()`.
 *
 * @category Manipulation
 * @returns The rendered document.
 */

function toString() {
  return static_1.html(this, this.options);
}

manipulation.toString = toString;

function text(str) {
  var _this = this; // If `str` is undefined, act as a "getter"


  if (str === undefined) {
    return static_1.text(this);
  }

  if (typeof str === 'function') {
    // Function support
    return utils_1$3.domEach(this, function (el, i) {
      text.call(_this._make(el), str.call(el, i, static_1.text([el])));
    });
  } // Append text node to each selected elements


  return utils_1$3.domEach(this, function (el) {
    if (!htmlparser2_1.DomUtils.hasChildren(el)) return;
    el.children.forEach(function (child) {
      child.next = child.prev = child.parent = null;
    });
    var textNode = new domhandler_2.Text(str);
    parse_1$2.update(textNode, el);
  });
}

manipulation.text = text;
/**
 * Clone the cheerio object.
 *
 * @category Manipulation
 * @example
 *
 * ```js
 * const moreFruit = $('#fruits').clone();
 * ```
 *
 * @returns The cloned object.
 * @see {@link https://api.jquery.com/clone/}
 */

function clone() {
  return this._make(utils_1$3.cloneDom(this.get()));
}

manipulation.clone = clone;

var css$1 = {};

Object.defineProperty(css$1, "__esModule", {
  value: true
});
css$1.css = void 0;
var utils_1$2 = utils;

function css(prop, val) {
  if (prop != null && val != null || // When `prop` is a "plain" object
  _typeof(prop) === 'object' && !Array.isArray(prop)) {
    return utils_1$2.domEach(this, function (el, i) {
      if (utils_1$2.isTag(el)) {
        // `prop` can't be an array here anymore.
        setCss(el, prop, val, i);
      }
    });
  }

  return getCss(this[0], prop);
}

css$1.css = css;
/**
 * Set styles of all elements.
 *
 * @private
 * @param el - Element to set style of.
 * @param prop - Name of property.
 * @param value - Value to set property to.
 * @param idx - Optional index within the selection.
 */

function setCss(el, prop, value, idx) {
  if (typeof prop === 'string') {
    var styles = getCss(el);
    var val = typeof value === 'function' ? value.call(el, idx, styles[prop]) : value;

    if (val === '') {
      delete styles[prop];
    } else if (val != null) {
      styles[prop] = val;
    }

    el.attribs.style = stringify$1(styles);
  } else if (_typeof(prop) === 'object') {
    Object.keys(prop).forEach(function (k, i) {
      setCss(el, k, prop[k], i);
    });
  }
}

function getCss(el, prop) {
  if (!el || !utils_1$2.isTag(el)) return;
  var styles = parse(el.attribs.style);

  if (typeof prop === 'string') {
    return styles[prop];
  }

  if (Array.isArray(prop)) {
    var newStyles_1 = {};
    prop.forEach(function (item) {
      if (styles[item] != null) {
        newStyles_1[item] = styles[item];
      }
    });
    return newStyles_1;
  }

  return styles;
}
/**
 * Stringify `obj` to styles.
 *
 * @private
 * @category CSS
 * @param obj - Object to stringify.
 * @returns The serialized styles.
 */


function stringify$1(obj) {
  return Object.keys(obj).reduce(function (str, prop) {
    return "" + str + (str ? ' ' : '') + prop + ": " + obj[prop] + ";";
  }, '');
}
/**
 * Parse `styles`.
 *
 * @private
 * @category CSS
 * @param styles - Styles to be parsed.
 * @returns The parsed styles.
 */


function parse(styles) {
  styles = (styles || '').trim();
  if (!styles) return {};
  return styles.split(';').reduce(function (obj, str) {
    var n = str.indexOf(':'); // Skip if there is no :, or if it is the first/last character

    if (n < 1 || n === str.length - 1) return obj;
    obj[str.slice(0, n).trim()] = str.slice(n + 1).trim();
    return obj;
  }, {});
}

var forms = {};

Object.defineProperty(forms, "__esModule", {
  value: true
});
forms.serializeArray = forms.serialize = void 0;
var utils_1$1 = utils;
/*
 * https://github.com/jquery/jquery/blob/2.1.3/src/manipulation/var/rcheckableType.js
 * https://github.com/jquery/jquery/blob/2.1.3/src/serialize.js
 */

var submittableSelector = 'input,select,textarea,keygen';
var r20 = /%20/g;
var rCRLF = /\r?\n/g;
/**
 * Encode a set of form elements as a string for submission.
 *
 * @category Forms
 * @returns The serialized form.
 * @see {@link https://api.jquery.com/serialize/}
 */

function serialize() {
  // Convert form elements into name/value objects
  var arr = this.serializeArray(); // Serialize each element into a key/value string

  var retArr = arr.map(function (data) {
    return encodeURIComponent(data.name) + "=" + encodeURIComponent(data.value);
  }); // Return the resulting serialization

  return retArr.join('&').replace(r20, '+');
}

forms.serialize = serialize;
/**
 * Encode a set of form elements as an array of names and values.
 *
 * @category Forms
 * @example
 *
 * ```js
 * $('<form><input name="foo" value="bar" /></form>').serializeArray();
 * //=> [ { name: 'foo', value: 'bar' } ]
 * ```
 *
 * @returns The serialized form.
 * @see {@link https://api.jquery.com/serializeArray/}
 */

function serializeArray() {
  var _this = this; // Resolve all form elements from either forms or collections of form elements


  return this.map(function (_, elem) {
    var $elem = _this._make(elem);

    if (utils_1$1.isTag(elem) && elem.name === 'form') {
      return $elem.find(submittableSelector).toArray();
    }

    return $elem.filter(submittableSelector).toArray();
  }).filter( // Verify elements have a name (`attr.name`) and are not disabled (`:enabled`)
  '[name!=""]:enabled' + // And cannot be clicked (`[type=submit]`) or are used in `x-www-form-urlencoded` (`[type=file]`)
  ':not(:submit, :button, :image, :reset, :file)' + // And are either checked/don't have a checkable state
  ':matches([checked], :not(:checkbox, :radio))' // Convert each of the elements to its value(s)
  ).map(function (_, elem) {
    var _a;

    var $elem = _this._make(elem);

    var name = $elem.attr('name'); // We have filtered for elements with a name before.
    // If there is no value set (e.g. `undefined`, `null`), then default value to empty

    var value = (_a = $elem.val()) !== null && _a !== void 0 ? _a : ''; // If we have an array of values (e.g. `<select multiple>`), return an array of key/value pairs

    if (Array.isArray(value)) {
      return value.map(function (val) {
        /*
         * We trim replace any line endings (e.g. `\r` or `\r\n` with `\r\n`) to guarantee consistency across platforms
         * These can occur inside of `<textarea>'s`
         */
        return {
          name: name,
          value: val.replace(rCRLF, '\r\n')
        };
      });
    } // Otherwise (e.g. `<input type="text">`, return only one key/value pair


    return {
      name: name,
      value: value.replace(rCRLF, '\r\n')
    };
  }).toArray();
}

forms.serializeArray = serializeArray;

Object.defineProperty(cheerio$1, "__esModule", {
  value: true
});
cheerio$1.Cheerio = void 0;
var tslib_1$1 = require$$0$1;

var parse_1$1 = tslib_1$1.__importDefault(parse$2);

var options_1$1 = tslib_1$1.__importDefault(options);

var utils_1 = utils;

var Attributes = tslib_1$1.__importStar(attributes);

var Traversing = tslib_1$1.__importStar(traversing);

var Manipulation = tslib_1$1.__importStar(manipulation);

var Css = tslib_1$1.__importStar(css$1);

var Forms = tslib_1$1.__importStar(forms);

var Cheerio =
/** @class */
function () {
  /**
   * Instance of cheerio. Methods are specified in the modules. Usage of this
   * constructor is not recommended. Please use $.load instead.
   *
   * @private
   * @param selector - The new selection.
   * @param context - Context of the selection.
   * @param root - Sets the root node.
   * @param options - Options for the instance.
   */
  function Cheerio(selector, context, root, options) {
    var _this = this;

    if (options === void 0) {
      options = options_1$1["default"];
    }

    this.length = 0;
    this.options = options; // $(), $(null), $(undefined), $(false)

    if (!selector) return this;

    if (root) {
      if (typeof root === 'string') root = parse_1$1["default"](root, this.options, false);
      this._root = new this.constructor(root, null, null, this.options); // Add a cyclic reference, so that calling methods on `_root` never fails.

      this._root._root = this._root;
    } // $($)


    if (utils_1.isCheerio(selector)) return selector;
    var elements = typeof selector === 'string' && utils_1.isHtml(selector) ? // $(<html>)
    parse_1$1["default"](selector, this.options, false).children : isNode(selector) ? // $(dom)
    [selector] : Array.isArray(selector) ? // $([dom])
    selector : null;

    if (elements) {
      elements.forEach(function (elem, idx) {
        _this[idx] = elem;
      });
      this.length = elements.length;
      return this;
    } // We know that our selector is a string now.


    var search = selector;
    var searchContext = !context ? // If we don't have a context, maybe we have a root, from loading
    this._root : typeof context === 'string' ? utils_1.isHtml(context) ? // $('li', '<ul>...</ul>')
    this._make(parse_1$1["default"](context, this.options, false)) : ( // $('li', 'ul')
    search = context + " " + search, this._root) : utils_1.isCheerio(context) ? // $('li', $)
    context : // $('li', node), $('li', [nodes])
    this._make(context); // If we still don't have a context, return

    if (!searchContext) return this;
    /*
     * #id, .class, tag
     */
    // @ts-expect-error No good way to type this — we will always return `Cheerio<Element>` here.

    return searchContext.find(search);
  }
  /**
   * Make a cheerio object.
   *
   * @private
   * @param dom - The contents of the new object.
   * @param context - The context of the new object.
   * @returns The new cheerio object.
   */


  Cheerio.prototype._make = function (dom, context) {
    var cheerio = new this.constructor(dom, context, this._root, this.options);
    cheerio.prevObject = this;
    return cheerio;
  };

  return Cheerio;
}();

cheerio$1.Cheerio = Cheerio;
/** Set a signature of the object. */

Cheerio.prototype.cheerio = '[cheerio object]';
/*
 * Make cheerio an array-like object
 */

Cheerio.prototype.splice = Array.prototype.splice; // Support for (const element of $(...)) iteration:

Cheerio.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator]; // Plug in the API

Object.assign(Cheerio.prototype, Attributes, Traversing, Manipulation, Css, Forms);

function isNode(obj) {
  return !!obj.name || obj.type === 'root' || obj.type === 'text' || obj.type === 'comment';
}

Object.defineProperty(load$1, "__esModule", {
  value: true
});
load$1.load = void 0;
var tslib_1 = require$$0$1;

var options_1 = tslib_1.__importStar(options);

var staticMethods = tslib_1.__importStar(_static);

var cheerio_1 = cheerio$1;

var parse_1 = tslib_1.__importDefault(parse$2);
/**
 * Create a querying function, bound to a document created from the provided
 * markup. Note that similar to web browser contexts, this operation may
 * introduce `<html>`, `<head>`, and `<body>` elements; set `isDocument` to
 * `false` to switch to fragment mode and disable this.
 *
 * @param content - Markup to be loaded.
 * @param options - Options for the created instance.
 * @param isDocument - Allows parser to be switched to fragment mode.
 * @returns The loaded document.
 * @see {@link https://cheerio.js.org#loading} for additional usage information.
 */


function load(content, options, isDocument) {
  if (isDocument === void 0) {
    isDocument = true;
  }

  if (content == null) {
    throw new Error('cheerio.load() expects a string');
  }

  var internalOpts = tslib_1.__assign(tslib_1.__assign({}, options_1["default"]), options_1.flatten(options));

  var root = parse_1["default"](content, internalOpts, isDocument);
  /** Create an extended class here, so that extensions only live on one instance. */

  var LoadedCheerio =
  /** @class */
  function (_super) {
    tslib_1.__extends(LoadedCheerio, _super);

    function LoadedCheerio() {
      return _super !== null && _super.apply(this, arguments) || this;
    }

    return LoadedCheerio;
  }(cheerio_1.Cheerio);

  function initialize(selector, context, r, opts) {
    if (r === void 0) {
      r = root;
    }

    return new LoadedCheerio(selector, context, r, tslib_1.__assign(tslib_1.__assign({}, internalOpts), options_1.flatten(opts)));
  } // Add in static methods & properties


  Object.assign(initialize, staticMethods, {
    load: load,
    // `_root` and `_options` are used in static methods.
    _root: root,
    _options: internalOpts,
    // Add `fn` for plugins
    fn: LoadedCheerio.prototype,
    // Add the prototype here to maintain `instanceof` behavior.
    prototype: LoadedCheerio.prototype
  });
  return initialize;
}

load$1.load = load;

(function (exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.root = exports.parseHTML = exports.merge = exports.contains = void 0;
  var tslib_1 = require$$0$1;
  /**
   * Types used in signatures of Cheerio methods.
   *
   * @category Cheerio
   */

  tslib_1.__exportStar(types, exports);

  tslib_1.__exportStar(load$1, exports);

  var load_1 = load$1;
  /**
   * The default cheerio instance.
   *
   * @deprecated Use the function returned by `load` instead.
   */

  exports["default"] = load_1.load([]);

  var staticMethods = tslib_1.__importStar(_static);
  /**
   * In order to promote consistency with the jQuery library, users are encouraged
   * to instead use the static method of the same name.
   *
   * @deprecated
   * @example
   *
   * ```js
   * const $ = cheerio.load('<div><p></p></div>');
   *
   * $.contains($('div').get(0), $('p').get(0));
   * //=> true
   *
   * $.contains($('p').get(0), $('div').get(0));
   * //=> false
   * ```
   *
   * @returns {boolean}
   */


  exports.contains = staticMethods.contains;
  /**
   * In order to promote consistency with the jQuery library, users are encouraged
   * to instead use the static method of the same name.
   *
   * @deprecated
   * @example
   *
   * ```js
   * const $ = cheerio.load('');
   *
   * $.merge([1, 2], [3, 4]);
   * //=> [1, 2, 3, 4]
   * ```
   */

  exports.merge = staticMethods.merge;
  /**
   * In order to promote consistency with the jQuery library, users are encouraged
   * to instead use the static method of the same name as it is defined on the
   * "loaded" Cheerio factory function.
   *
   * @deprecated See {@link static/parseHTML}.
   * @example
   *
   * ```js
   * const $ = cheerio.load('');
   * $.parseHTML('<b>markup</b>');
   * ```
   */

  exports.parseHTML = staticMethods.parseHTML;
  /**
   * Users seeking to access the top-level element of a parsed document should
   * instead use the `root` static method of a "loaded" Cheerio function.
   *
   * @deprecated
   * @example
   *
   * ```js
   * const $ = cheerio.load('');
   * $.root();
   * ```
   */

  exports.root = staticMethods.root;
})(lib$c);

var cheerio = /*@__PURE__*/getDefaultExportFromCjs(lib$c);

var addStyle = function addStyle($) {
  $('html').append("\n    <style>\n      .success {\n          background-color: #afa;\n      }\n      .success .assert-actual {\n          display: none;\n      }\n      .error {\n          background-color: #ffb0b0;\n          padding: 1px;\n      }\n      .error .assert-expect {\n          text-decoration: line-through;\n          color: #bb5050;\n          margin-right: 5px;\n      }\n    </style>\n  ");
};

// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues$1;
var rnds8$1 = new Uint8Array(16);
function rng$1() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues$1) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues$1 = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues$1) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues$1(rnds8$1);
}

var REGEX = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

function validate(uuid) {
  return typeof uuid === 'string' && REGEX.test(uuid);
}

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i$1 = 0; i$1 < 256; ++i$1) {
  byteToHex.push((i$1 + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0; // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434

  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!validate(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || rng$1)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return stringify(rnds);
}

/*
  https://github.com/banksean wrapped Makoto Matsumoto and Takuji Nishimura's code in a namespace
  so it's better encapsulated. Now you can have multiple random number generators
  and they won't stomp all over eachother's state.

  If you want to use this as a substitute for Math.random(), use the random()
  method like so:

  var m = new MersenneTwister();
  var randomNumber = m.random();

  You can also call the other genrand_{foo}() methods on the instance.

  If you want to use a specific seed in order to get a repeatable random
  sequence, pass an integer into the constructor:

  var m = new MersenneTwister(123);

  and that will always produce the same random sequence.

  Sean McCullough (banksean@gmail.com)
*/
/*
   A C-program for MT19937, with initialization improved 2002/1/26.
   Coded by Takuji Nishimura and Makoto Matsumoto.

   Before using, initialize the state by using init_seed(seed)
   or init_by_array(init_key, key_length).

   Copyright (C) 1997 - 2002, Makoto Matsumoto and Takuji Nishimura,
   All rights reserved.

   Redistribution and use in source and binary forms, with or without
   modification, are permitted provided that the following conditions
   are met:

     1. Redistributions of source code must retain the above copyright
        notice, this list of conditions and the following disclaimer.

     2. Redistributions in binary form must reproduce the above copyright
        notice, this list of conditions and the following disclaimer in the
        documentation and/or other materials provided with the distribution.

     3. The names of its contributors may not be used to endorse or promote
        products derived from this software without specific prior written
        permission.

   THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
   "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
   LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
   A PARTICULAR PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
   CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
   EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
   PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
   PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
   LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
   NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
   SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


   Any feedback is very welcome.
   http://www.math.sci.hiroshima-u.ac.jp/~m-mat/MT/emt.html
   email: m-mat @ math.sci.hiroshima-u.ac.jp (remove space)
*/

var MersenneTwister = function MersenneTwister(seed) {
  if (seed == undefined) {
    seed = new Date().getTime();
  }
  /* Period parameters */


  this.N = 624;
  this.M = 397;
  this.MATRIX_A = 0x9908b0df;
  /* constant vector a */

  this.UPPER_MASK = 0x80000000;
  /* most significant w-r bits */

  this.LOWER_MASK = 0x7fffffff;
  /* least significant r bits */

  this.mt = new Array(this.N);
  /* the array for the state vector */

  this.mti = this.N + 1;
  /* mti==N+1 means mt[N] is not initialized */

  if (seed.constructor == Array) {
    this.init_by_array(seed, seed.length);
  } else {
    this.init_seed(seed);
  }
};
/* initializes mt[N] with a seed */

/* origin name init_genrand */


MersenneTwister.prototype.init_seed = function (s) {
  this.mt[0] = s >>> 0;

  for (this.mti = 1; this.mti < this.N; this.mti++) {
    var s = this.mt[this.mti - 1] ^ this.mt[this.mti - 1] >>> 30;
    this.mt[this.mti] = (((s & 0xffff0000) >>> 16) * 1812433253 << 16) + (s & 0x0000ffff) * 1812433253 + this.mti;
    /* See Knuth TAOCP Vol2. 3rd Ed. P.106 for multiplier. */

    /* In the previous versions, MSBs of the seed affect   */

    /* only MSBs of the array mt[].                        */

    /* 2002/01/09 modified by Makoto Matsumoto             */

    this.mt[this.mti] >>>= 0;
    /* for >32 bit machines */
  }
};
/* initialize by an array with array-length */

/* init_key is the array for initializing keys */

/* key_length is its length */

/* slight change for C++, 2004/2/26 */


MersenneTwister.prototype.init_by_array = function (init_key, key_length) {
  var i, j, k;
  this.init_seed(19650218);
  i = 1;
  j = 0;
  k = this.N > key_length ? this.N : key_length;

  for (; k; k--) {
    var s = this.mt[i - 1] ^ this.mt[i - 1] >>> 30;
    this.mt[i] = (this.mt[i] ^ (((s & 0xffff0000) >>> 16) * 1664525 << 16) + (s & 0x0000ffff) * 1664525) + init_key[j] + j;
    /* non linear */

    this.mt[i] >>>= 0;
    /* for WORDSIZE > 32 machines */

    i++;
    j++;

    if (i >= this.N) {
      this.mt[0] = this.mt[this.N - 1];
      i = 1;
    }

    if (j >= key_length) j = 0;
  }

  for (k = this.N - 1; k; k--) {
    var s = this.mt[i - 1] ^ this.mt[i - 1] >>> 30;
    this.mt[i] = (this.mt[i] ^ (((s & 0xffff0000) >>> 16) * 1566083941 << 16) + (s & 0x0000ffff) * 1566083941) - i;
    /* non linear */

    this.mt[i] >>>= 0;
    /* for WORDSIZE > 32 machines */

    i++;

    if (i >= this.N) {
      this.mt[0] = this.mt[this.N - 1];
      i = 1;
    }
  }

  this.mt[0] = 0x80000000;
  /* MSB is 1; assuring non-zero initial array */
};
/* generates a random number on [0,0xffffffff]-interval */

/* origin name genrand_int32 */


MersenneTwister.prototype.random_int = function () {
  var y;
  var mag01 = new Array(0x0, this.MATRIX_A);
  /* mag01[x] = x * MATRIX_A  for x=0,1 */

  if (this.mti >= this.N) {
    /* generate N words at one time */
    var kk;
    if (this.mti == this.N + 1)
      /* if init_seed() has not been called, */
      this.init_seed(5489);
    /* a default initial seed is used */

    for (kk = 0; kk < this.N - this.M; kk++) {
      y = this.mt[kk] & this.UPPER_MASK | this.mt[kk + 1] & this.LOWER_MASK;
      this.mt[kk] = this.mt[kk + this.M] ^ y >>> 1 ^ mag01[y & 0x1];
    }

    for (; kk < this.N - 1; kk++) {
      y = this.mt[kk] & this.UPPER_MASK | this.mt[kk + 1] & this.LOWER_MASK;
      this.mt[kk] = this.mt[kk + (this.M - this.N)] ^ y >>> 1 ^ mag01[y & 0x1];
    }

    y = this.mt[this.N - 1] & this.UPPER_MASK | this.mt[0] & this.LOWER_MASK;
    this.mt[this.N - 1] = this.mt[this.M - 1] ^ y >>> 1 ^ mag01[y & 0x1];
    this.mti = 0;
  }

  y = this.mt[this.mti++];
  /* Tempering */

  y ^= y >>> 11;
  y ^= y << 7 & 0x9d2c5680;
  y ^= y << 15 & 0xefc60000;
  y ^= y >>> 18;
  return y >>> 0;
};
/* generates a random number on [0,0x7fffffff]-interval */

/* origin name genrand_int31 */


MersenneTwister.prototype.random_int31 = function () {
  return this.random_int() >>> 1;
};
/* generates a random number on [0,1]-real-interval */

/* origin name genrand_real1 */


MersenneTwister.prototype.random_incl = function () {
  return this.random_int() * (1.0 / 4294967295.0);
  /* divided by 2^32-1 */
};
/* generates a random number on [0,1)-real-interval */


MersenneTwister.prototype.random = function () {
  return this.random_int() * (1.0 / 4294967296.0);
  /* divided by 2^32 */
};
/* generates a random number on (0,1)-real-interval */

/* origin name genrand_real3 */


MersenneTwister.prototype.random_excl = function () {
  return (this.random_int() + 0.5) * (1.0 / 4294967296.0);
  /* divided by 2^32 */
};
/* generates a random number on [0,1) with 53-bit resolution*/

/* origin name genrand_res53 */


MersenneTwister.prototype.random_long = function () {
  var a = this.random_int() >>> 5,
      b = this.random_int() >>> 6;
  return (a * 67108864.0 + b) * (1.0 / 9007199254740992.0);
};
/* These real versions are due to Isaku Wada, 2002/01/09 added */


var mersenneTwister = MersenneTwister;

var twister = new mersenneTwister(Math.random() * Number.MAX_SAFE_INTEGER);
var rnds8 = new Uint8Array(16);

function getRandomValues(abv) {
  var l = abv.length;

  while (l--) {
    abv[l] = Math.floor(twister.random() * 256);
  }

  return abv;
}

function rng() {
  return getRandomValues(rnds8);
}

var enhanceHtml = function enhanceHtml(html) {
  var $ = cheerio.load(html);
  $(CODE_TAG_SELECTOR.EXAMPLE).each(function (exampleIndex, example) {
    enhance($(example), CODE_TAG.EXAMPLE);
    $(example).find(CODE_TAG_SELECTOR.ASSERTION).each(function (assertionIndex, assertion) {
      enhance($(assertion), CODE_TAG.ASSERTION);
    });
  });
  addStyle($);
  return $.html();
};

var enhance = function enhance(el, type) {
  if (type === CODE_TAG.EXAMPLE) {
    el.attr(EXAMPLE_ID, v4({
      rng: rng
    }));
  }

  if (type === CODE_TAG.ASSERTION) {
    el.attr(ASSERTION_ID, v4({
      rng: rng
    }));
    var text = el.text().trim();
    el.empty();
    el.append("<span class=\"assert-expect\">".concat(text, "</span>"));
    el.append('<span class="assert-actual"></span>');
  }
};

var convertCodeForVariable = function convertCodeForVariable($, variable, variables) {
  var code;
  var variableName = $(variable).attr(DATA_NAME);
  var variableValue = $(variable).text().trim();

  if (variables.includes(variableName)) {
    code = "".concat(variableName, " = \"").concat(variableValue, "\"");
  } else {
    variables.push(variableName);
    code = "var ".concat(variableName, " = \"").concat(variableValue, "\"");
  }

  return code;
};
var convertCodeForFunction = function convertCodeForFunction($, func) {
  var code;
  var functionName = $(func).attr(DATA_ACTION);
  var functionParams = $(func).attr(DATA_PARAMS);

  if (functionParams) {
    var paramArray = functionParams.split(PARAM_SPLITTER);
    $(func).find(CODE_TAG_SELECTOR.VARIABLE).each(function (index, variable) {
      var variableName = $(variable).attr(DATA_NAME);
      var variableValue = $(variable).text().trim();
      var paramIndex = paramArray.findIndex(function (paramName) {
        return paramName === variableName;
      });

      if (paramIndex >= 0) {
        paramArray[paramIndex] = "\"".concat(variableValue, "\"");
      }
    });
    code = "".concat(FUNCTION_PREFIX).concat(functionName, "(").concat(paramArray.join(PARAM_JOINER), ")");
  } else {
    code = "".concat(FUNCTION_PREFIX).concat(functionName, "()");
  }

  return code;
};
var convertCodeForAssertion = function convertCodeForAssertion($, assertionId, assertion) {
  var code = ["context[\"".concat(assertionId, "\"] = {}")];
  var expectType = $(assertion).attr(DATA_EXPECT);

  if (expectType === EXPECT_TYPE.EQUAL) {
    var expectValue = $(assertion).text().trim();
    code.push("context[\"".concat(assertionId, "\"].expect = \"").concat(expectValue, "\""));
  } else if (expectType === EXPECT_TYPE.TRUE) {
    code.push("context[\"".concat(assertionId, "\"].expect = true"));
  } else if (expectType === EXPECT_TYPE.FALSE) {
    code.push("context[\"".concat(assertionId, "\"].expect = false"));
  } else {
    console.error('目前仅支持assert-equal，assert-true，assert-false');
  }

  var codeForFunction = convertCodeForFunction($, assertion);
  code.push("context[\"".concat(assertionId, "\"].actual = ").concat(codeForFunction));
  code.push("context[\"".concat(assertionId, "\"].result = context[\"").concat(assertionId, "\"].actual === context[\"").concat(assertionId, "\"].expect"));
  return code;
};

var convertCode = function convertCode(data) {
  var $ = cheerio.load(data);
  var executable_codes = {};
  $(CODE_TAG_SELECTOR.EXAMPLE).each(function (exampleIndex, example) {
    var exampleId = $(example).attr(EXAMPLE_ID);
    var codes = [];
    var exampleVariables = [];
    $(example).find('span').each(function (index, el) {
      if ($(el).hasClass(CODE_TAG.VARIABLE) && !$(el).parent().hasClass(CODE_TAG.FUNCTION)) {
        codes.push(convertCodeForVariable($, el, exampleVariables));
      } else if ($(el).hasClass(CODE_TAG.FUNCTION)) {
        codes.push(convertCodeForFunction($, el));
      } else if ($(el).hasClass(CODE_TAG.ASSERTION)) {
        var assertionId = $(el).attr(ASSERTION_ID);
        codes = codes.concat(convertCodeForAssertion($, assertionId, el));
      }
    });
    executable_codes[exampleId] = "".concat(codes.join(CODE_JOINER)).concat(CODE_JOINER);
  });
  return executable_codes;
};

/**
 * This file automatically generated from `pre-publish.js`.
 * Do not manually edit.
 */
var voidElements = {
  "area": true,
  "base": true,
  "br": true,
  "col": true,
  "embed": true,
  "hr": true,
  "img": true,
  "input": true,
  "link": true,
  "meta": true,
  "param": true,
  "source": true,
  "track": true,
  "wbr": true
};

var t = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;

function n(n) {
  var r = {
    type: "tag",
    name: "",
    voidElement: !1,
    attrs: {},
    children: []
  },
      i = n.match(/<\/?([^\s]+?)[/\s>]/);

  if (i && (r.name = i[1], (voidElements[i[1]] || "/" === n.charAt(n.length - 2)) && (r.voidElement = !0), r.name.startsWith("!--"))) {
    var s = n.indexOf("--\x3e");
    return {
      type: "comment",
      comment: -1 !== s ? n.slice(4, s) : ""
    };
  }

  for (var a = new RegExp(t), c = null; null !== (c = a.exec(n));) {
    if (c[0].trim()) if (c[1]) {
      var o = c[1].trim(),
          l = [o, ""];
      o.indexOf("=") > -1 && (l = o.split("=")), r.attrs[l[0]] = l[1], a.lastIndex--;
    } else c[2] && (r.attrs[c[2]] = c[3].trim().substring(1, c[3].length - 1));
  }

  return r;
}

var r = /<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,
    i = /^\s*$/,
    s = Object.create(null);

function a(e, t) {
  switch (t.type) {
    case "text":
      return e + t.content;

    case "tag":
      return e += "<" + t.name + (t.attrs ? function (e) {
        var t = [];

        for (var n in e) {
          t.push(n + '="' + e[n] + '"');
        }

        return t.length ? " " + t.join(" ") : "";
      }(t.attrs) : "") + (t.voidElement ? "/>" : ">"), t.voidElement ? e : e + t.children.reduce(a, "") + "</" + t.name + ">";

    case "comment":
      return e + "\x3c!--" + t.comment + "--\x3e";
  }
}

var c = {
  parse: function parse(e, t) {
    t || (t = {}), t.components || (t.components = s);
    var a,
        c = [],
        o = [],
        l = -1,
        m = !1;

    if (0 !== e.indexOf("<")) {
      var u = e.indexOf("<");
      c.push({
        type: "text",
        content: -1 === u ? e : e.substring(0, u)
      });
    }

    return e.replace(r, function (r, s) {
      if (m) {
        if (r !== "</" + a.name + ">") return;
        m = !1;
      }

      var u,
          f = "/" !== r.charAt(1),
          h = r.startsWith("\x3c!--"),
          p = s + r.length,
          d = e.charAt(p);

      if (h) {
        var v = n(r);
        return l < 0 ? (c.push(v), c) : ((u = o[l]).children.push(v), c);
      }

      if (f && (l++, "tag" === (a = n(r)).type && t.components[a.name] && (a.type = "component", m = !0), a.voidElement || m || !d || "<" === d || a.children.push({
        type: "text",
        content: e.slice(p, e.indexOf("<", p))
      }), 0 === l && c.push(a), (u = o[l - 1]) && u.children.push(a), o[l] = a), (!f || a.voidElement) && (l > -1 && (a.voidElement || a.name === r.slice(2, -1)) && (l--, a = -1 === l ? c : o[l]), !m && "<" !== d && d)) {
        u = -1 === l ? c : o[l].children;
        var x = e.indexOf("<", p),
            g = e.slice(p, -1 === x ? void 0 : x);
        i.test(g) && (g = " "), (x > -1 && l + u.length >= 0 || " " !== g) && u.push({
          type: "text",
          content: g
        });
      }
    }), c;
  },
  stringify: function stringify(e) {
    return e.reduce(function (e, t) {
      return e + a("", t);
    }, "");
  }
};

var astConverter = {
  toDomJSON: function toDomJSON(html) {
    return c.parse(html);
  },
  toHtml: function toHtml(jsonDom) {
    return c.stringify(jsonDom);
  }
};


var getJSCodeAndDomJSON = function getJSCodeAndDomJSON(html) {
  var enhancedHtml = enhanceHtml(html);
  var jsCode = convertCode(enhancedHtml);
  var domJSON = astConverter.toDomJSON(enhancedHtml);
  return {
    jsCode: jsCode,
    domJSON: domJSON
  };
};
var transformDomJSONToHtml = function transformDomJSONToHtml(domJSON) {
  var obj = typeof domJSON === 'string' ? JSON.parse(domJSON) : domJSON;
  return astConverter.toHtml(obj);
};
