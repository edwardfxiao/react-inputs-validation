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
  STYLES = {
    'ellipsis': 'react-inputs-validation__ellipsis___3-Api',
    'textbox__wrapper': 'react-inputs-validation__textbox__wrapper___3tnXv',
    'textbox__container': 'react-inputs-validation__textbox__container___3KXOM',
    'textbox__input': 'react-inputs-validation__textbox__input___20hDL',
    'error': 'react-inputs-validation__error___2aXSp',
    'success': 'react-inputs-validation__success___3TpwE',
    'disabled': 'react-inputs-validation__disabled___1-57g',
    'msg': 'react-inputs-validation__msg___pxv8o',
    'textarea__wrapper': 'react-inputs-validation__textarea__wrapper___35GhF',
    'textarea__container': 'react-inputs-validation__textarea__container___2fbGp',
    'textarea__input': 'react-inputs-validation__textarea__input___1CFm_',
    'radiobox__wrapper': 'react-inputs-validation__radiobox__wrapper___1zZ30',
    'radiobox__container': 'react-inputs-validation__radiobox__container___FD4vb',
    'radiobox__input': 'react-inputs-validation__radiobox__input___2uX2-',
    'radiobox__label': 'react-inputs-validation__radiobox__label___2tQsB',
    'checked': 'react-inputs-validation__checked___2O0Ju',
    'radiobox__item': 'react-inputs-validation__radiobox__item___ejuz1',
    'checkbox__wrapper': 'react-inputs-validation__checkbox__wrapper___1c1rD',
    'checkbox__input': 'react-inputs-validation__checkbox__input___1yF4X',
    'checkbox__container': 'react-inputs-validation__checkbox__container___3I1rX',
    'checkbox__box': 'react-inputs-validation__checkbox__box___1uj8A',
    'box': 'react-inputs-validation__box___3E9nu',
    'select__wrapper': 'react-inputs-validation__select__wrapper___1B4OH',
    'select__input': 'react-inputs-validation__select__input___3h-P7',
    'select__container': 'react-inputs-validation__select__container___3jgUR',
    'select__options-item': 'react-inputs-validation__select__options-item___30yY4',
    'select__options-item-show-cursor': 'react-inputs-validation__select__options-item-show-cursor___1ZT3b',
    'select__no-mouse': 'react-inputs-validation__select__no-mouse___2uRg6',
    'select__hover-active': 'react-inputs-validation__select__hover-active___2z1MQ',
    'active': 'react-inputs-validation__active___3eZBB',
    'select__options-container-animate': 'react-inputs-validation__select__options-container-animate___2Rm--',
    'show': 'react-inputs-validation__show___2NI3u',
    'select__options-container': 'react-inputs-validation__select__options-container___d54qE',
    'select__dropdown': 'react-inputs-validation__select__dropdown___11yDr',
    'select__dropdown-icon': 'react-inputs-validation__select__dropdown-icon___1T5r2',
    'select__dropdown-name': 'react-inputs-validation__select__dropdown-name___3hghL',
    'select__dropdown-icon-container': 'react-inputs-validation__select__dropdown-icon-container___2ild-'
  };
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