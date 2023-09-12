import { GraphQLObjectType, GraphQLString } from 'graphql'
import User from './User'
import ErrorType from './Error'


const AuthPayload = new GraphQLObjectType({
  name: 'AuthPayload',
  fields: () => ({
    user: {
      type: User,
    },
    token: {
      type: GraphQLString,
    },
    error: {
      type: ErrorType,
    },
  }),
})
export default AuthPayload
