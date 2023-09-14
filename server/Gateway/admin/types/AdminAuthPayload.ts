import { GraphQLObjectType, GraphQLString } from 'graphql'
import Admin from './Admin'
import ErrorType from '@server/Gateway/user/types/Error'

const AdminAuthPayload = new GraphQLObjectType({
  name: 'AdminAuthPayload',
  fields: () => ({
    admin: {
      type: Admin,
    },
    token: {
      type: GraphQLString,
    },
    error: {
      type: ErrorType,
    },
  }),
})
export default AdminAuthPayload
