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

var _message = require('./message');

var _message2 = _interopRequireDefault(_message);

var _const = require('./const');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var STYLES = {};
try {
  STYLES = {
    'ellipsis': 'styles__ellipsis___1Biim',
    'textbox__wrapper': 'styles__textbox__wrapper___1metW',
    'textbox__container': 'styles__textbox__container___201gr',
    'textbox__input': 'styles__textbox__input___2oawc',
    'error': 'styles__error___1nhWn',
    'success': 'styles__success___1FL9T',
    'disabled': 'styles__disabled___1zsKW',
    'msg': 'styles__msg___hsT4D',
    'textarea__wrapper': 'styles__textarea__wrapper___3FcGS',
    'textarea__container': 'styles__textarea__container___1tpjx',
    'textarea__input': 'styles__textarea__input___3lvhU',
    'radiobox__wrapper': 'styles__radiobox__wrapper___3lK3t',
    'radiobox__container': 'styles__radiobox__container___1jJDU',
    'radiobox__input': 'styles__radiobox__input___11V3r',
    'radiobox__label': 'styles__radiobox__label___1hEOM',
    'checked': 'styles__checked___2uOBE',
    'radiobox__item': 'styles__radiobox__item___61UB8',
    'checkbox__wrapper': 'styles__checkbox__wrapper___3GU3Y',
    'checkbox__input': 'styles__checkbox__input___3KHJC',
    'checkbox__container': 'styles__checkbox__container___WG1W9',
    'checkbox__box': 'styles__checkbox__box___YIsyv',
    'box': 'styles__box___kjuhf',
    'select__wrapper': 'styles__select__wrapper___1X8uy',
    'select__input': 'styles__select__input___Ly2id',
    'select__container': 'styles__select__container___L78zf',
    'select__options-item': 'styles__select__options-item___n_5Zb',
    'active': 'styles__active___lsdmO',
    'select__options-container-animate': 'styles__select__options-container-animate___3-1rO',
    'show': 'styles__show___sWWrK',
    'select__options-container': 'styles__select__options-container___2sn0x',
    'select__dropdown': 'styles__select__dropdown___1q0EI',
    'select__dropdown-icon': 'styles__select__dropdown-icon___347Qy',
    'select__dropdown-icon-container': 'styles__select__dropdown-icon-container___OafaA'
  };
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

  if (!locale) {
    locale = _const.LOCALE_OPTION_LIST[0];
  } else {
    if (_const.LOCALE_OPTION_LIST.indexOf(locale) == -1) {
      locale = _const.LOCALE_OPTION_LIST[0];
    }
  }
  name = name ? name : '';
  check = check ? check : true;
  showMsg = showMsg ? showMsg : true;
  required = required ? required : true;
  msgOnSuccess = msgOnSuccess ? msgOnSuccess : '';
  msgOnError = msgOnError ? msgOnError : '';
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
      if (document.addEventListener) {
        window.addEventListener('mousedown', this.pageClick, false);
      } else {
        document.attachEvent('onmousedown', this.pageClick);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (document.removeEventListener) {
        window.removeEventListener('mousedown', this.pageClick, false);
      } else {
        document.detachEvent('onmousedown', this.pageClick);
      }
    }
  }, {
    key: 'onChange',
    value: function onChange() {
      var val = !this.state.checked;
      this.setState({ checked: val });
      var onChange = this.props.onChange;

      onChange && onChange(val);
      if (this.state.err) {
        this.setState({ err: false });
      } else {
        this.setState({ successMsg: undefined });
      }
    }
  }, {
    key: 'toggleChecked',
    value: function toggleChecked(checked) {
      this.setState({ checked: checked });
    }
  }, {
    key: 'onClick',
    value: function onClick() {
      this.onChange();
      var onClick = this.props.onClick;

      onClick && onClick();
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
    value: function onFocus() {
      this.focus = true;
      var onFocus = this.props.onFocus;

      if (onFocus) {
        this.check();
        onFocus();
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
        var Msg = _message2.default[locale][TYPE];
        if (!this.state.checked) {
          this.handleCheckEnd(true, Msg.unchecked(name ? name : ''));
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
      var validationgCallback = this.props.validationgCallback;

      validationgCallback && validationgCallback(err);
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
        {
          tabIndex: tabIndex,
          className: wrapperClass,
          style: customStyleWrapper,
          onClick: this.onClick,
          onBlur: this.onBlur,
          onFocus: this.onFocus,
          ref: function ref(_ref2) {
            return _this2.wrapper = _ref2;
          }
        },
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
  validationgCallback: _propTypes2.default.func
};

exports.default = Index;