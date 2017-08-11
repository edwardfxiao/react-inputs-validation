'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var camelize = function camelize(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
    if (+match === 0) return ''; // or if (/\s+/.test(match)) for white spaces
    return index == 0 ? match.toLowerCase() : match.toUpperCase();
  });
};

var toCamelCase = function toCamelCase(str) {
  return function () {
    var capitalLize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var res = camelize(str);
    return capitalLize ? res.substr(0, 1).toUpperCase() + res.substr(1, res.length) : res;
  };
};

exports.toCamelCase = toCamelCase;
exports.camelize = camelize;