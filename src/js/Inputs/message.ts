import { REACT_INPUTS_VALIDATION_CUSTOM_ERROR_MESSAGE_EXAMPLE } from './const';

const getEnglishName = (name: string) => {
  let res = '';
  if (name) {
    res = `${name} `;
  }
  return res;
};

const TEXT_BOX_VALIDATION_EN_US = {
  empty: (name: string) => `${getEnglishName(name)}cannot be empty`,
  invalid: (name: string) => `${getEnglishName(name)}invalid format`,
  invalidFormat: (name: string) => `${getEnglishName(name)}is not a number`,
  inBetween: (name: string) => (min: number) => (max: number) => `${getEnglishName(name)}must be ${min}-${max}`,
  lessThan: (name: string) => (min: number) => `${getEnglishName(name)}cannot less than ${min}`,
  greaterThan: (name: string) => (max: number) => `${getEnglishName(name)}cannot greater than ${max}`,
  lengthEqual: (name: string) => (length: number) => `${getEnglishName(name)}length must be ${length}`,
  twoInputsNotEqual: () => `two inputs are not equal`,
};

const TEXT_AREA_VALIDATION_EN_US = {
  empty: (name: string) => `${getEnglishName(name)}cannot be empty`,
  invalid: (name: string) => `${getEnglishName(name)}invalid format`,
  invalidFormat: (name: string) => `${getEnglishName(name)}is not a number`,
  inBetween: (name: string) => (min: number) => (max: number) => `${getEnglishName(name)}must be ${min}-${max}`,
  lessThan: (name: string) => (min: number) => `${getEnglishName(name)}cannot less than ${min}`,
  greaterThan: (name: string) => (max: number) => `${getEnglishName(name)}cannot greater than ${max}`,
  lengthEqual: (name: string) => (length: number) => `${getEnglishName(name)}length must be ${length}`,
  twoInputsNotEqual: () => `two inputs are not equal`,
};

const SELECT_VALIDATION_EN_US = {
  empty: (name: string) => `Please select a ${getEnglishName(name)}`,
};

const CHECK_BOX_VALIDATION_EN_US = {
  unchecked: (name: string) => `${getEnglishName(name)}must be checked`,
};

const RADIO_BOX_VALIDATION_EN_US = {
  empty: (name: string) => `Please choose one ${getEnglishName(name)}`,
};

interface Message {
  [key: string]: Key;
}

interface Key {
  [key: string]: Func;
}

interface Func {
  [key: string]: Function;
}

let message: Message = {
  'en-US': {
    textbox: TEXT_BOX_VALIDATION_EN_US,
    radiobox: RADIO_BOX_VALIDATION_EN_US,
    checkbox: CHECK_BOX_VALIDATION_EN_US,
    select: SELECT_VALIDATION_EN_US,
    textarea: TEXT_AREA_VALIDATION_EN_US,
  },
};

// TODO: find a rewire way to handle non-export function
export const getCustomErrorMessage = (o: any, m: any) => {
  if (!o || typeof o !== 'object' || o.constructor !== Object || !Object.keys(o).length) {
    console.error(REACT_INPUTS_VALIDATION_CUSTOM_ERROR_MESSAGE_EXAMPLE);
    return false;
  }
  Object.keys(o).map(i => {
    if (!m[i]) {
      m[i] = o[i];
    } else {
      if (Object.keys(o[i]).length) {
        Object.keys(o[i]).map(j => {
          if (Object.keys(o[i][j]).length) {
            Object.keys(o[i][j]).map(k => {
              m[i][j][k] = o[i][j][k];
            });
          }
        });
      }
    }
  });
  return m;
};

declare global {
  interface Window {
    REACT_INPUTS_VALIDATION: any;
  }
}

// TODO: find a rewire way to handle non-export function
export const handleCustomErrorMessage = (message: any, w: Window) => {
  let res;
  if (typeof w !== 'undefined') {
    if (w.REACT_INPUTS_VALIDATION && w.REACT_INPUTS_VALIDATION['customErrorMessage']) {
      res = getCustomErrorMessage(w.REACT_INPUTS_VALIDATION['customErrorMessage'], message);
    }
  }
  if (typeof res === 'undefined' || res === false) {
    return message;
  }
  return res;
};

/* istanbul ignore else */
if (typeof window !== 'undefined') {
  window.REACT_INPUTS_VALIDATION = window.REACT_INPUTS_VALIDATION || {};
  message = handleCustomErrorMessage(message, window);
}

export default message;
