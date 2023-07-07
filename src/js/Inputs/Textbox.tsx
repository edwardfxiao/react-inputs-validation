import * as React from 'react';
const { useState, useEffect, useCallback, useRef, memo } = React;
import message from './message';
import validator from './validator';
import utils from './utils';
import { REACT_INPUTS_VALIDATION_CUSTOM_ERROR_MESSAGE_EXAMPLE, DEFAULT_LOCALE, MSG_CLASS_IDENTITIFIER, usePrevious } from './const';
import reactInputsValidationCss from './react-inputs-validation.css';
const TYPE = 'textbox';
const VALIDATE_OPTION_TYPE_LIST = ['string', 'number', 'alphanumeric', 'alpha'];
const VALIDATE_NUMBER_TYPE_LIST = ['decimal', 'int', 'price'];
interface DefaultValidationOption {
  locale?: string;
  reg?: string;
  min?: number;
  max?: number;
  type?: string;
  numberType?: string;
  mantissa?: number;
  decimalSeparator?: string;
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
  shouldRenderMsgAsHtml?: boolean;
}
const getDefaultValidationOption = (obj: DefaultValidationOption) => {
  let { reg, min, max, type, numberType, mantissa, decimalSeparator, name, check, length, regMsg, compare, required, showMsg, locale, msgOnError, msgOnSuccess, customFunc, shouldRenderMsgAsHtml } =
    obj;
  locale = typeof locale !== 'undefined' ? locale : DEFAULT_LOCALE;
  reg = typeof reg !== 'undefined' ? reg : '';
  min = typeof min !== 'undefined' ? min : 0;
  max = typeof max !== 'undefined' ? max : 0;
  type = typeof type !== 'undefined' ? type : 'string';
  numberType = typeof numberType !== 'undefined' ? numberType : 'string';
  mantissa = typeof mantissa !== 'undefined' ? mantissa : -1;
  decimalSeparator = typeof decimalSeparator !== 'undefined' ? decimalSeparator : '.';
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
  shouldRenderMsgAsHtml = typeof shouldRenderMsgAsHtml !== 'undefined' ? shouldRenderMsgAsHtml : false;
  return {
    reg,
    min,
    max,
    type,
    numberType,
    mantissa,
    decimalSeparator,
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
    shouldRenderMsgAsHtml,
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
interface AttributesInputObj {
  id?: string;
  name?: string;
  type?: string;
  placeholder?: string;
  maxLength?: number;
}
interface Props {
  attributesWrapper?: React.HTMLAttributes<HTMLDivElement>;
  attributesInput?: AttributesInputObj;
  value?: string;
  label?: string;
  disabled?: boolean;
  validate?: boolean;
  classNameInput?: string;
  classNameWrapper?: string;
  classNameContainer?: string;
  customStyleInput?: React.CSSProperties;
  customStyleWrapper?: React.CSSProperties;
  customStyleContainer?: React.CSSProperties;
  validationOption?: DefaultValidationOption;
  asyncMsgObj?: {
    error?: boolean;
    message?: string;
    showOnError?: boolean;
    showOnSuccess?: boolean;
  };
  onChange?: (res: string, e: React.ChangeEvent<HTMLElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  onKeyUp?: (e: React.KeyboardEvent<HTMLElement>) => void;
  validationCallback?: (res: boolean) => void;
}
const autoFormatNumber = (v: number | string, numberType: string, mantissa: number, decimalSeparator: string) => {
  const DEFAULT_DECIMAL = '.';
  const ZERO = '0';
  let res = '';
  let hasDecimalSeparator = false;
  const splitStr = utils.replaceSeparator(String(v), decimalSeparator, DEFAULT_DECIMAL).split('');
  // const startedWithZero = splitStr[0] === ZERO;
  if (numberType === VALIDATE_NUMBER_TYPE_LIST[2] && splitStr[0] === ZERO && splitStr[1] === ZERO) {
    splitStr.shift();
  }
  splitStr.forEach((i: string) => {
    const charCode = i.toLowerCase().charCodeAt(0);
    if ((charCode >= 48 && charCode <= 57) || (i === DEFAULT_DECIMAL && !hasDecimalSeparator)) {
      if (charCode === 46) {
        if (numberType === VALIDATE_NUMBER_TYPE_LIST[1]) {
          return;
        }
        hasDecimalSeparator = true;
      }
      res += i;
    }
  });
  if (hasDecimalSeparator && mantissa >= 0) {
    const resArr = res.split(DEFAULT_DECIMAL);
    if (mantissa === 0) {
      res = resArr[0];
    } else {
      resArr[1] = resArr[1].slice(0, mantissa);
      res = resArr.join(DEFAULT_DECIMAL);
    }
  }
  if (numberType === VALIDATE_NUMBER_TYPE_LIST[0] || numberType === VALIDATE_NUMBER_TYPE_LIST[2]) {
    if (res.length && res[0] === DEFAULT_DECIMAL) {
      res = `${ZERO}${res}`;
    }
  }
  // if (numberType === VALIDATE_NUMBER_TYPE_LIST[2]) {
  //   if (startedWithZero) {
  //     if (hasDecimalSeparator) {
  //       const resArr = res.split(DECIMAL_SEPARATOR);
  //       res = `${Number(resArr[0])}${DECIMAL_SEPARATOR}${resArr[1]}`;
  //     }
  //   }
  // }
  return utils.replaceSeparator(res, DEFAULT_DECIMAL, decimalSeparator);
};
const component: React.FC<Props> = ({
  attributesWrapper = {},
  attributesInput = {},
  value = '',
  label = '',
  disabled = false,
  validate = false,
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
    [internalValue, option],
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
    [internalValue, option],
  );
  const handleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLElement>) => {
      if (disabled || $el === null) {
        return;
      }
      let v = $el.current.value;
      if (typeof attributesInput.maxLength !== 'undefined') {
        if ((typeof attributesInput.maxLength === 'string' && attributesInput.maxLength !== '') || (typeof attributesInput.maxLength === 'number' && attributesInput.maxLength !== 0)) {
          if (v.length > Number(attributesInput.maxLength)) {
            return;
          }
        }
      }
      const { type, numberType, mantissa, decimalSeparator } = option;
      if (type === VALIDATE_OPTION_TYPE_LIST[1]) {
        v = String(autoFormatNumber(v, VALIDATE_NUMBER_TYPE_LIST.indexOf(numberType) >= 0 ? numberType : VALIDATE_NUMBER_TYPE_LIST[0], mantissa, decimalSeparator));
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
    [err, attributesInput, option],
  );
  const check = useCallback(async () => {
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
          if (!($input && $input.current)) {
            return;
          }
          /* istanbul ignore next because of async problem */
          if (typeof customFuncResult === 'object') {
            if (typeof customFuncResult.error === 'boolean' && typeof customFuncResult.message === 'string') {
              if (customFuncResult.error === false && customFuncResult.showOnSuccess === true) {
                setSuccessMsg(customFuncResult.message);
              }
              handleCheckEnd(customFuncResult.error, customFuncResult.message, true);
            }
            return;
          }
          /* istanbul ignore next because of async problem */
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
  }, [internalValue, option]);
  const handleCheckEnd = useCallback(
    (err: boolean, message: string, fromCustomFunc: boolean = false) => {
      let msg = message;
      const { msgOnError } = option;
      if (err && msgOnError && !fromCustomFunc) {
        msg = msgOnError;
      }
      setErr(err);
      setMsg(msg);
      validationCallback && validationCallback(err);
    },
    [option.msgOnError],
  );
  useEffect(() => {
    if (validate) {
      check();
    }
  }, [validate]);
  useEffect(() => {
    setInternalValue(String(value));
  }, [value]);
  useEffect(() => {
    /* istanbul ignore next because of https://github.com/airbnb/enzyme/issues/441 && https://github.com/airbnb/enzyme/blob/master/docs/future.md */
    if (typeof prevInternalValue !== 'undefined' && prevInternalValue !== internalValue) {
      if (option.customFunc && onKeyUp) {
        check();
      }
    }
  }, [internalValue]);
  useEffect(() => {
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
  }, [asyncMsgObj]);
  const wrapperClass = `${classNameWrapper} ${reactInputsValidationCss[`${TYPE}__wrapper`]} ${err && reactInputsValidationCss['error']} ${
    successMsg !== '' && !err && reactInputsValidationCss['success']
  } ${disabled && reactInputsValidationCss['disabled']}`;
  const containerClass = `${classNameContainer} ${reactInputsValidationCss[`${TYPE}__container`]} ${err && reactInputsValidationCss['error']} ${
    successMsg !== '' && !err && reactInputsValidationCss['success']
  } ${disabled && reactInputsValidationCss['disabled']}`;
  const inputClass = `${classNameInput} ${reactInputsValidationCss[`${TYPE}__input`]} ${err && reactInputsValidationCss['error']} ${successMsg !== '' && !err && reactInputsValidationCss['success']} ${
    disabled && reactInputsValidationCss['disabled']
  }`;
  const errMsgClass = `${MSG_CLASS_IDENTITIFIER} ${reactInputsValidationCss['msg']} ${err && reactInputsValidationCss['error']}`;
  const successMsgClass = `${MSG_CLASS_IDENTITIFIER} ${reactInputsValidationCss['msg']} ${!err && reactInputsValidationCss['success']}`;
  let msgHtml;
  const { showMsg, shouldRenderMsgAsHtml } = option;
  if (showMsg && err && msg) {
    msgHtml = shouldRenderMsgAsHtml ? <div className={errMsgClass} dangerouslySetInnerHTML={{ __html: msg }} /> : <div className={errMsgClass}>{msg}</div>;
  }
  if (showMsg && !err && successMsg !== '') {
    msgHtml = shouldRenderMsgAsHtml ? <div className={successMsgClass} dangerouslySetInnerHTML={{ __html: successMsg }} /> : <div className={successMsgClass}>{successMsg}</div>;
  }
  return (
    <div className={wrapperClass} style={customStyleWrapper} {...attributesWrapper}>
      <div className={containerClass} style={customStyleContainer}>
        <input
          type="text"
          value={internalValue}
          disabled={disabled}
          onBlur={handleOnBlur}
          onKeyUp={handleOnKeyUp}
          onFocus={handleOnFocus}
          onClick={handleOnClick}
          className={inputClass}
          onChange={handleOnChange}
          style={customStyleInput}
          ref={$input}
          {...attributesInput}
        />
        {label && attributesInput.id && <label htmlFor={attributesInput.id}>{label}</label>}
      </div>
      {msgHtml}
    </div>
  );
};
export default memo(component);
