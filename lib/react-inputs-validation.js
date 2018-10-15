(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["react-inputs-validation"] = factory(require("react"));
	else
		root["react-inputs-validation"] = factory(root["React"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var LOCALE_OPTION_LIST = ['en-US', 'zh-CN'];
var REACT_INPUTS_VALIDATION_CUSTOM_ERROR_MESSAGE_EXAMPLE = "Invalid window.REACT_INPUTS_VALIDATION['customErrorMessage']. EXAMPLE: window.REACT_INPUTS_VALIDATION={customErrorMessage:{'en-US':{textbox:{empty:function empty(name){return getEnglishName(name)+'cannot be empty'},invalid:function invalid(name){return getEnglishName(name)+'invalid format'},invalidFormat:function invalidFormat(name){return getEnglishName(name)+'is not a number'},inBetween:function inBetween(name){return function(min){return function(max){return getEnglishName(name)+'must be '+min+'-'+max}}},lessThan:function lessThan(name){return function(min){return getEnglishName(name)+'cannot less than '+min}},greaterThan:function greaterThan(name){return function(max){return getEnglishName(name)+'cannot greater than '+max}},lengthEqual:function lengthEqual(name){return function(length){return getEnglishName(name)+'length must be '+length}},twoInputsNotEqual:function twoInputsNotEqual(){return'two inputs are not equal'}},radiobox:{empty:function empty(name){return'Please choose one '+getEnglishName(name)}},checkbox:{unchecked:function unchecked(name){return getEnglishName(name)+'must be checked'}},select:{empty:function empty(name){return'Please select a '+getEnglishName(name)}},textarea:{empty:function empty(name){return getEnglishName(name)+'cannot be empty'},invalid:function invalid(name){return getEnglishName(name)+'invalid format'},invalidFormat:function invalidFormat(name){return getEnglishName(name)+'is not a number'},inBetween:function inBetween(name){return function(min){return function(max){return getEnglishName(name)+'must be '+min+'-'+max}}},lessThan:function lessThan(name){return function(min){return getEnglishName(name)+'cannot less than '+min}},greaterThan:function greaterThan(name){return function(max){return getEnglishName(name)+'cannot greater than '+max}},lengthEqual:function lengthEqual(name){return function(length){return getEnglishName(name)+'length must be '+length}},twoInputsNotEqual:function twoInputsNotEqual(){return'two inputs are not equal'}}}}};";
var DEFAULT_LOCALE = 'en-US';
exports.LOCALE_OPTION_LIST = LOCALE_OPTION_LIST;
exports.REACT_INPUTS_VALIDATION_CUSTOM_ERROR_MESSAGE_EXAMPLE = REACT_INPUTS_VALIDATION_CUSTOM_ERROR_MESSAGE_EXAMPLE;
exports.DEFAULT_LOCALE = DEFAULT_LOCALE;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(12)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(15)();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _const = __webpack_require__(0);

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
    return name + '\u4E0D\u662F\u6570\u5B57';
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

var TEXT_AREA_VALIDATION_ZH_CN = {
  empty: function empty(name) {
    return name + '\u4E0D\u80FD\u4E3A\u7A7A';
  },
  invalid: function invalid(name) {
    return name + '\u683C\u5F0F\u6709\u8BEF';
  },
  invalidFormat: function invalidFormat(name) {
    return name + '\u4E0D\u662F\u6570\u5B57';
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

var TEXT_AREA_VALIDATION_EN_US = {
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

var SELECT_VALIDATION_ZH_CN = {
  empty: function empty(name) {
    return '\u8BF7\u9009\u62E9\u4E00\u4E2A' + name;
  }
};

var SELECT_VALIDATION_EN_US = {
  empty: function empty(name) {
    return 'Please select a ' + getEnglishName(name);
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

var RADIO_BOX_VALIDATION_ZH_CN = {
  empty: function empty(name) {
    return '\u5FC5\u987B\u52FE\u9009\u4E00\u4E2A' + name;
  }
};

var RADIO_BOX_VALIDATION_EN_US = {
  empty: function empty(name) {
    return 'Please choose one ' + getEnglishName(name);
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
  if (!o || (typeof o === 'undefined' ? 'undefined' : _typeof(o)) !== 'object' || o.constructor !== Object || !Object.keys(o).length) {
    console.error(_const.REACT_INPUTS_VALIDATION_CUSTOM_ERROR_message_EXAMPLE);
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

var handleCustomErrorMessage = function handleCustomErrorMessage(message, w) {
  var res = void 0;
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

message = handleCustomErrorMessage(message, window);

exports.default = message;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"ellipsis":"react-inputs-validation__ellipsis___3-Api","textbox__wrapper":"react-inputs-validation__textbox__wrapper___3tnXv","textbox__container":"react-inputs-validation__textbox__container___3KXOM","textbox__input":"react-inputs-validation__textbox__input___20hDL","error":"react-inputs-validation__error___2aXSp","success":"react-inputs-validation__success___3TpwE","disabled":"react-inputs-validation__disabled___1-57g","msg":"react-inputs-validation__msg___pxv8o","textarea__wrapper":"react-inputs-validation__textarea__wrapper___35GhF","textarea__container":"react-inputs-validation__textarea__container___2fbGp","textarea__input":"react-inputs-validation__textarea__input___1CFm_","radiobox__wrapper":"react-inputs-validation__radiobox__wrapper___1zZ30","radiobox__container":"react-inputs-validation__radiobox__container___FD4vb","radiobox__input":"react-inputs-validation__radiobox__input___2uX2-","radiobox__label":"react-inputs-validation__radiobox__label___2tQsB","checked":"react-inputs-validation__checked___2O0Ju","radiobox__item":"react-inputs-validation__radiobox__item___ejuz1","checkbox__wrapper":"react-inputs-validation__checkbox__wrapper___1c1rD","checkbox__input":"react-inputs-validation__checkbox__input___1yF4X","checkbox__container":"react-inputs-validation__checkbox__container___3I1rX","checkbox__box":"react-inputs-validation__checkbox__box___1uj8A","box":"react-inputs-validation__box___3E9nu","select__wrapper":"react-inputs-validation__select__wrapper___1B4OH","select__input":"react-inputs-validation__select__input___3h-P7","select__container":"react-inputs-validation__select__container___3jgUR","select__options-item":"react-inputs-validation__select__options-item___30yY4","select__options-item-show-cursor":"react-inputs-validation__select__options-item-show-cursor___1ZT3b","select__no-mouse":"react-inputs-validation__select__no-mouse___2uRg6","select__hover-active":"react-inputs-validation__select__hover-active___2z1MQ","active":"react-inputs-validation__active___3eZBB","select__options-container-animate":"react-inputs-validation__select__options-container-animate___2Rm--","show":"react-inputs-validation__show___2NI3u","select__options-container":"react-inputs-validation__select__options-container___d54qE","select__dropdown":"react-inputs-validation__select__dropdown___11yDr","select__dropdown-icon":"react-inputs-validation__select__dropdown-icon___1T5r2","select__dropdown-name":"react-inputs-validation__select__dropdown-name___3hghL","select__dropdown-icon-container":"react-inputs-validation__select__dropdown-icon-container___2ild-"};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Select = exports.Checkbox = exports.Radiobox = exports.Textarea = exports.Textbox = undefined;

var _Textbox = __webpack_require__(11);

var _Textbox2 = _interopRequireDefault(_Textbox);

var _Textarea = __webpack_require__(16);

var _Textarea2 = _interopRequireDefault(_Textarea);

var _Radiobox = __webpack_require__(17);

var _Radiobox2 = _interopRequireDefault(_Radiobox);

var _Checkbox = __webpack_require__(18);

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _Select = __webpack_require__(19);

var _Select2 = _interopRequireDefault(_Select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (typeof window !== 'undefined') {
  window.Textbox = _Textbox2.default;
  window.Textarea = _Textarea2.default;
  window.Radiobox = _Radiobox2.default;
  window.Checkbox = _Checkbox2.default;
  window.Select = _Select2.default;
}
exports.Textbox = _Textbox2.default;
exports.Textarea = _Textarea2.default;
exports.Radiobox = _Radiobox2.default;
exports.Checkbox = _Checkbox2.default;
exports.Select = _Select2.default;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(3);

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = __webpack_require__(8);

var _message = __webpack_require__(4);

var _message2 = _interopRequireDefault(_message);

var _validator = __webpack_require__(9);

var _validator2 = _interopRequireDefault(_validator);

var _const = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var STYLES = {};
try {
  STYLES = __webpack_require__(5);
} catch (ex) {}
var TYPE = 'textbox';
var VALIDATE_OPTION_TYPE_LIST = ['string', 'number'];
var getDefaultValidationOption = function getDefaultValidationOption(obj) {
  var reg = obj.reg,
      min = obj.min,
      max = obj.max,
      type = obj.type,
      name = obj.name,
      check = obj.check,
      length = obj.length,
      regMsg = obj.regMsg,
      compare = obj.compare,
      required = obj.required,
      showMsg = obj.showMsg,
      locale = obj.locale,
      msgOnError = obj.msgOnError,
      msgOnSuccess = obj.msgOnSuccess,
      customFunc = obj.customFunc;

  locale = typeof locale !== 'undefined' ? locale : _const.DEFAULT_LOCALE;
  reg = typeof reg !== 'undefined' ? reg : '';
  min = typeof min !== 'undefined' ? min : 0;
  max = typeof max !== 'undefined' ? max : 0;
  type = typeof type !== 'undefined' ? type : 'string';
  name = typeof name !== 'undefined' ? name : '';
  check = typeof check !== 'undefined' ? check : true;
  showMsg = typeof showMsg !== 'undefined' ? showMsg : true;
  length = typeof length !== 'undefined' ? length : 0;
  regMsg = typeof regMsg !== 'undefined' ? regMsg : '';
  compare = typeof compare !== 'undefined' ? compare : '';
  required = typeof required !== 'undefined' ? required : true;
  msgOnError = typeof msgOnError !== 'undefined' ? msgOnError : '';
  msgOnSuccess = typeof msgOnSuccess !== 'undefined' ? msgOnSuccess : '';
  return {
    reg: reg,
    min: min,
    max: max,
    type: type,
    name: name,
    check: check,
    length: length,
    regMsg: regMsg,
    locale: locale,
    compare: compare,
    required: required,
    showMsg: showMsg,
    msgOnError: msgOnError,
    msgOnSuccess: msgOnSuccess,
    customFunc: customFunc
  };
};

var Index = function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index(props) {
    _classCallCheck(this, Index);

    var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));

    _this.state = {
      err: false,
      msg: '',
      successMsg: undefined
    };
    _this.onChange = _this.onChange.bind(_this);
    _this.onBlur = _this.onBlur.bind(_this);
    _this.onKeyUp = _this.onKeyUp.bind(_this);
    _this.onFocus = _this.onFocus.bind(_this);
    return _this;
  }

  _createClass(Index, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.validate == false && nextProps.validate == true) {
        this.check();
      }
    }
  }, {
    key: 'onChange',
    value: function onChange(e) {
      var v = this.input.value;
      if (this.props.maxLength != '') {
        if (v.length > Number(this.props.maxLength)) {
          return;
        }
      }

      var _getDefaultValidation = getDefaultValidationOption(this.props.validationOption),
          type = _getDefaultValidation.type;
      // FORMAT NUMBER


      if (type == VALIDATE_OPTION_TYPE_LIST[1]) {
        v = this.autoFormatNumber(v);
      }
      var onChange = this.props.onChange;

      onChange && onChange(v, e);
      if (this.state.err) {
        this.setState({ err: false });
      } else {
        this.setState({ successMsg: undefined });
      }
    }
  }, {
    key: 'onBlur',
    value: function onBlur(e) {
      var onBlur = this.props.onBlur;

      if (onBlur) {
        this.check();
        onBlur(e);
      }
    }
  }, {
    key: 'onFocus',
    value: function onFocus(e) {
      var onFocus = this.props.onFocus;

      if (onFocus) {
        this.check();
        onFocus(e);
      }
    }
  }, {
    key: 'onKeyUp',
    value: function onKeyUp(e) {
      var onKeyUp = this.props.onKeyUp;

      if (onKeyUp) {
        this.check();
        onKeyUp(e);
      }
    }
  }, {
    key: 'check',
    value: function check(inputValue) {
      var validationOption = this.props.validationOption;

      var _getDefaultValidation2 = getDefaultValidationOption(validationOption),
          reg = _getDefaultValidation2.reg,
          min = _getDefaultValidation2.min,
          max = _getDefaultValidation2.max,
          type = _getDefaultValidation2.type,
          name = _getDefaultValidation2.name,
          check = _getDefaultValidation2.check,
          length = _getDefaultValidation2.length,
          regMsg = _getDefaultValidation2.regMsg,
          locale = _getDefaultValidation2.locale,
          compare = _getDefaultValidation2.compare,
          required = _getDefaultValidation2.required,
          msgOnSuccess = _getDefaultValidation2.msgOnSuccess,
          customFunc = _getDefaultValidation2.customFunc;

      if (!check) {
        return;
      }
      if (type) {
        if (VALIDATE_OPTION_TYPE_LIST.indexOf(type) != -1) {
          if (!_message2.default[locale] || !_message2.default[locale][TYPE]) {
            console.error(_const.REACT_INPUTS_VALIDATION_CUSTOM_ERROR_MESSAGE_EXAMPLE);
            return;
          }
          var Msg = _message2.default[locale][TYPE];
          var value = inputValue || this.input.value;
          var nameText = name ? name : '';
          var msg = '';
          // CHECK EMPTY
          if (required) {
            if (_validator2.default.empty(value)) {
              this.handleCheckEnd(true, Msg.empty ? Msg.empty(nameText) : '');
              return;
            }
          }
          if (String(value) != '') {
            // CHECK REGEX
            if (reg) {
              if (_validator2.default['reg'](reg, value)) {
                msg = regMsg != '' ? regMsg : Msg.invalid ? Msg.invalid(nameText) : '';
                this.handleCheckEnd(true, msg);
                return;
              }
            }
            // CHECK STRING
            if (type === VALIDATE_OPTION_TYPE_LIST[0]) {
              if (min || max) {
                if (min && max) {
                  if (String(value).length < min || String(value).length > max) {
                    this.handleCheckEnd(true, Msg.inBetween ? Msg.inBetween(nameText)(min)(max) : '');
                    return;
                  }
                } else {
                  if (min) {
                    if (String(value).length < min) {
                      this.handleCheckEnd(true, Msg.lessThan ? Msg.lessThan(nameText)(min) : '');
                      return;
                    }
                  }
                  if (max) {
                    if (String(value).length > max) {
                      this.handleCheckEnd(true, Msg.greaterThan ? Msg.greaterThan(nameText)(max) : '');
                      return;
                    }
                  }
                }
              }
              if (length) {
                if (String(value).length != length) {
                  this.handleCheckEnd(true, Msg.lengthEqual ? Msg.lengthEqual(nameText)(length) : '');
                  return;
                }
              }
            }
            // CHECK NUMBER
            if (type == VALIDATE_OPTION_TYPE_LIST[1]) {
              if (!_validator2.default[type](value)) {
                this.handleCheckEnd(true, Msg.invalid ? Msg.invalid(nameText) : '');
                return;
              }
              if (min || max) {
                if (min && max) {
                  if (!_validator2.default[type](value, min, max)) {
                    this.handleCheckEnd(true, Msg.inBetween ? Msg.inBetween(nameText)(min)(max) : '');
                    return;
                  }
                } else {
                  if (min) {
                    if (!_validator2.default[type](value, min)) {
                      this.handleCheckEnd(true, Msg.lessThan ? Msg.lessThan(nameText)(min) : '');
                      return;
                    }
                  }
                  if (max) {
                    if (!_validator2.default[type](value, 0, max)) {
                      this.handleCheckEnd(true, Msg.greaterThan ? Msg.greaterThan(nameText)(max) : '');
                      return;
                    }
                  }
                }
              }
              if (length) {
                if (String(value).length != length) {
                  this.handleCheckEnd(true, Msg.lengthEqual ? Msg.lengthEqual(nameText)(length) : '');
                  return;
                }
              }
            }
            // CHECK EQUAL
            if (compare && compare != '') {
              if (value != compare) {
                this.handleCheckEnd(true, Msg.twoInputsNotEqual ? Msg.twoInputsNotEqual() : '');
                return;
              }
            }
          }
          // CHECK CUSTOM FUNCTION
          if (customFunc && typeof customFunc === 'function') {
            var customFuncResult = customFunc(value);
            if (customFuncResult !== true) {
              this.handleCheckEnd(true, customFuncResult);
              return;
            }
          }
          if (msgOnSuccess) {
            this.setState({ successMsg: msgOnSuccess });
          }
          this.handleCheckEnd(false, msgOnSuccess);
        } else {
          console.error('The valid ' + (0, _utils.toCamelCase)(TYPE)(true) + ' "type" options in validationOption are [' + VALIDATE_OPTION_TYPE_LIST.map(function (i) {
            return i;
          }) + ']');
        }
      } else {
        console.error('Please provide "type" in validationOption');
      }
    }
  }, {
    key: 'autoFormatNumber',
    value: function autoFormatNumber(v) {
      var DOT = '.';
      v = String(v);
      var res = '';
      var hasDot = false;
      v.split('').filter(function (i) {
        var charCode = i.toLowerCase().charCodeAt(0);
        if (charCode >= 48 && charCode <= 57 || charCode == 46 && !hasDot) {
          if (charCode == 46) {
            hasDot = true;
          }
          res += i;
        }
      });
      if (res.length && res[0] == DOT) {
        res = '0' + res;
      }
      return res;
    }
  }, {
    key: 'handleCheckEnd',
    value: function handleCheckEnd(err, msg) {
      if (err && getDefaultValidationOption(this.props.validationOption).msgOnError) {
        msg = getDefaultValidationOption(this.props.validationOption).msgOnError;
      }
      this.setState({ err: err, msg: msg });
      var validationCallback = this.props.validationCallback;

      validationCallback && validationCallback(err);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          tabIndex = _props.tabIndex,
          id = _props.id,
          name = _props.name,
          type = _props.type,
          value = _props.value,
          disabled = _props.disabled,
          maxLength = _props.maxLength,
          placeholder = _props.placeholder,
          classNameWrapper = _props.classNameWrapper,
          classNameContainer = _props.classNameContainer,
          classNameInput = _props.classNameInput,
          customStyleWrapper = _props.customStyleWrapper,
          customStyleContainer = _props.customStyleContainer,
          customStyleInput = _props.customStyleInput,
          validationOption = _props.validationOption;
      var _state = this.state,
          err = _state.err,
          msg = _state.msg,
          successMsg = _state.successMsg;


      var wrapperClass = (0, _classnames2.default)(classNameWrapper, STYLES['textbox__wrapper'], err && STYLES['error'], successMsg && !err && STYLES['success'], disabled && STYLES['disabled']);

      var containerClass = (0, _classnames2.default)(classNameContainer, STYLES['textbox__container'], err && STYLES['error'], successMsg && !err && STYLES['success'], disabled && STYLES['disabled']);

      var inputClass = (0, _classnames2.default)(classNameInput, STYLES['textbox__input'], err && STYLES['error'], successMsg && !err && STYLES['success'], disabled && STYLES['disabled']);

      var errMsgClass = (0, _classnames2.default)(STYLES['msg'], err && STYLES['error']);
      var successMsgClass = (0, _classnames2.default)(STYLES['msg'], !err && STYLES['success']);

      var msgHtml = void 0;
      if (getDefaultValidationOption(validationOption).showMsg && err && msg) {
        msgHtml = _react2.default.createElement(
          'div',
          { className: errMsgClass },
          msg
        );
      }
      if (getDefaultValidationOption(validationOption).showMsg && !err && successMsg) {
        msgHtml = _react2.default.createElement(
          'div',
          { className: successMsgClass },
          successMsg
        );
      }
      return _react2.default.createElement(
        'div',
        { className: wrapperClass, style: customStyleWrapper },
        _react2.default.createElement(
          'div',
          { className: containerClass, style: customStyleContainer },
          _react2.default.createElement('input', {
            tabIndex: tabIndex,
            id: id,
            name: name,
            type: type,
            value: value,
            disabled: disabled,
            maxLength: maxLength,
            onBlur: this.onBlur,
            onKeyUp: this.onKeyUp,
            onFocus: this.onFocus,
            className: inputClass,
            onChange: this.onChange,
            style: customStyleInput,
            placeholder: placeholder,
            ref: function ref(_ref) {
              return _this2.input = _ref;
            }
          })
        ),
        msgHtml
      );
    }
  }]);

  return Index;
}(_react2.default.Component);

Index.defaultProps = {
  tabIndex: -1,
  id: '',
  name: '',
  type: 'text',
  value: '',
  disabled: false,
  validate: false,
  maxLength: '',
  placeholder: '',
  classNameInput: '',
  classNameWrapper: '',
  classNameContainer: '',
  customStyleInput: {},
  customStyleWrapper: {},
  customStyleContainer: {},
  validationOption: {},
  onChange: function onChange() {}
};

Index.propTypes = {
  tabIndex: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  id: _propTypes2.default.string,
  name: _propTypes2.default.string,
  type: _propTypes2.default.string.isRequired,
  value: _propTypes2.default.string.isRequired,
  disabled: _propTypes2.default.bool,
  validate: _propTypes2.default.bool,
  maxLength: _propTypes2.default.string,
  placeholder: _propTypes2.default.string,
  classNameInput: _propTypes2.default.string,
  classNameWrapper: _propTypes2.default.string,
  classNameContainer: _propTypes2.default.string,
  customStyleInput: _propTypes2.default.object,
  customStyleWrapper: _propTypes2.default.object,
  customStyleContainer: _propTypes2.default.object,
  validationOption: _propTypes2.default.object,
  onChange: _propTypes2.default.func.isRequired,
  onBlur: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  onKeyUp: _propTypes2.default.func,
  validationCallback: _propTypes2.default.func
};

exports.default = Index;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var assign = __webpack_require__(13);

var ReactPropTypesSecret = __webpack_require__(7);
var checkPropTypes = __webpack_require__(14);

var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret = __webpack_require__(7);
  var loggedTypeFailures = {};

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          )

        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

module.exports = checkPropTypes;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(7);

function emptyFunction() {}

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(3);

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = __webpack_require__(8);

var _message = __webpack_require__(4);

var _message2 = _interopRequireDefault(_message);

var _validator = __webpack_require__(9);

var _validator2 = _interopRequireDefault(_validator);

var _const = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var STYLES = {};
try {
  STYLES = __webpack_require__(5);
} catch (ex) {}
var TYPE = 'textarea';
var VALIDATE_OPTION_TYPE_LIST = ['string'];
var getDefaultValidationOption = function getDefaultValidationOption(obj) {
  var reg = obj.reg,
      min = obj.min,
      max = obj.max,
      type = obj.type,
      name = obj.name,
      check = obj.check,
      length = obj.length,
      regMsg = obj.regMsg,
      required = obj.required,
      showMsg = obj.showMsg,
      locale = obj.locale,
      msgOnError = obj.msgOnError,
      msgOnSuccess = obj.msgOnSuccess,
      customFunc = obj.customFunc;

  locale = typeof locale !== 'undefined' ? locale : _const.DEFAULT_LOCALE;
  reg = typeof reg !== 'undefined' ? reg : '';
  min = typeof min !== 'undefined' ? min : 0;
  max = typeof max !== 'undefined' ? max : 0;
  type = typeof type !== 'undefined' ? type : 'string';
  name = typeof name !== 'undefined' ? name : '';
  check = typeof check !== 'undefined' ? check : true;
  showMsg = typeof showMsg !== 'undefined' ? showMsg : true;
  length = typeof length !== 'undefined' ? length : 0;
  regMsg = typeof regMsg !== 'undefined' ? regMsg : '';
  required = typeof required !== 'undefined' ? required : true;
  msgOnError = typeof msgOnError !== 'undefined' ? msgOnError : '';
  msgOnSuccess = typeof msgOnSuccess !== 'undefined' ? msgOnSuccess : '';
  return {
    reg: reg,
    min: min,
    max: max,
    type: type,
    name: name,
    check: check,
    length: length,
    regMsg: regMsg,
    locale: locale,
    required: required,
    showMsg: showMsg,
    msgOnError: msgOnError,
    msgOnSuccess: msgOnSuccess,
    customFunc: customFunc
  };
};

var Index = function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index(props) {
    _classCallCheck(this, Index);

    var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));

    _this.state = {
      err: false,
      msg: '',
      successMsg: undefined
    };
    _this.onChange = _this.onChange.bind(_this);
    _this.onBlur = _this.onBlur.bind(_this);
    _this.onKeyUp = _this.onKeyUp.bind(_this);
    _this.onFocus = _this.onFocus.bind(_this);
    return _this;
  }

  _createClass(Index, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.validate == false && nextProps.validate == true) {
        this.check();
      }
    }
  }, {
    key: 'onChange',
    value: function onChange(e) {
      if (this.props.maxLength != '') {
        if (this.input.value.length > Number(this.props.maxLength)) {
          return;
        }
      }
      var onChange = this.props.onChange;

      onChange && onChange(this.input.value, e);
      if (this.state.err) {
        this.setState({ err: false });
      } else {
        this.setState({ successMsg: undefined });
      }
    }
  }, {
    key: 'onBlur',
    value: function onBlur(e) {
      var onBlur = this.props.onBlur;

      if (onBlur) {
        this.check();
        onBlur(e);
      }
    }
  }, {
    key: 'onFocus',
    value: function onFocus(e) {
      var onFocus = this.props.onFocus;

      if (onFocus) {
        this.check();
        onFocus(e);
      }
    }
  }, {
    key: 'onKeyUp',
    value: function onKeyUp(e) {
      var onKeyUp = this.props.onKeyUp;

      if (onKeyUp) {
        this.check();
        onKeyUp(e);
      }
    }
  }, {
    key: 'check',
    value: function check(inputValue) {
      var _getDefaultValidation = getDefaultValidationOption(this.props.validationOption),
          reg = _getDefaultValidation.reg,
          min = _getDefaultValidation.min,
          max = _getDefaultValidation.max,
          type = _getDefaultValidation.type,
          name = _getDefaultValidation.name,
          check = _getDefaultValidation.check,
          length = _getDefaultValidation.length,
          regMsg = _getDefaultValidation.regMsg,
          locale = _getDefaultValidation.locale,
          required = _getDefaultValidation.required,
          msgOnSuccess = _getDefaultValidation.msgOnSuccess,
          customFunc = _getDefaultValidation.customFunc;

      if (!check) {
        return;
      }
      if (type) {
        if (VALIDATE_OPTION_TYPE_LIST.indexOf(type) != -1) {
          if (!_message2.default[locale] || !_message2.default[locale][TYPE]) {
            console.error(_const.REACT_INPUTS_VALIDATION_CUSTOM_ERROR_MESSAGE_EXAMPLE);
            return;
          }
          var Msg = _message2.default[locale][TYPE];
          var value = inputValue || this.input.value;
          var nameText = name ? name : '';
          var msg = '';
          // CHECK EMPTY
          if (required) {
            if (_validator2.default.empty(value)) {
              this.handleCheckEnd(true, Msg.empty ? Msg.empty(nameText) : '');
              return;
            }
          }
          if (String(value) != '') {
            // CHECK REGEX
            if (reg) {
              if (_validator2.default['reg'](reg, value)) {
                msg = regMsg != '' ? regMsg : Msg.invalid ? Msg.invalid(nameText) : '';
                this.handleCheckEnd(true, msg);
                return;
              }
            }
            // CHECK STRING
            if (type === VALIDATE_OPTION_TYPE_LIST[0]) {
              if (min || max) {
                if (min && max) {
                  if (String(value).length < min || String(value).length > max) {
                    this.handleCheckEnd(true, Msg.inBetween ? Msg.inBetween(nameText)(min)(max) : '');
                    return;
                  }
                } else {
                  if (min) {
                    if (String(value).length < min) {
                      this.handleCheckEnd(true, Msg.lessThan ? Msg.lessThan(nameText)(min) : '');
                      return;
                    }
                  }
                  if (max) {
                    if (String(value).length > max) {
                      this.handleCheckEnd(true, Msg.greaterThan ? Msg.greaterThan(nameText)(max) : '');
                      return;
                    }
                  }
                }
              }
              if (length) {
                if (String(value).length != length) {
                  this.handleCheckEnd(true, Msg.lengthEqual ? Msg.lengthEqual(nameText)(length) : '');
                  return;
                }
              }
            }
          }
          // CHECK CUSTOM FUNCTION
          if (customFunc && typeof customFunc === 'function') {
            var customFuncResult = customFunc(value);
            if (customFuncResult !== true) {
              this.handleCheckEnd(true, customFuncResult);
              return;
            }
          }
          if (msgOnSuccess) {
            this.setState({ successMsg: msgOnSuccess });
          }
          this.handleCheckEnd(false, msgOnSuccess);
        } else {
          console.error('The valid ' + (0, _utils.toCamelCase)(TYPE)(true) + ' "type" options in validationOption are [' + VALIDATE_OPTION_TYPE_LIST.map(function (i) {
            return i;
          }) + ']');
        }
      } else {
        console.error('Please provide "type" in validationOption');
      }
    }
  }, {
    key: 'handleCheckEnd',
    value: function handleCheckEnd(err, msg) {
      if (err && getDefaultValidationOption(this.props.validationOption).msgOnError) {
        msg = getDefaultValidationOption(this.props.validationOption).msgOnError;
      }
      this.setState({ err: err, msg: msg });
      var validationCallback = this.props.validationCallback;

      validationCallback && validationCallback(err);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          tabIndex = _props.tabIndex,
          id = _props.id,
          name = _props.name,
          value = _props.value,
          disabled = _props.disabled,
          maxLength = _props.maxLength,
          placeholder = _props.placeholder,
          classNameWrapper = _props.classNameWrapper,
          classNameContainer = _props.classNameContainer,
          classNameInput = _props.classNameInput,
          customStyleWrapper = _props.customStyleWrapper,
          customStyleContainer = _props.customStyleContainer,
          customStyleInput = _props.customStyleInput,
          validationOption = _props.validationOption;
      var _state = this.state,
          err = _state.err,
          msg = _state.msg,
          successMsg = _state.successMsg;


      var wrapperClass = (0, _classnames2.default)(classNameWrapper, STYLES['textarea__wrapper'], err && STYLES['error'], successMsg && !err && STYLES['success'], disabled && STYLES['disabled']);

      var containerClass = (0, _classnames2.default)(classNameContainer, STYLES['textarea__container'], err && STYLES['error'], successMsg && !err && STYLES['success'], disabled && STYLES['disabled']);

      var inputClass = (0, _classnames2.default)(classNameInput, STYLES['textarea__input'], err && STYLES['error'], successMsg && !err && STYLES['success'], disabled && STYLES['disabled']);

      var errMsgClass = (0, _classnames2.default)(STYLES['msg'], err && STYLES['error']);
      var successMsgClass = (0, _classnames2.default)(STYLES['msg'], !err && STYLES['success']);

      var msgHtml = void 0;
      if (getDefaultValidationOption(validationOption).showMsg && err && msg) {
        msgHtml = _react2.default.createElement(
          'div',
          { className: errMsgClass },
          msg
        );
      }
      if (getDefaultValidationOption(validationOption).showMsg && !err && successMsg) {
        msgHtml = _react2.default.createElement(
          'div',
          { className: successMsgClass },
          successMsg
        );
      }
      return _react2.default.createElement(
        'div',
        { className: wrapperClass, style: customStyleWrapper },
        _react2.default.createElement(
          'div',
          { className: containerClass, style: customStyleContainer },
          _react2.default.createElement('textarea', {
            tabIndex: tabIndex,
            id: id,
            name: name,
            value: value,
            disabled: disabled,
            onBlur: this.onBlur,
            maxLength: maxLength,
            onKeyUp: this.onKeyUp,
            onFocus: this.onFocus,
            className: inputClass,
            onChange: this.onChange,
            style: customStyleInput,
            placeholder: placeholder,
            ref: function ref(_ref) {
              return _this2.input = _ref;
            }
          })
        ),
        msgHtml
      );
    }
  }]);

  return Index;
}(_react2.default.Component);

