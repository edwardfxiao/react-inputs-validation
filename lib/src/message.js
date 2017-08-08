'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getEnglishName = function getEnglishName(name) {
  return name = name ? name + ' ' : '';
};

var TEXT_BOX_VALIDATION_ZH_CN = {
  empty: function empty(name) {
    return name + '\u4E0D\u80FD\u4E3A\u7A7A';
  },
  invalid: function invalid(name) {
    return name + '\u683C\u5F0F\u6709\u8BEF';
  },
  invalidFormat: function invalidFormat(name) {
    return name + ' \u4E0D\u662F\u6570\u5B57';
  },
  inBetween: function inBetween(name) {
    return function (min) {
      return function (max) {
        return name + '\u5FC5\u987B\u5728' + min + '-' + max + '\u4E4B\u95F4';
      };
    };
  },
  lessThan: function lessThan(name) {
    return function (min) {
      return name + '\u4E0D\u53EF\u5C11\u4E8E' + min;
    };
  },
  greaterThan: function greaterThan(name) {
    return function (max) {
      return name + '\u4E0D\u53EF\u5927\u4E8E' + max;
    };
  },
  lengthEqual: function lengthEqual(name) {
    return function (length) {
      return name + '\u957F\u5EA6\u5FC5\u987B\u4E3A' + length;
    };
  },
  twoInputsNotEqual: function twoInputsNotEqual() {
    return '\u4E24\u6B21\u8F93\u5165\u4E0D\u4E00\u81F4';
  }
};

var TEXT_BOX_VALIDATION_EN_US = {
  empty: function empty(name) {
    return getEnglishName(name) + 'cannot be empty';
  },
  invalid: function invalid(name) {
    return getEnglishName(name) + 'invalid format';
  },
  invalidFormat: function invalidFormat(name) {
    return getEnglishName(name) + 'is not a number';
  },
  inBetween: function inBetween(name) {
    return function (min) {
      return function (max) {
        return getEnglishName(name) + 'must be ' + min + '-' + max;
      };
    };
  },
  lessThan: function lessThan(name) {
    return function (min) {
      return getEnglishName(name) + 'cannot less than ' + min;
    };
  },
  greaterThan: function greaterThan(name) {
    return function (max) {
      return getEnglishName(name) + 'cannot greater than ' + max;
    };
  },
  lengthEqual: function lengthEqual(name) {
    return function (length) {
      return getEnglishName(name) + 'length must be ' + length;
    };
  },
  twoInputsNotEqual: function twoInputsNotEqual() {
    return 'two inputs are not equal';
  }
};

var CHECK_BOX_VALIDATION_ZH_CN = {
  unchecked: function unchecked(name) {
    return name + '\u5FC5\u987B\u52FE\u9009';
  }
};
var CHECK_BOX_VALIDATION_EN_US = {
  unchecked: function unchecked(name) {
    return getEnglishName(name) + 'must be checked';
  }
};

var message = {
  'zh-CN': {
    textbox: {
      string: TEXT_BOX_VALIDATION_ZH_CN,
      number: TEXT_BOX_VALIDATION_ZH_CN,
      phone: TEXT_BOX_VALIDATION_ZH_CN
    },
    radiobox: {},
    checkbox: CHECK_BOX_VALIDATION_ZH_CN,
    textarea: {}
  },
  'en-US': {
    textbox: {
      string: TEXT_BOX_VALIDATION_EN_US,
      number: TEXT_BOX_VALIDATION_EN_US,
      phone: TEXT_BOX_VALIDATION_EN_US
    },
    radiobox: {},
    checkbox: CHECK_BOX_VALIDATION_EN_US,
    textarea: {}
  }
};

exports.default = message;