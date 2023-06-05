var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __pow = Math.pow;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var shim = { exports: {} };
var _global = { exports: {} };
var global$l = _global.exports = typeof window != "undefined" && window.Math == Math ? window : typeof self != "undefined" && self.Math == Math ? self : Function("return this")();
if (typeof __g == "number")
  __g = global$l;
var hasOwnProperty$2 = {}.hasOwnProperty;
var _has = function(it, key) {
  return hasOwnProperty$2.call(it, key);
};
var _fails = function(exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};
var _descriptors = !_fails(function() {
  return Object.defineProperty({}, "a", { get: function() {
    return 7;
  } }).a != 7;
});
var _core = { exports: {} };
var core$6 = _core.exports = { version: "2.6.12" };
if (typeof __e == "number")
  __e = core$6;
var _objectDp = {};
var _isObject = function(it) {
  return typeof it === "object" ? it !== null : typeof it === "function";
};
var isObject$u = _isObject;
var _anObject = function(it) {
  if (!isObject$u(it))
    throw TypeError(it + " is not an object!");
  return it;
};
var isObject$t = _isObject;
var document$2 = _global.exports.document;
var is = isObject$t(document$2) && isObject$t(document$2.createElement);
var _domCreate = function(it) {
  return is ? document$2.createElement(it) : {};
};
var _ie8DomDefine = !_descriptors && !_fails(function() {
  return Object.defineProperty(_domCreate("div"), "a", { get: function() {
    return 7;
  } }).a != 7;
});
var isObject$s = _isObject;
var _toPrimitive = function(it, S) {
  if (!isObject$s(it))
    return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == "function" && !isObject$s(val = fn.call(it)))
    return val;
  if (typeof (fn = it.valueOf) == "function" && !isObject$s(val = fn.call(it)))
    return val;
  if (!S && typeof (fn = it.toString) == "function" && !isObject$s(val = fn.call(it)))
    return val;
  throw TypeError("Can't convert object to primitive value");
};
var anObject$C = _anObject;
var IE8_DOM_DEFINE$1 = _ie8DomDefine;
var toPrimitive$8 = _toPrimitive;
var dP$b = Object.defineProperty;
_objectDp.f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject$C(O);
  P = toPrimitive$8(P, true);
  anObject$C(Attributes);
  if (IE8_DOM_DEFINE$1)
    try {
      return dP$b(O, P, Attributes);
    } catch (e) {
    }
  if ("get" in Attributes || "set" in Attributes)
    throw TypeError("Accessors not supported!");
  if ("value" in Attributes)
    O[P] = Attributes.value;
  return O;
};
var _propertyDesc = function(bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value
  };
};
var dP$a = _objectDp;
var createDesc$4 = _propertyDesc;
var _hide = _descriptors ? function(object, key, value) {
  return dP$a.f(object, key, createDesc$4(1, value));
} : function(object, key, value) {
  object[key] = value;
  return object;
};
var _redefine = { exports: {} };
var id$2 = 0;
var px = Math.random();
var _uid = function(key) {
  return "Symbol(".concat(key === void 0 ? "" : key, ")_", (++id$2 + px).toString(36));
};
var _shared = { exports: {} };
var _library = false;
var core$5 = _core.exports;
var global$k = _global.exports;
var SHARED = "__core-js_shared__";
var store$3 = global$k[SHARED] || (global$k[SHARED] = {});
(_shared.exports = function(key, value) {
  return store$3[key] || (store$3[key] = value !== void 0 ? value : {});
})("versions", []).push({
  version: core$5.version,
  mode: "global",
  copyright: "\xA9 2020 Denis Pushkarev (zloirock.ru)"
});
var _functionToString = _shared.exports("native-function-to-string", Function.toString);
var global$j = _global.exports;
var hide$7 = _hide;
var has$c = _has;
var SRC = _uid("src");
var $toString$2 = _functionToString;
var TO_STRING$2 = "toString";
var TPL = ("" + $toString$2).split(TO_STRING$2);
_core.exports.inspectSource = function(it) {
  return $toString$2.call(it);
};
(_redefine.exports = function(O, key, val, safe) {
  var isFunction2 = typeof val == "function";
  if (isFunction2)
    has$c(val, "name") || hide$7(val, "name", key);
  if (O[key] === val)
    return;
  if (isFunction2)
    has$c(val, SRC) || hide$7(val, SRC, O[key] ? "" + O[key] : TPL.join(String(key)));
  if (O === global$j) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide$7(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide$7(O, key, val);
  }
})(Function.prototype, TO_STRING$2, function toString() {
  return typeof this == "function" && this[SRC] || $toString$2.call(this);
});
var _aFunction = function(it) {
  if (typeof it != "function")
    throw TypeError(it + " is not a function!");
  return it;
};
var aFunction$e = _aFunction;
var _ctx = function(fn, that, length) {
  aFunction$e(fn);
  if (that === void 0)
    return fn;
  switch (length) {
    case 1:
      return function(a) {
        return fn.call(that, a);
      };
    case 2:
      return function(a, b) {
        return fn.call(that, a, b);
      };
    case 3:
      return function(a, b, c) {
        return fn.call(that, a, b, c);
      };
  }
  return function() {
    return fn.apply(that, arguments);
  };
};
var global$i = _global.exports;
var core$4 = _core.exports;
var hide$6 = _hide;
var redefine$7 = _redefine.exports;
var ctx$9 = _ctx;
var PROTOTYPE$3 = "prototype";
var $export$23 = function(type, name, source) {
  var IS_FORCED = type & $export$23.F;
  var IS_GLOBAL = type & $export$23.G;
  var IS_STATIC = type & $export$23.S;
  var IS_PROTO = type & $export$23.P;
  var IS_BIND = type & $export$23.B;
  var target = IS_GLOBAL ? global$i : IS_STATIC ? global$i[name] || (global$i[name] = {}) : (global$i[name] || {})[PROTOTYPE$3];
  var exports2 = IS_GLOBAL ? core$4 : core$4[name] || (core$4[name] = {});
  var expProto = exports2[PROTOTYPE$3] || (exports2[PROTOTYPE$3] = {});
  var key, own, out, exp2;
  if (IS_GLOBAL)
    source = name;
  for (key in source) {
    own = !IS_FORCED && target && target[key] !== void 0;
    out = (own ? target : source)[key];
    exp2 = IS_BIND && own ? ctx$9(out, global$i) : IS_PROTO && typeof out == "function" ? ctx$9(Function.call, out) : out;
    if (target)
      redefine$7(target, key, out, type & $export$23.U);
    if (exports2[key] != out)
      hide$6(exports2, key, exp2);
    if (IS_PROTO && expProto[key] != out)
      expProto[key] = out;
  }
};
global$i.core = core$4;
$export$23.F = 1;
$export$23.G = 2;
$export$23.S = 4;
$export$23.P = 8;
$export$23.B = 16;
$export$23.W = 32;
$export$23.U = 64;
$export$23.R = 128;
var _export = $export$23;
var _meta = { exports: {} };
var META$1 = _uid("meta");
var isObject$r = _isObject;
var has$b = _has;
var setDesc = _objectDp.f;
var id$1 = 0;
var isExtensible$1 = Object.isExtensible || function() {
  return true;
};
var FREEZE = !_fails(function() {
  return isExtensible$1(Object.preventExtensions({}));
});
var setMeta = function(it) {
  setDesc(it, META$1, { value: {
    i: "O" + ++id$1,
    w: {}
  } });
};
var fastKey$1 = function(it, create4) {
  if (!isObject$r(it))
    return typeof it == "symbol" ? it : (typeof it == "string" ? "S" : "P") + it;
  if (!has$b(it, META$1)) {
    if (!isExtensible$1(it))
      return "F";
    if (!create4)
      return "E";
    setMeta(it);
  }
  return it[META$1].i;
};
var getWeak$2 = function(it, create4) {
  if (!has$b(it, META$1)) {
    if (!isExtensible$1(it))
      return true;
    if (!create4)
      return false;
    setMeta(it);
  }
  return it[META$1].w;
};
var onFreeze = function(it) {
  if (FREEZE && meta$5.NEED && isExtensible$1(it) && !has$b(it, META$1))
    setMeta(it);
  return it;
};
var meta$5 = _meta.exports = {
  KEY: META$1,
  NEED: false,
  fastKey: fastKey$1,
  getWeak: getWeak$2,
  onFreeze
};
var _wks = { exports: {} };
var store$2 = _shared.exports("wks");
var uid$6 = _uid;
var Symbol$1 = _global.exports.Symbol;
var USE_SYMBOL = typeof Symbol$1 == "function";
var $exports = _wks.exports = function(name) {
  return store$2[name] || (store$2[name] = USE_SYMBOL && Symbol$1[name] || (USE_SYMBOL ? Symbol$1 : uid$6)("Symbol." + name));
};
$exports.store = store$2;
var def$1 = _objectDp.f;
var has$a = _has;
var TAG$2 = _wks.exports("toStringTag");
var _setToStringTag = function(it, tag, stat) {
  if (it && !has$a(it = stat ? it : it.prototype, TAG$2))
    def$1(it, TAG$2, { configurable: true, value: tag });
};
var _wksExt = {};
_wksExt.f = _wks.exports;
var global$h = _global.exports;
var core$3 = _core.exports;
var wksExt$1 = _wksExt;
var defineProperty2 = _objectDp.f;
var _wksDefine = function(name) {
  var $Symbol2 = core$3.Symbol || (core$3.Symbol = global$h.Symbol || {});
  if (name.charAt(0) != "_" && !(name in $Symbol2))
    defineProperty2($Symbol2, name, { value: wksExt$1.f(name) });
};
var toString$1 = {}.toString;
var _cof = function(it) {
  return toString$1.call(it).slice(8, -1);
};
var cof$7 = _cof;
var _iobject = Object("z").propertyIsEnumerable(0) ? Object : function(it) {
  return cof$7(it) == "String" ? it.split("") : Object(it);
};
var _defined = function(it) {
  if (it == void 0)
    throw TypeError("Can't call method on  " + it);
  return it;
};
var IObject$3 = _iobject;
var defined$9 = _defined;
var _toIobject = function(it) {
  return IObject$3(defined$9(it));
};
var ceil = Math.ceil;
var floor$3 = Math.floor;
var _toInteger = function(it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor$3 : ceil)(it);
};
var toInteger$9 = _toInteger;
var min$2 = Math.min;
var _toLength = function(it) {
  return it > 0 ? min$2(toInteger$9(it), 9007199254740991) : 0;
};
var toInteger$8 = _toInteger;
var max$1 = Math.max;
var min$1 = Math.min;
var _toAbsoluteIndex = function(index, length) {
  index = toInteger$8(index);
  return index < 0 ? max$1(index + length, 0) : min$1(index, length);
};
var toIObject$b = _toIobject;
var toLength$k = _toLength;
var toAbsoluteIndex$4 = _toAbsoluteIndex;
var _arrayIncludes = function(IS_INCLUDES) {
  return function($this, el, fromIndex) {
    var O = toIObject$b($this);
    var length = toLength$k(O.length);
    var index = toAbsoluteIndex$4(fromIndex, length);
    var value;
    if (IS_INCLUDES && el != el)
      while (length > index) {
        value = O[index++];
        if (value != value)
          return true;
      }
    else
      for (; length > index; index++)
        if (IS_INCLUDES || index in O) {
          if (O[index] === el)
            return IS_INCLUDES || index || 0;
        }
    return !IS_INCLUDES && -1;
  };
};
var shared$2 = _shared.exports("keys");
var uid$5 = _uid;
var _sharedKey = function(key) {
  return shared$2[key] || (shared$2[key] = uid$5(key));
};
var has$9 = _has;
var toIObject$a = _toIobject;
var arrayIndexOf$1 = _arrayIncludes(false);
var IE_PROTO$2 = _sharedKey("IE_PROTO");
var _objectKeysInternal = function(object, names) {
  var O = toIObject$a(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O)
    if (key != IE_PROTO$2)
      has$9(O, key) && result.push(key);
  while (names.length > i)
    if (has$9(O, key = names[i++])) {
      ~arrayIndexOf$1(result, key) || result.push(key);
    }
  return result;
};
var _enumBugKeys = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
var $keys$3 = _objectKeysInternal;
var enumBugKeys$1 = _enumBugKeys;
var _objectKeys = Object.keys || function keys(O) {
  return $keys$3(O, enumBugKeys$1);
};
var _objectGops = {};
_objectGops.f = Object.getOwnPropertySymbols;
var _objectPie = {};
_objectPie.f = {}.propertyIsEnumerable;
var getKeys$4 = _objectKeys;
var gOPS$2 = _objectGops;
var pIE$2 = _objectPie;
var _enumKeys = function(it) {
  var result = getKeys$4(it);
  var getSymbols = gOPS$2.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum2 = pIE$2.f;
    var i = 0;
    var key;
    while (symbols.length > i)
      if (isEnum2.call(it, key = symbols[i++]))
        result.push(key);
  }
  return result;
};
var cof$6 = _cof;
var _isArray = Array.isArray || function isArray(arg) {
  return cof$6(arg) == "Array";
};
var defined$8 = _defined;
var _toObject = function(it) {
  return Object(defined$8(it));
};
var dP$9 = _objectDp;
var anObject$B = _anObject;
var getKeys$3 = _objectKeys;
var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject$B(O);
  var keys2 = getKeys$3(Properties);
  var length = keys2.length;
  var i = 0;
  var P;
  while (length > i)
    dP$9.f(O, P = keys2[i++], Properties[P]);
  return O;
};
var document$1 = _global.exports.document;
var _html = document$1 && document$1.documentElement;
var anObject$A = _anObject;
var dPs = _objectDps;
var enumBugKeys = _enumBugKeys;
var IE_PROTO$1 = _sharedKey("IE_PROTO");
var Empty = function() {
};
var PROTOTYPE$2 = "prototype";
var createDict = function() {
  var iframe = _domCreate("iframe");
  var i = enumBugKeys.length;
  var lt = "<";
  var gt = ">";
  var iframeDocument;
  iframe.style.display = "none";
  _html.appendChild(iframe);
  iframe.src = "javascript:";
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + "script" + gt + "document.F=Object" + lt + "/script" + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--)
    delete createDict[PROTOTYPE$2][enumBugKeys[i]];
  return createDict();
};
var _objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE$2] = anObject$A(O);
    result = new Empty();
    Empty[PROTOTYPE$2] = null;
    result[IE_PROTO$1] = O;
  } else
    result = createDict();
  return Properties === void 0 ? result : dPs(result, Properties);
};
var _objectGopnExt = {};
var _objectGopn = {};
var $keys$2 = _objectKeysInternal;
var hiddenKeys = _enumBugKeys.concat("length", "prototype");
_objectGopn.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys$2(O, hiddenKeys);
};
var toIObject$9 = _toIobject;
var gOPN$5 = _objectGopn.f;
var toString2 = {}.toString;
var windowNames = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
var getWindowNames = function(it) {
  try {
    return gOPN$5(it);
  } catch (e) {
    return windowNames.slice();
  }
};
_objectGopnExt.f = function getOwnPropertyNames2(it) {
  return windowNames && toString2.call(it) == "[object Window]" ? getWindowNames(it) : gOPN$5(toIObject$9(it));
};
var _objectGopd = {};
var pIE$1 = _objectPie;
var createDesc$3 = _propertyDesc;
var toIObject$8 = _toIobject;
var toPrimitive$7 = _toPrimitive;
var has$8 = _has;
var IE8_DOM_DEFINE = _ie8DomDefine;
var gOPD$8 = Object.getOwnPropertyDescriptor;
_objectGopd.f = _descriptors ? gOPD$8 : function getOwnPropertyDescriptor(O, P) {
  O = toIObject$8(O);
  P = toPrimitive$7(P, true);
  if (IE8_DOM_DEFINE)
    try {
      return gOPD$8(O, P);
    } catch (e) {
    }
  if (has$8(O, P))
    return createDesc$3(!pIE$1.f.call(O, P), O[P]);
};
var global$g = _global.exports;
var has$7 = _has;
var DESCRIPTORS$5 = _descriptors;
var $export$22 = _export;
var redefine$6 = _redefine.exports;
var META = _meta.exports.KEY;
var $fails$2 = _fails;
var shared$1 = _shared.exports;
var setToStringTag$3 = _setToStringTag;
var uid$4 = _uid;
var wks$3 = _wks.exports;
var wksExt = _wksExt;
var wksDefine = _wksDefine;
var enumKeys = _enumKeys;
var isArray$3 = _isArray;
var anObject$z = _anObject;
var isObject$q = _isObject;
var toObject$h = _toObject;
var toIObject$7 = _toIobject;
var toPrimitive$6 = _toPrimitive;
var createDesc$2 = _propertyDesc;
var _create = _objectCreate;
var gOPNExt = _objectGopnExt;
var $GOPD$1 = _objectGopd;
var $GOPS = _objectGops;
var $DP$1 = _objectDp;
var $keys$1 = _objectKeys;
var gOPD$7 = $GOPD$1.f;
var dP$8 = $DP$1.f;
var gOPN$4 = gOPNExt.f;
var $Symbol = global$g.Symbol;
var $JSON = global$g.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE$1 = "prototype";
var HIDDEN = wks$3("_hidden");
var TO_PRIMITIVE$1 = wks$3("toPrimitive");
var isEnum$1 = {}.propertyIsEnumerable;
var SymbolRegistry = shared$1("symbol-registry");
var AllSymbols = shared$1("symbols");
var OPSymbols = shared$1("op-symbols");
var ObjectProto$1 = Object[PROTOTYPE$1];
var USE_NATIVE$1 = typeof $Symbol == "function" && !!$GOPS.f;
var QObject = global$g.QObject;
var setter = !QObject || !QObject[PROTOTYPE$1] || !QObject[PROTOTYPE$1].findChild;
var setSymbolDesc = DESCRIPTORS$5 && $fails$2(function() {
  return _create(dP$8({}, "a", {
    get: function() {
      return dP$8(this, "a", { value: 7 }).a;
    }
  })).a != 7;
}) ? function(it, key, D) {
  var protoDesc = gOPD$7(ObjectProto$1, key);
  if (protoDesc)
    delete ObjectProto$1[key];
  dP$8(it, key, D);
  if (protoDesc && it !== ObjectProto$1)
    dP$8(ObjectProto$1, key, protoDesc);
} : dP$8;
var wrap$1 = function(tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE$1]);
  sym._k = tag;
  return sym;
};
var isSymbol$1 = USE_NATIVE$1 && typeof $Symbol.iterator == "symbol" ? function(it) {
  return typeof it == "symbol";
} : function(it) {
  return it instanceof $Symbol;
};
var $defineProperty$3 = function defineProperty3(it, key, D) {
  if (it === ObjectProto$1)
    $defineProperty$3(OPSymbols, key, D);
  anObject$z(it);
  key = toPrimitive$6(key, true);
  anObject$z(D);
  if (has$7(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has$7(it, HIDDEN))
        dP$8(it, HIDDEN, createDesc$2(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has$7(it, HIDDEN) && it[HIDDEN][key])
        it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc$2(0, false) });
    }
    return setSymbolDesc(it, key, D);
  }
  return dP$8(it, key, D);
};
var $defineProperties = function defineProperties2(it, P) {
  anObject$z(it);
  var keys2 = enumKeys(P = toIObject$7(P));
  var i = 0;
  var l2 = keys2.length;
  var key;
  while (l2 > i)
    $defineProperty$3(it, key = keys2[i++], P[key]);
  return it;
};
var $create = function create2(it, P) {
  return P === void 0 ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum$1.call(this, key = toPrimitive$6(key, true));
  if (this === ObjectProto$1 && has$7(AllSymbols, key) && !has$7(OPSymbols, key))
    return false;
  return E || !has$7(this, key) || !has$7(AllSymbols, key) || has$7(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor$1 = function getOwnPropertyDescriptor2(it, key) {
  it = toIObject$7(it);
  key = toPrimitive$6(key, true);
  if (it === ObjectProto$1 && has$7(AllSymbols, key) && !has$7(OPSymbols, key))
    return;
  var D = gOPD$7(it, key);
  if (D && has$7(AllSymbols, key) && !(has$7(it, HIDDEN) && it[HIDDEN][key]))
    D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames3(it) {
  var names = gOPN$4(toIObject$7(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has$7(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)
      result.push(key);
  }
  return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto$1;
  var names = gOPN$4(IS_OP ? OPSymbols : toIObject$7(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has$7(AllSymbols, key = names[i++]) && (IS_OP ? has$7(ObjectProto$1, key) : true))
      result.push(AllSymbols[key]);
  }
  return result;
};
if (!USE_NATIVE$1) {
  $Symbol = function Symbol2() {
    if (this instanceof $Symbol)
      throw TypeError("Symbol is not a constructor!");
    var tag = uid$4(arguments.length > 0 ? arguments[0] : void 0);
    var $set = function(value) {
      if (this === ObjectProto$1)
        $set.call(OPSymbols, value);
      if (has$7(this, HIDDEN) && has$7(this[HIDDEN], tag))
        this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc$2(1, value));
    };
    if (DESCRIPTORS$5 && setter)
      setSymbolDesc(ObjectProto$1, tag, { configurable: true, set: $set });
    return wrap$1(tag);
  };
  redefine$6($Symbol[PROTOTYPE$1], "toString", function toString3() {
    return this._k;
  });
  $GOPD$1.f = $getOwnPropertyDescriptor$1;
  $DP$1.f = $defineProperty$3;
  _objectGopn.f = gOPNExt.f = $getOwnPropertyNames;
  _objectPie.f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;
  if (DESCRIPTORS$5 && !_library) {
    redefine$6(ObjectProto$1, "propertyIsEnumerable", $propertyIsEnumerable, true);
  }
  wksExt.f = function(name) {
    return wrap$1(wks$3(name));
  };
}
$export$22($export$22.G + $export$22.W + $export$22.F * !USE_NATIVE$1, { Symbol: $Symbol });
for (var es6Symbols = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), j$1 = 0; es6Symbols.length > j$1; )
  wks$3(es6Symbols[j$1++]);
for (var wellKnownSymbols = $keys$1(wks$3.store), k = 0; wellKnownSymbols.length > k; )
  wksDefine(wellKnownSymbols[k++]);
$export$22($export$22.S + $export$22.F * !USE_NATIVE$1, "Symbol", {
  "for": function(key) {
    return has$7(SymbolRegistry, key += "") ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
  },
  keyFor: function keyFor(sym) {
    if (!isSymbol$1(sym))
      throw TypeError(sym + " is not a symbol!");
    for (var key in SymbolRegistry)
      if (SymbolRegistry[key] === sym)
        return key;
  },
  useSetter: function() {
    setter = true;
  },
  useSimple: function() {
    setter = false;
  }
});
$export$22($export$22.S + $export$22.F * !USE_NATIVE$1, "Object", {
  create: $create,
  defineProperty: $defineProperty$3,
  defineProperties: $defineProperties,
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor$1,
  getOwnPropertyNames: $getOwnPropertyNames,
  getOwnPropertySymbols: $getOwnPropertySymbols
});
var FAILS_ON_PRIMITIVES = $fails$2(function() {
  $GOPS.f(1);
});
$export$22($export$22.S + $export$22.F * FAILS_ON_PRIMITIVES, "Object", {
  getOwnPropertySymbols: function getOwnPropertySymbols2(it) {
    return $GOPS.f(toObject$h(it));
  }
});
$JSON && $export$22($export$22.S + $export$22.F * (!USE_NATIVE$1 || $fails$2(function() {
  var S = $Symbol();
  return _stringify([S]) != "[null]" || _stringify({ a: S }) != "{}" || _stringify(Object(S)) != "{}";
})), "JSON", {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer2, $replacer;
    while (arguments.length > i)
      args.push(arguments[i++]);
    $replacer = replacer2 = args[1];
    if (!isObject$q(replacer2) && it === void 0 || isSymbol$1(it))
      return;
    if (!isArray$3(replacer2))
      replacer2 = function(key, value) {
        if (typeof $replacer == "function")
          value = $replacer.call(this, key, value);
        if (!isSymbol$1(value))
          return value;
      };
    args[1] = replacer2;
    return _stringify.apply($JSON, args);
  }
});
$Symbol[PROTOTYPE$1][TO_PRIMITIVE$1] || _hide($Symbol[PROTOTYPE$1], TO_PRIMITIVE$1, $Symbol[PROTOTYPE$1].valueOf);
setToStringTag$3($Symbol, "Symbol");
setToStringTag$3(Math, "Math", true);
setToStringTag$3(global$g.JSON, "JSON", true);
var $export$21 = _export;
$export$21($export$21.S, "Object", { create: _objectCreate });
var $export$20 = _export;
$export$20($export$20.S + $export$20.F * !_descriptors, "Object", { defineProperty: _objectDp.f });
var $export$1$ = _export;
$export$1$($export$1$.S + $export$1$.F * !_descriptors, "Object", { defineProperties: _objectDps });
var $export$1_ = _export;
var core$2 = _core.exports;
var fails$b = _fails;
var _objectSap = function(KEY2, exec) {
  var fn = (core$2.Object || {})[KEY2] || Object[KEY2];
  var exp2 = {};
  exp2[KEY2] = exec(fn);
  $export$1_($export$1_.S + $export$1_.F * fails$b(function() {
    fn(1);
  }), "Object", exp2);
};
var toIObject$6 = _toIobject;
var $getOwnPropertyDescriptor = _objectGopd.f;
_objectSap("getOwnPropertyDescriptor", function() {
  return function getOwnPropertyDescriptor5(it, key) {
    return $getOwnPropertyDescriptor(toIObject$6(it), key);
  };
});
var has$6 = _has;
var toObject$g = _toObject;
var IE_PROTO = _sharedKey("IE_PROTO");
var ObjectProto = Object.prototype;
var _objectGpo = Object.getPrototypeOf || function(O) {
  O = toObject$g(O);
  if (has$6(O, IE_PROTO))
    return O[IE_PROTO];
  if (typeof O.constructor == "function" && O instanceof O.constructor) {
    return O.constructor.prototype;
  }
  return O instanceof Object ? ObjectProto : null;
};
var toObject$f = _toObject;
var $getPrototypeOf = _objectGpo;
_objectSap("getPrototypeOf", function() {
  return function getPrototypeOf3(it) {
    return $getPrototypeOf(toObject$f(it));
  };
});
var toObject$e = _toObject;
var $keys = _objectKeys;
_objectSap("keys", function() {
  return function keys2(it) {
    return $keys(toObject$e(it));
  };
});
_objectSap("getOwnPropertyNames", function() {
  return _objectGopnExt.f;
});
var isObject$p = _isObject;
var meta$4 = _meta.exports.onFreeze;
_objectSap("freeze", function($freeze) {
  return function freeze(it) {
    return $freeze && isObject$p(it) ? $freeze(meta$4(it)) : it;
  };
});
var isObject$o = _isObject;
var meta$3 = _meta.exports.onFreeze;
_objectSap("seal", function($seal) {
  return function seal(it) {
    return $seal && isObject$o(it) ? $seal(meta$3(it)) : it;
  };
});
var isObject$n = _isObject;
var meta$2 = _meta.exports.onFreeze;
_objectSap("preventExtensions", function($preventExtensions2) {
  return function preventExtensions2(it) {
    return $preventExtensions2 && isObject$n(it) ? $preventExtensions2(meta$2(it)) : it;
  };
});
var isObject$m = _isObject;
_objectSap("isFrozen", function($isFrozen) {
  return function isFrozen(it) {
    return isObject$m(it) ? $isFrozen ? $isFrozen(it) : false : true;
  };
});
var isObject$l = _isObject;
_objectSap("isSealed", function($isSealed) {
  return function isSealed(it) {
    return isObject$l(it) ? $isSealed ? $isSealed(it) : false : true;
  };
});
var isObject$k = _isObject;
_objectSap("isExtensible", function($isExtensible2) {
  return function isExtensible3(it) {
    return isObject$k(it) ? $isExtensible2 ? $isExtensible2(it) : true : false;
  };
});
var DESCRIPTORS$4 = _descriptors;
var getKeys$2 = _objectKeys;
var gOPS$1 = _objectGops;
var pIE = _objectPie;
var toObject$d = _toObject;
var IObject$2 = _iobject;
var $assign = Object.assign;
var _objectAssign = !$assign || _fails(function() {
  var A = {};
  var B = {};
  var S = Symbol();
  var K = "abcdefghijklmnopqrst";
  A[S] = 7;
  K.split("").forEach(function(k) {
    B[k] = k;
  });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join("") != K;
}) ? function assign(target, source) {
  var T = toObject$d(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS$1.f;
  var isEnum2 = pIE.f;
  while (aLen > index) {
    var S = IObject$2(arguments[index++]);
    var keys2 = getSymbols ? getKeys$2(S).concat(getSymbols(S)) : getKeys$2(S);
    var length = keys2.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys2[j++];
      if (!DESCRIPTORS$4 || isEnum2.call(S, key))
        T[key] = S[key];
    }
  }
  return T;
} : $assign;
var $export$1Z = _export;
$export$1Z($export$1Z.S + $export$1Z.F, "Object", { assign: _objectAssign });
var _sameValue = Object.is || function is2(x, y) {
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};
var $export$1Y = _export;
$export$1Y($export$1Y.S, "Object", { is: _sameValue });
var isObject$j = _isObject;
var anObject$y = _anObject;
var check = function(O, proto) {
  anObject$y(O);
  if (!isObject$j(proto) && proto !== null)
    throw TypeError(proto + ": can't set as prototype!");
};
var _setProto = {
  set: Object.setPrototypeOf || ("__proto__" in {} ? function(test2, buggy, set4) {
    try {
      set4 = _ctx(Function.call, _objectGopd.f(Object.prototype, "__proto__").set, 2);
      set4(test2, []);
      buggy = !(test2 instanceof Array);
    } catch (e) {
      buggy = true;
    }
    return function setPrototypeOf3(O, proto) {
      check(O, proto);
      if (buggy)
        O.__proto__ = proto;
      else
        set4(O, proto);
      return O;
    };
  }({}, false) : void 0),
  check
};
var $export$1X = _export;
$export$1X($export$1X.S, "Object", { setPrototypeOf: _setProto.set });
var cof$5 = _cof;
var TAG$1 = _wks.exports("toStringTag");
var ARG = cof$5(function() {
  return arguments;
}()) == "Arguments";
var tryGet = function(it, key) {
  try {
    return it[key];
  } catch (e) {
  }
};
var _classof = function(it) {
  var O, T, B;
  return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (T = tryGet(O = Object(it), TAG$1)) == "string" ? T : ARG ? cof$5(O) : (B = cof$5(O)) == "Object" && typeof O.callee == "function" ? "Arguments" : B;
};
var classof$4 = _classof;
var test$1 = {};
test$1[_wks.exports("toStringTag")] = "z";
if (test$1 + "" != "[object z]") {
  _redefine.exports(Object.prototype, "toString", function toString3() {
    return "[object " + classof$4(this) + "]";
  }, true);
}
var _invoke = function(fn, args, that) {
  var un = that === void 0;
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
var aFunction$d = _aFunction;
var isObject$i = _isObject;
var invoke$1 = _invoke;
var arraySlice$2 = [].slice;
var factories = {};
var construct = function(F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++)
      n[i] = "a[" + i + "]";
    factories[len] = Function("F,a", "return new F(" + n.join(",") + ")");
  }
  return factories[len](F, args);
};
var _bind = Function.bind || function bind(that) {
  var fn = aFunction$d(this);
  var partArgs = arraySlice$2.call(arguments, 1);
  var bound = function() {
    var args = partArgs.concat(arraySlice$2.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke$1(fn, args, that);
  };
  if (isObject$i(fn.prototype))
    bound.prototype = fn.prototype;
  return bound;
};
var $export$1W = _export;
$export$1W($export$1W.P, "Function", { bind: _bind });
var dP$7 = _objectDp.f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME$1 = "name";
NAME$1 in FProto || _descriptors && dP$7(FProto, NAME$1, {
  configurable: true,
  get: function() {
    try {
      return ("" + this).match(nameRE)[1];
    } catch (e) {
      return "";
    }
  }
});
var isObject$h = _isObject;
var getPrototypeOf$9 = _objectGpo;
var HAS_INSTANCE = _wks.exports("hasInstance");
var FunctionProto = Function.prototype;
if (!(HAS_INSTANCE in FunctionProto))
  _objectDp.f(FunctionProto, HAS_INSTANCE, { value: function(O) {
    if (typeof this != "function" || !isObject$h(O))
      return false;
    if (!isObject$h(this.prototype))
      return O instanceof this;
    while (O = getPrototypeOf$9(O))
      if (this.prototype === O)
        return true;
    return false;
  } });
var _stringWs = "	\n\v\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";
var $export$1V = _export;
var defined$7 = _defined;
var fails$a = _fails;
var spaces = _stringWs;
var space = "[" + spaces + "]";
var non = "\u200B\x85";
var ltrim = RegExp("^" + space + space + "*");
var rtrim = RegExp(space + space + "*$");
var exporter = function(KEY2, exec, ALIAS) {
  var exp2 = {};
  var FORCE = fails$a(function() {
    return !!spaces[KEY2]() || non[KEY2]() != non;
  });
  var fn = exp2[KEY2] = FORCE ? exec(trim) : spaces[KEY2];
  if (ALIAS)
    exp2[ALIAS] = fn;
  $export$1V($export$1V.P + $export$1V.F * FORCE, "String", exp2);
};
var trim = exporter.trim = function(string, TYPE) {
  string = String(defined$7(string));
  if (TYPE & 1)
    string = string.replace(ltrim, "");
  if (TYPE & 2)
    string = string.replace(rtrim, "");
  return string;
};
var _stringTrim = exporter;
var $parseInt$2 = _global.exports.parseInt;
var $trim$2 = _stringTrim.trim;
var ws = _stringWs;
var hex = /^[-+]?0[xX]/;
var _parseInt = $parseInt$2(ws + "08") !== 8 || $parseInt$2(ws + "0x16") !== 22 ? function parseInt2(str, radix) {
  var string = $trim$2(String(str), 3);
  return $parseInt$2(string, radix >>> 0 || (hex.test(string) ? 16 : 10));
} : $parseInt$2;
var $export$1U = _export;
var $parseInt$1 = _parseInt;
$export$1U($export$1U.G + $export$1U.F * (parseInt != $parseInt$1), { parseInt: $parseInt$1 });
var $parseFloat$2 = _global.exports.parseFloat;
var $trim$1 = _stringTrim.trim;
var _parseFloat = 1 / $parseFloat$2(_stringWs + "-0") !== -Infinity ? function parseFloat2(str) {
  var string = $trim$1(String(str), 3);
  var result = $parseFloat$2(string);
  return result === 0 && string.charAt(0) == "-" ? -0 : result;
} : $parseFloat$2;
var $export$1T = _export;
var $parseFloat$1 = _parseFloat;
$export$1T($export$1T.G + $export$1T.F * (parseFloat != $parseFloat$1), { parseFloat: $parseFloat$1 });
var isObject$g = _isObject;
var setPrototypeOf = _setProto.set;
var _inheritIfRequired = function(that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == "function" && (P = S.prototype) !== C.prototype && isObject$g(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  }
  return that;
};
var global$f = _global.exports;
var has$5 = _has;
var cof$4 = _cof;
var inheritIfRequired$2 = _inheritIfRequired;
var toPrimitive$5 = _toPrimitive;
var fails$9 = _fails;
var gOPN$3 = _objectGopn.f;
var gOPD$6 = _objectGopd.f;
var dP$6 = _objectDp.f;
var $trim = _stringTrim.trim;
var NUMBER = "Number";
var $Number = global$f[NUMBER];
var Base$1 = $Number;
var proto$4 = $Number.prototype;
var BROKEN_COF = cof$4(_objectCreate(proto$4)) == NUMBER;
var TRIM = "trim" in String.prototype;
var toNumber = function(argument) {
  var it = toPrimitive$5(argument, false);
  if (typeof it == "string" && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120)
        return NaN;
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66:
        case 98:
          radix = 2;
          maxCode = 49;
          break;
        case 79:
        case 111:
          radix = 8;
          maxCode = 55;
          break;
        default:
          return +it;
      }
      for (var digits = it.slice(2), i = 0, l2 = digits.length, code; i < l2; i++) {
        code = digits.charCodeAt(i);
        if (code < 48 || code > maxCode)
          return NaN;
      }
      return parseInt(digits, radix);
    }
  }
  return +it;
};
if (!$Number(" 0o1") || !$Number("0b1") || $Number("+0x1")) {
  $Number = function Number2(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number && (BROKEN_COF ? fails$9(function() {
      proto$4.valueOf.call(that);
    }) : cof$4(that) != NUMBER) ? inheritIfRequired$2(new Base$1(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys$1 = _descriptors ? gOPN$3(Base$1) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), j = 0, key$1; keys$1.length > j; j++) {
    if (has$5(Base$1, key$1 = keys$1[j]) && !has$5($Number, key$1)) {
      dP$6($Number, key$1, gOPD$6(Base$1, key$1));
    }
  }
  $Number.prototype = proto$4;
  proto$4.constructor = $Number;
  _redefine.exports(global$f, NUMBER, $Number);
}
var cof$3 = _cof;
var _aNumberValue = function(it, msg) {
  if (typeof it != "number" && cof$3(it) != "Number")
    throw TypeError(msg);
  return +it;
};
var toInteger$7 = _toInteger;
var defined$6 = _defined;
var _stringRepeat = function repeat(count) {
  var str = String(defined$6(this));
  var res = "";
  var n = toInteger$7(count);
  if (n < 0 || n == Infinity)
    throw RangeError("Count can't be negative");
  for (; n > 0; (n >>>= 1) && (str += str))
    if (n & 1)
      res += str;
  return res;
};
var $export$1S = _export;
var toInteger$6 = _toInteger;
var aNumberValue$1 = _aNumberValue;
var repeat$1 = _stringRepeat;
var $toFixed = 1 .toFixed;
var floor$2 = Math.floor;
var data = [0, 0, 0, 0, 0, 0];
var ERROR = "Number.toFixed: incorrect invocation!";
var ZERO = "0";
var multiply = function(n, c) {
  var i = -1;
  var c2 = c;
  while (++i < 6) {
    c2 += n * data[i];
    data[i] = c2 % 1e7;
    c2 = floor$2(c2 / 1e7);
  }
};
var divide = function(n) {
  var i = 6;
  var c = 0;
  while (--i >= 0) {
    c += data[i];
    data[i] = floor$2(c / n);
    c = c % n * 1e7;
  }
};
var numToString = function() {
  var i = 6;
  var s = "";
  while (--i >= 0) {
    if (s !== "" || i === 0 || data[i] !== 0) {
      var t = String(data[i]);
      s = s === "" ? t : s + repeat$1.call(ZERO, 7 - t.length) + t;
    }
  }
  return s;
};
var pow$1 = function(x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow$1(x, n - 1, acc * x) : pow$1(x * x, n / 2, acc);
};
var log = function(x) {
  var n = 0;
  var x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  }
  return n;
};
$export$1S($export$1S.P + $export$1S.F * (!!$toFixed && (8e-5 .toFixed(3) !== "0.000" || 0.9 .toFixed(0) !== "1" || 1.255 .toFixed(2) !== "1.25" || 1000000000000000100 .toFixed(0) !== "1000000000000000128") || !_fails(function() {
  $toFixed.call({});
})), "Number", {
  toFixed: function toFixed(fractionDigits) {
    var x = aNumberValue$1(this, ERROR);
    var f = toInteger$6(fractionDigits);
    var s = "";
    var m = ZERO;
    var e, z, j, k;
    if (f < 0 || f > 20)
      throw RangeError(ERROR);
    if (x != x)
      return "NaN";
    if (x <= -1e21 || x >= 1e21)
      return String(x);
    if (x < 0) {
      s = "-";
      x = -x;
    }
    if (x > 1e-21) {
      e = log(x * pow$1(2, 69, 1)) - 69;
      z = e < 0 ? x * pow$1(2, -e, 1) : x / pow$1(2, e, 1);
      z *= 4503599627370496;
      e = 52 - e;
      if (e > 0) {
        multiply(0, z);
        j = f;
        while (j >= 7) {
          multiply(1e7, 0);
          j -= 7;
        }
        multiply(pow$1(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(1 << 23);
          j -= 23;
        }
        divide(1 << j);
        multiply(1, 1);
        divide(2);
        m = numToString();
      } else {
        multiply(0, z);
        multiply(1 << -e, 0);
        m = numToString() + repeat$1.call(ZERO, f);
      }
    }
    if (f > 0) {
      k = m.length;
      m = s + (k <= f ? "0." + repeat$1.call(ZERO, f - k) + m : m.slice(0, k - f) + "." + m.slice(k - f));
    } else {
      m = s + m;
    }
    return m;
  }
});
var $export$1R = _export;
var $fails$1 = _fails;
var aNumberValue = _aNumberValue;
var $toPrecision = 1 .toPrecision;
$export$1R($export$1R.P + $export$1R.F * ($fails$1(function() {
  return $toPrecision.call(1, void 0) !== "1";
}) || !$fails$1(function() {
  $toPrecision.call({});
})), "Number", {
  toPrecision: function toPrecision(precision) {
    var that = aNumberValue(this, "Number#toPrecision: incorrect invocation!");
    return precision === void 0 ? $toPrecision.call(that) : $toPrecision.call(that, precision);
  }
});
var $export$1Q = _export;
$export$1Q($export$1Q.S, "Number", { EPSILON: Math.pow(2, -52) });
var $export$1P = _export;
var _isFinite = _global.exports.isFinite;
$export$1P($export$1P.S, "Number", {
  isFinite: function isFinite2(it) {
    return typeof it == "number" && _isFinite(it);
  }
});
var isObject$f = _isObject;
var floor$1 = Math.floor;
var _isInteger = function isInteger(it) {
  return !isObject$f(it) && isFinite(it) && floor$1(it) === it;
};
var $export$1O = _export;
$export$1O($export$1O.S, "Number", { isInteger: _isInteger });
var $export$1N = _export;
$export$1N($export$1N.S, "Number", {
  isNaN: function isNaN2(number) {
    return number != number;
  }
});
var $export$1M = _export;
var isInteger2 = _isInteger;
var abs$1 = Math.abs;
$export$1M($export$1M.S, "Number", {
  isSafeInteger: function isSafeInteger(number) {
    return isInteger2(number) && abs$1(number) <= 9007199254740991;
  }
});
var $export$1L = _export;
$export$1L($export$1L.S, "Number", { MAX_SAFE_INTEGER: 9007199254740991 });
var $export$1K = _export;
$export$1K($export$1K.S, "Number", { MIN_SAFE_INTEGER: -9007199254740991 });
var $export$1J = _export;
var $parseFloat = _parseFloat;
$export$1J($export$1J.S + $export$1J.F * (Number.parseFloat != $parseFloat), "Number", { parseFloat: $parseFloat });
var $export$1I = _export;
var $parseInt = _parseInt;
$export$1I($export$1I.S + $export$1I.F * (Number.parseInt != $parseInt), "Number", { parseInt: $parseInt });
var _mathLog1p = Math.log1p || function log1p(x) {
  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
};
var $export$1H = _export;
var log1p2 = _mathLog1p;
var sqrt = Math.sqrt;
var $acosh = Math.acosh;
$export$1H($export$1H.S + $export$1H.F * !($acosh && Math.floor($acosh(Number.MAX_VALUE)) == 710 && $acosh(Infinity) == Infinity), "Math", {
  acosh: function acosh(x) {
    return (x = +x) < 1 ? NaN : x > 9490626562425156e-8 ? Math.log(x) + Math.LN2 : log1p2(x - 1 + sqrt(x - 1) * sqrt(x + 1));
  }
});
var $export$1G = _export;
var $asinh = Math.asinh;
function asinh(x) {
  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
}
$export$1G($export$1G.S + $export$1G.F * !($asinh && 1 / $asinh(0) > 0), "Math", { asinh });
var $export$1F = _export;
var $atanh = Math.atanh;
$export$1F($export$1F.S + $export$1F.F * !($atanh && 1 / $atanh(-0) < 0), "Math", {
  atanh: function atanh(x) {
    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
  }
});
var _mathSign = Math.sign || function sign(x) {
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};
var $export$1E = _export;
var sign$1 = _mathSign;
$export$1E($export$1E.S, "Math", {
  cbrt: function cbrt(x) {
    return sign$1(x = +x) * Math.pow(Math.abs(x), 1 / 3);
  }
});
var $export$1D = _export;
$export$1D($export$1D.S, "Math", {
  clz32: function clz32(x) {
    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
  }
});
var $export$1C = _export;
var exp$3 = Math.exp;
$export$1C($export$1C.S, "Math", {
  cosh: function cosh(x) {
    return (exp$3(x = +x) + exp$3(-x)) / 2;
  }
});
var $expm1$1 = Math.expm1;
var _mathExpm1 = !$expm1$1 || $expm1$1(10) > 22025.465794806718 || $expm1$1(10) < 22025.465794806718 || $expm1$1(-2e-17) != -2e-17 ? function expm1(x) {
  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
} : $expm1$1;
var $export$1B = _export;
var $expm1 = _mathExpm1;
$export$1B($export$1B.S + $export$1B.F * ($expm1 != Math.expm1), "Math", { expm1: $expm1 });
var sign2 = _mathSign;
var pow = Math.pow;
var EPSILON = pow(2, -52);
var EPSILON32 = pow(2, -23);
var MAX32 = pow(2, 127) * (2 - EPSILON32);
var MIN32 = pow(2, -126);
var roundTiesToEven = function(n) {
  return n + 1 / EPSILON - 1 / EPSILON;
};
var _mathFround = Math.fround || function fround(x) {
  var $abs = Math.abs(x);
  var $sign = sign2(x);
  var a, result;
  if ($abs < MIN32)
    return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
  a = (1 + EPSILON32 / EPSILON) * $abs;
  result = a - (a - $abs);
  if (result > MAX32 || result != result)
    return $sign * Infinity;
  return $sign * result;
};
var $export$1A = _export;
$export$1A($export$1A.S, "Math", { fround: _mathFround });
var $export$1z = _export;
var abs = Math.abs;
$export$1z($export$1z.S, "Math", {
  hypot: function hypot(value1, value2) {
    var sum = 0;
    var i = 0;
    var aLen = arguments.length;
    var larg = 0;
    var arg, div;
    while (i < aLen) {
      arg = abs(arguments[i++]);
      if (larg < arg) {
        div = larg / arg;
        sum = sum * div * div + 1;
        larg = arg;
      } else if (arg > 0) {
        div = arg / larg;
        sum += div * div;
      } else
        sum += arg;
    }
    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
  }
});
var $export$1y = _export;
var $imul = Math.imul;
$export$1y($export$1y.S + $export$1y.F * _fails(function() {
  return $imul(4294967295, 5) != -5 || $imul.length != 2;
}), "Math", {
  imul: function imul(x, y) {
    var UINT16 = 65535;
    var xn = +x;
    var yn = +y;
    var xl = UINT16 & xn;
    var yl = UINT16 & yn;
    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
  }
});
var $export$1x = _export;
$export$1x($export$1x.S, "Math", {
  log10: function log10(x) {
    return Math.log(x) * Math.LOG10E;
  }
});
var $export$1w = _export;
$export$1w($export$1w.S, "Math", { log1p: _mathLog1p });
var $export$1v = _export;
$export$1v($export$1v.S, "Math", {
  log2: function log2(x) {
    return Math.log(x) / Math.LN2;
  }
});
var $export$1u = _export;
$export$1u($export$1u.S, "Math", { sign: _mathSign });
var $export$1t = _export;
var expm1$1 = _mathExpm1;
var exp$2 = Math.exp;
$export$1t($export$1t.S + $export$1t.F * _fails(function() {
  return !Math.sinh(-2e-17) != -2e-17;
}), "Math", {
  sinh: function sinh(x) {
    return Math.abs(x = +x) < 1 ? (expm1$1(x) - expm1$1(-x)) / 2 : (exp$2(x - 1) - exp$2(-x - 1)) * (Math.E / 2);
  }
});
var $export$1s = _export;
var expm12 = _mathExpm1;
var exp$1 = Math.exp;
$export$1s($export$1s.S, "Math", {
  tanh: function tanh(x) {
    var a = expm12(x = +x);
    var b = expm12(-x);
    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp$1(x) + exp$1(-x));
  }
});
var $export$1r = _export;
$export$1r($export$1r.S, "Math", {
  trunc: function trunc(it) {
    return (it > 0 ? Math.floor : Math.ceil)(it);
  }
});
var $export$1q = _export;
var toAbsoluteIndex$3 = _toAbsoluteIndex;
var fromCharCode = String.fromCharCode;
var $fromCodePoint = String.fromCodePoint;
$export$1q($export$1q.S + $export$1q.F * (!!$fromCodePoint && $fromCodePoint.length != 1), "String", {
  fromCodePoint: function fromCodePoint(x) {
    var res = [];
    var aLen = arguments.length;
    var i = 0;
    var code;
    while (aLen > i) {
      code = +arguments[i++];
      if (toAbsoluteIndex$3(code, 1114111) !== code)
        throw RangeError(code + " is not a valid code point");
      res.push(
        code < 65536 ? fromCharCode(code) : fromCharCode(((code -= 65536) >> 10) + 55296, code % 1024 + 56320)
      );
    }
    return res.join("");
  }
});
var $export$1p = _export;
var toIObject$5 = _toIobject;
var toLength$j = _toLength;
$export$1p($export$1p.S, "String", {
  raw: function raw(callSite) {
    var tpl = toIObject$5(callSite.raw);
    var len = toLength$j(tpl.length);
    var aLen = arguments.length;
    var res = [];
    var i = 0;
    while (len > i) {
      res.push(String(tpl[i++]));
      if (i < aLen)
        res.push(String(arguments[i]));
    }
    return res.join("");
  }
});
_stringTrim("trim", function($trim2) {
  return function trim2() {
    return $trim2(this, 3);
  };
});
var toInteger$5 = _toInteger;
var defined$5 = _defined;
var _stringAt = function(TO_STRING2) {
  return function(that, pos) {
    var s = String(defined$5(that));
    var i = toInteger$5(pos);
    var l2 = s.length;
    var a, b;
    if (i < 0 || i >= l2)
      return TO_STRING2 ? "" : void 0;
    a = s.charCodeAt(i);
    return a < 55296 || a > 56319 || i + 1 === l2 || (b = s.charCodeAt(i + 1)) < 56320 || b > 57343 ? TO_STRING2 ? s.charAt(i) : a : TO_STRING2 ? s.slice(i, i + 2) : (a - 55296 << 10) + (b - 56320) + 65536;
  };
};
var _iterators = {};
var create$3 = _objectCreate;
var descriptor = _propertyDesc;
var setToStringTag$2 = _setToStringTag;
var IteratorPrototype = {};
_hide(IteratorPrototype, _wks.exports("iterator"), function() {
  return this;
});
var _iterCreate = function(Constructor, NAME, next3) {
  Constructor.prototype = create$3(IteratorPrototype, { next: descriptor(1, next3) });
  setToStringTag$2(Constructor, NAME + " Iterator");
};
var $export$1o = _export;
var redefine$5 = _redefine.exports;
var hide$5 = _hide;
var Iterators$5 = _iterators;
var $iterCreate = _iterCreate;
var setToStringTag$1 = _setToStringTag;
var getPrototypeOf$8 = _objectGpo;
var ITERATOR$4 = _wks.exports("iterator");
var BUGGY = !([].keys && "next" in [].keys());
var FF_ITERATOR = "@@iterator";
var KEYS = "keys";
var VALUES = "values";
var returnThis = function() {
  return this;
};
var _iterDefine = function(Base2, NAME, Constructor, next3, DEFAULT, IS_SET, FORCED2) {
  $iterCreate(Constructor, NAME, next3);
  var getMethod2 = function(kind) {
    if (!BUGGY && kind in proto)
      return proto[kind];
    switch (kind) {
      case KEYS:
        return function keys2() {
          return new Constructor(this, kind);
        };
      case VALUES:
        return function values2() {
          return new Constructor(this, kind);
        };
    }
    return function entries2() {
      return new Constructor(this, kind);
    };
  };
  var TAG = NAME + " Iterator";
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base2.prototype;
  var $native2 = proto[ITERATOR$4] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native2 || getMethod2(DEFAULT);
  var $entries2 = DEFAULT ? !DEF_VALUES ? $default : getMethod2("entries") : void 0;
  var $anyNative = NAME == "Array" ? proto.entries || $native2 : $native2;
  var methods2, key, IteratorPrototype2;
  if ($anyNative) {
    IteratorPrototype2 = getPrototypeOf$8($anyNative.call(new Base2()));
    if (IteratorPrototype2 !== Object.prototype && IteratorPrototype2.next) {
      setToStringTag$1(IteratorPrototype2, TAG, true);
      if (typeof IteratorPrototype2[ITERATOR$4] != "function")
        hide$5(IteratorPrototype2, ITERATOR$4, returnThis);
    }
  }
  if (DEF_VALUES && $native2 && $native2.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values2() {
      return $native2.call(this);
    };
  }
  if (BUGGY || VALUES_BUG || !proto[ITERATOR$4]) {
    hide$5(proto, ITERATOR$4, $default);
  }
  Iterators$5[NAME] = $default;
  Iterators$5[TAG] = returnThis;
  if (DEFAULT) {
    methods2 = {
      values: DEF_VALUES ? $default : getMethod2(VALUES),
      keys: IS_SET ? $default : getMethod2(KEYS),
      entries: $entries2
    };
    if (FORCED2)
      for (key in methods2) {
        if (!(key in proto))
          redefine$5(proto, key, methods2[key]);
      }
    else
      $export$1o($export$1o.P + $export$1o.F * (BUGGY || VALUES_BUG), NAME, methods2);
  }
  return methods2;
};
var $at$2 = _stringAt(true);
_iterDefine(String, "String", function(iterated) {
  this._t = String(iterated);
  this._i = 0;
}, function() {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length)
    return { value: void 0, done: true };
  point = $at$2(O, index);
  this._i += point.length;
  return { value: point, done: false };
});
var $export$1n = _export;
var $at$1 = _stringAt(false);
$export$1n($export$1n.P, "String", {
  codePointAt: function codePointAt(pos) {
    return $at$1(this, pos);
  }
});
var isObject$e = _isObject;
var cof$2 = _cof;
var MATCH = _wks.exports("match");
var _isRegexp = function(it) {
  var isRegExp2;
  return isObject$e(it) && ((isRegExp2 = it[MATCH]) !== void 0 ? !!isRegExp2 : cof$2(it) == "RegExp");
};
var isRegExp$3 = _isRegexp;
var defined$4 = _defined;
var _stringContext = function(that, searchString, NAME) {
  if (isRegExp$3(searchString))
    throw TypeError("String#" + NAME + " doesn't accept regex!");
  return String(defined$4(that));
};
var _failsIsRegexp;
var hasRequired_failsIsRegexp;
function require_failsIsRegexp() {
  if (hasRequired_failsIsRegexp)
    return _failsIsRegexp;
  hasRequired_failsIsRegexp = 1;
  var MATCH2 = _wks.exports("match");
  _failsIsRegexp = function(KEY2) {
    var re = /./;
    try {
      "/./"[KEY2](re);
    } catch (e) {
      try {
        re[MATCH2] = false;
        return !"/./"[KEY2](re);
      } catch (f) {
      }
    }
    return true;
  };
  return _failsIsRegexp;
}
var $export$1m = _export;
var toLength$i = _toLength;
var context$2 = _stringContext;
var ENDS_WITH = "endsWith";
var $endsWith = ""[ENDS_WITH];
$export$1m($export$1m.P + $export$1m.F * require_failsIsRegexp()(ENDS_WITH), "String", {
  endsWith: function endsWith(searchString) {
    var that = context$2(this, searchString, ENDS_WITH);
    var endPosition = arguments.length > 1 ? arguments[1] : void 0;
    var len = toLength$i(that.length);
    var end = endPosition === void 0 ? len : Math.min(toLength$i(endPosition), len);
    var search = String(searchString);
    return $endsWith ? $endsWith.call(that, search, end) : that.slice(end - search.length, end) === search;
  }
});
var $export$1l = _export;
var context$1 = _stringContext;
var INCLUDES = "includes";
$export$1l($export$1l.P + $export$1l.F * require_failsIsRegexp()(INCLUDES), "String", {
  includes: function includes(searchString) {
    return !!~context$1(this, searchString, INCLUDES).indexOf(searchString, arguments.length > 1 ? arguments[1] : void 0);
  }
});
var $export$1k = _export;
$export$1k($export$1k.P, "String", {
  repeat: _stringRepeat
});
var $export$1j = _export;
var toLength$h = _toLength;
var context = _stringContext;
var STARTS_WITH = "startsWith";
var $startsWith = ""[STARTS_WITH];
$export$1j($export$1j.P + $export$1j.F * require_failsIsRegexp()(STARTS_WITH), "String", {
  startsWith: function startsWith(searchString) {
    var that = context(this, searchString, STARTS_WITH);
    var index = toLength$h(Math.min(arguments.length > 1 ? arguments[1] : void 0, that.length));
    var search = String(searchString);
    return $startsWith ? $startsWith.call(that, search, index) : that.slice(index, index + search.length) === search;
  }
});
var $export$1i = _export;
var fails$8 = _fails;
var defined$3 = _defined;
var quot = /"/g;
var createHTML = function(string, tag, attribute, value) {
  var S = String(defined$3(string));
  var p1 = "<" + tag;
  if (attribute !== "")
    p1 += " " + attribute + '="' + String(value).replace(quot, "&quot;") + '"';
  return p1 + ">" + S + "</" + tag + ">";
};
var _stringHtml = function(NAME, exec) {
  var O = {};
  O[NAME] = exec(createHTML);
  $export$1i($export$1i.P + $export$1i.F * fails$8(function() {
    var test2 = ""[NAME]('"');
    return test2 !== test2.toLowerCase() || test2.split('"').length > 3;
  }), "String", O);
};
_stringHtml("anchor", function(createHTML2) {
  return function anchor(name) {
    return createHTML2(this, "a", "name", name);
  };
});
_stringHtml("big", function(createHTML2) {
  return function big() {
    return createHTML2(this, "big", "", "");
  };
});
_stringHtml("blink", function(createHTML2) {
  return function blink() {
    return createHTML2(this, "blink", "", "");
  };
});
_stringHtml("bold", function(createHTML2) {
  return function bold() {
    return createHTML2(this, "b", "", "");
  };
});
_stringHtml("fixed", function(createHTML2) {
  return function fixed() {
    return createHTML2(this, "tt", "", "");
  };
});
_stringHtml("fontcolor", function(createHTML2) {
  return function fontcolor(color) {
    return createHTML2(this, "font", "color", color);
  };
});
_stringHtml("fontsize", function(createHTML2) {
  return function fontsize(size2) {
    return createHTML2(this, "font", "size", size2);
  };
});
_stringHtml("italics", function(createHTML2) {
  return function italics() {
    return createHTML2(this, "i", "", "");
  };
});
_stringHtml("link", function(createHTML2) {
  return function link(url) {
    return createHTML2(this, "a", "href", url);
  };
});
_stringHtml("small", function(createHTML2) {
  return function small() {
    return createHTML2(this, "small", "", "");
  };
});
_stringHtml("strike", function(createHTML2) {
  return function strike() {
    return createHTML2(this, "strike", "", "");
  };
});
_stringHtml("sub", function(createHTML2) {
  return function sub() {
    return createHTML2(this, "sub", "", "");
  };
});
_stringHtml("sup", function(createHTML2) {
  return function sup() {
    return createHTML2(this, "sup", "", "");
  };
});
var $export$1h = _export;
$export$1h($export$1h.S, "Date", { now: function() {
  return new Date().getTime();
} });
var $export$1g = _export;
var toObject$c = _toObject;
var toPrimitive$4 = _toPrimitive;
$export$1g($export$1g.P + $export$1g.F * _fails(function() {
  return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({ toISOString: function() {
    return 1;
  } }) !== 1;
}), "Date", {
  toJSON: function toJSON(key) {
    var O = toObject$c(this);
    var pv = toPrimitive$4(O);
    return typeof pv == "number" && !isFinite(pv) ? null : O.toISOString();
  }
});
var fails$7 = _fails;
var getTime$1 = Date.prototype.getTime;
var $toISOString = Date.prototype.toISOString;
var lz = function(num) {
  return num > 9 ? num : "0" + num;
};
var _dateToIsoString = fails$7(function() {
  return $toISOString.call(new Date(-5e13 - 1)) != "0385-07-25T07:06:39.999Z";
}) || !fails$7(function() {
  $toISOString.call(new Date(NaN));
}) ? function toISOString() {
  if (!isFinite(getTime$1.call(this)))
    throw RangeError("Invalid time value");
  var d = this;
  var y = d.getUTCFullYear();
  var m = d.getUTCMilliseconds();
  var s = y < 0 ? "-" : y > 9999 ? "+" : "";
  return s + ("00000" + Math.abs(y)).slice(s ? -6 : -4) + "-" + lz(d.getUTCMonth() + 1) + "-" + lz(d.getUTCDate()) + "T" + lz(d.getUTCHours()) + ":" + lz(d.getUTCMinutes()) + ":" + lz(d.getUTCSeconds()) + "." + (m > 99 ? m : "0" + lz(m)) + "Z";
} : $toISOString;
var $export$1f = _export;
var toISOString2 = _dateToIsoString;
$export$1f($export$1f.P + $export$1f.F * (Date.prototype.toISOString !== toISOString2), "Date", {
  toISOString: toISOString2
});
var DateProto = Date.prototype;
var INVALID_DATE = "Invalid Date";
var TO_STRING$1 = "toString";
var $toString$1 = DateProto[TO_STRING$1];
var getTime = DateProto.getTime;
if (new Date(NaN) + "" != INVALID_DATE) {
  _redefine.exports(DateProto, TO_STRING$1, function toString3() {
    var value = getTime.call(this);
    return value === value ? $toString$1.call(this) : INVALID_DATE;
  });
}
var _dateToPrimitive;
var hasRequired_dateToPrimitive;
function require_dateToPrimitive() {
  if (hasRequired_dateToPrimitive)
    return _dateToPrimitive;
  hasRequired_dateToPrimitive = 1;
  var anObject2 = _anObject;
  var toPrimitive2 = _toPrimitive;
  var NUMBER2 = "number";
  _dateToPrimitive = function(hint) {
    if (hint !== "string" && hint !== NUMBER2 && hint !== "default")
      throw TypeError("Incorrect hint");
    return toPrimitive2(anObject2(this), hint != NUMBER2);
  };
  return _dateToPrimitive;
}
var TO_PRIMITIVE = _wks.exports("toPrimitive");
var proto$3 = Date.prototype;
if (!(TO_PRIMITIVE in proto$3))
  _hide(proto$3, TO_PRIMITIVE, require_dateToPrimitive());
var $export$1e = _export;
$export$1e($export$1e.S, "Array", { isArray: _isArray });
var anObject$x = _anObject;
var _iterCall = function(iterator, fn, value, entries2) {
  try {
    return entries2 ? fn(anObject$x(value)[0], value[1]) : fn(value);
  } catch (e) {
    var ret = iterator["return"];
    if (ret !== void 0)
      anObject$x(ret.call(iterator));
    throw e;
  }
};
var Iterators$4 = _iterators;
var ITERATOR$3 = _wks.exports("iterator");
var ArrayProto$2 = Array.prototype;
var _isArrayIter = function(it) {
  return it !== void 0 && (Iterators$4.Array === it || ArrayProto$2[ITERATOR$3] === it);
};
var $defineProperty$2 = _objectDp;
var createDesc$1 = _propertyDesc;
var _createProperty = function(object, index, value) {
  if (index in object)
    $defineProperty$2.f(object, index, createDesc$1(0, value));
  else
    object[index] = value;
};
var classof$3 = _classof;
var ITERATOR$2 = _wks.exports("iterator");
var Iterators$3 = _iterators;
var core_getIteratorMethod = _core.exports.getIteratorMethod = function(it) {
  if (it != void 0)
    return it[ITERATOR$2] || it["@@iterator"] || Iterators$3[classof$3(it)];
};
var _iterDetect;
var hasRequired_iterDetect;
function require_iterDetect() {
  if (hasRequired_iterDetect)
    return _iterDetect;
  hasRequired_iterDetect = 1;
  var ITERATOR2 = _wks.exports("iterator");
  var SAFE_CLOSING = false;
  try {
    var riter = [7][ITERATOR2]();
    riter["return"] = function() {
      SAFE_CLOSING = true;
    };
    Array.from(riter, function() {
      throw 2;
    });
  } catch (e) {
  }
  _iterDetect = function(exec, skipClosing) {
    if (!skipClosing && !SAFE_CLOSING)
      return false;
    var safe = false;
    try {
      var arr = [7];
      var iter = arr[ITERATOR2]();
      iter.next = function() {
        return { done: safe = true };
      };
      arr[ITERATOR2] = function() {
        return iter;
      };
      exec(arr);
    } catch (e) {
    }
    return safe;
  };
  return _iterDetect;
}
var ctx$8 = _ctx;
var $export$1d = _export;
var toObject$b = _toObject;
var call$1 = _iterCall;
var isArrayIter$2 = _isArrayIter;
var toLength$g = _toLength;
var createProperty$2 = _createProperty;
var getIterFn$2 = core_getIteratorMethod;
$export$1d($export$1d.S + $export$1d.F * !require_iterDetect()(function(iter) {
  Array.from(iter);
}), "Array", {
  from: function from(arrayLike) {
    var O = toObject$b(arrayLike);
    var C = typeof this == "function" ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : void 0;
    var mapping = mapfn !== void 0;
    var index = 0;
    var iterFn = getIterFn$2(O);
    var length, result, step2, iterator;
    if (mapping)
      mapfn = ctx$8(mapfn, aLen > 2 ? arguments[2] : void 0, 2);
    if (iterFn != void 0 && !(C == Array && isArrayIter$2(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step2 = iterator.next()).done; index++) {
        createProperty$2(result, index, mapping ? call$1(iterator, mapfn, [step2.value, index], true) : step2.value);
      }
    } else {
      length = toLength$g(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty$2(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});
var $export$1c = _export;
var createProperty$1 = _createProperty;
$export$1c($export$1c.S + $export$1c.F * _fails(function() {
  function F() {
  }
  return !(Array.of.call(F) instanceof F);
}), "Array", {
  of: function of() {
    var index = 0;
    var aLen = arguments.length;
    var result = new (typeof this == "function" ? this : Array)(aLen);
    while (aLen > index)
      createProperty$1(result, index, arguments[index++]);
    result.length = aLen;
    return result;
  }
});
var fails$6 = _fails;
var _strictMethod = function(method, arg) {
  return !!method && fails$6(function() {
    arg ? method.call(null, function() {
    }, 1) : method.call(null);
  });
};
var $export$1b = _export;
var toIObject$4 = _toIobject;
var arrayJoin$1 = [].join;
$export$1b($export$1b.P + $export$1b.F * (_iobject != Object || !_strictMethod(arrayJoin$1)), "Array", {
  join: function join(separator) {
    return arrayJoin$1.call(toIObject$4(this), separator === void 0 ? "," : separator);
  }
});
var $export$1a = _export;
var html$1 = _html;
var cof$1 = _cof;
var toAbsoluteIndex$2 = _toAbsoluteIndex;
var toLength$f = _toLength;
var arraySlice$1 = [].slice;
$export$1a($export$1a.P + $export$1a.F * _fails(function() {
  if (html$1)
    arraySlice$1.call(html$1);
}), "Array", {
  slice: function slice(begin, end) {
    var len = toLength$f(this.length);
    var klass = cof$1(this);
    end = end === void 0 ? len : end;
    if (klass == "Array")
      return arraySlice$1.call(this, begin, end);
    var start = toAbsoluteIndex$2(begin, len);
    var upTo = toAbsoluteIndex$2(end, len);
    var size2 = toLength$f(upTo - start);
    var cloned = new Array(size2);
    var i = 0;
    for (; i < size2; i++)
      cloned[i] = klass == "String" ? this.charAt(start + i) : this[start + i];
    return cloned;
  }
});
var $export$19 = _export;
var aFunction$c = _aFunction;
var toObject$a = _toObject;
var fails$5 = _fails;
var $sort = [].sort;
var test = [1, 2, 3];
$export$19($export$19.P + $export$19.F * (fails$5(function() {
  test.sort(void 0);
}) || !fails$5(function() {
  test.sort(null);
}) || !_strictMethod($sort)), "Array", {
  sort: function sort(comparefn) {
    return comparefn === void 0 ? $sort.call(toObject$a(this)) : $sort.call(toObject$a(this), aFunction$c(comparefn));
  }
});
var isObject$d = _isObject;
var isArray$2 = _isArray;
var SPECIES$3 = _wks.exports("species");
var _arraySpeciesConstructor = function(original) {
  var C;
  if (isArray$2(original)) {
    C = original.constructor;
    if (typeof C == "function" && (C === Array || isArray$2(C.prototype)))
      C = void 0;
    if (isObject$d(C)) {
      C = C[SPECIES$3];
      if (C === null)
        C = void 0;
    }
  }
  return C === void 0 ? Array : C;
};
var speciesConstructor$5 = _arraySpeciesConstructor;
var _arraySpeciesCreate = function(original, length) {
  return new (speciesConstructor$5(original))(length);
};
var ctx$7 = _ctx;
var IObject$1 = _iobject;
var toObject$9 = _toObject;
var toLength$e = _toLength;
var asc = _arraySpeciesCreate;
var _arrayMethods = function(TYPE, $create2) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create4 = $create2 || asc;
  return function($this, callbackfn, that) {
    var O = toObject$9($this);
    var self2 = IObject$1(O);
    var f = ctx$7(callbackfn, that, 3);
    var length = toLength$e(self2.length);
    var index = 0;
    var result = IS_MAP ? create4($this, length) : IS_FILTER ? create4($this, 0) : void 0;
    var val, res;
    for (; length > index; index++)
      if (NO_HOLES || index in self2) {
        val = self2[index];
        res = f(val, index, O);
        if (TYPE) {
          if (IS_MAP)
            result[index] = res;
          else if (res)
            switch (TYPE) {
              case 3:
                return true;
              case 5:
                return val;
              case 6:
                return index;
              case 2:
                result.push(val);
            }
          else if (IS_EVERY)
            return false;
        }
      }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};
var $export$18 = _export;
var $forEach = _arrayMethods(0);
var STRICT = _strictMethod([].forEach, true);
$export$18($export$18.P + $export$18.F * !STRICT, "Array", {
  forEach: function forEach(callbackfn) {
    return $forEach(this, callbackfn, arguments[1]);
  }
});
var $export$17 = _export;
var $map$1 = _arrayMethods(1);
$export$17($export$17.P + $export$17.F * !_strictMethod([].map, true), "Array", {
  map: function map(callbackfn) {
    return $map$1(this, callbackfn, arguments[1]);
  }
});
var $export$16 = _export;
var $filter = _arrayMethods(2);
$export$16($export$16.P + $export$16.F * !_strictMethod([].filter, true), "Array", {
  filter: function filter(callbackfn) {
    return $filter(this, callbackfn, arguments[1]);
  }
});
var $export$15 = _export;
var $some = _arrayMethods(3);
$export$15($export$15.P + $export$15.F * !_strictMethod([].some, true), "Array", {
  some: function some(callbackfn) {
    return $some(this, callbackfn, arguments[1]);
  }
});
var $export$14 = _export;
var $every = _arrayMethods(4);
$export$14($export$14.P + $export$14.F * !_strictMethod([].every, true), "Array", {
  every: function every(callbackfn) {
    return $every(this, callbackfn, arguments[1]);
  }
});
var aFunction$b = _aFunction;
var toObject$8 = _toObject;
var IObject = _iobject;
var toLength$d = _toLength;
var _arrayReduce = function(that, callbackfn, aLen, memo, isRight) {
  aFunction$b(callbackfn);
  var O = toObject$8(that);
  var self2 = IObject(O);
  var length = toLength$d(O.length);
  var index = isRight ? length - 1 : 0;
  var i = isRight ? -1 : 1;
  if (aLen < 2)
    for (; ; ) {
      if (index in self2) {
        memo = self2[index];
        index += i;
        break;
      }
      index += i;
      if (isRight ? index < 0 : length <= index) {
        throw TypeError("Reduce of empty array with no initial value");
      }
    }
  for (; isRight ? index >= 0 : length > index; index += i)
    if (index in self2) {
      memo = callbackfn(memo, self2[index], index, O);
    }
  return memo;
};
var $export$13 = _export;
var $reduce$1 = _arrayReduce;
$export$13($export$13.P + $export$13.F * !_strictMethod([].reduce, true), "Array", {
  reduce: function reduce(callbackfn) {
    return $reduce$1(this, callbackfn, arguments.length, arguments[1], false);
  }
});
var $export$12 = _export;
var $reduce = _arrayReduce;
$export$12($export$12.P + $export$12.F * !_strictMethod([].reduceRight, true), "Array", {
  reduceRight: function reduceRight(callbackfn) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
  }
});
var $export$11 = _export;
var $indexOf = _arrayIncludes(false);
var $native$1 = [].indexOf;
var NEGATIVE_ZERO$1 = !!$native$1 && 1 / [1].indexOf(1, -0) < 0;
$export$11($export$11.P + $export$11.F * (NEGATIVE_ZERO$1 || !_strictMethod($native$1)), "Array", {
  indexOf: function indexOf(searchElement) {
    return NEGATIVE_ZERO$1 ? $native$1.apply(this, arguments) || 0 : $indexOf(this, searchElement, arguments[1]);
  }
});
var $export$10 = _export;
var toIObject$3 = _toIobject;
var toInteger$4 = _toInteger;
var toLength$c = _toLength;
var $native = [].lastIndexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;
$export$10($export$10.P + $export$10.F * (NEGATIVE_ZERO || !_strictMethod($native)), "Array", {
  lastIndexOf: function lastIndexOf(searchElement) {
    if (NEGATIVE_ZERO)
      return $native.apply(this, arguments) || 0;
    var O = toIObject$3(this);
    var length = toLength$c(O.length);
    var index = length - 1;
    if (arguments.length > 1)
      index = Math.min(index, toInteger$4(arguments[1]));
    if (index < 0)
      index = length + index;
    for (; index >= 0; index--)
      if (index in O) {
        if (O[index] === searchElement)
          return index || 0;
      }
    return -1;
  }
});
var _arrayCopyWithin;
var hasRequired_arrayCopyWithin;
function require_arrayCopyWithin() {
  if (hasRequired_arrayCopyWithin)
    return _arrayCopyWithin;
  hasRequired_arrayCopyWithin = 1;
  var toObject2 = _toObject;
  var toAbsoluteIndex = _toAbsoluteIndex;
  var toLength2 = _toLength;
  _arrayCopyWithin = [].copyWithin || function copyWithin(target, start) {
    var O = toObject2(this);
    var len = toLength2(O.length);
    var to = toAbsoluteIndex(target, len);
    var from4 = toAbsoluteIndex(start, len);
    var end = arguments.length > 2 ? arguments[2] : void 0;
    var count = Math.min((end === void 0 ? len : toAbsoluteIndex(end, len)) - from4, len - to);
    var inc = 1;
    if (from4 < to && to < from4 + count) {
      inc = -1;
      from4 += count - 1;
      to += count - 1;
    }
    while (count-- > 0) {
      if (from4 in O)
        O[to] = O[from4];
      else
        delete O[to];
      to += inc;
      from4 += inc;
    }
    return O;
  };
  return _arrayCopyWithin;
}
var UNSCOPABLES = _wks.exports("unscopables");
var ArrayProto$1 = Array.prototype;
if (ArrayProto$1[UNSCOPABLES] == void 0)
  _hide(ArrayProto$1, UNSCOPABLES, {});
var _addToUnscopables = function(key) {
  ArrayProto$1[UNSCOPABLES][key] = true;
};
var $export$$ = _export;
$export$$($export$$.P, "Array", { copyWithin: require_arrayCopyWithin() });
_addToUnscopables("copyWithin");
var _arrayFill;
var hasRequired_arrayFill;
function require_arrayFill() {
  if (hasRequired_arrayFill)
    return _arrayFill;
  hasRequired_arrayFill = 1;
  var toObject2 = _toObject;
  var toAbsoluteIndex = _toAbsoluteIndex;
  var toLength2 = _toLength;
  _arrayFill = function fill(value) {
    var O = toObject2(this);
    var length = toLength2(O.length);
    var aLen = arguments.length;
    var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : void 0, length);
    var end = aLen > 2 ? arguments[2] : void 0;
    var endPos = end === void 0 ? length : toAbsoluteIndex(end, length);
    while (endPos > index)
      O[index++] = value;
    return O;
  };
  return _arrayFill;
}
var $export$_ = _export;
$export$_($export$_.P, "Array", { fill: require_arrayFill() });
_addToUnscopables("fill");
var $export$Z = _export;
var $find$1 = _arrayMethods(5);
var KEY$1 = "find";
var forced$1 = true;
if (KEY$1 in [])
  Array(1)[KEY$1](function() {
    forced$1 = false;
  });
$export$Z($export$Z.P + $export$Z.F * forced$1, "Array", {
  find: function find(callbackfn) {
    return $find$1(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
  }
});
_addToUnscopables(KEY$1);
var $export$Y = _export;
var $find = _arrayMethods(6);
var KEY = "findIndex";
var forced = true;
if (KEY in [])
  Array(1)[KEY](function() {
    forced = false;
  });
$export$Y($export$Y.P + $export$Y.F * forced, "Array", {
  findIndex: function findIndex(callbackfn) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
  }
});
_addToUnscopables(KEY);
var global$e = _global.exports;
var dP$5 = _objectDp;
var DESCRIPTORS$3 = _descriptors;
var SPECIES$2 = _wks.exports("species");
var _setSpecies = function(KEY2) {
  var C = global$e[KEY2];
  if (DESCRIPTORS$3 && C && !C[SPECIES$2])
    dP$5.f(C, SPECIES$2, {
      configurable: true,
      get: function() {
        return this;
      }
    });
};
_setSpecies("Array");
var _iterStep = function(done, value) {
  return { value, done: !!done };
};
var addToUnscopables = _addToUnscopables;
var step$1 = _iterStep;
var Iterators$2 = _iterators;
var toIObject$2 = _toIobject;
var es6_array_iterator = _iterDefine(Array, "Array", function(iterated, kind) {
  this._t = toIObject$2(iterated);
  this._i = 0;
  this._k = kind;
}, function() {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = void 0;
    return step$1(1);
  }
  if (kind == "keys")
    return step$1(0, index);
  if (kind == "values")
    return step$1(0, O[index]);
  return step$1(0, [index, O[index]]);
}, "values");
Iterators$2.Arguments = Iterators$2.Array;
addToUnscopables("keys");
addToUnscopables("values");
addToUnscopables("entries");
var anObject$w = _anObject;
var _flags = function() {
  var that = anObject$w(this);
  var result = "";
  if (that.global)
    result += "g";
  if (that.ignoreCase)
    result += "i";
  if (that.multiline)
    result += "m";
  if (that.unicode)
    result += "u";
  if (that.sticky)
    result += "y";
  return result;
};
var global$d = _global.exports;
var inheritIfRequired$1 = _inheritIfRequired;
var dP$4 = _objectDp.f;
var gOPN$2 = _objectGopn.f;
var isRegExp$2 = _isRegexp;
var $flags$1 = _flags;
var $RegExp = global$d.RegExp;
var Base = $RegExp;
var proto$2 = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
var CORRECT_NEW = new $RegExp(re1) !== re1;
if (_descriptors && (!CORRECT_NEW || _fails(function() {
  re2[_wks.exports("match")] = false;
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, "i") != "/a/i";
}))) {
  $RegExp = function RegExp2(p2, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = isRegExp$2(p2);
    var fiU = f === void 0;
    return !tiRE && piRE && p2.constructor === $RegExp && fiU ? p2 : inheritIfRequired$1(
      CORRECT_NEW ? new Base(piRE && !fiU ? p2.source : p2, f) : Base((piRE = p2 instanceof $RegExp) ? p2.source : p2, piRE && fiU ? $flags$1.call(p2) : f),
      tiRE ? this : proto$2,
      $RegExp
    );
  };
  var proxy = function(key) {
    key in $RegExp || dP$4($RegExp, key, {
      configurable: true,
      get: function() {
        return Base[key];
      },
      set: function(it) {
        Base[key] = it;
      }
    });
  };
  for (var keys2 = gOPN$2(Base), i$2 = 0; keys2.length > i$2; )
    proxy(keys2[i$2++]);
  proto$2.constructor = $RegExp;
  $RegExp.prototype = proto$2;
  _redefine.exports(global$d, "RegExp", $RegExp);
}
_setSpecies("RegExp");
var regexpFlags = _flags;
var nativeExec = RegExp.prototype.exec;
var nativeReplace = String.prototype.replace;
var patchedExec = nativeExec;
var LAST_INDEX$1 = "lastIndex";
var UPDATES_LAST_INDEX_WRONG = function() {
  var re12 = /a/, re22 = /b*/g;
  nativeExec.call(re12, "a");
  nativeExec.call(re22, "a");
  return re12[LAST_INDEX$1] !== 0 || re22[LAST_INDEX$1] !== 0;
}();
var NPCG_INCLUDED = /()??/.exec("")[1] !== void 0;
var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;
if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;
    if (NPCG_INCLUDED) {
      reCopy = new RegExp("^" + re.source + "$(?!\\s)", regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG)
      lastIndex = re[LAST_INDEX$1];
    match = nativeExec.call(re, str);
    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX$1] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      nativeReplace.call(match[0], reCopy, function() {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === void 0)
            match[i] = void 0;
        }
      });
    }
    return match;
  };
}
var _regexpExec = patchedExec;
var regexpExec$2 = _regexpExec;
_export({
  target: "RegExp",
  proto: true,
  forced: regexpExec$2 !== /./.exec
}, {
  exec: regexpExec$2
});
if (_descriptors && /./g.flags != "g")
  _objectDp.f(RegExp.prototype, "flags", {
    configurable: true,
    get: _flags
  });
var anObject$v = _anObject;
var $flags = _flags;
var DESCRIPTORS$2 = _descriptors;
var TO_STRING = "toString";
var $toString = /./[TO_STRING];
var define$1 = function(fn) {
  _redefine.exports(RegExp.prototype, TO_STRING, fn, true);
};
if (_fails(function() {
  return $toString.call({ source: "a", flags: "b" }) != "/a/b";
})) {
  define$1(function toString3() {
    var R = anObject$v(this);
    return "/".concat(
      R.source,
      "/",
      "flags" in R ? R.flags : !DESCRIPTORS$2 && R instanceof RegExp ? $flags.call(R) : void 0
    );
  });
} else if ($toString.name != TO_STRING) {
  define$1(function toString3() {
    return $toString.call(this);
  });
}
var at = _stringAt(true);
var _advanceStringIndex = function(S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};
var classof$2 = _classof;
var builtinExec = RegExp.prototype.exec;
var _regexpExecAbstract = function(R, S) {
  var exec = R.exec;
  if (typeof exec === "function") {
    var result = exec.call(R, S);
    if (typeof result !== "object") {
      throw new TypeError("RegExp exec method returned something other than an Object or null");
    }
    return result;
  }
  if (classof$2(R) !== "RegExp") {
    throw new TypeError("RegExp#exec called on incompatible receiver");
  }
  return builtinExec.call(R, S);
};
var redefine$4 = _redefine.exports;
var hide$4 = _hide;
var fails$4 = _fails;
var defined$2 = _defined;
var wks$2 = _wks.exports;
var regexpExec$1 = _regexpExec;
var SPECIES$1 = wks$2("species");
var REPLACE_SUPPORTS_NAMED_GROUPS = !fails$4(function() {
  var re = /./;
  re.exec = function() {
    var result = [];
    result.groups = { a: "7" };
    return result;
  };
  return "".replace(re, "$<a>") !== "7";
});
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = function() {
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function() {
    return originalExec.apply(this, arguments);
  };
  var result = "ab".split(re);
  return result.length === 2 && result[0] === "a" && result[1] === "b";
}();
var _fixReWks = function(KEY2, length, exec) {
  var SYMBOL = wks$2(KEY2);
  var DELEGATES_TO_SYMBOL = !fails$4(function() {
    var O = {};
    O[SYMBOL] = function() {
      return 7;
    };
    return ""[KEY2](O) != 7;
  });
  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails$4(function() {
    var execCalled = false;
    var re = /a/;
    re.exec = function() {
      execCalled = true;
      return null;
    };
    if (KEY2 === "split") {
      re.constructor = {};
      re.constructor[SPECIES$1] = function() {
        return re;
      };
    }
    re[SYMBOL]("");
    return !execCalled;
  }) : void 0;
  if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || KEY2 === "replace" && !REPLACE_SUPPORTS_NAMED_GROUPS || KEY2 === "split" && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined$2,
      SYMBOL,
      ""[KEY2],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec$1) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];
    redefine$4(String.prototype, KEY2, strfn);
    hide$4(
      RegExp.prototype,
      SYMBOL,
      length == 2 ? function(string, arg) {
        return rxfn.call(string, this, arg);
      } : function(string) {
        return rxfn.call(string, this);
      }
    );
  }
};
var anObject$u = _anObject;
var toLength$b = _toLength;
var advanceStringIndex$2 = _advanceStringIndex;
var regExpExec$2 = _regexpExecAbstract;
_fixReWks("match", 1, function(defined2, MATCH2, $match, maybeCallNative) {
  return [
    function match(regexp) {
      var O = defined2(this);
      var fn = regexp == void 0 ? void 0 : regexp[MATCH2];
      return fn !== void 0 ? fn.call(regexp, O) : new RegExp(regexp)[MATCH2](String(O));
    },
    function(regexp) {
      var res = maybeCallNative($match, regexp, this);
      if (res.done)
        return res.value;
      var rx = anObject$u(regexp);
      var S = String(this);
      if (!rx.global)
        return regExpExec$2(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec$2(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === "")
          rx.lastIndex = advanceStringIndex$2(S, toLength$b(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});
var anObject$t = _anObject;
var toObject$7 = _toObject;
var toLength$a = _toLength;
var toInteger$3 = _toInteger;
var advanceStringIndex$1 = _advanceStringIndex;
var regExpExec$1 = _regexpExecAbstract;
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;
var maybeToString = function(it) {
  return it === void 0 ? it : String(it);
};
_fixReWks("replace", 2, function(defined2, REPLACE, $replace, maybeCallNative) {
  return [
    function replace(searchValue, replaceValue) {
      var O = defined2(this);
      var fn = searchValue == void 0 ? void 0 : searchValue[REPLACE];
      return fn !== void 0 ? fn.call(searchValue, O, replaceValue) : $replace.call(String(O), searchValue, replaceValue);
    },
    function(regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done)
        return res.value;
      var rx = anObject$t(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === "function";
      if (!functionalReplace)
        replaceValue = String(replaceValue);
      var global2 = rx.global;
      if (global2) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec$1(rx, S);
        if (result === null)
          break;
        results.push(result);
        if (!global2)
          break;
        var matchStr = String(result[0]);
        if (matchStr === "")
          rx.lastIndex = advanceStringIndex$1(S, toLength$a(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = "";
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger$3(result.index), S.length), 0);
        var captures = [];
        for (var j = 1; j < result.length; j++)
          captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== void 0)
            replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(void 0, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== void 0) {
      namedCaptures = toObject$7(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function(match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case "$":
          return "$";
        case "&":
          return matched;
        case "`":
          return str.slice(0, position);
        case "'":
          return str.slice(tailPos);
        case "<":
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default:
          var n = +ch;
          if (n === 0)
            return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0)
              return match;
            if (f <= m)
              return captures[f - 1] === void 0 ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === void 0 ? "" : capture;
    });
  }
});
var anObject$s = _anObject;
var sameValue = _sameValue;
var regExpExec = _regexpExecAbstract;
_fixReWks("search", 1, function(defined2, SEARCH, $search, maybeCallNative) {
  return [
    function search(regexp) {
      var O = defined2(this);
      var fn = regexp == void 0 ? void 0 : regexp[SEARCH];
      return fn !== void 0 ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
    },
    function(regexp) {
      var res = maybeCallNative($search, regexp, this);
      if (res.done)
        return res.value;
      var rx = anObject$s(regexp);
      var S = String(this);
      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0))
        rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex))
        rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});
var anObject$r = _anObject;
var aFunction$a = _aFunction;
var SPECIES = _wks.exports("species");
var _speciesConstructor = function(O, D) {
  var C = anObject$r(O).constructor;
  var S;
  return C === void 0 || (S = anObject$r(C)[SPECIES]) == void 0 ? D : aFunction$a(S);
};
var isRegExp$1 = _isRegexp;
var anObject$q = _anObject;
var speciesConstructor$4 = _speciesConstructor;
var advanceStringIndex = _advanceStringIndex;
var toLength$9 = _toLength;
var callRegExpExec = _regexpExecAbstract;
var regexpExec = _regexpExec;
var fails$3 = _fails;
var $min = Math.min;
var $push = [].push;
var $SPLIT = "split";
var LENGTH = "length";
var LAST_INDEX = "lastIndex";
var MAX_UINT32 = 4294967295;
var SUPPORTS_Y = !fails$3(function() {
  RegExp(MAX_UINT32, "y");
});
_fixReWks("split", 2, function(defined2, SPLIT, $split, maybeCallNative) {
  var internalSplit;
  if ("abbc"[$SPLIT](/(b)*/)[1] == "c" || "test"[$SPLIT](/(?:)/, -1)[LENGTH] != 4 || "ab"[$SPLIT](/(?:ab)*/)[LENGTH] != 2 || "."[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 || "."[$SPLIT](/()()/)[LENGTH] > 1 || ""[$SPLIT](/.?/)[LENGTH]) {
    internalSplit = function(separator, limit) {
      var string = String(this);
      if (separator === void 0 && limit === 0)
        return [];
      if (!isRegExp$1(separator))
        return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? "i" : "") + (separator.multiline ? "m" : "") + (separator.unicode ? "u" : "") + (separator.sticky ? "y" : "");
      var lastLastIndex = 0;
      var splitLimit = limit === void 0 ? MAX_UINT32 : limit >>> 0;
      var separatorCopy = new RegExp(separator.source, flags + "g");
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH])
            $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit)
            break;
        }
        if (separatorCopy[LAST_INDEX] === match.index)
          separatorCopy[LAST_INDEX]++;
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test(""))
          output.push("");
      } else
        output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  } else if ("0"[$SPLIT](void 0, 0)[LENGTH]) {
    internalSplit = function(separator, limit) {
      return separator === void 0 && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }
  return [
    function split(separator, limit) {
      var O = defined2(this);
      var splitter = separator == void 0 ? void 0 : separator[SPLIT];
      return splitter !== void 0 ? splitter.call(separator, O, limit) : internalSplit.call(String(O), separator, limit);
    },
    function(regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
      if (res.done)
        return res.value;
      var rx = anObject$q(regexp);
      var S = String(this);
      var C = speciesConstructor$4(rx, RegExp);
      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? "i" : "") + (rx.multiline ? "m" : "") + (rx.unicode ? "u" : "") + (SUPPORTS_Y ? "y" : "g");
      var splitter = new C(SUPPORTS_Y ? rx : "^(?:" + rx.source + ")", flags);
      var lim = limit === void 0 ? MAX_UINT32 : limit >>> 0;
      if (lim === 0)
        return [];
      if (S.length === 0)
        return callRegExpExec(splitter, S) === null ? [S] : [];
      var p2 = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (z === null || (e = $min(toLength$9(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p2) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p2, q));
          if (A.length === lim)
            return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim)
              return A;
          }
          q = p2 = e;
        }
      }
      A.push(S.slice(p2));
      return A;
    }
  ];
});
var _anInstance = function(it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || forbiddenField !== void 0 && forbiddenField in it) {
    throw TypeError(name + ": incorrect invocation!");
  }
  return it;
};
var _forOf = { exports: {} };
var ctx$6 = _ctx;
var call = _iterCall;
var isArrayIter$1 = _isArrayIter;
var anObject$p = _anObject;
var toLength$8 = _toLength;
var getIterFn$1 = core_getIteratorMethod;
var BREAK = {};
var RETURN$1 = {};
var exports = _forOf.exports = function(iterable, entries2, fn, that, ITERATOR2) {
  var iterFn = ITERATOR2 ? function() {
    return iterable;
  } : getIterFn$1(iterable);
  var f = ctx$6(fn, that, entries2 ? 2 : 1);
  var index = 0;
  var length, step2, iterator, result;
  if (typeof iterFn != "function")
    throw TypeError(iterable + " is not iterable!");
  if (isArrayIter$1(iterFn))
    for (length = toLength$8(iterable.length); length > index; index++) {
      result = entries2 ? f(anObject$p(step2 = iterable[index])[0], step2[1]) : f(iterable[index]);
      if (result === BREAK || result === RETURN$1)
        return result;
    }
  else
    for (iterator = iterFn.call(iterable); !(step2 = iterator.next()).done; ) {
      result = call(iterator, f, step2.value, entries2);
      if (result === BREAK || result === RETURN$1)
        return result;
    }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN$1;
var ctx$5 = _ctx;
var invoke = _invoke;
var html = _html;
var cel = _domCreate;
var global$c = _global.exports;
var process$3 = global$c.process;
var setTask = global$c.setImmediate;
var clearTask = global$c.clearImmediate;
var MessageChannel = global$c.MessageChannel;
var Dispatch = global$c.Dispatch;
var counter = 0;
var queue$1 = {};
var ONREADYSTATECHANGE = "onreadystatechange";
var defer, channel, port;
var run = function() {
  var id2 = +this;
  if (queue$1.hasOwnProperty(id2)) {
    var fn = queue$1[id2];
    delete queue$1[id2];
    fn();
  }
};
var listener = function(event) {
  run.call(event.data);
};
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i)
      args.push(arguments[i++]);
    queue$1[++counter] = function() {
      invoke(typeof fn == "function" ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id2) {
    delete queue$1[id2];
  };
  if (_cof(process$3) == "process") {
    defer = function(id2) {
      process$3.nextTick(ctx$5(run, id2, 1));
    };
  } else if (Dispatch && Dispatch.now) {
    defer = function(id2) {
      Dispatch.now(ctx$5(run, id2, 1));
    };
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx$5(port.postMessage, port, 1);
  } else if (global$c.addEventListener && typeof postMessage == "function" && !global$c.importScripts) {
    defer = function(id2) {
      global$c.postMessage(id2 + "", "*");
    };
    global$c.addEventListener("message", listener, false);
  } else if (ONREADYSTATECHANGE in cel("script")) {
    defer = function(id2) {
      html.appendChild(cel("script"))[ONREADYSTATECHANGE] = function() {
        html.removeChild(this);
        run.call(id2);
      };
    };
  } else {
    defer = function(id2) {
      setTimeout(ctx$5(run, id2, 1), 0);
    };
  }
}
var _task = {
  set: setTask,
  clear: clearTask
};
var global$b = _global.exports;
var macrotask = _task.set;
var Observer = global$b.MutationObserver || global$b.WebKitMutationObserver;
var process$2 = global$b.process;
var Promise$1 = global$b.Promise;
var isNode$2 = _cof(process$2) == "process";
var _microtask = function() {
  var head, last, notify2;
  var flush = function() {
    var parent, fn;
    if (isNode$2 && (parent = process$2.domain))
      parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head)
          notify2();
        else
          last = void 0;
        throw e;
      }
    }
    last = void 0;
    if (parent)
      parent.enter();
  };
  if (isNode$2) {
    notify2 = function() {
      process$2.nextTick(flush);
    };
  } else if (Observer && !(global$b.navigator && global$b.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode("");
    new Observer(flush).observe(node, { characterData: true });
    notify2 = function() {
      node.data = toggle = !toggle;
    };
  } else if (Promise$1 && Promise$1.resolve) {
    var promise = Promise$1.resolve(void 0);
    notify2 = function() {
      promise.then(flush);
    };
  } else {
    notify2 = function() {
      macrotask.call(global$b, flush);
    };
  }
  return function(fn) {
    var task2 = { fn, next: void 0 };
    if (last)
      last.next = task2;
    if (!head) {
      head = task2;
      notify2();
    }
    last = task2;
  };
};
var _newPromiseCapability = {};
var aFunction$9 = _aFunction;
function PromiseCapability(C) {
  var resolve3, reject2;
  this.promise = new C(function($$resolve, $$reject) {
    if (resolve3 !== void 0 || reject2 !== void 0)
      throw TypeError("Bad Promise constructor");
    resolve3 = $$resolve;
    reject2 = $$reject;
  });
  this.resolve = aFunction$9(resolve3);
  this.reject = aFunction$9(reject2);
}
_newPromiseCapability.f = function(C) {
  return new PromiseCapability(C);
};
var _perform = function(exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};
var global$a = _global.exports;
var navigator$1 = global$a.navigator;
var _userAgent = navigator$1 && navigator$1.userAgent || "";
var anObject$o = _anObject;
var isObject$c = _isObject;
var newPromiseCapability$2 = _newPromiseCapability;
var _promiseResolve = function(C, x) {
  anObject$o(C);
  if (isObject$c(x) && x.constructor === C)
    return x;
  var promiseCapability = newPromiseCapability$2.f(C);
  var resolve3 = promiseCapability.resolve;
  resolve3(x);
  return promiseCapability.promise;
};
var redefine$3 = _redefine.exports;
var _redefineAll = function(target, src, safe) {
  for (var key in src)
    redefine$3(target, key, src[key], safe);
  return target;
};
var global$9 = _global.exports;
var ctx$4 = _ctx;
var classof$1 = _classof;
var $export$X = _export;
var isObject$b = _isObject;
var aFunction$8 = _aFunction;
var anInstance$5 = _anInstance;
var forOf$6 = _forOf.exports;
var speciesConstructor$3 = _speciesConstructor;
var task = _task.set;
var microtask$2 = _microtask();
var newPromiseCapabilityModule = _newPromiseCapability;
var perform$1 = _perform;
var userAgent$3 = _userAgent;
var promiseResolve$1 = _promiseResolve;
var PROMISE = "Promise";
var TypeError$2 = global$9.TypeError;
var process$1 = global$9.process;
var versions = process$1 && process$1.versions;
var v8 = versions && versions.v8 || "";
var $Promise = global$9[PROMISE];
var isNode$1 = classof$1(process$1) == "process";
var empty = function() {
};
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability$1 = newGenericPromiseCapability = newPromiseCapabilityModule.f;
var USE_NATIVE = !!function() {
  try {
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[_wks.exports("species")] = function(exec) {
      exec(empty, empty);
    };
    return (isNode$1 || typeof PromiseRejectionEvent == "function") && promise.then(empty) instanceof FakePromise && v8.indexOf("6.6") !== 0 && userAgent$3.indexOf("Chrome/66") === -1;
  } catch (e) {
  }
}();
var isThenable = function(it) {
  var then;
  return isObject$b(it) && typeof (then = it.then) == "function" ? then : false;
};
var notify = function(promise, isReject) {
  if (promise._n)
    return;
  promise._n = true;
  var chain = promise._c;
  microtask$2(function() {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run2 = function(reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve3 = reaction.resolve;
      var reject2 = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2)
              onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true)
            result = value;
          else {
            if (domain)
              domain.enter();
            result = handler(value);
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject2(TypeError$2("Promise-chain cycle"));
          } else if (then = isThenable(result)) {
            then.call(result, resolve3, reject2);
          } else
            resolve3(result);
        } else
          reject2(value);
      } catch (e) {
        if (domain && !exited)
          domain.exit();
        reject2(e);
      }
    };
    while (chain.length > i)
      run2(chain[i++]);
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h)
      onUnhandled(promise);
  });
};
var onUnhandled = function(promise) {
  task.call(global$9, function() {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console2;
    if (unhandled) {
      result = perform$1(function() {
        if (isNode$1) {
          process$1.emit("unhandledRejection", value, promise);
        } else if (handler = global$9.onunhandledrejection) {
          handler({ promise, reason: value });
        } else if ((console2 = global$9.console) && console2.error) {
          console2.error("Unhandled promise rejection", value);
        }
      });
      promise._h = isNode$1 || isUnhandled(promise) ? 2 : 1;
    }
    promise._a = void 0;
    if (unhandled && result.e)
      throw result.v;
  });
};
var isUnhandled = function(promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function(promise) {
  task.call(global$9, function() {
    var handler;
    if (isNode$1) {
      process$1.emit("rejectionHandled", promise);
    } else if (handler = global$9.onrejectionhandled) {
      handler({ promise, reason: promise._v });
    }
  });
};
var $reject = function(value) {
  var promise = this;
  if (promise._d)
    return;
  promise._d = true;
  promise = promise._w || promise;
  promise._v = value;
  promise._s = 2;
  if (!promise._a)
    promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function(value) {
  var promise = this;
  var then;
  if (promise._d)
    return;
  promise._d = true;
  promise = promise._w || promise;
  try {
    if (promise === value)
      throw TypeError$2("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask$2(function() {
        var wrapper2 = { _w: promise, _d: false };
        try {
          then.call(value, ctx$4($resolve, wrapper2, 1), ctx$4($reject, wrapper2, 1));
        } catch (e) {
          $reject.call(wrapper2, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e);
  }
};
if (!USE_NATIVE) {
  $Promise = function Promise2(executor) {
    anInstance$5(this, $Promise, PROMISE, "_h");
    aFunction$8(executor);
    Internal.call(this);
    try {
      executor(ctx$4($resolve, this, 1), ctx$4($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  Internal = function Promise2(executor) {
    this._c = [];
    this._a = void 0;
    this._s = 0;
    this._d = false;
    this._v = void 0;
    this._h = 0;
    this._n = false;
  };
  Internal.prototype = _redefineAll($Promise.prototype, {
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability$1(speciesConstructor$3(this, $Promise));
      reaction.ok = typeof onFulfilled == "function" ? onFulfilled : true;
      reaction.fail = typeof onRejected == "function" && onRejected;
      reaction.domain = isNode$1 ? process$1.domain : void 0;
      this._c.push(reaction);
      if (this._a)
        this._a.push(reaction);
      if (this._s)
        notify(this, false);
      return reaction.promise;
    },
    "catch": function(onRejected) {
      return this.then(void 0, onRejected);
    }
  });
  OwnPromiseCapability = function() {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx$4($resolve, promise, 1);
    this.reject = ctx$4($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability$1 = function(C) {
    return C === $Promise || C === Wrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
  };
}
$export$X($export$X.G + $export$X.W + $export$X.F * !USE_NATIVE, { Promise: $Promise });
_setToStringTag($Promise, PROMISE);
_setSpecies(PROMISE);
Wrapper = _core.exports[PROMISE];
$export$X($export$X.S + $export$X.F * !USE_NATIVE, PROMISE, {
  reject: function reject(r) {
    var capability = newPromiseCapability$1(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export$X($export$X.S + $export$X.F * !USE_NATIVE, PROMISE, {
  resolve: function resolve(x) {
    return promiseResolve$1(this, x);
  }
});
$export$X($export$X.S + $export$X.F * !(USE_NATIVE && require_iterDetect()(function(iter) {
  $Promise.all(iter)["catch"](empty);
})), PROMISE, {
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability$1(C);
    var resolve3 = capability.resolve;
    var reject2 = capability.reject;
    var result = perform$1(function() {
      var values2 = [];
      var index = 0;
      var remaining = 1;
      forOf$6(iterable, false, function(promise) {
        var $index = index++;
        var alreadyCalled = false;
        values2.push(void 0);
        remaining++;
        C.resolve(promise).then(function(value) {
          if (alreadyCalled)
            return;
          alreadyCalled = true;
          values2[$index] = value;
          --remaining || resolve3(values2);
        }, reject2);
      });
      --remaining || resolve3(values2);
    });
    if (result.e)
      reject2(result.v);
    return capability.promise;
  },
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability$1(C);
    var reject2 = capability.reject;
    var result = perform$1(function() {
      forOf$6(iterable, false, function(promise) {
        C.resolve(promise).then(capability.resolve, reject2);
      });
    });
    if (result.e)
      reject2(result.v);
    return capability.promise;
  }
});
var isObject$a = _isObject;
var _validateCollection = function(it, TYPE) {
  if (!isObject$a(it) || it._t !== TYPE)
    throw TypeError("Incompatible receiver, " + TYPE + " required!");
  return it;
};
var dP$3 = _objectDp.f;
var create$2 = _objectCreate;
var redefineAll$4 = _redefineAll;
var ctx$3 = _ctx;
var anInstance$4 = _anInstance;
var forOf$5 = _forOf.exports;
var $iterDefine = _iterDefine;
var step = _iterStep;
var setSpecies$1 = _setSpecies;
var DESCRIPTORS$1 = _descriptors;
var fastKey = _meta.exports.fastKey;
var validate$6 = _validateCollection;
var SIZE = DESCRIPTORS$1 ? "_s" : "size";
var getEntry = function(that, key) {
  var index = fastKey(key);
  var entry;
  if (index !== "F")
    return that._i[index];
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key)
      return entry;
  }
};
var _collectionStrong = {
  getConstructor: function(wrapper2, NAME, IS_MAP, ADDER) {
    var C = wrapper2(function(that, iterable) {
      anInstance$4(that, C, NAME, "_i");
      that._t = NAME;
      that._i = create$2(null);
      that._f = void 0;
      that._l = void 0;
      that[SIZE] = 0;
      if (iterable != void 0)
        forOf$5(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll$4(C.prototype, {
      clear: function clear2() {
        for (var that = validate$6(this, NAME), data2 = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p)
            entry.p = entry.p.n = void 0;
          delete data2[entry.i];
        }
        that._f = that._l = void 0;
        that[SIZE] = 0;
      },
      "delete": function(key) {
        var that = validate$6(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next3 = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev)
            prev.n = next3;
          if (next3)
            next3.p = prev;
          if (that._f == entry)
            that._f = next3;
          if (that._l == entry)
            that._l = prev;
          that[SIZE]--;
        }
        return !!entry;
      },
      forEach: function forEach3(callbackfn) {
        validate$6(this, NAME);
        var f = ctx$3(callbackfn, arguments.length > 1 ? arguments[1] : void 0, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          while (entry && entry.r)
            entry = entry.p;
        }
      },
      has: function has3(key) {
        return !!getEntry(validate$6(this, NAME), key);
      }
    });
    if (DESCRIPTORS$1)
      dP$3(C.prototype, "size", {
        get: function() {
          return validate$6(this, NAME)[SIZE];
        }
      });
    return C;
  },
  def: function(that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    if (entry) {
      entry.v = value;
    } else {
      that._l = entry = {
        i: index = fastKey(key, true),
        k: key,
        v: value,
        p: prev = that._l,
        n: void 0,
        r: false
      };
      if (!that._f)
        that._f = entry;
      if (prev)
        prev.n = entry;
      that[SIZE]++;
      if (index !== "F")
        that._i[index] = entry;
    }
    return that;
  },
  getEntry,
  setStrong: function(C, NAME, IS_MAP) {
    $iterDefine(C, NAME, function(iterated, kind) {
      this._t = validate$6(iterated, NAME);
      this._k = kind;
      this._l = void 0;
    }, function() {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      while (entry && entry.r)
        entry = entry.p;
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        that._t = void 0;
        return step(1);
      }
      if (kind == "keys")
        return step(0, entry.k);
      if (kind == "values")
        return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? "entries" : "values", !IS_MAP, true);
    setSpecies$1(NAME);
  }
};
var global$8 = _global.exports;
var $export$W = _export;
var redefine$2 = _redefine.exports;
var redefineAll$3 = _redefineAll;
var meta$1 = _meta.exports;
var forOf$4 = _forOf.exports;
var anInstance$3 = _anInstance;
var isObject$9 = _isObject;
var fails$2 = _fails;
var $iterDetect$1 = require_iterDetect();
var setToStringTag = _setToStringTag;
var inheritIfRequired = _inheritIfRequired;
var _collection = function(NAME, wrapper2, methods2, common, IS_MAP, IS_WEAK) {
  var Base2 = global$8[NAME];
  var C = Base2;
  var ADDER = IS_MAP ? "set" : "add";
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function(KEY2) {
    var fn = proto[KEY2];
    redefine$2(
      proto,
      KEY2,
      KEY2 == "delete" ? function(a) {
        return IS_WEAK && !isObject$9(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY2 == "has" ? function has3(a) {
        return IS_WEAK && !isObject$9(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY2 == "get" ? function get4(a) {
        return IS_WEAK && !isObject$9(a) ? void 0 : fn.call(this, a === 0 ? 0 : a);
      } : KEY2 == "add" ? function add4(a) {
        fn.call(this, a === 0 ? 0 : a);
        return this;
      } : function set4(a, b) {
        fn.call(this, a === 0 ? 0 : a, b);
        return this;
      }
    );
  };
  if (typeof C != "function" || !(IS_WEAK || proto.forEach && !fails$2(function() {
    new C().entries().next();
  }))) {
    C = common.getConstructor(wrapper2, NAME, IS_MAP, ADDER);
    redefineAll$3(C.prototype, methods2);
    meta$1.NEED = true;
  } else {
    var instance = new C();
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    var THROWS_ON_PRIMITIVES = fails$2(function() {
      instance.has(1);
    });
    var ACCEPT_ITERABLES = $iterDetect$1(function(iter) {
      new C(iter);
    });
    var BUGGY_ZERO = !IS_WEAK && fails$2(function() {
      var $instance = new C();
      var index = 5;
      while (index--)
        $instance[ADDER](index, index);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper2(function(target, iterable) {
        anInstance$3(target, C, NAME);
        var that = inheritIfRequired(new Base2(), target, C);
        if (iterable != void 0)
          forOf$4(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod("delete");
      fixMethod("has");
      IS_MAP && fixMethod("get");
    }
    if (BUGGY_ZERO || HASNT_CHAINING)
      fixMethod(ADDER);
    if (IS_WEAK && proto.clear)
      delete proto.clear;
  }
  setToStringTag(C, NAME);
  O[NAME] = C;
  $export$W($export$W.G + $export$W.W + $export$W.F * (C != Base2), O);
  if (!IS_WEAK)
    common.setStrong(C, NAME, IS_MAP);
  return C;
};
var strong$1 = _collectionStrong;
var validate$5 = _validateCollection;
var MAP = "Map";
var es6_map = _collection(MAP, function(get4) {
  return function Map2() {
    return get4(this, arguments.length > 0 ? arguments[0] : void 0);
  };
}, {
  get: function get(key) {
    var entry = strong$1.getEntry(validate$5(this, MAP), key);
    return entry && entry.v;
  },
  set: function set(key, value) {
    return strong$1.def(validate$5(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong$1, true);
var strong = _collectionStrong;
var validate$4 = _validateCollection;
var SET = "Set";
var es6_set = _collection(SET, function(get4) {
  return function Set2() {
    return get4(this, arguments.length > 0 ? arguments[0] : void 0);
  };
}, {
  add: function add(value) {
    return strong.def(validate$4(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);
var es6_weakMap = { exports: {} };
var redefineAll$2 = _redefineAll;
var getWeak$1 = _meta.exports.getWeak;
var anObject$n = _anObject;
var isObject$8 = _isObject;
var anInstance$2 = _anInstance;
var forOf$3 = _forOf.exports;
var createArrayMethod$1 = _arrayMethods;
var $has = _has;
var validate$3 = _validateCollection;
var arrayFind$1 = createArrayMethod$1(5);
var arrayFindIndex$1 = createArrayMethod$1(6);
var id = 0;
var uncaughtFrozenStore$1 = function(that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function() {
  this.a = [];
};
var findUncaughtFrozen = function(store2, key) {
  return arrayFind$1(store2.a, function(it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function(key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry)
      return entry[1];
  },
  has: function(key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function(key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry)
      entry[1] = value;
    else
      this.a.push([key, value]);
  },
  "delete": function(key) {
    var index = arrayFindIndex$1(this.a, function(it) {
      return it[0] === key;
    });
    if (~index)
      this.a.splice(index, 1);
    return !!~index;
  }
};
var _collectionWeak = {
  getConstructor: function(wrapper2, NAME, IS_MAP, ADDER) {
    var C = wrapper2(function(that, iterable) {
      anInstance$2(that, C, NAME, "_i");
      that._t = NAME;
      that._i = id++;
      that._l = void 0;
      if (iterable != void 0)
        forOf$3(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll$2(C.prototype, {
      "delete": function(key) {
        if (!isObject$8(key))
          return false;
        var data2 = getWeak$1(key);
        if (data2 === true)
          return uncaughtFrozenStore$1(validate$3(this, NAME))["delete"](key);
        return data2 && $has(data2, this._i) && delete data2[this._i];
      },
      has: function has3(key) {
        if (!isObject$8(key))
          return false;
        var data2 = getWeak$1(key);
        if (data2 === true)
          return uncaughtFrozenStore$1(validate$3(this, NAME)).has(key);
        return data2 && $has(data2, this._i);
      }
    });
    return C;
  },
  def: function(that, key, value) {
    var data2 = getWeak$1(anObject$n(key), true);
    if (data2 === true)
      uncaughtFrozenStore$1(that).set(key, value);
    else
      data2[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore$1
};
var global$7 = _global.exports;
var each = _arrayMethods(0);
var redefine$1 = _redefine.exports;
var meta = _meta.exports;
var assign2 = _objectAssign;
var weak$1 = _collectionWeak;
var isObject$7 = _isObject;
var validate$2 = _validateCollection;
var NATIVE_WEAK_MAP = _validateCollection;
var IS_IE11 = !global$7.ActiveXObject && "ActiveXObject" in global$7;
var WEAK_MAP = "WeakMap";
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak$1.ufstore;
var InternalMap;
var wrapper = function(get4) {
  return function WeakMap2() {
    return get4(this, arguments.length > 0 ? arguments[0] : void 0);
  };
};
var methods = {
  get: function get2(key) {
    if (isObject$7(key)) {
      var data2 = getWeak(key);
      if (data2 === true)
        return uncaughtFrozenStore(validate$2(this, WEAK_MAP)).get(key);
      return data2 ? data2[this._i] : void 0;
    }
  },
  set: function set2(key, value) {
    return weak$1.def(validate$2(this, WEAK_MAP), key, value);
  }
};
var $WeakMap = es6_weakMap.exports = _collection(WEAK_MAP, wrapper, methods, weak$1, true, true);
if (NATIVE_WEAK_MAP && IS_IE11) {
  InternalMap = weak$1.getConstructor(wrapper, WEAK_MAP);
  assign2(InternalMap.prototype, methods);
  meta.NEED = true;
  each(["delete", "has", "get", "set"], function(key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine$1(proto, key, function(a, b) {
      if (isObject$7(a) && !isExtensible(a)) {
        if (!this._f)
          this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == "set" ? this : result;
      }
      return method.call(this, a, b);
    });
  });
}
var weak = _collectionWeak;
var validate$1 = _validateCollection;
var WEAK_SET = "WeakSet";
_collection(WEAK_SET, function(get4) {
  return function WeakSet2() {
    return get4(this, arguments.length > 0 ? arguments[0] : void 0);
  };
}, {
  add: function add2(value) {
    return weak.def(validate$1(this, WEAK_SET), value, true);
  }
}, weak, false, true);
var global$6 = _global.exports;
var hide$3 = _hide;
var uid$3 = _uid;
var TYPED = uid$3("typed_array");
var VIEW$2 = uid$3("view");
var ABV = !!(global$6.ArrayBuffer && global$6.DataView);
var CONSTR = ABV;
var i$1 = 0;
var l = 9;
var Typed;
var TypedArrayConstructors = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(",");
while (i$1 < l) {
  if (Typed = global$6[TypedArrayConstructors[i$1++]]) {
    hide$3(Typed.prototype, TYPED, true);
    hide$3(Typed.prototype, VIEW$2, true);
  } else
    CONSTR = false;
}
var _typed = {
  ABV,
  CONSTR,
  TYPED,
  VIEW: VIEW$2
};
var _typedBuffer = {};
var toInteger$2 = _toInteger;
var toLength$7 = _toLength;
var _toIndex = function(it) {
  if (it === void 0)
    return 0;
  var number = toInteger$2(it);
  var length = toLength$7(number);
  if (number !== length)
    throw RangeError("Wrong length!");
  return length;
};
(function(exports2) {
  var global2 = _global.exports;
  var DESCRIPTORS2 = _descriptors;
  var $typed = _typed;
  var hide2 = _hide;
  var redefineAll2 = _redefineAll;
  var fails2 = _fails;
  var anInstance2 = _anInstance;
  var toInteger2 = _toInteger;
  var toLength2 = _toLength;
  var toIndex = _toIndex;
  var gOPN2 = _objectGopn.f;
  var dP2 = _objectDp.f;
  var arrayFill = require_arrayFill();
  var setToStringTag2 = _setToStringTag;
  var ARRAY_BUFFER = "ArrayBuffer";
  var DATA_VIEW = "DataView";
  var PROTOTYPE = "prototype";
  var WRONG_LENGTH = "Wrong length!";
  var WRONG_INDEX = "Wrong index!";
  var $ArrayBuffer = global2[ARRAY_BUFFER];
  var $DataView = global2[DATA_VIEW];
  var Math2 = global2.Math;
  var RangeError2 = global2.RangeError;
  var Infinity2 = global2.Infinity;
  var BaseBuffer = $ArrayBuffer;
  var abs2 = Math2.abs;
  var pow2 = Math2.pow;
  var floor2 = Math2.floor;
  var log3 = Math2.log;
  var LN2 = Math2.LN2;
  var BUFFER = "buffer";
  var BYTE_LENGTH = "byteLength";
  var BYTE_OFFSET = "byteOffset";
  var $BUFFER = DESCRIPTORS2 ? "_b" : BUFFER;
  var $LENGTH = DESCRIPTORS2 ? "_l" : BYTE_LENGTH;
  var $OFFSET = DESCRIPTORS2 ? "_o" : BYTE_OFFSET;
  function packIEEE754(value, mLen, nBytes) {
    var buffer2 = new Array(nBytes);
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? pow2(2, -24) - pow2(2, -77) : 0;
    var i = 0;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    var e, m, c;
    value = abs2(value);
    if (value != value || value === Infinity2) {
      m = value != value ? 1 : 0;
      e = eMax;
    } else {
      e = floor2(log3(value) / LN2);
      if (value * (c = pow2(2, -e)) < 1) {
        e--;
        c *= 2;
      }
      if (e + eBias >= 1) {
        value += rt / c;
      } else {
        value += rt * pow2(2, 1 - eBias);
      }
      if (value * c >= 2) {
        e++;
        c /= 2;
      }
      if (e + eBias >= eMax) {
        m = 0;
        e = eMax;
      } else if (e + eBias >= 1) {
        m = (value * c - 1) * pow2(2, mLen);
        e = e + eBias;
      } else {
        m = value * pow2(2, eBias - 1) * pow2(2, mLen);
        e = 0;
      }
    }
    for (; mLen >= 8; buffer2[i++] = m & 255, m /= 256, mLen -= 8)
      ;
    e = e << mLen | m;
    eLen += mLen;
    for (; eLen > 0; buffer2[i++] = e & 255, e /= 256, eLen -= 8)
      ;
    buffer2[--i] |= s * 128;
    return buffer2;
  }
  function unpackIEEE754(buffer2, mLen, nBytes) {
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = eLen - 7;
    var i = nBytes - 1;
    var s = buffer2[i--];
    var e = s & 127;
    var m;
    s >>= 7;
    for (; nBits > 0; e = e * 256 + buffer2[i], i--, nBits -= 8)
      ;
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for (; nBits > 0; m = m * 256 + buffer2[i], i--, nBits -= 8)
      ;
    if (e === 0) {
      e = 1 - eBias;
    } else if (e === eMax) {
      return m ? NaN : s ? -Infinity2 : Infinity2;
    } else {
      m = m + pow2(2, mLen);
      e = e - eBias;
    }
    return (s ? -1 : 1) * m * pow2(2, e - mLen);
  }
  function unpackI32(bytes) {
    return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
  }
  function packI8(it) {
    return [it & 255];
  }
  function packI16(it) {
    return [it & 255, it >> 8 & 255];
  }
  function packI32(it) {
    return [it & 255, it >> 8 & 255, it >> 16 & 255, it >> 24 & 255];
  }
  function packF64(it) {
    return packIEEE754(it, 52, 8);
  }
  function packF32(it) {
    return packIEEE754(it, 23, 4);
  }
  function addGetter(C, key2, internal) {
    dP2(C[PROTOTYPE], key2, { get: function() {
      return this[internal];
    } });
  }
  function get4(view2, bytes, index, isLittleEndian) {
    var numIndex = +index;
    var intIndex = toIndex(numIndex);
    if (intIndex + bytes > view2[$LENGTH])
      throw RangeError2(WRONG_INDEX);
    var store2 = view2[$BUFFER]._b;
    var start = intIndex + view2[$OFFSET];
    var pack = store2.slice(start, start + bytes);
    return isLittleEndian ? pack : pack.reverse();
  }
  function set4(view2, bytes, index, conversion, value, isLittleEndian) {
    var numIndex = +index;
    var intIndex = toIndex(numIndex);
    if (intIndex + bytes > view2[$LENGTH])
      throw RangeError2(WRONG_INDEX);
    var store2 = view2[$BUFFER]._b;
    var start = intIndex + view2[$OFFSET];
    var pack = conversion(+value);
    for (var i = 0; i < bytes; i++)
      store2[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
  }
  if (!$typed.ABV) {
    $ArrayBuffer = function ArrayBuffer2(length) {
      anInstance2(this, $ArrayBuffer, ARRAY_BUFFER);
      var byteLength = toIndex(length);
      this._b = arrayFill.call(new Array(byteLength), 0);
      this[$LENGTH] = byteLength;
    };
    $DataView = function DataView(buffer2, byteOffset, byteLength) {
      anInstance2(this, $DataView, DATA_VIEW);
      anInstance2(buffer2, $ArrayBuffer, DATA_VIEW);
      var bufferLength = buffer2[$LENGTH];
      var offset = toInteger2(byteOffset);
      if (offset < 0 || offset > bufferLength)
        throw RangeError2("Wrong offset!");
      byteLength = byteLength === void 0 ? bufferLength - offset : toLength2(byteLength);
      if (offset + byteLength > bufferLength)
        throw RangeError2(WRONG_LENGTH);
      this[$BUFFER] = buffer2;
      this[$OFFSET] = offset;
      this[$LENGTH] = byteLength;
    };
    if (DESCRIPTORS2) {
      addGetter($ArrayBuffer, BYTE_LENGTH, "_l");
      addGetter($DataView, BUFFER, "_b");
      addGetter($DataView, BYTE_LENGTH, "_l");
      addGetter($DataView, BYTE_OFFSET, "_o");
    }
    redefineAll2($DataView[PROTOTYPE], {
      getInt8: function getInt8(byteOffset) {
        return get4(this, 1, byteOffset)[0] << 24 >> 24;
      },
      getUint8: function getUint8(byteOffset) {
        return get4(this, 1, byteOffset)[0];
      },
      getInt16: function getInt16(byteOffset) {
        var bytes = get4(this, 2, byteOffset, arguments[1]);
        return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
      },
      getUint16: function getUint16(byteOffset) {
        var bytes = get4(this, 2, byteOffset, arguments[1]);
        return bytes[1] << 8 | bytes[0];
      },
      getInt32: function getInt32(byteOffset) {
        return unpackI32(get4(this, 4, byteOffset, arguments[1]));
      },
      getUint32: function getUint32(byteOffset) {
        return unpackI32(get4(this, 4, byteOffset, arguments[1])) >>> 0;
      },
      getFloat32: function getFloat32(byteOffset) {
        return unpackIEEE754(get4(this, 4, byteOffset, arguments[1]), 23, 4);
      },
      getFloat64: function getFloat64(byteOffset) {
        return unpackIEEE754(get4(this, 8, byteOffset, arguments[1]), 52, 8);
      },
      setInt8: function setInt8(byteOffset, value) {
        set4(this, 1, byteOffset, packI8, value);
      },
      setUint8: function setUint8(byteOffset, value) {
        set4(this, 1, byteOffset, packI8, value);
      },
      setInt16: function setInt16(byteOffset, value) {
        set4(this, 2, byteOffset, packI16, value, arguments[2]);
      },
      setUint16: function setUint16(byteOffset, value) {
        set4(this, 2, byteOffset, packI16, value, arguments[2]);
      },
      setInt32: function setInt32(byteOffset, value) {
        set4(this, 4, byteOffset, packI32, value, arguments[2]);
      },
      setUint32: function setUint32(byteOffset, value) {
        set4(this, 4, byteOffset, packI32, value, arguments[2]);
      },
      setFloat32: function setFloat32(byteOffset, value) {
        set4(this, 4, byteOffset, packF32, value, arguments[2]);
      },
      setFloat64: function setFloat64(byteOffset, value) {
        set4(this, 8, byteOffset, packF64, value, arguments[2]);
      }
    });
  } else {
    if (!fails2(function() {
      $ArrayBuffer(1);
    }) || !fails2(function() {
      new $ArrayBuffer(-1);
    }) || fails2(function() {
      new $ArrayBuffer();
      new $ArrayBuffer(1.5);
      new $ArrayBuffer(NaN);
      return $ArrayBuffer.name != ARRAY_BUFFER;
    })) {
      $ArrayBuffer = function ArrayBuffer2(length) {
        anInstance2(this, $ArrayBuffer);
        return new BaseBuffer(toIndex(length));
      };
      var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
      for (var keys2 = gOPN2(BaseBuffer), j = 0, key; keys2.length > j; ) {
        if (!((key = keys2[j++]) in $ArrayBuffer))
          hide2($ArrayBuffer, key, BaseBuffer[key]);
      }
      ArrayBufferProto.constructor = $ArrayBuffer;
    }
    var view = new $DataView(new $ArrayBuffer(2));
    var $setInt8 = $DataView[PROTOTYPE].setInt8;
    view.setInt8(0, 2147483648);
    view.setInt8(1, 2147483649);
    if (view.getInt8(0) || !view.getInt8(1))
      redefineAll2($DataView[PROTOTYPE], {
        setInt8: function setInt8(byteOffset, value) {
          $setInt8.call(this, byteOffset, value << 24 >> 24);
        },
        setUint8: function setUint8(byteOffset, value) {
          $setInt8.call(this, byteOffset, value << 24 >> 24);
        }
      }, true);
  }
  setToStringTag2($ArrayBuffer, ARRAY_BUFFER);
  setToStringTag2($DataView, DATA_VIEW);
  hide2($DataView[PROTOTYPE], $typed.VIEW, true);
  exports2[ARRAY_BUFFER] = $ArrayBuffer;
  exports2[DATA_VIEW] = $DataView;
})(_typedBuffer);
var $export$V = _export;
var $typed$1 = _typed;
var buffer = _typedBuffer;
var anObject$m = _anObject;
var toAbsoluteIndex$1 = _toAbsoluteIndex;
var toLength$6 = _toLength;
var isObject$6 = _isObject;
var ArrayBuffer = _global.exports.ArrayBuffer;
var speciesConstructor$2 = _speciesConstructor;
var $ArrayBuffer$1 = buffer.ArrayBuffer;
var $DataView$1 = buffer.DataView;
var $isView = $typed$1.ABV && ArrayBuffer.isView;
var $slice$1 = $ArrayBuffer$1.prototype.slice;
var VIEW$1 = $typed$1.VIEW;
var ARRAY_BUFFER$1 = "ArrayBuffer";
$export$V($export$V.G + $export$V.W + $export$V.F * (ArrayBuffer !== $ArrayBuffer$1), { ArrayBuffer: $ArrayBuffer$1 });
$export$V($export$V.S + $export$V.F * !$typed$1.CONSTR, ARRAY_BUFFER$1, {
  isView: function isView(it) {
    return $isView && $isView(it) || isObject$6(it) && VIEW$1 in it;
  }
});
$export$V($export$V.P + $export$V.U + $export$V.F * _fails(function() {
  return !new $ArrayBuffer$1(2).slice(1, void 0).byteLength;
}), ARRAY_BUFFER$1, {
  slice: function slice2(start, end) {
    if ($slice$1 !== void 0 && end === void 0)
      return $slice$1.call(anObject$m(this), start);
    var len = anObject$m(this).byteLength;
    var first = toAbsoluteIndex$1(start, len);
    var fin = toAbsoluteIndex$1(end === void 0 ? len : end, len);
    var result = new (speciesConstructor$2(this, $ArrayBuffer$1))(toLength$6(fin - first));
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
var $export$U = _export;
$export$U($export$U.G + $export$U.W + $export$U.F * !_typed.ABV, {
  DataView: _typedBuffer.DataView
});
var _typedArray = { exports: {} };
if (_descriptors) {
  var LIBRARY = _library;
  var global$5 = _global.exports;
  var fails$1 = _fails;
  var $export$T = _export;
  var $typed = _typed;
  var $buffer = _typedBuffer;
  var ctx$2 = _ctx;
  var anInstance$1 = _anInstance;
  var propertyDesc = _propertyDesc;
  var hide$2 = _hide;
  var redefineAll$1 = _redefineAll;
  var toInteger$1 = _toInteger;
  var toLength$5 = _toLength;
  var toIndex = _toIndex;
  var toAbsoluteIndex = _toAbsoluteIndex;
  var toPrimitive$3 = _toPrimitive;
  var has$4 = _has;
  var classof = _classof;
  var isObject$5 = _isObject;
  var toObject$6 = _toObject;
  var isArrayIter = _isArrayIter;
  var create$1 = _objectCreate;
  var getPrototypeOf$7 = _objectGpo;
  var gOPN$1 = _objectGopn.f;
  var getIterFn = core_getIteratorMethod;
  var uid$2 = _uid;
  var wks$1 = _wks.exports;
  var createArrayMethod = _arrayMethods;
  var createArrayIncludes = _arrayIncludes;
  var speciesConstructor$1 = _speciesConstructor;
  var ArrayIterators = es6_array_iterator;
  var Iterators$1 = _iterators;
  var $iterDetect = require_iterDetect();
  var setSpecies = _setSpecies;
  var arrayFill = require_arrayFill();
  var arrayCopyWithin = require_arrayCopyWithin();
  var $DP = _objectDp;
  var $GOPD = _objectGopd;
  var dP$2 = $DP.f;
  var gOPD$5 = $GOPD.f;
  var RangeError$1 = global$5.RangeError;
  var TypeError$1 = global$5.TypeError;
  var Uint8Array$1 = global$5.Uint8Array;
  var ARRAY_BUFFER = "ArrayBuffer";
  var SHARED_BUFFER = "Shared" + ARRAY_BUFFER;
  var BYTES_PER_ELEMENT = "BYTES_PER_ELEMENT";
  var PROTOTYPE = "prototype";
  var ArrayProto = Array[PROTOTYPE];
  var $ArrayBuffer = $buffer.ArrayBuffer;
  var $DataView = $buffer.DataView;
  var arrayForEach = createArrayMethod(0);
  var arrayFilter = createArrayMethod(2);
  var arraySome = createArrayMethod(3);
  var arrayEvery = createArrayMethod(4);
  var arrayFind = createArrayMethod(5);
  var arrayFindIndex = createArrayMethod(6);
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
  var ITERATOR$1 = wks$1("iterator");
  var TAG = wks$1("toStringTag");
  var TYPED_CONSTRUCTOR = uid$2("typed_constructor");
  var DEF_CONSTRUCTOR = uid$2("def_constructor");
  var ALL_CONSTRUCTORS = $typed.CONSTR;
  var TYPED_ARRAY = $typed.TYPED;
  var VIEW = $typed.VIEW;
  var WRONG_LENGTH = "Wrong length!";
  var $map = createArrayMethod(1, function(O, length) {
    return allocate(speciesConstructor$1(O, O[DEF_CONSTRUCTOR]), length);
  });
  var LITTLE_ENDIAN = fails$1(function() {
    return new Uint8Array$1(new Uint16Array([1]).buffer)[0] === 1;
  });
  var FORCED_SET = !!Uint8Array$1 && !!Uint8Array$1[PROTOTYPE].set && fails$1(function() {
    new Uint8Array$1(1).set({});
  });
  var toOffset = function(it, BYTES) {
    var offset = toInteger$1(it);
    if (offset < 0 || offset % BYTES)
      throw RangeError$1("Wrong offset!");
    return offset;
  };
  var validate = function(it) {
    if (isObject$5(it) && TYPED_ARRAY in it)
      return it;
    throw TypeError$1(it + " is not a typed array!");
  };
  var allocate = function(C, length) {
    if (!(isObject$5(C) && TYPED_CONSTRUCTOR in C)) {
      throw TypeError$1("It is not a typed array constructor!");
    }
    return new C(length);
  };
  var speciesFromList = function(O, list) {
    return fromList(speciesConstructor$1(O, O[DEF_CONSTRUCTOR]), list);
  };
  var fromList = function(C, list) {
    var index = 0;
    var length = list.length;
    var result = allocate(C, length);
    while (length > index)
      result[index] = list[index++];
    return result;
  };
  var addGetter = function(it, key, internal) {
    dP$2(it, key, { get: function() {
      return this._d[internal];
    } });
  };
  var $from = function from4(source) {
    var O = toObject$6(source);
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : void 0;
    var mapping = mapfn !== void 0;
    var iterFn = getIterFn(O);
    var i, length, values2, result, step2, iterator;
    if (iterFn != void 0 && !isArrayIter(iterFn)) {
      for (iterator = iterFn.call(O), values2 = [], i = 0; !(step2 = iterator.next()).done; i++) {
        values2.push(step2.value);
      }
      O = values2;
    }
    if (mapping && aLen > 2)
      mapfn = ctx$2(mapfn, arguments[2], 2);
    for (i = 0, length = toLength$5(O.length), result = allocate(this, length); length > i; i++) {
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }
    return result;
  };
  var $of = function of3() {
    var index = 0;
    var length = arguments.length;
    var result = allocate(this, length);
    while (length > index)
      result[index] = arguments[index++];
    return result;
  };
  var TO_LOCALE_BUG = !!Uint8Array$1 && fails$1(function() {
    arrayToLocaleString.call(new Uint8Array$1(1));
  });
  var $toLocaleString = function toLocaleString() {
    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
  };
  var proto$1 = {
    copyWithin: function copyWithin(target, start) {
      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : void 0);
    },
    every: function every2(callbackfn) {
      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : void 0);
    },
    fill: function fill(value) {
      return arrayFill.apply(validate(this), arguments);
    },
    filter: function filter2(callbackfn) {
      return speciesFromList(this, arrayFilter(
        validate(this),
        callbackfn,
        arguments.length > 1 ? arguments[1] : void 0
      ));
    },
    find: function find2(predicate) {
      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : void 0);
    },
    findIndex: function findIndex2(predicate) {
      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : void 0);
    },
    forEach: function forEach3(callbackfn) {
      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : void 0);
    },
    indexOf: function indexOf2(searchElement) {
      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : void 0);
    },
    includes: function includes3(searchElement) {
      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : void 0);
    },
    join: function join2(separator) {
      return arrayJoin.apply(validate(this), arguments);
    },
    lastIndexOf: function lastIndexOf2(searchElement) {
      return arrayLastIndexOf.apply(validate(this), arguments);
    },
    map: function map2(mapfn) {
      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : void 0);
    },
    reduce: function reduce2(callbackfn) {
      return arrayReduce.apply(validate(this), arguments);
    },
    reduceRight: function reduceRight2(callbackfn) {
      return arrayReduceRight.apply(validate(this), arguments);
    },
    reverse: function reverse() {
      var that = this;
      var length = validate(that).length;
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
    some: function some2(callbackfn) {
      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : void 0);
    },
    sort: function sort2(comparefn) {
      return arraySort.call(validate(this), comparefn);
    },
    subarray: function subarray(begin, end) {
      var O = validate(this);
      var length = O.length;
      var $begin = toAbsoluteIndex(begin, length);
      return new (speciesConstructor$1(O, O[DEF_CONSTRUCTOR]))(
        O.buffer,
        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
        toLength$5((end === void 0 ? length : toAbsoluteIndex(end, length)) - $begin)
      );
    }
  };
  var $slice = function slice4(start, end) {
    return speciesFromList(this, arraySlice.call(validate(this), start, end));
  };
  var $set = function set4(arrayLike) {
    validate(this);
    var offset = toOffset(arguments[1], 1);
    var length = this.length;
    var src = toObject$6(arrayLike);
    var len = toLength$5(src.length);
    var index = 0;
    if (len + offset > length)
      throw RangeError$1(WRONG_LENGTH);
    while (index < len)
      this[offset + index] = src[index++];
  };
  var $iterators$1 = {
    entries: function entries2() {
      return arrayEntries.call(validate(this));
    },
    keys: function keys2() {
      return arrayKeys.call(validate(this));
    },
    values: function values2() {
      return arrayValues.call(validate(this));
    }
  };
  var isTAIndex = function(target, key) {
    return isObject$5(target) && target[TYPED_ARRAY] && typeof key != "symbol" && key in target && String(+key) == String(key);
  };
  var $getDesc = function getOwnPropertyDescriptor5(target, key) {
    return isTAIndex(target, key = toPrimitive$3(key, true)) ? propertyDesc(2, target[key]) : gOPD$5(target, key);
  };
  var $setDesc = function defineProperty5(target, key, desc) {
    if (isTAIndex(target, key = toPrimitive$3(key, true)) && isObject$5(desc) && has$4(desc, "value") && !has$4(desc, "get") && !has$4(desc, "set") && !desc.configurable && (!has$4(desc, "writable") || desc.writable) && (!has$4(desc, "enumerable") || desc.enumerable)) {
      target[key] = desc.value;
      return target;
    }
    return dP$2(target, key, desc);
  };
  if (!ALL_CONSTRUCTORS) {
    $GOPD.f = $getDesc;
    $DP.f = $setDesc;
  }
  $export$T($export$T.S + $export$T.F * !ALL_CONSTRUCTORS, "Object", {
    getOwnPropertyDescriptor: $getDesc,
    defineProperty: $setDesc
  });
  if (fails$1(function() {
    arrayToString.call({});
  })) {
    arrayToString = arrayToLocaleString = function toString3() {
      return arrayJoin.call(this);
    };
  }
  var $TypedArrayPrototype$ = redefineAll$1({}, proto$1);
  redefineAll$1($TypedArrayPrototype$, $iterators$1);
  hide$2($TypedArrayPrototype$, ITERATOR$1, $iterators$1.values);
  redefineAll$1($TypedArrayPrototype$, {
    slice: $slice,
    set: $set,
    constructor: function() {
    },
    toString: arrayToString,
    toLocaleString: $toLocaleString
  });
  addGetter($TypedArrayPrototype$, "buffer", "b");
  addGetter($TypedArrayPrototype$, "byteOffset", "o");
  addGetter($TypedArrayPrototype$, "byteLength", "l");
  addGetter($TypedArrayPrototype$, "length", "e");
  dP$2($TypedArrayPrototype$, TAG, {
    get: function() {
      return this[TYPED_ARRAY];
    }
  });
  _typedArray.exports = function(KEY2, BYTES, wrapper2, CLAMPED) {
    CLAMPED = !!CLAMPED;
    var NAME = KEY2 + (CLAMPED ? "Clamped" : "") + "Array";
    var GETTER = "get" + KEY2;
    var SETTER = "set" + KEY2;
    var TypedArray = global$5[NAME];
    var Base2 = TypedArray || {};
    var TAC = TypedArray && getPrototypeOf$7(TypedArray);
    var FORCED2 = !TypedArray || !$typed.ABV;
    var O = {};
    var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
    var getter = function(that, index) {
      var data2 = that._d;
      return data2.v[GETTER](index * BYTES + data2.o, LITTLE_ENDIAN);
    };
    var setter2 = function(that, index, value) {
      var data2 = that._d;
      if (CLAMPED)
        value = (value = Math.round(value)) < 0 ? 0 : value > 255 ? 255 : value & 255;
      data2.v[SETTER](index * BYTES + data2.o, value, LITTLE_ENDIAN);
    };
    var addElement = function(that, index) {
      dP$2(that, index, {
        get: function() {
          return getter(this, index);
        },
        set: function(value) {
          return setter2(this, index, value);
        },
        enumerable: true
      });
    };
    if (FORCED2) {
      TypedArray = wrapper2(function(that, data2, $offset, $length) {
        anInstance$1(that, TypedArray, NAME, "_d");
        var index = 0;
        var offset = 0;
        var buffer2, byteLength, length, klass;
        if (!isObject$5(data2)) {
          length = toIndex(data2);
          byteLength = length * BYTES;
          buffer2 = new $ArrayBuffer(byteLength);
        } else if (data2 instanceof $ArrayBuffer || (klass = classof(data2)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          buffer2 = data2;
          offset = toOffset($offset, BYTES);
          var $len = data2.byteLength;
          if ($length === void 0) {
            if ($len % BYTES)
              throw RangeError$1(WRONG_LENGTH);
            byteLength = $len - offset;
            if (byteLength < 0)
              throw RangeError$1(WRONG_LENGTH);
          } else {
            byteLength = toLength$5($length) * BYTES;
            if (byteLength + offset > $len)
              throw RangeError$1(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if (TYPED_ARRAY in data2) {
          return fromList(TypedArray, data2);
        } else {
          return $from.call(TypedArray, data2);
        }
        hide$2(that, "_d", {
          b: buffer2,
          o: offset,
          l: byteLength,
          e: length,
          v: new $DataView(buffer2)
        });
        while (index < length)
          addElement(that, index++);
      });
      TypedArrayPrototype = TypedArray[PROTOTYPE] = create$1($TypedArrayPrototype$);
      hide$2(TypedArrayPrototype, "constructor", TypedArray);
    } else if (!fails$1(function() {
      TypedArray(1);
    }) || !fails$1(function() {
      new TypedArray(-1);
    }) || !$iterDetect(function(iter) {
      new TypedArray();
      new TypedArray(null);
      new TypedArray(1.5);
      new TypedArray(iter);
    }, true)) {
      TypedArray = wrapper2(function(that, data2, $offset, $length) {
        anInstance$1(that, TypedArray, NAME);
        var klass;
        if (!isObject$5(data2))
          return new Base2(toIndex(data2));
        if (data2 instanceof $ArrayBuffer || (klass = classof(data2)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          return $length !== void 0 ? new Base2(data2, toOffset($offset, BYTES), $length) : $offset !== void 0 ? new Base2(data2, toOffset($offset, BYTES)) : new Base2(data2);
        }
        if (TYPED_ARRAY in data2)
          return fromList(TypedArray, data2);
        return $from.call(TypedArray, data2);
      });
      arrayForEach(TAC !== Function.prototype ? gOPN$1(Base2).concat(gOPN$1(TAC)) : gOPN$1(Base2), function(key) {
        if (!(key in TypedArray))
          hide$2(TypedArray, key, Base2[key]);
      });
      TypedArray[PROTOTYPE] = TypedArrayPrototype;
      if (!LIBRARY)
        TypedArrayPrototype.constructor = TypedArray;
    }
    var $nativeIterator = TypedArrayPrototype[ITERATOR$1];
    var CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == "values" || $nativeIterator.name == void 0);
    var $iterator = $iterators$1.values;
    hide$2(TypedArray, TYPED_CONSTRUCTOR, true);
    hide$2(TypedArrayPrototype, TYPED_ARRAY, NAME);
    hide$2(TypedArrayPrototype, VIEW, true);
    hide$2(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);
    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
      dP$2(TypedArrayPrototype, TAG, {
        get: function() {
          return NAME;
        }
      });
    }
    O[NAME] = TypedArray;
    $export$T($export$T.G + $export$T.W + $export$T.F * (TypedArray != Base2), O);
    $export$T($export$T.S, NAME, {
      BYTES_PER_ELEMENT: BYTES
    });
    $export$T($export$T.S + $export$T.F * fails$1(function() {
      Base2.of.call(TypedArray, 1);
    }), NAME, {
      from: $from,
      of: $of
    });
    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype))
      hide$2(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);
    $export$T($export$T.P, NAME, proto$1);
    setSpecies(NAME);
    $export$T($export$T.P + $export$T.F * FORCED_SET, NAME, { set: $set });
    $export$T($export$T.P + $export$T.F * !CORRECT_ITER_NAME, NAME, $iterators$1);
    if (!LIBRARY && TypedArrayPrototype.toString != arrayToString)
      TypedArrayPrototype.toString = arrayToString;
    $export$T($export$T.P + $export$T.F * fails$1(function() {
      new TypedArray(1).slice();
    }), NAME, { slice: $slice });
    $export$T($export$T.P + $export$T.F * (fails$1(function() {
      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
    }) || !fails$1(function() {
      TypedArrayPrototype.toLocaleString.call([1, 2]);
    })), NAME, { toLocaleString: $toLocaleString });
    Iterators$1[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
    if (!LIBRARY && !CORRECT_ITER_NAME)
      hide$2(TypedArrayPrototype, ITERATOR$1, $iterator);
  };
} else
  _typedArray.exports = function() {
  };
_typedArray.exports("Int8", 1, function(init) {
  return function Int8Array(data2, byteOffset, length) {
    return init(this, data2, byteOffset, length);
  };
});
_typedArray.exports("Uint8", 1, function(init) {
  return function Uint8Array2(data2, byteOffset, length) {
    return init(this, data2, byteOffset, length);
  };
});
_typedArray.exports("Uint8", 1, function(init) {
  return function Uint8ClampedArray(data2, byteOffset, length) {
    return init(this, data2, byteOffset, length);
  };
}, true);
_typedArray.exports("Int16", 2, function(init) {
  return function Int16Array(data2, byteOffset, length) {
    return init(this, data2, byteOffset, length);
  };
});
_typedArray.exports("Uint16", 2, function(init) {
  return function Uint16Array2(data2, byteOffset, length) {
    return init(this, data2, byteOffset, length);
  };
});
_typedArray.exports("Int32", 4, function(init) {
  return function Int32Array(data2, byteOffset, length) {
    return init(this, data2, byteOffset, length);
  };
});
_typedArray.exports("Uint32", 4, function(init) {
  return function Uint32Array(data2, byteOffset, length) {
    return init(this, data2, byteOffset, length);
  };
});
_typedArray.exports("Float32", 4, function(init) {
  return function Float32Array(data2, byteOffset, length) {
    return init(this, data2, byteOffset, length);
  };
});
_typedArray.exports("Float64", 8, function(init) {
  return function Float64Array(data2, byteOffset, length) {
    return init(this, data2, byteOffset, length);
  };
});
var $export$S = _export;
var aFunction$7 = _aFunction;
var anObject$l = _anObject;
var rApply = (_global.exports.Reflect || {}).apply;
var fApply = Function.apply;
$export$S($export$S.S + $export$S.F * !_fails(function() {
  rApply(function() {
  });
}), "Reflect", {
  apply: function apply(target, thisArgument, argumentsList) {
    var T = aFunction$7(target);
    var L = anObject$l(argumentsList);
    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
  }
});
var $export$R = _export;
var create3 = _objectCreate;
var aFunction$6 = _aFunction;
var anObject$k = _anObject;
var isObject$4 = _isObject;
var fails = _fails;
var bind2 = _bind;
var rConstruct = (_global.exports.Reflect || {}).construct;
var NEW_TARGET_BUG = fails(function() {
  function F() {
  }
  return !(rConstruct(function() {
  }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function() {
  rConstruct(function() {
  });
});
$export$R($export$R.S + $export$R.F * (NEW_TARGET_BUG || ARGS_BUG), "Reflect", {
  construct: function construct2(Target, args) {
    aFunction$6(Target);
    anObject$k(args);
    var newTarget = arguments.length < 3 ? Target : aFunction$6(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG)
      return rConstruct(Target, args, newTarget);
    if (Target == newTarget) {
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
      }
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind2.apply(Target, $args))();
    }
    var proto = newTarget.prototype;
    var instance = create3(isObject$4(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject$4(result) ? result : instance;
  }
});
var dP$1 = _objectDp;
var $export$Q = _export;
var anObject$j = _anObject;
var toPrimitive$2 = _toPrimitive;
$export$Q($export$Q.S + $export$Q.F * _fails(function() {
  Reflect.defineProperty(dP$1.f({}, 1, { value: 1 }), 1, { value: 2 });
}), "Reflect", {
  defineProperty: function defineProperty4(target, propertyKey, attributes) {
    anObject$j(target);
    propertyKey = toPrimitive$2(propertyKey, true);
    anObject$j(attributes);
    try {
      dP$1.f(target, propertyKey, attributes);
      return true;
    } catch (e) {
      return false;
    }
  }
});
var $export$P = _export;
var gOPD$4 = _objectGopd.f;
var anObject$i = _anObject;
$export$P($export$P.S, "Reflect", {
  deleteProperty: function deleteProperty(target, propertyKey) {
    var desc = gOPD$4(anObject$i(target), propertyKey);
    return desc && !desc.configurable ? false : delete target[propertyKey];
  }
});
var $export$O = _export;
var anObject$h = _anObject;
var Enumerate = function(iterated) {
  this._t = anObject$h(iterated);
  this._i = 0;
  var keys2 = this._k = [];
  var key;
  for (key in iterated)
    keys2.push(key);
};
_iterCreate(Enumerate, "Object", function() {
  var that = this;
  var keys2 = that._k;
  var key;
  do {
    if (that._i >= keys2.length)
      return { value: void 0, done: true };
  } while (!((key = keys2[that._i++]) in that._t));
  return { value: key, done: false };
});
$export$O($export$O.S, "Reflect", {
  enumerate: function enumerate(target) {
    return new Enumerate(target);
  }
});
var gOPD$3 = _objectGopd;
var getPrototypeOf$6 = _objectGpo;
var has$3 = _has;
var $export$N = _export;
var isObject$3 = _isObject;
var anObject$g = _anObject;
function get$2(target, propertyKey) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var desc, proto;
  if (anObject$g(target) === receiver)
    return target[propertyKey];
  if (desc = gOPD$3.f(target, propertyKey))
    return has$3(desc, "value") ? desc.value : desc.get !== void 0 ? desc.get.call(receiver) : void 0;
  if (isObject$3(proto = getPrototypeOf$6(target)))
    return get$2(proto, propertyKey, receiver);
}
$export$N($export$N.S, "Reflect", { get: get$2 });
var gOPD$2 = _objectGopd;
var $export$M = _export;
var anObject$f = _anObject;
$export$M($export$M.S, "Reflect", {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor3(target, propertyKey) {
    return gOPD$2.f(anObject$f(target), propertyKey);
  }
});
var $export$L = _export;
var getProto$1 = _objectGpo;
var anObject$e = _anObject;
$export$L($export$L.S, "Reflect", {
  getPrototypeOf: function getPrototypeOf(target) {
    return getProto$1(anObject$e(target));
  }
});
var $export$K = _export;
$export$K($export$K.S, "Reflect", {
  has: function has(target, propertyKey) {
    return propertyKey in target;
  }
});
var $export$J = _export;
var anObject$d = _anObject;
var $isExtensible = Object.isExtensible;
$export$J($export$J.S, "Reflect", {
  isExtensible: function isExtensible2(target) {
    anObject$d(target);
    return $isExtensible ? $isExtensible(target) : true;
  }
});
var gOPN = _objectGopn;
var gOPS = _objectGops;
var anObject$c = _anObject;
var Reflect$1 = _global.exports.Reflect;
var _ownKeys = Reflect$1 && Reflect$1.ownKeys || function ownKeys(it) {
  var keys2 = gOPN.f(anObject$c(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys2.concat(getSymbols(it)) : keys2;
};
var $export$I = _export;
$export$I($export$I.S, "Reflect", { ownKeys: _ownKeys });
var $export$H = _export;
var anObject$b = _anObject;
var $preventExtensions = Object.preventExtensions;
$export$H($export$H.S, "Reflect", {
  preventExtensions: function preventExtensions(target) {
    anObject$b(target);
    try {
      if ($preventExtensions)
        $preventExtensions(target);
      return true;
    } catch (e) {
      return false;
    }
  }
});
var dP = _objectDp;
var gOPD$1 = _objectGopd;
var getPrototypeOf$5 = _objectGpo;
var has$2 = _has;
var $export$G = _export;
var createDesc = _propertyDesc;
var anObject$a = _anObject;
var isObject$2 = _isObject;
function set$2(target, propertyKey, V) {
  var receiver = arguments.length < 4 ? target : arguments[3];
  var ownDesc = gOPD$1.f(anObject$a(target), propertyKey);
  var existingDescriptor, proto;
  if (!ownDesc) {
    if (isObject$2(proto = getPrototypeOf$5(target))) {
      return set$2(proto, propertyKey, V, receiver);
    }
    ownDesc = createDesc(0);
  }
  if (has$2(ownDesc, "value")) {
    if (ownDesc.writable === false || !isObject$2(receiver))
      return false;
    if (existingDescriptor = gOPD$1.f(receiver, propertyKey)) {
      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false)
        return false;
      existingDescriptor.value = V;
      dP.f(receiver, propertyKey, existingDescriptor);
    } else
      dP.f(receiver, propertyKey, createDesc(0, V));
    return true;
  }
  return ownDesc.set === void 0 ? false : (ownDesc.set.call(receiver, V), true);
}
$export$G($export$G.S, "Reflect", { set: set$2 });
var $export$F = _export;
var setProto = _setProto;
if (setProto)
  $export$F($export$F.S, "Reflect", {
    setPrototypeOf: function setPrototypeOf2(target, proto) {
      setProto.check(target, proto);
      try {
        setProto.set(target, proto);
        return true;
      } catch (e) {
        return false;
      }
    }
  });
var $export$E = _export;
var $includes = _arrayIncludes(true);
$export$E($export$E.P, "Array", {
  includes: function includes2(el) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : void 0);
  }
});
_addToUnscopables("includes");
var isArray$1 = _isArray;
var isObject$1 = _isObject;
var toLength$4 = _toLength;
var ctx$1 = _ctx;
var IS_CONCAT_SPREADABLE = _wks.exports("isConcatSpreadable");
function flattenIntoArray$2(target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? ctx$1(mapper, thisArg, 3) : false;
  var element, spreadable;
  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];
      spreadable = false;
      if (isObject$1(element)) {
        spreadable = element[IS_CONCAT_SPREADABLE];
        spreadable = spreadable !== void 0 ? !!spreadable : isArray$1(element);
      }
      if (spreadable && depth > 0) {
        targetIndex = flattenIntoArray$2(target, original, element, toLength$4(element.length), targetIndex, depth - 1) - 1;
      } else {
        if (targetIndex >= 9007199254740991)
          throw TypeError();
        target[targetIndex] = element;
      }
      targetIndex++;
    }
    sourceIndex++;
  }
  return targetIndex;
}
var _flattenIntoArray = flattenIntoArray$2;
var $export$D = _export;
var flattenIntoArray$1 = _flattenIntoArray;
var toObject$5 = _toObject;
var toLength$3 = _toLength;
var aFunction$5 = _aFunction;
var arraySpeciesCreate$1 = _arraySpeciesCreate;
$export$D($export$D.P, "Array", {
  flatMap: function flatMap(callbackfn) {
    var O = toObject$5(this);
    var sourceLen, A;
    aFunction$5(callbackfn);
    sourceLen = toLength$3(O.length);
    A = arraySpeciesCreate$1(O, 0);
    flattenIntoArray$1(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);
    return A;
  }
});
_addToUnscopables("flatMap");
var $export$C = _export;
var flattenIntoArray = _flattenIntoArray;
var toObject$4 = _toObject;
var toLength$2 = _toLength;
var toInteger = _toInteger;
var arraySpeciesCreate = _arraySpeciesCreate;
$export$C($export$C.P, "Array", {
  flatten: function flatten() {
    var depthArg = arguments[0];
    var O = toObject$4(this);
    var sourceLen = toLength$2(O.length);
    var A = arraySpeciesCreate(O, 0);
    flattenIntoArray(A, O, O, sourceLen, 0, depthArg === void 0 ? 1 : toInteger(depthArg));
    return A;
  }
});
_addToUnscopables("flatten");
var $export$B = _export;
var $at = _stringAt(true);
var $fails = _fails;
var FORCED = $fails(function() {
  return "\u{20BB7}".at(0) !== "\u{20BB7}";
});
$export$B($export$B.P + $export$B.F * FORCED, "String", {
  at: function at2(pos) {
    return $at(this, pos);
  }
});
var toLength$1 = _toLength;
var repeat2 = _stringRepeat;
var defined$1 = _defined;
var _stringPad = function(that, maxLength, fillString, left) {
  var S = String(defined$1(that));
  var stringLength = S.length;
  var fillStr = fillString === void 0 ? " " : String(fillString);
  var intMaxLength = toLength$1(maxLength);
  if (intMaxLength <= stringLength || fillStr == "")
    return S;
  var fillLen = intMaxLength - stringLength;
  var stringFiller = repeat2.call(fillStr, Math.ceil(fillLen / fillStr.length));
  if (stringFiller.length > fillLen)
    stringFiller = stringFiller.slice(0, fillLen);
  return left ? stringFiller + S : S + stringFiller;
};
var $export$A = _export;
var $pad$1 = _stringPad;
var userAgent$2 = _userAgent;
var WEBKIT_BUG$1 = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent$2);
$export$A($export$A.P + $export$A.F * WEBKIT_BUG$1, "String", {
  padStart: function padStart(maxLength) {
    return $pad$1(this, maxLength, arguments.length > 1 ? arguments[1] : void 0, true);
  }
});
var $export$z = _export;
var $pad = _stringPad;
var userAgent$1 = _userAgent;
var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent$1);
$export$z($export$z.P + $export$z.F * WEBKIT_BUG, "String", {
  padEnd: function padEnd(maxLength) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : void 0, false);
  }
});
_stringTrim("trimLeft", function($trim2) {
  return function trimLeft() {
    return $trim2(this, 1);
  };
}, "trimStart");
_stringTrim("trimRight", function($trim2) {
  return function trimRight() {
    return $trim2(this, 2);
  };
}, "trimEnd");
var $export$y = _export;
var defined = _defined;
var toLength = _toLength;
var isRegExp = _isRegexp;
var getFlags = _flags;
var RegExpProto = RegExp.prototype;
var $RegExpStringIterator = function(regexp, string) {
  this._r = regexp;
  this._s = string;
};
_iterCreate($RegExpStringIterator, "RegExp String", function next() {
  var match = this._r.exec(this._s);
  return { value: match, done: match === null };
});
$export$y($export$y.P, "String", {
  matchAll: function matchAll(regexp) {
    defined(this);
    if (!isRegExp(regexp))
      throw TypeError(regexp + " is not a regexp!");
    var S = String(this);
    var flags = "flags" in RegExpProto ? String(regexp.flags) : getFlags.call(regexp);
    var rx = new RegExp(regexp.source, ~flags.indexOf("g") ? flags : "g" + flags);
    rx.lastIndex = toLength(regexp.lastIndex);
    return new $RegExpStringIterator(rx, S);
  }
});
_wksDefine("asyncIterator");
_wksDefine("observable");
var $export$x = _export;
var ownKeys$1 = _ownKeys;
var toIObject$1 = _toIobject;
var gOPD = _objectGopd;
var createProperty = _createProperty;
$export$x($export$x.S, "Object", {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject$1(object);
    var getDesc = gOPD.f;
    var keys2 = ownKeys$1(O);
    var result = {};
    var i = 0;
    var key, desc;
    while (keys2.length > i) {
      desc = getDesc(O, key = keys2[i++]);
      if (desc !== void 0)
        createProperty(result, key, desc);
    }
    return result;
  }
});
var DESCRIPTORS = _descriptors;
var getKeys$1 = _objectKeys;
var toIObject = _toIobject;
var isEnum = _objectPie.f;
var _objectToArray = function(isEntries) {
  return function(it) {
    var O = toIObject(it);
    var keys2 = getKeys$1(O);
    var length = keys2.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys2[i++];
      if (!DESCRIPTORS || isEnum.call(O, key)) {
        result.push(isEntries ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};
var $export$w = _export;
var $values = _objectToArray(false);
$export$w($export$w.S, "Object", {
  values: function values(it) {
    return $values(it);
  }
});
var $export$v = _export;
var $entries = _objectToArray(true);
$export$v($export$v.S, "Object", {
  entries: function entries(it) {
    return $entries(it);
  }
});
var _objectForcedPam;
var hasRequired_objectForcedPam;
function require_objectForcedPam() {
  if (hasRequired_objectForcedPam)
    return _objectForcedPam;
  hasRequired_objectForcedPam = 1;
  _objectForcedPam = !_fails(function() {
    var K = Math.random();
    __defineSetter__.call(null, K, function() {
    });
    delete _global.exports[K];
  });
  return _objectForcedPam;
}
var $export$u = _export;
var toObject$3 = _toObject;
var aFunction$4 = _aFunction;
var $defineProperty$1 = _objectDp;
_descriptors && $export$u($export$u.P + require_objectForcedPam(), "Object", {
  __defineGetter__: function __defineGetter__(P, getter) {
    $defineProperty$1.f(toObject$3(this), P, { get: aFunction$4(getter), enumerable: true, configurable: true });
  }
});
var $export$t = _export;
var toObject$2 = _toObject;
var aFunction$3 = _aFunction;
var $defineProperty = _objectDp;
_descriptors && $export$t($export$t.P + require_objectForcedPam(), "Object", {
  __defineSetter__: function __defineSetter__2(P, setter2) {
    $defineProperty.f(toObject$2(this), P, { set: aFunction$3(setter2), enumerable: true, configurable: true });
  }
});
var $export$s = _export;
var toObject$1 = _toObject;
var toPrimitive$1 = _toPrimitive;
var getPrototypeOf$4 = _objectGpo;
var getOwnPropertyDescriptor$1 = _objectGopd.f;
_descriptors && $export$s($export$s.P + require_objectForcedPam(), "Object", {
  __lookupGetter__: function __lookupGetter__(P) {
    var O = toObject$1(this);
    var K = toPrimitive$1(P, true);
    var D;
    do {
      if (D = getOwnPropertyDescriptor$1(O, K))
        return D.get;
    } while (O = getPrototypeOf$4(O));
  }
});
var $export$r = _export;
var toObject = _toObject;
var toPrimitive = _toPrimitive;
var getPrototypeOf$3 = _objectGpo;
var getOwnPropertyDescriptor4 = _objectGopd.f;
_descriptors && $export$r($export$r.P + require_objectForcedPam(), "Object", {
  __lookupSetter__: function __lookupSetter__(P) {
    var O = toObject(this);
    var K = toPrimitive(P, true);
    var D;
    do {
      if (D = getOwnPropertyDescriptor4(O, K))
        return D.set;
    } while (O = getPrototypeOf$3(O));
  }
});
var forOf$2 = _forOf.exports;
var _arrayFromIterable = function(iter, ITERATOR2) {
  var result = [];
  forOf$2(iter, false, result.push, result, ITERATOR2);
  return result;
};
var _collectionToJson;
var hasRequired_collectionToJson;
function require_collectionToJson() {
  if (hasRequired_collectionToJson)
    return _collectionToJson;
  hasRequired_collectionToJson = 1;
  var classof = _classof;
  var from4 = _arrayFromIterable;
  _collectionToJson = function(NAME) {
    return function toJSON2() {
      if (classof(this) != NAME)
        throw TypeError(NAME + "#toJSON isn't generic");
      return from4(this);
    };
  };
  return _collectionToJson;
}
var $export$q = _export;
$export$q($export$q.P + $export$q.R, "Map", { toJSON: require_collectionToJson()("Map") });
var $export$p = _export;
$export$p($export$p.P + $export$p.R, "Set", { toJSON: require_collectionToJson()("Set") });
var $export$o = _export;
var _setCollectionOf = function(COLLECTION) {
  $export$o($export$o.S, COLLECTION, { of: function of3() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--)
      A[length] = arguments[length];
    return new this(A);
  } });
};
_setCollectionOf("Map");
_setCollectionOf("Set");
_setCollectionOf("WeakMap");
_setCollectionOf("WeakSet");
var $export$n = _export;
var aFunction$2 = _aFunction;
var ctx = _ctx;
var forOf$1 = _forOf.exports;
var _setCollectionFrom = function(COLLECTION) {
  $export$n($export$n.S, COLLECTION, { from: function from4(source) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction$2(this);
    mapping = mapFn !== void 0;
    if (mapping)
      aFunction$2(mapFn);
    if (source == void 0)
      return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf$1(source, false, function(nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf$1(source, false, A.push, A);
    }
    return new this(A);
  } });
};
_setCollectionFrom("Map");
_setCollectionFrom("Set");
_setCollectionFrom("WeakMap");
_setCollectionFrom("WeakSet");
var $export$m = _export;
$export$m($export$m.G, { global: _global.exports });
var $export$l = _export;
$export$l($export$l.S, "System", { global: _global.exports });
var $export$k = _export;
var cof = _cof;
$export$k($export$k.S, "Error", {
  isError: function isError(it) {
    return cof(it) === "Error";
  }
});
var $export$j = _export;
$export$j($export$j.S, "Math", {
  clamp: function clamp(x, lower, upper) {
    return Math.min(upper, Math.max(lower, x));
  }
});
var $export$i = _export;
$export$i($export$i.S, "Math", { DEG_PER_RAD: Math.PI / 180 });
var $export$h = _export;
var RAD_PER_DEG = 180 / Math.PI;
$export$h($export$h.S, "Math", {
  degrees: function degrees(radians2) {
    return radians2 * RAD_PER_DEG;
  }
});
var _mathScale = Math.scale || function scale(x, inLow, inHigh, outLow, outHigh) {
  if (arguments.length === 0 || x != x || inLow != inLow || inHigh != inHigh || outLow != outLow || outHigh != outHigh)
    return NaN;
  if (x === Infinity || x === -Infinity)
    return x;
  return (x - inLow) * (outHigh - outLow) / (inHigh - inLow) + outLow;
};
var $export$g = _export;
var scale2 = _mathScale;
var fround2 = _mathFround;
$export$g($export$g.S, "Math", {
  fscale: function fscale(x, inLow, inHigh, outLow, outHigh) {
    return fround2(scale2(x, inLow, inHigh, outLow, outHigh));
  }
});
var $export$f = _export;
$export$f($export$f.S, "Math", {
  iaddh: function iaddh(x0, x1, y0, y1) {
    var $x0 = x0 >>> 0;
    var $x1 = x1 >>> 0;
    var $y0 = y0 >>> 0;
    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
  }
});
var $export$e = _export;
$export$e($export$e.S, "Math", {
  isubh: function isubh(x0, x1, y0, y1) {
    var $x0 = x0 >>> 0;
    var $x1 = x1 >>> 0;
    var $y0 = y0 >>> 0;
    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
  }
});
var $export$d = _export;
$export$d($export$d.S, "Math", {
  imulh: function imulh(u, v) {
    var UINT16 = 65535;
    var $u = +u;
    var $v = +v;
    var u0 = $u & UINT16;
    var v0 = $v & UINT16;
    var u1 = $u >> 16;
    var v1 = $v >> 16;
    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
  }
});
var $export$c = _export;
$export$c($export$c.S, "Math", { RAD_PER_DEG: 180 / Math.PI });
var $export$b = _export;
var DEG_PER_RAD = Math.PI / 180;
$export$b($export$b.S, "Math", {
  radians: function radians(degrees2) {
    return degrees2 * DEG_PER_RAD;
  }
});
var $export$a = _export;
$export$a($export$a.S, "Math", { scale: _mathScale });
var $export$9 = _export;
$export$9($export$9.S, "Math", {
  umulh: function umulh(u, v) {
    var UINT16 = 65535;
    var $u = +u;
    var $v = +v;
    var u0 = $u & UINT16;
    var v0 = $v & UINT16;
    var u1 = $u >>> 16;
    var v1 = $v >>> 16;
    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
  }
});
var $export$8 = _export;
$export$8($export$8.S, "Math", { signbit: function signbit(x) {
  return (x = +x) != x ? x : x == 0 ? 1 / x == Infinity : x > 0;
} });
var $export$7 = _export;
var core$1 = _core.exports;
var global$4 = _global.exports;
var speciesConstructor = _speciesConstructor;
var promiseResolve = _promiseResolve;
$export$7($export$7.P + $export$7.R, "Promise", { "finally": function(onFinally) {
  var C = speciesConstructor(this, core$1.Promise || global$4.Promise);
  var isFunction2 = typeof onFinally == "function";
  return this.then(
    isFunction2 ? function(x) {
      return promiseResolve(C, onFinally()).then(function() {
        return x;
      });
    } : onFinally,
    isFunction2 ? function(e) {
      return promiseResolve(C, onFinally()).then(function() {
        throw e;
      });
    } : onFinally
  );
} });
var $export$6 = _export;
var newPromiseCapability = _newPromiseCapability;
var perform = _perform;
$export$6($export$6.S, "Promise", { "try": function(callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });
var Map$1 = es6_map;
var $export$5 = _export;
var shared = _shared.exports("metadata");
var store$1 = shared.store || (shared.store = new es6_weakMap.exports());
var getOrCreateMetadataMap$1 = function(target, targetKey, create4) {
  var targetMetadata = store$1.get(target);
  if (!targetMetadata) {
    if (!create4)
      return void 0;
    store$1.set(target, targetMetadata = new Map$1());
  }
  var keyMetadata = targetMetadata.get(targetKey);
  if (!keyMetadata) {
    if (!create4)
      return void 0;
    targetMetadata.set(targetKey, keyMetadata = new Map$1());
  }
  return keyMetadata;
};
var ordinaryHasOwnMetadata$3 = function(MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap$1(O, P, false);
  return metadataMap === void 0 ? false : metadataMap.has(MetadataKey);
};
var ordinaryGetOwnMetadata$2 = function(MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap$1(O, P, false);
  return metadataMap === void 0 ? void 0 : metadataMap.get(MetadataKey);
};
var ordinaryDefineOwnMetadata$2 = function(MetadataKey, MetadataValue, O, P) {
  getOrCreateMetadataMap$1(O, P, true).set(MetadataKey, MetadataValue);
};
var ordinaryOwnMetadataKeys$2 = function(target, targetKey) {
  var metadataMap = getOrCreateMetadataMap$1(target, targetKey, false);
  var keys2 = [];
  if (metadataMap)
    metadataMap.forEach(function(_, key) {
      keys2.push(key);
    });
  return keys2;
};
var toMetaKey$9 = function(it) {
  return it === void 0 || typeof it == "symbol" ? it : String(it);
};
var exp = function(O) {
  $export$5($export$5.S, "Reflect", O);
};
var _metadata = {
  store: store$1,
  map: getOrCreateMetadataMap$1,
  has: ordinaryHasOwnMetadata$3,
  get: ordinaryGetOwnMetadata$2,
  set: ordinaryDefineOwnMetadata$2,
  keys: ordinaryOwnMetadataKeys$2,
  key: toMetaKey$9,
  exp
};
var metadata$7 = _metadata;
var anObject$9 = _anObject;
var toMetaKey$8 = metadata$7.key;
var ordinaryDefineOwnMetadata$1 = metadata$7.set;
metadata$7.exp({ defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey) {
  ordinaryDefineOwnMetadata$1(metadataKey, metadataValue, anObject$9(target), toMetaKey$8(targetKey));
} });
var metadata$6 = _metadata;
var anObject$8 = _anObject;
var toMetaKey$7 = metadata$6.key;
var getOrCreateMetadataMap = metadata$6.map;
var store = metadata$6.store;
metadata$6.exp({ deleteMetadata: function deleteMetadata(metadataKey, target) {
  var targetKey = arguments.length < 3 ? void 0 : toMetaKey$7(arguments[2]);
  var metadataMap = getOrCreateMetadataMap(anObject$8(target), targetKey, false);
  if (metadataMap === void 0 || !metadataMap["delete"](metadataKey))
    return false;
  if (metadataMap.size)
    return true;
  var targetMetadata = store.get(target);
  targetMetadata["delete"](targetKey);
  return !!targetMetadata.size || store["delete"](target);
} });
var metadata$5 = _metadata;
var anObject$7 = _anObject;
var getPrototypeOf$2 = _objectGpo;
var ordinaryHasOwnMetadata$2 = metadata$5.has;
var ordinaryGetOwnMetadata$1 = metadata$5.get;
var toMetaKey$6 = metadata$5.key;
var ordinaryGetMetadata = function(MetadataKey, O, P) {
  var hasOwn2 = ordinaryHasOwnMetadata$2(MetadataKey, O, P);
  if (hasOwn2)
    return ordinaryGetOwnMetadata$1(MetadataKey, O, P);
  var parent = getPrototypeOf$2(O);
  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : void 0;
};
metadata$5.exp({ getMetadata: function getMetadata(metadataKey, target) {
  return ordinaryGetMetadata(metadataKey, anObject$7(target), arguments.length < 3 ? void 0 : toMetaKey$6(arguments[2]));
} });
var Set$1 = es6_set;
var from2 = _arrayFromIterable;
var metadata$4 = _metadata;
var anObject$6 = _anObject;
var getPrototypeOf$1 = _objectGpo;
var ordinaryOwnMetadataKeys$1 = metadata$4.keys;
var toMetaKey$5 = metadata$4.key;
var ordinaryMetadataKeys = function(O, P) {
  var oKeys = ordinaryOwnMetadataKeys$1(O, P);
  var parent = getPrototypeOf$1(O);
  if (parent === null)
    return oKeys;
  var pKeys = ordinaryMetadataKeys(parent, P);
  return pKeys.length ? oKeys.length ? from2(new Set$1(oKeys.concat(pKeys))) : pKeys : oKeys;
};
metadata$4.exp({ getMetadataKeys: function getMetadataKeys(target) {
  return ordinaryMetadataKeys(anObject$6(target), arguments.length < 2 ? void 0 : toMetaKey$5(arguments[1]));
} });
var metadata$3 = _metadata;
var anObject$5 = _anObject;
var ordinaryGetOwnMetadata = metadata$3.get;
var toMetaKey$4 = metadata$3.key;
metadata$3.exp({ getOwnMetadata: function getOwnMetadata(metadataKey, target) {
  return ordinaryGetOwnMetadata(
    metadataKey,
    anObject$5(target),
    arguments.length < 3 ? void 0 : toMetaKey$4(arguments[2])
  );
} });
var metadata$2 = _metadata;
var anObject$4 = _anObject;
var ordinaryOwnMetadataKeys = metadata$2.keys;
var toMetaKey$3 = metadata$2.key;
metadata$2.exp({ getOwnMetadataKeys: function getOwnMetadataKeys(target) {
  return ordinaryOwnMetadataKeys(anObject$4(target), arguments.length < 2 ? void 0 : toMetaKey$3(arguments[1]));
} });
var metadata$1 = _metadata;
var anObject$3 = _anObject;
var getPrototypeOf2 = _objectGpo;
var ordinaryHasOwnMetadata$1 = metadata$1.has;
var toMetaKey$2 = metadata$1.key;
var ordinaryHasMetadata = function(MetadataKey, O, P) {
  var hasOwn2 = ordinaryHasOwnMetadata$1(MetadataKey, O, P);
  if (hasOwn2)
    return true;
  var parent = getPrototypeOf2(O);
  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
};
metadata$1.exp({ hasMetadata: function hasMetadata(metadataKey, target) {
  return ordinaryHasMetadata(metadataKey, anObject$3(target), arguments.length < 3 ? void 0 : toMetaKey$2(arguments[2]));
} });
var metadata = _metadata;
var anObject$2 = _anObject;
var ordinaryHasOwnMetadata = metadata.has;
var toMetaKey$1 = metadata.key;
metadata.exp({ hasOwnMetadata: function hasOwnMetadata(metadataKey, target) {
  return ordinaryHasOwnMetadata(
    metadataKey,
    anObject$2(target),
    arguments.length < 3 ? void 0 : toMetaKey$1(arguments[2])
  );
} });
var $metadata = _metadata;
var anObject$1 = _anObject;
var aFunction$1 = _aFunction;
var toMetaKey = $metadata.key;
var ordinaryDefineOwnMetadata = $metadata.set;
$metadata.exp({ metadata: function metadata2(metadataKey, metadataValue) {
  return function decorator(target, targetKey) {
    ordinaryDefineOwnMetadata(
      metadataKey,
      metadataValue,
      (targetKey !== void 0 ? anObject$1 : aFunction$1)(target),
      toMetaKey(targetKey)
    );
  };
} });
var $export$4 = _export;
var microtask$1 = _microtask();
var process = _global.exports.process;
var isNode = _cof(process) == "process";
$export$4($export$4.G, {
  asap: function asap(fn) {
    var domain = isNode && process.domain;
    microtask$1(domain ? domain.bind(fn) : fn);
  }
});
var $export$3 = _export;
var global$3 = _global.exports;
var core = _core.exports;
var microtask = _microtask();
var OBSERVABLE = _wks.exports("observable");
var aFunction = _aFunction;
var anObject = _anObject;
var anInstance = _anInstance;
var redefineAll = _redefineAll;
var hide$1 = _hide;
var forOf = _forOf.exports;
var RETURN = forOf.RETURN;
var getMethod = function(fn) {
  return fn == null ? void 0 : aFunction(fn);
};
var cleanupSubscription = function(subscription) {
  var cleanup = subscription._c;
  if (cleanup) {
    subscription._c = void 0;
    cleanup();
  }
};
var subscriptionClosed = function(subscription) {
  return subscription._o === void 0;
};
var closeSubscription = function(subscription) {
  if (!subscriptionClosed(subscription)) {
    subscription._o = void 0;
    cleanupSubscription(subscription);
  }
};
var Subscription = function(observer, subscriber) {
  anObject(observer);
  this._c = void 0;
  this._o = observer;
  observer = new SubscriptionObserver(this);
  try {
    var cleanup = subscriber(observer);
    var subscription = cleanup;
    if (cleanup != null) {
      if (typeof cleanup.unsubscribe === "function")
        cleanup = function() {
          subscription.unsubscribe();
        };
      else
        aFunction(cleanup);
      this._c = cleanup;
    }
  } catch (e) {
    observer.error(e);
    return;
  }
  if (subscriptionClosed(this))
    cleanupSubscription(this);
};
Subscription.prototype = redefineAll({}, {
  unsubscribe: function unsubscribe() {
    closeSubscription(this);
  }
});
var SubscriptionObserver = function(subscription) {
  this._s = subscription;
};
SubscriptionObserver.prototype = redefineAll({}, {
  next: function next2(value) {
    var subscription = this._s;
    if (!subscriptionClosed(subscription)) {
      var observer = subscription._o;
      try {
        var m = getMethod(observer.next);
        if (m)
          return m.call(observer, value);
      } catch (e) {
        try {
          closeSubscription(subscription);
        } finally {
          throw e;
        }
      }
    }
  },
  error: function error(value) {
    var subscription = this._s;
    if (subscriptionClosed(subscription))
      throw value;
    var observer = subscription._o;
    subscription._o = void 0;
    try {
      var m = getMethod(observer.error);
      if (!m)
        throw value;
      value = m.call(observer, value);
    } catch (e) {
      try {
        cleanupSubscription(subscription);
      } finally {
        throw e;
      }
    }
    cleanupSubscription(subscription);
    return value;
  },
  complete: function complete(value) {
    var subscription = this._s;
    if (!subscriptionClosed(subscription)) {
      var observer = subscription._o;
      subscription._o = void 0;
      try {
        var m = getMethod(observer.complete);
        value = m ? m.call(observer, value) : void 0;
      } catch (e) {
        try {
          cleanupSubscription(subscription);
        } finally {
          throw e;
        }
      }
      cleanupSubscription(subscription);
      return value;
    }
  }
});
var $Observable = function Observable(subscriber) {
  anInstance(this, $Observable, "Observable", "_f")._f = aFunction(subscriber);
};
redefineAll($Observable.prototype, {
  subscribe: function subscribe(observer) {
    return new Subscription(observer, this._f);
  },
  forEach: function forEach2(fn) {
    var that = this;
    return new (core.Promise || global$3.Promise)(function(resolve3, reject2) {
      aFunction(fn);
      var subscription = that.subscribe({
        next: function(value) {
          try {
            return fn(value);
          } catch (e) {
            reject2(e);
            subscription.unsubscribe();
          }
        },
        error: reject2,
        complete: resolve3
      });
    });
  }
});
redefineAll($Observable, {
  from: function from3(x) {
    var C = typeof this === "function" ? this : $Observable;
    var method = getMethod(anObject(x)[OBSERVABLE]);
    if (method) {
      var observable = anObject(method.call(x));
      return observable.constructor === C ? observable : new C(function(observer) {
        return observable.subscribe(observer);
      });
    }
    return new C(function(observer) {
      var done = false;
      microtask(function() {
        if (!done) {
          try {
            if (forOf(x, false, function(it) {
              observer.next(it);
              if (done)
                return RETURN;
            }) === RETURN)
              return;
          } catch (e) {
            if (done)
              throw e;
            observer.error(e);
            return;
          }
          observer.complete();
        }
      });
      return function() {
        done = true;
      };
    });
  },
  of: function of2() {
    for (var i = 0, l2 = arguments.length, items = new Array(l2); i < l2; )
      items[i] = arguments[i++];
    return new (typeof this === "function" ? this : $Observable)(function(observer) {
      var done = false;
      microtask(function() {
        if (!done) {
          for (var j = 0; j < items.length; ++j) {
            observer.next(items[j]);
            if (done)
              return;
          }
          observer.complete();
        }
      });
      return function() {
        done = true;
      };
    });
  }
});
hide$1($Observable.prototype, OBSERVABLE, function() {
  return this;
});
$export$3($export$3.G, { Observable: $Observable });
_setSpecies("Observable");
var global$2 = _global.exports;
var $export$2 = _export;
var userAgent = _userAgent;
var slice3 = [].slice;
var MSIE = /MSIE .\./.test(userAgent);
var wrap = function(set4) {
  return function(fn, time) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice3.call(arguments, 2) : false;
    return set4(boundArgs ? function() {
      (typeof fn == "function" ? fn : Function(fn)).apply(this, args);
    } : fn, time);
  };
};
$export$2($export$2.G + $export$2.B + $export$2.F * MSIE, {
  setTimeout: wrap(global$2.setTimeout),
  setInterval: wrap(global$2.setInterval)
});
var $export$1 = _export;
var $task = _task;
$export$1($export$1.G + $export$1.B, {
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
var ITERATOR = wks("iterator");
var TO_STRING_TAG = wks("toStringTag");
var ArrayValues = Iterators.Array;
var DOMIterables = {
  CSSRuleList: true,
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
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};
for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global$1[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR])
      hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG])
      hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) {
      for (key in $iterators)
        if (!proto[key])
          redefine(proto, key, $iterators[key], true);
    }
  }
}
(function(module) {
  module.exports = _core.exports;
})(shim);
var runtime = { exports: {} };
(function(module) {
  !function(global2) {
    var Op = Object.prototype;
    var hasOwn2 = Op.hasOwnProperty;
    var undefined$1;
    var $Symbol2 = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol2.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol2.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol2.toStringTag || "@@toStringTag";
    var runtime2 = global2.regeneratorRuntime;
    if (runtime2) {
      {
        module.exports = runtime2;
      }
      return;
    }
    runtime2 = global2.regeneratorRuntime = module.exports;
    function wrap2(innerFn, outerFn, self2, tryLocsList) {
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
      var generator = Object.create(protoGenerator.prototype);
      var context2 = new Context(tryLocsList || []);
      generator._invoke = makeInvokeMethod(innerFn, self2, context2);
      return generator;
    }
    runtime2.wrap = wrap2;
    function tryCatch(fn, obj, arg) {
      try {
        return { type: "normal", arg: fn.call(obj, arg) };
      } catch (err) {
        return { type: "throw", arg: err };
      }
    }
    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";
    var ContinueSentinel = {};
    function Generator() {
    }
    function GeneratorFunction() {
    }
    function GeneratorFunctionPrototype() {
    }
    var IteratorPrototype2 = {};
    IteratorPrototype2[iteratorSymbol] = function() {
      return this;
    };
    var getProto2 = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto2 && getProto2(getProto2(values2([])));
    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn2.call(NativeIteratorPrototype, iteratorSymbol)) {
      IteratorPrototype2 = NativeIteratorPrototype;
    }
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype2);
    GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
    GeneratorFunctionPrototype.constructor = GeneratorFunction;
    GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";
    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function(method) {
        prototype[method] = function(arg) {
          return this._invoke(method, arg);
        };
      });
    }
    runtime2.isGeneratorFunction = function(genFun) {
      var ctor = typeof genFun === "function" && genFun.constructor;
      return ctor ? ctor === GeneratorFunction || (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };
    runtime2.mark = function(genFun) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
      } else {
        genFun.__proto__ = GeneratorFunctionPrototype;
        if (!(toStringTagSymbol in genFun)) {
          genFun[toStringTagSymbol] = "GeneratorFunction";
        }
      }
      genFun.prototype = Object.create(Gp);
      return genFun;
    };
    runtime2.awrap = function(arg) {
      return { __await: arg };
    };
    function AsyncIterator(generator) {
      function invoke2(method, arg, resolve3, reject2) {
        var record = tryCatch(generator[method], generator, arg);
        if (record.type === "throw") {
          reject2(record.arg);
        } else {
          var result = record.arg;
          var value = result.value;
          if (value && typeof value === "object" && hasOwn2.call(value, "__await")) {
            return Promise.resolve(value.__await).then(function(value2) {
              invoke2("next", value2, resolve3, reject2);
            }, function(err) {
              invoke2("throw", err, resolve3, reject2);
            });
          }
          return Promise.resolve(value).then(function(unwrapped) {
            result.value = unwrapped;
            resolve3(result);
          }, reject2);
        }
      }
      if (typeof global2.process === "object" && global2.process.domain) {
        invoke2 = global2.process.domain.bind(invoke2);
      }
      var previousPromise;
      function enqueue(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new Promise(function(resolve3, reject2) {
            invoke2(method, arg, resolve3, reject2);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
      }
      this._invoke = enqueue;
    }
    defineIteratorMethods(AsyncIterator.prototype);
    AsyncIterator.prototype[asyncIteratorSymbol] = function() {
      return this;
    };
    runtime2.AsyncIterator = AsyncIterator;
    runtime2.async = function(innerFn, outerFn, self2, tryLocsList) {
      var iter = new AsyncIterator(
        wrap2(innerFn, outerFn, self2, tryLocsList)
      );
      return runtime2.isGeneratorFunction(outerFn) ? iter : iter.next().then(function(result) {
        return result.done ? result.value : iter.next();
      });
    };
    function makeInvokeMethod(innerFn, self2, context2) {
      var state = GenStateSuspendedStart;
      return function invoke2(method, arg) {
        if (state === GenStateExecuting) {
          throw new Error("Generator is already running");
        }
        if (state === GenStateCompleted) {
          if (method === "throw") {
            throw arg;
          }
          return doneResult();
        }
        context2.method = method;
        context2.arg = arg;
        while (true) {
          var delegate = context2.delegate;
          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context2);
            if (delegateResult) {
              if (delegateResult === ContinueSentinel)
                continue;
              return delegateResult;
            }
          }
          if (context2.method === "next") {
            context2.sent = context2._sent = context2.arg;
          } else if (context2.method === "throw") {
            if (state === GenStateSuspendedStart) {
              state = GenStateCompleted;
              throw context2.arg;
            }
            context2.dispatchException(context2.arg);
          } else if (context2.method === "return") {
            context2.abrupt("return", context2.arg);
          }
          state = GenStateExecuting;
          var record = tryCatch(innerFn, self2, context2);
          if (record.type === "normal") {
            state = context2.done ? GenStateCompleted : GenStateSuspendedYield;
            if (record.arg === ContinueSentinel) {
              continue;
            }
            return {
              value: record.arg,
              done: context2.done
            };
          } else if (record.type === "throw") {
            state = GenStateCompleted;
            context2.method = "throw";
            context2.arg = record.arg;
          }
        }
      };
    }
    function maybeInvokeDelegate(delegate, context2) {
      var method = delegate.iterator[context2.method];
      if (method === undefined$1) {
        context2.delegate = null;
        if (context2.method === "throw") {
          if (delegate.iterator.return) {
            context2.method = "return";
            context2.arg = undefined$1;
            maybeInvokeDelegate(delegate, context2);
            if (context2.method === "throw") {
              return ContinueSentinel;
            }
          }
          context2.method = "throw";
          context2.arg = new TypeError(
            "The iterator does not provide a 'throw' method"
          );
        }
        return ContinueSentinel;
      }
      var record = tryCatch(method, delegate.iterator, context2.arg);
      if (record.type === "throw") {
        context2.method = "throw";
        context2.arg = record.arg;
        context2.delegate = null;
        return ContinueSentinel;
      }
      var info = record.arg;
      if (!info) {
        context2.method = "throw";
        context2.arg = new TypeError("iterator result is not an object");
        context2.delegate = null;
        return ContinueSentinel;
      }
      if (info.done) {
        context2[delegate.resultName] = info.value;
        context2.next = delegate.nextLoc;
        if (context2.method !== "return") {
          context2.method = "next";
          context2.arg = undefined$1;
        }
      } else {
        return info;
      }
      context2.delegate = null;
      return ContinueSentinel;
    }
    defineIteratorMethods(Gp);
    Gp[toStringTagSymbol] = "Generator";
    Gp[iteratorSymbol] = function() {
      return this;
    };
    Gp.toString = function() {
      return "[object Generator]";
    };
    function pushTryEntry(locs) {
      var entry = { tryLoc: locs[0] };
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
      this.tryEntries = [{ tryLoc: "root" }];
      tryLocsList.forEach(pushTryEntry, this);
      this.reset(true);
    }
    runtime2.keys = function(object) {
      var keys2 = [];
      for (var key in object) {
        keys2.push(key);
      }
      keys2.reverse();
      return function next3() {
        while (keys2.length) {
          var key2 = keys2.pop();
          if (key2 in object) {
            next3.value = key2;
            next3.done = false;
            return next3;
          }
        }
        next3.done = true;
        return next3;
      };
    };
    function values2(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];
        if (iteratorMethod) {
          return iteratorMethod.call(iterable);
        }
        if (typeof iterable.next === "function") {
          return iterable;
        }
        if (!isNaN(iterable.length)) {
          var i = -1, next3 = function next4() {
            while (++i < iterable.length) {
              if (hasOwn2.call(iterable, i)) {
                next4.value = iterable[i];
                next4.done = false;
                return next4;
              }
            }
            next4.value = undefined$1;
            next4.done = true;
            return next4;
          };
          return next3.next = next3;
        }
      }
      return { next: doneResult };
    }
    runtime2.values = values2;
    function doneResult() {
      return { value: undefined$1, done: true };
    }
    Context.prototype = {
      constructor: Context,
      reset: function(skipTempReset) {
        this.prev = 0;
        this.next = 0;
        this.sent = this._sent = undefined$1;
        this.done = false;
        this.delegate = null;
        this.method = "next";
        this.arg = undefined$1;
        this.tryEntries.forEach(resetTryEntry);
        if (!skipTempReset) {
          for (var name in this) {
            if (name.charAt(0) === "t" && hasOwn2.call(this, name) && !isNaN(+name.slice(1))) {
              this[name] = undefined$1;
            }
          }
        }
      },
      stop: function() {
        this.done = true;
        var rootEntry = this.tryEntries[0];
        var rootRecord = rootEntry.completion;
        if (rootRecord.type === "throw") {
          throw rootRecord.arg;
        }
        return this.rval;
      },
      dispatchException: function(exception) {
        if (this.done) {
          throw exception;
        }
        var context2 = this;
        function handle(loc, caught) {
          record.type = "throw";
          record.arg = exception;
          context2.next = loc;
          if (caught) {
            context2.method = "next";
            context2.arg = undefined$1;
          }
          return !!caught;
        }
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          var record = entry.completion;
          if (entry.tryLoc === "root") {
            return handle("end");
          }
          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn2.call(entry, "catchLoc");
            var hasFinally = hasOwn2.call(entry, "finallyLoc");
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
      abrupt: function(type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc <= this.prev && hasOwn2.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }
        if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
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
      complete: function(record, afterLoc) {
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
      finish: function(finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.finallyLoc === finallyLoc) {
            this.complete(entry.completion, entry.afterLoc);
            resetTryEntry(entry);
            return ContinueSentinel;
          }
        }
      },
      "catch": function(tryLoc) {
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
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function(iterable, resultName, nextLoc) {
        this.delegate = {
          iterator: values2(iterable),
          resultName,
          nextLoc
        };
        if (this.method === "next") {
          this.arg = undefined$1;
        }
        return ContinueSentinel;
      }
    };
  }(
    typeof commonjsGlobal === "object" ? commonjsGlobal : typeof window === "object" ? window : typeof self === "object" ? self : commonjsGlobal
  );
})(runtime);
var _replacer = function(regExp, replace) {
  var replacer2 = replace === Object(replace) ? function(part) {
    return replace[part];
  } : replace;
  return function(it) {
    return String(it).replace(regExp, replacer2);
  };
};
var $export = _export;
var $re = _replacer(/[\\^$*+?.()|[\]{}]/g, "\\$&");
$export($export.S, "RegExp", { escape: function escape(it) {
  return $re(it);
} });
_core.exports.RegExp.escape;
if (commonjsGlobal._babelPolyfill) {
  throw new Error("only one instance of babel-polyfill is allowed");
}
commonjsGlobal._babelPolyfill = true;
var DEFINE_PROPERTY = "defineProperty";
function define(O, key, value) {
  O[key] || Object[DEFINE_PROPERTY](O, key, {
    writable: true,
    configurable: true,
    value
  });
}
define(String.prototype, "padLeft", "".padStart);
define(String.prototype, "padRight", "".padEnd);
"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function(key) {
  [][key] && define(Array, key, Function.call.bind([][key]));
});
const mdb_min = "";
function makeMap(str, expectsLowerCase) {
  const map2 = /* @__PURE__ */ Object.create(null);
  const list = str.split(",");
  for (let i = 0; i < list.length; i++) {
    map2[list[i]] = true;
  }
  return expectsLowerCase ? (val) => !!map2[val.toLowerCase()] : (val) => !!map2[val];
}
const EMPTY_OBJ = {};
const EMPTY_ARR = [];
const NOOP = () => {
};
const NO = () => false;
const onRE = /^on[^a-z]/;
const isOn = (key) => onRE.test(key);
const isModelListener = (key) => key.startsWith("onUpdate:");
const extend = Object.assign;
const remove = (arr, el) => {
  const i = arr.indexOf(el);
  if (i > -1) {
    arr.splice(i, 1);
  }
};
const hasOwnProperty$1 = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty$1.call(val, key);
const isArray2 = Array.isArray;
const isMap = (val) => toTypeString(val) === "[object Map]";
const isSet = (val) => toTypeString(val) === "[object Set]";
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const isSymbol = (val) => typeof val === "symbol";
const isObject = (val) => val !== null && typeof val === "object";
const isPromise = (val) => {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
};
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const toRawType = (value) => {
  return toTypeString(value).slice(8, -1);
};
const isPlainObject = (val) => toTypeString(val) === "[object Object]";
const isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
const isReservedProp = /* @__PURE__ */ makeMap(
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
);
const cacheStringFunction = (fn) => {
  const cache = /* @__PURE__ */ Object.create(null);
  return (str) => {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};
const camelizeRE = /-(\w)/g;
const camelize = cacheStringFunction((str) => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
});
const hyphenateRE = /\B([A-Z])/g;
const hyphenate = cacheStringFunction(
  (str) => str.replace(hyphenateRE, "-$1").toLowerCase()
);
const capitalize = cacheStringFunction(
  (str) => str.charAt(0).toUpperCase() + str.slice(1)
);
const toHandlerKey = cacheStringFunction(
  (str) => str ? `on${capitalize(str)}` : ``
);
const hasChanged = (value, oldValue) => !Object.is(value, oldValue);
const invokeArrayFns = (fns, arg) => {
  for (let i = 0; i < fns.length; i++) {
    fns[i](arg);
  }
};
const def = (obj, key, value) => {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: false,
    value
  });
};
const looseToNumber = (val) => {
  const n = parseFloat(val);
  return isNaN(n) ? val : n;
};
let _globalThis;
const getGlobalThis = () => {
  return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
};
function normalizeStyle(value) {
  if (isArray2(value)) {
    const res = {};
    for (let i = 0; i < value.length; i++) {
      const item = value[i];
      const normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);
      if (normalized) {
        for (const key in normalized) {
          res[key] = normalized[key];
        }
      }
    }
    return res;
  } else if (isString(value)) {
    return value;
  } else if (isObject(value)) {
    return value;
  }
}
const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:([^]+)/;
const styleCommentRE = /\/\*[^]*?\*\//g;
function parseStringStyle(cssText) {
  const ret = {};
  cssText.replace(styleCommentRE, "").split(listDelimiterRE).forEach((item) => {
    if (item) {
      const tmp = item.split(propertyDelimiterRE);
      tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return ret;
}
function normalizeClass(value) {
  let res = "";
  if (isString(value)) {
    res = value;
  } else if (isArray2(value)) {
    for (let i = 0; i < value.length; i++) {
      const normalized = normalizeClass(value[i]);
      if (normalized) {
        res += normalized + " ";
      }
    }
  } else if (isObject(value)) {
    for (const name in value) {
      if (value[name]) {
        res += name + " ";
      }
    }
  }
  return res.trim();
}
const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
const isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
function includeBooleanAttr(value) {
  return !!value || value === "";
}
const toDisplayString = (val) => {
  return isString(val) ? val : val == null ? "" : isArray2(val) || isObject(val) && (val.toString === objectToString || !isFunction(val.toString)) ? JSON.stringify(val, replacer, 2) : String(val);
};
const replacer = (_key, val) => {
  if (val && val.__v_isRef) {
    return replacer(_key, val.value);
  } else if (isMap(val)) {
    return {
      [`Map(${val.size})`]: [...val.entries()].reduce((entries2, [key, val2]) => {
        entries2[`${key} =>`] = val2;
        return entries2;
      }, {})
    };
  } else if (isSet(val)) {
    return {
      [`Set(${val.size})`]: [...val.values()]
    };
  } else if (isObject(val) && !isArray2(val) && !isPlainObject(val)) {
    return String(val);
  }
  return val;
};
let activeEffectScope;
class EffectScope {
  constructor(detached = false) {
    this.detached = detached;
    this._active = true;
    this.effects = [];
    this.cleanups = [];
    this.parent = activeEffectScope;
    if (!detached && activeEffectScope) {
      this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(
        this
      ) - 1;
    }
  }
  get active() {
    return this._active;
  }
  run(fn) {
    if (this._active) {
      const currentEffectScope = activeEffectScope;
      try {
        activeEffectScope = this;
        return fn();
      } finally {
        activeEffectScope = currentEffectScope;
      }
    }
  }
  on() {
    activeEffectScope = this;
  }
  off() {
    activeEffectScope = this.parent;
  }
  stop(fromParent) {
    if (this._active) {
      let i, l2;
      for (i = 0, l2 = this.effects.length; i < l2; i++) {
        this.effects[i].stop();
      }
      for (i = 0, l2 = this.cleanups.length; i < l2; i++) {
        this.cleanups[i]();
      }
      if (this.scopes) {
        for (i = 0, l2 = this.scopes.length; i < l2; i++) {
          this.scopes[i].stop(true);
        }
      }
      if (!this.detached && this.parent && !fromParent) {
        const last = this.parent.scopes.pop();
        if (last && last !== this) {
          this.parent.scopes[this.index] = last;
          last.index = this.index;
        }
      }
      this.parent = void 0;
      this._active = false;
    }
  }
}
function recordEffectScope(effect, scope = activeEffectScope) {
  if (scope && scope.active) {
    scope.effects.push(effect);
  }
}
function getCurrentScope() {
  return activeEffectScope;
}
const createDep = (effects) => {
  const dep = new Set(effects);
  dep.w = 0;
  dep.n = 0;
  return dep;
};
const wasTracked = (dep) => (dep.w & trackOpBit) > 0;
const newTracked = (dep) => (dep.n & trackOpBit) > 0;
const initDepMarkers = ({ deps }) => {
  if (deps.length) {
    for (let i = 0; i < deps.length; i++) {
      deps[i].w |= trackOpBit;
    }
  }
};
const finalizeDepMarkers = (effect) => {
  const { deps } = effect;
  if (deps.length) {
    let ptr = 0;
    for (let i = 0; i < deps.length; i++) {
      const dep = deps[i];
      if (wasTracked(dep) && !newTracked(dep)) {
        dep.delete(effect);
      } else {
        deps[ptr++] = dep;
      }
      dep.w &= ~trackOpBit;
      dep.n &= ~trackOpBit;
    }
    deps.length = ptr;
  }
};
const targetMap = /* @__PURE__ */ new WeakMap();
let effectTrackDepth = 0;
let trackOpBit = 1;
const maxMarkerBits = 30;
let activeEffect;
const ITERATE_KEY = Symbol("");
const MAP_KEY_ITERATE_KEY = Symbol("");
class ReactiveEffect {
  constructor(fn, scheduler = null, scope) {
    this.fn = fn;
    this.scheduler = scheduler;
    this.active = true;
    this.deps = [];
    this.parent = void 0;
    recordEffectScope(this, scope);
  }
  run() {
    if (!this.active) {
      return this.fn();
    }
    let parent = activeEffect;
    let lastShouldTrack = shouldTrack;
    while (parent) {
      if (parent === this) {
        return;
      }
      parent = parent.parent;
    }
    try {
      this.parent = activeEffect;
      activeEffect = this;
      shouldTrack = true;
      trackOpBit = 1 << ++effectTrackDepth;
      if (effectTrackDepth <= maxMarkerBits) {
        initDepMarkers(this);
      } else {
        cleanupEffect(this);
      }
      return this.fn();
    } finally {
      if (effectTrackDepth <= maxMarkerBits) {
        finalizeDepMarkers(this);
      }
      trackOpBit = 1 << --effectTrackDepth;
      activeEffect = this.parent;
      shouldTrack = lastShouldTrack;
      this.parent = void 0;
      if (this.deferStop) {
        this.stop();
      }
    }
  }
  stop() {
    if (activeEffect === this) {
      this.deferStop = true;
    } else if (this.active) {
      cleanupEffect(this);
      if (this.onStop) {
        this.onStop();
      }
      this.active = false;
    }
  }
}
function cleanupEffect(effect2) {
  const { deps } = effect2;
  if (deps.length) {
    for (let i = 0; i < deps.length; i++) {
      deps[i].delete(effect2);
    }
    deps.length = 0;
  }
}
let shouldTrack = true;
const trackStack = [];
function pauseTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = false;
}
function resetTracking() {
  const last = trackStack.pop();
  shouldTrack = last === void 0 ? true : last;
}
function track(target, type, key) {
  if (shouldTrack && activeEffect) {
    let depsMap = targetMap.get(target);
    if (!depsMap) {
      targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
    }
    let dep = depsMap.get(key);
    if (!dep) {
      depsMap.set(key, dep = createDep());
    }
    trackEffects(dep);
  }
}
function trackEffects(dep, debuggerEventExtraInfo) {
  let shouldTrack2 = false;
  if (effectTrackDepth <= maxMarkerBits) {
    if (!newTracked(dep)) {
      dep.n |= trackOpBit;
      shouldTrack2 = !wasTracked(dep);
    }
  } else {
    shouldTrack2 = !dep.has(activeEffect);
  }
  if (shouldTrack2) {
    dep.add(activeEffect);
    activeEffect.deps.push(dep);
  }
}
function trigger(target, type, key, newValue, oldValue, oldTarget) {
  const depsMap = targetMap.get(target);
  if (!depsMap) {
    return;
  }
  let deps = [];
  if (type === "clear") {
    deps = [...depsMap.values()];
  } else if (key === "length" && isArray2(target)) {
    const newLength = Number(newValue);
    depsMap.forEach((dep, key2) => {
      if (key2 === "length" || key2 >= newLength) {
        deps.push(dep);
      }
    });
  } else {
    if (key !== void 0) {
      deps.push(depsMap.get(key));
    }
    switch (type) {
      case "add":
        if (!isArray2(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
          if (isMap(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        } else if (isIntegerKey(key)) {
          deps.push(depsMap.get("length"));
        }
        break;
      case "delete":
        if (!isArray2(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
          if (isMap(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        }
        break;
      case "set":
        if (isMap(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
        }
        break;
    }
  }
  if (deps.length === 1) {
    if (deps[0]) {
      {
        triggerEffects(deps[0]);
      }
    }
  } else {
    const effects = [];
    for (const dep of deps) {
      if (dep) {
        effects.push(...dep);
      }
    }
    {
      triggerEffects(createDep(effects));
    }
  }
}
function triggerEffects(dep, debuggerEventExtraInfo) {
  const effects = isArray2(dep) ? dep : [...dep];
  for (const effect2 of effects) {
    if (effect2.computed) {
      triggerEffect(effect2);
    }
  }
  for (const effect2 of effects) {
    if (!effect2.computed) {
      triggerEffect(effect2);
    }
  }
}
function triggerEffect(effect2, debuggerEventExtraInfo) {
  if (effect2 !== activeEffect || effect2.allowRecurse) {
    if (effect2.scheduler) {
      effect2.scheduler();
    } else {
      effect2.run();
    }
  }
}
const isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
const builtInSymbols = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((key) => key !== "arguments" && key !== "caller").map((key) => Symbol[key]).filter(isSymbol)
);
const get$1 = /* @__PURE__ */ createGetter();
const shallowGet = /* @__PURE__ */ createGetter(false, true);
const readonlyGet = /* @__PURE__ */ createGetter(true);
const arrayInstrumentations = /* @__PURE__ */ createArrayInstrumentations();
function createArrayInstrumentations() {
  const instrumentations = {};
  ["includes", "indexOf", "lastIndexOf"].forEach((key) => {
    instrumentations[key] = function(...args) {
      const arr = toRaw(this);
      for (let i = 0, l2 = this.length; i < l2; i++) {
        track(arr, "get", i + "");
      }
      const res = arr[key](...args);
      if (res === -1 || res === false) {
        return arr[key](...args.map(toRaw));
      } else {
        return res;
      }
    };
  });
  ["push", "pop", "shift", "unshift", "splice"].forEach((key) => {
    instrumentations[key] = function(...args) {
      pauseTracking();
      const res = toRaw(this)[key].apply(this, args);
      resetTracking();
      return res;
    };
  });
  return instrumentations;
}
function hasOwnProperty(key) {
  const obj = toRaw(this);
  track(obj, "has", key);
  return obj.hasOwnProperty(key);
}
function createGetter(isReadonly2 = false, shallow = false) {
  return function get22(target, key, receiver) {
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_isShallow") {
      return shallow;
    } else if (key === "__v_raw" && receiver === (isReadonly2 ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
      return target;
    }
    const targetIsArray = isArray2(target);
    if (!isReadonly2) {
      if (targetIsArray && hasOwn(arrayInstrumentations, key)) {
        return Reflect.get(arrayInstrumentations, key, receiver);
      }
      if (key === "hasOwnProperty") {
        return hasOwnProperty;
      }
    }
    const res = Reflect.get(target, key, receiver);
    if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
      return res;
    }
    if (!isReadonly2) {
      track(target, "get", key);
    }
    if (shallow) {
      return res;
    }
    if (isRef(res)) {
      return targetIsArray && isIntegerKey(key) ? res : res.value;
    }
    if (isObject(res)) {
      return isReadonly2 ? readonly(res) : reactive(res);
    }
    return res;
  };
}
const set$1 = /* @__PURE__ */ createSetter();
const shallowSet = /* @__PURE__ */ createSetter(true);
function createSetter(shallow = false) {
  return function set22(target, key, value, receiver) {
    let oldValue = target[key];
    if (isReadonly(oldValue) && isRef(oldValue) && !isRef(value)) {
      return false;
    }
    if (!shallow) {
      if (!isShallow(value) && !isReadonly(value)) {
        oldValue = toRaw(oldValue);
        value = toRaw(value);
      }
      if (!isArray2(target) && isRef(oldValue) && !isRef(value)) {
        oldValue.value = value;
        return true;
      }
    }
    const hadKey = isArray2(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
    const result = Reflect.set(target, key, value, receiver);
    if (target === toRaw(receiver)) {
      if (!hadKey) {
        trigger(target, "add", key, value);
      } else if (hasChanged(value, oldValue)) {
        trigger(target, "set", key, value);
      }
    }
    return result;
  };
}
function deleteProperty2(target, key) {
  const hadKey = hasOwn(target, key);
  target[key];
  const result = Reflect.deleteProperty(target, key);
  if (result && hadKey) {
    trigger(target, "delete", key, void 0);
  }
  return result;
}
function has$1(target, key) {
  const result = Reflect.has(target, key);
  if (!isSymbol(key) || !builtInSymbols.has(key)) {
    track(target, "has", key);
  }
  return result;
}
function ownKeys2(target) {
  track(target, "iterate", isArray2(target) ? "length" : ITERATE_KEY);
  return Reflect.ownKeys(target);
}
const mutableHandlers = {
  get: get$1,
  set: set$1,
  deleteProperty: deleteProperty2,
  has: has$1,
  ownKeys: ownKeys2
};
const readonlyHandlers = {
  get: readonlyGet,
  set(target, key) {
    return true;
  },
  deleteProperty(target, key) {
    return true;
  }
};
const shallowReactiveHandlers = /* @__PURE__ */ extend(
  {},
  mutableHandlers,
  {
    get: shallowGet,
    set: shallowSet
  }
);
const toShallow = (value) => value;
const getProto = (v) => Reflect.getPrototypeOf(v);
function get3(target, key, isReadonly2 = false, isShallow2 = false) {
  target = target["__v_raw"];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);
  if (!isReadonly2) {
    if (key !== rawKey) {
      track(rawTarget, "get", key);
    }
    track(rawTarget, "get", rawKey);
  }
  const { has: has22 } = getProto(rawTarget);
  const wrap2 = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
  if (has22.call(rawTarget, key)) {
    return wrap2(target.get(key));
  } else if (has22.call(rawTarget, rawKey)) {
    return wrap2(target.get(rawKey));
  } else if (target !== rawTarget) {
    target.get(key);
  }
}
function has2(key, isReadonly2 = false) {
  const target = this["__v_raw"];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);
  if (!isReadonly2) {
    if (key !== rawKey) {
      track(rawTarget, "has", key);
    }
    track(rawTarget, "has", rawKey);
  }
  return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
}
function size(target, isReadonly2 = false) {
  target = target["__v_raw"];
  !isReadonly2 && track(toRaw(target), "iterate", ITERATE_KEY);
  return Reflect.get(target, "size", target);
}
function add3(value) {
  value = toRaw(value);
  const target = toRaw(this);
  const proto = getProto(target);
  const hadKey = proto.has.call(target, value);
  if (!hadKey) {
    target.add(value);
    trigger(target, "add", value, value);
  }
  return this;
}
function set3(key, value) {
  value = toRaw(value);
  const target = toRaw(this);
  const { has: has22, get: get22 } = getProto(target);
  let hadKey = has22.call(target, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has22.call(target, key);
  }
  const oldValue = get22.call(target, key);
  target.set(key, value);
  if (!hadKey) {
    trigger(target, "add", key, value);
  } else if (hasChanged(value, oldValue)) {
    trigger(target, "set", key, value);
  }
  return this;
}
function deleteEntry(key) {
  const target = toRaw(this);
  const { has: has22, get: get22 } = getProto(target);
  let hadKey = has22.call(target, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has22.call(target, key);
  }
  get22 ? get22.call(target, key) : void 0;
  const result = target.delete(key);
  if (hadKey) {
    trigger(target, "delete", key, void 0);
  }
  return result;
}
function clear() {
  const target = toRaw(this);
  const hadItems = target.size !== 0;
  const result = target.clear();
  if (hadItems) {
    trigger(target, "clear", void 0, void 0);
  }
  return result;
}
function createForEach(isReadonly2, isShallow2) {
  return function forEach3(callback, thisArg) {
    const observed = this;
    const target = observed["__v_raw"];
    const rawTarget = toRaw(target);
    const wrap2 = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    !isReadonly2 && track(rawTarget, "iterate", ITERATE_KEY);
    return target.forEach((value, key) => {
      return callback.call(thisArg, wrap2(value), wrap2(key), observed);
    });
  };
}
function createIterableMethod(method, isReadonly2, isShallow2) {
  return function(...args) {
    const target = this["__v_raw"];
    const rawTarget = toRaw(target);
    const targetIsMap = isMap(rawTarget);
    const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
    const isKeyOnly = method === "keys" && targetIsMap;
    const innerIterator = target[method](...args);
    const wrap2 = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    !isReadonly2 && track(
      rawTarget,
      "iterate",
      isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY
    );
    return {
      next() {
        const { value, done } = innerIterator.next();
        return done ? { value, done } : {
          value: isPair ? [wrap2(value[0]), wrap2(value[1])] : wrap2(value),
          done
        };
      },
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function createReadonlyMethod(type) {
  return function(...args) {
    return type === "delete" ? false : this;
  };
}
function createInstrumentations() {
  const mutableInstrumentations2 = {
    get(key) {
      return get3(this, key);
    },
    get size() {
      return size(this);
    },
    has: has2,
    add: add3,
    set: set3,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, false)
  };
  const shallowInstrumentations2 = {
    get(key) {
      return get3(this, key, false, true);
    },
    get size() {
      return size(this);
    },
    has: has2,
    add: add3,
    set: set3,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, true)
  };
  const readonlyInstrumentations2 = {
    get(key) {
      return get3(this, key, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has2.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, false)
  };
  const shallowReadonlyInstrumentations2 = {
    get(key) {
      return get3(this, key, true, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has2.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, true)
  };
  const iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
  iteratorMethods.forEach((method) => {
    mutableInstrumentations2[method] = createIterableMethod(
      method,
      false,
      false
    );
    readonlyInstrumentations2[method] = createIterableMethod(
      method,
      true,
      false
    );
    shallowInstrumentations2[method] = createIterableMethod(
      method,
      false,
      true
    );
    shallowReadonlyInstrumentations2[method] = createIterableMethod(
      method,
      true,
      true
    );
  });
  return [
    mutableInstrumentations2,
    readonlyInstrumentations2,
    shallowInstrumentations2,
    shallowReadonlyInstrumentations2
  ];
}
const [
  mutableInstrumentations,
  readonlyInstrumentations,
  shallowInstrumentations,
  shallowReadonlyInstrumentations
] = /* @__PURE__ */ createInstrumentations();
function createInstrumentationGetter(isReadonly2, shallow) {
  const instrumentations = shallow ? isReadonly2 ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly2 ? readonlyInstrumentations : mutableInstrumentations;
  return (target, key, receiver) => {
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_raw") {
      return target;
    }
    return Reflect.get(
      hasOwn(instrumentations, key) && key in target ? instrumentations : target,
      key,
      receiver
    );
  };
}
const mutableCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, false)
};
const shallowCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, true)
};
const readonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, false)
};
const reactiveMap = /* @__PURE__ */ new WeakMap();
const shallowReactiveMap = /* @__PURE__ */ new WeakMap();
const readonlyMap = /* @__PURE__ */ new WeakMap();
const shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
function targetTypeMap(rawType) {
  switch (rawType) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function getTargetType(value) {
  return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
}
function reactive(target) {
  if (isReadonly(target)) {
    return target;
  }
  return createReactiveObject(
    target,
    false,
    mutableHandlers,
    mutableCollectionHandlers,
    reactiveMap
  );
}
function shallowReactive(target) {
  return createReactiveObject(
    target,
    false,
    shallowReactiveHandlers,
    shallowCollectionHandlers,
    shallowReactiveMap
  );
}
function readonly(target) {
  return createReactiveObject(
    target,
    true,
    readonlyHandlers,
    readonlyCollectionHandlers,
    readonlyMap
  );
}
function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
  if (!isObject(target)) {
    return target;
  }
  if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) {
    return target;
  }
  const existingProxy = proxyMap.get(target);
  if (existingProxy) {
    return existingProxy;
  }
  const targetType = getTargetType(target);
  if (targetType === 0) {
    return target;
  }
  const proxy = new Proxy(
    target,
    targetType === 2 ? collectionHandlers : baseHandlers
  );
  proxyMap.set(target, proxy);
  return proxy;
}
function isReactive(value) {
  if (isReadonly(value)) {
    return isReactive(value["__v_raw"]);
  }
  return !!(value && value["__v_isReactive"]);
}
function isReadonly(value) {
  return !!(value && value["__v_isReadonly"]);
}
function isShallow(value) {
  return !!(value && value["__v_isShallow"]);
}
function isProxy(value) {
  return isReactive(value) || isReadonly(value);
}
function toRaw(observed) {
  const raw2 = observed && observed["__v_raw"];
  return raw2 ? toRaw(raw2) : observed;
}
function markRaw(value) {
  def(value, "__v_skip", true);
  return value;
}
const toReactive = (value) => isObject(value) ? reactive(value) : value;
const toReadonly = (value) => isObject(value) ? readonly(value) : value;
function trackRefValue(ref2) {
  if (shouldTrack && activeEffect) {
    ref2 = toRaw(ref2);
    {
      trackEffects(ref2.dep || (ref2.dep = createDep()));
    }
  }
}
function triggerRefValue(ref2, newVal) {
  ref2 = toRaw(ref2);
  const dep = ref2.dep;
  if (dep) {
    {
      triggerEffects(dep);
    }
  }
}
function isRef(r) {
  return !!(r && r.__v_isRef === true);
}
function ref(value) {
  return createRef(value, false);
}
function createRef(rawValue, shallow) {
  if (isRef(rawValue)) {
    return rawValue;
  }
  return new RefImpl(rawValue, shallow);
}
class RefImpl {
  constructor(value, __v_isShallow) {
    this.__v_isShallow = __v_isShallow;
    this.dep = void 0;
    this.__v_isRef = true;
    this._rawValue = __v_isShallow ? value : toRaw(value);
    this._value = __v_isShallow ? value : toReactive(value);
  }
  get value() {
    trackRefValue(this);
    return this._value;
  }
  set value(newVal) {
    const useDirectValue = this.__v_isShallow || isShallow(newVal) || isReadonly(newVal);
    newVal = useDirectValue ? newVal : toRaw(newVal);
    if (hasChanged(newVal, this._rawValue)) {
      this._rawValue = newVal;
      this._value = useDirectValue ? newVal : toReactive(newVal);
      triggerRefValue(this);
    }
  }
}
function unref(ref2) {
  return isRef(ref2) ? ref2.value : ref2;
}
const shallowUnwrapHandlers = {
  get: (target, key, receiver) => unref(Reflect.get(target, key, receiver)),
  set: (target, key, value, receiver) => {
    const oldValue = target[key];
    if (isRef(oldValue) && !isRef(value)) {
      oldValue.value = value;
      return true;
    } else {
      return Reflect.set(target, key, value, receiver);
    }
  }
};
function proxyRefs(objectWithRefs) {
  return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}
class ComputedRefImpl {
  constructor(getter, _setter, isReadonly2, isSSR) {
    this._setter = _setter;
    this.dep = void 0;
    this.__v_isRef = true;
    this["__v_isReadonly"] = false;
    this._dirty = true;
    this.effect = new ReactiveEffect(getter, () => {
      if (!this._dirty) {
        this._dirty = true;
        triggerRefValue(this);
      }
    });
    this.effect.computed = this;
    this.effect.active = this._cacheable = !isSSR;
    this["__v_isReadonly"] = isReadonly2;
  }
  get value() {
    const self2 = toRaw(this);
    trackRefValue(self2);
    if (self2._dirty || !self2._cacheable) {
      self2._dirty = false;
      self2._value = self2.effect.run();
    }
    return self2._value;
  }
  set value(newValue) {
    this._setter(newValue);
  }
}
function computed$1(getterOrOptions, debugOptions, isSSR = false) {
  let getter;
  let setter2;
  const onlyGetter = isFunction(getterOrOptions);
  if (onlyGetter) {
    getter = getterOrOptions;
    setter2 = NOOP;
  } else {
    getter = getterOrOptions.get;
    setter2 = getterOrOptions.set;
  }
  const cRef = new ComputedRefImpl(getter, setter2, onlyGetter || !setter2, isSSR);
  return cRef;
}
function warn(msg, ...args) {
  return;
}
function callWithErrorHandling(fn, instance, type, args) {
  let res;
  try {
    res = args ? fn(...args) : fn();
  } catch (err) {
    handleError(err, instance, type);
  }
  return res;
}
function callWithAsyncErrorHandling(fn, instance, type, args) {
  if (isFunction(fn)) {
    const res = callWithErrorHandling(fn, instance, type, args);
    if (res && isPromise(res)) {
      res.catch((err) => {
        handleError(err, instance, type);
      });
    }
    return res;
  }
  const values2 = [];
  for (let i = 0; i < fn.length; i++) {
    values2.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
  }
  return values2;
}
function handleError(err, instance, type, throwInDev = true) {
  const contextVNode = instance ? instance.vnode : null;
  if (instance) {
    let cur = instance.parent;
    const exposedInstance = instance.proxy;
    const errorInfo = type;
    while (cur) {
      const errorCapturedHooks = cur.ec;
      if (errorCapturedHooks) {
        for (let i = 0; i < errorCapturedHooks.length; i++) {
          if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) {
            return;
          }
        }
      }
      cur = cur.parent;
    }
    const appErrorHandler = instance.appContext.config.errorHandler;
    if (appErrorHandler) {
      callWithErrorHandling(
        appErrorHandler,
        null,
        10,
        [err, exposedInstance, errorInfo]
      );
      return;
    }
  }
  logError(err, type, contextVNode, throwInDev);
}
function logError(err, type, contextVNode, throwInDev = true) {
  {
    console.error(err);
  }
}
let isFlushing = false;
let isFlushPending = false;
const queue = [];
let flushIndex = 0;
const pendingPostFlushCbs = [];
let activePostFlushCbs = null;
let postFlushIndex = 0;
const resolvedPromise = /* @__PURE__ */ Promise.resolve();
let currentFlushPromise = null;
function nextTick(fn) {
  const p2 = currentFlushPromise || resolvedPromise;
  return fn ? p2.then(this ? fn.bind(this) : fn) : p2;
}
function findInsertionIndex(id2) {
  let start = flushIndex + 1;
  let end = queue.length;
  while (start < end) {
    const middle = start + end >>> 1;
    const middleJobId = getId(queue[middle]);
    middleJobId < id2 ? start = middle + 1 : end = middle;
  }
  return start;
}
function queueJob(job) {
  if (!queue.length || !queue.includes(
    job,
    isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex
  )) {
    if (job.id == null) {
      queue.push(job);
    } else {
      queue.splice(findInsertionIndex(job.id), 0, job);
    }
    queueFlush();
  }
}
function queueFlush() {
  if (!isFlushing && !isFlushPending) {
    isFlushPending = true;
    currentFlushPromise = resolvedPromise.then(flushJobs);
  }
}
function invalidateJob(job) {
  const i = queue.indexOf(job);
  if (i > flushIndex) {
    queue.splice(i, 1);
  }
}
function queuePostFlushCb(cb) {
  if (!isArray2(cb)) {
    if (!activePostFlushCbs || !activePostFlushCbs.includes(
      cb,
      cb.allowRecurse ? postFlushIndex + 1 : postFlushIndex
    )) {
      pendingPostFlushCbs.push(cb);
    }
  } else {
    pendingPostFlushCbs.push(...cb);
  }
  queueFlush();
}
function flushPreFlushCbs(seen, i = isFlushing ? flushIndex + 1 : 0) {
  for (; i < queue.length; i++) {
    const cb = queue[i];
    if (cb && cb.pre) {
      queue.splice(i, 1);
      i--;
      cb();
    }
  }
}
function flushPostFlushCbs(seen) {
  if (pendingPostFlushCbs.length) {
    const deduped = [...new Set(pendingPostFlushCbs)];
    pendingPostFlushCbs.length = 0;
    if (activePostFlushCbs) {
      activePostFlushCbs.push(...deduped);
      return;
    }
    activePostFlushCbs = deduped;
    activePostFlushCbs.sort((a, b) => getId(a) - getId(b));
    for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
      activePostFlushCbs[postFlushIndex]();
    }
    activePostFlushCbs = null;
    postFlushIndex = 0;
  }
}
const getId = (job) => job.id == null ? Infinity : job.id;
const comparator = (a, b) => {
  const diff = getId(a) - getId(b);
  if (diff === 0) {
    if (a.pre && !b.pre)
      return -1;
    if (b.pre && !a.pre)
      return 1;
  }
  return diff;
};
function flushJobs(seen) {
  isFlushPending = false;
  isFlushing = true;
  queue.sort(comparator);
  const check2 = NOOP;
  try {
    for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
      const job = queue[flushIndex];
      if (job && job.active !== false) {
        if (false)
          ;
        callWithErrorHandling(job, null, 14);
      }
    }
  } finally {
    flushIndex = 0;
    queue.length = 0;
    flushPostFlushCbs();
    isFlushing = false;
    currentFlushPromise = null;
    if (queue.length || pendingPostFlushCbs.length) {
      flushJobs();
    }
  }
}
function emit(instance, event, ...rawArgs) {
  if (instance.isUnmounted)
    return;
  const props = instance.vnode.props || EMPTY_OBJ;
  let args = rawArgs;
  const isModelListener2 = event.startsWith("update:");
  const modelArg = isModelListener2 && event.slice(7);
  if (modelArg && modelArg in props) {
    const modifiersKey = `${modelArg === "modelValue" ? "model" : modelArg}Modifiers`;
    const { number, trim: trim2 } = props[modifiersKey] || EMPTY_OBJ;
    if (trim2) {
      args = rawArgs.map((a) => isString(a) ? a.trim() : a);
    }
    if (number) {
      args = rawArgs.map(looseToNumber);
    }
  }
  let handlerName;
  let handler = props[handlerName = toHandlerKey(event)] || props[handlerName = toHandlerKey(camelize(event))];
  if (!handler && isModelListener2) {
    handler = props[handlerName = toHandlerKey(hyphenate(event))];
  }
  if (handler) {
    callWithAsyncErrorHandling(
      handler,
      instance,
      6,
      args
    );
  }
  const onceHandler = props[handlerName + `Once`];
  if (onceHandler) {
    if (!instance.emitted) {
      instance.emitted = {};
    } else if (instance.emitted[handlerName]) {
      return;
    }
    instance.emitted[handlerName] = true;
    callWithAsyncErrorHandling(
      onceHandler,
      instance,
      6,
      args
    );
  }
}
function normalizeEmitsOptions(comp, appContext, asMixin = false) {
  const cache = appContext.emitsCache;
  const cached = cache.get(comp);
  if (cached !== void 0) {
    return cached;
  }
  const raw2 = comp.emits;
  let normalized = {};
  let hasExtends = false;
  if (!isFunction(comp)) {
    const extendEmits = (raw22) => {
      const normalizedFromExtend = normalizeEmitsOptions(raw22, appContext, true);
      if (normalizedFromExtend) {
        hasExtends = true;
        extend(normalized, normalizedFromExtend);
      }
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendEmits);
    }
    if (comp.extends) {
      extendEmits(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendEmits);
    }
  }
  if (!raw2 && !hasExtends) {
    if (isObject(comp)) {
      cache.set(comp, null);
    }
    return null;
  }
  if (isArray2(raw2)) {
    raw2.forEach((key) => normalized[key] = null);
  } else {
    extend(normalized, raw2);
  }
  if (isObject(comp)) {
    cache.set(comp, normalized);
  }
  return normalized;
}
function isEmitListener(options, key) {
  if (!options || !isOn(key)) {
    return false;
  }
  key = key.slice(2).replace(/Once$/, "");
  return hasOwn(options, key[0].toLowerCase() + key.slice(1)) || hasOwn(options, hyphenate(key)) || hasOwn(options, key);
}
let currentRenderingInstance = null;
let currentScopeId = null;
function setCurrentRenderingInstance(instance) {
  const prev = currentRenderingInstance;
  currentRenderingInstance = instance;
  currentScopeId = instance && instance.type.__scopeId || null;
  return prev;
}
function withCtx(fn, ctx2 = currentRenderingInstance, isNonScopedSlot) {
  if (!ctx2)
    return fn;
  if (fn._n) {
    return fn;
  }
  const renderFnWithContext = (...args) => {
    if (renderFnWithContext._d) {
      setBlockTracking(-1);
    }
    const prevInstance = setCurrentRenderingInstance(ctx2);
    let res;
    try {
      res = fn(...args);
    } finally {
      setCurrentRenderingInstance(prevInstance);
      if (renderFnWithContext._d) {
        setBlockTracking(1);
      }
    }
    return res;
  };
  renderFnWithContext._n = true;
  renderFnWithContext._c = true;
  renderFnWithContext._d = true;
  return renderFnWithContext;
}
function markAttrsAccessed() {
}
function renderComponentRoot(instance) {
  const {
    type: Component,
    vnode,
    proxy,
    withProxy,
    props,
    propsOptions: [propsOptions],
    slots,
    attrs,
    emit: emit2,
    render,
    renderCache,
    data: data2,
    setupState,
    ctx: ctx2,
    inheritAttrs
  } = instance;
  let result;
  let fallthroughAttrs;
  const prev = setCurrentRenderingInstance(instance);
  try {
    if (vnode.shapeFlag & 4) {
      const proxyToUse = withProxy || proxy;
      result = normalizeVNode(
        render.call(
          proxyToUse,
          proxyToUse,
          renderCache,
          props,
          setupState,
          data2,
          ctx2
        )
      );
      fallthroughAttrs = attrs;
    } else {
      const render2 = Component;
      if (false)
        ;
      result = normalizeVNode(
        render2.length > 1 ? render2(
          props,
          false ? {
            get attrs() {
              markAttrsAccessed();
              return attrs;
            },
            slots,
            emit: emit2
          } : { attrs, slots, emit: emit2 }
        ) : render2(
          props,
          null
        )
      );
      fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
    }
  } catch (err) {
    blockStack.length = 0;
    handleError(err, instance, 1);
    result = createVNode(Comment);
  }
  let root = result;
  if (fallthroughAttrs && inheritAttrs !== false) {
    const keys2 = Object.keys(fallthroughAttrs);
    const { shapeFlag } = root;
    if (keys2.length) {
      if (shapeFlag & (1 | 6)) {
        if (propsOptions && keys2.some(isModelListener)) {
          fallthroughAttrs = filterModelListeners(
            fallthroughAttrs,
            propsOptions
          );
        }
        root = cloneVNode(root, fallthroughAttrs);
      }
    }
  }
  if (vnode.dirs) {
    root = cloneVNode(root);
    root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
  }
  if (vnode.transition) {
    root.transition = vnode.transition;
  }
  {
    result = root;
  }
  setCurrentRenderingInstance(prev);
  return result;
}
const getFunctionalFallthrough = (attrs) => {
  let res;
  for (const key in attrs) {
    if (key === "class" || key === "style" || isOn(key)) {
      (res || (res = {}))[key] = attrs[key];
    }
  }
  return res;
};
const filterModelListeners = (attrs, props) => {
  const res = {};
  for (const key in attrs) {
    if (!isModelListener(key) || !(key.slice(9) in props)) {
      res[key] = attrs[key];
    }
  }
  return res;
};
function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
  const { props: prevProps, children: prevChildren, component } = prevVNode;
  const { props: nextProps, children: nextChildren, patchFlag } = nextVNode;
  const emits = component.emitsOptions;
  if (nextVNode.dirs || nextVNode.transition) {
    return true;
  }
  if (optimized && patchFlag >= 0) {
    if (patchFlag & 1024) {
      return true;
    }
    if (patchFlag & 16) {
      if (!prevProps) {
        return !!nextProps;
      }
      return hasPropsChanged(prevProps, nextProps, emits);
    } else if (patchFlag & 8) {
      const dynamicProps = nextVNode.dynamicProps;
      for (let i = 0; i < dynamicProps.length; i++) {
        const key = dynamicProps[i];
        if (nextProps[key] !== prevProps[key] && !isEmitListener(emits, key)) {
          return true;
        }
      }
    }
  } else {
    if (prevChildren || nextChildren) {
      if (!nextChildren || !nextChildren.$stable) {
        return true;
      }
    }
    if (prevProps === nextProps) {
      return false;
    }
    if (!prevProps) {
      return !!nextProps;
    }
    if (!nextProps) {
      return true;
    }
    return hasPropsChanged(prevProps, nextProps, emits);
  }
  return false;
}
function hasPropsChanged(prevProps, nextProps, emitsOptions) {
  const nextKeys = Object.keys(nextProps);
  if (nextKeys.length !== Object.keys(prevProps).length) {
    return true;
  }
  for (let i = 0; i < nextKeys.length; i++) {
    const key = nextKeys[i];
    if (nextProps[key] !== prevProps[key] && !isEmitListener(emitsOptions, key)) {
      return true;
    }
  }
  return false;
}
function updateHOCHostEl({ vnode, parent }, el) {
  while (parent && parent.subTree === vnode) {
    (vnode = parent.vnode).el = el;
    parent = parent.parent;
  }
}
const isSuspense = (type) => type.__isSuspense;
function queueEffectWithSuspense(fn, suspense) {
  if (suspense && suspense.pendingBranch) {
    if (isArray2(fn)) {
      suspense.effects.push(...fn);
    } else {
      suspense.effects.push(fn);
    }
  } else {
    queuePostFlushCb(fn);
  }
}
function watchEffect(effect, options) {
  return doWatch(effect, null, options);
}
const INITIAL_WATCHER_VALUE = {};
function watch(source, cb, options) {
  return doWatch(source, cb, options);
}
function doWatch(source, cb, { immediate, deep, flush, onTrack, onTrigger } = EMPTY_OBJ) {
  var _a;
  const instance = getCurrentScope() === ((_a = currentInstance) == null ? void 0 : _a.scope) ? currentInstance : null;
  let getter;
  let forceTrigger = false;
  let isMultiSource = false;
  if (isRef(source)) {
    getter = () => source.value;
    forceTrigger = isShallow(source);
  } else if (isReactive(source)) {
    getter = () => source;
    deep = true;
  } else if (isArray2(source)) {
    isMultiSource = true;
    forceTrigger = source.some((s) => isReactive(s) || isShallow(s));
    getter = () => source.map((s) => {
      if (isRef(s)) {
        return s.value;
      } else if (isReactive(s)) {
        return traverse(s);
      } else if (isFunction(s)) {
        return callWithErrorHandling(s, instance, 2);
      } else
        ;
    });
  } else if (isFunction(source)) {
    if (cb) {
      getter = () => callWithErrorHandling(source, instance, 2);
    } else {
      getter = () => {
        if (instance && instance.isUnmounted) {
          return;
        }
        if (cleanup) {
          cleanup();
        }
        return callWithAsyncErrorHandling(
          source,
          instance,
          3,
          [onCleanup]
        );
      };
    }
  } else {
    getter = NOOP;
  }
  if (cb && deep) {
    const baseGetter = getter;
    getter = () => traverse(baseGetter());
  }
  let cleanup;
  let onCleanup = (fn) => {
    cleanup = effect.onStop = () => {
      callWithErrorHandling(fn, instance, 4);
    };
  };
  let ssrCleanup;
  if (isInSSRComponentSetup) {
    onCleanup = NOOP;
    if (!cb) {
      getter();
    } else if (immediate) {
      callWithAsyncErrorHandling(cb, instance, 3, [
        getter(),
        isMultiSource ? [] : void 0,
        onCleanup
      ]);
    }
    if (flush === "sync") {
      const ctx2 = useSSRContext();
      ssrCleanup = ctx2.__watcherHandles || (ctx2.__watcherHandles = []);
    } else {
      return NOOP;
    }
  }
  let oldValue = isMultiSource ? new Array(source.length).fill(INITIAL_WATCHER_VALUE) : INITIAL_WATCHER_VALUE;
  const job = () => {
    if (!effect.active) {
      return;
    }
    if (cb) {
      const newValue = effect.run();
      if (deep || forceTrigger || (isMultiSource ? newValue.some(
        (v, i) => hasChanged(v, oldValue[i])
      ) : hasChanged(newValue, oldValue)) || false) {
        if (cleanup) {
          cleanup();
        }
        callWithAsyncErrorHandling(cb, instance, 3, [
          newValue,
          oldValue === INITIAL_WATCHER_VALUE ? void 0 : isMultiSource && oldValue[0] === INITIAL_WATCHER_VALUE ? [] : oldValue,
          onCleanup
        ]);
        oldValue = newValue;
      }
    } else {
      effect.run();
    }
  };
  job.allowRecurse = !!cb;
  let scheduler;
  if (flush === "sync") {
    scheduler = job;
  } else if (flush === "post") {
    scheduler = () => queuePostRenderEffect(job, instance && instance.suspense);
  } else {
    job.pre = true;
    if (instance)
      job.id = instance.uid;
    scheduler = () => queueJob(job);
  }
  const effect = new ReactiveEffect(getter, scheduler);
  if (cb) {
    if (immediate) {
      job();
    } else {
      oldValue = effect.run();
    }
  } else if (flush === "post") {
    queuePostRenderEffect(
      effect.run.bind(effect),
      instance && instance.suspense
    );
  } else {
    effect.run();
  }
  const unwatch = () => {
    effect.stop();
    if (instance && instance.scope) {
      remove(instance.scope.effects, effect);
    }
  };
  if (ssrCleanup)
    ssrCleanup.push(unwatch);
  return unwatch;
}
function instanceWatch(source, value, options) {
  const publicThis = this.proxy;
  const getter = isString(source) ? source.includes(".") ? createPathGetter(publicThis, source) : () => publicThis[source] : source.bind(publicThis, publicThis);
  let cb;
  if (isFunction(value)) {
    cb = value;
  } else {
    cb = value.handler;
    options = value;
  }
  const cur = currentInstance;
  setCurrentInstance(this);
  const res = doWatch(getter, cb.bind(publicThis), options);
  if (cur) {
    setCurrentInstance(cur);
  } else {
    unsetCurrentInstance();
  }
  return res;
}
function createPathGetter(ctx2, path) {
  const segments = path.split(".");
  return () => {
    let cur = ctx2;
    for (let i = 0; i < segments.length && cur; i++) {
      cur = cur[segments[i]];
    }
    return cur;
  };
}
function traverse(value, seen) {
  if (!isObject(value) || value["__v_skip"]) {
    return value;
  }
  seen = seen || /* @__PURE__ */ new Set();
  if (seen.has(value)) {
    return value;
  }
  seen.add(value);
  if (isRef(value)) {
    traverse(value.value, seen);
  } else if (isArray2(value)) {
    for (let i = 0; i < value.length; i++) {
      traverse(value[i], seen);
    }
  } else if (isSet(value) || isMap(value)) {
    value.forEach((v) => {
      traverse(v, seen);
    });
  } else if (isPlainObject(value)) {
    for (const key in value) {
      traverse(value[key], seen);
    }
  }
  return value;
}
function withDirectives(vnode, directives) {
  const internalInstance = currentRenderingInstance;
  if (internalInstance === null) {
    return vnode;
  }
  const instance = getExposeProxy(internalInstance) || internalInstance.proxy;
  const bindings = vnode.dirs || (vnode.dirs = []);
  for (let i = 0; i < directives.length; i++) {
    let [dir, value, arg, modifiers = EMPTY_OBJ] = directives[i];
    if (dir) {
      if (isFunction(dir)) {
        dir = {
          mounted: dir,
          updated: dir
        };
      }
      if (dir.deep) {
        traverse(value);
      }
      bindings.push({
        dir,
        instance,
        value,
        oldValue: void 0,
        arg,
        modifiers
      });
    }
  }
  return vnode;
}
function invokeDirectiveHook(vnode, prevVNode, instance, name) {
  const bindings = vnode.dirs;
  const oldBindings = prevVNode && prevVNode.dirs;
  for (let i = 0; i < bindings.length; i++) {
    const binding = bindings[i];
    if (oldBindings) {
      binding.oldValue = oldBindings[i].value;
    }
    let hook = binding.dir[name];
    if (hook) {
      pauseTracking();
      callWithAsyncErrorHandling(hook, instance, 8, [
        vnode.el,
        binding,
        vnode,
        prevVNode
      ]);
      resetTracking();
    }
  }
}
function defineComponent(options, extraOptions) {
  return isFunction(options) ? /* @__PURE__ */ (() => extend({ name: options.name }, extraOptions, { setup: options }))() : options;
}
const isAsyncWrapper = (i) => !!i.type.__asyncLoader;
const isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
function onActivated(hook, target) {
  registerKeepAliveHook(hook, "a", target);
}
function onDeactivated(hook, target) {
  registerKeepAliveHook(hook, "da", target);
}
function registerKeepAliveHook(hook, type, target = currentInstance) {
  const wrappedHook = hook.__wdc || (hook.__wdc = () => {
    let current = target;
    while (current) {
      if (current.isDeactivated) {
        return;
      }
      current = current.parent;
    }
    return hook();
  });
  injectHook(type, wrappedHook, target);
  if (target) {
    let current = target.parent;
    while (current && current.parent) {
      if (isKeepAlive(current.parent.vnode)) {
        injectToKeepAliveRoot(wrappedHook, type, target, current);
      }
      current = current.parent;
    }
  }
}
function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
  const injected = injectHook(
    type,
    hook,
    keepAliveRoot,
    true
  );
  onUnmounted(() => {
    remove(keepAliveRoot[type], injected);
  }, target);
}
function injectHook(type, hook, target = currentInstance, prepend = false) {
  if (target) {
    const hooks = target[type] || (target[type] = []);
    const wrappedHook = hook.__weh || (hook.__weh = (...args) => {
      if (target.isUnmounted) {
        return;
      }
      pauseTracking();
      setCurrentInstance(target);
      const res = callWithAsyncErrorHandling(hook, target, type, args);
      unsetCurrentInstance();
      resetTracking();
      return res;
    });
    if (prepend) {
      hooks.unshift(wrappedHook);
    } else {
      hooks.push(wrappedHook);
    }
    return wrappedHook;
  }
}
const createHook = (lifecycle) => (hook, target = currentInstance) => (!isInSSRComponentSetup || lifecycle === "sp") && injectHook(lifecycle, (...args) => hook(...args), target);
const onBeforeMount = createHook("bm");
const onMounted = createHook("m");
const onBeforeUpdate = createHook("bu");
const onUpdated = createHook("u");
const onBeforeUnmount = createHook("bum");
const onUnmounted = createHook("um");
const onServerPrefetch = createHook("sp");
const onRenderTriggered = createHook(
  "rtg"
);
const onRenderTracked = createHook(
  "rtc"
);
function onErrorCaptured(hook, target = currentInstance) {
  injectHook("ec", hook, target);
}
const COMPONENTS = "components";
const DIRECTIVES = "directives";
const NULL_DYNAMIC_COMPONENT = Symbol.for("v-ndc");
function resolveDynamicComponent(component) {
  if (isString(component)) {
    return resolveAsset(COMPONENTS, component, false) || component;
  } else {
    return component || NULL_DYNAMIC_COMPONENT;
  }
}
function resolveDirective(name) {
  return resolveAsset(DIRECTIVES, name);
}
function resolveAsset(type, name, warnMissing = true, maybeSelfReference = false) {
  const instance = currentRenderingInstance || currentInstance;
  if (instance) {
    const Component = instance.type;
    if (type === COMPONENTS) {
      const selfName = getComponentName(
        Component,
        false
      );
      if (selfName && (selfName === name || selfName === camelize(name) || selfName === capitalize(camelize(name)))) {
        return Component;
      }
    }
    const res = resolve2(instance[type] || Component[type], name) || resolve2(instance.appContext[type], name);
    if (!res && maybeSelfReference) {
      return Component;
    }
    return res;
  }
}
function resolve2(registry, name) {
  return registry && (registry[name] || registry[camelize(name)] || registry[capitalize(camelize(name))]);
}
function renderList(source, renderItem, cache, index) {
  let ret;
  const cached = cache && cache[index];
  if (isArray2(source) || isString(source)) {
    ret = new Array(source.length);
    for (let i = 0, l2 = source.length; i < l2; i++) {
      ret[i] = renderItem(source[i], i, void 0, cached && cached[i]);
    }
  } else if (typeof source === "number") {
    ret = new Array(source);
    for (let i = 0; i < source; i++) {
      ret[i] = renderItem(i + 1, i, void 0, cached && cached[i]);
    }
  } else if (isObject(source)) {
    if (source[Symbol.iterator]) {
      ret = Array.from(
        source,
        (item, i) => renderItem(item, i, void 0, cached && cached[i])
      );
    } else {
      const keys2 = Object.keys(source);
      ret = new Array(keys2.length);
      for (let i = 0, l2 = keys2.length; i < l2; i++) {
        const key = keys2[i];
        ret[i] = renderItem(source[key], key, i, cached && cached[i]);
      }
    }
  } else {
    ret = [];
  }
  if (cache) {
    cache[index] = ret;
  }
  return ret;
}
function renderSlot(slots, name, props = {}, fallback, noSlotted) {
  if (currentRenderingInstance.isCE || currentRenderingInstance.parent && isAsyncWrapper(currentRenderingInstance.parent) && currentRenderingInstance.parent.isCE) {
    if (name !== "default")
      props.name = name;
    return createVNode("slot", props, fallback && fallback());
  }
  let slot = slots[name];
  if (slot && slot._c) {
    slot._d = false;
  }
  openBlock();
  const validSlotContent = slot && ensureValidVNode(slot(props));
  const rendered = createBlock(
    Fragment,
    {
      key: props.key || validSlotContent && validSlotContent.key || `_${name}`
    },
    validSlotContent || (fallback ? fallback() : []),
    validSlotContent && slots._ === 1 ? 64 : -2
  );
  if (!noSlotted && rendered.scopeId) {
    rendered.slotScopeIds = [rendered.scopeId + "-s"];
  }
  if (slot && slot._c) {
    slot._d = true;
  }
  return rendered;
}
function ensureValidVNode(vnodes) {
  return vnodes.some((child) => {
    if (!isVNode(child))
      return true;
    if (child.type === Comment)
      return false;
    if (child.type === Fragment && !ensureValidVNode(child.children))
      return false;
    return true;
  }) ? vnodes : null;
}
const getPublicInstance = (i) => {
  if (!i)
    return null;
  if (isStatefulComponent(i))
    return getExposeProxy(i) || i.proxy;
  return getPublicInstance(i.parent);
};
const publicPropertiesMap = /* @__PURE__ */ extend(/* @__PURE__ */ Object.create(null), {
  $: (i) => i,
  $el: (i) => i.vnode.el,
  $data: (i) => i.data,
  $props: (i) => i.props,
  $attrs: (i) => i.attrs,
  $slots: (i) => i.slots,
  $refs: (i) => i.refs,
  $parent: (i) => getPublicInstance(i.parent),
  $root: (i) => getPublicInstance(i.root),
  $emit: (i) => i.emit,
  $options: (i) => resolveMergedOptions(i),
  $forceUpdate: (i) => i.f || (i.f = () => queueJob(i.update)),
  $nextTick: (i) => i.n || (i.n = nextTick.bind(i.proxy)),
  $watch: (i) => instanceWatch.bind(i)
});
const hasSetupBinding = (state, key) => state !== EMPTY_OBJ && !state.__isScriptSetup && hasOwn(state, key);
const PublicInstanceProxyHandlers = {
  get({ _: instance }, key) {
    const { ctx: ctx2, setupState, data: data2, props, accessCache, type, appContext } = instance;
    let normalizedProps;
    if (key[0] !== "$") {
      const n = accessCache[key];
      if (n !== void 0) {
        switch (n) {
          case 1:
            return setupState[key];
          case 2:
            return data2[key];
          case 4:
            return ctx2[key];
          case 3:
            return props[key];
        }
      } else if (hasSetupBinding(setupState, key)) {
        accessCache[key] = 1;
        return setupState[key];
      } else if (data2 !== EMPTY_OBJ && hasOwn(data2, key)) {
        accessCache[key] = 2;
        return data2[key];
      } else if ((normalizedProps = instance.propsOptions[0]) && hasOwn(normalizedProps, key)) {
        accessCache[key] = 3;
        return props[key];
      } else if (ctx2 !== EMPTY_OBJ && hasOwn(ctx2, key)) {
        accessCache[key] = 4;
        return ctx2[key];
      } else if (shouldCacheAccess) {
        accessCache[key] = 0;
      }
    }
    const publicGetter = publicPropertiesMap[key];
    let cssModule, globalProperties;
    if (publicGetter) {
      if (key === "$attrs") {
        track(instance, "get", key);
      }
      return publicGetter(instance);
    } else if ((cssModule = type.__cssModules) && (cssModule = cssModule[key])) {
      return cssModule;
    } else if (ctx2 !== EMPTY_OBJ && hasOwn(ctx2, key)) {
      accessCache[key] = 4;
      return ctx2[key];
    } else if (globalProperties = appContext.config.globalProperties, hasOwn(globalProperties, key)) {
      {
        return globalProperties[key];
      }
    } else
      ;
  },
  set({ _: instance }, key, value) {
    const { data: data2, setupState, ctx: ctx2 } = instance;
    if (hasSetupBinding(setupState, key)) {
      setupState[key] = value;
      return true;
    } else if (data2 !== EMPTY_OBJ && hasOwn(data2, key)) {
      data2[key] = value;
      return true;
    } else if (hasOwn(instance.props, key)) {
      return false;
    }
    if (key[0] === "$" && key.slice(1) in instance) {
      return false;
    } else {
      {
        ctx2[key] = value;
      }
    }
    return true;
  },
  has({
    _: { data: data2, setupState, accessCache, ctx: ctx2, appContext, propsOptions }
  }, key) {
    let normalizedProps;
    return !!accessCache[key] || data2 !== EMPTY_OBJ && hasOwn(data2, key) || hasSetupBinding(setupState, key) || (normalizedProps = propsOptions[0]) && hasOwn(normalizedProps, key) || hasOwn(ctx2, key) || hasOwn(publicPropertiesMap, key) || hasOwn(appContext.config.globalProperties, key);
  },
  defineProperty(target, key, descriptor2) {
    if (descriptor2.get != null) {
      target._.accessCache[key] = 0;
    } else if (hasOwn(descriptor2, "value")) {
      this.set(target, key, descriptor2.value, null);
    }
    return Reflect.defineProperty(target, key, descriptor2);
  }
};
function normalizePropsOrEmits(props) {
  return isArray2(props) ? props.reduce(
    (normalized, p2) => (normalized[p2] = null, normalized),
    {}
  ) : props;
}
let shouldCacheAccess = true;
function applyOptions(instance) {
  const options = resolveMergedOptions(instance);
  const publicThis = instance.proxy;
  const ctx2 = instance.ctx;
  shouldCacheAccess = false;
  if (options.beforeCreate) {
    callHook(options.beforeCreate, instance, "bc");
  }
  const {
    data: dataOptions,
    computed: computedOptions,
    methods: methods2,
    watch: watchOptions,
    provide: provideOptions,
    inject: injectOptions,
    created,
    beforeMount,
    mounted,
    beforeUpdate,
    updated,
    activated,
    deactivated,
    beforeDestroy,
    beforeUnmount,
    destroyed,
    unmounted,
    render,
    renderTracked,
    renderTriggered,
    errorCaptured,
    serverPrefetch,
    expose,
    inheritAttrs,
    components,
    directives,
    filters
  } = options;
  const checkDuplicateProperties = null;
  if (injectOptions) {
    resolveInjections(injectOptions, ctx2, checkDuplicateProperties);
  }
  if (methods2) {
    for (const key in methods2) {
      const methodHandler = methods2[key];
      if (isFunction(methodHandler)) {
        {
          ctx2[key] = methodHandler.bind(publicThis);
        }
      }
    }
  }
  if (dataOptions) {
    const data2 = dataOptions.call(publicThis, publicThis);
    if (!isObject(data2))
      ;
    else {
      instance.data = reactive(data2);
    }
  }
  shouldCacheAccess = true;
  if (computedOptions) {
    for (const key in computedOptions) {
      const opt = computedOptions[key];
      const get4 = isFunction(opt) ? opt.bind(publicThis, publicThis) : isFunction(opt.get) ? opt.get.bind(publicThis, publicThis) : NOOP;
      const set4 = !isFunction(opt) && isFunction(opt.set) ? opt.set.bind(publicThis) : NOOP;
      const c = computed({
        get: get4,
        set: set4
      });
      Object.defineProperty(ctx2, key, {
        enumerable: true,
        configurable: true,
        get: () => c.value,
        set: (v) => c.value = v
      });
    }
  }
  if (watchOptions) {
    for (const key in watchOptions) {
      createWatcher(watchOptions[key], ctx2, publicThis, key);
    }
  }
  if (provideOptions) {
    const provides = isFunction(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
    Reflect.ownKeys(provides).forEach((key) => {
      provide(key, provides[key]);
    });
  }
  if (created) {
    callHook(created, instance, "c");
  }
  function registerLifecycleHook(register, hook) {
    if (isArray2(hook)) {
      hook.forEach((_hook) => register(_hook.bind(publicThis)));
    } else if (hook) {
      register(hook.bind(publicThis));
    }
  }
  registerLifecycleHook(onBeforeMount, beforeMount);
  registerLifecycleHook(onMounted, mounted);
  registerLifecycleHook(onBeforeUpdate, beforeUpdate);
  registerLifecycleHook(onUpdated, updated);
  registerLifecycleHook(onActivated, activated);
  registerLifecycleHook(onDeactivated, deactivated);
  registerLifecycleHook(onErrorCaptured, errorCaptured);
  registerLifecycleHook(onRenderTracked, renderTracked);
  registerLifecycleHook(onRenderTriggered, renderTriggered);
  registerLifecycleHook(onBeforeUnmount, beforeUnmount);
  registerLifecycleHook(onUnmounted, unmounted);
  registerLifecycleHook(onServerPrefetch, serverPrefetch);
  if (isArray2(expose)) {
    if (expose.length) {
      const exposed = instance.exposed || (instance.exposed = {});
      expose.forEach((key) => {
        Object.defineProperty(exposed, key, {
          get: () => publicThis[key],
          set: (val) => publicThis[key] = val
        });
      });
    } else if (!instance.exposed) {
      instance.exposed = {};
    }
  }
  if (render && instance.render === NOOP) {
    instance.render = render;
  }
  if (inheritAttrs != null) {
    instance.inheritAttrs = inheritAttrs;
  }
  if (components)
    instance.components = components;
  if (directives)
    instance.directives = directives;
}
function resolveInjections(injectOptions, ctx2, checkDuplicateProperties = NOOP) {
  if (isArray2(injectOptions)) {
    injectOptions = normalizeInject(injectOptions);
  }
  for (const key in injectOptions) {
    const opt = injectOptions[key];
    let injected;
    if (isObject(opt)) {
      if ("default" in opt) {
        injected = inject(
          opt.from || key,
          opt.default,
          true
        );
      } else {
        injected = inject(opt.from || key);
      }
    } else {
      injected = inject(opt);
    }
    if (isRef(injected)) {
      Object.defineProperty(ctx2, key, {
        enumerable: true,
        configurable: true,
        get: () => injected.value,
        set: (v) => injected.value = v
      });
    } else {
      ctx2[key] = injected;
    }
  }
}
function callHook(hook, instance, type) {
  callWithAsyncErrorHandling(
    isArray2(hook) ? hook.map((h) => h.bind(instance.proxy)) : hook.bind(instance.proxy),
    instance,
    type
  );
}
function createWatcher(raw2, ctx2, publicThis, key) {
  const getter = key.includes(".") ? createPathGetter(publicThis, key) : () => publicThis[key];
  if (isString(raw2)) {
    const handler = ctx2[raw2];
    if (isFunction(handler)) {
      watch(getter, handler);
    }
  } else if (isFunction(raw2)) {
    watch(getter, raw2.bind(publicThis));
  } else if (isObject(raw2)) {
    if (isArray2(raw2)) {
      raw2.forEach((r) => createWatcher(r, ctx2, publicThis, key));
    } else {
      const handler = isFunction(raw2.handler) ? raw2.handler.bind(publicThis) : ctx2[raw2.handler];
      if (isFunction(handler)) {
        watch(getter, handler, raw2);
      }
    }
  } else
    ;
}
function resolveMergedOptions(instance) {
  const base = instance.type;
  const { mixins, extends: extendsOptions } = base;
  const {
    mixins: globalMixins,
    optionsCache: cache,
    config: { optionMergeStrategies }
  } = instance.appContext;
  const cached = cache.get(base);
  let resolved;
  if (cached) {
    resolved = cached;
  } else if (!globalMixins.length && !mixins && !extendsOptions) {
    {
      resolved = base;
    }
  } else {
    resolved = {};
    if (globalMixins.length) {
      globalMixins.forEach(
        (m) => mergeOptions(resolved, m, optionMergeStrategies, true)
      );
    }
    mergeOptions(resolved, base, optionMergeStrategies);
  }
  if (isObject(base)) {
    cache.set(base, resolved);
  }
  return resolved;
}
function mergeOptions(to, from4, strats, asMixin = false) {
  const { mixins, extends: extendsOptions } = from4;
  if (extendsOptions) {
    mergeOptions(to, extendsOptions, strats, true);
  }
  if (mixins) {
    mixins.forEach(
      (m) => mergeOptions(to, m, strats, true)
    );
  }
  for (const key in from4) {
    if (asMixin && key === "expose")
      ;
    else {
      const strat = internalOptionMergeStrats[key] || strats && strats[key];
      to[key] = strat ? strat(to[key], from4[key]) : from4[key];
    }
  }
  return to;
}
const internalOptionMergeStrats = {
  data: mergeDataFn,
  props: mergeEmitsOrPropsOptions,
  emits: mergeEmitsOrPropsOptions,
  methods: mergeObjectOptions,
  computed: mergeObjectOptions,
  beforeCreate: mergeAsArray,
  created: mergeAsArray,
  beforeMount: mergeAsArray,
  mounted: mergeAsArray,
  beforeUpdate: mergeAsArray,
  updated: mergeAsArray,
  beforeDestroy: mergeAsArray,
  beforeUnmount: mergeAsArray,
  destroyed: mergeAsArray,
  unmounted: mergeAsArray,
  activated: mergeAsArray,
  deactivated: mergeAsArray,
  errorCaptured: mergeAsArray,
  serverPrefetch: mergeAsArray,
  components: mergeObjectOptions,
  directives: mergeObjectOptions,
  watch: mergeWatchOptions,
  provide: mergeDataFn,
  inject: mergeInject
};
function mergeDataFn(to, from4) {
  if (!from4) {
    return to;
  }
  if (!to) {
    return from4;
  }
  return function mergedDataFn() {
    return extend(
      isFunction(to) ? to.call(this, this) : to,
      isFunction(from4) ? from4.call(this, this) : from4
    );
  };
}
function mergeInject(to, from4) {
  return mergeObjectOptions(normalizeInject(to), normalizeInject(from4));
}
function normalizeInject(raw2) {
  if (isArray2(raw2)) {
    const res = {};
    for (let i = 0; i < raw2.length; i++) {
      res[raw2[i]] = raw2[i];
    }
    return res;
  }
  return raw2;
}
function mergeAsArray(to, from4) {
  return to ? [...new Set([].concat(to, from4))] : from4;
}
function mergeObjectOptions(to, from4) {
  return to ? extend(/* @__PURE__ */ Object.create(null), to, from4) : from4;
}
function mergeEmitsOrPropsOptions(to, from4) {
  if (to) {
    if (isArray2(to) && isArray2(from4)) {
      return [.../* @__PURE__ */ new Set([...to, ...from4])];
    }
    return extend(
      /* @__PURE__ */ Object.create(null),
      normalizePropsOrEmits(to),
      normalizePropsOrEmits(from4 != null ? from4 : {})
    );
  } else {
    return from4;
  }
}
function mergeWatchOptions(to, from4) {
  if (!to)
    return from4;
  if (!from4)
    return to;
  const merged = extend(/* @__PURE__ */ Object.create(null), to);
  for (const key in from4) {
    merged[key] = mergeAsArray(to[key], from4[key]);
  }
  return merged;
}
function createAppContext() {
  return {
    app: null,
    config: {
      isNativeTag: NO,
      performance: false,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let uid$1 = 0;
function createAppAPI(render, hydrate) {
  return function createApp2(rootComponent, rootProps = null) {
    if (!isFunction(rootComponent)) {
      rootComponent = extend({}, rootComponent);
    }
    if (rootProps != null && !isObject(rootProps)) {
      rootProps = null;
    }
    const context2 = createAppContext();
    const installedPlugins = /* @__PURE__ */ new Set();
    let isMounted = false;
    const app = context2.app = {
      _uid: uid$1++,
      _component: rootComponent,
      _props: rootProps,
      _container: null,
      _context: context2,
      _instance: null,
      version,
      get config() {
        return context2.config;
      },
      set config(v) {
      },
      use(plugin, ...options) {
        if (installedPlugins.has(plugin))
          ;
        else if (plugin && isFunction(plugin.install)) {
          installedPlugins.add(plugin);
          plugin.install(app, ...options);
        } else if (isFunction(plugin)) {
          installedPlugins.add(plugin);
          plugin(app, ...options);
        } else
          ;
        return app;
      },
      mixin(mixin) {
        {
          if (!context2.mixins.includes(mixin)) {
            context2.mixins.push(mixin);
          }
        }
        return app;
      },
      component(name, component) {
        if (!component) {
          return context2.components[name];
        }
        context2.components[name] = component;
        return app;
      },
      directive(name, directive) {
        if (!directive) {
          return context2.directives[name];
        }
        context2.directives[name] = directive;
        return app;
      },
      mount(rootContainer, isHydrate, isSVG) {
        if (!isMounted) {
          const vnode = createVNode(
            rootComponent,
            rootProps
          );
          vnode.appContext = context2;
          if (isHydrate && hydrate) {
            hydrate(vnode, rootContainer);
          } else {
            render(vnode, rootContainer, isSVG);
          }
          isMounted = true;
          app._container = rootContainer;
          rootContainer.__vue_app__ = app;
          return getExposeProxy(vnode.component) || vnode.component.proxy;
        }
      },
      unmount() {
        if (isMounted) {
          render(null, app._container);
          delete app._container.__vue_app__;
        }
      },
      provide(key, value) {
        context2.provides[key] = value;
        return app;
      },
      runWithContext(fn) {
        currentApp = app;
        try {
          return fn();
        } finally {
          currentApp = null;
        }
      }
    };
    return app;
  };
}
let currentApp = null;
function provide(key, value) {
  if (!currentInstance)
    ;
  else {
    let provides = currentInstance.provides;
    const parentProvides = currentInstance.parent && currentInstance.parent.provides;
    if (parentProvides === provides) {
      provides = currentInstance.provides = Object.create(parentProvides);
    }
    provides[key] = value;
  }
}
function inject(key, defaultValue, treatDefaultAsFactory = false) {
  const instance = currentInstance || currentRenderingInstance;
  if (instance || currentApp) {
    const provides = instance ? instance.parent == null ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides : currentApp._context.provides;
    if (provides && key in provides) {
      return provides[key];
    } else if (arguments.length > 1) {
      return treatDefaultAsFactory && isFunction(defaultValue) ? defaultValue.call(instance && instance.proxy) : defaultValue;
    } else
      ;
  }
}
function initProps(instance, rawProps, isStateful, isSSR = false) {
  const props = {};
  const attrs = {};
  def(attrs, InternalObjectKey, 1);
  instance.propsDefaults = /* @__PURE__ */ Object.create(null);
  setFullProps(instance, rawProps, props, attrs);
  for (const key in instance.propsOptions[0]) {
    if (!(key in props)) {
      props[key] = void 0;
    }
  }
  if (isStateful) {
    instance.props = isSSR ? props : shallowReactive(props);
  } else {
    if (!instance.type.props) {
      instance.props = attrs;
    } else {
      instance.props = props;
    }
  }
  instance.attrs = attrs;
}
function updateProps(instance, rawProps, rawPrevProps, optimized) {
  const {
    props,
    attrs,
    vnode: { patchFlag }
  } = instance;
  const rawCurrentProps = toRaw(props);
  const [options] = instance.propsOptions;
  let hasAttrsChanged = false;
  if ((optimized || patchFlag > 0) && !(patchFlag & 16)) {
    if (patchFlag & 8) {
      const propsToUpdate = instance.vnode.dynamicProps;
      for (let i = 0; i < propsToUpdate.length; i++) {
        let key = propsToUpdate[i];
        if (isEmitListener(instance.emitsOptions, key)) {
          continue;
        }
        const value = rawProps[key];
        if (options) {
          if (hasOwn(attrs, key)) {
            if (value !== attrs[key]) {
              attrs[key] = value;
              hasAttrsChanged = true;
            }
          } else {
            const camelizedKey = camelize(key);
            props[camelizedKey] = resolvePropValue(
              options,
              rawCurrentProps,
              camelizedKey,
              value,
              instance,
              false
            );
          }
        } else {
          if (value !== attrs[key]) {
            attrs[key] = value;
            hasAttrsChanged = true;
          }
        }
      }
    }
  } else {
    if (setFullProps(instance, rawProps, props, attrs)) {
      hasAttrsChanged = true;
    }
    let kebabKey;
    for (const key in rawCurrentProps) {
      if (!rawProps || !hasOwn(rawProps, key) && ((kebabKey = hyphenate(key)) === key || !hasOwn(rawProps, kebabKey))) {
        if (options) {
          if (rawPrevProps && (rawPrevProps[key] !== void 0 || rawPrevProps[kebabKey] !== void 0)) {
            props[key] = resolvePropValue(
              options,
              rawCurrentProps,
              key,
              void 0,
              instance,
              true
            );
          }
        } else {
          delete props[key];
        }
      }
    }
    if (attrs !== rawCurrentProps) {
      for (const key in attrs) {
        if (!rawProps || !hasOwn(rawProps, key) && true) {
          delete attrs[key];
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (hasAttrsChanged) {
    trigger(instance, "set", "$attrs");
  }
}
function setFullProps(instance, rawProps, props, attrs) {
  const [options, needCastKeys] = instance.propsOptions;
  let hasAttrsChanged = false;
  let rawCastValues;
  if (rawProps) {
    for (let key in rawProps) {
      if (isReservedProp(key)) {
        continue;
      }
      const value = rawProps[key];
      let camelKey;
      if (options && hasOwn(options, camelKey = camelize(key))) {
        if (!needCastKeys || !needCastKeys.includes(camelKey)) {
          props[camelKey] = value;
        } else {
          (rawCastValues || (rawCastValues = {}))[camelKey] = value;
        }
      } else if (!isEmitListener(instance.emitsOptions, key)) {
        if (!(key in attrs) || value !== attrs[key]) {
          attrs[key] = value;
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (needCastKeys) {
    const rawCurrentProps = toRaw(props);
    const castValues = rawCastValues || EMPTY_OBJ;
    for (let i = 0; i < needCastKeys.length; i++) {
      const key = needCastKeys[i];
      props[key] = resolvePropValue(
        options,
        rawCurrentProps,
        key,
        castValues[key],
        instance,
        !hasOwn(castValues, key)
      );
    }
  }
  return hasAttrsChanged;
}
function resolvePropValue(options, props, key, value, instance, isAbsent) {
  const opt = options[key];
  if (opt != null) {
    const hasDefault = hasOwn(opt, "default");
    if (hasDefault && value === void 0) {
      const defaultValue = opt.default;
      if (opt.type !== Function && !opt.skipFactory && isFunction(defaultValue)) {
        const { propsDefaults } = instance;
        if (key in propsDefaults) {
          value = propsDefaults[key];
        } else {
          setCurrentInstance(instance);
          value = propsDefaults[key] = defaultValue.call(
            null,
            props
          );
          unsetCurrentInstance();
        }
      } else {
        value = defaultValue;
      }
    }
    if (opt[0]) {
      if (isAbsent && !hasDefault) {
        value = false;
      } else if (opt[1] && (value === "" || value === hyphenate(key))) {
        value = true;
      }
    }
  }
  return value;
}
function normalizePropsOptions(comp, appContext, asMixin = false) {
  const cache = appContext.propsCache;
  const cached = cache.get(comp);
  if (cached) {
    return cached;
  }
  const raw2 = comp.props;
  const normalized = {};
  const needCastKeys = [];
  let hasExtends = false;
  if (!isFunction(comp)) {
    const extendProps = (raw22) => {
      hasExtends = true;
      const [props, keys2] = normalizePropsOptions(raw22, appContext, true);
      extend(normalized, props);
      if (keys2)
        needCastKeys.push(...keys2);
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendProps);
    }
    if (comp.extends) {
      extendProps(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendProps);
    }
  }
  if (!raw2 && !hasExtends) {
    if (isObject(comp)) {
      cache.set(comp, EMPTY_ARR);
    }
    return EMPTY_ARR;
  }
  if (isArray2(raw2)) {
    for (let i = 0; i < raw2.length; i++) {
      const normalizedKey = camelize(raw2[i]);
      if (validatePropName(normalizedKey)) {
        normalized[normalizedKey] = EMPTY_OBJ;
      }
    }
  } else if (raw2) {
    for (const key in raw2) {
      const normalizedKey = camelize(key);
      if (validatePropName(normalizedKey)) {
        const opt = raw2[key];
        const prop = normalized[normalizedKey] = isArray2(opt) || isFunction(opt) ? { type: opt } : extend({}, opt);
        if (prop) {
          const booleanIndex = getTypeIndex(Boolean, prop.type);
          const stringIndex = getTypeIndex(String, prop.type);
          prop[0] = booleanIndex > -1;
          prop[1] = stringIndex < 0 || booleanIndex < stringIndex;
          if (booleanIndex > -1 || hasOwn(prop, "default")) {
            needCastKeys.push(normalizedKey);
          }
        }
      }
    }
  }
  const res = [normalized, needCastKeys];
  if (isObject(comp)) {
    cache.set(comp, res);
  }
  return res;
}
function validatePropName(key) {
  if (key[0] !== "$") {
    return true;
  }
  return false;
}
function getType(ctor) {
  const match = ctor && ctor.toString().match(/^\s*(function|class) (\w+)/);
  return match ? match[2] : ctor === null ? "null" : "";
}
function isSameType(a, b) {
  return getType(a) === getType(b);
}
function getTypeIndex(type, expectedTypes) {
  if (isArray2(expectedTypes)) {
    return expectedTypes.findIndex((t) => isSameType(t, type));
  } else if (isFunction(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1;
  }
  return -1;
}
const isInternalKey = (key) => key[0] === "_" || key === "$stable";
const normalizeSlotValue = (value) => isArray2(value) ? value.map(normalizeVNode) : [normalizeVNode(value)];
const normalizeSlot = (key, rawSlot, ctx2) => {
  if (rawSlot._n) {
    return rawSlot;
  }
  const normalized = withCtx((...args) => {
    if (false)
      ;
    return normalizeSlotValue(rawSlot(...args));
  }, ctx2);
  normalized._c = false;
  return normalized;
};
const normalizeObjectSlots = (rawSlots, slots, instance) => {
  const ctx2 = rawSlots._ctx;
  for (const key in rawSlots) {
    if (isInternalKey(key))
      continue;
    const value = rawSlots[key];
    if (isFunction(value)) {
      slots[key] = normalizeSlot(key, value, ctx2);
    } else if (value != null) {
      const normalized = normalizeSlotValue(value);
      slots[key] = () => normalized;
    }
  }
};
const normalizeVNodeSlots = (instance, children) => {
  const normalized = normalizeSlotValue(children);
  instance.slots.default = () => normalized;
};
const initSlots = (instance, children) => {
  if (instance.vnode.shapeFlag & 32) {
    const type = children._;
    if (type) {
      instance.slots = toRaw(children);
      def(children, "_", type);
    } else {
      normalizeObjectSlots(
        children,
        instance.slots = {}
      );
    }
  } else {
    instance.slots = {};
    if (children) {
      normalizeVNodeSlots(instance, children);
    }
  }
  def(instance.slots, InternalObjectKey, 1);
};
const updateSlots = (instance, children, optimized) => {
  const { vnode, slots } = instance;
  let needDeletionCheck = true;
  let deletionComparisonTarget = EMPTY_OBJ;
  if (vnode.shapeFlag & 32) {
    const type = children._;
    if (type) {
      if (optimized && type === 1) {
        needDeletionCheck = false;
      } else {
        extend(slots, children);
        if (!optimized && type === 1) {
          delete slots._;
        }
      }
    } else {
      needDeletionCheck = !children.$stable;
      normalizeObjectSlots(children, slots);
    }
    deletionComparisonTarget = children;
  } else if (children) {
    normalizeVNodeSlots(instance, children);
    deletionComparisonTarget = { default: 1 };
  }
  if (needDeletionCheck) {
    for (const key in slots) {
      if (!isInternalKey(key) && !(key in deletionComparisonTarget)) {
        delete slots[key];
      }
    }
  }
};
function setRef(rawRef, oldRawRef, parentSuspense, vnode, isUnmount = false) {
  if (isArray2(rawRef)) {
    rawRef.forEach(
      (r, i) => setRef(
        r,
        oldRawRef && (isArray2(oldRawRef) ? oldRawRef[i] : oldRawRef),
        parentSuspense,
        vnode,
        isUnmount
      )
    );
    return;
  }
  if (isAsyncWrapper(vnode) && !isUnmount) {
    return;
  }
  const refValue = vnode.shapeFlag & 4 ? getExposeProxy(vnode.component) || vnode.component.proxy : vnode.el;
  const value = isUnmount ? null : refValue;
  const { i: owner, r: ref2 } = rawRef;
  const oldRef = oldRawRef && oldRawRef.r;
  const refs = owner.refs === EMPTY_OBJ ? owner.refs = {} : owner.refs;
  const setupState = owner.setupState;
  if (oldRef != null && oldRef !== ref2) {
    if (isString(oldRef)) {
      refs[oldRef] = null;
      if (hasOwn(setupState, oldRef)) {
        setupState[oldRef] = null;
      }
    } else if (isRef(oldRef)) {
      oldRef.value = null;
    }
  }
  if (isFunction(ref2)) {
    callWithErrorHandling(ref2, owner, 12, [value, refs]);
  } else {
    const _isString = isString(ref2);
    const _isRef = isRef(ref2);
    if (_isString || _isRef) {
      const doSet = () => {
        if (rawRef.f) {
          const existing = _isString ? hasOwn(setupState, ref2) ? setupState[ref2] : refs[ref2] : ref2.value;
          if (isUnmount) {
            isArray2(existing) && remove(existing, refValue);
          } else {
            if (!isArray2(existing)) {
              if (_isString) {
                refs[ref2] = [refValue];
                if (hasOwn(setupState, ref2)) {
                  setupState[ref2] = refs[ref2];
                }
              } else {
                ref2.value = [refValue];
                if (rawRef.k)
                  refs[rawRef.k] = ref2.value;
              }
            } else if (!existing.includes(refValue)) {
              existing.push(refValue);
            }
          }
        } else if (_isString) {
          refs[ref2] = value;
          if (hasOwn(setupState, ref2)) {
            setupState[ref2] = value;
          }
        } else if (_isRef) {
          ref2.value = value;
          if (rawRef.k)
            refs[rawRef.k] = value;
        } else
          ;
      };
      if (value) {
        doSet.id = -1;
        queuePostRenderEffect(doSet, parentSuspense);
      } else {
        doSet();
      }
    }
  }
}
const queuePostRenderEffect = queueEffectWithSuspense;
function createRenderer(options) {
  return baseCreateRenderer(options);
}
function baseCreateRenderer(options, createHydrationFns) {
  const target = getGlobalThis();
  target.__VUE__ = true;
  const {
    insert: hostInsert,
    remove: hostRemove,
    patchProp: hostPatchProp,
    createElement: hostCreateElement,
    createText: hostCreateText,
    createComment: hostCreateComment,
    setText: hostSetText,
    setElementText: hostSetElementText,
    parentNode: hostParentNode,
    nextSibling: hostNextSibling,
    setScopeId: hostSetScopeId = NOOP,
    insertStaticContent: hostInsertStaticContent
  } = options;
  const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, isSVG = false, slotScopeIds = null, optimized = !!n2.dynamicChildren) => {
    if (n1 === n2) {
      return;
    }
    if (n1 && !isSameVNodeType(n1, n2)) {
      anchor = getNextHostNode(n1);
      unmount(n1, parentComponent, parentSuspense, true);
      n1 = null;
    }
    if (n2.patchFlag === -2) {
      optimized = false;
      n2.dynamicChildren = null;
    }
    const { type, ref: ref2, shapeFlag } = n2;
    switch (type) {
      case Text:
        processText(n1, n2, container, anchor);
        break;
      case Comment:
        processCommentNode(n1, n2, container, anchor);
        break;
      case Static:
        if (n1 == null) {
          mountStaticNode(n2, container, anchor, isSVG);
        }
        break;
      case Fragment:
        processFragment(
          n1,
          n2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          isSVG,
          slotScopeIds,
          optimized
        );
        break;
      default:
        if (shapeFlag & 1) {
          processElement(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            isSVG,
            slotScopeIds,
            optimized
          );
        } else if (shapeFlag & 6) {
          processComponent(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            isSVG,
            slotScopeIds,
            optimized
          );
        } else if (shapeFlag & 64) {
          type.process(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            isSVG,
            slotScopeIds,
            optimized,
            internals
          );
        } else if (shapeFlag & 128) {
          type.process(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            isSVG,
            slotScopeIds,
            optimized,
            internals
          );
        } else
          ;
    }
    if (ref2 != null && parentComponent) {
      setRef(ref2, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
    }
  };
  const processText = (n1, n2, container, anchor) => {
    if (n1 == null) {
      hostInsert(
        n2.el = hostCreateText(n2.children),
        container,
        anchor
      );
    } else {
      const el = n2.el = n1.el;
      if (n2.children !== n1.children) {
        hostSetText(el, n2.children);
      }
    }
  };
  const processCommentNode = (n1, n2, container, anchor) => {
    if (n1 == null) {
      hostInsert(
        n2.el = hostCreateComment(n2.children || ""),
        container,
        anchor
      );
    } else {
      n2.el = n1.el;
    }
  };
  const mountStaticNode = (n2, container, anchor, isSVG) => {
    [n2.el, n2.anchor] = hostInsertStaticContent(
      n2.children,
      container,
      anchor,
      isSVG,
      n2.el,
      n2.anchor
    );
  };
  const moveStaticNode = ({ el, anchor }, container, nextSibling) => {
    let next3;
    while (el && el !== anchor) {
      next3 = hostNextSibling(el);
      hostInsert(el, container, nextSibling);
      el = next3;
    }
    hostInsert(anchor, container, nextSibling);
  };
  const removeStaticNode = ({ el, anchor }) => {
    let next3;
    while (el && el !== anchor) {
      next3 = hostNextSibling(el);
      hostRemove(el);
      el = next3;
    }
    hostRemove(anchor);
  };
  const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    isSVG = isSVG || n2.type === "svg";
    if (n1 == null) {
      mountElement(
        n2,
        container,
        anchor,
        parentComponent,
        parentSuspense,
        isSVG,
        slotScopeIds,
        optimized
      );
    } else {
      patchElement(
        n1,
        n2,
        parentComponent,
        parentSuspense,
        isSVG,
        slotScopeIds,
        optimized
      );
    }
  };
  const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    let el;
    let vnodeHook;
    const { type, props, shapeFlag, transition, dirs } = vnode;
    el = vnode.el = hostCreateElement(
      vnode.type,
      isSVG,
      props && props.is,
      props
    );
    if (shapeFlag & 8) {
      hostSetElementText(el, vnode.children);
    } else if (shapeFlag & 16) {
      mountChildren(
        vnode.children,
        el,
        null,
        parentComponent,
        parentSuspense,
        isSVG && type !== "foreignObject",
        slotScopeIds,
        optimized
      );
    }
    if (dirs) {
      invokeDirectiveHook(vnode, null, parentComponent, "created");
    }
    setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
    if (props) {
      for (const key in props) {
        if (key !== "value" && !isReservedProp(key)) {
          hostPatchProp(
            el,
            key,
            null,
            props[key],
            isSVG,
            vnode.children,
            parentComponent,
            parentSuspense,
            unmountChildren
          );
        }
      }
      if ("value" in props) {
        hostPatchProp(el, "value", null, props.value);
      }
      if (vnodeHook = props.onVnodeBeforeMount) {
        invokeVNodeHook(vnodeHook, parentComponent, vnode);
      }
    }
    if (dirs) {
      invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
    }
    const needCallTransitionHooks = (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;
    if (needCallTransitionHooks) {
      transition.beforeEnter(el);
    }
    hostInsert(el, container, anchor);
    if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        needCallTransitionHooks && transition.enter(el);
        dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
      }, parentSuspense);
    }
  };
  const setScopeId = (el, vnode, scopeId, slotScopeIds, parentComponent) => {
    if (scopeId) {
      hostSetScopeId(el, scopeId);
    }
    if (slotScopeIds) {
      for (let i = 0; i < slotScopeIds.length; i++) {
        hostSetScopeId(el, slotScopeIds[i]);
      }
    }
    if (parentComponent) {
      let subTree = parentComponent.subTree;
      if (vnode === subTree) {
        const parentVNode = parentComponent.vnode;
        setScopeId(
          el,
          parentVNode,
          parentVNode.scopeId,
          parentVNode.slotScopeIds,
          parentComponent.parent
        );
      }
    }
  };
  const mountChildren = (children, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, start = 0) => {
    for (let i = start; i < children.length; i++) {
      const child = children[i] = optimized ? cloneIfMounted(children[i]) : normalizeVNode(children[i]);
      patch(
        null,
        child,
        container,
        anchor,
        parentComponent,
        parentSuspense,
        isSVG,
        slotScopeIds,
        optimized
      );
    }
  };
  const patchElement = (n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    const el = n2.el = n1.el;
    let { patchFlag, dynamicChildren, dirs } = n2;
    patchFlag |= n1.patchFlag & 16;
    const oldProps = n1.props || EMPTY_OBJ;
    const newProps = n2.props || EMPTY_OBJ;
    let vnodeHook;
    parentComponent && toggleRecurse(parentComponent, false);
    if (vnodeHook = newProps.onVnodeBeforeUpdate) {
      invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
    }
    if (dirs) {
      invokeDirectiveHook(n2, n1, parentComponent, "beforeUpdate");
    }
    parentComponent && toggleRecurse(parentComponent, true);
    const areChildrenSVG = isSVG && n2.type !== "foreignObject";
    if (dynamicChildren) {
      patchBlockChildren(
        n1.dynamicChildren,
        dynamicChildren,
        el,
        parentComponent,
        parentSuspense,
        areChildrenSVG,
        slotScopeIds
      );
    } else if (!optimized) {
      patchChildren(
        n1,
        n2,
        el,
        null,
        parentComponent,
        parentSuspense,
        areChildrenSVG,
        slotScopeIds,
        false
      );
    }
    if (patchFlag > 0) {
      if (patchFlag & 16) {
        patchProps(
          el,
          n2,
          oldProps,
          newProps,
          parentComponent,
          parentSuspense,
          isSVG
        );
      } else {
        if (patchFlag & 2) {
          if (oldProps.class !== newProps.class) {
            hostPatchProp(el, "class", null, newProps.class, isSVG);
          }
        }
        if (patchFlag & 4) {
          hostPatchProp(el, "style", oldProps.style, newProps.style, isSVG);
        }
        if (patchFlag & 8) {
          const propsToUpdate = n2.dynamicProps;
          for (let i = 0; i < propsToUpdate.length; i++) {
            const key = propsToUpdate[i];
            const prev = oldProps[key];
            const next3 = newProps[key];
            if (next3 !== prev || key === "value") {
              hostPatchProp(
                el,
                key,
                prev,
                next3,
                isSVG,
                n1.children,
                parentComponent,
                parentSuspense,
                unmountChildren
              );
            }
          }
        }
      }
      if (patchFlag & 1) {
        if (n1.children !== n2.children) {
          hostSetElementText(el, n2.children);
        }
      }
    } else if (!optimized && dynamicChildren == null) {
      patchProps(
        el,
        n2,
        oldProps,
        newProps,
        parentComponent,
        parentSuspense,
        isSVG
      );
    }
    if ((vnodeHook = newProps.onVnodeUpdated) || dirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
        dirs && invokeDirectiveHook(n2, n1, parentComponent, "updated");
      }, parentSuspense);
    }
  };
  const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, isSVG, slotScopeIds) => {
    for (let i = 0; i < newChildren.length; i++) {
      const oldVNode = oldChildren[i];
      const newVNode = newChildren[i];
      const container = oldVNode.el && (oldVNode.type === Fragment || !isSameVNodeType(oldVNode, newVNode) || oldVNode.shapeFlag & (6 | 64)) ? hostParentNode(oldVNode.el) : fallbackContainer;
      patch(
        oldVNode,
        newVNode,
        container,
        null,
        parentComponent,
        parentSuspense,
        isSVG,
        slotScopeIds,
        true
      );
    }
  };
  const patchProps = (el, vnode, oldProps, newProps, parentComponent, parentSuspense, isSVG) => {
    if (oldProps !== newProps) {
      if (oldProps !== EMPTY_OBJ) {
        for (const key in oldProps) {
          if (!isReservedProp(key) && !(key in newProps)) {
            hostPatchProp(
              el,
              key,
              oldProps[key],
              null,
              isSVG,
              vnode.children,
              parentComponent,
              parentSuspense,
              unmountChildren
            );
          }
        }
      }
      for (const key in newProps) {
        if (isReservedProp(key))
          continue;
        const next3 = newProps[key];
        const prev = oldProps[key];
        if (next3 !== prev && key !== "value") {
          hostPatchProp(
            el,
            key,
            prev,
            next3,
            isSVG,
            vnode.children,
            parentComponent,
            parentSuspense,
            unmountChildren
          );
        }
      }
      if ("value" in newProps) {
        hostPatchProp(el, "value", oldProps.value, newProps.value);
      }
    }
  };
  const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    const fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText("");
    const fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText("");
    let { patchFlag, dynamicChildren, slotScopeIds: fragmentSlotScopeIds } = n2;
    if (fragmentSlotScopeIds) {
      slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
    }
    if (n1 == null) {
      hostInsert(fragmentStartAnchor, container, anchor);
      hostInsert(fragmentEndAnchor, container, anchor);
      mountChildren(
        n2.children,
        container,
        fragmentEndAnchor,
        parentComponent,
        parentSuspense,
        isSVG,
        slotScopeIds,
        optimized
      );
    } else {
      if (patchFlag > 0 && patchFlag & 64 && dynamicChildren && n1.dynamicChildren) {
        patchBlockChildren(
          n1.dynamicChildren,
          dynamicChildren,
          container,
          parentComponent,
          parentSuspense,
          isSVG,
          slotScopeIds
        );
        if (n2.key != null || parentComponent && n2 === parentComponent.subTree) {
          traverseStaticChildren(
            n1,
            n2,
            true
          );
        }
      } else {
        patchChildren(
          n1,
          n2,
          container,
          fragmentEndAnchor,
          parentComponent,
          parentSuspense,
          isSVG,
          slotScopeIds,
          optimized
        );
      }
    }
  };
  const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    n2.slotScopeIds = slotScopeIds;
    if (n1 == null) {
      if (n2.shapeFlag & 512) {
        parentComponent.ctx.activate(
          n2,
          container,
          anchor,
          isSVG,
          optimized
        );
      } else {
        mountComponent(
          n2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          isSVG,
          optimized
        );
      }
    } else {
      updateComponent(n1, n2, optimized);
    }
  };
  const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {
    const instance = initialVNode.component = createComponentInstance(
      initialVNode,
      parentComponent,
      parentSuspense
    );
    if (isKeepAlive(initialVNode)) {
      instance.ctx.renderer = internals;
    }
    {
      setupComponent(instance);
    }
    if (instance.asyncDep) {
      parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect);
      if (!initialVNode.el) {
        const placeholder = instance.subTree = createVNode(Comment);
        processCommentNode(null, placeholder, container, anchor);
      }
      return;
    }
    setupRenderEffect(
      instance,
      initialVNode,
      container,
      anchor,
      parentSuspense,
      isSVG,
      optimized
    );
  };
  const updateComponent = (n1, n2, optimized) => {
    const instance = n2.component = n1.component;
    if (shouldUpdateComponent(n1, n2, optimized)) {
      if (instance.asyncDep && !instance.asyncResolved) {
        updateComponentPreRender(instance, n2, optimized);
        return;
      } else {
        instance.next = n2;
        invalidateJob(instance.update);
        instance.update();
      }
    } else {
      n2.el = n1.el;
      instance.vnode = n2;
    }
  };
  const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized) => {
    const componentUpdateFn = () => {
      if (!instance.isMounted) {
        let vnodeHook;
        const { el, props } = initialVNode;
        const { bm, m, parent } = instance;
        const isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
        toggleRecurse(instance, false);
        if (bm) {
          invokeArrayFns(bm);
        }
        if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeBeforeMount)) {
          invokeVNodeHook(vnodeHook, parent, initialVNode);
        }
        toggleRecurse(instance, true);
        if (el && hydrateNode) {
          const hydrateSubTree = () => {
            instance.subTree = renderComponentRoot(instance);
            hydrateNode(
              el,
              instance.subTree,
              instance,
              parentSuspense,
              null
            );
          };
          if (isAsyncWrapperVNode) {
            initialVNode.type.__asyncLoader().then(
              () => !instance.isUnmounted && hydrateSubTree()
            );
          } else {
            hydrateSubTree();
          }
        } else {
          const subTree = instance.subTree = renderComponentRoot(instance);
          patch(
            null,
            subTree,
            container,
            anchor,
            instance,
            parentSuspense,
            isSVG
          );
          initialVNode.el = subTree.el;
        }
        if (m) {
          queuePostRenderEffect(m, parentSuspense);
        }
        if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeMounted)) {
          const scopedInitialVNode = initialVNode;
          queuePostRenderEffect(
            () => invokeVNodeHook(vnodeHook, parent, scopedInitialVNode),
            parentSuspense
          );
        }
        if (initialVNode.shapeFlag & 256 || parent && isAsyncWrapper(parent.vnode) && parent.vnode.shapeFlag & 256) {
          instance.a && queuePostRenderEffect(instance.a, parentSuspense);
        }
        instance.isMounted = true;
        initialVNode = container = anchor = null;
      } else {
        let { next: next3, bu, u, parent, vnode } = instance;
        let originNext = next3;
        let vnodeHook;
        toggleRecurse(instance, false);
        if (next3) {
          next3.el = vnode.el;
          updateComponentPreRender(instance, next3, optimized);
        } else {
          next3 = vnode;
        }
        if (bu) {
          invokeArrayFns(bu);
        }
        if (vnodeHook = next3.props && next3.props.onVnodeBeforeUpdate) {
          invokeVNodeHook(vnodeHook, parent, next3, vnode);
        }
        toggleRecurse(instance, true);
        const nextTree = renderComponentRoot(instance);
        const prevTree = instance.subTree;
        instance.subTree = nextTree;
        patch(
          prevTree,
          nextTree,
          hostParentNode(prevTree.el),
          getNextHostNode(prevTree),
          instance,
          parentSuspense,
          isSVG
        );
        next3.el = nextTree.el;
        if (originNext === null) {
          updateHOCHostEl(instance, nextTree.el);
        }
        if (u) {
          queuePostRenderEffect(u, parentSuspense);
        }
        if (vnodeHook = next3.props && next3.props.onVnodeUpdated) {
          queuePostRenderEffect(
            () => invokeVNodeHook(vnodeHook, parent, next3, vnode),
            parentSuspense
          );
        }
      }
    };
    const effect = instance.effect = new ReactiveEffect(
      componentUpdateFn,
      () => queueJob(update),
      instance.scope
    );
    const update = instance.update = () => effect.run();
    update.id = instance.uid;
    toggleRecurse(instance, true);
    update();
  };
  const updateComponentPreRender = (instance, nextVNode, optimized) => {
    nextVNode.component = instance;
    const prevProps = instance.vnode.props;
    instance.vnode = nextVNode;
    instance.next = null;
    updateProps(instance, nextVNode.props, prevProps, optimized);
    updateSlots(instance, nextVNode.children, optimized);
    pauseTracking();
    flushPreFlushCbs();
    resetTracking();
  };
  const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized = false) => {
    const c1 = n1 && n1.children;
    const prevShapeFlag = n1 ? n1.shapeFlag : 0;
    const c2 = n2.children;
    const { patchFlag, shapeFlag } = n2;
    if (patchFlag > 0) {
      if (patchFlag & 128) {
        patchKeyedChildren(
          c1,
          c2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          isSVG,
          slotScopeIds,
          optimized
        );
        return;
      } else if (patchFlag & 256) {
        patchUnkeyedChildren(
          c1,
          c2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          isSVG,
          slotScopeIds,
          optimized
        );
        return;
      }
    }
    if (shapeFlag & 8) {
      if (prevShapeFlag & 16) {
        unmountChildren(c1, parentComponent, parentSuspense);
      }
      if (c2 !== c1) {
        hostSetElementText(container, c2);
      }
    } else {
      if (prevShapeFlag & 16) {
        if (shapeFlag & 16) {
          patchKeyedChildren(
            c1,
            c2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            isSVG,
            slotScopeIds,
            optimized
          );
        } else {
          unmountChildren(c1, parentComponent, parentSuspense, true);
        }
      } else {
        if (prevShapeFlag & 8) {
          hostSetElementText(container, "");
        }
        if (shapeFlag & 16) {
          mountChildren(
            c2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            isSVG,
            slotScopeIds,
            optimized
          );
        }
      }
    }
  };
  const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    c1 = c1 || EMPTY_ARR;
    c2 = c2 || EMPTY_ARR;
    const oldLength = c1.length;
    const newLength = c2.length;
    const commonLength = Math.min(oldLength, newLength);
    let i;
    for (i = 0; i < commonLength; i++) {
      const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
      patch(
        c1[i],
        nextChild,
        container,
        null,
        parentComponent,
        parentSuspense,
        isSVG,
        slotScopeIds,
        optimized
      );
    }
    if (oldLength > newLength) {
      unmountChildren(
        c1,
        parentComponent,
        parentSuspense,
        true,
        false,
        commonLength
      );
    } else {
      mountChildren(
        c2,
        container,
        anchor,
        parentComponent,
        parentSuspense,
        isSVG,
        slotScopeIds,
        optimized,
        commonLength
      );
    }
  };
  const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    let i = 0;
    const l2 = c2.length;
    let e1 = c1.length - 1;
    let e2 = l2 - 1;
    while (i <= e1 && i <= e2) {
      const n1 = c1[i];
      const n2 = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
      if (isSameVNodeType(n1, n2)) {
        patch(
          n1,
          n2,
          container,
          null,
          parentComponent,
          parentSuspense,
          isSVG,
          slotScopeIds,
          optimized
        );
      } else {
        break;
      }
      i++;
    }
    while (i <= e1 && i <= e2) {
      const n1 = c1[e1];
      const n2 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]);
      if (isSameVNodeType(n1, n2)) {
        patch(
          n1,
          n2,
          container,
          null,
          parentComponent,
          parentSuspense,
          isSVG,
          slotScopeIds,
          optimized
        );
      } else {
        break;
      }
      e1--;
      e2--;
    }
    if (i > e1) {
      if (i <= e2) {
        const nextPos = e2 + 1;
        const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
        while (i <= e2) {
          patch(
            null,
            c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]),
            container,
            anchor,
            parentComponent,
            parentSuspense,
            isSVG,
            slotScopeIds,
            optimized
          );
          i++;
        }
      }
    } else if (i > e2) {
      while (i <= e1) {
        unmount(c1[i], parentComponent, parentSuspense, true);
        i++;
      }
    } else {
      const s1 = i;
      const s2 = i;
      const keyToNewIndexMap = /* @__PURE__ */ new Map();
      for (i = s2; i <= e2; i++) {
        const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
        if (nextChild.key != null) {
          keyToNewIndexMap.set(nextChild.key, i);
        }
      }
      let j;
      let patched = 0;
      const toBePatched = e2 - s2 + 1;
      let moved = false;
      let maxNewIndexSoFar = 0;
      const newIndexToOldIndexMap = new Array(toBePatched);
      for (i = 0; i < toBePatched; i++)
        newIndexToOldIndexMap[i] = 0;
      for (i = s1; i <= e1; i++) {
        const prevChild = c1[i];
        if (patched >= toBePatched) {
          unmount(prevChild, parentComponent, parentSuspense, true);
          continue;
        }
        let newIndex;
        if (prevChild.key != null) {
          newIndex = keyToNewIndexMap.get(prevChild.key);
        } else {
          for (j = s2; j <= e2; j++) {
            if (newIndexToOldIndexMap[j - s2] === 0 && isSameVNodeType(prevChild, c2[j])) {
              newIndex = j;
              break;
            }
          }
        }
        if (newIndex === void 0) {
          unmount(prevChild, parentComponent, parentSuspense, true);
        } else {
          newIndexToOldIndexMap[newIndex - s2] = i + 1;
          if (newIndex >= maxNewIndexSoFar) {
            maxNewIndexSoFar = newIndex;
          } else {
            moved = true;
          }
          patch(
            prevChild,
            c2[newIndex],
            container,
            null,
            parentComponent,
            parentSuspense,
            isSVG,
            slotScopeIds,
            optimized
          );
          patched++;
        }
      }
      const increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : EMPTY_ARR;
      j = increasingNewIndexSequence.length - 1;
      for (i = toBePatched - 1; i >= 0; i--) {
        const nextIndex = s2 + i;
        const nextChild = c2[nextIndex];
        const anchor = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;
        if (newIndexToOldIndexMap[i] === 0) {
          patch(
            null,
            nextChild,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            isSVG,
            slotScopeIds,
            optimized
          );
        } else if (moved) {
          if (j < 0 || i !== increasingNewIndexSequence[j]) {
            move(nextChild, container, anchor, 2);
          } else {
            j--;
          }
        }
      }
    }
  };
  const move = (vnode, container, anchor, moveType, parentSuspense = null) => {
    const { el, type, transition, children, shapeFlag } = vnode;
    if (shapeFlag & 6) {
      move(vnode.component.subTree, container, anchor, moveType);
      return;
    }
    if (shapeFlag & 128) {
      vnode.suspense.move(container, anchor, moveType);
      return;
    }
    if (shapeFlag & 64) {
      type.move(vnode, container, anchor, internals);
      return;
    }
    if (type === Fragment) {
      hostInsert(el, container, anchor);
      for (let i = 0; i < children.length; i++) {
        move(children[i], container, anchor, moveType);
      }
      hostInsert(vnode.anchor, container, anchor);
      return;
    }
    if (type === Static) {
      moveStaticNode(vnode, container, anchor);
      return;
    }
    const needTransition = moveType !== 2 && shapeFlag & 1 && transition;
    if (needTransition) {
      if (moveType === 0) {
        transition.beforeEnter(el);
        hostInsert(el, container, anchor);
        queuePostRenderEffect(() => transition.enter(el), parentSuspense);
      } else {
        const { leave, delayLeave, afterLeave } = transition;
        const remove22 = () => hostInsert(el, container, anchor);
        const performLeave = () => {
          leave(el, () => {
            remove22();
            afterLeave && afterLeave();
          });
        };
        if (delayLeave) {
          delayLeave(el, remove22, performLeave);
        } else {
          performLeave();
        }
      }
    } else {
      hostInsert(el, container, anchor);
    }
  };
  const unmount = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false) => {
    const {
      type,
      props,
      ref: ref2,
      children,
      dynamicChildren,
      shapeFlag,
      patchFlag,
      dirs
    } = vnode;
    if (ref2 != null) {
      setRef(ref2, null, parentSuspense, vnode, true);
    }
    if (shapeFlag & 256) {
      parentComponent.ctx.deactivate(vnode);
      return;
    }
    const shouldInvokeDirs = shapeFlag & 1 && dirs;
    const shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
    let vnodeHook;
    if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeBeforeUnmount)) {
      invokeVNodeHook(vnodeHook, parentComponent, vnode);
    }
    if (shapeFlag & 6) {
      unmountComponent(vnode.component, parentSuspense, doRemove);
    } else {
      if (shapeFlag & 128) {
        vnode.suspense.unmount(parentSuspense, doRemove);
        return;
      }
      if (shouldInvokeDirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "beforeUnmount");
      }
      if (shapeFlag & 64) {
        vnode.type.remove(
          vnode,
          parentComponent,
          parentSuspense,
          optimized,
          internals,
          doRemove
        );
      } else if (dynamicChildren && (type !== Fragment || patchFlag > 0 && patchFlag & 64)) {
        unmountChildren(
          dynamicChildren,
          parentComponent,
          parentSuspense,
          false,
          true
        );
      } else if (type === Fragment && patchFlag & (128 | 256) || !optimized && shapeFlag & 16) {
        unmountChildren(children, parentComponent, parentSuspense);
      }
      if (doRemove) {
        remove2(vnode);
      }
    }
    if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, "unmounted");
      }, parentSuspense);
    }
  };
  const remove2 = (vnode) => {
    const { type, el, anchor, transition } = vnode;
    if (type === Fragment) {
      {
        removeFragment(el, anchor);
      }
      return;
    }
    if (type === Static) {
      removeStaticNode(vnode);
      return;
    }
    const performRemove = () => {
      hostRemove(el);
      if (transition && !transition.persisted && transition.afterLeave) {
        transition.afterLeave();
      }
    };
    if (vnode.shapeFlag & 1 && transition && !transition.persisted) {
      const { leave, delayLeave } = transition;
      const performLeave = () => leave(el, performRemove);
      if (delayLeave) {
        delayLeave(vnode.el, performRemove, performLeave);
      } else {
        performLeave();
      }
    } else {
      performRemove();
    }
  };
  const removeFragment = (cur, end) => {
    let next3;
    while (cur !== end) {
      next3 = hostNextSibling(cur);
      hostRemove(cur);
      cur = next3;
    }
    hostRemove(end);
  };
  const unmountComponent = (instance, parentSuspense, doRemove) => {
    const { bum, scope, update, subTree, um } = instance;
    if (bum) {
      invokeArrayFns(bum);
    }
    scope.stop();
    if (update) {
      update.active = false;
      unmount(subTree, instance, parentSuspense, doRemove);
    }
    if (um) {
      queuePostRenderEffect(um, parentSuspense);
    }
    queuePostRenderEffect(() => {
      instance.isUnmounted = true;
    }, parentSuspense);
    if (parentSuspense && parentSuspense.pendingBranch && !parentSuspense.isUnmounted && instance.asyncDep && !instance.asyncResolved && instance.suspenseId === parentSuspense.pendingId) {
      parentSuspense.deps--;
      if (parentSuspense.deps === 0) {
        parentSuspense.resolve();
      }
    }
  };
  const unmountChildren = (children, parentComponent, parentSuspense, doRemove = false, optimized = false, start = 0) => {
    for (let i = start; i < children.length; i++) {
      unmount(children[i], parentComponent, parentSuspense, doRemove, optimized);
    }
  };
  const getNextHostNode = (vnode) => {
    if (vnode.shapeFlag & 6) {
      return getNextHostNode(vnode.component.subTree);
    }
    if (vnode.shapeFlag & 128) {
      return vnode.suspense.next();
    }
    return hostNextSibling(vnode.anchor || vnode.el);
  };
  const render = (vnode, container, isSVG) => {
    if (vnode == null) {
      if (container._vnode) {
        unmount(container._vnode, null, null, true);
      }
    } else {
      patch(container._vnode || null, vnode, container, null, null, null, isSVG);
    }
    flushPreFlushCbs();
    flushPostFlushCbs();
    container._vnode = vnode;
  };
  const internals = {
    p: patch,
    um: unmount,
    m: move,
    r: remove2,
    mt: mountComponent,
    mc: mountChildren,
    pc: patchChildren,
    pbc: patchBlockChildren,
    n: getNextHostNode,
    o: options
  };
  let hydrate;
  let hydrateNode;
  if (createHydrationFns) {
    [hydrate, hydrateNode] = createHydrationFns(
      internals
    );
  }
  return {
    render,
    hydrate,
    createApp: createAppAPI(render, hydrate)
  };
}
function toggleRecurse({ effect, update }, allowed) {
  effect.allowRecurse = update.allowRecurse = allowed;
}
function traverseStaticChildren(n1, n2, shallow = false) {
  const ch1 = n1.children;
  const ch2 = n2.children;
  if (isArray2(ch1) && isArray2(ch2)) {
    for (let i = 0; i < ch1.length; i++) {
      const c1 = ch1[i];
      let c2 = ch2[i];
      if (c2.shapeFlag & 1 && !c2.dynamicChildren) {
        if (c2.patchFlag <= 0 || c2.patchFlag === 32) {
          c2 = ch2[i] = cloneIfMounted(ch2[i]);
          c2.el = c1.el;
        }
        if (!shallow)
          traverseStaticChildren(c1, c2);
      }
      if (c2.type === Text) {
        c2.el = c1.el;
      }
    }
  }
}
function getSequence(arr) {
  const p2 = arr.slice();
  const result = [0];
  let i, j, u, v, c;
  const len = arr.length;
  for (i = 0; i < len; i++) {
    const arrI = arr[i];
    if (arrI !== 0) {
      j = result[result.length - 1];
      if (arr[j] < arrI) {
        p2[i] = j;
        result.push(i);
        continue;
      }
      u = 0;
      v = result.length - 1;
      while (u < v) {
        c = u + v >> 1;
        if (arr[result[c]] < arrI) {
          u = c + 1;
        } else {
          v = c;
        }
      }
      if (arrI < arr[result[u]]) {
        if (u > 0) {
          p2[i] = result[u - 1];
        }
        result[u] = i;
      }
    }
  }
  u = result.length;
  v = result[u - 1];
  while (u-- > 0) {
    result[u] = v;
    v = p2[v];
  }
  return result;
}
const isTeleport = (type) => type.__isTeleport;
const Fragment = Symbol.for("v-fgt");
const Text = Symbol.for("v-txt");
const Comment = Symbol.for("v-cmt");
const Static = Symbol.for("v-stc");
const blockStack = [];
let currentBlock = null;
function openBlock(disableTracking = false) {
  blockStack.push(currentBlock = disableTracking ? null : []);
}
function closeBlock() {
  blockStack.pop();
  currentBlock = blockStack[blockStack.length - 1] || null;
}
let isBlockTreeEnabled = 1;
function setBlockTracking(value) {
  isBlockTreeEnabled += value;
}
function setupBlock(vnode) {
  vnode.dynamicChildren = isBlockTreeEnabled > 0 ? currentBlock || EMPTY_ARR : null;
  closeBlock();
  if (isBlockTreeEnabled > 0 && currentBlock) {
    currentBlock.push(vnode);
  }
  return vnode;
}
function createElementBlock(type, props, children, patchFlag, dynamicProps, shapeFlag) {
  return setupBlock(
    createBaseVNode(
      type,
      props,
      children,
      patchFlag,
      dynamicProps,
      shapeFlag,
      true
    )
  );
}
function createBlock(type, props, children, patchFlag, dynamicProps) {
  return setupBlock(
    createVNode(
      type,
      props,
      children,
      patchFlag,
      dynamicProps,
      true
    )
  );
}
function isVNode(value) {
  return value ? value.__v_isVNode === true : false;
}
function isSameVNodeType(n1, n2) {
  return n1.type === n2.type && n1.key === n2.key;
}
const InternalObjectKey = `__vInternal`;
const normalizeKey = ({ key }) => key != null ? key : null;
const normalizeRef = ({
  ref: ref2,
  ref_key,
  ref_for
}) => {
  if (typeof ref2 === "number") {
    ref2 = "" + ref2;
  }
  return ref2 != null ? isString(ref2) || isRef(ref2) || isFunction(ref2) ? { i: currentRenderingInstance, r: ref2, k: ref_key, f: !!ref_for } : ref2 : null;
};
function createBaseVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, shapeFlag = type === Fragment ? 0 : 1, isBlockNode = false, needFullChildrenNormalization = false) {
  const vnode = {
    __v_isVNode: true,
    __v_skip: true,
    type,
    props,
    key: props && normalizeKey(props),
    ref: props && normalizeRef(props),
    scopeId: currentScopeId,
    slotScopeIds: null,
    children,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag,
    patchFlag,
    dynamicProps,
    dynamicChildren: null,
    appContext: null,
    ctx: currentRenderingInstance
  };
  if (needFullChildrenNormalization) {
    normalizeChildren(vnode, children);
    if (shapeFlag & 128) {
      type.normalize(vnode);
    }
  } else if (children) {
    vnode.shapeFlag |= isString(children) ? 8 : 16;
  }
  if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock && (vnode.patchFlag > 0 || shapeFlag & 6) && vnode.patchFlag !== 32) {
    currentBlock.push(vnode);
  }
  return vnode;
}
const createVNode = _createVNode;
function _createVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
  if (!type || type === NULL_DYNAMIC_COMPONENT) {
    type = Comment;
  }
  if (isVNode(type)) {
    const cloned = cloneVNode(
      type,
      props,
      true
    );
    if (children) {
      normalizeChildren(cloned, children);
    }
    if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock) {
      if (cloned.shapeFlag & 6) {
        currentBlock[currentBlock.indexOf(type)] = cloned;
      } else {
        currentBlock.push(cloned);
      }
    }
    cloned.patchFlag |= -2;
    return cloned;
  }
  if (isClassComponent(type)) {
    type = type.__vccOpts;
  }
  if (props) {
    props = guardReactiveProps(props);
    let { class: klass, style: style2 } = props;
    if (klass && !isString(klass)) {
      props.class = normalizeClass(klass);
    }
    if (isObject(style2)) {
      if (isProxy(style2) && !isArray2(style2)) {
        style2 = extend({}, style2);
      }
      props.style = normalizeStyle(style2);
    }
  }
  const shapeFlag = isString(type) ? 1 : isSuspense(type) ? 128 : isTeleport(type) ? 64 : isObject(type) ? 4 : isFunction(type) ? 2 : 0;
  return createBaseVNode(
    type,
    props,
    children,
    patchFlag,
    dynamicProps,
    shapeFlag,
    isBlockNode,
    true
  );
}
function guardReactiveProps(props) {
  if (!props)
    return null;
  return isProxy(props) || InternalObjectKey in props ? extend({}, props) : props;
}
function cloneVNode(vnode, extraProps, mergeRef = false) {
  const { props, ref: ref2, patchFlag, children } = vnode;
  const mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
  const cloned = {
    __v_isVNode: true,
    __v_skip: true,
    type: vnode.type,
    props: mergedProps,
    key: mergedProps && normalizeKey(mergedProps),
    ref: extraProps && extraProps.ref ? mergeRef && ref2 ? isArray2(ref2) ? ref2.concat(normalizeRef(extraProps)) : [ref2, normalizeRef(extraProps)] : normalizeRef(extraProps) : ref2,
    scopeId: vnode.scopeId,
    slotScopeIds: vnode.slotScopeIds,
    children,
    target: vnode.target,
    targetAnchor: vnode.targetAnchor,
    staticCount: vnode.staticCount,
    shapeFlag: vnode.shapeFlag,
    patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 ? 16 : patchFlag | 16 : patchFlag,
    dynamicProps: vnode.dynamicProps,
    dynamicChildren: vnode.dynamicChildren,
    appContext: vnode.appContext,
    dirs: vnode.dirs,
    transition: vnode.transition,
    component: vnode.component,
    suspense: vnode.suspense,
    ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
    ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
    el: vnode.el,
    anchor: vnode.anchor,
    ctx: vnode.ctx,
    ce: vnode.ce
  };
  return cloned;
}
function createTextVNode(text = " ", flag = 0) {
  return createVNode(Text, null, text, flag);
}
function createStaticVNode(content, numberOfNodes) {
  const vnode = createVNode(Static, null, content);
  vnode.staticCount = numberOfNodes;
  return vnode;
}
function createCommentVNode(text = "", asBlock = false) {
  return asBlock ? (openBlock(), createBlock(Comment, null, text)) : createVNode(Comment, null, text);
}
function normalizeVNode(child) {
  if (child == null || typeof child === "boolean") {
    return createVNode(Comment);
  } else if (isArray2(child)) {
    return createVNode(
      Fragment,
      null,
      child.slice()
    );
  } else if (typeof child === "object") {
    return cloneIfMounted(child);
  } else {
    return createVNode(Text, null, String(child));
  }
}
function cloneIfMounted(child) {
  return child.el === null && child.patchFlag !== -1 || child.memo ? child : cloneVNode(child);
}
function normalizeChildren(vnode, children) {
  let type = 0;
  const { shapeFlag } = vnode;
  if (children == null) {
    children = null;
  } else if (isArray2(children)) {
    type = 16;
  } else if (typeof children === "object") {
    if (shapeFlag & (1 | 64)) {
      const slot = children.default;
      if (slot) {
        slot._c && (slot._d = false);
        normalizeChildren(vnode, slot());
        slot._c && (slot._d = true);
      }
      return;
    } else {
      type = 32;
      const slotFlag = children._;
      if (!slotFlag && !(InternalObjectKey in children)) {
        children._ctx = currentRenderingInstance;
      } else if (slotFlag === 3 && currentRenderingInstance) {
        if (currentRenderingInstance.slots._ === 1) {
          children._ = 1;
        } else {
          children._ = 2;
          vnode.patchFlag |= 1024;
        }
      }
    }
  } else if (isFunction(children)) {
    children = { default: children, _ctx: currentRenderingInstance };
    type = 32;
  } else {
    children = String(children);
    if (shapeFlag & 64) {
      type = 16;
      children = [createTextVNode(children)];
    } else {
      type = 8;
    }
  }
  vnode.children = children;
  vnode.shapeFlag |= type;
}
function mergeProps(...args) {
  const ret = {};
  for (let i = 0; i < args.length; i++) {
    const toMerge = args[i];
    for (const key in toMerge) {
      if (key === "class") {
        if (ret.class !== toMerge.class) {
          ret.class = normalizeClass([ret.class, toMerge.class]);
        }
      } else if (key === "style") {
        ret.style = normalizeStyle([ret.style, toMerge.style]);
      } else if (isOn(key)) {
        const existing = ret[key];
        const incoming = toMerge[key];
        if (incoming && existing !== incoming && !(isArray2(existing) && existing.includes(incoming))) {
          ret[key] = existing ? [].concat(existing, incoming) : incoming;
        }
      } else if (key !== "") {
        ret[key] = toMerge[key];
      }
    }
  }
  return ret;
}
function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
  callWithAsyncErrorHandling(hook, instance, 7, [
    vnode,
    prevVNode
  ]);
}
const emptyAppContext = createAppContext();
let uid = 0;
function createComponentInstance(vnode, parent, suspense) {
  const type = vnode.type;
  const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
  const instance = {
    uid: uid++,
    vnode,
    type,
    parent,
    appContext,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new EffectScope(
      true
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: parent ? parent.provides : Object.create(appContext.provides),
    accessCache: null,
    renderCache: [],
    components: null,
    directives: null,
    propsOptions: normalizePropsOptions(type, appContext),
    emitsOptions: normalizeEmitsOptions(type, appContext),
    emit: null,
    emitted: null,
    propsDefaults: EMPTY_OBJ,
    inheritAttrs: type.inheritAttrs,
    ctx: EMPTY_OBJ,
    data: EMPTY_OBJ,
    props: EMPTY_OBJ,
    attrs: EMPTY_OBJ,
    slots: EMPTY_OBJ,
    refs: EMPTY_OBJ,
    setupState: EMPTY_OBJ,
    setupContext: null,
    attrsProxy: null,
    slotsProxy: null,
    suspense,
    suspenseId: suspense ? suspense.pendingId : 0,
    asyncDep: null,
    asyncResolved: false,
    isMounted: false,
    isUnmounted: false,
    isDeactivated: false,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  {
    instance.ctx = { _: instance };
  }
  instance.root = parent ? parent.root : instance;
  instance.emit = emit.bind(null, instance);
  if (vnode.ce) {
    vnode.ce(instance);
  }
  return instance;
}
let currentInstance = null;
let internalSetCurrentInstance;
let globalCurrentInstanceSetters;
let settersKey = "__VUE_INSTANCE_SETTERS__";
{
  if (!(globalCurrentInstanceSetters = getGlobalThis()[settersKey])) {
    globalCurrentInstanceSetters = getGlobalThis()[settersKey] = [];
  }
  globalCurrentInstanceSetters.push((i) => currentInstance = i);
  internalSetCurrentInstance = (instance) => {
    if (globalCurrentInstanceSetters.length > 1) {
      globalCurrentInstanceSetters.forEach((s) => s(instance));
    } else {
      globalCurrentInstanceSetters[0](instance);
    }
  };
}
const setCurrentInstance = (instance) => {
  internalSetCurrentInstance(instance);
  instance.scope.on();
};
const unsetCurrentInstance = () => {
  currentInstance && currentInstance.scope.off();
  internalSetCurrentInstance(null);
};
function isStatefulComponent(instance) {
  return instance.vnode.shapeFlag & 4;
}
let isInSSRComponentSetup = false;
function setupComponent(instance, isSSR = false) {
  isInSSRComponentSetup = isSSR;
  const { props, children } = instance.vnode;
  const isStateful = isStatefulComponent(instance);
  initProps(instance, props, isStateful, isSSR);
  initSlots(instance, children);
  const setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : void 0;
  isInSSRComponentSetup = false;
  return setupResult;
}
function setupStatefulComponent(instance, isSSR) {
  const Component = instance.type;
  instance.accessCache = /* @__PURE__ */ Object.create(null);
  instance.proxy = markRaw(new Proxy(instance.ctx, PublicInstanceProxyHandlers));
  const { setup } = Component;
  if (setup) {
    const setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
    setCurrentInstance(instance);
    pauseTracking();
    const setupResult = callWithErrorHandling(
      setup,
      instance,
      0,
      [instance.props, setupContext]
    );
    resetTracking();
    unsetCurrentInstance();
    if (isPromise(setupResult)) {
      setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
      if (isSSR) {
        return setupResult.then((resolvedResult) => {
          handleSetupResult(instance, resolvedResult, isSSR);
        }).catch((e) => {
          handleError(e, instance, 0);
        });
      } else {
        instance.asyncDep = setupResult;
      }
    } else {
      handleSetupResult(instance, setupResult, isSSR);
    }
  } else {
    finishComponentSetup(instance, isSSR);
  }
}
function handleSetupResult(instance, setupResult, isSSR) {
  if (isFunction(setupResult)) {
    if (instance.type.__ssrInlineRender) {
      instance.ssrRender = setupResult;
    } else {
      instance.render = setupResult;
    }
  } else if (isObject(setupResult)) {
    instance.setupState = proxyRefs(setupResult);
  } else
    ;
  finishComponentSetup(instance, isSSR);
}
let compile;
function finishComponentSetup(instance, isSSR, skipOptions) {
  const Component = instance.type;
  if (!instance.render) {
    if (!isSSR && compile && !Component.render) {
      const template = Component.template || resolveMergedOptions(instance).template;
      if (template) {
        const { isCustomElement, compilerOptions } = instance.appContext.config;
        const { delimiters, compilerOptions: componentCompilerOptions } = Component;
        const finalCompilerOptions = extend(
          extend(
            {
              isCustomElement,
              delimiters
            },
            compilerOptions
          ),
          componentCompilerOptions
        );
        Component.render = compile(template, finalCompilerOptions);
      }
    }
    instance.render = Component.render || NOOP;
  }
  {
    setCurrentInstance(instance);
    pauseTracking();
    applyOptions(instance);
    resetTracking();
    unsetCurrentInstance();
  }
}
function getAttrsProxy(instance) {
  return instance.attrsProxy || (instance.attrsProxy = new Proxy(
    instance.attrs,
    {
      get(target, key) {
        track(instance, "get", "$attrs");
        return target[key];
      }
    }
  ));
}
function createSetupContext(instance) {
  const expose = (exposed) => {
    instance.exposed = exposed || {};
  };
  {
    return {
      get attrs() {
        return getAttrsProxy(instance);
      },
      slots: instance.slots,
      emit: instance.emit,
      expose
    };
  }
}
function getExposeProxy(instance) {
  if (instance.exposed) {
    return instance.exposeProxy || (instance.exposeProxy = new Proxy(proxyRefs(markRaw(instance.exposed)), {
      get(target, key) {
        if (key in target) {
          return target[key];
        } else if (key in publicPropertiesMap) {
          return publicPropertiesMap[key](instance);
        }
      },
      has(target, key) {
        return key in target || key in publicPropertiesMap;
      }
    }));
  }
}
function getComponentName(Component, includeInferred = true) {
  return isFunction(Component) ? Component.displayName || Component.name : Component.name || includeInferred && Component.__name;
}
function isClassComponent(value) {
  return isFunction(value) && "__vccOpts" in value;
}
const computed = (getterOrOptions, debugOptions) => {
  return computed$1(getterOrOptions, debugOptions, isInSSRComponentSetup);
};
const ssrContextKey = Symbol.for("v-scx");
const useSSRContext = () => {
  {
    const ctx2 = inject(ssrContextKey);
    return ctx2;
  }
};
const version = "3.3.4";
const svgNS = "http://www.w3.org/2000/svg";
const doc = typeof document !== "undefined" ? document : null;
const templateContainer = doc && /* @__PURE__ */ doc.createElement("template");
const nodeOps = {
  insert: (child, parent, anchor) => {
    parent.insertBefore(child, anchor || null);
  },
  remove: (child) => {
    const parent = child.parentNode;
    if (parent) {
      parent.removeChild(child);
    }
  },
  createElement: (tag, isSVG, is3, props) => {
    const el = isSVG ? doc.createElementNS(svgNS, tag) : doc.createElement(tag, is3 ? { is: is3 } : void 0);
    if (tag === "select" && props && props.multiple != null) {
      el.setAttribute("multiple", props.multiple);
    }
    return el;
  },
  createText: (text) => doc.createTextNode(text),
  createComment: (text) => doc.createComment(text),
  setText: (node, text) => {
    node.nodeValue = text;
  },
  setElementText: (el, text) => {
    el.textContent = text;
  },
  parentNode: (node) => node.parentNode,
  nextSibling: (node) => node.nextSibling,
  querySelector: (selector) => doc.querySelector(selector),
  setScopeId(el, id2) {
    el.setAttribute(id2, "");
  },
  insertStaticContent(content, parent, anchor, isSVG, start, end) {
    const before = anchor ? anchor.previousSibling : parent.lastChild;
    if (start && (start === end || start.nextSibling)) {
      while (true) {
        parent.insertBefore(start.cloneNode(true), anchor);
        if (start === end || !(start = start.nextSibling))
          break;
      }
    } else {
      templateContainer.innerHTML = isSVG ? `<svg>${content}</svg>` : content;
      const template = templateContainer.content;
      if (isSVG) {
        const wrapper2 = template.firstChild;
        while (wrapper2.firstChild) {
          template.appendChild(wrapper2.firstChild);
        }
        template.removeChild(wrapper2);
      }
      parent.insertBefore(template, anchor);
    }
    return [
      before ? before.nextSibling : parent.firstChild,
      anchor ? anchor.previousSibling : parent.lastChild
    ];
  }
};
function patchClass(el, value, isSVG) {
  const transitionClasses = el._vtc;
  if (transitionClasses) {
    value = (value ? [value, ...transitionClasses] : [...transitionClasses]).join(" ");
  }
  if (value == null) {
    el.removeAttribute("class");
  } else if (isSVG) {
    el.setAttribute("class", value);
  } else {
    el.className = value;
  }
}
function patchStyle(el, prev, next3) {
  const style2 = el.style;
  const isCssString = isString(next3);
  if (next3 && !isCssString) {
    if (prev && !isString(prev)) {
      for (const key in prev) {
        if (next3[key] == null) {
          setStyle(style2, key, "");
        }
      }
    }
    for (const key in next3) {
      setStyle(style2, key, next3[key]);
    }
  } else {
    const currentDisplay = style2.display;
    if (isCssString) {
      if (prev !== next3) {
        style2.cssText = next3;
      }
    } else if (prev) {
      el.removeAttribute("style");
    }
    if ("_vod" in el) {
      style2.display = currentDisplay;
    }
  }
}
const importantRE = /\s*!important$/;
function setStyle(style2, name, val) {
  if (isArray2(val)) {
    val.forEach((v) => setStyle(style2, name, v));
  } else {
    if (val == null)
      val = "";
    if (name.startsWith("--")) {
      style2.setProperty(name, val);
    } else {
      const prefixed = autoPrefix(style2, name);
      if (importantRE.test(val)) {
        style2.setProperty(
          hyphenate(prefixed),
          val.replace(importantRE, ""),
          "important"
        );
      } else {
        style2[prefixed] = val;
      }
    }
  }
}
const prefixes = ["Webkit", "Moz", "ms"];
const prefixCache = {};
function autoPrefix(style2, rawName) {
  const cached = prefixCache[rawName];
  if (cached) {
    return cached;
  }
  let name = camelize(rawName);
  if (name !== "filter" && name in style2) {
    return prefixCache[rawName] = name;
  }
  name = capitalize(name);
  for (let i = 0; i < prefixes.length; i++) {
    const prefixed = prefixes[i] + name;
    if (prefixed in style2) {
      return prefixCache[rawName] = prefixed;
    }
  }
  return rawName;
}
const xlinkNS = "http://www.w3.org/1999/xlink";
function patchAttr(el, key, value, isSVG, instance) {
  if (isSVG && key.startsWith("xlink:")) {
    if (value == null) {
      el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    const isBoolean = isSpecialBooleanAttr(key);
    if (value == null || isBoolean && !includeBooleanAttr(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, isBoolean ? "" : value);
    }
  }
}
function patchDOMProp(el, key, value, prevChildren, parentComponent, parentSuspense, unmountChildren) {
  if (key === "innerHTML" || key === "textContent") {
    if (prevChildren) {
      unmountChildren(prevChildren, parentComponent, parentSuspense);
    }
    el[key] = value == null ? "" : value;
    return;
  }
  const tag = el.tagName;
  if (key === "value" && tag !== "PROGRESS" && !tag.includes("-")) {
    el._value = value;
    const oldValue = tag === "OPTION" ? el.getAttribute("value") : el.value;
    const newValue = value == null ? "" : value;
    if (oldValue !== newValue) {
      el.value = newValue;
    }
    if (value == null) {
      el.removeAttribute(key);
    }
    return;
  }
  let needRemove = false;
  if (value === "" || value == null) {
    const type = typeof el[key];
    if (type === "boolean") {
      value = includeBooleanAttr(value);
    } else if (value == null && type === "string") {
      value = "";
      needRemove = true;
    } else if (type === "number") {
      value = 0;
      needRemove = true;
    }
  }
  try {
    el[key] = value;
  } catch (e) {
  }
  needRemove && el.removeAttribute(key);
}
function addEventListener(el, event, handler, options) {
  el.addEventListener(event, handler, options);
}
function removeEventListener(el, event, handler, options) {
  el.removeEventListener(event, handler, options);
}
function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
  const invokers = el._vei || (el._vei = {});
  const existingInvoker = invokers[rawName];
  if (nextValue && existingInvoker) {
    existingInvoker.value = nextValue;
  } else {
    const [name, options] = parseName(rawName);
    if (nextValue) {
      const invoker = invokers[rawName] = createInvoker(nextValue, instance);
      addEventListener(el, name, invoker, options);
    } else if (existingInvoker) {
      removeEventListener(el, name, existingInvoker, options);
      invokers[rawName] = void 0;
    }
  }
}
const optionsModifierRE = /(?:Once|Passive|Capture)$/;
function parseName(name) {
  let options;
  if (optionsModifierRE.test(name)) {
    options = {};
    let m;
    while (m = name.match(optionsModifierRE)) {
      name = name.slice(0, name.length - m[0].length);
      options[m[0].toLowerCase()] = true;
    }
  }
  const event = name[2] === ":" ? name.slice(3) : hyphenate(name.slice(2));
  return [event, options];
}
let cachedNow = 0;
const p = /* @__PURE__ */ Promise.resolve();
const getNow = () => cachedNow || (p.then(() => cachedNow = 0), cachedNow = Date.now());
function createInvoker(initialValue, instance) {
  const invoker = (e) => {
    if (!e._vts) {
      e._vts = Date.now();
    } else if (e._vts <= invoker.attached) {
      return;
    }
    callWithAsyncErrorHandling(
      patchStopImmediatePropagation(e, invoker.value),
      instance,
      5,
      [e]
    );
  };
  invoker.value = initialValue;
  invoker.attached = getNow();
  return invoker;
}
function patchStopImmediatePropagation(e, value) {
  if (isArray2(value)) {
    const originalStop = e.stopImmediatePropagation;
    e.stopImmediatePropagation = () => {
      originalStop.call(e);
      e._stopped = true;
    };
    return value.map((fn) => (e2) => !e2._stopped && fn && fn(e2));
  } else {
    return value;
  }
}
const nativeOnRE = /^on[a-z]/;
const patchProp = (el, key, prevValue, nextValue, isSVG = false, prevChildren, parentComponent, parentSuspense, unmountChildren) => {
  if (key === "class") {
    patchClass(el, nextValue, isSVG);
  } else if (key === "style") {
    patchStyle(el, prevValue, nextValue);
  } else if (isOn(key)) {
    if (!isModelListener(key)) {
      patchEvent(el, key, prevValue, nextValue, parentComponent);
    }
  } else if (key[0] === "." ? (key = key.slice(1), true) : key[0] === "^" ? (key = key.slice(1), false) : shouldSetAsProp(el, key, nextValue, isSVG)) {
    patchDOMProp(
      el,
      key,
      nextValue,
      prevChildren,
      parentComponent,
      parentSuspense,
      unmountChildren
    );
  } else {
    if (key === "true-value") {
      el._trueValue = nextValue;
    } else if (key === "false-value") {
      el._falseValue = nextValue;
    }
    patchAttr(el, key, nextValue, isSVG);
  }
};
function shouldSetAsProp(el, key, value, isSVG) {
  if (isSVG) {
    if (key === "innerHTML" || key === "textContent") {
      return true;
    }
    if (key in el && nativeOnRE.test(key) && isFunction(value)) {
      return true;
    }
    return false;
  }
  if (key === "spellcheck" || key === "draggable" || key === "translate") {
    return false;
  }
  if (key === "form") {
    return false;
  }
  if (key === "list" && el.tagName === "INPUT") {
    return false;
  }
  if (key === "type" && el.tagName === "TEXTAREA") {
    return false;
  }
  if (nativeOnRE.test(key) && isString(value)) {
    return false;
  }
  return key in el;
}
const rendererOptions = /* @__PURE__ */ extend({ patchProp }, nodeOps);
let renderer;
function ensureRenderer() {
  return renderer || (renderer = createRenderer(rendererOptions));
}
const createApp = (...args) => {
  const app = ensureRenderer().createApp(...args);
  const { mount } = app;
  app.mount = (containerOrSelector) => {
    const container = normalizeContainer(containerOrSelector);
    if (!container)
      return;
    const component = app._component;
    if (!isFunction(component) && !component.render && !component.template) {
      component.template = container.innerHTML;
    }
    container.innerHTML = "";
    const proxy = mount(container, false, container instanceof SVGElement);
    if (container instanceof Element) {
      container.removeAttribute("v-cloak");
      container.setAttribute("data-v-app", "");
    }
    return proxy;
  };
  return app;
};
function normalizeContainer(container) {
  if (isString(container)) {
    const res = document.querySelector(container);
    return res;
  }
  return container;
}
const style = "";
const bsColors = [
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
  "info",
  "light",
  "dark"
];
const gradient = "rgba({{color}}, 0.2) 0, rgba({{color}}, 0.3) 40%, rgba({{color}}, 0.4) 50%, rgba({{color}}, 0.5) 60%, rgba({{color}}, 0) 70%";
const defaultColor = [0, 0, 0];
const transitionBreakOpacity = 0.5;
const isBSColor = (propColor) => propColor && bsColors.includes(propColor.toLowerCase());
const colorToRGB = (color, defaultColor2) => {
  const hexToRgb = (color2) => {
    const HEX_COLOR_LENGTH = 7;
    const IS_SHORT_HEX = color2.length < HEX_COLOR_LENGTH;
    if (IS_SHORT_HEX) {
      color2 = `#${color2[1]}${color2[1]}${color2[2]}${color2[2]}${color2[3]}${color2[3]}`;
    }
    return [
      parseInt(color2.substr(1, 2), 16),
      parseInt(color2.substr(3, 2), 16),
      parseInt(color2.substr(5, 2), 16)
    ];
  };
  const namedColorsToRgba = (color2) => {
    const tempElem = document.body.appendChild(
      document.createElement("fictum")
    );
    const flag = "rgb(1, 2, 3)";
    tempElem.style.color = flag;
    if (tempElem.style.color !== flag) {
      return defaultColor2;
    }
    tempElem.style.color = color2;
    if (tempElem.style.color === flag || tempElem.style.color === "") {
      return defaultColor2;
    }
    color2 = getComputedStyle(tempElem).color;
    document.body.removeChild(tempElem);
    return color2;
  };
  const rgbaToRgb = (color2) => {
    const colorMatch = color2.match(/[.\d]+/g);
    if (colorMatch === null) {
      return;
    }
    const colorArr = colorMatch.map((a) => +Number(a));
    colorArr.length = 3;
    return colorArr;
  };
  if (typeof color === "string" && color.toLowerCase() === "transparent") {
    return defaultColor2;
  }
  if (typeof color === "string" && color[0] === "#") {
    return hexToRgb(color);
  }
  if (typeof color === "string" && color.indexOf("rgb") === -1) {
    color = namedColorsToRgba(color);
  }
  if (typeof color === "string" && color.indexOf("rgb") === 0) {
    return rgbaToRgb(color);
  }
  return defaultColor2;
};
const getDiameter = ({ offsetX, offsetY, height, width }) => {
  const top2 = offsetY <= height / 2;
  const left2 = offsetX <= width / 2;
  const pythagorean = (sideA, sideB) => Math.sqrt(__pow(sideA, 2) + __pow(sideB, 2));
  const positionCenter = offsetY === height / 2 && offsetX === width / 2;
  const quadrant = {
    first: top2 === true && left2 === false,
    second: top2 === true && left2 === true,
    third: top2 === false && left2 === true,
    fourth: top2 === false && left2 === false
  };
  const getCorner = {
    topLeft: pythagorean(offsetX, offsetY),
    topRight: pythagorean(width - offsetX, offsetY),
    bottomLeft: pythagorean(offsetX, height - offsetY),
    bottomRight: pythagorean(width - offsetX, height - offsetY)
  };
  let diameter = 0;
  if (positionCenter || quadrant.fourth) {
    diameter = getCorner.topLeft;
  } else if (quadrant.third) {
    diameter = getCorner.topRight;
  } else if (quadrant.second) {
    diameter = getCorner.bottomRight;
  } else if (quadrant.first) {
    diameter = getCorner.bottomLeft;
  }
  return diameter * 2;
};
const setStyles = (el, styles) => {
  for (const property in styles) {
    el.style[property] = styles[property];
  }
};
const getBackgroundImage = (color) => {
  const rgb = colorToRGB(color, defaultColor);
  if (color !== "" && rgb) {
    const rgbValue = rgb.join(",");
    const gradientImage = gradient.split("{{color}}").join(`${rgbValue}`);
    return `radial-gradient(circle, ${gradientImage})`;
  }
};
const runRipple = (el, waveConfig, options) => {
  const rippleElement = document.createElement("div");
  rippleElement.classList.add("ripple-wave");
  const diameterConfig = {
    offsetX: options.centered ? waveConfig.height / 2 : waveConfig.left,
    offsetY: options.centered ? waveConfig.width / 2 : waveConfig.top,
    height: waveConfig.height,
    width: waveConfig.width
  };
  const diameter = getDiameter(diameterConfig);
  const radiusValue = options.radius || diameter / 2;
  const opacity = {
    delay: options.duration && options.duration * transitionBreakOpacity,
    duration: options.duration && options.duration - options.duration * transitionBreakOpacity
  };
  const styles = {
    left: options.centered ? `${Math.round(waveConfig.width / 2 - radiusValue)}px` : `${Math.round(waveConfig.left - radiusValue)}px`,
    top: options.centered ? `${Math.round(waveConfig.height / 2 - radiusValue)}px` : `${Math.round(waveConfig.top - radiusValue)}px`,
    height: `${Math.round(
      options.radius && options.radius * 2 || diameter
    )}px`,
    width: `${Math.round(
      options.radius && options.radius * 2 || diameter
    )}px`,
    transitionDelay: `0s, ${opacity.delay}ms`,
    transitionDuration: `${options.duration}ms, ${opacity.duration}ms`
  };
  if (options.unbound) {
    el.classList.add("ripple-surface-unbound");
  }
  if (isBSColor(options.color)) {
    el.classList.add(`ripple-surface-${options.color}`);
  } else {
    styles.backgroundImage = getBackgroundImage(options.color);
  }
  setStyles(rippleElement, styles);
  el.appendChild(rippleElement);
  setTimeout(() => {
    rippleElement.classList.add("active");
  }, 50);
  setTimeout(
    () => {
      el.removeChild(rippleElement);
    },
    options.duration ? options.duration + 1e3 : 1e3
  );
};
const RippleDirective = {
  mounted(el, binding) {
    if (binding.value === false) {
      return;
    }
    const options = {
      centered: binding.value && binding.value.centered || false,
      color: binding.value && binding.value.color || "",
      duration: binding.value && binding.value.duration || 500,
      radius: binding.value && binding.value.radius || 0,
      unbound: binding.value && binding.value.unbound || false
    };
    el.classList.add("ripple-surface");
    el.waves = (e) => {
      const waveConfig = {
        top: e.layerY,
        left: e.layerX,
        height: el.offsetHeight,
        width: el.offsetWidth
      };
      runRipple(el, waveConfig, options);
    };
    el.addEventListener("click", (e) => el.waves(e));
  },
  updated(el) {
    if (!el.classList.contains("ripple-surface")) {
      el.classList.add("ripple-surface");
    }
  },
  unmounted(el) {
    el.removeEventListener("click", (e) => el.waves(e));
  }
};
const __default__$X = {
  name: "MDBBtn"
};
const _sfc_main$X = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__$X), {
  props: {
    color: String,
    size: String,
    outline: String,
    rounded: Boolean,
    floating: Boolean,
    toggler: Boolean,
    toggle: Boolean,
    role: {
      type: String,
      default: "button"
    },
    type: {
      type: String,
      default: "button"
    },
    tag: {
      type: String,
      default: "button"
    },
    block: {
      type: Boolean,
      default: false
    },
    ripple: {
      type: [Object, Boolean],
      default: (props) => props.outline || props.color === "light" || props.color === "link" ? { color: "dark" } : true
    },
    picker: Boolean
  },
  emits: ["update:toggle"],
  setup(__props, { emit: emit2 }) {
    const props = __props;
    const toggle = ref(props.toggle);
    const className = computed(() => {
      return [
        !props.picker && "btn",
        props.color && `btn-${props.color}`,
        props.size && `btn-${props.size}`,
        props.outline && `btn-outline-${props.outline}`,
        props.rounded && "btn-rounded",
        props.floating && "btn-floating",
        props.block && "btn-block",
        toggle.value && "active"
      ];
    });
    const handleClick = () => {
      if (props.toggler) {
        toggle.value = !toggle.value;
        emit2("update:toggle", toggle.value);
      }
    };
    return (_ctx2, _cache) => {
      return withDirectives((openBlock(), createBlock(resolveDynamicComponent(__props.tag), {
        type: __props.type,
        role: __props.role,
        class: normalizeClass(unref(className)),
        onClick: handleClick
      }, {
        default: withCtx(() => [
          renderSlot(_ctx2.$slots, "default")
        ]),
        _: 3
      }, 8, ["type", "role", "class"])), [
        [unref(RippleDirective), __props.ripple]
      ]);
    };
  }
}));
const __default__$U = {
  name: "MDBCard"
};
const _sfc_main$U = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__$U), {
  props: {
    tag: {
      type: String,
      default: "div"
    },
    border: String,
    bg: String,
    text: [String, Array],
    shadow: String
  },
  setup(__props) {
    const props = __props;
    const className = computed(() => {
      const text = props.text;
      return [
        "card",
        props.border && `border border-${props.border}`,
        props.bg && `bg-${props.bg}`,
        props.shadow && `shadow-${props.shadow}`,
        props.text && spreadProps(text)
      ];
    });
    const spreadProps = (props2) => {
      if (typeof props2 === "string") {
        return `text-${props2}`;
      }
      return props2.map((prop) => `text-${prop}`.trim()).join(" ");
    };
    return (_ctx2, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(__props.tag), {
        class: normalizeClass(unref(className))
      }, {
        default: withCtx(() => [
          renderSlot(_ctx2.$slots, "default")
        ]),
        _: 3
      }, 8, ["class"]);
    };
  }
}));
const __default__$T = {
  name: "MDBCardBody"
};
const _sfc_main$T = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__$T), {
  props: {
    tag: {
      type: String,
      default: "div"
    },
    text: {
      type: [String, Array]
    }
  },
  setup(__props) {
    const props = __props;
    const className = computed(() => {
      const text = props.text;
      return ["card-body", props.text && spreadProps(text)];
    });
    const spreadProps = (props2) => {
      if (typeof props2 === "string") {
        return `text-${props2}`;
      }
      return props2.map((prop) => `text-${prop}`.trim()).join(" ");
    };
    return (_ctx2, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(__props.tag), {
        class: normalizeClass(unref(className))
      }, {
        default: withCtx(() => [
          renderSlot(_ctx2.$slots, "default")
        ]),
        _: 3
      }, 8, ["class"]);
    };
  }
}));
const __default__$S = {
  name: "MDBCardTitle"
};
const _sfc_main$S = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__$S), {
  props: {
    tag: {
      type: String,
      default: "h5"
    },
    subtitle: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const tagName = computed(() => {
      if (!props.subtitle) {
        return props.tag;
      }
      return props.tag !== "h5" ? props.tag : "h6";
    });
    const className = computed(() => {
      return [props.subtitle ? "card-subtitle" : "card-title"];
    });
    return (_ctx2, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(unref(tagName)), {
        class: normalizeClass(unref(className))
      }, {
        default: withCtx(() => [
          renderSlot(_ctx2.$slots, "default")
        ]),
        _: 3
      }, 8, ["class"]);
    };
  }
}));
const __default__$I = {
  name: "MDBProgress"
};
const _sfc_main$I = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__$I), {
  props: {
    tag: {
      type: String,
      default: "div"
    },
    height: Number
  },
  setup(__props) {
    const props = __props;
    const className = computed(() => ["progress"]);
    const style2 = computed(() => {
      return { height: props.height + "px" };
    });
    return (_ctx2, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(__props.tag), {
        class: normalizeClass(unref(className)),
        style: normalizeStyle(unref(style2))
      }, {
        default: withCtx(() => [
          renderSlot(_ctx2.$slots, "default")
        ]),
        _: 3
      }, 8, ["class", "style"]);
    };
  }
}));
const __default__$H = {
  name: "MDBProgressBar"
};
const _sfc_main$H = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__$H), {
  props: {
    tag: {
      type: String,
      default: "div"
    },
    bg: String,
    striped: {
      type: Boolean,
      default: false
    },
    animated: {
      type: Boolean,
      default: false
    },
    value: {
      type: Number,
      default: 0
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    }
  },
  setup(__props) {
    const props = __props;
    const className = computed(() => {
      return [
        "progress-bar",
        props.bg && `bg-${props.bg}`,
        props.striped && "progress-bar-striped",
        props.animated && "progress-bar-animated"
      ];
    });
    return (_ctx2, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(__props.tag), {
        class: normalizeClass(unref(className)),
        role: "progressbar",
        "aria-valuenow": __props.value,
        "aria-valuemin": __props.min,
        "aria-valuemax": __props.max,
        style: normalizeStyle([
          {
            width: (__props.value - __props.min) / (__props.max - __props.min) * 100 + "%"
          }
        ])
      }, {
        default: withCtx(() => [
          renderSlot(_ctx2.$slots, "default")
        ]),
        _: 3
      }, 8, ["class", "aria-valuenow", "aria-valuemin", "aria-valuemax", "style"]);
    };
  }
}));
const MAX_UID = 1e6;
const getUID = (prefix) => {
  do {
    prefix += Math.floor(Math.random() * MAX_UID);
  } while (document.getElementById(prefix));
  return prefix;
};
var vMdbClickOutside = {
  stopProp(e) {
    e.stopPropagation();
  },
  mounted(el, binding) {
    const handler = (e) => {
      const target = e.target;
      if (!el.contains(target) && el !== target) {
        binding.value(e);
      }
    };
    el.clickOutside = handler;
    const event = binding.modifiers.mousedown ? "mousedown" : "click";
    document.addEventListener(event, (e) => {
      var _a;
      return (_a = el.clickOutside) == null ? void 0 : _a.call(el, e);
    });
    document.addEventListener("touchstart", (e) => {
      var _a;
      return (_a = el.clickOutside) == null ? void 0 : _a.call(el, e);
    });
  },
  unmounted(el, binding) {
    if (!el.clickOutside)
      return;
    const event = binding.modifiers.mousedown ? "mousedown" : "click";
    document.removeEventListener(event, (e) => {
      var _a;
      return (_a = el.clickOutside) == null ? void 0 : _a.call(el, e);
    });
    document.removeEventListener("touchstart", (e) => {
      var _a;
      return (_a = el.clickOutside) == null ? void 0 : _a.call(el, e);
    });
    delete el.clickOutside;
  }
};
const _hoisted_1$g = {
  key: 1,
  class: "visually-hidden"
};
const __default__$D = {
  name: "MDBDropdownToggle"
};
/* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__$D), {
  props: __spreadProps(__spreadValues({}, _sfc_main$X.props), {
    tag: {
      type: String,
      default: "button"
    },
    href: [String, null],
    split: {
      type: Boolean,
      default: false
    }
  }),
  setup(__props) {
    const props = __props;
    const className = computed(() => {
      return [
        btnClass.value,
        "dropdown-toggle",
        props.split && "dropdown-toggle-split",
        props.size && `btn-${props.size}`,
        props.outline && `btn-outline-${props.outline}`
      ];
    });
    const btnClass = computed(() => {
      if (props.tag !== "button")
        return;
      const color = props.color && !props.outline ? `btn-${props.color}` : props.outline ? "" : "btn-primary";
      return `btn ${color}`;
    });
    const expanded = ref(false);
    const toggle = () => {
      expanded.value = !expanded.value;
    };
    const isPopperActive = inject("isPopperActive");
    watchEffect(() => {
      expanded.value = isPopperActive.value;
    });
    const handleEscAndOutsideClick = inject("handleEscAndOutsideClick");
    const handleClickOutside = (event) => {
      const target = event.target;
      if (isPopperActive && !target.closest(".dropdown-menu")) {
        handleEscAndOutsideClick();
      }
    };
    return (_ctx2, _cache) => {
      return withDirectives((openBlock(), createBlock(resolveDynamicComponent(__props.tag), {
        type: "button",
        class: normalizeClass(unref(className)),
        "aria-expanded": expanded.value,
        "aria-haspopup": "true",
        onClick: toggle,
        "data-trigger": ""
      }, {
        default: withCtx(() => [
          !__props.split ? renderSlot(_ctx2.$slots, "default", { key: 0 }) : (openBlock(), createElementBlock("span", _hoisted_1$g, "Toggle Dropdown"))
        ]),
        _: 3
      }, 8, ["class", "aria-expanded"])), [
        [unref(vMdbClickOutside), handleClickOutside],
        [unref(RippleDirective)]
      ]);
    };
  }
}));
const __default__$q = {
  name: "MDBNavbar"
};
const _sfc_main$q = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__$q), {
  props: {
    tag: {
      type: String,
      default: "nav"
    },
    bg: String,
    dark: {
      type: Boolean,
      default: false
    },
    light: {
      type: Boolean,
      default: false
    },
    double: {
      type: Boolean,
      default: false
    },
    expand: String,
    position: String,
    transparent: {
      type: Boolean,
      default: false
    },
    scrolling: {
      type: Boolean,
      default: false
    },
    scrollingOffset: {
      type: Number,
      default: 100
    },
    center: {
      type: Boolean,
      default: false
    },
    container: {
      type: [Boolean, String],
      default: false
    },
    classContainer: String,
    classNavbar: String
  },
  setup(__props) {
    const props = __props;
    const navClass = computed(() => {
      return [
        "navbar",
        props.dark && "navbar-dark",
        props.light && "navbar-light",
        props.bg && !props.transparent ? `bg-${props.bg}` : "",
        props.expand ? props.expand === "small" || props.expand === "sm" ? "navbar-expand-sm" : props.expand === "medium" || props.expand === "md" ? "navbar-expand-md" : props.expand === "large" || props.expand === "lg" ? "navbar-expand-lg" : "navbar-expand-xl" : "",
        props.position === "top" ? "fixed-top" : props.position === "bottom" ? "fixed-bottom" : props.position === "sticky" ? "sticky-top" : "",
        props.scrolling && scrollingClass.value,
        props.double && "double-nav",
        props.center && "justify-content-center",
        props.classNavbar
      ];
    });
    const containerClass = computed(() => {
      if (!props.container) {
        return false;
      }
      return [
        props.container !== true ? `container-${props.container}` : "container-fluid",
        props.classContainer && props.classContainer
      ];
    });
    const scrollingClass = ref("navbar-scroll");
    const handleScroll = () => {
      if (window.pageYOffset > props.scrollingOffset) {
        scrollingClass.value = "navbar-scroll navbar-scrolled";
      } else {
        scrollingClass.value = "navbar-scroll";
      }
    };
    const navbar = ref(null);
    const navbarFlexWrapValue = ref("nowrap");
    provide("navbarFlexWrapValue", navbarFlexWrapValue);
    const handleResize = () => {
      if (!navbar.value)
        return;
      const wrap2 = getComputedStyle(navbar.value).flexWrap;
      if (wrap2 === "nowrap") {
        navbarFlexWrapValue.value = "nowrap";
      } else if (wrap2 === "wrap") {
        navbarFlexWrapValue.value = "wrap";
      }
    };
    onMounted(() => {
      if (getComputedStyle(navbar.value) && getComputedStyle(navbar.value).flexWrap === "wrap") {
        navbarFlexWrapValue.value = "wrap";
      } else {
        navbarFlexWrapValue.value = "nowrap";
      }
      window.addEventListener("resize", () => handleResize());
      if (props.scrolling) {
        window.addEventListener("scroll", handleScroll);
      }
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    });
    return (_ctx2, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(__props.tag), {
        ref_key: "navbar",
        ref: navbar,
        class: normalizeClass(unref(navClass)),
        role: "navigation"
      }, {
        default: withCtx(() => [
          __props.container ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(unref(containerClass))
          }, [
            renderSlot(_ctx2.$slots, "default")
          ], 2)) : createCommentVNode("", true),
          !__props.container ? renderSlot(_ctx2.$slots, "default", { key: 1 }) : createCommentVNode("", true)
        ]),
        _: 3
      }, 8, ["class"]);
    };
  }
}));
const __default__$a = {
  name: "MDBCol"
};
const _sfc_main$a = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__$a), {
  props: {
    tag: {
      type: String,
      default: "div"
    },
    col: String,
    sm: String,
    md: String,
    lg: String,
    xl: String,
    offset: String,
    offsetSm: String,
    offsetMd: String,
    offsetLg: String,
    offsetXl: String,
    auto: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const className = computed(() => {
      return [
        props.col ? "col-" + props.col : "",
        props.sm ? "col-sm-" + props.sm : "",
        props.md ? "col-md-" + props.md : "",
        props.lg ? "col-lg-" + props.lg : "",
        props.xl ? "col-xl-" + props.xl : "",
        !props.col && !props.sm && !props.md && !props.lg && !props.xl ? "col" : "",
        props.offset ? "offset-" + props.offset : "",
        props.offsetSm ? "offset-sm-" + props.offsetSm : "",
        props.offsetMd ? "offset-md-" + props.offsetMd : "",
        props.offsetLg ? "offset-lg-" + props.offsetLg : "",
        props.offsetXl ? "offset-xl-" + props.offsetXl : "",
        props.auto ? "col-auto" : ""
      ];
    });
    return (_ctx2, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(__props.tag), {
        class: normalizeClass(unref(className))
      }, {
        default: withCtx(() => [
          renderSlot(_ctx2.$slots, "default")
        ]),
        _: 3
      }, 8, ["class"]);
    };
  }
}));
const __default__$8 = {
  name: "MDBContainer"
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__$8), {
  props: {
    tag: {
      type: String,
      default: "div"
    },
    sm: {
      type: Boolean,
      default: false
    },
    md: {
      type: Boolean,
      default: false
    },
    lg: {
      type: Boolean,
      default: false
    },
    xl: {
      type: Boolean,
      default: false
    },
    xxl: {
      type: Boolean,
      default: false
    },
    fluid: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const className = computed(() => {
      return [
        props.fluid ? "container-fluid" : "",
        props.sm ? "container-sm" : "",
        props.md ? "container-md" : "",
        props.lg ? "container-lg" : "",
        props.xl ? "container-xl" : "",
        props.xxl ? "container-xxl" : "",
        !props.fluid && !props.sm && !props.md && !props.lg && !props.xl && !props.xxl ? "container" : ""
      ];
    });
    return (_ctx2, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(__props.tag), {
        class: normalizeClass(unref(className))
      }, {
        default: withCtx(() => [
          renderSlot(_ctx2.$slots, "default")
        ]),
        _: 3
      }, 8, ["class"]);
    };
  }
}));
const _hoisted_1$2$1 = ["for"];
const _hoisted_2$2$1 = ["id"];
const MDBFileList = typeof FileList !== "undefined" ? FileList : Object;
const __default__$2 = {
  name: "MDBFile"
};
defineComponent(__spreadProps(__spreadValues({}, __default__$2), {
  props: {
    id: String,
    inputClass: String,
    invalidFeedback: String,
    isInvalid: Boolean,
    isValid: Boolean,
    isValidated: Boolean,
    label: String,
    labelClass: String,
    modelValue: {
      type: [MDBFileList, Array],
      default: () => []
    },
    size: String,
    tooltipFeedback: Boolean,
    validFeedback: String,
    validateOnChange: Boolean
  },
  emits: ["update:modelValue", "on-validate"],
  setup(__props, { emit: emit2 }) {
    const props = __props;
    const uid2 = props.id || getUID("MDBFile-");
    const inputValue = ref(props.modelValue);
    const inputClassName = computed(() => {
      return [
        "form-control",
        props.size && `form-control-${props.size}`,
        isInputValidated.value && isInputValid.value && "is-valid",
        isInputValidated.value && !isInputValid.value && "is-invalid",
        props.inputClass
      ];
    });
    const labelClassName = computed(() => {
      return ["form-label", props.labelClass];
    });
    const validFeedbackClassName = computed(() => {
      return props.tooltipFeedback ? "valid-tooltip" : "valid-feedback";
    });
    const invalidFeedbackClassName = computed(() => {
      return props.tooltipFeedback ? "invalid-tooltip" : "invalid-feedback";
    });
    const isInputValidated = ref(props.isValidated);
    const isInputValid = ref(props.isValid);
    const handleValidation = (event) => {
      const target = event.target;
      if (target.files) {
        isInputValid.value = target.files.length > 0;
        isInputValidated.value = true;
        emit2("on-validate", isInputValid.value);
      }
    };
    const handleChange = (event) => {
      const target = event.target;
      if (target.files) {
        inputValue.value = target.files;
        emit2("update:modelValue", inputValue.value);
        if (props.validateOnChange) {
          handleValidation(event);
        }
      }
    };
    watch(
      () => props.modelValue,
      (value) => inputValue.value = value
    );
    watch(
      () => props.isValidated,
      (value) => isInputValidated.value = value
    );
    watch(
      () => props.isValid,
      (value) => {
        isInputValid.value = value;
      }
    );
    return (_ctx2, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        __props.label ? (openBlock(), createElementBlock("label", {
          key: 0,
          class: normalizeClass(unref(labelClassName)),
          for: unref(uid2)
        }, toDisplayString(__props.label), 11, _hoisted_1$2$1)) : createCommentVNode("", true),
        createBaseVNode("input", mergeProps({
          type: "file",
          class: unref(inputClassName)
        }, _ctx2.$attrs, {
          id: unref(uid2),
          onChange: handleChange
        }), null, 16, _hoisted_2$2$1),
        __props.validFeedback ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass(unref(validFeedbackClassName))
        }, toDisplayString(__props.validFeedback), 3)) : createCommentVNode("", true),
        __props.invalidFeedback ? (openBlock(), createElementBlock("div", {
          key: 2,
          class: normalizeClass(unref(invalidFeedbackClassName))
        }, toDisplayString(__props.invalidFeedback), 3)) : createCommentVNode("", true)
      ], 64);
    };
  }
}));
const picfunc = {
  download(url) {
    var _a, _b, _c;
    let imgselect = document.querySelector(`img[data-src="${url}"]`);
    const base = imgselect == null ? void 0 : imgselect.getAttribute("src");
    var base64 = base == null ? void 0 : base.toString();
    let pnum = url.match(/-\d+/);
    let p2;
    if (pnum == null) {
      p2 = 0;
    } else {
      p2 = parseInt(pnum[0].slice(1)) - 1;
    }
    var imgtype = (_b = (_a = base64 == null ? void 0 : base64.slice(0, 20)) == null ? void 0 : _a.match(/(png|jpeg|jpg|gif|webp)/)) == null ? void 0 : _b[0];
    if (imgtype == "jpeg") {
      imgtype = "jpg";
    }
    let filename = ((_c = url.match(/\d+/)) == null ? void 0 : _c[0]) + `_p${p2}.${imgtype}`;
    let byteCharacters = atob(
      base64.replace(/^data:image\/(png|jpeg|jpg|gif|webp);base64,/, "")
    );
    var byteNumbers = new Array(byteCharacters.length);
    for (var i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    var byteArray = new Uint8Array(byteNumbers);
    var blob = new Blob([byteArray], {
      type: void 0
    });
    var aLink = document.createElement("a");
    aLink.download = filename;
    aLink.href = URL.createObjectURL(blob);
    aLink.click();
    window.URL.revokeObjectURL(aLink.toString());
  },
  amplify(url, scaleDic) {
    let imgselect = document.querySelector(`img[data-src="${url}"]`);
    let container = document.querySelector(`#container`);
    let header = document.querySelector(`header`);
    let imgDiv = imgselect.parentNode.parentNode;
    let imgCard = imgselect.parentNode.parentNode.parentNode;
    let img_W = imgDiv.clientWidth;
    let img_H = imgDiv.clientHeight;
    let container_W = container.clientWidth;
    let window_H = window.innerHeight;
    let container_H = window_H - header.clientHeight;
    let window_W = window.innerWidth;
    let scaleRatio = "";
    if (scaleDic[url]) {
      imgCard.style.width = "";
      scaleDic[url] = false;
    } else {
      for (let turl in scaleDic) {
        if (url != turl) {
          let img = document.querySelector(`img[data-src="${turl}"]`);
          let card = img.parentNode.parentNode.parentNode;
          card.style.width = "";
          scaleDic[turl] = false;
        }
      }
      if (img_W / img_H >= window_W / window_H || window_W < window_H) {
        scaleRatio = "100%";
      } else {
        scaleRatio = `${100 * (container_H / img_H * img_W) / container_W}%`;
      }
      imgCard.style.transition = "width 0.5s";
      imgCard.style.width = `${scaleRatio}`;
      scaleDic[url] = true;
    }
  },
  SingleParseId(params, pixivServer2) {
    const pid = params.get("artwork");
    document.title = document.title + ` ${pid}`;
    var total_r = params.get("total");
    var limit_r = params.get("limit") == "all" ? total_r : params.get("limit");
    if (total_r && limit_r) {
      var total = 0;
      var limit = 0;
      total = parseInt(total_r);
      limit = parseInt(limit_r);
      var illl = [];
      for (var i = 1; i <= limit; i++) {
        if (1 == total) {
          return [
            {
              id: `${pid}_p${i}`,
              url: `${pixivServer2}/${pid}.png`,
              title: `${pid}_p${i}`,
              progress: 0
            }
          ];
        }
        illl.push({
          id: `${pid}_p${i}`,
          url: `${pixivServer2}/${pid}-${i}.png`,
          title: `${pid}_p${i - 1}`,
          progress: 0
        });
      }
      return illl;
    }
  }
};
const _hoisted_1$2 = ["data-src"];
const _hoisted_2$2 = {
  class: "placeholder-glow",
  style: { "height": "360px", "width": "100%" }
};
const _hoisted_3$2 = /* @__PURE__ */ createBaseVNode("span", null, [
  /* @__PURE__ */ createBaseVNode("span", {
    class: "placeholder col-12",
    style: { "height": "350px", "width": "100%" }
  })
], -1);
const _hoisted_4$2 = /* @__PURE__ */ createBaseVNode("p", {
  class: "text-white bg-secondary",
  style: { "padding": "0 0.3rem 0 0.3rem", "margin-bottom": "0.5rem", "font-size": "0.5rem", "width": "fit-content" }
}, null, -1);
const _hoisted_5$1 = {
  style: { "width": "22px", "margin-top": "-2px" },
  xmlns: "http://www.w3.org/2000/svg",
  class: "ionicon",
  viewBox: "0 0 512 512"
};
const _hoisted_6$1 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M336 176h40a40 40 0 0140 40v208a40 40 0 01-40 40H136a40 40 0 01-40-40V216a40 40 0 0140-40h40",
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "32"
}, null, -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "32",
  d: "M176 272l80 80 80-80M256 48v288"
}, null, -1);
const _hoisted_8 = [
  _hoisted_6$1,
  _hoisted_7
];
const _hoisted_9 = {
  style: { "width": "22px", "margin-top": "-2px" },
  xmlns: "http://www.w3.org/2000/svg",
  class: "ionicon",
  viewBox: "0 0 512 512"
};
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "32",
  d: "M432 320v112H320M421.8 421.77L304 304M80 192V80h112M90.2 90.23L208 208M320 80h112v112M421.77 90.2L304 208M192 432H80V320M90.23 421.8L208 304"
}, null, -1);
const _hoisted_11 = [
  _hoisted_10
];
const pixivServer = "https://pixiv.re";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "IllustContainer",
  setup(__props) {
    const vMdbRipple = RippleDirective;
    var scaleDic = new Array();
    const params = new URLSearchParams(window.location.search);
    const illusts = ref(picfunc.SingleParseId(params, pixivServer));
    return (_ctx2, _cache) => {
      const _directive_lazy = resolveDirective("lazy");
      return openBlock(), createBlock(unref(_sfc_main$8), {
        id: "container",
        class: "mt-2 mx-auto row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-xl-3 row-cols-xxl-4 g-3"
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(illusts.value, (item) => {
            return openBlock(), createBlock(unref(_sfc_main$a), {
              class: "col",
              id: item.id,
              url: item.url
            }, {
              default: withCtx(() => [
                createVNode(unref(_sfc_main$U), null, {
                  default: withCtx(() => [
                    withDirectives((openBlock(), createElementBlock("a", null, [
                      withDirectives((openBlock(), createElementBlock("div", {
                        class: "lazyImg-wrap",
                        "data-src": item.url
                      }, [
                        createBaseVNode("div", _hoisted_2$2, [
                          _hoisted_3$2,
                          createVNode(unref(_sfc_main$I), { height: 10 }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$H), {
                                value: 0,
                                bg: "info"
                              })
                            ]),
                            _: 1
                          })
                        ])
                      ], 8, _hoisted_1$2)), [
                        [_directive_lazy]
                      ])
                    ])), [
                      [unref(vMdbRipple), { color: "light" }]
                    ]),
                    _hoisted_4$2,
                    createVNode(unref(_sfc_main$T), { style: { "padding-top": "0px" } }, {
                      default: withCtx(() => [
                        createBaseVNode("span", null, [
                          createVNode(unref(_sfc_main$S), {
                            class: "badge rounded-pill text-bg-light float-start fw-bold fs-6",
                            style: { "display": "inline-block", "padding": "3px" }
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.title), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(unref(_sfc_main$X), {
                            tag: "button",
                            href: "#",
                            color: "danger",
                            class: "float-end",
                            disabled: "",
                            style: { "padding": "6px 12px 6px 12px" },
                            onClick: ($event) => unref(picfunc).download(item.url)
                          }, {
                            default: withCtx(() => [
                              (openBlock(), createElementBlock("svg", _hoisted_5$1, _hoisted_8))
                            ]),
                            _: 2
                          }, 1032, ["onClick"]),
                          createVNode(unref(_sfc_main$X), {
                            tag: "button",
                            href: "#",
                            color: "info",
                            class: "float-end",
                            disabled: "",
                            style: { "padding": "6px 12px 6px 12px" },
                            onClick: ($event) => unref(picfunc).amplify(item.url, unref(scaleDic))
                          }, {
                            default: withCtx(() => [
                              (openBlock(), createElementBlock("svg", _hoisted_9, _hoisted_11))
                            ]),
                            _: 2
                          }, 1032, ["onClick"])
                        ])
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1032, ["id", "url"]);
          }), 256))
        ]),
        _: 1
      });
    };
  }
});
const _imports_0 = "" + new URL("afd.5c52248d.png", import.meta.url).href;
const _hoisted_1$1 = {
  class: "navbar-toggler",
  type: "button",
  "data-bs-toggle": "offcanvas",
  "data-bs-target": "#offcanvasNavbar",
  "aria-controls": "offcanvasNavbar"
};
const _hoisted_2$1 = {
  viewBox: "0 0 24 24",
  style: { "width": "30px" }
};
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode("path", { d: "M4 7C4 6.44772 4.44772 6 5 6H19C19.5523 6 20 6.44772 20 7C20\r\n                    7.55228 19.5523 8 19 8H5C4.44772 8 4 7.55228 4 7ZM4 12C4 11.4477 4.44772 11\r\n                    5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772\r\n                    13 4 12.5523 4 12ZM5 16C4.44772 16 4 16.4477 4 17C4 17.5523 4.44772 18 5\r\n                    18H19C19.5523 18 20 17.5523 20 17C20 16.4477 19.5523 16 19 16H5Z" }, null, -1);
const _hoisted_4$1 = [
  _hoisted_3$1
];
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("a", {
  id: "id_header",
  class: "navbar-brand",
  href: "#"
}, [
  /* @__PURE__ */ createBaseVNode("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "116",
    height: "26",
    viewBox: "0 0 116 46"
  }, [
    /* @__PURE__ */ createBaseVNode("path", {
      fill: "#81FA00",
      d: "M33.463 15.125c-2.963-2.588-7.113-4.08-11.936-4.08-12.57 0-21.12 9.694-21.12 9.694l2.41 3.82s1.332.11.626-2.14c.61-1.15 1.802-2.7 4.13-4.487V43.39c-1.003.283-2.33.816-1.425 1.72h6.92c.915-.913-.525-1.462-1.402-1.72v-6.004s4.746 1.86 9.86 1.86c4.496 0 8.585-1.336 11.627-3.75 3.042-2.4 5.002-5.983 4.99-10.08a13.504 13.504 0 00-4.68-10.29zm-3.668 18.363c-2.103 2.075-5.162 3.388-8.69 3.385-3.937.002-7.25-.76-9.438-1.836v-19.1c2.4-1.704 6.294-2.754 9.438-2.748 3.82 0 6.82 1.443 8.848 3.632 2.025 2.203 3.13 5.128 3.14 8.53-.013 3.313-1.195 6.042-3.298 8.135zm14.47-22.444h-1.41c-.625 0-1.132.507-1.132 1.133v26.035c0 .626.507 1.134 1.133 1.134h1.41c.624 0 1.133-.508 1.133-1.134V12.177a1.137 1.137 0 00-1.136-1.133zm36.84 0h-1.41c-.626 0-1.133.507-1.133 1.133v26.035c0 .626.507 1.134 1.133 1.134h1.41c.624 0 1.132-.508 1.132-1.134V12.177c0-.626-.508-1.133-1.133-1.133zm33.14 0h-1.312c-1.03 0-1.315.133-1.78 1.063-.462.925-10.67 21.154-10.67 21.154S90.275 13.034 89.813 12.11c-.463-.93-.747-1.063-1.778-1.063h-1.31c-.967 0-1.487.43-.944 1.52.547 1.093 13.12 25.772 13.12 25.772.33.625.933 1.01 1.586 1.01.65 0 1.255-.385 1.587-1.01.02-.045 12.57-24.68 13.113-25.77.544-1.093.025-1.522-.94-1.522zM69.972 38.398c.53.68.914.947 1.944.947h2.113c1.33 0 .86-.605.485-1.102-.94-1.238-10.204-13.016-10.204-13.016s9.6-11.847 10.54-13.085c.376-.495.844-1.1-.487-1.1h-2.11c-1.032 0-1.415.267-1.946.946-.532.678-8.332 10.268-8.332 10.268s-7.806-9.59-8.338-10.268c-.532-.68-.915-.946-1.944-.946H49.58c-1.33 0-.862.604-.486 1.1.94 1.24 10.543 13.085 10.543 13.085s-9.543 11.777-10.484 13.016c-.375.496-.844 1.102.486 1.102h2.11c1.03 0 1.414-.27 1.946-.947.532-.678 8.277-10.202 8.277-10.202l8 10.202zM43.556.11c-.84 0-1.54.282-2.1.84-.56.56-.84 1.26-.84 2.102 0 .84.28 1.54.84 2.1.56.56 1.26.84 2.1.84.84 0 1.54-.28 2.1-.84.56-.56.84-1.26.84-2.1 0-.84-.28-1.54-.84-2.1-.56-.56-1.26-.84-2.1-.84zm36.84 0c-.84 0-1.54.282-2.1.84-.562.56-.84 1.26-.84 2.102 0 .84.278 1.54.84 2.1.56.56 1.26.84 2.1.84.84 0 1.54-.28 2.1-.84s.84-1.26.84-2.1c0-.84-.278-1.54-.84-2.1-.56-.56-1.26-.84-2.1-.84z"
    })
  ])
], -1);
const _hoisted_6 = /* @__PURE__ */ createStaticVNode('<div class="offcanvas offcanvas-start text-bg-light" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasLightNavbarLabel"><div class="offcanvas-header"><h5 class="offcanvas-title" id="offcanvasNavbarLabel">Pixiv artwork</h5><button type="button" class="btn-close btn-close-black" data-bs-dismiss="offcanvas" aria-label="Close"></button></div><div class="offcanvas-body"><ul class="navbar-nav justify-content-end flex-grow-1 pe-3"><li class="nav-item"><a class="nav-link active" aria-current="page" href="#">\u65E0\u540E\u7AEFPixiv\u63D2\u753B\u5C55\u793A</a></li><li class="nav-item"><a class="nav-link active" aria-current="page" href="https://afdian.net/a/cpuBot">\u597D\u6D3B\u5F53\u8D4F <img src="' + _imports_0 + '" style="width:100%;"></a></li><li class="nav-item"><a class="nav-link" href="https://github.com/Optfan/Optfan.github.io">view in Github</a></li></ul></div></div>', 1);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PHeader",
  setup(__props) {
    const params = new URLSearchParams(window.location.search);
    const pid = params.get("artwork");
    const pixiv_href = `https://www.pixiv.net/artworks/${pid}`;
    return (_ctx2, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(_sfc_main$q), {
          light: "",
          bg: "light",
          container: "",
          classContainer: ""
        }, {
          default: withCtx(() => [
            createBaseVNode("button", _hoisted_1$1, [
              (openBlock(), createElementBlock("svg", _hoisted_2$1, _hoisted_4$1))
            ]),
            _hoisted_5,
            createVNode(unref(_sfc_main$X), {
              tag: "a",
              id: "navbar_topixiv",
              outline: "info",
              class: "me-2 float-end",
              href: pixiv_href,
              target: "_blank"
            }, {
              default: withCtx(() => [
                createTextVNode("\u5728pixiv.net\u6253\u5F00")
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        _hoisted_6
      ], 64);
    };
  }
});
const _hoisted_1 = {
  key: 0,
  class: "alert alert-danger",
  role: "alert",
  style: { "margin": "10px" }
};
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_4 = { style: { "width": "100%" } };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "App",
  setup(__props) {
    function isQQAPP() {
      var isIosQQ = /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) && /\sQQ/i.test(navigator.userAgent);
      var isAndroidQQ = /(Android)/i.test(navigator.userAgent) && /MQQBrowser/i.test(navigator.userAgent) && navigator.userAgent.split("MQQBrowser").forEach(/\sQQ/i.test);
      console.log("isIosQQ:" + isIosQQ + "--isAndroidQQ:" + isAndroidQQ);
      if (isIosQQ) {
        return "IOS QQ";
      } else if (isAndroidQQ) {
        return "Android QQ";
      }
    }
    const deviceType = isQQAPP();
    return (_ctx2, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("header", null, [
          createVNode(_sfc_main$1),
          unref(deviceType) ? (openBlock(), createElementBlock("div", _hoisted_1, [
            createTextVNode(" \u5F53\u524D\u73AF\u5883 " + toDisplayString(unref(deviceType)) + " \u5185\u7F6E\u6D4F\u89C8\u5668", 1),
            _hoisted_2,
            createTextVNode("\u4FDD\u5B58\u56FE\u7247\u529F\u80FD\u4E0D\u53EF\u7528"),
            _hoisted_3,
            createTextVNode("\u5982\u9700\u4FDD\u5B58\u56FE\u7247\uFF0C\u8BF7\u4F7F\u7528\u5176\u4ED6\u6D4F\u89C8\u5668\u6253\u5F00 ")
          ])) : createCommentVNode("", true)
        ]),
        createBaseVNode("div", _hoisted_4, [
          createVNode(_sfc_main$2)
        ])
      ], 64);
    };
  }
});
const lazy = {
  mounted(el) {
    const pixivServer2 = "https://pixiv.re";
    function iloader(imgUrl) {
      var id2 = imgUrl.match(/\d+/);
      let pagenum = imgUrl.match(/-\d+/);
      return new Promise((resolve3, reject2) => {
        window.URL = window.URL || window.webkitURL;
        let xhr = new XMLHttpRequest();
        xhr.open("get", imgUrl, true);
        xhr.responseType = "blob";
        xhr.onload = function() {
          if (this.status == 200) {
            var blob = this.response;
            let oFileReader = new FileReader();
            oFileReader.onloadend = function(e) {
              resolve3({ blob, base64: e.target.result });
            };
            oFileReader.readAsDataURL(blob);
          }
        };
        xhr.send();
        xhr.addEventListener("progress", updateProgress);
        function updateProgress(event) {
          if (event.lengthComputable) {
            let progress = event.loaded / event.total * 100;
            let progress_div = document.querySelector(`.lazyImg-wrap[data-src="${imgUrl}"] > div >div> div`);
            progress_div.style = `width:${progress}%`;
            if (progress > 80) {
              progress_div.style = `width:100%`;
            }
          }
        }
        xhr.onreadystatechange = function() {
          if (this.readyState === this.DONE) {
            if (this.responseURL == "" && pagenum == null) {
              console.log("301\u5931\u8D25");
              this.abort();
              let rexhr = new XMLHttpRequest();
              rexhr.open("get", `${pixivServer2}/${id2}-1.png`, true);
              rexhr.responseType = "blob";
              rexhr.addEventListener("progress", updateProgress);
              rexhr.onload = function() {
                if (this.status == 200) {
                  var blob = this.response;
                  let oFileReader = new FileReader();
                  oFileReader.onloadend = function(e) {
                    resolve3({ blob, base64: e.target.result });
                  };
                  oFileReader.readAsDataURL(blob);
                }
              };
              rexhr.send();
            }
          }
        };
      }).catch((err) => {
        console.log("aaa" + err);
      });
    }
    const observer = new IntersectionObserver((entries2) => {
      entries2.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          let wrap2 = entry.target;
          let src = wrap2.dataset.src;
          iloader(src).then((data2) => {
            let { blob, base64 } = data2;
            let size2 = (blob.size / 1048576).toFixed(2);
            console.log("loaded " + src);
            let img = new Image();
            img.onload = function() {
              let size_text = document.querySelector(`div[url="${src}"] > div > p:nth-child(2)`);
              size_text.innerHTML = `${size2}MB \xB7 ${this.width} \xD7 ${this.height}`;
            };
            img.src = base64;
            wrap2.outerHTML = `<img src='${base64}' class='show' data-src='${src}'>`;
            let dbutton = document.querySelector(`div[url="${src}"] > div > div > span > button:nth-child(2)`);
            dbutton.disabled = false;
            let abutton = document.querySelector(`div[url="${src}"] > div > div > span > button:nth-child(3)`);
            abutton.disabled = false;
            function isQQAPP() {
              var isIosQQ = /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) && /\sQQ/i.test(navigator.userAgent);
              var isAndroidQQ = /(Android)/i.test(navigator.userAgent) && /MQQBrowser/i.test(navigator.userAgent) && navigator.userAgent.split("MQQBrowser").forEach(/\sQQ/i.test);
              if (isIosQQ) {
                return "IOS QQ";
              } else if (isAndroidQQ) {
                return "Android QQ";
              }
            }
            if (!isQQAPP()) {
              dbutton.disabled = false;
              dbutton.className = "btn btn-success float-end";
            }
          });
          observer.unobserve(wrap2);
        }
      });
    });
    observer.observe(el);
  }
};
createApp(_sfc_main).directive("lazy", lazy).mount("#app");