Index.defaultProps = {
  tabIndex: -1,
  id: '',
  name: '',
  value: '',
  disabled: false,
  validate: false,
  maxLength: '',
  placeholder: '',
  classNameInput: '',
  classNameWrapper: '',
  classNameContainer: '',
  customStyleInput: {},
  customStyleWrapper: {},
  customStyleContainer: {},
  validationOption: {},
  onChange: function onChange() {}
};

Index.propTypes = {
  tabIndex: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  id: _propTypes2.default.string,
  name: _propTypes2.default.string,
  value: _propTypes2.default.string.isRequired,
  disabled: _propTypes2.default.bool,
  validate: _propTypes2.default.bool,
  maxLength: _propTypes2.default.string,
  placeholder: _propTypes2.default.string,
  classNameInput: _propTypes2.default.string,
  classNameWrapper: _propTypes2.default.string,
  classNameContainer: _propTypes2.default.string,
  customStyleInput: _propTypes2.default.object,
  customStyleWrapper: _propTypes2.default.object,
  customStyleContainer: _propTypes2.default.object,
  validationOption: _propTypes2.default.object,
  onChange: _propTypes2.default.func.isRequired,
  onBlur: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  onKeyUp: _propTypes2.default.func,
  validationCallback: _propTypes2.default.func
};

