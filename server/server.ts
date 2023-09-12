import './init-aliases'
import express from 'express'
import initializeApolloServer from './initGraphQLServer'
import cors from 'cors'
import { json } from 'body-parser'
import { expressMiddleware } from '@apollo/server/express4'
import { config } from 'dotenv'
import initiateMongoServer from './Database'
import { ResolverContext } from './Gateway/types'
import http from 'http'
import { parseJwt } from './Services/authJwt'
const app: express.Application = express()

const PORT = 8080
const context = async ({ req, res }): Promise<ResolverContext> => {
  parseJwt(req)
  return {
    req,
    res,
    user: req.user,
  }
  // return token
}

const init = async () => {
  const httpServer = http.createServer(app)

  config()
  app.listen(PORT, async () => {
    await initiateMongoServer()
    const apolloServer = initializeApolloServer(httpServer)
    await apolloServer.start()
    app.use(
      '/graphql',
      cors<cors.CorsRequest>(),
      json(),
      expressMiddleware(apolloServer, {
        context,
      }),
    )
    console.log(
      `🚀 Query endpoint ready at http://localhost:${PORT}/graphql \n`,
    )
  })
}
init()
