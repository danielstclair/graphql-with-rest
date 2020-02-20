const getSearchParams = (params) => {
  if (Array.isArray(params)) {
    return params.reduce((prev, curr) => {
      const newParam = new URLSearchParams(curr);
      return `${prev}${newParam}&`;
    }, '');
  }
  return new URLSearchParams(params);
};

module.exports = { getSearchParams };
