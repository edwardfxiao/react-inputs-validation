"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _message = _interopRequireDefault(require("./message"));

var _const = require("./const");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var reactInputsValidationCss = {
  "ellipsis": "react-inputs-validation__ellipsis___3-Api",
  "textbox__wrapper": "react-inputs-validation__textbox__wrapper___3tnXv",
  "textbox__container": "react-inputs-validation__textbox__container___3KXOM",
  "textbox__input": "react-inputs-validation__textbox__input___20hDL",
  "error": "react-inputs-validation__error___2aXSp",
  "success": "react-inputs-validation__success___3TpwE",
  "disabled": "react-inputs-validation__disabled___1-57g",
  "msg": "react-inputs-validation__msg___pxv8o",
  "textarea__wrapper": "react-inputs-validation__textarea__wrapper___35GhF",
  "textarea__container": "react-inputs-validation__textarea__container___2fbGp",
  "textarea__input": "react-inputs-validation__textarea__input___1CFm_",
  "radiobox__wrapper": "react-inputs-validation__radiobox__wrapper___1zZ30",
  "radiobox__container": "react-inputs-validation__radiobox__container___FD4vb",
  "radiobox__input": "react-inputs-validation__radiobox__input___2uX2-",
  "radiobox__label": "react-inputs-validation__radiobox__label___2tQsB",
  "checked": "react-inputs-validation__checked___2O0Ju",
  "radiobox__item": "react-inputs-validation__radiobox__item___ejuz1",
  "checkbox__wrapper": "react-inputs-validation__checkbox__wrapper___1c1rD",
  "checkbox__input": "react-inputs-validation__checkbox__input___1yF4X",
  "checkbox__container": "react-inputs-validation__checkbox__container___3I1rX",
  "checkbox__box": "react-inputs-validation__checkbox__box___1uj8A",
  "box": "react-inputs-validation__box___3E9nu",
  "select__wrapper": "react-inputs-validation__select__wrapper___1B4OH",
  "select__input": "react-inputs-validation__select__input___3h-P7",
  "select__container": "react-inputs-validation__select__container___3jgUR",
  "select__options-item": "react-inputs-validation__select__options-item___30yY4",
  "select__options-item-show-cursor": "react-inputs-validation__select__options-item-show-cursor___1ZT3b",
  "select__no-mouse": "react-inputs-validation__select__no-mouse___2uRg6",
  "select__hover-active": "react-inputs-validation__select__hover-active___2z1MQ",
  "active": "react-inputs-validation__active___3eZBB",
  "select__options-container-animate": "react-inputs-validation__select__options-container-animate___2Rm--",
  "show": "react-inputs-validation__show___2NI3u",
  "select__options-container": "react-inputs-validation__select__options-container___d54qE",
  "select__dropdown": "react-inputs-validation__select__dropdown___11yDr",
  "select__dropdown-icon": "react-inputs-validation__select__dropdown-icon___1T5r2",
  "select__dropdown-name": "react-inputs-validation__select__dropdown-name___3hghL",
  "select__dropdown-icon-container": "react-inputs-validation__select__dropdown-icon-container___2ild-"
};
var TYPE = 'select';

if (!String.prototype.startsWith) {
  String.prototype.startsWith = function (searchString, position) {
    var p = position || 0;
    return this.indexOf(searchString, p) === p;
  };
}

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
  var v = String(value);

  if (v === '' || v === 'null' || v === 'undefined') {
    return true;
  }

  return false;
};

