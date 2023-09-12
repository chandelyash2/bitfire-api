import { GraphQLInputObjectType, GraphQLInt, GraphQLNonNull } from 'graphql'
import { adminRole } from './Admin'
const GetAdminInput = new GraphQLInputObjectType({
  name: 'GetAdminInput',
  fields: () => ({
    filter: {
      type: new GraphQLNonNull(adminRole),
    },

    limit: {
      type: GraphQLInt,
    },
    offset: {
      type: GraphQLInt,
    },
  }),
})
export default GetAdminInput
