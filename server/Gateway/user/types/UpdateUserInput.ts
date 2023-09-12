import { GraphQLInputObjectType, GraphQLString } from 'graphql'
import { userRole } from './User'

const UpdateUserInput = new GraphQLInputObjectType({
  name: 'UpdateUserInput',
  fields: () => ({
    id: {
      type: GraphQLString,
    },
    userName: {
      type: GraphQLString,
    },

    name: {
      type: GraphQLString,
    },
    phone: {
      type: GraphQLString,
    },
    password: {
      type: GraphQLString,
    },
    role: {
      type: userRole,
    },
  }),
})
export default UpdateUserInput
