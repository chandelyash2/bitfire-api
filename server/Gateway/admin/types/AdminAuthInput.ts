import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from 'graphql'

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
      type: new GraphQLNonNull(GraphQLString),
    },
  }),
})
export default AdminAuthInput
