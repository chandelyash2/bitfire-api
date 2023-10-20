import {
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql'

const SignupInputType = new GraphQLInputObjectType({
  name: 'SignUpInput',
  fields: () => ({
    userName: {
      type: new GraphQLNonNull(GraphQLString),
    },
    phone: {
      type: GraphQLString,
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
    },
    creditLimit: {
      type: new GraphQLNonNull(GraphQLInt),
    },
  }),
})
export default SignupInputType
