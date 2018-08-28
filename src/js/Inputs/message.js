import { REACT_INPUTS_VALIDATION_CUSTOM_ERROR_MESSAGE_EXAMPLE } from './const';

const getEnglishName = name => (name = name ? name + ' ' : '');

const TEXT_BOX_VALIDATION_ZH_CN = {
  empty: name => `${name}不能为空`,
  invalid: name => `${name}格式有误`,
  invalidFormat: name => `${name} 不是数字`,
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

const message = {
  'zh-CN': {
    textbox: TEXT_BOX_VALIDATION_ZH_CN,
    radiobox: RADIO_BOX_VALIDATION_ZH_CN,
    checkbox: CHECK_BOX_VALIDATION_ZH_CN,
    select: SELECT_VALIDATION_ZH_CN,
    textarea: TEXT_BOX_VALIDATION_ZH_CN
  },
  'en-US': {
    textbox: TEXT_BOX_VALIDATION_EN_US,
    radiobox: RADIO_BOX_VALIDATION_EN_US,
    checkbox: CHECK_BOX_VALIDATION_EN_US,
    select: SELECT_VALIDATION_EN_US,
    textarea: TEXT_BOX_VALIDATION_EN_US
  }
};

if (window.REACT_INPUTS_VALIDATION && window.REACT_INPUTS_VALIDATION['customErrorMessage']) {
  if (
    window.REACT_INPUTS_VALIDATION['customErrorMessage'] &&
    typeof window.REACT_INPUTS_VALIDATION['customErrorMessage'] === 'object' &&
    window.REACT_INPUTS_VALIDATION['customErrorMessage'].constructor === Object &&
    Object.keys(window.REACT_INPUTS_VALIDATION['customErrorMessage']).length > 0
  ) {
    Object.keys(window.REACT_INPUTS_VALIDATION['customErrorMessage']).map(i => {
      if (!message[i]) {
        message[i] = window.REACT_INPUTS_VALIDATION['customErrorMessage'][i];
      } else {
        if (Object.keys(window.REACT_INPUTS_VALIDATION['customErrorMessage'][i]).length > 0) {
          Object.keys(window.REACT_INPUTS_VALIDATION['customErrorMessage'][i]).map(j => {
            Object.keys(window.REACT_INPUTS_VALIDATION['customErrorMessage'][i][j]).map(k => {
              message[i][j][k] = window.REACT_INPUTS_VALIDATION['customErrorMessage'][i][j][k];
            });
          });
        }
      }
    });
  } else {
    console.error(REACT_INPUTS_VALIDATION_CUSTOM_ERROR_MESSAGE_EXAMPLE);
  }
}

export default message;
