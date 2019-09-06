"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.handleCustomErrorMessage = exports.getCustomErrorMessage = void 0;

var _const = require("./const");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var getEnglishName = function getEnglishName(name) {
  var res = '';

  if (name) {
    res = "".concat(name, " ");
  }

  return res;
};

var TEXT_BOX_VALIDATION_ZH_CN = {
  empty: function empty(name) {
    return "".concat(name, "\u4E0D\u80FD\u4E3A\u7A7A");
  },
  invalid: function invalid(name) {
    return "".concat(name, "\u683C\u5F0F\u6709\u8BEF");
  },
  invalidFormat: function invalidFormat(name) {
    return "".concat(name, "\u4E0D\u662F\u6570\u5B57");
  },
  inBetween: function inBetween(name) {
    return function (min) {
      return function (max) {
        return "".concat(name, "\u5FC5\u987B\u5728").concat(min, "-").concat(max, "\u4E4B\u95F4");
      };
    };
  },
  lessThan: function lessThan(name) {
    return function (min) {
      return "".concat(name, "\u4E0D\u53EF\u5C11\u4E8E").concat(min);
    };
  },
  greaterThan: function greaterThan(name) {
    return function (max) {
      return "".concat(name, "\u4E0D\u53EF\u5927\u4E8E").concat(max);
    };
  },
  lengthEqual: function lengthEqual(name) {
    return function (length) {
      return "".concat(name, "\u957F\u5EA6\u5FC5\u987B\u4E3A").concat(length);
    };
  },
  twoInputsNotEqual: function twoInputsNotEqual() {
    return "\u4E24\u6B21\u8F93\u5165\u4E0D\u4E00\u81F4";
  }
};
var TEXT_BOX_VALIDATION_EN_US = {
  empty: function empty(name) {
    return "".concat(getEnglishName(name), "cannot be empty");
  },
  invalid: function invalid(name) {
    return "".concat(getEnglishName(name), "invalid format");
  },
  invalidFormat: function invalidFormat(name) {
    return "".concat(getEnglishName(name), "is not a number");
  },
  inBetween: function inBetween(name) {
    return function (min) {
      return function (max) {
        return "".concat(getEnglishName(name), "must be ").concat(min, "-").concat(max);
      };
    };
  },
  lessThan: function lessThan(name) {
    return function (min) {
      return "".concat(getEnglishName(name), "cannot less than ").concat(min);
    };
  },
  greaterThan: function greaterThan(name) {
    return function (max) {
      return "".concat(getEnglishName(name), "cannot greater than ").concat(max);
    };
  },
  lengthEqual: function lengthEqual(name) {
    return function (length) {
      return "".concat(getEnglishName(name), "length must be ").concat(length);
    };
  },
  twoInputsNotEqual: function twoInputsNotEqual() {
    return "two inputs are not equal";
  }
};
var TEXT_AREA_VALIDATION_ZH_CN = {
  empty: function empty(name) {
    return "".concat(name, "\u4E0D\u80FD\u4E3A\u7A7A");
  },
  invalid: function invalid(name) {
    return "".concat(name, "\u683C\u5F0F\u6709\u8BEF");
  },
  invalidFormat: function invalidFormat(name) {
    return "".concat(name, "\u4E0D\u662F\u6570\u5B57");
  },
  inBetween: function inBetween(name) {
    return function (min) {
      return function (max) {
        return "".concat(name, "\u5FC5\u987B\u5728").concat(min, "-").concat(max, "\u4E4B\u95F4");
      };
    };
  },
  lessThan: function lessThan(name) {
    return function (min) {
      return "".concat(name, "\u4E0D\u53EF\u5C11\u4E8E").concat(min);
    };
  },
  greaterThan: function greaterThan(name) {
    return function (max) {
      return "".concat(name, "\u4E0D\u53EF\u5927\u4E8E").concat(max);
    };
  },
  lengthEqual: function lengthEqual(name) {
    return function (length) {
      return "".concat(name, "\u957F\u5EA6\u5FC5\u987B\u4E3A").concat(length);
    };
  },
  twoInputsNotEqual: function twoInputsNotEqual() {
    return "\u4E24\u6B21\u8F93\u5165\u4E0D\u4E00\u81F4";
  }
};
var TEXT_AREA_VALIDATION_EN_US = {
  empty: function empty(name) {
    return "".concat(getEnglishName(name), "cannot be empty");
  },
  invalid: function invalid(name) {
    return "".concat(getEnglishName(name), "invalid format");
  },
  invalidFormat: function invalidFormat(name) {
    return "".concat(getEnglishName(name), "is not a number");
  },
  inBetween: function inBetween(name) {
    return function (min) {
      return function (max) {
        return "".concat(getEnglishName(name), "must be ").concat(min, "-").concat(max);
      };
    };
  },
  lessThan: function lessThan(name) {
    return function (min) {
      return "".concat(getEnglishName(name), "cannot less than ").concat(min);
    };
  },
  greaterThan: function greaterThan(name) {
    return function (max) {
      return "".concat(getEnglishName(name), "cannot greater than ").concat(max);
    };
  },
  lengthEqual: function lengthEqual(name) {
    return function (length) {
      return "".concat(getEnglishName(name), "length must be ").concat(length);
    };
  },
  twoInputsNotEqual: function twoInputsNotEqual() {
    return "two inputs are not equal";
  }
};
var SELECT_VALIDATION_ZH_CN = {
  empty: function empty(name) {
    return "\u8BF7\u9009\u62E9\u4E00\u4E2A".concat(name);
  }
};
var SELECT_VALIDATION_EN_US = {
  empty: function empty(name) {
    return "Please select a ".concat(getEnglishName(name));
  }
};
var CHECK_BOX_VALIDATION_ZH_CN = {
  unchecked: function unchecked(name) {
    return "".concat(name, "\u5FC5\u987B\u52FE\u9009");
  }
};
var CHECK_BOX_VALIDATION_EN_US = {
  unchecked: function unchecked(name) {
    return "".concat(getEnglishName(name), "must be checked");
  }
};
var RADIO_BOX_VALIDATION_ZH_CN = {
  empty: function empty(name) {
    return "\u5FC5\u987B\u52FE\u9009\u4E00\u4E2A".concat(name);
  }
};
var RADIO_BOX_VALIDATION_EN_US = {
  empty: function empty(name) {
    return "Please choose one ".concat(getEnglishName(name));
  }
};
var message = {
  'zh-CN': {
    textbox: TEXT_BOX_VALIDATION_ZH_CN,
    radiobox: RADIO_BOX_VALIDATION_ZH_CN,
    checkbox: CHECK_BOX_VALIDATION_ZH_CN,
    select: SELECT_VALIDATION_ZH_CN,
    textarea: TEXT_AREA_VALIDATION_ZH_CN
  },
  'en-US': {
    textbox: TEXT_BOX_VALIDATION_EN_US,
    radiobox: RADIO_BOX_VALIDATION_EN_US,
    checkbox: CHECK_BOX_VALIDATION_EN_US,
    select: SELECT_VALIDATION_EN_US,
    textarea: TEXT_AREA_VALIDATION_EN_US
  }
};