exports.default = Index;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(3);

var _classnames2 = _interopRequireDefault(_classnames);

var _message = __webpack_require__(4);

var _message2 = _interopRequireDefault(_message);

var _const = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var STYLES = {};
try {
  STYLES = __webpack_require__(5);
} catch (ex) {}
var TYPE = 'radiobox';
var getDefaultValidationOption = function getDefaultValidationOption(obj) {
  var name = obj.name,
      check = obj.check,
      required = obj.required,
      showMsg = obj.showMsg,
      locale = obj.locale,
      msgOnError = obj.msgOnError,
      msgOnSuccess = obj.msgOnSuccess;

  locale = typeof locale !== 'undefined' ? locale : _const.DEFAULT_LOCALE;
  name = typeof name !== 'undefined' ? name : '';
  check = typeof check !== 'undefined' ? check : true;
  showMsg = typeof showMsg !== 'undefined' ? showMsg : true;
  required = typeof required !== 'undefined' ? required : true;
  msgOnError = typeof msgOnError !== 'undefined' ? msgOnError : '';
  msgOnSuccess = typeof msgOnSuccess !== 'undefined' ? msgOnSuccess : '';
  return {
    name: name,
    check: check,
    showMsg: showMsg,
    required: required,
    locale: locale,
    msgOnError: msgOnError,
    msgOnSuccess: msgOnSuccess
  };
};
var isValidateValue = function isValidateValue(value) {
  value = String(value);
  if (value == '' || value == 'null' || value == 'undefined') {
    return true;
  } else {
    return false;
  }
};

