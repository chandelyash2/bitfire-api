import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from 'graphql'

const SuperAdminSignupInput = new GraphQLInputObjectType({
  name: 'SuperAdminSignupInput',
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
export default SuperAdminSignupInput
