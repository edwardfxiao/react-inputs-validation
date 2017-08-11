import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { toCamelCase } from './utils';
import Message from './message';
import Validator from './validator';
let STYLES = {};
try {
  STYLES = require('./styles.css');
} catch (ex) {}
const TYPE = 'textarea';
const VALIDATE_OPTION_TYPE_LIST = ['string'];

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      err: false,
      msg: '',
      successMsg: undefined
    };
    this.onChange = this.onChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onFocus = this.onFocus.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.validate == false && nextProps.validate == true) {
      this.check();
    }
  }

  onChange() {
    const { onChange } = this.props;
    onChange && onChange(this.input.value);
    if (this.state.err) {
      this.setState({ err: false });
    } else {
      this.setState({ successMsg: undefined });
    }
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

  onKeyUp() {
    const { onKeyUp } = this.props;
    if (onKeyUp) {
      this.check();
      onKeyUp();
    }
  }

  check(inputValue) {
    const { validationOption, locale } = this.props;
    const {
      reg,
      min,
      max,
      type,
      name,
      check,
      length,
      regMsg,
      required,
      msgOnSuccess
    } = validationOption;
    if (!check) {
      return;
    }
    if (type) {
      if (VALIDATE_OPTION_TYPE_LIST.indexOf(type) != -1) {
        const Msg = Message[locale][TYPE];
        const value = inputValue || this.input.value;
        let nameText = name ? name : '';
        let msg = '';
        // CHECK EMPTY
        if (required) {
          if (Validator.empty(value)) {
            this.handleCheckEnd(true, Msg.empty(nameText));
            return;
          }
        }
        if (String(value) != '') {
          // CHECK REGEX
          if (reg) {
            if (Validator['reg'](reg, value)) {
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
        }
        if (msgOnSuccess) {
          this.setState({ successMsg: msgOnSuccess });
        }
      } else {
        console.error(
          `The valid ${toCamelCase(TYPE)(true)} "type" options in validationOption are [${VALIDATE_OPTION_TYPE_LIST.map(i => i)}]`
        );
      }
    } else {
      console.error('Please provide "type" in validationOption');
    }
  }

  handleCheckEnd(err, msg) {
    if (err && this.props.validationOption.msgOnError) {
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
      value,
      disabled,
      placeholder,
      classNameWrapper,
      classNameContainer,
      classNameInput,
      customStyleWrapper,
      customStyleContainer,
      customStyleInput,
      validationOption
    } = this.props;

    const { err, msg, successMsg } = this.state;

    const wrapperClass = cx(
      classNameWrapper,
      STYLES['textarea__wrapper'],
      err && STYLES['error'],
      successMsg && !err && STYLES['success'],
      disabled && STYLES['disabled']
    );

    const containerClass = cx(
      classNameContainer,
      STYLES['textarea__container'],
      err && STYLES['error'],
      successMsg && !err && STYLES['success'],
      disabled && STYLES['disabled']
    );

    const inputClass = cx(
      classNameInput,
      STYLES['textarea__input'],
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
        <div className={containerClass} style={customStyleContainer}>
          <textarea
            tabIndex={tabIndex}
            id={id}
            name={name}
            value={value}
            disabled={disabled}
            onBlur={this.onBlur}
            onKeyUp={this.onKeyUp}
            onFocus={this.onFocus}
            className={inputClass}
            onChange={this.onChange}
            style={customStyleInput}
            placeholder={placeholder}
            ref={ref => (this.input = ref)}
          />
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
  value: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  validate: PropTypes.bool,
  placeholder: PropTypes.string,
  classNameInput: PropTypes.string,
  classNameWrapper: PropTypes.string,
  classNameContainer: PropTypes.string,
  customStyleInput: PropTypes.object,
  customStyleWrapper: PropTypes.object,
  customStyleContainer: PropTypes.object,
  validationOption: PropTypes.object,
  locale: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyUp: PropTypes.func,
  validationgCallback: PropTypes.func
};

export default Index;
