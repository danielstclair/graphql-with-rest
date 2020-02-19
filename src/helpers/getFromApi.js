const fetch = require('isomorphic-fetch');

const baseURL = 'http://localhost:3000';

const getFromApi = (route) => async (params = {}) => {
  return fetch(`${baseURL}${route}?${new URLSearchParams(params)}`)
    .then((res) => res.json())
    .catch((err) => {
      // eslint-disable-next-line
      console.error(err);
    });
};

module.exports = {
  getFromApi,
};