var Index = function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index(props) {
    _classCallCheck(this, Index);

    var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));

    _this.state = {
      err: false,
      msg: '',
      successMsg: undefined
    };
    if (!props.optionList.length) {
      console.error('Please provide valid optionList. i.e optionList=[{id: "1", name: "title 1"}, {id: "2", name: "title 2"}]');
      return _possibleConstructorReturn(_this);
    } else {
      props.optionList.map(function (i) {
        if (typeof i.name == 'undefined' || typeof i.id == 'undefined') {
          console.error('Please provide valid optionList. i.e optionList=[{id: "1", name: "title 1"}, {id: "2", name: "title 2"}]');
        }
        return;
      });
    }
    _this.onChange = _this.onChange.bind(_this);
    _this.onClick = _this.onClick.bind(_this);
    _this.onFocus = _this.onFocus.bind(_this);
    _this.onBlur = _this.onBlur.bind(_this);
    return _this;
  }

  _createClass(Index, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.validate == false && nextProps.validate == true) {
        this.check();
      }
      if (this.props.value != nextProps.value) {
        if (this.state.err) {
          this.setState({ err: false });
        } else {
          this.setState({ successMsg: undefined });
        }
      }
    }
  }, {
    key: 'onChange',
    value: function onChange(val, e) {
      var onChange = this.props.onChange;

      onChange && onChange(val, e);
    }
  }, {
    key: 'onClick',
    value: function onClick(e) {
      var onClick = this.props.onClick;

      onClick && onClick(e);
    }
  }, {
    key: 'onBlur',
    value: function onBlur(e) {
      var onBlur = this.props.onBlur;

      if (onBlur) {
        this.check();
        onBlur(e);
      }
    }
  }, {
    key: 'onFocus',
    value: function onFocus(e) {
      this.focus = true;
      var onFocus = this.props.onFocus;

      if (onFocus) {
        onFocus(e);
      }
    }
  }, {
    key: 'check',
    value: function check() {
      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var value = this.props.value;

      if (val != null) {
        value = val;
      }

      var _getDefaultValidation = getDefaultValidationOption(this.props.validationOption),
          name = _getDefaultValidation.name,
          check = _getDefaultValidation.check,
          required = _getDefaultValidation.required,
          locale = _getDefaultValidation.locale,
          msgOnSuccess = _getDefaultValidation.msgOnSuccess;

      if (!check) {
        return;
      }
      if (!_message2.default[locale] || !_message2.default[locale][TYPE]) {
        console.error(_const.REACT_INPUTS_VALIDATION_CUSTOM_ERROR_MESSAGE_EXAMPLE);
        return;
      }
      var Msg = _message2.default[locale][TYPE];
      var nameText = name ? name : '';
      if (required) {
        if (isValidateValue(value)) {
          this.handleCheckEnd(true, Msg.empty ? Msg.empty(nameText) : '');
          return;
        }
      }
      if (msgOnSuccess) {
        this.setState({ successMsg: msgOnSuccess });
      }
      this.handleCheckEnd(false, msgOnSuccess);
    }
  }, {
    key: 'handleCheckEnd',
    value: function handleCheckEnd(err, msg) {
      if (getDefaultValidationOption(this.props.validationOption).msgOnError) {
        msg = getDefaultValidationOption(this.props.validationOption).msgOnError;
      }
      this.setState({ err: err, msg: msg });
      var validationCallback = this.props.validationCallback;

      validationCallback && validationCallback(err);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          tabIndex = _props.tabIndex,
          id = _props.id,
          name = _props.name,
          value = _props.value,
          disabled = _props.disabled,
          optionList = _props.optionList,
          classNameWrapper = _props.classNameWrapper,
          classNameContainer = _props.classNameContainer,
          classNameInput = _props.classNameInput,
          classNameOptionListItem = _props.classNameOptionListItem,
          customStyleWrapper = _props.customStyleWrapper,
          customStyleContainer = _props.customStyleContainer,
          customStyleInput = _props.customStyleInput,
          customStyleOptionListItem = _props.customStyleOptionListItem,
          validationOption = _props.validationOption;
      var _state = this.state,
          err = _state.err,
          msg = _state.msg,
          successMsg = _state.successMsg;


      var wrapperClass = (0, _classnames2.default)(classNameWrapper, err && STYLES['error'], successMsg && !err && STYLES['success'], STYLES['radiobox__wrapper'], disabled && STYLES['disabled']);

      var containerClass = (0, _classnames2.default)(classNameContainer, err && STYLES['error'], successMsg && !err && STYLES['success'], STYLES['radiobox__container'], disabled && STYLES['disabled']);

      var inputClass = (0, _classnames2.default)(classNameInput, err && STYLES['error'], successMsg && !err && STYLES['success'], STYLES['radiobox__input'], disabled && STYLES['disabled']);

      var labelClass = (0, _classnames2.default)(err && STYLES['error'], successMsg && !err && STYLES['success'], STYLES['radiobox__label'], disabled && STYLES['disabled']);

      var optionListItemClass = (0, _classnames2.default)(classNameOptionListItem, err && STYLES['error'], successMsg && !err && STYLES['success'], STYLES['radiobox__item'], disabled && STYLES['disabled']);

      var errMsgClass = (0, _classnames2.default)(STYLES['msg'], err && STYLES['error']);
      var successMsgClass = (0, _classnames2.default)(STYLES['msg'], !err && STYLES['success']);

      var msgHtml = void 0;
      if (getDefaultValidationOption(validationOption).showMsg && err && msg) {
        msgHtml = _react2.default.createElement(
          'div',
          { className: errMsgClass },
          msg
        );
      }
      if (getDefaultValidationOption(validationOption).showMsg && !err && successMsg) {
        msgHtml = _react2.default.createElement(
          'div',
          { className: successMsgClass },
          successMsg
        );
      }

      var optionHtml = void 0;
      if (optionList.length) {
        optionHtml = optionList.map(function (i, k) {
          var checked = String(i.id) == String(value) ? true : false;
          return _react2.default.createElement(
            'div',
            { className: optionListItemClass, style: customStyleOptionListItem, key: k },
            _react2.default.createElement('input', {
              id: id + '-' + k,
              name: name,
              type: 'radio',
              value: value,
              checked: checked,
              disabled: disabled,
              className: checked ? STYLES['checked'] + ' ' + inputClass : '' + inputClass,
              onChange: function onChange(e) {
                return _this2.onChange(i.id, e);
              },
              style: customStyleInput
            }),
            _react2.default.createElement(
              'label',
              { htmlFor: id + '-' + k, className: checked ? STYLES['checked'] + ' ' + labelClass : '' + labelClass },
              i.name
            )
          );
        });
      }

      return _react2.default.createElement(
        'div',
        { id: id, tabIndex: tabIndex, className: wrapperClass, style: customStyleWrapper, onClick: this.onClick, onBlur: this.onBlur, onFocus: this.onFocus },
        _react2.default.createElement(
          'div',
          { className: containerClass, style: customStyleContainer },
          optionHtml
        ),
        msgHtml
      );
    }
  }]);

  return Index;
}(_react2.default.Component);

