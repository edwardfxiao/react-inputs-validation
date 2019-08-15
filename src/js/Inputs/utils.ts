const camelize = (str: string) => {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => {
    if (+match === 0) return '';
    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  });
};

const toCamelCase = (str: string) => (capitalLize: boolean = false) => {
  const res = camelize(str);
  return capitalLize ? res.substr(0, 1).toUpperCase() + res.substr(1, res.length) : res;
};

interface Utils {
  [key: string]: Function;
}

const getRandomId = () => {
  return Math.random()
    .toString(36)
    .slice(-8);
};

const getAlphanumeric = (v: string) => {
  let res = '';
  String(v)
    .split('')
    .forEach(i => {
      const charCode = i.toLowerCase().charCodeAt(0);
      if ((charCode >= 48 && charCode <= 57) || (charCode >= 97 && charCode <= 122)) {
        res += i;
      }
    });
  return res;
};

const getAlpha = (v: string) => {
  let res = '';
  String(v)
    .split('')
    .forEach(i => {
      const charCode = i.toLowerCase().charCodeAt(0);
      if (charCode >= 97 && charCode <= 122) {
        res += i;
      }
    });
  return res;
};

const getNumeric = (v: string) => {
  let res = '';
  String(v)
    .split('')
    .forEach(i => {
      const charCode = i.toLowerCase().charCodeAt(0);
      if (charCode >= 48 && charCode <= 57) {
        res += i;
      }
    });
  return res;
};

const utils: Utils = {
  camelize,
  toCamelCase,
  getRandomId,
  getAlphanumeric,
  getAlpha,
  getNumeric,
};
export default utils;
