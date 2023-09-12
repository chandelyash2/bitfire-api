import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from 'graphql'
const AuthInput = new GraphQLInputObjectType({
  name: 'AuthInput',
  fields: () => ({
    userName: {
      type: new GraphQLNonNull(GraphQLString),
    },

    password: {
      type: new GraphQLNonNull(GraphQLString),
    },
  }),
})
export default AuthInput
