import * as React from 'react';
import message from './message';
import classnames from 'classnames';
import validator from './validator';
import utils from './utils';
import { REACT_INPUTS_VALIDATION_CUSTOM_ERROR_MESSAGE_EXAMPLE, DEFAULT_LOCALE } from './const';
import reactInputsValidationCss from './react-inputs-validation.css';
const TYPE = 'textbox';
const VALIDATE_OPTION_TYPE_LIST = ['string', 'number'];
const DEFAULT_MAX_LENGTH = 524288; //  Default value is 524288
interface DefaultValidationOption {
  locale?: string;
  reg?: string;
  min?: number;
  max?: number;
  type?: string;
  name?: string;
  check?: boolean;
  showMsg?: boolean;
  length?: number;
  regMsg?: string;
  compare?: string;
  required?: boolean;
  msgOnError?: string;
  msgOnSuccess?: string;
  customFunc?: undefined | Function;
}

const getDefaultValidationOption = (obj: DefaultValidationOption) => {
  let { reg, min, max, type, name, check, length, regMsg, compare, required, showMsg, locale, msgOnError, msgOnSuccess, customFunc } = obj;
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
    regMsg,
    locale,
    compare,
    required,
    showMsg,
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
  maxLength?: string | number;
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
  onKeyUp?: (e: React.KeyboardEvent<HTMLElement>) => void;
  validationCallback?: (res: boolean) => void;
}

