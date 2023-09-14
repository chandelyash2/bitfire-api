import { GraphQLInputObjectType, GraphQLInt } from 'graphql'

const AdminListInput = new GraphQLInputObjectType({
  name: 'AdminListInput',
  fields: () => ({
    limit: {
      type: GraphQLInt,
    },
    offset: {
      type: GraphQLInt,
    },
  }),
})
export default AdminListInput