Index.defaultProps = {
  tabIndex: -1,
  id: '',
  name: '',
  value: '',
  disabled: false,
  optionList: [],
  classNameInput: '',
  classNameWrapper: '',
  classNameContainer: '',
  classNameOptionListItem: '',
  customStyleInput: {},
  customStyleWrapper: {},
  customStyleContainer: {},
  customStyleOptionListItem: {},
  validate: false,
  validationOption: {},
  onChange: function onChange() {}
};

Index.propTypes = {
  tabIndex: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  id: _propTypes2.default.string,
  name: _propTypes2.default.string,
  value: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  optionList: _propTypes2.default.array,
  onChange: _propTypes2.default.func.isRequired,
  onClick: _propTypes2.default.func,
  onBlur: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  validate: _propTypes2.default.bool,
  validationOption: _propTypes2.default.object,
  classNameWrapper: _propTypes2.default.string,
  classNameContainer: _propTypes2.default.string,
  classNameInput: _propTypes2.default.string,
  classNameOptionListItem: _propTypes2.default.string,
  customStyleWrapper: _propTypes2.default.object,
  customStyleContainer: _propTypes2.default.object,
  customStyleInput: _propTypes2.default.object,
  customStyleOptionListItem: _propTypes2.default.object,
  validationCallback: _propTypes2.default.func
};

exports.default = Index;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(3);

var _classnames2 = _interopRequireDefault(_classnames);

var _message = __webpack_require__(4);

var _message2 = _interopRequireDefault(_message);

var _const = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var STYLES = {};
try {
  STYLES = __webpack_require__(5);
} catch (ex) {}
var TYPE = 'checkbox';
var getDefaultValidationOption = function getDefaultValidationOption(obj) {
  var name = obj.name,
      check = obj.check,
      required = obj.required,
      showMsg = obj.showMsg,
      locale = obj.locale,
      msgOnError = obj.msgOnError,
      msgOnSuccess = obj.msgOnSuccess;

  locale = typeof locale !== 'undefined' ? locale : _const.DEFAULT_LOCALE;
  name = typeof name !== 'undefined' ? name : '';
  check = typeof check !== 'undefined' ? check : true;
  showMsg = typeof showMsg !== 'undefined' ? showMsg : true;
  required = typeof required !== 'undefined' ? required : true;
  msgOnSuccess = typeof msgOnSuccess !== 'undefined' ? msgOnSuccess : '';
  msgOnError = typeof msgOnError !== 'undefined' ? msgOnError : '';
  return {
    name: name,
    check: check,
    showMsg: showMsg,
    required: required,
    locale: locale,
    msgOnError: msgOnError,
    msgOnSuccess: msgOnSuccess
  };
};

