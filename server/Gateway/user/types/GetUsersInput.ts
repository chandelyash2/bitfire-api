import { GraphQLInputObjectType, GraphQLInt } from 'graphql'
const GetUsersInput = new GraphQLInputObjectType({
  name: 'UsersInput',
  fields: () => ({
    limit: {
      type: GraphQLInt,
    },
    offset: {
      type: GraphQLInt,
    },
  }),
})
export default GetUsersInput
