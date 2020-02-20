const merge = require('lodash.merge');
const { importSchema } = require('graphql-import');

const { resolvers: bandResolvers } = require('./band');
const { resolvers: artistResolvers } = require('./artist');
const { resolvers: albumResolvers } = require('./album');
const schema = importSchema(`${__dirname}/schema.graphql`);

const resolvers = merge(
  {},
  {
    BaseType: {
      __resolveType(obj) {
        return obj.typename;
      },
    },
  },
  bandResolvers,
  artistResolvers,
  albumResolvers,
);

module.exports = {
  typeDefs: [schema],
  resolvers,
};