var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  // TODO: find a better type
  function Index(props) {
    var _this;

    _classCallCheck(this, Index);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Index).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "wrapper", void 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "itemsWrapper", void 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "input", void 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "optionItems", void 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "focus", void 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "corrected", void 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "typingTimeout", void 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "currentFocus", void 0);

    _this.state = {
      value: props.value,
      show: false,
      isTyping: false,
      err: false,
      msg: '',
      successMsg: undefined,
      keycodeList: [],
      validate: props.validate
    };
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onBlur = _this.onBlur.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onFocus = _this.onFocus.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onKeyDown = _this.onKeyDown.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.pageClick = _this.pageClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.wrapper = React.createRef();
    _this.itemsWrapper = React.createRef();
    _this.input = React.createRef();
    _this.optionItems = [];
    _this.focus = false;
    _this.corrected = false;
    _this.currentFocus = undefined;
    return _this;
  }

  _createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('mousedown', this.pageClick);
      window.addEventListener('touchstart', this.pageClick);
      var node = this.wrapper.current;

      if (node) {
        node.addEventListener('keydown', this.onKeyDown);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.show !== this.state.show) {
        if (this.state.show) {
          this.resetCurrentFocus();
        }
      }

      if (this.state.validate === true && prevState.validate === false) {
        this.check();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('mousedown', this.pageClick);
      window.removeEventListener('touchstart', this.pageClick);
      var node = this.wrapper.current;

      if (node) {
        node.removeEventListener('keydown', this.onKeyDown);
      }
    }
  }, {
    key: "onChange",
    value: function onChange(value, e) {
      var onChange = this.props.onChange;
      onChange && onChange(String(value), e);
      this.setState({
        value: value
      });

      if (this.state.err) {
        this.setState({
          err: false
        });
      } else {
        this.setState({
          successMsg: undefined
        });
      }
    }
  }, {
    key: "onClick",
    value: function onClick(e) {
      var onClick = this.props.onClick;
      onClick && onClick(e);
    }
  }, {
    key: "onBlur",
    value: function onBlur(e) {
      var onBlur = this.props.onBlur;

      if (onBlur) {
        this.check();
        onBlur(e);
      }
    }
  }, {
    key: "onFocus",
    value: function onFocus(e) {
      this.focus = true;
      var onFocus = this.props.onFocus;

      if (onFocus) {
        onFocus(e);
      }
    }
  }, {
    key: "getIndex",
    value: function getIndex(list, val) {
      var key = -1;

      for (var i = 0; i < list.length; i += 1) {
        if (list[i].id === val) {
          key = i;
          break;
        }
      }

      return key;
    }
  }, {
    key: "resetCurrentFocus",
    value: function resetCurrentFocus() {
      var value = this.state.value;
      var optionList = this.props.optionList;
      this.currentFocus = this.getIndex(optionList, value);
      this.scroll();
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(e) {
      this.setState({
        isTyping: true
      });

      if (e.preventDefault) {
        e.preventDefault();
      }

      var _this$state = this.state,
          show = _this$state.show,
          value = _this$state.value;

      if (!show) {
        return;
      }

      var x = this.optionItems;
      var optionList = this.props.optionList;
      this.currentFocus = typeof this.currentFocus !== 'undefined' ? this.currentFocus : this.getIndex(optionList, value);
      var direction = undefined;
      var keyCode = e.keyCode;
      var keyCodeEsc = 27;
      var keyCodeDown = 40;
      var keyCodeUp = 38;
      var keyCodeEnter = 13;
      var selectKeyList = [keyCodeEsc, keyCodeDown, keyCodeUp, keyCodeEnter];

      if (selectKeyList.indexOf(keyCode) !== -1) {
        if (keyCode === keyCodeEsc) {
          this.setState({
            show: false
          });
          this.resetCurrentFocus();
          return;
        }

        if (keyCode === keyCodeDown) {
          direction = 'down';
          this.currentFocus += 1;

          if (this.currentFocus > optionList.length - 1) {
            this.currentFocus = optionList.length - 1;
          }

          this.addActive();
        } else if (keyCode === keyCodeUp) {
          direction = 'up';
          this.currentFocus -= 1;

          if (this.currentFocus < 0) {
            this.currentFocus = 0;
          }

          this.addActive();
        } else if (keyCode === keyCodeEnter) {
          if (this.currentFocus > -1) {
            if (x) {
              var node = x[this.currentFocus];
              /* istanbul ignore next */

              if (!node) {
                return;
              }

              node.current.click();
            }
          }
        }
      } else {
        var _keycodeList = this.state.keycodeList;
        this.setTimeoutTyping();

        var newkeyCodeList = _toConsumableArray(_keycodeList).concat([keyCode]);

        var str = String.fromCharCode.apply(String, _toConsumableArray(newkeyCodeList)).toLowerCase();
        var index = -1;
        optionList.filter(function (i, k) {
          var name = i.name;

          if (name.toLowerCase().startsWith(str)) {
            if (index === -1) {
              index = k;
            }
          }
        });

        if (index !== -1) {
          this.currentFocus = index;
          this.addActive();
        }

        this.setState({
          keycodeList: newkeyCodeList
        });
      }

      this.scroll(direction);
      return this.currentFocus;
    }
  }, {
    key: "setTimeoutTyping",
    value: function setTimeoutTyping() {
      var _this2 = this;

      if (this.typingTimeout) {
        clearTimeout(this.typingTimeout);
      }

      this.typingTimeout = setTimeout(function () {
        _this2.setState({
          keycodeList: []
        });
      }, 250);
    }
  }, {
    key: "scroll",
    value: function scroll() {
      var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
      var itemsWrapperNode = this.itemsWrapper;
      /* istanbul ignore next */

      if (itemsWrapperNode === null) {
        return;
      }

      var containerHeight = itemsWrapperNode.current.offsetHeight;
      var containerScrollTop = itemsWrapperNode.current.scrollTop;
      /* istanbul ignore next */

      if (!this.currentFocus || !this.optionItems[this.currentFocus]) {
        return;
      }

      var optionItemsNode = this.optionItems[this.currentFocus];
      /* istanbul ignore next */

      if (optionItemsNode === null) {
        return;
      }

      var itemHeight = optionItemsNode.current.offsetHeight;

      if (direction) {
        if (direction === 'down') {
          var bound = containerScrollTop + containerHeight;
          var heightItems = this.currentFocus * itemHeight;
          var heightContainer = bound - itemHeight;

          if (heightItems >= heightContainer) {
            var offset = Math.abs(heightItems - heightContainer - itemHeight);

            if (offset >= 0 && !this.corrected) {
              itemsWrapperNode.current.scrollTop = containerScrollTop + itemHeight - offset;
              this.corrected = true;
            } else {
              itemsWrapperNode.current.scrollTop = containerScrollTop + itemHeight;
            }
          }
        }

        if (direction === 'up') {
          this.corrected = false;

          if (this.currentFocus * itemHeight <= containerScrollTop) {
            itemsWrapperNode.current.scrollTop = this.currentFocus * itemHeight;
          }
        }
      } else {
        this.corrected = false;
        itemsWrapperNode.current.scrollTop = this.currentFocus * itemHeight;
      }
    }
  }, {
    key: "addActive",
    value: function addActive() {
      var x = this.optionItems;
      if (!x) return false;
      this.removeActive();
      if (typeof this.currentFocus === 'undefined') return;
      if (this.currentFocus >= x.length) this.currentFocus = 0;
      if (this.currentFocus < 0) this.currentFocus = x.length - 1;
      var node = x[this.currentFocus];
      /* istanbul ignore next */

      if (!node) {
        return;
      }

      node.current.className += " ".concat(reactInputsValidationCss['select__hover-active']);
    }
  }, {
    key: "removeActive",
    value: function removeActive() {
      var x = this.optionItems;

      for (var i = 0; i < x.length; i += 1) {
        var node = x[i];
        node.current.className = node.current.className.replace(reactInputsValidationCss['select__hover-active'], '');
      }
    }
  }, {
    key: "pageClick",
    value: function pageClick(e) {
      var node = this.wrapper;
      /* istanbul ignore next */

      if (!node) {
        return;
      }
      /* istanbul ignore next */


      if (node.current.contains(e.target)) {
        return;
      }

      if (this.focus) {
        this.onBlur(e);
        this.focus = false;
      }

      this.toggleShow(false);
    }
  }, {
    key: "toggleShow",
    value: function toggleShow(show) {
      this.setState({
        show: show
      });
    }
  }, {
    key: "check",
    value: function check() {
      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var value = this.state.value;

      if (val != null) {
        value = val;
      }

      var _ref = this.props,
          validationOption = _ref.validationOption;

      var _getDefaultValidation = getDefaultValidationOption(validationOption),
          name = _getDefaultValidation.name,
          check = _getDefaultValidation.check,
          required = _getDefaultValidation.required,
          locale = _getDefaultValidation.locale,
          msgOnSuccess = _getDefaultValidation.msgOnSuccess;

      if (!check) {
        return;
      }

      if (!_message.default[locale] || !_message.default[locale][TYPE]) {
        console.error(_const.REACT_INPUTS_VALIDATION_CUSTOM_ERROR_MESSAGE_EXAMPLE);
        return;
      }

      var msg = _message.default[locale][TYPE];
      var nameText = name ? name : '';

      if (required) {
        if (isValidateValue(value)) {
          this.handleCheckEnd(true, msg.empty(nameText));
          return;
        }
      }

      if (msgOnSuccess) {
        this.setState({
          successMsg: msgOnSuccess
        });
      }

      this.handleCheckEnd(false, msgOnSuccess);
    }
  }, {
    key: "handleCheckEnd",
    value: function handleCheckEnd(err, message) {
      var msg = message;
      var _ref2 = this.props,
          validationOption = _ref2.validationOption;

      var _getDefaultValidation2 = getDefaultValidationOption(validationOption),
          msgOnError = _getDefaultValidation2.msgOnError;

      if (err && msgOnError) {
        msg = msgOnError;
      }

      this.setState({
        err: err,
        msg: msg
      });
      var validationCallback = this.props.validationCallback;
      validationCallback && validationCallback(err);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _ref3 = this.props,
          tabIndex = _ref3.tabIndex,
          id = _ref3.id,
          name = _ref3.name,
          optionList = _ref3.optionList,
          disabled = _ref3.disabled,
          classNameWrapper = _ref3.classNameWrapper,
          classNameContainer = _ref3.classNameContainer,
          classNameSelect = _ref3.classNameSelect,
          classNameOptionListContainer = _ref3.classNameOptionListContainer,
          classNameOptionListItem = _ref3.classNameOptionListItem,
          classNameDropdownIconOptionListItem = _ref3.classNameDropdownIconOptionListItem,
          customStyleWrapper = _ref3.customStyleWrapper,
          customStyleContainer = _ref3.customStyleContainer,
          customStyleSelect = _ref3.customStyleSelect,
          customStyleOptionListContainer = _ref3.customStyleOptionListContainer,
          customStyleOptionListItem = _ref3.customStyleOptionListItem,
          selectHtml = _ref3.selectHtml,
          selectOptionListItemHtml = _ref3.selectOptionListItemHtml,
          validationOption = _ref3.validationOption;
      var _this$state2 = this.state,
          value = _this$state2.value,
          err = _this$state2.err,
          msg = _this$state2.msg,
          show = _this$state2.show,
          successMsg = _this$state2.successMsg,
          isTyping = _this$state2.isTyping;
      var wrapperClass = "".concat(classNameWrapper, " ").concat(reactInputsValidationCss['select__wrapper'], " ").concat(err && reactInputsValidationCss['error'], " ").concat(successMsg && !err && reactInputsValidationCss['success'], " ").concat(disabled && reactInputsValidationCss['disabled'], ";");
      var containerClass = "".concat(classNameContainer, " ").concat(reactInputsValidationCss['select__container'], " ").concat(err && reactInputsValidationCss['error'], " ").concat(show && reactInputsValidationCss['show'], " ").concat(successMsg && !err && reactInputsValidationCss['success'], " ").concat(disabled && reactInputsValidationCss['disabled'], ";");
      var inputClass = "".concat(reactInputsValidationCss['select__input'], " ").concat(err && reactInputsValidationCss['error'], " ").concat(successMsg && !err && reactInputsValidationCss['success'], " ").concat(disabled && reactInputsValidationCss['disabled'], ";");
      var selectClass = "".concat(classNameSelect, " ").concat(reactInputsValidationCss['ellipsis'], " ").concat(err && reactInputsValidationCss['error'], " ").concat(successMsg && !err && reactInputsValidationCss['success'], " ").concat(disabled && reactInputsValidationCss['disabled'], ";");
      var selectOptionListContainerClass = "".concat(classNameOptionListContainer, " ").concat(reactInputsValidationCss['select__options-container'], " ").concat(err && reactInputsValidationCss['error'], " ").concat(show && reactInputsValidationCss['show'], " ").concat(successMsg && !err && reactInputsValidationCss['success'], " ").concat(disabled && reactInputsValidationCss['disabled'], ";");
      var selectOptionListItemClass = "".concat(!isTyping && reactInputsValidationCss['select__options-item-show-cursor'], " ").concat(classNameOptionListItem, " ").concat(reactInputsValidationCss['select__options-item'], " ").concat(err && reactInputsValidationCss['error'], " ").concat(successMsg && !err && reactInputsValidationCss['success'], " ").concat(disabled && reactInputsValidationCss['disabled'], ";");
      var dropdownIconClass = "".concat(classNameDropdownIconOptionListItem, " ").concat(reactInputsValidationCss['select__dropdown-icon']);
      var errMsgClass = "".concat(reactInputsValidationCss['msg'], " ").concat(err && reactInputsValidationCss['error']);
      var successMsgClass = "".concat(reactInputsValidationCss['msg'], " ").concat(!err && reactInputsValidationCss['success']);
      var msgHtml;

      var _getDefaultValidation3 = getDefaultValidationOption(validationOption),
          showMsg = _getDefaultValidation3.showMsg;

      if (showMsg && err && msg) {
        msgHtml = React.createElement("div", {
          className: errMsgClass
        }, msg);
      }

      if (showMsg && !err && successMsg) {
        msgHtml = React.createElement("div", {
          className: successMsgClass
        }, successMsg);
      }

      var optionListHtml;
      var item;
      optionList.filter(function (i) {
        if (String(i.id) === String(value)) {
          item = i;
        }
      });

      if (optionList.length) {
        if (selectOptionListItemHtml) {
          optionListHtml = selectOptionListItemHtml;
        } else {
          optionListHtml = optionList.map(function (i, k) {
            _this3.optionItems[k] = React.createRef();
            return React.createElement("div", {
              ref: _this3.optionItems[k],
              onMouseOver: function onMouseOver() {
                _this3.currentFocus = k;

                _this3.addActive();
              },
              onMouseMove: function onMouseMove() {
                _this3.setState({
                  isTyping: false
                });
              },
              onMouseOut: function onMouseOut() {
                _this3.removeActive();
              },
              className: String(i.id) === String(value) ? "".concat(selectOptionListItemClass, " ").concat(reactInputsValidationCss['active']) : "".concat(selectOptionListItemClass),
              key: k,
              style: customStyleOptionListItem,
              onClick: function onClick(e) {
                _this3.onChange(i.id, e);
              }
            }, i.name);
          });
        }
      }

      var selectorHtml = selectHtml;

      if (!selectorHtml) {
        selectorHtml = React.createElement("div", {
          className: reactInputsValidationCss['select__dropdown']
        }, React.createElement("div", {
          className: "".concat(reactInputsValidationCss['select__dropdown-name'], " ").concat(reactInputsValidationCss['ellipsis'])
        }, item ? item.name : ''), React.createElement("div", {
          className: dropdownIconClass
        }));
      }

      return React.createElement("div", {
        tabIndex: Number(tabIndex),
        id: reactInputsValidationCss['select__wrapper'],
        className: wrapperClass,
        style: customStyleWrapper,
        onClick: function onClick(e) {
          _this3.onClick(e);

          !disabled ? _this3.toggleShow(!show) : "";
        },
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        ref: this.wrapper
      }, React.createElement("div", {
        className: containerClass,
        style: customStyleContainer
      }, React.createElement("input", {
        id: id,
        name: name,
        type: "hidden",
        value: value,
        className: inputClass,
        onChange: function onChange() {},
        ref: this.input
      }), React.createElement("div", {
        className: selectClass,
        style: customStyleSelect
      }, selectorHtml), React.createElement("div", {
        ref: this.itemsWrapper,
        className: selectOptionListContainerClass,
        style: customStyleOptionListContainer
      }, optionListHtml)), msgHtml);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.validate === true && prevState.validate === false) {
        return {
          validate: nextProps.validate
        };
      }

      if (prevState.value !== nextProps.value) {
        return {
          value: nextProps.value
        };
      }

      return null;
    }
  }]);

  return Index;
}(React.Component);

_defineProperty(Index, "defaultProps", {
  tabIndex: -1,
  id: '',
  name: '',
  value: '',
  disabled: false,
  validate: false,
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
});

var _default = Index;
exports.default = _default;