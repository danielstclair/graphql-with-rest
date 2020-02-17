const merge = require('lodash.merge');
const { importSchema } = require('graphql-import');

const schema = importSchema(`${__dirname}/schema.graphql`);

const { resolvers: baseResolvers } = require('./base');
const resolvers = merge({}, baseResolvers);

module.exports = {
  typeDefs: [schema],
  resolvers,
};