var Index = function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index(props) {
    _classCallCheck(this, Index);

    var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));

    _this.state = {
      err: false,
      msg: '',
      successMsg: undefined,
      checked: props.checked
    };
    _this.onChange = _this.onChange.bind(_this);
    _this.onClick = _this.onClick.bind(_this);
    _this.onBlur = _this.onBlur.bind(_this);
    _this.onFocus = _this.onFocus.bind(_this);
    _this.pageClick = _this.pageClick.bind(_this);
    return _this;
  }

  _createClass(Index, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.validate == false && nextProps.validate == true) {
        this.check();
      }
      if (this.props.checked != nextProps.checked) {
        this.setState({ checked: nextProps.checked });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('mousedown', this.pageClick, false);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('mousedown', this.pageClick, false);
    }
  }, {
    key: 'onChange',
    value: function onChange(e) {
      var val = !this.state.checked;
      this.setState({ checked: val });
      var onChange = this.props.onChange;

      onChange && onChange(val, e);
      if (this.state.err) {
        this.setState({ err: false });
      } else {
        this.setState({ successMsg: undefined });
      }
    }
  }, {
    key: 'onClick',
    value: function onClick(e) {
      this.onChange(e);
      var onClick = this.props.onClick;

      onClick && onClick(e);
    }
  }, {
    key: 'onBlur',
    value: function onBlur(e) {
      var onBlur = this.props.onBlur;

      if (onBlur) {
        this.check();
        onBlur(e);
      }
    }
  }, {
    key: 'pageClick',
    value: function pageClick(e) {
      if (this.wrapper.contains(e.target)) {
        return;
      }
      if (this.focus) {
        this.onBlur();
        this.focus = false;
      }
    }
  }, {
    key: 'onFocus',
    value: function onFocus(e) {
      this.focus = true;
      var onFocus = this.props.onFocus;

      if (onFocus) {
        this.check();
        onFocus(e);
      }
    }
  }, {
    key: 'check',
    value: function check() {
      var _getDefaultValidation = getDefaultValidationOption(this.props.validationOption),
          name = _getDefaultValidation.name,
          check = _getDefaultValidation.check,
          locale = _getDefaultValidation.locale,
          required = _getDefaultValidation.required,
          msgOnSuccess = _getDefaultValidation.msgOnSuccess;

      if (!check) {
        return;
      }
      if (required) {
        if (!_message2.default[locale] || !_message2.default[locale][TYPE]) {
          console.error(_const.REACT_INPUTS_VALIDATION_CUSTOM_ERROR_MESSAGE_EXAMPLE);
          return;
        }
        var Msg = _message2.default[locale][TYPE];
        if (!this.state.checked) {
          this.handleCheckEnd(true, Msg.unchecked ? Msg.unchecked(name ? name : '') : '');
          return;
        }
      }
      if (msgOnSuccess) {
        this.setState({ successMsg: msgOnSuccess });
      }
      this.handleCheckEnd(false, msgOnSuccess);
    }
  }, {
    key: 'handleCheckEnd',
    value: function handleCheckEnd(err, msg) {
      if (getDefaultValidationOption(this.props.validationOption).msgOnError) {
        msg = getDefaultValidationOption(this.props.validationOption).msgOnError;
      }
      this.setState({ err: err, msg: msg });
      var validationCallback = this.props.validationCallback;

      validationCallback && validationCallback(err);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          tabIndex = _props.tabIndex,
          id = _props.id,
          name = _props.name,
          value = _props.value,
          disabled = _props.disabled,
          labelHtml = _props.labelHtml,
          classNameWrapper = _props.classNameWrapper,
          classNameContainer = _props.classNameContainer,
          classNameInputBox = _props.classNameInputBox,
          customStyleWrapper = _props.customStyleWrapper,
          customStyleContainer = _props.customStyleContainer,
          customStyleInputBox = _props.customStyleInputBox,
          validationOption = _props.validationOption;
      var _state = this.state,
          err = _state.err,
          msg = _state.msg,
          checked = _state.checked,
          successMsg = _state.successMsg;


      var wrapperClass = (0, _classnames2.default)(classNameWrapper, STYLES['checkbox__wrapper'], checked && STYLES['checked'], err && STYLES['error'], successMsg && !err && STYLES['success'], disabled && STYLES['disabled']);

      var containerClass = (0, _classnames2.default)(classNameContainer, STYLES['checkbox__container'], checked && STYLES['checked'], err && STYLES['error'], successMsg && !err && STYLES['success'], disabled && STYLES['disabled']);

      var boxClass = (0, _classnames2.default)(classNameInputBox, STYLES['checkbox__box'], err && STYLES['error'], checked && STYLES['checked'], successMsg && !err && STYLES['success'], disabled && STYLES['disabled']);

      var labelClass = (0, _classnames2.default)(STYLES['checkbox__label'], checked && STYLES['checked'], err && STYLES['error'], successMsg && !err && STYLES['success'], disabled && STYLES['disabled']);

      var errMsgClass = (0, _classnames2.default)(STYLES['msg'], err && STYLES['error']);
      var successMsgClass = (0, _classnames2.default)(STYLES['msg'], !err && STYLES['success']);

      var msgHtml = void 0;
      if (getDefaultValidationOption(validationOption).showMsg && err && msg) {
        msgHtml = _react2.default.createElement(
          'div',
          { className: errMsgClass },
          msg
        );
      }
      if (getDefaultValidationOption(validationOption).showMsg && !err && successMsg) {
        msgHtml = _react2.default.createElement(
          'div',
          { className: successMsgClass },
          successMsg
        );
      }
      return _react2.default.createElement(
        'div',
        { tabIndex: tabIndex, className: wrapperClass, style: customStyleWrapper, onClick: this.onClick, onBlur: this.onBlur, onFocus: this.onFocus, ref: function ref(_ref2) {
            return _this2.wrapper = _ref2;
          } },
        _react2.default.createElement(
          'div',
          { className: containerClass, style: customStyleContainer },
          _react2.default.createElement(
            'div',
            { className: boxClass, style: customStyleInputBox },
            _react2.default.createElement('div', { className: STYLES['box'] }),
            _react2.default.createElement('input', {
              id: id,
              name: name,
              type: 'checkbox',
              className: STYLES['checkbox__input'],
              value: value,
              checked: checked,
              disabled: disabled,
              onChange: this.onChange,
              ref: function ref(_ref) {
                return _this2.input = _ref;
              }
            })
          ),
          _react2.default.createElement(
            'label',
            { className: labelClass },
            labelHtml
          )
        ),
        msgHtml
      );
    }
  }]);

  return Index;
}(_react2.default.Component);

Index.defaultProps = {
  tabIndex: -1,
  id: '',
  name: '',
  value: '',
  checked: false,
  disabled: false,
  labelHtml: undefined,
  classNameInput: '',
  classNameWrapper: '',
  classNameInputBox: '',
  classNameContainer: '',
  customStyleInput: {},
  customStyleWrapper: {},
  customStyleInputBox: {},
  customStyleContainer: {},
  validationOption: {},
  onChange: function onChange() {}
};

Index.propTypes = {
  tabIndex: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  id: _propTypes2.default.string,
  name: _propTypes2.default.string,
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.bool]),
  checked: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  labelHtml: _propTypes2.default.element,
  validate: _propTypes2.default.bool,
  onChange: _propTypes2.default.func.isRequired,
  onClick: _propTypes2.default.func,
  onBlur: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  validationOption: _propTypes2.default.object,
  locale: _propTypes2.default.string,
  classNameWrapper: _propTypes2.default.string,
  classNameContainer: _propTypes2.default.string,
  classNameInputBox: _propTypes2.default.string,
  customStyleWrapper: _propTypes2.default.object,
  customStyleContainer: _propTypes2.default.object,
  customStyleInputBox: _propTypes2.default.object,
  validationCallback: _propTypes2.default.func
};

exports.default = Index;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(3);

var _classnames2 = _interopRequireDefault(_classnames);

var _message = __webpack_require__(4);

var _message2 = _interopRequireDefault(_message);

var _const = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var STYLES = {};
try {
  STYLES = __webpack_require__(5);
} catch (ex) {}
var TYPE = 'select';
var getDefaultValidationOption = function getDefaultValidationOption(obj) {
  var name = obj.name,
      check = obj.check,
      required = obj.required,
      showMsg = obj.showMsg,
      locale = obj.locale,
      msgOnError = obj.msgOnError,
      msgOnSuccess = obj.msgOnSuccess;

  locale = typeof locale !== 'undefined' ? locale : _const.DEFAULT_LOCALE;
  name = typeof name !== 'undefined' ? name : '';
  check = typeof check !== 'undefined' ? check : true;
  showMsg = typeof showMsg !== 'undefined' ? showMsg : true;
  required = typeof required !== 'undefined' ? required : true;
  msgOnSuccess = typeof msgOnSuccess !== 'undefined' ? msgOnSuccess : '';
  msgOnError = typeof msgOnError !== 'undefined' ? msgOnError : '';
  return {
    name: name,
    check: check,
    showMsg: showMsg,
    required: required,
    locale: locale,
    msgOnError: msgOnError,
    msgOnSuccess: msgOnSuccess
  };
};
var isValidateValue = function isValidateValue(value) {
  value = String(value);
  if (value == '' || value == 'null' || value == 'undefined') {
    return true;
  } else {
    return false;
  }
};

