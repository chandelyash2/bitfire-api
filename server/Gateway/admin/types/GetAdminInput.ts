import { GraphQLInputObjectType, GraphQLInt } from 'graphql'
const GetAdminInput = new GraphQLInputObjectType({
  name: 'GetAdminInput',
  fields: () => ({
    limit: {
      type: GraphQLInt,
    },
    offset: {
      type: GraphQLInt,
    },
  }),
})
export default GetAdminInput
