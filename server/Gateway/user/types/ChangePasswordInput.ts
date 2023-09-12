import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from 'graphql'
const ChangePasswordInput = new GraphQLInputObjectType({
  name: 'ChangePasswordInput',
  fields: () => ({
    oldPassword: {
      type: new GraphQLNonNull(GraphQLString),
    },

    newPassword: {
      type: new GraphQLNonNull(GraphQLString),
    },
  }),
})
export default ChangePasswordInput
