const { getAlbums, getGenres } = require('../../helpers/getFromApi');

const resolvers = {
  Query: {
    albums() {
      return getAlbums();
    },
  },
  Album: {
    async genre(parent) {
      return getGenres({ id: parent.genreId }).then((res) => {
        return res[0].name;
      });
    },
  },
};

module.exports = { resolvers };
