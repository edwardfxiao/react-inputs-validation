import * as React from 'react';
import message from './message';
import { REACT_INPUTS_VALIDATION_CUSTOM_ERROR_MESSAGE_EXAMPLE, DEFAULT_LOCALE } from './const';
import reactInputsValidationCss from './react-inputs-validation.css';
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

interface DefaultProps {
  tabIndex: string | number;
  id: string;
  name: string;
  value: string | boolean;
  checked: boolean;
  disabled: boolean;
  validate: boolean;
  labelHtml: React.ReactNode;
  classNameInput: string;
  classNameWrapper: string;
  classNameInputBox: string;
  classNameContainer: string;
  customStyleInput: object;
  customStyleWrapper: object;
  customStyleInputBox: object;
  customStyleContainer: object;
  validationOption: object;
  onChange: (res: boolean, e: Event) => void;
}

type PropsWithDefaults = Props & DefaultProps;

interface State {
  err: boolean;
  msg: string;
  successMsg: undefined | string;
  checked: boolean;
  validate: boolean;
}

class Index extends React.Component<Props, State> {
  static defaultProps: DefaultProps = {
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
    if (nextProps.validate === true && prevState.validate === false) {
      return {
        validate: nextProps.validate,
      };
    }
    if (nextProps.checked !== prevState.checked) {
      return {
        checked: nextProps.checked,
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
    // when props.validate toggled
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
  onFocus(e: React.FocusEvent<HTMLElement>) {
    const { onFocus } = this.props;
    if (onFocus) {
      this.check();
      onFocus(e);
    }
  }
  check() {
    const { validationOption } = this.props as PropsWithDefaults;
    const { name, check, locale, required, msgOnSuccess } = getDefaultValidationOption(validationOption);
    if (!check) {
      return;
    }
    if (required) {
      if (!message[locale] || !message[locale][TYPE]) {
        console.error(REACT_INPUTS_VALIDATION_CUSTOM_ERROR_MESSAGE_EXAMPLE);
        return;
      }
      const msg = message[locale][TYPE];
      const nameText = name ? name : '';
      if (!this.state.checked) {
        this.handleCheckEnd(true, msg.unchecked(nameText));
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
    } = this.props as PropsWithDefaults;

    const { err, msg, checked, successMsg } = this.state;

    const wrapperClass = `${classNameWrapper} ${reactInputsValidationCss['checkbox__wrapper']} ${checked && reactInputsValidationCss['checked']} ${err &&
      reactInputsValidationCss['error']} ${typeof successMsg !== 'undefined' && !err && reactInputsValidationCss['success']} ${disabled && reactInputsValidationCss['disabled']}`;

    const containerClass = `${classNameContainer} ${reactInputsValidationCss['checkbox__container']} ${checked && reactInputsValidationCss['checked']} ${err &&
      reactInputsValidationCss['error']} ${typeof successMsg !== 'undefined' && !err && reactInputsValidationCss['success']} ${disabled && reactInputsValidationCss['disabled']}`;

    const boxClass = `${classNameInputBox} ${reactInputsValidationCss['checkbox__box']} ${err && reactInputsValidationCss['error']} ${checked && reactInputsValidationCss['checked']} ${typeof successMsg !== 'undefined' &&
      !err &&
      reactInputsValidationCss['success']} ${disabled && reactInputsValidationCss['disabled']}`;

    const labelClass = `${checked && reactInputsValidationCss['checked']} ${err && reactInputsValidationCss['error']} ${typeof successMsg !== 'undefined' && !err && reactInputsValidationCss['success']} ${disabled &&
      reactInputsValidationCss['disabled']}`;

    const errMsgClass = `${reactInputsValidationCss['msg']} ${err && reactInputsValidationCss['error']}`;
    const successMsgClass = `${reactInputsValidationCss['msg']} ${!err && reactInputsValidationCss['success']}`;

    let msgHtml;
    const { showMsg } = getDefaultValidationOption(validationOption);
    if (showMsg && err && msg) {
      msgHtml = <div className={errMsgClass}>{msg}</div>;
    }
    if (showMsg && !err && typeof successMsg !== 'undefined') {
      msgHtml = <div className={successMsgClass}>{successMsg}</div>;
    }
    return (
      <div tabIndex={Number(tabIndex)} className={wrapperClass} style={customStyleWrapper} onClick={this.onClick} onBlur={this.onBlur} onFocus={this.onFocus}>
        <div className={containerClass} style={customStyleContainer}>
          <div className={boxClass} style={customStyleInputBox}>
            <div className={reactInputsValidationCss['box']} />
            <input
              id={id}
              name={name}
              type="checkbox"
              className={reactInputsValidationCss['checkbox__input']}
              value={String(value)}
              defaultChecked={checked}
              disabled={disabled}
              onChange={this.onChange}
              ref={this.input}
            />
          </div>
          <label className={labelClass}>{labelHtml}</label>
        </div>
        {msgHtml}
      </div>
    );
  }
}

export default Index;
