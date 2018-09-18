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
    'active': 'react-inputs-validation__active___3eZBB',
    'select__options-container-animate': 'react-inputs-validation__select__options-container-animate___2Rm--',
    'show': 'react-inputs-validation__show___2NI3u',
    'select__options-container': 'react-inputs-validation__select__options-container___d54qE',
    'select__dropdown': 'react-inputs-validation__select__dropdown___11yDr',
    'select__dropdown-icon': 'react-inputs-validation__select__dropdown-icon___1T5r2',
    'select__dropdown-icon-container': 'react-inputs-validation__select__dropdown-icon-container___2ild-'
  };
} catch (ex) {}
var TYPE = 'select';
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
      value: props.value,
      show: false,
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
    _this.onBlur = _this.onBlur.bind(_this);
    _this.onFocus = _this.onFocus.bind(_this);
    _this.pageClick = _this.pageClick.bind(_this);
    return _this;
  }

  _createClass(Index, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (document.addEventListener) {
        window.addEventListener('mousedown', this.pageClick, false);
        window.addEventListener('touchstart', this.pageClick, false);
      } else {
        document.attachEvent('onmousedown', this.pageClick);
        document.attachEvent('touchstart', this.pageClick);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (document.removeEventListener) {
        window.removeEventListener('mousedown', this.pageClick, false);
        window.removeEventListener('touchstart', this.pageClick, false);
      } else {
        document.detachEvent('onmousedown', this.pageClick);
        document.detachEvent('touchstart', this.pageClick);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.validate == false && nextProps.validate == true) {
        this.check();
      }
      if (String(this.props.value) != String(nextProps.value)) {
        this.setState({
          value: nextProps.value,
          err: false,
          successMsg: undefined
        });
      }
    }
  }, {
    key: 'onChange',
    value: function onChange(value, e) {
      var onChange = this.props.onChange;

      onChange && onChange(value, e);
      this.setState({ value: value });
      if (this.state.err) {
        this.setState({ err: false });
      } else {
        this.setState({ successMsg: undefined });
      }
    }
  }, {
    key: 'onClick',
    value: function onClick(e) {
      var onClick = this.props.onClick;

      onClick && onClick(e);
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
      this.focus = true;
      var onFocus = this.props.onFocus;

      if (onFocus) {
        onFocus(e);
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
      this.toggleShow(false);
    }
  }, {
    key: 'toggleShow',
    value: function toggleShow(show) {
      this.setState({ show: show });
    }
  }, {
    key: 'check',
    value: function check() {
      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var value = this.state.value;

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
      if (!Msg) {
        console.error(_const.REACT_INPUTS_VALIDATION_CUSTOM_ERROR_MESSAGE_EXAMPLE);
        return;
      }
      var nameText = name ? name : '';
      if (required) {
        if (isValidateValue(value)) {
          this.handleCheckEnd(true, Msg.empty ? Msg.empty(nameText) : '');
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
          optionList = _props.optionList,
          disabled = _props.disabled,
          classNameWrapper = _props.classNameWrapper,
          classNameContainer = _props.classNameContainer,
          classNameSelect = _props.classNameSelect,
          classNameOptionListContainer = _props.classNameOptionListContainer,
          classNameOptionListItem = _props.classNameOptionListItem,
          classNameDropdownIconOptionListItem = _props.classNameDropdownIconOptionListItem,
          customStyleWrapper = _props.customStyleWrapper,
          customStyleContainer = _props.customStyleContainer,
          customStyleSelect = _props.customStyleSelect,
          customStyleOptionListContainer = _props.customStyleOptionListContainer,
          customStyleOptionListItem = _props.customStyleOptionListItem,
          selectHtml = _props.selectHtml,
          selectOptionListItemHtml = _props.selectOptionListItemHtml,
          validationOption = _props.validationOption;
      var _state = this.state,
          value = _state.value,
          err = _state.err,
          msg = _state.msg,
          show = _state.show,
          successMsg = _state.successMsg;


      var wrapperClass = (0, _classnames2.default)(classNameWrapper, STYLES['select__wrapper'], err && STYLES['error'], successMsg && !err && STYLES['success'], disabled && STYLES['disabled']);

      var containerClass = (0, _classnames2.default)(classNameContainer, STYLES['select__container'], err && STYLES['error'], show && STYLES['show'], successMsg && !err && STYLES['success'], disabled && STYLES['disabled']);

      var inputClass = (0, _classnames2.default)(STYLES['select__input'], err && STYLES['error'], successMsg && !err && STYLES['success'], disabled && STYLES['disabled']);

      var selectClass = (0, _classnames2.default)(classNameSelect, STYLES['ellipsis'], STYLES['select__dropdown-menu'], err && STYLES['error'], successMsg && !err && STYLES['success'], disabled && STYLES['disabled']);

      var selectOptionListContainerClass = (0, _classnames2.default)(classNameOptionListContainer, STYLES['select__options-container'], err && STYLES['error'], show && STYLES['show'], successMsg && !err && STYLES['success'], disabled && STYLES['disabled']);

      var selectOptionListItemClass = (0, _classnames2.default)(classNameOptionListItem, STYLES['select__options-item'], err && STYLES['error'], successMsg && !err && STYLES['success'], disabled && STYLES['disabled']);

      var dropdownIconClass = (0, _classnames2.default)(classNameDropdownIconOptionListItem, STYLES['select__dropdown-icon']);

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
      var optionListHtml = void 0;
      var item = void 0;
      optionList.filter(function (i) {
        if (String(i.id) == String(value)) {
          item = i;
        }
      });
      if (optionList.length) {
        if (selectOptionListItemHtml) {
          optionListHtml = selectOptionListItemHtml;
        } else {
          optionListHtml = optionList.map(function (i, k) {
            return _react2.default.createElement(
              'div',
              {
                className: String(i.id) == String(value) ? selectOptionListItemClass + ' ' + STYLES['active'] : '' + selectOptionListItemClass,
                key: k,
                style: customStyleOptionListItem,
                onClick: function onClick(e) {
                  _this2.onChange(i.id, e);
                }
              },
              i.name
            );
          });
        }
      }
      var selectorHtml = selectHtml;
      if (!selectorHtml) {
        selectorHtml = _react2.default.createElement(
          'div',
          { className: STYLES['select__dropdown'] },
          _react2.default.createElement(
            'div',
            { className: STYLES['ellipsis'], style: { width: '100%' } },
            item.name
          ),
          _react2.default.createElement('div', { className: dropdownIconClass })
        );
      }
      return _react2.default.createElement(
        'div',
        {
          tabIndex: tabIndex,
          id: STYLES['select__wrapper'],
          className: wrapperClass,
          style: customStyleWrapper,
          onClick: function onClick(e) {
            _this2.onClick(e);
            !disabled ? _this2.toggleShow(!show) : '';
          },
          onFocus: this.onFocus,
          onBlur: this.onBlur,
          ref: function ref(_ref2) {
            return _this2.wrapper = _ref2;
          }
        },
        _react2.default.createElement(
          'div',
          { className: containerClass, style: customStyleContainer },
          _react2.default.createElement('input', { id: id, name: name, type: 'hidden', value: value, className: inputClass, onChange: function onChange() {}, ref: function ref(_ref) {
              return _this2.input = _ref;
            } }),
          _react2.default.createElement(
            'div',
            { className: selectClass, style: customStyleSelect },
            selectorHtml
          ),
          _react2.default.createElement(
            'div',
            { className: selectOptionListContainerClass, style: customStyleOptionListContainer },
            optionListHtml
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
  disabled: false,
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
};

Index.propTypes = {
  tabIndex: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  id: _propTypes2.default.string,
  name: _propTypes2.default.string,
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  disabled: _propTypes2.default.bool,
  validate: _propTypes2.default.bool,
  optionList: _propTypes2.default.array.isRequired,
  onChange: _propTypes2.default.func.isRequired,
  onClick: _propTypes2.default.func,
  onBlur: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  validationOption: _propTypes2.default.object,
  locale: _propTypes2.default.string,
  selectHtml: _propTypes2.default.element,
  selectOptionListItemHtml: _propTypes2.default.array,
  classNameWrapper: _propTypes2.default.string,
  classNameContainer: _propTypes2.default.string,
  classNameSelect: _propTypes2.default.string,
  classNameOptionListContainer: _propTypes2.default.string,
  classNameDropdownIconOptionListItem: _propTypes2.default.string,
  classNameOptionListItem: _propTypes2.default.string,
  customStyleWrapper: _propTypes2.default.object,
  customStyleContainer: _propTypes2.default.object,
  customStyleSelect: _propTypes2.default.object,
  customStyleOptionListContainer: _propTypes2.default.object,
  customStyleDropdownIcon: _propTypes2.default.object,
  customStyleOptionListItem: _propTypes2.default.object,
  validationCallback: _propTypes2.default.func
};

exports.default = Index;