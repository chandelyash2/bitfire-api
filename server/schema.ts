import { adminQuery } from './Gateway/admin/schema';
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
    ...adminQuery
  },
})
const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    ...userMutation,
  },
})
const permissions = shield(
  {
    Query: {
      ...userPermission.Query,
    },
    Mutation: {
      ...userPermission.Mutation,
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
