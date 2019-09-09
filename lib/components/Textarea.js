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

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useState = React.useState,
    useEffect = React.useEffect,
    useCallback = React.useCallback,
    useRef = React.useRef,
    memo = React.memo;
var reactInputsValidationCss = {
  "ellipsis": "react-inputs-validation__ellipsis___3-Api",
  "textbox__wrapper": "react-inputs-validation__textbox__wrapper___3tnXv",
  "textbox__container": "react-inputs-validation__textbox__container___3KXOM",
  "textbox__input": "react-inputs-validation__textbox__input___20hDL",
  "error": "react-inputs-validation__error___2aXSp",
  "success": "react-inputs-validation__success___3TpwE",
  "disabled": "react-inputs-validation__disabled___1-57g",
  "msg": "react-inputs-validation__msg___pxv8o",
  "textarea__wrapper": "react-inputs-validation__textarea__wrapper___35GhF",
  "textarea__container": "react-inputs-validation__textarea__container___2fbGp",
  "textarea__input": "react-inputs-validation__textarea__input___1CFm_",
  "radiobox__wrapper": "react-inputs-validation__radiobox__wrapper___1zZ30",
  "radiobox__container": "react-inputs-validation__radiobox__container___FD4vb",
  "radiobox__input": "react-inputs-validation__radiobox__input___2uX2-",
  "radiobox__label": "react-inputs-validation__radiobox__label___2tQsB",
  "checked": "react-inputs-validation__checked___2O0Ju",
  "radiobox__item": "react-inputs-validation__radiobox__item___ejuz1",
  "checkbox__wrapper": "react-inputs-validation__checkbox__wrapper___1c1rD",
  "checkbox__input": "react-inputs-validation__checkbox__input___1yF4X",
  "checkbox__container": "react-inputs-validation__checkbox__container___3I1rX",
  "checkbox__box": "react-inputs-validation__checkbox__box___1uj8A",
  "box": "react-inputs-validation__box___3E9nu",
  "button": "react-inputs-validation__button___9JBRL",
  "select__wrapper": "react-inputs-validation__select__wrapper___1B4OH",
  "select__input": "react-inputs-validation__select__input___3h-P7",
  "select__container": "react-inputs-validation__select__container___3jgUR",
  "select__button": "react-inputs-validation__select__button___vEDoq",
  "select__options-item": "react-inputs-validation__select__options-item___30yY4",
  "select__options-item-show-cursor": "react-inputs-validation__select__options-item-show-cursor___1ZT3b",
  "select__no-mouse": "react-inputs-validation__select__no-mouse___2uRg6",
  "select__hover-active": "react-inputs-validation__select__hover-active___2z1MQ",
  "active": "react-inputs-validation__active___3eZBB",
  "select__options-container-animate": "react-inputs-validation__select__options-container-animate___2Rm--",
  "show": "react-inputs-validation__show___2NI3u",
  "select__options-container": "react-inputs-validation__select__options-container___d54qE",
  "select__dropdown": "react-inputs-validation__select__dropdown___11yDr",
  "select__dropdown-icon": "react-inputs-validation__select__dropdown-icon___1T5r2",
  "select__dropdown-name": "react-inputs-validation__select__dropdown-name___3hghL",
  "select__dropdown-icon-container": "react-inputs-validation__select__dropdown-icon-container___2ild-"
};
var TYPE = 'textarea';
var VALIDATE_OPTION_TYPE_LIST = ['string'];

