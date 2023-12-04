import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from 'graphql'
const ChangePasswordInput = new GraphQLInputObjectType({
  name: 'ChangePasswordInput',
  fields: () => ({
    newPassword: {
      type: new GraphQLNonNull(GraphQLString),
    },
  }),
})
export default ChangePasswordInput
