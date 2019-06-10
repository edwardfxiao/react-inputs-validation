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

const utils: Utils = {
  camelize,
  toCamelCase,
};
export default utils;
