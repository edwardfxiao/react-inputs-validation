'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var empty = function empty(v) {
  return v.replace(/\s/g, '').length ? false : true;
};
var number = function number(v) {
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 999999999999;

  if (!isNumeric(v)) {
    return false;
  }
  return v < parseInt(min) || v > parseInt(max) ? false : true;
};
var reg = function reg(_reg, v) {
  var err = true;
  if (_reg.test(v)) {
    err = false;
  }
  return err;
};
var isNumeric = function isNumeric(v) {
  return !isNaN(parseFloat(v)) && isFinite(v);
};
exports.default = {
  reg: reg,
  empty: empty,
  number: number
};