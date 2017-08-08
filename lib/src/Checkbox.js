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

var TYPE = 'checkbox';

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
    return _this;
  }

  _createClass(Index, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.validating == false && nextProps.validating == true) {
        this.check();
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
    key: 'onClick',
    value: function onClick() {
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
    key: 'onFocus',
    value: function onFocus() {
      var onFocus = this.props.onFocus;

      if (onFocus) {
        this.check();
        onFocus();
      }
    }
  }, {
    key: 'check',
    value: function check() {
      var _props = this.props,
          validationOption = _props.validationOption,
          locale = _props.locale;
      var name = validationOption.name,
          check = validationOption.check,
          required = validationOption.required,
          msgOnSuccess = validationOption.msgOnSuccess;

      if (!check) {
        return;
      }
      if (required) {
        var Msg = _message2.default[locale][TYPE];
        if (!this.state.checked) {
          this.handleCheckEnd(true, Msg.unchecked(name ? name : ''));
          return;
        }
        if (msgOnSuccess) {
          this.setState({ successMsg: msgOnSuccess });
        }
      }
    }
  }, {
    key: 'handleCheckEnd',
    value: function handleCheckEnd(err, msg) {
      if (this.props.validationOption.msgOnError) {
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
          value = _props2.value,
          disabled = _props2.disabled,
          labelHtml = _props2.labelHtml,
          classNameWrapper = _props2.classNameWrapper,
          classNameContainer = _props2.classNameContainer,
          classNameBox = _props2.classNameBox,
          classNameInput = _props2.classNameInput,
          customStyleWrapper = _props2.customStyleWrapper,
          customStyleContainer = _props2.customStyleContainer,
          customStyleBox = _props2.customStyleBox,
          customStyleInput = _props2.customStyleInput,
          validationOption = _props2.validationOption;
      var _state = this.state,
          err = _state.err,
          msg = _state.msg,
          checked = _state.checked,
          successMsg = _state.successMsg;


      var wrapperClass = (0, _classnames2.default)(classNameWrapper, STYLES['checkbox__wrapper'], err && STYLES['error'], successMsg && !err && STYLES['success'], disabled && STYLES['disabled']);

      var containerClass = (0, _classnames2.default)(classNameContainer, STYLES['checkbox__container'], err && STYLES['error'], successMsg && !err && STYLES['success'], disabled && STYLES['disabled']);

      var boxClass = (0, _classnames2.default)(classNameBox, STYLES['checkbox__box'], err && STYLES['error'], checked && STYLES['checked'], successMsg && !err && STYLES['success'], disabled && STYLES['disabled']);

      var inputClass = (0, _classnames2.default)(classNameInput, STYLES['checkbox__input'], err && STYLES['error'], successMsg && !err && STYLES['success'], disabled && STYLES['disabled']);

      var labelClass = (0, _classnames2.default)(STYLES['checkbox__label'], checked && STYLES['checked'], err && STYLES['error'], successMsg && !err && STYLES['success'], disabled && STYLES['disabled']);

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
          {
            className: containerClass,
            style: customStyleContainer,
            onClick: this.onClick
          },
          _react2.default.createElement(
            'div',
            { className: boxClass, style: customStyleBox },
            _react2.default.createElement('div', { className: STYLES['box'] }),
            _react2.default.createElement('input', {
              id: id,
              name: name,
              type: 'checkbox',
              value: value,
              checked: checked,
              disabled: disabled,
              className: inputClass,
              onChange: this.onChange,
              onBlur: this.onBlur,
              onFocus: this.onFocus,
              style: customStyleInput,
              ref: function ref(_ref) {
                return _this2.input = _ref;
              }
            })
          ),
          _react2.default.createElement(
            'label',
            { htmlFor: id, className: labelClass },
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
  id: '',
  name: '',
  value: '',
  checked: false,
  disabled: false,
  labelHtml: undefined,
  classNameInput: '',
  classNameWrapper: '',
  classNameBox: '',
  classNameContainer: '',
  customStyleInput: {},
  customStyleWrapper: {},
  customStyleBox: {},
  customStyleContainer: {},
  validationOption: {
    name: '',
    check: true,
    msgOnError: '',
    showMsg: false,
    required: false,
    msgOnSuccess: ''
  },
  locale: 'zh-CN',
  onChange: function onChange() {}
};

Index.propTypes = {
  id: _propTypes2.default.string,
  name: _propTypes2.default.string,
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.bool]),
  checked: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  labelHtml: _propTypes2.default.element,
  validating: _propTypes2.default.bool,
  onChange: _propTypes2.default.func.isRequired,
  onClick: _propTypes2.default.func,
  onBlur: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  validationOption: _propTypes2.default.object,
  locale: _propTypes2.default.string,
  classNameWrapper: _propTypes2.default.string,
  classNameContainer: _propTypes2.default.string,
  classNameBox: _propTypes2.default.string,
  classNameInput: _propTypes2.default.string,
  customStyleWrapper: _propTypes2.default.object,
  customStyleContainer: _propTypes2.default.object,
  customStyleBox: _propTypes2.default.object,
  customStyleInput: _propTypes2.default.object,
  validationgCallback: _propTypes2.default.func
};

exports.default = Index;