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
var TYPE = 'radiobox';
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
    value: function onChange(val) {
      var onChange = this.props.onChange;

      onChange && onChange(val);
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
      this.focus = true;
      var onFocus = this.props.onFocus;

      if (onFocus) {
        onFocus();
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
      var Msg = _message2.default[locale][TYPE];
      var nameText = name ? name : '';
      if (required) {
        if (isValidateValue(value)) {
          this.handleCheckEnd(true, Msg.empty(nameText));
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
            {
              className: optionListItemClass,
              style: customStyleOptionListItem,
              key: k
            },
            _react2.default.createElement('input', {
              id: id + '-' + k,
              name: name,
              type: 'radio',
              value: value,
              checked: checked,
              disabled: disabled,
              className: checked ? STYLES['checked'] + ' ' + inputClass : '' + inputClass,
              onChange: function onChange() {
                return _this2.onChange(i.id);
              },
              style: customStyleInput
            }),
            _react2.default.createElement(
              'label',
              {
                htmlFor: id + '-' + k,
                className: checked ? STYLES['checked'] + ' ' + labelClass : '' + labelClass
              },
              i.name
            )
          );
        });
      }

      return _react2.default.createElement(
        'div',
        {
          id: id,
          tabIndex: tabIndex,
          className: wrapperClass,
          style: customStyleWrapper,
          onClick: this.onClick,
          onBlur: this.onBlur,
          onFocus: this.onFocus
        },
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