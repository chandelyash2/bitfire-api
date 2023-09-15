import { GraphQLInputObjectType, GraphQLInt, GraphQLNonNull, GraphQLString } from 'graphql'

const AdminAuthInput = new GraphQLInputObjectType({
  name: 'AdminAuthInput',
  fields: () => ({
    userName: {
      type: new GraphQLNonNull(GraphQLString),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
    },
    creditLimit: {
      type: new GraphQLNonNull(GraphQLInt),
    },
  }),
})
export default AdminAuthInput
