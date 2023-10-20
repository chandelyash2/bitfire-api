import adminFind from '@server/Database/operation/admin/adminFind'
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
import creditDistributedByAgentResolver from '../resolver/creditDistributedByAgentResolver'
import { GraphQLDate } from 'graphql-scalars'

export const adminRole = new GraphQLEnumType({
  name: 'AdminRole',
  values: {
    admin: {
      value: 'admin',
    },
    superadmin: {
      value: 'superadmin',
    },
  },
})
const Admin = new GraphQLObjectType({
  name: 'Admin',
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    parentId: {
      type: GraphQLID,
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
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
    role: {
      type: adminRole,
    },
    status: {
      type: GraphQLString,
    },
    creditLimit: {
      type: GraphQLInt,
    },
    availableCredit: {
      type: GraphQLInt,
    },
    creditGivenToAgent: {
      type: GraphQLInt,
      resolve: async (src) => {
        const users = await adminFind({ parentId: src._id })
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
    createdAt: {
      type: GraphQLDate,
    },
    loginStep: {
      type: GraphQLBoolean,
    },
  }),
})
export default Admin
