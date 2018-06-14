const { GraphQLServer } = require('graphql-yoga')
const Query = require('./resolvers/Query')

const typeDefs = `
type Query {
  categories: [String!]!
  joke(category: String): String!
}
`

const resolvers = {
  Query
}

const server = new GraphQLServer({
  typeDefs,
  resolvers,
})

server.start(() => console.log('Server is running on http://localhost:4000'))