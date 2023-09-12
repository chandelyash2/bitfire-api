import { GraphQLObjectType } from 'graphql'
import User from './User'
import ErrorType from './Error'

const UserPayload = new GraphQLObjectType({
  name: 'UserPayload',
  fields: () => ({
    user: {
      type: User,
    },
    error: {
      type: ErrorType,
    },
  }),
})
export default UserPayload
