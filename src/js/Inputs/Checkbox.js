import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Message from './message';
import { LOCALE_OPTION_LIST } from './const';
let STYLES = {};
try {
  STYLES = require('./styles.css');
} catch (ex) {}
const TYPE = 'checkbox';
const getDefaultValidationOption = obj => {
  let {
    name,
    check,
    required,
    showMsg,
    locale,
    msgOnError,
    msgOnSuccess
  } = obj;
  if (!locale) {
    locale = LOCALE_OPTION_LIST[0];
  } else {
    if (LOCALE_OPTION_LIST.indexOf(locale) == -1) {
      locale = LOCALE_OPTION_LIST[0];
    }
  }
  name = name ? name : '';
  check = check ? check : true;
  showMsg = showMsg ? showMsg : true;
  required = required ? required : true;
  msgOnSuccess = msgOnSuccess ? msgOnSuccess : '';
  msgOnError = msgOnError ? msgOnError : '';
  return {
    name,
    check,
    showMsg,
    required,
    locale,
    msgOnError,
    msgOnSuccess
  };
};
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      err: false,
      msg: '',
      successMsg: undefined,
      checked: props.checked
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.pageClick = this.pageClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.validate == false && nextProps.validate == true) {
      this.check();
    }
    if (this.props.checked != nextProps.checked) {
      this.setState({ checked: nextProps.checked });
    }
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

  onChange() {
    const val = !this.state.checked;
    this.setState({ checked: val });
    const { onChange } = this.props;
    onChange && onChange(val);
    if (this.state.err) {
      this.setState({ err: false });
    } else {
      this.setState({ successMsg: undefined });
    }
  }

  toggleChecked(checked) {
    this.setState({ checked });
  }

  onClick() {
    this.onChange();
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

  pageClick(e) {
    if (this.wrapper.contains(e.target)) {
      return;
    }
    if (this.focus) {
      this.onBlur();
      this.focus = false;
    }
  }

  onFocus() {
    this.focus = true;
    const { onFocus } = this.props;
    if (onFocus) {
      this.check();
      onFocus();
    }
  }

  check() {
    const {
      name,
      check,
      locale,
      required,
      msgOnSuccess
    } = getDefaultValidationOption(this.props.validationOption);
    if (!check) {
      return;
    }
    if (required) {
      const Msg = Message[locale][TYPE];
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

  handleCheckEnd(err, msg) {
    if (getDefaultValidationOption(this.props.validationOption).msgOnError) {
      msg = getDefaultValidationOption(this.props.validationOption).msgOnError;
    }
    this.setState({ err, msg });
    const { validationCallback } = this.props;
    validationCallback && validationCallback(err);
  }

  render() {
    const {
      tabIndex,
      id,
      name,
      value,
      disabled,
      labelHtml,
      classNameWrapper,
      classNameContainer,
      classNameInputBox,
      customStyleWrapper,
      customStyleContainer,
      customStyleInputBox,
      validationOption
    } = this.props;

    const { err, msg, checked, successMsg } = this.state;

    const wrapperClass = cx(
      classNameWrapper,
      STYLES['checkbox__wrapper'],
      checked && STYLES['checked'],
      err && STYLES['error'],
      successMsg && !err && STYLES['success'],
      disabled && STYLES['disabled']
    );

    const containerClass = cx(
      classNameContainer,
      STYLES['checkbox__container'],
      checked && STYLES['checked'],
      err && STYLES['error'],
      successMsg && !err && STYLES['success'],
      disabled && STYLES['disabled']
    );

    const boxClass = cx(
      classNameInputBox,
      STYLES['checkbox__box'],
      err && STYLES['error'],
      checked && STYLES['checked'],
      successMsg && !err && STYLES['success'],
      disabled && STYLES['disabled']
    );

    const labelClass = cx(
      STYLES['checkbox__label'],
      checked && STYLES['checked'],
      err && STYLES['error'],
      successMsg && !err && STYLES['success'],
      disabled && STYLES['disabled']
    );

    const errMsgClass = cx(STYLES['msg'], err && STYLES['error']);
    const successMsgClass = cx(STYLES['msg'], !err && STYLES['success']);

    let msgHtml;
    if (getDefaultValidationOption(validationOption).showMsg && err && msg) {
      msgHtml = <div className={errMsgClass}>{msg}</div>;
    }
    if (
      getDefaultValidationOption(validationOption).showMsg &&
      !err &&
      successMsg
    ) {
      msgHtml = <div className={successMsgClass}>{successMsg}</div>;
    }
    return (
      <div
        tabIndex={tabIndex}
        className={wrapperClass}
        style={customStyleWrapper}
        onClick={this.onClick}
        onBlur={this.onBlur}
        onFocus={this.onFocus}
        ref={ref => (this.wrapper = ref)}
      >
        <div className={containerClass} style={customStyleContainer}>
          <div className={boxClass} style={customStyleInputBox}>
            <div className={STYLES['box']} />
            <input
              id={id}
              name={name}
              type="checkbox"
              className={STYLES['checkbox__input']}
              value={value}
              checked={checked}
              disabled={disabled}
              onChange={this.onChange}
              ref={ref => (this.input = ref)}
            />
          </div>
          <label className={labelClass}>
            {labelHtml}
          </label>
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
  onChange: () => {}
};

Index.propTypes = {
  tabIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  labelHtml: PropTypes.element,
  validate: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  validationOption: PropTypes.object,
  locale: PropTypes.string,
  classNameWrapper: PropTypes.string,
  classNameContainer: PropTypes.string,
  classNameInputBox: PropTypes.string,
  customStyleWrapper: PropTypes.object,
  customStyleContainer: PropTypes.object,
  customStyleInputBox: PropTypes.object,
  validationCallback: PropTypes.func
};

export default Index;
