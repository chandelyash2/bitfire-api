import { GraphQLObjectType, GraphQLString } from 'graphql'
import ErrorType from '@server/Gateway/user/types/Error'
import SuperAdmin from './SuperAdmin'

const SuperAdminPayload = new GraphQLObjectType({
  name: 'SuperAdminPayload',
  fields: () => ({
    superAdmin: {
      type: SuperAdmin,
    },
    token: {
      type: GraphQLString,
    },
    error: {
      type: ErrorType,
    },
  }),
})
export default SuperAdminPayload
