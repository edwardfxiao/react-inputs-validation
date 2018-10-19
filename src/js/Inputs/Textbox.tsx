import * as React from 'react';
import message from './message';
import classnames from 'classnames';
import Validator from './validator';
import { REACT_INPUTS_VALIDATION_CUSTOM_ERROR_MESSAGE_EXAMPLE, DEFAULT_LOCALE } from './const';
interface Styles {
  [key: string]: string;
}
let STYLES: Styles = {};
try {
  STYLES = require('./react-inputs-validation.css');
} catch (ex) {}
const TYPE = 'textbox';
const VALIDATE_OPTION_TYPE_LIST = ['string', 'number'];
interface DefaultValidationOption {
  locale?: string;
  reg?: string;
  min?: number;
  max?: number;
  type?: string;
  name?: string;
  check?: boolean;
  showmsg?: boolean;
  length?: number;
  regmsg?: string;
  compare?: string;
  required?: boolean;
  msgOnError?: string;
  msgOnSuccess?: string;
  customFunc?: undefined | Function;
}

const getDefaultValidationOption = (obj: DefaultValidationOption) => {
  let { reg, min, max, type, name, check, length, regmsg, compare, required, showmsg, locale, msgOnError, msgOnSuccess, customFunc } = obj;
  locale = typeof locale !== 'undefined' ? locale : DEFAULT_LOCALE;
  reg = typeof reg !== 'undefined' ? reg : '';
  min = typeof min !== 'undefined' ? min : 0;
  max = typeof max !== 'undefined' ? max : 0;
  type = typeof type !== 'undefined' ? type : 'string';
  name = typeof name !== 'undefined' ? name : '';
  check = typeof check !== 'undefined' ? check : true;
  showmsg = typeof showmsg !== 'undefined' ? showmsg : true;
  length = typeof length !== 'undefined' ? length : 0;
  regmsg = typeof regmsg !== 'undefined' ? regmsg : '';
  compare = typeof compare !== 'undefined' ? compare : '';
  required = typeof required !== 'undefined' ? required : true;
  msgOnError = typeof msgOnError !== 'undefined' ? msgOnError : '';
  msgOnSuccess = typeof msgOnSuccess !== 'undefined' ? msgOnSuccess : '';
  customFunc = typeof customFunc !== 'undefined' ? customFunc : undefined;
  return {
    reg,
    min,
    max,
    type,
    name,
    check,
    length,
    regmsg,
    locale,
    compare,
    required,
    showmsg,
    msgOnError,
    msgOnSuccess,
    customFunc,
  };
};

interface Props {
  tabIndex?: string | number;
  id?: string;
  name?: string;
  type?: string;
  value?: string;
  disabled?: boolean;
  validate?: boolean;
  maxLength?: string;
  placeholder?: string;
  classNameInput?: string;
  classNameWrapper?: string;
  classNameContainer?: string;
  customStyleInput?: object;
  customStyleWrapper?: object;
  customStyleContainer?: object;
  validationOption?: object;
  onChange: (res: string, e: React.ChangeEvent<HTMLDivElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLElement>) => void;
  onKeyUp?: (e: Event) => void;
  validationCallback?: (res: boolean) => void;
}

interface State {
  err: boolean;
  msg: string;
  successmsg: undefined | string;
  value: string;
  validate: boolean;
}

class Index extends React.Component<Props, State> {
  static defaultProps: Props = {
    tabIndex: -1,
    id: '',
    name: '',
    type: 'text',
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
    onChange: () => {},
  };
  private input: React.RefObject<HTMLInputElement>;
  constructor(props: any) {
    super(props);
    this.state = {
      err: false,
      msg: '',
      successmsg: undefined,
      value: props.value,
      validate: props.validate,
    };
    this.onChange = this.onChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.input = React.createRef();
  }

