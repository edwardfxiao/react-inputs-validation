import * as React from 'react';
const { useState, useEffect, useCallback, useRef, memo } = React;
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

const isValidValue = (list: OptionListItem[], value: any) => {
  let res = false;
  if (list.length) {
    for (let i = 0; i < list.length; i += 1) {
      if (list[i].id === value) {
        res = true;
        break;
      }
    }
  }
  return res;
};

interface OptionListItem {
  id: string;
  name: string;
}

interface Props {
  tabIndex?: string | number | undefined;
  id?: string;
  name?: string;
  value?: string | number;
  disabled?: boolean;
  validate?: boolean;
  optionList?: OptionListItem[];
  onChange: (res: string, e: React.ChangeEvent<HTMLElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
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

const component: React.FC<Props> = ({
  tabIndex = null,
  id = '',
  name = '',
  value = '',
  disabled = false,
  validate = false,
  optionList = [],
  classNameWrapper = '',
  classNameInput = '',
  classNameContainer = '',
  classNameOptionListItem = '',
  customStyleWrapper = {},
  customStyleContainer = {},
  customStyleInput = {},
  customStyleOptionListItem = {},
  validationOption = {},
  onChange = () => {},
  onBlur = null,
  onFocus = null,
  onClick = null,
  validationCallback = null,
}) => {
  const [err, setErr] = useState(false);
  const [msg, setMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const option = getDefaultValidationOption(validationOption);
  const $input = useRef(null);
  const $el: { [key: string]: any } | null = $input;
  const handleOnBlur = useCallback(
    (e: React.FocusEvent<HTMLElement>) => {
      if (onBlur) {
        check();
        onBlur(e);
      }
    },
    [value],
  );
  const handleOnFocus = useCallback((e: React.FocusEvent<HTMLElement>) => {
    if (onFocus) {
      onFocus(e);
    }
  }, []);
  const handleOnClick = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (onClick) {
      onClick(e);
    }
  }, []);
  const handleOnChange = useCallback((val: string, e: React.ChangeEvent<HTMLElement>) => {
    if (disabled || $el === null) {
      return;
    }
    onChange && onChange(val, e);
  }, []);
  const check = useCallback(
    (val: null | string = null) => {
      const { name, check, locale, required, msgOnSuccess } = option;
      if (!check) {
        return;
      }
      if (!message[locale] || !message[locale][TYPE]) {
        console.error(REACT_INPUTS_VALIDATION_CUSTOM_ERROR_MESSAGE_EXAMPLE);
        return;
      }
      if (required) {
        const msg = message[locale][TYPE];
        const nameText = name ? name : '';
        if (!isValidValue(optionList, value)) {
          handleCheckEnd(true, msg.empty(nameText));
          return;
        }
      }
      if (msgOnSuccess) {
        setSuccessMsg(msgOnSuccess);
      }
      handleCheckEnd(false, msgOnSuccess);
    },
    [value],
  );
  const handleCheckEnd = useCallback((err: boolean, message: string) => {
    let msg = message;
    const { msgOnError } = option;
    if (err && msgOnError) {
      msg = msgOnError;
    }
    setErr(err);
    setMsg(msg);
    validationCallback && validationCallback(err);
  }, []);
  useEffect(() => {
    if ($el === null) {
      return;
    }
    if (tabIndex) {
      $el.current.setAttribute('tabindex', String(tabIndex));
    }
  }, []);
  useEffect(
    () => {
      if (validate) {
        check();
      }
    },
    [validate],
  );
  useEffect(
    () => {
      if (value && isValidValue(optionList, value)) {
        setErr(false);
      } else {
        setSuccessMsg('');
      }
    },
    [value],
  );
  const wrapperClass = `${classNameWrapper} ${err && reactInputsValidationCss['error']} ${successMsg !== '' && !err && reactInputsValidationCss['success']} ${
    reactInputsValidationCss[`${TYPE}__wrapper`]
  } ${disabled && reactInputsValidationCss['disabled']}`;
  const containerClass = `${classNameContainer} ${err && reactInputsValidationCss['error']} ${successMsg !== '' && !err && reactInputsValidationCss['success']} ${
    reactInputsValidationCss[`${TYPE}__container`]
  } ${disabled && reactInputsValidationCss['disabled']}`;
  const inputClass = `${classNameInput} ${err && reactInputsValidationCss['error']} ${successMsg !== '' && !err && reactInputsValidationCss['success']} ${
    reactInputsValidationCss[`${TYPE}__input`]
  } ${disabled && reactInputsValidationCss['disabled']}`;
  const labelClass = `${err && reactInputsValidationCss['error']} ${successMsg !== '' && !err && reactInputsValidationCss['success']} ${reactInputsValidationCss[`${TYPE}__label`]} ${disabled &&
    reactInputsValidationCss['disabled']}`;
  const optionListItemClass = `${classNameOptionListItem} ${err && reactInputsValidationCss['error']} ${successMsg !== '' && !err && reactInputsValidationCss['success']} ${
    reactInputsValidationCss[`${TYPE}__item`]
  } ${disabled && reactInputsValidationCss['disabled']}`;
  const errMsgClass = `${reactInputsValidationCss['msg']} ${err && reactInputsValidationCss['error']}`;
  const successMsgClass = `${reactInputsValidationCss['msg']} ${!err && reactInputsValidationCss['success']}`;
  let msgHtml;
  const { showMsg } = option;
  if (showMsg && err && msg) {
    msgHtml = <div className={errMsgClass}>{msg}</div>;
  }
  if (showMsg && !err && successMsg !== '') {
    msgHtml = <div className={successMsgClass}>{successMsg}</div>;
  }
  let optionHtml;
  if (optionList.length) {
    optionHtml = optionList.map((i, k) => {
      const checked = String(i.id) === String(value) ? true : false;
      return (
        <Option
          key={k}
          index={k}
          checked={checked}
          id={id}
          name={name}
          item={i}
          inputClass={inputClass}
          value={value}
          disabled={disabled}
          optionListItemClass={optionListItemClass}
          customStyleOptionListItem={customStyleOptionListItem}
          customStyleInput={customStyleInput}
          labelClass={labelClass}
          onChange={handleOnChange}
        />
      );
    });
  }
  return (
    <div ref={$input} id={id} className={wrapperClass} style={customStyleWrapper} onClick={handleOnClick} onBlur={handleOnBlur} onFocus={handleOnFocus}>
      <div className={containerClass} style={customStyleContainer}>
        {optionHtml}
      </div>
      {msgHtml}
    </div>
  );
};
interface OptionProps {
  index?: number;
  checked?: boolean;
  id?: string;
  name?: string;
  optionListItemClass?: string;
  labelClass?: string;
  inputClass?: string;
  value?: string | number;
  disabled?: boolean;
  item?: OptionListItem;
  customStyleOptionListItem?: object;
  customStyleInput?: object;
  onChange?: (res: string, e: React.ChangeEvent<HTMLElement>) => void;
}
const Option: React.FC<OptionProps> = memo(
  ({
    index = '',
    checked = false,
    id = '',
    name = '',
    optionListItemClass = '',
    labelClass = '',
    inputClass = '',
    value = '',
    disabled = false,
    item = { id: '', name: '' },
    customStyleOptionListItem = {},
    customStyleInput = {},
    onChange = () => {},
  }) => {
    const handleOnChange = useCallback(e => {
      onChange(item.id, e);
    }, []);
    return (
      <div className={optionListItemClass} style={customStyleOptionListItem}>
        <input
          id={`${id}-${index}`}
          name={name}
          type="radio"
          value={value}
          checked={checked}
          disabled={disabled}
          className={checked ? `${reactInputsValidationCss['checked']} ${inputClass}` : `${inputClass}`}
          onChange={handleOnChange}
          style={customStyleInput}
        />
        <label htmlFor={`${id}-${index}`} className={checked ? `${reactInputsValidationCss['checked']} ${labelClass}` : `${labelClass}`}>
          {item.name}
        </label>
      </div>
    );
  },
);
export default memo(component);
