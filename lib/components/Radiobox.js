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

  function Index(props) {
    var _this;

    _classCallCheck(this, Index);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Index).call(this, props));
    _this.state = {
      err: false,
      msg: '',
      successMsg: undefined,
      value: props.value,
      validate: props.validate
    };
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onBlur = _this.onBlur.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onFocus = _this.onFocus.bind(_assertThisInitialized(_assertThisInitialized(_this)));
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
    value: function onChange(val, e) {
      var onChange = this.props.onChange;
      onChange && onChange(val, e);
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
      var onFocus = this.props.onFocus;

      if (onFocus) {
        onFocus(e);
      }
    }
  }, {
    key: "check",
    value: function check() {
      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var value = this.props.value;

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
      var _this2 = this;

      var _ref3 = this.props,
          tabIndex = _ref3.tabIndex,
          id = _ref3.id,
          name = _ref3.name,
          value = _ref3.value,
          disabled = _ref3.disabled,
          optionList = _ref3.optionList,
          classNameWrapper = _ref3.classNameWrapper,
          classNameContainer = _ref3.classNameContainer,
          classNameInput = _ref3.classNameInput,
          classNameOptionListItem = _ref3.classNameOptionListItem,
          customStyleWrapper = _ref3.customStyleWrapper,
          customStyleContainer = _ref3.customStyleContainer,
          customStyleInput = _ref3.customStyleInput,
          customStyleOptionListItem = _ref3.customStyleOptionListItem,
          validationOption = _ref3.validationOption;
      var _this$state = this.state,
          err = _this$state.err,
          msg = _this$state.msg,
          successMsg = _this$state.successMsg;
      var wrapperClass = "".concat(classNameWrapper, " ").concat(err && reactInputsValidationCss['error'], " ").concat(successMsg && !err && reactInputsValidationCss['success'], " ").concat(reactInputsValidationCss['radiobox__wrapper'], " ").concat(disabled && reactInputsValidationCss['disabled']);
      var containerClass = "".concat(classNameContainer, " ").concat(err && reactInputsValidationCss['error'], " ").concat(successMsg && !err && reactInputsValidationCss['success'], " ").concat(reactInputsValidationCss['radiobox__container'], " ").concat(disabled && reactInputsValidationCss['disabled']);
      var inputClass = "".concat(classNameInput, " ").concat(err && reactInputsValidationCss['error'], " ").concat(successMsg && !err && reactInputsValidationCss['success'], " ").concat(reactInputsValidationCss['radiobox__input'], " ").concat(disabled && reactInputsValidationCss['disabled']);
      var labelClass = "".concat(err && reactInputsValidationCss['error'], " ").concat(successMsg && !err && reactInputsValidationCss['success'], " ").concat(reactInputsValidationCss['radiobox__label'], " ").concat(disabled && reactInputsValidationCss['disabled']);
      var optionListItemClass = "".concat(classNameOptionListItem, " ").concat(err && reactInputsValidationCss['error'], " ").concat(successMsg && !err && reactInputsValidationCss['success'], " ").concat(reactInputsValidationCss['radiobox__item'], " ").concat(disabled && reactInputsValidationCss['disabled']);
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

      var optionHtml;

      if (optionList.length) {
        optionHtml = optionList.map(function (i, k) {
          var checked = String(i.id) === String(value) ? true : false;
          return React.createElement("div", {
            className: optionListItemClass,
            style: customStyleOptionListItem,
            key: k
          }, React.createElement("input", {
            id: "".concat(id, "-").concat(k),
            name: name,
            type: "radio",
            value: value,
            checked: checked,
            disabled: disabled,
            className: checked ? "".concat(reactInputsValidationCss['checked'], " ").concat(inputClass) : "".concat(inputClass),
            onChange: function onChange(e) {
              return _this2.onChange(i.id, e);
            },
            style: customStyleInput
          }), React.createElement("label", {
            htmlFor: "".concat(id, "-").concat(k),
            className: checked ? "".concat(reactInputsValidationCss['checked'], " ").concat(labelClass) : "".concat(labelClass)
          }, i.name));
        });
      }

      return React.createElement("div", {
        id: id,
        tabIndex: Number(tabIndex),
        className: wrapperClass,
        style: customStyleWrapper,
        onClick: this.onClick,
        onBlur: this.onBlur,
        onFocus: this.onFocus
      }, React.createElement("div", {
        className: containerClass,
        style: customStyleContainer
      }, optionHtml), msgHtml);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.validate === true && prevState.validate === false) {
        return {
          validate: nextProps.validate
        };
      }

      if (nextProps.value !== prevState.value) {
        var o = {
          value: nextProps.value
        };

        if (prevState.err) {
          o['err'] = false;
        } else {
          o['successMsg'] = undefined;
        }

        return o;
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
  classNameInput: '',
  classNameContainer: '',
  classNameOptionListItem: '',
  customStyleWrapper: {},
  customStyleContainer: {},
  customStyleInput: {},
  customStyleOptionListItem: {},
  validationOption: {},
  onChange: function onChange() {}
});

var _default = Index;
exports.default = _default;