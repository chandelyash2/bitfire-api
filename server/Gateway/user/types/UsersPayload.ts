import { GraphQLList, GraphQLObjectType } from 'graphql'
import User from './User'
import ErrorType from './Error'

const UsersPayload = new GraphQLObjectType({
  name: 'UsersPayload',
  fields: () => ({
    user: {
      type: new GraphQLList(User),
    },
    error: {
      type: ErrorType,
    },
  }),
})
export default UsersPayload
