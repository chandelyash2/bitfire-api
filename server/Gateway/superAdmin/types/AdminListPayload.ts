import { GraphQLList, GraphQLObjectType } from 'graphql'
import Admin from '../../admin/types/Admin'
import ErrorType from '@server/Gateway/user/types/Error'

const AdminListPayload = new GraphQLObjectType({
  name: 'AdminListPayload',
  fields: () => ({
    admin: {
      type: new GraphQLList(Admin),
    },
    error: {
      type: ErrorType,
    },
  }),
})
export default AdminListPayload
