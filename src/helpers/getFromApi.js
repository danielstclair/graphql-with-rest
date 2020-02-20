const fetch = require('isomorphic-fetch');

const { getSearchParams } = require('./getSearchParams');
const baseURL = 'http://localhost:3000';

const getFromApi = (route) => async (params = {}) => {
  const searchParams = getSearchParams(params);
  return fetch(`${baseURL}${route}?${searchParams}`)
    .then((res) => res.json())
    .catch((err) => {
      // eslint-disable-next-line
      console.error(err);
    });
};

module.exports = {
  getFromApi,
};
