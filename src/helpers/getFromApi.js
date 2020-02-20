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

const getBands = getFromApi('/bands');
const getArtists = getFromApi('/artists');
const getBandMembers = getFromApi('/bandMembers');
const getAlbums = getFromApi('/albums');
const getGenres = getFromApi('/genres');
const getInstruments = getFromApi('/instruments');
const getArtistInstruments = getFromApi('/artistInstruments');

module.exports = {
  getFromApi,
  getBands,
  getAlbums,
  getBandMembers,
  getArtists,
  getGenres,
  getInstruments,
  getArtistInstruments,
};
