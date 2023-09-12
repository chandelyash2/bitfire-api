import { ApolloServer } from '@apollo/server'
import securedSchema from './schema'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';

const initializeApolloServer = (httpServer) => {
  const enablePlayground = process.env.DEBUG === 'true'
  const server = new ApolloServer({
    schema: securedSchema,
    introspection: enablePlayground,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],

  })
  return server
}
export default initializeApolloServer