  static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    if (nextProps.validate === true && prevState.validate === false) {
      return {
        validate: nextProps.validate,
      };
    }
    return null;
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (this.state.validate === true && prevState.validate === false) {
      this.check();
    }
  }

  onChange(e: React.ChangeEvent<HTMLDivElement>) {
    let v = this.input.current.value;
    if (this.props.maxLength != '') {
      if (v.length > Number(this.props.maxLength)) {
        return;
      }
    }
    const { type } = getDefaultValidationOption(this.props.validationOption);
    // FORMAT NUMBER
    if (type == VALIDATE_OPTION_TYPE_LIST[1]) {
      v = this.autoFormatNumber(Number(v));
    }
    const { onChange } = this.props;
    onChange && onChange(v, e);
    if (this.state.err) {
      this.setState({ err: false });
    } else {
      this.setState({ successmsg: undefined });
    }
  }

  onBlur(e?: React.FocusEvent<HTMLElement>) {
    const { onBlur } = this.props;
    if (onBlur) {
      this.check();
      onBlur(e);
    }
  }

  onFocus(e: React.FocusEvent<HTMLElement>) {
    const { onFocus } = this.props;
    if (onFocus) {
      this.check();
      onFocus(e);
    }
  }

  onKeyUp(e: Event) {
    const { onKeyUp } = this.props;
    if (onKeyUp) {
      this.check();
      onKeyUp(e);
    }
  }

  check(val: null | string = null) {
    const { validationOption } = this.props;
    const { reg, min, max, type, name, check, length, regmsg, locale, compare, required, msgOnSuccess, customFunc } = getDefaultValidationOption(validationOption);
    if (!check) {
      return;
    }
    if (type) {
      if (VALIDATE_OPTION_TYPE_LIST.indexOf(type) != -1) {
        if (!message[locale] || !message[locale][TYPE]) {
          console.error(REACT_INPUTS_VALIDATION_CUSTOM_ERROR_MESSAGE_EXAMPLE);
          return;
        }
        const msg = message[locale][TYPE];
        const value = val || this.input.current.value;
        let nameText = name ? name : '';
        let msg = '';
        // CHECK EMPTY
        if (required) {
          if (Validator.empty(value)) {
            this.handleCheckEnd(true, msg.empty ? msg.empty(nameText) : '');
            return;
          }
        }
        if (String(value) != '') {
          // CHECK REGEX
          if (reg) {
            if (Validator['reg'](reg, value)) {
              msg = regmsg != '' ? regmsg : msg.invalid ? msg.invalid(nameText) : '';
              this.handleCheckEnd(true, msg);
              return;
            }
          }
          // CHECK STRING
          if (type === VALIDATE_OPTION_TYPE_LIST[0]) {
            if (min || max) {
              if (min && max) {
                if (String(value).length < min || String(value).length > max) {
                  this.handleCheckEnd(true, msg.inBetween ? msg.inBetween(nameText)(min)(max) : '');
                  return;
                }
              } else {
                if (min) {
                  if (String(value).length < min) {
                    this.handleCheckEnd(true, msg.lessThan ? msg.lessThan(nameText)(min) : '');
                    return;
                  }
                }
                if (max) {
                  if (String(value).length > max) {
                    this.handleCheckEnd(true, msg.greaterThan ? msg.greaterThan(nameText)(max) : '');
                    return;
                  }
                }
              }
            }
            if (length) {
              if (String(value).length != length) {
                this.handleCheckEnd(true, msg.lengthEqual ? msg.lengthEqual(nameText)(length) : '');
                return;
              }
            }
          }
          // CHECK NUMBER
          if (type == VALIDATE_OPTION_TYPE_LIST[1]) {
            if (!Validator[type](value)) {
              this.handleCheckEnd(true, msg.invalid ? msg.invalid(nameText) : '');
              return;
            }
            if (min || max) {
              if (min && max) {
                if (!Validator[type](value, min, max)) {
                  this.handleCheckEnd(true, msg.inBetween ? msg.inBetween(nameText)(min)(max) : '');
                  return;
                }
              } else {
                if (min) {
                  if (!Validator[type](value, min)) {
                    this.handleCheckEnd(true, msg.lessThan ? msg.lessThan(nameText)(min) : '');
                    return;
                  }
                }
                if (max) {
                  if (!Validator[type](value, 0, max)) {
                    this.handleCheckEnd(true, msg.greaterThan ? msg.greaterThan(nameText)(max) : '');
                    return;
                  }
                }
              }
            }
            if (length) {
              if (String(value).length != length) {
                this.handleCheckEnd(true, msg.lengthEqual ? msg.lengthEqual(nameText)(length) : '');
                return;
              }
            }
          }
          // CHECK EQUAL
          if (compare && compare != '') {
            if (value != compare) {
              this.handleCheckEnd(true, msg.twoInputsNotEqual ? msg.twoInputsNotEqual() : '');
              return;
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
          this.setState({ successmsg: msgOnSuccess });
        }
        this.handleCheckEnd(false, msgOnSuccess);
      } else {
        console.error(`The valid ${toCamelCase(TYPE)(true)} "type" options in validationOption are [${VALIDATE_OPTION_TYPE_LIST.map(i => i)}]`);
      }
    } else {
      console.error('Please provide "type" in validationOption');
    }
  }

  autoFormatNumber(v: number) {
    const DOT = '.';
    v = String(v);
    let res = '';
    let hasDot = false;
    v.split('').filter(i => {
      const charCode = i.toLowerCase().charCodeAt(0);
      if ((charCode >= 48 && charCode <= 57) || (charCode == 46 && !hasDot)) {
        if (charCode == 46) {
          hasDot = true;
        }
        res += i;
      }
    });
    if (res.length && res[0] == DOT) {
      res = '0' + res;
    }
    return res;
  }

  handleCheckEnd(err: boolean, message: string) {
    let msg = message;
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
      type,
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
      validationOption,
    } = this.props;

    const { err, msg, successmsg } = this.state;

    const wrapperClass = classnames(classNameWrapper, STYLES['textbox__wrapper'], err && STYLES['error'], successmsg && !err && STYLES['success'], disabled && STYLES['disabled']);

    const containerClass = classnames(classNameContainer, STYLES['textbox__container'], err && STYLES['error'], successmsg && !err && STYLES['success'], disabled && STYLES['disabled']);

    const inputClass = classnames(classNameInput, STYLES['textbox__input'], err && STYLES['error'], successmsg && !err && STYLES['success'], disabled && STYLES['disabled']);

    const errmsgClass = classnames(STYLES['msg'], err && STYLES['error']);
    const successmsgClass = classnames(STYLES['msg'], !err && STYLES['success']);

    let msgHtml;
    const { showmsg } = getDefaultValidationOption(validationOption);
    if (showmsg && err && msg) {
      msgHtml = <div className={errmsgClass}>{msg}</div>;
    }
    if (showmsg && !err && successmsg) {
      msgHtml = <div className={successmsgClass}>{successmsg}</div>;
    }
    return (
      <div className={wrapperClass} style={customStyleWrapper}>
        <div className={containerClass} style={customStyleContainer}>
          <input
            tabIndex={tabIndex}
            id={id}
            name={name}
            type={type}
            value={value}
            disabled={disabled}
            maxLength={maxLength}
            onBlur={this.onBlur}
            onKeyUp={this.onKeyUp}
            onFocus={this.onFocus}
            className={inputClass}
            onChange={this.onChange}
            style={customStyleInput}
            placeholder={placeholder}
            ref={this.input}
          />
        </div>
        {msgHtml}
      </div>
    );
  }
}

export default Index;