if (!String.prototype.startsWith) {
  String.prototype.startsWith = function (searchString, position) {
    position = position || 0;
    return this.indexOf(searchString, position) === position;
  };
}

var Index = function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index(props) {
    _classCallCheck(this, Index);

    var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));

    _this.state = {
      value: props.value,
      show: false,
      isTyping: false,
      err: false,
      msg: '',
      successMsg: undefined,
      keycodeList: []
    };
    if (!props.optionList.length) {
      console.error('Please provide valid optionList. i.e optionList=[{id: "1", name: "title 1"}, {id: "2", name: "title 2"}]');
      return _possibleConstructorReturn(_this);
    } else {
      props.optionList.map(function (i) {
        if (typeof i.name == 'undefined' || typeof i.id == 'undefined') {
          console.error('Please provide valid optionList. i.e optionList=[{id: "1", name: "title 1"}, {id: "2", name: "title 2"}]');
        }
        return;
      });
    }
    _this.optionItems = [];
    _this.onChange = _this.onChange.bind(_this);
    _this.onClick = _this.onClick.bind(_this);
    _this.onBlur = _this.onBlur.bind(_this);
    _this.onFocus = _this.onFocus.bind(_this);
    _this.pageClick = _this.pageClick.bind(_this);
    _this.onKeyDown = _this.onKeyDown.bind(_this);
    return _this;
  }

  _createClass(Index, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('mousedown', this.pageClick);
      window.addEventListener('touchstart', this.pageClick);
      this.wrapper.addEventListener('keydown', this.onKeyDown);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.show != this.state.show) {
        if (this.state.show) {
          this.resetCurrentFocus();
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('mousedown', this.pageClick);
      window.removeEventListener('touchstart', this.pageClick);
      this.wrapper.removeEventListener('keydown', this.onKeyDown);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.validate == false && nextProps.validate == true) {
        this.check();
      }
      if (String(this.props.value) != String(nextProps.value)) {
        this.setState({
          value: nextProps.value,
          err: false,
          successMsg: undefined
        });
      }
    }
  }, {
    key: 'onChange',
    value: function onChange(value, e) {
      var onChange = this.props.onChange;

      onChange && onChange(value, e);
      this.setState({ value: value });
      if (this.state.err) {
        this.setState({ err: false });
      } else {
        this.setState({ successMsg: undefined });
      }
    }
  }, {
    key: 'onClick',
    value: function onClick(e) {
      var onClick = this.props.onClick;

      onClick && onClick(e);
    }
  }, {
    key: 'onBlur',
    value: function onBlur(e) {
      var onBlur = this.props.onBlur;

      if (onBlur) {
        this.check();
        onBlur(e);
      }
    }
  }, {
    key: 'onFocus',
    value: function onFocus(e) {
      this.focus = true;
      var onFocus = this.props.onFocus;

      if (onFocus) {
        onFocus(e);
      }
    }
  }, {
    key: 'getIndex',
    value: function getIndex(list, val) {
      var key = -1;
      for (var i = 0; i < list.length; i++) {
        if (list[i].id == val) {
          key = i;
          break;
        }
      }
      return key;
    }
  }, {
    key: 'resetCurrentFocus',
    value: function resetCurrentFocus() {
      var value = this.state.value;
      var optionList = this.props.optionList;

      this.currentFocus = this.getIndex(optionList, value);
      this.scroll();
    }
  }, {
    key: 'onKeyDown',
    value: function onKeyDown(e) {
      this.setState({ isTyping: true });
      if (e.preventDefault) {
        e.preventDefault();
      }
      var _state = this.state,
          show = _state.show,
          value = _state.value;

      if (!show) {
        return;
      }
      var x = this.optionItems;
      var optionList = this.props.optionList;

      this.currentFocus = typeof this.currentFocus != 'undefined' ? this.currentFocus : this.getIndex(optionList, value);
      var direction = null;
      var keyCode = e.keyCode;

      var keyCodeEsc = 27;
      var keyCodeDown = 40;
      var keyCodeUp = 38;
      var keyCodeEnter = 13;
      var selectKeyList = [keyCodeEsc, keyCodeDown, keyCodeUp, keyCodeEnter];
      if (selectKeyList.indexOf(keyCode) != -1) {
        if (keyCode == keyCodeEsc) {
          this.setState({ show: false });
          this.resetCurrentFocus();
          return;
        }
        if (keyCode == keyCodeDown) {
          direction = 'down';
          this.currentFocus++;
          if (this.currentFocus > optionList.length - 1) {
            this.currentFocus = optionList.length - 1;
          }
          this.addActive();
        } else if (keyCode == keyCodeUp) {
          direction = 'up';
          this.currentFocus--;
          if (this.currentFocus < 0) {
            this.currentFocus = 0;
          }
          this.addActive();
        } else if (keyCode == keyCodeEnter) {
          if (this.currentFocus > -1) {
            if (x) x[this.currentFocus].click();
          }
        }
      } else {
        var keycodeList = this.state.keycodeList;

        if (!(keyCode >= 48 || keyCode <= 57 || keyCode >= 65 || keyCode <= 90 || keyCode >= 96 || keyCode <= 105)) {
          return;
        }
        this.setTimeoutTyping();
        var newkeyCodeList = [].concat(_toConsumableArray(keycodeList), [keyCode]);
        var str = String.fromCharCode.apply(String, _toConsumableArray(newkeyCodeList)).toLowerCase();
        var index = -1;
        optionList.filter(function (i, k) {
          var name = i.name;

          if (name.toLowerCase().startsWith(str)) {
            if (index == -1) {
              index = k;
            }
          }
        });
        if (index != -1) {
          this.currentFocus = index;
          this.addActive();
        }
        this.setState({ keycodeList: newkeyCodeList });
      }
      this.scroll(direction);
      return this.currentFocus;
    }
  }, {
    key: 'setTimeoutTyping',
    value: function setTimeoutTyping() {
      var _this2 = this;

      if (this.typingTimeout) {
        clearTimeout(this.typingTimeout);
      }
      this.typingTimeout = setTimeout(function () {
        _this2.setState({ keycodeList: [] });
      }, 250);
    }
  }, {
    key: 'scroll',
    value: function scroll(direction) {
      var containerHeight = this.itemsWrapper.offsetHeight;
      var containerScrollTop = this.itemsWrapper.scrollTop;
      if (!this.optionItems[this.currentFocus]) {
        return;
      }
      var itemHeight = this.optionItems[this.currentFocus].offsetHeight;
      if (direction) {
        if (direction == 'down') {
          var bound = containerScrollTop + containerHeight;
          var heightItems = this.currentFocus * itemHeight;
          var heightContainer = bound - itemHeight;
          if (heightItems >= heightContainer) {
            var offset = Math.abs(heightItems - heightContainer - itemHeight);
            if (offset >= 0 && !this.corrected) {
              this.itemsWrapper.scrollTop = containerScrollTop + itemHeight - offset;
              this.corrected = true;
            } else {
              this.itemsWrapper.scrollTop = containerScrollTop + itemHeight;
            }
          }
        }
        if (direction == 'up') {
          this.corrected = false;
          if (this.currentFocus * itemHeight <= containerScrollTop) {
            this.itemsWrapper.scrollTop = this.currentFocus * itemHeight;
          }
        }
      } else {
        this.corrected = false;
        this.itemsWrapper.scrollTop = this.currentFocus * itemHeight;
      }
    }
  }, {
    key: 'addActive',
    value: function addActive() {
      var x = this.optionItems;
      if (!x) return false;
      this.removeActive();
      if (this.currentFocus >= x.length) this.currentFocus = 0;
      if (this.currentFocus < 0) this.currentFocus = x.length - 1;
      x[this.currentFocus].className += ' ' + STYLES['select__hover-active'];
    }
  }, {
    key: 'removeActive',
    value: function removeActive() {
      var x = this.optionItems;
      for (var i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(STYLES['select__hover-active'], '');
      }
    }
  }, {
    key: 'pageClick',
    value: function pageClick(e) {
      if (this.wrapper.contains(e.target)) {
        return;
      }
      if (this.focus) {
        this.onBlur();
        this.focus = false;
      }
      this.toggleShow(false);
    }
  }, {
    key: 'toggleShow',
    value: function toggleShow(show) {
      this.setState({ show: show });
    }
  }, {
    key: 'check',
    value: function check() {
      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var value = this.state.value;

      if (val != null) {
        value = val;
      }

      var _getDefaultValidation = getDefaultValidationOption(this.props.validationOption),
          name = _getDefaultValidation.name,
          check = _getDefaultValidation.check,
          required = _getDefaultValidation.required,
          locale = _getDefaultValidation.locale,
          msgOnSuccess = _getDefaultValidation.msgOnSuccess;

      if (!check) {
        return;
      }
      if (!_message2.default[locale] || !_message2.default[locale][TYPE]) {
        console.error(_const.REACT_INPUTS_VALIDATION_CUSTOM_ERROR_MESSAGE_EXAMPLE);
        return;
      }
      var Msg = _message2.default[locale][TYPE];
      var nameText = name ? name : '';
      if (required) {
        if (isValidateValue(value)) {
          this.handleCheckEnd(true, Msg.empty ? Msg.empty(nameText) : '');
          return;
        }
      }
      if (msgOnSuccess) {
        this.setState({ successMsg: msgOnSuccess });
      }
      this.handleCheckEnd(false, msgOnSuccess);
    }
  }, {
    key: 'handleCheckEnd',
    value: function handleCheckEnd(err, msg) {
      if (getDefaultValidationOption(this.props.validationOption).msgOnError) {
        msg = getDefaultValidationOption(this.props.validationOption).msgOnError;
      }
      this.setState({ err: err, msg: msg });
      var validationCallback = this.props.validationCallback;

      validationCallback && validationCallback(err);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          tabIndex = _props.tabIndex,
          id = _props.id,
          name = _props.name,
          optionList = _props.optionList,
          disabled = _props.disabled,
          classNameWrapper = _props.classNameWrapper,
          classNameContainer = _props.classNameContainer,
          classNameSelect = _props.classNameSelect,
          classNameOptionListContainer = _props.classNameOptionListContainer,
          classNameOptionListItem = _props.classNameOptionListItem,
          classNameDropdownIconOptionListItem = _props.classNameDropdownIconOptionListItem,
          customStyleWrapper = _props.customStyleWrapper,
          customStyleContainer = _props.customStyleContainer,
          customStyleSelect = _props.customStyleSelect,
          customStyleOptionListContainer = _props.customStyleOptionListContainer,
          customStyleOptionListItem = _props.customStyleOptionListItem,
          selectHtml = _props.selectHtml,
          selectOptionListItemHtml = _props.selectOptionListItemHtml,
          validationOption = _props.validationOption;
      var _state2 = this.state,
          value = _state2.value,
          err = _state2.err,
          msg = _state2.msg,
          show = _state2.show,
          successMsg = _state2.successMsg,
          isTyping = _state2.isTyping;


      var wrapperClass = (0, _classnames2.default)(classNameWrapper, STYLES['select__wrapper'], err && STYLES['error'], successMsg && !err && STYLES['success'], disabled && STYLES['disabled']);

      var containerClass = (0, _classnames2.default)(classNameContainer, STYLES['select__container'], err && STYLES['error'], show && STYLES['show'], successMsg && !err && STYLES['success'], disabled && STYLES['disabled']);

      var inputClass = (0, _classnames2.default)(STYLES['select__input'], err && STYLES['error'], successMsg && !err && STYLES['success'], disabled && STYLES['disabled']);

      var selectClass = (0, _classnames2.default)(classNameSelect, STYLES['ellipsis'], STYLES['select__dropdown-menu'], err && STYLES['error'], successMsg && !err && STYLES['success'], disabled && STYLES['disabled']);

      var selectOptionListContainerClass = (0, _classnames2.default)(classNameOptionListContainer, STYLES['select__options-container'], err && STYLES['error'], show && STYLES['show'], successMsg && !err && STYLES['success'], disabled && STYLES['disabled']);

      var selectOptionListItemClass = (0, _classnames2.default)(!isTyping && STYLES['select__options-item-show-cursor'], classNameOptionListItem, STYLES['select__options-item'], err && STYLES['error'], successMsg && !err && STYLES['success'], disabled && STYLES['disabled']);

      var dropdownIconClass = (0, _classnames2.default)(classNameDropdownIconOptionListItem, STYLES['select__dropdown-icon']);

      var errMsgClass = (0, _classnames2.default)(STYLES['msg'], err && STYLES['error']);
      var successMsgClass = (0, _classnames2.default)(STYLES['msg'], !err && STYLES['success']);

      var msgHtml = void 0;
      if (getDefaultValidationOption(validationOption).showMsg && err && msg) {
        msgHtml = _react2.default.createElement(
          'div',
          { className: errMsgClass },
          msg
        );
      }
      if (getDefaultValidationOption(validationOption).showMsg && !err && successMsg) {
        msgHtml = _react2.default.createElement(
          'div',
          { className: successMsgClass },
          successMsg
        );
      }
      var optionListHtml = void 0;
      var item = void 0;
      optionList.filter(function (i) {
        if (String(i.id) == String(value)) {
          item = i;
        }
      });
      if (optionList.length) {
        if (selectOptionListItemHtml) {
          optionListHtml = selectOptionListItemHtml;
        } else {
          optionListHtml = optionList.map(function (i, k) {
            return _react2.default.createElement(
              'div',
              {
                ref: function ref(_ref) {
                  return _this3.optionItems[k] = _ref;
                },
                onMouseOver: function onMouseOver() {
                  _this3.currentFocus = k;
                  _this3.addActive();
                },
                onMouseMove: function onMouseMove() {
                  _this3.setState({ isTyping: false });
                },
                onMouseOut: function onMouseOut() {
                  _this3.removeActive();
                },
                className: String(i.id) == String(value) ? selectOptionListItemClass + ' ' + STYLES['active'] : '' + selectOptionListItemClass,
                key: k,
                style: customStyleOptionListItem,
                onClick: function onClick(e) {
                  _this3.onChange(i.id, e);
                }
              },
              i.name
            );
          });
        }
      }
      var selectorHtml = selectHtml;
      if (!selectorHtml) {
        selectorHtml = _react2.default.createElement(
          'div',
          { className: STYLES['select__dropdown'] },
          _react2.default.createElement(
            'div',
            { className: STYLES['select__dropdown-name'] + ' ' + STYLES['ellipsis'] },
            item.name
          ),
          _react2.default.createElement('div', { className: dropdownIconClass })
        );
      }
      return _react2.default.createElement(
        'div',
        {
          tabIndex: tabIndex,
          id: STYLES['select__wrapper'],
          className: wrapperClass,
          style: customStyleWrapper,
          onClick: function onClick(e) {
            _this3.onClick(e);
            !disabled ? _this3.toggleShow(!show) : '';
          },
          onFocus: this.onFocus,
          onBlur: this.onBlur,
          ref: function ref(_ref4) {
            return _this3.wrapper = _ref4;
          }
        },
        _react2.default.createElement(
          'div',
          { className: containerClass, style: customStyleContainer },
          _react2.default.createElement('input', { id: id, name: name, type: 'hidden', value: value, className: inputClass, onChange: function onChange() {}, ref: function ref(_ref2) {
              return _this3.input = _ref2;
            } }),
          _react2.default.createElement(
            'div',
            { className: selectClass, style: customStyleSelect },
            selectorHtml
          ),
          _react2.default.createElement(
            'div',
            { ref: function ref(_ref3) {
                return _this3.itemsWrapper = _ref3;
              }, className: selectOptionListContainerClass, style: customStyleOptionListContainer },
            optionListHtml
          )
        ),
        msgHtml
      );
    }
  }]);

  return Index;
}(_react2.default.Component);

