import { GraphQLInputObjectType, GraphQLString } from 'graphql'

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
  }),
})
export default UpdateUserInput
