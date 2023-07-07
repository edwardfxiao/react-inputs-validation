"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var camelize = function camelize(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
    if (+match === 0) return '';
    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  });
};

var toCamelCase = function toCamelCase(str) {
  return function () {
    var capitalLize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var res = camelize(str);
    return capitalLize ? res.substr(0, 1).toUpperCase() + res.substr(1, res.length) : res;
  };
};

var getRandomId = function getRandomId() {
  return Math.random().toString(36).slice(-8);
};

var getAlphanumeric = function getAlphanumeric(v) {
  var res = '';
  String(v).split('').forEach(function (i) {
    var charCode = i.toLowerCase().charCodeAt(0);

    if (charCode >= 48 && charCode <= 57 || charCode >= 97 && charCode <= 122) {
      res += i;
    }
  });
  return res;
};

var getAlpha = function getAlpha(v) {
  var res = '';
  String(v).split('').forEach(function (i) {
    var charCode = i.toLowerCase().charCodeAt(0);

    if (charCode >= 97 && charCode <= 122) {
      res += i;
    }
  });
  return res;
};

var getNumeric = function getNumeric(v) {
  var res = '';
  String(v).split('').forEach(function (i) {
    var charCode = i.toLowerCase().charCodeAt(0);

    if (charCode >= 48 && charCode <= 57) {
      res += i;
    }
  });
  return res;
};

var arraysEqual = function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (var i = arr1.length; i -= 1;) {
    if (JSON.stringify(arr1[i]) !== JSON.stringify(arr2[i])) return false;
  }

  return true;
};

var replaceSeparator = function replaceSeparator(value, replacee, replacer) {
  var expression = "\\".concat(replacee);
  var removeSeparatorRegEx = new RegExp(expression, 'g');
  return value.replace(removeSeparatorRegEx, replacer);
};

var utils = {
  camelize: camelize,
  toCamelCase: toCamelCase,
  getRandomId: getRandomId,
  getAlphanumeric: getAlphanumeric,
  getAlpha: getAlpha,
  getNumeric: getNumeric,
  arraysEqual: arraysEqual,
  replaceSeparator: replaceSeparator
};
var _default = utils;
exports["default"] = _default;