'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _validator = require('validator');

var _validator2 = _interopRequireDefault(_validator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var email = function email(value) {
  return _validator2.default.isEmail(value);
};

var phone = function phone(value) {
  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'zh-CN';
  return _validator2.default.isMobilePhone(value, locale);
};

var empty = function empty(value) {
  return _validator2.default.isEmpty(value);
};

var number = function number(value) {
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 999999999999;

  var res = _validator2.default.isInt(value, {
    min: parseInt(min),
    max: parseInt(max)
  });
  return res;
};

var url = function url(value) {
  return _validator2.default.isURL(value);
};

var string = function string(value) {
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 999999999999;
  return _validator2.default.isByteLength(value, {
    min: parseInt(min),
    max: parseInt(max)
  });
};

var password = string;

var textarea = function textarea(value) {
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 999999999999;
  return _validator2.default.isByteLength(value, {
    min: parseInt(min),
    max: parseInt(max)
  });
};

var reg = function reg(_reg, val) {
  var err = true;
  if (_reg.test(val)) {
    err = false;
  }
  return err;
};

exports.default = {
  reg: reg,
  email: email,
  phone: phone,
  password: password,
  empty: empty,
  url: url,
  string: string,
  number: number,
  textarea: textarea
};