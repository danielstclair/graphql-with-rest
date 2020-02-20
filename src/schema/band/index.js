const { getBands, getArtists, getBandMembers, getAlbums } = require('../../helpers/getFromApi');

const resolvers = {
  Query: {
    bands(_, { input }) {
      return getBands(input);
    },
  },
  Band: {
    async members(parent) {
      const artistIds = await getBandMembers({ bandId: parent.id }).then((res) =>
        res.map(({ artistId }) => ({ id: artistId })),
      );
      return getArtists(artistIds);
    },
    async albums(parent) {
      return getAlbums({ bandId: parent.id });
    },
  },
};

module.exports = { resolvers };
