import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql'
import { userRole } from './User'
import userFind from '@server/Database/operation/user/userFind'

const Admin = new GraphQLObjectType({
  name: 'Admin',
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLID),
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
      type: new GraphQLNonNull(userRole),
    },
    status: {
      type: GraphQLBoolean,
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
        const users = await userFind({ parentId: src._id })
        const totalCredit = users.reduce((prev, curr) => {
          return prev + curr.creditLimit
        }, 0)
        return totalCredit
      },
    },
    creditDistributedByAgent: {
      type: GraphQLInt,
    },
  }),
})
export default Admin
