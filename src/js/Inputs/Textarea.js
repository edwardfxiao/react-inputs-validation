import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { toCamelCase } from './utils';
import Message from './message';
import Validator from './validator';
import { REACT_INPUTS_VALIDATION_CUSTOM_ERROR_MESSAGE_EXAMPLE, DEFAULT_LOCALE } from './const';
let STYLES = {};
try {
  STYLES = require('./react-inputs-validation.css');
} catch (ex) {}
const TYPE = 'textarea';
const VALIDATE_OPTION_TYPE_LIST = ['string'];
const getDefaultValidationOption = obj => {
  let { reg, min, max, type, name, check, length, regMsg, required, showMsg, locale, msgOnError, msgOnSuccess, customFunc } = obj;
  locale = typeof locale !== 'undefined' ? locale : DEFAULT_LOCALE;
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
    reg,
    min,
    max,
    type,
    name,
    check,
    length,
    regMsg,
    locale,
    required,
    showMsg,
    msgOnError,
    msgOnSuccess,
    customFunc
  };
};
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

  onChange(e) {
    if (this.props.maxLength != '') {
      if (this.input.value.length > Number(this.props.maxLength)) {
        return;
      }
    }
    const { onChange } = this.props;
    onChange && onChange(this.input.value, e);
    if (this.state.err) {
      this.setState({ err: false });
    } else {
      this.setState({ successMsg: undefined });
    }
  }

  onBlur(e) {
    const { onBlur } = this.props;
    if (onBlur) {
      this.check();
      onBlur(e);
    }
  }

  onFocus(e) {
    const { onFocus } = this.props;
    if (onFocus) {
      this.check();
      onFocus(e);
    }
  }

  onKeyUp(e) {
    const { onKeyUp } = this.props;
    if (onKeyUp) {
      this.check();
      onKeyUp(e);
    }
  }

  check(inputValue) {
    const { reg, min, max, type, name, check, length, regMsg, locale, required, msgOnSuccess, customFunc } = getDefaultValidationOption(this.props.validationOption);
    if (!check) {
      return;
    }
    if (type) {
      if (VALIDATE_OPTION_TYPE_LIST.indexOf(type) != -1) {
        if (!Message[locale] || !Message[locale][TYPE]) {
          console.error(REACT_INPUTS_VALIDATION_CUSTOM_ERROR_MESSAGE_EXAMPLE);
          return;
        }
        const Msg = Message[locale][TYPE];
        const value = inputValue || this.input.value;
        let nameText = name ? name : '';
        let msg = '';
        // CHECK EMPTY
        if (required) {
          if (Validator.empty(value)) {
            this.handleCheckEnd(true, Msg.empty ? Msg.empty(nameText) : '');
            return;
          }
        }
        if (String(value) != '') {
          // CHECK REGEX
          if (reg) {
            if (Validator['reg'](reg, value)) {
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
          const customFuncResult = customFunc(value);
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
        console.error(`The valid ${toCamelCase(TYPE)(true)} "type" options in validationOption are [${VALIDATE_OPTION_TYPE_LIST.map(i => i)}]`);
      }
    } else {
      console.error('Please provide "type" in validationOption');
    }
  }

  handleCheckEnd(err, msg) {
    const { msgOnError } = getDefaultValidationOption(this.props.validationOption);
    if (err && msgOnError) {
      msg = msgOnError;
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
      maxLength,
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

    const wrapperClass = cx(classNameWrapper, STYLES['textarea__wrapper'], err && STYLES['error'], successMsg && !err && STYLES['success'], disabled && STYLES['disabled']);

    const containerClass = cx(classNameContainer, STYLES['textarea__container'], err && STYLES['error'], successMsg && !err && STYLES['success'], disabled && STYLES['disabled']);

    const inputClass = cx(classNameInput, STYLES['textarea__input'], err && STYLES['error'], successMsg && !err && STYLES['success'], disabled && STYLES['disabled']);

    const errMsgClass = cx(STYLES['msg'], err && STYLES['error']);
    const successMsgClass = cx(STYLES['msg'], !err && STYLES['success']);

    let msgHtml;
    const { showMsg } = getDefaultValidationOption(validationOption);
    if (showMsg && err && msg) {
      msgHtml = <div className={errMsgClass}>{msg}</div>;
    }
    if (showMsg && !err && successMsg) {
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
            maxLength={maxLength}
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
  maxLength: '',
  placeholder: '',
  classNameInput: '',
  classNameWrapper: '',
  classNameContainer: '',
  customStyleInput: {},
  customStyleWrapper: {},
  customStyleContainer: {},
  validationOption: {},
  onChange: () => {}
};

Index.propTypes = {
  tabIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  validate: PropTypes.bool,
  maxLength: PropTypes.string,
  placeholder: PropTypes.string,
  classNameInput: PropTypes.string,
  classNameWrapper: PropTypes.string,
  classNameContainer: PropTypes.string,
  customStyleInput: PropTypes.object,
  customStyleWrapper: PropTypes.object,
  customStyleContainer: PropTypes.object,
  validationOption: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyUp: PropTypes.func,
  validationCallback: PropTypes.func
};

export default Index;
