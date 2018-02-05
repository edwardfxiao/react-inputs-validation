'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = require('./utils');

var _message = require('./message');

var _message2 = _interopRequireDefault(_message);

var _validator = require('./validator');

var _validator2 = _interopRequireDefault(_validator);

var _const = require('./const');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var STYLES = {};
try {
  STYLES = {};
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
      msgOnSuccess = obj.msgOnSuccess;

  if (!locale) {
    locale = _const.LOCALE_OPTION_LIST[0];
  } else {
    if (_const.LOCALE_OPTION_LIST.indexOf(locale) == -1) {
      locale = _const.LOCALE_OPTION_LIST[0];
    }
  }
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
    value: function onChange() {
      var onChange = this.props.onChange;

      onChange && onChange(this.input.value);
      if (this.state.err) {
        this.setState({ err: false });
      } else {
        this.setState({ successMsg: undefined });
      }
    }
  }, {
    key: 'onBlur',
    value: function onBlur() {
      var onBlur = this.props.onBlur;

      if (onBlur) {
        this.check();
        onBlur();
      }
    }
  }, {
    key: 'onFocus',
    value: function onFocus() {
      var onFocus = this.props.onFocus;

      if (onFocus) {
        this.check();
        onFocus();
      }
    }
  }, {
    key: 'onKeyUp',
    value: function onKeyUp() {
      var onKeyUp = this.props.onKeyUp;

      if (onKeyUp) {
        this.check();
        onKeyUp();
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
          msgOnSuccess = _getDefaultValidation.msgOnSuccess;

      if (!check) {
        return;
      }
      if (type) {
        if (VALIDATE_OPTION_TYPE_LIST.indexOf(type) != -1) {
          var Msg = _message2.default[locale][TYPE];
          var value = inputValue || this.input.value;
          var nameText = name ? name : '';
          var msg = '';
          // CHECK EMPTY
          if (required) {
            if (_validator2.default.empty(value)) {
              this.handleCheckEnd(true, Msg.empty(nameText));
              return;
            }
          }
          if (String(value) != '') {
            // CHECK REGEX
            if (reg) {
              if (_validator2.default['reg'](reg, value)) {
                msg = regMsg != '' ? regMsg : Msg.invalid(nameText);
                this.handleCheckEnd(true, msg);
                return;
              }
            }
            // CHECK STRING
            if (type === VALIDATE_OPTION_TYPE_LIST[0]) {
              if (min || max) {
                if (min && max) {
                  if (String(value).length < min || String(value).length > max) {
                    this.handleCheckEnd(true, Msg.inBetween(nameText)(min)(max));
                    return;
                  }
                } else {
                  if (min) {
                    if (String(value).length < min) {
                      this.handleCheckEnd(true, Msg.lessThan(nameText)(min));
                      return;
                    }
                  }
                  if (max) {
                    if (String(value).length > max) {
                      this.handleCheckEnd(true, Msg.greaterThan(nameText)(max));
                      return;
                    }
                  }
                }
              }
              if (length) {
                if (String(value).length != length) {
                  this.handleCheckEnd(true, Msg.lengthEqual(nameText)(length));
                  return;
                }
              }
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