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

var Index = function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index(props) {
    _classCallCheck(this, Index);

    var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));

    _this.state = {};
    _this.onChange = _this.onChange.bind(_this);
    _this.onClick = _this.onClick.bind(_this);
    return _this;
  }

  _createClass(Index, [{
    key: 'onChange',
    value: function onChange() {
      var onChange = this.props.onChange;

      onChange && onChange(this.input.value);
    }
  }, {
    key: 'onClick',
    value: function onClick() {
      var onClick = this.props.onClick;

      onClick && onClick();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          id = _props.id,
          name = _props.name,
          value = _props.value,
          checked = _props.checked,
          disabled = _props.disabled,
          labelHtml = _props.labelHtml,
          classNameWrapper = _props.classNameWrapper,
          classNameContainer = _props.classNameContainer,
          classNameInput = _props.classNameInput,
          customStyleWrapper = _props.customStyleWrapper,
          customStyleContainer = _props.customStyleContainer,
          customStyleInput = _props.customStyleInput;


      var wrapperClass = (0, _classnames2.default)(classNameWrapper, STYLES['radiobox__wrapper'], disabled && STYLES['disabled']);

      var containerClass = (0, _classnames2.default)(classNameContainer, STYLES['radiobox__container'], disabled && STYLES['disabled']);

      var inputClass = (0, _classnames2.default)(classNameInput, STYLES['radiobox__input'], disabled && STYLES['disabled']);

      var labelClass = (0, _classnames2.default)(STYLES['radiobox__label'], checked && STYLES['checked'], disabled && STYLES['disabled']);

      return _react2.default.createElement(
        'div',
        { className: wrapperClass, style: customStyleWrapper },
        _react2.default.createElement(
          'div',
          { className: containerClass, style: customStyleContainer },
          _react2.default.createElement('input', {
            id: id,
            name: name,
            type: 'radio',
            value: value,
            checked: checked,
            disabled: disabled,
            className: inputClass,
            onChange: this.onChange,
            style: customStyleInput,
            ref: function ref(_ref) {
              return _this2.input = _ref;
            }
          }),
          _react2.default.createElement(
            'label',
            { htmlFor: id, className: labelClass, onClick: this.onClick },
            labelHtml
          )
        )
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
  classNameContainer: '',
  customStyleInput: {},
  customStyleWrapper: {},
  customStyleContainer: {},
  locale: 'zh-CN',
  onChange: function onChange() {}
};

Index.propTypes = {
  id: _propTypes2.default.string,
  name: _propTypes2.default.string,
  value: _propTypes2.default.string,
  checked: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  labelHtml: _propTypes2.default.element,
  onChange: _propTypes2.default.func.isRequired,
  onClick: _propTypes2.default.func,
  locale: _propTypes2.default.string,
  classNameWrapper: _propTypes2.default.string,
  classNameContainer: _propTypes2.default.string,
  classNameInput: _propTypes2.default.string,
  customStyleWrapper: _propTypes2.default.object,
  customStyleContainer: _propTypes2.default.object,
  customStyleInput: _propTypes2.default.object
};

exports.default = Index;