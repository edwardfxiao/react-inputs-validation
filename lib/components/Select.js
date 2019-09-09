"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Option = exports.getIndex = exports.getItem = exports.isValidValue = void 0;

var React = _interopRequireWildcard(require("react"));

var _message = _interopRequireDefault(require("./message"));

var _const = require("./const");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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
var TYPE = 'select';

if (!String.prototype.startsWith) {
  String.prototype.startsWith = function (searchString, position) {
    var p = position || 0;
    return this.indexOf(searchString, p) === p;
  };
}

var getDefaultValidationOption = function getDefaultValidationOption(obj) {
  var name = obj.name,
      check = obj.check,
      required = obj.required,
      showMsg = obj.showMsg,
      locale = obj.locale,
      msgOnError = obj.msgOnError,
      msgOnSuccess = obj.msgOnSuccess;
  locale = typeof locale !== 'undefined' ? locale : _const.DEFAULT_LOCALE;
  name = typeof name !== 'undefined' ? name : '';
  check = typeof check !== 'undefined' ? check : true;
  showMsg = typeof showMsg !== 'undefined' ? showMsg : true;
  required = typeof required !== 'undefined' ? required : true;
  msgOnSuccess = typeof msgOnSuccess !== 'undefined' ? msgOnSuccess : '';
  msgOnError = typeof msgOnError !== 'undefined' ? msgOnError : '';
  return {
    name: name,
    check: check,
    showMsg: showMsg,
    required: required,
    locale: locale,
    msgOnError: msgOnError,
    msgOnSuccess: msgOnSuccess
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

var isValidValue = function isValidValue(list, value) {
  var res = false;

  if (list.length) {
    for (var i = 0; i < list.length; i += 1) {
      if (list[i].id === value) {
        res = true;
        break;
      }
    }
  }

  return res;
};

exports.isValidValue = isValidValue;

var getItem = function getItem(list, value) {
  var res = null;

  if (list.length) {
    for (var i = 0; i < list.length; i += 1) {
      if (list[i].id === value) {
        res = list[i];
        break;
      }
    }
  }

  return res;
};

exports.getItem = getItem;

var getIndex = function getIndex(list, value) {
  var key = -1;

  for (var i = 0; i < list.length; i += 1) {
    if (list[i].id === value) {
      key = i;
      break;
    }
  }

  return key;
};

exports.getIndex = getIndex;
var globalVariableIsFocusing = false;
var globalVariableIsCorrected = false;
var globalVariableCurrentFocus = null;
var globalVariableTypingTimeout = null;

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
      _ref$optionList = _ref.optionList,
      optionList = _ref$optionList === void 0 ? [] : _ref$optionList,
      _ref$classNameWrapper = _ref.classNameWrapper,
      classNameWrapper = _ref$classNameWrapper === void 0 ? '' : _ref$classNameWrapper,
      _ref$classNameContain = _ref.classNameContainer,
      classNameContainer = _ref$classNameContain === void 0 ? '' : _ref$classNameContain,
      _ref$classNameSelect = _ref.classNameSelect,
      classNameSelect = _ref$classNameSelect === void 0 ? '' : _ref$classNameSelect,
      _ref$classNameOptionL = _ref.classNameOptionListItem,
      classNameOptionListItem = _ref$classNameOptionL === void 0 ? '' : _ref$classNameOptionL,
      _ref$classNameOptionL2 = _ref.classNameOptionListContainer,
      classNameOptionListContainer = _ref$classNameOptionL2 === void 0 ? '' : _ref$classNameOptionL2,
      _ref$classNameDropdow = _ref.classNameDropdownIconOptionListItem,
      classNameDropdownIconOptionListItem = _ref$classNameDropdow === void 0 ? '' : _ref$classNameDropdow,
      _ref$customStyleWrapp = _ref.customStyleWrapper,
      customStyleWrapper = _ref$customStyleWrapp === void 0 ? {} : _ref$customStyleWrapp,
      _ref$customStyleConta = _ref.customStyleContainer,
      customStyleContainer = _ref$customStyleConta === void 0 ? {} : _ref$customStyleConta,
      _ref$customStyleSelec = _ref.customStyleSelect,
      customStyleSelect = _ref$customStyleSelec === void 0 ? {} : _ref$customStyleSelec,
      _ref$customStyleOptio = _ref.customStyleOptionListItem,
      customStyleOptionListItem = _ref$customStyleOptio === void 0 ? {} : _ref$customStyleOptio,
      _ref$customStyleOptio2 = _ref.customStyleOptionListContainer,
      customStyleOptionListContainer = _ref$customStyleOptio2 === void 0 ? {} : _ref$customStyleOptio2,
      _ref$customStyleDropd = _ref.customStyleDropdownIcon,
      customStyleDropdownIcon = _ref$customStyleDropd === void 0 ? {} : _ref$customStyleDropd,
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

  var _useState9 = useState(false),
      _useState10 = _slicedToArray(_useState9, 2),
      show = _useState10[0],
      setShow = _useState10[1];

  var _useState11 = useState(false),
      _useState12 = _slicedToArray(_useState11, 2),
      isTyping = _useState12[0],
      setIsTyping = _useState12[1];

  var initKeycodeList = [];

  var _useState13 = useState(initKeycodeList),
      _useState14 = _slicedToArray(_useState13, 2),
      keycodeList = _useState14[0],
      setKeycodeList = _useState14[1];

  var option = getDefaultValidationOption(validationOption);
  var asyncObj = getDefaultAsyncObj(asyncMsgObj);
  var $button = useRef(null);
  var $wrapper = useRef(null);
  var $itemsWrapper = useRef(null);
  var $elButton = $button;
  var $elWrapper = $wrapper;
  var $elItemsWrapper = $itemsWrapper;
  var $itemsRef = [];

  if (optionList.length) {
    for (var i = 0; i < optionList.length; i += 1) {
      $itemsRef.push(useRef(null));
    }
  }

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
  var handleOnChange = useCallback(function (v, e) {
    if (disabled || $elWrapper === null) {
      return;
    }

    onChange && onChange(String(v), e);
  }, []);
  var check = useCallback(function () {
    var name = option.name,
        check = option.check,
        locale = option.locale,
        required = option.required,
        msgOnSuccess = option.msgOnSuccess;

    if (!check) {
      return;
    }

    if (!_message["default"][locale] || !_message["default"][locale][TYPE]) {
      console.error(_const.REACT_INPUTS_VALIDATION_CUSTOM_ERROR_MESSAGE_EXAMPLE);
      return;
    }

    if (required) {
      var _msg = _message["default"][locale][TYPE];
      var nameText = name ? name : '';

      if (!isValidValue(optionList, internalValue) || internalValue === '' || internalValue === 'null' || internalValue === 'undefined') {
        handleCheckEnd(true, _msg.empty(nameText));
        return;
      }
    }

    if (msgOnSuccess) {
      setSuccessMsg(msgOnSuccess);
    }

    handleCheckEnd(false, msgOnSuccess);
  }, [internalValue, option]);
  var handleCheckEnd = useCallback(function (err, message) {
    var msg = message;
    var msgOnError = option.msgOnError;

    if (err && msgOnError) {
      msg = msgOnError;
    }

    setErr(err);
    setMsg(msg);
    validationCallback && validationCallback(err);
  }, []);
  useEffect(function () {
    if ($elWrapper === null) {
      return;
    }

    window.addEventListener('mousedown', pageClick);
    window.addEventListener('touchstart', pageClick);
    return function () {
      window.removeEventListener('mousedown', pageClick);
      window.removeEventListener('touchstart', pageClick);
      $elWrapper.current.removeEventListener('keydown', onKeyDown);
    };
  }, []);
  var pageClick = useCallback(function (e) {
    if ($elWrapper === null || $elWrapper.current.contains(e.target)) {
      return;
    }

    if (globalVariableIsFocusing) {
      handleOnBlur(e);
      globalVariableIsFocusing = false;
    }

    setShow(false);
  }, []);
  var resetCurrentFocus = useCallback(function () {
    globalVariableCurrentFocus = getIndex(optionList, internalValue);
    scroll();
  }, [internalValue]);
  var setTimeoutTyping = useCallback(function () {
    if (globalVariableTypingTimeout) {
      clearTimeout(globalVariableTypingTimeout);
    }

    globalVariableTypingTimeout = setTimeout(function () {
      setKeycodeList([]);
    }, 250);
  }, []);
  var scroll = useCallback(function () {
    var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

    if ($elItemsWrapper === null) {
      return;
    }

    var containerHeight = $elItemsWrapper.current.offsetHeight;
    var containerScrollTop = $elItemsWrapper.current.scrollTop;

    if (!globalVariableCurrentFocus || !$itemsRef[globalVariableCurrentFocus]) {
      return;
    }

    var $elOptionItem = $itemsRef[globalVariableCurrentFocus];

    if ($elOptionItem === null) {
      return;
    }

    var itemHeight = $elOptionItem.current.offsetHeight;

    if (direction) {
      if (direction === 'down') {
        var bound = containerScrollTop + containerHeight;
        var heightItems = globalVariableCurrentFocus * itemHeight;
        var heightContainer = bound - itemHeight;

        if (heightItems >= heightContainer) {
          var offset = Math.abs(heightItems - heightContainer - itemHeight);

          if (offset >= 0 && !globalVariableIsCorrected) {
            $elItemsWrapper.current.scrollTop = containerScrollTop + itemHeight - offset;
            globalVariableIsCorrected = true;
          } else {
            $elItemsWrapper.current.scrollTop = containerScrollTop + itemHeight;
          }
        }
      }

      if (direction === 'up') {
        globalVariableIsCorrected = false;

        if (globalVariableCurrentFocus * itemHeight <= containerScrollTop) {
          $elItemsWrapper.current.scrollTop = globalVariableCurrentFocus * itemHeight;
        }
      }
    } else {
      globalVariableIsCorrected = false;
      $elItemsWrapper.current.scrollTop = globalVariableCurrentFocus * itemHeight;
    }
  }, []);
  var handleOnItemClick = useCallback(function (v, e) {
    handleOnChange(v, e);
  }, []);
  var handleOnItemMouseOver = useCallback(function (index) {
    globalVariableCurrentFocus = index;
    addActive();
  }, []);
  var handleOnItemMouseMove = useCallback(function () {
    setIsTyping(false);
  }, []);
  var handleOnItemMouseOut = useCallback(function () {
    removeActive();
  }, []);
  var addActive = useCallback(function () {
    if (!$itemsRef) return;
    removeActive();
    if (globalVariableCurrentFocus === null) return;
    if (globalVariableCurrentFocus >= $itemsRef.length) globalVariableCurrentFocus = 0;
    if (globalVariableCurrentFocus < 0) globalVariableCurrentFocus = $itemsRef.length - 1;
    var $node = $itemsRef[globalVariableCurrentFocus];

    if (!$node) {
      return;
    }

    $itemsRef[globalVariableCurrentFocus].current.className += " ".concat(reactInputsValidationCss["".concat(TYPE, "__hover-active")]);
  }, []);
  var removeActive = useCallback(function () {
    for (var _i2 = 0; _i2 < $itemsRef.length; _i2 += 1) {
      var $node = $itemsRef[_i2];

      if (!$node) {
        break;
      }

      if ($node && $node.current) {
        $node.current.className = $node.current.className.replace(reactInputsValidationCss["".concat(TYPE, "__hover-active")], '');
      }
    }
  }, []);
  var onKeyDown = useCallback(function (e) {
    setIsTyping(true);

    if (e.preventDefault) {
      e.preventDefault();
    }

    if (!show) {
      return;
    }

    globalVariableCurrentFocus = globalVariableCurrentFocus === null ? getIndex(optionList, String(value)) : globalVariableCurrentFocus;
    var direction = undefined;
    var keyCode = e.keyCode;
    var keyCodeEsc = 27;
    var keyCodeDown = 40;
    var keyCodeUp = 38;
    var keyCodeEnter = 13;
    var selectKeyList = [keyCodeEsc, keyCodeDown, keyCodeUp, keyCodeEnter];

    if (selectKeyList.indexOf(keyCode) !== -1) {
      if (keyCode === keyCodeEsc) {
        setShow(false);
        resetCurrentFocus();
        return;
      }

      if (keyCode === keyCodeDown) {
        direction = 'down';
        globalVariableCurrentFocus += 1;

        if (globalVariableCurrentFocus > optionList.length - 1) {
          globalVariableCurrentFocus = optionList.length - 1;
        }

        addActive();
      } else if (keyCode === keyCodeUp) {
        direction = 'up';
        globalVariableCurrentFocus -= 1;

        if (globalVariableCurrentFocus < 0) {
          globalVariableCurrentFocus = 0;
        }

        addActive();
      } else if (keyCode === keyCodeEnter) {
        if (globalVariableCurrentFocus > -1) {
          if ($itemsRef[globalVariableCurrentFocus]) {
            $itemsRef[globalVariableCurrentFocus].current.click();
          } else {
            return;
          }
        }
      }
    } else {
      setTimeoutTyping();
      var newkeyCodeList = [].concat(_toConsumableArray(keycodeList), [keyCode]);
      var str = String.fromCharCode.apply(String, _toConsumableArray(newkeyCodeList)).toLowerCase();
      var index = -1;
      optionList.filter(function (i, k) {
        var name = i.name;

        if (name.toLowerCase().startsWith(str)) {
          if (index === -1) {
            index = k;
          }
        }
      });

      if (index !== -1) {
        globalVariableCurrentFocus = index;
        addActive();
      }

      setKeycodeList(newkeyCodeList);
    }

    scroll(direction);
    return globalVariableCurrentFocus;
  }, [show, value, keycodeList]);
  useEffect(function () {
    if (show && $elWrapper) {
      document.addEventListener('keydown', onKeyDown);
    }

    return function () {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [show, value, keycodeList]);
  useEffect(function () {
    if (validate) {
      check();
    }
  }, [validate]);
  useEffect(function () {
    if (!(!isValidValue(optionList, internalValue) || internalValue === '' || internalValue === 'null' || internalValue === 'undefined')) {
      setErr(false);
    } else {
      setSuccessMsg('');
    }
  }, [internalValue]);
  useEffect(function () {
    setInternalValue(String(value));
  }, [value]);
  useEffect(function () {
    if (typeof prevInternalValue !== 'undefined' && prevInternalValue !== internalValue) {
      check();
    }
  }, [prevInternalValue, internalValue]);
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
  useEffect(function () {
    if (show) {
      globalVariableCurrentFocus = globalVariableCurrentFocus === null ? getIndex(optionList, String(value)) : globalVariableCurrentFocus;
      $itemsRef[globalVariableCurrentFocus].current.focus();
    } else {
      $elButton.current.focus();
    }
  }, [show]);
  var wrapperClass = "".concat(_const.WRAPPER_CLASS_IDENTITIFIER, " ").concat(classNameWrapper, " ").concat(reactInputsValidationCss["".concat(TYPE, "__wrapper")], " ").concat(err && reactInputsValidationCss['error'], " ").concat(successMsg !== '' && !err && reactInputsValidationCss['success'], " ").concat(disabled && reactInputsValidationCss['disabled']);
  var containerClass = "".concat(_const.CONTAINER_CLASS_IDENTITIFIER, " ").concat(classNameContainer, " ").concat(reactInputsValidationCss["".concat(TYPE, "__container")], " ").concat(err && reactInputsValidationCss['error'], " ").concat(show && reactInputsValidationCss['show'], " ").concat(successMsg !== '' && !err && reactInputsValidationCss['success'], " ").concat(disabled && reactInputsValidationCss['disabled']);
  var inputClass = "".concat(reactInputsValidationCss["".concat(TYPE, "__input")], " ").concat(err && reactInputsValidationCss['error'], " ").concat(successMsg !== '' && !err && reactInputsValidationCss['success'], " ").concat(disabled && reactInputsValidationCss['disabled']);
  var selectClass = "".concat(classNameSelect, " ").concat(reactInputsValidationCss['ellipsis'], " ").concat(err && reactInputsValidationCss['error'], " ").concat(successMsg !== '' && !err && reactInputsValidationCss['success'], " ").concat(disabled && reactInputsValidationCss['disabled']);
  var selectOptionListContainerClass = "".concat(classNameOptionListContainer, " ").concat(reactInputsValidationCss["".concat(TYPE, "__options-container")], " ").concat(err && reactInputsValidationCss['error'], " ").concat(show && reactInputsValidationCss['show'], " ").concat(successMsg !== '' && !err && reactInputsValidationCss['success'], " ").concat(disabled && reactInputsValidationCss['disabled']);
  var selectOptionListItemClass = "".concat(reactInputsValidationCss["button"], " ").concat(!isTyping && reactInputsValidationCss["".concat(TYPE, "__options-item-show-cursor")], " ").concat(classNameOptionListItem, " ").concat(reactInputsValidationCss["".concat(TYPE, "__options-item")], " ").concat(err && reactInputsValidationCss['error'], " ").concat(successMsg !== '' && !err && reactInputsValidationCss['success'], " ").concat(disabled && reactInputsValidationCss['disabled']);
  var dropdownIconClass = "".concat(classNameDropdownIconOptionListItem, " ").concat(reactInputsValidationCss["".concat(TYPE, "__dropdown-icon")]);
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

  var optionListHtml;
  var item = getItem(optionList, String(value));

  if (optionList.length) {
    optionListHtml = optionList.map(function (i, k) {
      return React.createElement(Option, {
        key: k,
        index: k,
        id: "react-inputs-validation__select_option-".concat(i.id),
        refItem: $itemsRef[k],
        className: String(i.id) === String(value) ? "".concat(selectOptionListItemClass, " ").concat(reactInputsValidationCss['active']) : "".concat(selectOptionListItemClass),
        item: i,
        customStyleOptionListItem: customStyleOptionListItem,
        onClick: handleOnItemClick,
        onMouseOver: handleOnItemMouseOver,
        onMouseMove: handleOnItemMouseMove,
        onMouseOut: handleOnItemMouseOut
      });
    });
  }

  var selectorHtml = React.createElement("div", {
    className: reactInputsValidationCss["".concat(TYPE, "__dropdown")]
  }, React.createElement("div", {
    className: "".concat(reactInputsValidationCss["".concat(TYPE, "__dropdown-name")], " ").concat(reactInputsValidationCss['ellipsis'])
  }, item ? item.name : ''), React.createElement("div", {
    className: dropdownIconClass
  }));
  return React.createElement("button", _extends({
    ref: $button,
    type: "button",
    className: reactInputsValidationCss["button"],
    onClick: function onClick(e) {
      handleOnClick(e);
      !disabled ? setShow(!show) : "";
    },
    onFocus: handleOnFocus,
    onBlur: handleOnBlur
  }, attributesWrapper), React.createElement("div", {
    ref: $wrapper,
    className: wrapperClass,
    style: customStyleWrapper
  }, React.createElement("div", {
    className: containerClass,
    style: customStyleContainer
  }, React.createElement("input", _extends({
    type: "hidden",
    value: value,
    className: inputClass,
    onChange: function onChange() {}
  }, attributesInput)), React.createElement("div", {
    className: selectClass,
    style: customStyleSelect
  }, selectorHtml), React.createElement("div", {
    ref: $itemsWrapper,
    className: selectOptionListContainerClass,
    style: customStyleOptionListContainer
  }, optionListHtml)), msgHtml));
};

var Option = memo(function (_ref2) {
  var _ref2$index = _ref2.index,
      index = _ref2$index === void 0 ? -1 : _ref2$index,
      _ref2$refItem = _ref2.refItem,
      refItem = _ref2$refItem === void 0 ? null : _ref2$refItem,
      _ref2$id = _ref2.id,
      id = _ref2$id === void 0 ? '' : _ref2$id,
      _ref2$className = _ref2.className,
      className = _ref2$className === void 0 ? '' : _ref2$className,
      _ref2$item = _ref2.item,
      item = _ref2$item === void 0 ? {
    id: '',
    name: ''
  } : _ref2$item,
      _ref2$customStyleOpti = _ref2.customStyleOptionListItem,
      customStyleOptionListItem = _ref2$customStyleOpti === void 0 ? {} : _ref2$customStyleOpti,
      _ref2$onClick = _ref2.onClick,
      onClick = _ref2$onClick === void 0 ? function () {} : _ref2$onClick,
      _ref2$onMouseOver = _ref2.onMouseOver,
      onMouseOver = _ref2$onMouseOver === void 0 ? function () {} : _ref2$onMouseOver,
      _ref2$onMouseMove = _ref2.onMouseMove,
      onMouseMove = _ref2$onMouseMove === void 0 ? function () {} : _ref2$onMouseMove,
      _ref2$onMouseOut = _ref2.onMouseOut,
      onMouseOut = _ref2$onMouseOut === void 0 ? function () {} : _ref2$onMouseOut;
  var handleOnClick = useCallback(function (e) {
    onClick(item.id, e);
  }, []);
  var handleOnMouseOver = useCallback(function () {
    onMouseOver(index);
  }, []);
  var handleOnMouseMove = useCallback(function () {
    onMouseMove();
  }, []);
  var handleOnMouseOut = useCallback(function () {
    onMouseOut();
  }, []);
  return React.createElement("a", {
    id: id,
    ref: refItem,
    onMouseOver: handleOnMouseOver,
    onMouseMove: handleOnMouseMove,
    onMouseOut: handleOnMouseOut,
    className: className,
    style: customStyleOptionListItem,
    onClick: handleOnClick
  }, item.name);
});
exports.Option = Option;

var _default = memo(component);

exports["default"] = _default;