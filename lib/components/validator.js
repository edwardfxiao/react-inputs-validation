"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var empty = function empty(v) {
  return v.replace(/\s/g, '').length ? false : true;
};

var number = function number(v, min, max) {
  if (min === null && max === null) {
    return true;
  }

  if (!isNumeric(v)) {
    return false;
  }

  return v < min || v > max ? false : true;
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

var validator = {
  reg: reg,
  empty: empty,
  number: number
};
var _default = validator;
exports["default"] = _default;