import validator from 'validator';

const email = value => validator.isEmail(value);

const phone = (value, locale = 'zh-CN') =>
  validator.isMobilePhone(value, locale);

const empty = value => validator.isEmpty(value);

const number = (value, min = 0, max = 999999999999) => {
  let res = validator.isInt(value, {
    min: parseInt(min),
    max: parseInt(max)
  });
  return res;
};

const url = value => validator.isURL(value);

const string = (value, min = 0, max = 999999999999) =>
  validator.isByteLength(value, {
    min: parseInt(min),
    max: parseInt(max)
  });

const password = string;

const textarea = (value, min = 0, max = 999999999999) =>
  validator.isByteLength(value, {
    min: parseInt(min),
    max: parseInt(max)
  });

const reg = (reg, val) => {
  let err = true;
  if (reg.test(val)) {
    err = false;
  }
  return err;
};

export default {
  reg,
  email,
  phone,
  password,
  empty,
  url,
  string,
  number,
  textarea
};
