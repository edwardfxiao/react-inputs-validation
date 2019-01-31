import * as React from 'react';
import message from './message';
import { REACT_INPUTS_VALIDATION_CUSTOM_ERROR_MESSAGE_EXAMPLE, DEFAULT_LOCALE } from './const';
import reactInputsValidationCss from './react-inputs-validation.css';
const TYPE = 'radiobox';
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

const isValidateValue = (value: any) => {
  const v = String(value);
  if (v === '' || v === 'null' || v === 'undefined') {
    return true;
  }
  return false;
};

interface OptionListItem {
  id: string;
  name: string;
}

interface Props {
  tabIndex?: string | number;
  id?: string;
  name?: string;
  value?: string | number;
  disabled?: boolean;
  validate?: boolean;
  optionList?: OptionListItem[];
  onChange: (res: string, e: React.ChangeEvent<HTMLDivElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLElement>) => void;
  validationOption?: object;
  classNameWrapper?: string;
  classNameInput?: string;
  classNameContainer?: string;
  classNameOptionListItem?: string;
  customStyleWrapper?: object;
  customStyleContainer?: object;
  customStyleInput?: object;
  customStyleOptionListItem?: object;
  validationCallback?: (res: boolean) => void;
}

interface DefaultProps {
  tabIndex: string | number;
  id: string;
  name: string;
  value: string | number;
  disabled: boolean;
  validate: boolean;
  optionList: OptionListItem[];
  classNameWrapper: string;
  classNameInput: string;
  classNameContainer: string;
  classNameOptionListItem: string;
  customStyleWrapper: object;
  customStyleContainer: object;
  customStyleInput: object;
  customStyleOptionListItem: object;
  validationOption: object;
  onChange: (res: string, e: React.ChangeEvent<HTMLDivElement>) => void;
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
  static defaultProps: DefaultProps = {
    tabIndex: -1,
    id: '',
    name: '',
    value: '',
    disabled: false,
    validate: false,
    optionList: [],
    classNameWrapper: '',
    classNameInput: '',
    classNameContainer: '',
    classNameOptionListItem: '',
    customStyleWrapper: {},
    customStyleContainer: {},
    customStyleInput: {},
    customStyleOptionListItem: {},
    validationOption: {},
    onChange: () => {},
  };
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
    this.onClick = this.onClick.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onFocus = this.onFocus.bind(this);
  }

  static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    if (nextProps.validate !== prevState.validate) {
      return {
        validate: nextProps.validate,
      };
    }
    if (nextProps.value !== prevState.value) {
      const o: { value: string | any; err?: boolean; successMsg?: undefined } = { value: nextProps.value };
      if (prevState.err) {
        o['err'] = false;
      } else {
        o['successMsg'] = undefined;
      }
      return o;
    }
    return null;
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (this.state.validate !== prevState.validate) {
      this.check();
    }
  }

  onChange(val: string, e: React.ChangeEvent<HTMLDivElement>) {
    const { onChange } = this.props;
    onChange && onChange(val, e);
  }

  onClick(e: React.MouseEvent<HTMLDivElement>) {
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
      onFocus(e);
    }
  }

  check(val: null | string = null) {
    let { value } = this.props;
    if (val != null) {
      value = val;
    }
    const { validationOption } = this.props as PropsWithDefaults;
    const { name, check, required, locale, msgOnSuccess } = getDefaultValidationOption(validationOption);
    if (!check) {
      return;
    }
    if (!message[locale] || !message[locale][TYPE]) {
      console.error(REACT_INPUTS_VALIDATION_CUSTOM_ERROR_MESSAGE_EXAMPLE);
      return;
    }
    const msg = message[locale][TYPE];
    const nameText = name ? name : '';
    if (required) {
      if (isValidateValue(value)) {
        this.handleCheckEnd(true, msg.empty(nameText));
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
      optionList,
      classNameWrapper,
      classNameContainer,
      classNameInput,
      classNameOptionListItem,
      customStyleWrapper,
      customStyleContainer,
      customStyleInput,
      customStyleOptionListItem,
      validationOption,
    } = this.props as PropsWithDefaults;

    const { err, msg, successMsg } = this.state;

    const wrapperClass = `${classNameWrapper} ${err && reactInputsValidationCss['error']} ${typeof successMsg !== 'undefined' && !err && reactInputsValidationCss['success']} ${
      reactInputsValidationCss['radiobox__wrapper']
    } ${disabled && reactInputsValidationCss['disabled']}`;

    const containerClass = `${classNameContainer} ${err && reactInputsValidationCss['error']} ${typeof successMsg !== 'undefined' && !err && reactInputsValidationCss['success']} ${
      reactInputsValidationCss['radiobox__container']
    } ${disabled && reactInputsValidationCss['disabled']}`;

    const inputClass = `${classNameInput} ${err && reactInputsValidationCss['error']} ${typeof successMsg !== 'undefined' && !err && reactInputsValidationCss['success']} ${
      reactInputsValidationCss['radiobox__input']
    } ${disabled && reactInputsValidationCss['disabled']}`;

    const labelClass = `${err && reactInputsValidationCss['error']} ${typeof successMsg !== 'undefined' && !err && reactInputsValidationCss['success']} ${
      reactInputsValidationCss['radiobox__label']
    } ${disabled && reactInputsValidationCss['disabled']}`;

    const optionListItemClass = `${classNameOptionListItem} ${err && reactInputsValidationCss['error']} ${typeof successMsg !== 'undefined' && !err && reactInputsValidationCss['success']} ${
      reactInputsValidationCss['radiobox__item']
    } ${disabled && reactInputsValidationCss['disabled']}`;

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

    let optionHtml;
    if (optionList.length) {
      optionHtml = optionList.map((i, k) => {
        const checked = String(i.id) === String(value) ? true : false;
        return (
          <div className={optionListItemClass} style={customStyleOptionListItem} key={k}>
            <input
              id={`${id}-${k}`}
              name={name}
              type="radio"
              value={value}
              checked={checked}
              disabled={disabled}
              className={checked ? `${reactInputsValidationCss['checked']} ${inputClass}` : `${inputClass}`}
              onChange={e => this.onChange(i.id, e)}
              style={customStyleInput}
            />
            <label htmlFor={`${id}-${k}`} className={checked ? `${reactInputsValidationCss['checked']} ${labelClass}` : `${labelClass}`}>
              {i.name}
            </label>
          </div>
        );
      });
    }

    return (
      <div id={id} tabIndex={Number(tabIndex)} className={wrapperClass} style={customStyleWrapper} onClick={this.onClick} onBlur={this.onBlur} onFocus={this.onFocus}>
        <div className={containerClass} style={customStyleContainer}>
          {optionHtml}
        </div>
        {msgHtml}
      </div>
    );
  }
}

export default Index;
