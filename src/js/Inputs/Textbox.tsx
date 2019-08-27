import * as React from 'react';
const { useState, useEffect, useCallback, useRef, memo } = React;
import message from './message';
import validator from './validator';
import utils from './utils';
import { REACT_INPUTS_VALIDATION_CUSTOM_ERROR_MESSAGE_EXAMPLE, DEFAULT_LOCALE, MSG_CLASS_IDENTITIFIER, usePrevious } from './const';
import reactInputsValidationCss from './react-inputs-validation.css';
const TYPE = 'textbox';
const VALIDATE_OPTION_TYPE_LIST = ['string', 'number', 'alphanumeric', 'alpha'];
const VALIDATE_NUMBER_TYPE_LIST = ['decimal', 'int'];
const DEFAULT_MAX_LENGTH = 524288; //  Default value is 524288
const DEFAULT_AUTO_COMPLETE = 'on'; //  Default value is on
interface DefaultValidationOption {
  locale?: string;
  reg?: string;
  min?: number;
  max?: number;
  type?: string;
  numberType?: string;
  name?: string;
  check?: boolean;
  showMsg?: boolean;
  length?: number;
  regMsg?: string;
  compare?: string;
  required?: boolean;
  msgOnError?: string;
  msgOnSuccess?: string;
  customFunc?: Function | undefined;
}
const getDefaultValidationOption = (obj: DefaultValidationOption) => {
  let { reg, min, max, type, numberType, name, check, length, regMsg, compare, required, showMsg, locale, msgOnError, msgOnSuccess, customFunc } = obj;
  locale = typeof locale !== 'undefined' ? locale : DEFAULT_LOCALE;
  reg = typeof reg !== 'undefined' ? reg : '';
  min = typeof min !== 'undefined' ? min : 0;
  max = typeof max !== 'undefined' ? max : 0;
  type = typeof type !== 'undefined' ? type : 'string';
  numberType = typeof numberType !== 'undefined' ? numberType : 'string';
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
    numberType,
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
interface DefaultAsyncMsgObj {
  error?: boolean;
  message?: string;
  showOnError?: boolean;
  showOnSuccess?: boolean;
}
const getDefaultAsyncObj = (obj: DefaultAsyncMsgObj) => {
  let { error, message, showOnError, showOnSuccess } = obj;
  error = typeof error !== 'undefined' ? error : false;
  message = typeof message !== 'undefined' ? message : '';
  showOnError = typeof showOnError !== 'undefined' ? showOnError : true;
  showOnSuccess = typeof showOnSuccess !== 'undefined' ? showOnSuccess : false;
  return {
    error,
    message,
    showOnError,
    showOnSuccess,
  };
};
interface Props {
  tabIndex?: string | number | null;
  id?: string | null;
  name?: string;
  type?: string;
  value?: string;
  disabled?: boolean;
  validate?: boolean;
  autoComplete?: string;
  maxLength?: string | number;
  placeholder?: string;
  classNameInput?: string;
  classNameWrapper?: string;
  classNameContainer?: string;
  customStyleInput?: object;
  customStyleWrapper?: object;
  customStyleContainer?: object;
  validationOption?: object;
  asyncMsgObj?: object;
  onChange: (res: string, e: React.ChangeEvent<HTMLElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  onKeyUp?: (e: React.KeyboardEvent<HTMLElement>) => void;
  validationCallback?: (res: boolean) => void;
}
const autoFormatNumber = (v: number | string, numberType: string) => {
  const DOT = '.';
  let res = '';
  let hasDot = false;
  String(v)
    .split('')
    .filter(i => {
      const charCode = i.toLowerCase().charCodeAt(0);
      if ((charCode >= 48 && charCode <= 57) || (charCode === 46 && !hasDot)) {
        if (charCode === 46) {
          if (numberType === VALIDATE_NUMBER_TYPE_LIST[1]) {
            return;
          }
          hasDot = true;
        }
        res += i;
      }
    });
  if (numberType === VALIDATE_NUMBER_TYPE_LIST[0]) {
    if (res.length && res[0] === DOT) {
      res = `0${res}`;
    }
  }
  return res;
};
const component: React.FC<Props> = ({
  tabIndex = null,
  id = null,
  name = '',
  type = 'text',
  value = '',
  disabled = false,
  validate = false,
  autoComplete = DEFAULT_AUTO_COMPLETE,
  maxLength = DEFAULT_MAX_LENGTH,
  placeholder = '',
  classNameInput = '',
  classNameWrapper = '',
  classNameContainer = '',
  customStyleInput = {},
  customStyleWrapper = {},
  customStyleContainer = {},
  validationOption = {},
  asyncMsgObj = {},
  onChange = (v: string, e: React.ChangeEvent<HTMLElement>) => {},
  onBlur = null,
  onFocus = null,
  onClick = null,
  onKeyUp = null,
  validationCallback = null,
}) => {
  const [err, setErr] = useState(false);
  const [msg, setMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [internalValue, setInternalValue] = useState(String(value));
  const prevInternalValue = usePrevious(internalValue);
  const option = getDefaultValidationOption(validationOption);
  const asyncObj = getDefaultAsyncObj(asyncMsgObj);
  const $input = useRef(null);
  const $el: { [key: string]: any } | null = $input;
  const handleOnBlur = useCallback(
    (e: React.FocusEvent<HTMLElement>) => {
      if (onBlur) {
        check();
        onBlur(e);
      }
    },
    [internalValue],
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
  const handleOnKeyUp = useCallback(
    (e: React.KeyboardEvent<HTMLElement>) => {
      if (onKeyUp) {
        const { keyCode } = e;
        const keyCodeTab = 9;
        if (keyCode !== keyCodeTab) {
          check();
        }
        onKeyUp(e);
      }
    },
    [internalValue],
  );
  const handleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLElement>) => {
      if (disabled || $el === null) {
        return;
      }
      let v = $el.current.value;
      if ((typeof maxLength === 'string' && maxLength !== '') || (typeof maxLength === 'number' && maxLength !== 0)) {
        if (v.length > Number(maxLength)) {
          return;
        }
      }
      const { type, numberType } = option;
      if (type === VALIDATE_OPTION_TYPE_LIST[1]) {
        v = String(autoFormatNumber(v, VALIDATE_NUMBER_TYPE_LIST.indexOf(numberType) >= 0 ? numberType : VALIDATE_NUMBER_TYPE_LIST[0]));
      }
      if (type === VALIDATE_OPTION_TYPE_LIST[2]) {
        v = utils.getAlphanumeric(v);
      }
      if (type === VALIDATE_OPTION_TYPE_LIST[3]) {
        v = utils.getAlpha(v);
      }
      setInternalValue(v);
      onChange && onChange(v, e);
      if (err) {
        setErr(false);
      } else {
        setSuccessMsg('');
      }
    },
    [err],
  );
  const check = useCallback(
    async () => {
      const { reg, min, max, type, name, check, length, regMsg, locale, compare, required, msgOnSuccess, customFunc } = option;
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
          const nameText = name ? name : '';
          if (required) {
            if (validator.empty(internalValue)) {
              handleCheckEnd(true, msg.empty(nameText));
              return;
            }
          }
          if (String(internalValue) !== '') {
            if (reg) {
              if (validator['reg'](reg, internalValue)) {
                handleCheckEnd(true, regMsg !== '' ? regMsg : msg.invalid(nameText));
                return;
              }
            }
            if (type === VALIDATE_OPTION_TYPE_LIST[0]) {
              if (min || max) {
                if (min && max) {
                  if (String(internalValue).length < min || String(internalValue).length > max) {
                    handleCheckEnd(true, msg.inBetween(nameText)(min)(max));
                    return;
                  }
                } else {
                  if (min) {
                    if (String(internalValue).length < min) {
                      handleCheckEnd(true, msg.lessThan(nameText)(min));
                      return;
                    }
                  }
                  if (max) {
                    if (String(internalValue).length > max) {
                      handleCheckEnd(true, msg.greaterThan(nameText)(max));
                      return;
                    }
                  }
                }
              }
              if (length) {
                if (String(internalValue).length !== length) {
                  handleCheckEnd(true, msg.lengthEqual(nameText)(length));
                  return;
                }
              }
            }
            if (type === VALIDATE_OPTION_TYPE_LIST[1]) {
              if (!validator[type](internalValue, null, null)) {
                handleCheckEnd(true, msg.invalid(nameText));
                return;
              }
              if (min || max) {
                if (min && max) {
                  if (!validator[type](internalValue, min, max)) {
                    handleCheckEnd(true, msg.inBetween(nameText)(min)(max));
                    return;
                  }
                } else {
                  if (min) {
                    if (!validator[type](internalValue, min)) {
                      handleCheckEnd(true, msg.lessThan(nameText)(min));
                      return;
                    }
                  }
                  if (max) {
                    if (!validator[type](internalValue, 0, max)) {
                      handleCheckEnd(true, msg.greaterThan(nameText)(max));
                      return;
                    }
                  }
                }
              }
              if (length) {
                if (String(internalValue).length !== length) {
                  handleCheckEnd(true, msg.lengthEqual(nameText)(length));
                  return;
                }
              }
            }
            if (compare && compare !== '') {
              if (internalValue !== compare) {
                handleCheckEnd(true, msg.twoInputsNotEqual());
                return;
              }
            }
          }
          if (customFunc && typeof customFunc === 'function') {
            const customFuncResult = await customFunc(internalValue);
            if (typeof customFuncResult === 'object') {
              if (typeof customFuncResult.error === 'boolean' && typeof customFuncResult.message === 'string') {
                if (customFuncResult.error === false && customFuncResult.showOnSuccess === true) {
                  setSuccessMsg(customFuncResult.message);
                }
                handleCheckEnd(customFuncResult.error, customFuncResult.message, true);
              }
              return;
            }
            if (customFuncResult !== true) {
              handleCheckEnd(true, customFuncResult, true);
              return;
            }
          }
          if (msgOnSuccess) {
            setSuccessMsg(msgOnSuccess);
          }
          handleCheckEnd(false, msgOnSuccess);
        } else {
          console.error(`The valid ${utils.toCamelCase(TYPE)(true)} "type" options in validationOption are [${VALIDATE_OPTION_TYPE_LIST.map(i => i)}]`);
        }
      } else {
        console.error('Please provide "type" in validationOption');
      }
    },
    [internalValue, option],
  );
  const handleCheckEnd = useCallback((err: boolean, message: string, fromCustomFunc: boolean = false) => {
    let msg = message;
    const { msgOnError } = option;
    if (err && msgOnError && !fromCustomFunc) {
      msg = msgOnError;
    }
    setErr(err);
    setMsg(msg);
    validationCallback && validationCallback(err);
  }, []);
  useEffect(() => {
    /* istanbul ignore if because it won't happen */
    if ($el === null) {
      return;
    }
    if (id) {
      $el.current.setAttribute('id', String(id));
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
      setInternalValue(String(value));
    },
    [value],
  );
  useEffect(
    () => {
      if (typeof prevInternalValue !== 'undefined' && prevInternalValue !== internalValue) {
        if (option.customFunc && onKeyUp) {
          check();
        }
      }
    },
    [internalValue],
  );
  useEffect(
    () => {
      if (asyncObj) {
        if (asyncObj.message) {
          if (asyncObj.showOnError) {
            handleCheckEnd(asyncObj.error, asyncObj.message);
          }
          if (!asyncObj.error && asyncObj.showOnSuccess) {
            setSuccessMsg(asyncObj.message);
          }
        }
      }
    },
    [asyncMsgObj],
  );
  const wrapperClass = `${classNameWrapper} ${reactInputsValidationCss[`${TYPE}__wrapper`]} ${err && reactInputsValidationCss['error']} ${successMsg !== '' &&
    !err &&
    reactInputsValidationCss['success']} ${disabled && reactInputsValidationCss['disabled']}`;
  const containerClass = `${classNameContainer} ${reactInputsValidationCss[`${TYPE}__container`]} ${err && reactInputsValidationCss['error']} ${successMsg !== '' &&
    !err &&
    reactInputsValidationCss['success']} ${disabled && reactInputsValidationCss['disabled']}`;
  const inputClass = `${classNameInput} ${reactInputsValidationCss[`${TYPE}__input`]} ${err && reactInputsValidationCss['error']} ${successMsg !== '' &&
    !err &&
    reactInputsValidationCss['success']} ${disabled && reactInputsValidationCss['disabled']}`;
  const errMsgClass = `${MSG_CLASS_IDENTITIFIER} ${reactInputsValidationCss['msg']} ${err && reactInputsValidationCss['error']}`;
  const successMsgClass = `${MSG_CLASS_IDENTITIFIER} ${reactInputsValidationCss['msg']} ${!err && reactInputsValidationCss['success']}`;
  let msgHtml;
  const { showMsg } = option;
  if (showMsg && err && msg) {
    msgHtml = <div className={errMsgClass}>{msg}</div>;
  }
  if (showMsg && !err && successMsg !== '') {
    msgHtml = <div className={successMsgClass}>{successMsg}</div>;
  }
  return (
    <div className={wrapperClass} style={customStyleWrapper}>
      <div className={containerClass} style={customStyleContainer}>
        <input
          name={name}
          type={type}
          value={internalValue}
          disabled={disabled}
          autoComplete={autoComplete}
          maxLength={Number(maxLength)}
          onBlur={handleOnBlur}
          onKeyUp={handleOnKeyUp}
          onFocus={handleOnFocus}
          onClick={handleOnClick}
          className={inputClass}
          onChange={handleOnChange}
          style={customStyleInput}
          placeholder={placeholder}
          ref={$input}
        />
      </div>
      {msgHtml}
    </div>
  );
};
export default memo(component);
