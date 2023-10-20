import { GraphQLID, GraphQLInputObjectType, GraphQLInt } from 'graphql'
const GetUsersInput = new GraphQLInputObjectType({
  name: 'UsersInput',
  fields: () => ({
    id: {
      type: GraphQLID,
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
