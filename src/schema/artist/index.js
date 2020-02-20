const {
  getBands,
  getArtists,
  getBandMembers,
  getInstruments,
  getArtistInstruments,
} = require('../../helpers/getFromApi');

const resolvers = {
  Query: {
    artists(_, { input }) {
      return getArtists(input);
    },
  },
  Artist: {
    async bands(parent) {
      const bandIds = await getBandMembers({ artistId: parent.id }).then((res) =>
        res.map(({ bandId }) => ({ id: bandId })),
      );
      const bands = await getBands(bandIds);
      return bands;
    },
    async instruments(parent) {
      const instrumentIds = await getArtistInstruments({ artistId: parent.id }).then((res) =>
        res.map((i) => ({ id: i.instrumentId })),
      );
      return getInstruments(instrumentIds);
    },
  },
};

module.exports = { resolvers };
