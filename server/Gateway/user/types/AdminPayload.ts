import { GraphQLObjectType } from 'graphql'
import ErrorType from './Error'
import Admin from './Admin'

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
