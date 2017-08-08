import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Message from './message';
let STYLES = {};
try {
  STYLES = require('./styles.css');
} catch (ex) {}

const TYPE = 'checkbox';
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
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.validating == false && nextProps.validating == true) {
      this.check();
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
    const { onFocus } = this.props;
    if (onFocus) {
      this.check();
      onFocus();
    }
  }

  check() {
    const { validationOption, locale } = this.props;
    const { name, check, required, msgOnSuccess } = validationOption;
    if (!check) {
      return;
    }
    if (required) {
      const Msg = Message[locale][TYPE];
      if (!this.state.checked) {
        this.handleCheckEnd(true, Msg.unchecked(name ? name : ''));
        return;
      }
      if (msgOnSuccess) {
        this.setState({ successMsg: msgOnSuccess });
      }
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
      id,
      name,
      value,
      disabled,
      labelHtml,
      classNameWrapper,
      classNameContainer,
      classNameBox,
      classNameInput,
      customStyleWrapper,
      customStyleContainer,
      customStyleBox,
      customStyleInput,
      validationOption
    } = this.props;

    const { err, msg, checked, successMsg } = this.state;

    const wrapperClass = cx(
      classNameWrapper,
      STYLES['checkbox__wrapper'],
      err && STYLES['error'],
      successMsg && !err && STYLES['success'],
      disabled && STYLES['disabled']
    );

    const containerClass = cx(
      classNameContainer,
      STYLES['checkbox__container'],
      err && STYLES['error'],
      successMsg && !err && STYLES['success'],
      disabled && STYLES['disabled']
    );

    const boxClass = cx(
      classNameBox,
      STYLES['checkbox__box'],
      err && STYLES['error'],
      checked && STYLES['checked'],
      successMsg && !err && STYLES['success'],
      disabled && STYLES['disabled']
    );

    const inputClass = cx(
      classNameInput,
      STYLES['checkbox__input'],
      err && STYLES['error'],
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
    if (validationOption.showMsg && err && msg) {
      msgHtml = <div className={errMsgClass}>{msg}</div>;
    }
    if (validationOption.showMsg && !err && successMsg) {
      msgHtml = <div className={successMsgClass}>{successMsg}</div>;
    }
    return (
      <div className={wrapperClass} style={customStyleWrapper}>
        <div
          className={containerClass}
          style={customStyleContainer}
          onClick={this.onClick}
        >
          <div className={boxClass} style={customStyleBox}>
            <div className={STYLES['box']} />
            <input
              id={id}
              name={name}
              type="checkbox"
              value={value}
              checked={checked}
              disabled={disabled}
              className={inputClass}
              onChange={this.onChange}
              onBlur={this.onBlur}
              onFocus={this.onFocus}
              style={customStyleInput}
              ref={ref => (this.input = ref)}
            />
          </div>
          <label htmlFor={id} className={labelClass}>
            {labelHtml}
          </label>
        </div>
        {msgHtml}
      </div>
    );
  }
}

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
  onChange: () => {}
};

Index.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  labelHtml: PropTypes.element,
  validating: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  validationOption: PropTypes.object,
  locale: PropTypes.string,
  classNameWrapper: PropTypes.string,
  classNameContainer: PropTypes.string,
  classNameBox: PropTypes.string,
  classNameInput: PropTypes.string,
  customStyleWrapper: PropTypes.object,
  customStyleContainer: PropTypes.object,
  customStyleBox: PropTypes.object,
  customStyleInput: PropTypes.object,
  validationgCallback: PropTypes.func
};

export default Index;
