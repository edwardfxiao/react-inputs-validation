const camelize = str => {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
    if (+match === 0) return ''; // or if (/\s+/.test(match)) for white spaces
    return index == 0 ? match.toLowerCase() : match.toUpperCase();
  });
};

const toCamelCase = str => (capitalLize = false) => {
  let res = camelize(str);
  return capitalLize
    ? res.substr(0, 1).toUpperCase() + res.substr(1, res.length)
    : res;
};

export { toCamelCase, camelize };
