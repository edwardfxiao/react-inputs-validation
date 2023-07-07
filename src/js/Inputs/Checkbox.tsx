import * as React from 'react';
const { useState, useEffect, useCallback, useRef, memo } = React;
import message from './message';
import { REACT_INPUTS_VALIDATION_CUSTOM_ERROR_MESSAGE_EXAMPLE, DEFAULT_LOCALE, WRAPPER_CLASS_IDENTITIFIER, MSG_CLASS_IDENTITIFIER, usePrevious } from './const';
import utils from './utils';
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
  shouldRenderMsgAsHtml?: boolean;
}
const getDefaultValidationOption = (obj: DefaultValidationOption) => {
  let { name, check, required, showMsg, locale, msgOnError, msgOnSuccess, shouldRenderMsgAsHtml } = obj;
  locale = typeof locale !== 'undefined' ? locale : DEFAULT_LOCALE;
  name = typeof name !== 'undefined' ? name : '';
  check = typeof check !== 'undefined' ? check : true;
  showMsg = typeof showMsg !== 'undefined' ? showMsg : true;
  required = typeof required !== 'undefined' ? required : true;
  msgOnSuccess = typeof msgOnSuccess !== 'undefined' ? msgOnSuccess : '';
  msgOnError = typeof msgOnError !== 'undefined' ? msgOnError : '';
  shouldRenderMsgAsHtml = typeof shouldRenderMsgAsHtml !== 'undefined' ? shouldRenderMsgAsHtml : false;
  return {
    name,
    check,
    showMsg,
    required,
    locale,
    msgOnError,
    msgOnSuccess,
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
interface Props {
  attributesWrapper?: React.HTMLAttributes<HTMLButtonElement>;
  attributesInput?: {
    id?: string;
    name?: string;
  };
  value?: string | boolean;
  checked?: boolean;
  disabled?: boolean;
  labelHtml?: React.ReactNode;
  validate?: boolean;
  onChange: (res: boolean, e: React.ChangeEvent<HTMLElement> | React.MouseEvent<HTMLElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  validationOption?: DefaultValidationOption;
  asyncMsgObj?: DefaultAsyncMsgObj;
  classNameInput?: string;
  classNameWrapper?: string;
  classNameInputBox?: string;
  classNameInputBoxItem?: string;
  classNameContainer?: string;
  customStyleInput?: React.CSSProperties;
  customStyleWrapper?: React.CSSProperties;
  customStyleContainer?: React.CSSProperties;
  customStyleInputBox?: React.CSSProperties;
  validationCallback?: (res: boolean) => void;
}
const component: React.FC<Props> = ({
  attributesWrapper = {},
  attributesInput = {},
  value = '',
  checked = false,
  disabled = false,
  validate = false,
  labelHtml = null,
  classNameInput = '',
  classNameWrapper = '',
  classNameInputBox = '',
  classNameInputBoxItem = '',
  classNameContainer = '',
  customStyleInput = {},
  customStyleWrapper = {},
  customStyleInputBox = {},
  customStyleContainer = {},
  validationOption = {},
  asyncMsgObj = {},
  onChange = () => {},
  onBlur = null,
  onFocus = null,
  onClick = null,
  validationCallback = null,
}) => {
  const [err, setErr] = useState(false);
  const [msg, setMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [internalChecked, setInternalChecked] = useState(checked);
  const prevInternalChecked = usePrevious(internalChecked);
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
    [internalChecked, option],
  );
  const handleOnFocus = useCallback(
    (e: React.FocusEvent<HTMLElement>) => {
      if (onFocus) {
        onFocus(e);
      }
    },
    [internalChecked],
  );
  const handleOnClick = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      handleOnChange(e);
      if (onClick) {
        onClick(e);
      }
    },
    [err, internalChecked, disabled],
  );
  const handleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLElement> | React.MouseEvent<HTMLElement>) => {
      if (disabled || $el === null) {
        return;
      }
      setInternalChecked(!internalChecked);
      onChange && onChange(!internalChecked, e);
      if (err) {
        setErr(false);
      } else {
        setSuccessMsg('');
      }
    },
    [err, internalChecked, disabled],
  );
  const check = useCallback(() => {
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
      if (!internalChecked) {
        handleCheckEnd(true, msg.unchecked(nameText));
        return;
      }
    }
    if (msgOnSuccess) {
      setSuccessMsg(msgOnSuccess);
    }
    handleCheckEnd(false, msgOnSuccess);
  }, [internalChecked, option]);
  const handleCheckEnd = useCallback(
    (err: boolean, message: string) => {
      let msg = message;
      const { msgOnError } = option;
      if (err && msgOnError) {
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
  }, [validate, internalChecked]);
  useEffect(() => {
    setInternalChecked(checked);
  }, [checked]);
  useEffect(() => {
    if (typeof prevInternalChecked !== 'undefined' && prevInternalChecked !== internalChecked) {
      check();
    }
  }, [prevInternalChecked, internalChecked]);
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
  const wrapperClass = `${reactInputsValidationCss['button']} ${WRAPPER_CLASS_IDENTITIFIER} ${classNameWrapper} ${reactInputsValidationCss[`${TYPE}__wrapper`]} ${
    internalChecked && reactInputsValidationCss['checked']
  } ${err && reactInputsValidationCss['error']} ${successMsg !== '' && !err && reactInputsValidationCss['success']} ${disabled && reactInputsValidationCss['disabled']}`;
  const containerClass = `${classNameContainer} ${reactInputsValidationCss[`${TYPE}__container`]} ${internalChecked && reactInputsValidationCss['checked']} ${
    err && reactInputsValidationCss['error']
  } ${successMsg !== '' && !err && reactInputsValidationCss['success']} ${disabled && reactInputsValidationCss['disabled']}`;
  const boxClass = `${classNameInputBox} ${reactInputsValidationCss[`${TYPE}__box`]} ${err && reactInputsValidationCss['error']} ${internalChecked && reactInputsValidationCss['checked']} ${
    successMsg !== '' && !err && reactInputsValidationCss['success']
  } ${disabled && reactInputsValidationCss['disabled']}`;
  const boxItemClass = `${classNameInputBoxItem} ${reactInputsValidationCss['box']}`;
  const labelClass = `${internalChecked && reactInputsValidationCss['checked']} ${err && reactInputsValidationCss['error']} ${successMsg !== '' && !err && reactInputsValidationCss['success']} ${
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
    <button type="button" ref={$input} className={wrapperClass} style={customStyleWrapper} onClick={handleOnClick} onBlur={handleOnBlur} onFocus={handleOnFocus} {...attributesWrapper}>
      <div className={containerClass} style={customStyleContainer}>
        <div className={boxClass} style={customStyleInputBox}>
          <div className={boxItemClass} />
          <input
            type={TYPE}
            className={reactInputsValidationCss[`${TYPE}__input`]}
            value={String(value)}
            defaultChecked={internalChecked}
            disabled={disabled}
            onChange={handleOnChange}
            {...attributesInput}
          />
        </div>
        <label className={labelClass}>{labelHtml}</label>
      </div>
      {msgHtml}
    </button>
  );
};
export default memo(component);