var getCustomErrorMessage = function getCustomErrorMessage(o, m) {
  if (!o || _typeof(o) !== 'object' || o.constructor !== Object || !Object.keys(o).length) {
    console.error(_const.REACT_INPUTS_VALIDATION_CUSTOM_ERROR_MESSAGE_EXAMPLE);
    return false;
  }

  Object.keys(o).map(function (i) {
    if (!m[i]) {
      m[i] = o[i];
    } else {
      if (Object.keys(o[i]).length) {
        Object.keys(o[i]).map(function (j) {
          if (Object.keys(o[i][j]).length) {
            Object.keys(o[i][j]).map(function (k) {
              m[i][j][k] = o[i][j][k];
            });
          }
        });
      }
    }
  });
  return m;
};

exports.getCustomErrorMessage = getCustomErrorMessage;

var handleCustomErrorMessage = function handleCustomErrorMessage(message, w) {
  var res;

  if (typeof w !== 'undefined') {
    if (w.REACT_INPUTS_VALIDATION && w.REACT_INPUTS_VALIDATION['customErrorMessage']) {
      res = getCustomErrorMessage(w.REACT_INPUTS_VALIDATION['customErrorMessage'], message);
    }
  }

  if (typeof res === 'undefined' || res === false) {
    return message;
  }

  return res;
};

exports.handleCustomErrorMessage = handleCustomErrorMessage;

if (typeof window !== 'undefined') {
  window.REACT_INPUTS_VALIDATION = window.REACT_INPUTS_VALIDATION || {};
  message = handleCustomErrorMessage(message, window);
}

var _default = message;
exports["default"] = _default;