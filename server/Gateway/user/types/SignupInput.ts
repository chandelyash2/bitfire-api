import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from 'graphql'

const SignupInputType = new GraphQLInputObjectType({
  name: 'SignUpInput',
  fields: () => ({
    userName: {
      type: new GraphQLNonNull(GraphQLString),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    phone: {
      type: GraphQLString,
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
    },
  }),
})
export default SignupInputType
