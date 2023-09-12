import { GraphQLInputObjectType, GraphQLInt, GraphQLNonNull, GraphQLString } from 'graphql'
import { userRole } from './User'
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
    role: {
      type: new GraphQLNonNull(userRole),
    },
    creditLimit: {
      type: new GraphQLNonNull(GraphQLInt),
    },
  }),
})
export default SignupInputType
