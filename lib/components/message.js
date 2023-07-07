"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleCustomErrorMessage = exports.getCustomErrorMessage = exports["default"] = void 0;

var _const = require("./const");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var getEnglishName = function getEnglishName(name) {
  var res = '';

  if (name) {
    res = "".concat(name, " ");
  }

  return res;
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
var SELECT_VALIDATION_EN_US = {
  empty: function empty(name) {
    return "Please select a ".concat(getEnglishName(name));
  }
};
var CHECK_BOX_VALIDATION_EN_US = {
  unchecked: function unchecked(name) {
    return "".concat(getEnglishName(name), "must be checked");
  }
};
var RADIO_BOX_VALIDATION_EN_US = {
  empty: function empty(name) {
    return "Please choose one ".concat(getEnglishName(name));
  }
};
var message = {
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