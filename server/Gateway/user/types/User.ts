import userFind from '@server/Database/operation/user/userFind'
import {
  GraphQLBoolean,
  GraphQLEnumType,
  GraphQLID,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql'
import { GraphQLDate } from 'graphql-scalars'
import creditDistributedByAgentResolver from '../resolver/creditDistributedByAgentResolver'

export const userRole = new GraphQLEnumType({
  name: 'UserRole',
  values: {
    ADMIN: {
      value: 'ADMIN',
    },
    SUPERADMIN: {
      value: 'SUPERADMIN',
    },
    USER: {
      value: 'USER',
    },
  },
})
const User = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    userName: {
      type: new GraphQLNonNull(GraphQLString),
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
    creditGivenToAgent: {
      type: GraphQLInt,
      resolve: async (src) => {
        const users = await userFind({ parentId: src._id })
        const totalCredit = users.reduce((prev, curr) => {
          return prev + curr.creditLimit
        }, 0)
        return totalCredit
      },
    },
    creditDistributedByAgent: {
      type: GraphQLInt,
      resolve: creditDistributedByAgentResolver,
    },
    creditGivenToUser: {
      type: GraphQLInt,
      resolve: async (src) => {
        const users = await userFind({ parentId: src._id })
        const totalCredit = users.reduce((prev, curr) => {
          return prev + curr.creditLimit
        }, 0)
        return totalCredit
      },
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
