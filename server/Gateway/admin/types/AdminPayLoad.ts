import { GraphQLObjectType } from 'graphql'
import Admin from './Admin'
import ErrorType from '@server/Gateway/user/types/Error'

const AdminPayload = new GraphQLObjectType({
  name: 'AdminPayload',
  fields: () => ({
    admin: {
      type: Admin,
    },
    error: {
      type: ErrorType,
    },
  }),
})
export default AdminPayload
