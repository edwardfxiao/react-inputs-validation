const empty = (v: string) => (v.replace(/\s/g, '').length ? false : true);
const number = (v: number, min: any, max: any) => {
  if (min === null && max === null){
    return true
  }
  if (!isNumeric(v)) {
    return false;
  }
  return v < min || v > max ? false : true;
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

interface Validator {
  [key: string]: Function;
}

const validator: Validator = {
  reg,
  empty,
  number,
};
export default validator;