Index.defaultProps = {
  tabIndex: -1,
  id: '',
  name: '',
  value: '',
  disabled: false,
  optionList: [],
  classNameWrapper: '',
  classNameContainer: '',
  classNameOptionListItem: '',
  classNameOptionListContainer: '',
  classNameDropdownIconOptionListItem: '',
  customStyleWrapper: {},
  customStyleContainer: {},
  customStyleOptionListItem: {},
  customStyleOptionListContainer: {},
  customStyleDropdownIcon: {},
  validationOption: {},
  onChange: function onChange() {}
};

Index.propTypes = {
  tabIndex: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  id: _propTypes2.default.string,
  name: _propTypes2.default.string,
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  disabled: _propTypes2.default.bool,
  validate: _propTypes2.default.bool,
  optionList: _propTypes2.default.array.isRequired,
  onChange: _propTypes2.default.func.isRequired,
  onClick: _propTypes2.default.func,
  onBlur: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  validationOption: _propTypes2.default.object,
  locale: _propTypes2.default.string,
  selectHtml: _propTypes2.default.element,
  selectOptionListItemHtml: _propTypes2.default.array,
  classNameWrapper: _propTypes2.default.string,
  classNameContainer: _propTypes2.default.string,
  classNameSelect: _propTypes2.default.string,
  classNameOptionListContainer: _propTypes2.default.string,
  classNameDropdownIconOptionListItem: _propTypes2.default.string,
  classNameOptionListItem: _propTypes2.default.string,
  customStyleWrapper: _propTypes2.default.object,
  customStyleContainer: _propTypes2.default.object,
  customStyleSelect: _propTypes2.default.object,
  customStyleOptionListContainer: _propTypes2.default.object,
  customStyleDropdownIcon: _propTypes2.default.object,
  customStyleOptionListItem: _propTypes2.default.object,
  validationCallback: _propTypes2.default.func
};

exports.default = Index;

/***/ })
/******/ ]);
});
//# sourceMappingURL=react-inputs-validation.js.map