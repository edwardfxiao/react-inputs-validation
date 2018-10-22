import * as React from 'react';
import message from './message';
import classnames from 'classnames';
import { REACT_INPUTS_VALIDATION_CUSTOM_ERROR_MESSAGE_EXAMPLE, DEFAULT_LOCALE } from './const';
interface Styles {
  [key: string]: string;
}
let STYLES: Styles = {};
try {
  STYLES = require('./react-inputs-validation.css');
} catch (ex) {}
const TYPE = 'checkbox';

interface DefaultValidationOption {
  name?: string;
  check?: boolean;
  showMsg?: boolean;
  required?: boolean;
  locale?: string;
  msgOnError?: string;
  msgOnSuccess?: string;
}

const getDefaultValidationOption = (obj: DefaultValidationOption) => {
  let { name, check, required, showMsg, locale, msgOnError, msgOnSuccess } = obj;
  locale = typeof locale !== 'undefined' ? locale : DEFAULT_LOCALE;
  name = typeof name !== 'undefined' ? name : '';
  check = typeof check !== 'undefined' ? check : true;
  showMsg = typeof showMsg !== 'undefined' ? showMsg : true;
  required = typeof required !== 'undefined' ? required : true;
  msgOnSuccess = typeof msgOnSuccess !== 'undefined' ? msgOnSuccess : '';
  msgOnError = typeof msgOnError !== 'undefined' ? msgOnError : '';
  return {
    name,
    check,
    showMsg,
    required,
    locale,
    msgOnError,
    msgOnSuccess,
  };
};

interface Props {
  tabIndex?: string | number;
  id?: string;
  name?: string;
  value?: string | boolean;
  checked?: boolean;
  disabled?: boolean;
  labelHtml?: React.ReactNode;
  validate?: boolean;
  onChange: (res: boolean, e: Event) => void;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLElement>) => void;
  validationOption?: object;
  classNameInput?: string;
  classNameWrapper?: string;
  classNameInputBox?: string;
  classNameContainer?: string;
  customStyleInput?: object;
  customStyleWrapper?: object;
  customStyleContainer?: object;
  customStyleInputBox?: object;
  validationCallback?: (res: boolean) => void;
}

interface State {
  err: boolean;
  msg: string;
  successMsg: undefined | string;
  checked: boolean;
  validate: boolean;
}

class Index extends React.Component<Props, State> {
  static defaultProps: Props = {
    tabIndex: -1,
    id: '',
    name: '',
    value: '',
    checked: false,
    disabled: false,
    validate: false,
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
    onChange: () => {},
  };
  private input: React.RefObject<HTMLInputElement>;
  private focus: boolean;
  constructor(props: any) {
    super(props);
    this.state = {
      err: false,
      msg: '',
      successMsg: undefined,
      checked: props.checked,
      validate: props.validate,
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.input = React.createRef();
  }
  static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    // TODO: This was from componentWillReceiveProps()
    // if (this.props.checked != nextProps.checked) {
    //   this.setState({ checked: nextProps.checked });
    // }
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

  onChange(e: any) {
    const { disabled } = this.props;
    if (disabled) {
      return;
    }
    const checked = !this.state.checked;
    this.setState({ checked });
    const { onChange } = this.props;
    onChange && onChange(checked, e);
    if (this.state.err) {
      this.setState({ err: false });
    } else {
      this.setState({ successMsg: undefined });
    }
  }
  onClick(e: React.MouseEvent<HTMLElement>) {
    const { disabled } = this.props;
    if (disabled) {
      return;
    }
    this.onChange(e);
    const { onClick } = this.props;
    onClick && onClick(e);
  }
  onBlur(e: React.FocusEvent<HTMLElement>) {
    const { onBlur } = this.props;
    if (onBlur) {
      this.check();
      onBlur(e);
    }
  }
  // pageClick(e: any) {
  //   if (this.wrapper.current.contains(e.target)) {
  //     return;
  //   }
  //   if (this.focus) {
  //     // this.onBlur(e);
  //     this.focus = false;
  //   }
  // }
  onFocus(e: React.FocusEvent<HTMLElement>) {
    this.focus = true;
    const { onFocus } = this.props;
    if (onFocus) {
      this.check();
      onFocus(e);
    }
  }
  check() {
    const { name, check, locale, required, msgOnSuccess } = getDefaultValidationOption(this.props.validationOption);
    if (!check) {
      return;
    }
    if (required) {
      if (!message[locale] || !message[locale][TYPE]) {
        console.error(REACT_INPUTS_VALIDATION_CUSTOM_ERROR_MESSAGE_EXAMPLE);
        return;
      }
      const msg = message[locale][TYPE];
      if (!this.state.checked) {
        this.handleCheckEnd(true, msg.unchecked ? msg.unchecked(name ? name : '') : '');
        return;
      }
    }
    if (msgOnSuccess) {
      this.setState({ successMsg: msgOnSuccess });
    }
    this.handleCheckEnd(false, msgOnSuccess);
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
      value,
      disabled,
      labelHtml,
      classNameWrapper,
      classNameContainer,
      classNameInputBox,
      customStyleWrapper,
      customStyleContainer,
      customStyleInputBox,
      validationOption,
    } = this.props;

    const { err, msg, checked, successMsg } = this.state;

    const wrapperClass = classnames(
      classNameWrapper,
      STYLES['checkbox__wrapper'],
      checked && STYLES['checked'],
      err && STYLES['error'],
      successMsg && !err && STYLES['success'],
      disabled && STYLES['disabled'],
    );

    const containerClass = classnames(
      classNameContainer,
      STYLES['checkbox__container'],
      checked && STYLES['checked'],
      err && STYLES['error'],
      successMsg && !err && STYLES['success'],
      disabled && STYLES['disabled'],
    );

    const boxClass = classnames(
      classNameInputBox,
      STYLES['checkbox__box'],
      err && STYLES['error'],
      checked && STYLES['checked'],
      successMsg && !err && STYLES['success'],
      disabled && STYLES['disabled'],
    );

    const labelClass = classnames(STYLES['checkbox__label'], checked && STYLES['checked'], err && STYLES['error'], successMsg && !err && STYLES['success'], disabled && STYLES['disabled']);

    const errMsgClass = classnames(STYLES['msg'], err && STYLES['error']);
    const successMsgClass = classnames(STYLES['msg'], !err && STYLES['success']);

    let msgHtml;
    const { showMsg } = getDefaultValidationOption(validationOption);
    if (showMsg && err && msg) {
      msgHtml = <div className={errMsgClass}>{msg}</div>;
    }
    if (showMsg && !err && successMsg) {
      msgHtml = <div className={successMsgClass}>{successMsg}</div>;
    }
    return (
      <div tabIndex={Number(tabIndex)} className={wrapperClass} style={customStyleWrapper} onClick={this.onClick} onBlur={this.onBlur} onFocus={this.onFocus}>
        <div className={containerClass} style={customStyleContainer}>
          <div className={boxClass} style={customStyleInputBox}>
            <div className={STYLES['box']} />
            <input id={id} name={name} type="checkbox" className={STYLES['checkbox__input']} value={String(value)} checked={checked} disabled={disabled} onChange={this.onChange} ref={this.input} />
          </div>
          <label className={labelClass}>{labelHtml}</label>
        </div>
        {msgHtml}
      </div>
    );
  }
}

export default Index;
