"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Option = exports.isValidValue = void 0;

var React = _interopRequireWildcard(require("react"));

var _message = _interopRequireDefault(require("./message"));

var _const = require("./const");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
var TYPE = 'radiobox';

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

var component = function component(_ref) {
  var _ref$attributesWrappe = _ref.attributesWrapper,
      attributesWrapper = _ref$attributesWrappe === void 0 ? {} : _ref$attributesWrappe,
      _ref$attributesInputs = _ref.attributesInputs,
      attributesInputs = _ref$attributesInputs === void 0 ? [] : _ref$attributesInputs,
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
      _ref$classNameInput = _ref.classNameInput,
      classNameInput = _ref$classNameInput === void 0 ? '' : _ref$classNameInput,
      _ref$classNameContain = _ref.classNameContainer,
      classNameContainer = _ref$classNameContain === void 0 ? '' : _ref$classNameContain,
      _ref$classNameOptionL = _ref.classNameOptionListItem,
      classNameOptionListItem = _ref$classNameOptionL === void 0 ? '' : _ref$classNameOptionL,
      _ref$customStyleWrapp = _ref.customStyleWrapper,
      customStyleWrapper = _ref$customStyleWrapp === void 0 ? {} : _ref$customStyleWrapp,
      _ref$customStyleConta = _ref.customStyleContainer,
      customStyleContainer = _ref$customStyleConta === void 0 ? {} : _ref$customStyleConta,
      _ref$customStyleInput = _ref.customStyleInput,
      customStyleInput = _ref$customStyleInput === void 0 ? {} : _ref$customStyleInput,
      _ref$customStyleOptio = _ref.customStyleOptionListItem,
      customStyleOptionListItem = _ref$customStyleOptio === void 0 ? {} : _ref$customStyleOptio,
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
  var handleOnChange = useCallback(function (val, e) {
    if (disabled || $el === null) {
      return;
    }

    setInternalValue(val);
    onChange && onChange(val, e);
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

      if (!isValidValue(optionList, internalValue)) {
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
    if (validate) {
      check();
    }
  }, [validate]);
  useEffect(function () {
    if (internalValue && isValidValue(optionList, internalValue)) {
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
  var wrapperClass = "".concat(_const.WRAPPER_CLASS_IDENTITIFIER, " ").concat(classNameWrapper, " ").concat(err && reactInputsValidationCss['error'], " ").concat(successMsg !== '' && !err && reactInputsValidationCss['success'], " ").concat(reactInputsValidationCss["".concat(TYPE, "__wrapper")], " ").concat(disabled && reactInputsValidationCss['disabled']);
  var containerClass = "".concat(classNameContainer, " ").concat(err && reactInputsValidationCss['error'], " ").concat(successMsg !== '' && !err && reactInputsValidationCss['success'], " ").concat(reactInputsValidationCss["".concat(TYPE, "__container")], " ").concat(disabled && reactInputsValidationCss['disabled']);
  var inputClass = "".concat(classNameInput, " ").concat(err && reactInputsValidationCss['error'], " ").concat(successMsg !== '' && !err && reactInputsValidationCss['success'], " ").concat(reactInputsValidationCss["".concat(TYPE, "__input")], " ").concat(disabled && reactInputsValidationCss['disabled']);
  var labelClass = "".concat(err && reactInputsValidationCss['error'], " ").concat(successMsg !== '' && !err && reactInputsValidationCss['success'], " ").concat(reactInputsValidationCss["".concat(TYPE, "__label")], " ").concat(disabled && reactInputsValidationCss['disabled']);
  var optionListItemClass = "".concat(reactInputsValidationCss['button'], " ").concat(_const.OPTION_LIST_ITEM_IDENTITIFIER, " ").concat(classNameOptionListItem, " ").concat(err && reactInputsValidationCss['error'], " ").concat(successMsg !== '' && !err && reactInputsValidationCss['success'], " ").concat(reactInputsValidationCss["".concat(TYPE, "__item")], " ").concat(disabled && reactInputsValidationCss['disabled']);
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

  var optionHtml;

  if (optionList.length) {
    optionHtml = optionList.map(function (i, k) {
      var checked = String(i.id) === String(internalValue) ? true : false;
      return React.createElement(Option, {
        key: k,
        checked: checked,
        id: "react-inputs-validation__radiobox_option-".concat(i.id),
        name: name,
        item: i,
        inputClass: inputClass,
        value: internalValue,
        disabled: disabled,
        optionListItemClass: optionListItemClass,
        customStyleOptionListItem: customStyleOptionListItem,
        customStyleInput: customStyleInput,
        labelClass: labelClass,
        onChange: handleOnChange,
        attributesInput: attributesInputs[k] ? attributesInputs[k] : {}
      });
    });
  }

  return React.createElement("div", _extends({
    ref: $input,
    className: wrapperClass,
    style: customStyleWrapper,
    onClick: handleOnClick,
    onBlur: handleOnBlur,
    onFocus: handleOnFocus
  }, attributesWrapper), React.createElement("div", {
    className: containerClass,
    style: customStyleContainer
  }, optionHtml), msgHtml);
};

var Option = memo(function (_ref2) {
  var _ref2$checked = _ref2.checked,
      checked = _ref2$checked === void 0 ? false : _ref2$checked,
      _ref2$id = _ref2.id,
      id = _ref2$id === void 0 ? '' : _ref2$id,
      _ref2$name = _ref2.name,
      name = _ref2$name === void 0 ? '' : _ref2$name,
      _ref2$optionListItemC = _ref2.optionListItemClass,
      optionListItemClass = _ref2$optionListItemC === void 0 ? '' : _ref2$optionListItemC,
      _ref2$labelClass = _ref2.labelClass,
      labelClass = _ref2$labelClass === void 0 ? '' : _ref2$labelClass,
      _ref2$inputClass = _ref2.inputClass,
      inputClass = _ref2$inputClass === void 0 ? '' : _ref2$inputClass,
      _ref2$value = _ref2.value,
      value = _ref2$value === void 0 ? '' : _ref2$value,
      _ref2$disabled = _ref2.disabled,
      disabled = _ref2$disabled === void 0 ? false : _ref2$disabled,
      _ref2$item = _ref2.item,
      item = _ref2$item === void 0 ? {
    id: '',
    name: ''
  } : _ref2$item,
      _ref2$customStyleOpti = _ref2.customStyleOptionListItem,
      customStyleOptionListItem = _ref2$customStyleOpti === void 0 ? {} : _ref2$customStyleOpti,
      _ref2$customStyleInpu = _ref2.customStyleInput,
      customStyleInput = _ref2$customStyleInpu === void 0 ? {} : _ref2$customStyleInpu,
      _ref2$attributesInput = _ref2.attributesInput,
      attributesInput = _ref2$attributesInput === void 0 ? {} : _ref2$attributesInput,
      _ref2$onChange = _ref2.onChange,
      onChange = _ref2$onChange === void 0 ? function () {} : _ref2$onChange;
  var handleOnChange = useCallback(function (e) {
    onChange(item.id, e);
  }, []);
  return React.createElement("button", {
    type: "button",
    className: optionListItemClass,
    style: customStyleOptionListItem,
    onClick: handleOnChange
  }, React.createElement("input", _extends({
    id: id,
    name: name,
    type: "radio",
    value: value,
    checked: checked,
    disabled: disabled,
    className: checked ? "".concat(reactInputsValidationCss['checked'], " ").concat(inputClass) : "".concat(inputClass),
    onChange: handleOnChange,
    style: customStyleInput
  }, attributesInput)), React.createElement("label", {
    htmlFor: attributesInput.id ? attributesInput.id : id,
    className: checked ? "".concat(reactInputsValidationCss['checked'], " ").concat(labelClass) : "".concat(labelClass)
  }, item.name));
});
exports.Option = Option;

var _default = memo(component);

exports["default"] = _default;