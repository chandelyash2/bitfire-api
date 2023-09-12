import { GraphQLInputObjectType, GraphQLInt, GraphQLNonNull } from 'graphql'
import { userRole } from './User'
const GetUsersInput = new GraphQLInputObjectType({
  name: 'UsersInput',
  fields: () => ({
    filter: {
      type: new GraphQLNonNull(userRole),
    },

    limit: {
      type: GraphQLInt,
    },
    offset: {
      type: GraphQLInt,
    },
  }),
})
export default GetUsersInput
