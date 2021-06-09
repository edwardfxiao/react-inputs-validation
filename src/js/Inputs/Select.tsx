import * as React from 'react';
const { useState, useEffect, useCallback, useRef, useMemo, memo } = React;
import message from './message';
import { REACT_INPUTS_VALIDATION_CUSTOM_ERROR_MESSAGE_EXAMPLE, DEFAULT_LOCALE, WRAPPER_CLASS_IDENTITIFIER, CONTAINER_CLASS_IDENTITIFIER, MSG_CLASS_IDENTITIFIER, usePrevious } from './const';
import utils from './utils';
import reactInputsValidationCss from './react-inputs-validation.css';
const TYPE = 'select';
const keyCodeEsc = 27;
const keyCodeDown = 40;
const keyCodeUp = 38;
const keyCodeEnter = 13;
const selectKeyList = [keyCodeEsc, keyCodeDown, keyCodeUp, keyCodeEnter];
/* istanbul ignore next */
if (!String.prototype.startsWith) {
  String.prototype.startsWith = function (searchString, position) {
    const p = position || 0;
    return this.indexOf(searchString, p) === p;
  };
}
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
export const isValidValue = (list: OptionListItem[], value: any) => {
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
export const getItem = (list: OptionListItem[], value: any) => {
  let res = null;
  if (list.length) {
    for (let i = 0; i < list.length; i += 1) {
      if (list[i].id === value) {
        res = list[i];
        break;
      }
    }
  }
  return res;
};
export const getIndex = (list: OptionListItem[], value: string) => {
  let key = -1;
  for (let i = 0; i < list.length; i += 1) {
    if (list[i].id === value) {
      key = i;
      break;
    }
  }
  return key;
};
interface OptionListItem {
  id: string;
  name: string;
}
interface Props {
  attributesWrapper?: React.HTMLAttributes<HTMLButtonElement>;
  attributesInput?: {
    id?: string;
    name?: string;
    type?: string;
    placeholder?: string;
    maxLength?: number;
  };
  value?: string | number;
  disabled?: boolean;
  validate?: boolean;
  showSearch?: boolean;
  showArrow?: boolean;
  keyword?: string;
  optionList: OptionListItem[];
  onChange: (res: object, e: React.MouseEvent<HTMLElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLElement> | Event) => void;
  onFocus?: (e: React.FocusEvent<HTMLElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  validationOption?: DefaultValidationOption;
  asyncMsgObj?: {
    error?: boolean;
    message?: string;
    showOnError?: boolean;
    showOnSuccess?: boolean;
  };
  classNameWrapper?: string;
  classNameContainer?: string;
  classNameSelect?: string;
  classNameOptionListWrapper?: string;
  classNameOptionListContainer?: string;
  classNameDropdownIconOptionListItem?: string;
  classNameOptionListItem?: string;
  customStyleWrapper?: React.CSSProperties;
  customStyleContainer?: React.CSSProperties;
  customStyleSelect?: React.CSSProperties;
  customStyleOptionListContainer?: React.CSSProperties;
  customStyleDropdownIcon?: React.CSSProperties;
  customStyleOptionListItem?: React.CSSProperties;
  validationCallback?: (res: boolean) => void;
}
interface Node {
  [key: string]: any;
}
let globalVariableIsFocusing: boolean = false;
let globalVariableIsCorrected: boolean = false;
let globalVariableCurrentFocus: any | null = null;
let globalVariableTypingTimeout: any | null = null;
const component: React.FC<Props> = ({
  attributesWrapper = {},
  attributesInput = {},
  value = '',
  disabled = false,
  validate = false,
  showSearch = false,
  showArrow = true,
  keyword = '',
  optionList = [],
  classNameWrapper = '',
  classNameContainer = '',
  classNameSelect = '',
  classNameOptionListItem = '',
  classNameOptionListWrapper = '',
  classNameOptionListContainer = '',
  classNameDropdownIconOptionListItem = '',
  customStyleWrapper = {},
  customStyleContainer = {},
  customStyleSelect = {},
  customStyleOptionListItem = {},
  customStyleOptionListContainer = {},
  customStyleDropdownIcon = {},
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
  const [internalValue, setInternalValue] = useState(String(value));
  const stateKeyword = useState(keyword);
  const prevKeyword = usePrevious(stateKeyword[0]);
  const prevInternalValue = usePrevious(internalValue);
  const prevOptionList = usePrevious(optionList);
  const [show, setShow] = useState(false);
  const prevShow = usePrevious(show);
  const [isTyping, setIsTyping] = useState(false);
  const initKeycodeList: number[] = [];
  const [keycodeList, setKeycodeList] = useState(initKeycodeList);
  const option = getDefaultValidationOption(validationOption);
  const asyncObj = getDefaultAsyncObj(asyncMsgObj);
  const $button = useRef(null);
  const $wrapper = useRef(null);
  const $itemsWrapper = useRef(null);
  const $searchInputWrapper = useRef(null);
  const $searchInput = useRef(null);
  const $elButton: { [key: string]: any } | null = $button;
  const $elWrapper: { [key: string]: any } | null = $wrapper;
  const $elItemsWrapper: { [key: string]: any } | null = $itemsWrapper;
  const $itemsRef: { [key: string]: any } = [];
  const filteredOptionList = useMemo(() => {
    let res = optionList;
    if (res.length) {
      if (stateKeyword[0]) {
        res = optionList.filter(i => i.name.toLowerCase().includes(stateKeyword[0].toLowerCase()));
      }
    }
    return res;
  }, [stateKeyword[0], optionList]);
  const handleOnSearch = useCallback((e: any) => {
    stateKeyword[1](e.target.value);
  }, []);
  const handleOnSearchKeyDown = useCallback(
    (e: any) => {
      const { keyCode } = e;
      const direction = getDirection(keyCode);
      if (selectKeyList.indexOf(keyCode) !== -1) {
        e.preventDefault();
        handleOnKeyDown(keyCode);
      } else if (keyCode === 32) {
        // space
        stateKeyword[1](`${stateKeyword[0]} `);
        e.preventDefault();
      }
      scroll(direction);
    },
    [filteredOptionList],
  );
  useEffect(() => {
    if (show && showSearch) {
      globalVariableCurrentFocus = 0;
      scroll('up');
      addActive();
    }
  }, [stateKeyword[0]]);
  const handleOnBlur = useCallback(
    (e: React.FocusEvent<HTMLElement> | Event) => {
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
  const handleOnChange = useCallback((item: object, e: React.MouseEvent<HTMLElement>) => {
    if (disabled) {
      return;
    }
    onChange && onChange(item, e);
  }, []);
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
      if (!isValidValue(optionList, internalValue) || internalValue === '' || internalValue === 'null' || internalValue === 'undefined') {
        handleCheckEnd(true, msg.empty(nameText));
        return;
      }
    }
    if (msgOnSuccess) {
      setSuccessMsg(msgOnSuccess);
    }
    handleCheckEnd(false, msgOnSuccess);
  }, [internalValue, option]);
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
  /* istanbul ignore next because of https://github.com/airbnb/enzyme/issues/441 && https://github.com/airbnb/enzyme/blob/master/docs/future.md */
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('mousedown', pageClick);
      window.addEventListener('touchstart', pageClick);
      return () => {
        window.removeEventListener('mousedown', pageClick);
        window.removeEventListener('touchstart', pageClick);
        $elWrapper.current && $elWrapper.current.removeEventListener('keydown', onKeyDown);
      };
    }
  }, []);
  /* istanbul ignore next because of https://github.com/airbnb/enzyme/issues/441 && https://github.com/airbnb/enzyme/blob/master/docs/future.md */
  const pageClick = useCallback((e: Event) => {
    if ($elWrapper.current.contains(e.target)) {
      return;
    }
    if (globalVariableIsFocusing) {
      handleOnBlur(e);
      globalVariableIsFocusing = false;
    }
    setShow(false);
  }, []);
  /* istanbul ignore next because of https://github.com/airbnb/enzyme/issues/441 && https://github.com/airbnb/enzyme/blob/master/docs/future.md */
  const resetCurrentFocus = useCallback(() => {
    globalVariableCurrentFocus = getIndex(filteredOptionList, internalValue);
    scroll();
  }, [internalValue]);
  /* istanbul ignore next because of https://github.com/airbnb/enzyme/issues/441 && https://github.com/airbnb/enzyme/blob/master/docs/future.md */
  const setTimeoutTyping = useCallback(() => {
    if (globalVariableTypingTimeout) {
      clearTimeout(globalVariableTypingTimeout);
    }
    globalVariableTypingTimeout = setTimeout(() => {
      setKeycodeList([]);
    }, 250);
  }, []);
  /* istanbul ignore next because of https://github.com/airbnb/enzyme/issues/441 && https://github.com/airbnb/enzyme/blob/master/docs/future.md */
  const scroll = useCallback((direction: undefined | string = undefined) => {
    if ($itemsWrapper && $itemsWrapper.current && $itemsWrapper.current.children) {
      const $children = $itemsWrapper.current.children;
      const containerHeight = $elItemsWrapper.current.offsetHeight;
      const containerScrollTop = $elItemsWrapper.current.scrollTop;
      if (!$children[globalVariableCurrentFocus]) {
        return;
      }
      const itemHeight = $children[globalVariableCurrentFocus].offsetHeight;
      if (direction) {
        if (direction === 'loop') {
          $elItemsWrapper.current.scrollTop = $children.length * itemHeight;
          return;
        }
        if (direction === 'down') {
          const bound = containerScrollTop + containerHeight;
          const heightItems = globalVariableCurrentFocus * itemHeight;
          const heightContainer = bound - itemHeight;
          if (heightItems >= heightContainer) {
            const offset = Math.abs(heightItems - heightContainer - itemHeight);
            if (offset >= 0 && !globalVariableIsCorrected) {
              $elItemsWrapper.current.scrollTop = containerScrollTop + itemHeight - offset;
              globalVariableIsCorrected = true;
            } else {
              $elItemsWrapper.current.scrollTop = containerScrollTop + itemHeight;
            }
          }
        }
        if (direction === 'up') {
          globalVariableIsCorrected = false;
          if (globalVariableCurrentFocus * itemHeight <= containerScrollTop) {
            $elItemsWrapper.current.scrollTop = globalVariableCurrentFocus * itemHeight;
          }
        }
      } else {
        globalVariableIsCorrected = false;
        $elItemsWrapper.current.scrollTop = globalVariableCurrentFocus * itemHeight;
      }
    }
  }, []);
  const handleOnItemClick = useCallback((item: object, e: React.MouseEvent<HTMLElement>) => {
    handleOnChange(item, e);
    stateKeyword[1]('');
  }, []);
  const handleOnItemMouseOver = useCallback((index: number) => {
    globalVariableCurrentFocus = index;
    addActive();
  }, []);
  const handleOnItemMouseMove = useCallback(() => {
    setIsTyping(false);
  }, []);
  const handleOnItemMouseOut = useCallback(() => {
    removeActive();
  }, []);
  const addActive = useCallback(() => {
    if ($itemsWrapper && $itemsWrapper.current && $itemsWrapper.current.children) {
      const $children = $itemsWrapper.current.children;
      removeActive();
      if (globalVariableCurrentFocus === null) return;
      if (globalVariableCurrentFocus >= $children.length) globalVariableCurrentFocus = 0;
      if (globalVariableCurrentFocus < 0) globalVariableCurrentFocus = $children.length - 1;
      if ($children[globalVariableCurrentFocus]) $children[globalVariableCurrentFocus].className += ` ${reactInputsValidationCss[`${TYPE}__hover-active`]}`;
    }
  }, []);
  const removeActive = useCallback(() => {
    if ($itemsWrapper && $itemsWrapper.current && $itemsWrapper.current.children) {
      const $children = $itemsWrapper.current.children;
      for (let i = 0; i < $children.length; i += 1) {
        $children[i].className = $children[i].className.replace(reactInputsValidationCss[`${TYPE}__hover-active`], '');
      }
    }
  }, []);
  const getDirection = useCallback(keyCode => {
    switch (keyCode) {
      case keyCodeUp:
        return 'up';
      case keyCodeDown:
        return 'down';
      default:
        return undefined;
    }
  }, []);
  const handleOnKeyDown = useCallback(
    keyCode => {
      if (keyCode === keyCodeEsc) {
        setShow(false);
        resetCurrentFocus();
        return;
      }
      if (keyCode === keyCodeDown) {
        globalVariableCurrentFocus += 1;
        if (globalVariableCurrentFocus > filteredOptionList.length - 1) {
          globalVariableCurrentFocus = 0;
          scroll('up');
        }
        addActive();
      } else if (keyCode === keyCodeUp) {
        globalVariableCurrentFocus -= 1;
        if (globalVariableCurrentFocus < 0) {
          globalVariableCurrentFocus = filteredOptionList.length - 1;
          scroll('loop');
        }
        addActive();
      } else if (keyCode === keyCodeEnter) {
        if (globalVariableCurrentFocus > -1) {
          if ($itemsWrapper && $itemsWrapper.current && $itemsWrapper.current.children) {
            const $children = $itemsWrapper.current.children;
            if ($children[globalVariableCurrentFocus]) {
              $children[globalVariableCurrentFocus].click();
            } else {
              return;
            }
          }
        }
      }
    },
    [filteredOptionList],
  );
  /* istanbul ignore next because of https://github.com/airbnb/enzyme/issues/441 && https://github.com/airbnb/enzyme/blob/master/docs/future.md */
  const onKeyDown = useCallback(
    (e: any) => {
      if (showSearch) {
        return;
      }
      setIsTyping(true);
      if (e.preventDefault) {
        e.preventDefault();
      }
      if (!show) {
        return;
      }
      globalVariableCurrentFocus = globalVariableCurrentFocus === null ? getIndex(filteredOptionList, String(value)) : globalVariableCurrentFocus;
      const { keyCode } = e;
      const direction = getDirection(keyCode);
      if (selectKeyList.indexOf(keyCode) !== -1) {
        handleOnKeyDown(keyCode);
      } else {
        setTimeoutTyping();
        const newkeyCodeList = [...keycodeList, keyCode];
        const str = String.fromCharCode(...newkeyCodeList).toLowerCase();
        let index = -1;
        filteredOptionList.forEach((i, k) => {
          const { name } = i;
          if (name.toLowerCase().startsWith(str)) {
            if (index === -1) {
              index = k;
            }
          }
        });
        if (index !== -1) {
          globalVariableCurrentFocus = index;
          addActive();
        }
        setKeycodeList(newkeyCodeList);
      }
      scroll(direction);
      return globalVariableCurrentFocus;
    },
    [show, value, keycodeList],
  );
  useEffect(() => {
    if (show && $elWrapper) {
      document.addEventListener('keydown', onKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [show, value, keycodeList]);
  useEffect(() => {
    if (validate) {
      check();
    }
  }, [validate]);
  useEffect(() => {
    if (!(!isValidValue(filteredOptionList, internalValue) || internalValue === '' || internalValue === 'null' || internalValue === 'undefined')) {
      setErr(false);
    } else {
      setSuccessMsg('');
    }
  }, [internalValue]);
  useEffect(() => {
    setInternalValue(String(value));
  }, [value]);
  useEffect(() => {
    if (prevOptionList && prevOptionList && !utils.arraysEqual(prevOptionList, optionList)) {
      setInternalValue(String(optionList[0].id));
    }
  }, [optionList]);
  useEffect(() => {
    if (typeof prevInternalValue !== 'undefined' && prevInternalValue !== internalValue) {
      check();
    }
  }, [prevInternalValue, internalValue]);
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
  useEffect(() => {
    if (show) {
      if (showSearch) {
        $searchInput.current.focus();
      }
      globalVariableCurrentFocus = globalVariableCurrentFocus === null ? getIndex(filteredOptionList, String(value)) : globalVariableCurrentFocus;
      $itemsRef[globalVariableCurrentFocus] && $itemsRef[globalVariableCurrentFocus].current.focus();
    }
    if (prevShow === true && show === false) {
      $elButton.current.focus();
    }
    resetCurrentFocus();
  }, [show]);
  const wrapperClass = `${WRAPPER_CLASS_IDENTITIFIER} ${classNameWrapper} ${reactInputsValidationCss[`${TYPE}__wrapper`]} ${err && reactInputsValidationCss['error']} ${
    successMsg !== '' && !err && reactInputsValidationCss['success']
  } ${disabled && reactInputsValidationCss['disabled']}`;
  const containerClass = `${CONTAINER_CLASS_IDENTITIFIER} ${classNameContainer} ${reactInputsValidationCss[`${TYPE}__container`]} ${err && reactInputsValidationCss['error']} ${
    show && reactInputsValidationCss['show']
  } ${successMsg !== '' && !err && reactInputsValidationCss['success']} ${disabled && reactInputsValidationCss['disabled']}`;
  const inputClass = `${reactInputsValidationCss[`${TYPE}__input`]} ${err && reactInputsValidationCss['error']} ${successMsg !== '' && !err && reactInputsValidationCss['success']} ${
    disabled && reactInputsValidationCss['disabled']
  }`;
  const selectClass = `${classNameSelect} ${reactInputsValidationCss['ellipsis']} ${err && reactInputsValidationCss['error']} ${successMsg !== '' && !err && reactInputsValidationCss['success']} ${
    disabled && reactInputsValidationCss['disabled']
  }`;
  const selectOptionListWrapperClass = `${classNameOptionListWrapper} ${reactInputsValidationCss[`${TYPE}__options-wrapper`]} ${err && reactInputsValidationCss['error']} ${
    show && reactInputsValidationCss['show']
  } ${successMsg !== '' && !err && reactInputsValidationCss['success']} ${disabled && reactInputsValidationCss['disabled']}`;
  const selectOptionListItemClass = `${reactInputsValidationCss[`button`]} ${!isTyping && reactInputsValidationCss[`${TYPE}__options-item-show-cursor`]} ${classNameOptionListItem} ${
    reactInputsValidationCss[`${TYPE}__options-item`]
  } ${err && reactInputsValidationCss['error']} ${successMsg !== '' && !err && reactInputsValidationCss['success']} ${disabled && reactInputsValidationCss['disabled']}`;
  const dropdownIconClass = `${classNameDropdownIconOptionListItem} ${reactInputsValidationCss[`${TYPE}__dropdown-icon`]} ${showArrow && reactInputsValidationCss['showArrow']}`;
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
  let optionListHtml;
  const item = getItem(optionList, String(value));
  if (filteredOptionList.length) {
    optionListHtml = filteredOptionList.map((i, k) => (
      <Option
        key={k}
        index={k}
        id={`react-inputs-validation__select_option-${i.id}`}
        className={String(i.id) === String(value) ? `${selectOptionListItemClass} ${reactInputsValidationCss['active']}` : `${selectOptionListItemClass}`}
        item={i}
        customStyleOptionListItem={customStyleOptionListItem}
        onClick={handleOnItemClick}
        onMouseOver={handleOnItemMouseOver}
        onMouseMove={handleOnItemMouseMove}
        onMouseOut={handleOnItemMouseOut}
      />
    ));
  } else {
    if (showSearch) {
      optionListHtml = (
        <div style={{ background: '#fff', textAlign: 'center', padding: '20px' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              fill="#cdcdcd"
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z"
            />
          </svg>
        </div>
      );
    }
  }
  const selectorHtml = (
    <div className={reactInputsValidationCss[`${TYPE}__dropdown`]}>
      <div className={`${reactInputsValidationCss[`${TYPE}__dropdown-name`]} ${reactInputsValidationCss['ellipsis']}`}>{item ? item.name : ''}</div>
      <div className={dropdownIconClass} />
    </div>
  );
  return (
    <button
      ref={$button}
      type="button"
      className={reactInputsValidationCss[`button`]}
      onClick={e => {
        handleOnClick(e);
        if (!disabled) {
          if ($searchInputWrapper.current) {
            if ($searchInputWrapper.current.contains(e.target)) {
              setShow(true);
              return;
            }
          }
          setShow(!show);
        }
      }}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
      {...attributesWrapper}
    >
      <div ref={$wrapper} className={wrapperClass} style={customStyleWrapper}>
        <div className={containerClass} style={customStyleContainer}>
          <input type="hidden" value={internalValue} className={inputClass} onChange={() => {}} {...attributesInput} />
          <div className={selectClass} style={customStyleSelect}>
            {selectorHtml}
          </div>
          <div className={selectOptionListWrapperClass}>
            {showSearch && (
              <div ref={$searchInputWrapper}>
                <div className={reactInputsValidationCss[`${TYPE}__searchInputWrapper`]}>
                  <svg className={reactInputsValidationCss[`${TYPE}__searchInputSearchIcon`]} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                    <path
                      fill="#cdcdcd"
                      d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                    />
                    <path d="M0 0h24v24H0z" fill="none" />
                  </svg>
                  <input className={reactInputsValidationCss[`${TYPE}__searchInput`]} ref={$searchInput} value={stateKeyword[0]} onChange={handleOnSearch} onKeyDown={handleOnSearchKeyDown} />
                  {stateKeyword[0] && (
                    <svg
                      className={reactInputsValidationCss[`${TYPE}__searchInputRemoveIcon`]}
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      onClick={() => {
                        stateKeyword[1]('');
                        $searchInput.current.focus();
                      }}
                    >
                      <path
                        fill="#cdcdcd"
                        d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
                      />
                      <path d="M0 0h24v24H0z" fill="none" />
                    </svg>
                  )}
                </div>
              </div>
            )}
            <div ref={$itemsWrapper} className={classNameOptionListContainer} style={customStyleOptionListContainer}>
              {optionListHtml}
            </div>
          </div>
        </div>
        {msgHtml}
      </div>
    </button>
  );
};
interface OptionProps {
  index?: number;
  id?: string;
  className?: string;
  item?: OptionListItem;
  customStyleOptionListItem?: React.CSSProperties;
  onClick?: (res: object, e: React.MouseEvent<HTMLElement>) => void;
  onMouseOver?: (res: number) => void;
  onMouseMove?: () => void;
  onMouseOut?: () => void;
}
export const Option: React.FC<OptionProps> = memo(
  ({ index = -1, id = '', className = '', item = { id: '', name: '' }, customStyleOptionListItem = {}, onClick = () => {}, onMouseOver = () => {}, onMouseMove = () => {}, onMouseOut = () => {} }) => {
    const handleOnClick = useCallback(
      (e: React.MouseEvent<HTMLElement>) => {
        onClick(item, e);
      },
      [item],
    );
    const handleOnMouseOver = useCallback(() => {
      onMouseOver(index);
    }, []);
    const handleOnMouseMove = useCallback(() => {
      onMouseMove();
    }, []);
    const handleOnMouseOut = useCallback(() => {
      onMouseOut();
    }, []);
    return (
      <a id={id} onMouseOver={handleOnMouseOver} onMouseMove={handleOnMouseMove} onMouseOut={handleOnMouseOut} className={className} style={customStyleOptionListItem} onClick={handleOnClick}>
        <span>{item.name}</span>
      </a>
    );
  },
);
export default memo(component);
