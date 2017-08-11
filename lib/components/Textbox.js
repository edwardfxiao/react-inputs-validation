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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var STYLES = {};
try {
  STYLES = {
    'textbox__wrapper': 'styles__textbox__wrapper___1metW',
    'textbox__container': 'styles__textbox__container___201gr',
    'textbox__input': 'styles__textbox__input___2oawc',
    'error': 'styles__error___1nhWn',
    'success': 'styles__success___1FL9T',
    'disabled': 'styles__disabled___1zsKW',
    'msg': 'styles__msg___hsT4D',
    'radiobox__wrapper': 'styles__radiobox__wrapper___3lK3t',
    'radiobox__container': 'styles__radiobox__container___1jJDU',
    'radiobox__input': 'styles__radiobox__input___11V3r',
    'radiobox__label': 'styles__radiobox__label___1hEOM',
    'checked': 'styles__checked___2uOBE',
    'checkbox__wrapper': 'styles__checkbox__wrapper___3GU3Y',
    'checkbox__container': 'styles__checkbox__container___WG1W9',
    'checkbox__box': 'styles__checkbox__box___YIsyv',
    'box': 'styles__box___kjuhf'
  };
} catch (ex) {}
var TYPE = 'textbox';
var VALIDATE_OPTION_TYPE_LIST = ['string', 'number', 'phone'];

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
      var _props = this.props,
          validationOption = _props.validationOption,
          locale = _props.locale;
      var reg = validationOption.reg,
          min = validationOption.min,
          max = validationOption.max,
          type = validationOption.type,
          name = validationOption.name,
          check = validationOption.check,
          length = validationOption.length,
          regMsg = validationOption.regMsg,
          compare = validationOption.compare,
          required = validationOption.required,
          phoneCountry = validationOption.phoneCountry,
          msgOnSuccess = validationOption.msgOnSuccess;

      if (!check) {
        return;
      }
      if (type) {
        if (VALIDATE_OPTION_TYPE_LIST.indexOf(type) != -1) {
          var Msg = _message2.default[locale][TYPE][type];
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
          // CHECK NUMBER
          if (type == VALIDATE_OPTION_TYPE_LIST[1]) {
            if (!_validator2.default[type](value)) {
              this.handleCheckEnd(true, Msg.invalid(nameText));
              return;
            }
            if (min || max) {
              if (min && max) {
                if (!_validator2.default[type](value, min, max)) {
                  this.handleCheckEnd(true, Msg.inBetween(nameText)(min)(max));
                  return;
                }
              } else {
                if (min) {
                  if (!_validator2.default[type](value, min)) {
                    this.handleCheckEnd(true, Msg.lessThan(nameText)(min));
                    return;
                  }
                }
                if (max) {
                  if (!_validator2.default[type](value, 0, max)) {
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
          // CHECK PHONE
          if (type == VALIDATE_OPTION_TYPE_LIST[2]) {
            var region = phoneCountry ? phoneCountry : locale;
            if (!_validator2.default[type](value, region)) {
              this.handleCheckEnd(true, Msg.invalid(nameText));
              return;
            }
          }
          // CHECK EQUAL
          if (compare && compare != '') {
            if (value != compare) {
              this.handleCheckEnd(true, Msg.twoInputsNotEqual());
              return;
            }
          }
          if (msgOnSuccess) {
            this.setState({ successMsg: msgOnSuccess });
          }
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
      if (err && this.props.validationOption.msgOnError) {
        msg = this.props.validationOption.msgOnError;
      }
      this.setState({ err: err, msg: msg });
      var validationgCallback = this.props.validationgCallback;

      validationgCallback && validationgCallback(err);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          id = _props2.id,
          name = _props2.name,
          type = _props2.type,
          value = _props2.value,
          disabled = _props2.disabled,
          placeholder = _props2.placeholder,
          classNameWrapper = _props2.classNameWrapper,
          classNameContainer = _props2.classNameContainer,
          classNameInput = _props2.classNameInput,
          customStyleWrapper = _props2.customStyleWrapper,
          customStyleContainer = _props2.customStyleContainer,
          customStyleInput = _props2.customStyleInput,
          validationOption = _props2.validationOption;
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
      if (validationOption.showMsg && err && msg) {
        msgHtml = _react2.default.createElement(
          'div',
          { className: errMsgClass },
          msg
        );
      }
      if (validationOption.showMsg && !err && successMsg) {
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
            id: id,
            name: name,
            type: type,
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
  id: '',
  name: '',
  type: '',
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
  validationOption: {
    reg: '',
    regMsg: '',
    type: '',
    name: '',
    max: 0,
    min: 0,
    length: 0,
    check: true,
    compare: '',
    msgOnError: '',
    showMsg: false,
    required: false,
    msgOnSuccess: '',
    phoneCountry: 'zh-CN'
  },
  locale: 'zh-CN',
  onChange: function onChange() {}
};

Index.propTypes = {
  id: _propTypes2.default.string,
  name: _propTypes2.default.string,
  type: _propTypes2.default.string.isRequired,
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
  locale: _propTypes2.default.string,
  onChange: _propTypes2.default.func.isRequired,
  onBlur: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  onKeyUp: _propTypes2.default.func,
  validationgCallback: _propTypes2.default.func
};

exports.default = Index;