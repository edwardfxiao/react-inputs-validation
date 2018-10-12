const empty = v => (v.replace(/\s/g, '').length ? false : true);
const number = (v, min = 0, max = 999999999999) => {
  if (!isNumeric(v)) {
    return false;
  }
  return v < parseInt(min) || v > parseInt(max) ? false : true;
};
const reg = (reg, v) => {
  let err = true;
  if (reg.test(v)) {
    err = false;
  }
  return err;
};
const isNumeric = v => {
  return !isNaN(parseFloat(v)) && isFinite(v);
};
export default {
  reg,
  empty,
  number
};