var getDefaultValidationOption = function getDefaultValidationOption(obj) {
  var reg = obj.reg,
      min = obj.min,
      max = obj.max,
      type = obj.type,
      name = obj.name,
      check = obj.check,
      length = obj.length,
      regMsg = obj.regMsg,
      required = obj.required,
      showMsg = obj.showMsg,
      locale = obj.locale,
      msgOnError = obj.msgOnError,
      msgOnSuccess = obj.msgOnSuccess,
      customFunc = obj.customFunc;
  locale = typeof locale !== 'undefined' ? locale : _const.DEFAULT_LOCALE;
  reg = typeof reg !== 'undefined' ? reg : '';
  min = typeof min !== 'undefined' ? min : 0;
  max = typeof max !== 'undefined' ? max : 0;
  type = typeof type !== 'undefined' ? type : 'string';
  name = typeof name !== 'undefined' ? name : '';
  check = typeof check !== 'undefined' ? check : true;
  showMsg = typeof showMsg !== 'undefined' ? showMsg : true;
  length = typeof length !== 'undefined' ? length : 0;
  regMsg = typeof regMsg !== 'undefined' ? regMsg : '';
  required = typeof required !== 'undefined' ? required : true;
  msgOnError = typeof msgOnError !== 'undefined' ? msgOnError : '';
  msgOnSuccess = typeof msgOnSuccess !== 'undefined' ? msgOnSuccess : '';
  customFunc = typeof customFunc !== 'undefined' ? customFunc : undefined;
  return {
    reg: reg,
    min: min,
    max: max,
    type: type,
    name: name,
    check: check,
    length: length,
    regMsg: regMsg,
    locale: locale,
    required: required,
    showMsg: showMsg,
    msgOnError: msgOnError,
    msgOnSuccess: msgOnSuccess,
    customFunc: customFunc
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

var component = function component(_ref) {
  var _ref$attributesWrappe = _ref.attributesWrapper,
      attributesWrapper = _ref$attributesWrappe === void 0 ? {} : _ref$attributesWrappe,
      _ref$attributesInput = _ref.attributesInput,
      attributesInput = _ref$attributesInput === void 0 ? {} : _ref$attributesInput,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? '' : _ref$value,
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
      onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
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

    setInternalValue(v);
    onChange && onChange(v, e);

    if (err) {
      setErr(false);
    } else {
      setSuccessMsg('');
    }
  }, [err]);
  var check = useCallback(_asyncToGenerator(regeneratorRuntime.mark(function _callee() {
    var reg, min, max, type, name, check, length, regMsg, locale, required, msgOnSuccess, customFunc, _msg, nameText, customFuncResult;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            reg = option.reg, min = option.min, max = option.max, type = option.type, name = option.name, check = option.check, length = option.length, regMsg = option.regMsg, locale = option.locale, required = option.required, msgOnSuccess = option.msgOnSuccess, customFunc = option.customFunc;

            if (check) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return");

          case 3:
            if (!type) {
              _context.next = 55;
              break;
            }

            if (!(VALIDATE_OPTION_TYPE_LIST.indexOf(type) !== -1)) {
              _context.next = 52;
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
              _context.next = 38;
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
            if (!(min || max)) {
              _context.next = 34;
              break;
            }

            if (!(min && max)) {
              _context.next = 26;
              break;
            }

            if (!(String(internalValue).length < min || String(internalValue).length > max)) {
              _context.next = 24;
              break;
            }

            handleCheckEnd(true, _msg.inBetween(nameText)(min)(max));
            return _context.abrupt("return");

          case 24:
            _context.next = 34;
            break;

          case 26:
            if (!min) {
              _context.next = 30;
              break;
            }

            if (!(String(internalValue).length < min)) {
              _context.next = 30;
              break;
            }

            handleCheckEnd(true, _msg.lessThan(nameText)(min));
            return _context.abrupt("return");

          case 30:
            if (!max) {
              _context.next = 34;
              break;
            }

            if (!(String(internalValue).length > max)) {
              _context.next = 34;
              break;
            }

            handleCheckEnd(true, _msg.greaterThan(nameText)(max));
            return _context.abrupt("return");

          case 34:
            if (!length) {
              _context.next = 38;
              break;
            }

            if (!(String(internalValue).length !== length)) {
              _context.next = 38;
              break;
            }

            handleCheckEnd(true, _msg.lengthEqual(nameText)(length));
            return _context.abrupt("return");

          case 38:
            if (!(customFunc && typeof customFunc === 'function')) {
              _context.next = 48;
              break;
            }

            _context.next = 41;
            return customFunc(internalValue);

          case 41:
            customFuncResult = _context.sent;

            if (!(_typeof(customFuncResult) === 'object')) {
              _context.next = 45;
              break;
            }

            if (typeof customFuncResult.error === 'boolean' && typeof customFuncResult.message === 'string') {
              if (customFuncResult.error === false && customFuncResult.showOnSuccess === true) {
                setSuccessMsg(customFuncResult.message);
              }

              handleCheckEnd(customFuncResult.error, customFuncResult.message, true);
            }

            return _context.abrupt("return");

          case 45:
            if (!(customFuncResult !== true)) {
              _context.next = 48;
              break;
            }

            handleCheckEnd(true, customFuncResult, true);
            return _context.abrupt("return");

          case 48:
            if (msgOnSuccess) {
              setSuccessMsg(msgOnSuccess);
            }

            handleCheckEnd(false, msgOnSuccess);
            _context.next = 53;
            break;

          case 52:
            console.error("The valid ".concat(_utils["default"].toCamelCase(TYPE)(true), " \"type\" options in validationOption are [").concat(VALIDATE_OPTION_TYPE_LIST.map(function (i) {
              return i;
            }), "]"));

          case 53:
            _context.next = 56;
            break;

          case 55:
            console.error('Please provide "type" in validationOption');

          case 56:
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
  }, []);
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
  var showMsg = option.showMsg;

  if (showMsg && err && msg) {
    msgHtml = React.createElement("div", {
      className: errMsgClass
    }, msg);
  }

  if (showMsg && !err && successMsg !== '') {
    msgHtml = React.createElement("div", {
      className: successMsgClass
    }, successMsg);
  }

  return React.createElement("div", _extends({
    className: wrapperClass,
    style: customStyleWrapper
  }, attributesWrapper), React.createElement("div", {
    className: containerClass,
    style: customStyleContainer
  }, React.createElement("textarea", _extends({
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
  }, attributesInput))), msgHtml);
};

var _default = memo(component);

exports["default"] = _default;