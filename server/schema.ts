import { GraphQLObjectType, GraphQLSchema } from 'graphql'
import {
  userMutation,
  userPermission,
  userQuery,
} from '@server/Gateway/user/schema'
import { shield } from 'graphql-shield'
import { applyMiddleware } from 'graphql-middleware'

const query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    ...userQuery,
    // ...adminQuery,
  },
})
const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    ...userMutation,
    // ...adminMutation,
  },
})
const permissions = shield(
  {
    Query: {
      ...userPermission.Query,
      // ...adminPermisiion.Query,
    },
    Mutation: {
      ...userPermission.Mutation,
      // ...adminPermisiion.Mutation,
    },
  },
  {
    allowExternalErrors: true,
  },
)
export const schema = new GraphQLSchema({
  query,
  mutation,
})
export default applyMiddleware(schema, permissions)