interface DefaultProps {
  tabIndex: string | number;
  id: string;
  name: string;
  type: string;
  value: string | number;
  disabled: boolean;
  validate: boolean;
  maxLength: string | number;
  placeholder: string;
  classNameInput: string;
  classNameWrapper: string;
  classNameContainer: string;
  customStyleInput: object;
  customStyleWrapper: object;
  customStyleContainer: object;
  validationOption: object;
  onChange: (res: string, e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

type PropsWithDefaults = Props & DefaultProps;

interface State {
  err: boolean;
  msg: string;
  successMsg: undefined | string;
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
    maxLength: DEFAULT_MAX_LENGTH,
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
      successMsg: undefined,
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
    const node: { [key: string]: any } | null = this.input;
    if (node === null) {
      return;
    }
    let v = node.current.value;
    if (this.props.maxLength !== '') {
      if (v.length > Number(this.props.maxLength)) {
        return;
      }
    }
    const { validationOption } = this.props as PropsWithDefaults;
    const { type } = getDefaultValidationOption(validationOption);
    // FORMAT NUMBER
    if (type === VALIDATE_OPTION_TYPE_LIST[1]) {
      v = String(this.autoFormatNumber(v));
    }
    const { onChange } = this.props;
    onChange && onChange(v, e);
    if (this.state.err) {
      this.setState({ err: false });
    } else {
      this.setState({ successMsg: undefined });
    }
  }

  onBlur(e: React.FocusEvent<HTMLElement>) {
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

  onKeyUp(e: React.KeyboardEvent<HTMLElement>) {
    const { onKeyUp } = this.props;
    if (onKeyUp) {
      this.check();
      onKeyUp(e);
    }
  }

  check(val: null | string = null) {
    const { validationOption } = this.props as PropsWithDefaults;
    const { reg, min, max, type, name, check, length, regMsg, locale, compare, required, msgOnSuccess, customFunc } = getDefaultValidationOption(validationOption);
    if (!check) {
      return;
    }
    if (type) {
      if (VALIDATE_OPTION_TYPE_LIST.indexOf(type) !== -1) {
        if (!message[locale] || !message[locale][TYPE]) {
          console.error(REACT_INPUTS_VALIDATION_CUSTOM_ERROR_MESSAGE_EXAMPLE);
          return;
        }
        const msg = message[locale][TYPE];
        const node: { [key: string]: any } | null = this.input;
        if (node === null) {
          return;
        }
        const value = val || node.current.value;
        const nameText = name ? name : '';
        // CHECK EMPTY
        if (required) {
          if (validator.empty(value)) {
            this.handleCheckEnd(true, msg.empty ? msg.empty(nameText) : '');
            return;
          }
        }
        if (String(value) !== '') {
          // CHECK REGEX
          if (reg) {
            if (validator['reg'](reg, value)) {
              this.handleCheckEnd(true, regMsg !== '' ? regMsg : msg.invalid ? msg.invalid(nameText) : '');
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
              if (String(value).length !== length) {
                this.handleCheckEnd(true, msg.lengthEqual ? msg.lengthEqual(nameText)(length) : '');
                return;
              }
            }
          }
          // CHECK NUMBER
          if (type === VALIDATE_OPTION_TYPE_LIST[1]) {
            if (!validator[type](value)) {
              this.handleCheckEnd(true, msg.invalid ? msg.invalid(nameText) : '');
              return;
            }
            if (min || max) {
              if (min && max) {
                if (!validator[type](value, min, max)) {
                  this.handleCheckEnd(true, msg.inBetween ? msg.inBetween(nameText)(min)(max) : '');
                  return;
                }
              } else {
                if (min) {
                  if (!validator[type](value, min)) {
                    this.handleCheckEnd(true, msg.lessThan ? msg.lessThan(nameText)(min) : '');
                    return;
                  }
                }
                if (max) {
                  if (!validator[type](value, 0, max)) {
                    this.handleCheckEnd(true, msg.greaterThan ? msg.greaterThan(nameText)(max) : '');
                    return;
                  }
                }
              }
            }
            if (length) {
              if (String(value).length !== length) {
                this.handleCheckEnd(true, msg.lengthEqual ? msg.lengthEqual(nameText)(length) : '');
                return;
              }
            }
          }
          // CHECK EQUAL
          if (compare && compare !== '') {
            if (value !== compare) {
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
          this.setState({ successMsg: msgOnSuccess });
        }
        this.handleCheckEnd(false, msgOnSuccess);
      } else {
        console.error(`The valid ${utils.toCamelCase(TYPE)(true)} "type" options in validationOption are [${VALIDATE_OPTION_TYPE_LIST.map(i => i)}]`);
      }
    } else {
      console.error('Please provide "type" in validationOption');
    }
  }

  autoFormatNumber(v: number | string) {
    const DOT = '.';
    let res = '';
    let hasDot = false;
    String(v)
      .split('')
      .filter(i => {
        const charCode = i.toLowerCase().charCodeAt(0);
        if ((charCode >= 48 && charCode <= 57) || (charCode === 46 && !hasDot)) {
          if (charCode === 46) {
            hasDot = true;
          }
          res += i;
        }
      });
    if (res.length && res[0] === DOT) {
      res = `0${res}`;
    }
    return res;
  }

  handleCheckEnd(err: boolean, message: string) {
    let msg = message;
    const { validationOption } = this.props as PropsWithDefaults;
    const { msgOnError } = getDefaultValidationOption(validationOption);
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
    } = this.props as PropsWithDefaults;

    const { err, msg, successMsg } = this.state;

    const wrapperClass = classnames(
      classNameWrapper,
      reactInputsValidationCss['textbox__wrapper'],
      err && reactInputsValidationCss['error'],
      successMsg && !err && reactInputsValidationCss['success'],
      disabled && reactInputsValidationCss['disabled'],
    );

    const containerClass = classnames(
      classNameContainer,
      reactInputsValidationCss['textbox__container'],
      err && reactInputsValidationCss['error'],
      successMsg && !err && reactInputsValidationCss['success'],
      disabled && reactInputsValidationCss['disabled'],
    );

    const inputClass = classnames(
      classNameInput,
      reactInputsValidationCss['textbox__input'],
      err && reactInputsValidationCss['error'],
      successMsg && !err && reactInputsValidationCss['success'],
      disabled && reactInputsValidationCss['disabled'],
    );

    const errmsgClass = classnames(reactInputsValidationCss['msg'], err && reactInputsValidationCss['error']);
    const successMsgClass = classnames(reactInputsValidationCss['msg'], !err && reactInputsValidationCss['success']);

    let msgHtml;
    const { showMsg } = getDefaultValidationOption(validationOption);
    if (showMsg && err && msg) {
      msgHtml = <div className={errmsgClass}>{msg}</div>;
    }
    if (showMsg && !err && successMsg) {
      msgHtml = <div className={successMsgClass}>{successMsg}</div>;
    }
    return (
      <div className={wrapperClass} style={customStyleWrapper}>
        <div className={containerClass} style={customStyleContainer}>
          <input
            tabIndex={Number(tabIndex)}
            id={id}
            name={name}
            type={type}
            value={value}
            disabled={disabled}
            maxLength={Number(maxLength)}
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
