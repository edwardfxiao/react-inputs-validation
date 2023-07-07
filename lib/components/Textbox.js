"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _message = _interopRequireDefault(require("./message"));

var _validator = _interopRequireDefault(require("./validator"));

var _utils = _interopRequireDefault(require("./utils"));

var _const = require("./const");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _regeneratorRuntime() { "use strict"; _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useState = React.useState,
    useEffect = React.useEffect,
    useCallback = React.useCallback,
    useRef = React.useRef,
    memo = React.memo;
var reactInputsValidationCss = {
  "ellipsis": "react-inputs-validation__ellipsis___3-Api",
  "textbox__wrapper": "react-inputs-validation__textbox__wrapper___3tnXv",
  "disabled": "react-inputs-validation__disabled___1-57g",
  "textbox__container": "react-inputs-validation__textbox__container___3KXOM",
  "textbox__input": "react-inputs-validation__textbox__input___20hDL",
  "error": "react-inputs-validation__error___2aXSp",
  "success": "react-inputs-validation__success___3TpwE",
  "msg": "react-inputs-validation__msg___pxv8o",
  "textarea__wrapper": "react-inputs-validation__textarea__wrapper___35GhF",
  "textarea__container": "react-inputs-validation__textarea__container___2fbGp",
  "textarea__input": "react-inputs-validation__textarea__input___1CFm_",
  "radiobox__wrapper": "react-inputs-validation__radiobox__wrapper___1zZ30",
  "radiobox__container": "react-inputs-validation__radiobox__container___FD4vb",
  "radiobox__input": "react-inputs-validation__radiobox__input___2uX2-",
  "radiobox__label": "react-inputs-validation__radiobox__label___2tQsB",
  "checked": "react-inputs-validation__checked___2O0Ju",
  "button": "react-inputs-validation__button___9JBRL",
  "radiobox__item": "react-inputs-validation__radiobox__item___ejuz1",
  "checkbox__wrapper": "react-inputs-validation__checkbox__wrapper___1c1rD",
  "checkbox__input": "react-inputs-validation__checkbox__input___1yF4X",
  "checkbox__container": "react-inputs-validation__checkbox__container___3I1rX",
  "checkbox__box": "react-inputs-validation__checkbox__box___1uj8A",
  "box": "react-inputs-validation__box___3E9nu",
  "select__wrapper": "react-inputs-validation__select__wrapper___1B4OH",
  "select__input": "react-inputs-validation__select__input___3h-P7",
  "select__container": "react-inputs-validation__select__container___3jgUR",
  "select__button": "react-inputs-validation__select__button___vEDoq",
  "select__options-item": "react-inputs-validation__select__options-item___30yY4",
  "select__options-item-show-cursor": "react-inputs-validation__select__options-item-show-cursor___1ZT3b",
  "select__searchInputWrapper": "react-inputs-validation__select__searchInputWrapper___3R5P_",
  "select__searchInputSearchIcon": "react-inputs-validation__select__searchInputSearchIcon___1Q8xX",
  "select__searchInputRemoveIcon": "react-inputs-validation__select__searchInputRemoveIcon___1A1tR",
  "select__searchInput": "react-inputs-validation__select__searchInput___1lN24",
  "select__no-mouse": "react-inputs-validation__select__no-mouse___2uRg6",
  "select__hover-active": "react-inputs-validation__select__hover-active___2z1MQ",
  "active": "react-inputs-validation__active___3eZBB",
  "select__options-wrapper-animate": "react-inputs-validation__select__options-wrapper-animate___1L9cl",
  "show": "react-inputs-validation__show___2NI3u",
  "select__options-wrapper": "react-inputs-validation__select__options-wrapper___2wPjl",
  "select__optionItem_icon": "react-inputs-validation__select__optionItem_icon___1t7zn",
  "select__optionItem_name": "react-inputs-validation__select__optionItem_name___1mAlg",
  "select__optionItem_current_display_icon": "react-inputs-validation__select__optionItem_current_display_icon___2zUlA",
  "select__optionItem_current_display_name": "react-inputs-validation__select__optionItem_current_display_name___38GI4",
  "select__dropdown": "react-inputs-validation__select__dropdown___11yDr",
  "select__dropdown-icon": "react-inputs-validation__select__dropdown-icon___1T5r2",
  "select__dropdown-name": "react-inputs-validation__select__dropdown-name___3hghL",
  "showArrow": "react-inputs-validation__showArrow___3puk1",
  "select__dropdown-icon-container": "react-inputs-validation__select__dropdown-icon-container___2ild-"
};
var TYPE = 'textbox';
var VALIDATE_OPTION_TYPE_LIST = ['string', 'number', 'alphanumeric', 'alpha'];
var VALIDATE_NUMBER_TYPE_LIST = ['decimal', 'int', 'price'];

var getDefaultValidationOption = function getDefaultValidationOption(obj) {
  var reg = obj.reg,
      min = obj.min,
      max = obj.max,
      type = obj.type,
      numberType = obj.numberType,
      mantissa = obj.mantissa,
      decimalSeparator = obj.decimalSeparator,
      name = obj.name,
      check = obj.check,
      length = obj.length,
      regMsg = obj.regMsg,
      compare = obj.compare,
      required = obj.required,
      showMsg = obj.showMsg,
      locale = obj.locale,
      msgOnError = obj.msgOnError,
      msgOnSuccess = obj.msgOnSuccess,
      customFunc = obj.customFunc,
      shouldRenderMsgAsHtml = obj.shouldRenderMsgAsHtml;
  locale = typeof locale !== 'undefined' ? locale : _const.DEFAULT_LOCALE;
  reg = typeof reg !== 'undefined' ? reg : '';
  min = typeof min !== 'undefined' ? min : 0;
  max = typeof max !== 'undefined' ? max : 0;
  type = typeof type !== 'undefined' ? type : 'string';
  numberType = typeof numberType !== 'undefined' ? numberType : 'string';
  mantissa = typeof mantissa !== 'undefined' ? mantissa : -1;
  decimalSeparator = typeof decimalSeparator !== 'undefined' ? decimalSeparator : '.';
  name = typeof name !== 'undefined' ? name : '';
  check = typeof check !== 'undefined' ? check : true;
  showMsg = typeof showMsg !== 'undefined' ? showMsg : true;
  length = typeof length !== 'undefined' ? length : 0;
  regMsg = typeof regMsg !== 'undefined' ? regMsg : '';
  compare = typeof compare !== 'undefined' ? compare : '';
  required = typeof required !== 'undefined' ? required : true;
  msgOnError = typeof msgOnError !== 'undefined' ? msgOnError : '';
  msgOnSuccess = typeof msgOnSuccess !== 'undefined' ? msgOnSuccess : '';
  customFunc = typeof customFunc !== 'undefined' ? customFunc : undefined;
  shouldRenderMsgAsHtml = typeof shouldRenderMsgAsHtml !== 'undefined' ? shouldRenderMsgAsHtml : false;
  return {
    reg: reg,
    min: min,
    max: max,
    type: type,
    numberType: numberType,
    mantissa: mantissa,
    decimalSeparator: decimalSeparator,
    name: name,
    check: check,
    length: length,
    regMsg: regMsg,
    locale: locale,
    compare: compare,
    required: required,
    showMsg: showMsg,
    msgOnError: msgOnError,
    msgOnSuccess: msgOnSuccess,
    customFunc: customFunc,
    shouldRenderMsgAsHtml: shouldRenderMsgAsHtml
  };
};

var getDefaultAsyncObj = function getDefaultAsyncObj(obj) {
  var error = obj.error,
      message = obj.message,
      showOnError = obj.showOnError,
      showOnSuccess = obj.showOnSuccess;
  error = typeof error !== 'undefined' ? error : false;
  message = typeof message !== 'undefined' ? message : '';
  showOnError = typeof showOnError !== 'undefined' ? showOnError : true;
  showOnSuccess = typeof showOnSuccess !== 'undefined' ? showOnSuccess : false;
  return {
    error: error,
    message: message,
    showOnError: showOnError,
    showOnSuccess: showOnSuccess
  };
};

var autoFormatNumber = function autoFormatNumber(v, numberType, mantissa, decimalSeparator) {
  var DEFAULT_DECIMAL = '.';
  var ZERO = '0';
  var res = '';
  var hasDecimalSeparator = false;

  var splitStr = _utils["default"].replaceSeparator(String(v), decimalSeparator, DEFAULT_DECIMAL).split('');

  if (numberType === VALIDATE_NUMBER_TYPE_LIST[2] && splitStr[0] === ZERO && splitStr[1] === ZERO) {
    splitStr.shift();
  }

  splitStr.forEach(function (i) {
    var charCode = i.toLowerCase().charCodeAt(0);

    if (charCode >= 48 && charCode <= 57 || i === DEFAULT_DECIMAL && !hasDecimalSeparator) {
      if (charCode === 46) {
        if (numberType === VALIDATE_NUMBER_TYPE_LIST[1]) {
          return;
        }

        hasDecimalSeparator = true;
      }

      res += i;
    }
  });

  if (hasDecimalSeparator && mantissa >= 0) {
    var resArr = res.split(DEFAULT_DECIMAL);

    if (mantissa === 0) {
      res = resArr[0];
    } else {
      resArr[1] = resArr[1].slice(0, mantissa);
      res = resArr.join(DEFAULT_DECIMAL);
    }
  }

  if (numberType === VALIDATE_NUMBER_TYPE_LIST[0] || numberType === VALIDATE_NUMBER_TYPE_LIST[2]) {
    if (res.length && res[0] === DEFAULT_DECIMAL) {
      res = "".concat(ZERO).concat(res);
    }
  }

  return _utils["default"].replaceSeparator(res, DEFAULT_DECIMAL, decimalSeparator);
};

var component = function component(_ref) {
  var _ref$attributesWrappe = _ref.attributesWrapper,
      attributesWrapper = _ref$attributesWrappe === void 0 ? {} : _ref$attributesWrappe,
      _ref$attributesInput = _ref.attributesInput,
      attributesInput = _ref$attributesInput === void 0 ? {} : _ref$attributesInput,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? '' : _ref$value,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? '' : _ref$label,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$validate = _ref.validate,
      validate = _ref$validate === void 0 ? false : _ref$validate,
      _ref$classNameInput = _ref.classNameInput,
      classNameInput = _ref$classNameInput === void 0 ? '' : _ref$classNameInput,
      _ref$classNameWrapper = _ref.classNameWrapper,
      classNameWrapper = _ref$classNameWrapper === void 0 ? '' : _ref$classNameWrapper,
      _ref$classNameContain = _ref.classNameContainer,
      classNameContainer = _ref$classNameContain === void 0 ? '' : _ref$classNameContain,
      _ref$customStyleInput = _ref.customStyleInput,
      customStyleInput = _ref$customStyleInput === void 0 ? {} : _ref$customStyleInput,
      _ref$customStyleWrapp = _ref.customStyleWrapper,
      customStyleWrapper = _ref$customStyleWrapp === void 0 ? {} : _ref$customStyleWrapp,
      _ref$customStyleConta = _ref.customStyleContainer,
      customStyleContainer = _ref$customStyleConta === void 0 ? {} : _ref$customStyleConta,
      _ref$validationOption = _ref.validationOption,
      validationOption = _ref$validationOption === void 0 ? {} : _ref$validationOption,
      _ref$asyncMsgObj = _ref.asyncMsgObj,
      asyncMsgObj = _ref$asyncMsgObj === void 0 ? {} : _ref$asyncMsgObj,
      _ref$onChange = _ref.onChange,
      onChange = _ref$onChange === void 0 ? function (v, e) {} : _ref$onChange,
      _ref$onBlur = _ref.onBlur,
      onBlur = _ref$onBlur === void 0 ? null : _ref$onBlur,
      _ref$onFocus = _ref.onFocus,
      onFocus = _ref$onFocus === void 0 ? null : _ref$onFocus,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === void 0 ? null : _ref$onClick,
      _ref$onKeyUp = _ref.onKeyUp,
      onKeyUp = _ref$onKeyUp === void 0 ? null : _ref$onKeyUp,
      _ref$validationCallba = _ref.validationCallback,
      validationCallback = _ref$validationCallba === void 0 ? null : _ref$validationCallba;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      err = _useState2[0],
      setErr = _useState2[1];

  var _useState3 = useState(''),
      _useState4 = _slicedToArray(_useState3, 2),
      msg = _useState4[0],
      setMsg = _useState4[1];

  var _useState5 = useState(''),
      _useState6 = _slicedToArray(_useState5, 2),
      successMsg = _useState6[0],
      setSuccessMsg = _useState6[1];

  var _useState7 = useState(String(value)),
      _useState8 = _slicedToArray(_useState7, 2),
      internalValue = _useState8[0],
      setInternalValue = _useState8[1];

  var prevInternalValue = (0, _const.usePrevious)(internalValue);
  var option = getDefaultValidationOption(validationOption);
  var asyncObj = getDefaultAsyncObj(asyncMsgObj);
  var $input = useRef(null);
  var $el = $input;
  var handleOnBlur = useCallback(function (e) {
    if (onBlur) {
      check();
      onBlur(e);
    }
  }, [internalValue, option]);
  var handleOnFocus = useCallback(function (e) {
    if (onFocus) {
      onFocus(e);
    }
  }, []);
  var handleOnClick = useCallback(function (e) {
    if (onClick) {
      onClick(e);
    }
  }, []);
  var handleOnKeyUp = useCallback(function (e) {
    if (onKeyUp) {
      var keyCode = e.keyCode;
      var keyCodeTab = 9;

      if (keyCode !== keyCodeTab) {
        check();
      }

      onKeyUp(e);
    }
  }, [internalValue, option]);
  var handleOnChange = useCallback(function (e) {
    if (disabled || $el === null) {
      return;
    }

    var v = $el.current.value;

    if (typeof attributesInput.maxLength !== 'undefined') {
      if (typeof attributesInput.maxLength === 'string' && attributesInput.maxLength !== '' || typeof attributesInput.maxLength === 'number' && attributesInput.maxLength !== 0) {
        if (v.length > Number(attributesInput.maxLength)) {
          return;
        }
      }
    }

    var type = option.type,
        numberType = option.numberType,
        mantissa = option.mantissa,
        decimalSeparator = option.decimalSeparator;

    if (type === VALIDATE_OPTION_TYPE_LIST[1]) {
      v = String(autoFormatNumber(v, VALIDATE_NUMBER_TYPE_LIST.indexOf(numberType) >= 0 ? numberType : VALIDATE_NUMBER_TYPE_LIST[0], mantissa, decimalSeparator));
    }

    if (type === VALIDATE_OPTION_TYPE_LIST[2]) {
      v = _utils["default"].getAlphanumeric(v);
    }

    if (type === VALIDATE_OPTION_TYPE_LIST[3]) {
      v = _utils["default"].getAlpha(v);
    }

    setInternalValue(v);
    onChange && onChange(v, e);

    if (err) {
      setErr(false);
    } else {
      setSuccessMsg('');
    }
  }, [err, attributesInput, option]);
  var check = useCallback(_asyncToGenerator(_regeneratorRuntime().mark(function _callee() {
    var reg, min, max, type, name, check, length, regMsg, locale, compare, required, msgOnSuccess, customFunc, _msg, nameText, customFuncResult;

    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            reg = option.reg, min = option.min, max = option.max, type = option.type, name = option.name, check = option.check, length = option.length, regMsg = option.regMsg, locale = option.locale, compare = option.compare, required = option.required, msgOnSuccess = option.msgOnSuccess, customFunc = option.customFunc;

            if (check) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return");

          case 3:
            if (!type) {
              _context.next = 85;
              break;
            }

            if (!(VALIDATE_OPTION_TYPE_LIST.indexOf(type) !== -1)) {
              _context.next = 82;
              break;
            }

            if (!(!_message["default"][locale] || !_message["default"][locale][TYPE])) {
              _context.next = 8;
              break;
            }

            console.error(_const.REACT_INPUTS_VALIDATION_CUSTOM_ERROR_MESSAGE_EXAMPLE);
            return _context.abrupt("return");

          case 8:
            _msg = _message["default"][locale][TYPE];
            nameText = name ? name : '';

            if (!required) {
              _context.next = 14;
              break;
            }

            if (!_validator["default"].empty(internalValue)) {
              _context.next = 14;
              break;
            }

            handleCheckEnd(true, _msg.empty(nameText));
            return _context.abrupt("return");

          case 14:
            if (!(String(internalValue) !== '')) {
              _context.next = 66;
              break;
            }

            if (!reg) {
              _context.next = 19;
              break;
            }

            if (!_validator["default"]['reg'](reg, internalValue)) {
              _context.next = 19;
              break;
            }

            handleCheckEnd(true, regMsg !== '' ? regMsg : _msg.invalid(nameText));
            return _context.abrupt("return");

          case 19:
            if (!(type === VALIDATE_OPTION_TYPE_LIST[0])) {
              _context.next = 39;
              break;
            }

            if (!(min || max)) {
              _context.next = 35;
              break;
            }

            if (!(min && max)) {
              _context.next = 27;
              break;
            }

            if (!(String(internalValue).length < min || String(internalValue).length > max)) {
              _context.next = 25;
              break;
            }

            handleCheckEnd(true, _msg.inBetween(nameText)(min)(max));
            return _context.abrupt("return");

          case 25:
            _context.next = 35;
            break;

          case 27:
            if (!min) {
              _context.next = 31;
              break;
            }

            if (!(String(internalValue).length < min)) {
              _context.next = 31;
              break;
            }

            handleCheckEnd(true, _msg.lessThan(nameText)(min));
            return _context.abrupt("return");

          case 31:
            if (!max) {
              _context.next = 35;
              break;
            }

            if (!(String(internalValue).length > max)) {
              _context.next = 35;
              break;
            }

            handleCheckEnd(true, _msg.greaterThan(nameText)(max));
            return _context.abrupt("return");

          case 35:
            if (!length) {
              _context.next = 39;
              break;
            }

            if (!(String(internalValue).length !== length)) {
              _context.next = 39;
              break;
            }

            handleCheckEnd(true, _msg.lengthEqual(nameText)(length));
            return _context.abrupt("return");

          case 39:
            if (!(type === VALIDATE_OPTION_TYPE_LIST[1])) {
              _context.next = 62;
              break;
            }

            if (_validator["default"][type](internalValue, null, null)) {
              _context.next = 43;
              break;
            }

            handleCheckEnd(true, _msg.invalid(nameText));
            return _context.abrupt("return");

          case 43:
            if (!(min || max)) {
              _context.next = 58;
              break;
            }

            if (!(min && max)) {
              _context.next = 50;
              break;
            }

            if (_validator["default"][type](internalValue, min, max)) {
              _context.next = 48;
              break;
            }

            handleCheckEnd(true, _msg.inBetween(nameText)(min)(max));
            return _context.abrupt("return");

          case 48:
            _context.next = 58;
            break;

          case 50:
            if (!min) {
              _context.next = 54;
              break;
            }

            if (_validator["default"][type](internalValue, min)) {
              _context.next = 54;
              break;
            }

            handleCheckEnd(true, _msg.lessThan(nameText)(min));
            return _context.abrupt("return");

          case 54:
            if (!max) {
              _context.next = 58;
              break;
            }

            if (_validator["default"][type](internalValue, 0, max)) {
              _context.next = 58;
              break;
            }

            handleCheckEnd(true, _msg.greaterThan(nameText)(max));
            return _context.abrupt("return");

          case 58:
            if (!length) {
              _context.next = 62;
              break;
            }

            if (!(String(internalValue).length !== length)) {
              _context.next = 62;
              break;
            }

            handleCheckEnd(true, _msg.lengthEqual(nameText)(length));
            return _context.abrupt("return");

          case 62:
            if (!(compare && compare !== '')) {
              _context.next = 66;
              break;
            }

            if (!(internalValue !== compare)) {
              _context.next = 66;
              break;
            }

            handleCheckEnd(true, _msg.twoInputsNotEqual());
            return _context.abrupt("return");

          case 66:
            if (!(customFunc && typeof customFunc === 'function')) {
              _context.next = 78;
              break;
            }

            _context.next = 69;
            return customFunc(internalValue);

          case 69:
            customFuncResult = _context.sent;

            if ($input && $input.current) {
              _context.next = 72;
              break;
            }

            return _context.abrupt("return");

          case 72:
            if (!(_typeof(customFuncResult) === 'object')) {
              _context.next = 75;
              break;
            }

            if (typeof customFuncResult.error === 'boolean' && typeof customFuncResult.message === 'string') {
              if (customFuncResult.error === false && customFuncResult.showOnSuccess === true) {
                setSuccessMsg(customFuncResult.message);
              }

              handleCheckEnd(customFuncResult.error, customFuncResult.message, true);
            }

            return _context.abrupt("return");

          case 75:
            if (!(customFuncResult !== true)) {
              _context.next = 78;
              break;
            }

            handleCheckEnd(true, customFuncResult, true);
            return _context.abrupt("return");

          case 78:
            if (msgOnSuccess) {
              setSuccessMsg(msgOnSuccess);
            }

            handleCheckEnd(false, msgOnSuccess);
            _context.next = 83;
            break;

          case 82:
            console.error("The valid ".concat(_utils["default"].toCamelCase(TYPE)(true), " \"type\" options in validationOption are [").concat(VALIDATE_OPTION_TYPE_LIST.map(function (i) {
              return i;
            }), "]"));

          case 83:
            _context.next = 86;
            break;

          case 85:
            console.error('Please provide "type" in validationOption');

          case 86:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), [internalValue, option]);
  var handleCheckEnd = useCallback(function (err, message) {
    var fromCustomFunc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var msg = message;
    var msgOnError = option.msgOnError;

    if (err && msgOnError && !fromCustomFunc) {
      msg = msgOnError;
    }

    setErr(err);
    setMsg(msg);
    validationCallback && validationCallback(err);
  }, [option.msgOnError]);
  useEffect(function () {
    if (validate) {
      check();
    }
  }, [validate]);
  useEffect(function () {
    setInternalValue(String(value));
  }, [value]);
  useEffect(function () {
    if (typeof prevInternalValue !== 'undefined' && prevInternalValue !== internalValue) {
      if (option.customFunc && onKeyUp) {
        check();
      }
    }
  }, [internalValue]);
  useEffect(function () {
    if (asyncObj) {
      if (asyncObj.message) {
        if (asyncObj.showOnError) {
          handleCheckEnd(asyncObj.error, asyncObj.message);
        }

        if (!asyncObj.error && asyncObj.showOnSuccess) {
          setSuccessMsg(asyncObj.message);
        }
      }
    }
  }, [asyncMsgObj]);
  var wrapperClass = "".concat(classNameWrapper, " ").concat(reactInputsValidationCss["".concat(TYPE, "__wrapper")], " ").concat(err && reactInputsValidationCss['error'], " ").concat(successMsg !== '' && !err && reactInputsValidationCss['success'], " ").concat(disabled && reactInputsValidationCss['disabled']);
  var containerClass = "".concat(classNameContainer, " ").concat(reactInputsValidationCss["".concat(TYPE, "__container")], " ").concat(err && reactInputsValidationCss['error'], " ").concat(successMsg !== '' && !err && reactInputsValidationCss['success'], " ").concat(disabled && reactInputsValidationCss['disabled']);
  var inputClass = "".concat(classNameInput, " ").concat(reactInputsValidationCss["".concat(TYPE, "__input")], " ").concat(err && reactInputsValidationCss['error'], " ").concat(successMsg !== '' && !err && reactInputsValidationCss['success'], " ").concat(disabled && reactInputsValidationCss['disabled']);
  var errMsgClass = "".concat(_const.MSG_CLASS_IDENTITIFIER, " ").concat(reactInputsValidationCss['msg'], " ").concat(err && reactInputsValidationCss['error']);
  var successMsgClass = "".concat(_const.MSG_CLASS_IDENTITIFIER, " ").concat(reactInputsValidationCss['msg'], " ").concat(!err && reactInputsValidationCss['success']);
  var msgHtml;
  var showMsg = option.showMsg,
      shouldRenderMsgAsHtml = option.shouldRenderMsgAsHtml;

  if (showMsg && err && msg) {
    msgHtml = shouldRenderMsgAsHtml ? React.createElement("div", {
      className: errMsgClass,
      dangerouslySetInnerHTML: {
        __html: msg
      }
    }) : React.createElement("div", {
      className: errMsgClass
    }, msg);
  }

  if (showMsg && !err && successMsg !== '') {
    msgHtml = shouldRenderMsgAsHtml ? React.createElement("div", {
      className: successMsgClass,
      dangerouslySetInnerHTML: {
        __html: successMsg
      }
    }) : React.createElement("div", {
      className: successMsgClass
    }, successMsg);
  }

  return React.createElement("div", _extends({
    className: wrapperClass,
    style: customStyleWrapper
  }, attributesWrapper), React.createElement("div", {
    className: containerClass,
    style: customStyleContainer
  }, React.createElement("input", _extends({
    type: "text",
    value: internalValue,
    disabled: disabled,
    onBlur: handleOnBlur,
    onKeyUp: handleOnKeyUp,
    onFocus: handleOnFocus,
    onClick: handleOnClick,
    className: inputClass,
    onChange: handleOnChange,
    style: customStyleInput,
    ref: $input
  }, attributesInput)), label && attributesInput.id && React.createElement("label", {
    htmlFor: attributesInput.id
  }, label)), msgHtml);
};

var _default = memo(component);

exports["default"] = _default;