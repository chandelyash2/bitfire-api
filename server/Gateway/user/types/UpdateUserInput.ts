import {
  GraphQLBoolean,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLString,
} from 'graphql'

const UpdateUserInput = new GraphQLInputObjectType({
  name: 'UpdateUserInput',
  fields: () => ({
    id: {
      type: GraphQLString,
    },
    userName: {
      type: GraphQLString,
    },
    password: {
      type: GraphQLString,
    },
    status: {
      type: GraphQLString,
    },
    creditLimit: {
      type: GraphQLInt,
    },
    bettingStatus: {
      type: GraphQLBoolean,
    },
    transferStatus: {
      type: GraphQLBoolean,
    },
  }),
})
export default UpdateUserInput
