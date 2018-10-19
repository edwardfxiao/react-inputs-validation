const empty = (v: string) => (v.replace(/\s/g, '').length ? false : true);
const number = (v: number, min: number = 0, max: number = 999999999999) => {
  if (!isNumeric(v)) {
    return false;
  }
  return v < parseInt(min) || v > parseInt(max) ? false : true;
};
// TODO: find a better type for regex
const reg = (reg: any, v: string) => {
  let err = true;
  if (reg.test(v)) {
    err = false;
  }
  return err;
};
const isNumeric = (v: any) => {
  return !isNaN(parseFloat(v)) && isFinite(v);
};
export default {
  reg,
  empty,
  number,
};
