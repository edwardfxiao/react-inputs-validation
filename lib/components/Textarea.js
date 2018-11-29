"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _message = _interopRequireDefault(require("./message"));

var _validator = _interopRequireDefault(require("./validator"));

var _utils = _interopRequireDefault(require("./utils"));

var _const = require("./const");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
var TYPE = 'textarea';
var VALIDATE_OPTION_TYPE_LIST = ['string'];
var DEFAULT_MAX_LENGTH = 524288; //  Default value is 524288

var DEFAULT_ROWS = 2; //  Default value is 2

var DEFAULT_COLS = 2; //  Default value is 20

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
  customFunc = typeof customFunc !== 'undefined' ? customFunc : undefined;
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

var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index(props) {
    var _this;

    _classCallCheck(this, Index);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Index).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "value", void 0);

    _this.state = {
      err: false,
      msg: '',
      successMsg: undefined,
      validate: props.validate
    };
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onBlur = _this.onBlur.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onFocus = _this.onFocus.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onKeyUp = _this.onKeyUp.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.value = props.value;
    return _this;
  }

  _createClass(Index, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.state.validate === true && prevState.validate === false) {
        this.check();
      }
    }
  }, {
    key: "onChange",
    value: function onChange(e) {
      this.value = e.target.value;

      if (this.props.maxLength !== '') {
        if (this.value.length > Number(this.props.maxLength)) {
          return;
        }
      }

      var onChange = this.props.onChange;
      onChange && onChange(this.value, e);

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
      var onFocus = this.props.onFocus;

      if (onFocus) {
        this.check();
        onFocus(e);
      }
    }
  }, {
    key: "onKeyUp",
    value: function onKeyUp(e) {
      var onKeyUp = this.props.onKeyUp;

      if (onKeyUp) {
        this.check();
        onKeyUp(e);
      }
    }
  }, {
    key: "check",
    value: function check() {
      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var _ref = this.props,
          validationOption = _ref.validationOption;

      var _getDefaultValidation = getDefaultValidationOption(validationOption),
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
        if (VALIDATE_OPTION_TYPE_LIST.indexOf(type) !== -1) {
          if (!_message.default[locale] || !_message.default[locale][TYPE]) {
            console.error(_const.REACT_INPUTS_VALIDATION_CUSTOM_ERROR_MESSAGE_EXAMPLE);
            return;
          }

          var _msg = _message.default[locale][TYPE];

          var _value = val || this.value;

          var nameText = name ? name : ''; // CHECK EMPTY

          if (required) {
            if (_validator.default.empty(_value)) {
              this.handleCheckEnd(true, _msg.empty(nameText));
              return;
            }
          }

          if (String(_value) !== '') {
            // CHECK REGEX
            if (reg) {
              if (_validator.default['reg'](reg, _value)) {
                this.handleCheckEnd(true, regMsg !== '' ? regMsg : _msg.invalid(nameText));
                return;
              }
            } // CHECK STRING


            if (type === VALIDATE_OPTION_TYPE_LIST[0]) {
              if (min || max) {
                if (min && max) {
                  if (String(_value).length < min || String(_value).length > max) {
                    this.handleCheckEnd(true, _msg.inBetween(nameText)(min)(max));
                    return;
                  }
                } else {
                  if (min) {
                    if (String(_value).length < min) {
                      this.handleCheckEnd(true, _msg.lessThan(nameText)(min));
                      return;
                    }
                  }

                  if (max) {
                    if (String(_value).length > max) {
                      this.handleCheckEnd(true, _msg.greaterThan(nameText)(max));
                      return;
                    }
                  }
                }
              }

              if (length) {
                if (String(_value).length !== length) {
                  this.handleCheckEnd(true, _msg.lengthEqual(nameText)(length));
                  return;
                }
              }
            }
          } // CHECK CUSTOM FUNCTION


          if (customFunc && typeof customFunc === 'function') {
            var customFuncResult = customFunc(_value);

            if (customFuncResult !== true) {
              this.handleCheckEnd(true, customFuncResult);
              return;
            }
          }

          if (msgOnSuccess) {
            this.setState({
              successMsg: msgOnSuccess
            });
          }

          this.handleCheckEnd(false, msgOnSuccess);
        } else {
          console.error("The valid ".concat(_utils.default.toCamelCase(TYPE)(true), " \"type\" options in validationOption are [").concat(VALIDATE_OPTION_TYPE_LIST.map(function (i) {
            return i;
          }), "]"));
        }
      } else {
        console.error('Please provide "type" in validationOption');
      }
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
      var _ref3 = this.props,
          tabIndex = _ref3.tabIndex,
          id = _ref3.id,
          name = _ref3.name,
          type = _ref3.type,
          value = _ref3.value,
          disabled = _ref3.disabled,
          maxLength = _ref3.maxLength,
          placeholder = _ref3.placeholder,
          classNameWrapper = _ref3.classNameWrapper,
          classNameContainer = _ref3.classNameContainer,
          classNameInput = _ref3.classNameInput,
          customStyleWrapper = _ref3.customStyleWrapper,
          customStyleContainer = _ref3.customStyleContainer,
          customStyleInput = _ref3.customStyleInput,
          validationOption = _ref3.validationOption,
          cols = _ref3.cols,
          rows = _ref3.rows;
      var _this$state = this.state,
          err = _this$state.err,
          msg = _this$state.msg,
          successMsg = _this$state.successMsg;
      var wrapperClass = "".concat(classNameWrapper, " ").concat(reactInputsValidationCss['textarea__wrapper'], " ").concat(err && reactInputsValidationCss['error'], " ").concat(successMsg && !err && reactInputsValidationCss['success'], " ").concat(disabled && reactInputsValidationCss['disabled']);
      var containerClass = "".concat(classNameContainer, " ").concat(reactInputsValidationCss['textarea__container'], " ").concat(err && reactInputsValidationCss['error'], " ").concat(successMsg && !err && reactInputsValidationCss['success'], " ").concat(disabled && reactInputsValidationCss['disabled']);
      var inputClass = "".concat(classNameInput, " ").concat(reactInputsValidationCss['textarea__input'], " ").concat(err && reactInputsValidationCss['error'], " ").concat(successMsg && !err && reactInputsValidationCss['success'], " ").concat(disabled && reactInputsValidationCss['disabled']);
      var errmsgClass = "".concat(reactInputsValidationCss['msg'], " ").concat(err && reactInputsValidationCss['error']);
      var successMsgClass = "".concat(reactInputsValidationCss['msg'], " ").concat(!err && reactInputsValidationCss['success']);
      var msgHtml;

      var _getDefaultValidation3 = getDefaultValidationOption(validationOption),
          showMsg = _getDefaultValidation3.showMsg;

      if (showMsg && err && msg) {
        msgHtml = React.createElement("div", {
          className: errmsgClass
        }, msg);
      }

      if (showMsg && !err && successMsg) {
        msgHtml = React.createElement("div", {
          className: successMsgClass
        }, successMsg);
      }

      return React.createElement("div", {
        className: wrapperClass,
        style: customStyleWrapper
      }, React.createElement("div", {
        className: containerClass,
        style: customStyleContainer
      }, React.createElement("textarea", {
        tabIndex: Number(tabIndex),
        id: id,
        name: name,
        value: value,
        disabled: disabled,
        onBlur: this.onBlur,
        maxLength: Number(maxLength),
        onKeyUp: this.onKeyUp,
        onFocus: this.onFocus,
        className: inputClass,
        onChange: this.onChange,
        style: customStyleInput,
        placeholder: placeholder,
        cols: Number(cols),
        rows: Number(rows)
      })), msgHtml);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.validate === true && prevState.validate === false) {
        return {
          validate: nextProps.validate
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
  type: 'text',
  value: '',
  cols: DEFAULT_ROWS,
  rows: DEFAULT_COLS,
  disabled: false,
  validate: false,
  maxLength: DEFAULT_MAX_LENGTH,
  placeholder: '',
  classNameInput: '',
  classNameWrapper: '',
  classNameContainer: '',
  customStyleInput: {},
  customStyleWrapper: {},
  customStyleContainer: {},
  validationOption: {},
  onChange: function onChange() {}
});

var _default = Index;
exports.default = _default;