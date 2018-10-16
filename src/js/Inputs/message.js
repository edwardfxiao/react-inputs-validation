import { REACT_INPUTS_VALIDATION_CUSTOM_ERROR_message_EXAMPLE } from './const';

const getEnglishName = name => (name = name ? name + ' ' : '');

const TEXT_BOX_VALIDATION_ZH_CN = {
  empty: name => `${name}不能为空`,
  invalid: name => `${name}格式有误`,
  invalidFormat: name => `${name}不是数字`,
  inBetween: name => min => max => `${name}必须在${min}-${max}之间`,
  lessThan: name => min => `${name}不可少于${min}`,
  greaterThan: name => max => `${name}不可大于${max}`,
  lengthEqual: name => length => `${name}长度必须为${length}`,
  twoInputsNotEqual: () => `两次输入不一致`
};

const TEXT_BOX_VALIDATION_EN_US = {
  empty: name => `${getEnglishName(name)}cannot be empty`,
  invalid: name => `${getEnglishName(name)}invalid format`,
  invalidFormat: name => `${getEnglishName(name)}is not a number`,
  inBetween: name => min => max => `${getEnglishName(name)}must be ${min}-${max}`,
  lessThan: name => min => `${getEnglishName(name)}cannot less than ${min}`,
  greaterThan: name => max => `${getEnglishName(name)}cannot greater than ${max}`,
  lengthEqual: name => length => `${getEnglishName(name)}length must be ${length}`,
  twoInputsNotEqual: () => `two inputs are not equal`
};

const TEXT_AREA_VALIDATION_ZH_CN = {
  empty: name => `${name}不能为空`,
  invalid: name => `${name}格式有误`,
  invalidFormat: name => `${name}不是数字`,
  inBetween: name => min => max => `${name}必须在${min}-${max}之间`,
  lessThan: name => min => `${name}不可少于${min}`,
  greaterThan: name => max => `${name}不可大于${max}`,
  lengthEqual: name => length => `${name}长度必须为${length}`,
  twoInputsNotEqual: () => `两次输入不一致`
};

const TEXT_AREA_VALIDATION_EN_US = {
  empty: name => `${getEnglishName(name)}cannot be empty`,
  invalid: name => `${getEnglishName(name)}invalid format`,
  invalidFormat: name => `${getEnglishName(name)}is not a number`,
  inBetween: name => min => max => `${getEnglishName(name)}must be ${min}-${max}`,
  lessThan: name => min => `${getEnglishName(name)}cannot less than ${min}`,
  greaterThan: name => max => `${getEnglishName(name)}cannot greater than ${max}`,
  lengthEqual: name => length => `${getEnglishName(name)}length must be ${length}`,
  twoInputsNotEqual: () => `two inputs are not equal`
};

const SELECT_VALIDATION_ZH_CN = {
  empty: name => `请选择一个${name}`
};

const SELECT_VALIDATION_EN_US = {
  empty: name => `Please select a ${getEnglishName(name)}`
};

const CHECK_BOX_VALIDATION_ZH_CN = {
  unchecked: name => `${name}必须勾选`
};

const CHECK_BOX_VALIDATION_EN_US = {
  unchecked: name => `${getEnglishName(name)}must be checked`
};

const RADIO_BOX_VALIDATION_ZH_CN = {
  empty: name => `必须勾选一个${name}`
};

const RADIO_BOX_VALIDATION_EN_US = {
  empty: name => `Please choose one ${getEnglishName(name)}`
};

let message = {
  'zh-CN': {
    textbox: TEXT_BOX_VALIDATION_ZH_CN,
    radiobox: RADIO_BOX_VALIDATION_ZH_CN,
    checkbox: CHECK_BOX_VALIDATION_ZH_CN,
    select: SELECT_VALIDATION_ZH_CN,
    textarea: TEXT_AREA_VALIDATION_ZH_CN
  },
  'en-US': {
    textbox: TEXT_BOX_VALIDATION_EN_US,
    radiobox: RADIO_BOX_VALIDATION_EN_US,
    checkbox: CHECK_BOX_VALIDATION_EN_US,
    select: SELECT_VALIDATION_EN_US,
    textarea: TEXT_AREA_VALIDATION_EN_US
  }
};

const getCustomErrorMessage = (o, m) => {
  if (!o || typeof o !== 'object' || o.constructor !== Object || !Object.keys(o).length) {
    console.error(REACT_INPUTS_VALIDATION_CUSTOM_ERROR_message_EXAMPLE);
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

const handleCustomErrorMessage = (message, w) => {
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

message = handleCustomErrorMessage(message, window);

export default message;
