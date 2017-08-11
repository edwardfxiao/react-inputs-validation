import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Message from './message';
let STYLES = {};
try {
  STYLES = require('./styles.css');
} catch (ex) {}

const TYPE = 'select';
const isValidateValue = value => {
  value = String(value);
  if (value == '' || value == 'null' || value == 'undefined') {
    return true;
  } else {
    return false;
  }
};

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      show: false,
      err: false,
      msg: '',
      successMsg: undefined
    };
    if (!props.options.length) {
      console.error(
        'Please provide valid options. i.e options=[{id: "1", name: "title 1"}, {id: "2", name: "title 2"}]'
      );
      return;
    } else {
      props.options.map(i => {
        if (typeof i.name == 'undefined' || typeof i.id == 'undefined') {
          console.error(
            'Please provide valid options. i.e options=[{id: "1", name: "title 1"}, {id: "2", name: "title 2"}]'
          );
        }
        return;
      });
    }
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.pageClick = this.pageClick.bind(this);
  }

  componentDidMount() {
    if (document.addEventListener) {
      window.addEventListener('mousedown', this.pageClick, false);
    } else {
      document.attachEvent('onmousedown', this.pageClick);
    }
  }

  componentWillUnmount() {
    if (document.removeEventListener) {
      window.removeEventListener('mousedown', this.pageClick, false);
    } else {
      document.detachEvent('onmousedown', this.pageClick);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.validating == false && nextProps.validating == true) {
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

  onChange(value) {
    const { onChange } = this.props;
    onChange && onChange(value);
    this.setState({ value });
    if (this.state.err) {
      this.setState({ err: false });
    } else {
      this.setState({ successMsg: undefined });
    }
  }

  onClick() {
    const { onClick } = this.props;
    onClick && onClick();
  }

  onBlur() {
    const { onBlur } = this.props;
    if (onBlur) {
      this.check();
      onBlur();
    }
  }

  onFocus() {
    this.focus = true;
    const { onFocus } = this.props;
    if (onFocus) {
      onFocus();
    }
  }

  pageClick(e) {
    if (this.wrapper.contains(e.target)) {
      return;
    }
    if (this.focus) {
      this.onBlur();
      this.focus = false;
    }
    this.toggleShow(false);
  }

  toggleShow(show) {
    this.setState({ show });
  }

  check(val = null) {
    let { value } = this.state;
    if (val != null) {
      value = val;
    }
    const { validationOption, locale } = this.props;
    const { name, check, required, msgOnSuccess } = validationOption;
    if (!check) {
      return;
    }
    const Msg = Message[locale][TYPE];
    let nameText = name ? name : '';
    if (required) {
      if (isValidateValue(value)) {
        this.handleCheckEnd(true, Msg.empty(nameText));
        return;
      }
    }
    if (msgOnSuccess) {
      this.setState({ successMsg: msgOnSuccess });
    }
  }

  handleCheckEnd(err, msg) {
    if (this.props.validationOption.msgOnError) {
      msg = this.props.validationOption.msgOnError;
    }
    this.setState({ err, msg });
    const { validationgCallback } = this.props;
    validationgCallback && validationgCallback(err);
  }

  render() {
    const {
      tabIndex,
      id,
      name,
      options,
      disabled,
      classNameWrapper,
      classNameContainer,
      classNameSelect,
      classNameSelectOptionsContainer,
      classNameSelectOptionsItem,
      classNameDropdownIconOptionsItem,
      customStyleWrapper,
      customStyleContainer,
      customStyleSelect,
      customStyleSelectOptionsContainer,
      customStyleSelectOptionsItem,
      selectHtml,
      selectOptionsItemHtml,
      validationOption
    } = this.props;

    const { value, err, msg, show, successMsg } = this.state;

    const wrapperClass = cx(
      classNameWrapper,
      STYLES['select__wrapper'],
      err && STYLES['error'],
      successMsg && !err && STYLES['success'],
      disabled && STYLES['disabled']
    );

    const containerClass = cx(
      classNameContainer,
      STYLES['select__container'],
      err && STYLES['error'],
      show && STYLES['show'],
      successMsg && !err && STYLES['success'],
      disabled && STYLES['disabled']
    );

    const inputClass = cx(
      STYLES['select__input'],
      err && STYLES['error'],
      successMsg && !err && STYLES['success'],
      disabled && STYLES['disabled']
    );

    const selectClass = cx(
      classNameSelect,
      STYLES['ellipsis'],
      STYLES['select__dropdown-menu'],
      err && STYLES['error'],
      successMsg && !err && STYLES['success'],
      disabled && STYLES['disabled']
    );

    const selectOptionsContainerClass = cx(
      classNameSelectOptionsContainer,
      STYLES['select__options-container'],
      err && STYLES['error'],
      show && STYLES['show'],
      successMsg && !err && STYLES['success'],
      disabled && STYLES['disabled']
    );

    const selectOptionsItemClass = cx(
      classNameSelectOptionsItem,
      STYLES['select__options-item'],
      err && STYLES['error'],
      successMsg && !err && STYLES['success'],
      disabled && STYLES['disabled']
    );

    const dropdownIconClass = cx(
      classNameDropdownIconOptionsItem,
      STYLES['select__dropdown-icon']
    );

    const errMsgClass = cx(STYLES['msg'], err && STYLES['error']);
    const successMsgClass = cx(STYLES['msg'], !err && STYLES['success']);

    let msgHtml;
    if (validationOption.showMsg && err && msg) {
      msgHtml = <div className={errMsgClass}>{msg}</div>;
    }
    if (validationOption.showMsg && !err && successMsg) {
      msgHtml = <div className={successMsgClass}>{successMsg}</div>;
    }
    let optionsHtml;
    let item;
    options.filter(i => {
      if (String(i.id) == String(value)) {
        item = i;
      }
    });
    if (options.length) {
      if (selectOptionsItemHtml) {
        optionsHtml = selectOptionsItemHtml;
      } else {
        optionsHtml = options.map((i, k) => {
          return (
            <div
              className={
                String(i.id) == String(value)
                  ? `${selectOptionsItemClass} ${STYLES['active']}`
                  : `${selectOptionsItemClass}`
              }
              key={k}
              style={customStyleSelectOptionsItem}
              onClick={() => {
                this.onChange(i.id);
              }}
            >
              {i.name}
            </div>
          );
        });
      }
    }
    let selectorHtml = selectHtml;
    if (!selectorHtml) {
      selectorHtml = (
        <div className={STYLES['select__dropdown']}>
          <div className={STYLES['ellipsis']} style={{ width: '100%' }}>
            {item.name}
          </div>
          <div className={dropdownIconClass} />
        </div>
      );
    }
    return (
      <div
        tabIndex={tabIndex}
        id={STYLES['select__wrapper']}
        className={wrapperClass}
        style={customStyleWrapper}
        onClick={() => {
          this.onClick();
          !disabled ? this.toggleShow(!show) : ``;
        }}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        ref={ref => (this.wrapper = ref)}
      >
        <div className={containerClass} style={customStyleContainer}>
          <input
            id={id}
            name={name}
            type="hidden"
            value={value}
            className={inputClass}
            onChange={() => {}}
            ref={ref => (this.input = ref)}
          />

          <div className={selectClass} style={customStyleSelect}>
            {selectorHtml}
          </div>
          <div
            className={selectOptionsContainerClass}
            style={customStyleSelectOptionsContainer}
          >
            {optionsHtml}
          </div>
        </div>
        {msgHtml}
      </div>
    );
  }
}

Index.defaultProps = {
  tabIndex: -1,
  id: '',
  name: '',
  value: '',
  disabled: false,
  options: [],
  classNameWrapper: '',
  classNameContainer: '',
  classNameSelectOptionsItem: '',
  classNameSelectOptionsContainer: '',
  classNameDropdownIconOptionsItem: '',
  customStyleWrapper: {},
  customStyleContainer: {},
  customStyleSelectOptionsItem: {},
  customStyleSelectOptionsContainer: {},
  customStyleDropdownIcon: {},
  validationOption: {
    name: '',
    check: true,
    msgOnError: '',
    showMsg: false,
    required: false,
    msgOnSuccess: ''
  },
  locale: 'en-US',
  onChange: () => {}
};

Index.propTypes = {
  tabIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  validating: PropTypes.bool,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  validationOption: PropTypes.object,
  locale: PropTypes.string,
  selectHtml: PropTypes.element,
  selectOptionsItemHtml: PropTypes.array,
  classNameWrapper: PropTypes.string,
  classNameContainer: PropTypes.string,
  classNameSelect: PropTypes.string,
  classNameSelectOptionsContainer: PropTypes.string,
  classNameDropdownIconOptionsItem: PropTypes.string,
  classNameSelectOptionsItem: PropTypes.string,
  customStyleWrapper: PropTypes.object,
  customStyleContainer: PropTypes.object,
  customStyleSelect: PropTypes.object,
  customStyleSelectOptionsContainer: PropTypes.object,
  customStyleDropdownIcon: PropTypes.object,
  customStyleSelectOptionsItem: PropTypes.object,
  validationgCallback: PropTypes.func
};

export default Index;
