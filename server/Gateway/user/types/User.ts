import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql'
import { GraphQLDate } from 'graphql-scalars'

const User = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    userName: {
      type: new GraphQLNonNull(GraphQLString),
    },
    phone: {
      type: GraphQLString,
    },
    password: {
      type: GraphQLString,
    },
    status: {
      type: GraphQLString,
    },
    role: {
      type: GraphQLString,
    },
    availableCredit: {
      type: GraphQLInt,
    },
    creditLimit: {
      type: GraphQLInt,
    },
    transferStatus: {
      type: GraphQLBoolean,
    },
    bettingStatus: {
      type: GraphQLBoolean,
    },
    loginStep: {
      type: GraphQLBoolean,
    },
    createdAt: {
      type: GraphQLDate,
    },
  }),
})
export default User
