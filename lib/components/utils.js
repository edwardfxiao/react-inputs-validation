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

var utils = {
  camelize: camelize,
  toCamelCase: toCamelCase,
  getRandomId: getRandomId
};
var _default = utils;
exports["default"] = _default;