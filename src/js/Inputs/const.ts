import * as React from 'react';
const { useEffect, useRef } = React;
export const LOCALE_OPTION_LIST = ['en-US'];
export const REACT_INPUTS_VALIDATION_CUSTOM_ERROR_MESSAGE_EXAMPLE =
  "Invalid window.REACT_INPUTS_VALIDATION['customErrorMessage']. EXAMPLE: window.REACT_INPUTS_VALIDATION={customErrorMessage:{'en-US':{textbox:{empty:function empty(name){return getEnglishName(name)+'cannot be empty'},invalid:function invalid(name){return getEnglishName(name)+'invalid format'},invalidFormat:function invalidFormat(name){return getEnglishName(name)+'is not a number'},inBetween:function inBetween(name){return function(min){return function(max){return getEnglishName(name)+'must be '+min+'-'+max}}},lessThan:function lessThan(name){return function(min){return getEnglishName(name)+'cannot less than '+min}},greaterThan:function greaterThan(name){return function(max){return getEnglishName(name)+'cannot greater than '+max}},lengthEqual:function lengthEqual(name){return function(length){return getEnglishName(name)+'length must be '+length}},twoInputsNotEqual:function twoInputsNotEqual(){return'two inputs are not equal'}},radiobox:{empty:function empty(name){return'Please choose one '+getEnglishName(name)}},checkbox:{unchecked:function unchecked(name){return getEnglishName(name)+'must be checked'}},select:{empty:function empty(name){return'Please select a '+getEnglishName(name)}},textarea:{empty:function empty(name){return getEnglishName(name)+'cannot be empty'},invalid:function invalid(name){return getEnglishName(name)+'invalid format'},invalidFormat:function invalidFormat(name){return getEnglishName(name)+'is not a number'},inBetween:function inBetween(name){return function(min){return function(max){return getEnglishName(name)+'must be '+min+'-'+max}}},lessThan:function lessThan(name){return function(min){return getEnglishName(name)+'cannot less than '+min}},greaterThan:function greaterThan(name){return function(max){return getEnglishName(name)+'cannot greater than '+max}},lengthEqual:function lengthEqual(name){return function(length){return getEnglishName(name)+'length must be '+length}},twoInputsNotEqual:function twoInputsNotEqual(){return'two inputs are not equal'}}}}};";
export const DEFAULT_LOCALE = 'en-US';
export const WRAPPER_CLASS_IDENTITIFIER = 'react-inputs-validation__wrapper_identifier';
export const CONTAINER_CLASS_IDENTITIFIER = 'react-inputs-validation__container_identifier';
export const OPTION_LIST_ITEM_IDENTITIFIER = 'react-inputs-validation__option-list-item_identifier';
export const MSG_CLASS_IDENTITIFIER = 'react-inputs-validation__msg_identifier';
export const usePrevious = (value: any) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};
