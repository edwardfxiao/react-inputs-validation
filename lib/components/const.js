"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePrevious = exports.MSG_CLASS_IDENTITIFIER = exports.OPTION_LIST_ITEM_IDENTITIFIER = exports.CONTAINER_CLASS_IDENTITIFIER = exports.WRAPPER_CLASS_IDENTITIFIER = exports.DEFAULT_LOCALE = exports.REACT_INPUTS_VALIDATION_CUSTOM_ERROR_MESSAGE_EXAMPLE = exports.LOCALE_OPTION_LIST = void 0;

var React = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

var useEffect = React.useEffect,
    useRef = React.useRef;
var LOCALE_OPTION_LIST = ['en-US', 'zh-CN'];
exports.LOCALE_OPTION_LIST = LOCALE_OPTION_LIST;
var REACT_INPUTS_VALIDATION_CUSTOM_ERROR_MESSAGE_EXAMPLE = "Invalid window.REACT_INPUTS_VALIDATION['customErrorMessage']. EXAMPLE: window.REACT_INPUTS_VALIDATION={customErrorMessage:{'en-US':{textbox:{empty:function empty(name){return getEnglishName(name)+'cannot be empty'},invalid:function invalid(name){return getEnglishName(name)+'invalid format'},invalidFormat:function invalidFormat(name){return getEnglishName(name)+'is not a number'},inBetween:function inBetween(name){return function(min){return function(max){return getEnglishName(name)+'must be '+min+'-'+max}}},lessThan:function lessThan(name){return function(min){return getEnglishName(name)+'cannot less than '+min}},greaterThan:function greaterThan(name){return function(max){return getEnglishName(name)+'cannot greater than '+max}},lengthEqual:function lengthEqual(name){return function(length){return getEnglishName(name)+'length must be '+length}},twoInputsNotEqual:function twoInputsNotEqual(){return'two inputs are not equal'}},radiobox:{empty:function empty(name){return'Please choose one '+getEnglishName(name)}},checkbox:{unchecked:function unchecked(name){return getEnglishName(name)+'must be checked'}},select:{empty:function empty(name){return'Please select a '+getEnglishName(name)}},textarea:{empty:function empty(name){return getEnglishName(name)+'cannot be empty'},invalid:function invalid(name){return getEnglishName(name)+'invalid format'},invalidFormat:function invalidFormat(name){return getEnglishName(name)+'is not a number'},inBetween:function inBetween(name){return function(min){return function(max){return getEnglishName(name)+'must be '+min+'-'+max}}},lessThan:function lessThan(name){return function(min){return getEnglishName(name)+'cannot less than '+min}},greaterThan:function greaterThan(name){return function(max){return getEnglishName(name)+'cannot greater than '+max}},lengthEqual:function lengthEqual(name){return function(length){return getEnglishName(name)+'length must be '+length}},twoInputsNotEqual:function twoInputsNotEqual(){return'two inputs are not equal'}}}}};";
exports.REACT_INPUTS_VALIDATION_CUSTOM_ERROR_MESSAGE_EXAMPLE = REACT_INPUTS_VALIDATION_CUSTOM_ERROR_MESSAGE_EXAMPLE;
var DEFAULT_LOCALE = 'en-US';
exports.DEFAULT_LOCALE = DEFAULT_LOCALE;
var WRAPPER_CLASS_IDENTITIFIER = 'react-inputs-validation__wrapper_identifier';
exports.WRAPPER_CLASS_IDENTITIFIER = WRAPPER_CLASS_IDENTITIFIER;
var CONTAINER_CLASS_IDENTITIFIER = 'react-inputs-validation__container_identifier';
exports.CONTAINER_CLASS_IDENTITIFIER = CONTAINER_CLASS_IDENTITIFIER;
var OPTION_LIST_ITEM_IDENTITIFIER = 'react-inputs-validation__option-list-item_identifier';
exports.OPTION_LIST_ITEM_IDENTITIFIER = OPTION_LIST_ITEM_IDENTITIFIER;
var MSG_CLASS_IDENTITIFIER = 'react-inputs-validation__msg_identifier';
exports.MSG_CLASS_IDENTITIFIER = MSG_CLASS_IDENTITIFIER;

var usePrevious = function usePrevious(value) {
  var ref = useRef();
  useEffect(function () {
    ref.current = value;
  });
  return ref.current;
};

exports.usePrevious = usePrevious;